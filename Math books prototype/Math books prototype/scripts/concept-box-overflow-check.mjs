#!/usr/bin/env node
// concept-box-overflow-check.mjs — dmconcept 세로 넘침 정적 감지
// 2026-07-21 세션 57 신설 · v1.0
//
// 이번 세션 03 원 C1 개념박스 넘침이 시각 검수 없이 잡히지 않아 방치된 이슈 계기.
// 정책: [[feedback_page_layout_flexible_rule]] · dmconcept 높이 규격
//
// 알고리즘 (정적 heuristic):
//   1. 각 dmconcept[XXXmm] 블록의 시작~끝 사이 텍스트 라인 · equation · itemize 수 계산
//   2. 대략 세로 mm/라인 환산 (경험치)
//   3. 챕터 배너 페이지 (dmchapter 뒤 첫 dmconcept)면 max 214mm, dmconcepthead 뒤면 max 226mm
//   4. 콘텐츠 예상 세로 > 박스 크기 → RED
//
// 대상: DeeP Math 정리편 본편 tex
// 사용: node scripts/concept-box-overflow-check.mjs <본편.tex>
// 반환: 0 = 통과 / 1 = RED (넘침 위험) / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/concept-box-overflow-check.mjs <본편.tex>');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const tex = fs.readFileSync(texPath, 'utf8');
const lines = tex.split('\n');

// 세로 mm 환산 heuristic (조판 실측 기반)
const MM_PER_TEXT_LINE = 5.5;     // 일반 텍스트 1줄 ≈ 5.5mm
const MM_PER_EQUATION = 13;       // \begin{equation*}~\end{equation*} 블록 ≈ 13mm
const MM_PER_ALIGN_LINE = 8;      // align* 안 각 줄 ≈ 8mm
const MM_PER_ITEMIZE_LINE = 6;    // itemize 안 각 line ≈ 6mm
const MM_PER_DMSUB = 8;           // \dmsub 소단원 헤더 ≈ 8mm
const MM_PER_DMNOTE = 12;         // \begin{dmnote} 박스 헤더 ≈ 12mm 오버헤드
const MM_PER_DMEXAMPLE = 12;      // \begin{dmexample} 박스 오버헤드
const CHAPTER_BANNER_MM = 25;     // \dmchapter 배너 세로 ≈ 25mm
const PAGE_USABLE_MM = 245;       // A4 세로 body ≈ 245mm
const CONCEPT_BOX_MAX_MM = PAGE_USABLE_MM - CHAPTER_BANNER_MM;  // 챕터 페이지: 220mm 안전
const CONCEPT_BOX_MAX_MM_NORMAL = 232;  // dmconcepthead 페이지: 더 크게 가능

