#!/usr/bin/env node
// 성취기준 검사 — 청사진 slots의 standard·cm2_scope 필드 검증 + 배점 분포 리포트
// 2026-07-11 세션 33 신설. schema.md §2.18 정합.
//
// 단일 출처:
//   - bank/schema.md §2.18 성취기준 축
//   - bank/성취기준-매핑.md 코드 목록
//
// 원칙:
//   1. `standard` 필드 누락 → WARN
//   2. `cm2_scope: out`인데 활성 시험지 청사진에 편입 → RED (exit 1)
//   3. `cm2_scope: boundary` + `variant_policy: 동등 변형` → RED
//   4. 시험지 성취기준 분포 vs 권장 비율 리포트
//
// 사용법:
//   node scripts/standard-check.mjs <청사진.yaml>

import fs from 'node:fs';
import yaml from 'js-yaml';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/standard-check.mjs <청사진.yaml>');
  process.exit(2);
}

const blueprintPath = args[0];
if (!fs.existsSync(blueprintPath)) {
  console.error(`❌ 파일 없음: ${blueprintPath}`);
  process.exit(2);
}

const doc = yaml.load(fs.readFileSync(blueprintPath, 'utf8'));
const slots = doc?.slots ?? [];
if (!Array.isArray(slots) || slots.length === 0) {
  console.error('❌ slots 배열 없음');
  process.exit(2);
}

// CM1 + CM2 성취기준 코드 목록
const KNOWN_STANDARDS = new Set([
  // CM1
  '10수01-01', '10수01-02',
  '10수02-01', '10수02-02', '10수02-03', '10수02-04',
  '10수03-01', '10수03-02',
  '10수04-01', '10수04-02',
  // CM2
  '10수05-01', '10수05-02', '10수05-03', '10수05-04',
  '10수06-01', '10수06-02', '10수06-03', '10수06-04',
  '10수07-01', '10수07-02', '10수07-03', '10수07-04',
]);

// CM2 대단원 매핑 (배점 비율 집계용)
const CM2_UNIT = {
  '10수05-01': '도형', '10수05-02': '도형', '10수05-03': '도형', '10수05-04': '도형',
  '10수06-01': '집합', '10수06-02': '집합', '10수06-03': '집합', '10수06-04': '집합',
  '10수07-01': '함수', '10수07-02': '함수',
  '10수07-03': '유리무리', '10수07-04': '유리무리',
};

const RECOMMENDED_RATIO_CM2 = {
  '도형': [35, 40],
  '집합': [25, 30],
  '함수': [30, 35],
  '유리무리': [12, 18],
};

console.log('🔍 성취기준 검사 (schema.md §2.18)');
console.log(`   청사진: ${blueprintPath}`);
console.log(`   슬롯 수: ${slots.length}\n`);

const getNum = s => s.number ?? s.n ?? '?';
const getPoints = s => s.points ?? 0;

const missingStd = [];
const unknownStd = [];
const outScope = [];
const boundaryVariant = [];

for (const slot of slots) {
  if (!slot.standard) {
    missingStd.push(getNum(slot));
    continue;
  }
  if (!KNOWN_STANDARDS.has(slot.standard)) {
    unknownStd.push({ n: getNum(slot), std: slot.standard });
    continue;
  }
  const scope = slot.cm2_scope ?? 'in';
  if (scope === 'out') outScope.push({ n: getNum(slot), std: slot.standard });
  if (scope === 'boundary' && /동등\s*변형|수정\s*변형/.test(slot.variant_policy ?? '')) {
    boundaryVariant.push({ n: getNum(slot), std: slot.standard, policy: slot.variant_policy });
  }
}

let red = 0;

if (missingStd.length > 0) {
  console.log(`⚠️  standard 필드 누락 슬롯: ${missingStd.join(', ')}`);
  console.log('   bank/성취기준-매핑.md 참조 후 각 슬롯에 standard 명시 필요.\n');
}
if (unknownStd.length > 0) {
  console.error('🔴 알 수 없는 성취기준 코드:');
  for (const u of unknownStd) console.error(`   슬롯 ${u.n}: ${u.std}`);
  console.error('   bank/성취기준-매핑.md에 등재된 코드만 허용.\n');
  red++;
}
if (outScope.length > 0) {
  console.error('🔴 out-scope 슬롯이 활성 시험지에 편입:');
  for (const o of outScope) console.error(`   슬롯 ${o.n}: ${o.std} (cm2_scope: out)`);
  console.error('   대응: 시험 과목 범위 재확인 or 슬롯 삭제.\n');
  red++;
}
if (boundaryVariant.length > 0) {
  console.error('🔴 boundary 슬롯이 동등/수정 변형 대상:');
  for (const b of boundaryVariant) console.error(`   슬롯 ${b.n}: ${b.std} (${b.policy})`);
  console.error('   boundary 요소는 기출 그대로만 허용, 변형 금지.\n');
  red++;
}

// 배점 분포 집계 (CM2 시험지 기준)
const unitPoints = {};
let totalPoints = 0;
for (const slot of slots) {
  const pts = getPoints(slot);
  totalPoints += pts;
  const unit = CM2_UNIT[slot.standard];
  if (unit) unitPoints[unit] = (unitPoints[unit] ?? 0) + pts;
}

if (totalPoints > 0 && Object.keys(unitPoints).length > 0) {
  console.log(`📊 CM2 대단원별 배점 분포 (총 ${totalPoints}점):`);
  for (const [unit, pts] of Object.entries(unitPoints)) {
    const ratio = (pts / totalPoints * 100).toFixed(1);
    const recommended = RECOMMENDED_RATIO_CM2[unit];
    const inRange = recommended && ratio >= recommended[0] && ratio <= recommended[1];
    const flag = recommended
      ? (inRange ? '✓' : `⚠️  권장 ${recommended[0]}~${recommended[1]}%`)
      : '';
    console.log(`   ${unit}: ${pts}점 (${ratio}%) ${flag}`);
  }
  console.log();
}

if (red > 0) {
  console.error(`🔴 성취기준 위반 ${red}건. 재출제 필요.`);
  process.exit(1);
}

if (missingStd.length > 0) {
  console.error('⚠️  standard 필드 누락 있음. 완전 라벨링 권장.');
  process.exit(1);
}

console.log('✅ 성취기준 통과.');
process.exit(0);
