#!/usr/bin/env node
// 통찰 깊이 자동 채점기 (v2.1 — schema v3.8 반영)
// 2026-07-06 마스터 재지시 — pending 폐기, 저노출 유형 카운트 추가
//
// 사용법: node scripts/insight-depth-check.mjs <test.tex> [--star-5-only] [--unit CM1-EQ]
//
// v3.8 변경 (v2.0 → v2.1):
//   - 방안 3 게이트 3 폐기: 실측 정답률 조건 제거 → pending 상태 폐기, 게이트 1+2 이분법
//   - 방안 5: 저노출 통찰 유형 카운트 (SC·VF·SYM·XU 초저노출 + BW·PD·RT 저노출)
//   - ★ 5 슬롯에 초저노출 유형 없음 → RED
//
// 동작:
// 1. 시험지 .tex에서 문항별 본문 추출
// 2. 깊이 신호 패턴 매칭 + P1~P6 카드 태깅
// 3. v3.7 감쇠 적용 (§2.9): 자산화 유형에 P1~P6 카드 없으면 depth 3→2 강등
// 4. depth_score = max(effective_depths) × 2 + average(effective_depths)
// 5. 이중 게이트 (v3.8 단순화):
//    - 게이트 1: depth_score ≥ 8.5 AND max=3 AND count ≥ 5
//    - 게이트 2: P1~P6 카드 ≥ 2
//    - 둘 다 통과: star_premium = true / 아니면 false
// 6. 저노출 유형 슬롯 카운트 (§2.13):
//    - 초저노출: {SC, VF, SYM, XU}
//    - 저노출:   {BW, PD, RT}
//
// 주의: 본 도구는 *휴리스틱*이며 정밀 판정은 problem-review v3.8 에이전트 호출 필수.

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/insight-depth-check.mjs <test.tex> [--star-5-only]');
  process.exit(2);
}

const file = args[0];
const star5Only = args.includes('--star-5-only');
const unitFlag = args.find(a => a.startsWith('--unit='))?.split('=')[1] ||
                 (args.includes('--unit') ? args[args.indexOf('--unit') + 1] : null);

if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}

const content = fs.readFileSync(file, 'utf8');

// v3.10 §2.9 학습 자산화된 통찰 유형 (단원별 상위 3위, 재산정 2026-07-06)
// data/all-premium-samples.json 1,830문 노출도 분석 결과
const DECAYED_TYPES = {
  'CM1-PL': ['CON', 'EQV', 'MI'],
  'CM1-EQ': ['CON', 'EQV', 'MI'],
  'CM1-CB': ['CON', 'MI', 'EQV'],
  'CM1-MX': ['EQV', 'CON', 'MI'],
  'CM2-GM': ['EQV', 'CON', 'MI'],
  'CM2-ST': ['EQV', 'CON', 'MI'],
  'CM2-FN': ['EQV', 'CON', 'MI'],
  'CM2-RF': ['EQV', 'CON', 'RT'],  // v3.10: BW → RT (Tier S 확대 후 재산정)
  '_default': ['CON', 'EQV', 'MI'],
};

// v3.9 §2.13 저노출 통찰 유형 (이식 가능성 검증)
const RARE_TYPES = {
  // 이식 가능 저노출 — 시판 표본에 실재, 노출 낮음 (★ 5 필수)
  TRANSPLANT: ['XU', 'SYM', 'PD'],
  // 저노출 — 단원별 편차, ★ 4 권장
  LOW: ['RT', 'BW'],
  // v3.6 신설 — 시판 표본 라벨링 부재, 강제 대상 제외
  V36_EXCLUDED: ['SC', 'VF'],
};

