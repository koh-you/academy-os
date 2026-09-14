#!/usr/bin/env node
// ★ 분포·라벨 의심 검출 (휴리스틱)
// 2026-06-24 v1.0 마스터 확립 — schema.md v3.2 ★ 산정과는 별개, 명백한 위반 검출만
//
// 자동 검출:
// 1. 단답형에 ★ 1 (2.5점 이하) — 단답형은 ★ 2~5 권장
// 2. 논술형에 ★ 3 이하 (4점 이하) — 논술형은 ★ 4~5 권장
// 3. 객관식 점수 분포 (★ 1·2 합 비율 / ★ 5 비율 권장 범위 검사)
// 4. 점수→★ 매핑 일관성 검증
// 5. 한 구간에 동일 점수 5문 이상 (변별력 부족)

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/star-consistency-check.mjs <test.tex>');
  console.error('       반환 코드: 0 = 의심 없음 / 1 = 🔴 위반 / 2 = 🟡 의심');
  process.exit(2);
}

const file = args[0];
if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}

const content = fs.readFileSync(file, 'utf8');

// 점수 → ★ 매핑 (디자인 가이드 기준)
function scoreToStar(pts) {
  if (pts <= 2.5) return 1;
  if (pts <= 3) return 2;
  if (pts <= 3.5) return 3;
  if (pts <= 4) return 3;  // ★3 ~ ★4 경계
  if (pts <= 4.5) return 4;
  if (pts <= 5) return 5;
  return 5;  // 5.5점 = ★5 (논술 최고난도)
}

// 구간별로 \pointbadge 추출
const sectionRegex = /\\examsection\{([^}]+)\}/g;
const sections = [...content.matchAll(sectionRegex)];
if (sections.length === 0) {
  console.error('⚠️  \\examsection 발견 0개. 시험지 구조 아닌가요?');
  process.exit(2);
}

const sectionBadges = [];
for (let i = 0; i < sections.length; i++) {
  const start = sections[i].index;
  const end = (i + 1 < sections.length) ? sections[i + 1].index : content.length;
  const segment = content.slice(start, end);
  const badges = [...segment.matchAll(/\\pointbadge\{([0-9.]+)\}/g)].map(m => parseFloat(m[1]));
  const label = sections[i][1].slice(0, 30);
  // 구간 분류 (객관식 / 단답형 / 논술형)
  let kind = 'unknown';
  if (label.includes('객관')) kind = 'objective';
  else if (label.includes('단답')) kind = 'short';
  else if (label.includes('논술')) kind = 'long';
  sectionBadges.push({ label, kind, badges });
}

const reds = [];
const yellows = [];

console.log('📊 구간별 점수 분포');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

for (const sec of sectionBadges) {
  console.log(`\n[${sec.kind}] ${sec.label}: ${sec.badges.length}문, 합 ${sec.badges.reduce((a,b)=>a+b,0).toFixed(1)}점`);
  const dist = {};
  for (const b of sec.badges) {
    const star = scoreToStar(b);
    dist[`${b}점(★${star})`] = (dist[`${b}점(★${star})`] || 0) + 1;
  }
  for (const [k, v] of Object.entries(dist)) {
    console.log(`   ${k}: ${v}문`);
  }

  // 🔴 단답형에 ★ 1 (2.5점 이하)
  if (sec.kind === 'short') {
    const lowStars = sec.badges.filter(b => b <= 2.5);
    if (lowStars.length > 0) {
      reds.push(`단답형에 ★ 1 (${lowStars.length}문 - 점수 ≤ 2.5): 단답형은 ★ 2~5 권장`);
    }
    // 단답형 점수 1.5 이하는 절대 금지
    const veryLow = sec.badges.filter(b => b < 2);
    if (veryLow.length > 0) {
      reds.push(`단답형에 1.5점 이하 ${veryLow.length}문: 단답형은 최소 ★ 2 (2.5점)`);
    }
  }

  // 🔴 논술형에 ★ 3 이하 (4점 이하)
  if (sec.kind === 'long') {
    const lowStars = sec.badges.filter(b => b <= 4);
    if (lowStars.length > 0) {
      reds.push(`논술형에 ★ 3 이하 (${lowStars.length}문 - 점수 ≤ 4): 논술형은 ★ 4~5 권장`);
    }
  }

  // 🟡 한 구간에 동일 점수 5문 이상 (변별력 부족)
  const sameScore = {};
  for (const b of sec.badges) {
    sameScore[b] = (sameScore[b] || 0) + 1;
  }
  for (const [s, c] of Object.entries(sameScore)) {
    if (c >= 5) {
      yellows.push(`${sec.kind} 구간: ${s}점 ${c}문 (한 점수 5문 이상 — 변별력 부족)`);
    }
  }
}

// 전체 점수 분포
const allBadges = sectionBadges.flatMap(s => s.badges);
const allDist = {};
for (const b of allBadges) {
  const star = scoreToStar(b);
  allDist[`★ ${star}`] = (allDist[`★ ${star}`] || 0) + 1;
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📈 전체 ★ 분포');
for (const [s, c] of Object.entries(allDist).sort()) {
  const pct = ((c / allBadges.length) * 100).toFixed(0);
  console.log(`   ${s}: ${c}문 (${pct}%)`);
}

// 권장 분포 (상위권 25문 기준)
const low12 = (allDist['★ 1'] || 0) + (allDist['★ 2'] || 0);
const star5 = allDist['★ 5'] || 0;

console.log('\n📋 권장 분포 점검 (상위권 25문)');
if (low12 < 4) {
  yellows.push(`★ 1·2 합 ${low12}문 (권장 4~8, ease-in 부족)`);
  console.log(`   🟡 ★ 1·2 합 ${low12}문 (권장 4~8)`);
} else if (low12 > 10) {
  yellows.push(`★ 1·2 합 ${low12}문 (권장 4~8 초과, 기본문 과다)`);
  console.log(`   🟡 ★ 1·2 합 ${low12}문 (권장 4~8 초과)`);
} else {
  console.log(`   ✅ ★ 1·2 합 ${low12}문`);
}

if (star5 < 3) {
  yellows.push(`★ 5 ${star5}문 (권장 3~7, 변별 부족)`);
  console.log(`   🟡 ★ 5 ${star5}문 (권장 3~7)`);
} else if (star5 > 8) {
  yellows.push(`★ 5 ${star5}문 (권장 3~7 초과)`);
  console.log(`   🟡 ★ 5 ${star5}문 (권장 3~7 초과)`);
} else {
  console.log(`   ✅ ★ 5 ${star5}문`);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
if (reds.length === 0 && yellows.length === 0) {
  console.log('✅ ★ 분포·라벨 의심 없음. 통과.');
  process.exit(0);
}

if (reds.length > 0) {
  console.log(`🔴 RED 위반 ${reds.length}건:`);
  for (const r of reds) console.log(`   ${r}`);
}
if (yellows.length > 0) {
  console.log(`🟡 YELLOW 의심 ${yellows.length}건:`);
  for (const y of yellows) console.log(`   ${y}`);
}

console.log('\n=== 단일 출처 ===');
console.log('bank/schema.md v3.2 ★ 산정 + [[feedback_exam_paper_workflow]]');
console.log('주의: 본 도구는 휴리스틱이며, 진정한 v3.2 ★ 산정은 problem-review 에이전트 호출');

if (reds.length > 0) process.exit(1);
process.exit(2);
