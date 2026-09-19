#!/usr/bin/env node
// retrospective-learner.mjs — CFES Layer C · 회고 학습 (실패 원인 분류·집계)
// 2026-07-29 세션 103 신설 (기획안 v1.2 §3.3 Layer C · §4 F1~F10 · §5.3)
//
// 목적 (v1.2 §3.3):
//   검수 실패 창작을 F1~F10 으로 결정론 분류·집계 → 빈도 threshold 초과 유형을
//   프롬프트 강화 트리거로 방출. 분류 정답셋은 메커니즘 C 결함군(ground truth)과 대조.
//
// 시그니처 SSOT : scripts/lib/cfes-flaw-catalog.mjs (분류·강화 방향 단일 출처)
// 상태 파일     : bank/creation-archive/failure-catalog-state.json (counts·records)
// 분류          : 규칙/키워드 기반 · 결정론 · LLM 호출 없음.
//
// 사용법:
//   # 검수 리포트 1건 분류 → counts 증가·records append
//   node scripts/retrospective-learner.mjs --classify \
//     --review <검수리포트.md|txt> \
//     [--cell CM2-GM-원/I-SYM/4] [--id creation-02] [--source exam] [--date 2026-07-29]
//
//   # 누적 통계 (F유형별 counts·최근 records·빈도 상위)
//   node scripts/retrospective-learner.mjs --stats [--json]
//
//   # threshold 초과 유형 (프롬프트 강화 트리거)
//   node scripts/retrospective-learner.mjs --threshold 3
//
// 반환 :
//   --classify  : 0 = 분류 성공(≥1 유형) · 1 = 무매칭 · 2 = 오용
//   --stats     : 0
//   --threshold : 0 = 초과 유형 없음 · 1 = 초과 유형 있음 · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FLAW_CATALOG_C, FLAW_CODES, classify } from './lib/cfes-flaw-catalog.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const STATE_PATH = path.join(ROOT, 'bank', 'creation-archive', 'failure-catalog-state.json');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  classify: false, stats: false, threshold: null, json: false,
  review: null, cell: null, id: null, source: null, date: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--classify') opt.classify = true;
  else if (a === '--stats') opt.stats = true;
  else if (a === '--threshold') opt.threshold = parseInt(args[++i], 10);
  else if (a === '--json') opt.json = true;
  else if (a === '--review') opt.review = args[++i];
  else if (a === '--cell') opt.cell = args[++i];
  else if (a === '--id') opt.id = args[++i];
  else if (a === '--source') opt.source = args[++i];
  else if (a === '--date') opt.date = args[++i];
  else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
}

function printHelp() {
  console.log(`
retrospective-learner.mjs — CFES Layer C 회고 학습 (F1~F10 분류·집계)

분류   : node scripts/retrospective-learner.mjs --classify --review <리포트> \\
           [--cell <키>] [--id <창작id>] [--source exam] [--date 2026-07-29]
통계   : node scripts/retrospective-learner.mjs --stats [--json]
트리거 : node scripts/retrospective-learner.mjs --threshold 3

반환 : classify 0=성공·1=무매칭·2=오용 · threshold 0=없음·1=초과유형있음
`);
}

// ── 상태 로드/저장 ────────────────────────────────────────
function loadState() {
  if (!fs.existsSync(STATE_PATH)) {
    const counts = {};
    for (const f of FLAW_CODES) counts[f] = 0;
    return { version: 'v1', updated: opt.date || 'UNDATED', counts, records: [] };
  }
  const s = JSON.parse(fs.readFileSync(STATE_PATH, 'utf-8'));
  for (const f of FLAW_CODES) if (s.counts[f] == null) s.counts[f] = 0;
  if (!Array.isArray(s.records)) s.records = [];
  return s;
}
function saveState(s) {
  fs.writeFileSync(STATE_PATH, JSON.stringify(s, null, 2) + '\n', 'utf-8');
}

