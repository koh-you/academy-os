#!/usr/bin/env node
// scripts/series-insight-pool.mjs
// 시리즈 시험지 .tex 파일들에서 회차별 통찰 카드를 자동 추출하여 누적 풀 생성
//
// 용도: 신규 회차 출제 시 *시리즈 미사용 통찰* 우선 추천 위함
// 단일 출처: bank/출제메커니즘-v1.0.md (2026-06-25 마스터 확립)
//
// 사용법:
//   node scripts/series-insight-pool.mjs <시리즈디렉토리>
// 예:
//   node scripts/series-insight-pool.mjs output/공통수학1/동화고-1학기기말-예상

import fs from 'fs';
import path from 'path';

const dir = process.argv[2];
if (!dir) {
  console.error('Usage: node scripts/series-insight-pool.mjs <시리즈디렉토리>');
  process.exit(1);
}

if (!fs.existsSync(dir)) {
  console.error(`Directory not found: ${dir}`);
  process.exit(1);
}

// 회차 .tex 파일 자동 탐색 (N회차-문제.tex)
const files = fs.readdirSync(dir)
  .filter(f => /^\d+회차-문제\.tex$/.test(f))
  .sort((a, b) => parseInt(a) - parseInt(b));

if (files.length === 0) {
  console.error(`No 회차 .tex files found in ${dir}`);
  process.exit(1);
}

console.log(`📚 ${dir}`);
console.log(`📊 ${files.length}개 회차 발견: ${files.join(', ')}\n`);

// 슬롯 단위 추출 패턴
const PROB_RE = /\\begin\{problem\}\{(\d+)\}\{s\}([\s\S]*?)\\end\{problem\}/g;
const POINT_RE = /\\pointbadge\{([\d.]+)\}/;

