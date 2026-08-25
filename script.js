const DEF = {
  glass: {
    "Классическое прозрачное (зеленоватая кромка), 10 мм": { trap: 11500, rect: 10000 },
    "Осветлённое Crystal Vision (без оттенка), 10 мм": { trap: 16000, rect: 13000 },
    "Тонированное графит (серое), 10 мм": { trap: 13500, rect: 11000 },
    "Тонированное бронза (коричневое), 10 мм": { trap: 13500, rect: 11000 },
    "Триплекс 5+5 мм, классическое прозрачное": { trap: 13500, rect: 12500 },
    "Триплекс 6+6 мм, классическое прозрачное": { trap: 0, rect: 0 },
    "Триплекс осветлённое 6+4, Crystal Vision": { trap: 20000, rect: 18000 },
    "Триплекс осветлённое 6+6, Crystal Vision": { trap: 0, rect: 0 },
    "Триплекс графит серое 5+5 мм": { trap: 0, rect: 0 },
    "Триплекс графит серое + классическое 5+5 мм": { trap: 17500, rect: 16000 },
    "Триплекс графит серое 6+6 мм": { trap: 0, rect: 0 },
    "Триплекс бронза 5+5 мм": { trap: 0, rect: 0 },
    "Триплекс бронза + классическое 5+5 мм": { trap: 17500, rect: 16000 },
    "Триплекс бронза 6+6 мм": { trap: 0, rect: 0 }
  },
  hard: [
    { name: "Точечные крепления", price: 1250, unit: "шт" },
    { name: "Опорный профиль h100 мм", price: 6700, unit: "м.пог" },
    { name: "Соединительные коннекторы", price: 900, unit: "шт" },
    { name: "Стойки 40х40х400", price: 4500, unit: "шт" }
  ],
  rail: [
    { name: "Без поручня", price: 0 },
    { name: "Деревянный поручень 40×40, масло с воском", price: 5000 },
    { name: "Деревянный поручень 40×40, эмаль однотонная (белый/чёрный)", price: 6000 },
    { name: "Деревянный поручень 40×40, покрытие по образцу заказчика", price: 6500 },
    { name: "Алюминиевый поручень 40×40", price: 4500 },
    { name: "Алюминиевый П-профиль 15×15 на верхнюю кромку стекла", price: 3000 }
  ],
  services: [
    { name: "Изготовление чертежей", emptyDefault: "free" },
    { name: "Изготовление схемы", emptyDefault: "free" },
    { name: "Порошковая окраска фурнитуры по RAL", emptyDefault: "hide" }
  ],
  misc: { delivery: 7500, instFix: 35000, instPct: 30, termGlass: 21, termTripl: 25 }
};

let D = JSON.parse(JSON.stringify(DEF));

// 1. Проверяем, есть ли настройки в ссылке (URL)
function loadFromURL() {
  if (window.location.hash.startsWith('#cfg=')) {
    try {
      const base64 = window.location.hash.replace('#cfg=', '');
      const jsonStr = new TextDecoder().decode(Uint8Array.from(atob(base64), c => c.charCodeAt(0)));
      const p = JSON.parse(jsonStr);
      if (p.glass) D.glass = p.glass;
      if (p.hard) D.hard = p.hard;
      if (p.rail) D.rail = p.rail;
      if (p.services) D.services = p.services;
      if (p.misc) for (const k in D.misc) if (p.misc[k] != null) D.misc[k] = p.misc[k];
      return true;
    } catch(e) { console.error("Ошибка чтения ссылки", e); }
  }
  return false;
}

// 2. Если в ссылке настроек нет, загружаем сохраненные из памяти браузера
if (!loadFromURL()) {
  try {
    const saved = localStorage.getItem('universalGlassCalcV2');
    if (saved) {
      const p = JSON.parse(saved);
      if (p.glass) D.glass = p.glass;
      if (p.hard) D.hard = p.hard;
      if (p.rail) D.rail = p.rail;
      if (p.services) D.services = p.services;
      if (p.misc) for (const k in D.misc) if (p.misc[k] != null) D.misc[k] = p.misc[k];
    }
  } catch(e) {}
}

