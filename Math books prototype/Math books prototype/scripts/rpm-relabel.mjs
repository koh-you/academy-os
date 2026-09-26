#!/usr/bin/env node
// scripts/rpm-relabel.mjs
// RPM 정독 파일 tier 재라벨링 (캘리브레이션 v1.3 기준 · 2026-07-16 세션 46)
// 원칙: section 필드 기준 tier 재매핑 · agent 자체 판정 오류 정정
//
// 매핑 규칙 (v1.3):
//   교과서_정복하기 → star_1·2
//   유형익히기 (대표문제) → star_3·4
//   유형익히기_유형JP → star_3·4
//   시험에_꼭_나오는_문제 (기본) → star_3·4
//   시험에_꼭_나오는_문제_중요 → star_3·4
//   시험에_꼭_나오는_문제_실력업 → star_4·5

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/rpm-relabel.mjs <RPM 정독 파일 경로>');
  process.exit(2);
}

const filePath = args[0];
if (!fs.existsSync(filePath)) {
  console.error(`파일 없음: ${filePath}`);
  process.exit(2);
}

const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// 매핑 규칙
const SECTION_TIER = {
  '교과서_정복하기': 'star_1·2',
  '교과서정복하기': 'star_1·2',
  '유형익히기': 'star_3·4',
  '유형익히기_대표문제': 'star_3·4',
  '유형익히기_유형JP': 'star_3·4',
  '시험에_꼭_나오는_문제': 'star_3·4',
  '시험에_꼭_나오는_문제_중요': 'star_3·4',
  '시험에_꼭_나오는_문제_실력업': 'star_4·5',
  '시험에_꼭_나오는_문제_실력Up': 'star_4·5',
};

const stats = { total: 0, changed: 0, sectionCount: {} };
const newLines = [...lines];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const tierMatch = line.match(/^(\s*)tier:\s*(.+)$/);
  if (!tierMatch) continue;

  const indent = tierMatch[1];
  const oldTier = tierMatch[2].trim();

  // 뒤 5줄 안에서 section 필드 찾기 (일반적으로 tier 바로 다음)
  let section = null;
  for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
    const sectionMatch = lines[j].match(/^\s*section:\s*(.+)$/);
    if (sectionMatch) {
      section = sectionMatch[1].trim();
      break;
    }
  }

  if (!section) continue;
  stats.total++;
  stats.sectionCount[section] = (stats.sectionCount[section] || 0) + 1;

  const newTier = SECTION_TIER[section];
  if (!newTier) {
    console.warn(`  ⚠️  섹션 매핑 미정: "${section}" (line ${i + 1})`);
    continue;
  }

  if (oldTier !== newTier) {
    newLines[i] = `${indent}tier: ${newTier}`;
    stats.changed++;
  }
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');

console.log(`✅ RPM 재라벨 완료: ${filePath}`);
console.log(`   총 tier 필드: ${stats.total}건`);
console.log(`   재조정: ${stats.changed}건`);
console.log(`   섹션별 카운트:`);
for (const [sec, cnt] of Object.entries(stats.sectionCount)) {
  const newTier = SECTION_TIER[sec] || '(미정)';
  console.log(`     - ${sec}: ${cnt}건 → ${newTier}`);
}
