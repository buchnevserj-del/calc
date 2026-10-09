const DEF = {
  railings: {
    glass: {
      "Классическое прозрачное (зеленоватая кромка), 10 мм": { trap: 11500, rect: 10000 },
      "Осветлённое Crystal Vision (без оттенка), 10 мм": { trap: 16000, rect: 13000 },
      "Тонированное графит (серое), 10 мм": { trap: 13500, rect: 11000 },
      "Тонированное бронза (коричневое), 10 мм": { trap: 13500, rect: 11000 },
      "Триплекс 5+5 мм, классическое прозрачное": { trap: 13500, rect: 12500 },
      "Триплекс 6+6 мм, классическое прозрачное": { trap: 15500, rect: 14000 },
      "Триплекс осветлённое 6+4, Crystal Vision": { trap: 20000, rect: 18000 },
      "Триплекс осветлённое 6+6, Crystal Vision": { trap: 22000, rect: 19500 },
      "Триплекс графит серое + классическое 5+5 мм": { trap: 17500, rect: 16000 },
      "Триплекс бронза + классическое 5+5 мм": { trap: 17500, rect: 16000 }
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
    ]
  },

  balconies: {
    glass: {
      "Классическое прозрачное (зеленоватая кромка), 10 мм": { price: 10000 },
      "Осветлённое Crystal Vision (без оттенка), 10 мм": { price: 13000 },
      "Тонированное графит (серое), 10 мм": { price: 11000 },
      "Тонированное бронза (коричневое), 10 мм": { price: 11000 },
      "Триплекс 5+5 мм, классическое прозрачное": { price: 12500 },
      "Триплекс 6+6 мм, классическое прозрачное": { price: 14000 },
      "Триплекс осветлённое 6+4, Crystal Vision": { price: 18000 },
      "Триплекс осветлённое 6+6, Crystal Vision": { price: 19500 },
      "Триплекс графит серое + классическое 5+5 мм": { price: 16000 },
      "Триплекс бронза + классическое 5+5 мм": { price: 16000 }
    },
    hard: [
      { name: "Опорный профиль h100 мм для балконов", price: 6700, unit: "м.пог" },
      { name: "Точечные крепления в торец перекрытия", price: 1250, unit: "шт" },
      { name: "Стойки 40х40х400 на балконную плиту", price: 4500, unit: "шт" },
      { name: "Соединительные угловые коннекторы", price: 900, unit: "шт" }
    ],
    rail: [
      { name: "Без поручня", price: 0 },
      { name: "Алюминиевый поручень 40×40", price: 4500 },
      { name: "Алюминиевый П-профиль 15×15 на кромку", price: 3000 },
      { name: "Деревянный поручень 40×40, масло с воском", price: 5000 },
      { name: "Деревянный поручень 40×40, эмаль", price: 6000 }
    ]
  },

  showers: {
    glass: {
      "Классическое прозрачное (закаленное), 8 мм": { price: 7500 },
      "Осветлённое Crystal Vision (без оттенка), 8 мм": { price: 9500 },
      "Матовое Сатинат (пескоструй/химия), 8 мм": { price: 8900 },
      "Тонированное графит (серое), 8 мм": { price: 8500 },
      "Тонированное бронза (коричневое), 8 мм": { price: 8500 },
      "Рифлёное Fluted / Moru (полосы), 8 мм": { price: 12500 }
    },
    hard: [
      { name: "Петли стекло-стена с фиксацией 90°", price: 4200, unit: "шт" },
      { name: "Петли стекло-стекло 180°", price: 4800, unit: "шт" },
      { name: "Коннектор стекло-стена (прямоугольный)", price: 1100, unit: "шт" },
      { name: "Коннектор стекло-пол", price: 1100, unit: "шт" },
      { name: "Стабилизационная штанга 45°/90° (нерж)", price: 3800, unit: "шт" },
      { name: "Ручка-кноб точечная", price: 1200, unit: "шт" },
      { name: "Ручка-скоба (полотенцедержатель)", price: 3500, unit: "шт" },
      { name: "Комплект магнитных и силиконовых уплотнителей", price: 2800, unit: "компл" },
      { name: "Акриловый водозащитный порожек", price: 1500, unit: "м.пог" },
      { name: "Гидрофобное покрытие «Антикапля» (защита от налета)", price: 2500, unit: "м²" },
      { name: "Вырезы в стекле под бортик / короб", price: 1500, unit: "шт" }
    ]
  },

  loft: {
    glass: {
      "Классическое прозрачное (закаленное), 6 мм": { price: 5500 },
      "Осветлённое Crystal Vision, 6 мм": { price: 7200 },
      "Матовое Сатинат (непрозрачное), 6 мм": { price: 6800 },
      "Тонированное графит (серое), 6 мм": { price: 6500 },
      "Тонированное бронза (коричневое), 6 мм": { price: 6500 },
      "Армированное стекло с металлической сеткой, 6 мм": { price: 11000 }
    },
    hard: [
      { name: "Каркасный лофт-профиль (алюминий/сталь)", price: 2800, unit: "м.пог" },
      { name: "Декоративная раскладка (шпросы/ячейки)", price: 1200, unit: "м.пог" },
      { name: "Раздвижной подвесной трек с каретками", price: 12500, unit: "компл" },
      { name: "Распашные петли скрытого монтажа", price: 3500, unit: "шт" },
      { name: "Доводчик плавного закрывания (Soft-Close)", price: 4500, unit: "шт" },
      { name: "Лофт-ручка (вертикальная труба 400-800 мм)", price: 4200, unit: "шт" },
      { name: "Магнитный замок с защелкой", price: 5500, unit: "компл" },
      { name: "Порошковая окраска каркаса по RAL (муар)", price: 4500, unit: "компл" }
    ]
  },

  services: [
    { name: "Изготовление чертежей", emptyDefault: "hide" },
    { name: "Изготовление схемы", emptyDefault: "hide" },
    { name: "Порошковая окраска фурнитуры по RAL", emptyDefault: "hide" }
  ],
  misc: { delivery: 7500, instFix: 35000, instPct: 30, termGlass: 21, termTripl: 25, pin: '0120' }
};

let D = JSON.parse(JSON.stringify(DEF));

// Load saved config
function loadSavedConfig() {
  try {
    const saved = localStorage.getItem('glassloft_multi_calc_v6');
    if (saved) {
      const p = JSON.parse(saved);
      if (p.railings) D.railings = p.railings;
      if (p.balconies) D.balconies = p.balconies;
      if (p.showers) D.showers = p.showers;
      if (p.loft) D.loft = p.loft;
      if (p.services) D.services = p.services;
      if (p.misc) for (const k in D.misc) if (p.misc[k] != null) D.misc[k] = p.misc[k];
    }
  } catch(e) {}
}
loadSavedConfig();

if (!D.misc.pin) D.misc.pin = '0120';

let termManual = false;

/* Multi-Product Section Presets & Default Names */
const PRESET_SECTION_NAMES = {
  balconies: [
    'Балконное ограждение',
    'Балконное ограждение 1 этаж',
    'Балконное ограждение 2 этаж',
    'Ограждение террасы',
    'Ограждение веранды',
    'Ограждение второго света',
    'Французский балкон'
  ],
  railings: [
    'Лестничное ограждение',
    'Лестничное ограждение 1 этаж',
    'Лестничное ограждение 2 этаж',
    'Стеклянное ограждение лестницы',
    'Ограждение лестничного марша',
    'Перила 2-й этаж',
    'Ограждение атриума'
  ],
  showers: [
    'Душевое ограждение',
    'Душевая перегородка',
    'Шторка на ванну',
    'Душевой уголок',
    'Душевая кабина'
  ],
  loft: [
    'Лофт-перегородка',
    'Перегородка в спальню',
    'Зонирующая перегородка',
    'Раздвижная лофт-дверь',
    'Офисная перегородка'
  ]
};

function getDefaultPositionName(cat, idx) {
  const num = (idx || 0) + 1;
  const defaults = {
    railings: num === 1 ? 'Лестничное ограждение' : `Лестничное ограждение ${num}`,
    balconies: num === 1 ? 'Балконное ограждение' : `Балконное ограждение ${num}`,
    showers: num === 1 ? 'Душевое ограждение' : `Душевое ограждение ${num}`,
    loft: num === 1 ? 'Лофт-перегородка' : `Лофт-перегородка ${num}`
  };
  return defaults[cat] || `Изделие ${num}`;
}

/* Multi-Product State with Per-Item Installation */
let activeCategory = 'railings';

let appState = {
  railings: [
    {
      id: 1,
      name: "Лестничное ограждение",
      trapLen: "", rectLen: "", trapArea: "", rectArea: "",
      glass: "Классическое прозрачное (зеленоватая кромка), 10 мм",
      hardQty: {}, hardSum: {},
      railSelect: "Без поручня", railLength: "", railManual: "",
      instOn: true, instMode: "fix", instFix: 35000, instPct: 30
    }
  ],
  balconies: [
    {
      id: 1,
      name: "Балконное ограждение",
      length: "", heightMm: "1000",
      glass: "Классическое прозрачное (зеленоватая кромка), 10 мм",
      hardQty: {}, hardSum: {},
      railSelect: "Без поручня", railLength: "", railManual: "",
      instOn: true, instMode: "fix", instFix: 35000, instPct: 30
    }
  ],
  showers: [
    {
      id: 1,
      name: "Душевое ограждение",
      fixedArea: "", doorArea: "",
      glass: "Классическое прозрачное (закаленное), 8 мм",
      hardQty: {}, hardSum: {},
      instOn: true, instMode: "fix", instFix: 15000, instPct: 30
    }
  ],
  loft: [
    {
      id: 1,
      name: "Лофт-перегородка",
      area: "", profileLen: "", gridLen: "",
      glass: "Классическое прозрачное (закаленное), 6 мм",
      hardQty: {}, hardSum: {},
      instOn: true, instMode: "fix", instFix: 25000, instPct: 30
    }
  ]
};

function sanitizePosition(pos, cat, idx) {
  if (!pos || typeof pos !== 'object') pos = {};
  if (!pos.id) pos.id = Date.now() + idx;
  if (!pos.name) pos.name = getDefaultPositionName(cat, idx);
  if (!pos.glass) {
    const available = (D[cat] && D[cat].glass) ? Object.keys(D[cat].glass) : [];
    pos.glass = available[0] || 'Классическое прозрачное';
  }
  if (!pos.hardQty || typeof pos.hardQty !== 'object') pos.hardQty = {};
  if (!pos.hardSum || typeof pos.hardSum !== 'object') pos.hardSum = {};
  if (pos.instOn === undefined) pos.instOn = true;
  if (!pos.instMode) pos.instMode = 'fix';
  if (pos.instFix === undefined) pos.instFix = (D.misc && D.misc.instFix) ? D.misc.instFix : 35000;
  if (pos.instPct === undefined) pos.instPct = (D.misc && D.misc.instPct) ? D.misc.instPct : 30;
  return pos;
}

function loadSavedAppState() {
  try {
    const saved = localStorage.getItem('glassloft_app_state_v6');
    if (saved) {
      const p = JSON.parse(saved);
      if (p && typeof p === 'object') {
        ['railings', 'balconies', 'showers', 'loft'].forEach(cat => {
          if (Array.isArray(p[cat]) && p[cat].length > 0) {
            appState[cat] = p[cat].map((pos, idx) => sanitizePosition(pos, cat, idx));
          }
        });
      }
    }
  } catch(e) {}
}

function saveAppState() {
  try {
    localStorage.setItem('glassloft_app_state_v6', JSON.stringify(appState));
  } catch(e) {}
}

let activePosIdx = {
  railings: 0,
  balconies: 0,
  showers: 0,
  loft: 0
};

let currentKpSeqNumber = null;
let pendingAction = null;

let isAdminUnlocked = false;
let pendingModalId = null;

const el = id => document.getElementById(id);
const val = id => { const v = String((el(id) && el(id).value) || '').trim().replace(',', '.'); return v === '' ? null : (parseFloat(v) || 0); };
const num = id => parseFloat(String((el(id) && el(id).value) || '').replace(',', '.')) || 0;
const fmt = n => Math.round(n).toLocaleString('ru-RU');
const rub = n => fmt(n) + ' ₽';
const roundUp500 = n => n > 0 ? Math.ceil(n / 500) * 500 : 0;
const esc = s => String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');

let isDealerMode = false;
function checkDealerMode() {
  try {
    const s = (typeof window !== 'undefined' && window.location && (window.location.search || window.location.hash)) ? (window.location.search + window.location.hash).toLowerCase() : '';
    if (s && (s.includes('dealer') || s.includes('?d') || s.includes('&d') || s.includes('#d'))) {
      isDealerMode = true;
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.classList.add('dealer-mode');
      }
      const dmLabel = el('dmHeaderLabel');
      if (dmLabel) dmLabel.textContent = 'Наценка дилера';
    }
  } catch(e) {}
}
checkDealerMode();

function copyDealerLink() {
  let dealerUrl = 'https://buchnevserj-del.github.io/calc/?d';

  try {
    if (typeof window !== 'undefined' && window.location) {
      if (window.location.hostname && window.location.hostname.includes('github.io')) {
        dealerUrl = 'https://buchnevserj-del.github.io/calc/?d';
      } else {
        const origin = window.location.origin || '';
        let path = window.location.pathname || '';
        path = path.replace(/\/index\.html$/i, '').replace(/index\.html$/i, '').replace(/\/+$/, '');
        dealerUrl = origin + (path ? path : '') + '/?d';
      }
    }
  } catch(e) {}

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(dealerUrl).then(() => {
      showToast('Дилерская ссылка скопирована! 📋');
    }).catch(() => fallbackCopy(dealerUrl));
  } else {
    fallbackCopy(dealerUrl);
  }
}

function focusPosNameInput() {
  const inp = el('posNameInput');
  if (inp) {
    inp.focus();
    inp.select();
    inp.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast('Введите наименование раздела для КП ✏️');
  }
}

function updateGlassSwatch(gName) {
  const pill = el('glassSwatchPill');
  const title = el('glassSwatchTitle');
  if (!pill || !title) return;
  title.textContent = gName;
  pill.className = 'glass-preview-pill';
  if (/crystal|осветл/i.test(gName)) {
    pill.classList.add('swatch-crystal');
  } else if (/матовое|сатинат/i.test(gName)) {
    pill.classList.add('swatch-matte');
  } else if (/графит|серое/i.test(gName)) {
    pill.classList.add('swatch-graphite');
  } else if (/бронз/i.test(gName)) {
    pill.classList.add('swatch-bronze');
  } else if (/рифл|fluted|moru/i.test(gName)) {
    pill.classList.add('swatch-fluted');
  } else {
    pill.classList.add('swatch-classic');
  }
}

/* --- Category Switching --- */
function switchCategory(cat) {
  syncCurrentInputsToState();
  activeCategory = cat;

  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (cat === 'railings' && el('tabCatRailings')) el('tabCatRailings').classList.add('active');
  if (cat === 'balconies' && el('tabCatBalconies')) el('tabCatBalconies').classList.add('active');
  if (cat === 'showers' && el('tabCatShowers')) el('tabCatShowers').classList.add('active');
  if (cat === 'loft' && el('tabCatLoft')) el('tabCatLoft').classList.add('active');

  renderCategoryContent();
  renderPositionTabs();
  loadStateToInputs();
  calc();
}

function syncCurrentInputsToState() {
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  if (!appState[cat] || !appState[cat][pIdx]) return;
  const item = appState[cat][pIdx];

  const nameInp = el('posNameInput');
  if (nameInp) {
    item.name = nameInp.value;
  }

  if (cat === 'railings') {
    item.trapLen = el('trapLen') ? el('trapLen').value : '';
    item.rectLen = el('rectLen') ? el('rectLen').value : '';
    item.trapArea = el('trapArea') ? el('trapArea').value : '';
    item.rectArea = el('rectArea') ? el('rectArea').value : '';
    item.glass = el('glass') ? el('glass').value : Object.keys(D.railings.glass)[0];
    item.hardQty = {};
    document.querySelectorAll('.hardQty').forEach(inp => { item.hardQty[inp.dataset.idx] = inp.value; });
    item.hardSum = {};
    document.querySelectorAll('.hardSum').forEach(inp => { item.hardSum[inp.dataset.idx] = inp.value; });
    item.railSelect = el('railSelect') ? el('railSelect').value : 'Без поручня';
    item.railLength = el('railLength') ? el('railLength').value : '';
    item.railManual = el('railManual') ? el('railManual').value : '';
  } else if (cat === 'balconies') {
    item.length = el('balconyLen') ? el('balconyLen').value : '';
    item.heightMm = el('balconyHeightMm') ? el('balconyHeightMm').value : '';
    item.glass = el('balconyGlass') ? el('balconyGlass').value : Object.keys(D.balconies.glass)[0];
    item.hardQty = {};
    document.querySelectorAll('.hardQty').forEach(inp => { item.hardQty[inp.dataset.idx] = inp.value; });
    item.hardSum = {};
    document.querySelectorAll('.hardSum').forEach(inp => { item.hardSum[inp.dataset.idx] = inp.value; });
    item.railSelect = el('railSelect') ? el('railSelect').value : 'Без поручня';
    item.railLength = el('railLength') ? el('railLength').value : '';
    item.railManual = el('railManual') ? el('railManual').value : '';
  } else if (cat === 'showers') {
    item.fixedArea = el('shFixedArea') ? el('shFixedArea').value : '';
    item.doorArea = el('shDoorArea') ? el('shDoorArea').value : '';
    item.glass = el('shGlass') ? el('shGlass').value : Object.keys(D.showers.glass)[0];
    item.hardQty = {};
    document.querySelectorAll('.hardQty').forEach(inp => { item.hardQty[inp.dataset.idx] = inp.value; });
    item.hardSum = {};
    document.querySelectorAll('.hardSum').forEach(inp => { item.hardSum[inp.dataset.idx] = inp.value; });
  } else if (cat === 'loft') {
    item.area = el('loftArea') ? el('loftArea').value : '';
    item.profileLen = el('loftProfileLen') ? el('loftProfileLen').value : '';
    item.gridLen = el('loftGridLen') ? el('loftGridLen').value : '';
    item.glass = el('loftGlass') ? el('loftGlass').value : Object.keys(D.loft.glass)[0];
    item.hardQty = {};
    document.querySelectorAll('.hardQty').forEach(inp => { item.hardQty[inp.dataset.idx] = inp.value; });
    item.hardSum = {};
    document.querySelectorAll('.hardSum').forEach(inp => { item.hardSum[inp.dataset.idx] = inp.value; });
  }

  // Installation per item
  item.instOn = el('posInstOn') ? el('posInstOn').checked : true;
  item.instMode = el('posInstMode') ? el('posInstMode').value : 'fix';
  item.instFix = el('posInstFix') ? el('posInstFix').value : (item.instFix || D.misc.instFix || 35000);
  item.instPct = el('posInstPct') ? el('posInstPct').value : (item.instPct || D.misc.instPct || 30);
}

function loadStateToInputs() {
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  if (!appState[cat] || !appState[cat][pIdx]) return;
  const item = appState[cat][pIdx];

  const nameInp = el('posNameInput');
  if (nameInp) {
    nameInp.value = (item.name !== undefined && item.name !== '') ? item.name : getDefaultPositionName(cat, pIdx);
  }

  if (cat === 'railings') {
    if (el('trapLen')) el('trapLen').value = item.trapLen || '';
    if (el('rectLen')) el('rectLen').value = item.rectLen || '';
    if (el('trapArea')) el('trapArea').value = item.trapArea || '';
    if (el('rectArea')) el('rectArea').value = item.rectArea || '';
    if (el('glass')) el('glass').value = item.glass || Object.keys(D.railings.glass)[0];
    if (el('railSelect')) el('railSelect').value = item.railSelect || 'Без поручня';
    if (el('railLength')) el('railLength').value = item.railLength || '';
    if (el('railManual')) el('railManual').value = item.railManual || '';
  } else if (cat === 'balconies') {
    if (el('balconyLen')) el('balconyLen').value = item.length || '';
    if (el('balconyHeightMm')) el('balconyHeightMm').value = item.heightMm || '1000';
    if (el('balconyGlass')) el('balconyGlass').value = item.glass || Object.keys(D.balconies.glass)[0];
    if (el('railSelect')) el('railSelect').value = item.railSelect || 'Без поручня';
    if (el('railLength')) el('railLength').value = item.railLength || '';
    if (el('railManual')) el('railManual').value = item.railManual || '';
  } else if (cat === 'showers') {
    if (el('shFixedArea')) el('shFixedArea').value = item.fixedArea || '';
    if (el('shDoorArea')) el('shDoorArea').value = item.doorArea || '';
    if (el('shGlass')) el('shGlass').value = item.glass || Object.keys(D.showers.glass)[0];
  } else if (cat === 'loft') {
    if (el('loftArea')) el('loftArea').value = item.area || '';
    if (el('loftProfileLen')) el('loftProfileLen').value = item.profileLen || '';
    if (el('loftGridLen')) el('loftGridLen').value = item.gridLen || '';
    if (el('loftGlass')) el('loftGlass').value = item.glass || Object.keys(D.loft.glass)[0];
  }

  document.querySelectorAll('.hardQty').forEach(inp => {
    inp.value = (item.hardQty && item.hardQty[inp.dataset.idx]) || '';
  });
  document.querySelectorAll('.hardSum').forEach(inp => {
    inp.value = (item.hardSum && item.hardSum[inp.dataset.idx]) || '';
  });

  // Installation per item
  if (el('posInstOn')) el('posInstOn').checked = item.instOn !== false;
  if (el('posInstMode')) el('posInstMode').value = item.instMode || 'fix';
  if (el('posInstFix')) el('posInstFix').value = item.instFix !== undefined ? item.instFix : (D.misc.instFix || 35000);
  if (el('posInstPct')) el('posInstPct').value = item.instPct !== undefined ? item.instPct : (D.misc.instPct || 30);
  const mode = item.instMode || 'fix';
  if (el('posInstFixWrap')) el('posInstFixWrap').style.display = mode === 'fix' ? 'block' : 'none';
  if (el('posInstPctWrap')) el('posInstPctWrap').style.display = mode === 'pct' ? 'block' : 'none';
}