let M = D.misc;
let termManual = false;
const el = id => document.getElementById(id);
const val = id => { const v = String(el(id).value || '').trim().replace(',', '.'); return v === '' ? null : (parseFloat(v) || 0); };
const num = id => parseFloat(String(el(id).value || '').replace(',', '.')) || 0;
const fmt = n => Math.round(n).toLocaleString('ru-RU');
const rub = n => fmt(n) + ' ₽';
const esc = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');

const roundUp500 = n => n > 0 ? Math.ceil(n / 500) * 500 : 0;

function buildGlassSelect() {
  const s = el('glass'), prev = s.value;
  s.innerHTML = '';
  for (const k in D.glass) {
    const o = document.createElement('option');
    o.value = k; o.textContent = k; s.appendChild(o);
  }
  if ([...s.options].some(o => o.value === prev)) s.value = prev;
}

function buildHardList() {
  el('hardList').innerHTML = D.hard.map((item, idx) => `
    <div class="row3">
      <div class="nm">${item.name}<span class="pt">${fmt(item.price)} ₽/${item.unit}</span></div>
      <div><label>Кол-во</label><input type="number" class="hardQty" data-idx="${idx}" placeholder="—" min="0" step="any" oninput="calc()"></div>
      <div><label>Сумма, ₽</label><input type="number" class="hardSum" data-idx="${idx}" placeholder="авто" min="0" step="100" oninput="calc()"></div>
    </div>`).join('');
}

function buildRailSelect() {
  const s = el('railSelect'), prev = s.value;
  s.innerHTML = '';
  D.rail.forEach(item => {
    const o = document.createElement('option');
    o.value = item.name;
    o.textContent = item.price > 0 ? item.name + ' — ' + fmt(item.price) + ' ₽/м.пог' : item.name;
    s.appendChild(o);
  });
  if ([...s.options].some(o => o.value === prev)) s.value = prev;
}

function buildServiceList() {
  el('serviceList').innerHTML = D.services.map((s, idx) => `
    <div class="row3" style="grid-template-columns:1fr 130px">
      <div class="nm">${s.name}<span class="pt">${s.emptyDefault === 'free' ? 'пусто → бесплатно' : 'пусто → скрыть'}</span></div>
      <div><label>Цена, ₽</label><input type="number" class="servPrice" data-idx="${idx}" placeholder="—" min="0" step="100" oninput="calc()"></div>
    </div>`).join('');
}

function refreshMisc() {
  el('delPrice').value = M.delivery;
  el('instFix').value = M.instFix;
  el('instPct').value = M.instPct;
  termManual = false;
  calc();
}

function applyMisc() {
  el('delPrice').value = M.delivery;
  el('instFix').value = M.instFix;
  el('instPct').value = M.instPct;
}

function openModal(id) {
  renderSettingsFor(id);
  el(id).classList.add('open');
}
function closeModal(id) { el(id).classList.remove('open'); }

function renderSettingsFor(id) {
  if (id === 'glassModal') renderGlassSettings();
  if (id === 'hardModal') renderHardSettings();
  if (id === 'railModal') renderRailSettings();
  if (id === 'serviceModal') renderServiceSettings();
  if (id === 'deliveryModal') el('deliverySetting').value = M.delivery;
  if (id === 'installModal') {
    el('instFixSetting').value = M.instFix;
    el('instPctSetting').value = M.instPct;
  }
  if (id === 'termModal') {
    el('termGlassSetting').value = M.termGlass;
    el('termTriplexSetting').value = M.termTripl;
  }
}

function renderGlassSettings() {
  el('eGlass').innerHTML = Object.keys(D.glass).map(k => `
    <div class="srow three">
      <span>${k}</span>
      <input type="number" value="${D.glass[k].trap}" step="100" onchange="D.glass['${esc(k)}'].trap=+this.value||0; buildGlassSelect(); autoSave(); calc();">
      <input type="number" value="${D.glass[k].rect}" step="100" onchange="D.glass['${esc(k)}'].rect=+this.value||0; buildGlassSelect(); autoSave(); calc();">
      <button class="btn b-red" onclick="delGlass('${esc(k)}')">✕</button>
    </div>`).join('');
}

