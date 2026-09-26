#!/usr/bin/env node
/**
 * check-display-math.mjs — LaTeX 빌드 후 디스플레이 수식 직후 짧은 텍스트로
 * 발생하는 Underfull/Overfull \hbox 문제를 자동 검출.
 *
 * 사용법:
 *   node scripts/check-display-math.mjs [디렉터리|.log 파일 ...]
 *   인자 없으면 현재 디렉터리의 모든 _*.log를 검사.
 *
 * 검출 기준 (CLAUDE.md §수식 줄바꿈·디스플레이 배치 규약):
 *   1. Overfull \hbox (any) — 강제 줄바꿈 실패
 *   2. Underfull \hbox (badness ≥ 2000) — 가시적 빈공간 과다
 *
 * 매치되면 비-0 종료. CI/빌드 스크립트에서 호출 권장.
 */

import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, basename, join } from 'node:path';

const BADNESS_THRESHOLD = 2000;
const PATTERN_OVERFULL = /Overfull \\hbox \(([\d.]+pt) too wide\) in paragraph at lines (\d+)--(\d+)/;
const PATTERN_UNDERFULL = /Underfull \\hbox \(badness (\d+)\) in paragraph at lines (\d+)--(\d+)/;

async function collectLogs(args) {
  const targets = args.length ? args : ['.'];
  const logs = [];
  for (const t of targets) {
    const abs = resolve(t);
    let s;
    try { s = await stat(abs); } catch { continue; }
    if (s.isDirectory()) {
      const entries = await readdir(abs);
      for (const e of entries) {
        if (e.endsWith('.log')) logs.push(join(abs, e));
      }
    } else if (abs.endsWith('.log')) {
      logs.push(abs);
    }
  }
  return logs;
}

async function checkLog(path) {
  const text = await readFile(path, 'utf8');
  const lines = text.split('\n');
  const issues = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let m;
    if ((m = line.match(PATTERN_OVERFULL))) {
      issues.push({ kind: 'Overfull', detail: `${m[1]} too wide`, sourceLines: `${m[2]}-${m[3]}` });
    } else if ((m = line.match(PATTERN_UNDERFULL))) {
      const badness = parseInt(m[1], 10);
      if (badness >= BADNESS_THRESHOLD) {
        issues.push({ kind: 'Underfull', detail: `badness ${badness}`, sourceLines: `${m[2]}-${m[3]}` });
      }
    }
  }
  return issues;
}

async function main() {
  const logs = await collectLogs(process.argv.slice(2));
  if (logs.length === 0) {
    console.log('(검사할 .log 파일 없음)');
    process.exit(0);
  }
  let total = 0;
  for (const log of logs) {
    const issues = await checkLog(log);
    if (issues.length === 0) {
      console.log(`OK  ${basename(log)}`);
      continue;
    }
    total += issues.length;
    console.log(`FAIL ${basename(log)} — ${issues.length} issue(s):`);
    for (const it of issues) {
      console.log(`     [${it.kind}] ${it.detail} at source lines ${it.sourceLines}`);
    }
  }
  if (total > 0) {
    console.log('\n조치: CLAUDE.md §수식 줄바꿈·디스플레이 배치 규약 참조. 디스플레이 수식 직후의 짧은 한국어 텍스트는 본문 끝으로 옮긴다.');
    process.exit(1);
  }
}

main().catch(e => { console.error(e); process.exit(2); });
