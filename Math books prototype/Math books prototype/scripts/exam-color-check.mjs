#!/usr/bin/env node
// 시험지 색상 사용 감지 — v1.0 (완전 검정 통일 강제)
// 2026-07-26 세션 93 신설 (시스템 정정 3 · 마스터 확정 "모든 디자인 검정 통일 · Q20 예외 없음")
//
// 배경:
//   세션 92 마스터 지시 "모든 디자인 요소는 검정색" (form-A 헤더)
//   세션 93 재확정: Q20 (변별 정점) 도 예외 없음 · dm-crimson·problemcrimson·ptscrimson 완전 삭제
//
// 단일 출처: bank/시리즈-조판-지침-매핑.md §5 "완전 검정 통일 (세션 92·93 마스터 확정 · 예외 없음)"
//
// 원리:
//   1. tex 파일 스캔 · 색상 관련 매크로·환경·정의 모두 감지
//   2. vB-* 로컬 재정의 검증 (모두 #000000 or #FFFFFF)
//   3. 하드코딩 색상 명령 감지 (\color{red}·\color{blue}·color=red 등)
//   4. 색상 매크로·환경 정의 감지 (dm-crimson·problemcrimson·ptscrimson 등)
//   5. 감지 시 위치·컨텍스트·정정 방향 리포트
//
// 허용 색상 (완전 검정 팔레트):
//   - black · #000000 · {HTML}{000000} · {HTML}{FFFFFF} (배경 흰색)
//   - vB-light = #FFFFFF (배경만 흰색 허용)
//   - 그 외 vB-* 로컬 재정의 = #000000 필수
//
// 사용법:
//   node scripts/exam-color-check.mjs <문제.tex>
// 반환 코드: 0 = GREEN / 1 = RED (색상 사용) / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/exam-color-check.mjs <문제.tex>');
  console.error('  반환 코드: 0 = GREEN / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const raw = fs.readFileSync(texPath, 'utf8');

// 주석 제거
function stripComments(text) {
  return text
    .split('\n')
    .map((line) => {
      const idx = line.indexOf('%');
      if (idx === -1) return line;
      if (idx > 0 && line[idx - 1] === '\\') return line;
      return line.slice(0, idx);
    })
    .join('\n');
}

const stripped = stripComments(raw);
const lines = raw.split('\n');
const strippedLines = stripped.split('\n');

const findings = [];

// 1. vB-* 로컬 재정의 검증
//    허용: {HTML}{000000} (검정) · {HTML}{FFFFFF} (배경) · {HTML}{ffffff} (소문자 배경)
//    금지: 그 외 모든 HTML 값
const vBDefineRegex = /\\definecolor\{(vB-[\w-]+)\}\{HTML\}\{([0-9a-fA-F]+)\}/;
for (let i = 0; i < strippedLines.length; i++) {
  const m = strippedLines[i].match(vBDefineRegex);
  if (m) {
    const name = m[1];
    const hex = m[2].toUpperCase();
    // 허용: 000000 (검정) · FFFFFF (배경 흰색)
    if (hex !== '000000' && hex !== 'FFFFFF') {
      findings.push({
        line: i + 1,
        severity: 'RED',
        label: `vB-* 로컬 재정의 색상 위반 (${name} = #${hex})`,
        why: '완전 검정 통일 · vB-* 는 모두 #000000 필수 (배경 vB-light만 #FFFFFF 예외)',
        context: lines[i]?.trim().slice(0, 100) || '',
        fix: `\\definecolor{${name}}{HTML}{000000}   % 검정 통일`,
      });
    }
  }
}

// 2. dm-crimson · dm-red · crimson · red 등 강조 색상 정의 감지
//    Q20 등 임의 강조 색상 신설 금지
const forbiddenColorDefines = [
  /\\definecolor\{(dm-crimson|dm-red|crimson|red|warn|dm-warn|accent|dm-accent)\}/,
  /\\definecolor\{[^}]*\}\{HTML\}\{(B[0-9A-F]{5}|E[0-9A-F]{5}|C[0-9A-F]{5}|D[0-9A-F]{5}|A[0-9A-F]{5}|1[0-9A-F]{5}|2[0-9A-F]{5}|3[0-9A-F]{5})\}/i,
];
for (let i = 0; i < strippedLines.length; i++) {
  const line = strippedLines[i];
  for (const pat of forbiddenColorDefines) {
    const m = line.match(pat);
    if (m) {
      // 000000·FFFFFF 아닌 vB-* 는 이미 위에서 감지 · 여기선 dm-* 만
      const isVB = /\\definecolor\{vB-/.test(line);
      if (isVB) continue;
      // vB-light FFFFFF 예외
      if (/FFFFFF/i.test(line) || /000000/.test(line)) continue;
      findings.push({
        line: i + 1,
        severity: 'RED',
        label: `강조 색상 정의 감지 (${m[0].slice(0, 50)})`,
        why: '완전 검정 통일 · Q20 포함 예외 없음 · dm-crimson·red·warn·accent 등 정의 금지',
        context: lines[i]?.trim().slice(0, 100) || '',
        fix: '이 색상 정의 완전 삭제 · 사용 부분도 정정',
      });
      break;
    }
  }
}

// 3. \color{색상} 하드코딩 감지 (black · vB-* 이외)
//    허용: \color{black} · \color{vB-...} · \color{\매크로} · \color{white}
const colorUsageRegex = /\\color\{([^}]+)\}/g;
for (let i = 0; i < strippedLines.length; i++) {
  const line = strippedLines[i];
  let m;
  const localRegex = new RegExp(colorUsageRegex.source, 'g');
  while ((m = localRegex.exec(line)) !== null) {
    const colorName = m[1].trim();
    // 허용 목록
    const allowed = [
      'black',
      'white',
      'gray',              // style.sty 기본 (참조 표기 등)
    ];
    if (allowed.includes(colorName)) continue;
    // vB-* · dm-* 참조는 정의 검증에서 처리
    if (colorName.startsWith('vB-')) continue;
    // \매크로 참조 (\probnumcolor 등)
    if (colorName.startsWith('\\')) continue;
    // dm-crimson 등 강조 사용 감지
    if (/^(dm-crimson|dm-red|crimson|red|warn|dm-warn|accent|dm-accent)$/.test(colorName)) {
      findings.push({
        line: i + 1,
        severity: 'RED',
        label: `강조 색상 사용 (\\color{${colorName}})`,
        why: '완전 검정 통일 · Q20 예외 없음 · black 으로 정정',
        context: lines[i]?.trim().slice(0, 100) || '',
        fix: `\\color{black}`,
      });
    } else {
      findings.push({
        line: i + 1,
        severity: 'YELLOW',
        label: `기타 색상 사용 (\\color{${colorName}})`,
        why: '색상 확인 필요 · 허용 목록 (black·white·vB-*) 밖',
        context: lines[i]?.trim().slice(0, 100) || '',
        fix: 'black 으로 정정 or 허용 목록 확인',
      });
    }
  }
}

