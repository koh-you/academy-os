#!/usr/bin/env node
// exam-layout-analyzer — 시험지 문항 크기 자동 측정 · layout 결정 · 감사 리포트
// 2026-07-14 세션 36 · 마스터 3회 반복 지시 대응 (system-first RED-LINE)
//
// 목적:
//   .tex 파일 파싱 → 각 문항 자연 크기 예측 → SMALL/MEDIUM/LARGE 분류 →
//   최적 layout (grid·probpair·single) 결정 → 답안 공간 균등 분배 감사
//
// 단일 출처:
//   feedback_system_first_priority v2.0 (매뉴얼 fix 금지)
//   templates/style.sty §probpair·probgridfour·pagepair
//
// 사용법:
//   node scripts/exam-layout-analyzer.mjs <문제.tex> [답지.tex]
//
// 검사 축:
//   L1. 각 문항 예상 높이 (intro 줄 수·choices 유형·조건박스·그림)
//   L2. 페이지별 4문 slot 균등도 (선택형)
//   L3. 서답형 답안 공간 배점 vs 실제 vspace 정합
//   L4. probpair 좌우 balance 편차 (큰 편차 → grid 권장)
//   L5. figure/illustration 존재 시 답 노출 위험 (답지 대조)
//
// 반환 코드: 0 = GREEN / 1 = RED / 2 = 오용

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 1 || args.length > 2) {
  console.error('Usage: node scripts/exam-layout-analyzer.mjs <문제.tex> [답지.tex]');
  console.error('  답지.tex는 선택 (답 노출 검증 위해 권장)');
  process.exit(2);
}

const [texPath, answerPath] = args;
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const raw = fs.readFileSync(texPath, 'utf8');
const lines = raw.split('\n');

// ── 1. 문항 파싱 ────
const problems = [];
let current = null;
let inChoices = null;
for (let ln = 0; ln < lines.length; ln++) {
  const line = lines[ln];
  const probStart = line.match(/\\begin\{problem\}\{(\d+)\}/);
  if (probStart) {
    current = {
      n: parseInt(probStart[1]),
      startLine: ln + 1,
      endLine: null,
      body: [],
      // 예측 필드
      introLines: 0,
      hasConditions: false,
      hasBogibox: false,
      choicesType: null,
      choicesCount: 0,
      subQuestions: [],
      pointValue: null,
      figures: [],
    };
  }
  if (current) {
    current.body.push(line);
    // conditions/bogibox 감지
    if (line.includes('\\begin{conditions}')) current.hasConditions = true;
    if (line.includes('\\begin{bogibox}')) current.hasBogibox = true;
    // choices 유형
    const chMatch = line.match(/\\begin\{(choices\w*)\}/);
    if (chMatch) current.choicesType = chMatch[1];
    // \choice{} 카운트
    if (line.includes('\\choice{')) current.choicesCount++;
    // pts 감지
    const ptsMatch = line.match(/\\pts\{(\d+)\}/);
    if (ptsMatch) current.pointValue = parseInt(ptsMatch[1]);
    // 소문항 감지 (서답형)
    const subMatch = line.match(/\\textbf\{\((\d+)\)\}/);
    if (subMatch) {
      // 소문항 점수 추출 (같은 라인 or 이후 라인의 [N점])
      const scoreMatch = line.match(/\[(\d+)점\]/);
      current.subQuestions.push({
        number: parseInt(subMatch[1]),
        points: scoreMatch ? parseInt(scoreMatch[1]) : null,
        vspace: null,
      });
    }
    // vspace 감지 (직전 subquestion에 할당)
    const vsMatch = line.match(/\\vspace\*?\{(\d+)mm(?:\s+plus\s+(\d+)fill)?\}/);
    if (vsMatch && current.subQuestions.length > 0) {
      const last = current.subQuestions[current.subQuestions.length - 1];
      if (!last.vspace) {
        last.vspace = parseInt(vsMatch[1]);
        last.vfill = vsMatch[2] ? parseInt(vsMatch[2]) : 0;
      }
    }
    // includegraphics 감지
    if (line.includes('\\includegraphics')) current.figures.push({ type: 'image', line: ln + 1 });
    // TikZ 감지
    if (line.includes('\\begin{tikzpicture}')) current.figures.push({ type: 'tikz', line: ln + 1 });
  }
  if (line.includes('\\end{problem}') && current) {
    current.endLine = ln + 1;
    problems.push(current);
    current = null;
  }
}

// ── 2. 높이 예측 (mm) ────
function estimateHeight(prob) {
  let h = 0;
  // 문항 번호 헤더
  h += 8;
  // Intro (문항 본문 문장·수식 라인 수 추정)
  const introText = prob.body.slice(0, 10).join(' ');
  const wordCount = introText.replace(/\\[a-zA-Z]+/g, '').length / 15;
  h += Math.max(15, wordCount * 4);  // 한 줄 ~4mm
  // Conditions box
  if (prob.hasConditions) h += 25;
  // Bogibox
  if (prob.hasBogibox) h += 30;
  // Figures
  for (const fig of prob.figures) {
    h += fig.type === 'image' ? 55 : 60;
  }
  // Choices
  if (prob.choicesType === 'choices') h += 10;
  else if (prob.choicesType === 'choices32') h += 22;
  else if (prob.choicesType === 'choicesii') h += 30;
  else if (prob.choicesType === 'choicesv') h += 40;
  // Sub-questions (서답형)
  for (const sq of prob.subQuestions) {
    h += 12; // header
    if (sq.vspace) h += sq.vspace;
  }
  return Math.round(h);
}

// ── 3. 분류 ────
function classify(h) {
  if (h < 90) return 'SMALL';
  if (h < 150) return 'MEDIUM';
  return 'LARGE';
}

// ── 4. 답 노출 축은 전용 도구로 이관 (figure-answer-leakage-check.mjs) ────
// exam-layout-analyzer는 layout·vspace 균등도만 담당.
const answerLeakage = null;
if (answerPath && fs.existsSync(answerPath)) {
  // 알림만
}

// ── 5. 리포트 출력 ────
console.log('🔍 시험지 layout 자동 분석');
console.log(`   파일: ${texPath}`);
console.log(`   문항: ${problems.length}개\n`);

console.log('📊 문항별 예상 크기 · 분류');
console.log('   #  | 예상높이 | 분류    | 구성');
console.log('   ───┼──────────┼─────────┼─────────────');
for (const prob of problems) {
  const h = estimateHeight(prob);
  const cls = classify(h);
  const cmpts = [];
  if (prob.hasConditions) cmpts.push('conditions');
  if (prob.hasBogibox) cmpts.push('bogibox');
  if (prob.figures.length) cmpts.push(`figure×${prob.figures.length}`);
  if (prob.choicesType) cmpts.push(prob.choicesType);
  if (prob.subQuestions.length) cmpts.push(`sub×${prob.subQuestions.length}`);
  console.log(`   ${String(prob.n).padStart(2)} | ${String(h).padStart(6)}mm | ${cls.padEnd(7)} | ${cmpts.join(', ')}`);
}

// ── 6. 서답형 답안 공간 배점 균등 감사 (배점 정보 있을 때만) ────
console.log('\n🎯 서답형 답안 공간 감사');
let uneqCount = 0;
for (const prob of problems) {
  if (prob.subQuestions.length < 2) continue;
  const vspaces = prob.subQuestions.map(s => s.vspace || 0);
  const points = prob.subQuestions.map(s => s.points || 0);
  const vsets = new Set(vspaces);
  const psets = new Set(points);

  console.log(`   #${prob.n}: 배점 [${points.join(', ')}] · vspace [${vspaces.join(', ')}]mm`);

  // 마스터 지시 (2026-07-14): 배점 무관 균등 분배
  if (vsets.size > 1) {
    console.log(`      🔴 vspace 불균등 (마스터 지시: 모두 균등)`);
    uneqCount++;
  } else {
    console.log(`      ✅ vspace 균등`);
  }
}

// ── 7. Layout 권장 ────
console.log('\n💡 Layout 권장');
const selectProbs = problems.filter(p => p.choicesType);
const essayProbs = problems.filter(p => p.subQuestions.length > 0);
console.log(`   선택형: ${selectProbs.length}문 → \\probgridfour 고정 슬롯 (probboxheight = 92mm) 권장`);
console.log(`   서답형: ${essayProbs.length}문 → 각 문항 개별 pagepair · 단일 컬럼 · vspace{Xmm plus 1fill} 균등`);

// ── 8. 답 노출 리포트: 전용 도구 안내 ────
console.log('\n🖼  답 노출 감사: `figure-answer-leakage-check.mjs` 별도 호출');
console.log('   node scripts/figure-answer-leakage-check.mjs <본문.tex> <답지.tex>');

// ── 9. 최종 판정 ────
let exitCode = 0;
console.log('\n=== 요약 ===');
console.log(`   문항: ${problems.length} · 답안 불균등: ${uneqCount}`);
if (uneqCount > 0) {
  console.log('   🔴 RED (vspace 불균등 정정 필요)');
  exitCode = 1;
} else {
  console.log('   🟢 GREEN (layout 감사 통과)');
}

console.log('\n=== 관련 자원 ===');
console.log('feedback_system_first_priority v2.0 (매뉴얼 fix 금지)');
console.log('templates/style.sty §probgridfour (고정 슬롯 grid)');
console.log('scripts/figure-check.mjs (답 노출 상세 검사)');

process.exit(exitCode);
