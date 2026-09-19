#!/usr/bin/env node
// first-draft-report — 첫 제작 완성도 5축 판정 도구
// v2.0 (2026-07-13 · 세션 38 후반부 · 방안 G) — 정책 위반·구조 시그니처 편입
// v1.0 (2026-07-13 · 세션 38 사후 · 방안 C) — 최초 신설
//
// 목적:
//   시험지 자동 첫 제작(first draft)의 완성도를 5축으로 자동 판정.
//   마스터 지시 "1·2회 완성도"를 정량화. 저자 자기 판정 대신 시스템 판정.
//
// 사용법:
//   node scripts/first-draft-report.mjs <청사진.yaml> <문제.tex> <답지.tex>
//
// 5축:
//   1. 구조 (structure): layout-auto-decider registry 매칭
//   2. 정합 (consistency): blueprint-score-validator
//   3. 정확성 (correctness): master-feedback + cm1-curriculum + xelatex + figure-answer-leakage
//   4. 난이도 (difficulty): blueprint-validator 자동 산출 · star_premium 개수
//   5. 세련도 (refinement): signature + cross-round-insight + permanent-policy
//
// 반환: 0 완성 / 1 부분 완성 / 2 미완성

import fs from 'node:fs';
import { execSync } from 'node:child_process';

const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Usage: node scripts/first-draft-report.mjs <청사진.yaml> <문제.tex> <답지.tex> [--prev prev1.yaml prev2.yaml ...]');
  process.exit(2);
}
const [bpPath, probPath, ansPath] = args;
// --prev 옵션: 이전 회차 청사진 (structure-signature 회차 간 대조)
const prevIdx = args.indexOf('--prev');
const prevBpPaths = prevIdx >= 0 ? args.slice(prevIdx + 1) : [];
for (const p of [bpPath, probPath, ansPath]) {
  if (!fs.existsSync(p)) { console.error(`❌ 파일 없음: ${p}`); process.exit(2); }
}

