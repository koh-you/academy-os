#!/usr/bin/env node
/**
 * align-usage-audit.mjs (v1.0 · 2026-07-23 세션 75)
 *
 * 목적 : 답지 tex 파일의 \begin{align*}·\begin{aligned} 사용 빈도 감사.
 *        와부고 스타일 S2·S6 : 좌우 병렬 우선, align은 3항 이상 & 너비 초과 시만.
 *
 * 판정:
 *   RED    · align 안에 등호 2개 이하 · 각 항 짧음 (< 20 chars) → 좌우 병렬 대체 가능
 *   YELLOW · align 안에 등호 3~4개 · 각 항 20~40 chars → 좌우 병렬 검토 권장
 *   GREEN  · align 안에 등호 5+ 개 · 각 항 40+ chars → align 정당
 *
 * 사용 :
 *   node scripts/align-usage-audit.mjs <file.tex> [<file.tex> ...]
 */
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const ALIGN_RE = /\\begin\{(align\*?|aligned)\}([\s\S]*?)\\end\{\1\}/g;

function judgeAlign(body) {
  const rows = body.split(/\\\\/).map(r => r.trim()).filter(Boolean);
  if (rows.length === 0) return { verdict: 'RED', reason: '내용 없음' };

  const rowCharCounts = rows.map(r => r.replace(/&/g, '').length);
  const maxChars = Math.max(...rowCharCounts);
  const rowCount = rows.length;

  if (rowCount <= 2 && maxChars < 40) {
    return { verdict: 'RED', reason: `${rowCount}행·최대 ${maxChars}자 · 인라인·병렬 대체 가능` };
  }
  if (rowCount <= 3 && maxChars < 30) {
    return { verdict: 'RED', reason: `${rowCount}행·최대 ${maxChars}자 · 짧은 항 나열 · 좌우 병렬 대체 강력 권장` };
  }
  if (rowCount <= 4 && maxChars < 50) {
    return { verdict: 'YELLOW', reason: `${rowCount}행·최대 ${maxChars}자 · 좌우 병렬 검토 권장` };
  }
  return { verdict: 'GREEN', reason: `${rowCount}행·최대 ${maxChars}자 · align 정당` };
}

function scanFile(file) {
  const text = readFileSync(file, 'utf-8');
  const lines = text.split('\n');
  const results = [];
  let m;
  ALIGN_RE.lastIndex = 0;
  while ((m = ALIGN_RE.exec(text)) !== null) {
    const kind = m[1];
    const body = m[2];
    const lineNo = text.slice(0, m.index).split('\n').length;
    const verdict = judgeAlign(body);
    results.push({ file: basename(file), lineNo, kind, ...verdict });
  }
  return results;
}

async function main() {
    const args = process.argv.slice(2);
  const softMode = args.includes('--soft');
  const dirIdx = args.indexOf('--dir');
  let files;
  if (dirIdx >= 0) {
    const dir = args[dirIdx + 1];
    const fs = await import('node:fs');
    const path = await import('node:path');
    files = fs.readdirSync(dir).filter(f => /\.tex$/.test(f) && !f.includes('smoke')).map(f => path.join(dir, f));
  } else {
    files = args.filter(a => !a.startsWith('--'));
  }
  if (files.length === 0) {
    console.error('Usage: node align-usage-audit.mjs <file.tex> [...]');
    process.exit(2);
  }
  let redCount = 0, yellowCount = 0, greenCount = 0;
  console.log('🔍 align 남용 감사 (v1.0 · S2·S6 정합)');
  for (const f of files) {
    const results = scanFile(f);
    if (results.length === 0) continue;
    console.log(`\n── ${basename(f)} (${results.length}건) ──`);
    for (const r of results) {
      const icon = r.verdict === 'RED' ? '🔴' : r.verdict === 'YELLOW' ? '🟡' : '✓';
      console.log(`  ${icon} L${r.lineNo} \\begin{${r.kind}} · ${r.reason}`);
      if (r.verdict === 'RED') redCount++;
      else if (r.verdict === 'YELLOW') yellowCount++;
      else greenCount++;
    }
  }
  console.log(`\n📊 요약: RED ${redCount} · YELLOW ${yellowCount} · GREEN ${greenCount}`);
  if (redCount > 0 && !softMode) process.exit(1);
}

main();
