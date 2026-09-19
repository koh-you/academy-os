#!/usr/bin/env node
// scripts/daily-report.mjs
//
// 일일 모니터링 보고서 — 신규 OUT-* · 앵커 변화 · 매핑 정합성 · 단원 풀 상태
// 출력: data/daily-report-YYYY-MM-DD.md (+ console summary)

import { readFile, readdir, writeFile, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const ANCHORS_DIR = join(PROJECT_ROOT, 'bank', 'anchors');
const DATA_DIR = join(PROJECT_ROOT, 'data');
const OUTPUT_DIR = join(PROJECT_ROOT, 'output');

const UNIT_NAMES = {
  'CM1-PL': '다항식', 'CM1-EQ': '방정식과 부등식',
  'CM1-CB': '경우의 수', 'CM1-MX': '행렬',
  'CM2-GM': '도형의 방정식', 'CM2-ST': '집합과 명제',
  'CM2-FN': '함수', 'CM2-RF': '유리·무리함수'
};

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try { return yaml.load(m[1]); } catch (e) { return null; }
}

async function loadSnapshot() {
  const path = join(DATA_DIR, 'daily-snapshot.json');
  try { return JSON.parse(await readFile(path, 'utf-8')); }
  catch { return null; }
}

async function saveSnapshot(s) {
  const path = join(DATA_DIR, 'daily-snapshot.json');
  await writeFile(path, JSON.stringify(s, null, 2), 'utf-8');
}

async function scanBank() {
  const files = (await readdir(BANK_DIR)).filter(f => f.endsWith('.md'));
  const stats = {
    total: files.length, di: 0, out: 0, other: 0,
    byUnit: {}, byStar: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    outIds: []
  };
  for (const f of files) {
    const fm = parseFrontmatter(await readFile(join(BANK_DIR, f), 'utf-8'));
    if (!fm) continue;
    if (f.startsWith('DI-')) stats.di++;
    else if (f.startsWith('OUT-')) { stats.out++; stats.outIds.push(fm.id); }
    else stats.other++;

    const unit = fm.unit || '?';
    stats.byUnit[unit] = (stats.byUnit[unit] || 0) + 1;
    const ext = (fm.external_labels && fm.external_labels[0]) || {};
    const star = ext.cohort_normalized_star || fm.dot_star;
    if (star) stats.byStar[star]++;
  }
  return stats;
}

async function scanAnchors() {
  const anchorsByUnit = {};
  for (const unit of Object.keys(UNIT_NAMES)) {
    const path = join(ANCHORS_DIR, `${unit}.md`);
    let md;
    try { md = await readFile(path, 'utf-8'); } catch { anchorsByUnit[unit] = 0; continue; }
    let count = 0;
    for (const s of [1, 2, 3, 4, 5]) {
      const m = md.match(new RegExp(`## ★${s} 앵커 \\((\\d+)문\\)`));
      if (m) count += parseInt(m[1]);
    }
    anchorsByUnit[unit] = count;
  }
  return anchorsByUnit;
}