/* --- Multi-Position Tabs for current category --- */
function renderPositionTabs() {
  const container = el('positionTabs');
  const btnText = el('addPosBtnText');
  const cat = activeCategory;
  const items = appState[cat] || [];
  if (!container) return;

  const catNames = {
    railings: 'ограждение',
    balconies: 'балкон',
    showers: 'душевую',
    loft: 'перегородку'
  };
  const catIcons = {
    railings: '<img src="cat_icon_stairs.png" class="pos-tab-img" alt="Лестница">',
    balconies: '<img src="cat_icon_balcony.png" class="pos-tab-img" alt="Балкон">',
    showers: '<img src="cat_icon_shower.png" class="pos-tab-img" alt="Душевая">',
    loft: '<img src="cat_icon_loft.png" class="pos-tab-img" alt="Лофт">'
  };

  if (btnText) {
    btnText.textContent = `+ Добавить ${catNames[cat]} №${items.length + 1}`;
  }

  container.innerHTML = items.map((pos, idx) => {
    const dName = (pos.name && pos.name.trim()) || getDefaultPositionName(cat, idx);
    return `
      <div class="sec-tab ${idx === activePosIdx[cat] ? 'active' : ''}" onclick="switchPosition(${idx})">
        <span>${catIcons[cat]} <span class="sec-tab-text">${esc(dName)}</span></span>
        ${items.length > 1 ? `<span class="tab-del-btn" onclick="removePosition(${idx}, event)" title="Удалить">✕</span>` : ''}
      </div>
    `;
  }).join('');
}

function updatePositionTabsText() {
  const cat = activeCategory;
  const items = appState[cat] || [];
  const tabs = document.querySelectorAll('#positionTabs .sec-tab');
  tabs.forEach((tab, idx) => {
    if (items[idx]) {
      const span = tab.querySelector('.sec-tab-text');
      if (span) {
        const dName = (items[idx].name && items[idx].name.trim()) || getDefaultPositionName(cat, idx);
        span.textContent = dName;
      }
    }
  });
}

function switchPosition(idx) {
  if (idx === activePosIdx[activeCategory]) return;
  syncCurrentInputsToState();
  activePosIdx[activeCategory] = idx;
  renderCategoryContent();
  renderPositionTabs();
  loadStateToInputs();
  calc();
}

function addPosition() {
  syncCurrentInputsToState();
  const cat = activeCategory;
  const nextNum = appState[cat].length + 1;
  const defaultName = getDefaultPositionName(cat, nextNum - 1);

  let newPos;
  if (cat === 'railings') {
    newPos = {
      id: Date.now(),
      name: defaultName,
      trapLen: '', rectLen: '', trapArea: '', rectArea: '',
      glass: Object.keys(D.railings.glass)[0],
      hardQty: {}, hardSum: {},
      railSelect: 'Без поручня', railLength: '', railManual: '',
      instOn: true, instMode: 'fix', instFix: 35000, instPct: 30
    };
  } else if (cat === 'balconies') {
    newPos = {
      id: Date.now(),
      name: defaultName,
      length: '', heightMm: '1000',
      glass: Object.keys(D.balconies.glass)[0],
      hardQty: {}, hardSum: {},
      railSelect: 'Без поручня', railLength: '', railManual: '',
      instOn: true, instMode: 'fix', instFix: 35000, instPct: 30
    };
  } else if (cat === 'showers') {
    newPos = {
      id: Date.now(),
      name: defaultName,
      fixedArea: '', doorArea: '',
      glass: Object.keys(D.showers.glass)[0],
      hardQty: {}, hardSum: {},
      instOn: true, instMode: 'fix', instFix: 15000, instPct: 30
    };
  } else {
    newPos = {
      id: Date.now(),
      name: defaultName,
      area: '', profileLen: '', gridLen: '',
      glass: Object.keys(D.loft.glass)[0],
      hardQty: {}, hardSum: {},
      instOn: true, instMode: 'fix', instFix: 25000, instPct: 30
    };
  }

  appState[cat].push(newPos);
  activePosIdx[cat] = appState[cat].length - 1;
  renderCategoryContent();
  renderPositionTabs();
  loadStateToInputs();
  calc();
  saveAppState();
  showToast(`Добавлено: «${defaultName}»!`);
}

function removePosition(idx, event) {
  if (event) event.stopPropagation();
  const cat = activeCategory;
  if (appState[cat].length <= 1) return;

  syncCurrentInputsToState();
  appState[cat].splice(idx, 1);
  activePosIdx[cat] = Math.min(activePosIdx[cat], appState[cat].length - 1);
  renderCategoryContent();
  renderPositionTabs();
  loadStateToInputs();
  calc();
  saveAppState();
  showToast('Раздел удалён');
}

function onPositionNameChange() {
  const nameInp = el('posNameInput');
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  if (!nameInp || !appState[cat] || !appState[cat][pIdx]) return;
  
  appState[cat][pIdx].name = nameInp.value;
  updatePositionTabsText();
  calc();
  saveAppState();
}

function resetPositionName() {
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  if (!appState[cat] || !appState[cat][pIdx]) return;
  
  const def = getDefaultPositionName(cat, pIdx);
  appState[cat][pIdx].name = def;
  const nameInp = el('posNameInput');
  if (nameInp) nameInp.value = def;
  
  updatePositionTabsText();
  calc();
  saveAppState();
  showToast(`Название сброшено: ${def}`);
}

function applyPresetName(name) {
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  if (!appState[cat] || !appState[cat][pIdx]) return;
  
  appState[cat][pIdx].name = name;
  const nameInp = el('posNameInput');
  if (nameInp) nameInp.value = name;
  
  updatePositionTabsText();
  calc();
  saveAppState();
  showToast(`Название раздела: «${name}»`);
}