// 4. color=red · color=blue 등 옵션 형태 감지 (TikZ·xcolor 등)
const colorOptionRegex = /color\s*=\s*([a-zA-Z][\w-]*)/g;
for (let i = 0; i < strippedLines.length; i++) {
  const line = strippedLines[i];
  let m;
  const localRegex = new RegExp(colorOptionRegex.source, 'g');
  while ((m = localRegex.exec(line)) !== null) {
    const colorName = m[1].trim();
    const allowed = ['black', 'white', 'gray'];
    if (allowed.includes(colorName)) continue;
    if (colorName.startsWith('vB-')) continue;
    if (/^(dm-crimson|dm-red|crimson|red|warn|dm-warn|accent|dm-accent)$/.test(colorName)) {
      findings.push({
        line: i + 1,
        severity: 'RED',
        label: `옵션 형태 강조 색상 (color=${colorName})`,
        why: '완전 검정 통일 · color=black 정정',
        context: lines[i]?.trim().slice(0, 100) || '',
        fix: `color=black`,
      });
    }
  }
}

// 5. problemcrimson · ptscrimson · pointcrimson 등 강조 환경·매크로 정의 감지
const forbiddenMacroDefines = [
  /\\newenvironment\{(problemcrimson|probcrimson|pointcrimson)\}/,
  /\\newcommand\{\\(ptscrimson|probcrimson|pointcrimson)\}/,
];
for (let i = 0; i < strippedLines.length; i++) {
  const line = strippedLines[i];
  for (const pat of forbiddenMacroDefines) {
    const m = line.match(pat);
    if (m) {
      findings.push({
        line: i + 1,
        severity: 'RED',
        label: `강조 매크로 정의 감지 (${m[1]})`,
        why: '완전 검정 통일 · Q20 강조 매크로 완전 삭제 · 일반 problem·pts 사용',
        context: lines[i]?.trim().slice(0, 100) || '',
        fix: '이 매크로 정의 완전 삭제 · Q20 조판 시 일반 \\begin{problem}{20}{s} · \\pts{7} 사용',
      });
      break;
    }
  }
}

// 리포트
console.log(`\n📋 시험지 색상 사용 감지 — ${texPath}`);
console.log(`   총 감지: ${findings.length}건\n`);

const redCount = findings.filter((f) => f.severity === 'RED').length;
const yellowCount = findings.filter((f) => f.severity === 'YELLOW').length;

if (findings.length === 0) {
  console.log('✅ GREEN — 완전 검정 통일 준수 · Q20 예외 없음.');
  console.log('   단일 출처: bank/시리즈-조판-지침-매핑.md §5');
  process.exit(0);
}

for (const f of findings) {
  const icon = f.severity === 'RED' ? '🔴' : '🟡';
  console.log(`${icon} [line ${f.line}] ${f.label}`);
  console.log(`   Why: ${f.why}`);
  if (f.context) console.log(`   context: ${f.context}`);
  if (f.fix) console.log(`   fix: ${f.fix}`);
  console.log('');
}

console.log('=== 요약 ===');
console.log(`전체: ${findings.length}건 · RED: ${redCount}건 · YELLOW: ${yellowCount}건`);
console.log('   단일 출처: bank/시리즈-조판-지침-매핑.md §5 "완전 검정 통일"');
console.log('   Q20 포함 예외 없음 (2026-07-26 세션 93 마스터 확정)');

if (redCount > 0) {
  console.log('\n🔴 RED — 색상 사용 위반 · 정정 필수');
  process.exit(1);
}

console.log('\n🟡 YELLOW — 색상 확인 필요');
process.exit(0);