// dmconcept 블록 파싱
const boxes = [];
let inConcept = false;
let currentBox = null;
let seenChapter = false;
let seenConceptHead = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (/\\dmchapter\{/.test(line)) seenChapter = true;
  if (/\\dmconcepthead/.test(line)) seenConceptHead = true;

  const beginMatch = line.match(/\\begin\{dmconcept\}\[(\d+)mm\]\{(\d+)\}\{([^}]+)\}/);
  if (beginMatch) {
    inConcept = true;
    currentBox = {
      startLine: i + 1,
      sizeMm: parseInt(beginMatch[1], 10),
      sub_id: beginMatch[2],
      title: beginMatch[3],
      isChapterPage: seenChapter && !seenConceptHead,
      contentMm: 0,
      textLines: 0,
      equationCount: 0,
      alignLines: 0,
      itemizeLines: 0,
      dmsubCount: 0,
      dmnoteCount: 0,
      dmexampleCount: 0,
    };
    // 헤더 자체 오버헤드 (박스 라운드·상단 여백 등)
    currentBox.contentMm += 10;
    seenConceptHead = false;  // reset for next block
    continue;
  }

  if (/\\end\{dmconcept\}/.test(line)) {
    if (currentBox) {
      currentBox.endLine = i + 1;
      // 최종 세로 예측 = 각 컴포넌트 합
      const total =
        currentBox.textLines * MM_PER_TEXT_LINE +
        currentBox.equationCount * MM_PER_EQUATION +
        currentBox.alignLines * MM_PER_ALIGN_LINE +
        currentBox.itemizeLines * MM_PER_ITEMIZE_LINE +
        currentBox.dmsubCount * MM_PER_DMSUB +
        currentBox.dmnoteCount * MM_PER_DMNOTE +
        currentBox.dmexampleCount * MM_PER_DMEXAMPLE +
        10;  // 하단 여백
      currentBox.contentMm = Math.round(total);
      boxes.push(currentBox);
    }
    inConcept = false;
    currentBox = null;
    continue;
  }

  if (!inConcept || !currentBox) continue;

  // 블록 내 컨텐츠 카운트
  if (/\\dmsub\{/.test(line)) currentBox.dmsubCount++;
  if (/\\begin\{equation\*?\}/.test(line)) currentBox.equationCount++;
  if (/\\begin\{align\*?\}/.test(line)) currentBox.equationCount++;
  if (/\\\\/.test(line) && /align/.test(lines.slice(Math.max(0, i - 5), i).join('\n'))) currentBox.alignLines++;
  if (/\\item/.test(line)) currentBox.itemizeLines++;
  if (/\\begin\{dmnote\}/.test(line)) currentBox.dmnoteCount++;
  if (/\\begin\{dmexample\}/.test(line)) currentBox.dmexampleCount++;
  // 일반 텍스트 라인 (빈 줄·명령만 있는 줄 제외)
  const stripped = line.trim();
  if (stripped && !stripped.startsWith('%') && !stripped.startsWith('\\') && stripped.length > 3) {
    currentBox.textLines++;
  }
}

// 리포트
console.log(`🔍 dmconcept 세로 넘침 정적 감지 (v1.0)`);
console.log(`   파일: ${texPath}`);
console.log();

let redCount = 0;
let yellowCount = 0;

for (const b of boxes) {
  const maxMm = b.isChapterPage ? CONCEPT_BOX_MAX_MM : CONCEPT_BOX_MAX_MM_NORMAL;
  const ratio = b.contentMm / b.sizeMm;
  let status = '✓';
  let color = 'GREEN';

  if (b.contentMm > b.sizeMm) {
    status = '🔴';
    color = 'RED';
    redCount++;
  } else if (ratio > 0.95) {
    status = '🟡';
    color = 'YELLOW';
    yellowCount++;
  }

  const overflow = b.contentMm - b.sizeMm;
  console.log(`${status} C${b.sub_id} "${b.title}"  line ${b.startLine}~${b.endLine}`);
  console.log(`   선언 크기: ${b.sizeMm}mm ${b.isChapterPage ? '(챕터 배너 페이지)' : '(dmconcepthead 페이지)'}`);
  console.log(`   콘텐츠 추정: ${b.contentMm}mm (텍스트 ${b.textLines}·수식 ${b.equationCount}·align ${b.alignLines}·item ${b.itemizeLines}·dmsub ${b.dmsubCount}·note ${b.dmnoteCount})`);
  console.log(`   여유: ${b.sizeMm - b.contentMm}mm${overflow > 0 ? `  ⚠️ 넘침 ${overflow}mm` : ''}`);
  if (b.isChapterPage && b.sizeMm > CONCEPT_BOX_MAX_MM) {
    console.log(`   🔴 챕터 배너 페이지 크기 초과 (max ${CONCEPT_BOX_MAX_MM}mm)`);
  }
  console.log();
}

console.log(`📊 요약: RED ${redCount}건 · YELLOW ${yellowCount}건 · 총 ${boxes.length}개 개념박스`);

if (redCount > 0) {
  console.log(`\n❌ 개념박스 넘침 위험 → 서술 축약 or 박스 크기 조정 필요`);
  process.exit(1);
}
if (yellowCount > 0) {
  console.log(`\n⚠️  여유 5% 이하 → PDF 시각 확인 권장`);
}
console.log(`\n✅ 통과`);
process.exit(0);
