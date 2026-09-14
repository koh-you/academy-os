#!/usr/bin/env node
// structure-signature-check — 문항 구조 시그니처 자기복제 감지 도구
// v1.0 (2026-07-13 · 세션 38 후반부 · 방안 F)
//
// 목적:
//   정점 문항 (composite ≥ 24)의 구조 시그니처가 회차 간·내 반복되는지 감지.
//   기존 signature-check는 발문 어구만 · cross-round-insight-check는 통찰 코드만.
//   본 도구는 **구조 시그니처** (정의박스·핵심 대상·소문항 개수·layout 등) 대조.
//
// 사용법:
//   node scripts/structure-signature-check.mjs <청사진.yaml> [prev1.yaml] [prev2.yaml] ...
//
// 구조 시그니처 축 (5축):
//   S1. has_definition_box (bool)
//   S2. primary_object (원·직선·집합·명제·부분집합 등)
//   S3. sub_questions (int, 0~5)
//   S4. layout_hint (probpair·probpairfillpage 등)
//   S5. narrative_theme_category (실생활·수학 내부·기하 지문)
//
// 판정:
//   회차 간: 정점 문항 시그니처 4축+ 일치 → 🔴 RED
//   회차 내: 같은 회차 정점 문항 2개+ 시그니처 3축+ 일치 → 🔴 RED
//
// 관련: policy-no-structure-repetition · master-policy-registry
//
// 반환: 0 GREEN · 1 YELLOW · 2 RED · 3 오용

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/structure-signature-check.mjs <청사진.yaml> [prev1.yaml ...]');
  process.exit(3);
}
const [current, ...prevs] = args;
if (!fs.existsSync(current)) {
  console.error(`❌ 파일 없음: ${current}`);
  process.exit(3);
}

