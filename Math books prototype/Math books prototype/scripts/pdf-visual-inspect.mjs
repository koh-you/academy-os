#!/usr/bin/env node
// PDF 시각 검사 게이트 — pdftoppm PNG 렌더링 + Claude Read tool 확인 안내
// 2026-07-14 세션 36 마스터 확립 (2회 #3 사건 계기)
//
// 원리:
//   1. PDF 페이지를 PNG로 렌더링 (pdftoppm)
//   2. 파일 경로 및 페이지별 메타데이터 출력
//   3. Claude Read tool로 이미지 인식 안내
//   4. 자동 체크 (페이지 수 · 파일 크기 이상 감지)
//
// 사용법:
//   node scripts/pdf-visual-inspect.mjs <파일.pdf> [--max-pages N] [--dpi 100]
//
// 반환 코드: 0 = OK / 1 = 렌더 실패 / 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import os from 'node:os';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/pdf-visual-inspect.mjs <파일.pdf> [--max-pages N] [--dpi 100]');
  process.exit(2);
}

const pdfPath = args[0];
if (!fs.existsSync(pdfPath)) {
  console.error(`❌ PDF 파일 없음: ${pdfPath}`);
  process.exit(2);
}

// 옵션 파싱
let maxPages = 10;
let dpi = 100;
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--max-pages' && args[i + 1]) {
    maxPages = parseInt(args[i + 1]);
    i++;
  } else if (args[i] === '--dpi' && args[i + 1]) {
    dpi = parseInt(args[i + 1]);
    i++;
  }
}

// pdftoppm 감지 (플랫폼 무관)
function detectPdftoppm() {
  const candidates = ['pdftoppm'];
  for (const cmd of candidates) {
    try {
      execSync(`${cmd} -v`, { stdio: 'pipe' });
      return cmd;
    } catch {}
  }
  return null;
}
const pdftoppm = detectPdftoppm();
if (!pdftoppm) {
  console.error('❌ pdftoppm 미설치. Poppler 설치 필요.');
  console.error('   Windows: winget install oschwartz10612.Poppler');
  console.error('   macOS: brew install poppler');
  console.error('   Linux: apt install poppler-utils');
  process.exit(1);
}

// 출력 디렉토리 (temp 기반, 파일명 접두)
const pdfBase = path.basename(pdfPath, '.pdf');
const outDir = path.join(os.tmpdir(), 'pdf-visual-inspect', pdfBase);
fs.mkdirSync(outDir, { recursive: true });

console.log('🔍 PDF 시각 검사');
console.log(`   PDF: ${pdfPath}`);
console.log(`   출력 디렉토리: ${outDir}`);
console.log(`   DPI: ${dpi} · 최대 페이지: ${maxPages}\n`);

// 렌더링 (pdftoppm)
const outPrefix = path.join(outDir, 'page');
try {
  execSync(`"${pdftoppm}" -png -r ${dpi} -l ${maxPages} "${pdfPath}" "${outPrefix}"`, {
    stdio: 'pipe',
  });
} catch (e) {
  console.error(`❌ pdftoppm 실행 실패: ${e.message}`);
  process.exit(1);
}

// 생성된 PNG 파일 스캔
const pngFiles = fs.readdirSync(outDir)
  .filter(f => f.startsWith('page-') && f.endsWith('.png'))
  .sort();

if (pngFiles.length === 0) {
  console.error('❌ PNG 렌더링 결과 없음.');
  process.exit(1);
}

console.log(`✅ 렌더링 완료: ${pngFiles.length} 페이지\n`);

// 페이지별 파일 크기 & 이상 감지
console.log('📃 페이지별 파일:');
for (const png of pngFiles) {
  const fullPath = path.join(outDir, png);
  const stat = fs.statSync(fullPath);
  const sizeKB = (stat.size / 1024).toFixed(1);
  console.log(`   ${png} · ${sizeKB} KB`);
}

console.log('\n=== Claude Read tool 확인 안내 ===');
console.log('다음 파일들을 Read tool로 확인 후 시각 검사:');
for (const png of pngFiles) {
  console.log(`  ${path.join(outDir, png).replace(/\//g, path.sep)}`);
}

console.log('\n=== 체크 리스트 (문제.tex 대상) ===');
console.log('   ① Overfull hbox 시각 확인 (텍스트가 컬럼 경계 넘는지)');
console.log('   ② choices 매크로 정합 (5개 보기 배치 확인)');
console.log('   ③ 페이지 배치·여백 (probpair·pagepair)');
console.log('   ④ 배점 [N점] 표기 위치');
console.log('   ⑤ 그림·수식 렌더링 (수식 잘림 없는지)');

console.log('\n=== 체크 리스트 (답지.tex 대상) ===');
console.log('   ① CP 박스 색상 (v3.7.5 옅은 피치 + 짙은 갈오렌지)');
console.log('   ② soltitle 정답 인라인 표기');
console.log('   ③ 서술형 소문항 (1)(2)(3) 세로 정렬 (v3.7.3)');
console.log('   ④ quickgrid 12문 배치');
console.log('   ⑤ multicols 컬럼 경계 (수식 오버플로우)');
console.log('   ⑥ 통찰 카드 (solnote) 좌측 강조 바');

console.log('\n=== 관련 자원 ===');
console.log('CLAUDE.md §"안전 절차" 원칙 3 (PDF 시각 확인 요청)');
console.log('scripts/overfull-check.mjs (Overfull 자동 검출)');
console.log('scripts/choices-width-check.mjs (choices 폭 사전 검증)');

console.log('\n✅ PDF 시각 검사 게이트 완료. Claude Read tool로 각 페이지 확인 필요.');
process.exit(0);
