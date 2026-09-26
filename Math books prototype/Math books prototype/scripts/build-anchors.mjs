#!/usr/bin/env node
// scripts/build-anchors.mjs
//
// bank/problems/*.md → bank/anchors/{과목}-{단원}.md 자동 생성
// 각 단원·★ 별 frequency=3 + 정답률 50% 부근(변별력) 우선 5문항씩 = 25문항/단원

import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const ANCHORS_DIR = join(PROJECT_ROOT, 'bank', 'anchors');

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try { return yaml.load(m[1]); } catch (e) { return null; }
}

async function main() {
  await mkdir(ANCHORS_DIR, { recursive: true });
  const files = (await readdir(BANK_DIR)).filter(f => f.endsWith('.md'));
  console.log(`Scanning ${files.length} files`);

  // 단원·★별 그룹화
  const byUnitStar = {};
  for (const f of files) {
    const fm = parseFrontmatter(await readFile(join(BANK_DIR, f), 'utf-8'));
    if (!fm || !fm.unit) continue;
    const ext = (fm.external_labels && fm.external_labels[0]) || {};
    const star = ext.cohort_normalized_star || fm.dot_star;
    if (!star) continue;
    const key = `${fm.unit}|${star}`;
    if (!byUnitStar[key]) byUnitStar[key] = [];
    byUnitStar[key].push({
      id: fm.id, type: fm.type, star, rate: ext.actual_correct_rate,
      freq: fm.frequency, status: fm.status,
      typeName: fm.type_in_source || ''
    });
  }

  // 각 그룹에서 앵커 5문 선정: frequency=3 + 정답률 50% 부근 우선
  const anchorsByUnit = {};
  for (const [key, candidates] of Object.entries(byUnitStar)) {
    const [unit, star] = key.split('|');
    candidates.sort((a, b) => {
      const fa = a.freq || 0, fb = b.freq || 0;
      if (fa !== fb) return fb - fa;
      const distA = a.rate != null ? Math.abs(a.rate - 0.5) : 1;
      const distB = b.rate != null ? Math.abs(b.rate - 0.5) : 1;
      return distA - distB;
    });
    if (!anchorsByUnit[unit]) anchorsByUnit[unit] = {};
    anchorsByUnit[unit][star] = candidates.slice(0, 5);
  }

  // 단원별 앵커 파일 생성
  let totalAnchors = 0;
  for (const [unit, byStar] of Object.entries(anchorsByUnit)) {
    let md = `# ${unit} — 앵커 풀 (자동 생성)\n\n`;
    md += `> 생성일: 2026-06-15 (build-anchors.mjs v0.1)\n`;
    md += `> 출처: bank/problems/*.md 중 \`unit=${unit}\` + ★ 별 상위 5문 (frequency=3 + 정답률 50% 부근 우선)\n`;
    md += `> 목적: schema §4 앵커 비교 규약의 단원당 ★ 1~5 × 5문 = 25문 표준 풀\n\n---\n\n`;
    md += `## 단원 ${unit} 앵커 보유 현황\n\n`;
    md += `| ★ | 보유 수 / 목표 5 | 평균 정답률 |\n|---|---:|---:|\n`;
    for (const s of [1, 2, 3, 4, 5]) {
      const pool = byStar[s] || [];
      const avgRate = pool.length > 0 && pool.some(p=>p.rate!=null)
        ? (pool.filter(p=>p.rate!=null).reduce((a,b)=>a+b.rate,0) / pool.filter(p=>p.rate!=null).length)
        : null;
      const rateStr = avgRate != null ? `${(avgRate*100).toFixed(0)}%` : '—';
      md += `| ★${s} | ${pool.length}/5 | ${rateStr} |\n`;
      totalAnchors += pool.length;
    }
    md += `\n---\n\n`;

    for (const s of [1, 2, 3, 4, 5]) {
      const pool = byStar[s] || [];
      md += `## ★${s} 앵커 (${pool.length}문)\n\n`;
      if (pool.length === 0) {
        md += `*(해당 ★ 후보 없음 — 마스터 직접 등록 필요)*\n\n`;
        continue;
      }
      md += `| 순위 | ID | T-code | 정답률 | freq | status | 유형명 |\n`;
      md += `|---:|---|---|---:|---:|---|---|\n`;
      pool.forEach((p, i) => {
        const rate = p.rate != null ? `${(p.rate*100).toFixed(0)}%` : '—';
        const tn = p.typeName.substring(0, 40);
        md += `| A${(i+1).toString().padStart(2,'0')} | ${p.id} | ${p.type} | ${rate} | ${p.freq||'-'} | ${p.status} | ${tn} |\n`;
      });
      md += `\n`;
    }

    md += `---\n\n## 변경 이력\n\n- 2026-06-15 v0.1 — 자동 생성. build-anchors.mjs.\n`;

    const outPath = join(ANCHORS_DIR, `${unit}.md`);
    await writeFile(outPath, md, 'utf-8');
  }

  console.log('');
  console.log('===== Build Summary =====');
  console.log(`Total anchors: ${totalAnchors}`);
  console.log(`Units: ${Object.keys(anchorsByUnit).length}`);
  console.log(`Files written: bank/anchors/`);
  for (const [unit, byStar] of Object.entries(anchorsByUnit)) {
    const counts = [1,2,3,4,5].map(s => (byStar[s] || []).length);
    console.log(`  ${unit}: ★1=${counts[0]} ★2=${counts[1]} ★3=${counts[2]} ★4=${counts[3]} ★5=${counts[4]} (총 ${counts.reduce((a,b)=>a+b,0)})`);
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
