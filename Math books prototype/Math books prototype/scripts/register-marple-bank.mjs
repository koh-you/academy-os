#!/usr/bin/env node
// scripts/register-marple-bank.mjs
//
// 마플시너지 §9 카탈로그 본문을 파싱하여 bank/problems/MS-*.md 272개 자동 생성.
// 사용: node scripts/register-marple-bank.mjs
//
// 각 유형 1개 = 1 .md 파일 (status: meta_only). 본문 전사 금지 정책 준수.

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const CATALOG_PATH = join(PROJECT_ROOT, 'bank', '4점-패턴-카탈로그', '03-패턴-카탈로그.md');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const META_PATH = join(__dirname, 'marple-synergy-catalog.json');

function labelsToStar(labelsStr) {
  const labels = labelsStr.split('·').map(s => s.trim()).filter(Boolean);
  const map = { 'BASIC': 2, 'NORMAL': 3, 'TOUGH': 4 };
  const stars = labels.map(l => map[l]).filter(Boolean);
  if (stars.length === 0) return null;
  const avg = stars.reduce((a, b) => a + b, 0) / stars.length;
  return Math.round(avg);
}

function yamlList(items) {
  if (items.length === 0) return '[]';
  return '[' + items.map(s => typeof s === 'string' ? s : String(s)).join(', ') + ']';
}

async function main() {
  const meta = JSON.parse(await readFile(META_PATH, 'utf-8'));
  const catalog = await readFile(CATALOG_PATH, 'utf-8');

  const lines = catalog.split('\n');
  let currentUnitMeta = null;
  const records = [];

  const sectionPattern = /^###\s+v2\s+§9\.(\d+)\s+단원\s+(.+?)\s+\(/;
  const subsectionPattern = /^####\s+§9\.(\d+\.\d+)\s+단원\s+(.+?)\s+\(/;
  const idCellPattern = /^\*\*(MS-[A-Z0-9-]+)\s+([^*]+)\*\*$/;
  const poolCellPattern = /(\d+)문\s*\(([^)]+)\)/;

  for (const line of lines) {
    let sectionKey = null;
    const m1 = line.match(subsectionPattern);
    const m2 = line.match(sectionPattern);
    if (m1) sectionKey = `§9.${m1[1]}`;
    else if (m2) sectionKey = `§9.${m2[1]}`;

    if (sectionKey) {
      const found = meta.units.find(u => u.section === sectionKey);
      if (found) currentUnitMeta = found;
      else currentUnitMeta = null;
      continue;
    }

    if (!currentUnitMeta) continue;
    if (!line.startsWith('|')) continue;

    // split by | but treat \| as escaped pipe → temporary placeholder
    const PIPE_PLACEHOLDER = '';
    const normalized = line.replace(/\\\|/g, PIPE_PLACEHOLDER);
    const cells = normalized.split('|').map(s => s.trim().replace(new RegExp(PIPE_PLACEHOLDER, 'g'), '|'));

    while (cells.length > 0 && cells[0] === '') cells.shift();
    while (cells.length > 0 && cells[cells.length - 1] === '') cells.pop();
    if (cells.length < 5) continue;

    const idMatch = cells[0].match(idCellPattern);
    if (!idMatch) continue;

    let poolMatch = null;
    let poolCellIdx = -1;
    for (let i = cells.length - 1; i >= 0; i--) {
      const m = cells[i].match(poolCellPattern);
      if (m) { poolMatch = m; poolCellIdx = i; break; }
    }
    if (!poolMatch || poolCellIdx < 4) continue;

    const sourceUnit = cells[1];
    const labels = cells[2];
    const essence = cells.slice(3, poolCellIdx).join(' | ');

    records.push({
      id: idMatch[1].trim(),
      name: idMatch[2].trim(),
      sourceUnit: sourceUnit.trim(),
      labels: labels.trim(),
      essence: essence.trim(),
      pool: parseInt(poolMatch[1]),
      poolRange: poolMatch[2].trim(),
      unitMeta: currentUnitMeta
    });
  }

  console.log(`Parsed ${records.length} types from catalog`);

  let written = 0;
  for (const r of records) {
    const subjectUnit = r.unitMeta.subject_unit;
    const star = labelsToStar(r.labels);
    const patterns1x = Object.entries(r.unitMeta['1x_links'] || {})
      .filter(([, types]) => types.includes(r.id))
      .map(([pat]) => pat);
    const homebaseFor = Object.entries(r.unitMeta.homebase_for_1x || {})
      .filter(([, types]) => types.includes(r.id))
      .map(([key]) => key);
    const labelsArr = r.labels.split('·').map(s => s.trim()).filter(Boolean);

    const audienceCorrection = r.unitMeta.audience_correction
      ? `\n    X_u_correction: ${r.unitMeta.audience_correction.X_u}`
      : '';

    const escName = r.name.replace(/'/g, "''");
    const escEssence = r.essence.replace(/'/g, "''");
    const escSection = `${r.unitMeta.section} ${r.unitMeta.code} ${r.unitMeta.name}`.replace(/'/g, "''");

    const yamlBody = `---
id: ${r.id}
unit: ${subjectUnit}
type: ${r.id}
type_in_source: '${escName}'
status: meta_only
external_labels:
  - source: 마플시너지 공통수학1 2025
    cohort_type: book_section
    cohort_unit: STEP 1
    section_in_book: '${escSection}'
    pool_size: ${r.pool}
    pool_range: '${r.poolRange}'
    labels_in_source: ${yamlList(labelsArr)}
    cohort_normalized_star: ${star}${audienceCorrection}
patterns_1x: ${yamlList(patterns1x)}
homebase_for_1x: ${yamlList(homebaseFor.map(s => `"${s}"`))}
frequency: null
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마플시너지 STEP 1 유형 메타 카탈로그. 본문/풀이 미등록. ${r.pool}문 표본 풀: ${r.poolRange})*

**유형명 (자체)**: ${r.name}

**본질 패턴**: ${r.essence}

**원 출처**: 마플시너지 공통수학1 2025 / STEP 1 ${r.unitMeta.section} ${r.unitMeta.code} ${r.unitMeta.name} (${r.pool}문 / ${r.poolRange})
`;

    await writeFile(join(BANK_DIR, `${r.id}.md`), yamlBody, 'utf-8');
    written++;
  }
  console.log(`Wrote ${written} MS-*.md files to bank/problems/`);

  const byUnit = {};
  for (const r of records) {
    const u = r.unitMeta.subject_unit;
    byUnit[u] = (byUnit[u] || 0) + 1;
  }
  console.log('단원별 등록:');
  for (const [u, n] of Object.entries(byUnit)) console.log(`  ${u}: ${n}`);
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
