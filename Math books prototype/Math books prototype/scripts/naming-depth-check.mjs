#!/usr/bin/env node
// 발문 변수 명명 깊이 (naming_depth) 점검 v1.0 (2026-06-27)
// 사용: node scripts/naming-depth-check.mjs <본문.tex>
// 단일 출처: bank/4점-패턴-카탈로그/03-패턴-카탈로그.md §2.12

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('usage: node scripts/naming-depth-check.mjs <본문.tex>');
  process.exit(2);
}
const tex = fs.readFileSync(args[0], 'utf8');

// 정규화: LaTeX 수식 단순화
function normalize(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, ' DISP ')
    .replace(/\$[^$]*\$/g, ' VAR ')
    .replace(/\\\\/g, ' ')
    .replace(/\\begin\{[^}]+\}/g, ' ')
    .replace(/\\end\{[^}]+\}/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, ' ')
    .replace(/\s+/g, ' ');
}

// 명명 단계 패턴 (v1.1, 2026-06-27 정규식 보강 — 정교화 O)
const NAMING_PATTERNS = [
  /라\s*하자/g, /라\s*할\s*때/g, /라\s*하면/g,
  /이라\s*하자/g, /이라\s*할\s*때/g, /이라\s*하면/g,
  /이라\s*하면서/g, /라고\s*하자/g, /이라\s*놓/g,
  /두\s*근을\s*VAR[,\s]+VAR\s*라/g,
  /두\s*근을\s*VAR\s*[,]\s*VAR\s*이라/g,
  /세\s*근을\s*VAR/g, /네\s*근을\s*VAR/g,
  /가장\s*큰\s*[가-힯]+/g, /가장\s*작은\s*[가-힯]+/g,
  /두\s*양수\s*VAR/g, /두\s*자연수\s*VAR/g, /두\s*실수\s*VAR/g, /두\s*정수\s*VAR/g,
  /세\s*양수\s*VAR/g, /세\s*자연수\s*VAR/g, /세\s*실수\s*VAR/g, /세\s*정수\s*VAR/g,
  /두\s*[가-힯]+\s*VAR\s*[,]\s*VAR/g,
  /자연수\s*VAR\s*에\s*대하여/g, /실수\s*VAR\s*에\s*대하여/g,
  // v1.1 신규 패턴
  /실수\s*VAR\s*[,]\s*VAR\s*에\s*대하여/g, /자연수\s*VAR\s*[,]\s*VAR\s*에\s*대하여/g,
  /두\s*상수\s*VAR/g, /상수\s*VAR\s*에/g,
  /두\s*복소수/g, /복소수\s*VAR\s*가/g, /복소수\s*VAR\s*에/g,
  /연립방정식/g, /연립이차부등식/g, /연립부등식/g, /연립이차방정식/g,
  /이차부등식\s*[VAR\s가-힯]+의\s*해/g,
  /두\s*부등식/g, /두\s*방정식/g,
  /행렬\s*VAR/g, /이차정사각행렬\s*VAR/g,
];

// 결과식 의존성 패턴
const DEP_PATTERNS = [
  /그\s*[가-힯]+의/g, /그\s*중/g, /그\s*[가-힯]+이/g,
  /이\s*때/g, /이를/g, /이들의/g,
  /두\s*근의/g, /세\s*근의/g, /네\s*근의/g,
  /해의\s*개수/g, /해에\s*속하는/g,
  /택한\s*[가-힯\s]+수/g, /택한\s*VAR\s*[가-힯]+/g,
  /성분의\s*합/g, /성분\s*합/g,
  /모든\s*가능한\s*값/g, /모든\s*VAR\s*의\s*값/g, /모든\s*VAR\s*의\s*합/g,
  /VAR\s*의\s*값들/g, /값들의\s*합/g, /개수들의\s*합/g,
  /이상이\s*되도록/g, /이하가\s*되도록/g, /가\s*되도록/g,
  /합을\s*구/g, /개수를\s*구/g, /최[댓솟]값/g,
];

console.log(`\n=== 변수 명명 깊이 (naming_depth) 점검 v1.0 ===`);
console.log(`파일: ${args[0]}\n`);

const slotRegex = /\\begin\{problem\}\{(\d+)\}([\s\S]*?)\\end\{problem\}/g;
const slots = [];
let m;
while ((m = slotRegex.exec(tex)) !== null) {
  slots.push({ num: parseInt(m[1], 10), body: m[2] });
}

const depths = {};
for (const slot of slots) {
  const norm = normalize(slot.body);
  let nameSteps = 0;
  for (const p of NAMING_PATTERNS) {
    const matches = norm.match(p);
    if (matches) nameSteps += matches.length;
  }
  let depSteps = 0;
  for (const p of DEP_PATTERNS) {
    const matches = norm.match(p);
    if (matches) depSteps += matches.length;
  }
  const depth = Math.max(1, nameSteps + Math.min(depSteps, 3));
  depths[slot.num] = { depth, nameSteps, depSteps };
}

console.log(`슬롯 | naming_depth | 명명 | 의존 | 판정`);
console.log(`-----|--------------|------|------|------`);
let ge2 = 0;
let ge3 = 0;
for (const num of Object.keys(depths).sort((a, b) => +a - +b)) {
  const d = depths[num];
  if (d.depth >= 2) ge2++;
  if (d.depth >= 3) ge3++;
  const tag = d.depth >= 3 ? '✅ ★ 5 strict 적합' : d.depth >= 2 ? '🟢 ★ 5 권장' : '🟡 ★ 3·4용';
  console.log(`#${num.toString().padStart(2)} | ${d.depth}${' '.repeat(13 - String(d.depth).length)} | ${d.nameSteps}    | ${d.depSteps}    | ${tag}`);
}

console.log(`\n=== 종합 ===`);
console.log(`  ★ 5 권장 (naming_depth ≥ 2) 슬롯: ${ge2}/${slots.length}`);
console.log(`  ★ 5 strict 권장 (naming_depth ≥ 3) 슬롯: ${ge3}/${slots.length}`);
console.log(`  ${ge3 >= 1 ? '✅ strict 슬롯 ≥ 1 권장 통과' : '🟡 strict 슬롯 0 — top9.0+ 정점 부족'}`);
console.log(``);
process.exit(0);
