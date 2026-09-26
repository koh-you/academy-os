#!/usr/bin/env node
// scripts/recommend-slots-by-book.mjs
//
// 사용: node scripts/recommend-slots-by-book.mjs <book.yaml>
//
// book.yaml의 subject/unit/audience/allowed_stars/distribution/total_problems를 입력으로
// bank/problems/*.md에서 필터·정렬해 맞춤 슬롯 추천 마크다운 출력.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'node:fs/promises';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const MARPLE_CATALOG_PATH = join(__dirname, 'marple-synergy-catalog.json');

let marpleCatalog = null;
async function loadMarpleCatalog() {
  if (marpleCatalog) return marpleCatalog;
  try {
    const text = await readFile(MARPLE_CATALOG_PATH, 'utf-8');
    marpleCatalog = JSON.parse(text);
  } catch (e) {
    console.warn(`(marple catalog not found: ${MARPLE_CATALOG_PATH})`);
    marpleCatalog = null;
  }
  return marpleCatalog;
}

function marpleUnitsFor(subjectUnit) {
  if (!marpleCatalog) return [];
  const codes = marpleCatalog.subject_unit_mapping[subjectUnit] || [];
  return marpleCatalog.units.filter(u => codes.includes(u.code));
}

function renderMarpleSection(subjectUnit) {
  if (!marpleCatalog) return '';
  const units = marpleUnitsFor(subjectUnit);
  if (units.length === 0) {
    return `\n## 마플시너지 본거지 풀 (옵션 C)\n\n*(${subjectUnit} 단원에 매칭되는 마플시너지 카탈로그 없음)*\n\n`;
  }
  let md = `\n## 마플시너지 본거지 풀 (옵션 C, ${marpleCatalog.version})\n\n`;
  md += `> 출처: \`bank/4점-패턴-카탈로그/03-패턴-카탈로그.md\` §9 마플시너지 카탈로그 (${marpleCatalog.totals.types} 유형 / ${marpleCatalog.totals.problems}문). ★ 3·4 default 깊이 1·2 풀.\n\n`;
  for (const u of units) {
    md += `### ${u.section} ${u.code} ${u.name} (${u.total_types} 유형 / ${u.total_problems}문)\n\n`;
    if (u.audience_correction) {
      md += `> **단원 친숙도 보정**: Xᵤ = +${u.audience_correction.X_u} — ${u.audience_correction.note}\n\n`;
    }
    md += `- **★ 3·4 core slots (NORMAL·TOUGH 핵심 유형)**: ${u.core_slots_normal_tough.map(x => '`' + x + '`').join(' · ')}\n`;
    if (Object.keys(u['1x_links']).length > 0) {
      md += `- **1.x 패턴 매핑**:\n`;
      const sortedKeys = Object.keys(u['1x_links']).sort((a, b) => parseFloat(a) - parseFloat(b));
      for (const key of sortedKeys) {
        md += `  - **${key}** ← ${u['1x_links'][key].map(x => '`' + x + '`').join(', ')}\n`;
      }
    }
    if (u.homebase_for_1x) {
      md += `- **🎯 1.x 본거지 단원**:\n`;
      for (const [pat, types] of Object.entries(u.homebase_for_1x)) {
        md += `  - **${pat}**: ${types.map(x => '`' + x + '`').join(', ')}\n`;
      }
    }
    md += `\n`;
  }
  md += `### ★ 5 default 깊이 3 결합 가이드 (1.x 패턴 + 마플시너지 본거지)\n\n`;
  const homebases = marpleCatalog.homebase_1x_summary;
  md += `| 1.x 패턴 | 본거지 | 활용 유형 |\n|---|---|---|\n`;
  for (const [pat, info] of Object.entries(homebases)) {
    const homebaseDisplay = info.homebase_unit || (info.homebase_units || []).join('·');
    md += `| **${pat}** | ${homebaseDisplay} | ${info.types.map(x => '`' + x + '`').join(', ')} |\n`;
  }
  md += `\n`;
  return md;
}

async function processOne(bookYamlPath, options = {}) {
  await loadMarpleCatalog();
  const bookText = await readFile(resolve(bookYamlPath), 'utf-8');
  const book = yaml.load(bookText);
  return await processBook(book, bookYamlPath, options);
}

