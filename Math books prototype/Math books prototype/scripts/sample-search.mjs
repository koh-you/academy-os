#!/usr/bin/env node
// sample-search.mjs (v1.0, 2026-06-24)
// data/cm1-premium-samples.json 검색 CLI
//
// 사용법:
//   node scripts/sample-search.mjs --insights EQV,PD,CON --unit CM1-PL --min-depth 3
//   node scripts/sample-search.mjs --unit CM1-MX --strict
//   node scripts/sample-search.mjs --top --format json
//
// 옵션:
//   --insights LIST    콤마 구분 통찰 유형 (모두 포함, AND)
//   --any-insight LIST 콤마 구분 통찰 유형 (하나라도 포함, OR)
//   --unit UNIT        CM1-PL / CM1-EQ / CM1-CB / CM1-MX
//   --source NAME      블랙라벨 / 1등급마스터 / 일품 / 절대등급 / 고쟁이 / 플래티넘 / 일등급만들기 / 일등급수학 / 올림포스
//   --min-depth N      max_depth ≥ N (1~3)
//   --min-count N      insight_count ≥ N
//   --min-score N      score ≥ N (예: 8.5)
//   --premium          ★ 5 최상위 (broad) 만
//   --strict           strict (count≥5 + max=3 + score≥8.5) 만
//   --top              9.00 TOP 만 (모든 통찰 깊이 3)
//   --limit N          결과 N개로 제한 (기본 50)
//   --format json|table|md   출력 형식 (기본 table)
//   --data PATH        JSON 경로 (기본 data/all-premium-samples.json — CM1·CM2 통합본)
//                      개별 라인만 검색: --data data/cm1-premium-samples.json 또는 cm2-...
//   --stats            검색 결과 통계만 출력 (목록 생략)

import fs from 'node:fs';

const args = process.argv.slice(2);

function getOpt(name) {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
}
function hasFlag(name) {
  return args.includes(name);
}

const dataPath = getOpt('--data') || 'data/all-premium-samples.json';
const insightStr = getOpt('--insights');
const anyInsightStr = getOpt('--any-insight');
const unit = getOpt('--unit');
const source = getOpt('--source');
const minDepth = getOpt('--min-depth') ? parseInt(getOpt('--min-depth')) : null;
const minCount = getOpt('--min-count') ? parseInt(getOpt('--min-count')) : null;
const minScore = getOpt('--min-score') ? parseFloat(getOpt('--min-score')) : null;
const premium = hasFlag('--premium');
const strict = hasFlag('--strict');
const top = hasFlag('--top');
const limit = getOpt('--limit') ? parseInt(getOpt('--limit')) : 50;
const format = getOpt('--format') || 'table';
const statsOnly = hasFlag('--stats');

if (!fs.existsSync(dataPath)) {
  console.error(`⚠️  JSON 없음: ${dataPath}. 먼저 scripts/build-premium-samples.mjs 실행 필요`);
  process.exit(2);
}

const json = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const samples = json.samples || [];

// 필터링
const insightsRequired = insightStr ? insightStr.split(',').map(s => s.trim().toUpperCase()) : [];
const anyInsights = anyInsightStr ? anyInsightStr.split(',').map(s => s.trim().toUpperCase()) : [];

function matches(s) {
  if (unit && s.unit !== unit) return false;
  if (source && s.source !== source) return false;
  if (minDepth !== null && (s.max_depth ?? 0) < minDepth) return false;
  if (minCount !== null && (s.insight_count ?? 0) < minCount) return false;
  if (minScore !== null && (s.score ?? 0) < minScore) return false;
  if (premium && !s.is_premium) return false;
  if (strict && !s.is_strict) return false;
  if (top && !s.is_top) return false;
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

const filtered = samples.filter(matches);

// 정렬: score 내림차순, 동률 시 strict 우선, 그 다음 source
filtered.sort((a, b) => {
  if (b.is_top !== a.is_top) return b.is_top ? 1 : -1;
  if (b.is_strict !== a.is_strict) return b.is_strict ? 1 : -1;
  return (b.score ?? 0) - (a.score ?? 0);
});

const limited = filtered.slice(0, limit);

// 통계
const stats = {
  total_matches: filtered.length,
  shown: limited.length,
  premium: filtered.filter(s => s.is_premium).length,
  strict: filtered.filter(s => s.is_strict).length,
  top_9: filtered.filter(s => s.is_top).length,
  by_unit: {},
  by_source: {},
};
for (const s of filtered) {
  stats.by_unit[s.unit] = (stats.by_unit[s.unit] || 0) + 1;
  stats.by_source[s.source] = (stats.by_source[s.source] || 0) + 1;
}

// 출력
function formatInsights(arr) {
  return arr.map(it => `${it.type}(${it.depth})`).join('·');
}

function truncate(s, n) {
  if (!s) return '';
  return s.length <= n ? s : s.slice(0, n - 1) + '…';
}

if (statsOnly) {
  console.log(`총 매칭: ${stats.total_matches}`);
  console.log(`  ★ 5 최상위: ${stats.premium}`);
  console.log(`  strict: ${stats.strict}`);
  console.log(`  9.00 TOP: ${stats.top_9}`);
  console.log(`  단원별: ${JSON.stringify(stats.by_unit)}`);
  console.log(`  출처별: ${JSON.stringify(stats.by_source)}`);
  process.exit(0);
}

if (format === 'json') {
  console.log(JSON.stringify({ stats, samples: limited }, null, 2));
} else if (format === 'md') {
  console.log(`# 검색 결과: ${stats.total_matches}문 (표시 ${stats.shown})`);
  console.log('');
  console.log(`★ 5 최상위 ${stats.premium} · strict ${stats.strict} · 9.00 TOP ${stats.top_9}`);
  console.log('');
  console.log('| id | 출처 | 단원 | 통찰 | score | 등급 | 발문 |');
  console.log('|---|---|---|---|--:|---|---|');
  for (const s of limited) {
    console.log(`| ${s.id} | ${s.source ?? ''} | ${s.unit ?? ''} | ${formatInsights(s.insights)} | ${s.score ?? ''} | ${s.grade_label ?? ''} | ${truncate(s.발문요지, 60)} |`);
  }
} else {
  // table
  console.log(`총 매칭: ${stats.total_matches}문 (표시 ${stats.shown}). ★ 5 최상위 ${stats.premium} · strict ${stats.strict} · 9.00 TOP ${stats.top_9}`);
  console.log('단원별: ', stats.by_unit, '출처별:', stats.by_source);
  console.log('');
  const w = { id: 22, source: 10, unit: 10, score: 6, count: 5, max: 3, insights: 26, 발문: 48 };
  function pad(s, n) { s = String(s ?? ''); return s.length >= n ? s.slice(0, n - 1) + '…' : s + ' '.repeat(n - s.length); }
  console.log(`${pad('id', w.id)} ${pad('출처', w.source)} ${pad('단원', w.unit)} ${pad('통찰', w.insights)} ${pad('cnt', w.count)} ${pad('max', w.max)} ${pad('score', w.score)} 발문`);
  console.log('-'.repeat(w.id + w.source + w.unit + w.insights + w.count + w.max + w.score + w.발문 + 7));
  for (const s of limited) {
    console.log(`${pad(s.id, w.id)} ${pad(s.source, w.source)} ${pad(s.unit, w.unit)} ${pad(formatInsights(s.insights), w.insights)} ${pad(s.insight_count, w.count)} ${pad(s.max_depth, w.max)} ${pad((s.score ?? '').toString(), w.score)} ${truncate(s.발문요지, w.발문)}`);
  }
}
