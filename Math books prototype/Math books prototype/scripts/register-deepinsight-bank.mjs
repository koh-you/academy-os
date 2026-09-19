#!/usr/bin/env node
// scripts/register-deepinsight-bank.mjs
//
// data/deepinsight-mapped.json → bank/problems/DI-*.md 일괄 등록 (status: meta_only)

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const INPUT = join(PROJECT_ROOT, 'data', 'deepinsight-mapped.json');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');

// cohort_unit 파일명 → 코호트 토큰 (예: "260614_수능&모의 공통.pdf" → "2026M")
function cohortToken(fileName) {
  // 메인 파일 ("260614_수능&모의 공통.pdf"): 2026M
  if (!/\(\d+\)/.test(fileName)) return '2026M';
  // 분권 파일 (N): N번 파일의 연도는 파일 부제로 결정 — 현재는 N으로 대체
  const m = fileName.match(/\((\d+)\)/);
  return `F${m[1]}`;
}

// 우리 단원에 따라 CM1/CM2 접두 결정
function unitToCmPrefix(unit) {
  if (unit.startsWith('CM1-')) return 'CM1';
  if (unit.startsWith('CM2-')) return 'CM2';
  return 'UNK';
}

function buildYaml(p, idx) {
  const cohort = cohortToken(p.cohort_unit);
  const id = `DI-${cohort}-${String(idx).padStart(3, '0')}`;

  const externalLabel = {
    source: '깊이와통찰 수능모의 공통 변형',
    cohort_type: 'academy_internal',
    cohort_unit: p.cohort_unit,
    label_star: null,
    actual_correct_rate: p.correct_rate,
    correct_rate_source: '깊이와통찰 학원 자체',
    correct_rate_sample_n: null,
    relative_difficulty_z: p.relative_difficulty_z,
    cohort_normalized_star: p.cohort_normalized_star
  };

  if (p.exam_year != null) {
    externalLabel.exam_year = p.exam_year;
    externalLabel.exam_session = p.exam_month ? `${p.exam_month}월학평` : null;
    externalLabel.exam_grade = p.exam_grade;
    externalLabel.exam_number = p.exam_number;
    externalLabel.score_points = p.score_points;
  }

  if (p.similar_sources && p.similar_sources.length > 0) {
    externalLabel.similar_in_source = p.similar_sources;
  }

  const yamlObj = {
    id,
    unit: p.unit,
    type: p.tcode,
    type_in_source: p.type_name_raw,
    status: 'meta_only',
    external_labels: [externalLabel],
    frequency: null,
    grade_origin: '고1',
    created: '2026-06-14'
  };

  return { id, yaml: yaml.dump(yamlObj, { lineWidth: 200, noRefs: true }) };
}

function buildMarkdown(p, idx) {
  const { id, yaml: yamlStr } = buildYaml(p, idx);
  const md = `---\n${yamlStr}---\n\n*(status: meta_only — 본문/풀이 미등록. external_labels의 정답률·cohort 정규화 ★는 schema §10 calibration 입력으로 사용.)*\n\n**유형명 (자체)**: ${p.type_name_raw}\n\n**원 출처**: ${p.cohort_unit} / 페이지 ${p.page} / ${p.column} 컬럼 / 문항번호 ${p.problem_no}\n`;
  return { id, md };
}

async function main() {
  const mapped = JSON.parse(await readFile(INPUT, 'utf-8'));
  console.log(`Loaded ${mapped.length} mapped problems`);

  await mkdir(BANK_DIR, { recursive: true });

  // 코호트별로 일련번호 부여
  const cohortCounters = {};

  const stats = {
    total: mapped.length,
    by_unit: {},
    by_cohort: {},
    files_written: 0
  };

  for (const p of mapped) {
    const cohort = cohortToken(p.cohort_unit);
    cohortCounters[cohort] = (cohortCounters[cohort] || 0) + 1;
    const idx = cohortCounters[cohort];

    const { id, md } = buildMarkdown(p, idx);
    const path = join(BANK_DIR, `${id}.md`);
    await writeFile(path, md, 'utf-8');

    stats.by_unit[p.unit] = (stats.by_unit[p.unit] || 0) + 1;
    stats.by_cohort[cohort] = (stats.by_cohort[cohort] || 0) + 1;
    stats.files_written++;
  }

  console.log('');
  console.log('===== Registration Stats =====');
  console.log(`Files written: ${stats.files_written}`);
  console.log('');
  console.log('By cohort:');
  Object.entries(stats.by_cohort).forEach(([c, n]) => console.log(`  ${c}: ${n}`));
  console.log('');
  console.log('By unit:');
  Object.entries(stats.by_unit).forEach(([u, n]) => console.log(`  ${u}: ${n}`));
  console.log('');
  console.log(`Output dir: ${BANK_DIR}`);
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
