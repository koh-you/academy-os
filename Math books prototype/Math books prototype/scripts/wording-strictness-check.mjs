#!/usr/bin/env node
// 발문 워딩 v2.0 §6·§7·§8 자동 감지
// 2026-07-14 세션 42 후반부 · bank/발문-금지-워딩.md v2.0 자동화
//
// 사용법: node scripts/wording-strictness-check.mjs <문제.tex>
//   반환 코드: 0 = 통과 / 1 = 위반 검출

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/wording-strictness-check.mjs <문제.tex>');
  process.exit(2);
}

const file = args[0];
if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}

const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
let redCount = 0;
let yellowCount = 0;

console.log(`🔍 발문 워딩 v2.0 검사 (${file})\n`);

// ─── §4 격자 기호 재발 (최우선) ────────────────────────
const symbolPatterns = [
  { regex: /\\textlangle/g, desc: "§4 ⟨⟩ 격자 기호 (\\textlangle)", severity: 'RED' },
  { regex: /\\textrangle/g, desc: "§4 ⟨⟩ 격자 기호 (\\textrangle)", severity: 'RED' },
  { regex: /\\vec\{/g, desc: "§4 벡터 표기 (\\vec, CM2 범위 밖)", severity: 'RED' },
  { regex: /\\overrightarrow\{/g, desc: "§4 벡터 표기 (\\overrightarrow, CM2 범위 밖)", severity: 'RED' },
  { regex: /\\lim/g, desc: "§4 극한 (\\lim, CM2 범위 밖)", severity: 'RED' },
  { regex: /\\int/g, desc: "§4 적분 (\\int, CM2 범위 밖)", severity: 'RED' },
  { regex: /\\sum/g, desc: "§4 시그마 (\\sum, CM2 범위 밖)", severity: 'RED' },
];

// ─── §6 표기 정확성 ─────────────────────────────────
const notationPatterns = [
  { regex: /\\cup [A-Za-z]+\\cap|\\cap [A-Za-z]+\\cup/g, desc: "§6 집합 연산 괄호 없이 chain (\\cup·\\cap)", severity: 'RED' },
];

// ─── §7 표현 정확성 ─────────────────────────────────
// "다항식 $f_a(x)$" 패턴 감지 (한 line 안에 "$x$에 대한" 동반 여부 확인)
lines.forEach((line, i) => {
  const polyMatch = line.match(/다항식 \$f_[a-z]/);
  if (polyMatch) {
    const hasXNote = line.includes("$x$에 대한") ||
                     (i > 0 && lines[i-1].includes("$x$에 대한")) ||
                     line.includes("x$에 대한");
    if (!hasXNote) {
      console.log(`🔴 §7 line ${i+1}: 다항식 $f_a(x)$ 표기에 "$x$에 대한" 미동반`);
      console.log(`    context: ${line.slice(0, 80)}...`);
      redCount++;
    }
  }
});

// ─── §8 발문 간결성 ─────────────────────────────────
// 소문항 발문 40자 초과 감지 (\textbf{(N)} ... 구조 검색)
const subquestionRegex = /\\textbf\{\((\d)\)\}\s*([^\\]+)(?=\\n|\\vspace|\\nolinebreak)/gs;
let subMatch;
while ((subMatch = subquestionRegex.exec(content)) !== null) {
  const subNum = subMatch[1];
  const promptText = subMatch[2].trim();
  // 배점 태그 제거
  const cleanText = promptText.replace(/\[.*?점\].*$/, '').trim();
  const charCount = cleanText.length;
  if (charCount > 60) {
    console.log(`🔴 §8 소문항 (${subNum}) 발문 ${charCount}자 (60자 초과)`);
    console.log(`    text: ${cleanText.slice(0, 60)}...`);
    redCount++;
  } else if (charCount > 40) {
    console.log(`🟡 §8 소문항 (${subNum}) 발문 ${charCount}자 (권장 40자 초과)`);
    yellowCount++;
  }
}

// ─── 모든 grep 패턴 실행 (line by line) ─────────────
const allPatterns = [...symbolPatterns, ...notationPatterns];

for (const { regex, desc, severity } of allPatterns) {
  lines.forEach((line, i) => {
    const matches = line.match(regex);
    if (matches) {
      const marker = severity === 'RED' ? '🔴' : '🟡';
      console.log(`${marker} ${desc} · line ${i+1}: ${matches.length}건`);
      console.log(`    context: ${line.slice(0, 100).trim()}`);
      if (severity === 'RED') redCount += matches.length;
      else yellowCount += matches.length;
    }
  });
}

// ─── 요약 ────────────────────────────────────────
console.log(`\n=== 요약 ===`);
console.log(`  🔴 RED: ${redCount}건`);
console.log(`  🟡 YELLOW: ${yellowCount}건`);

if (redCount > 0) {
  console.error(`\n❌ 발문 워딩 v2.0 RED ${redCount}건 · 재작성 강제.`);
  console.error(`   단일 출처: bank/발문-금지-워딩.md v2.0 §4·§6·§7·§8`);
  process.exit(1);
} else if (yellowCount > 0) {
  console.log(`\n🟡 YELLOW ${yellowCount}건 · 검토 권장.`);
  process.exit(0);
} else {
  console.log(`\n✅ 발문 워딩 v2.0 통과.`);
  process.exit(0);
}
