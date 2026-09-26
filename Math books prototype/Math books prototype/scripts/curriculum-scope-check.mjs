#!/usr/bin/env node
// 시험 범위 검증 (§9)
// 2026-07-14 세션 42 후반부 · CM2 학기별 범위 강제
//
// 사용법: node scripts/curriculum-scope-check.mjs <청사진.yaml> <문제.tex>
//   --scope <2학기-중간|1학기-기말|...>
//   반환 코드: 0 = 통과 / 1 = 위반

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/curriculum-scope-check.mjs <청사진.yaml> <문제.tex> [--scope 2학기-중간]');
  process.exit(2);
}

const yamlFile = args[0];
const texFile = args[1];
const scopeArg = args.includes('--scope') ? args[args.indexOf('--scope') + 1] : '2학기-중간';

if (!fs.existsSync(yamlFile) || !fs.existsSync(texFile)) {
  console.error('⚠️  파일 없음');
  process.exit(2);
}

// CM2 학기별 시험 범위 (와부고 기준)
const SCOPE_UNITS = {
  '1학기-중간': { allow: ['CM2-GM'], forbid: ['CM2-ST', 'CM2-FN', 'CM2-RF', 'CM1-'] },
  '1학기-기말': { allow: ['CM2-GM', 'CM2-ST'], forbid: ['CM2-FN', 'CM2-RF', 'CM1-'] },
  '2학기-중간': { allow: ['CM2-GM', 'CM2-ST'], forbid: ['CM2-FN', 'CM2-RF', 'CM1-'] },
  '2학기-기말': { allow: ['CM2-FN', 'CM2-RF'], forbid: ['CM2-GM', 'CM2-ST', 'CM1-'] },
};

const scope = SCOPE_UNITS[scopeArg];
if (!scope) {
  console.error(`⚠️  scope 인식 불가: ${scopeArg}`);
  console.error(`   지원: ${Object.keys(SCOPE_UNITS).join(', ')}`);
  process.exit(2);
}

const yaml = fs.readFileSync(yamlFile, 'utf8');
const tex = fs.readFileSync(texFile, 'utf8');
let redCount = 0;

console.log(`🔍 §9 시험 범위 검증 (${scopeArg})`);
console.log(`   허용: ${scope.allow.join(', ')}`);
console.log(`   금지: ${scope.forbid.join(', ')}\n`);

// ─── 청사진 range.units 확인 ─────────────
const unitRegex = /units:\s*\[([^\]]+)\]/;
const unitsMatch = yaml.match(unitRegex);
if (unitsMatch) {
  const units = unitsMatch[1].split(',').map(u => u.trim().replace(/["']/g, ''));
  console.log(`청사진 range.units: [${units.join(', ')}]`);

  for (const unit of units) {
    const isForbidden = scope.forbid.some(f => unit.startsWith(f));
    const isAllowed = scope.allow.some(a => unit.startsWith(a));

    if (isForbidden) {
      console.log(`🔴 range.units에 금지 unit: ${unit}`);
      redCount++;
    } else if (!isAllowed) {
      console.log(`🟡 range.units에 예상 외 unit: ${unit}`);
    }
  }
}

// ─── 슬롯별 unit 필드 확인 ─────────────
const slotUnitRegex = /unit:\s*(CM[12]-[A-Z]+)/g;
const slotUnits = [...yaml.matchAll(slotUnitRegex)].map(m => m[1]);
console.log(`\n슬롯 unit 필드 카운트:`);
const unitCounts = {};
for (const u of slotUnits) {
  unitCounts[u] = (unitCounts[u] || 0) + 1;
}
for (const [u, c] of Object.entries(unitCounts)) {
  const isForbidden = scope.forbid.some(f => u.startsWith(f));
  const marker = isForbidden ? '🔴' : '✅';
  console.log(`  ${marker} ${u}: ${c}문`);
  if (isForbidden) {
    console.log(`     범위 밖 · 재출제 대상`);
    redCount += c;
  }
}

// ─── 본문 grep 침입 감지 ─────────────
const invasionPatterns = {
  '다항식 나눗셈': /다항식.*나눗?셈|나머지정리|인수정리/,
  '벡터': /\\vec\{|\\overrightarrow\{/,
  '극한·미분': /\\lim|\\frac\{d.*\}\{d/,
  '적분': /\\int/,
  '시그마': /\\sum/,
  '경우의 수 (CM1-CB)': /순열|조합|nPr|nCr|_[0-9]+\\?P_|_[0-9]+\\?C_/,
};

console.log(`\n본문 grep 침입 감지:`);
for (const [name, regex] of Object.entries(invasionPatterns)) {
  const matches = tex.match(new RegExp(regex, 'g'));
  if (matches) {
    // scope check: 다항식은 2학기중간에는 forbid
    const relevantUnit = name.includes('다항식') ? 'CM1-PL' :
                        name.includes('벡터') ? 'CM2-FN' :
                        name.includes('극한') || name.includes('적분') ? 'CM2-RF' :
                        name.includes('경우의 수') ? 'CM1-CB' : null;
    if (relevantUnit && scope.forbid.some(f => relevantUnit.startsWith(f))) {
      console.log(`🔴 ${name} 침입 감지 (${matches.length}건 · ${relevantUnit} 범위 밖)`);
      redCount++;
    }
  }
}

console.log(`\n=== 요약 ===`);
console.log(`  🔴 RED: ${redCount}건`);

if (redCount > 0) {
  console.error(`\n❌ §9 시험 범위 위반 ${redCount}건`);
  console.error(`   단일 출처: bank/발문-금지-워딩.md v2.0 §9`);
  process.exit(1);
} else {
  console.log(`\n✅ §9 시험 범위 정합`);
  process.exit(0);
}
