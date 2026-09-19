#!/usr/bin/env node
// 시험지 100점 정합 자동 검산
// 2026-06-24 v1.0 마스터 확립 — [[feedback_100_point_policy]] 자동화

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/total-score-check.mjs <test.tex> [expected_total=100]');
  console.error('       반환 코드: 0 = 정합 / 1 = 위반');
  process.exit(2);
}

const file = args[0];
const expected = args[1] ? parseFloat(args[1]) : 100;

if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}

const content = fs.readFileSync(file, 'utf8');

// \pointbadge{N} 모두 추출
const badgeRegex = /\\(?:pointbadge|pts)\{([0-9.]+)\}/g;
const matches = [...content.matchAll(badgeRegex)];

if (matches.length === 0) {
  console.error(`⚠️  \\pointbadge / \\pts 발견 0개. 시험지 파일 맞나요?`);
  process.exit(2);
}

const badges = matches.map(m => parseFloat(m[1]));
const total = badges.reduce((a, b) => a + b, 0);
const totalRounded = Math.round(total * 10) / 10;

console.log(`📊 \\pointbadge/\\pts 카운트: ${badges.length}`);
console.log(`📊 합계: ${totalRounded}점 (기대값: ${expected}점)`);

// 구간별 합산 (examsection 단위로)
const sectionRegex = /\\examsection\{([^}]+)\}/g;
const sections = [...content.matchAll(sectionRegex)];
if (sections.length > 0) {
  console.log(`\n📐 구간 (${sections.length}개):`);
  // 각 examsection 위치를 기준으로 그 다음 examsection (또는 끝)까지의 \pointbadge 합
  for (let i = 0; i < sections.length; i++) {
    const start = sections[i].index;
    const end = (i + 1 < sections.length) ? sections[i + 1].index : content.length;
    const segment = content.slice(start, end);
    const segBadges = [...segment.matchAll(/\\(?:pointbadge|pts)\{([0-9.]+)\}/g)].map(m => parseFloat(m[1]));
    const segSum = Math.round(segBadges.reduce((a, b) => a + b, 0) * 10) / 10;
    const label = sections[i][1].slice(0, 60);
    console.log(`  - ${label}: ${segBadges.length}문 = ${segSum}점`);
  }
}

// ★ 분포 (점수 → 추정 ★)
const starMap = (n) => {
  if (n <= 2.5) return '★ 1·2';
  if (n <= 3.5) return '★ 3';
  if (n <= 4.5) return '★ 4';
  return '★ 5';
};
const starDist = {};
for (const b of badges) {
  const star = starMap(b);
  starDist[star] = (starDist[star] || 0) + 1;
}
console.log(`\n📈 ★ 분포 (점수 기반 추정):`);
for (const [star, count] of Object.entries(starDist)) {
  console.log(`  ${star}: ${count}문`);
}

// 정합 판정
if (Math.abs(totalRounded - expected) < 0.01) {
  console.log(`\n✅ 100점 정합 통과 (${totalRounded} = ${expected})`);
  process.exit(0);
} else {
  console.error(`\n❌ 100점 정합 위반: 합계 ${totalRounded}점, 기대 ${expected}점 (차이 ${(totalRounded - expected).toFixed(1)}점)`);
  process.exit(1);
}
