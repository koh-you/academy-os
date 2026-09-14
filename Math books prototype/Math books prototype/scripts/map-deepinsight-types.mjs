#!/usr/bin/env node
// scripts/map-deepinsight-types.mjs
//
// data/deepinsight-normalized.json + scripts/typename-to-tcode.json
//   → data/deepinsight-mapped.json + data/deepinsight-unmapped.json
//
// 유형명 → 우리 통합 T-code 매핑. unmapped는 마스터 검토 후 사전 확장.

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const INPUT = join(PROJECT_ROOT, 'data', 'deepinsight-normalized.json');
const DICT = join(PROJECT_ROOT, 'scripts', 'typename-to-tcode.json');
const OUTPUT = join(PROJECT_ROOT, 'data', 'deepinsight-mapped.json');
const UNMAPPED = join(PROJECT_ROOT, 'data', 'deepinsight-unmapped.json');
const EXCLUDED = join(PROJECT_ROOT, 'data', 'deepinsight-excluded.json');

async function main() {
  const normalized = JSON.parse(await readFile(INPUT, 'utf-8'));
  const dictRaw = JSON.parse(await readFile(DICT, 'utf-8'));
  console.log(`Loaded ${normalized.length} problems and dictionary from ${DICT}`);

  // _meta, _book_aliases 키 제외하고 매핑 사전만 추출
  const dict = {};
  for (const [k, v] of Object.entries(dictRaw)) {
    if (!k.startsWith('_')) dict[k] = v;
  }
  console.log(`Dictionary has ${Object.keys(dict).length} typename mappings`);

  const mapped = [];
  const unmapped = [];
  const excluded = [];
  const unmappedCount = {};
  const excludedCount = {};

  for (const p of normalized) {
    const entry = dict[p.type_name_raw];
    if (entry) {
      if (entry.confidence === 'excluded_curriculum') {
        excluded.push({ ...p, exclusion_reason: entry.reason || 'curriculum_out' });
        excludedCount[p.type_name_raw] = (excludedCount[p.type_name_raw] || 0) + 1;
      } else {
        mapped.push({
          ...p,
          unit: entry.unit,
          tcode: entry.tcode,
          mapping_confidence: entry.confidence
        });
      }
    } else {
      unmapped.push(p);
      unmappedCount[p.type_name_raw] = (unmappedCount[p.type_name_raw] || 0) + 1;
    }
  }

  await writeFile(OUTPUT, JSON.stringify(mapped, null, 2), 'utf-8');
  await writeFile(UNMAPPED, JSON.stringify({
    summary: {
      total_normalized: normalized.length,
      mapped: mapped.length,
      excluded: excluded.length,
      unmapped: unmapped.length,
      success_rate: ((mapped.length / normalized.length) * 100).toFixed(1) + '%',
      coverage_rate_including_excluded: (((mapped.length + excluded.length) / normalized.length) * 100).toFixed(1) + '%'
    },
    unique_unmapped_typenames: Object.entries(unmappedCount)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count })),
    unmapped_problems: unmapped
  }, null, 2), 'utf-8');
  await writeFile(EXCLUDED, JSON.stringify({
    summary: {
      excluded_total: excluded.length,
      unique_excluded_types: Object.keys(excludedCount).length
    },
    by_typename: Object.entries(excludedCount)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count })),
    excluded_problems: excluded
  }, null, 2), 'utf-8');

  console.log('');
  console.log('===== Mapping Results =====');
  console.log(`Total: ${normalized.length}`);
  console.log(`Mapped:   ${mapped.length} (${((mapped.length / normalized.length) * 100).toFixed(1)}%)`);
  console.log(`Excluded: ${excluded.length} (${((excluded.length / normalized.length) * 100).toFixed(1)}%) — 2007 이전 교육과정·범위 외`);
  console.log(`Unmapped: ${unmapped.length} (${((unmapped.length / normalized.length) * 100).toFixed(1)}%, ${Object.keys(unmappedCount).length} unique typenames)`);
  console.log(`Coverage (mapped+excluded): ${(((mapped.length + excluded.length) / normalized.length) * 100).toFixed(1)}%`);
  console.log('');
  console.log('Top 10 unmapped typenames:');
  Object.entries(unmappedCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([n, c]) => console.log(`  [${c}x] ${n}`));
  console.log('');
  console.log(`Mapped:   ${OUTPUT}`);
  console.log(`Excluded: ${EXCLUDED}`);
  console.log(`Unmapped: ${UNMAPPED}`);
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
