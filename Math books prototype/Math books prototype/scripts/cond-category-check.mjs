#!/usr/bin/env node
// 단서 \cond 4 카테고리 활성도 점검 v1.0 (2026-06-27)
// 사용: node scripts/cond-category-check.mjs <본문.tex> [<청사진.yaml>]
// 단일 출처: bank/단서정밀화-v1.0.md

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('usage: node scripts/cond-category-check.mjs <본문.tex> [<청사진.yaml>]');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`파일 없음: ${texPath}`);
  process.exit(2);
}
const tex = fs.readFileSync(texPath, 'utf8');

// 정규화: LaTeX 수식 $...$ 제거 + \\command 단순화
function normalize(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, ' DISP ')   // 디스플레이 수식
    .replace(/\$[^$]*\$/g, ' VAR ')           // 인라인 수식 → VAR
    .replace(/\\\\/g, ' ')                     // 줄바꿈 제거
    .replace(/\\begin\{[^}]+\}/g, ' ')         // \begin{...}
    .replace(/\\end\{[^}]+\}/g, ' ')           // \end{...}
    .replace(/\\[a-zA-Z]+/g, ' ')              // LaTeX 매크로 제거
    .replace(/[{}]/g, ' ')                     // 중괄호 제거
    .replace(/\s+/g, ' ');
}

const CATEGORIES = {
  A: {
    name: '기호 정의 차단',
    keywords: [
      /켤레복소수/, /1의\s*세제곱근/, /1의\s*3제곱근/, /1의\s*삼제곱근/,
      /가우스/, /넘지\s*않는.*가장.*큰.*정수/,
      /VAR\s*는\s*VAR\s*의\s*켤레/, /VAR\s*가\s*VAR\s*의\s*켤레/,
      /실수가\s*아닌\s*한\s*근/, /실수가\s*아닌\s*근/,
      /단위행렬/, /영행렬/, /이차정사각행렬/, /정사각행렬/,
      /성분이\s*모두/, /성분/,
    ],
  },
  B: {
    name: '정수성·실수성·양수성',
    keywords: [
      /실수\s*VAR/, /VAR\s*는\s*실수/, /VAR\s*가\s*실수/, /VAR\s*은\s*실수/, /VAR\s*이\s*실수/,
      /자연수\s*VAR/, /VAR\s*는\s*자연수/, /VAR\s*가\s*자연수/, /VAR\s*은\s*자연수/, /VAR\s*이\s*자연수/,
      /정수\s*VAR/, /양의\s*정수/, /양수\s*VAR/, /음수\s*VAR/,
      /VAR\s*양/, /양의\s*실수/, /음수가\s*아닌/, /음이\s*아닌/,
      /[남여]학생\s*VAR/, /VAR\s*명의/, /VAR\s*개의/,
      /상수/, /짝수/, /홀수/, /소수/,
    ],
  },
  C: {
    name: '예외값 차단',
    keywords: [
      /서로\s*다른\s*점/, /서로\s*다른\s*실수/, /서로\s*다른\s*VAR/,
      /실수가\s*아니다/, /실수가\s*아닌/, /은\s*아니다/, /는\s*아니다/, /제외/,
      /VAR\s*은\s*아니/, /VAR\s*는\s*아니/, /이\s*아니다/, /가\s*아니다/,
      /VAR\s*VAR/, // a ≠ b 형태 — 인접 두 VAR (느슨)
      /적어도\s*하나는/, /오직\s*한/, /단\s*한/,
      /VAR\s*\\ne/, /\\ne\s*VAR/,
    ],
  },
  D: {
    name: '중복 회피',
    keywords: [
      // v1.1 강화 (2026-06-27 정교화 Z) — 마더텅 48문 분석 기반
      /서로\s*다른/, /모두\s*서로\s*다른/, /모두\s*다르/, /서로\s*구분/,
      /각각/, /각\s*VAR/, /각\s*조건/, /각\s*보기/, /각\s*경우/, /각\s*부등식/,
      /각\s*[가-힯]+에/, /각\s*[가-힯]+의/, /각\s*[가-힯]+이/,
      /도\s*아니고/, /도\s*아닌/, /다른\s*VAR/, /별개의/, /별도의/,
      /\[?보기\]?/, /ㄱㄴㄷ/, /가\s*나\s*다/, /ㄱ\s*ㄴ\s*ㄷ/,
      /ㄱ\s*[\.,)]/, /ㄴ\s*[\.,)]/, /ㄷ\s*[\.,)]/, /ㄹ\s*[\.,)]/,
      /\(가\)/, /\(나\)/, /\(다\)/, /\(라\)/,
      /VAR\s*VAR\s*VAR/, /한\s*명/, /두\s*명/, /세\s*명/, /네\s*명/,
      /두\s*양수/, /두\s*자연수/, /두\s*정수/, /두\s*실수/, /두\s*상수/,
      /세\s*양수/, /세\s*자연수/, /세\s*정수/, /세\s*실수/, /세\s*상수/,
      /네\s*양수/, /네\s*자연수/, /네\s*정수/, /네\s*실수/, /네\s*상수/,
      /두\s*근/, /세\s*근/, /네\s*근/, /두\s*해/, /세\s*해/,
      /두\s*부등식/, /세\s*부등식/, /두\s*방정식/, /세\s*방정식/,
      /순서쌍/, /([가-힯]+).*\1/, // 같은 단어 반복
    ],
  },
};

