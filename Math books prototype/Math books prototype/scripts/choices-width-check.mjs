#!/usr/bin/env node
// choices 폭 검사 — \choices 블록의 각 선지 폭 예측 · 오버플로우 예방
// 2026-07-14 세션 36 마스터 확립 (2회 #3 \choices 오버플로우 사건 계기)
//
// 단일 출처:
//   - templates/style.sty §choices·choices32·choicesii·choicesv 정의
//   - templates/시험지-학교시험-v3.md §"보기 환경 4종"
//   - CLAUDE.md §"안전 절차 원칙 4" (골든 복사 후 매크로 재선택 의무)
//
// 원리:
//   1. \begin{choices}...\end{choices} 블록 검출
//   2. 각 \choice{} 내부 텍스트 폭 예측 (문자 수 + 수식 복잡도)
//   3. 컨텍스트 감지 (probpair 안 = 좁은 컬럼 · 밖 = 넓은 컬럼)
//   4. 임계 초과 시 대체 매크로 권장
//
// 매크로 대체 결정 트리:
//   - 각 choice ≤ 4 → choices OK
//   - 각 choice 5-7 → choices32 (3-2) 권장 · YELLOW
//   - 각 choice 8+ → choicesii (2-2-1) 필수 · RED
//   - 각 choice 15+ → choicesv (5줄 세로) 필수 · RED
//
// 사용법:
//   node scripts/choices-width-check.mjs <문제.tex>
// 반환 코드: 0 = GREEN·YELLOW / 1 = RED / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/choices-width-check.mjs <문제.tex>');
  console.error('  반환 코드: 0 = GREEN·YELLOW / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const raw = fs.readFileSync(texPath, 'utf8');
const lines = raw.split('\n');

// 임계 (문자 폭 단위, empirical calibration)
// 2회 #3 사건 (\choice{$y=3x+N$} × 5, sum 30 · max 6 · 71pt overflow) 기준
//
// 좁은 컬럼 (probpair 0.46\linewidth ≈ 75mm) 폭 예산:
//   - Sum 25 이하 · Max 5 이하 → GREEN
//   - Sum 25~30 or Max 6~8 → YELLOW (choices32 권장)
//   - Sum 30+ or Max 8+ → RED (choicesii/choicesv 필수)
//   - Max 12+ → RED choicesv (세로 5줄)
const T_SUM_OK = 25;
const T_SUM_YELLOW = 30;
const T_MAX_OK = 5;
const T_MAX_YELLOW = 8;
const T_MAX_RED_V = 12;

// 폭 예측 함수 — 각 \choice{} 콘텐츠의 문자 폭
function estimateWidth(content) {
  // $ 수식 delimiter 제거
  let text = content.replace(/\$([^$]*)\$/g, '$1');
  // 공백 제거
  text = text.replace(/\s+/g, '');

  let width = 0;
  let i = 0;
  while (i < text.length) {
    // LaTeX 명령
    if (text[i] === '\\') {
      // \dfrac{a}{b}, \tfrac, \frac: 분수는 좁은 세로 = max(numer, denom) + 1
      const fracMatch = text.slice(i).match(/^\\(dfrac|tfrac|frac)\{([^}]*)\}\{([^}]*)\}/);
      if (fracMatch) {
        width += Math.max(fracMatch[2].length, fracMatch[3].length) + 1;
        i += fracMatch[0].length;
        continue;
      }
      // \sqrt{x}: 콘텐츠 길이 + 2 (루트 기호)
      const sqrtMatch = text.slice(i).match(/^\\sqrt\{([^}]*)\}/);
      if (sqrtMatch) {
        width += sqrtMatch[1].length + 2;
        i += sqrtMatch[0].length;
        continue;
      }
      // \mathrm{...}: 그대로 폭 카운트
      const mathrmMatch = text.slice(i).match(/^\\mathrm\{([^}]*)\}/);
      if (mathrmMatch) {
        width += mathrmMatch[1].length;
        i += mathrmMatch[0].length;
        continue;
      }
      // \, \: \; \ 공백 명령 (얇은 공백)
      if (/^\\[,:;\s]/.test(text.slice(i))) {
        width += 0.5;
        i += 2;
        continue;
      }
      // \le, \ge, \ne, \pm, \times, \cdot 등: 1 symbol
      const cmdMatch = text.slice(i).match(/^\\([a-zA-Z]+)/);
      if (cmdMatch) {
        width += 1;
        i += cmdMatch[0].length;
        continue;
      }
      i++;
      continue;
    }
    // 한글 문자 (폭 2)
    if (/[가-힣ㄱ-ㅎ]/.test(text[i])) {
      width += 2;
      i++;
      continue;
    }
    // 원 숫자 ①②③④⑤ 등
    if (/[①-⑤]/.test(text[i])) {
      width += 1.5;
      i++;
      continue;
    }
    // ASCII·기타
    width += 1;
    i++;
  }
  return Math.round(width * 10) / 10;
}

// \begin{choices}...\end{choices} 블록 검출
const choicesBlocks = [];
let inChoices = false;
let currentBlock = null;
let inProblem = null; // 현재 problem 번호
let inProbpair = false;
let probpairDepth = 0;

