#!/usr/bin/env node
// 답지 분수 크기 일관성 검사 — \frac vs \tfrac vs \dfrac 혼용 검출
// 2026-07-12 세션 34 신설. 마스터 지적 "분수 크기 제각각" 반복 대응.
// 2026-07-13 세션 35: --all / --soft 옵션 추가 (refresh-all 편입)
//
// 원칙:
//   답지 v3.6+: 모든 분수 크기 통일 (displaystyle 지향)
//   \answersheetsetup 사용 시 \tfrac·\frac → \dfrac 자동 alias
//   하지만 답지 로컬 override or 다른 파일에서는 수동 관리 필요
//
// 사용:
//   node scripts/fraction-consistency-check.mjs <답지.tex> [<답지2.tex> ...]
//   node scripts/fraction-consistency-check.mjs --all           # output/**/*답지*.tex·*solution*.tex 자동 검색
//   node scripts/fraction-consistency-check.mjs --all --soft    # RED 발견해도 exit 0 (refresh-all 파이프라인용)

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const softMode = args.includes('--soft');
const allMode = args.includes('--all');

function findAnswerSheets(rootDir) {
  const results = [];
  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
    catch { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile() && /\.tex$/.test(e.name) && /(답지|solution)/.test(e.name)) {
        results.push(full);
      }
    }
  }
  walk(rootDir);
  return results.sort();
}

let files;
if (allMode) {
  files = findAnswerSheets('output');
  console.log(`🔍 --all 모드: output/ 재귀 검색 → 답지·solution ${files.length}개 발견`);
} else {
  files = args.filter(a => !a.startsWith('--'));
  if (files.length === 0) {
    console.error('Usage: node scripts/fraction-consistency-check.mjs <답지.tex> [파일2 ...]');
    console.error('       node scripts/fraction-consistency-check.mjs --all [--soft]');
    process.exit(2);
  }
}

let redCount = 0;
let yellowCount = 0;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`❌ 파일 없음: ${file}`);
    process.exit(2);
  }

  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const filename = file.split(/[\\/]/).pop();
  console.log(`\n📄 ${filename}`);

  // \answersheetsetup · \dmanswersetup 호출 감지 (v1.2 2026-07-19 세션 51 : Deep:it 시리즈 답지 \dmanswersetup 편입)
  const hasSetup = lines.some(l => /\\(answersheetsetup|dmanswersetup)\b/.test(l));

  // \frac, \tfrac, \dfrac 카운트
  const stats = { frac: 0, tfrac: 0, dfrac: 0, inline_frac: 0, display_frac: 0 };
  const violations = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 주석 건너뛰기
    const codeLine = line.replace(/(^|[^\\])%.*$/, '$1');

    // \frac, \tfrac, \dfrac 검출
    const fracs = codeLine.matchAll(/\\(d|t)?frac\b/g);
    for (const m of fracs) {
      const type = m[1] === 'd' ? 'dfrac' : m[1] === 't' ? 'tfrac' : 'frac';
      stats[type]++;

      // 인라인 vs 디스플레이 컨텍스트 추정
      const before = codeLine.slice(0, m.index);
      const dollarCount = (before.match(/\$/g) ?? []).length;
      const isInline = dollarCount % 2 === 1;
      const inDisplay = /\\\[|\\begin\{(align|gather|equation|multline|display)/.test(codeLine.slice(0, m.index));

      if (type === 'frac') {
        if (isInline) {
          stats.inline_frac++;
          if (!hasSetup) {
            violations.push({
              line: i + 1,
              type: 'YELLOW',
              msg: `\\frac (inline) — v3.6+ 답지는 \\dfrac 명시 or \\answersheetsetup 호출 권장`,
              snippet: codeLine.trim().slice(0, 80)
            });
          }
        } else {
          stats.display_frac++;
        }
      }
    }
  }

  console.log(`   \\frac: ${stats.frac} (인라인 ${stats.inline_frac} · 디스플레이 ${stats.display_frac})`);
  console.log(`   \\tfrac: ${stats.tfrac}`);
  console.log(`   \\dfrac: ${stats.dfrac}`);
  console.log(`   \\answersheetsetup 호출: ${hasSetup ? '✓' : '✗'}`);

  if (!hasSetup && (stats.inline_frac > 0 || stats.tfrac > 0)) {
    console.log(`\n🔴 RED: 답지에 \\answersheetsetup 호출 없음. 인라인 \\frac(${stats.inline_frac})·\\tfrac(${stats.tfrac})이 축소 렌더링됨.`);
    console.log(`   대응: \\begin{document} 직후 \\answersheetsetup 추가`);
    redCount++;
  }

  if (violations.length > 0 && !hasSetup) {
    console.log(`\n⚠️  경고 목록:`);
    for (const v of violations.slice(0, 10)) {
      console.log(`   line ${v.line}: ${v.msg}`);
      console.log(`     → ${v.snippet}`);
    }
    yellowCount += violations.length;
  }

  // \tfrac·\dfrac 혼용 검출 (setup 유무 무관)
  if (stats.tfrac > 0 && stats.dfrac > 0 && !hasSetup) {
    console.log(`\n⚠️  YELLOW: \\tfrac(${stats.tfrac})·\\dfrac(${stats.dfrac}) 혼용. \\answersheetsetup으로 통일 권장.`);
    yellowCount++;
  }
}

console.log('');
console.log(`===== 요약: ${files.length}개 파일 · RED ${redCount}건 · YELLOW ${yellowCount}건 =====`);

if (redCount > 0) {
  if (softMode) {
    console.warn(`⚠️  --soft 모드: RED 검출됐지만 exit 0 반환 (refresh-all 파이프라인 계속).`);
    process.exit(0);
  }
  console.error(`🔴 총 RED ${redCount}건. 답지 분수 크기 일관성 위반.`);
  process.exit(1);
}

if (yellowCount > 0) {
  console.warn(`⚠️  총 YELLOW ${yellowCount}건. 검토 권장.`);
  process.exit(0);
}

console.log('✅ 분수 크기 일관성 통과.');
process.exit(0);
