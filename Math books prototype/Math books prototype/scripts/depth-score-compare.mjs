#!/usr/bin/env node
// depth-score-compare.mjs (v1.0, 2026-06-25)
// 슬롯 measured depth_score vs seed 표본 depth_score 정량 비교
//
// 단일 출처: bank/v3.2-출제게이트-G5.md §C
//
// 사용법:
//   node scripts/depth-score-compare.mjs <청사진.yaml> [--measured measured.json]
//
//   measured.json 형식 (problem-review v4.2 결과 입력용):
//   {
//     "slots": [
//       { "slot": 22, "measured_depth_score": 8.5 },
//       { "slot": 19, "measured_depth_score": 7.2 }
//     ]
//   }
//
// 출력:
//   슬롯별 (slot · seed_id · seed_depth · measured · gap · 판정 RED/YELLOW/OK)
//
// 임계값:
//   measured < seed - 1.5 → RED (자산 활용 실패)
//   measured < seed - 0.7 → YELLOW (강화 권장)
//   measured ≥ seed - 0.7 → OK

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
function getOpt(name) { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; }

if (args.length < 1) {
  console.error('Usage: node scripts/depth-score-compare.mjs <청사진.yaml> [--measured measured.json]');
  process.exit(2);
}

const blueprintPath = args[0];
const measuredPath = getOpt('--measured');

if (!fs.existsSync(blueprintPath)) {
  console.error(`❌ 청사진 없음: ${blueprintPath}`);
  process.exit(2);
}

const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..');

// 표본 인덱스 로드
const sampleIndex = {};
for (const dp of [path.join(projectRoot, 'data', 'cm1-premium-samples.json'), path.join(projectRoot, 'data', 'cm2-premium-samples.json')]) {
  if (!fs.existsSync(dp)) continue;
  const json = JSON.parse(fs.readFileSync(dp, 'utf8'));
  for (const s of (json.samples || [])) sampleIndex[s.id] = s;
}

// 청사진에서 slot·star·seed_id 추출 (간이 YAML 파서)
const text = fs.readFileSync(blueprintPath, 'utf8');
const lines = text.split(/\r?\n/);
const slots = [];
let cur = null;
let inSlots = false;
for (const line of lines) {
  if (/^slots\s*:/.test(line)) { inSlots = true; continue; }
  if (inSlots && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) inSlots = false;
  if (!inSlots) continue;
  const slotStart = line.match(/^\s*-\s*slot:\s*(\d+)/);
  if (slotStart) {
    if (cur) slots.push(cur);
    cur = { slot: parseInt(slotStart[1]) };
    continue;
  }
  if (!cur) continue;
  const starM = line.match(/^\s*star:\s*(\d+(?:\.\d+)?)/);
  if (starM) cur.star = parseFloat(starM[1]);
  const seedM = line.match(/^\s*seed_id:\s*(.+?)\s*$/);
  if (seedM) cur.seed_id = seedM[1].replace(/['"]/g, '').trim();
}
if (cur) slots.push(cur);

// measured 로드
const measuredMap = {};
if (measuredPath && fs.existsSync(measuredPath)) {
  const m = JSON.parse(fs.readFileSync(measuredPath, 'utf8'));
  for (const r of (m.slots || [])) measuredMap[r.slot] = r.measured_depth_score;
}

// 비교
const reds = [];
const yellows = [];
const okSlots = [];

console.log(`📋 청사진: ${path.basename(blueprintPath)} (★ 4·5 슬롯 비교)`);
console.log();
console.log('| slot | ★ | seed_id | seed depth_score | measured | gap | 판정 |');
console.log('|---|---|---|---|---|---|---|');

for (const s of slots) {
  if (!s.star || s.star < 4) continue;
  if (!s.seed_id) {
    console.log(`| ${s.slot} | ${s.star} | (없음) | — | — | — | RED G5-SEED-MISSING |`);
    reds.push({ slot: s.slot, reason: 'seed_id 없음' });
    continue;
  }
  const seed = sampleIndex[s.seed_id];
  if (!seed) {
    console.log(`| ${s.slot} | ${s.star} | ${s.seed_id} | unknown | — | — | RED G5-SEED-UNKNOWN |`);
    reds.push({ slot: s.slot, reason: 'seed_id unknown' });
    continue;
  }
  const seedDepth = (seed.max_depth || 0) * 2 + (seed.avg_depth || 0);
  const measured = measuredMap[s.slot];
  if (measured == null) {
    console.log(`| ${s.slot} | ${s.star} | ${s.seed_id} | ${seedDepth.toFixed(2)} | (미측정) | — | PENDING |`);
    continue;
  }
  const gap = measured - seedDepth;
  let verdict = 'OK';
  if (gap < -1.5) { verdict = '🔴 RED'; reds.push({ slot: s.slot, gap: gap.toFixed(2) }); }
  else if (gap < -0.7) { verdict = '🟡 YELLOW'; yellows.push({ slot: s.slot, gap: gap.toFixed(2) }); }
  else okSlots.push(s.slot);
  console.log(`| ${s.slot} | ${s.star} | ${s.seed_id} | ${seedDepth.toFixed(2)} | ${measured.toFixed(2)} | ${gap >= 0 ? '+' : ''}${gap.toFixed(2)} | ${verdict} |`);
}

console.log();
console.log(`🔴 RED ${reds.length}건 / 🟡 YELLOW ${yellows.length}건 / ✅ OK ${okSlots.length}건`);

if (reds.length > 0) {
  console.error(`\n❌ depth_score gap RED ${reds.length}건. 슬롯 통찰 강화 + 본문 재출제 필요.`);
  process.exit(1);
}
if (yellows.length > 0) {
  console.log(`\n⚠️  YELLOW ${yellows.length}건 검토 권장.`);
}
process.exit(0);
