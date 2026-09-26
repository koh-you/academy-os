#!/usr/bin/env node
// 그림 도입 판정 vs 실제 정합 감사 v1.0 — Layer 3 · G8
// 2026-07-17 세션 47 신설 · Layer 1 판정과 실제 tex 정합 자동 검증
//
// 목적:
//   figure-need-check (Layer 1) 판정: REQUIRED / RECOMMENDED / OPTIONAL / NO
//   실제 문제.tex·답지.tex: 그림 있음 / 없음
//   → 4×2 조합 감사 (판정 불일치 감지)
//
// 판정 매트릭스:
//   REQUIRED + 없음  → 🔴 RED (누락)
//   RECOMMENDED + 없음 → 🟡 YELLOW (권장 미이행)
//   NO + 있음 → 🟡 YELLOW (불필요한 그림)
//   OPTIONAL + 없음 → ✅ OK (선택 미이행)
//   나머지 정합 조합 → ✅ OK
//
// 사용:
//   node scripts/figure-need-compliance.mjs <청사진.yaml> --problem <문제.tex> [--solution <답지.tex>]
//
// 단일 출처: bank/그림-도입-기준.md v1.1 · scripts/figure-need-check.mjs (판정 로직 재사용)

import fs from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Usage: node scripts/figure-need-compliance.mjs <청사진.yaml> --problem <문제.tex> [--solution <답지.tex>]');
  process.exit(2);
}

const blueprintPath = args[0];
let problemPath = null;
let solutionPath = null;
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--problem' && args[i + 1]) problemPath = args[++i];
  else if (args[i] === '--solution' && args[i + 1]) solutionPath = args[++i];
}

if (!fs.existsSync(blueprintPath)) {
  console.error(`❌ 청사진 파일 없음: ${blueprintPath}`);
  process.exit(2);
}
if (!problemPath || !fs.existsSync(problemPath)) {
  console.error(`❌ 문제 파일 없음: ${problemPath}`);
  process.exit(2);
}

const problemContent = fs.readFileSync(problemPath, 'utf8');
const solutionContent = solutionPath && fs.existsSync(solutionPath) ? fs.readFileSync(solutionPath, 'utf8') : null;

// ── figure-need-check 실행 (JSON-like 파싱) ─────────────────────
const needCheckPath = path.resolve(path.dirname(blueprintPath), '..', '..', '..', 'scripts', 'figure-need-check.mjs');
// 상대 경로 탐색 실패 시 절대 경로 fallback
const alt = 'C:\\Users\\user\\OneDrive\\Cluade Projects\\Math books\\scripts\\figure-need-check.mjs';
const scriptPath = fs.existsSync(needCheckPath) ? needCheckPath : alt;

let needCheckOutput = '';
try {
  const cmd = solutionPath
    ? `node "${scriptPath}" "${blueprintPath}" --problem "${problemPath}" --solution "${solutionPath}"`
    : `node "${scriptPath}" "${blueprintPath}" --problem "${problemPath}"`;
  needCheckOutput = execSync(cmd, { encoding: 'utf8' });
} catch (e) {
  needCheckOutput = e.stdout ? e.stdout.toString() : '';
  if (!needCheckOutput) {
    console.error(`❌ figure-need-check 실행 실패: ${e.message}`);
    process.exit(2);
  }
}

// ── 판정 결과 파싱 ─────────────────────
// 라인 형식: "🌟 #14 · C3 V3 S3 = 9 · star_5_premium"
//           "   문제 REQUIRED · 답지 REQUIRED"
function parseNeedResults(output) {
  const results = {};
  const lines = output.split('\n');
  let currentSlot = null;
  for (const line of lines) {
    // 슬롯 시작: 배지·bullet 무관 · #N · C? V? S? = ? · tier
    const slotM = line.match(/#(\d+)\s*·\s*C\d/);
    if (slotM) {
      currentSlot = parseInt(slotM[1]);
      results[currentSlot] = {};
      continue;
    }
    const verdictM = line.match(/문제\s+(REQUIRED|RECOMMENDED|OPTIONAL|NO)\s*·\s*답지\s+(REQUIRED|RECOMMENDED|OPTIONAL|NO)/);
    if (verdictM && currentSlot) {
      results[currentSlot].problem = verdictM[1];
      results[currentSlot].solution = verdictM[2];
    }
  }
  return results;
}

// ── 슬롯별 그림 유무 감지 ─────────────────────
function extractSlots(texContent, envName = 'problem') {
  const slots = [];
  const re = envName === 'problem'
    ? /\\begin\{problem\}\{(\d+)\}([\s\S]*?)\\end\{problem\}/g
    : /\\soltitle\{(\d+)\}\{[^}]*\}\{[^}]*\}([\s\S]*?)(?=\\soltitle\{|\\end\{multicols\})/g;
  let m;
  while ((m = re.exec(texContent)) !== null) {
    slots.push({ n: parseInt(m[1]), text: m[2] });
  }
  return slots;
}

