#!/usr/bin/env node
// 함수그래프 추론 슬롯 검출 v1.0 (2026-06-27)
// 사용: node scripts/function-graph-check.mjs <본문.tex>
// 단일 출처: bank/4점-패턴-카탈로그/03-패턴-카탈로그.md §3 P-FG1~P-FG4
// 영구 정책: feedback_inference_over_counting (카운팅 지양·추론 지향)
// 게이트: 출제메커니즘-v3.0 G3''' YELLOW 권장 — 시리즈 회차당 함수그래프 ★ 5 슬롯 ≥ 1

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('usage: node scripts/function-graph-check.mjs <본문.tex>');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`파일 없음: ${texPath}`);
  process.exit(2);
}
const tex = fs.readFileSync(texPath, 'utf8');

// 함수그래프 추론 어구·매크로 키워드
const GRAPH_SIGNALS = {
  WORDING: [
    // §12.1 함수 도입 어구
    /최고차항의?\s*계수가\s*\S+인\s*이차함수/,
    /이차함수\s*\$?[fg]\s*\(?x\)?\$?.*?다음\s*조건을\s*만족/,
    /이차함수\s*\$?[fg]\s*\(?x\)?\$?.*?이차함수\s*\$?[fg]/,
    // §12.2 그래프-직선 교점 조건
    /그래프가\s*직선\s*\$?y\s*=\s*x\$?/,
    /그래프가\s*직선\s*\$?y\s*=\s*[^$]*\$?와/,
    /원점이?\s*아닌\s*서로\s*다른\s*두\s*점/,
    /한\s*점\s*에서만\s*만난/,
    // §12.3 구간 슬라이딩
    /구간\s*\[?\$?[kK]\s*-/,
    /\[?\$?[kK]\s*-\s*\d+\s*,\s*\$?[kK]\s*\+/,
    /의\s*최댓값과\s*함수\s*\S+의\s*최솟값이\s*같게/,
    /최솟값이?\s*같게\s*되도록\s*하는\s*실수\s*\$?[kK]/,
    // §12.4 결합 결론
    /점\s*\$?P\$?의\s*\$?x\$?좌표의\s*최댓값/,
    /점\s*\$?P\$?의\s*\$?x\$?좌표의\s*최솟값/,
    /모든\s*\$?[fg]\(\d+\)\$?의\s*값의\s*곱/,
    /모든\s*\$?[fg]\(\S+\)\$?의\s*값의\s*합/,
  ],
  MACROS: [
    /\\quadgraph\b/,
    /\\twoquadwithline\b/,
    /\\intervalslider\b/,
    /\\compositequadgraph\b/,
    /\\parabolafig\b/,
  ],
};

// 카운팅 결론식 키워드 (★ 5 회피 권장)
const COUNTING_CONCLUSIONS = [
  /정수\s*\S+의\s*개수/,
  /정수해의?\s*개수/,
  /근의?\s*개수/,
  /실근의?\s*개수/,
  /\$?[a-z]\s*\+\s*[a-z]\$?의\s*값의?\s*합/,
  /\$?[a-z]\s*\+\s*[a-z]\$?의?\s*최댓값.*합/,
  /비소수의?\s*개수/,
  /소수의?\s*개수/,
  /순서쌍의?\s*개수/,
];

// 추론 결론식 키워드 (★ 5 선호)
const INFERENCE_CONCLUSIONS = [
  /\$?[xy]\$?좌표의?\s*최댓값/,
  /\$?[xy]\$?좌표의?\s*최솟값/,
  /모든\s*\$?[fg]\(\d+\)\$?의\s*값의\s*곱/,
  /\$?[fg]\(\d+\)\s*\+\s*[fg]\(\d+\)\$?/,
  /\$?[fg]\(\d+\)\s*-\s*[fg]\(\d+\)\$?/,
  /\$?M\^2\$?의?\s*값/,
];

// 문제별 분기 — \begin{problem}{N} 마커로 슬롯 분리
const problemRegex = /\\begin\{problem\}\{(\d+)\}([^}]*)\}([\s\S]*?)\\end\{problem\}/g;
const slots = [];
let m;
while ((m = problemRegex.exec(tex)) !== null) {
  const num = parseInt(m[1], 10);
  const meta = m[2] || '';
  const body = m[3];
  // ★ 추출 (meta 2번째 인자 또는 \pointbadge)
  let star = null;
  const starMatch = body.match(/\\pointbadge\{(\d+)\}/);
  if (starMatch) star = parseInt(starMatch[1], 10);
  slots.push({ num, body, star });
}

