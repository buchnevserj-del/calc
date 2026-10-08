/**
 * Yandex Cloud Function — GlassLoft History Sync Service (Node.js 18/20)
 * ----------------------------------------------------------------------
 * Сохраняет и синхронизирует историю расчётов GlassLoft в бакете Yandex Object Storage.
 */

const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');

const BUCKET_NAME = process.env.BUCKET_NAME || 'glassloft-calc-storage';
const API_KEY = process.env.API_KEY || '';
const HISTORY_KEY = 'data/history.json';

const s3 = new S3Client({
  region: 'ru-central1',
  endpoint: 'https://storage.yandexcloud.net',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Api-Key, Authorization',
  'Content-Type': 'application/json; charset=utf-8',
};

module.exports.handler = async function (event, context) {
  const httpMethod = event.httpMethod || 'GET';

  // Preflight
  if (httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ status: 'ok' }) };
  }

  // Auth check
  if (API_KEY) {
    const key = event.headers?.['X-Api-Key'] || event.headers?.['x-api-key'];
    if (!key || key !== API_KEY) {
      return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ error: 'Unauthorized: Invalid API Key' }) };
    }
  }

  try {
    // GET: Return history
    if (httpMethod === 'GET') {
      let history = [];
      try {
        const response = await s3.send(new GetObjectCommand({ Bucket: BUCKET_NAME, Key: HISTORY_KEY }));
        const str = await response.Body.transformToString('utf-8');
        history = JSON.parse(str);
      } catch (err) {
        history = [];
      }
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ status: 'success', count: history.length, items: history }),
      };
    }

    // POST / PUT: Save / Merge
    if (httpMethod === 'POST' || httpMethod === 'PUT') {
      let bodyStr = event.body || '[]';
      if (event.isBase64Encoded) {
        bodyStr = Buffer.from(bodyStr, 'base64').toString('utf-8');
      }
      const parsed = JSON.parse(bodyStr);
      const incoming = Array.isArray(parsed) ? parsed : (parsed.items || []);

      let existing = [];
      try {
        const response = await s3.send(new GetObjectCommand({ Bucket: BUCKET_NAME, Key: HISTORY_KEY }));
        existing = JSON.parse(await response.Body.transformToString('utf-8'));
      } catch (err) {
        existing = [];
      }

      const map = new Map();
      existing.forEach(item => { if (item && item.id) map.set(item.id, item); });

      incoming.forEach(item => {
        if (!item || !item.id) return;
        if (map.has(item.id)) {
          const oldTime = map.get(item.id).updatedAt || map.get(item.id).timestamp || 0;
          const newTime = item.updatedAt || item.timestamp || 0;
          if (newTime >= oldTime) map.set(item.id, item);
        } else {
          map.set(item.id, item);
        }
      });

      const merged = Array.from(map.values())
        .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
        .slice(0, 50);

      await s3.send(new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: HISTORY_KEY,
        Body: JSON.stringify(merged, null, 2),
        ContentType: 'application/json; charset=utf-8',
      }));

      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ status: 'success', message: 'Saved to Yandex Cloud', count: merged.length, items: merged }),
      };
    }

    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: err.message || String(err) }),
    };
  }
};