// 깊이별 신호 패턴 (12-메트릭 v1.0 §3 기반) + v3.7 P-카드 태깅
// P1: 다중 다항식 동시 결정 / P2: 조건 통합 + 정수 자유도 / P3: 항등식 제곱 위장
// P4: 다층 나눗셈·인수 결합 / P5: 자기참조 / P6: 단원 결합
const DEPTH_3_SIGNALS = [
  { pattern: /자기참조|self-?reference|\bf\([^)]*\)\s*=\s*[a-z]\b|매개변수.*다층|매개변수.*동시.*등장/i, name: 'I-SYM·I-MI 자기참조 다층', card: 'P5', types: ['SYM', 'MI', 'BW'] },
  { pattern: /도형.*↔.*대수|행렬.*수열|단원 결합|I-XU|cross[- ]?unit|두 단원/i, name: 'I-XU 단원 결합', card: 'P6', types: ['XU'] },
  { pattern: /격자점|격자\s*위|분할.*카운트|정수.*자유도|partition.*count/i, name: 'I-MI 정수 자유도', card: 'P2', types: ['MI', 'CON'] },
  { pattern: /반례|counter[- ]?example|보기 중 항상 옳은.*\\bㄱ/i, name: 'I-RT 반례 구성', card: null, types: ['RT'] },
  { pattern: /세 조건.*모두.*만족.*카운트|조건.*동시.*만족.*개수|3 ?조건.*결합/i, name: 'I-CON 3+조건 통합', card: 'P2', types: ['CON'] },
  { pattern: /역방향.*추적|역.*역방향|결과.*조건.*역추적|결과.*원인/i, name: 'I-BW 역방향 추적 (깊이 3)', card: 'P5', types: ['BW'] },
  { pattern: /라틴 ?사각|3차원 ?격자|색칠 ?대칭|군론/i, name: 'I-XU 비표준 구조', card: 'P6', types: ['XU'] },
  { pattern: /항등식.*제곱|f\(x\)\^2\s*=|완전제곱.*강제/i, name: 'I-EQV 항등식 제곱 위장', card: 'P3', types: ['EQV', 'CON'] },
  { pattern: /반복 나눗셈|3\+? ?나눗셈.*조건|다층 나눗셈/i, name: 'I-MI 다층 나눗셈', card: 'P4', types: ['MI', 'CON', 'EQV'] },
  { pattern: /다중 ?다항식.*동시|미지 ?다항식.*동시.*결정|f.g.h.*동시/i, name: 'I-CON 다중 다항식 동시 결정', card: 'P1', types: ['CON', 'EQV', 'MI', 'BW'] },
];

const DEPTH_2_SIGNALS = [
  { pattern: /\|.*\|\s*=.*?케이스|절댓값.*분기|case.*분리|두 ?경우.*분기/i, name: 'I-MI 절댓값 분기 (깊이 2)' },
  { pattern: /도형.*그래프.*변환|식.*도형.*환원|기하.*대수/i, name: 'I-RT 도형↔식 (깊이 2)' },
  { pattern: /합성식|치환.*\\$t\s*=|substitution.*polynomial/i, name: 'I-RT 합성·치환 (깊이 2)' },
  { pattern: /케일리.?해밀턴|cayley|hamilton|A\^?\{?2\}?\s*=.*?A.*?E/i, name: 'I-EQV 케일리해밀턴 (깊이 2)' },
  { pattern: /주기.*발견|cycle.*detect|A\^?\{?n\}?.*?주기/i, name: 'I-PD 주기 발견 (깊이 2)' },
  { pattern: /근과 ?계수.*부호|판별식.*분기|sign.*analysis/i, name: 'I-EQV 근·계수 + 부호' },
  { pattern: /조건.*두 ?개.*만족|2 ?조건.*결합|both.*conditions/i, name: 'I-CON 2조건 통합 (깊이 2)' },
];

const DEPTH_1_SIGNALS = [
  { pattern: /근과 ?계수|sum.*roots|vieta/i, name: 'I-EQV 근·계수 (표준)' },
  { pattern: /대입하면|substitute|\bf\(\d+\)\s*=\s*\d+/i, name: 'I-RT 단순 대입' },
  { pattern: /인수분해.*조립제법|synthetic.*division/i, name: 'I-EQV 인수분해 (표준)' },
  { pattern: /거듭제곱.*직접 계산|A\^?\{?\d\}?.*직접/i, name: 'I-PD 거듭제곱 (직접)' },
  { pattern: /\\binom|nCr|nPr|순열 ?공식|조합 ?공식/i, name: 'I-EQV 순열·조합 공식' },
  { pattern: /절댓값.*?부등식.*?해|\|.*\|.*?<.*?\|.*\|/i, name: 'I-RT 절댓값 부등식 (표준)' },
];

// 시험지 슬롯 추출
const problemRegex = /\\begin\{problem\}\{(\d+)\}\{s\}([\s\S]*?)\\end\{problem\}/g;
const slots = [];
for (const m of content.matchAll(problemRegex)) {
  const num = parseInt(m[1]);
  const body = m[2];
  const pointMatch = body.match(/\\pointbadge\{([\d.]+)\}/);
  const point = pointMatch ? parseFloat(pointMatch[1]) : 0;
  slots.push({ num, body, point });
}

