#!/usr/bin/env node
// freedom-gauge.mjs — CFES Layer B · Freedom Gauge (셀별 자유도 게이지)
// 2026-07-29 세션 103 신설 · CFES Phase B 도구 (기획안 v1.2 §3.2 · §5.3)
//
// 목적 (v1.2 §3.2):
//   셀 = (unit, insight, star). 최근 20개 rolling window의 성공률(gauge)로
//   자유도 등급(L0~L3)을 산정. 이 도구는 "순수 게이지 계산·기록"만 담당하며
//   승격/하향의 정책 판단(rollback)은 creation-rollback-check.mjs가 분리 담당.
//
// 게이지 → 자유도 등급 매핑 (v1.2 §3.2 표) :
//   0 ~ 60%   → L0 (Locked · 숫자만 변경)
//   60 ~ 75%  → L1 (Constrained · 조건 재조합)
//   75 ~ 90%  → L2 (Expanded · 새 조건 도입)
//   90% 이상  → L3 (Autonomous · 자유 창작)
//   경계는 하한 포함 (예 : 정확히 0.60 → L1 · 0.90 → L3).
//
// rolling window = 20 고정. 20 초과 시 가장 오래된 항목 제거.
//
// 🔴 시간 생성 금지 : 스크립트가 Date.now/현재시각을 스스로 만들지 않는다.
//    기록 일자는 반드시 --date 인자로 주입받아 window·history·updated에 기록.
//
// 사용법 :
//   # 기록 (window append · gauge·level 재계산 · 등급 변경 시 history)
//   node scripts/freedom-gauge.mjs --record \
//     --cell "CM2-GM-원|I-SYM|4" --result success \
//     --id CRE-CM2-GM-001 --source exam --date 2026-07-29
//
//   # 상태 조회 (전체 또는 특정 셀)
//   node scripts/freedom-gauge.mjs --status [--cell "CM2-GM-원|I-SYM|4"]
//
//   # 머신 판독 JSON
//   node scripts/freedom-gauge.mjs --status --json [--cell <키>]
//
//   # state 파일 경로 override (기본 bank/freedom-gauge-state.json)
//   node scripts/freedom-gauge.mjs --status --state <경로.json>
//
// 반환 : 0 = 정상 · 2 = 오용(인자 오류)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const STATE_VERSION = '1.0';
const WINDOW_SIZE = 20;               // rolling window 고정
const LEVELS = ['L0', 'L1', 'L2', 'L3'];
const DEFAULT_STATE = path.join('bank', 'freedom-gauge-state.json');

// ── 게이지 → 등급 (v1.2 §3.2 · SSOT) ─────────────────────
function levelFor(gauge) {
  if (gauge >= 0.90) return 'L3';
  if (gauge >= 0.75) return 'L2';
  if (gauge >= 0.60) return 'L1';
  return 'L0';
}
const LEVEL_NAME = { L0: 'Locked', L1: 'Constrained', L2: 'Expanded', L3: 'Autonomous' };

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  record: false, status: false, json: false,
  cell: null, result: null, id: null, source: null, date: null,
  state: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--record') opt.record = true;
  else if (a === '--status') opt.status = true;
  else if (a === '--json') opt.json = true;
  else if (a === '--cell') opt.cell = args[++i];
  else if (a === '--result') opt.result = args[++i];
  else if (a === '--id') opt.id = args[++i];
  else if (a === '--source') opt.source = args[++i];
  else if (a === '--date') opt.date = args[++i];
  else if (a === '--state') opt.state = args[++i];
  else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
}

function printHelp() {
  console.log(`
freedom-gauge.mjs — CFES Layer B · Freedom Gauge

기록 :
  node scripts/freedom-gauge.mjs --record \\
    --cell "CM2-GM-원|I-SYM|4" --result success|fail \\
    --id <창작id> --source exam|test|synthetic --date 2026-07-29

상태 :
  node scripts/freedom-gauge.mjs --status [--cell <키>] [--json]

옵션 : --state <경로> (기본 ${DEFAULT_STATE})

게이지 등급 : 0~60% L0 · 60~75% L1 · 75~90% L2 · 90%+ L3
반환 : 0 = 정상 · 2 = 오용
`);
}

const STATE_PATH = path.isAbsolute(opt.state || DEFAULT_STATE)
  ? (opt.state || DEFAULT_STATE)
  : path.join(ROOT, opt.state || DEFAULT_STATE);

// ── state 입출력 ─────────────────────────────────────────
function loadState() {
  if (!fs.existsSync(STATE_PATH)) {
    return { version: STATE_VERSION, updated: null, cells: {} };
  }
  const raw = fs.readFileSync(STATE_PATH, 'utf-8');
  const st = JSON.parse(raw);
  if (!st.cells) st.cells = {};
  if (!st.version) st.version = STATE_VERSION;
  return st;
}

function saveState(st) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(st, null, 2) + '\n', 'utf-8');
}

// ── 게이지 계산 ──────────────────────────────────────────
function computeGauge(window) {
  if (!window || window.length === 0) return 0;
  const success = window.filter(w => w.result === 'success').length;
  return success / window.length;
}

