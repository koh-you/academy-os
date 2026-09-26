#!/usr/bin/env node
// creation-rollback-check.mjs — CFES Layer D · Safe Rollback (하향 권고)
// 2026-07-29 세션 103 신설 · CFES Phase B 도구 (기획안 v1.2 §3.4 · §5.3)
//
// 목적 (v1.2 §3.4):
//   freedom-gauge-state.json을 읽어(수정 안 함) 셀별로 rollback 조건 3종을
//   평가하고 하향/lock 권고 리포트를 낸다. 실제 등급 하향 적용은
//   freedom-gauge.mjs가 담당(관심사 분리) — 이 도구는 "권고만" 한다.
//
// 평가 조건 (v1.2 §3.4):
//   (a) 3연속 fail : 최근 window 마지막 3개가 모두 fail
//       → 해당 셀 L0 강제 복귀 권고 (action=downgrade·target=L0
//          · 이미 L0면 action=hold)
//   (b) gauge 급락 : 직전 대비 gauge 20%p 이상 하락 (마지막 기록 제외 gauge와 비교)
//       → -1 단계 하향 권고 (action=downgrade·target=현재-1단계)
//   (c) 파일 kill switch : bank/creation-freedom-lock.md 존재
//       → 전 셀 L0 lock 판정 (action=lock·target=L0)
//
// 셀별 조치 어휘 : ok | hold | downgrade | lock
//   심각도 : lock > downgrade > hold > ok
//
// 사용법 :
//   node scripts/creation-rollback-check.mjs --check [--cell "CM2-GM-원|I-SYM|4"]
//   node scripts/creation-rollback-check.mjs --check --json
//   node scripts/creation-rollback-check.mjs --check --report <경로.md>
//   옵션 : --state <경로> (기본 bank/freedom-gauge-state.json)
//
// 반환(exit code) :
//   0 = 이상 없음 (전 셀 ok)
//   1 = 하향 권고 (downgrade 또는 hold 존재)
//   2 = lock (kill switch 활성)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const LEVELS = ['L0', 'L1', 'L2', 'L3'];
const DROP_THRESHOLD = 0.20;          // 20%p 급락
const CONSEC_FAIL = 3;                // 3연속 fail
const DEFAULT_STATE = path.join('bank', 'freedom-gauge-state.json');
const KILL_SWITCH_FILE = path.join(ROOT, 'bank', 'creation-freedom-lock.md');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = { check: false, cell: null, json: false, report: null, state: null };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--check') opt.check = true;
  else if (a === '--cell') opt.cell = args[++i];
  else if (a === '--json') opt.json = true;
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--state') opt.state = args[++i];
  else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
}

function printHelp() {
  console.log(`
creation-rollback-check.mjs — CFES Layer D · Safe Rollback 권고

사용법 :
  node scripts/creation-rollback-check.mjs --check [--cell <키>] [--json] [--report <경로>]
  옵션 : --state <경로> (기본 ${DEFAULT_STATE})

조건 : (a) 3연속 fail → L0 · (b) gauge 20%p 급락 → -1단계 · (c) kill switch → lock
반환 : 0 = 이상없음 · 1 = 하향권고 · 2 = lock
`);
}

if (!opt.check) { printHelp(); process.exit(2); }

const STATE_PATH = path.isAbsolute(opt.state || DEFAULT_STATE)
  ? (opt.state || DEFAULT_STATE)
  : path.join(ROOT, opt.state || DEFAULT_STATE);

// ── state 로드 (읽기 전용) ───────────────────────────────
if (!fs.existsSync(STATE_PATH)) {
  console.error(`❌ state 파일 없음 : ${path.relative(ROOT, STATE_PATH)}`); process.exit(2);
}
const st = JSON.parse(fs.readFileSync(STATE_PATH, 'utf-8'));
if (!st.cells) st.cells = {};

const killActive = fs.existsSync(KILL_SWITCH_FILE);

// ── 게이지 계산 (state 미수정 · 분석용 재계산) ───────────
function computeGauge(window) {
  if (!window || window.length === 0) return 0;
  return window.filter(w => w.result === 'success').length / window.length;
}

// ── 셀 평가 ──────────────────────────────────────────────
function evalCell(key, cell) {
  const window = cell.window || [];
  const curLevel = cell.level || 'L0';
  const gauge = computeGauge(window);
  const rec = { cell: key, level: curLevel, gauge, window_size: window.length,
    action: 'ok', target: curLevel, reasons: [] };

  // (c) kill switch → 전 셀 lock 우선
  if (killActive) {
    rec.action = 'lock'; rec.target = 'L0';
    rec.reasons.push('kill switch 활성 (bank/creation-freedom-lock.md)');
    return rec;
  }

  // (a) 3연속 fail
  if (window.length >= CONSEC_FAIL &&
      window.slice(-CONSEC_FAIL).every(w => w.result === 'fail')) {
    if (curLevel !== 'L0') {
      raise(rec, 'downgrade', 'L0', `최근 ${CONSEC_FAIL}연속 fail → L0 강제 복귀 권고`);
    } else {
      raise(rec, 'hold', 'L0', `최근 ${CONSEC_FAIL}연속 fail · 이미 L0 (유지 권고)`);
    }
  }

  // (b) gauge 20%p 급락 (마지막 기록 제외 gauge와 비교)
  if (window.length >= 2) {
    const prevGauge = computeGauge(window.slice(0, -1));
    const drop = prevGauge - gauge;
    if (drop >= DROP_THRESHOLD) {
      const idx = Math.max(0, LEVELS.indexOf(curLevel) - 1);
      raise(rec, 'downgrade', LEVELS[idx],
        `gauge ${(prevGauge * 100).toFixed(1)}% → ${(gauge * 100).toFixed(1)}% (${(drop * 100).toFixed(1)}%p 급락) → -1단계 권고`);
    }
  }
  return rec;
}