if (slots.length === 0) {
  console.error('⚠️  problem 환경 발견 0개');
  process.exit(2);
}

// 슬롯별 깊이 신호 매칭 (v3.7 — 감쇠 + 이중 게이트)
function analyzeSlot(slot, unitCode) {
  const decayedTypes = DECAYED_TYPES[unitCode] || DECAYED_TYPES._default;
  const rawSignals = [];   // {depth, name, card, types}
  const cards = new Set(); // 매칭된 P1~P6 카드 집합

  for (const sig of DEPTH_3_SIGNALS) {
    if (sig.pattern.test(slot.body)) {
      rawSignals.push({ depth: 3, name: sig.name, card: sig.card, types: sig.types });
      if (sig.card) cards.add(sig.card);
    }
  }
  for (const sig of DEPTH_2_SIGNALS) {
    if (sig.pattern.test(slot.body)) {
      rawSignals.push({ depth: 2, name: sig.name, card: null, types: [] });
    }
  }
  for (const sig of DEPTH_1_SIGNALS) {
    if (sig.pattern.test(slot.body)) {
      rawSignals.push({ depth: 1, name: sig.name, card: null, types: [] });
    }
  }

  // v3.7 §2.9 감쇠: 자산화 유형(CON·EQV·MI) depth 3 라벨 중 P1~P6 카드 미연결 → depth 2 강등
  const matches = rawSignals.map(sig => {
    let effectiveDepth = sig.depth;
    let decayed = false;
    if (sig.depth === 3 && !sig.card) {
      // 카드 없는 depth 3 신호 중 자산화 유형만 강등
      const hasDecayedType = sig.types.some(t => decayedTypes.includes(t));
      const hasNonDecayedType = sig.types.some(t => !decayedTypes.includes(t));
      // 자산화 유형만 있고 비자산화 유형이 없으면 강등
      if (hasDecayedType && !hasNonDecayedType) {
        effectiveDepth = 2;
        decayed = true;
      }
    }
    return { ...sig, effectiveDepth, decayed };
  });

  const effectiveDepths = matches.map(m => m.effectiveDepth);
  const count = effectiveDepths.length;
  const max = count > 0 ? Math.max(...effectiveDepths) : 0;
  const avg = count > 0 ? effectiveDepths.reduce((a, b) => a + b, 0) / count : 0;
  const score = max * 2 + avg;
  const cardCount = cards.size;

  // v3.8 ★ 분류 + 이중 게이트 (pending 폐기, 이분법)
  let star = '';
  let starPremium = false;      // v3.8: 게이트 1+2 이분법
  const gate1 = (score >= 8.5 && max === 3 && count >= 5);
  const gate2 = (cardCount >= 2);

  if (count === 0) {
    star = '절차형';
  } else if (gate1 && gate2) {
    star = '★ 5 최상위';
    starPremium = true;         // v3.8: 통과
  } else if (gate1 && !gate2) {
    star = '★ 5';               // 게이트 2 실패 → 최상위 아닌 ★ 5
    starPremium = false;
  } else if (score >= 7) {
    star = '★ 5';
  } else if (score >= 5) {
    star = '★ 4';
  } else if (score >= 3) {
    star = '★ 3';
  } else {
    star = '★ 2 이하';
  }

  // v3.9 §2.13 저노출 유형 카운트 (이식 가능 vs 저노출 vs v3.6 신설)
  const insightTypes = new Set();
  for (const m of matches) {
    for (const t of (m.types || [])) insightTypes.add(t);
  }
  const transplantRare = [...insightTypes].filter(t => RARE_TYPES.TRANSPLANT.includes(t));
  const lowRare = [...insightTypes].filter(t => RARE_TYPES.LOW.includes(t));
  const v36Excluded = [...insightTypes].filter(t => RARE_TYPES.V36_EXCLUDED.includes(t));

  const decayCount = matches.filter(m => m.decayed).length;

  // 배점 → ★ 매핑 (대략적)
  let pointStar = '';
  if (slot.point <= 2.5) pointStar = '★ 1~2';
  else if (slot.point <= 3.5) pointStar = '★ 3';
  else if (slot.point <= 4) pointStar = '★ 3~4';
  else if (slot.point <= 4.5) pointStar = '★ 4';
  else if (slot.point <= 5) pointStar = '★ 5';
  else pointStar = '★ 5 (최상위)';

  return {
    count, max, avg, score, star, starPremium,
    cards: [...cards], cardCount, decayCount, pointStar, matches,
    insightTypes: [...insightTypes],
    transplantRare, lowRare, v36Excluded,
  };
}

