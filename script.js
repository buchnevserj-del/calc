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
    const saved = localStorage.getItem('glassloft_multi_calc_v3');
    if (saved) {
      const p = JSON.parse(saved);
      if (p.railings) D.railings = p.railings;
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

/* Multi-Product State */
let activeCategory = 'railings'; // 'railings' | 'showers' | 'loft'

let appState = {
  railings: [
    {
      id: 1,
      name: "Лестничное ограждение 1",
      trapLen: "",
      rectLen: "",
      trapArea: "",
      rectArea: "",
      glass: "Классическое прозрачное (зеленоватая кромка), 10 мм",
      hardQty: {},
      hardSum: {},
      railSelect: "Без поручня",
      railLength: "",
      railManual: ""
    }
  ],
  showers: [
    {
      id: 1,
      name: "Душевое ограждение 1",
      fixedArea: "",
      doorArea: "",
      glass: "Классическое прозрачное (закаленное), 8 мм",
      hardQty: {},
      hardSum: {}
    }
  ],
  loft: [
    {
      id: 1,
      name: "Лофт-перегородка 1",
      area: "",
      profileLen: "",
      gridLen: "",
      glass: "Классическое прозрачное (закаленное), 6 мм",
      hardQty: {},
      hardSum: {}
    }
  ]
};

let activePosIdx = {
  railings: 0,
  showers: 0,
  loft: 0
};

let currentKpSeqNumber = null;
let pendingAction = null; // { type: 'export'|'share', format: 'pdf'|'jpeg' }

let isAdminUnlocked = false;
let pendingModalId = null;

const el = id => document.getElementById(id);
const val = id => { const v = String((el(id) && el(id).value) || '').trim().replace(',', '.'); return v === '' ? null : (parseFloat(v) || 0); };
const num = id => parseFloat(String((el(id) && el(id).value) || '').replace(',', '.')) || 0;
const fmt = n => Math.round(n).toLocaleString('ru-RU');
const rub = n => fmt(n) + ' ₽';
const roundUp500 = n => n > 0 ? Math.ceil(n / 500) * 500 : 0;
const esc = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');

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
  const item = appState[cat][pIdx];
  if (!item) return;

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
}