function hasFigure(text) {
  // overlay·remember picture 세로선 필터
  const blocks = [];
  const re = /\\begin\{tikzpicture\}(?:\[[^\]]*\])?([\s\S]*?)\\end\{tikzpicture\}/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!/overlay,\s*remember picture/.test(m[0])) blocks.push(m[1]);
  }
  if (blocks.length > 0) return true;
  // \includegraphics 감지
  if (/\\includegraphics/.test(text)) return true;
  return false;
}

// ── 판정 매트릭스 ─────────────────────
function judge(verdict, hasFig) {
  const V = verdict || 'unknown';
  if (V === 'REQUIRED' && !hasFig) return { level: 'RED', msg: 'REQUIRED 판정인데 그림 누락' };
  if (V === 'RECOMMENDED' && !hasFig) return { level: 'YELLOW', msg: 'RECOMMENDED 판정인데 그림 미이행' };
  if (V === 'NO' && hasFig) return { level: 'YELLOW', msg: 'NO 판정인데 그림 있음 (불필요할 가능성)' };
  return { level: 'OK', msg: '정합' };
}

// ── 메인 ─────────────────────
const needResults = parseNeedResults(needCheckOutput);
const problemSlots = extractSlots(problemContent, 'problem');
const solutionSlots = solutionContent ? extractSlots(solutionContent, 'solution') : [];
const solMap = {};
for (const s of solutionSlots) solMap[s.n] = s;

console.log(`🔍 그림 도입 판정 vs 실제 정합 감사 v1.0 (G8)`);
console.log(`   청사진: ${blueprintPath}`);
console.log(`   문제: ${problemPath}`);
console.log(`   답지: ${solutionPath || '(미제공)'}`);
console.log(`   슬롯: ${problemSlots.length}건`);
console.log('');

let redCount = 0;
let yellowCount = 0;

for (const slot of problemSlots) {
  const verdict = needResults[slot.n];
  if (!verdict) continue;

  const probHas = hasFigure(slot.text);
  const solHas = solMap[slot.n] ? hasFigure(solMap[slot.n].text) : false;

  const probJudge = judge(verdict.problem, probHas);
  const solJudge = solutionContent ? judge(verdict.solution, solHas) : { level: 'OK', msg: '(답지 미제공)' };

  const badge = (probJudge.level === 'RED' || solJudge.level === 'RED') ? '🔴'
              : (probJudge.level === 'YELLOW' || solJudge.level === 'YELLOW') ? '🟡'
              : '✅';

  const probFlag = probHas ? '有' : '無';
  const solFlag = solHas ? '有' : '無';
  console.log(`${badge} #${slot.n} · 문제 ${verdict.problem}/${probFlag} · 답지 ${verdict.solution}/${solFlag}`);
  if (probJudge.level !== 'OK') console.log(`   ${probJudge.level === 'RED' ? '🔴' : '🟡'} 문제: ${probJudge.msg}`);
  if (solJudge.level !== 'OK') console.log(`   ${solJudge.level === 'RED' ? '🔴' : '🟡'} 답지: ${solJudge.msg}`);

  if (probJudge.level === 'RED' || solJudge.level === 'RED') redCount++;
  if (probJudge.level === 'YELLOW' || solJudge.level === 'YELLOW') yellowCount++;
}

console.log('');
console.log('=== 요약 ===');
console.log(`   RED: ${redCount}건 (REQUIRED 누락)`);
console.log(`   YELLOW: ${yellowCount}건 (RECOMMENDED 미이행 or NO 초과)`);
console.log('');
console.log('=== 관련 자산 ===');
console.log('   bank/그림-도입-기준.md v1.1 (Layer 1 판정 기준)');
console.log('   scripts/figure-need-check.mjs v1.1 (판정 자동화)');
console.log('   Gate 4.5 v3.10 · G8 (본 도구)');

process.exit(redCount > 0 ? 3 : 0);
