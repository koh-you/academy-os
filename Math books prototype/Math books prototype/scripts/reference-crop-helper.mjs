#!/usr/bin/env node
// 참고자료 PDF 크롭 헬퍼
// 2026-07-14 세션 36 마스터 확립 (그림 혁신 옵션 β 채택 · 교육 목적 인용)
//
// 목적:
//   참고자료/ PDF의 특정 페이지를 PNG로 렌더 → figures/reference/ archive
//   마스터가 시각 확인 후 크롭 (수동) or 페이지 통째로 사용
//   LICENSES.md 자동 갱신 (등록 필수)
//
// 단일 출처:
//   bank/이미지-저작권-정책.md §1.3
//   figures/reference/LICENSES.md
//
// 사용법:
//   node scripts/reference-crop-helper.mjs <참고자료-pdf> <page-number> --source <code> [--fig N]
//
// 예시:
//   node scripts/reference-crop-helper.mjs "참고자료/쎈-공통수학2.pdf" 123 --source seon-cm2 --fig 1
//
// 결과:
//   figures/reference/ref-seon-cm2-p123-fig1.png (페이지 전체 PNG)
//   figures/reference/LICENSES.md 자동 갱신
//
// 반환 코드: 0 = 성공 / 1 = 실패 / 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const args = process.argv.slice(2);
if (args.length < 4) {
  console.error('Usage: node scripts/reference-crop-helper.mjs <참고자료-pdf> <page> --source <code> [--fig N] [--dpi 150]');
  console.error('  --source: 원본 자료 코드 (figures/reference/LICENSES.md §"원본 자료 코드" 참조)');
  console.error('  --fig: 그림 번호 (기본 1)');
  console.error('  --dpi: 렌더링 해상도 (기본 150)');
  console.error('  반환 코드: 0 = 성공 / 1 = 실패 / 2 = 오용');
  process.exit(2);
}

const pdfPath = args[0];
const page = parseInt(args[1]);
if (!pdfPath || !fs.existsSync(pdfPath) || isNaN(page)) {
  console.error('❌ PDF 파일 없음 or 페이지 번호 부적절');
  process.exit(2);
}

let sourceCode = null;
let figNum = 1;
let dpi = 150;
for (let i = 2; i < args.length; i++) {
  if (args[i] === '--source' && args[i + 1]) {
    sourceCode = args[i + 1];
    i++;
  } else if (args[i] === '--fig' && args[i + 1]) {
    figNum = parseInt(args[i + 1]);
    i++;
  } else if (args[i] === '--dpi' && args[i + 1]) {
    dpi = parseInt(args[i + 1]);
    i++;
  }
}

if (!sourceCode) {
  console.error('❌ --source <code> 필수');
  console.error('   예: --source seon-cm2 (쎈 공통수학2)');
  console.error('   figures/reference/LICENSES.md §"원본 자료 코드" 참조');
  process.exit(2);
}

// pdftoppm 감지
function detectPdftoppm() {
  try {
    execSync('pdftoppm -v', { stdio: 'pipe' });
    return 'pdftoppm';
  } catch {
    return null;
  }
}
const pdftoppm = detectPdftoppm();
if (!pdftoppm) {
  console.error('❌ pdftoppm 미설치 (Poppler 필요)');
  console.error('   Windows: winget install oschwartz10612.Poppler');
  process.exit(1);
}

const outputDir = path.join('figures', 'reference');
fs.mkdirSync(outputDir, { recursive: true });

const outputFilename = `ref-${sourceCode}-p${page}-fig${figNum}.png`;
const outputPath = path.join(outputDir, outputFilename);
const outputPrefix = outputPath.replace(/\.png$/, '');

console.log('📥 참고자료 페이지 렌더링');
console.log(`   PDF: ${pdfPath}`);
console.log(`   페이지: ${page}`);
console.log(`   출력: ${outputPath}`);
console.log(`   DPI: ${dpi}\n`);

try {
  execSync(
    `"${pdftoppm}" -png -r ${dpi} -f ${page} -l ${page} "${pdfPath}" "${outputPrefix}"`,
    { stdio: 'pipe' }
  );
} catch (e) {
  console.error(`❌ pdftoppm 실행 실패: ${e.message}`);
  process.exit(1);
}

