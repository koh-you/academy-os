#!/usr/bin/env node
// 회차 간 본질 자기복제 검출 v2.0 (2026-06-27)
// 사용: node scripts/cross-round-essence-check.mjs <new.tex> <prev.tex>
// 단일 출처: bank/자기복제-기준-v2.md
//
// v2.0 3축 판정:
//   1. 시그니처 일치 (입력·결과·자유도 3원조)
//   2. 본질 카드 일치 (주 통찰 ≥ 3)
//   3. 명명·자유도 패턴 일치
// RED: 3축 모두 일치
// YELLOW: 1·2 일치 + 3 미일치 (검토 권장)
// GREEN: 3축 중 ≥ 2축 미일치

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('usage: node scripts/cross-round-essence-check.mjs <new.tex> <prev.tex>');
  process.exit(2);
}

const newTex = fs.readFileSync(args[0], 'utf8');
const prevTex = fs.readFileSync(args[1], 'utf8');

// 본문·답지 통합 텍스트 (답지가 같은 폴더에 있으면 추출)
function readSolution(texPath) {
  const solPath = texPath.replace(/문제\.tex$/, '답지.tex');
  if (fs.existsSync(solPath)) return fs.readFileSync(solPath, 'utf8');
  return '';
}

const newSol = readSolution(args[0]);
const prevSol = readSolution(args[1]);

// 시그니처 추출 (signature-check.mjs와 일관)
const INPUT = {
  '삼차방정식': /삼차방정식/, '사차방정식': /사차방정식/, '이차방정식': /이차방정식/,
  '연립방정식': /연립방정식/, '연립부등식': /연립.*부등식|두\s*부등식/,
  '이차부등식': /이차부등식/, '절댓값': /절댓값|\|.*x.*\|/,
  '복소수': /복소수|켤레/, '행렬': /행렬|정사각/, '순열': /순열|일렬/,
  '조합': /조합|뽑|택/, 'ω': /omega|1의\s*세제곱근/,
};
const RESULT = {
  '값': /의\s*값/, '합': /의\s*합|들의\s*합/, '곱': /의\s*곱|들의\s*곱/,
  '개수': /개수|경우의\s*수/, '최댓값': /최댓값/, '최솟값': /최솟값/,
  '범위': /범위/, '진위': /있는\s*대로\s*고른/,
};
const DEGREE = {
  '서로 다른': /서로\s*다른/, '두 자연수': /두\s*자연수/,
  '자연수 k': /자연수\s*[\$]?[kn]/, '실수 a': /실수\s*[\$]?[ak]/,
  '매개변수': /에\s*대하여/, '정수해': /정수\s*해|정수.*개수/,
  '양의 정수': /양의\s*정수/,
};

// 주 통찰 카드 추출 — solnote의 "통찰" 박스에서 emph 키워드만
const INSIGHT_KEYWORDS = {
  'EQV': /환원|치환|동치|등치/,
  'BW': /역방향|역순|되돌|반례/,
  'PD': /패턴|발견|규칙성|대칭/,
  'XU': /단원\s*결합|결합|통합/,
  'CON': /조건\s*통합|다중\s*조건/,
  'VF': /검증|점검|표면\s*모순|환원/,
  'MI': /다중\s*해석|케이스\s*분기|분기/,
  'RT': /표현\s*전환|환원|치환/,
};

function extractSlots(tex) {
  const re = /\\begin\{problem\}\{(\d+)\}([\s\S]*?)\\end\{problem\}/g;
  const slots = [];
  let m;
  while ((m = re.exec(tex)) !== null) {
    const num = parseInt(m[1], 10);
    slots.push({ num, body: m[2] });
  }
  return slots;
}

function extractSolNote(sol, slotNum) {
  const re = new RegExp(`\\\\soltitle\\{${slotNum}\\}[\\s\\S]*?\\\\solnote\\{([^}]*(?:\\{[^}]*\\}[^}]*)*)\\}`);
  const m = sol.match(re);
  return m ? m[1] : '';
}

