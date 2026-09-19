#!/usr/bin/env node
// dmsolution-hangindent-check.mjs — DeeP Math 정리편 dmsolution 다중 문단·display math 감지
// 2026-07-21 세션 63 신설 · Gate 5.0 정리편 확장 GJ3 도구
//
// 단일 출처:
//   - templates/deep-math.sty §"dmsolution 환경 v5.6 (hangindent → list 기반 재설계)"
//   - project_2026-07-21_session62_handoff.md · 다음 세션 P0 목표
//
// 목적:
//   \begin{dmsolution}...\end{dmsolution} 블록에서 문단 개행·display math 카운트
//   v5.5 이전 (hangindent 기반)에서는 첫 문단만 여백 유지 · 이후 텍스트 좌측 낙하
//   v5.6 (list 기반)은 여백 지속 · 이 도구는 회귀 감지 · 복잡도 통계용
//
// 감지 항목:
//   1. 명시 \par
//   2. 빈 줄 (암시 \par)
//   3. display math 환경 : equation*·\[...\]·align*·gather*·multline*·displaymath
//   4. equation·align·gather 등 numbered 환경도 포함 (\par 유발)
//
// 판정 (v5.5 이전 관점 · v5.6 이후는 회귀 감지용):
//   count = 0 → GREEN (단일 문단 · 안전)
//   count ≥ 1 → YELLOW (v5.5에서는 낙하 발생 · v5.6에서는 안전)
//   count ≥ 3 → RED (v5.5에서 심각 낙하 · 확산 규모 파악용)
//
// 사용법:
//   node scripts/dmsolution-hangindent-check.mjs
//     ↑ 기본 : output/공통수학2/DeeP-Math-정리편/Deep Math Review Note *.tex (본편·답지 모두)
//   node scripts/dmsolution-hangindent-check.mjs "output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 08-RF02-무리함수.tex"
//   node scripts/dmsolution-hangindent-check.mjs --csv scan.csv
//   node scripts/dmsolution-hangindent-check.mjs --json scan.json
//   node scripts/dmsolution-hangindent-check.mjs --summary   ← 파일별 개요만
//
// 반환 코드: 0 = GREEN 또는 YELLOW · 1 = RED (≥3 breaks 존재)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
let csvOut = null;
let jsonOut = null;
let summaryOnly = false;
const inputs = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--csv') csvOut = args[++i];
  else if (a === '--json') jsonOut = args[++i];
  else if (a === '--summary') summaryOnly = true;
  else if (a === '--help' || a === '-h') {
    console.log(`
사용법:
  node scripts/dmsolution-hangindent-check.mjs [파일...] [--csv out.csv] [--json out.json] [--summary]
기본 대상 : output/공통수학2/DeeP-Math-정리편/Deep Math Review Note *.tex (본편·답지)
판정 :
  count = 0 → GREEN
  count ≥ 1 → YELLOW (v5.5에서 낙하 · v5.6에서 안전)
  count ≥ 3 → RED
반환 코드 : 0 = GREEN·YELLOW · 1 = RED 존재
    `.trim());
    process.exit(0);
  } else {
    inputs.push(a);
  }
}

// 기본 대상 : DeeP Math Review Note *.tex (본편·답지 모두)
if (inputs.length === 0) {
  const dir = path.join(ROOT, 'output', '공통수학2', 'DeeP-Math-정리편');
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)
      .filter(f => /^Deep Math Review Note .+\.tex$/.test(f) || f === 'smoke-test.tex')
      .map(f => path.join(dir, f));
    inputs.push(...files);
  }
}

if (inputs.length === 0) {
  console.error('❌ 대상 파일 없음');
  process.exit(2);
}

// ── dmsolution 블록 추출 ──────────────────────────────────
// 각 블록: { file, startLine, endLine, body[] }
function extractBlocks(text) {
  const lines = text.split('\n');
  const blocks = [];
  let inBlock = false;
  let start = -1;
  let body = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!inBlock && /\\begin\{dmsolution\}/.test(line)) {
      inBlock = true;
      start = i;
      body = [];
      // \begin 이후 같은 줄 내용도 body 시작
      const rest = line.slice(line.indexOf('\\begin{dmsolution}') + '\\begin{dmsolution}'.length);
      body.push(rest);
      // 같은 줄에 \end{dmsolution} 도 있으면 즉시 종료
      if (/\\end\{dmsolution\}/.test(rest)) {
        const bodyText = rest.slice(0, rest.indexOf('\\end{dmsolution}'));
        blocks.push({ startLine: i + 1, endLine: i + 1, body: [bodyText], lineCount: 1 });
        inBlock = false;
        body = [];
      }
      continue;
    }
    if (inBlock) {
      if (/\\end\{dmsolution\}/.test(line)) {
        // \end 이전까지 body에 추가
        const before = line.slice(0, line.indexOf('\\end{dmsolution}'));
        body.push(before);
        blocks.push({
          startLine: start + 1,
          endLine: i + 1,
          body,
          lineCount: i - start + 1,
        });
        inBlock = false;
        start = -1;
        body = [];
        continue;
      }
      body.push(line);
    }
  }
  return blocks;
}