function getPositionInstallHtml(item) {
  const mode = item.instMode || 'fix';
  return `
    <!-- Step: Монтажные работы по позиции -->
    <section class="card">
      <div class="head">
        <h2><span class="n">🛠️</span>Монтажные работы</h2>
        <button class="btn ghost" onclick="openModal('installModal')">Настройки</button>
      </div>
      <label class="switch-wrap">
        <div class="switch">
          <input type="checkbox" id="posInstOn" ${item.instOn !== false ? 'checked' : ''} onchange="calc()">
          <span class="slider"></span>
        </div>
        <span>Включить монтаж в расчёт</span>
      </label>
      <div class="grid">
        <div class="field">
          <label>Способ расчёта монтажа</label>
          <select id="posInstMode" onchange="calc()">
            <option value="fix" ${mode === 'fix' ? 'selected' : ''}>Фиксированная сумма, ₽</option>
            <option value="pct" ${mode === 'pct' ? 'selected' : ''}>Процент от материалов (%)</option>
          </select>
        </div>
        <div class="field" id="posInstFixWrap" style="display:${mode === 'pct' ? 'none' : 'block'}">
          <label>Сумма монтажа</label>
          <div class="input-wrap">
            <input type="number" id="posInstFix" value="${item.instFix !== undefined ? item.instFix : 35000}" min="0" step="500" oninput="calc()">
            <span class="unit">₽</span>
          </div>
        </div>
        <div class="field" id="posInstPctWrap" style="display:${mode === 'pct' ? 'block' : 'none'}">
          <label>Процент от материалов</label>
          <div class="input-wrap">
            <input type="number" id="posInstPct" value="${item.instPct !== undefined ? item.instPct : 30}" min="0" step="1" oninput="calc()">
            <span class="unit">%</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* --- Render Category-Specific UI HTML --- */
function renderCategoryContent() {
  const container = el('dynamicCategoryContent');
  if (!container) return;

  const cat = activeCategory;
  const items = appState[cat] || [];
  const pIdx = activePosIdx[cat];
  const curPos = items[pIdx] || items[0] || {};
  const curName = (curPos.name !== undefined && curPos.name !== '') ? curPos.name : getDefaultPositionName(cat, pIdx);

  let html = '';

  // Section Name Customizer Card
  html += `
    <div class="sec-title-card">
      <div class="sec-title-header">
        <div class="sec-title-label">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          <span>Наименование раздела для КП</span>
        </div>
        <span class="sec-title-hint">Отображается в шапке и смете КП</span>
      </div>
      <div class="sec-title-input-wrap">
        <input type="text" class="sec-name-input" id="posNameInput" placeholder="например, Балконное ограждение 1 этаж, Ограждение террасы..." value="${esc(curName)}" oninput="onPositionNameChange()" autocomplete="off">
        <button type="button" class="btn-reset-name" onclick="resetPositionName()" title="Сбросить к исходному названию">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
          Сброс
        </button>
      </div>
    </div>
  `;

  if (cat === 'railings') {
    html += `
      <!-- Step 0: Длина ограждения -->
      <section class="card highlight">
        <div class="head">
          <h2><span class="n"><img src="cat_icon_stairs.png" class="pos-tab-img" alt=""></span>Длина ограждения (м.пог.)</h2>
        </div>
        <div class="grid">
          <div class="field">
            <label>Длина трапеций / наклонных секций</label>
            <div class="input-wrap">
              <input type="number" id="trapLen" value="${curPos.trapLen || ''}" placeholder="0" min="0" step="0.01" oninput="calcFromLength()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">× 1,25 + 35% → в пункт 2 (м²)</div>
          </div>
          <div class="field">
            <label>Длина прямоугольников / прямых секций</label>
            <div class="input-wrap">
              <input type="number" id="rectLen" value="${curPos.rectLen || ''}" placeholder="0" min="0" step="0.01" oninput="calcFromLength()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">× 1,25 → в пункт 2 (м²)</div>
          </div>
        </div>
      </section>

      <!-- Step 1: Тип стекла -->
      <section class="card">
        <div class="head">
          <h2><span class="n">1</span>Тип стекла</h2>
          <button class="btn ghost" onclick="openModal('glassModal')">Настройки</button>
        </div>
        <label>Выберите стекло (10 мм / триплекс)</label>
        <select id="glass" onchange="calc()"></select>
        <div class="glass-swatch" id="glassSwatchCard">
          <div class="glass-preview-pill swatch-classic" id="glassSwatchPill"></div>
          <div>
            <div style="font-weight:700;font-size:13.5px;" id="glassSwatchTitle">Стекло 10 мм</div>
            <div class="hint" id="glassHint" style="margin-top:2px;"></div>
          </div>
        </div>
      </section>

      <!-- Step 2: Расчёт стекла -->
      <section class="card">
        <div class="head"><h2><span class="n">2</span>Расчёт стекла</h2></div>
        <div class="sub">
          <div class="sub-title"><b>Фигуры (трапеции)</b></div>
          <div class="grid" style="margin-top:10px">
            <div class="field"><label>Площадь</label><div class="input-wrap"><input type="number" id="trapArea" value="${curPos.trapArea || ''}" placeholder="0" min="0" step="0.01" oninput="calc()"><span class="unit">м²</span></div></div>
            <div class="field"><label>Цена за м²</label><div class="input-wrap"><input type="number" id="trapPrice" readonly><span class="unit">₽/м²</span></div></div>
          </div>
        </div>
        <div class="sub">
          <div class="sub-title"><b>Прямоугольники</b></div>
          <div class="grid" style="margin-top:10px">
            <div class="field"><label>Площадь</label><div class="input-wrap"><input type="number" id="rectArea" value="${curPos.rectArea || ''}" placeholder="0" min="0" step="0.01" oninput="calc()"><span class="unit">м²</span></div></div>
            <div class="field"><label>Цена за м²</label><div class="input-wrap"><input type="number" id="rectPrice" readonly><span class="unit">₽/м²</span></div></div>
          </div>
        </div>
      </section>

      <!-- Step 3: Фурнитура -->
      <section class="card">
        <div class="head">
          <h2><span class="n">3</span>Фурнитура</h2>
          <button class="btn ghost" onclick="openModal('hardModal')">Настройки</button>
        </div>
        <div id="hardList"></div>
      </section>

      <!-- Step 4: Поручень -->
      <section class="card">
        <div class="head">
          <h2><span class="n">4</span>Поручень</h2>
          <button class="btn ghost" onclick="openModal('railModal')">Настройки</button>
        </div>
        <label>Тип поручня</label>
        <select id="railSelect" onchange="calc()"></select>
        <div class="grid" style="margin-top:12px">
          <div class="field"><label>Длина</label><div class="input-wrap"><input type="number" id="railLength" value="${curPos.railLength || ''}" placeholder="—" min="0" step="0.1" oninput="calc()"><span class="unit">м.пог</span></div></div>
          <div class="field"><label>Сумма вручную</label><div class="input-wrap"><input type="number" id="railManual" value="${curPos.railManual || ''}" placeholder="авто" min="0" step="100" oninput="calc()"><span class="unit">₽</span></div></div>
        </div>
        <div class="hint" id="railHint"></div>
      </section>

      ${getPositionInstallHtml(curPos)}
    `;
  } else if (cat === 'balconies') {
    html += `
      <!-- Step 0: Размеры балконного ограждения -->
      <section class="card highlight">
        <div class="head">
          <h2><span class="n"><img src="cat_icon_balcony.png" class="pos-tab-img" alt=""></span>Размеры балкона</h2>
        </div>
        <div class="grid">
          <div class="field">
            <label>Длина ограждения</label>
            <div class="input-wrap">
              <input type="number" id="balconyLen" value="${curPos.length || ''}" placeholder="0" min="0" step="0.01" oninput="calc()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">Общая длина прямого контура</div>
          </div>
          <div class="field">
            <label>Высота стекла</label>
            <div class="input-wrap">
              <input type="number" id="balconyHeightMm" value="${curPos.heightMm !== undefined ? curPos.heightMm : '1000'}" placeholder="1000" min="100" step="10" oninput="calc()">
              <span class="unit">мм</span>
            </div>
            <div class="hint">Стандарт: 1000–1200 мм</div>
          </div>
          <div class="field">
            <label>Расчётная площадь</label>
            <div class="input-wrap">
              <input type="number" id="balconyArea" placeholder="0" readonly>
              <span class="unit">м²</span>
            </div>
            <div class="hint" id="balconyAreaHint">Длина × Высота</div>
          </div>
        </div>
      </section>

      <!-- Step 1: Тип стекла -->
      <section class="card">
        <div class="head">
          <h2><span class="n">1</span>Тип стекла</h2>
          <button class="btn ghost" onclick="openModal('glassModal')">Настройки</button>
        </div>
        <label>Выберите стекло (10 мм / триплекс)</label>
        <select id="balconyGlass" onchange="calc()"></select>
        <div class="glass-swatch" id="glassSwatchCard">
          <div class="glass-preview-pill swatch-classic" id="glassSwatchPill"></div>
          <div>
            <div style="font-weight:700;font-size:13.5px;" id="glassSwatchTitle">Стекло 10 мм</div>
            <div class="hint" id="glassHint" style="margin-top:2px;"></div>
          </div>
        </div>
      </section>

      <!-- Step 2: Фурнитура -->
      <section class="card">
        <div class="head">
          <h2><span class="n">2</span>Фурнитура</h2>
          <button class="btn ghost" onclick="openModal('hardModal')">Настройки</button>
        </div>
        <div id="hardList"></div>
      </section>

      <!-- Step 3: Поручень -->
      <section class="card">
        <div class="head">
          <h2><span class="n">3</span>Поручень</h2>
          <button class="btn ghost" onclick="openModal('railModal')">Настройки</button>
        </div>
        <label>Тип поручня</label>
        <select id="railSelect" onchange="calc()"></select>
        <div class="grid" style="margin-top:12px">
          <div class="field"><label>Длина</label><div class="input-wrap"><input type="number" id="railLength" value="${curPos.railLength || ''}" placeholder="—" min="0" step="0.1" oninput="calc()"><span class="unit">м.пог</span></div></div>
          <div class="field"><label>Сумма вручную</label><div class="input-wrap"><input type="number" id="railManual" value="${curPos.railManual || ''}" placeholder="авто" min="0" step="100" oninput="calc()"><span class="unit">₽</span></div></div>
        </div>
        <div class="hint" id="railHint"></div>
      </section>

      ${getPositionInstallHtml(curPos)}
    `;
  } else if (cat === 'showers') {
    html += `
      <!-- Step 1: Размеры душевого ограждения -->
      <section class="card highlight">
        <div class="head">
          <h2><span class="n"><img src="cat_icon_shower.png" class="pos-tab-img" alt=""></span>Размеры душевой (м²)</h2>
        </div>
        <div class="grid">
          <div class="field">
            <label>Глухие стеклянные перегородки</label>
            <div class="input-wrap">
              <input type="number" id="shFixedArea" value="${curPos.fixedArea || ''}" placeholder="0" min="0" step="0.01" oninput="calc()">
              <span class="unit">м²</span>
            </div>
            <div class="hint">Площадь неподвижных секций</div>
          </div>
          <div class="field">
            <label>Распашные / раздвижные створки</label>
            <div class="input-wrap">
              <input type="number" id="shDoorArea" value="${curPos.doorArea || ''}" placeholder="0" min="0" step="0.01" oninput="calc()">
              <span class="unit">м²</span>
            </div>
            <div class="hint">Площадь подвижных дверей</div>
          </div>
        </div>
      </section>

      <!-- Step 2: Стекло для душевых -->
      <section class="card">
        <div class="head">
          <h2><span class="n">1</span>Тип стекла</h2>
          <button class="btn ghost" onclick="openModal('glassModal')">Настройки</button>
        </div>
        <label>Выберите душевое стекло (закаленное 8 мм)</label>
        <select id="shGlass" onchange="calc()"></select>
        <div class="glass-swatch" id="glassSwatchCard">
          <div class="glass-preview-pill swatch-classic" id="glassSwatchPill"></div>
          <div>
            <div style="font-weight:700;font-size:13.5px;" id="glassSwatchTitle">Закаленное 8 мм</div>
            <div class="hint" id="glassHint" style="margin-top:2px;"></div>
          </div>
        </div>
      </section>

      <!-- Step 3: Душевая фурнитура -->
      <section class="card">
        <div class="head">
          <h2><span class="n">2</span>Душевая фурнитура и комплектующие</h2>
          <button class="btn ghost" onclick="openModal('hardModal')">Настройки</button>
        </div>
        <div id="hardList"></div>
      </section>

      ${getPositionInstallHtml(curPos)}
    `;
  } else if (cat === 'loft') {
    html += `
      <!-- Step 1: Размеры лофт-перегородки -->
      <section class="card highlight">
        <div class="head">
          <h2><span class="n"><img src="cat_icon_loft.png" class="pos-tab-img" alt=""></span>Размеры и метраж профиля</h2>
        </div>
        <div class="grid">
          <div class="field">
            <label>Общая площадь остекления</label>
            <div class="input-wrap">
              <input type="number" id="loftArea" value="${curPos.area || ''}" placeholder="0" min="0" step="0.01" oninput="calc()">
              <span class="unit">м²</span>
            </div>
            <div class="hint">Ширина × Высота конструкции</div>
          </div>
          <div class="field">
            <label>Длина каркасного профиля</label>
            <div class="input-wrap">
              <input type="number" id="loftProfileLen" value="${curPos.profileLen || ''}" placeholder="0" min="0" step="0.1" oninput="calc()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">Внешний контур и коробка</div>
          </div>
          <div class="field">
            <label>Длина раскладки (шпросов)</label>
            <div class="input-wrap">
              <input type="number" id="loftGridLen" value="${curPos.gridLen || ''}" placeholder="0" min="0" step="0.1" oninput="calc()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">Внутренняя ячеистая сетка</div>
          </div>
        </div>
      </section>

      <!-- Step 2: Стекло для лофт перегородок -->
      <section class="card">
        <div class="head">
          <h2><span class="n">1</span>Тип стекла</h2>
          <button class="btn ghost" onclick="openModal('glassModal')">Настройки</button>
        </div>
        <label>Выберите стекло (закаленное 6 мм)</label>
        <select id="loftGlass" onchange="calc()"></select>
        <div class="glass-swatch" id="glassSwatchCard">
          <div class="glass-preview-pill swatch-classic" id="glassSwatchPill"></div>
          <div>
            <div style="font-weight:700;font-size:13.5px;" id="glassSwatchTitle">Закаленное 6 мм</div>
            <div class="hint" id="glassHint" style="margin-top:2px;"></div>
          </div>
        </div>
      </section>

      <!-- Step 3: Фурнитура и механизмы лофт -->
      <section class="card">
        <div class="head">
          <h2><span class="n">2</span>Каркас, механизмы и ручки</h2>
          <button class="btn ghost" onclick="openModal('hardModal')">Настройки</button>
        </div>
        <div id="hardList"></div>
      </section>

      ${getPositionInstallHtml(curPos)}
    `;
  }

  container.innerHTML = html;
  buildActiveSelects();
  buildHardList();
}

function buildActiveSelects() {
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  const curPos = (appState[cat] && appState[cat][pIdx]) || {};

  if (cat === 'railings') {
    const s = el('glass');
    if (s) {
      s.innerHTML = Object.keys(D.railings.glass).map(k => `<option value="${k}">${k}</option>`).join('');
      if (curPos.glass && D.railings.glass[curPos.glass]) s.value = curPos.glass;
    }
    const r = el('railSelect');
    if (r) {
      r.innerHTML = D.railings.rail.map(item => `<option value="${item.name}">${(!isDealerMode && item.price > 0) ? item.name + ' — ' + fmt(item.price) + ' ₽/м.пог' : item.name}</option>`).join('');
      if (curPos.railSelect) r.value = curPos.railSelect;
    }
  } else if (cat === 'balconies') {
    const s = el('balconyGlass');
    if (s) {
      s.innerHTML = Object.keys(D.balconies.glass).map(k => `<option value="${k}">${!isDealerMode ? k + ' — ' + fmt(D.balconies.glass[k].price) + ' ₽/м²' : k}</option>`).join('');
      if (curPos.glass && D.balconies.glass[curPos.glass]) s.value = curPos.glass;
    }
    const r = el('railSelect');
    if (r) {
      r.innerHTML = D.balconies.rail.map(item => `<option value="${item.name}">${(!isDealerMode && item.price > 0) ? item.name + ' — ' + fmt(item.price) + ' ₽/м.пог' : item.name}</option>`).join('');
      if (curPos.railSelect) r.value = curPos.railSelect;
    }
  } else if (cat === 'showers') {
    const s = el('shGlass');
    if (s) {
      s.innerHTML = Object.keys(D.showers.glass).map(k => `<option value="${k}">${!isDealerMode ? k + ' — ' + fmt(D.showers.glass[k].price) + ' ₽/м²' : k}</option>`).join('');
      if (curPos.glass && D.showers.glass[curPos.glass]) s.value = curPos.glass;
    }
  } else if (cat === 'loft') {
    const s = el('loftGlass');
    if (s) {
      s.innerHTML = Object.keys(D.loft.glass).map(k => `<option value="${k}">${!isDealerMode ? k + ' — ' + fmt(D.loft.glass[k].price) + ' ₽/м²' : k}</option>`).join('');
      if (curPos.glass && D.loft.glass[curPos.glass]) s.value = curPos.glass;
    }
  }
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
  const listEl = el('hardList');
  if (!listEl) return;
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  const curPos = (appState[cat] && appState[cat][pIdx]) || {};
  const hardItems = D[cat].hard || [];

  listEl.innerHTML = hardItems.map((item, idx) => {
    const qtyVal = (curPos.hardQty && curPos.hardQty[idx]) || '';
    const sumVal = (curPos.hardSum && curPos.hardSum[idx]) || '';
    return `
      <div class="row3">
        <div class="nm">${item.name}<span class="pt">${fmt(item.price)} ₽/${item.unit}</span></div>
        <div>
          <label>Кол-во (${item.unit})</label>
          <div class="stepper">
            <button type="button" class="stepper-btn" onclick="stepHard(${idx}, -1)">−</button>
            <input type="number" class="hardQty" data-idx="${idx}" value="${qtyVal}" placeholder="0" min="0" step="any" oninput="calc()">
            <button type="button" class="stepper-btn" onclick="stepHard(${idx}, 1)">+</button>
          </div>
        </div>
        <div>
          <label>Сумма, ₽</label>
          <div class="input-wrap">
            <input type="number" class="hardSum" data-idx="${idx}" value="${sumVal}" placeholder="авто" min="0" step="100" oninput="calc()">
            <span class="unit">₽</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

function buildServiceList() {
  const listEl = el('serviceList');
  if (!listEl) return;
  listEl.innerHTML = D.services.map((s, idx) => `
    <div class="row3" style="grid-template-columns:1fr 140px">
      <div class="nm">${s.name}<span class="pt">пусто → скрыть</span></div>
      <div>
        <label>Цена, ₽</label>
        <div class="input-wrap">
          <input type="number" class="servPrice" data-idx="${idx}" placeholder="—" min="0" step="100" oninput="calc()">
          <span class="unit">₽</span>
        </div>
      </div>
    </div>`).join('');
}

function calcFromLength() {
  const tLenStr = el('trapLen') ? el('trapLen').value.trim().replace(',', '.') : '';
  if (tLenStr !== '') {
    const tLen = parseFloat(tLenStr) || 0;
    const trapM2 = tLen > 0 ? +(tLen * 1.25 * 1.35).toFixed(2) : 0;
    if (el('trapArea')) el('trapArea').value = trapM2 > 0 ? trapM2 : '';
  } else {
    if (el('trapArea')) el('trapArea').value = '';
  }

  const rLenStr = el('rectLen') ? el('rectLen').value.trim().replace(',', '.') : '';
  if (rLenStr !== '') {
    const rLen = parseFloat(rLenStr) || 0;
    const rectM2 = rLen > 0 ? +(rLen * 1.25).toFixed(2) : 0;
    if (el('rectArea')) el('rectArea').value = rectM2 > 0 ? rectM2 : '';
  } else {
    if (el('rectArea')) el('rectArea').value = '';
  }

  calc();
}

let adjMode = 'none'; // 'none' | 'discount' | 'markup'

function setAdjMode(mode, skipCalc = false) {
  adjMode = mode || 'none';
  const tabNone = el('dmTabNone');
  const tabDisc = el('dmTabDiscount');
  const tabMark = el('dmTabMarkup');
  const inputWrap = el('dmInputWrap');
  const inputLabel = el('dmInputLabel');
  const pctInp = el('adjPercent');

  [tabNone, tabDisc, tabMark].forEach(t => {
    if (t) t.className = 'dm-tab';
  });

  if (mode === 'discount') {
    if (tabDisc) tabDisc.classList.add('active-discount');
    if (inputWrap) inputWrap.style.display = 'block';
    if (inputLabel) inputLabel.textContent = 'Размер скидки, %';
    if (pctInp && !pctInp.value && !skipCalc) pctInp.value = '10';
  } else if (mode === 'markup') {
    if (tabMark) tabMark.classList.add('active-markup');
    if (inputWrap) inputWrap.style.display = 'block';
    if (inputLabel) inputLabel.textContent = isDealerMode ? 'Размер вашей наценки, %' : 'Размер наценки / бонуса, %';
    if (pctInp && !pctInp.value && !skipCalc) pctInp.value = '15';
  } else {
    if (tabNone) tabNone.classList.add('active');
    if (inputWrap) inputWrap.style.display = 'none';
    if (pctInp && !skipCalc) pctInp.value = '';
  }

  if (!skipCalc) {
    calc();
  }
}

function getPriceMultiplier() {
  if (adjMode === 'none') return 1.0;
  const pct = Math.abs(parseFloat(el('adjPercent') ? el('adjPercent').value : 0)) || 0;
  if (pct === 0) return 1.0;
  if (adjMode === 'discount') {
    return Math.max(0.01, 1 - (pct / 100));
  } else if (adjMode === 'markup') {
    return 1 + (pct / 100);
  }
  return 1.0;
}

/* --- Calculation Engine with Per-Item Installation --- */
function calculateCategoryData(cat) {
  const mult = getPriceMultiplier();
  const positions = appState[cat] || [];
  const calcPositions = [];
  let categoryTotal = 0;

  positions.forEach((pos, pIdx) => {
    let glassSum = 0;
    let glassName = '';

    if (cat === 'railings') {
      glassName = pos.glass || Object.keys(D.railings.glass)[0];
      const g = D.railings.glass[glassName] || { trap: 0, rect: 0 };
      const trapA = parseFloat(pos.trapArea) || 0;
      const rectA = parseFloat(pos.rectArea) || 0;
      const raw = trapA * g.trap + rectA * g.rect;
      glassSum = roundUp500(raw * mult);
    } else if (cat === 'balconies') {
      glassName = pos.glass || Object.keys(D.balconies.glass)[0];
      const g = D.balconies.glass[glassName] || { price: 10000 };
      const bLen = parseFloat(pos.length) || 0;
      const bH = parseFloat(pos.heightMm) || 1000;
      const totalArea = bLen > 0 ? bLen * (bH / 1000) : 0;
      const raw = totalArea * (g.price || 10000);
      glassSum = roundUp500(raw * mult);
    } else if (cat === 'showers') {
      glassName = pos.glass || Object.keys(D.showers.glass)[0];
      const g = D.showers.glass[glassName] || { price: 0 };
      const totalArea = (parseFloat(pos.fixedArea) || 0) + (parseFloat(pos.doorArea) || 0);
      const raw = totalArea * g.price;
      glassSum = roundUp500(raw * mult);
    } else if (cat === 'loft') {
      glassName = pos.glass || Object.keys(D.loft.glass)[0];
      const g = D.loft.glass[glassName] || { price: 0 };
      const totalArea = parseFloat(pos.area) || 0;
      const raw = totalArea * g.price;
      glassSum = roundUp500(raw * mult);
    }

    // Hardware
    let hardSum = 0;
    const hardParts = [];
    const hardConfig = D[cat].hard || [];
    hardConfig.forEach((item, hIdx) => {
      const qStr = pos.hardQty && pos.hardQty[hIdx];
      const qty = qStr !== undefined && String(qStr).trim() !== '' ? (parseFloat(qStr) || 0) : null;
      const mStr = pos.hardSum && pos.hardSum[hIdx];
      const man = mStr !== undefined && String(mStr).trim() !== '' ? (parseFloat(mStr) || 0) : null;
      let s = 0;
      if (man !== null) s = man;
      else if (qty !== null) s = qty * item.price;
      if (s > 0 || (qty !== null && qty > 0)) {
        hardSum += s;
        hardParts.push(item.name.toLowerCase() + (qty ? ` ${qty} ${item.unit}` : ''));
      }
    });
    const hardTotal = roundUp500(hardSum * mult);

    // Handrail (for railings and balconies)
    let railTotal = 0;
    let hasRail = false;
    let railName = 'Без поручня';
    if (cat === 'railings' || cat === 'balconies') {
      railName = pos.railSelect || 'Без поручня';
      const railItem = D[cat].rail.find(r => r.name === railName) || { price: 0 };
      const railLen = pos.railLength !== undefined && String(pos.railLength).trim() !== '' ? (parseFloat(pos.railLength) || 0) : null;
      const railMan = pos.railManual !== undefined && String(pos.railManual).trim() !== '' ? (parseFloat(pos.railManual) || 0) : null;
      hasRail = railName !== 'Без поручня' && !/без поручня/i.test(railName) && ((railLen !== null && railLen > 0) || (railMan !== null && railMan > 0));

      let rawRailSum = 0;
      if (hasRail) {
        if (railMan !== null) rawRailSum = railMan;
        else if (railLen !== null) rawRailSum = railLen * railItem.price;
      }
      railTotal = roundUp500(rawRailSum * mult);
    }

    const posMaterials = glassSum + hardTotal + railTotal;

    // Per-Position Installation (only if item has materials > 0)
    let posInstSum = 0;
    const isInstOn = pos.instOn !== false;
    if (isInstOn && posMaterials > 0) {
      const iMode = pos.instMode || 'fix';
      if (iMode === 'pct') {
        const pctVal = parseFloat(pos.instPct) || 30;
        posInstSum = roundUp500(posMaterials * pctVal / 100);
      } else {
        const fixVal = parseFloat(pos.instFix);
        const rawFix = isNaN(fixVal) ? (D.misc.instFix || 35000) : fixVal;
        posInstSum = roundUp500(rawFix * mult);
      }
    }

    const posTotal = posMaterials + posInstSum;
    categoryTotal += posTotal;

    calcPositions.push({
      pos,
      idx: pIdx,
      cat,
      glassName,
      glassSum,
      parts: hardParts,
      hardTotal,
      hasRail,
      railName,
      railTotal,
      posMaterials,
      isInstOn,
      posInstSum,
      posTotal
    });
  });

  return { calcPositions, categoryTotal };
}

function calc() {
  syncCurrentInputsToState();

  const curCat = activeCategory;
  const curPIdx = activePosIdx[curCat];
  const curItem = appState[curCat][curPIdx];

  // Active Category & Glass info update
  if (curCat === 'railings') {
    const gName = curItem.glass || Object.keys(D.railings.glass)[0];
    const g = D.railings.glass[gName] || { trap: 0, rect: 0 };
    if (el('trapPrice')) el('trapPrice').value = g.trap;
    if (el('rectPrice')) el('rectPrice').value = g.rect;
    if (el('glassHint')) el('glassHint').textContent = !isDealerMode ? `Трапеции — ${fmt(g.trap)} ₽/м² · Прямоугольники — ${fmt(g.rect)} ₽/м²` : '';
    updateGlassSwatch(gName);
  } else if (curCat === 'balconies') {
    const gName = curItem.glass || Object.keys(D.balconies.glass)[0];
    const g = D.balconies.glass[gName] || { price: 10000 };
    const bLen = parseFloat(curItem.length) || 0;
    const bH = parseFloat(curItem.heightMm) || 1000;
    const bArea = bLen > 0 ? +(bLen * (bH / 1000)).toFixed(2) : 0;
    if (el('balconyArea')) el('balconyArea').value = bArea > 0 ? bArea : '';
    if (el('balconyAreaHint')) el('balconyAreaHint').textContent = !isDealerMode ? (bLen > 0 ? `${bLen} м × ${bH} мм = ${bArea} м²` : 'Длина × Высота') : (bArea > 0 ? `Площадь: ${bArea} м²` : '');
    if (el('glassHint')) el('glassHint').textContent = !isDealerMode ? `Цена стекла — ${fmt(g.price || 10000)} ₽/м²` : '';
    updateGlassSwatch(gName);
  } else if (curCat === 'showers') {
    const gName = curItem.glass || Object.keys(D.showers.glass)[0];
    const g = D.showers.glass[gName] || { price: 0 };
    if (el('glassHint')) el('glassHint').textContent = !isDealerMode ? `Цена стекла 8 мм — ${fmt(g.price)} ₽/м²` : '';
    updateGlassSwatch(gName);
  } else if (curCat === 'loft') {
    const gName = curItem.glass || Object.keys(D.loft.glass)[0];
    const g = D.loft.glass[gName] || { price: 0 };
    if (el('glassHint')) el('glassHint').textContent = !isDealerMode ? `Цена стекла 6 мм — ${fmt(g.price)} ₽/м²` : '';
    updateGlassSwatch(gName);
  }

  // Calculate all 4 categories
  const resRailings = calculateCategoryData('railings');
  const resBalconies = calculateCategoryData('balconies');
  const resShowers = calculateCategoryData('showers');
  const resLoft = calculateCategoryData('loft');

  const allCategoriesTotal = resRailings.categoryTotal + resBalconies.categoryTotal + resShowers.categoryTotal + resLoft.categoryTotal;
  const mult = getPriceMultiplier();

  // Global Services (Delivery & Add. services)
  const rawDelSum = el('delOn').checked ? num('delPrice') : 0;
  const delSum = roundUp500(rawDelSum * mult);

  let servSum = 0;
  const servLines = [];
  document.querySelectorAll('.servPrice').forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    const s = D.services[idx];
    if (!s) return;
    const v = inp.value.trim() === '' ? null : (parseFloat(inp.value) || 0);
    if (v !== null && v > 0) {
      const roundedV = roundUp500(v * mult);
      servSum += roundedV;
      servLines.push(`${s.name} — ${rub(roundedV)}`);
    }
  });

  const total = allCategoriesTotal + delSum + servSum;

  el('sum').textContent = rub(total);
  const floatEl = el('floatingSum');
  if (floatEl) floatEl.textContent = rub(total);

  const activeCalculated = [
    ...resRailings.calcPositions,
    ...resBalconies.calcPositions,
    ...resShowers.calcPositions,
    ...resLoft.calcPositions
  ].filter(cp => cp.posTotal > 0 || cp.glassSum > 0 || cp.hardTotal > 0);

  // Automatic manufacturing term calculation (Maximum across all active positions)
  const termGlassDays = (D.misc && D.misc.termGlass) ? parseInt(D.misc.termGlass, 10) : 21;
  const termTriplexDays = (D.misc && D.misc.termTripl) ? parseInt(D.misc.termTripl, 10) : 25;

  let hasTriplex = false;
  activeCalculated.forEach(cp => {
    if (/триплекс/i.test(cp.glassName)) {
      hasTriplex = true;
    }
  });

  if (activeCalculated.length === 0) {
    const curG = (curCat === 'railings' || curCat === 'balconies') ? curItem.glass : '';
    if (/триплекс/i.test(curG)) {
      hasTriplex = true;
    }
  }

  const autoDays = hasTriplex ? termTriplexDays : termGlassDays;

  if (!termManual) {
    if (el('termDays')) el('termDays').value = autoDays;
  }

  const finalDays = !termManual ? autoDays : (num('termDays') || autoDays);

  if (el('termHint')) {
    el('termHint').textContent = termManual
      ? 'Срок задан вручную'
      : (hasTriplex ? `Авто: триплекс — ${termTriplexDays} раб. дней (макс.)` : `Авто: стекло 10 мм — ${termGlassDays} раб. день`);
  }

  // Render proposal text
  let t = '';
  let counter = 1;

  if (activeCalculated.length === 0) {
    const curCP = calculateCategoryData(curCat).calcPositions[curPIdx];
    const posTitle = (curCP && curCP.pos && curCP.pos.name && curCP.pos.name.trim()) || getDefaultPositionName(curCat, curPIdx);
    t = `Коммерческое предложение:\n«${posTitle}»\n\n`;
    t += `${counter++}. Стекло закаленное ${curCP.glassName} — ${rub(curCP.glassSum)}\n`;
    t += `${counter++}. Комплект фурнитуры — ${rub(curCP.hardTotal)}\n`;
    t += `${counter++}. Монтажные работы — ${curCP.isInstOn ? (curCP.posInstSum > 0 ? rub(curCP.posInstSum) : '0 ₽') : 'не требуются'}\n`;
  } else if (activeCalculated.length === 1) {
    const cp = activeCalculated[0];
    const posTitle = (cp.pos && cp.pos.name && cp.pos.name.trim()) || getDefaultPositionName(cp.cat, cp.idx !== undefined ? cp.idx : 0);
    t = `Коммерческое предложение:\n«${posTitle}»\n\n`;
    t += `${counter++}. Стекло закаленное ${cp.glassName} — ${rub(cp.glassSum)}\n`;
    t += `${counter++}. Комплект фурнитуры`;
    if (cp.parts.length) t += ` (${cp.parts.join(', ')})`;
    t += ` — ${rub(cp.hardTotal)}\n`;
    if (cp.hasRail) {
      t += `${counter++}. Поручень: ${cp.railName} — ${rub(cp.railTotal)}\n`;
    }
    t += `${counter++}. Монтажные работы — ${cp.isInstOn ? (cp.posInstSum > 0 ? rub(cp.posInstSum) : '0 ₽') : 'не требуются'}\n`;
  } else {
    t = 'Стоимость заказа будет следующей:\n\n';
    activeCalculated.forEach((cp, idx) => {
      const posTitle = (cp.pos && cp.pos.name && cp.pos.name.trim()) || getDefaultPositionName(cp.cat, cp.idx !== undefined ? cp.idx : idx);
      t += `${idx + 1}. ${posTitle}:\n`;
      t += `  • Стекло закаленное ${cp.glassName} — ${rub(cp.glassSum)}\n`;
      t += `  • Комплект фурнитуры${cp.parts.length ? ` (${cp.parts.join(', ')})` : ''} — ${rub(cp.hardTotal)}\n`;
      if (cp.hasRail) {
        t += `  • Поручень: ${cp.railName} — ${rub(cp.railTotal)}\n`;
      }
      t += `  • Монтажные работы — ${cp.isInstOn ? (cp.posInstSum > 0 ? rub(cp.posInstSum) : '0 ₽') : 'не требуются'}\n`;
      t += `  Итого — ${rub(cp.posTotal)}\n\n`;
    });
    counter = activeCalculated.length + 1;
  }

  t += `${counter++}. Доставка, разгрузка — ${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : 'не требуется'}\n`;
  servLines.forEach(line => { t += `${counter++}. ${line}\n`; });

  t += `\nИтого общая стоимость — ${fmt(total)} рублей.\n`;
  t += `Срок изготовления — ${finalDays} рабочих дней.`;

  el('quoteText').textContent = t;
  updateKpDocumentData(null, true);
}

/* --- Export & Share Flow with Confirmation Popup --- */
function countConfiguredCategories() {
  const r = calculateCategoryData('railings').categoryTotal;
  const b = calculateCategoryData('balconies').categoryTotal;
  const s = calculateCategoryData('showers').categoryTotal;
  const l = calculateCategoryData('loft').categoryTotal;
  let count = 0;
  if (r > 0) count++;
  if (b > 0) count++;
  if (s > 0) count++;
  if (l > 0) count++;
  return count;
}

function initiateExport(format) {
  const catCount = countConfiguredCategories();
  if (catCount > 1) {
    pendingAction = { type: 'export', format };
    const curPos = appState[activeCategory] && appState[activeCategory][activePosIdx[activeCategory]];
    const curPosName = (curPos && curPos.name && curPos.name.trim()) || '';
    const catNames = { railings: 'Лестничные ограждения', balconies: 'Балконные ограждения', showers: 'Душевые ограждения', loft: 'Лофт-перегородки' };
    el('singleChoiceTitle').textContent = `Только ${curPosName || catNames[activeCategory]}`;
    openModal('mergeChoiceModal');
  } else {
    exportKP(format, false);
  }
}