// 더 심각한 조치로만 승격
const SEVERITY = { ok: 0, hold: 1, downgrade: 2, lock: 3 };
function raise(rec, action, target, reason) {
  rec.reasons.push(reason);
  if (SEVERITY[action] > SEVERITY[rec.action]) {
    rec.action = action;
    rec.target = target;
  }
}

// ── 전 셀 평가 ───────────────────────────────────────────
let entries = Object.entries(st.cells);
if (opt.cell) entries = entries.filter(([k]) => k === opt.cell);

const recs = entries.map(([k, c]) => evalCell(k, c));

// kill switch 인데 셀이 없어도 lock 신호는 알려야 함
const anyLock = killActive || recs.some(r => r.action === 'lock');
const anyDown = recs.some(r => r.action === 'downgrade' || r.action === 'hold');
const exitCode = anyLock ? 2 : (anyDown ? 1 : 0);

// ── JSON 출력 ────────────────────────────────────────────
if (opt.json) {
  console.log(JSON.stringify({
    state: path.relative(ROOT, STATE_PATH).replace(/\\/g, '/'),
    kill_switch: killActive,
    exit_code: exitCode,
    recommendations: recs,
  }, null, 2));
  process.exit(exitCode);
}

// ── 콘솔 리포트 ──────────────────────────────────────────
console.error(`\n━━━ CFES Rollback Check (Layer D) ━━━`);
console.error(`  state : ${path.relative(ROOT, STATE_PATH)}`);
console.error(`  kill switch : ${killActive ? '🛑 활성 → 전 셀 lock' : '해제'}`);
console.error(`  평가 셀 : ${recs.length}${opt.cell ? ` (필터 ${opt.cell})` : ''}`);
if (recs.length === 0 && !killActive) {
  console.error(`  → 평가 대상 셀 없음`);
}
for (const r of recs) {
  const mark = r.action === 'lock' ? '🛑' : r.action === 'downgrade' ? '▼' : r.action === 'hold' ? '⏸' : '✅';
  console.error(`  ${mark} ${r.cell} : ${r.action}${r.action !== 'ok' ? ` → ${r.target}` : ''} (gauge ${(r.gauge * 100).toFixed(1)}% · level ${r.level})`);
  for (const reason of r.reasons) console.error(`       · ${reason}`);
}
console.error(`  → exit ${exitCode} (${exitCode === 0 ? '이상없음' : exitCode === 1 ? '하향권고' : 'lock'})`);
console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

// ── 마크다운 리포트 ──────────────────────────────────────
if (opt.report) {
  const L = [];
  L.push(`# CFES Rollback Check 리포트 (Layer D · creation-rollback-check)`);
  L.push('');
  L.push(`- **state** : \`${path.relative(ROOT, STATE_PATH).replace(/\\/g, '/')}\``);
  L.push(`- **kill switch** : ${killActive ? '🛑 활성' : '해제'}`);
  L.push(`- **평가 셀** : ${recs.length}${opt.cell ? ` (필터 \`${opt.cell}\`)` : ''}`);
  L.push(`- **exit code** : ${exitCode} (${exitCode === 0 ? '이상없음' : exitCode === 1 ? '하향권고' : 'lock'})`);
  L.push('');
  L.push(`## 셀별 권고`);
  L.push('');
  L.push(`| 셀 | 현재 level | gauge | window | 조치 | target | 사유 |`);
  L.push(`|---|:--:|--:|:--:|:--:|:--:|---|`);
  for (const r of recs) {
    L.push(`| ${r.cell} | ${r.level} | ${(r.gauge * 100).toFixed(1)}% | ${r.window_size} | ${r.action} | ${r.action !== 'ok' ? r.target : '—'} | ${r.reasons.join(' · ') || '—'} |`);
  }
  L.push('');
  L.push(`## 조치 어휘`);
  L.push(`- **lock** : kill switch 활성 → 전 셀 L0 lock (exit 2)`);
  L.push(`- **downgrade** : 3연속 fail(→L0) 또는 gauge 20%p 급락(-1단계) (exit 1)`);
  L.push(`- **hold** : 3연속 fail이나 이미 L0 (유지 권고 · exit 1)`);
  L.push(`- **ok** : 이상 없음 (exit 0)`);
  L.push('');
  L.push(`> 이 도구는 권고만 한다. 실제 등급 적용은 \`freedom-gauge.mjs\`가 담당.`);
  fs.mkdirSync(path.dirname(opt.report), { recursive: true });
  fs.writeFileSync(opt.report, L.join('\n') + '\n', 'utf-8');
  console.error(`📄 리포트 : ${path.relative(ROOT, opt.report)}`);
}

process.exit(exitCode);