// pdftoppm은 파일명에 페이지 접미가 붙음 (예: prefix-123.png)
// 우리는 접미 없이 저장하고 싶음. 파일명 정리
const pdftoppmOutput = `${outputPrefix}-${page.toString().padStart(3, '0')}.png`;
const pdftoppmOutputAlt = `${outputPrefix}-${page}.png`;
let actualOutput = null;
if (fs.existsSync(pdftoppmOutput)) actualOutput = pdftoppmOutput;
else if (fs.existsSync(pdftoppmOutputAlt)) actualOutput = pdftoppmOutputAlt;

if (!actualOutput) {
  // 파일 시스템에서 검색 (padding 다양성)
  const files = fs.readdirSync(outputDir).filter(f => f.startsWith(path.basename(outputPrefix)) && f.endsWith('.png'));
  if (files.length > 0) actualOutput = path.join(outputDir, files[0]);
}

if (!actualOutput) {
  console.error('❌ 출력 파일 검출 실패');
  process.exit(1);
}

// 최종 파일명으로 rename
if (actualOutput !== outputPath) {
  fs.renameSync(actualOutput, outputPath);
}
console.log(`✅ 렌더링 완료: ${outputPath}`);
const stat = fs.statSync(outputPath);
console.log(`   파일 크기: ${(stat.size / 1024).toFixed(1)} KB\n`);

// LICENSES.md 자동 등록
const licensesPath = path.join(outputDir, 'LICENSES.md');
let licensesContent = fs.existsSync(licensesPath) ? fs.readFileSync(licensesPath, 'utf8') : '';

// 원본 자료 이름 매핑
const SOURCE_NAMES = {
  'seon-cm1': '쎈 공통수학1',
  'seon-cm2': '쎈 공통수학2',
  'gaenyeom-cm1': '개념원리 공통수학1',
  'gaenyeom-cm2': '개념원리 공통수학2',
  'gojaengi-cm2': '고쟁이 공통수학2',
  'bible-gaenyeom-cm2': '바이블 개념온 공통수학2',
  'bible-yuhyeong-cm2': '바이블 유형온 공통수학2',
  'mapl-cm1': '마플시너지 공통수학1',
  'mapl-cm2': '마플시너지 공통수학2',
  'depth-insight': '깊이와통찰',
  'ilpum-cm2': '일품 공통수학2',
};
const humanName = SOURCE_NAMES[sourceCode] || sourceCode;

const today = new Date().toISOString().slice(0, 10);
const entry = `\n## ${outputFilename}
- 참고자료 원본: ${humanName}
- 페이지: p.${page}
- 그림 번호: 그림 ${figNum}
- 크롭 일자: ${today}
- 사용 이력: 미사용
- 인용 목적: 교육 목적 (내부 훈련·시험지 자료)
`;

if (!licensesContent.includes(outputFilename)) {
  licensesContent += entry;
  fs.writeFileSync(licensesPath, licensesContent);
  console.log(`📝 LICENSES.md 등록: ${licensesPath}`);
  console.log(`   등록 항목: ${outputFilename}`);
} else {
  console.log(`⚠️  ${outputFilename} 이미 등록됨. 스킵.`);
}

console.log('\n💡 다음 단계');
console.log('   1. 렌더된 PNG 확인 (Read tool 또는 이미지 뷰어)');
console.log('   2. 필요 시 이미지 편집 도구로 그림 부분만 크롭');
console.log('   3. tex 파일에 삽입:');
console.log('      \\begin{center}');
console.log(`      \\includegraphics[width=0.5\\linewidth]{${outputPath.replace(/\\/g, '/')}}`);
console.log('      \\end{center}');
console.log(`      \\referenceCite{${humanName}}{${page}}{교육 목적 인용}`);

console.log('\n=== 관련 자원 ===');
console.log('bank/이미지-저작권-정책.md §1.3 참고자료 크롭 허용 정책');
console.log('figures/reference/LICENSES.md');

process.exit(0);