// \cond{...} 또는 \begin{conditions}...\end{conditions} 추출
const condBlocks = [];

// \begin{conditions}...\end{conditions}
const condRegex = /\\begin\{conditions\}([\s\S]*?)\\end\{conditions\}/g;
let m;
while ((m = condRegex.exec(tex)) !== null) {
  condBlocks.push({ start: m.index, content: m[1] });
}

// \cond{...} 매크로 (있을 시)
const condMacro = /\\cond\{([^}]*)\}/g;
while ((m = condMacro.exec(tex)) !== null) {
  condBlocks.push({ start: m.index, content: m[1] });
}

// 문제별 분기 — \begin{problem}{N}{s} 마커로 슬롯 분리
const slotRegex = /\\begin\{problem\}\{(\d+)\}/g;
const slots = [];
while ((m = slotRegex.exec(tex)) !== null) {
  slots.push({ num: parseInt(m[1], 10), start: m.index });
}

const slotCategories = {};
for (const slot of slots) {
  slotCategories[slot.num] = new Set();
}

for (const block of condBlocks) {
  let slotNum = null;
  for (const slot of slots) {
    if (slot.start < block.start) slotNum = slot.num;
    else break;
  }
  if (slotNum === null) continue;
  const norm = normalize(block.content);
  for (const [cat, def] of Object.entries(CATEGORIES)) {
    for (const kw of def.keywords) {
      if (kw.test(norm)) {
        slotCategories[slotNum].add(cat);
        break;
      }
    }
  }
}

// 문제 본문 전체에서 단서 키워드 매칭
const problemRegex = /\\begin\{problem\}\{(\d+)\}([\s\S]*?)\\end\{problem\}/g;
while ((m = problemRegex.exec(tex)) !== null) {
  const num = parseInt(m[1], 10);
  const body = m[2];
  if (!slotCategories[num]) slotCategories[num] = new Set();
  const norm = normalize(body);
  for (const [cat, def] of Object.entries(CATEGORIES)) {
    for (const kw of def.keywords) {
      if (kw.test(norm)) {
        slotCategories[num].add(cat);
        break;
      }
    }
  }
}

// 보고
const totalSlots = Object.keys(slotCategories).length;
console.log(`\n=== 단서 카테고리 활성도 점검 v1.0 ===`);
console.log(`파일: ${texPath}`);
console.log(`총 슬롯: ${totalSlots}\n`);

const counter = { A: 0, B: 0, C: 0, D: 0 };
const missing = [];

console.log(`슬롯 | 활성 카테고리 | 비고`);
console.log(`-----|---------------|------`);
for (const num of Object.keys(slotCategories).sort((a, b) => +a - +b)) {
  const cats = Array.from(slotCategories[num]).sort();
  for (const c of cats) counter[c]++;
  const tag = cats.length === 0 ? '⚠ 카테고리 0 — ★ 4·5라면 RED' : cats.length >= 2 ? '✅' : '🟡 카테고리 1';
  console.log(`#${num.toString().padStart(2)} | ${cats.join(', ').padEnd(7)} | ${tag}`);
  if (cats.length === 0) missing.push(num);
}

console.log(`\n=== 카테고리 다양성 ===`);
for (const [cat, n] of Object.entries(counter)) {
  const bar = '█'.repeat(n);
  console.log(`  ${cat} (${CATEGORIES[cat].name}): ${n}슬롯 ${bar}`);
}

console.log(`\n=== 회차 다양성 점검 ===`);
const activeCount = Object.values(counter).filter((n) => n >= 1).length;
console.log(`  활성 카테고리 종 수: ${activeCount} / 4`);
console.log(`  ${activeCount >= 4 ? '✅ 4종 모두 활성' : activeCount >= 3 ? '🟡 3종 활성 (1종 부족)' : '🔴 RED 2종 이하'}`);

if (missing.length > 0) {
  console.log(`\n🔴 RED 카테고리 0 슬롯: ${missing.map((n) => '#' + n).join(', ')}`);
  console.log(`   → ★ 4·5라면 단서 추가 의무 ([[feedback_design_depth_proposals]])`);
}

console.log(``);
process.exit(missing.length > 0 ? 1 : 0);
