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

function loadSavedAppState() {
  try {
    const saved = localStorage.getItem('glassloft_app_state_v6');
    if (saved) {
      const p = JSON.parse(saved);
      if (p && typeof p === 'object') {
        if (Array.isArray(p.railings) && p.railings.length > 0) appState.railings = p.railings;
        if (Array.isArray(p.balconies) && p.balconies.length > 0) appState.balconies = p.balconies;
        if (Array.isArray(p.showers) && p.showers.length > 0) appState.showers = p.showers;
        if (Array.isArray(p.loft) && p.loft.length > 0) appState.loft = p.loft;
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
  const presets = PRESET_SECTION_NAMES[cat] || [];

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
        <input type="text" class="sec-name-input" id="posNameInput" placeholder="например, Ограждение террасы, Балконное ограждение..." value="${esc(curName)}" oninput="onPositionNameChange()" autocomplete="off">
        <button type="button" class="btn-reset-name" onclick="resetPositionName()" title="Сбросить к исходному названию">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
          Сброс
        </button>
      </div>
      <div class="sec-title-suggestions">
        <span class="sec-sugg-title">Быстрый выбор:</span>
        ${presets.map(p => `<button type="button" class="sec-sugg-chip" onclick="applyPresetName('${esc(p)}')">${esc(p)}</button>`).join('')}
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
              <input type="number" id="trapLen" placeholder="0" min="0" step="0.01" oninput="calcFromLength()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">× 1,25 + 35% → в пункт 2 (м²)</div>
          </div>
          <div class="field">
            <label>Длина прямоугольников / прямых секций</label>
            <div class="input-wrap">
              <input type="number" id="rectLen" placeholder="0" min="0" step="0.01" oninput="calcFromLength()">
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
            <div class="field"><label>Площадь</label><div class="input-wrap"><input type="number" id="trapArea" placeholder="0" min="0" step="0.01" oninput="calc()"><span class="unit">м²</span></div></div>
            <div class="field"><label>Цена за м²</label><div class="input-wrap"><input type="number" id="trapPrice" readonly><span class="unit">₽/м²</span></div></div>
          </div>
        </div>
        <div class="sub">
          <div class="sub-title"><b>Прямоугольники</b></div>
          <div class="grid" style="margin-top:10px">
            <div class="field"><label>Площадь</label><div class="input-wrap"><input type="number" id="rectArea" placeholder="0" min="0" step="0.01" oninput="calc()"><span class="unit">м²</span></div></div>
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
          <div class="field"><label>Длина</label><div class="input-wrap"><input type="number" id="railLength" placeholder="—" min="0" step="0.1" oninput="calc()"><span class="unit">м.пог</span></div></div>
          <div class="field"><label>Сумма вручную</label><div class="input-wrap"><input type="number" id="railManual" placeholder="авто" min="0" step="100" oninput="calc()"><span class="unit">₽</span></div></div>
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
              <input type="number" id="balconyLen" placeholder="0" min="0" step="0.01" oninput="calc()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">Общая длина прямого контура</div>
          </div>
          <div class="field">
            <label>Высота стекла</label>
            <div class="input-wrap">
              <input type="number" id="balconyHeightMm" placeholder="1000" min="100" step="10" oninput="calc()">
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
          <div class="field"><label>Длина</label><div class="input-wrap"><input type="number" id="railLength" placeholder="—" min="0" step="0.1" oninput="calc()"><span class="unit">м.пог</span></div></div>
          <div class="field"><label>Сумма вручную</label><div class="input-wrap"><input type="number" id="railManual" placeholder="авто" min="0" step="100" oninput="calc()"><span class="unit">₽</span></div></div>
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
              <input type="number" id="shFixedArea" placeholder="0" min="0" step="0.01" oninput="calc()">
              <span class="unit">м²</span>
            </div>
            <div class="hint">Площадь неподвижных секций</div>
          </div>
          <div class="field">
            <label>Распашные / раздвижные створки</label>
            <div class="input-wrap">
              <input type="number" id="shDoorArea" placeholder="0" min="0" step="0.01" oninput="calc()">
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
              <input type="number" id="loftArea" placeholder="0" min="0" step="0.01" oninput="calc()">
              <span class="unit">м²</span>
            </div>
            <div class="hint">Ширина × Высота конструкции</div>
          </div>
          <div class="field">
            <label>Длина каркасного профиля</label>
            <div class="input-wrap">
              <input type="number" id="loftProfileLen" placeholder="0" min="0" step="0.1" oninput="calc()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">Внешний контур и коробка</div>
          </div>
          <div class="field">
            <label>Длина раскладки (шпросов)</label>
            <div class="input-wrap">
              <input type="number" id="loftGridLen" placeholder="0" min="0" step="0.1" oninput="calc()">
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
  if (cat === 'railings') {
    const s = el('glass');
    if (s) s.innerHTML = Object.keys(D.railings.glass).map(k => `<option value="${k}">${k}</option>`).join('');
    const r = el('railSelect');
    if (r) r.innerHTML = D.railings.rail.map(item => `<option value="${item.name}">${item.price > 0 ? item.name + ' — ' + fmt(item.price) + ' ₽/м.пог' : item.name}</option>`).join('');
  } else if (cat === 'balconies') {
    const s = el('balconyGlass');
    if (s) s.innerHTML = Object.keys(D.balconies.glass).map(k => `<option value="${k}">${k} — ${fmt(D.balconies.glass[k].price)} ₽/м²</option>`).join('');
    const r = el('railSelect');
    if (r) r.innerHTML = D.balconies.rail.map(item => `<option value="${item.name}">${item.price > 0 ? item.name + ' — ' + fmt(item.price) + ' ₽/м.пог' : item.name}</option>`).join('');
  } else if (cat === 'showers') {
    const s = el('shGlass');
    if (s) s.innerHTML = Object.keys(D.showers.glass).map(k => `<option value="${k}">${k} — ${fmt(D.showers.glass[k].price)} ₽/м²</option>`).join('');
  } else if (cat === 'loft') {
    const s = el('loftGlass');
    if (s) s.innerHTML = Object.keys(D.loft.glass).map(k => `<option value="${k}">${k} — ${fmt(D.loft.glass[k].price)} ₽/м²</option>`).join('');
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
  const hardItems = D[cat].hard || [];

  listEl.innerHTML = hardItems.map((item, idx) => `
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

function setAdjMode(mode) {
  adjMode = mode;
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
    if (pctInp && !pctInp.value) pctInp.value = '10';
  } else if (mode === 'markup') {
    if (tabMark) tabMark.classList.add('active-markup');
    if (inputWrap) inputWrap.style.display = 'block';
    if (inputLabel) inputLabel.textContent = 'Размер наценки / бонуса, %';
    if (pctInp && !pctInp.value) pctInp.value = '15';
  } else {
    if (tabNone) tabNone.classList.add('active');
    if (inputWrap) inputWrap.style.display = 'none';
    if (pctInp) pctInp.value = '';
  }

  calc();
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
    if (el('glassHint')) el('glassHint').textContent = `Трапеции — ${fmt(g.trap)} ₽/м² · Прямоугольники — ${fmt(g.rect)} ₽/м²`;
    updateGlassSwatch(gName);
  } else if (curCat === 'balconies') {
    const gName = curItem.glass || Object.keys(D.balconies.glass)[0];
    const g = D.balconies.glass[gName] || { price: 10000 };
    const bLen = parseFloat(curItem.length) || 0;
    const bH = parseFloat(curItem.heightMm) || 1000;
    const bArea = bLen > 0 ? +(bLen * (bH / 1000)).toFixed(2) : 0;
    if (el('balconyArea')) el('balconyArea').value = bArea > 0 ? bArea : '';
    if (el('balconyAreaHint')) el('balconyAreaHint').textContent = bLen > 0 ? `${bLen} м × ${bH} мм = ${bArea} м²` : 'Длина × Высота';
    if (el('glassHint')) el('glassHint').textContent = `Цена стекла — ${fmt(g.price || 10000)} ₽/м²`;
    updateGlassSwatch(gName);
  } else if (curCat === 'showers') {
    const gName = curItem.glass || Object.keys(D.showers.glass)[0];
    const g = D.showers.glass[gName] || { price: 0 };
    if (el('glassHint')) el('glassHint').textContent = `Цена стекла 8 мм — ${fmt(g.price)} ₽/м²`;
    updateGlassSwatch(gName);
  } else if (curCat === 'loft') {
    const gName = curItem.glass || Object.keys(D.loft.glass)[0];
    const g = D.loft.glass[gName] || { price: 0 };
    if (el('glassHint')) el('glassHint').textContent = `Цена стекла 6 мм — ${fmt(g.price)} ₽/м²`;
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

function getSavedHistory() {
  try {
    const saved = localStorage.getItem('glassloft_calc_history_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch(e) {}
  return [];
}

function saveHistoryList(list) {
  try {
    localStorage.setItem('glassloft_calc_history_v1', JSON.stringify(list.slice(0, MAX_HISTORY_ITEMS)));
  } catch(e) {}
  updateHistoryBadge();
}

function updateHistoryBadge() {
  const badge = el('historyCountBadge');
  const capBadge = el('historyCapacityBadge');
  const history = getSavedHistory();
  if (badge) badge.textContent = history.length;
  if (capBadge) capBadge.textContent = `${history.length} / ${MAX_HISTORY_ITEMS} расчётов`;
}

function saveCurrentToHistory(isManual = false) {
  syncCurrentInputsToState();
  const clientVal = (el('calcClient') && el('calcClient').value.trim()) || 'Частное лицо';
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

  if (total === 0 && !isManual) return;

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

  if (!isManual && history.length > 0) {
    const top = history[0];
    if (top.client === clientVal && top.address === addressVal && top.total === total && (Date.now() - top.timestamp < 15000)) {
      return;
    }
  }

  const newRecord = {
    id: 'calc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    timestamp: Date.now(),
    dateFormatted,
    kpNumber,
    client: clientVal,
    address: addressVal,
    title,
    total,
    totalFormatted: rub(total),
    activeCategory,
    productsSummary,
    appState: JSON.parse(JSON.stringify(appState)),
    extraData: {
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

  if (isManual) {
    renderHistoryList();
    showToast(`Расчёт «${title}» сохранён в историю! 💾`);
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
           (item.totalFormatted && item.totalFormatted.toLowerCase().includes(q));
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
    const tagsHtml = (item.productsSummary || []).map(tag => `<span class="history-tag">${esc(tag)}</span>`).join('');
    return `
      <div class="history-card">
        <div class="history-card-top">
          <div class="history-card-title-wrap">
            <div class="history-calc-title">${esc(item.title || `${item.client} — ${item.address}`)}</div>
            <div class="history-calc-meta">
              <span class="history-meta-date">📅 ${esc(item.dateFormatted || '')}</span>
              <span class="history-meta-doc">📄 ${esc(item.kpNumber || '')}</span>
            </div>
          </div>
          <div class="history-calc-sum">${esc(item.totalFormatted || rub(item.total || 0))}</div>
        </div>

        ${tagsHtml ? `<div class="history-card-tags">${tagsHtml}</div>` : ''}

        <div class="history-card-actions">
          <button type="button" class="btn b-primary btn-sm" onclick="loadCalculationFromHistory('${item.id}')" title="Загрузить все параметры расчёта в калькулятор">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg>
            <span>Загрузить расчёт</span>
          </button>
          <button type="button" class="btn ghost btn-sm" onclick="copyHistoryQuote('${item.id}')" title="Скопировать смету в буфер обмена">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Смета</span>
          </button>
          <button type="button" class="btn-del-hist" onclick="deleteHistoryItem('${item.id}', event)" title="Удалить этот расчёт из истории">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function loadCalculationFromHistory(id) {
  const history = getSavedHistory();
  const item = history.find(h => h.id === id);
  if (!item) return;

  if (item.appState) {
    appState = JSON.parse(JSON.stringify(item.appState));
  }
  
  if (el('calcClient')) el('calcClient').value = item.client || 'Частное лицо';
  if (el('calcAddress')) el('calcAddress').value = item.address || 'г. Санкт-Петербург';

  if (item.extraData) {
    if (el('delOn') && item.extraData.delOn !== undefined) el('delOn').checked = item.extraData.delOn;
    if (el('delPrice') && item.extraData.delPrice !== undefined) el('delPrice').value = item.extraData.delPrice;
    if (item.extraData.adjMode) setAdjMode(item.extraData.adjMode);
    if (el('adjPercent') && item.extraData.adjPercent !== undefined) el('adjPercent').value = item.extraData.adjPercent;
    if (item.extraData.termManual !== undefined) termManual = item.extraData.termManual;
    if (el('termDays') && item.extraData.termDays) el('termDays').value = item.extraData.termDays;
    
    if (Array.isArray(item.extraData.services)) {
      item.extraData.services.forEach(s => {
        const inp = document.querySelector(`.servPrice[data-idx="${s.idx}"]`);
        if (inp) inp.value = s.val || '';
      });
    }
  }

  if (item.activeCategory && ['railings', 'balconies', 'showers', 'loft'].includes(item.activeCategory)) {
    activeCategory = item.activeCategory;
  }
  activePosIdx = { railings: 0, balconies: 0, showers: 0, loft: 0 };

  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (activeCategory === 'railings' && el('tabCatRailings')) el('tabCatRailings').classList.add('active');
  if (activeCategory === 'balconies' && el('tabCatBalconies')) el('tabCatBalconies').classList.add('active');
  if (activeCategory === 'showers' && el('tabCatShowers')) el('tabCatShowers').classList.add('active');
  if (activeCategory === 'loft' && el('tabCatLoft')) el('tabCatLoft').classList.add('active');

  renderCategoryContent();
  renderPositionTabs();
  loadStateToInputs();
  calc();
  saveAppState();

  closeModal('historyModal');
  showToast(`Расчёт «${item.title || item.client}» загружен! 🚀`);
}

function deleteHistoryItem(id, event) {
  if (event) event.stopPropagation();
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

function copyHistoryQuote(id) {
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
        <span>${k}</span>
        <input type="number" value="${glassData[k].trap}" step="100" onchange="D.railings.glass['${esc(k)}'].trap=+this.value||0; buildActiveSelects(); autoSave(); calc();">
        <input type="number" value="${glassData[k].rect}" step="100" onchange="D.railings.glass['${esc(k)}'].rect=+this.value||0; buildActiveSelects(); autoSave(); calc();">
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
        <span>${k}</span>
        <input type="number" value="${glassData[k].price}" step="100" onchange="D['${cat}'].glass['${esc(k)}'].price=+this.value||0; buildActiveSelects(); autoSave(); calc();">
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
      <span>${item.name}</span>
      <input type="number" value="${item.price}" step="50" onchange="D['${cat}'].hard[${idx}].price=+this.value||0; buildHardList(); autoSave(); calc();">
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
      <span>${item.name}</span>
      <input type="number" value="${item.price}" step="100" onchange="D['${cat}'].rail[${idx}].price=+this.value||0; buildActiveSelects(); autoSave(); calc();">
      <button class="btn b-red" onclick="delRail(${idx})">✕</button>
    </div>`).join('');
}

function renderServiceSettings() {
  el('eServ').innerHTML = D.services.map((s, idx) => `
    <div class="srow two">
      <span>${s.name}</span>
      <button class="btn b-red" onclick="delService(${idx})">✕</button>
    </div>`).join('');
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
  saveCurrentToHistory(false);
  showToast('Все настройки и расчёт сохранены! 💾');
}

async function forceAppUpdate() {
  showToast('Обновление приложения и сброс кэша... ⏳');
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
    window.location.reload(true);
  }, 400);
}

/* --- Init --- */
function init() {
  loadSavedConfig();
  loadSavedAppState();
  renderCategoryContent();
  renderPositionTabs();
  buildServiceList();
  updateHistoryBadge();
  if (el('delPrice')) el('delPrice').value = D.misc.delivery;
  calc();
  fetchCurrentSequenceNumber().then(num => updateKpDocumentData(num, false));

  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js?v=1.5').then(reg => {
      reg.update();
    }).catch(() => {});
  }
}

init();