function signature(body) {
  const inputs = Object.entries(INPUT).filter(([_, p]) => p.test(body)).map(([k]) => k);
  const results = Object.entries(RESULT).filter(([_, p]) => p.test(body)).map(([k]) => k);
  const degrees = Object.entries(DEGREE).filter(([_, p]) => p.test(body)).map(([k]) => k);
  return { inputs, results, degrees };
}

function mainInsights(solnote) {
  const cards = [];
  for (const [card, kw] of Object.entries(INSIGHT_KEYWORDS)) {
    if (kw.test(solnote)) cards.push(card);
  }
  return cards;
}

const newSlots = extractSlots(newTex);
const prevSlots = extractSlots(prevTex);

console.log(`\n=== 본질 자기복제 검출 v2.0 ===`);
console.log(`현재: ${args[0]} (${newSlots.length}슬롯)`);
console.log(`직전: ${args[1]} (${prevSlots.length}슬롯)\n`);

const conflicts = [];
for (const ns of newSlots) {
  const nsSig = signature(ns.body);
  const nsCards = mainInsights(extractSolNote(newSol, ns.num));
  for (const ps of prevSlots) {
    const psSig = signature(ps.body);
    const psCards = mainInsights(extractSolNote(prevSol, ps.num));

    const inputCommon = nsSig.inputs.filter((x) => psSig.inputs.includes(x));
    const resultCommon = nsSig.results.filter((x) => psSig.results.includes(x));
    const degreeCommon = nsSig.degrees.filter((x) => psSig.degrees.includes(x));
    const sigMatch = inputCommon.length >= 1 && resultCommon.length >= 1;

    const cardCommon = nsCards.filter((x) => psCards.includes(x));
    const cardMatch = cardCommon.length >= 3;

    const degreeMatch = degreeCommon.length >= 1;

    const axisCount = (sigMatch ? 1 : 0) + (cardMatch ? 1 : 0) + (degreeMatch ? 1 : 0);

    if (axisCount >= 3) {
      conflicts.push({
        cur: ns.num, prev: ps.num,
        axisCount,
        inputCommon, resultCommon, cardCommon, degreeCommon,
        status: 'RED',
      });
    } else if (sigMatch && cardMatch && !degreeMatch) {
      conflicts.push({
        cur: ns.num, prev: ps.num,
        axisCount,
        inputCommon, resultCommon, cardCommon, degreeCommon,
        status: 'YELLOW',
      });
    }
  }
}

console.log(`=== 슬롯 쌍 검사 ===`);
if (conflicts.length === 0) {
  console.log(`  ✅ 자기복제 0건. v2.0 3축 판정 통과.`);
} else {
  const reds = conflicts.filter((c) => c.status === 'RED');
  const yellows = conflicts.filter((c) => c.status === 'YELLOW');
  if (reds.length > 0) console.log(`  🔴 RED ${reds.length}건 (3축 모두 일치 — 자기복제 확정)`);
  for (const c of reds) {
    console.log(`    현재 #${c.cur} ↔ 직전 #${c.prev} [${c.axisCount}/3축]`);
    console.log(`      시그니처: 입력 [${c.inputCommon.join(', ')}] / 결과 [${c.resultCommon.join(', ')}]`);
    console.log(`      주 통찰: [${c.cardCommon.join(', ')}]`);
    console.log(`      자유도: [${c.degreeCommon.join(', ')}]`);
  }
  if (yellows.length > 0) console.log(`  🟡 YELLOW ${yellows.length}건 (시그니처+카드 일치, 자유도 다름 — 검토 권장)`);
  for (const c of yellows) {
    console.log(`    현재 #${c.cur} ↔ 직전 #${c.prev}: 자유도 다름이 본질 차이 입증인지 확인`);
  }
}

console.log(``);
process.exit(conflicts.filter((c) => c.status === 'RED').length > 0 ? 1 : 0);