function loadStateToInputs() {
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  const item = appState[cat][pIdx];
  if (!item) return;

  if (cat === 'railings') {
    if (el('trapLen')) el('trapLen').value = item.trapLen || '';
    if (el('rectLen')) el('rectLen').value = item.rectLen || '';
    if (el('trapArea')) el('trapArea').value = item.trapArea || '';
    if (el('rectArea')) el('rectArea').value = item.rectArea || '';
    if (el('glass')) el('glass').value = item.glass || Object.keys(D.railings.glass)[0];
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

  const nameInp = el('posNameInput');
  if (nameInp) nameInp.value = item.name || `Позиция ${pIdx + 1}`;
}

/* --- Multi-Position Tabs for current category --- */
function renderPositionTabs() {
  const container = el('positionTabs');
  const btnText = el('addPosBtnText');
  const cat = activeCategory;
  const items = appState[cat];
  if (!container) return;

  const catNames = {
    railings: 'ограждение',
    showers: 'душевую',
    loft: 'перегородку'
  };
  const catIcons = {
    railings: '<img src="cat_icon_stairs.png" class="pos-tab-img" alt="Лестница">',
    showers: '<img src="cat_icon_shower.png" class="pos-tab-img" alt="Душевая">',
    loft: '<img src="cat_icon_loft.png" class="pos-tab-img" alt="Лофт">'
  };

  if (btnText) {
    btnText.textContent = `+ Добавить ${catNames[cat]} №${items.length + 1}`;
  }

  container.innerHTML = items.map((pos, idx) => `
    <div class="sec-tab ${idx === activePosIdx[cat] ? 'active' : ''}" onclick="switchPosition(${idx})">
      <span>${catIcons[cat]} ${pos.name || `Позиция ${idx + 1}`}</span>
      ${items.length > 1 ? `<span class="tab-del-btn" onclick="removePosition(${idx}, event)" title="Удалить позицию">✕</span>` : ''}
    </div>
  `).join('');
}

function switchPosition(idx) {
  if (idx === activePosIdx[activeCategory]) return;
  syncCurrentInputsToState();
  activePosIdx[activeCategory] = idx;
  renderPositionTabs();
  loadStateToInputs();
  calc();
}

function addPosition() {
  syncCurrentInputsToState();
  const cat = activeCategory;
  const nextNum = appState[cat].length + 1;

  let newPos;
  if (cat === 'railings') {
    newPos = {
      id: Date.now(),
      name: `Лестничное ограждение ${nextNum}`,
      trapLen: '', rectLen: '', trapArea: '', rectArea: '',
      glass: Object.keys(D.railings.glass)[0],
      hardQty: {}, hardSum: {},
      railSelect: 'Без поручня', railLength: '', railManual: ''
    };
  } else if (cat === 'showers') {
    newPos = {
      id: Date.now(),
      name: `Душевое ограждение ${nextNum}`,
      fixedArea: '', doorArea: '',
      glass: Object.keys(D.showers.glass)[0],
      hardQty: {}, hardSum: {}
    };
  } else {
    newPos = {
      id: Date.now(),
      name: `Лофт-перегородка ${nextNum}`,
      area: '', profileLen: '', gridLen: '',
      glass: Object.keys(D.loft.glass)[0],
      hardQty: {}, hardSum: {}
    };
  }

  appState[cat].push(newPos);
  activePosIdx[cat] = appState[cat].length - 1;
  renderPositionTabs();
  loadStateToInputs();
  calc();
  showToast(`Добавлена позиция №${nextNum}!`);
}

function removePosition(idx, event) {
  if (event) event.stopPropagation();
  const cat = activeCategory;
  if (appState[cat].length <= 1) return;

  syncCurrentInputsToState();
  appState[cat].splice(idx, 1);
  activePosIdx[cat] = Math.min(activePosIdx[cat], appState[cat].length - 1);
  renderPositionTabs();
  loadStateToInputs();
  calc();
  showToast('Позиция удалена');
}

function onPositionNameChange() {
  const nameInp = el('posNameInput');
  const cat = activeCategory;
  const pIdx = activePosIdx[cat];
  if (!nameInp || !appState[cat][pIdx]) return;
  appState[cat][pIdx].name = nameInp.value.trim() || `Позиция ${pIdx + 1}`;
  renderPositionTabs();
  calc();
}

/* --- Render Category-Specific UI HTML --- */
function renderCategoryContent() {
  const container = el('dynamicCategoryContent');
  if (!container) return;

  const cat = activeCategory;
  const items = appState[cat];
  const pIdx = activePosIdx[cat];
  const curPos = items[pIdx] || items[0];

  let html = '';

  // 1. Position Name Field
  html += `
    <div class="sec-name-row" style="display:${items.length > 1 ? 'flex' : 'none'};">
      <input type="text" class="sec-name-input" id="posNameInput" placeholder="Название позиции" value="${curPos.name || ''}" oninput="onPositionNameChange()">
    </div>
  `;

  if (cat === 'railings') {
    // Railings Builder (Stairs)
    html += `
      <!-- Step 0: Длина ограждения -->
      <section class="card highlight">
        <div class="head">
          <h2><span class="n">📐</span>Длина ограждения (м.пог.)</h2>
        </div>
        <div class="grid">
          <div class="field">
            <label>Длина трапеций</label>
            <div class="input-wrap">
              <input type="number" id="trapLen" placeholder="0" min="0" step="0.01" oninput="calcFromLength()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">× 1,25 + 35% → в пункт 2 (м²)</div>
          </div>
          <div class="field">
            <label>Длина прямоугольников</label>
            <div class="input-wrap">
              <input type="number" id="rectLen" placeholder="0" min="0" step="0.01" oninput="calcFromLength()">
              <span class="unit">м.пог</span>
            </div>
            <div class="hint">× 1,25 → в пункт 2 (м²)</div>
          </div>
        </div>
      </section>

      <!-- Step 1: Тип стекла 10 мм / Триплекс -->
      <section class="card">
        <div class="head">
          <h2><span class="n">1</span>Тип стекла</h2>
          <button class="btn ghost" onclick="openModal('glassModal')">Настройки</button>
        </div>
        <label>Выберите стекло</label>
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

      <!-- Step 3: Фурнитура ограждений -->
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
    `;
  } else if (cat === 'showers') {
    // Showers Builder
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
    `;
  } else if (cat === 'loft') {
    // Loft Partitions Builder
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
    if (s) {
      s.innerHTML = Object.keys(D.railings.glass).map(k => `<option value="${k}">${k}</option>`).join('');
    }
    const r = el('railSelect');
    if (r) {
      r.innerHTML = D.railings.rail.map(item => `<option value="${item.name}">${item.price > 0 ? item.name + ' — ' + fmt(item.price) + ' ₽/м.пог' : item.name}</option>`).join('');
    }
  } else if (cat === 'showers') {
    const s = el('shGlass');
    if (s) {
      s.innerHTML = Object.keys(D.showers.glass).map(k => `<option value="${k}">${k} — ${fmt(D.showers.glass[k].price)} ₽/м²</option>`).join('');
    }
  } else if (cat === 'loft') {
    const s = el('loftGlass');
    if (s) {
      s.innerHTML = Object.keys(D.loft.glass).map(k => `<option value="${k}">${k} — ${fmt(D.loft.glass[k].price)} ₽/м²</option>`).join('');
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

/* --- Calculation Engine Across All Categories & Positions --- */
function calculateCategoryData(cat) {
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
      glassSum = roundUp500(trapA * g.trap + rectA * g.rect);
    } else if (cat === 'showers') {
      glassName = pos.glass || Object.keys(D.showers.glass)[0];
      const g = D.showers.glass[glassName] || { price: 0 };
      const totalArea = (parseFloat(pos.fixedArea) || 0) + (parseFloat(pos.doorArea) || 0);
      glassSum = roundUp500(totalArea * g.price);
    } else if (cat === 'loft') {
      glassName = pos.glass || Object.keys(D.loft.glass)[0];
      const g = D.loft.glass[glassName] || { price: 0 };
      const totalArea = parseFloat(pos.area) || 0;
      glassSum = roundUp500(totalArea * g.price);
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
    const hardTotal = roundUp500(hardSum);

    // Handrail (for railings only)
    let railTotal = 0;
    let hasRail = false;
    let railName = 'Без поручня';
    if (cat === 'railings') {
      railName = pos.railSelect || 'Без поручня';
      const railItem = D.railings.rail.find(r => r.name === railName) || { price: 0 };
      const railLen = pos.railLength !== undefined && String(pos.railLength).trim() !== '' ? (parseFloat(pos.railLength) || 0) : null;
      const railMan = pos.railManual !== undefined && String(pos.railManual).trim() !== '' ? (parseFloat(pos.railManual) || 0) : null;
      hasRail = railName !== 'Без поручня' && !/без поручня/i.test(railName) && ((railLen !== null && railLen > 0) || (railMan !== null && railMan > 0));

      let rawRailSum = 0;
      if (hasRail) {
        if (railMan !== null) rawRailSum = railMan;
        else if (railLen !== null) rawRailSum = railLen * railItem.price;
      }
      railTotal = roundUp500(rawRailSum);
    }

    const posTotal = glassSum + hardTotal + railTotal;
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

  // Calculate all 3 categories
  const resRailings = calculateCategoryData('railings');
  const resShowers = calculateCategoryData('showers');
  const resLoft = calculateCategoryData('loft');

  const allCategoriesTotal = resRailings.categoryTotal + resShowers.categoryTotal + resLoft.categoryTotal;
  const activeCategoryBase = calculateCategoryData(curCat).categoryTotal;

  // Global Services
  const rawDelSum = el('delOn').checked ? num('delPrice') : 0;
  const delSum = roundUp500(rawDelSum);

  const mode = el('instMode').value;
  el('instFixWrap').style.display = mode === 'fix' ? 'block' : 'none';
  el('instPctWrap').style.display = mode === 'pct' ? 'block' : 'none';
  let rawInstSum = 0;
  if (el('instOn').checked) {
    rawInstSum = mode === 'fix' ? num('instFix') : (allCategoriesTotal * num('instPct') / 100);
  }
  const instSum = roundUp500(rawInstSum);

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

  const total = allCategoriesTotal + delSum + instSum + servSum;

  el('sum').textContent = rub(total);
  const floatEl = el('floatingSum');
  if (floatEl) floatEl.textContent = rub(total);

  if (!termManual) el('termDays').value = 21;

  // Render proposal text
  let t = 'Стоимость заказа будет следующей:\n\n';
  let counter = 1;

  const activeCalculated = [
    ...resRailings.calcPositions,
    ...resShowers.calcPositions,
    ...resLoft.calcPositions
  ].filter(cp => cp.posTotal > 0 || cp.glassSum > 0 || cp.hardTotal > 0);

  if (activeCalculated.length === 0) {
    // Show current category position
    const curCP = calculateCategoryData(curCat).calcPositions[curPIdx];
    t += `${counter++}. Стекло закаленное ${curCP.glassName} — ${rub(curCP.glassSum)}\n`;
    t += `${counter++}. Комплект фурнитуры — ${rub(curCP.hardTotal)}\n`;
  } else if (activeCalculated.length === 1) {
    const cp = activeCalculated[0];
    t += `${counter++}. Стекло закаленное ${cp.glassName} — ${rub(cp.glassSum)}\n`;
    t += `${counter++}. Комплект фурнитуры`;
    if (cp.parts.length) t += ` (${cp.parts.join(', ')})`;
    t += ` — ${rub(cp.hardTotal)}\n`;
    if (cp.hasRail) {
      t += `${counter++}. Поручень: ${cp.railName} — ${rub(cp.railTotal)}\n`;
    }
  } else {
    activeCalculated.forEach((cp, idx) => {
      t += `ПОЗИЦИЯ ${idx + 1}: ${cp.pos.name || `Изделие ${idx + 1}`}\n`;
      t += `  • Стекло закаленное ${cp.glassName} — ${rub(cp.glassSum)}\n`;
      t += `  • Комплект фурнитуры${cp.parts.length ? ` (${cp.parts.join(', ')})` : ''} — ${rub(cp.hardTotal)}\n`;
      if (cp.hasRail) {
        t += `  • Поручень: ${cp.railName} — ${rub(cp.railTotal)}\n`;
      }
      t += `  Итого за позицию — ${rub(cp.posTotal)}\n\n`;
    });
  }

  t += `${counter++}. Доставка, разгрузка — ${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : 'не требуется'}\n`;
  t += `${counter++}. Монтажные работы — ${el('instOn').checked ? (instSum > 0 ? rub(instSum) : '0 ₽') : 'не требуются'}\n`;
  servLines.forEach(line => { t += `${counter++}. ${line}\n`; });

  t += `\nИтого общая стоимость — ${fmt(total)} рублей.\n`;
  t += `Срок изготовления — ${num('termDays')} рабочих дней.`;

  el('quoteText').textContent = t;
  updateKpDocumentData(null, true);
}

/* --- Export & Share Flow with Confirmation Popup --- */
function countConfiguredCategories() {
  const r = calculateCategoryData('railings').categoryTotal;
  const s = calculateCategoryData('showers').categoryTotal;
  const l = calculateCategoryData('loft').categoryTotal;
  let count = 0;
  if (r > 0) count++;
  if (s > 0) count++;
  if (l > 0) count++;
  return count;
}

function initiateExport(format) {
  const catCount = countConfiguredCategories();
  if (catCount > 1) {
    pendingAction = { type: 'export', format };
    const catNames = { railings: 'Лестничные ограждения', showers: 'Душевые ограждения', loft: 'Лофт-перегородки' };
    el('singleChoiceTitle').textContent = `Только ${catNames[activeCategory]}`;
    openModal('mergeChoiceModal');
  } else {
    exportKP(format, false);
  }
}

function initiateShare() {
  const catCount = countConfiguredCategories();
  if (catCount > 1) {
    pendingAction = { type: 'share', format: 'pdf' };
    const catNames = { railings: 'Лестничные ограждения', showers: 'Душевые ограждения', loft: 'Лофт-перегородки' };
    el('singleChoiceTitle').textContent = `Только ${catNames[activeCategory]}`;
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

  const clientVal = (el('calcClient') && el('calcClient').value.trim()) || 'Частное лицо';
  const addressVal = (el('calcAddress') && el('calcAddress').value.trim()) || 'г. Санкт-Петербург';
  const prepayVal = '50%';

  if (el('kpDocNum')) el('kpDocNum').textContent = `№ ${seqNum}/${dates.noDots}`;
  if (el('kpDocDate')) el('kpDocDate').textContent = dates.dateStr;
  if (el('kpDocAddress')) el('kpDocAddress').textContent = addressVal;
  if (el('kpDocClient')) el('kpDocClient').textContent = clientVal;
  if (el('kpDocPrepay')) el('kpDocPrepay').textContent = prepayVal;

  const resRailings = calculateCategoryData('railings');
  const resShowers = calculateCategoryData('showers');
  const resLoft = calculateCategoryData('loft');

  let activeList = [];
  if (isMerged) {
    activeList = [
      ...resRailings.calcPositions,
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
    } else if (activeCategory === 'railings') {
      el('kpDocItemTitle').textContent = 'Стеклянное ограждение лестницы';
    } else if (activeCategory === 'showers') {
      el('kpDocItemTitle').textContent = 'Душевое ограждение из закалённого стекла';
    } else {
      el('kpDocItemTitle').textContent = 'Межкомнатная стеклянная лофт-перегородка';
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
  } else {
    activeList.forEach((cp, idx) => {
      subtotalItems += cp.posTotal;

      rowsHtml += `<tr class="kp-sec-hdr">
        <td colspan="5">ПОЗИЦИЯ ${idx + 1}: ${cp.pos.name || `Изделие ${idx + 1}`}</td>
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
    });

    rowsHtml += `<tr class="kp-sec-hdr"><td colspan="5">ОБЩИЕ УСЛУГИ:</td></tr>`;
  }

  // Delivery
  const rawDelSum = el('delOn').checked ? num('delPrice') : 0;
  const delSum = roundUp500(rawDelSum);
  rowsHtml += `<tr>
    <td>Доставка, разгрузка</td>
    <td class="c">компл.</td>
    <td class="c">1</td>
    <td class="r">${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : 'не требуется'}</td>
    <td class="r">${el('delOn').checked ? (delSum > 0 ? rub(delSum) : '0 ₽') : '0 ₽'}</td>
  </tr>`;

  // Install
  const mode = el('instMode').value;
  let rawInstSum = 0;
  if (el('instOn').checked) {
    rawInstSum = mode === 'fix' ? num('instFix') : (subtotalItems * num('instPct') / 100);
  }
  const instSum = roundUp500(rawInstSum);
  rowsHtml += `<tr>
    <td>Монтажные работы</td>
    <td class="c">компл.</td>
    <td class="c">1</td>
    <td class="r">${el('instOn').checked ? (instSum > 0 ? rub(instSum) : '0 ₽') : 'не требуются'}</td>
    <td class="r">${el('instOn').checked ? (instSum > 0 ? rub(instSum) : '0 ₽') : '0 ₽'}</td>
  </tr>`;

  // Services
  let servSum = 0;
  document.querySelectorAll('.servPrice').forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    const s = D.services[idx];
    if (!s) return;
    const v = inp.value.trim() === '' ? null : (parseFloat(inp.value) || 0);
    if (v !== null && v > 0) {
      const roundedV = roundUp500(v);
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

  const total = subtotalItems + delSum + instSum + servSum;

  if (el('kpDocTotal')) el('kpDocTotal').textContent = rub(total);
  if (el('kpDocTerm')) el('kpDocTerm').textContent = `${num('termDays')} раб. дней`;
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

/* --- Settings Modals & Admin Security --- */
const SETTINGS_MODALS = ['glassModal', 'hardModal', 'railModal', 'deliveryModal', 'installModal', 'serviceModal', 'termModal'];

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
    showers: 'Типы стекла 8 мм (Душевые ограждения)',
    loft: 'Типы стекла 6 мм (Лофт-перегородки)'
  };
  if (title) title.textContent = catTitles[cat];

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
    showers: 'Фурнитура и комплектующие (Душевые)',
    loft: 'Фурнитура и механизмы (Лофт-перегородки)'
  };
  if (title) title.textContent = catTitles[cat];

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
  el('eRail').innerHTML = D.railings.rail.map((item, idx) => `
    <div class="srow two">
      <span>${item.name}</span>
      <input type="number" value="${item.price}" step="100" onchange="D.railings.rail[${idx}].price=+this.value||0; buildActiveSelects(); autoSave(); calc();">
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
  if (D.railings.rail.length <= 1) return alert('Должна остаться хотя бы одна позиция');
  if (!confirm('Удалить «' + D.railings.rail[idx].name + '»?')) return;
  D.railings.rail.splice(idx, 1); buildActiveSelects(); renderRailSettings(); autoSave(); calc();
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
  const n = el('nrName').value.trim();
  if (!n) return alert('Введите название');
  D.railings.rail.push({ name: n, price: +el('nrPrice').value || 0 });
  buildActiveSelects(); renderRailSettings(); autoSave(); calc();
}
function addService() {
  const n = el('nsName').value.trim();
  if (!n) return alert('Введите название');
  D.services.push({ name: n, emptyDefault: 'hide' });
  buildServiceList(); renderServiceSettings(); autoSave(); calc();
}

function autoSave() {
  localStorage.setItem('glassloft_multi_calc_v3', JSON.stringify(D));
}

function saveAll() {
  syncCurrentInputsToState();
  autoSave();
  showToast('Все настройки и прайс-листы сохранены! 💾');
}

/* --- Init --- */
function init() {
  renderCategoryContent();
  renderPositionTabs();
  buildServiceList();
  if (el('delPrice')) el('delPrice').value = D.misc.delivery;
  if (el('instFix')) el('instFix').value = D.misc.instFix;
  if (el('instPct')) el('instPct').value = D.misc.instPct;
  calc();
  fetchCurrentSequenceNumber().then(num => updateKpDocumentData(num, false));

  // Register PWA ServiceWorker for 100% offline support
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

init();