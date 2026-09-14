#!/usr/bin/env node
// origin_verified 필드 강제 검증 (schema §2.13.1 · D1)
// 2026-07-14 세션 42 후반부
//
// 사용법: node scripts/origin-verification-check.mjs <청사진.yaml>
//   반환 코드: 0 = 통과 / 1 = 위반 / 2 = 마스터 검토 대기

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/origin-verification-check.mjs <청사진.yaml>');
  process.exit(2);
}

const file = args[0];
if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}

const yaml = fs.readFileSync(file, 'utf8');

// 슬롯 개수 카운트 (- n: 로 시작)
const slotMatches = [...yaml.matchAll(/^\s*-\s*n:\s*(\d+)/gm)];
const totalSlots = slotMatches.length;

// origin_verified 필드 존재 확인
const originMatches = [...yaml.matchAll(/origin_verified:/g)];
const originCount = originMatches.length;

// category 3분류 카운트
const commercialCount = (yaml.match(/category:\s*commercial_source/g) || []).length;
const derivedCount = (yaml.match(/category:\s*derived_from/g) || []).length;
const originalCount = (yaml.match(/category:\s*original_combo/g) || []).length;

console.log(`🔍 origin_verified 검증`);
console.log(`   총 슬롯: ${totalSlots}`);
console.log(`   origin_verified 필드: ${originCount}\n`);

console.log(`분류:`);
console.log(`  ✅ commercial_source: ${commercialCount}`);
console.log(`  🟡 derived_from: ${derivedCount}`);
console.log(`  🔴 original_combo: ${originalCount} (마스터 검토 대기)`);

const missing = totalSlots - originCount;
if (missing > 0) {
  console.error(`\n🔴 origin_verified 필드 누락: ${missing}슬롯`);
  process.exit(1);
}

// original_combo 슬롯 상세
if (originalCount > 0) {
  console.log(`\n🔴 original_combo 슬롯 (마스터 검토 강제):`);
  const originalRegex = /^\s*-\s*n:\s*(\d+)[\s\S]*?category:\s*original_combo/gm;
  const originalSlots = [...yaml.matchAll(originalRegex)];
  for (const m of originalSlots) {
    console.log(`  - 슬롯 #${m[1]}`);
  }
  console.error(`\n⚠️  original_combo 지정 슬롯은 agent 자체 저장 금지 · 마스터 리뷰 필수`);
  process.exit(2);
}

// source_ref 필드 확인 (commercial_source·derived_from 슬롯)
const sourceRefCount = (yaml.match(/source_ref:/g) || []).length;
if (sourceRefCount < commercialCount + derivedCount) {
  console.error(`\n🔴 source_ref 필드 누락: ${commercialCount + derivedCount - sourceRefCount}슬롯`);
  process.exit(1);
}

console.log(`\n✅ origin_verified 검증 통과 (schema §2.13.1)`);
process.exit(0);