// 통찰 카드 휴리스틱 분류 (단원·구조·매크로 기반)
function classifySlot(slotBody) {
  const cards = new Set();
  const meta = {};

  // 단원 분류
  if (/begin\{pmatrix\}|행렬|성분|단위행렬|영행렬|이차정사각행렬|A\^|E\b/.test(slotBody)) cards.add('UNIT:MX');
  if (/이차방정식|두\s*근|판별식|복소수|이차부등식|연립부등식|사차방정식|삼차방정식|이차함수.*최댓?값|i\s*=\s*\\sqrt|i\^|허수|켤레/.test(slotBody)) cards.add('UNIT:EQ');
  if (/순열|조합|\\binom|\}C\{|\}P\{|경우의\s*수|카드.*뽑|일렬로|짝수.*개수|학생.*뽑|자리.*나열/.test(slotBody)) cards.add('UNIT:CB');
  if (/다항식|항등식|인수정리|나머지정리|조립제법|곱셈\s*공식|인수분해|P\(x\)|f\(x\).*다항/.test(slotBody) && !cards.has('UNIT:EQ')) cards.add('UNIT:PL');

  // 구조 카드
  if (/\\begin\{conditions\}[\s\S]*?ㄱ\.\s*[\s\S]*?ㄴ\.\s*[\s\S]*?ㄷ\.\s*[\s\S]*?\\end\{conditions\}/.test(slotBody)) cards.add('STRUCT:GNGD');
  if (/textbf\{\(1\)\}[\s\S]*?textbf\{\(2\)\}/.test(slotBody)) cards.add('STRUCT:TwoPart');
  if (/\\begin\{conditions\}\s*\(가\)/.test(slotBody)) cards.add('STRUCT:GaNaDa');

  // 통찰 카드 (휴리스틱)
  if (/케일리.*해밀턴|A\^2\s*=\s*[\d-]*\s*A|A\^\{?2\}?\s*-\s*[\d]*\s*A\s*\+\s*[\d-]*\s*E/.test(slotBody)) cards.add('INSIGHT:CayleyHamilton');
  if (/A\^\{?100\d?\}?|A\^\{?\d{3,}\}?|주기|반복/.test(slotBody)) cards.add('INSIGHT:MatrixPeriod');
  if (/AB\s*[-+]\s*BA|\(A\s*[+-]\s*B\)\^2|A\^2\s*[+-]\s*B\^2|비가환|곱셈공식.*행렬|행렬.*곱셈공식/.test(slotBody)) cards.add('INSIGHT:NonCommMult');
  if (/AB\s*=\s*O|영인자|역행렬\s*유일|단위행렬\s*같|A\^2\s*=\s*A|idempotent|멱등/.test(slotBody)) cards.add('INSIGHT:MatrixSpecial');
  if (/i\^|허수.*거듭제곱|i\s*\+\s*i\^2|복소수.*거듭제곱|\(\\sqrt\{?3\}?\s*[+\-]\s*i\)/.test(slotBody)) cards.add('INSIGHT:ImaginaryPower');
  if (/켤레.*근|\\sqrt\{?\d?\}?\s*[+\-]\s*\\sqrt\{?\d?\}?|a\s*[+\-]\s*b\\sqrt|단일\s*무리수|두\s*무리수/.test(slotBody)) cards.add('INSIGHT:ConjugateRoot');
  if (/사차방정식|복이차|치환.*y\s*=\s*x\^2|y\s*=\s*x\^2.*치환|네\s*실근|네\s*근/.test(slotBody)) cards.add('INSIGHT:QuarticSubst');
  if (/근과\s*계수의?\s*관계|두\s*근의?\s*합|두\s*근의?\s*곱|\\alpha\s*\+\s*\\beta|\\alpha\\beta/.test(slotBody)) cards.add('INSIGHT:VietaRelation');
  if (/연립부등식|연립\s*이차부등식|정수\s*x.*개수|정수\s*x.*존재/.test(slotBody)) cards.add('INSIGHT:SimulInequality');
  if (/조립제법|인수분해.*활용|f\(.*\)\s*=\s*0|f\(.*\)\s*=\s*-?\d*\s*$/.test(slotBody)) cards.add('INSIGHT:FactorTheorem');
  if (/카드.*행렬|행렬.*카드|이차정사각행렬.*\\alpha|\\alpha.*행렬|순서쌍.*행렬|순서쌍.*개수/.test(slotBody) && cards.has('UNIT:CB') && cards.has('UNIT:MX')) cards.add('INSIGHT:CardMatrixComp');
  if (/floor|\\lfloor|가우스/.test(slotBody)) cards.add('INSIGHT:FloorFunction');
  if (/절댓값.*부등식|\|.*x.*\|.*\\le|\|.*\\ge|두\s*절댓값|x\s*-\s*[a-z]|.*x\s*-\s*[a-z]/.test(slotBody) && /\\le|\\ge/.test(slotBody)) cards.add('INSIGHT:AbsInequality');
  if (/이차함수.*직선|y\s*=\s*mx|y\s*=\s*kx|y\s*=\s*ax\^2.*직선|직선.*y\s*=\s*[\d-]+/.test(slotBody)) cards.add('INSIGHT:QuadLineIntersect');
  if (/정의역|제한된\s*범위|범위.*최댓?값|범위.*최솟?값|k\s*\\le\s*x\s*\\le|k-2\s*\\le\s*x|n\s*\\le\s*x/.test(slotBody)) cards.add('INSIGHT:DomainVariable');

  // 점수
  const m = slotBody.match(POINT_RE);
  if (m) meta.point = parseFloat(m[1]);

  return { cards: Array.from(cards).sort(), meta };
}

const pool = [];
const cardFreq = {}; // 카드별 빈도

for (const file of files) {
  const m = file.match(/^(\d+)회차/);
  const round = parseInt(m[1]);
  const content = fs.readFileSync(path.join(dir, file), 'utf8');

  let match;
  PROB_RE.lastIndex = 0;
  while ((match = PROB_RE.exec(content)) !== null) {
    const slot = parseInt(match[1]);
    const body = match[2];
    const { cards, meta } = classifySlot(body);
    pool.push({ round, slot, point: meta.point || null, cards });
    for (const c of cards) cardFreq[c] = (cardFreq[c] || 0) + 1;
  }
}

// 출력
const outDir = 'data/series';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const seriesName = path.basename(dir);
const outFile = path.join(outDir, `${seriesName}-used-insights.json`);
fs.writeFileSync(outFile, JSON.stringify({
  series: seriesName,
  rounds: files.length,
  total_slots: pool.length,
  card_frequency: cardFreq,
  slots: pool
}, null, 2), 'utf8');

