#!/usr/bin/env node
// seed-fetch.mjs (v1.0, 2026-06-25)
// 출제 게이트 G5 — 자산 strict 표본을 *씨앗*으로 청사진에 강제 인용
//
// 단일 출처: bank/v3.2-출제게이트-G5.md
//
// 사용법:
//   node scripts/seed-fetch.mjs --unit CM1-MX --star 5 --count 5
//   node scripts/seed-fetch.mjs --unit CM1-EQ --star 4 --insights EQV,CON --format yaml
//   node scripts/seed-fetch.mjs --unit CM1-CB --star 5 --strict --insights XU,PD
//
// 옵션:
//   --unit UNIT           CM1-PL / CM1-EQ / CM1-CB / CM1-MX (필수)
//   --star N              target ★ (1~5, 필수) — strict 자산은 ★ 5만 있으므로 ★ 4 요청시 premium 자동 사용
//   --count N             결과 N개 (기본 5)
//   --insights LIST       콤마 분리 통찰 유형 (모두 포함, AND)
//   --any-insight LIST    콤마 분리 통찰 유형 (하나라도 포함, OR)
//   --strict              strict만 (count≥5 + max=3 + score≥8.5)
//   --top                 9.00 TOP (모든 통찰 깊이 3)
//   --min-score N         score ≥ N
//   --format yaml|json    yaml = 청사진 스니펫 / json = 상세
//   --data PATH           기본 data/cm1-premium-samples.json
//
// 출력 (yaml 형식 — 청사진 slot에 복사):
//   seeds:
//     - seed_id: BL-MX-13-04
//       seed_score: 9.00
//       seed_insights: [XU:3, CON:3, BW:2]
//       seed_excerpt: "..."
//       seed_book: "..."

import fs from 'node:fs';

const args = process.argv.slice(2);
function getOpt(name) { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; }
function hasFlag(name) { return args.includes(name); }

const unit = getOpt('--unit');
const targetStar = getOpt('--star') ? parseInt(getOpt('--star')) : null;
const count = getOpt('--count') ? parseInt(getOpt('--count')) : 5;
const insightStr = getOpt('--insights');
const anyInsightStr = getOpt('--any-insight');
const strict = hasFlag('--strict');
const top = hasFlag('--top');
const minScore = getOpt('--min-score') ? parseFloat(getOpt('--min-score')) : null;
const format = getOpt('--format') || 'yaml';
const dataPath = getOpt('--data') || 'data/cm1-premium-samples.json';

if (!unit) {
  console.error('❌ --unit 필수 (CM1-PL/EQ/CB/MX)');
  process.exit(2);
}
if (!targetStar) {
  console.error('❌ --star 필수 (1~5)');
  process.exit(2);
}
if (!fs.existsSync(dataPath)) {
  console.error(`❌ JSON 없음: ${dataPath}`);
  process.exit(2);
}

const json = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const samples = json.samples || [];

const insightsRequired = insightStr ? insightStr.split(',').map(s => s.trim().toUpperCase()) : [];
const anyInsights = anyInsightStr ? anyInsightStr.split(',').map(s => s.trim().toUpperCase()) : [];

function extractStarNum(label) {
  const m = (label || '').match(/★\s*(\d)/);
  return m ? parseInt(m[1]) : null;
}

function matches(s) {
  if (s.unit !== unit) return false;
  if (extractStarNum(s.grade_label) !== targetStar) return false;
  if (strict && !s.is_strict) return false;
  if (top && !s.is_top) return false;
  if (minScore !== null && (s.score ?? 0) < minScore) return false;
  if (insightsRequired.length > 0) {
    const types = new Set((s.insights || []).map(it => it.type));
    if (!insightsRequired.every(t => types.has(t))) return false;
  }
  if (anyInsights.length > 0) {
    const types = new Set((s.insights || []).map(it => it.type));
    if (!anyInsights.some(t => types.has(t))) return false;
  }
  return true;
}

// 매칭 결과
let matched = samples.filter(matches);

// 정렬: strict 우선 → score 내림차순 → insight_count 내림차순
matched.sort((a, b) => {
  if (a.is_strict !== b.is_strict) return b.is_strict - a.is_strict;
  if (a.is_top !== b.is_top) return b.is_top - a.is_top;
  if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
  return (b.insight_count || 0) - (a.insight_count || 0);
});

const top_n = matched.slice(0, count);

if (top_n.length === 0) {
  console.error(`⚠️  매칭 표본 0건 — ${unit} ★ ${targetStar} 조건 완화 필요`);
  // 완화 제안
  const broader = samples.filter(s => s.unit === unit && s.grade_label === `★ ${targetStar}`);
  console.error(`   ${unit} ★ ${targetStar} 전체 표본: ${broader.length}건 — --strict / --insights 등 필터 제거 시도`);
  process.exit(1);
}

// 통찰 카드 통계 (전체 매칭의 type:depth 분포)
const cardFreq = {};
for (const s of matched) {
  for (const ins of (s.insights || [])) {
    const key = `${ins.type}:${ins.depth}`;
    cardFreq[key] = (cardFreq[key] || 0) + 1;
  }
}
const topCards = Object.entries(cardFreq)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 6)
  .map(([k, v]) => ({ card: k, freq: v }));

if (format === 'json') {
  console.log(JSON.stringify({
    query: { unit, target_star: targetStar, count, insights: insightsRequired, any_insight: anyInsights, strict, top, min_score: minScore },
    matched_total: matched.length,
    returned: top_n.length,
    card_freq_top: topCards,
    seeds: top_n,
  }, null, 2));
  process.exit(0);
}

// yaml 출력 (청사진 슬롯 스니펫)
console.log(`# seed-fetch ${unit} ★ ${targetStar} — 매칭 ${matched.length}건 / 상위 ${top_n.length}건`);
console.log(`# 통찰 카드 빈도 TOP (씨앗 인용 시 ≥ 2개 강제 복사 권장):`);
for (const tc of topCards) {
  console.log(`#   ${tc.card} (${tc.freq}회)`);
}
console.log();
console.log(`seeds:`);
for (const s of top_n) {
  const cards = (s.insights || []).map(it => `${it.type}:${it.depth}`);
  const grade = s.is_strict ? 'STRICT' : (s.is_premium ? 'premium' : '');
  console.log(`  - seed_id: ${s.id}`);
  console.log(`    seed_book: "${s.source || ''} ${s.source_book ? '— ' + s.source_book.slice(0, 40) : ''}"`);
  console.log(`    seed_grade: "${s.grade_label}${grade ? ` (${grade})` : ''}"`);
  console.log(`    seed_score: ${s.score}`);
  console.log(`    seed_insights: [${cards.join(', ')}]   # ≥ 2개를 슬롯 insight_cards로 복사 의무`);
  if (s.external_id) console.log(`    seed_external: "${s.external_id}"`);
  if (s.source_event) console.log(`    seed_event: "${s.source_event}"`);
  if (s.발문요지) console.log(`    seed_excerpt: "${s.발문요지.replace(/"/g, '\\"').slice(0, 140)}"`);
  console.log();
}
console.log(`# 청사진 사용 예 (해당 슬롯에 복사):`);
console.log(`#   - slot: 22`);
console.log(`#     star: ${targetStar}`);
console.log(`#     unit: ${unit}`);
console.log(`#     seed_id: ${top_n[0].id}`);
console.log(`#     seed_insight_cards: [${(top_n[0].insights || []).slice(0,3).map(it => `"${it.type}:${it.depth}"`).join(', ')}]`);
