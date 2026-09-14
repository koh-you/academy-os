#!/usr/bin/env node
// 시험지 페이지 상단 간격 통일 감지 — v1.0
// 2026-07-26 세션 93 신설 (시스템 정정 3 · 마스터 확정 "p2 헤더~첫 문항 간격 기준")
//
// 배경:
//   세션 93 마스터 지적: "1페이지 1번 문항과 상단 가로 룰 사이 간격과 2페이지 5번 문항과 상단 가로 룰 사이 간격이 다름. 2페이지 간격이 기준"
//   원인: p1 examheader의 \addvspace{4pt} vs p2 fancy header의 headsep (기본 5mm)
//
// 단일 출처: bank/시리즈-조판-지침-매핑.md §6 "페이지 간 상단 룰 → 첫 문항 간격 통일"
//
// 원리:
//   1. tex 파일에서 examheader 종결부 addvspace/vspace 값 감지
//   2. style.sty 또는 tex 파일 header의 headsep 값 감지 (geometry 옵션)
//   3. 두 값 비교 · 불일치 시 RED
//
// 사용법:
//   node scripts/exam-header-gap-check.mjs <문제.tex>
// 반환 코드: 0 = GREEN / 1 = RED / 2 = 오용

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/exam-header-gap-check.mjs <문제.tex>');
  console.error('  반환 코드: 0 = GREEN / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const raw = fs.readFileSync(texPath, 'utf8');

// 프로젝트 루트 추정 (style.sty 참조용)
const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..');
const stylePath = path.join(projectRoot, 'templates', 'style.sty');

// style.sty에서 headsep 값 추출
function extractHeadsep(styContent) {
  const m = styContent.match(/headsep\s*=\s*(\d+(?:\.\d+)?)\s*(mm|pt|cm|in|ex|em)/);
  if (m) return { value: parseFloat(m[1]), unit: m[2] };
  return null;
}

// 단위 → pt 변환 (LaTeX 표준)
function toPt(value, unit) {
  const conv = {
    pt: 1,
    mm: 2.84527559,       // 1mm = 2.845pt
    cm: 28.4527559,
    in: 72.27,
    ex: 4.30556,          // 대략 (폰트 의존)
    em: 10.0,             // 대략 (폰트 의존)
  };
  return value * (conv[unit] || 1);
}

let headsepPt = null;
let headsepStr = null;
if (fs.existsSync(stylePath)) {
  const styContent = fs.readFileSync(stylePath, 'utf8');
  const hs = extractHeadsep(styContent);
  if (hs) {
    headsepPt = toPt(hs.value, hs.unit);
    headsepStr = `${hs.value}${hs.unit} (≈ ${headsepPt.toFixed(2)}pt)`;
  }
}

// tex 파일 자체의 geometry 오버라이드 확인 (있으면 우선)
const texGeom = raw.match(/\\usepackage\[[^\]]*headsep\s*=\s*(\d+(?:\.\d+)?)\s*(mm|pt|cm|in)/);
if (texGeom) {
  headsepPt = toPt(parseFloat(texGeom[1]), texGeom[2]);
  headsepStr = `${texGeom[1]}${texGeom[2]} (≈ ${headsepPt.toFixed(2)}pt · tex 오버라이드)`;
}

// examheader 종결부의 addvspace/vspace 값 감지
// 패턴: \dmvlinetop\par 다음 \addvspace{...} 또는 \vspace{...}
const examheaderGapRegex = /\\dmvlinetop\\par[\s\r\n]*\\(addvspace|vspace\*?)\{(\d+(?:\.\d+)?)\s*(mm|pt|cm|in|ex|em)\}/;
const gapMatch = raw.match(examheaderGapRegex);

let examheaderGapPt = null;
let examheaderGapStr = null;
if (gapMatch) {
  examheaderGapPt = toPt(parseFloat(gapMatch[2]), gapMatch[3]);
  examheaderGapStr = `\\${gapMatch[1]}{${gapMatch[2]}${gapMatch[3]}} (≈ ${examheaderGapPt.toFixed(2)}pt)`;
}

// 리포트
console.log(`\n📋 시험지 페이지 상단 간격 통일 감지 — ${texPath}\n`);
console.log(`p2 이후 headsep (style.sty geometry): ${headsepStr || '❌ 감지 실패'}`);
console.log(`p1 examheader 종결 간격            : ${examheaderGapStr || '❌ 감지 실패'}`);
console.log('');

if (headsepPt === null) {
  console.log('🟡 YELLOW — style.sty headsep 감지 실패 · geometry 옵션 확인 필요');
  process.exit(0);
}

if (examheaderGapPt === null) {
  console.log('🔴 RED — p1 examheader 종결 간격 감지 실패');
  console.log('   examheader 정의에 \\dmvlinetop\\par 다음 \\addvspace{...} 또는 \\vspace{...} 필요');
  console.log('   단일 출처: bank/시리즈-조판-지침-매핑.md §6 "페이지 간 상단 간격 통일"');
  process.exit(1);
}

const diffPt = Math.abs(headsepPt - examheaderGapPt);
if (diffPt < 0.5) {
  console.log('✅ GREEN — p1 examheader 간격과 p2 headsep 통일 (차이 ≤ 0.5pt)');
  console.log('   단일 출처: bank/시리즈-조판-지침-매핑.md §6');
  process.exit(0);
}

console.log(`🔴 RED — 페이지 간 상단 간격 불일치 (차이 ${diffPt.toFixed(2)}pt)`);
console.log(`   p2 기준 = ${headsepStr}`);
console.log(`   p1 examheader ${examheaderGapStr} → ${headsepStr} 로 정정 필요`);
console.log('');
console.log('=== 정정 지침 ===');
console.log(`examheader 정의에서 \\dmvlinetop\\par 다음 값을 \\addvspace{${(headsepPt / 2.84527559).toFixed(1)}mm} 로 변경`);
console.log('단일 출처: bank/시리즈-조판-지침-매핑.md §6 (세션 93 마스터 확정 · p2 기준)');

process.exit(1);
