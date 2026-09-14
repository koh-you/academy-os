#!/usr/bin/env node
/**
 * connector-count-check.mjs (v1.0 · 2026-07-23 세션 75)
 *
 * 목적 : 답지 텍스트 남용 접속어 빈도 감사 (S3).
 *        문단(자연 문단 = 빈 줄 사이 블록)당 남용 접속어 2회 이상 → YELLOW · 3회 이상 → RED.
 *
 * 남용 대상 : 즉·이때·한편·따라서·그러므로
 * 금지 문어체 : "얻어진다"·"구해진다"·"이 됩니다"·"정리해 보면"
 *
 * 사용 :
 *   node scripts/connector-count-check.mjs <file.tex> [<file.tex> ...]
 */
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const OVERUSE_TERMS = ['즉', '이때', '한편', '따라서', '그러므로'];
const FORBIDDEN_STYLE = ['얻어진다', '구해진다', '이 됩니다', '정리해 보면', '얻어집니다', '구해집니다'];

function stripLatex(text) {
  return text
    .replace(/\$[^$]+\$/g, ' ')
    .replace(/\\\[[\s\S]*?\\\]/g, ' ')
    .replace(/\\begin\{[^}]+\}[\s\S]*?\\end\{[^}]+\}/g, ' ')
    .replace(/\\[a-zA-Z]+\*?(\[[^\]]*\])?(\{[^{}]*\})*/g, ' ')
    .replace(/%[^\n]*/g, ' ');
}

function splitParagraphs(text) {
  return text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
}

function countTerms(paragraph, terms) {
  const clean = stripLatex(paragraph);
  const counts = {};
  for (const t of terms) {
    const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = clean.match(re);
    if (matches) counts[t] = matches.length;
  }
  return counts;
}

function scanFile(file) {
  const text = readFileSync(file, 'utf-8');
  const paragraphs = splitParagraphs(text);
  const issues = [];
  let paraLine = 1;
  for (const p of paragraphs) {
    const paraStart = text.indexOf(p);
    const lineNo = paraStart >= 0 ? text.slice(0, paraStart).split('\n').length : paraLine;

    const overuseCounts = countTerms(p, OVERUSE_TERMS);
    const forbiddenCounts = countTerms(p, FORBIDDEN_STYLE);
    const overuseTotal = Object.values(overuseCounts).reduce((a, b) => a + b, 0);
    const forbiddenTotal = Object.values(forbiddenCounts).reduce((a, b) => a + b, 0);

    if (forbiddenTotal > 0) {
      issues.push({
        lineNo,
        verdict: 'RED',
        reason: `금지 문어체: ${Object.entries(forbiddenCounts).map(([k, v]) => `${k}×${v}`).join(', ')}`
      });
    }
    if (overuseTotal >= 3) {
      issues.push({
        lineNo,
        verdict: 'RED',
        reason: `남용 접속어 ${overuseTotal}회 (${Object.entries(overuseCounts).map(([k, v]) => `${k}×${v}`).join(', ')})`
      });
    } else if (overuseTotal === 2) {
      issues.push({
        lineNo,
        verdict: 'YELLOW',
        reason: `남용 접속어 2회 (${Object.entries(overuseCounts).map(([k, v]) => `${k}×${v}`).join(', ')})`
      });
    }
    paraLine += p.split('\n').length + 1;
  }
  return issues;
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
    console.error('Usage: node connector-count-check.mjs <file.tex> [...]');
    process.exit(2);
  }
  let redCount = 0, yellowCount = 0;
  console.log('🔍 접속어 남용 감사 (v1.0 · S3 정합)');
  for (const f of files) {
    const issues = scanFile(f);
    if (issues.length === 0) continue;
    console.log(`\n── ${basename(f)} (${issues.length}건) ──`);
    for (const i of issues) {
      const icon = i.verdict === 'RED' ? '🔴' : '🟡';
      console.log(`  ${icon} L${i.lineNo} · ${i.reason}`);
      if (i.verdict === 'RED') redCount++;
      else yellowCount++;
    }
  }
  console.log(`\n📊 요약: RED ${redCount} · YELLOW ${yellowCount}`);
  if (redCount > 0 && !softMode) process.exit(1);
}

main();