async function scanBookYamls() {
  const yamls = [];
  async function walk(d) {
    let entries;
    try { entries = await readdir(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const fp = join(d, e.name);
      if (e.isDirectory()) await walk(fp);
      else if (e.name.endsWith('.book.yaml')) {
        try {
          const txt = await readFile(fp, 'utf-8');
          const book = yaml.load(txt);
          yamls.push({ path: fp, ...book });
        } catch (e) {}
      }
    }
  }
  await walk(OUTPUT_DIR);
  return yamls;
}

async function loadMappingDict() {
  try {
    const dict = JSON.parse(await readFile(join(PROJECT_ROOT, 'scripts', 'typename-to-tcode.json'), 'utf-8'));
    return Object.keys(dict).length;
  } catch { return 0; }
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  console.log(`===== daily-report.mjs v0.1 (${today}) =====`);

  const prev = await loadSnapshot();
  const [bank, anchors, books, mapSize] = await Promise.all([
    scanBank(), scanAnchors(), scanBookYamls(), loadMappingDict()
  ]);

  // Diff
  const diff = {
    bankDelta: prev ? bank.total - prev.bank.total : null,
    outDelta: prev ? bank.out - prev.bank.out : null,
    anchorsDelta: prev ? Object.values(anchors).reduce((a, b) => a + b, 0) - Object.values(prev.anchors).reduce((a, b) => a + b, 0) : null,
    newOutIds: prev ? bank.outIds.filter(id => !prev.bank.outIds.includes(id)) : [],
    mapDelta: prev ? mapSize - prev.mapSize : null,
    booksDelta: prev ? books.length - prev.books : null,
  };

  // Console summary
  console.log('');
  console.log(`Bank 등록:    ${bank.total} (Δ ${diff.bankDelta ?? '-'})`);
  console.log(`  DI-*:       ${bank.di}`);
  console.log(`  OUT-*:      ${bank.out} (Δ ${diff.outDelta ?? '-'})`);
  console.log(`앵커 합계:    ${Object.values(anchors).reduce((a, b) => a + b, 0)}/200 (Δ ${diff.anchorsDelta ?? '-'})`);
  console.log(`book.yaml:    ${books.length} (Δ ${diff.booksDelta ?? '-'})`);
  console.log(`매핑 사전:    ${mapSize} entries (Δ ${diff.mapDelta ?? '-'})`);
  if (diff.newOutIds.length > 0) {
    console.log(`\n신규 OUT-* (${diff.newOutIds.length}):`);
    diff.newOutIds.slice(0, 10).forEach(id => console.log(`  + ${id}`));
    if (diff.newOutIds.length > 10) console.log(`  ... ${diff.newOutIds.length - 10} more`);
  }

  // Markdown report
  const lines = [];
  lines.push(`# 일일 보고서 — ${today}`);
  lines.push('');
  lines.push(`> 자동 생성 (\`scripts/daily-report.mjs\` v0.1). 이전 스냅샷과의 차이 기록.`);
  lines.push('');
  lines.push('## 1. 시스템 개요');
  lines.push('');
  lines.push('| 항목 | 현재 | 변화 |');
  lines.push('|---|---:|---:|');
  lines.push(`| Bank 총 등록 | ${bank.total} | ${diff.bankDelta != null ? (diff.bankDelta >= 0 ? `+${diff.bankDelta}` : diff.bankDelta) : '-'} |`);
  lines.push(`| DI-* | ${bank.di} | - |`);
  lines.push(`| OUT-* | ${bank.out} | ${diff.outDelta != null ? (diff.outDelta >= 0 ? `+${diff.outDelta}` : diff.outDelta) : '-'} |`);
  lines.push(`| 앵커 합계 | ${Object.values(anchors).reduce((a, b) => a + b, 0)}/200 | ${diff.anchorsDelta != null ? (diff.anchorsDelta >= 0 ? `+${diff.anchorsDelta}` : diff.anchorsDelta) : '-'} |`);
  lines.push(`| book.yaml 등록 | ${books.length} | ${diff.booksDelta != null ? (diff.booksDelta >= 0 ? `+${diff.booksDelta}` : diff.booksDelta) : '-'} |`);
  lines.push(`| 매핑 사전 entries | ${mapSize} | ${diff.mapDelta != null ? (diff.mapDelta >= 0 ? `+${diff.mapDelta}` : diff.mapDelta) : '-'} |`);
  lines.push('');
  lines.push('## 2. 단원별 풀 상태');
  lines.push('');
  lines.push('| 단원 | 등록 문항 | 앵커 (25 기준) | 상태 |');
  lines.push('|---|---:|---:|---|');
  for (const unit of Object.keys(UNIT_NAMES)) {
    const pool = bank.byUnit[unit] || 0;
    const a = anchors[unit] || 0;
    const status = a === 25 ? '✅ 완전' : (a >= 20 ? '⚠ 보충 권장' : '🔴 부족');
    lines.push(`| ${unit} (${UNIT_NAMES[unit]}) | ${pool} | ${a}/25 | ${status} |`);
  }
  lines.push('');
  if (diff.newOutIds.length > 0) {
    lines.push('## 3. 신규 OUT-* 추가');
    lines.push('');
    diff.newOutIds.forEach(id => lines.push(`- ${id}`));
    lines.push('');
  }
  lines.push('## 4. 권장 액션');
  lines.push('');
  const lowAnchor = Object.entries(anchors).filter(([u, n]) => n < 20).map(([u]) => u);
  if (lowAnchor.length > 0) {
    lines.push(`- 앵커 보충 필요 단원: ${lowAnchor.join(', ')}`);
  }
  const emptyUnits = Object.entries(bank.byUnit).filter(([u, n]) => n < 10 && Object.keys(UNIT_NAMES).includes(u));
  if (emptyUnits.length > 0) {
    lines.push(`- 풀 빈약 단원 (< 10 문): ${emptyUnits.map(([u, n]) => `${u}(${n})`).join(', ')}`);
  }
  if (diff.newOutIds.length === 0) {
    lines.push('- 오늘 신규 OUT-* 없음 — \`extract-tex-to-bank.mjs\` 실행 확인');
  }
  if (lines[lines.length - 2] === '## 4. 권장 액션' || lines.slice(-3).filter(l => l.startsWith('- ')).length === 0) {
    lines.push('- 시스템 정상 상태. 특이 사항 없음.');
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## 자동 갱신 명령');
  lines.push('');
  lines.push('```bash');
  lines.push('node scripts/daily-report.mjs       # 일일 보고서 갱신 (스냅샷 비교)');
  lines.push('node scripts/refresh-all.mjs        # 5종 갱신');
  lines.push('```');
  lines.push('');

  const reportPath = join(DATA_DIR, `daily-report-${today}.md`);
  await writeFile(reportPath, lines.join('\n'), 'utf-8');
  console.log(`\nReport saved: ${reportPath}`);

  // Save snapshot
  await saveSnapshot({
    timestamp: new Date().toISOString(),
    date: today,
    bank: { total: bank.total, di: bank.di, out: bank.out, outIds: bank.outIds },
    anchors, books: books.length, mapSize
  });
  console.log('Snapshot saved: data/daily-snapshot.json');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