async function processBook(book, bookYamlPath, options = {}) {
  const withMarple = options.withMarple !== false;

  const subject = book.subject;   // CM1 or CM2
  const unitCode = book.unit;     // PL/EQ/CB/MX/GM/ST/FN/RF
  const fullUnit = `${subject}-${unitCode}`;
  const audience = book.audience || '미정';
  const allowedStars = book.allowed_stars || [1, 2, 3, 4, 5];
  const distribution = book.distribution || {};
  const total = book.total_problems || 60;

  console.log(`Book: ${book.title || basename(bookYamlPath)}`);
  console.log(`  Unit:     ${fullUnit}`);
  console.log(`  Audience: ${audience}`);
  console.log(`  ★ range:  ${JSON.stringify(allowedStars)}`);
  console.log(`  Distribution: ${JSON.stringify(distribution)}`);
  console.log(`  Total:    ${total}`);

  // bank/problems 전체 스캔 → 단원 일치 + ★ 일치 필터
  const files = (await readdir(BANK_DIR)).filter(f => f.endsWith('.md'));
  const candidates = [];
  for (const f of files) {
    const fm = parseFrontmatter(await readFile(join(BANK_DIR, f), 'utf-8'));
    if (!fm || fm.unit !== fullUnit) continue;
    const ext = (fm.external_labels && fm.external_labels[0]) || {};
    const star = ext.cohort_normalized_star || fm.dot_star || null;
    if (star == null || !allowedStars.includes(star)) continue;
    candidates.push({
      id: fm.id, type: fm.type, star, rate: ext.actual_correct_rate,
      frequency: fm.frequency, status: fm.status,
      type_in_source: fm.type_in_source,
      source: ext.source || fm.source_origin || 'OUT'
    });
  }

  console.log(`\nCandidates (unit=${fullUnit}, ★∈${JSON.stringify(allowedStars)}): ${candidates.length}`);

  // v0.2 정렬 순위:
  //   1) status === 'approved' (OUT-* ground truth) 우선
  //   2) frequency 내림차순 (3 > 2 > 1 > null)
  //   3) 정답률 50% 부근 우선 (변별력) — abs(rate - 0.5) 오름차순
  candidates.sort((a, b) => {
    const aApp = a.status === 'approved' ? 0 : 1;
    const bApp = b.status === 'approved' ? 0 : 1;
    if (aApp !== bApp) return aApp - bApp;
    const fa = a.frequency || 0, fb = b.frequency || 0;
    if (fa !== fb) return fb - fa;
    const distA = a.rate != null ? Math.abs(a.rate - 0.5) : 1;
    const distB = b.rate != null ? Math.abs(b.rate - 0.5) : 1;
    return distA - distB;
  });

  // 분포에 맞춰 슬롯 채움
  const slotsByStarTarget = {};
  for (const [s, pct] of Object.entries(distribution)) {
    slotsByStarTarget[s] = Math.round(total * pct / 100);
  }

  // 각 ★마다 위 정렬 순서 그대로 사용 (v0.2 — approved 우선, freq 우선, 정답률 50% 부근 우선)
  const recommended = {};
  for (const star of allowedStars) {
    const need = slotsByStarTarget[star] || Math.round(total / allowedStars.length);
    const pool = candidates.filter(c => c.star === star);
    recommended[star] = pool.slice(0, need);
  }

  // 마크다운 출력
  const outPath = resolve(bookYamlPath.replace(/\.book\.yaml$/, '.recommended-slots.md').replace(/\.yaml$/, '.recommended-slots.md'));
  let md = `# 슬롯 추천 — ${book.title || basename(bookYamlPath)}\n\n`;
  md += `> 생성일: 2026-06-15 (recommend-slots-by-book.mjs v0.1)\n`;
  md += `> 입력: \`${bookYamlPath}\`\n\n`;
  md += `## 책 설정\n\n`;
  md += `- 단원: **${fullUnit}**\n`;
  md += `- 대상층: ${audience}\n`;
  md += `- ★ 범위: ${JSON.stringify(allowedStars)}\n`;
  md += `- 분포: ${JSON.stringify(distribution)}\n`;
  md += `- 총 문항: ${total}\n\n`;
  md += `## 후보 풀\n\n`;
  md += `- bank/problems 전체 ${files.length} 중 단원·★ 일치 후보: **${candidates.length}**\n\n`;

  for (const star of allowedStars) {
    const need = slotsByStarTarget[star] || Math.round(total / allowedStars.length);
    const pool = recommended[star];
    md += `## ★${star} 추천 ${pool.length}/${need}\n\n`;
    if (pool.length === 0) {
      md += `*(해당 ★ 후보 없음)*\n\n`;
      continue;
    }
    md += `| ID | T-code | 정답률 | freq | status | 유형명 |\n`;
    md += `|---|---|---:|---:|---|---|\n`;
    for (const c of pool) {
      const rate = c.rate != null ? `${(c.rate * 100).toFixed(0)}%` : '—';
      const typeName = (c.type_in_source || '').substring(0, 30);
      md += `| ${c.id} | ${c.type} | ${rate} | ${c.frequency || '-'} | ${c.status} | ${typeName} |\n`;
    }
    md += `\n`;
  }

  if (withMarple) {
    md += renderMarpleSection(fullUnit);
  }

  await writeFile(outPath, md, 'utf-8');
  console.log(`\nRecommendation: ${outPath}`);
}

