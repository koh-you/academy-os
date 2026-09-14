#!/usr/bin/env node
// 자산 풀 시험범위 + T-code 필터 — v3.0 게이트 G2
// 2026-06-25 마스터 확립 — "자산을 활용하는 메커니즘"
//
// bank/problems/*.md를 시험범위 yaml + T-code 카탈로그로 필터링하여
// data/series/{시리즈}-scope-pool.json 생성. 출제 시 본 풀에서만 셀렉.
//
// 사용법:
//   node scripts/exam-scope-filter.mjs <scope.yaml>

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/exam-scope-filter.mjs <scope.yaml>');
  process.exit(2);
}

const scopeFile = args[0];
if (!fs.existsSync(scopeFile)) {
  console.error(`⚠️  시험범위 파일 없음: ${scopeFile}`);
  process.exit(2);
}

const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..');
const problemsDir = path.join(projectRoot, 'bank', 'problems');

// 시험범위에서 허용 단원 추출
const scopeText = fs.readFileSync(scopeFile, 'utf8');
const allowedUnits = new Set();
const lines = scopeText.split(/\r?\n/);
let inAllowed = false;
for (const line of lines) {
  if (/^allowed_sections\s*:/.test(line)) { inAllowed = true; continue; }
  if (inAllowed && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) inAllowed = false;
  if (inAllowed) {
    const m = line.match(/unit:\s*(CM[12]-[A-Z]+)/);
    if (m) allowedUnits.add(m[1]);
  }
}

console.log(`📋 시험범위 허용 단원: ${[...allowedUnits].join(', ')}`);

if (!fs.existsSync(problemsDir)) {
  console.error(`⚠️  bank/problems 디렉토리 없음 — 자산 풀 비어 있음`);
  process.exit(1);
}

const allFiles = fs.readdirSync(problemsDir).filter(f => f.endsWith('.md'));
console.log(`📊 자산 전체: ${allFiles.length}문\n`);

// 각 문제 yaml frontmatter 파싱 → 단원·T-code·★ 추출
const pool = [];
const unitDist = {};
const typeDist = {};
let untypedCount = 0;

for (const f of allFiles) {
  const fp = path.join(problemsDir, f);
  const content = fs.readFileSync(fp, 'utf8');
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];

  const unitMatch = fm.match(/^unit:\s*(CM[12]-[A-Z]+)/m);
  const typeIdMatch = fm.match(/^type_id:\s*(\S+)/m);
  const starMatch = fm.match(/^(?:effective_star|star):\s*(\d+)/m);

  if (!unitMatch) continue;
  const unit = unitMatch[1];
  if (!allowedUnits.has(unit)) continue;

  const item = {
    id: f.replace('.md', ''),
    unit,
    type_id: typeIdMatch ? typeIdMatch[1] : null,
    star: starMatch ? parseInt(starMatch[1]) : null,
  };
  pool.push(item);

  unitDist[unit] = (unitDist[unit] || 0) + 1;
  if (item.type_id) typeDist[item.type_id] = (typeDist[item.type_id] || 0) + 1;
  else untypedCount++;
}

console.log(`✅ 시험범위 안 자산: ${pool.length}문`);
console.log('   단원 분포:');
for (const [unit, count] of Object.entries(unitDist)) {
  console.log(`     ${unit}: ${count}문`);
}
console.log(`   type_id 라벨 슬롯: ${pool.length - untypedCount}/${pool.length}`);
if (untypedCount > 0) {
  console.log(`   🟡 type_id 미라벨 ${untypedCount}문 — 점진 라벨링 필요 (Explore 에이전트 권장)`);
}

// 저장
const seriesName = path.basename(scopeFile, '.yaml');
const outDir = path.join(projectRoot, 'data', 'series');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `${seriesName}-scope-pool.json`);
fs.writeFileSync(outFile, JSON.stringify({
  scope_file: path.basename(scopeFile),
  allowed_units: [...allowedUnits],
  pool_size: pool.length,
  unit_dist: unitDist,
  type_dist: typeDist,
  untyped_count: untypedCount,
  pool,
}, null, 2));

console.log(`\n✅ ${outFile} 저장`);
console.log('\n=== 단일 출처 ===');
console.log('bank/출제메커니즘-v3.0.md §1 축 C (자산 풀 인덱싱·필터링)');