// ── --classify ────────────────────────────────────────────
if (opt.classify) {
  if (!opt.review) { console.error('❌ --classify 는 --review 필수'); process.exit(2); }
  if (!fs.existsSync(opt.review)) { console.error(`❌ 검수 리포트 없음 : ${opt.review}`); process.exit(2); }

  const text = fs.readFileSync(opt.review, 'utf-8');
  const candidates = classify(text);   // score 내림차순 [{flaw,name,score,matched}]

  console.error(`\n━━━ 회고 분류 (retrospective-learner) ━━━`);
  console.error(`  리포트 : ${path.relative(ROOT, opt.review)}`);
  console.error(`  창작id : ${opt.id || '(미지정)'} · cell : ${opt.cell || '(미지정)'} · source : ${opt.source || '(미지정)'}`);

  if (candidates.length === 0) {
    console.error(`  → 매칭 유형 없음 (무매칭). counts 미변경.`);
    console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    process.exit(1);
  }

  const date = opt.date || 'UNDATED';
  const state = loadState();
  console.error(`  판정 유형 (복수 가능) :`);
  for (const c of candidates) {
    console.error(`    ${c.flaw} ${c.name} · score ${c.score} · 매칭 시그니처 [${c.matched.join(', ')}]`);
    state.counts[c.flaw] = (state.counts[c.flaw] || 0) + 1;
    state.records.push({
      id: opt.id || '(unknown)',
      flaw: c.flaw,
      cell: opt.cell || '(unknown)',
      source: opt.source || '(unknown)',
      note: `matched: ${c.matched.join('; ')}`,
      date,
    });
  }
  state.updated = date;
  saveState(state);
  console.error(`  → ${candidates.length} 유형 records append · counts 갱신 · updated=${date}`);
  console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
  process.exit(0);
}

// ── --stats ───────────────────────────────────────────────
if (opt.stats) {
  const state = loadState();
  if (opt.json) {
    console.log(JSON.stringify(state, null, 2));
    process.exit(0);
  }
  const ranked = FLAW_CODES
    .map(f => ({ flaw: f, name: FLAW_CATALOG_C[f].name, count: state.counts[f] || 0 }))
    .sort((a, b) => b.count - a.count || a.flaw.localeCompare(b.flaw, 'en', { numeric: true }));
  const total = ranked.reduce((s, r) => s + r.count, 0);

  console.log(`\n# CFES Layer C 실패-원인 통계 (retrospective-learner)`);
  console.log(`- 상태 파일 : ${path.relative(ROOT, STATE_PATH)}`);
  console.log(`- updated : ${state.updated} · 총 분류 기록 : ${total} · records : ${state.records.length}`);
  console.log(`\n## F유형별 빈도 (상위순)`);
  console.log(`| 순위 | F | 이름 | count |`);
  console.log(`|---:|---|---|---:|`);
  ranked.forEach((r, i) => console.log(`| ${i + 1} | ${r.flaw} | ${r.name} | ${r.count} |`));

  const recent = state.records.slice(-8);
  console.log(`\n## 최근 records (최대 8건)`);
  if (recent.length === 0) {
    console.log(`(없음)`);
  } else {
    console.log(`| date | id | F | cell | source | note |`);
    console.log(`|---|---|---|---|---|---|`);
    for (const r of recent) {
      console.log(`| ${r.date} | ${r.id} | ${r.flaw} | ${r.cell} | ${r.source} | ${r.note} |`);
    }
  }
  console.log('');
  process.exit(0);
}

// ── --threshold ───────────────────────────────────────────
if (opt.threshold != null) {
  if (!Number.isFinite(opt.threshold) || opt.threshold < 1) {
    console.error('❌ --threshold N 은 1 이상의 정수'); process.exit(2);
  }
  const state = loadState();
  const over = FLAW_CODES
    .map(f => ({ flaw: f, name: FLAW_CATALOG_C[f].name, count: state.counts[f] || 0 }))
    .filter(r => r.count >= opt.threshold)
    .sort((a, b) => b.count - a.count || a.flaw.localeCompare(b.flaw, 'en', { numeric: true }));

  console.error(`\n━━━ threshold ≥ ${opt.threshold} 초과 유형 ━━━`);
  if (over.length === 0) {
    console.error(`  없음 (프롬프트 강화 트리거 미발동)`);
    console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    process.exit(0);
  }
  for (const r of over) {
    console.error(`  ⚠️ ${r.flaw} ${r.name} · count ${r.count} → prompt-diff-suggest --flaw ${r.flaw} 권고`);
  }
  console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
  // 머신 판독 : stdout 에 공백 구분 F 코드
  console.log(over.map(r => r.flaw).join(' '));
  process.exit(1);
}

// ── 모드 미지정 ───────────────────────────────────────────
printHelp();
process.exit(2);