async function emitMarpleStandaloneReport(outputPath) {
  await loadMarpleCatalog();
  if (!marpleCatalog) throw new Error(`marple catalog not found at ${MARPLE_CATALOG_PATH}`);
  let md = `# 슬롯 추천 — 마플시너지 결합 (단독 보고서)\n\n`;
  md += `> 생성일: 2026-06-24 (recommend-slots-by-book.mjs v0.2 --marple-only)\n`;
  md += `> 입력: \`scripts/marple-synergy-catalog.json\` (마플시너지 ${marpleCatalog.totals.types} 유형 / ${marpleCatalog.totals.problems}문)\n\n`;
  md += `## 개요\n\n`;
  md += `이 보고서는 **book.yaml 없이** 마플시너지 카탈로그를 단독으로 출력. 각 단원의 핵심 슬롯·1.x 본거지·★ 5 결합 가이드를 한 곳에 모음. book.yaml과 함께 \`recommend-slots-by-book.mjs <book.yaml>\` 실행 시 *해당 단원만* 발췌하여 결합 출력.\n\n`;
  for (const code of Object.keys(marpleCatalog.subject_unit_mapping)) {
    md += `---\n\n# ${code}\n`;
    md += renderMarpleSection(code);
  }
  await writeFile(outputPath, md, 'utf-8');
  console.log(`\nMarple-only report: ${outputPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error(`Usage:
  node scripts/recommend-slots-by-book.mjs <book.yaml>               # 단일 책 (마플시너지 자동 결합)
  node scripts/recommend-slots-by-book.mjs <book.yaml> --no-marple   # 마플시너지 결합 끄기
  node scripts/recommend-slots-by-book.mjs --series <dir-or-glob>    # 디렉토리 내 *.book.yaml 모두
  node scripts/recommend-slots-by-book.mjs --marple-only <out.md>    # book.yaml 없이 마플시너지 단독 보고서`);
    process.exit(1);
  }

  if (args[0] === '--marple-only') {
    const outPath = resolve(args[1] || 'bank/슬롯-추천-마플시너지결합.md');
    await emitMarpleStandaloneReport(outPath);
    return;
  }

  if (args[0] === '--series') {
    const target = args[1] || 'output/';
    const dir = resolve(target);
    const allFiles = [];
    async function walkDir(d) {
      const entries = await readdir(d, { withFileTypes: true });
      for (const e of entries) {
        const fp = join(d, e.name);
        if (e.isDirectory()) await walkDir(fp);
        else if (e.name.endsWith('.book.yaml')) allFiles.push(fp);
      }
    }
    await walkDir(dir);
    console.log(`===== 시리즈 추천: ${allFiles.length}개 book.yaml =====`);
    for (const f of allFiles) {
      console.log(`\n[${f}]`);
      try { await processOne(f); }
      catch (e) { console.error(`  FAILED: ${e.message}`); }
    }
    console.log(`\n===== Done: ${allFiles.length} books processed =====`);
    return;
  }

  const withMarple = !args.includes('--no-marple');
  await processOne(args[0], { withMarple });
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
