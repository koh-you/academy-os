#!/usr/bin/env node
// 통찰 카드 빈도 통계 자동 집계 v1.0 (2026-06-27)
// 사용:
//   node scripts/insight-frequency.mjs                       # 전체 표본 빈도 출력
//   node scripts/insight-frequency.mjs --unit CM1-EQ         # 단원 필터
//   node scripts/insight-frequency.mjs --strict              # strict 풀만
//   node scripts/insight-frequency.mjs --compare <청사진.yaml>  # 시판 평균 부합도
// 단일 출처: bank/통찰빈도-통계.md

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(scriptDir, '..');
const dataPath = path.join(REPO, 'data', 'all-premium-samples.json');

if (!fs.existsSync(dataPath)) {
  console.error(`표본 자산 없음: ${dataPath}`);
  process.exit(2);
}

const all = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const args = process.argv.slice(2);
const unitFilter = (() => {
  const i = args.indexOf('--unit');
  return i >= 0 ? args[i + 1] : null;
})();
const strictOnly = args.includes('--strict');
const topOnly = args.includes('--top');
const compareIdx = args.indexOf('--compare');
const compareFile = compareIdx >= 0 ? args[compareIdx + 1] : null;

let samples = all.samples;
if (unitFilter) samples = samples.filter((s) => s.unit === unitFilter);
if (strictOnly) samples = samples.filter((s) => s.is_strict);
if (topOnly) samples = samples.filter((s) => s.is_top);

const types = {};
const depthSum = {};
for (const s of samples) {
  if (!s.insights) continue;
  for (const ins of s.insights) {
    types[ins.type] = (types[ins.type] || 0) + 1;
    depthSum[ins.type] = (depthSum[ins.type] || 0) + ins.depth;
  }
}

const total = samples.length;

console.log(`\n=== 통찰 카드 빈도 통계 v1.0 ===`);
console.log(`표본: ${total}문${unitFilter ? ' (단원: ' + unitFilter + ')' : ''}${strictOnly ? ' (strict)' : ''}${topOnly ? ' (top9.0+)' : ''}`);
console.log(``);
console.log(`카드 | 출현 | 활성률 | 평균깊이`);
console.log(`-----|------|--------|----------`);
const sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
for (const [t, c] of sorted) {
  const rate = ((c / total) * 100).toFixed(1) + '%';
  const avgDepth = (depthSum[t] / c).toFixed(2);
  console.log(`I-${t.padEnd(4)} | ${String(c).padStart(4)} | ${rate.padStart(6)} | ${avgDepth}`);
}

// 청사진 부합도 비교
if (compareFile) {
  console.log(`\n=== 시판 평균 부합도 ===`);
  if (!fs.existsSync(compareFile)) {
    console.error(`청사진 파일 없음: ${compareFile}`);
    process.exit(2);
  }
  const yaml = fs.readFileSync(compareFile, 'utf8');
  const cardRegex = /I-([A-Z]+)/g;
  const cards = {};
  let m;
  while ((m = cardRegex.exec(yaml)) !== null) {
    cards[m[1]] = (cards[m[1]] || 0) + 1;
  }
  const totalCards = Object.values(cards).reduce((a, b) => a + b, 0);

  console.log(`청사진 총 카드: ${totalCards}`);
  console.log(`카드 | 청사진 | 시판 평균 | 차이 | 판정`);
  console.log(`-----|--------|-----------|------|------`);
  let okCount = 0;
  for (const t of Object.keys(types)) {
    const blueprint = cards[t] || 0;
    const blueprintRate = totalCards > 0 ? blueprint / totalCards : 0;
    const marketRate = types[t] / Object.values(types).reduce((a, b) => a + b, 0);
    const diff = ((blueprintRate - marketRate) * 100).toFixed(1) + '%';
    const ok = Math.abs(blueprintRate - marketRate) < 0.2;
    if (ok) okCount++;
    console.log(`I-${t.padEnd(4)} | ${String(blueprint).padStart(6)} | ${(marketRate * 100).toFixed(1).padStart(8)}% | ${diff.padStart(5)} | ${ok ? '✅' : '🟡 편차 20%↑'}`);
  }
  console.log(`\n  부합 카드: ${okCount} / ${Object.keys(types).length}`);
}

console.log(``);
process.exit(0);
