#!/usr/bin/env node
// 도구 다양성 검사 — 시험지 정점 문항 (★ ≥ 4) primary_tool 겹침 상한 검증
// 2026-07-11 마스터 확립. schema.md §2.17 정합.
//
// 단일 출처:
//   - bank/schema.md §2.17 도구 축
//   - bank/도구-카테고리.md 카테고리 목록
//
// 원칙:
//   시험지 1회분 정점 문항 (★ ≥ 4) 에서 같은 primary_tool 반복 ≤ 1건.
//   초과 시 RED (exit 1).
//
// 사용법:
//   node scripts/tool-diversity-check.mjs <청사진.yaml>

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/tool-diversity-check.mjs <청사진.yaml>');
  console.error('  반환 코드: 0 = 통과 / 1 = 차단 / 2 = 오용');
  process.exit(2);
}

const blueprintPath = args[0];
if (!fs.existsSync(blueprintPath)) {
  console.error(`❌ 파일 없음: ${blueprintPath}`);
  process.exit(2);
}

const raw = fs.readFileSync(blueprintPath, 'utf8');
let doc;
try {
  doc = yaml.load(raw);
} catch (e) {
  console.error(`❌ YAML 파싱 실패: ${e.message}`);
  process.exit(2);
}

const slots = doc?.slots ?? [];
if (!Array.isArray(slots) || slots.length === 0) {
  console.error('❌ slots 배열 없음 or 비어있음');
  process.exit(2);
}

// 알려진 도구 카테고리 (bank/도구-카테고리.md 정합)
const KNOWN_CATEGORIES = new Set([
  // CM1
  'PL-01', 'PL-02', 'PL-03', 'PL-04', 'PL-05',
  'EQ-01', 'EQ-02', 'EQ-03', 'EQ-04', 'EQ-05', 'EQ-06', 'EQ-07',
  'CB-01', 'CB-02', 'CB-03', 'CB-04',
  'MX-01', 'MX-02', 'MX-03', 'MX-04',
  // CM2
  'GM-01', 'GM-02', 'GM-03', 'GM-04', 'GM-05', 'GM-06', 'GM-07',
  'ST-01', 'ST-02', 'ST-03', 'ST-04', 'ST-05', 'ST-06', 'ST-07',
  'FN-01', 'FN-02', 'FN-03', 'FN-04',
  'RF-01', 'RF-02', 'RF-03', 'RF-04',
]);

console.log('🔍 도구 다양성 검사 (schema.md §2.17)');
console.log(`   청사진: ${blueprintPath}`);
console.log(`   슬롯 수: ${slots.length}\n`);

// 1. primary_tool 필드 누락 검출
const missingTool = [];
const unknownTool = [];
const getNum = s => s.number ?? s.n ?? '?';
for (const slot of slots) {
  if (!slot.primary_tool) {
    missingTool.push(getNum(slot));
  } else if (!KNOWN_CATEGORIES.has(slot.primary_tool)) {
    unknownTool.push({ n: getNum(slot), tool: slot.primary_tool });
  }
}

if (missingTool.length > 0) {
  console.error(`⚠️  primary_tool 필드 누락 슬롯: ${missingTool.join(', ')}`);
  console.error('   book.yaml / 청사진.yaml에 각 슬롯 primary_tool 명시 필요.');
  console.error('   bank/도구-카테고리.md 참조.\n');
}
if (unknownTool.length > 0) {
  console.error('⚠️  알 수 없는 도구 카테고리:');
  for (const u of unknownTool) console.error(`   슬롯 ${u.n}: ${u.tool}`);
  console.error('   bank/도구-카테고리.md에 등재 후 재시도.\n');
}

// 2. 정점 문항 (★ ≥ 4) 필터 + 카테고리 카운트
//   star 필드 위치: 최상위 s.star, v5_scores.star, scores.star 순 fallback
const getStar = s => s.star ?? s.v5_scores?.star ?? s.scores?.star ?? 0;
const premium = slots.filter(s => getStar(s) >= 4 && s.primary_tool);
if (premium.length === 0) {
  console.log('ℹ️  정점 문항 (★ ≥ 4) 없음. 검사 대상 없음.');
  process.exit(missingTool.length + unknownTool.length > 0 ? 1 : 0);
}

console.log(`📊 정점 문항 (★ ≥ 4) ${premium.length}건 도구 분포:`);
const counter = new Map();
for (const slot of premium) {
  const tool = slot.primary_tool;
  if (!counter.has(tool)) counter.set(tool, []);
  counter.get(tool).push(getNum(slot));
}
for (const [tool, nums] of counter.entries()) {
  const flag = nums.length >= 2 ? ' 🔴' : '';
  console.log(`   ${tool}: ${nums.length}건 (문항 ${nums.join(', ')})${flag}`);
}
console.log();

// 3. 반복 검출
const duplicates = [...counter.entries()].filter(([, nums]) => nums.length >= 2);
if (duplicates.length > 0) {
  console.error('🔴 도구 다양성 위반 (같은 primary_tool ≥ 2건):');
  for (const [tool, nums] of duplicates) {
    console.error(`   ${tool}: 문항 ${nums.join(', ')}`);
  }
  console.error('\n   대응: 반복된 카테고리의 슬롯 중 통찰 깊이 낮은 쪽을 다른 도구로 재출제.');
  console.error('   bank/도구-카테고리.md에서 대체 카테고리 선택.\n');
  process.exit(1);
}

if (missingTool.length > 0 || unknownTool.length > 0) {
  console.error('⚠️  필드 누락·미등재 도구 있음. 정정 후 재실행.');
  process.exit(1);
}

console.log('✅ 도구 다양성 통과. 정점 문항 모두 서로 다른 primary_tool.');
process.exit(0);
