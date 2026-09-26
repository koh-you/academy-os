#!/usr/bin/env node
// Mechanism 은행 v1.0 앵커 실질 유사도 검증 (v1.6 T4 신설)
// 2026-07-14 세션 42 후반부 · bank/mechanism-은행.md v1.0 강제 참조
//
// 사용법: node scripts/anchor-similarity-check.mjs <청사진.yaml> <문제.tex>
//   반환 코드: 0 = GREEN / 1 = RED (mechanism 미준수)

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/anchor-similarity-check.mjs <청사진.yaml> <문제.tex>');
  process.exit(2);
}

const [yamlFile, texFile] = args;
if (!fs.existsSync(yamlFile) || !fs.existsSync(texFile)) {
  console.error('⚠️  파일 없음');
  process.exit(2);
}

const yaml = fs.readFileSync(yamlFile, 'utf8');
const tex = fs.readFileSync(texFile, 'utf8');

console.log(`🔍 Mechanism 은행 앵커 유사도 검증 (v1.6 T4)\n`);

// mechanism_ref 필드 존재 확인
const mechRefBlocks = [...yaml.matchAll(/mechanism_ref:\s*[\r\n]([\s\S]*?)(?=\n\s{2,4}\w|\n[a-z_]+:|\Z)/g)];
const slotCount = (yaml.match(/^\s*-\s*n:\s*\d+/gm) || []).length;
const mechRefCount = mechRefBlocks.length;

console.log(`📋 슬롯 총 ${slotCount}개 · mechanism_ref 필드 ${mechRefCount}개`);

let redCount = 0;
let yellowCount = 0;

// Mechanism 은행 유효 코드 (v1.0 승인)
const validMechanisms = new Set([
  // Meta-M
  'Meta-M1', 'Meta-M2', 'Meta-M3', 'Meta-M4', 'Meta-M5', 'Meta-M6', 'Meta-M7',
  // GM
  'GM-M1', 'GM-M2', 'GM-M3', 'GM-M4', 'GM-M5', 'GM-M6', 'GM-M7',
  'GM-M8', 'GM-M9', 'GM-M10', 'GM-M11', 'GM-M12', 'GM-M13',
  // ST
  'ST-M1', 'ST-M2', 'ST-M3', 'ST-M4', 'ST-M5', 'ST-M6', 'ST-M7', 'ST-M8', 'ST-M9'
]);

// 각 슬롯 mechanism_ref 검증
const slotRegex = /^\s*-\s*n:\s*(\d+)[\r\n]([\s\S]*?)(?=^\s*-\s*n:|\Z)/gm;
const slots = [...yaml.matchAll(slotRegex)];

for (const s of slots) {
  const n = s[1];
  const body = s[2];

  const hasMechRef = /mechanism_ref:/.test(body);
  const primaryMatch = body.match(/primary:\s*([A-Za-z0-9-]+)/);
  const secondaryMatch = body.match(/secondary:\s*\[([^\]]+)\]/);
  const depthCondMatch = body.match(/depth_conditions_met:\s*\n((?:\s+-\s+.+\n)+)/);
  const freedomMatch = body.match(/freedom_score:\s*(\d+)/);
  const anchorMatch = body.match(/anchor:\s*"?([^"\n]+)"?/);

  console.log(`슬롯 #${n}`);

  if (!hasMechRef) {
    console.log(`  🔴 mechanism_ref 필드 부재`);
    redCount++;
    continue;
  }

  // primary mechanism 검증
  if (!primaryMatch) {
    console.log(`  🔴 primary mechanism 필드 부재`);
    redCount++;
  } else if (!validMechanisms.has(primaryMatch[1])) {
    console.log(`  🔴 primary "${primaryMatch[1]}" 은행 등재 안 됨`);
    redCount++;
  } else {
    console.log(`  ✅ primary: ${primaryMatch[1]}`);
  }

  // secondary (권장 · 정점은 2+ 결합)
  if (secondaryMatch) {
    const secondary = secondaryMatch[1].split(',').map(x => x.trim().replace(/["']/g, ''));
    const invalid = secondary.filter(m => !validMechanisms.has(m));
    if (invalid.length) {
      console.log(`  🔴 secondary 은행 미등재: ${invalid.join(', ')}`);
      redCount++;
    } else {
      console.log(`  ✅ secondary: [${secondary.join(', ')}]`);
    }
  }

  // depth_conditions_met (심층 조건 실질 확인)
  if (!depthCondMatch) {
    console.log(`  🟡 depth_conditions_met 필드 부재 · 명시 권장`);
    yellowCount++;
  } else {
    const conditions = depthCondMatch[1].split('\n').filter(l => l.trim().startsWith('-'));
    console.log(`  ✅ depth_conditions_met: ${conditions.length}개 명시`);
    if (conditions.length < 2) {
      console.log(`    🟡 조건 2개 미만 · 심층 미달`);
      yellowCount++;
    }
  }

  // freedom_score (Meta-M2 자유도)
  if (!freedomMatch) {
    console.log(`  🟡 freedom_score 필드 부재`);
    yellowCount++;
  } else {
    const score = parseInt(freedomMatch[1]);
    if (score < 3) {
      console.log(`  🔴 freedom_score ${score} < 3 (정점 조건 미달)`);
      redCount++;
    } else {
      console.log(`  ✅ freedom_score: ${score}`);
    }
  }

  // anchor 확인 (WBG-2025M or 시판 or 평가원 정본만)
  if (anchorMatch) {
    const anchor = anchorMatch[1];
    const validAnchor = /WBG-2025M|WBG-2022M|WBG-2023M|블랙라벨|EBS.*올림포스|고쟁이|평가원|교육청|학평/.test(anchor);
    const selfMade = /와부고.*(?:1|2|3|4|5|6|7|8|9|10)회|자체|우리/.test(anchor);
    if (selfMade) {
      console.log(`  🔴 자체 제작 앵커 참조 금지: "${anchor}"`);
      redCount++;
    } else if (!validAnchor) {
      console.log(`  🟡 앵커 소스 불명: "${anchor}"`);
      yellowCount++;
    } else {
      console.log(`  ✅ anchor: ${anchor}`);
    }
  } else {
    console.log(`  🟡 anchor 필드 부재`);
    yellowCount++;
  }
}

console.log(`\n=== 요약 ===`);
console.log(`  🔴 RED: ${redCount}건`);
console.log(`  🟡 YELLOW: ${yellowCount}건`);
console.log(`\n=== 단일 출처 ===`);
console.log(`  bank/mechanism-은행.md v1.0 (Tier 0)`);

if (redCount > 0) {
  console.error(`\n❌ mechanism 은행 준수 실패 · 재출제 강제.`);
  process.exit(1);
} else {
  console.log(`\n✅ mechanism 은행 준수 통과.`);
  process.exit(0);
}