for (let ln = 0; ln < lines.length; ln++) {
  const line = lines[ln];

  // problem 번호 감지
  const probMatch = line.match(/\\begin\{problem\}\{(\d+)\}/);
  if (probMatch) inProblem = parseInt(probMatch[1]);
  if (line.includes('\\end{problem}')) inProblem = null;

  // probpair 감지
  if (line.includes('\\probpair{')) probpairDepth++;
  // }... 닫힘은 어렵게 카운트하지 않고 flag만: pagepair 끝날 때 리셋
  if (line.includes('\\begin{pagepair}')) inProbpair = true;
  if (line.includes('\\end{pagepair}')) {
    inProbpair = false;
    probpairDepth = 0;
  }

  // choices 시작
  const beginMatch = line.match(/\\begin\{(choices\w*)\}/);
  if (beginMatch) {
    inChoices = true;
    currentBlock = {
      env: beginMatch[1],
      startLine: ln + 1,
      problem: inProblem,
      inProbpair: inProbpair,
      choices: [],
    };
    continue;
  }

  // choices 종료
  if (line.match(/\\end\{choices\w*\}/) && inChoices) {
    currentBlock.endLine = ln + 1;
    choicesBlocks.push(currentBlock);
    inChoices = false;
    currentBlock = null;
    continue;
  }

  // \choice{...} 콘텐츠 추출
  if (inChoices) {
    const choiceMatch = line.match(/\\choice\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/);
    if (choiceMatch) {
      currentBlock.choices.push({
        line: ln + 1,
        content: choiceMatch[1],
        width: estimateWidth(choiceMatch[1]),
      });
    }
  }
}

console.log('🔍 choices 폭 검사');
console.log(`   파일: ${texPath}`);
console.log(`   검출: ${choicesBlocks.length} 블록\n`);

if (choicesBlocks.length === 0) {
  console.log('✅ \\choices 블록 없음. 스킵.');
  process.exit(0);
}

let redCount = 0;
let yellowCount = 0;

for (const block of choicesBlocks) {
  const probLabel = block.problem ? `#${block.problem}` : '(?)';
  const envLabel = block.env;
  const contextLabel = block.inProbpair ? '좁은 컬럼(probpair)' : '넓은 컬럼';

  if (block.choices.length === 0) {
    console.log(`⚠️  ${probLabel} ${envLabel} @ line ${block.startLine}: \\choice{} 없음`);
    continue;
  }

  const widths = block.choices.map(c => c.width);
  const maxW = Math.max(...widths);
  const minW = Math.min(...widths);
  const sumW = widths.reduce((a, b) => a + b, 0);
  const avgW = (sumW / widths.length).toFixed(1);

  // 판정 (좁은 컬럼 기준. 넓은 컬럼은 임계 1.5배로 완화)
  const scale = block.inProbpair ? 1 : 1.5;
  const sumOk = T_SUM_OK * scale;
  const sumYellow = T_SUM_YELLOW * scale;
  const maxOk = T_MAX_OK * scale;
  const maxYellow = T_MAX_YELLOW * scale;
  const maxRedV = T_MAX_RED_V * scale;

  let judgment, symbol, recommendation;
  if (envLabel !== 'choices') {
    judgment = 'GREEN (대체 매크로)';
    symbol = '✅';
    recommendation = null;
  } else if (sumW <= sumOk && maxW <= maxOk) {
    judgment = 'GREEN';
    symbol = '✅';
    recommendation = null;
  } else if (maxW >= maxRedV) {
    judgment = 'RED (극단)';
    symbol = '🔴';
    recommendation = 'choicesv (5줄 세로) 필수';
    redCount++;
  } else if (sumW > sumYellow || maxW > maxYellow) {
    judgment = 'RED';
    symbol = '🔴';
    recommendation = 'choicesii (2-2-1) 필수 (or choices32 검토)';
    redCount++;
  } else {
    judgment = 'YELLOW';
    symbol = '🟡';
    recommendation = 'choices32 (3-2 두 줄) 권장';
    yellowCount++;
  }

  console.log(`${symbol} ${probLabel} \\begin{${envLabel}} @ line ${block.startLine} [${contextLabel}]`);
  console.log(`   폭 예측: sum ${sumW} · max ${maxW} · min ${minW} · avg ${avgW}`);
  console.log(`   선지 폭: [${widths.join(', ')}]`);
  console.log(`   판정: ${judgment}`);
  if (recommendation) {
    console.log(`   → ${recommendation}`);
    console.log(`     매크로: \\begin{${recommendation.split(' ')[0]}}...\\end{...}`);
  }
  console.log('');
}

console.log('=== 요약 ===');
console.log(`   블록: ${choicesBlocks.length} · 🔴 RED: ${redCount} · 🟡 YELLOW: ${yellowCount}`);

console.log('\n=== 임계 (좁은 컬럼 probpair 안) ===');
console.log(`   sum ≤ ${T_SUM_OK} · max ≤ ${T_MAX_OK}: \\choices GREEN`);
console.log(`   sum ${T_SUM_OK+1}~${T_SUM_YELLOW} · max ${T_MAX_OK+1}~${T_MAX_YELLOW}: choices32 YELLOW`);
console.log(`   sum ≥ ${T_SUM_YELLOW+1} · max ≥ ${T_MAX_YELLOW+1}: choicesii RED`);
console.log(`   max ≥ ${T_MAX_RED_V}: choicesv RED (세로)`);
console.log('   (넓은 컬럼 = 임계 1.5배)');

console.log('\n=== 단일 출처 ===');
console.log('templates/style.sty §choices·choices32·choicesii·choicesv');
console.log('templates/시험지-학교시험-v3.md §"보기 환경 4종"');

if (redCount > 0) {
  console.log('\n❌ 빌드 차단: 🔴 RED 매크로 재선택 필요.');
  process.exit(1);
}

process.exit(0);