// ── 셀 키 검증 ───────────────────────────────────────────
function validCellKey(key) {
  if (typeof key !== 'string') return false;
  const parts = key.split('|');
  return parts.length === 3 && parts.every(p => p.trim().length > 0);
}

// ── record 모드 ──────────────────────────────────────────
function doRecord() {
  if (!opt.cell) { console.error('❌ --record 는 --cell 필수'); process.exit(2); }
  if (!validCellKey(opt.cell)) {
    console.error(`❌ --cell 형식 오류 : "{unit}|{insight}|{star}" 필요 (받음 : ${opt.cell})`);
    process.exit(2);
  }
  if (opt.result !== 'success' && opt.result !== 'fail') {
    console.error(`❌ --result 는 success|fail (받음 : ${opt.result})`); process.exit(2);
  }
  if (!opt.id) { console.error('❌ --id 필수 (창작 식별자)'); process.exit(2); }
  if (!opt.source) { console.error('❌ --source 필수 (exam|test|synthetic)'); process.exit(2); }
  if (!opt.date) { console.error('❌ --date 필수 (스크립트는 시각을 스스로 생성하지 않음)'); process.exit(2); }

  const st = loadState();
  if (!st.cells[opt.cell]) {
    st.cells[opt.cell] = { window: [], gauge: 0, level: 'L0', history: [] };
  }
  const cell = st.cells[opt.cell];
  const prevLevel = cell.level;
  const prevGauge = cell.gauge;

  // window append + rolling trim (20 초과 시 오래된 것 제거)
  cell.window.push({ id: opt.id, result: opt.result, source: opt.source, date: opt.date });
  while (cell.window.length > WINDOW_SIZE) cell.window.shift();

  // 재계산
  cell.gauge = computeGauge(cell.window);
  cell.level = levelFor(cell.gauge);

  // 등급 변경 시 history 기록
  if (cell.level !== prevLevel) {
    cell.history.push({
      date: opt.date,
      from: prevLevel,
      to: cell.level,
      gauge: Number(cell.gauge.toFixed(4)),
      id: opt.id,
      direction: LEVELS.indexOf(cell.level) > LEVELS.indexOf(prevLevel) ? 'up' : 'down',
    });
  }

  st.updated = opt.date;   // 🔴 주입 date 사용 (Date.now 금지)
  saveState(st);

  console.error(`▶ 기록 : ${opt.cell}`);
  console.error(`  ${opt.id} · ${opt.result} · source=${opt.source} · date=${opt.date}`);
  console.error(`  window : ${cell.window.length}/${WINDOW_SIZE} · gauge : ${(cell.gauge * 100).toFixed(1)}% (이전 ${(prevGauge * 100).toFixed(1)}%)`);
  console.error(`  level  : ${prevLevel} → ${cell.level}${cell.level !== prevLevel ? ` (${LEVELS.indexOf(cell.level) > LEVELS.indexOf(prevLevel) ? '▲ 상승' : '▼ 하향'})` : ' (유지)'}`);
  console.error(`  state  : ${path.relative(ROOT, STATE_PATH)}`);
}

// ── status 모드 ──────────────────────────────────────────
function doStatus() {
  const st = loadState();
  let entries = Object.entries(st.cells);
  if (opt.cell) entries = entries.filter(([k]) => k === opt.cell);

  if (opt.json) {
    const out = {
      version: st.version, updated: st.updated,
      cells: Object.fromEntries(entries.map(([k, c]) => [k, {
        gauge: Number(computeGauge(c.window).toFixed(4)),
        level: levelFor(computeGauge(c.window)),
        window_size: c.window.length,
        history_count: (c.history || []).length,
      }])),
    };
    console.log(JSON.stringify(out, null, 2));
    return;
  }

  console.log(`\n━━━ Freedom Gauge 상태 (v${st.version} · updated ${st.updated || 'never'}) ━━━`);
  if (entries.length === 0) {
    console.log(opt.cell ? `  (셀 없음 : ${opt.cell})` : '  (기록된 셀 없음)');
    console.log('');
    return;
  }
  console.log(`\n${pad('셀 (unit|insight|star)', 34)} ${pad('window', 8)} ${pad('gauge', 8)} ${pad('level', 16)} history`);
  console.log('─'.repeat(84));
  for (const [k, c] of entries) {
    const g = computeGauge(c.window);
    const lv = levelFor(g);
    console.log(`${pad(k, 34)} ${pad(`${c.window.length}/${WINDOW_SIZE}`, 8)} ${pad(`${(g * 100).toFixed(1)}%`, 8)} ${pad(`${lv} (${LEVEL_NAME[lv]})`, 16)} ${(c.history || []).length}`);
  }
  console.log('');
}

function pad(s, n) {
  s = String(s);
  // 한글 폭 보정 (2배폭 문자 근사)
  const width = [...s].reduce((w, ch) => w + (ch.charCodeAt(0) > 0x2E80 ? 2 : 1), 0);
  return s + ' '.repeat(Math.max(0, n - width));
}

// ── 실행 ─────────────────────────────────────────────────
if (opt.record) {
  doRecord();
} else if (opt.status) {
  doStatus();
} else {
  printHelp();
  process.exit(2);
}
process.exit(0);
