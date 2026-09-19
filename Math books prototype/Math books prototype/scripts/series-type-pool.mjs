#!/usr/bin/env node
// 시리즈 누적 T-code 분포 추적 — v3.0 게이트 G3'
// 2026-06-25 마스터 확립 — "유형 다양성 + 미사용 T-code 우선 셀렉"
//
// 청사진 .yaml들에서 type_id를 추출하여 시리즈 누적 분포를 보고.
// 미사용 또는 저빈도 T-code를 다음 회차 우선 풀로 추천.
//
// 사용법:
//   node scripts/series-type-pool.mjs <청사진디렉토리>
// 예:
//   node scripts/series-type-pool.mjs bank/슬롯청사진/

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/series-type-pool.mjs <청사진디렉토리> [시리즈명필터]');
  process.exit(2);
}

const blueprintDir = args[0];
const seriesFilter = args[1] || null;

if (!fs.existsSync(blueprintDir)) {
  console.error(`⚠️  청사진 디렉토리 없음: ${blueprintDir}`);
  process.exit(2);
}

// 카탈로그 로드 (유형 메타)
const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..');
const catalogDir = path.join(projectRoot, 'bank', '유형카탈로그');

function loadCatalogs() {
  if (!fs.existsSync(catalogDir)) return {};
  const types = {};
  for (const f of fs.readdirSync(catalogDir)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    const content = fs.readFileSync(path.join(catalogDir, f), 'utf8');
    const tcodeRe = /###\s*([A-Z]\d+):\s*([^\n]+)\n([\s\S]*?)(?=###\s*[A-Z]\d+:|---|\n##\s)/g;
    let m;
    while ((m = tcodeRe.exec(content)) !== null) {
      const block = m[3];
      const idMatch = block.match(/\*\*id\*\*:\s*`?(CM[12]-[A-Z]+-[A-Z]?\d+)`?/);
      const starMatch = block.match(/\*\*base\s*★\*\*:\s*(\d+)/);
      if (idMatch) {
        types[idMatch[1]] = {
          name: m[2].trim(),
          base_star: starMatch ? parseInt(starMatch[1]) : null,
        };
      }
    }
  }
  return types;
}

const catalog = loadCatalogs();
console.log(`📋 카탈로그 로드: ${Object.keys(catalog).length}개 T-code`);

// 청사진 .yaml 파일 모두 로드
const files = fs.readdirSync(blueprintDir)
  .filter(f => f.endsWith('.yaml'))
  .filter(f => !seriesFilter || f.includes(seriesFilter));

if (files.length === 0) {
  console.error(`⚠️  청사진 파일 없음 in ${blueprintDir}`);
  process.exit(2);
}

console.log(`📊 청사진 ${files.length}개 발견\n`);

// 각 청사진에서 type_id 추출
const usedTypes = {}; // type_id → [{file, round, slot}]
const slotsByRound = {}; // round → [type_id]

for (const file of files) {
  const fp = path.join(blueprintDir, file);
  const content = fs.readFileSync(fp, 'utf8');

  const roundMatch = content.match(/^round:\s*(\d+)/m);
  const seriesMatch = content.match(/^series:\s*(.+?)\s*$/m);
  const round = roundMatch ? parseInt(roundMatch[1]) : 0;
  const series = seriesMatch ? seriesMatch[1].trim() : path.basename(file, '.yaml');

  // slots 블록 추출 — slot + type_id 페어
  const slotRe = /-\s*slot:\s*(\d+)[\s\S]*?(?=-\s*slot:|\n##\s|$)/g;
  let sm;
  while ((sm = slotRe.exec(content)) !== null) {
    const block = sm[0];
    const slot = parseInt(sm[1]);
    const typeMatch = block.match(/type_id:\s*([A-Z]+\d?-[A-Z]+-[A-Z]?\d+)/);
    if (typeMatch) {
      const tid = typeMatch[1];
      if (!usedTypes[tid]) usedTypes[tid] = [];
      usedTypes[tid].push({ series, round, slot });
      if (!slotsByRound[`${series}#${round}`]) slotsByRound[`${series}#${round}`] = [];
      slotsByRound[`${series}#${round}`].push(tid);
    }
  }
}

// 사용 빈도 표
console.log('=== 시리즈 누적 T-code 분포 ===');
const sorted = Object.entries(usedTypes).sort((a, b) => b[1].length - a[1].length);
for (const [tid, uses] of sorted) {
  const info = catalog[tid];
  const name = info ? info.name : '(카탈로그 미등재)';
  const base = info ? `★${info.base_star}` : '★?';
  const flag = uses.length >= 5 ? '🔴 과다' : uses.length >= 3 ? '🟡 보통' : '🟢 신규풀';
  console.log(`  ${tid.padEnd(20)} ${base.padEnd(4)} ${String(uses.length).padStart(2)}회 ${flag}  ${name}`);
}

// 카탈로그 미사용 T-code (다음 회차 우선 풀)
console.log('\n=== 카탈로그 미사용 T-code (다음 회차 우선 풀) ===');
const unused = Object.keys(catalog).filter(tid => !usedTypes[tid]);
console.log(`  ${unused.length}개 미사용`);
for (const tid of unused.slice(0, 20)) {
  const info = catalog[tid];
  console.log(`    ${tid.padEnd(20)} ★${info.base_star}  ${info.name}`);
}
if (unused.length > 20) console.log(`    ... 외 ${unused.length - 20}개`);

// 회차별 다양성 점검
console.log('\n=== 회차별 T-code 다양성 ===');
for (const [round, tids] of Object.entries(slotsByRound)) {
  const unique = new Set(tids).size;
  const total = tids.length;
  const ratio = (unique / total * 100).toFixed(0);
  const flag = unique / total >= 0.7 ? '✅' : unique / total >= 0.5 ? '🟡' : '🔴';
  console.log(`  ${flag} ${round}: ${unique}/${total} 서로 다른 (${ratio}%)`);
}

console.log('\n=== 단일 출처 ===');
console.log('bank/유형카탈로그/README.md + bank/출제메커니즘-v3.0.md §1 축 B');

// data/series에 누적 풀.json 저장
const outDir = path.join(projectRoot, 'data', 'series');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'type-pool-summary.json');
fs.writeFileSync(outFile, JSON.stringify({
  catalog_size: Object.keys(catalog).length,
  used_types: Object.fromEntries(sorted.map(([tid, uses]) => [tid, uses.length])),
  unused_types: unused,
  rounds: slotsByRound,
}, null, 2));
console.log(`\n✅ ${outFile} 저장`);