function renderHardSettings() {
  el('eHard').innerHTML = D.hard.map((item, idx) => `
    <div class="srow three">
      <span>${item.name}</span>
      <input type="number" value="${item.price}" step="50" onchange="D.hard[${idx}].price=+this.value||0; buildHardList(); autoSave(); calc();">
      <select onchange="D.hard[${idx}].unit=this.value; buildHardList(); autoSave(); calc();">
        <option value="шт" ${item.unit==='шт'?'selected':''}>шт</option>
        <option value="м.пог" ${item.unit==='м.пог'?'selected':''}>м.пог</option>
      </select>
      <button class="btn b-red" onclick="delHard(${idx})">✕</button>
    </div>`).join('');
}

function renderRailSettings() {
  el('eRail').innerHTML = D.rail.map((item, idx) => `
    <div class="srow two">
      <span>${item.name}</span>
      <input type="number" value="${item.price}" step="100" onchange="D.rail[${idx}].price=+this.value||0; buildRailSelect(); autoSave(); calc();">
      <button class="btn b-red" onclick="delRail(${idx})">✕</button>
    </div>`).join('');
}

function renderServiceSettings() {
  el('eServ').innerHTML = D.services.map((s, idx) => `
    <div class="srow two">
      <span>${s.name}</span>
      <select onchange="D.services[${idx}].emptyDefault=this.value; buildServiceList(); autoSave(); calc();">
        <option value="free" ${s.emptyDefault==='free'?'selected':''}>бесплатно</option>
        <option value="hide" ${s.emptyDefault==='hide'?'selected':''}>скрыть</option>
      </select>
      <button class="btn b-red" onclick="delService(${idx})">✕</button>
    </div>`).join('');
}

function delGlass(name) {
  if (Object.keys(D.glass).length <= 1) return alert('Должна остаться хотя бы одна позиция');
  if (!confirm('Удалить «' + name + '»?')) return;
  delete D.glass[name]; buildGlassSelect(); renderGlassSettings(); autoSave(); calc();
}
function delHard(idx) {
  if (D.hard.length <= 1) return alert('Должна остаться хотя бы одна позиция');
  if (!confirm('Удалить «' + D.hard[idx].name + '»?')) return;
  D.hard.splice(idx, 1); buildHardList(); renderHardSettings(); autoSave(); calc();
}
function delRail(idx) {
  if (D.rail.length <= 1) return alert('Должна остаться хотя бы одна позиция');
  if (!confirm('Удалить «' + D.rail[idx].name + '»?')) return;
  D.rail.splice(idx, 1); buildRailSelect(); renderRailSettings(); autoSave(); calc();
}
function delService(idx) {
  if (D.services.length <= 1) return alert('Должна остаться хотя бы одна услуга');
  if (!confirm('Удалить «' + D.services[idx].name + '»?')) return;
  D.services.splice(idx, 1); buildServiceList(); renderServiceSettings(); autoSave(); calc();
}

function addGlass() {
  const n = el('ngName').value.trim();
  if (!n) return alert('Введите название');
  if (D.glass[n]) return alert('Уже есть такая позиция');
  D.glass[n] = { trap: +el('ngTrap').value || 0, rect: +el('ngRect').value || 0 };
  el('ngName').value = el('ngTrap').value = el('ngRect').value = '';
  buildGlassSelect(); renderGlassSettings(); autoSave(); calc();
}
function addHard() {
  const n = el('nhName').value.trim();
  if (!n) return alert('Введите название');
  D.hard.push({ name: n, price: +el('nhPrice').value || 0, unit: el('nhUnit').value });
  el('nhName').value = el('nhPrice').value = '';
  buildHardList(); renderHardSettings(); autoSave(); calc();
}
function addRail() {
  const n = el('nrName').value.trim();
  if (!n) return alert('Введите название');
  D.rail.push({ name: n, price: +el('nrPrice').value || 0 });
  el('nrName').value = el('nrPrice').value = '';
  buildRailSelect(); renderRailSettings(); autoSave(); calc();
}
function addService() {
  const n = el('nsName').value.trim();
  if (!n) return alert('Введите название');
  D.services.push({ name: n, emptyDefault: el('nsEmpty').value });
  el('nsName').value = '';
  buildServiceList(); renderServiceSettings(); autoSave(); calc();
}