const fgSlots = [];
const countingStar5 = [];
const inferenceStar5 = [];

for (const slot of slots) {
  // 함수그래프 신호 검출
  let wordingHits = 0;
  for (const re of GRAPH_SIGNALS.WORDING) {
    if (re.test(slot.body)) wordingHits++;
  }
  let macroHits = 0;
  for (const re of GRAPH_SIGNALS.MACROS) {
    if (re.test(slot.body)) macroHits++;
  }
  const isGraphSlot = wordingHits >= 2 || macroHits >= 1;
  if (isGraphSlot) fgSlots.push({ ...slot, wordingHits, macroHits });

  // ★ 5 (점수 7 이상 또는 ★ 5 라벨) 분류
  // 미니모의고사: pointbadge 6+ ≈ ★ 5, 시험지: 7+ ≈ ★ 5
  const isStarFive = slot.star && slot.star >= 6;
  if (isStarFive) {
    let countingHits = 0;
    for (const re of COUNTING_CONCLUSIONS) {
      if (re.test(slot.body)) countingHits++;
    }
    let inferenceHits = 0;
    for (const re of INFERENCE_CONCLUSIONS) {
      if (re.test(slot.body)) inferenceHits++;
    }
    if (countingHits > 0) countingStar5.push({ num: slot.num, hits: countingHits });
    if (inferenceHits > 0) inferenceStar5.push({ num: slot.num, hits: inferenceHits });
  }
}

console.log(`\n=== 함수그래프 추론 슬롯 검출 v1.0 ===`);
console.log(`파일: ${texPath}`);
console.log(`총 슬롯: ${slots.length}`);
console.log(`★ 5 슬롯 추정 (pointbadge ≥ 6): ${slots.filter((s) => s.star && s.star >= 6).length}\n`);

// 함수그래프 슬롯 보고
console.log(`=== 함수그래프 추론 슬롯 (P-FG1~P-FG4) ===`);
if (fgSlots.length === 0) {
  console.log(`🟡 YELLOW 함수그래프 슬롯 0건`);
  console.log(`  → 영구 정책 [[feedback_inference_over_counting]] 권장: 회차당 ≥ 1슬롯`);
  console.log(`  → 카탈로그 03 §3 P-FG1~P-FG4 + 발문어구사전 §12 FG-1~FG-12 참조`);
} else {
  console.log(`✅ 함수그래프 슬롯 ${fgSlots.length}건 검출`);
  for (const s of fgSlots) {
    console.log(`  #${s.num} | 어구 ${s.wordingHits} · 매크로 ${s.macroHits}`);
  }
}

// ★ 5 카운팅 vs 추론 비교
console.log(`\n=== ★ 5 카운팅 vs 추론 결론식 ===`);
console.log(`카운팅 결론식 ★ 5 슬롯: ${countingStar5.length}건 ${countingStar5.length === 0 ? '✅' : '🟡'}`);
if (countingStar5.length > 0) {
  for (const s of countingStar5) {
    console.log(`  #${s.num} | 카운팅 키워드 ${s.hits}건 — ★ 3·4로 격하 검토`);
  }
}
console.log(`추론 결론식 ★ 5 슬롯: ${inferenceStar5.length}건 ${inferenceStar5.length >= 1 ? '✅' : '🟡'}`);
for (const s of inferenceStar5) {
  console.log(`  #${s.num} | 추론 키워드 ${s.hits}건`);
}

// 종합 신호
console.log(`\n=== 종합 신호 ===`);
const totalStar5 = slots.filter((s) => s.star && s.star >= 6).length;
const countingRatio = totalStar5 > 0 ? (countingStar5.length / totalStar5) * 100 : 0;

if (fgSlots.length === 0) {
  console.log(`🟡 YELLOW — 함수그래프 추론 슬롯 0건. 회차당 ≥ 1 권장.`);
}
if (countingRatio >= 50) {
  console.log(`🟡 YELLOW — ★ 5 카운팅 비율 ${countingRatio.toFixed(0)}%. 50% 미만 권장.`);
}
if (fgSlots.length >= 1 && countingRatio < 50) {
  console.log(`✅ GREEN — 함수그래프 ≥ 1슬롯 + 카운팅 < 50%`);
}

console.log(``);
// YELLOW만, RED 없음 (권장 게이트)
process.exit(0);