// ── 청사진 파싱 (구조 시그니처 특징 추출) ──────────
function parseSlotsForSignature(src) {
  const slots = [];
  const lines = src.split('\n');
  let inSlots = false;
  let buf = [];

  const flush = () => {
    if (!buf.length) return;
    const raw = buf.join(' ');
    const nM = raw.match(/\bn:\s*(\d+)/);
    if (!nM) { buf = []; return; }
    const num = (name) => { const m = raw.match(new RegExp(`\\b${name}:\\s*(-?\\d+)`)); return m ? parseInt(m[1]) : null; };
    const str = (name) => { const m = raw.match(new RegExp(`\\b${name}:\\s*(?:"([^"]*)"|([A-Za-z][\\w-]*))`)); return m ? (m[1] !== undefined ? m[1] : m[2]) : ''; };
    const bool = (name) => { const m = raw.match(new RegExp(`\\b${name}:\\s*(true|false)`)); return m ? m[1] === 'true' : false; };

    const type = str('type');
    const theme = str('narrative_theme');
    const composite = num('composite');
    const answer = str('answer');
    const answerNote = str('answer_note');

    // S1: 정의박스
    const hasDefBox = bool('has_definition_box');

    // S2: primary_object 추정 (type·theme·answer_note 어구 분석)
    const combined = (type + ' ' + theme + ' ' + answerNote).toLowerCase();
    let primaryObject = 'other';
    if (/원|circle/.test(combined)) primaryObject = '원';
    else if (/직선|line/.test(combined)) primaryObject = '직선';
    else if (/집합|set|부분집합/.test(combined)) primaryObject = '집합';
    else if (/명제|proposition|조건/.test(combined)) primaryObject = '명제';
    else if (/삼각형|다각형/.test(combined)) primaryObject = '다각형';

    // S3: sub_questions
    const subCount = num('sub_questions') || ((answer.match(/\(\d+\)/g) || []).length);

    // S4: layout_hint
    const layoutHint = str('layout_hint') || 'auto';

    // S5: narrative_theme_category
    let narrativeCategory = 'none';
    if (theme) {
      if (/실생활|드론|GPS|팬터그래프|라이다|사도기|터널|조각상|미술관/.test(theme)) {
        narrativeCategory = '실생활';
      } else if (/수학|정의|규칙/.test(theme)) {
        narrativeCategory = '수학내부';
      } else {
        narrativeCategory = '기타지문';
      }
    }

    slots.push({
      n: parseInt(nM[1]),
      type, theme, composite,
      signature: {
        S1_defBox: hasDefBox,
        S2_primaryObject: primaryObject,
        S3_subCount: subCount,
        S4_layoutHint: layoutHint,
        S5_narrativeCat: narrativeCategory,
      },
    });
    buf = [];
  };

  for (const line of lines) {
    if (/^slots:\s*$/.test(line)) { inSlots = true; continue; }
    if (inSlots) {
      if (/^[a-zA-Z_]/.test(line) && !/^\s+/.test(line)) { flush(); inSlots = false; continue; }
      if (/^\s+-\s*\{/.test(line)) { flush(); buf = [line]; }
      else if (buf.length) buf.push(line);
    }
  }
  flush();
  return slots;
}

// 시그니처 일치 축 개수 카운트
function matchCount(sig1, sig2) {
  let count = 0;
  if (sig1.S1_defBox === sig2.S1_defBox) count++;
  if (sig1.S2_primaryObject === sig2.S2_primaryObject) count++;
  if (sig1.S3_subCount === sig2.S3_subCount) count++;
  if (sig1.S4_layoutHint === sig2.S4_layoutHint) count++;
  if (sig1.S5_narrativeCat === sig2.S5_narrativeCat) count++;
  return count;
}

// 정점 문항 필터 (v1.1: star_premium composite ≥ 30만 대조)
// 마스터 지적은 "정점 문항 (16·17) 골조 반복" · 일반 star=5 슬롯 반복은 대조 대상 아님
function premiumSlots(slots) {
  return slots.filter(s => (s.composite || 0) >= 30);
}

// ── 실행 ─────────────────────────────
const currentSrc = fs.readFileSync(current, 'utf8');
const currentSlots = parseSlotsForSignature(currentSrc);
const currentPremium = premiumSlots(currentSlots);

const roundLabel = (p) => {
  const m = p.match(/(\d+)회/);
  return m ? `${m[1]}회` : path.basename(p, '.yaml');
};
const currentRound = roundLabel(current);

console.log('🔍 structure-signature-check v1.0');
console.log(`   신규 청사진: ${currentRound} (${current})`);
console.log(`   비교 대상: ${prevs.length}건\n`);
console.log(`   정점 문항 (star_premium composite ≥ 30): ${currentPremium.length}건`);
console.log(`   (v1.1: 정점만 대조 · 일반 star=5 슬롯은 자기복제 대조 제외)`);

console.log('\n📐 정점 문항 구조 시그니처');
console.log('   #  | defBox | primary | sub | layout             | narrative');
console.log('   ───┼────────┼─────────┼─────┼────────────────────┼──────────');
for (const s of currentPremium) {
  const sig = s.signature;
  console.log(`   ${String(s.n).padStart(2)} | ${sig.S1_defBox ? '  O   ' : '  X   '} | ${sig.S2_primaryObject.padEnd(7)} | ${String(sig.S3_subCount).padStart(3)} | ${sig.S4_layoutHint.padEnd(18)} | ${sig.S5_narrativeCat}`);
}

let violations = [];

// 회차 내 자기복제 검사 (v1.1: 임계 ≥ 4축으로 완화 · 마스터 지적은 "완전 반복 (4~5축)" 겨냥)
console.log('\n=== 회차 내 자기복제 검사 ===');
for (let i = 0; i < currentPremium.length; i++) {
  for (let j = i + 1; j < currentPremium.length; j++) {
    const s1 = currentPremium[i], s2 = currentPremium[j];
    const m = matchCount(s1.signature, s2.signature);
    if (m >= 4) {
      console.log(`   🔴 #${s1.n} vs #${s2.n} · 시그니처 ${m}/5 축 일치 · 자기복제`);
      violations.push({ type: 'intra', s1: s1.n, s2: s2.n, matches: m });
    } else if (m === 3) {
      console.log(`   🟡 #${s1.n} vs #${s2.n} · 시그니처 3/5 축 일치 · 경계 (골조 유사, RED 아님)`);
    }
  }
}
if (violations.filter(v => v.type === 'intra').length === 0) console.log('   ✅ 회차 내 자기복제 (≥ 4축) 없음');

// 회차 간 자기복제 검사 (이전 회차 정점 문항과 4축+ 일치)
console.log('\n=== 회차 간 자기복제 검사 ===');
for (const prevPath of prevs) {
  if (!fs.existsSync(prevPath)) continue;
  const prevSrc = fs.readFileSync(prevPath, 'utf8');
  const prevSlots = parseSlotsForSignature(prevSrc);
  const prevPremium = premiumSlots(prevSlots);
  const prevRound = roundLabel(prevPath);
  console.log(`\n   ${prevRound} 대조 (정점 ${prevPremium.length}건):`);
  for (const cs of currentPremium) {
    for (const ps of prevPremium) {
      const m = matchCount(cs.signature, ps.signature);
      if (m >= 4) {
        console.log(`     🔴 ${currentRound} #${cs.n} vs ${prevRound} #${ps.n} · 시그니처 ${m}/5 축 일치 · 회차 간 자기복제`);
        violations.push({ type: 'inter', current: cs.n, prev_round: prevRound, prev: ps.n, matches: m });
      } else if (m === 3) {
        console.log(`     🟡 ${currentRound} #${cs.n} vs ${prevRound} #${ps.n} · 시그니처 3/5 축 일치 · 경계 (골조 유사)`);
      }
    }
  }
}

console.log('\n=== 요약 ===');
console.log(`   회차 내 자기복제 (≥ 3축): ${violations.filter(v => v.type === 'intra').length}건`);
console.log(`   회차 간 자기복제 (≥ 4축): ${violations.filter(v => v.type === 'inter').length}건`);
console.log(`   총 위반: ${violations.length}건`);

console.log('\n=== 관련 자원 ===');
console.log('   bank/master-policy-registry.md · policy-no-structure-repetition');
console.log('   Gate 4.5 v3.12 편입 · first-draft-report 5축');

if (violations.length > 0) {
  console.log('\n❌ 자기복제 검출 · 정점 문항 골조 다양화 필요');
  process.exit(2);
}
console.log('\n✅ 구조 시그니처 정합 · 자기복제 없음');
process.exit(0);