// ── 블록 안 개행 카운트 ──────────────────────────────────
// (1) 명시 \par · (2) 빈 줄 · (3) display math 환경
function countBreaks(body) {
  const joined = body.join('\n');

  // 1. 명시 \par (주석 제외)
  const parMatches = [];
  const parRe = /\\par(?![a-zA-Z])/g;
  let m;
  while ((m = parRe.exec(joined)) !== null) {
    parMatches.push(m.index);
  }

  // 2. 빈 줄 (블록 첫줄·마지막줄 제외 · 순수 공백만인 줄)
  let blankLines = 0;
  for (let i = 1; i < body.length - 1; i++) {
    if (body[i].trim() === '') blankLines++;
  }

  // 3. display math 환경
  const displayMathEnvs = [
    'equation\\*', 'equation',
    'align\\*', 'align',
    'gather\\*', 'gather',
    'multline\\*', 'multline',
    'displaymath',
    'eqnarray\\*', 'eqnarray',
  ];
  let displayMath = 0;
  for (const env of displayMathEnvs) {
    const re = new RegExp(`\\\\begin\\{${env}\\}`, 'g');
    const matches = joined.match(re);
    if (matches) displayMath += matches.length;
  }
  // \[ ... \] 감지 (탈락 방지 · 백슬래시 대괄호)
  const bracketRe = /\\\[/g;
  const bracketMatches = joined.match(bracketRe);
  if (bracketMatches) displayMath += bracketMatches.length;

  // 총 break count (명시 \par + 빈 줄 + display math)
  // 각각 텍스트 개행 유발 요인
  const total = parMatches.length + blankLines + displayMath;

  return {
    par: parMatches.length,
    blankLines,
    displayMath,
    total,
  };
}

// ── 판정 ─────────────────────────────────────────────────
function verdict(total) {
  if (total === 0) return 'GREEN';
  if (total >= 3) return 'RED';
  return 'YELLOW';
}

// ── 파일별 실행 ─────────────────────────────────────────
const allFindings = [];
let totalScanned = 0;
let counts = { GREEN: 0, YELLOW: 0, RED: 0 };

for (const file of inputs) {
  if (!fs.existsSync(file)) {
    console.error(`  ⚠ 파일 없음 : ${file}`);
    continue;
  }
  totalScanned++;
  const raw = fs.readFileSync(file, 'utf8');
  const blocks = extractBlocks(raw);
  for (const b of blocks) {
    const c = countBreaks(b.body);
    const v = verdict(c.total);
    counts[v]++;
    allFindings.push({
      file: path.relative(ROOT, file).replace(/\\/g, '/'),
      startLine: b.startLine,
      endLine: b.endLine,
      lineCount: b.lineCount,
      par: c.par,
      blankLines: c.blankLines,
      displayMath: c.displayMath,
      total: c.total,
      verdict: v,
    });
  }
}

// ── 출력 ───────────────────────────────────────────────
console.log(`\n=== dmsolution-hangindent-check ===`);
console.log(`대상 파일 : ${totalScanned}개 · 총 dmsolution 블록 : ${allFindings.length}건`);
console.log(`판정 요약 : GREEN=${counts.GREEN} · YELLOW=${counts.YELLOW} · RED=${counts.RED}\n`);

if (allFindings.length === 0) {
  console.log('  ℹ dmsolution 블록 없음.');
} else if (summaryOnly) {
  // 파일별 개요만
  const byFile = new Map();
  for (const f of allFindings) {
    if (!byFile.has(f.file)) byFile.set(f.file, { GREEN: 0, YELLOW: 0, RED: 0, blocks: 0 });
    const s = byFile.get(f.file);
    s[f.verdict]++;
    s.blocks++;
  }
  for (const [file, s] of byFile) {
    console.log(`  ${file} : ${s.blocks}블록 · GREEN=${s.GREEN} · YELLOW=${s.YELLOW} · RED=${s.RED}`);
  }
} else {
  // 파일별 상세
  const byFile = new Map();
  for (const f of allFindings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file).push(f);
  }
  for (const [file, fs2] of byFile) {
    const s = { GREEN: 0, YELLOW: 0, RED: 0 };
    fs2.forEach(f => s[f.verdict]++);
    console.log(`── ${file} (${fs2.length}블록 · G=${s.GREEN}·Y=${s.YELLOW}·R=${s.RED})`);
    for (const f of fs2) {
      const tag = f.verdict === 'GREEN' ? '✓' : f.verdict === 'YELLOW' ? '⚠' : '🔴';
      const info = `\\par=${f.par}, blank=${f.blankLines}, mathEnv=${f.displayMath} · total=${f.total}`;
      console.log(`  ${tag} L${String(f.startLine).padStart(5)}-${f.endLine} · ${f.verdict.padEnd(6)} · ${info}`);
    }
    console.log();
  }
}

// CSV/JSON 출력
if (csvOut) {
  const header = 'file,startLine,endLine,lineCount,par,blankLines,displayMath,total,verdict\n';
  const rows = allFindings.map(f =>
    `"${f.file}",${f.startLine},${f.endLine},${f.lineCount},${f.par},${f.blankLines},${f.displayMath},${f.total},${f.verdict}`
  ).join('\n');
  fs.writeFileSync(csvOut, header + rows + '\n', 'utf8');
  console.log(`CSV 출력 : ${csvOut}`);
}
if (jsonOut) {
  fs.writeFileSync(jsonOut, JSON.stringify(allFindings, null, 2), 'utf8');
  console.log(`JSON 출력 : ${jsonOut}`);
}

process.exit(counts.RED > 0 ? 1 : 0);
