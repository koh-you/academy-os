#!/usr/bin/env node
// 발문 어구 표준 사전 매핑 v1.0 (2026-06-27)
// 사용: node scripts/wording-check.mjs <본문.tex>
// 단일 출처: bank/발문어구사전.md

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('usage: node scripts/wording-check.mjs <본문.tex>');
  process.exit(2);
}
const tex = fs.readFileSync(args[0], 'utf8');

// RED 어구 (즉시 차단)
const REDS = [
  { pattern: /정확히\s*\$?N?\$?\s*[개]?/, desc: '"정확히 N" 금지 ([[feedback_no_exactly_n]])', fix: '"개수가 N인" / "오직 한 개" / "N개가 존재"' },
  { pattern: /종합\s*\(조건\)/, desc: '"종합 (조건):" 괄호 라벨 금지 (직역체)', fix: '"다음 조건을 만족시킨다."' },
  { pattern: /유일한\s*조합이어야/, desc: '"유일한 조합이어야 한다" 직역체', fix: '"오직 한 ~만이 ~을 만족시킨다"' },
];

// YELLOW 어구 (표준 권장)
const YELLOWS = [
  { pattern: /구하라\b/, desc: '"구하라" 명령형', fix: '"구하시오"' },
  { pattern: /구하여라/, desc: '"구하여라"', fix: '"구하시오"' },
  { pattern: /무엇인가\?/, desc: '"무엇인가?"', fix: '"~의 값은?" / "~의 값을 구하시오"' },
  { pattern: /몇\s*개인가/, desc: '"몇 개인가"', fix: '"개수를 구하시오" / "개수는?"' },
];

// 표준 어구 카운트 (긍정 신호)
const STANDARDS = [
  { pattern: /라\s*하자/, name: '"라 하자."' },
  { pattern: /라\s*할\s*때/, name: '"라 할 때,"' },
  { pattern: /다음\s*조건을\s*만족/, name: '"다음 조건을 만족"' },
  { pattern: /의\s*값을\s*구하시오/, name: '"~의 값을 구하시오"' },
  { pattern: /의\s*값은\??/, name: '"~의 값은?"' },
  { pattern: /있는\s*대로\s*고른\s*것/, name: '"있는 대로 고른 것"' },
  { pattern: /모든\s*[a-zA-Zㄱ-ㆎ가-힯]+의\s*값.*합/, name: '"모든 ~의 값의 합"' },
];

console.log(`\n=== 발문 어구 표준 사전 점검 v1.0 ===`);
console.log(`파일: ${args[0]}\n`);

const slotRegex = /\\begin\{problem\}\{(\d+)\}([\s\S]*?)\\end\{problem\}/g;
const slots = [];
let m;
while ((m = slotRegex.exec(tex)) !== null) {
  slots.push({ num: parseInt(m[1], 10), body: m[2] });
}

let redCount = 0;
let yellowCount = 0;
const slotStandards = {};

for (const slot of slots) {
  const issues = [];
  for (const r of REDS) {
    if (r.pattern.test(slot.body)) {
      issues.push(`🔴 RED: ${r.desc} → ${r.fix}`);
      redCount++;
    }
  }
  for (const y of YELLOWS) {
    if (y.pattern.test(slot.body)) {
      issues.push(`🟡 YELLOW: ${y.desc} → ${y.fix}`);
      yellowCount++;
    }
  }
  const stdHits = [];
  for (const s of STANDARDS) {
    if (s.pattern.test(slot.body)) stdHits.push(s.name);
  }
  slotStandards[slot.num] = stdHits;
  if (issues.length > 0) {
    console.log(`#${slot.num}:`);
    for (const i of issues) console.log(`  ${i}`);
  }
}

console.log(`\n=== 표준 어구 활용 ===`);
for (const num of Object.keys(slotStandards).sort((a, b) => +a - +b)) {
  const hits = slotStandards[num];
  console.log(`  #${num}: ${hits.length === 0 ? '🟡 표준 어구 0건 — 검토 권장' : hits.length + '건 — ' + hits.slice(0, 3).join(', ')}`);
}

console.log(`\n=== 종합 ===`);
console.log(`  🔴 RED 총: ${redCount}`);
console.log(`  🟡 YELLOW 총: ${yellowCount}`);
console.log(`  ${redCount === 0 && yellowCount === 0 ? '✅ 모든 발문이 표준 사전과 정합' : '검토 필요'}`);
console.log(``);
process.exit(redCount > 0 ? 1 : 0);
