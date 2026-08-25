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
  misc: { delivery: 7500, instFix: 35000, instPct: 30, termGlass: 21, termTripl: 25, pin: '0120' }
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

if (!D.misc.pin) D.misc.pin = '0120';

const SETTINGS_MODALS = ['glassModal', 'hardModal', 'railModal', 'deliveryModal', 'installModal', 'serviceModal', 'termModal'];
let isAdminUnlocked = false;
let pendingModalId = null;

let M = D.misc;
let termManual = false;
const el = id => document.getElementById(id);
const val = id => { const v = String(el(id).value || '').trim().replace(',', '.'); return v === '' ? null : (parseFloat(v) || 0); };
const num = id => parseFloat(String(el(id).value || '').replace(',', '.')) || 0;
const fmt = n => Math.round(n).toLocaleString('ru-RU');
const rub = n => fmt(n) + ' ₽';
const esc = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');

const roundUp500 = n => n > 0 ? Math.ceil(n / 500) * 500 : 0;

function updateGlassSwatch(gName) {
  const pill = el('glassSwatchPill');
  const title = el('glassSwatchTitle');
  if (!pill || !title) return;
  title.textContent = gName;
  pill.className = 'glass-preview-pill';
  if (/crystal|осветл/i.test(gName)) {
    pill.classList.add('swatch-crystal');
  } else if (/графит|серое/i.test(gName)) {
    pill.classList.add('swatch-graphite');
  } else if (/бронз/i.test(gName)) {
    pill.classList.add('swatch-bronze');
  } else {
    pill.classList.add('swatch-classic');
  }
}

function buildGlassSelect() {
  const s = el('glass'), prev = s.value;
  s.innerHTML = '';
  for (const k in D.glass) {
    const o = document.createElement('option');
    o.value = k; o.textContent = k; s.appendChild(o);
  }
  if ([...s.options].some(o => o.value === prev)) s.value = prev;
}

function stepHard(idx, delta) {
  const inp = document.querySelector(`.hardQty[data-idx="${idx}"]`);
  if (!inp) return;
  let v = parseFloat(inp.value) || 0;
  v = Math.max(0, v + delta);
  inp.value = v > 0 ? v : '';
  calc();
}

function buildHardList() {
  el('hardList').innerHTML = D.hard.map((item, idx) => `
    <div class="row3">
      <div class="nm">${item.name}<span class="pt">${fmt(item.price)} ₽/${item.unit}</span></div>
      <div>
        <label>Кол-во (${item.unit})</label>
        <div class="stepper">
          <button type="button" class="stepper-btn" onclick="stepHard(${idx}, -1)">−</button>
          <input type="number" class="hardQty" data-idx="${idx}" placeholder="0" min="0" step="any" oninput="calc()">
          <button type="button" class="stepper-btn" onclick="stepHard(${idx}, 1)">+</button>
        </div>
      </div>
      <div>
        <label>Сумма, ₽</label>
        <div class="input-wrap">
          <input type="number" class="hardSum" data-idx="${idx}" placeholder="авто" min="0" step="100" oninput="calc()">
          <span class="unit">₽</span>
        </div>
      </div>
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
    <div class="row3" style="grid-template-columns:1fr 140px">
      <div class="nm">${s.name}<span class="pt">${s.emptyDefault === 'free' ? 'пусто → скрыть' : 'пусто → скрыть'}</span></div>
      <div>
        <label>Цена, ₽</label>
        <div class="input-wrap">
          <input type="number" class="servPrice" data-idx="${idx}" placeholder="—" min="0" step="100" oninput="calc()">
          <span class="unit">₽</span>
        </div>
      </div>
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
  if (SETTINGS_MODALS.includes(id) && !isAdminUnlocked) {
    pendingModalId = id;
    const pInp = el('pinInput');
    const pErr = el('pinError');
    if (pInp) pInp.value = '';
    if (pErr) pErr.style.display = 'none';
    const pm = el('pinModal');
    if (pm) pm.classList.add('open');
    setTimeout(() => { const inp = el('pinInput'); if (inp) inp.focus(); }, 100);
    return;
  }
  renderSettingsFor(id);
  const target = el(id);
  if (target) target.classList.add('open');
}

function closeModal(id) { 
  const target = el(id);
  if (target) target.classList.remove('open'); 
}

function verifyPin() {
  const entered = el('pinInput').value.trim();
  const currentPin = (D.misc && D.misc.pin) ? String(D.misc.pin) : '0120';
  if (entered === currentPin) {
    isAdminUnlocked = true;
    closeModal('pinModal');
    showToast('Режим администратора активирован 🔓');
    if (pendingModalId) {
      const target = pendingModalId;
      pendingModalId = null;
      openModal(target);
    }
  } else {
    el('pinError').style.display = 'block';
    el('pinInput').select();
  }
}

function lockAdmin() {
  isAdminUnlocked = false;
  SETTINGS_MODALS.forEach(id => closeModal(id));
  closeModal('changePinModal');
  showToast('Настройки заблокированы 🔒');
}

function openChangePinModal() {
  el('oldPinInput').value = '';
  el('newPinInput').value = '';
  el('confirmPinInput').value = '';
  el('changePinError').style.display = 'none';
  el('changePinModal').classList.add('open');
}

function saveNewPin() {
  const oldPin = el('oldPinInput').value.trim();
  const newPin = el('newPinInput').value.trim();
  const confirmPin = el('confirmPinInput').value.trim();
  const currentPin = (D.misc && D.misc.pin) ? String(D.misc.pin) : '0120';
  const errEl = el('changePinError');

  if (oldPin !== currentPin) {
    errEl.textContent = 'Текущий PIN-код введён неверно';
    errEl.style.display = 'block';
    return;
  }
  if (!newPin || newPin.length < 3) {
    errEl.textContent = 'Новый PIN-код должен содержать от 3 символов';
    errEl.style.display = 'block';
    return;
  }
  if (newPin !== confirmPin) {
    errEl.textContent = 'Новые PIN-коды не совпадают';
    errEl.style.display = 'block';
    return;
  }

  D.misc.pin = newPin;
  autoSave();
  errEl.style.display = 'none';
  closeModal('changePinModal');
  showToast('PIN-код успешно изменён! 🔑');
}

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
        <option value="free" ${s.emptyDefault==='free'?'selected':''}>скрыть</option>
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
  D.services.push({ name: n, emptyDefault: 'hide' });
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
  
  updateGlassSwatch(gName);

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
  const hasRail = railName !== 'Без поручня' && !/без поручня/i.test(railName) && ((railLength !== null && railLength > 0) || (railManual !== null && railManual > 0));

  let rawRailSum = 0;
  if (hasRail) {
    if (railManual !== null) rawRailSum = railManual;
    else if (railLength !== null) rawRailSum = railLength * railItem.price;
  }
  const railSumRound = roundUp500(rawRailSum);

  const railHintEl = el('railHint');
  if (railHintEl) {
    if (hasRail) {
      railHintEl.textContent = 'Поручень включён в расчёт и выводится отдельным пунктом в КП.';
    } else if (/без поручня/i.test(railName)) {
      railHintEl.textContent = 'Поручень не выбран.';
    } else {
      railHintEl.textContent = 'Укажите длину поручня для включения в смету.';
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
  const base1_4 = glassSum + hardwareTotal + (hasRail ? railSumRound : 0);
  let rawInstSum = 0;
  if (el('instOn').checked) {
    rawInstSum = mode === 'fix' ? num('instFix') : (base1_4 * num('instPct') / 100);
  }
  const instSum = roundUp500(rawInstSum);

  // 5. Дополнительные услуги: НЕ вписываем, если сумма не указана (> 0)
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
    }
  });

  // Итоговая сумма складывается из всех позиций (включая поручень)
  const total = glassSum + hardwareTotal + (hasRail ? railSumRound : 0) + delSum + instSum + servSum;

  el('sum').textContent = rub(total);
  const floatEl = el('floatingSum');
  if (floatEl) floatEl.textContent = rub(total);

  if (!termManual) el('termDays').value = /триплекс/i.test(gName) ? M.termTripl : M.termGlass;
  el('termHint').textContent = termManual
    ? 'Срок задан вручную'
    : (/триплекс/i.test(gName) ? 'Авто: триплекс — ' + M.termTripl + ' раб. дней' : 'Авто: стекло 10 мм — ' + M.termGlass + ' раб. дней');

  let t = 'Стоимость ограждения будет следующей:\n\n';
  let counter = 1;
  // Стекло без указания метров квадратных
  t += `${counter++}. Стекло закаленное ${gName} — ${rub(glassSum)}\n`;
  t += `${counter++}. Комплект фурнитуры`;
  if (parts.length) t += ` (${parts.join(', ')})`;
  t += ` — ${rub(hardwareTotal)}\n`;

  // Поручень отдельным пунктом без указания погонных метров
  if (hasRail) {
    t += `${counter++}. Поручень: ${railName} — ${rub(railSumRound)}\n`;
  }

  t += `${counter++}. Доставка, разгрузка — ${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : 'не требуется'}\n`;
  t += `${counter++}. Монтажные работы — ${el('instOn').checked ? (instSum > 0 ? rub(instSum) : '0 ₽') : 'не требуются'}\n`;
  
  // Доп услуги только если > 0
  servLines.forEach(line => { t += `${counter++}. ${line}\n`; });
  t += `\nИтого общая стоимость — ${fmt(total)} рублей.\n`;
  t += `Срок изготовления — ${num('termDays')} рабочих дней.`;

  el('quoteText').textContent = t;
  
  updateKpDocumentData();
}

function getFormattedDates() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const d = pad(now.getDate());
  const m = pad(now.getMonth() + 1);
  const y = now.getFullYear();
  const dateStr = `${d}.${m}.${y}`;
  const noDots = `${d}${m}${y}`;
  
  const exp = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
  const expD = pad(exp.getDate());
  const expM = pad(exp.getMonth() + 1);
  const expY = exp.getFullYear();
  const expStr = `${expD}.${expM}.${expY}`;
  
  return { dateStr, noDots, expStr };
}

function getKpFileName() {
  const dates = getFormattedDates();
  const docNum = (el('custDocNum') && el('custDocNum').value.trim()) || '1';
  const docNumClean = docNum.replace(/[^a-zA-Z0-9]/g, '');
  
  const rawAddr = (el('calcAddress') && el('calcAddress').value.trim()) || 'г. Санкт-Петербург';
  const addrClean = rawAddr
    .replace(/[\s,.-]+/g, '_')
    .replace(/[^a-zA-Z0-9а-яА-ЯёЁ_]/g, '')
    .replace(/^_+|_+$/g, '');
    
  // Формат: КП_порядковый номер-дата без точек, запятых и тире_адрес объекта
  return `КП_${docNumClean}-${dates.noDots}_${addrClean || 'объект'}`;
}

function updateKpDocumentData() {
  const dates = getFormattedDates();
  
  const clientVal = (el('calcClient') && el('calcClient').value.trim()) || 'Частное лицо';
  const addressVal = (el('calcAddress') && el('calcAddress').value.trim()) || 'г. Санкт-Петербург';
  const docNumVal = (el('custDocNum') && el('custDocNum').value.trim()) || `1/${dates.noDots}`;
  const prepayVal = (el('custPrepay') && el('custPrepay').value.trim()) || '50%';
  
  if (el('kpDocNum')) el('kpDocNum').textContent = `№ ${docNumVal}`;
  if (el('kpDocDate')) el('kpDocDate').textContent = dates.dateStr;
  if (el('kpDocAddress')) el('kpDocAddress').textContent = addressVal;
  if (el('kpDocClient')) el('kpDocClient').textContent = clientVal;
  if (el('kpDocPrepay')) el('kpDocPrepay').textContent = prepayVal;
  
  const gName = el('glass').value;
  const g = D.glass[gName] || { trap: 0, rect: 0 };
  const trapA = val('trapArea') || 0;
  const rectA = val('rectArea') || 0;
  const rawGlassSum = trapA * g.trap + rectA * g.rect;
  const glassSum = roundUp500(rawGlassSum);
  
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
  const hasRail = railName !== 'Без поручня' && !/без поручня/i.test(railName) && ((railLength !== null && railLength > 0) || (railManual !== null && railManual > 0));

  let rawRailSum = 0;
  if (hasRail) {
    if (railManual !== null) rawRailSum = railManual;
    else if (railLength !== null) rawRailSum = railLength * railItem.price;
  }
  const railSumRound = roundUp500(rawRailSum);

  const rawHardwareTotal = hardSum;
  const hardwareTotal = roundUp500(rawHardwareTotal);

  const rawDelSum = el('delOn').checked ? num('delPrice') : 0;
  const delSum = roundUp500(rawDelSum);

  const mode = el('instMode').value;
  const base1_4 = glassSum + hardwareTotal + (hasRail ? railSumRound : 0);
  let rawInstSum = 0;
  if (el('instOn').checked) {
    rawInstSum = mode === 'fix' ? num('instFix') : (base1_4 * num('instPct') / 100);
  }
  const instSum = roundUp500(rawInstSum);

  let servSum = 0;
  const servRows = [];
  document.querySelectorAll('.servPrice').forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    const s = D.services[idx];
    if (!s) return;
    const v = inp.value.trim() === '' ? null : (parseFloat(inp.value) || 0);
    if (v !== null && v > 0) {
      const roundedV = roundUp500(v);
      servSum += roundedV;
      servRows.push({ name: s.name, price: roundedV, priceStr: rub(roundedV) });
    }
  });

  const total = glassSum + hardwareTotal + (hasRail ? railSumRound : 0) + delSum + instSum + servSum;

  if (el('kpDocTotal')) el('kpDocTotal').textContent = rub(total);
  if (el('kpDocTerm')) el('kpDocTerm').textContent = `${num('termDays')} раб. дней`;
  if (el('kpDocExpire')) el('kpDocExpire').textContent = dates.expStr;

  // Build table rows without any bold tags and without area/length metrics
  let rowsHtml = '';
  
  // 1. Стекло (без указания м²)
  const glassDesc = `Стекло закаленное ${gName}`;
  rowsHtml += `<tr>
    <td>${glassDesc}</td>
    <td class="c">компл.</td>
    <td class="c">1</td>
    <td class="r">${rub(glassSum)}</td>
    <td class="r">${rub(glassSum)}</td>
  </tr>`;

  // 2. Комплект фурнитуры
  const hardDesc = `Комплект фурнитуры${parts.length ? ` (${parts.join(', ')})` : ''}`;
  rowsHtml += `<tr>
    <td>${hardDesc}</td>
    <td class="c">компл.</td>
    <td class="c">1</td>
    <td class="r">${rub(hardwareTotal)}</td>
    <td class="r">${rub(hardwareTotal)}</td>
  </tr>`;

  // 3. Поручень (без указания м.пог.)
  if (hasRail) {
    const railDesc = `Поручень: ${railName}`;
    rowsHtml += `<tr>
      <td>${railDesc}</td>
      <td class="c">компл.</td>
      <td class="c">1</td>
      <td class="r">${rub(railSumRound)}</td>
      <td class="r">${rub(railSumRound)}</td>
    </tr>`;
  }

  // 4. Доставка
  const delDesc = 'Доставка, разгрузка';
  rowsHtml += `<tr>
    <td>${delDesc}</td>
    <td class="c">компл.</td>
    <td class="c">1</td>
    <td class="r">${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : 'не требуется'}</td>
    <td class="r">${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : '0 ₽'}</td>
  </tr>`;

  // 5. Монтаж
  const instDesc = 'Монтажные работы';
  rowsHtml += `<tr>
    <td>${instDesc}</td>
    <td class="c">компл.</td>
    <td class="c">1</td>
    <td class="r">${el('instOn').checked ? (instSum > 0 ? rub(instSum) : '0 ₽') : 'не требуются'}</td>
    <td class="r">${el('instOn').checked ? (instSum > 0 ? rub(instSum) : '0 ₽') : '0 ₽'}</td>
  </tr>`;

  // 6. Доп. услуги (только если цена указана > 0)
  servRows.forEach(sr => {
    rowsHtml += `<tr>
      <td>${sr.name}</td>
      <td class="c">компл.</td>
      <td class="c">1</td>
      <td class="r">${sr.priceStr}</td>
      <td class="r">${rub(sr.price)}</td>
    </tr>`;
  });

  if (el('kpDocTableBody')) el('kpDocTableBody').innerHTML = rowsHtml;
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
      .then(() => showToast('Текст сметы скопирован!'))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

async function sharePDF() {
  showToast('Формирование PDF для отправки... ⏳');
  updateKpDocumentData();

  const element = document.getElementById('kpExportPage');
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false
    });

    const filename = getKpFileName() + '.pdf';
    
    if (window.jspdf && window.jspdf.jsPDF) {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, Math.min(imgHeight, 297));
      
      const pdfBlob = pdf.output('blob');
      const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' });

      // На мобильных устройствах открываем системное меню шеринга файла
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        try {
          await navigator.share({
            files: [pdfFile],
            title: filename
          });
          showToast('Файл успешно отправлен!');
          return;
        } catch (err) {
          if (err.name === 'AbortError') return;
        }
      }

      // Если шеринг файлов напрямую не поддерживается браузером, скачиваем PDF
      pdf.save(filename);
      showToast('PDF-файл сформирован и скачан! 📄');
    }
  } catch (err) {
    console.error('Share error:', err);
    showToast('Ошибка при формировании PDF');
  }
}

async function exportKP(format) {
  showToast(`Формирование ${format.toUpperCase()}... ⏳`);
  updateKpDocumentData();

  const element = document.getElementById('kpExportPage');
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false
    });

    const baseName = getKpFileName();

    if (format === 'jpeg' || format === 'jpg') {
      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.download = `${baseName}.jpeg`;
      link.href = dataUrl;
      link.click();
      showToast('КП скачано в формате JPEG! 🖼️');
    } else if (format === 'pdf') {
      if (window.jspdf && window.jspdf.jsPDF) {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, Math.min(imgHeight, 297));
        pdf.save(`${baseName}.pdf`);
        showToast('КП скачано в формате PDF! 📄');
      } else {
        window.print();
      }
    }
  } catch (err) {
    console.error('Export error:', err);
    showToast('Ошибка при формировании файла');
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