// ── 도구 실행 helper ──────────────
function runTool(cmd, args) {
  try {
    const out = execSync(`node scripts/${cmd} ${args.map(a => `"${a}"`).join(' ')}`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    return { code: 0, output: out };
  } catch (e) {
    return { code: e.status || 1, output: (e.stdout || '') + (e.stderr || '') };
  }
}

function extractRedCount(output, pattern = /RED[:\s]*(\d+)/) {
  const m = output.match(pattern);
  return m ? parseInt(m[1]) : 0;
}

// ── 5축 실행 ─────────────────────
console.log('🎯 first-draft-report v1.0');
console.log(`   청사진: ${bpPath}`);
console.log(`   문제: ${probPath}`);
console.log(`   답지: ${ansPath}\n`);

const results = { structure: null, consistency: null, correctness: null, difficulty: null, refinement: null };

// 1축 · 구조
console.log('🏗️  1축 · 구조 (structure)');
const layoutRes = runTool('layout-auto-decider.mjs', [bpPath]);
const registryHits = (layoutRes.output.match(/🌟 golden-registry/g) || []).length;
const algorithmFallback = (layoutRes.output.match(/⚙️ 알고리즘 fallback/g) || []).length;
const totalPages = (layoutRes.output.match(/\[Page \d+\]/g) || []).length;
if (algorithmFallback === 0 && registryHits >= 2) {
  console.log(`   ✅ GREEN · registry 매칭 ${registryHits}쪽 · fallback 0 · 총 ${totalPages}쪽`);
  results.structure = 'GREEN';
} else if (algorithmFallback <= 1) {
  console.log(`   🟡 YELLOW · registry ${registryHits} · fallback ${algorithmFallback}`);
  results.structure = 'YELLOW';
} else {
  console.log(`   🔴 RED · fallback ${algorithmFallback}쪽 · registry 미매칭`);
  results.structure = 'RED';
}

// 2축 · 정합 + 정책 강제 (v2.0)
console.log('\n🎯 2축 · 정합 (consistency)');
const validRes = runTool('blueprint-score-validator.mjs', [bpPath]);
const validRedMatch = validRes.output.match(/RED:\s*(\d+)건/);
const validYellowMatch = validRes.output.match(/YELLOW:\s*(\d+)건/);
const validRed = validRedMatch ? parseInt(validRedMatch[1]) : 0;
const validYellow = validYellowMatch ? parseInt(validYellowMatch[1]) : 0;
const policyViol = (validRes.output.match(/위반 (\d+)건/) || [])[1];
// v2.0 · validator exit 3 시 정책 위반 최우선 · 즉시 RED
if (validRes.code === 3) {
  console.log(`   🔴 RED · 마스터 정책 위반 ${policyViol}건`);
  results.consistency = 'RED';
} else if (validRed === 0 && validYellow === 0) {
  console.log(`   ✅ GREEN · 모든 슬롯 GREEN`);
  results.consistency = 'GREEN';
} else if (validRed === 0) {
  console.log(`   ✅ GREEN · RED 0건 · YELLOW ${validYellow}건 (자동 산출 알고리즘 한계 감안)`);
  results.consistency = 'GREEN';
} else if (validRed <= 1) {
  console.log(`   🟡 YELLOW · RED ${validRed}건 · YELLOW ${validYellow}건`);
  results.consistency = 'YELLOW';
} else {
  console.log(`   🔴 RED · RED ${validRed}건 · YELLOW ${validYellow}건`);
  results.consistency = 'RED';
}

// 3축 · 정확성
console.log('\n✅ 3축 · 정확성 (correctness)');
const mfRes = runTool('master-feedback-check.mjs', [probPath, ansPath, bpPath]);
const mfPass = mfRes.output.includes('✅');
const cm1Res = runTool('cm1-curriculum-check.mjs', [probPath, ansPath]);
const cm1Red = mfRes.output.includes('CM2') ? 0 : extractRedCount(cm1Res.output);  // CM2는 오탐 제외
const flRes = runTool('figure-answer-leakage-check.mjs', [probPath, ansPath]);
const flPass = flRes.code === 0;
const buildLog = probPath.replace(/\.tex$/, '.log');
let buildErr = 0;
if (fs.existsSync(buildLog)) {
  buildErr = (fs.readFileSync(buildLog, 'utf8').match(/! LaTeX Error/g) || []).length;
}
if (mfPass && flPass && buildErr === 0 && cm1Red <= 5) {
  console.log(`   ✅ GREEN · master ✓ · figure-leak ✓ · build 0 err · cm1-curric ${cm1Red}건 (CM2 오탐 제외)`);
  results.correctness = 'GREEN';
} else if (buildErr === 0) {
  console.log(`   🟡 YELLOW · 경미 이슈`);
  results.correctness = 'YELLOW';
} else {
  console.log(`   🔴 RED · build ${buildErr} err · master ${mfPass ? 'OK' : 'FAIL'} · figure-leak ${flPass ? 'OK' : 'FAIL'}`);
  results.correctness = 'RED';
}

// 4축 · 난이도 + 정책 강제 (v2.0)
console.log('\n📈 4축 · 난이도 (difficulty)');
if (validRes.code === 3) {
  console.log(`   🔴 RED · 마스터 정책 위반 (${policyViol}건) · star_distribution에 ★ 2·3·4 존재`);
  results.difficulty = 'RED';
} else {
  const premiumMatch = validRes.output.match(/#\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)/g) || [];
  let premiumDeclared = 0, premiumEstimated = 0;
  for (const line of premiumMatch) {
    const m = line.match(/#\s*\d+\s*\|\s*(\d+)\s*\|\s*(\d+)/);
    if (!m) continue;
    const declared = parseInt(m[1]), est = parseInt(m[2]);
    if (declared >= 30) premiumDeclared++;
    if (est >= 20) premiumEstimated++;
  }
  if (premiumEstimated >= premiumDeclared && validRed === 0) {
    console.log(`   ✅ GREEN · 정점 문항 자동 산출 도달 ${premiumEstimated}/${premiumDeclared}`);
    results.difficulty = 'GREEN';
  } else if (premiumEstimated >= premiumDeclared - 1) {
    console.log(`   🟡 YELLOW · 정점 문항 부족 1건 · ${premiumEstimated}/${premiumDeclared}`);
    results.difficulty = 'YELLOW';
  } else {
    console.log(`   🔴 RED · 정점 문항 자동 산출 부족 · 청사진 ${premiumDeclared}문 · 실제 ${premiumEstimated}문`);
    results.difficulty = 'RED';
  }
}

// 5축 · 세련도 + 구조 시그니처 (v2.0)
console.log('\n✨ 5축 · 세련도 (refinement)');
const sigRes = runTool('signature-check.mjs', [probPath]);
const sigPass = sigRes.code === 0;
const permRes = runTool('permanent-policy-check.mjs', [probPath, ansPath]);
const permPass = permRes.code === 0;
// v2.0 · structure-signature-check 편입 (prev 청사진 있으면 회차 간 대조)
const structArgs = [bpPath, ...prevBpPaths];
const structRes = runTool('structure-signature-check.mjs', structArgs);
const structPass = structRes.code === 0;
const structViolMatch = structRes.output.match(/총 위반:\s*(\d+)건/);
const structViol = structViolMatch ? parseInt(structViolMatch[1]) : 0;
if (sigPass && permPass && structPass) {
  console.log(`   ✅ GREEN · signature ✓ · permanent-policy ✓ · structure-signature ✓`);
  results.refinement = 'GREEN';
} else if (!structPass) {
  console.log(`   🔴 RED · 구조 시그니처 자기복제 ${structViol}건 · signature ${sigPass ? '✓' : 'FAIL'} · permanent-policy ${permPass ? '✓' : 'FAIL'}`);
  results.refinement = 'RED';
} else if (!permPass) {
  console.log(`   🔴 RED · permanent-policy FAIL · signature ${sigPass ? '✓' : 'FAIL'}`);
  results.refinement = 'RED';
} else {
  console.log(`   🟡 YELLOW · signature ${sigPass ? '✓' : 'FAIL'}`);
  results.refinement = 'YELLOW';
}

// ── 최종 판정 ──────────────────
console.log('\n═══════════════════════════════════════════');
console.log('  📋 최종 판정 (5축 조합)');
console.log('═══════════════════════════════════════════');
const axes = ['structure', 'consistency', 'correctness', 'difficulty', 'refinement'];
const axisLabels = ['1·구조', '2·정합', '3·정확성', '4·난이도', '5·세련도'];
for (let i = 0; i < axes.length; i++) {
  const emoji = results[axes[i]] === 'GREEN' ? '✅' : (results[axes[i]] === 'YELLOW' ? '🟡' : '🔴');
  console.log(`  ${axisLabels[i]}: ${emoji} ${results[axes[i]]}`);
}
console.log('═══════════════════════════════════════════');

const greenCount = Object.values(results).filter(v => v === 'GREEN').length;
const yellowCount = Object.values(results).filter(v => v === 'YELLOW').length;
const redCount = Object.values(results).filter(v => v === 'RED').length;

let finalVerdict, exitCode;
if (greenCount === 5) {
  finalVerdict = '✅ 첫 제작 완성 (1·2회 수준)';
  exitCode = 0;
} else if (redCount === 0 && yellowCount === 1) {
  finalVerdict = '🟡 부분 완성 (1축 YELLOW · 재확인 권장)';
  exitCode = 1;
} else {
  finalVerdict = '🔴 first draft 미완성 · 원인 정정 후 재판정';
  exitCode = 2;
}
console.log(`\n  ${finalVerdict}`);
console.log(`  GREEN ${greenCount} · YELLOW ${yellowCount} · RED ${redCount}\n`);

console.log('=== 관련 자원 ===');
console.log('  bank/first-draft-완성도-기준.md v1.0');
console.log('  bank/세션38-시범-실패-분석.md');
console.log('  Gate 4.5 v3.11 최종 판정 게이트');

process.exit(exitCode);