console.log(`✅ ${outFile}`);
console.log(`   회차 ${files.length} · 슬롯 ${pool.length} · 카드 종 ${Object.keys(cardFreq).length}`);
console.log();

// 카드별 빈도 (회차 누적)
console.log('=== 카드별 누적 빈도 (시리즈) ===');
const sorted = Object.entries(cardFreq).sort((a, b) => b[1] - a[1]);
for (const [card, freq] of sorted) {
  const flag = freq >= 5 ? '🔴 과다' : freq >= 3 ? '🟡 보통' : '🟢 신규풀';
  console.log(`  ${card.padEnd(35)} ${String(freq).padStart(2)}회 ${flag}`);
}

console.log();
console.log('=== 시리즈 미사용/저빈도 카드 (다음 회차 우선 풀) ===');
const lowFreqCards = sorted.filter(([_, freq]) => freq <= 2).map(([c]) => c);
console.log(`  ${lowFreqCards.length}종 (빈도 ≤ 2)`);
for (const c of lowFreqCards.slice(0, 10)) console.log(`    ${c}`);

console.log();
console.log('=== 단계 4 — 회차별 자기복제 검출 ===');

// 시판 공통 기본 틀 화이트리스트 (회차마다 누적 OK, 자기복제 제외)
// 메커니즘 v1.0 §1.3 적용 — 시판 4종 이상 공통 = 기본 틀
const WHITELIST_CARDS = new Set([
  'UNIT:EQ', 'UNIT:MX', 'UNIT:CB', 'UNIT:PL', // 단원 자체는 시판 공통
  'STRUCT:GNGD',  // ㄱㄴㄷ 확답형 = 시리즈 시그니처 + 시판 공통
  'STRUCT:TwoPart', // (1)(2) 두 물음 = 시판 공통
  'STRUCT:GaNaDa',  // (가)(나)(다) 조건 묶음 = 시판 공통
]);

function filterMeaningfulCards(cards) {
  return cards.filter(c => !WHITELIST_CARDS.has(c));
}

// 직전 회차와 통찰 카드 set 일치율 ≥ 70%면 자기복제 의심
const byRound = {};
for (const s of pool) {
  if (!byRound[s.round]) byRound[s.round] = [];
  byRound[s.round].push(s);
}
const rounds = Object.keys(byRound).map(Number).sort((a, b) => a - b);
for (let i = 1; i < rounds.length; i++) {
  const r1 = rounds[i - 1], r2 = rounds[i];
  const slots1 = byRound[r1];
  const slots2 = byRound[r2];
  let dupes = 0;
  for (const s2 of slots2) {
    // 화이트리스트(시판 공통) 제거 후 의미 있는 카드만 비교
    const meaningful2 = filterMeaningfulCards(s2.cards);
    if (meaningful2.length === 0) continue;
    for (const s1 of slots1) {
      if (s1.slot !== s2.slot) continue;
      const meaningful1 = filterMeaningfulCards(s1.cards);
      const set1 = new Set(meaningful1);
      const set2 = new Set(meaningful2);
      const inter = [...set1].filter(c => set2.has(c)).length;
      const union = new Set([...set1, ...set2]).size;
      const jaccard = union === 0 ? 0 : inter / union;
      if (jaccard >= 0.7 && meaningful2.length >= 2) {
        dupes++;
        console.log(`  🔴 ${r1}회차 #${s1.slot} ↔ ${r2}회차 #${s2.slot}: 카드 일치율 ${(jaccard*100).toFixed(0)}% (공통 ${inter}/${union})`);
        console.log(`     공통 의미 카드: ${[...set1].filter(c => set2.has(c)).join(', ')}`);
      }
    }
  }
  if (dupes === 0) console.log(`  ✅ ${r1} → ${r2}회차: 자기복제 0건`);
  else console.log(`  ⚠️  ${r1} → ${r2}회차: 자기복제 ${dupes}건`);
}

console.log();
console.log('=== 단일 출처 ===');
console.log('bank/출제메커니즘-v1.0.md §2 (2026-06-25 마스터 확립)');