function calcFromLength() {
  const tLenStr = el('trapLen').value.trim().replace(',', '.');
  if (tLenStr !== '') {
    const tLen = parseFloat(tLenStr) || 0;
    // Длина м.пог. умножить на 1,25 и плюс 35%
    const trapM2 = tLen > 0 ? +(tLen * 1.25 * 1.35).toFixed(2) : 0;
    el('trapArea').value = trapM2 > 0 ? trapM2 : '';
  } else {
    el('trapArea').value = '';
  }

  const rLenStr = el('rectLen').value.trim().replace(',', '.');
  if (rLenStr !== '') {
    const rLen = parseFloat(rLenStr) || 0;
    // Длина м.пог. умножить на 1,25
    const rectM2 = rLen > 0 ? +(rLen * 1.25).toFixed(2) : 0;
    el('rectArea').value = rectM2 > 0 ? rectM2 : '';
  } else {
    el('rectArea').value = '';
  }

  calc();
}

function calc() {
  const gName = el('glass').value;
  const g = D.glass[gName] || { trap: 0, rect: 0 };
  el('trapPrice').value = g.trap;
  el('rectPrice').value = g.rect;
  el('glassHint').textContent = `Трапеции — ${fmt(g.trap)} ₽/м² · Прямоугольники — ${fmt(g.rect)} ₽/м²`;
  const trapA = val('trapArea') || 0;
  const rectA = val('rectArea') || 0;
  
  // 1. Стекло (с округлением до 500 ₽)
  const rawGlassSum = trapA * g.trap + rectA * g.rect;
  const glassSum = roundUp500(rawGlassSum);

  // 2. Фурнитура и поручень (с округлением до 500 ₽)
  const parts = [];
  let hardSum = 0;
  document.querySelectorAll('.hardQty').forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    const item = D.hard[idx];
    if (!item) return;
    const qty = inp.value.trim() === '' ? null : (parseFloat(inp.value) || 0);
    const sumInput = document.querySelector(`.hardSum[data-idx="${idx}"]`);
    const man = sumInput && sumInput.value.trim() !== '' ? (parseFloat(sumInput.value) || 0) : null;
    let s = 0;
    if (man !== null) s = man;
    else if (qty !== null) s = qty * item.price;
    if (s > 0 || (qty !== null && qty > 0)) {
      hardSum += s;
      parts.push(item.name.toLowerCase() + (qty ? ` ${qty} ${item.unit}` : ''));
    }
  });

  const railName = el('railSelect').value;
  const railItem = D.rail.find(r => r.name === railName) || { price: 0 };
  const railLength = val('railLength');
  const railManual = val('railManual');
  const isWoodenRail = /деревянн/i.test(railName) && !/без поручня/i.test(railName);

  let rawRailSum = 0;
  if (railManual !== null) rawRailSum = railManual;
  else if (railLength !== null) rawRailSum = railLength * railItem.price;
  const railSumRound = roundUp500(rawRailSum);

  const railHintEl = el('railHint');
  if (railHintEl) {
    if (isWoodenRail) {
      railHintEl.textContent = 'Деревянный поручень не входит в комплект фурнитуры и выносится в КП отдельной строкой после итоговой суммы.';
    } else if (/без поручня/i.test(railName)) {
      railHintEl.textContent = 'Поручень не выбран.';
    } else {
      railHintEl.textContent = 'Поручень включается в состав комплекта фурнитуры.';
    }
  }

  // Если поручень НЕ деревянный (например, металлический/алюминиевый профиль), он входит в комплект фурнитуры
  if (!isWoodenRail && !/без поручня/i.test(railName)) {
    if (rawRailSum > 0 || (railLength !== null && railLength > 0)) {
      parts.push(railName.toLowerCase() + (railLength ? ` ${railLength} м.пог` : ''));
      hardSum += rawRailSum;
    }
  }

  const rawHardwareTotal = hardSum;
  const hardwareTotal = roundUp500(rawHardwareTotal);

  // 3. Доставка (с округлением до 500 ₽)
  const rawDelSum = el('delOn').checked ? num('delPrice') : 0;
  const delSum = roundUp500(rawDelSum);

  // 4. Монтажные работы (с округлением до 500 ₽)
  const mode = el('instMode').value;
  el('instFixWrap').style.display = mode === 'fix' ? 'block' : 'none';
  el('instPctWrap').style.display = mode === 'pct' ? 'block' : 'none';
  const base1_4 = glassSum + hardwareTotal;
  let rawInstSum = 0;
  if (el('instOn').checked) {
    rawInstSum = mode === 'fix' ? num('instFix') : (base1_4 * num('instPct') / 100);
  }
  const instSum = roundUp500(rawInstSum);

  // 5. Дополнительные услуги (каждая с округлением до 500 ₽)
  let servSum = 0;
  const servLines = [];
  document.querySelectorAll('.servPrice').forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    const s = D.services[idx];
    if (!s) return;
    const v = inp.value.trim() === '' ? null : (parseFloat(inp.value) || 0);
    if (v !== null && v > 0) {
      const roundedV = roundUp500(v);
      servSum += roundedV;
      servLines.push(`${s.name} — ${rub(roundedV)}`);
    } else if (s.emptyDefault === 'free') {
      servLines.push(`${s.name} — бесплатно`);
    }
  });

  // Итоговая сумма складывается из округлённых сумм всех пунктов КП (без деревянного поручня)
  const total = glassSum + hardwareTotal + delSum + instSum + servSum;

  el('sum').textContent = rub(total);

  if (!termManual) el('termDays').value = /триплекс/i.test(gName) ? M.termTripl : M.termGlass;
  el('termHint').textContent = termManual
    ? 'Срок задан вручную'
    : (/триплекс/i.test(gName) ? 'Авто: триплекс — ' + M.termTripl + ' раб. дней' : 'Авто: стекло 10 мм — ' + M.termGlass + ' раб. дней');

  let t = 'Стоимость ограждения будет следующей:\n\n';
  t += `1. Стекло закаленное ${gName} — ${rub(glassSum)}\n`;
  t += `2. Комплект фурнитуры`;
  if (parts.length) t += ` (${parts.join(', ')})`;
  t += ` — ${rub(hardwareTotal)}\n`;
  t += `3. Доставка, разгрузка — ${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : 'не требуется'}\n`;
  t += `4. Монтажные работы — ${el('instOn').checked ? (instSum > 0 ? rub(instSum) : '0 ₽') : 'не требуются'}\n`;
  let counter = 5;
  servLines.forEach(line => { t += `${counter++}. ${line}\n`; });
  t += `\nИтого общая стоимость — ${fmt(total)} рублей.\n`;
  t += `Срок изготовления — ${num('termDays')} рабочих дней.`;

  // Деревянный поручень выносится отдельной строкой в самый конец после Итоговой суммы
  if (isWoodenRail) {
    if (railSumRound > 0) {
      t += `\n\nЕсли потребуется деревянный поручень поверх стекла: ${railName}${railLength ? ` (${railLength} м.пог.)` : ''} — ${rub(railSumRound)}.`;
    } else {
      t += `\n\nЕсли потребуется деревянный поручень поверх стекла: ${railName} — ${fmt(railItem.price)} ₽/м.пог.`;
    }
  }

  el('quoteText').textContent = t;
}

