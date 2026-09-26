#!/usr/bin/env node
// scripts/anchor-compare.mjs
//
// 사용:
//   node scripts/anchor-compare.mjs --unit CM1-EQ --star 4 --scores '{"C":2,"S":3,"D":3,"K":1,"A":2,"T":2}'
//   node scripts/anchor-compare.mjs --file bank/problems/CM1-EQ-027.md
//
// 신규 문제의 단원·★·점수를 같은 단원·같은 ★ 앵커 5문항과 비교 → 각 축 +1/0/-1 보고.
// schema §4 앵커 비교 규약 자동화.

import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const ANCHORS_DIR = join(PROJECT_ROOT, 'bank', 'anchors');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try { return yaml.load(m[1]); } catch (e) { return null; }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--unit') opts.unit = args[++i];
    else if (args[i] === '--star') opts.star = parseInt(args[++i]);
    else if (args[i] === '--scores') opts.scores = JSON.parse(args[++i]);
    else if (args[i] === '--file') opts.file = args[++i];
    else if (args[i] === '--help') {
      console.log(`Usage:
  node scripts/anchor-compare.mjs --unit CM1-EQ --star 4 --scores '{"C":2,"S":3,"D":3,"K":1,"A":2,"T":2}'
  node scripts/anchor-compare.mjs --file bank/problems/X.md`);
      process.exit(0);
    }
  }
  return opts;
}

async function extractAnchorIds(unit, star) {
  const anchorPath = join(ANCHORS_DIR, `${unit}.md`);
  let anchorMd;
  try { anchorMd = await readFile(anchorPath, 'utf-8'); }
  catch (e) { return []; }

  const sectionRE = new RegExp(`## ★${star} 앵커.*?(?=\\n## |\\n---)`, 's');
  const m = anchorMd.match(sectionRE);
  if (!m) return [];

  const rowRE = /\| A\d+ \| ([^\s|]+) \| ([^|]+?) \|/g;
  const anchors = [];
  let r;
  while ((r = rowRE.exec(m[0])) !== null) {
    anchors.push({ id: r[1].trim(), tcode: r[2].trim() });
  }
  return anchors;
}

async function loadProblemScores(id) {
  const path = join(BANK_DIR, `${id}.md`);
  let md;
  try { md = await readFile(path, 'utf-8'); } catch (e) { return null; }
  const fm = parseFrontmatter(md);
  if (!fm) return null;
  return {
    id, unit: fm.unit, type: fm.type, scores: fm.scores,
    star: (fm.external_labels && fm.external_labels[0] && fm.external_labels[0].cohort_normalized_star) || fm.dot_star,
    typeName: fm.type_in_source || ''
  };
}

function compareScores(neuw, anchorScores) {
  const axes = ['C', 'S', 'D', 'K', 'A', 'T'];
  const diff = {};
  if (!anchorScores) return null;
  for (const ax of axes) {
    const n = neuw[ax] || 0;
    const a = anchorScores[ax] || 0;
    diff[ax] = n - a;
  }
  return diff;
}

async function main() {
  const opts = parseArgs();
  let newProblem;

  if (opts.file) {
    const fm = parseFrontmatter(await readFile(opts.file, 'utf-8'));
    newProblem = {
      id: fm.id, unit: fm.unit, scores: fm.scores,
      star: (fm.external_labels && fm.external_labels[0] && fm.external_labels[0].cohort_normalized_star) || fm.dot_star
    };
  } else {
    newProblem = { id: '신규', unit: opts.unit, scores: opts.scores, star: opts.star };
  }

  console.log(`===== Anchor Compare =====`);
  console.log(`Problem: ${newProblem.id}`);
  console.log(`Unit:    ${newProblem.unit}`);
  console.log(`Star:    ★ ${newProblem.star}`);
  console.log(`Scores:  ${JSON.stringify(newProblem.scores)}`);
  const rawNew = Object.values(newProblem.scores || {}).reduce((a, b) => a + b, 0);
  console.log(`raw:     ${rawNew}`);
  console.log('');

  const anchors = await extractAnchorIds(newProblem.unit, newProblem.star);
  if (anchors.length === 0) {
    console.log(`*(${newProblem.unit} ★ ${newProblem.star} 앵커 없음 — bank/anchors/${newProblem.unit}.md 보충 권장)*`);
    process.exit(0);
  }

  console.log(`Anchors (${anchors.length}):`);
  let validCount = 0, validRawSum = 0;
  for (const a of anchors) {
    const detail = await loadProblemScores(a.id);
    if (!detail) {
      console.log(`  ${a.id}: (not found)`);
      continue;
    }
    if (newProblem.scores && detail.scores) {
      const diff = compareScores(newProblem.scores, detail.scores);
      const rawA = Object.values(detail.scores).reduce((a, b) => a + b, 0);
      validCount++;
      validRawSum += rawA;
      const diffStr = Object.entries(diff).map(([k, v]) => `${k}:${v >= 0 ? '+' : ''}${v}`).join(' ');
      const raw_diff = rawNew - rawA;
      const flag = Math.abs(raw_diff) <= 2 ? '✓' : (raw_diff > 2 ? '⚠ raw too high' : '⚠ raw too low');
      console.log(`  ${a.id} (raw ${rawA}): ${diffStr} | raw Δ ${raw_diff >= 0 ? '+' : ''}${raw_diff} ${flag}`);
    } else if (detail.star) {
      // v0.2 fallback: scores 없을 때 ★ 비교
      const starDiff = (newProblem.star || 0) - detail.star;
      const flag = Math.abs(starDiff) <= 1 ? '✓' : '⚠ ★ 차이 큼';
      console.log(`  ${a.id} (★ ${detail.star}, ${detail.type}): fallback ★ Δ ${starDiff >= 0 ? '+' : ''}${starDiff} ${flag} — type=${detail.type}, 유형=${detail.typeName.substring(0, 25)}`);
    } else {
      console.log(`  ${a.id} (${detail.type}): scores·★ 모두 없음`);
    }
  }
  if (validCount > 0) {
    const avgRaw = validRawSum / validCount;
    console.log('');
    console.log(`Anchor raw 평균: ${avgRaw.toFixed(1)}`);
    console.log(`신규 raw vs 평균: ${(rawNew - avgRaw).toFixed(1)} ${Math.abs(rawNew - avgRaw) <= 2 ? '✓ 정합' : '⚠ ±2 초과'}`);
  } else {
    console.log('');
    console.log('*(scores 보유 앵커 없음 — fallback ★ 비교로 진행. OUT-* scores 보충 시 정밀 비교 가능)*');
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