// 파일명에서 단원 추론 (--unit 없을 시)
function inferUnit(path) {
  if (unitFlag) return unitFlag;
  const p = path.replace(/\\/g, '/');
  if (/CM1[-_]?PL|다항식/.test(p)) return 'CM1-PL';
  if (/CM1[-_]?EQ|방정식|부등식/.test(p)) return 'CM1-EQ';
  if (/CM1[-_]?CB|경우의수|순열|조합/.test(p)) return 'CM1-CB';
  if (/CM1[-_]?MX|행렬/.test(p)) return 'CM1-MX';
  if (/CM2[-_]?GM|도형/.test(p)) return 'CM2-GM';
  if (/CM2[-_]?ST|집합|명제/.test(p)) return 'CM2-ST';
  if (/CM2[-_]?FN|함수/.test(p)) return 'CM2-FN';
  if (/CM2[-_]?RF|유리|무리/.test(p)) return 'CM2-RF';
  return '_default';
}

const unitCode = inferUnit(file);

// 분석 + 출력
console.log(`📊 통찰 깊이 자동 채점 (v2.2 — schema v3.9)`);
console.log(`📄 ${file}: ${slots.length}문`);
console.log(`🎯 단원: ${unitCode} | 감쇠 유형: ${(DECAYED_TYPES[unitCode] || DECAYED_TYPES._default).join('·')}`);
console.log(`🌱 이식 가능 저노출: ${RARE_TYPES.TRANSPLANT.join('·')} | 저노출: ${RARE_TYPES.LOW.join('·')} | v3.6 제외: ${RARE_TYPES.V36_EXCLUDED.join('·')}\n`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('# | 배점 | 배점★    | score | m·a·cnt    | 카드 | 감쇠 | 저노출 | 정★         | premium | 일치');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const drift = [];
const star5Slots = [];
const star5PremiumSlots = [];
const transplantSlots = [];   // v3.9: 이식 가능 저노출 (XU·SYM·PD) 사용 슬롯
const anyRareSlots = [];      // v3.9: 이식+저노출 통합 슬롯

for (const slot of slots) {
  const r = analyzeSlot(slot, unitCode);
  const numStr = String(slot.num).padStart(2);
  const ptStr = String(slot.point).padEnd(4);
  const ptStarStr = r.pointStar.padEnd(8);
  const scoreStr = r.score.toFixed(2).padStart(5);
  const detail = `m${r.max}·a${r.avg.toFixed(1)}·c${r.count}`.padEnd(10);
  const cardStr = r.cards.length ? r.cards.join('') : '  -  ';
  const decayStr = r.decayCount > 0 ? String(r.decayCount).padStart(2) : ' 0';
  const rareStr = (r.transplantRare.length ? `T:${r.transplantRare.join(',')}` : r.lowRare.length ? `L:${r.lowRare.join(',')}` : '  -').padEnd(6);
  const starStr = r.star.padEnd(11);
  const premStr = (r.starPremium ? 'true' : 'false').padEnd(5);

  const pointStarRank = slot.point <= 2.5 ? 1.5 : slot.point <= 3.5 ? 3 : slot.point <= 4 ? 3.5 : slot.point <= 4.5 ? 4 : slot.point <= 5 ? 5 : 5.5;
  let estStarRank = 0;
  if (r.star.includes('최상위') || r.star === '★ 5') estStarRank = 5;
  else if (r.star === '★ 4') estStarRank = 4;
  else if (r.star === '★ 3') estStarRank = 3;
  else if (r.star.startsWith('★ 2')) estStarRank = 2;
  else estStarRank = 1;

  const diff = estStarRank - pointStarRank;
  const matchSym = Math.abs(diff) <= 0.5 ? '✓' : (diff > 0 ? `↑+${diff.toFixed(1)}` : `↓${diff.toFixed(1)}`);

  if (star5Only && estStarRank < 5 && pointStarRank < 5) continue;

  console.log(`${numStr}| ${ptStr}| ${ptStarStr}| ${scoreStr} | ${detail} | ${cardStr.padEnd(4)} | ${decayStr}   | ${rareStr} | ${starStr} | ${premStr}   | ${matchSym}`);

  if (Math.abs(diff) > 0.5) drift.push({ num: slot.num, point: slot.point, pointStar: r.pointStar, est: r.star, diff });
  if (estStarRank >= 5) star5Slots.push({ num: slot.num, score: r.score, matches: r.matches, transplantRare: r.transplantRare });
  if (r.starPremium) star5PremiumSlots.push({ num: slot.num, score: r.score, count: r.count, matches: r.matches, cards: r.cards });
  if (r.transplantRare.length > 0) transplantSlots.push({ num: slot.num, types: r.transplantRare });
  if (r.transplantRare.length + r.lowRare.length > 0) anyRareSlots.push({ num: slot.num });
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log(`📈 종합 (v3.9):`);
console.log(`   ★ 5 추정 슬롯: ${star5Slots.length}문`);
console.log(`   ★ 5 최상위 (게이트 1+2 통과): ${star5PremiumSlots.length}문`);
console.log(`   이식 가능 저노출 (XU·SYM·PD) 슬롯: ${transplantSlots.length}문 (권장 ≥ 2, 25문 시험지)`);
console.log(`   저노출 통합 슬롯: ${anyRareSlots.length}문 (권장 ≥ 6, 25문 시험지)`);
console.log(`   드리프트: ${drift.length}문`);

// v3.9 §2.13 저노출 슬롯 부족 경고
if (slots.length >= 20) {
  if (transplantSlots.length < 2) {
    console.log(`\n🔴 RED: 이식 가능 저노출 (XU·SYM·PD) 슬롯 ${transplantSlots.length}문 < 2. §2.13 회차 의무 미충족.`);
  }
  if (anyRareSlots.length < 6) {
    console.log(`\n🟡 YELLOW: 저노출 유형 슬롯 ${anyRareSlots.length}문 < 6. 통찰 편식 신호 (CON·EQV·MI 위주).`);
  }
}

// ★ 5 슬롯 중 이식 가능 저노출 유형 부재 → RED (§2.13)
const star5NoTransplant = star5Slots.filter(s => s.transplantRare.length === 0);
if (star5NoTransplant.length > 0) {
  console.log(`\n🔴 RED: ★ 5 슬롯 ${star5NoTransplant.length}문에 이식 가능 저노출 유형 (XU·SYM·PD) 부재 (§2.13 위반):`);
  for (const s of star5NoTransplant) console.log(`   #${s.num}: I-XU / I-SYM / I-PD 중 1개 이상 라벨링 필요`);
}

if (star5PremiumSlots.length > 0) {
  console.log(`\n⭐ ★ 5 최상위 슬롯 (게이트 1+2 통과):`);
  for (const s of star5PremiumSlots) {
    console.log(`   #${s.num}: depth_score=${s.score.toFixed(2)}, count=${s.count}, 카드=[${s.cards.join(',')}]`);
    for (const m of s.matches.slice(0, 5)) {
      const cardTag = m.card ? ` [${m.card}]` : '';
      const decayTag = m.decayed ? ' ⬇감쇠(3→2)' : '';
      console.log(`      - 깊이 ${m.effectiveDepth || m.depth}: ${m.name}${cardTag}${decayTag}`);
    }
  }
}

if (drift.length > 0) {
  console.log(`\n⚠️  드리프트 슬롯 (배점★ vs 정★ 차이 > 0.5):`);
  for (const d of drift) {
    console.log(`   #${d.num} (${d.point}점, ${d.pointStar}): 정★ = ${d.est} (차이 ${d.diff > 0 ? '+' : ''}${d.diff.toFixed(1)})`);
  }
}

console.log(`\n=== 단일 출처 ===`);
console.log(`schema.md v3.9 §2.4·§2.9·§2.12·§2.13 + 12-S5-insight-depth-메트릭.md v1.0`);
console.log(`v3.9 변경: 이식 가능 저노출 (XU·SYM·PD) 분리, v3.6 신설 (SC·VF) 강제 제외`);
console.log(`주의: 본 도구는 휴리스틱이며 정밀 판정은 problem-review v3.9 에이전트 호출`);

// ★ 5 최상위가 적으면 WARN
if (star5PremiumSlots.length === 0 && slots.length >= 20) {
  console.log('\n🟡 WARN: 이중 게이트 통과 슬롯 0건. 시리즈 변별 정점 부족 가능성.');
  console.log('   권장: P1~P6 카드 2개 이상 명시적으로 매칭되는 슬롯 1개 이상 도입');
  process.exit(2);
}

process.exit(0);