function initiateShare() {
  const catCount = countConfiguredCategories();
  if (catCount > 1) {
    pendingAction = { type: 'share', format: 'pdf' };
    const curPos = appState[activeCategory] && appState[activeCategory][activePosIdx[activeCategory]];
    const curPosName = (curPos && curPos.name && curPos.name.trim()) || '';
    const catNames = { railings: 'Лестничные ограждения', balconies: 'Балконные ограждения', showers: 'Душевые ограждения', loft: 'Лофт-перегородки' };
    el('singleChoiceTitle').textContent = `Только ${curPosName || catNames[activeCategory]}`;
    openModal('mergeChoiceModal');
  } else {
    sharePDF(false);
  }
}

function executePendingExport(isMerged) {
  closeModal('mergeChoiceModal');
  if (!pendingAction) return;
  if (pendingAction.type === 'export') {
    exportKP(pendingAction.format, isMerged);
  } else if (pendingAction.type === 'share') {
    sharePDF(isMerged);
  }
  pendingAction = null;
}

async function fetchNextSequenceNumber() {
  let localNum = parseInt(localStorage.getItem('glassloft_kp_seq_num') || '0', 10);
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const res = await fetch('https://countapi.mileshilliard.com/api/v1/hit/glassloft_buchnev_seq_kp', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.value === 'number') {
        const cloudNum = data.value;
        const finalNum = Math.max(cloudNum, localNum + 1);
        localStorage.setItem('glassloft_kp_seq_num', String(finalNum));
        currentKpSeqNumber = finalNum;
        return finalNum;
      }
    }
  } catch (e) {
    console.warn('Using offline sequence counter', e);
  }
  
  localNum += 1;
  localStorage.setItem('glassloft_kp_seq_num', String(localNum));
  currentKpSeqNumber = localNum;
  return localNum;
}

async function fetchCurrentSequenceNumber() {
  if (currentKpSeqNumber !== null) return currentKpSeqNumber;
  let localNum = parseInt(localStorage.getItem('glassloft_kp_seq_num') || '1', 10);
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch('https://countapi.mileshilliard.com/api/v1/get/glassloft_buchnev_seq_kp', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.value === 'number') {
        const cloudNext = data.value + 1;
        const nextNum = Math.max(cloudNext, localNum);
        currentKpSeqNumber = nextNum;
        return nextNum;
      }
    }
  } catch (e) {}
  
  currentKpSeqNumber = localNum;
  return localNum;
}

function getFormattedDates() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const d = pad(now.getDate());
  const m = pad(now.getMonth() + 1);
  const y = now.getFullYear();
  const yy = String(y).slice(-2);
  const dateStr = `${d}.${m}.${y}`;
  const noDots = `${d}${m}${yy}`;
  
  const exp = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
  const expD = pad(exp.getDate());
  const expM = pad(exp.getMonth() + 1);
  const expY = exp.getFullYear();
  const expStr = `${expD}.${expM}.${expY}`;
  
  return { dateStr, noDots, expStr };
}

function getKpFileName(forcedDocNum, isMerged) {
  const dates = getFormattedDates();
  const seqNum = forcedDocNum || currentKpSeqNumber || 1;
  const rawAddr = (el('calcAddress') && el('calcAddress').value.trim()) || 'г. Санкт-Петербург';
  const addrClean = rawAddr
    .replace(/[\s,.-]+/g, '_')
    .replace(/[^a-zA-Z0-9а-яА-ЯёЁ_]/g, '')
    .replace(/^_+|_+$/g, '');
    
  return `КП_${seqNum}-${dates.noDots}_${addrClean || 'объект'}`;
}

function getMaterialThumbnailHtml(activeList) {
  const materials = [];
  const addedKeys = new Set();

  function addMaterial(type, title, imgPath) {
    const key = `${type}_${title}_${imgPath}`;
    if (!addedKeys.has(key) && imgPath) {
      addedKeys.add(key);
      materials.push({ type, title, imgPath });
    }
  }

  activeList.forEach(cp => {
    // 1. Glass mapping
    const gName = cp.glassName || '';
    if (/crystal|осветл/i.test(gName)) {
      addMaterial('Стекло', gName, 'mat_glass_crystal.png');
    } else if (/графит.*триплекс|триплекс.*графит/i.test(gName)) {
      addMaterial('Стекло', gName, 'mat_glass_triplex_graphite.png');
    } else if (/графит|серое/i.test(gName)) {
      addMaterial('Стекло', gName, 'mat_glass_graphite.png');
    } else if (/бронз/i.test(gName)) {
      addMaterial('Стекло', gName, 'mat_glass_bronze.png');
    } else {
      addMaterial('Стекло', gName, 'mat_glass_classic.png');
    }

    // 2. Hardware mapping
    const hardQty = (cp.pos && cp.pos.hardQty) || {};
    const cat = cp.cat;
    const hardItems = (D[cat] && D[cat].hard) || [];
    
    hardItems.forEach((h, hIdx) => {
      const q = parseFloat(hardQty[hIdx]) || 0;
      if (q > 0) {
        if (/точечн/i.test(h.name)) {
          addMaterial('Крепление', h.name, 'mat_hard_point.png');
        } else if (/опорн.*профиль|профиль/i.test(h.name)) {
          addMaterial('Крепление', h.name, 'mat_hard_profile.png');
        } else if (/коннектор/i.test(h.name)) {
          addMaterial('Фурнитура', h.name, 'mat_hard_connector.png');
        }
      }
    });

    // 3. Handrail mapping
    if (cp.hasRail && cp.railName) {
      const rName = cp.railName;
      if (/дуб.*масло|масло.*воск/i.test(rName)) {
        addMaterial('Поручень', rName, 'mat_rail_oak_oil.png');
      } else if (/эмаль|покрас/i.test(rName)) {
        addMaterial('Поручень', rName, 'mat_rail_paint.png');
      } else if (/образц/i.test(rName)) {
        addMaterial('Поручень', rName, 'mat_rail_custom.png');
      }
    }
  });

  if (materials.length === 0) return '';

  return `
    <div class="kp-materials-gallery">
      ${materials.map(m => `
        <div class="kp-mat-card">
          <img src="${m.imgPath}" class="kp-mat-img" alt="${esc(m.title)}">
          <div class="kp-mat-info">
            <div class="kp-mat-type">${esc(m.type)}</div>
            <div class="kp-mat-title">${esc(m.title)}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function updateKpDocumentData(forcedDocNum, isMerged) {
  const dates = getFormattedDates();
  const seqNum = forcedDocNum || currentKpSeqNumber || 1;
  const mult = getPriceMultiplier();

  const clientVal = (el('calcClient') && el('calcClient').value.trim()) || 'Частное лицо';
  const addressVal = (el('calcAddress') && el('calcAddress').value.trim()) || 'г. Санкт-Петербург';
  const prepayVal = '50%';

  if (el('kpDocNum')) el('kpDocNum').textContent = `№ ${seqNum}/${dates.noDots}`;
  if (el('kpDocDate')) el('kpDocDate').textContent = dates.dateStr;
  if (el('kpDocAddress')) el('kpDocAddress').textContent = addressVal;
  if (el('kpDocClient')) el('kpDocClient').textContent = clientVal;
  if (el('kpDocPrepay')) el('kpDocPrepay').textContent = prepayVal;

  const resRailings = calculateCategoryData('railings');
  const resBalconies = calculateCategoryData('balconies');
  const resShowers = calculateCategoryData('showers');
  const resLoft = calculateCategoryData('loft');

  let activeList = [];
  if (isMerged) {
    activeList = [
      ...resRailings.calcPositions,
      ...resBalconies.calcPositions,
      ...resShowers.calcPositions,
      ...resLoft.calcPositions
    ].filter(cp => cp.posTotal > 0 || cp.glassSum > 0 || cp.hardTotal > 0);
  } else {
    activeList = calculateCategoryData(activeCategory).calcPositions.filter(cp => cp.posTotal > 0 || cp.glassSum > 0 || cp.hardTotal > 0);
  }

  if (activeList.length === 0) {
    activeList = [calculateCategoryData(activeCategory).calcPositions[activePosIdx[activeCategory]]];
  }

  // Set Title
  if (el('kpDocItemTitle')) {
    if (isMerged && countConfiguredCategories() > 1) {
      el('kpDocItemTitle').textContent = 'Стеклянные конструкции (Комплексный заказ)';
    } else if (activeList.length === 1) {
      const singlePos = activeList[0];
      const customTitle = (singlePos.pos && singlePos.pos.name && singlePos.pos.name.trim()) || getDefaultPositionName(singlePos.cat, singlePos.idx !== undefined ? singlePos.idx : 0);
      el('kpDocItemTitle').textContent = customTitle;
    } else if (activeCategory === 'railings') {
      el('kpDocItemTitle').textContent = 'Стеклянные ограждения лестниц';
    } else if (activeCategory === 'balconies') {
      el('kpDocItemTitle').textContent = 'Балконные ограждения';
    } else if (activeCategory === 'showers') {
      el('kpDocItemTitle').textContent = 'Душевые ограждения из закалённого стекла';
    } else {
      el('kpDocItemTitle').textContent = 'Межкомнатные стеклянные лофт-перегородки';
    }
  }

  let subtotalItems = 0;
  let rowsHtml = '';

  if (activeList.length === 1) {
    const cp = activeList[0];
    subtotalItems += cp.posTotal;

    rowsHtml += `<tr>
      <td>Стекло закаленное ${cp.glassName}</td>
      <td class="c">компл.</td>
      <td class="c">1</td>
      <td class="r">${rub(cp.glassSum)}</td>
      <td class="r">${rub(cp.glassSum)}</td>
    </tr>`;

    rowsHtml += `<tr>
      <td>Комплект фурнитуры${cp.parts.length ? ` (${cp.parts.join(', ')})` : ''}</td>
      <td class="c">компл.</td>
      <td class="c">1</td>
      <td class="r">${rub(cp.hardTotal)}</td>
      <td class="r">${rub(cp.hardTotal)}</td>
    </tr>`;

    if (cp.hasRail) {
      rowsHtml += `<tr>
        <td>Поручень: ${cp.railName}</td>
        <td class="c">компл.</td>
        <td class="c">1</td>
        <td class="r">${rub(cp.railTotal)}</td>
        <td class="r">${rub(cp.railTotal)}</td>
      </tr>`;
    }

    rowsHtml += `<tr>
      <td>Монтажные работы</td>
      <td class="c">компл.</td>
      <td class="c">1</td>
      <td class="r">${cp.isInstOn ? (cp.posInstSum > 0 ? rub(cp.posInstSum) : '0 ₽') : 'не требуются'}</td>
      <td class="r">${cp.isInstOn ? (cp.posInstSum > 0 ? rub(cp.posInstSum) : '0 ₽') : '0 ₽'}</td>
    </tr>`;
  } else {
    activeList.forEach((cp, idx) => {
      subtotalItems += cp.posTotal;
      const posTitle = (cp.pos && cp.pos.name && cp.pos.name.trim()) || getDefaultPositionName(cp.cat, cp.idx !== undefined ? cp.idx : idx);

      rowsHtml += `<tr class="kp-sec-hdr">
        <td colspan="5">${idx + 1}. ${posTitle.toUpperCase()}</td>
      </tr>`;

      rowsHtml += `<tr>
        <td>Стекло закаленное ${cp.glassName}</td>
        <td class="c">компл.</td>
        <td class="c">1</td>
        <td class="r">${rub(cp.glassSum)}</td>
        <td class="r">${rub(cp.glassSum)}</td>
      </tr>`;

      rowsHtml += `<tr>
        <td>Комплект фурнитуры${cp.parts.length ? ` (${cp.parts.join(', ')})` : ''}</td>
        <td class="c">компл.</td>
        <td class="c">1</td>
        <td class="r">${rub(cp.hardTotal)}</td>
        <td class="r">${rub(cp.hardTotal)}</td>
      </tr>`;

      if (cp.hasRail) {
        rowsHtml += `<tr>
          <td>Поручень: ${cp.railName}</td>
          <td class="c">компл.</td>
          <td class="c">1</td>
          <td class="r">${rub(cp.railTotal)}</td>
          <td class="r">${rub(cp.railTotal)}</td>
        </tr>`;
      }

      rowsHtml += `<tr>
        <td>Монтажные работы (${posTitle})</td>
        <td class="c">компл.</td>
        <td class="c">1</td>
        <td class="r">${cp.isInstOn ? (cp.posInstSum > 0 ? rub(cp.posInstSum) : '0 ₽') : 'не требуются'}</td>
        <td class="r">${cp.isInstOn ? (cp.posInstSum > 0 ? rub(cp.posInstSum) : '0 ₽') : '0 ₽'}</td>
      </tr>`;
    });

    rowsHtml += `<tr class="kp-sec-hdr"><td colspan="5">ОБЩИЕ УСЛУГИ:</td></tr>`;
  }

  // Delivery
  const rawDelSum = el('delOn').checked ? num('delPrice') : 0;
  const delSum = roundUp500(rawDelSum * mult);
  rowsHtml += `<tr>
    <td>Доставка, разгрузка</td>
    <td class="c">компл.</td>
    <td class="c">1</td>
    <td class="r">${el('delOn').checked ? (delSum > 0 ? rub(delSum) : 'не требуется') : 'не требуется'}</td>
    <td class="r">${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : '0 ₽'}</td>
  </tr>`;

  // Services
  let servSum = 0;
  document.querySelectorAll('.servPrice').forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    const s = D.services[idx];
    if (!s) return;
    const v = inp.value.trim() === '' ? null : (parseFloat(inp.value) || 0);
    if (v !== null && v > 0) {
      const roundedV = roundUp500(v * mult);
      servSum += roundedV;
      rowsHtml += `<tr>
        <td>${s.name}</td>
        <td class="c">компл.</td>
        <td class="c">1</td>
        <td class="r">${rub(roundedV)}</td>
        <td class="r">${rub(roundedV)}</td>
      </tr>`;
    }
  });

  const total = subtotalItems + delSum + servSum;

  const termGlassDays = (D.misc && D.misc.termGlass) ? parseInt(D.misc.termGlass, 10) : 21;
  const termTriplexDays = (D.misc && D.misc.termTripl) ? parseInt(D.misc.termTripl, 10) : 25;
  let docHasTriplex = false;
  activeList.forEach(cp => {
    if (/триплекс/i.test(cp.glassName)) docHasTriplex = true;
  });
  const autoTerm = docHasTriplex ? termTriplexDays : termGlassDays;
  const docDays = num('termDays') || autoTerm;

  if (el('kpDocTotal')) el('kpDocTotal').textContent = rub(total);
  if (el('kpDocTerm')) el('kpDocTerm').textContent = `${docDays} раб. дней`;
  if (el('kpDocExpire')) el('kpDocExpire').textContent = dates.expStr;

  if (el('kpDocTableBody')) el('kpDocTableBody').innerHTML = rowsHtml;

  const matGalleryEl = el('kpMaterialsGalleryContainer');
  if (matGalleryEl) {
    matGalleryEl.innerHTML = getMaterialThumbnailHtml(activeList);
  }
}

let toastTimer = null;
function showToast(msg, sticky = false) {
  const toast = el('toast');
  const toastMsg = el('toastMsg');
  if (!toast || !toastMsg) { alert(msg); return; }
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = null;
  if (!sticky) {
    toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 2600);
  }
}
function hideToast() {
  const toast = el('toast');
  if (toast) toast.classList.remove('show');
  clearTimeout(toastTimer);
  toastTimer = null;
}

function copyQuote() {
  saveCurrentToHistory(false);
  const text = el('quoteText').textContent;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('Текст сметы скопирован!'))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

async function sharePDF(isMerged) {
  saveCurrentToHistory(false);
  showToast('Формирование PDF для отправки... ⏳');
  
  const seqNum = await fetchNextSequenceNumber();
  updateKpDocumentData(seqNum, isMerged);

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

    const filename = getKpFileName(seqNum, isMerged) + '.pdf';
    
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
      embedRecoveryInPdf(pdf, buildRecoveryPayload(seqNum));
      
      const pdfBlob = pdf.output('blob');
      const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' });

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

      pdf.save(filename);
      showToast('PDF-файл сформирован и скачан! 📄');
    }
  } catch (err) {
    console.error('Share error:', err);
    showToast('Ошибка при формировании PDF');
  }
}

async function exportKP(format, isMerged) {
  saveCurrentToHistory(false);
  showToast(`Формирование ${format.toUpperCase()}... ⏳`);
  
  const seqNum = await fetchNextSequenceNumber();
  updateKpDocumentData(seqNum, isMerged);

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

    const baseName = getKpFileName(seqNum, isMerged);

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
        embedRecoveryInPdf(pdf, buildRecoveryPayload(seqNum));
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

/* --- Calculations History System (Max 40 entries, Protected by PIN) --- */
const MAX_HISTORY_ITEMS = 40;
let activeEditingHistoryId = null;
let pendingEditChoiceId = null;
let expandedHistoryId = null;

function getSavedHistory() {
  try {
    const saved = localStorage.getItem('glassloft_calc_history_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed.filter(item => item && typeof item === 'object' && item.id);
      }
    }
  } catch(e) {}
  return [];
}

function saveHistoryList(list, skipSync = false) {
  try {
    localStorage.setItem('glassloft_calc_history_v1', JSON.stringify(list.slice(0, MAX_HISTORY_ITEMS)));
  } catch(e) {}
  updateHistoryBadge();
  if (!skipSync) {
    try {
      const cfg = getYandexCloudConfig();
      if (cfg.endpoint && cfg.autoSync) {
        syncYandexCloud(true);
      }
    } catch(e) {}
  }
}

function updateHistoryBadge() {
  const badge = el('historyCountBadge');
  const badgeRight = el('historyCountBadgeRight');
  const badgeFloat = el('historyCountBadgeFloat');
  const capBadge = el('historyCapacityBadge');
  const history = getSavedHistory();
  if (badge) badge.textContent = history.length;
  if (badgeRight) badgeRight.textContent = history.length;
  if (badgeFloat) badgeFloat.textContent = history.length;
  if (capBadge) capBadge.textContent = `${history.length} / ${MAX_HISTORY_ITEMS} расчётов`;
}

function seedInitialHistoryIfEmpty() {
  const isSeeded = localStorage.getItem('glassloft_history_seeded_v3');
  if (isSeeded) return;

  let history = getSavedHistory();
  if (history.length === 0) {
    const dates = getFormattedDates();
    const demoItems = [
      {
        id: 'calc_init_1',
        timestamp: Date.now() - 3600000 * 2,
        dateFormatted: `${dates.dateStr}, 11:20`,
        seqNum: 8,
        kpNumber: `№ 8/${dates.noDots}`,
        client: 'Алексей Смирнов',
        address: 'г. Санкт-Петербург, Московский пр. 120',
        title: 'Алексей Смирнов — г. Санкт-Петербург, Московский пр. 120',
        total: 182500,
        totalFormatted: '182 500 ₽',
        activeCategory: 'balconies',
        productsSummary: ['Балконное ограждение 1 этаж (14 м.пог.)'],
        appState: {
          railings: [{ id: 1, name: 'Лестничное ограждение', trapLen: '', rectLen: '', trapArea: '', rectArea: '', glass: 'Классическое прозрачное (зеленоватая кромка), 10 мм', hardQty: {}, hardSum: {}, railSelect: 'Без поручня', railLength: '', railManual: '', instOn: true, instMode: 'fix', instFix: 35000, instPct: 30 }],
          balconies: [{ id: 1, name: 'Балконное ограждение 1 этаж', length: '14', heightMm: '1000', glass: 'Классическое прозрачное (зеленоватая кромка), 10 мм', hardQty: {}, hardSum: {}, railSelect: 'Без поручня', railLength: '', railManual: '', instOn: true, instMode: 'fix', instFix: 35000, instPct: 30 }],
          showers: [{ id: 1, name: 'Душевое ограждение', fixedArea: '', doorArea: '', glass: 'Классическое прозрачное (закаленное), 8 мм', hardQty: {}, hardSum: {}, instOn: true, instMode: 'fix', instFix: 15000, instPct: 30 }],
          loft: [{ id: 1, name: 'Лофт-перегородка', area: '', profileLen: '', gridLen: '', glass: 'Классическое прозрачное (закаленное), 6 мм', hardQty: {}, hardSum: {}, instOn: true, instMode: 'fix', instFix: 25000, instPct: 30 }]
        },
        extraData: { delOn: true, delPrice: 7500, adjMode: 'none', adjPercent: '', termManual: false, termDays: '21', services: [] }
      }
    ];
    saveHistoryList(demoItems);
  }
  localStorage.setItem('glassloft_history_seeded_v3', 'true');
}

function migrateHistoryDemoItems() {
  try {
    let history = getSavedHistory();
    let changed = false;
    history.forEach(item => {
      if (item && item.id === 'calc_init_1' && (item.total === 165000 || item.totalFormatted === '165 000 ₽')) {
        item.total = 182500;
        item.totalFormatted = '182 500 ₽';
        changed = true;
      }
    });
    if (changed) {
      saveHistoryList(history);
    }
  } catch(e) {}
}

