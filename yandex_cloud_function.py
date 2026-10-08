"""
Yandex Cloud Function — GlassLoft History Sync Service
------------------------------------------------------
Этот скрипт разворачивается в Yandex Cloud Functions (Python 3.11/3.12).
Он принимает запросы от калькулятора GlassLoft и сохраняет/возвращает
единую историю расчётов в Yandex Object Storage (S3-бакет) или YDB.

Инструкция по установке за 2 минуты:
1. Зайдите в консоль Яндекс Облака: https://console.cloud.yandex.ru/
2. Перейдите в раздел "Cloud Functions" -> "Создать функцию" (название: glassloft-sync)
3. Выберите среду выполнения "Python 3.11"
4. Вставьте этот код в файл index.py
5. Добавьте в "Требования" (requirements.txt): boto3
6. В "Переменных окружения" укажите:
   - BUCKET_NAME: имя вашего бакета Object Storage (например: glassloft-calc-storage)
   - API_KEY: ваш секретный ключ (например: glassloft2026secret)
7. Включите галочку "Публичная функция" (или используйте API Gateway)
8. Скопируйте ссылку на функцию (https://functions.yandexcloud.net/...) и вставьте в настройки калькулятора!
"""

import json
import os
import boto3
from botocore.client import Config

BUCKET_NAME = os.environ.get('BUCKET_NAME', 'glassloft-calc-storage')
API_KEY = os.environ.get('API_KEY', '')
HISTORY_KEY = 'data/history.json'

def get_s3_client():
    session = boto3.session.Session()
    return session.client(
        service_name='s3',
        endpoint_url='https://storage.yandexcloud.net',
        aws_access_key_id=os.environ.get('AWS_ACCESS_KEY_ID', ''),
        aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY', ''),
        config=Config(signature_version='s3v4')
    )

def handler(event, context):
    # CORS Headers
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Api-Key, Authorization',
        'Content-Type': 'application/json; charset=utf-8'
    }

    http_method = event.get('httpMethod', 'GET')
    
    # Preflight CORS
    if http_method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({'status': 'ok'})
        }

    # API Key check if configured
    if API_KEY:
        req_key = event.get('headers', {}).get('X-Api-Key') or event.get('headers', {}).get('x-api-key')
        if not req_key or req_key != API_KEY:
            return {
                'statusCode': 401,
                'headers': headers,
                'body': json.dumps({'error': 'Unauthorized: Invalid API Key'})
            }

    try:
        s3 = get_s3_client()
        
        # GET: Load history
        if http_method == 'GET':
            try:
                obj = s3.get_object(Bucket=BUCKET_NAME, Key=HISTORY_KEY)
                data = obj['Body'].read().decode('utf-8')
                history = json.loads(data)
            except Exception:
                # If file does not exist yet
                history = []
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'status': 'success',
                    'count': len(history),
                    'items': history,
                    'timestamp': context.token if hasattr(context, 'token') else None
                }, ensure_ascii=False)
            }

        # POST / PUT: Save or Merge history
        elif http_method in ['POST', 'PUT']:
            body_str = event.get('body', '[]')
            if event.get('isBase64Encoded', False):
                import base64
                body_str = base64.b64decode(body_str).decode('utf-8')
            
            req_data = json.loads(body_str)
            incoming_items = req_data if isinstance(req_data, list) else req_data.get('items', [])

            # Read existing
            try:
                obj = s3.get_object(Bucket=BUCKET_NAME, Key=HISTORY_KEY)
                existing_history = json.loads(obj['Body'].read().decode('utf-8'))
            except Exception:
                existing_history = []

            # 2-Way Smart Merge by id/timestamp
            items_by_id = {item.get('id'): item for item in existing_history if item and item.get('id')}
            
            for item in incoming_items:
                if not item or not item.get('id'):
                    continue
                item_id = item.get('id')
                if item_id in items_by_id:
                    # Choose newer
                    ex_time = items_by_id[item_id].get('updatedAt') or items_by_id[item_id].get('timestamp', 0)
                    in_time = item.get('updatedAt') or item.get('timestamp', 0)
                    if in_time >= ex_time:
                        items_by_id[item_id] = item
                else:
                    items_by_id[item_id] = item

            # Sort by timestamp desc and limit
            merged_list = list(items_by_id.values())
            merged_list.sort(key=lambda x: x.get('timestamp', 0), reverse=True)
            merged_list = merged_list[:50]

            # Write back to S3
            s3.put_object(
                Bucket=BUCKET_NAME,
                Key=HISTORY_KEY,
                Body=json.dumps(merged_list, ensure_ascii=False, indent=2).encode('utf-8'),
                ContentType='application/json; charset=utf-8'
            )

            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'status': 'success',
                    'message': 'History merged and saved successfully',
                    'count': len(merged_list),
                    'items': merged_list
                }, ensure_ascii=False)
            }

        else:
            return {
                'statusCode': 405,
                'headers': headers,
                'body': json.dumps({'error': 'Method not allowed'})
            }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }
