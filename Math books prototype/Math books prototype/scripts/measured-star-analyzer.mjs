#!/usr/bin/env node
// measured-star-analyzer — 실측 star 자동 산출 도구 (방안 K3)
// v1.0 (2026-07-13 · 세션 39 · 마스터 지시 "declared 완전 폐기 · 실측만")
//
// 목적:
//   문제.tex의 실제 발문·풀이·조건·통찰 심층에서 실측 star·composite 자동 산출.
//   저자 declared 값 무시 · 실제 문항 심층 기반 판정.
//   청사진 fake declared 온상 근본 차단.
//
// 사용법:
//   node scripts/measured-star-analyzer.mjs <청사진.yaml> <문제.tex>
//
// 산출 축 (v5.1 8축 기반 · 문제.tex 실제 내용에서 감지):
//   N: narrative 실제 char 수 (문제.tex 발문 텍스트)
//   L: 풀이 논리 단계 (조건·유도 어구 · 소문항 개수)
//   T: 변환 (대칭·평행·이동 어구)
//   H: 힌트 존재 (지문 "이용하여" 등)
//   R: 구조 (접선·자취·중점 등)
//   F: 정의박스·정의 확장
//   E: 조건 개수 (has_conditions·has_bogibox 등)
//   P: 역방향·예측 저항 어구
//
// 매핑표 (bank/star-composite-매핑.md):
//   ★ 1: 0~5 · ★ 2: 6~9 · ★ 3: 10~14 · ★ 4: 15~23 · ★ 5: 24~32 · premium: ≥ 33
//
// 관련: policy-star-5-only · policy-no-textbook-recap
//
// 반환: 0 GREEN / 1 YELLOW / 2 RED (실측 star < 정책 목표)

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/measured-star-analyzer.mjs <청사진.yaml> <문제.tex>');
  process.exit(3);
}
const [bpPath, probPath] = args;
if (!fs.existsSync(probPath)) {
  console.error(`❌ 파일 없음: ${probPath}`);
  process.exit(3);
}

// ── 문제.tex에서 각 슬롯 발문·풀이 내용 추출 ─────────
function extractProblems(texSrc) {
  const problems = [];
  // \begin{problem}{N}...\end{problem}
  const regex = /\\begin\{problem\}\{(\d+)\}\{([^}]*)\}([\s\S]*?)\\end\{problem\}/g;
  let m;
  while ((m = regex.exec(texSrc)) !== null) {
    const n = parseInt(m[1]);
    const marker = m[2]; // 's' = 서답형
    const content = m[3];
    problems.push({ n, isEssay: marker === 's', content });
  }
  return problems;
}

// 슬롯 인접 텍스트 (문제 이후 소문항 · probpairfillpage 매크로 뒤) 추출
function extractSlotContext(texSrc, problems) {
  // 각 problem N에 대해 이후 다음 problem 시작 전까지의 텍스트를 subContent로 저장
  for (let i = 0; i < problems.length; i++) {
    const currentEnd = texSrc.indexOf('\\end{problem}', texSrc.indexOf(`\\begin{problem}{${problems[i].n}}`));
    const nextStart = i + 1 < problems.length
      ? texSrc.indexOf(`\\begin{problem}{${problems[i + 1].n}}`)
      : texSrc.length;
    problems[i].subContent = texSrc.substring(currentEnd, nextStart);
  }
  return problems;
}

// 슬롯 본문 · 소문항 텍스트 결합
function slotFullText(slot) {
  return slot.content + '\n' + (slot.subContent || '');
}

// ── v5.1 8축 자동 산출 (문제.tex 실제 내용) ──────
function measureAxes(slot) {
  const text = slotFullText(slot);
  // LaTeX 명령 제거하여 순수 텍스트
  const cleanText = text
    .replace(/\\begin\{[^}]+\}|\\end\{[^}]+\}/g, ' ')
    .replace(/\\[a-zA-Z]+\*?(\[[^\]]*\])?(\{[^{}]*\})?/g, ' ')
    .replace(/\$[^$]*\$|\$\$[^$]*\$\$/g, ' MATH ')
    .replace(/\s+/g, ' ')
    .trim();

  // N · 지문 길이 (본문 char 수 · MATH·수식 제거 후 순수 한국어)
  const koreanText = cleanText.replace(/MATH/g, '').replace(/[a-zA-Z0-9]/g, '');
  const charCount = koreanText.replace(/\s/g, '').length;
  let N = 0;
  if (charCount > 400) N = 3;
  else if (charCount > 250) N = 2;
  else if (charCount > 100) N = 1;

  // L · 논리 단계 (소문항 · 유도 어구 · 조건 개수)
  const subCount = (text.match(/\\textbf\{\(\d+\)\}/g) || []).length;
  const logicKeywords = (cleanText.match(/따라서|이므로|그러므로|즉|유도|결과|정리|이용/g) || []).length;
  let L = 0;
  if (subCount >= 3) L = 3;
  else if (subCount >= 2) L = 2;
  else if (logicKeywords >= 4) L = 2;
  else if (logicKeywords >= 2) L = 1;

  // T · 변환 어구
  const transformKw = ['대칭', '평행이동', '회전', '치환', '역', '이동', '대우'];
  const tCount = transformKw.reduce((a, k) => a + (text.split(k).length - 1), 0);
  let T = 0;
  if (tCount >= 4) T = 3;
  else if (tCount >= 2) T = 2;
  else if (tCount >= 1) T = 1;

  // H · 힌트 (지문 "이용하여" 등)
  const hasHint = /이용하여|이용해서|다음.*결과/.test(text) ? 1 : 0;
  const H = hasHint;

  // R · 구조·정칙성 어구
  const rKw = ['접선', '자취', '궤적', '수직이등분', '외심', '내심', '무게중심', '중점', '근축', '접점', '접함'];
  const rCount = rKw.reduce((a, k) => a + (text.split(k).length - 1), 0);
  let R = 0;
  if (rCount >= 5) R = 3;
  else if (rCount >= 3) R = 2;
  else if (rCount >= 1) R = 1;

  // F · 정의박스·정의 확장
  const hasDefBox = /\\begin\{tcolorbox\}|\[정의/.test(text);
  const F = hasDefBox ? 2 : 0;

  // E · 조건 개수
  const hasConditions = /\\begin\{conditions\}/.test(text);
  const hasBogibox = /\\begin\{bogibox\}/.test(text);
  const conditionCount = (text.match(/조건|만족/g) || []).length;
  let E = 0;
  if (hasConditions || hasBogibox) E += 1;
  if (conditionCount >= 4) E += 2;
  else if (conditionCount >= 2) E += 1;
  E = Math.min(E, 3);

  // P · 역방향·예측 저항
  const pKw = ['모든', '임의', '자취', '어떤', '최댓값', '최솟값', '최대', '최소'];
  const pCount = pKw.reduce((a, k) => a + (text.split(k).length - 1), 0);
  let P = 0;
  if (pCount >= 4) P = 3;
  else if (pCount >= 2) P = 2;
  else if (pCount >= 1) P = 1;

  const composite = N + L + T - H + R + F + E + P;
  return { N, L, T, H, R, F, E, P, composite, subCount, charCount };
}

// ── star 판정 (매핑표 참조) ──────────────────
function measuredStar(composite) {
  if (composite >= 33) return { star: 5, tier: 'premium', label: '★ 5 최상위' };
  if (composite >= 24) return { star: 5, tier: 'peak', label: '★ 5' };
  if (composite >= 15) return { star: 4, tier: 'high', label: '★ 4' };
  if (composite >= 10) return { star: 3, tier: 'advanced', label: '★ 3' };
  if (composite >= 6) return { star: 2, tier: 'standard', label: '★ 2' };
  return { star: 1, tier: 'trivial', label: '★ 1' };
}

// ── 실행 ─────────────────────────────
const texSrc = fs.readFileSync(probPath, 'utf8');
const bpSrc = fs.existsSync(bpPath) ? fs.readFileSync(bpPath, 'utf8') : null;
let problems = extractProblems(texSrc);
problems = extractSlotContext(texSrc, problems);

console.log('🔬 measured-star-analyzer v1.0 (방안 K3)');
console.log(`   문제 tex: ${probPath}`);
console.log(`   슬롯: ${problems.length}개`);
console.log(`   (v1.0 · 마스터 지시 "declared 완전 폐기 · 실측만" 반영)\n`);

console.log('📐 실측 star 산출 (문제.tex 실제 내용 기반)');
console.log('   #  | N | L | T | H | R | F | E | P | comp | 실측 ★  | 비고');
console.log('   ───┼───┼───┼───┼───┼───┼───┼───┼───┼──────┼─────────┼─────');

const results = [];
let starCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, premium: 0 };
let compositeSum = 0;

for (const p of problems) {
  const axes = measureAxes(p);
  const ms = measuredStar(axes.composite);
  results.push({ n: p.n, ...axes, ...ms });
  starCounts[ms.star]++;
  if (ms.tier === 'premium') starCounts.premium++;
  compositeSum += axes.composite;
  const flag = p.isEssay ? '서답' : '선택';
  console.log(`   ${String(p.n).padStart(2)} | ${axes.N} | ${axes.L} | ${axes.T} | ${axes.H} | ${axes.R} | ${axes.F} | ${axes.E} | ${axes.P} | ${String(axes.composite).padStart(4)} | ${ms.label.padEnd(7)} | ${flag}`);
}

console.log('\n=== 실측 분포 ===');
console.log(`   ★ 1: ${starCounts[1]}건 · ★ 2: ${starCounts[2]}건 · ★ 3: ${starCounts[3]}건 · ★ 4: ${starCounts[4]}건 · ★ 5: ${starCounts[5]}건 (그중 premium: ${starCounts.premium}건)`);
console.log(`   avg composite: ${(compositeSum / problems.length).toFixed(1)}`);
const top5 = [...results].sort((a, b) => b.composite - a.composite).slice(0, 5);
console.log(`   top5 composite 합: ${top5.reduce((a, r) => a + r.composite, 0)} · 상위 5문 [${top5.map(r => `#${r.n}(${r.composite})`).join(', ')}]`);

console.log('\n=== 정책 준수 검사 ===');
// policy-star-5-only: 모든 슬롯 실측 star ≥ 5
const belowStar5 = results.filter(r => r.star < 5);
if (belowStar5.length > 0) {
  console.log(`   🔴 policy-star-5-only 실측 위반: ${belowStar5.length}건 (실측 ★ < 5)`);
  const groups = { 1: [], 2: [], 3: [], 4: [] };
  for (const r of belowStar5) groups[r.star].push(r.n);
  for (const s of [1, 2, 3, 4]) {
    if (groups[s].length) console.log(`     ★ ${s}: ${groups[s].map(n => `#${n}`).join(', ')}`);
  }
} else {
  console.log(`   ✅ policy-star-5-only 실측 준수 (모든 슬롯 실측 ★ 5)`);
}

// premium 목표 3문
if (starCounts.premium >= 3) {
  console.log(`   ✅ star_premium 목표 3문 도달 (실측 ${starCounts.premium}건)`);
} else {
  console.log(`   🔴 star_premium 목표 3문 미달 (실측 ${starCounts.premium}건)`);
}

console.log('\n=== 관련 자원 ===');
console.log('   bank/star-composite-매핑.md');
console.log('   bank/문항-심층-설계-원칙.md v2.0');
console.log('   policy-star-5-only (실측 기반)');
console.log('   [[feedback_star_composite_mapping]] (신설 예정)');

if (belowStar5.length > 0 || starCounts.premium < 3) {
  process.exit(2);
}
process.exit(0);