function saveCurrentToHistory(isManual = false) {
  syncCurrentInputsToState();
  const clientVal = (el('calcClient') && el('calcClient').value.trim()) || 'Частное лицо';
  const phoneVal = (el('calcPhone') && el('calcPhone').value.trim()) || '';
  const addressVal = (el('calcAddress') && el('calcAddress').value.trim()) || 'г. Санкт-Петербург';
  
  const resRailings = calculateCategoryData('railings');
  const resBalconies = calculateCategoryData('balconies');
  const resShowers = calculateCategoryData('showers');
  const resLoft = calculateCategoryData('loft');
  const allCategoriesTotal = resRailings.categoryTotal + resBalconies.categoryTotal + resShowers.categoryTotal + resLoft.categoryTotal;
  const mult = getPriceMultiplier();
  const rawDelSum = el('delOn')?.checked ? num('delPrice') : 0;
  const delSum = roundUp500(rawDelSum * mult);
  let servSum = 0;
  document.querySelectorAll('.servPrice').forEach(inp => {
    const v = inp.value.trim() === '' ? null : (parseFloat(inp.value) || 0);
    if (v !== null && v > 0) servSum += roundUp500(v * mult);
  });
  const total = allCategoriesTotal + delSum + servSum;

  const dates = getFormattedDates();
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const dateFormatted = `${dates.dateStr}, ${timeStr}`;
  const seqNum = currentKpSeqNumber || 1;
  const kpNumber = `№ ${seqNum}/${dates.noDots}`;

  const productsSummary = [];
  if (resRailings.categoryTotal > 0) {
    appState.railings.forEach(p => { if (p.trapArea || p.rectArea || p.trapLen || p.rectLen) productsSummary.push(p.name || 'Лестничное ограждение'); });
  }
  if (resBalconies.categoryTotal > 0) {
    appState.balconies.forEach(p => { if (p.length) productsSummary.push(p.name || 'Балконное ограждение'); });
  }
  if (resShowers.categoryTotal > 0) {
    appState.showers.forEach(p => { if (p.fixedArea || p.doorArea) productsSummary.push(p.name || 'Душевое ограждение'); });
  }
  if (resLoft.categoryTotal > 0) {
    appState.loft.forEach(p => { if (p.area || p.profileLen) productsSummary.push(p.name || 'Лофт-перегородка'); });
  }
  if (productsSummary.length === 0) {
    const curPos = appState[activeCategory] && appState[activeCategory][activePosIdx[activeCategory]];
    productsSummary.push(curPos?.name || getDefaultPositionName(activeCategory, 0));
  }

  const title = `${clientVal} — ${addressVal}`;
  const history = getSavedHistory();

  // 1. If in active edit mode: update existing record in place
  if (activeEditingHistoryId) {
    const existingIdx = history.findIndex(h => h.id === activeEditingHistoryId);
    if (existingIdx !== -1) {
      const existing = history[existingIdx];
      existing.client = clientVal;
      existing.phone = phoneVal;
      existing.address = addressVal;
      existing.title = title;
      existing.total = total;
      existing.totalFormatted = rub(total);
      existing.dateFormatted = `${dateFormatted} (изм.)`;
      existing.activeCategory = activeCategory;
      existing.productsSummary = productsSummary;
      existing.appState = JSON.parse(JSON.stringify(appState));
      existing.extraData = {
        phone: phoneVal,
        delOn: el('delOn') ? el('delOn').checked : true,
        delPrice: el('delPrice') ? el('delPrice').value : 7500,
        adjMode: adjMode,
        adjPercent: el('adjPercent') ? el('adjPercent').value : '',
        termManual: termManual,
        termDays: el('termDays') ? el('termDays').value : '',
        services: Array.from(document.querySelectorAll('.servPrice')).map(inp => ({ idx: inp.dataset.idx, val: inp.value }))
      };
      saveHistoryList(history);
      renderHistoryList();
      showToast(`Расчёт «${title}» обновлён! 💾`);
      return;
    }
  }

  // 2. If the top item has the same client and address within 5 minutes, update it
  if (!isManual && history.length > 0) {
    const top = history[0];
    if (top.client === clientVal && top.address === addressVal && (Date.now() - top.timestamp < 300000)) {
      top.total = total;
      top.phone = phoneVal;
      top.totalFormatted = rub(total);
      top.dateFormatted = dateFormatted;
      top.productsSummary = productsSummary;
      top.appState = JSON.parse(JSON.stringify(appState));
      top.extraData = {
        phone: phoneVal,
        delOn: el('delOn') ? el('delOn').checked : true,
        delPrice: el('delPrice') ? el('delPrice').value : 7500,
        adjMode: adjMode,
        adjPercent: el('adjPercent') ? el('adjPercent').value : '',
        termManual: termManual,
        termDays: el('termDays') ? el('termDays').value : '',
        services: Array.from(document.querySelectorAll('.servPrice')).map(inp => ({ idx: inp.dataset.idx, val: inp.value }))
      };
      saveHistoryList(history);
      renderHistoryList();
      return;
    }
  }

  // 3. Otherwise, create a new record and add to history (newest first)
  const newRecord = {
    id: 'calc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    timestamp: Date.now(),
    dateFormatted,
    seqNum,
    kpNumber,
    client: clientVal,
    phone: phoneVal,
    address: addressVal,
    title,
    total,
    totalFormatted: rub(total),
    activeCategory,
    productsSummary,
    appState: JSON.parse(JSON.stringify(appState)),
    extraData: {
      phone: phoneVal,
      delOn: el('delOn') ? el('delOn').checked : true,
      delPrice: el('delPrice') ? el('delPrice').value : 7500,
      adjMode: adjMode,
      adjPercent: el('adjPercent') ? el('adjPercent').value : '',
      termManual: termManual,
      termDays: el('termDays') ? el('termDays').value : '',
      services: Array.from(document.querySelectorAll('.servPrice')).map(inp => ({ idx: inp.dataset.idx, val: inp.value }))
    }
  };

  history.unshift(newRecord);
  saveHistoryList(history);
  renderHistoryList();

  if (isManual) {
    showToast(`Расчёт «${title}» сохранён в историю! 💾`);
  }
}

