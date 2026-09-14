#!/usr/bin/env node
// scripts/normalize-deepinsight-cohort.mjs
//
// data/deepinsight-raw.json → data/deepinsight-normalized.json
// cohort_unit별로 mean/std 산정 → 각 문항 z-score → 상대 ★ 매핑 (schema §10.6)

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const INPUT = join(PROJECT_ROOT, 'data', 'deepinsight-raw.json');
const OUTPUT = join(PROJECT_ROOT, 'data', 'deepinsight-normalized.json');

// schema §10.6 z-score → 상대 ★ 매핑
function zToStar(z) {
  if (z > 1.0) return 1;        // 상위 16% (쉬움)
  if (z > 0.3) return 2;
  if (z >= -0.3) return 3;       // 평균 부근
  if (z >= -1.0) return 4;
  return 5;                      // 하위 16% (어려움)
}

function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function stddev(arr, m) {
  return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length);
}

async function main() {
  const raw = JSON.parse(await readFile(INPUT, 'utf-8'));
  console.log(`Loaded ${raw.length} problems from ${INPUT}`);

  // group by file (= cohort_unit)
  const cohorts = {};
  for (const p of raw) {
    if (p.correct_rate == null) continue;
    if (!cohorts[p.file]) cohorts[p.file] = [];
    cohorts[p.file].push(p);
  }

  const normalized = [];
  console.log('');
  console.log('===== Cohort Statistics =====');

  for (const [cohortUnit, problems] of Object.entries(cohorts)) {
    const rates = problems.map(p => p.correct_rate);
    const m = mean(rates);
    const s = stddev(rates, m);
    const min = Math.min(...rates);
    const max = Math.max(...rates);

    console.log(`\nCohort: ${cohortUnit}`);
    console.log(`  n=${problems.length}, mean=${(m * 100).toFixed(1)}%, std=${(s * 100).toFixed(1)}%`);
    console.log(`  range: ${(min * 100).toFixed(0)}% ~ ${(max * 100).toFixed(0)}%`);

    const starCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const p of problems) {
      const z = (p.correct_rate - m) / s;
      const star = zToStar(z);
      starCounts[star]++;
      normalized.push({
        ...p,
        cohort_unit: cohortUnit,
        cohort_mean: m,
        cohort_std: s,
        relative_difficulty_z: Math.round(z * 1000) / 1000,
        cohort_normalized_star: star
      });
    }

    console.log(`  ★ distribution: ★1=${starCounts[1]} / ★2=${starCounts[2]} / ★3=${starCounts[3]} / ★4=${starCounts[4]} / ★5=${starCounts[5]}`);
  }

  await writeFile(OUTPUT, JSON.stringify(normalized, null, 2), 'utf-8');
  console.log('');
  console.log(`Wrote ${normalized.length} normalized problems to ${OUTPUT}`);
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
