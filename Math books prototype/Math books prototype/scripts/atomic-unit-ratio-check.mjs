#!/usr/bin/env node
/**
 * atomic-unit-ratio-check.mjs (v1.0 · 2026-07-23 세션 75)
 *
 * 목적 : 답지 슬롯당 원자 개수 감사 (S1).
 *        원자 = 한글 조건문 1 + 수식 결론 1 (자연 문단 1개 ≈ 원자 1개).
 *        슬롯당 원자 6개 초과 → YELLOW · 8개 초과 → RED.
 *
 * 슬롯 경계 : \dmsoltitle{N}{...} · \dmwabuhead{N}{...}{...} · \dmsection · \dmquickgrid 밖.
 *
 * 사용 :
 *   node scripts/atomic-unit-ratio-check.mjs <file.tex> [<file.tex> ...]
 */
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const SLOT_START_RE = /^\s*\\(dmsoltitle|dmwabuhead|dmsection)\b/;
const SLOT_END_RE = /^\s*\\(end\{multicols\*?\}|dmsection|dmquick\b)/;

function extractSlots(text) {
  const lines = text.split('\n');
  const slots = [];
  let current = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (SLOT_START_RE.test(line)) {
      if (current) slots.push(current);
      const headerMatch = line.match(/\\(?:dmsoltitle|dmwabuhead)\{(\d+)\}\{([^{}]*)\}/);
      current = {
        startLine: i + 1,
        num: headerMatch ? headerMatch[1] : '?',
        title: headerMatch ? headerMatch[2] : line.trim().slice(0, 40),
        body: [],
      };
    } else if (current && SLOT_END_RE.test(line)) {
      slots.push(current);
      current = null;
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) slots.push(current);
  return slots;
}

function countAtoms(bodyLines) {
  const body = bodyLines.join('\n');
  // 자연 문단 (빈 줄) 로 분리
  const paragraphs = body.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  // 매크로만 있는 문단은 원자 아님
  const atoms = paragraphs.filter(p => {
    const stripped = p
      .replace(/\\begin\{dmanswerbox\}[\s\S]*?\\end\{dmanswerbox\}/g, '')
      .replace(/\\begin\{dmcriticalpoint\}[\s\S]*?\\end\{dmcriticalpoint\}/g, '')
      .replace(/\\begin\{center\}[\s\S]*?\\end\{center\}/g, '')
      .replace(/\\dmcplabel\{[^{}]*\}/g, '')
      .replace(/%[^\n]*/g, '')
      .trim();
    return stripped.length > 5;
  });
  return atoms.length;
}

function scanFile(file) {
  const text = readFileSync(file, 'utf-8');
  const slots = extractSlots(text);
  const issues = [];
  for (const s of slots) {
    const atomCount = countAtoms(s.body);
    if (atomCount > 8) {
      issues.push({ ...s, atomCount, verdict: 'RED', reason: `원자 ${atomCount}개 (기준 ≤ 5)` });
    } else if (atomCount > 6) {
      issues.push({ ...s, atomCount, verdict: 'YELLOW', reason: `원자 ${atomCount}개 (기준 ≤ 5)` });
    }
  }
  return { total: slots.length, issues };
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
    console.error('Usage: node atomic-unit-ratio-check.mjs <file.tex> [...]');
    process.exit(2);
  }
  let redCount = 0, yellowCount = 0, totalSlots = 0;
  console.log('🔍 원자 압축 감사 (v1.0 · S1 정합)');
  for (const f of files) {
    const { total, issues } = scanFile(f);
    totalSlots += total;
    if (issues.length === 0) {
      console.log(`\n── ${basename(f)} : ${total} 슬롯 · 모두 GREEN ──`);
      continue;
    }
    console.log(`\n── ${basename(f)} · ${total} 슬롯 · ${issues.length}건 이슈 ──`);
    for (const i of issues) {
      const icon = i.verdict === 'RED' ? '🔴' : '🟡';
      console.log(`  ${icon} L${i.startLine} 슬롯 ${i.num} (${i.title.slice(0, 30)}) · ${i.reason}`);
      if (i.verdict === 'RED') redCount++;
      else yellowCount++;
    }
  }
  console.log(`\n📊 요약: 총 ${totalSlots} 슬롯 · RED ${redCount} · YELLOW ${yellowCount}`);
  if (redCount > 0 && !softMode) process.exit(1);
}

main();