let toastTimer = null;
function showToast(msg) {
  const toast = el('toast');
  const toastMsg = el('toastMsg');
  if (!toast || !toastMsg) { alert(msg); return; }
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 2600);
}

function copyQuote() {
  const text = el('quoteText').textContent;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('Текст КП скопирован в буфер!'))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

// Функция генерации ссылки с вашими ценами
function copyShareLink() {
  const jsonStr = JSON.stringify(pack());
  const encoded = btoa(String.fromCharCode(...new TextEncoder().encode(jsonStr)));
  const url = window.location.origin + window.location.pathname + '#cfg=' + encoded;
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url)
      .then(() => showToast('Ссылка с настройками скопирована!'))
      .catch(() => fallbackCopy(url));
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Скопировано в буфер!');
  } catch (err) {
    alert('Выделите и скопируйте текст вручную');
  }
  document.body.removeChild(ta);
}

function pack() {
  const misc = {};
  for (const k in D.misc) misc[k] = D.misc[k];
  return { glass: D.glass, hard: D.hard, rail: D.rail, services: D.services, misc };
}

function autoSave() {
  localStorage.setItem('universalGlassCalcV2', JSON.stringify(pack()));
}

function saveAll() {
  autoSave();
  showToast('Настройки сохранены на устройстве!');
}

function buildAll() {
  buildGlassSelect();
  buildHardList();
  buildRailSelect();
  buildServiceList();
}

buildAll();
refreshMisc();
calc();