function toggleHistoryItem(id, event) {
  if (event && (event.target.closest('button') || event.target.closest('.btn-del-hist'))) return;
  const willExpand = (expandedHistoryId !== id);
  expandedHistoryId = willExpand ? id : null;
  renderHistoryList();
  if (willExpand) {
    setTimeout(() => {
      const row = document.getElementById(`hist_row_${id}`);
      if (row && typeof row.scrollIntoView === 'function') {
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 40);
  }
}

function renderHistoryList() {
  const container = el('historyListContainer');
  if (!container) return;

  const searchVal = (el('historySearchInput') && el('historySearchInput').value.trim().toLowerCase()) || '';
  const history = getSavedHistory();
  updateHistoryBadge();

  if (history.length === 0) {
    container.innerHTML = `
      <div class="history-empty-state">
        <div class="history-empty-icon">📁</div>
        <div class="history-empty-title">История расчётов пуста</div>
        <div class="history-empty-desc">Здесь будут автоматически сохраняться последние 40 коммерческих предложений с именами клиентов, адресами и суммами.</div>
      </div>
    `;
    return;
  }

  const filtered = history.filter(item => {
    if (!searchVal) return true;
    const q = searchVal;
    return (item.title && item.title.toLowerCase().includes(q)) ||
           (item.client && item.client.toLowerCase().includes(q)) ||
           (item.address && item.address.toLowerCase().includes(q)) ||
           (item.kpNumber && item.kpNumber.toLowerCase().includes(q)) ||
           (item.dateFormatted && item.dateFormatted.toLowerCase().includes(q)) ||
           (item.totalFormatted && item.totalFormatted.toLowerCase().includes(q)) ||
           (item.productsSummary && item.productsSummary.some(p => p.toLowerCase().includes(q)));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="history-empty-state">
        <div class="history-empty-icon">🔍</div>
        <div class="history-empty-title">Ничего не найдено</div>
        <div class="history-empty-desc">По запросу «${esc(searchVal)}» нет сохранённых расчётов.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isExpanded = expandedHistoryId === item.id;
    const tagsHtml = (item.productsSummary || []).map(tag => `<span class="history-tag">${esc(tag)}</span>`).join('');

    return `
      <div class="history-item-row ${isExpanded ? 'expanded' : ''}" id="hist_row_${item.id}">
        <div class="history-item-header" onclick="toggleHistoryItem('${item.id}', event)">
          <div class="history-header-left">
            <span class="history-num-badge">${esc(item.kpNumber || 'КП')}</span>
            <div class="history-client-address">
              <span class="history-client-name">${esc(item.client || 'Частное лицо')}</span>
              <span class="history-address-text">• ${esc(item.address || 'г. Санкт-Петербург')}</span>
            </div>
          </div>
          <div class="history-header-right">
            <span class="history-sum-text">${esc(item.totalFormatted || rub(item.total || 0))}</span>
            <div class="history-chevron">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
        </div>

        <div class="history-item-body">
          <div class="history-body-actions">
            <button type="button" class="btn b-primary btn-sm" onclick="loadCalculationFromHistory('${item.id}', event)" title="Открыть этот расчёт в калькуляторе для внесения правок">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              <span>Редактировать</span>
            </button>
            <button type="button" class="btn ghost btn-sm" onclick="duplicateCalculationFromHistory('${item.id}', event)" title="Создать копию с новым порядковым номером КП">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Копия (Новый №)</span>
            </button>
            <button type="button" class="btn ghost btn-sm" onclick="copyHistoryQuote('${item.id}', event)" title="Скопировать смету в буфер обмена">
              <span>Смета</span>
            </button>
            <button type="button" class="btn-del-hist" onclick="deleteHistoryItem('${item.id}', event)" title="Удалить этот расчёт из истории">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>

          <div class="history-body-meta">
            <span>📅 Дата: <b>${esc(item.dateFormatted || '')}</b></span>
            <span>📄 Номер КП: <b>${esc(item.kpNumber || '')}</b></span>
          </div>

          ${tagsHtml ? `<div class="history-body-tags">${tagsHtml}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function openEditCalculationModal(id) {
  const history = getSavedHistory();
  const item = history.find(h => h.id === id);
  if (!item) return;

  pendingEditChoiceId = id;
  if (el('editChoiceModalTitle')) el('editChoiceModalTitle').textContent = `Редактирование: ${item.client || 'Заказчик'}`;
  if (el('editChoiceModalSubtitle')) el('editChoiceModalSubtitle').textContent = `${item.address || ''} · ${item.kpNumber || ''} · ${item.totalFormatted || ''}`;

  closeModal('historyModal');
  const modal = el('editChoiceModal');
  if (modal) modal.classList.add('open');
}

function executeEditChoice(mode) {
  const id = pendingEditChoiceId;
  closeModal('editChoiceModal');
  if (!id) return;

  if (mode === 'update') {
    startEditingHistoryItem(id);
  } else if (mode === 'clone') {
    duplicateCalculationFromHistory(id);
  }
  pendingEditChoiceId = null;
}

function exportHistoryToFile() {
  const history = getSavedHistory();
  if (history.length === 0) {
    showToast('История пуста, нечего выгружать');
    return;
  }
  const dates = getFormattedDates();
  const filename = `История_расчетов_GlassLoft_${dates.noDots}.json`;
  const jsonStr = JSON.stringify(history, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Файл «${filename}» скачан! 📥 (${history.length} расчётов)`);
}

function importHistoryFromFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        const validItems = imported.filter(item => item && typeof item === 'object' && item.client);
        if (validItems.length > 0) {
          const current = getSavedHistory();
          const existingIds = new Set(current.map(c => c.id));
          const newItems = validItems.filter(item => !existingIds.has(item.id));
          const merged = [...newItems, ...current].slice(0, MAX_HISTORY_ITEMS);
          saveHistoryList(merged);
          renderHistoryList();
          showToast(`Успешно импортировано расчётов: ${validItems.length}! 📤`);
        } else {
          alert('В файле не найдено корректных расчётов.');
        }
      } else {
        alert('Неверный формат файла истории.');
      }
    } catch(err) {
      alert('Ошибка при чтении файла: ' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function loadCalculationFromHistory(id, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const history = getSavedHistory();
  const item = history.find(h => h.id === id);
  if (!item) {
    showToast('Расчёт не найден в истории');
    return;
  }

  activeEditingHistoryId = id;
  if (item.seqNum) currentKpSeqNumber = item.seqNum;

  closeModal('historyModal');
  closeModal('editChoiceModal');

  restoreCalculationData(item);

  const banner = el('editModeBanner');
  const bannerTitle = el('editModeTitle');
  if (banner) banner.style.display = 'flex';
  if (bannerTitle) bannerTitle.textContent = `${item.title || item.client} (${item.kpNumber || ''})`;

  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  showToast(`Расчёт «${item.title || item.client}» открыт для редактирования! ✏️`);
}

function startEditingHistoryItem(id, event) {
  loadCalculationFromHistory(id, event);
}

async function duplicateCalculationFromHistory(id, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const history = getSavedHistory();
  const item = history.find(h => h.id === id);
  if (!item) return;

  activeEditingHistoryId = null;
  const banner = el('editModeBanner');
  if (banner) banner.style.display = 'none';

  closeModal('historyModal');
  closeModal('editChoiceModal');

  restoreCalculationData(item);

  const nextSeq = await fetchNextSequenceNumber();
  currentKpSeqNumber = nextSeq;
  updateKpDocumentData(nextSeq, false);

  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const dates = getFormattedDates();
  showToast(`Создана копия с новым номером КП №${nextSeq}/${dates.noDots}! 📋`);
}

function restoreCalculationData(item) {
  if (!item) return;

  // 1. Deep clone full appState from history item
  if (item.appState) {
    appState = JSON.parse(JSON.stringify(item.appState));
  }
  
  // 2. Client & Address & Phone fields
  if (el('calcClient')) el('calcClient').value = item.client || 'Частное лицо';
  if (el('calcPhone')) el('calcPhone').value = item.phone || (item.extraData && item.extraData.phone) || '';
  if (el('calcAddress')) el('calcAddress').value = item.address || 'г. Санкт-Петербург';

  // 3. Extra Data (Delivery, Services, Discounts/Markups, Terms) - without triggering premature calc()!
  if (item.extraData) {
    if (el('delOn') && item.extraData.delOn !== undefined) el('delOn').checked = item.extraData.delOn;
    if (el('delPrice') && item.extraData.delPrice !== undefined) el('delPrice').value = item.extraData.delPrice;
    
    // Set Discount / Markup with skipCalc = true
    const savedAdjMode = item.extraData.adjMode || 'none';
    setAdjMode(savedAdjMode, true);
    if (el('adjPercent')) {
      el('adjPercent').value = (item.extraData.adjPercent !== undefined && item.extraData.adjPercent !== null) ? item.extraData.adjPercent : '';
    }
    
    if (item.extraData.termManual !== undefined) termManual = item.extraData.termManual;
    if (el('termDays') && item.extraData.termDays) el('termDays').value = item.extraData.termDays;
    
    // Clear all services first, then restore only saved services
    document.querySelectorAll('.servPrice').forEach(inp => { inp.value = ''; });
    if (Array.isArray(item.extraData.services)) {
      item.extraData.services.forEach(s => {
        const inp = document.querySelector(`.servPrice[data-idx="${s.idx}"]`);
        if (inp) inp.value = s.val || '';
      });
    }
  } else {
    setAdjMode('none', true);
  }

  // 4. Set active category and reset active positions
  if (item.activeCategory && ['railings', 'balconies', 'showers', 'loft'].includes(item.activeCategory)) {
    activeCategory = item.activeCategory;
  }
  activePosIdx = { railings: 0, balconies: 0, showers: 0, loft: 0 };

  // 5. Update Category Tab Buttons UI
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (activeCategory === 'railings' && el('tabCatRailings')) el('tabCatRailings').classList.add('active');
  if (activeCategory === 'balconies' && el('tabCatBalconies')) el('tabCatBalconies').classList.add('active');
  if (activeCategory === 'showers' && el('tabCatShowers')) el('tabCatShowers').classList.add('active');
  if (activeCategory === 'loft' && el('tabCatLoft')) el('tabCatLoft').classList.add('active');

  // 6. Render category HTML structure & position tabs
  renderCategoryContent();
  renderPositionTabs();
  
  // 7. Load values from restored appState into DOM inputs
  loadStateToInputs();

  // 8. Re-apply adjPercent in case loadStateToInputs or render touched it
  if (item.extraData && item.extraData.adjPercent !== undefined && el('adjPercent')) {
    el('adjPercent').value = item.extraData.adjPercent;
  }

  // 9. Run ONE clean calculation to compute document totals
  calc();
  saveAppState();
}

function saveActiveEditing() {
  if (!activeEditingHistoryId) return;
  saveCurrentToHistory(false);
  const banner = el('editModeBanner');
  if (banner) banner.style.display = 'none';
  activeEditingHistoryId = null;
  showToast('Изменения в расчёте успешно сохранены! 💾');
}

function cancelActiveEditing() {
  activeEditingHistoryId = null;
  const banner = el('editModeBanner');
  if (banner) banner.style.display = 'none';
  showToast('Режим редактирования завершён');
}

function deleteHistoryItem(id, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let history = getSavedHistory();
  history = history.filter(h => h.id !== id);
  saveHistoryList(history);
  renderHistoryList();
  showToast('Расчёт удалён из истории');
}

function clearAllHistory() {
  const history = getSavedHistory();
  if (history.length === 0) return;
  if (confirm('Вы действительно хотите полностью очистить историю всех расчётов?')) {
    saveHistoryList([]);
    renderHistoryList();
    showToast('История расчётов очищена');
  }
}

function copyHistoryQuote(id, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const history = getSavedHistory();
  const item = history.find(h => h.id === id);
  if (!item) return;
  
  let t = `Коммерческое предложение:\n«${item.title || item.client}»\n\n`;
  t += `Заказчик: ${item.client || 'Частное лицо'}\n`;
  t += `Адрес: ${item.address || 'г. Санкт-Петербург'}\n`;
  t += `Дата: ${item.dateFormatted || ''}\n`;
  t += `Номер документа: ${item.kpNumber || ''}\n`;
  if (item.productsSummary && item.productsSummary.length) {
    t += `Состав: ${item.productsSummary.join(', ')}\n`;
  }
  t += `\nИтоговая стоимость: ${item.totalFormatted || rub(item.total || 0)}\n`;
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(t).then(() => showToast('Текст сметы скопирован! 📋')).catch(() => fallbackCopy(t));
  } else {
    fallbackCopy(t);
  }
}

/* --- Settings Modals & Admin Security --- */
const SETTINGS_MODALS = ['glassModal', 'hardModal', 'railModal', 'deliveryModal', 'installModal', 'serviceModal', 'termModal', 'historyModal'];

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
  if (id === 'historyModal') renderHistoryList();
  const target = el(id);
  if (target) target.classList.add('open');
}

function closeModal(id) { 
  const target = el(id);
  if (target) target.classList.remove('open'); 
}

function verifyPin() {
  const entered = String((el('pinInput') && el('pinInput').value) || '').trim();
  const currentPin = String((D && D.misc && D.misc.pin) || '0120').trim();
  if (entered === currentPin) {
    isAdminUnlocked = true;
    closeModal('pinModal');
    showToast('Доступ разрешён 🔓');
    const target = pendingModalId || 'historyModal';
    pendingModalId = null;
    openModal(target);
  } else {
    const pErr = el('pinError');
    if (pErr) pErr.style.display = 'block';
    const pInp = el('pinInput');
    if (pInp) pInp.select();
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
  if (id === 'historyModal') renderHistoryList();
  if (id === 'glassModal') renderGlassSettings();
  if (id === 'hardModal') renderHardSettings();
  if (id === 'railModal') renderRailSettings();
  if (id === 'serviceModal') renderServiceSettings();
  if (id === 'deliveryModal') el('deliverySetting').value = D.misc.delivery;
  if (id === 'installModal') {
    el('instFixSetting').value = D.misc.instFix;
    el('instPctSetting').value = D.misc.instPct;
  }
  if (id === 'termModal') {
    el('termGlassSetting').value = D.misc.termGlass;
    el('termTriplexSetting').value = D.misc.termTripl;
  }
}

function renameGlass(oldName, newName) {
  const cat = activeCategory;
  const n = String(newName || '').trim();
  if (!n) {
    alert('Название стекла не может быть пустым');
    renderGlassSettings();
    return;
  }
  if (n === oldName) return;

  const glassData = D[cat].glass;
  if (glassData[n]) {
    alert('Стекло с таким названием уже существует');
    renderGlassSettings();
    return;
  }

  const newGlassData = {};
  for (const k in glassData) {
    if (k === oldName) {
      newGlassData[n] = glassData[oldName];
    } else {
      newGlassData[k] = glassData[k];
    }
  }
  D[cat].glass = newGlassData;

  if (appState[cat]) {
    appState[cat].forEach(p => {
      if (p.glass === oldName) p.glass = n;
    });
  }

  buildActiveSelects();
  renderGlassSettings();
  autoSave();
  calc();
  showToast(`Стекло переименовано: «${n}» ✏️`);
}

function renderGlassSettings() {
  const cat = activeCategory;
  const glassData = D[cat].glass;
  const title = el('glassModalTitle');
  const catTitles = {
    railings: 'Типы стекла (Лестничные ограждения)',
    balconies: 'Типы стекла (Балконные ограждения)',
    showers: 'Типы стекла 8 мм (Душевые ограждения)',
    loft: 'Типы стекла 6 мм (Лофт-перегородки)'
  };
  if (title) title.textContent = catTitles[cat] || 'Типы стекла';

  if (cat === 'railings') {
    el('eGlass').innerHTML = Object.keys(glassData).map(k => `
      <div class="srow three">
        <input type="text" class="setting-name-inp" value="${esc(k)}" onchange="renameGlass('${esc(k)}', this.value)" title="Нажмите, чтобы изменить название">
        <input type="number" value="${glassData[k].trap}" step="100" title="Трапеция ₽/м²" onchange="D.railings.glass['${esc(k)}'].trap=+this.value||0; buildActiveSelects(); autoSave(); calc();">
        <input type="number" value="${glassData[k].rect}" step="100" title="Прямоугольник ₽/м²" onchange="D.railings.glass['${esc(k)}'].rect=+this.value||0; buildActiveSelects(); autoSave(); calc();">
        <button class="btn b-red" onclick="delGlass('${esc(k)}')">✕</button>
      </div>`).join('');
    el('glassModalActions').innerHTML = `
      <input type="text" id="ngName" placeholder="Название">
      <input type="number" id="ngTrap" placeholder="Трапеция ₽/м²">
      <input type="number" id="ngRect" placeholder="Прямоуг. ₽/м²">
      <button class="btn b-primary" onclick="addGlass()">Добавить</button>
    `;
  } else {
    el('eGlass').innerHTML = Object.keys(glassData).map(k => `
      <div class="srow two">
        <input type="text" class="setting-name-inp" value="${esc(k)}" onchange="renameGlass('${esc(k)}', this.value)" title="Нажмите, чтобы изменить название">
        <input type="number" value="${glassData[k].price}" step="100" title="Цена ₽/м²" onchange="D['${cat}'].glass['${esc(k)}'].price=+this.value||0; buildActiveSelects(); autoSave(); calc();">
        <button class="btn b-red" onclick="delGlass('${esc(k)}')">✕</button>
      </div>`).join('');
    el('glassModalActions').innerHTML = `
      <input type="text" id="ngName" placeholder="Название">
      <input type="number" id="ngPrice" placeholder="Цена ₽/м²">
      <button class="btn b-primary" onclick="addGlass()">Добавить</button>
    `;
  }
}

function renderHardSettings() {
  const cat = activeCategory;
  const hardList = D[cat].hard;
  const title = el('hardModalTitle');
  const catTitles = {
    railings: 'Фурнитура (Лестничные ограждения)',
    balconies: 'Фурнитура (Балконные ограждения)',
    showers: 'Фурнитура и комплектующие (Душевые)',
    loft: 'Фурнитура и механизмы (Лофт-перегородки)'
  };
  if (title) title.textContent = catTitles[cat] || 'Фурнитура';

  el('eHard').innerHTML = hardList.map((item, idx) => `
    <div class="srow three">
      <input type="text" class="setting-name-inp" value="${esc(item.name)}" onchange="D['${cat}'].hard[${idx}].name=this.value.trim()||'${esc(item.name)}'; buildHardList(); autoSave(); calc();" title="Нажмите, чтобы изменить название">
      <input type="number" value="${item.price}" step="50" title="Цена" onchange="D['${cat}'].hard[${idx}].price=+this.value||0; buildHardList(); autoSave(); calc();">
      <select onchange="D['${cat}'].hard[${idx}].unit=this.value; buildHardList(); autoSave(); calc();">
        <option value="шт" ${item.unit==='шт'?'selected':''}>шт</option>
        <option value="м.пог" ${item.unit==='м.пог'?'selected':''}>м.пог</option>
        <option value="компл" ${item.unit==='компл'?'selected':''}>компл</option>
        <option value="м²" ${item.unit==='м²'?'selected':''}>м²</option>
      </select>
      <button class="btn b-red" onclick="delHard(${idx})">✕</button>
    </div>`).join('');

  el('hardModalActions').innerHTML = `
    <input type="text" id="nhName" placeholder="Название">
    <input type="number" id="nhPrice" placeholder="Цена">
    <select id="nhUnit"><option value="шт">шт</option><option value="м.пог">м.пог</option><option value="компл">компл</option><option value="м²">м²</option></select>
    <button class="btn b-primary" onclick="addHard()">Добавить</button>
  `;
}

function renderRailSettings() {
  const cat = (activeCategory === 'balconies') ? 'balconies' : 'railings';
  el('eRail').innerHTML = D[cat].rail.map((item, idx) => `
    <div class="srow two">
      <input type="text" class="setting-name-inp" value="${esc(item.name)}" onchange="D['${cat}'].rail[${idx}].name=this.value.trim()||'${esc(item.name)}'; buildActiveSelects(); autoSave(); calc();" title="Нажмите, чтобы изменить название">
      <input type="number" value="${item.price}" step="100" title="Цена ₽/м.пог" onchange="D['${cat}'].rail[${idx}].price=+this.value||0; buildActiveSelects(); autoSave(); calc();">
      <button class="btn b-red" onclick="delRail(${idx})">✕</button>
    </div>`).join('');
}

function renderServiceSettings() {
  el('eServ').innerHTML = D.services.map((s, idx) => `
    <div class="srow two">
      <input type="text" class="setting-name-inp" value="${esc(s.name)}" onchange="D.services[${idx}].name=this.value.trim()||'${esc(s.name)}'; buildServiceList(); autoSave(); calc();" title="Нажмите, чтобы изменить название">
      <button class="btn b-red" onclick="delService(${idx})">✕</button>
    </div>`).join('');
}

function resetCalculatorToZero() {
  localStorage.removeItem('glassloft_app_state_v6');

  appState = {
    railings: [
      {
        id: 1,
        name: "Лестничное ограждение",
        trapLen: "", rectLen: "", trapArea: "", rectArea: "",
        glass: Object.keys(D.railings.glass)[0],
        hardQty: {}, hardSum: {},
        railSelect: "Без поручня", railLength: "", railManual: "",
        instOn: true, instMode: "fix", instFix: 35000, instPct: 30
      }
    ],
    balconies: [
      {
        id: 1,
        name: "Балконное ограждение",
        length: "", heightMm: "1000",
        glass: Object.keys(D.balconies.glass)[0],
        hardQty: {}, hardSum: {},
        railSelect: "Без поручня", railLength: "", railManual: "",
        instOn: true, instMode: "fix", instFix: 35000, instPct: 30
      }
    ],
    showers: [
      {
        id: 1,
        name: "Душевое ограждение",
        fixedArea: "", doorArea: "",
        glass: Object.keys(D.showers.glass)[0],
        hardQty: {}, hardSum: {},
        instOn: true, instMode: "fix", instFix: 15000, instPct: 30
      }
    ],
    loft: [
      {
        id: 1,
        name: "Лофт-перегородка",
        area: "", profileLen: "", gridLen: "",
        glass: Object.keys(D.loft.glass)[0],
        hardQty: {}, hardSum: {},
        instOn: true, instMode: "fix", instFix: 25000, instPct: 30
      }
    ]
  };

  activePosIdx = { railings: 0, balconies: 0, showers: 0, loft: 0 };
  activeCategory = 'railings';

  if (el('calcClient')) el('calcClient').value = 'Частное лицо';
  if (el('calcPhone')) el('calcPhone').value = '';
  if (el('calcAddress')) el('calcAddress').value = 'г. Санкт-Петербург';

  setAdjMode('none');

  if (el('delPrice')) el('delPrice').value = D.misc.delivery || 7500;
  if (el('delOn')) el('delOn').checked = true;

  document.querySelectorAll('.servPrice').forEach(inp => { inp.value = ''; });

  termManual = false;

  activeEditingHistoryId = null;
  if (el('editModeBanner')) el('editModeBanner').style.display = 'none';

  saveAppState();

  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (el('tabCatRailings')) el('tabCatRailings').classList.add('active');

  renderCategoryContent();
  renderPositionTabs();
  loadStateToInputs();
  calc();

  // Clear cache in background
  try {
    if ('caches' in window) {
      caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
    }
  } catch(e) {}

  showToast('Все расчёты и поля сброшены до нуля! 🔄');
}

function delGlass(name) {
  const cat = activeCategory;
  if (Object.keys(D[cat].glass).length <= 1) return alert('Должна остаться хотя бы одна позиция');
  if (!confirm('Удалить «' + name + '»?')) return;
  delete D[cat].glass[name]; buildActiveSelects(); renderGlassSettings(); autoSave(); calc();
}
function delHard(idx) {
  const cat = activeCategory;
  if (D[cat].hard.length <= 1) return alert('Должна остаться хотя бы одна позиция');
  if (!confirm('Удалить «' + D[cat].hard[idx].name + '»?')) return;
  D[cat].hard.splice(idx, 1); buildHardList(); renderHardSettings(); autoSave(); calc();
}
function delRail(idx) {
  const cat = (activeCategory === 'balconies') ? 'balconies' : 'railings';
  if (D[cat].rail.length <= 1) return alert('Должна остаться хотя бы одна позиция');
  if (!confirm('Удалить «' + D[cat].rail[idx].name + '»?')) return;
  D[cat].rail.splice(idx, 1); buildActiveSelects(); renderRailSettings(); autoSave(); calc();
}
function delService(idx) {
  if (D.services.length <= 1) return alert('Должна остаться хотя бы одна услуга');
  if (!confirm('Удалить «' + D.services[idx].name + '»?')) return;
  D.services.splice(idx, 1); buildServiceList(); renderServiceSettings(); autoSave(); calc();
}

function addGlass() {
  const cat = activeCategory;
  const n = el('ngName').value.trim();
  if (!n) return alert('Введите название');
  if (D[cat].glass[n]) return alert('Уже есть такая позиция');
  if (cat === 'railings') {
    D.railings.glass[n] = { trap: +el('ngTrap').value || 0, rect: +el('ngRect').value || 0 };
  } else {
    D[cat].glass[n] = { price: +el('ngPrice').value || 0 };
  }
  buildActiveSelects(); renderGlassSettings(); autoSave(); calc();
}
function addHard() {
  const cat = activeCategory;
  const n = el('nhName').value.trim();
  if (!n) return alert('Введите название');
  D[cat].hard.push({ name: n, price: +el('nhPrice').value || 0, unit: el('nhUnit').value });
  buildHardList(); renderHardSettings(); autoSave(); calc();
}
function addRail() {
  const cat = (activeCategory === 'balconies') ? 'balconies' : 'railings';
  const n = el('nrName').value.trim();
  if (!n) return alert('Введите название');
  D[cat].rail.push({ name: n, price: +el('nrPrice').value || 0 });
  buildActiveSelects(); renderRailSettings(); autoSave(); calc();
}
function addService() {
  const n = el('nsName').value.trim();
  if (!n) return alert('Введите название');
  D.services.push({ name: n, emptyDefault: 'hide' });
  buildServiceList(); renderServiceSettings(); autoSave(); calc();
}

function autoSave() {
  localStorage.setItem('glassloft_multi_calc_v6', JSON.stringify(D));
  saveAppState();
}

function saveAll() {
  syncCurrentInputsToState();
  autoSave();
  saveCurrentToHistory(true);
}

const APP_VERSION = 'v5.5.091026';
const APP_BUILD_NUM = '#64';
const APP_BUILD_DATE = '09.10.2026';

function updateVersionBadge() {
  const versionTextEl = el('appVersionText');
  if (versionTextEl) {
    versionTextEl.innerHTML = `Версия: <b>${APP_VERSION}</b> (Сборка ${APP_BUILD_NUM} от ${APP_BUILD_DATE})`;
  }
}

async function forceAppUpdate() {
  showToast('Сброс кэша и загрузка последней версии... ⏳');
  try {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
    }
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      for (const reg of regs) {
        await reg.unregister();
      }
    }
  } catch(e) {}
  setTimeout(() => {
    const origin = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : '';
    let path = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '';
    path = path.replace(/\/index\.html$/i, '').replace(/index\.html$/i, '').replace(/\/+$/, '');
    const cleanUrl = origin + (path ? path : '') + '/';
    window.location.href = cleanUrl + '?ts=' + Date.now();
  }, 250);
}


function saveHistoryList(list, skipSync = false) {
  try {
    localStorage.setItem('glassloft_calc_history_v1', JSON.stringify(list.slice(0, MAX_HISTORY_ITEMS)));
  } catch(e) {}
  updateHistoryBadge();
  if (!skipSync) {
    try {
      const cfg = getCloudConfig();
      const hasEndpoint = (cfg.provider === 'firebase' && cfg.fbUrl) ||
                          (cfg.provider === 'supabase' && cfg.sbUrl) ||
                          (cfg.provider === 'custom' && cfg.customUrl);
      if (hasEndpoint && cfg.autoSync) {
        syncCloudData(true);
      }
    } catch(e) {}
  }
}

/* ==========================================================================
   Universal Free Cloud Synchronization Module (Firebase / Supabase / REST)
   ========================================================================== */

const CLOUD_CONFIG_KEY = 'glassloft_free_cloud_config_v2';
let isCloudSyncing = false;
let currentCloudProvider = 'firebase';

function getCloudConfig() {
  try {
    const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return {
          provider: parsed.provider || 'firebase',
          fbUrl: parsed.fbUrl || '',
          fbApiKey: parsed.fbApiKey || '',
          sbUrl: parsed.sbUrl || '',
          sbApiKey: parsed.sbApiKey || '',
          customUrl: parsed.customUrl || '',
          customApiKey: parsed.customApiKey || '',
          autoSync: parsed.autoSync !== false,
          autoFetch: parsed.autoFetch !== false,
          lastSyncTime: parsed.lastSyncTime || null,
          lastStatus: parsed.lastStatus || 'idle',
          lastError: parsed.lastError || null
        };
      }
    }
  } catch(e) {}
  return {
    provider: 'firebase',
    fbUrl: '',
    fbApiKey: '',
    sbUrl: '',
    sbApiKey: '',
    customUrl: '',
    customApiKey: '',
    autoSync: true,
    autoFetch: true,
    lastSyncTime: null,
    lastStatus: 'idle',
    lastError: null
  };
}

function setCloudConfig(cfg) {
  try {
    const current = getCloudConfig();
    const updated = Object.assign({}, current, cfg);
    localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(updated));
  } catch(e) {}
  updateCloudStatusBar();
}

function selectCloudProvider(prov) {
  currentCloudProvider = prov;
  ['Firebase', 'Supabase', 'Custom'].forEach(p => {
    const tab = el(`tabProvider${p}`);
    const fields = el(`fieldsProvider${p}`);
    if (tab) tab.classList.toggle('active', p.toLowerCase() === prov);
    if (fields) fields.style.display = (p.toLowerCase() === prov) ? 'block' : 'none';
  });
  
  const guideHeader = el('cloudGuideArrow')?.previousElementSibling;
  const guideBody = el('cloudGuideBody');
  if (guideHeader && guideBody) {
    if (prov === 'firebase') {
      guideHeader.textContent = '📖 Как настроить бесплатный Firebase за 2 минуты?';
      guideBody.innerHTML = `<ol>
        <li>Откройте <a href="https://console.firebase.google.com/" target="_blank" style="color:var(--primary);font-weight:700;">console.firebase.google.com</a> под Google-аккаунтом и нажмите <b>«Создать проект»</b> (например, <code>glassloft-calc</code>).</li>
        <li>В левом меню выберите <b>«Realtime Database»</b> -> <b>«Создать базу данных»</b>.</li>
        <li>Выберите регион (Бельгия / США) и включите <b>«Режим тестирования»</b> (в правилах <code>.read: true, .write: true</code>).</li>
        <li>Скопируйте ссылку на базу (<code>https://...firebasedatabase.app</code>) и вставьте в поле выше!</li>
        <li>Нажмите <b>«🧪 Тест связи»</b> и <b>«💾 Сохранить»</b> — синхронизация активируется мгновенно и бесплатно навсегда!</li>
      </ol>`;
    } else if (prov === 'supabase') {
      guideHeader.textContent = '📖 Как настроить бесплатный Supabase за 2 минуты?';
      guideBody.innerHTML = `<ol>
        <li>Зайдите на <a href="https://supabase.com/" target="_blank" style="color:var(--primary);font-weight:700;">supabase.com</a> и создайте проект <code>glassloft</code>.</li>
        <li>В <b>SQL Editor</b> выполните: <code>create table history (id text primary key, data jsonb, timestamp bigint); alter table history enable row level security; create policy "Anon" on history for all using (true) with check (true);</code></li>
        <li>В <b>Project Settings -> API</b> скопируйте <b>Project URL</b> и <b>anon key</b> и вставьте в поля выше!</li>
      </ol>`;
    } else {
      guideHeader.textContent = '📖 Подключение своего REST API / Webhook';
      guideBody.innerHTML = `<p>Укажите URL эндпоинта, принимающего <code>GET</code> (выдача списка) и <code>POST / PUT</code> (сохранение смет).</p>`;
    }
  }
}

function updateCloudStatusBar() {
  const dot = el('cloudStatusDot');
  const title = el('cloudStatusTitle');
  const sub = el('cloudStatusSub');
  const syncBtn = el('cloudSyncNowBtn');
  const cfg = getCloudConfig();

  if (!dot || !title || !sub) return;

  dot.className = 'yc-status-dot';
  if (syncBtn) syncBtn.classList.remove('loading');

  const hasEndpoint = (cfg.provider === 'firebase' && cfg.fbUrl) ||
                      (cfg.provider === 'supabase' && cfg.sbUrl) ||
                      (cfg.provider === 'custom' && cfg.customUrl);

  if (isCloudSyncing) {
    dot.classList.add('syncing');
    if (syncBtn) syncBtn.classList.add('loading');
    title.innerHTML = '☁️ Облако: Синхронизация...';
    sub.textContent = 'Объединение смет с общей базой данных...';
    return;
  }

  if (!hasEndpoint) {
    dot.classList.remove('connected', 'error', 'syncing');
    title.innerHTML = '☁️ Облако: Локальный режим';
    sub.textContent = 'Нажмите «Настройки», чтобы включить бесплатную синхронизацию (Firebase / Supabase)';
    return;
  }

  if (cfg.lastStatus === 'error') {
    dot.classList.add('error');
    title.innerHTML = '☁️ Облако: Ошибка связи';
    sub.textContent = cfg.lastError ? `Ошибка: ${cfg.lastError} (данные сохранены в телефоне)` : 'Проверьте интернет или настройки базы данных';
    return;
  }

  dot.classList.add('connected');
  const provName = cfg.provider === 'firebase' ? 'Firebase' : (cfg.provider === 'supabase' ? 'Supabase' : 'Облако');
  title.innerHTML = `🟢 ${provName}: Синхронизировано`;
  if (cfg.lastSyncTime) {
    const d = new Date(cfg.lastSyncTime);
    const timeStr = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    const dateStr = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;
    sub.textContent = `База актуальна (синхронизировано ${dateStr} в ${timeStr})`;
  } else {
    sub.textContent = 'Подключено к общей облачной базе смет GlassLoft';
  }
}

function openCloudSettingsModal() {
  const cfg = getCloudConfig();
  currentCloudProvider = cfg.provider || 'firebase';
  selectCloudProvider(currentCloudProvider);

  if (el('fbDbUrlInput')) el('fbDbUrlInput').value = cfg.fbUrl;
  if (el('fbApiKeyInput')) el('fbApiKeyInput').value = cfg.fbApiKey;
  if (el('sbUrlInput')) el('sbUrlInput').value = cfg.sbUrl;
  if (el('sbApiKeyInput')) el('sbApiKeyInput').value = cfg.sbApiKey;
  if (el('customUrlInput')) el('customUrlInput').value = cfg.customUrl;
  if (el('customApiKeyInput')) el('customApiKeyInput').value = cfg.customApiKey;

  if (el('cloudAutoSyncToggle')) el('cloudAutoSyncToggle').checked = cfg.autoSync !== false;
  if (el('cloudAutoFetchToggle')) el('cloudAutoFetchToggle').checked = cfg.autoFetch !== false;
  
  const resBox = el('cloudTestResult');
  if (resBox) {
    resBox.style.display = 'none';
    resBox.innerHTML = '';
  }
  openModal('cloudSettingsModal');
}

function toggleCloudGuide() {
  const body = el('cloudGuideBody');
  const arrow = el('cloudGuideArrow');
  if (!body) return;
  if (body.style.display === 'none' || !body.style.display) {
    body.style.display = 'block';
    if (arrow) arrow.textContent = '▲';
  } else {
    body.style.display = 'none';
    if (arrow) arrow.textContent = '▼';
  }
}

function saveCloudSettings() {
  const fbUrl = (el('fbDbUrlInput') && el('fbDbUrlInput').value.trim()) || '';
  const fbApiKey = (el('fbApiKeyInput') && el('fbApiKeyInput').value.trim()) || '';
  const sbUrl = (el('sbUrlInput') && el('sbUrlInput').value.trim()) || '';
  const sbApiKey = (el('sbApiKeyInput') && el('sbApiKeyInput').value.trim()) || '';
  const customUrl = (el('customUrlInput') && el('customUrlInput').value.trim()) || '';
  const customApiKey = (el('customApiKeyInput') && el('customApiKeyInput').value.trim()) || '';
  const autoSync = el('cloudAutoSyncToggle') ? el('cloudAutoSyncToggle').checked : true;
  const autoFetch = el('cloudAutoFetchToggle') ? el('cloudAutoFetchToggle').checked : true;

  setCloudConfig({
    provider: currentCloudProvider,
    fbUrl,
    fbApiKey,
    sbUrl,
    sbApiKey,
    customUrl,
    customApiKey,
    autoSync,
    autoFetch,
    lastStatus: 'idle',
    lastError: null
  });

  closeModal('cloudSettingsModal');
  showToast('Настройки облака сохранены');

  syncCloudData(false);
}

// Normalized Endpoint Builder for Provider
function normalizeSupabaseUrl(raw) {
  if (!raw) return '';
  raw = raw.trim();
  // 1. If user pasted dashboard URL like https://supabase.com/dashboard/project/xyzabc/settings/api
  const dashMatch = raw.match(/dashboard\/project\/([a-zA-Z0-9_-]+)/);
  if (dashMatch) {
    return `https://${dashMatch[1]}.supabase.co`;
  }
  // 2. If user pasted just project reference ID
  if (!raw.includes('.') && !raw.includes('/')) {
    return `https://${raw}.supabase.co`;
  }
  // 3. Ensure https://
  if (!raw.startsWith('http://') && !raw.startsWith('https://')) {
    raw = 'https://' + raw;
  }
  // 4. Strip extra path suffixes like /rest/v1 or /history
  raw = raw.replace(/\/+$/, '');
  raw = raw.replace(/\/rest\/v1(\/history)?$/i, '');
  raw = raw.replace(/\/rest\/v1\/?$/i, '');
  raw = raw.replace(/\/+$/, '');
  return raw;
}

// Normalized Endpoint Builder for Provider
function getActiveCloudEndpointInfo() {
  const cfg = getCloudConfig();
  if (cfg.provider === 'firebase') {
    let raw = (cfg.fbUrl || '').trim();
    if (!raw) return null;
    raw = raw.replace(/\/+$/, '');
    if (!raw.endsWith('.json')) {
      raw += '/glassloft/history.json';
    }
    if (cfg.fbApiKey) {
      raw += (raw.includes('?') ? '&' : '?') + 'auth=' + encodeURIComponent(cfg.fbApiKey.trim());
    }
    return {
      provider: 'firebase',
      url: raw,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    };
  } else if (cfg.provider === 'supabase') {
    let baseUrl = normalizeSupabaseUrl(cfg.sbUrl);
    if (!baseUrl) return null;
    const key = (cfg.sbApiKey || '').trim();
    const url = `${baseUrl}/rest/v1/history`;
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Prefer': 'resolution=merge-duplicates'
    };
    return { provider: 'supabase', url, headers, baseUrl };
  } else {
    let raw = (cfg.customUrl || '').trim();
    if (!raw) return null;
    const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    if (cfg.customApiKey) headers['X-Api-Key'] = cfg.customApiKey.trim();
    return { provider: 'custom', url: raw, headers };
  }
}

async function testCloudConnection() {
  const resBox = el('cloudTestResult');
  const info = getActiveCloudEndpointInfo();

  if (!info || !info.url) {
    if (resBox) {
      resBox.className = 'yc-test-result error';
      resBox.style.display = 'block';
      resBox.textContent = '⚠️ Пожалуйста, введите URL проекта Supabase и anon public API ключ';
    }
    return false;
  }

  if (resBox) {
    resBox.className = 'yc-test-result info';
    resBox.style.display = 'block';
    resBox.innerHTML = `⏳ Проверка связи с ${info.provider === 'firebase' ? 'Firebase' : (info.provider === 'supabase' ? 'Supabase' : 'облаком')}...`;
  }

  const startTime = Date.now();
  try {
    let fetchUrl = info.url;
    if (info.provider === 'supabase') {
      fetchUrl += '?select=id,timestamp&limit=50';
    }

    const res = await fetch(fetchUrl, {
      method: 'GET',
      headers: info.headers,
      cache: 'no-store'
    });

    const elapsed = Date.now() - startTime;

    if (!res.ok) {
      const errText = await res.text();
      let msg = `Ошибка HTTP ${res.status}`;
      try {
        const parsed = JSON.parse(errText);
        if (parsed.message) msg += `: ${parsed.message}`;
        else if (parsed.error) msg += `: ${parsed.error}`;
        else if (parsed.hint) msg += ` (${parsed.hint})`;
      } catch(e) {
        if (errText && errText.length < 150) msg += `: ${errText}`;
      }

      if (res.status === 404) {
        msg += '<br><br>💡 <b>Как исправить:</b> Убедитесь, что в поле <b>Project URL</b> указана ссылка вида <code>https://xxxxxxxx.supabase.co</code> (из раздела Project Settings -> API), а не ссылка из адресной строки браузера!';
      } else if (res.status === 401 || res.status === 403) {
        msg += '<br><br>💡 <b>Как исправить:</b> Проверьте поле <b>anon public API key</b> в разделе Project Settings -> API.';
      }

      if (resBox) {
        resBox.className = 'yc-test-result error';
        resBox.innerHTML = `❌ ${msg} (${elapsed} мс)`;
      }
      return false;
    }

    const data = await res.json();
    let count = 0;
    if (Array.isArray(data)) {
      count = data.length;
    } else if (data && typeof data === 'object') {
      count = Object.keys(data).length;
    }

    if (resBox) {
      resBox.className = 'yc-test-result success';
      resBox.innerHTML = `✅ <b>Успешное подключение к Supabase!</b> Время отклика: ${elapsed} мс.<br>В таблице <code>history</code> найдено смет: <b>${count}</b>`;
    }
    return true;
  } catch(err) {
    const elapsed = Date.now() - startTime;
    if (resBox) {
      resBox.className = 'yc-test-result error';
      resBox.innerHTML = `❌ Ошибка подключения (${elapsed} мс): ${err.message || 'Сетевая ошибка'}`;
    }
    return false;
  }
}

// Smart 2-Way Sync Engine (Firebase / Supabase / REST)
async function syncCloudData(silent = false) {
  const info = getActiveCloudEndpointInfo();
  if (!info || !info.url) {
    if (!silent) openCloudSettingsModal();
    return;
  }

  if (isCloudSyncing) return;
  isCloudSyncing = true;
  updateCloudStatusBar();

  try {
    // 1. GET Remote
    let getUrl = info.url;
    if (info.provider === 'supabase') getUrl += '?select=*';

    const getRes = await fetch(getUrl, {
      method: 'GET',
      headers: info.headers,
      cache: 'no-store'
    });

    if (!getRes.ok) {
      throw new Error(`HTTP ${getRes.status}`);
    }

    const remoteRaw = await getRes.json();
    let remoteList = [];

    if (Array.isArray(remoteRaw)) {
      if (info.provider === 'supabase') {
        remoteList = remoteRaw.map(r => r.data || r).filter(Boolean);
      } else {
        remoteList = remoteRaw.filter(Boolean);
      }
    } else if (remoteRaw && typeof remoteRaw === 'object') {
      remoteList = Object.values(remoteRaw).filter(Boolean);
    }

    // 2. Local List
    const localList = getSavedHistory();

    // 3. Smart Merge by ID and timestamp
    const mergedMap = new Map();
    localList.forEach(item => {
      if (item && item.id) mergedMap.set(item.id, item);
    });

    remoteList.forEach(remItem => {
      if (!remItem || !remItem.id) return;
      if (mergedMap.has(remItem.id)) {
        const loc = mergedMap.get(remItem.id);
        const locTime = loc.updatedAt || loc.timestamp || 0;
        const remTime = remItem.updatedAt || remItem.timestamp || 0;
        if (remTime > locTime) {
          mergedMap.set(remItem.id, remItem);
        }
      } else {
        mergedMap.set(remItem.id, remItem);
      }
    });

    const finalMerged = Array.from(mergedMap.values())
      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
      .slice(0, MAX_HISTORY_ITEMS);

    // Save locally
    try {
      localStorage.setItem('glassloft_calc_history_v1', JSON.stringify(finalMerged));
    } catch(e) {}
    updateHistoryBadge();
    renderHistoryList();

    // 4. PUT / POST merged list to Cloud
    if (info.provider === 'firebase') {
      await fetch(info.url, {
        method: 'PUT',
        headers: info.headers,
        body: JSON.stringify(finalMerged)
      });
    } else if (info.provider === 'supabase') {
      // Bulk upsert in 1 request
      const payload = finalMerged.map(item => ({
        id: item.id,
        data: item,
        timestamp: item.timestamp || Date.now()
      }));
      if (payload.length > 0) {
        await fetch(info.url, {
          method: 'POST',
          headers: info.headers,
          body: JSON.stringify(payload)
        });
      }
    } else {
      await fetch(info.url, {
        method: 'POST',
        headers: info.headers,
        body: JSON.stringify(finalMerged)
      });
    }

    setCloudConfig({
      lastSyncTime: Date.now(),
      lastStatus: 'success',
      lastError: null
    });

    if (!silent) {
      showToast(`Синхронизировано: ${finalMerged.length} смет в общей базе`);
    }
  } catch(err) {
    setCloudConfig({
      lastStatus: 'error',
      lastError: err.message || 'Ошибка сети'
    });
    if (!silent) {
      showToast(`Ошибка синхронизации: ${err.message || 'Сетевая ошибка'}`);
    }
  } finally {
    isCloudSyncing = false;
    updateCloudStatusBar();
  }
}

async function pullFromCloudDirect() {
  const info = getActiveCloudEndpointInfo();
  if (!info || !info.url) {
    showToast('Сначала укажите URL базы данных');
    return;
  }
  try {
    let getUrl = info.url;
    if (info.provider === 'supabase') getUrl += '?select=*';
    const res = await fetch(getUrl, { method: 'GET', headers: info.headers, cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    let list = [];
    if (Array.isArray(data)) {
      list = (info.provider === 'supabase') ? data.map(d => d.data || d) : data;
    } else if (data && typeof data === 'object') {
      list = Object.values(data);
    }
    list = list.filter(Boolean);
    if (list.length === 0) {
      showToast('В облаке пока нет сохранённых расчётов');
      return;
    }
    saveHistoryList(list, true);
    renderHistoryList();
    closeModal('cloudSettingsModal');
    showToast(`Загружено ${list.length} смет из облака`);
  } catch(err) {
    showToast(`Ошибка: ${err.message}`);
  }
}

async function pushToCloudDirect() {
  const info = getActiveCloudEndpointInfo();
  if (!info || !info.url) {
    showToast('Сначала укажите URL базы данных');
    return;
  }
  const localItems = getSavedHistory();
  try {
    if (info.provider === 'firebase') {
      const res = await fetch(info.url, { method: 'PUT', headers: info.headers, body: JSON.stringify(localItems) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } else if (info.provider === 'supabase') {
      const payload = localItems.map(item => ({
        id: item.id,
        data: item,
        timestamp: item.timestamp || Date.now()
      }));
      if (payload.length > 0) {
        const res = await fetch(info.url, {
          method: 'POST',
          headers: info.headers,
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      }
    } else {
      const res = await fetch(info.url, { method: 'POST', headers: info.headers, body: JSON.stringify(localItems) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    }
    setCloudConfig({ lastSyncTime: Date.now(), lastStatus: 'success', lastError: null });
    closeModal('cloudSettingsModal');
    showToast(`Выгружено ${localItems.length} смет в облако`);
  } catch(err) {
    showToast(`Ошибка: ${err.message}`);
  }
}

function initCloudSync() {
  updateCloudStatusBar();
  const cfg = getCloudConfig();
  const hasEndpoint = (cfg.provider === 'firebase' && cfg.fbUrl) ||
                      (cfg.provider === 'supabase' && cfg.sbUrl) ||
                      (cfg.provider === 'custom' && cfg.customUrl);
  if (hasEndpoint && cfg.autoFetch) {
    setTimeout(() => {
      syncCloudData(true);
    }, 1200);
  }
}



// PDF Import Handler (Client-Side Text Extractor with pdf.js)
/* ============ Восстановление расчёта из PDF ============ */

function utf8ToB64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  const CH = 0x4000;
  for (let i = 0; i < bytes.length; i += CH) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
  }
  return btoa(bin);
}

function b64ToUtf8(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function parsePdfAmount(s) {
  if (!s) return 0;
  let t = String(s).replace(/[\s ]/g, '').replace(/[oоО]/g, '0');
  const v = parseFloat(t.replace(',', '.'));
  return isNaN(v) ? 0 : v;
}

// Точный «слепок» текущего расчёта (для вшивания в PDF при экспорте)
function buildRecoveryPayload(seqNum) {
  try {
    return {
      magic: 'GLASSLOFT_KP_V1',
      seqNum: seqNum || currentKpSeqNumber || 1,
      date: getFormattedDates().dateStr,
      client: (el('calcClient') && el('calcClient').value.trim()) || 'Частное лицо',
      phone: (el('calcPhone') && el('calcPhone').value.trim()) || '',
      address: (el('calcAddress') && el('calcAddress').value.trim()) || 'г. Санкт-Петербург',
      activeCategory: activeCategory,
      appState: JSON.parse(JSON.stringify(appState)),
      extraData: {
        phone: (el('calcPhone') && el('calcPhone').value.trim()) || '',
        delOn: el('delOn') ? el('delOn').checked : true,
        delPrice: el('delPrice') ? el('delPrice').value : 7500,
        adjMode: adjMode,
        adjPercent: el('adjPercent') ? el('adjPercent').value : '',
        termManual: termManual,
        termDays: el('termDays') ? el('termDays').value : '',
        services: Array.from(document.querySelectorAll('.servPrice')).map(inp => ({ idx: inp.dataset.idx, val: inp.value }))
      }
    };
  } catch (e) { return null; }
}

// Вшивает блок авто-восстановления в генерируемый PDF (метаданные + невидимый текст)
function embedRecoveryInPdf(pdf, payloadObj) {
  try {
    if (!payloadObj) return;
    const b64 = utf8ToB64(JSON.stringify(payloadObj));
    try {
      pdf.setProperties({
        title: 'Коммерческое предложение GlassLoft',
        subject: 'Коммерческое предложение GlassLoft',
        keywords: 'GLKP1:' + b64,
        creator: 'GlassLoft Calculator'
      });
    } catch (e) {}
    try { pdf.setFont('helvetica', 'normal'); } catch (e) {}
    try { pdf.setFontSize(1); pdf.setTextColor(255, 255, 255); } catch (e) {}
    const CH = 500;
    let n = 0;
    for (let i = 0; i < b64.length; i += CH, n++) {
      const tag = (n === 0 ? 'GLKP1:' : 'GLKP1+' + n + ':');
      const line = tag + b64.substr(i, CH);
      try {
        pdf.text(line, 1, 296.5, { renderingMode: 'invisible' });
      } catch (e) {
        try { pdf.text(line, 1, 296.5); } catch (e2) {}
      }
    }
  } catch (e) { console.warn('embedRecoveryInPdf:', e); }
}

function buildRecordFromPayload(p) {
  const dates = getFormattedDates();
  const productsSummary = [];
  ['railings', 'balconies', 'showers', 'loft'].forEach(cat => {
    (p.appState[cat] || []).forEach(pos => {
      const hasDims = pos.length || pos.rectLen || pos.trapLen || pos.area || pos.fixedArea || pos.doorArea || pos.trapArea || pos.rectArea;
      if (hasDims) productsSummary.push(pos.name || getDefaultPositionName(cat, 0));
    });
  });
  const seq = p.seqNum || currentKpSeqNumber || 1;
  const client = p.client || 'Частное лицо';
  const address = p.address || 'г. Санкт-Петербург';
  return {
    id: 'calc_pdf_' + Date.now(),
    timestamp: Date.now(),
    dateFormatted: (p.date || dates.dateStr) + ' (точно из PDF)',
    seqNum: seq,
    kpNumber: '№ ' + seq + '/' + dates.noDots,
    client: client,
    phone: p.phone || '',
    address: address,
    title: client + ' — ' + address,
    total: 0,
    totalFormatted: '',
    activeCategory: ['railings', 'balconies', 'showers', 'loft'].includes(p.activeCategory) ? p.activeCategory : 'balconies',
    productsSummary: productsSummary.length ? productsSummary : ['Расчёт (восстановлен из PDF)'],
    appState: p.appState,
    extraData: p.extraData || null
  };
}

function detectPdfCat(text, glassName) {
  const t = ((text || '') + ' ' + (glassName || '')).toLowerCase();
  if (/лофт/.test(t)) return 'loft';
  if (/душев|душ/.test(t)) return 'showers';
  if (/лестнич|лестниц/.test(t)) return 'railings';
  if (/балкон/.test(t)) return 'balconies';
  if (/огражден/.test(t)) return 'balconies';
  const g = (glassName || '').toLowerCase();
  if (/8\s*мм/.test(g)) return 'showers';
  if (/6\s*мм/.test(g)) return 'loft';
  return 'balconies';
}

function matchGlassKey(cat, glassName) {
  const glassObj = (D[cat] && D[cat].glass) ? D[cat].glass : {};
  const keys = Object.keys(glassObj);
  if (!keys.length) return '';
  if (!glassName) return keys[0];
  const g = glassName.toLowerCase();
  let best = keys[0];
  let bestScore = 0;
  keys.forEach(k => {
    const words = k.toLowerCase().split(/[\s,()×x]+/).filter(w => w.length > 3);
    let score = 0;
    words.forEach(w => { if (g.indexOf(w) !== -1) score += w.length; });
    if (score > bestScore) { bestScore = score; best = k; }
  });
  return best;
}

function fmtNum(n) {
  // ВАЖНО: только точка — <input type="number"> стирает значения с запятой
  return String(Math.round(n * 100) / 100);
}

// Разбор текстового слоя старого/чужого PDF в запись истории
// Разбор текстового слоя (или результата OCR) старого/чужого PDF в запись истории
function parseKpTextToRecord(docText) {
  const lines = docText.split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean);

  // Номер и дата КП
  const kpMatch = docText.match(/№\s*([0-9]{1,4})\s*[\/\\]\s*([0-9]{4,10})/);
  const seqFromDoc = kpMatch ? parseInt(kpMatch[1], 10) : 0;
  const dates = getFormattedDates();
  const dateMatch = docText.match(/\b(\d{2}\s*\.\s*\d{2}\s*\.\s*\d{4})\b/);

  // --- Реквизиты: Заказчик / Адрес ---
  let address = '';
  let client = '';
  const stopRe = /\b(ЗАКАЗЧИК|НАИМЕНОВАНИЕ|СТОИМОСТЬ|КОММЕРЧЕСКОЕ|ИТОГО)\b/i;

  const addrInline = docText.match(/АДРЕС(?:\s+ОБЪЕКТА)?\s*[:\-–]\s*([^\n]{5,120})/i);
  if (addrInline) {
    let v = addrInline[1];
    const c = v.search(stopRe);
    if (c > 0) v = v.slice(0, c); else if (c === 0) v = '';
    v = v.replace(/[\s,]+$/, '').trim();
    if (v.length >= 5 && /[а-яА-ЯёЁ]/.test(v)) address = v;
  }
  const clientInline = docText.match(/ЗАКАЗЧИК\s*[:\-–]\s*([^\n]{3,80})/i);
  if (clientInline) {
    let v = clientInline[1];
    const c = v.search(stopRe);
    if (c > 0) v = v.slice(0, c); else if (c === 0) v = '';
    v = v.replace(/[\s,]+$/, '').trim();
    if (v.length >= 3 && /^[А-ЯЁа-яё][А-ЯЁа-яё\s\-\.]{2,78}$/.test(v) && !/огражден|перегород|душев|лофт|стекл|издели|наименован/i.test(v)) client = v;
  }

  // Строка под шапкой «АДРЕС ОБЪЕКТА ЗАКАЗЧИК» — там могут быть адрес и ФИО вместе
  const hdrIdx = lines.findIndex(l => /АДРЕС\s+ОБЪЕКТА/i.test(l) || (address === '' && /ЗАКАЗЧИК/i.test(l)));
  if (hdrIdx !== -1 && (!address || !client)) {
    for (let j = hdrIdx + 1; j < Math.min(hdrIdx + 3, lines.length); j++) {
      const next = lines[j];
      if (!next || /^(КОММЕРЧЕСКОЕ|НАИМЕНОВАНИЕ|СТОИМОСТЬ|ИТОГО|ОБЩИЕ|№|\d{1,2}\.\s*[А-ЯЁ]{3,})/i.test(next)) continue;
      if (!/[а-яА-ЯёЁ]/.test(next)) continue;
      // Пытаемся отщепить ФИО справа (1–3 слова с заглавной буквы)
      const words = next.split(/\s+/).filter(Boolean);
      while (words.length && /^[-–—.,;:|]+$/.test(words[words.length - 1])) words.pop();
      const nameWords = [];
      while (words.length && nameWords.length < 3 && /^[А-ЯЁ][а-яё]{2,}$/.test(words[words.length - 1])) {
        nameWords.unshift(words.pop());
      }
      const addrPart = words.join(' ').replace(/[\s,]+$/, '');
      const namePart = nameWords.join(' ');
      const addrLooksOk = addrPart.length >= 4 && /(обл\.?|край|респ|г\.?\s|город|ул\.?|улица|пр\.?|пр-т|проспект|пр-д|пер\.?|переулок|шоссе|наб\.?|пос\.?|дер\.?|д\.|\d)/i.test(addrPart);
      if (!address && addrLooksOk) address = addrPart;
      if (!client && namePart.length >= 3) client = namePart;
      if (!address && !addrLooksOk && next.length >= 5 && /(\d|г\.|ул|пр|пер|шоссе|наб|обл)/i.test(next)) {
        address = namePart && next.endsWith(namePart) ? addrPart : next;
        if (!client && namePart) client = namePart;
      }
      if (address && client) break;
      break;
    }
  }
  if (!address) address = 'г. Санкт-Петербург';
  if (!client) client = 'Частное лицо';

  // --- Вспомогательное: суммы в хвосте строки (устойчиво к OCR) ---
  function amountsOf(str) {
    // Склеиваем разряды «95 000» и оторванный знак валюты «95 000 ₽»
    str = String(str).replace(/(\d)\s+(\d{3})\b/g, '$1$2').replace(/(\d)\s+(\d{3})\b/g, '$1$2');
    str = str.replace(/(\d)\s+([₽PРр]|руб\.?)/g, '$1$2');
    const tokens = str.split(/\s+/).filter(Boolean);
    const out = [];
    tokens.forEach(tk => {
      const mm = tk.match(/^([0-9][0-9\s oоО]{0,13}(?:[,.][0-9oоО]{1,2})?)([₽PРр]\.?|руб\.?)?$/i);
      if (mm) out.push({ v: parsePdfAmount(mm[1]), hasCur: !!mm[2] });
    });
    return out;
  }
  function rowTotalFromTokens(str) {
    const am = amountsOf(str);
    const withCur = am.filter(a => a.hasCur && a.v > 0);
    if (withCur.length) return withCur[withCur.length - 1].v;
    if (am.length >= 2) return am[am.length - 1].v;
    return 0;
  }
  function splitTextRow(line) {
    const m = line.match(/^(.*?)\s+(компл\.?|усл\.?\s*ед\.?|услуга|шт\.?|м\.?\s*пог\.?|м\.п\.|м2|м²|кв\.?\s*м|поз\.?)(?![\w.])\s*[.,]?\s*(.*)$/i);
    if (!m) return null;
    const name = m[1].trim();
    const rest = m[3];
    if (!/[а-яА-ЯёЁ]/.test(name)) return null;
    const notNeeded = /не\s*требу/i.test(rest);
    return { name: name, total: rowTotalFromTokens(rest), notNeeded: notNeeded };
  }

  // --- Итог (может быть зашумлён OCR — берём как резерв) ---
  let totalSum = 0;
  let itogCand = 0;
  const itogIdx = docText.search(/ИТОГО/i);
  if (itogIdx !== -1) {
    const after = docText.slice(itogIdx, itogIdx + 350);
    const am = after.match(/([0-9][0-9\s oоО]{2,20})(?:[₽PРр]|руб)/);
    if (am) itogCand = parsePdfAmount(am[1]);
  }
  if (!itogCand) {
    const all = [...docText.matchAll(/([0-9][0-9\s oоО]{2,20})(?:[₽PРр]|руб)/g)].map(m => parsePdfAmount(m[1]));
    if (all.length) itogCand = Math.max.apply(null, all);
  }

  // --- Таблица позиций ---
  const positions = [];
  const services = [];
  let delivery = null;
  let cur = null;
  let docTitle = 'Восстановлено из PDF';
  let pendingFill = null; // разрешение дозаписать сумму в предыдущую строку таблицы

  function ensurePos() {
    if (!cur) cur = { name: docTitle, glassName: '', glassSum: 0, hardSum: 0, railName: '', railSum: 0, instSum: 0, instOn: false };
    return cur;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/НАИМЕНОВАНИЕ\s+ИЗДЕЛИЯ/i.test(line)) {
      for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
        const cand = lines[j];
        if (cand && !/СТОИМОСТЬ|НАИМЕНОВАНИЕ|ЕД|КОЛ-ВО|ИТОГО|₽|руб/i.test(cand) && /[а-яА-ЯёЁ]/.test(cand)) {
          docTitle = cand.split(/\s+стекло\s+/i)[0].trim() || cand;
          if (docTitle.length > 80) docTitle = docTitle.slice(0, 80).trim();
          break;
        }
      }
      continue;
    }
    if (/ОБЩИЕ\s+УСЛУГИ/i.test(line)) {
      if (cur) { positions.push(cur); cur = null; }
      pendingFill = null;
      continue;
    }
    const sm = line.match(/^(\d{1,2})\.\s*([А-ЯЁA-Z][А-ЯЁA-Z\s\d\-\.,()&№×xX]{2,80})$/);
    if (sm && !/НАИМЕНОВАНИЕ|ИЗДЕЛИЯ|УСЛУГИ/i.test(sm[2])) {
      if (cur) { positions.push(cur); cur = null; }
      pendingFill = null;
      const low = sm[2].trim().toLowerCase();
      cur = { name: low.charAt(0).toUpperCase() + low.slice(1), glassName: '', glassSum: 0, hardSum: 0, railName: '', railSum: 0, instSum: 0, instOn: false };
      continue;
    }
    const row = splitTextRow(line);
    if (!row) {
      // Строка только с суммами — дозаписываем в предыдущую незавершённую строку таблицы
      if (pendingFill && /[₽PРр]|руб/.test(line)) {
        const v = rowTotalFromTokens(line);
        if (v > 0) { pendingFill(v); pendingFill = null; }
      }
      continue;
    }
    const nm = row.name.toLowerCase();
    if (/^стекло/.test(nm)) {
      const p = ensurePos();
      p.glassSum = (p.glassSum || 0) + row.total;
      p.glassName = row.name.replace(/^стекло\s*(закал[её]нное)?\s*/i, '').trim();
      pendingFill = row.total > 0 ? null : (v => { p.glassSum += v; });
    } else if (/комплект\s*фурнитур/.test(nm)) {
      const p = ensurePos();
      p.hardSum = (p.hardSum || 0) + row.total;
      pendingFill = row.total > 0 ? null : (v => { p.hardSum += v; });
    } else if (/^поручень/.test(nm)) {
      const p = ensurePos();
      p.railSum = (p.railSum || 0) + row.total;
      p.railName = row.name.replace(/^поручень\s*[:\-–]?\s*/i, '').trim();
      pendingFill = row.total > 0 ? null : (v => { p.railSum += v; });
    } else if (/монтажн/.test(nm)) {
      const p = ensurePos();
      p.instSum = (p.instSum || 0) + row.total;
      if (!row.notNeeded && row.total > 0) p.instOn = true;
      pendingFill = null;
    } else if (/доставка/.test(nm)) {
      delivery = { on: row.total > 0 && !row.notNeeded, price: row.total > 0 ? row.total : D.misc.delivery };
      pendingFill = null;
    } else if (/итого|общая\s+стоимость|срок|предоплат/i.test(nm)) {
      pendingFill = null;
      continue;
    } else {
      if (row.total > 0) {
        const sName = row.name.replace(/\s+/g, ' ').trim();
        if (!services.some(x => x.name.toLowerCase() === sName.toLowerCase() && x.sum === row.total)) {
          services.push({ name: sName, sum: row.total });
        }
      }
      pendingFill = null;
    }
  }
  if (cur) positions.push(cur);

  // --- Итоговая сумма: приоритет сумме строк (OCR «ИТОГО» шумнее) ---
  let rowsSum = 0;
  positions.forEach(p => { rowsSum += (p.glassSum || 0) + (p.hardSum || 0) + (p.railSum || 0) + (p.instSum || 0); });
  services.forEach(s => { rowsSum += s.sum || 0; });
  if (delivery && delivery.on) rowsSum += delivery.price || 0;

  if (rowsSum > 0) totalSum = rowsSum;
  else totalSum = itogCand;

  const hasAny = positions.some(p => (p.glassSum + p.hardSum + p.railSum + p.instSum) > 0);
  if (!hasAny && services.length === 0 && !delivery && totalSum === 0) return null;
  if (!hasAny && totalSum > 0) {
    positions.length = 0;
    positions.push({ name: docTitle, glassName: '', glassSum: totalSum, hardSum: 0, railName: '', railSum: 0, instSum: 0, instOn: false });
  }

  // --- Собираем appState ---
  const newAppState = { railings: [], balconies: [], showers: [], loft: [] };
  let activeCat = null;
  const productNames = [];

  positions.forEach(p => {
    const cat = detectPdfCat(p.name + ' ' + docTitle, p.glassName);
    const glassKey = matchGlassKey(cat, p.glassName);
    const glPrice = (D[cat].glass[glassKey] && D[cat].glass[glassKey].price) || 10000;
    const productSum = p.glassSum + p.hardSum + p.railSum;
    const estArea = Math.max(0.5, productSum / glPrice);
    const idxInCat = newAppState[cat].length;

    const pos = {
      id: Date.now() + Math.floor(Math.random() * 100000),
      name: p.name || getDefaultPositionName(cat, idxInCat),
      trapLen: '', rectLen: '', trapArea: '', rectArea: '',
      length: '', heightMm: '1000',
      fixedArea: '', doorArea: '',
      area: '', profileLen: '', gridLen: '',
      glass: glassKey,
      hardQty: {}, hardSum: {},
      railSelect: 'Без поручня', railLength: '', railManual: '',
      instOn: p.instOn, instMode: 'fix',
      instFix: p.instSum || 0, instPct: 30
    };

    if (cat === 'balconies') pos.length = fmtNum(estArea);
    else if (cat === 'railings') pos.rectLen = fmtNum(estArea / 1.25);
    else if (cat === 'showers') pos.fixedArea = fmtNum(estArea);
    else { pos.area = fmtNum(estArea); pos.profileLen = fmtNum(estArea * 2); }

    newAppState[cat].push(pos);
    if (!activeCat) activeCat = cat;
    productNames.push(pos.name);
  });

  // --- Услуги (с мягким сопоставлением названий после OCR) ---
  const extraData = {
    phone: '',
    delOn: delivery ? delivery.on : true,
    delPrice: delivery && delivery.on ? String(Math.round(delivery.price)) : String(D.misc.delivery),
    adjMode: 'none',
    adjPercent: '',
    termManual: false,
    termDays: '',
    services: []
  };

  function normName(s) { return String(s || '').toLowerCase().replace(/[^а-яa-z0-9]/g, ''); }
  function findServiceIdx(name) {
    const n = normName(name);
    if (!n) return -1;
    for (let k = 0; k < D.services.length; k++) {
      const t = normName(D.services[k].name);
      if (!t) continue;
      if (t === n) return k;
      if (n.length >= 10 && t.length >= 10 && (n.includes(t) || t.includes(n))) return k;
      let pref = 0;
      const lim = Math.min(n.length, t.length);
      while (pref < lim && n[pref] === t[pref]) pref++;
      if (lim >= 10 && pref / lim >= 0.65) return k;
    }
    return -1;
  }

  let newServicesAdded = false;
  services.forEach(s => {
    let idx = findServiceIdx(s.name);
    if (idx === -1) {
      D.services.push({ name: s.name.slice(0, 120), emptyDefault: 'hide' });
      idx = D.services.length - 1;
      newServicesAdded = true;
    }
    extraData.services.push({ idx: String(idx), val: String(Math.round(s.sum)) });
  });
  if (newServicesAdded && typeof buildServiceList === 'function') buildServiceList();

  const seq = seqFromDoc || currentKpSeqNumber || 1;
  const actCat = activeCat || detectPdfCat(docTitle + ' ' + docText.slice(0, 400), '');

  return {
    id: 'calc_pdf_' + Date.now(),
    timestamp: Date.now(),
    dateFormatted: (dateMatch ? dateMatch[1].replace(/\s/g, '') : dates.dateStr) + ' (из PDF)',
    seqNum: seq,
    kpNumber: kpMatch ? ('№ ' + kpMatch[1] + '/' + kpMatch[2]) : ('№ ' + seq + '/' + dates.noDots),
    client: client,
    phone: '',
    address: address,
    title: client + ' — ' + address,
    total: totalSum,
    totalFormatted: totalSum ? rub(totalSum) : '',
    activeCategory: actCat,
    productsSummary: productNames.length ? productNames : [docTitle],
    appState: newAppState,
    extraData: extraData
  };
}

async function finalizePdfImport(rec, okMsg) {
  const history = getSavedHistory();
  history.unshift(rec);
  saveHistoryList(history, true);
  renderHistoryList();
  loadCalculationFromHistory(rec.id);
  // Обновляем итог записи по фактически посчитанной сумме калькулятора
  const sumText = el('sum') ? el('sum').textContent.trim() : '';
  const val = parsePdfAmount((sumText || '').replace(/₽|руб\.?/g, ''));
  const h2 = getSavedHistory();
  const idx = h2.findIndex(h => h.id === rec.id);
  if (idx !== -1) {
    if (val > 0) { h2[idx].total = val; h2[idx].totalFormatted = sumText || h2[idx].totalFormatted; }
    saveHistoryList(h2);
    renderHistoryList();
  }
  setTimeout(() => showToast(okMsg), 400);
}

// Ни одна ошибка приложения больше не пройдёт молча
window.addEventListener('error', function (e) {
  try { showToast('⚠️ Ошибка: ' + (e.message || 'неизвестная')); } catch (_) {}
});

async function runPdfSelfTest() {
  showToast('Запускаю самопроверку PDF-модуля... ⏳', true);
  const report = [];
  try {
    report.push(typeof pdfjsLib !== 'undefined' ? '✅ Читалка PDF: загружена' : '❌ Читалка PDF: НЕ загружена');
    report.push((window.jspdf && window.jspdf.jsPDF) ? '✅ Создатель PDF: загружен' : '❌ Создатель PDF: НЕ загружен');
    const inp = el('pdfFileInput');
    report.push(inp ? '✅ Поле выбора файла: на месте' : '❌ Поле выбора файла: не найдено');
    if (typeof pdfjsLib !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      pdf.text('GlassLoft self test', 10, 10);
      embedRecoveryInPdf(pdf, buildRecoveryPayload(999));
      const buf = pdf.output('arraybuffer');
      const doc = await pdfjsLib.getDocument({ data: buf }).promise;
      const meta = await doc.getMetadata();
      const kw = (meta && meta.info && meta.info.Keywords) || '';
      let txt = '';
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const tc = await page.getTextContent();
        txt += tc.items.map(x => x.str).join(' ') + ' ';
      }
      if (kw.indexOf('GLKP1:') !== -1 || txt.indexOf('GLKP1:') !== -1) {
        report.push('✅ Полный цикл: PDF создается и читается');
      } else {
        report.push('❌ Полный цикл: блок восстановления не читается');
      }
    }
    report.push('✅ Всё готово к загрузке PDF!');
  } catch (e) {
    report.push('❌ Ошибка цикла: ' + (e && e.message ? e.message : e));
  }
  hideToast();
  alert('🔧 Самопроверка PDF-модуля:\n\n' + report.join('\n'));
}

function onPdfImportClick() {
  if (typeof pdfjsLib === 'undefined') {
    showToast('Модуль чтения PDF не загрузился. Нажмите «🔄 Обновить приложение» и попробуйте ещё раз.');
    return;
  }
  const inp = el('pdfFileInput');
  if (!inp) { showToast('Ошибка интерфейса: поле выбора файла не найдено.'); return; }
  inp.value = '';
  showToast('📂 Выберите PDF-файл со сметой GlassLoft');
  try { inp.click(); } catch (e) { showToast('Браузер заблокировал открытие файла: ' + e.message); }
}

/* --- OCR: распознавание PDF-картинок (сканы / старые PDF-фото) --- */
let ocrWorkerPromise = null;
let ocrProgressCb = null;

function ensureTesseractLoaded() {
  if (window.Tesseract) return Promise.resolve(true);
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = './tesseract.min.js';
    s.onload = () => resolve(!!window.Tesseract);
    s.onerror = () => reject(new Error('ocr_lib'));
    document.head.appendChild(s);
  });
}

async function getOcrWorker() {
  if (!ocrWorkerPromise) {
    ocrWorkerPromise = (async () => {
      await ensureTesseractLoaded();
      return Tesseract.createWorker('rus', 1, {
        workerPath: './tess/worker.min.js',
        corePath: './tess/',
        langPath: './tess',
        cacheMethod: 'refresh',
        logger: m => { if (ocrProgressCb) ocrProgressCb(m); }
      });
    })();
    ocrWorkerPromise.catch(() => { ocrWorkerPromise = null; });
  }
  return ocrWorkerPromise;
}

async function ocrPdfDocument(doc, onStatus) {
  const worker = await getOcrWorker();
  let text = '';
  const pages = Math.min(doc.numPages, 2);
  for (let i = 1; i <= pages; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: 2.2 });
    const canvas = document.createElement('canvas');
    canvas.width = Math.min(2200, Math.ceil(viewport.width));
    canvas.height = Math.ceil(canvas.width * viewport.height / viewport.width);
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const vw = page.getViewport({ scale: 2.2 * (canvas.width / viewport.width) });
    await page.render({ canvasContext: ctx, viewport: vw }).promise;
    ocrProgressCb = m => {
      if (m && m.status === 'recognizing text' && typeof m.progress === 'number' && onStatus) {
        onStatus('Распознаю текст на стр. ' + i + '/' + pages + ': ' + Math.round(m.progress * 100) + '% 🔎');
      }
    };
    const res = await worker.recognize(canvas);
    text += ((res && res.data && res.data.text) || '') + '\n';
    canvas.width = 0; canvas.height = 0;
  }
  ocrProgressCb = null;
  return text;
}

let pdfImportBusy = false;
function pdfImportFatal(e) {
  console.error(e);
  hideToast();
  showToast('Ошибка при чтении PDF: ' + (e && e.message ? e.message : 'неизвестная ошибка'));
}

async function importPdfKp(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (pdfImportBusy) { event.target.value = ''; return; }
  pdfImportBusy = true;

  try {
    if (typeof pdfjsLib === 'undefined') {
      showToast('PDF модуль не загружен. Проверьте интернет и обновите страницу (Ctrl+Shift+R).');
      return;
    }

    showToast('Открываю PDF... ⏳', true);

    const arrayBuffer = await file.arrayBuffer();
    const doc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    // ---- Шаг 1: извлекаем текст с сохранением построчной структуры ----
    let docText = '';
    const pagesToRead = Math.min(doc.numPages, 4);
    for (let i = 1; i <= pagesToRead; i++) {
      showToast('Читаю PDF: страница ' + i + ' из ' + pagesToRead + ' 🔎', true);
      const page = await doc.getPage(i);
      const tc = await page.getTextContent();
      const items = tc.items
        .map(it => ({ str: it.str || '', x: (it.transform && it.transform[4]) || 0, y: (it.transform && it.transform[5]) || 0 }))
        .filter(it => it.str.trim() !== '');
      items.sort((a, b) => (b.y - a.y) || (a.x - b.x));
      const rows = [];
      for (const it of items) {
        const last = rows[rows.length - 1];
        if (last && Math.abs(last.y - it.y) < 4) {
          last.items.push(it);
          last.y = (last.y + it.y) / 2;
        } else {
          rows.push({ y: it.y, items: [it] });
        }
      }
      docText += rows.map(r => r.items.map(v => v.str).join(' ')).join('\n') + '\n';
    }

    // ---- Шаг 2: скрытый блок авто-восстановления (точное восстановление) ----
    let payloadObj = null;
    try {
      const meta = await doc.getMetadata();
      const kw = (meta && meta.info && (meta.info.Keywords || meta.info.keywords)) || '';
      const mi = kw.indexOf('GLKP1:');
      if (mi !== -1) {
        const b64 = kw.slice(mi + 6).replace(/[^A-Za-z0-9+/=]/g, '');
        const obj = JSON.parse(b64ToUtf8(b64));
        if (obj && obj.magic === 'GLASSLOFT_KP_V1' && obj.appState) payloadObj = obj;
      }
    } catch (e) {}

    if (!payloadObj) {
      try {
        const parts = {};
        let hasFirst = false;
        const re = /GLKP1(?:\+(\d+))?:([A-Za-z0-9+/=]+)/g;
        let mm;
        while ((mm = re.exec(docText)) !== null) {
          const n = mm[1] ? parseInt(mm[1], 10) : 0;
          if (n === 0) hasFirst = true;
          if (!parts[n]) parts[n] = mm[2];
        }
        if (hasFirst) {
          let b64 = '';
          for (let i = 0; parts[i]; i++) b64 += parts[i];
          const obj = JSON.parse(b64ToUtf8(b64));
          if (obj && obj.magic === 'GLASSLOFT_KP_V1' && obj.appState) payloadObj = obj;
        }
      } catch (e) {}
    }

    hideToast();

    if (payloadObj) {
      const rec = buildRecordFromPayload(payloadObj);
      await finalizePdfImport(rec, 'Расчёт полностью и точно восстановлен из PDF! 🎯 Теперь можно вносить правки.');
      return;
    }

    // ---- Шаг 3: текстового слоя нет → распознаём через OCR ----
    if (!/[а-яА-Яa-zA-Z]/.test(docText)) {
      showToast('Это PDF-фото без текста. Включаю распознавание (OCR), первый раз подгрузится модуль ~8 МБ... ⏳', true);
      try {
        const ocrText = await ocrPdfDocument(doc, st => showToast(st, true));
        hideToast();
        if (ocrText && /[а-яА-Яa-zA-Z]/.test(ocrText)) {
          docText = ocrText;
        } else {
          alert('Этот PDF — изображение, и текст распознать не удалось.\n\nСовет: сформируйте КП заново в калькуляторе (кнопка «PDF») — восстановление новых файлов мгновенное и точное.');
          return;
        }
      } catch (ocrErr) {
        hideToast();
        console.error(ocrErr);
        alert('Этот PDF — изображение. Для распознавания нужен интернет (один раз, подгрузка модуля ~8 МБ).\nПроверьте соединение и попробуйте ещё раз.');
        return;
      }
    }

    const rec = parseKpTextToRecord(docText);
    if (!rec) {
      showToast('Не удалось распознать данные в PDF. Проверьте, что это КП GlassLoft, или восстановите расчёт вручную.');
      return;
    }

    await finalizePdfImport(rec, 'Смета восстановлена из PDF ' + (rec.totalFormatted ? ('(итог ' + rec.totalFormatted + ') ') : '') + '✏️ Проверьте значения перед отправкой клиенту.');
  } catch (err) {
    console.error(err);
    hideToast();
    showToast('Ошибка чтения PDF: ' + (err.message || 'файл повреждён или защищён'));
  } finally {
    pdfImportBusy = false;
    event.target.value = '';
  }
}

/* --- Init --- */
function init() {
  checkDealerMode();
  loadSavedConfig();
  loadSavedAppState();
  seedInitialHistoryIfEmpty();
  migrateHistoryDemoItems();
  renderCategoryContent();
  renderPositionTabs();
  buildServiceList();
  updateHistoryBadge();
  updateVersionBadge();
  renderHistoryList();
  if (el('delPrice')) el('delPrice').value = D.misc.delivery;
  calc();
  fetchCurrentSequenceNumber().then(num => updateKpDocumentData(num, false));

  initCloudSync();

  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js?v=4.6').then(reg => {
      reg.update();
    }).catch(() => {});
  }
}

init();