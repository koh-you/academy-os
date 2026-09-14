#!/usr/bin/env node
// Overfull hbox 검사 — 빌드 로그에서 Overfull \hbox 검출 · 슬롯 번호 정확 매핑
// 2026-07-14 세션 36 마스터 확립 (CLAUDE.md §"수식 줄바꿈 규약 규칙 4" 자동화)
//
// 단일 출처:
//   - CLAUDE.md §"수식 줄바꿈 규약" 규칙 4 (Overfull grep 의무)
//   - CLAUDE.md §"안전 절차" 원칙 2 (빌드 로그 전수 검토)
//
// 원리:
//   1. .log 파일 파싱 → "Overfull \hbox (NN.NNpt too wide) detected at line NN" grep
//   2. .tex 파일 역참조 → line 번호 → problem 번호 매핑
//   3. 20pt 이상 YELLOW, 50pt 이상 RED
//   4. exam-review 오진단 방지 (line 번호 → 슬롯 번호 정확 대응)
//
// 사용법:
//   node scripts/overfull-check.mjs <파일.tex>
//   (자동으로 파일.log 감지)
//
// 반환 코드: 0 = GREEN·YELLOW / 1 = RED / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/overfull-check.mjs <파일.tex>');
  console.error('  자동으로 파일.log 감지');
  console.error('  반환 코드: 0 = GREEN·YELLOW / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
const logPath = texPath.replace(/\.tex$/, '.log');

if (!fs.existsSync(texPath)) {
  console.error(`❌ tex 파일 없음: ${texPath}`);
  process.exit(2);
}
if (!fs.existsSync(logPath)) {
  console.error(`❌ log 파일 없음: ${logPath}`);
  console.error('   먼저 xelatex 빌드 후 재실행하세요.');
  process.exit(2);
}

const texContent = fs.readFileSync(texPath, 'utf8');
const logContent = fs.readFileSync(logPath, 'utf8');
const texLines = texContent.split('\n');
const logLines = logContent.split('\n');

// 임계 (pt 기준)
const T_YELLOW_PT = 20;
const T_RED_PT = 50;

// 1. .log에서 Overfull hbox 검출
const overfulls = [];
for (const line of logLines) {
  // Format: "Overfull \hbox (NN.NNpt too wide) detected at line NN"
  const match = line.match(/Overfull \\hbox \(([\d.]+)pt too wide\) (?:in paragraph )?(?:detected )?at line (\d+)/);
  if (match) {
    overfulls.push({
      pt: parseFloat(match[1]),
      texLine: parseInt(match[2]),
      rawLine: line.trim(),
    });
  }
}

// 2. .tex 파일에서 problem 번호 → line 범위 매핑
const problems = []; // [{n, startLine, endLine}]
let currentProblem = null;
for (let i = 0; i < texLines.length; i++) {
  const line = texLines[i];
  const beginMatch = line.match(/\\begin\{problem\}\{(\d+)\}/);
  if (beginMatch) {
    currentProblem = {
      n: parseInt(beginMatch[1]),
      startLine: i + 1,
      endLine: null,
    };
  }
  if (line.includes('\\end{problem}') && currentProblem) {
    currentProblem.endLine = i + 1;
    problems.push(currentProblem);
    currentProblem = null;
  }
}

// 3. line 번호 → problem 번호 매핑 함수 (near-미스 감지 확장)
function findProblem(texLine) {
  // 정확 매칭: problem 안
  for (const p of problems) {
    if (texLine >= p.startLine && texLine <= p.endLine) return p.n;
  }
  // Near-miss: problem 사이 (probpair 끝·pagepair 끝 등). 가장 가까운 앞 problem
  let closest = null;
  let minDist = Infinity;
  for (const p of problems) {
    const dist = texLine - p.endLine;
    if (dist >= 0 && dist < minDist) {
      minDist = dist;
      closest = p;
    }
  }
  if (closest && minDist <= 20) {
    return `${closest.n} (근접, +${minDist}줄)`;
  }
  return null;
}

// ── 사전 위험 감지 (2026-07-16 세션 46 신설, feedback_overfull_prewarning) ──
// 좁은 컬럼 (probpair·multicols)에서 Overfull 유발 가능성 높은 패턴 사전 감지
// 원리: display 수식 (\[...\] or $$...$$) 안 \qquad·다단계 체인 검사
// 목적: 빌드 없이도 위험 위치 사전 파악 · Overfull 12건 반복 정정 회피
const preWarnings = [];
{
  const lines = texContent.split('\n');
  let inDisplay = false;
  let displayStart = 0;
  let displayContent = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // display 수식 detect (\[ or $$ 시작)
    if (!inDisplay) {
      if (/\\\[/.test(line) || /\$\$/.test(line.replace(/\\\$/g, ''))) {
        inDisplay = true;
        displayStart = i + 1;
        displayContent = line;
        // 한 줄 완결 검사
        const inline = line.match(/\\\[(.+?)\\\]|\$\$(.+?)\$\$/);
        if (inline) {
          checkDisplayContent(inline[1] || inline[2], displayStart, preWarnings);
          inDisplay = false;
          displayContent = '';
        }
      }
    } else {
      displayContent += '\n' + line;
      if (/\\\]/.test(line) || /\$\$/.test(line.replace(/\\\$/g, ''))) {
        inDisplay = false;
        checkDisplayContent(displayContent, displayStart, preWarnings);
        displayContent = '';
      }
    }
  }
}

function checkDisplayContent(content, startLine, warnings) {
  // \qquad·qquad 있으면 병렬식 위험
  const qquadCount = (content.match(/\\qquad/g) || []).length;
  if (qquadCount >= 1) {
    warnings.push({
      texLine: startLine,
      pattern: 'qquad-parallel',
      severity: qquadCount >= 2 ? 'HIGH' : 'MID',
      hint: '병렬식 (\\qquad) 좁은 컬럼 초과 위험. 2줄 분리 권장.',
      snippet: content.replace(/\s+/g, ' ').slice(0, 60),
    });
  }
  // "= X = Y = Z" 다단계 체인 (등호 3개 이상)
  const eqCount = (content.match(/(?<!\\)=/g) || []).length;
  if (eqCount >= 3) {
    warnings.push({
      texLine: startLine,
      pattern: 'multi-step-chain',
      severity: eqCount >= 4 ? 'HIGH' : 'MID',
      hint: `등호 ${eqCount}개 체인. 중간 값 생략 or 2줄 분리 권장.`,
      snippet: content.replace(/\s+/g, ' ').slice(0, 60),
    });
  }
  // 두 좌표식 병렬 (2026-07-19 세션 51 신설 : L2-2 95.9pt · L2-8 28.3pt Overfull 사건)
  // 패턴: "X_x = ..., \quad X_y = ..." 또는 "..., \qquad X_y = ..."
  // 좁은 컬럼 (multicols·probpair) 에서 정형적 Overfull 유발
  if (/[_\}]_?[xy]\s*=[^,]{5,},\s*\\q?quad\s+\S{0,15}_[xy]\s*=/.test(content)) {
    warnings.push({
      texLine: startLine,
      pattern: 'dual-coord-inline',
      severity: 'HIGH',
      hint: '두 좌표식 병렬 (X_x=..., \\quad X_y=...). 좁은 컬럼 초과 위험 매우 큼. align* 두 줄 분리 강제.',
      snippet: content.replace(/\s+/g, ' ').slice(0, 60),
    });
  }
}

console.log('🔍 Overfull hbox 검사');
console.log(`   tex: ${texPath}`);
console.log(`   log: ${logPath}`);
console.log(`   Overfull 검출: ${overfulls.length}건`);
console.log(`   사전 위험 패턴: ${preWarnings.length}건\n`);

if (preWarnings.length > 0) {
  console.log('⚠️  사전 위험 패턴 감지 (빌드 전 정정 권장):');
  for (const w of preWarnings) {
    const symbol = w.severity === 'HIGH' ? '🟠' : '🟡';
    console.log(`   ${symbol} line ${w.texLine} · ${w.pattern} · ${w.hint}`);
    console.log(`      ${w.snippet}${w.snippet.length >= 60 ? '…' : ''}`);
  }
  console.log('');
}

if (overfulls.length === 0) {
  console.log('✅ Overfull \\hbox 없음. 통과.');
  process.exit(0);
}

let redCount = 0;
let yellowCount = 0;

// 중복 라인 그룹화
const grouped = new Map();
for (const o of overfulls) {
  const key = o.texLine;
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key).push(o);
}

const sortedLines = Array.from(grouped.keys()).sort((a, b) => a - b);

for (const texLine of sortedLines) {
  const group = grouped.get(texLine);
  const maxPt = Math.max(...group.map(o => o.pt));
  const count = group.length;
  const probRef = findProblem(texLine);

  let symbol, judgment;
  if (maxPt >= T_RED_PT) {
    symbol = '🔴';
    judgment = 'RED (심각)';
    redCount++;
  } else if (maxPt >= T_YELLOW_PT) {
    symbol = '🟡';
    judgment = 'YELLOW';
    yellowCount++;
  } else {
    symbol = '⚪';
    judgment = 'INFO (경미)';
  }

  console.log(`${symbol} line ${texLine} · ${count}회 · max ${maxPt}pt · ${judgment}`);
  if (probRef !== null) {
    console.log(`   → 슬롯 매핑: #${probRef}`);
  } else {
    console.log(`   → 슬롯 매핑: (problem 환경 밖 · pagepair·multicols 등)`);
  }
  // tex 컨텍스트 (해당 line 앞뒤 30자)
  if (texLine >= 1 && texLine <= texLines.length) {
    const contextText = texLines[texLine - 1].trim().slice(0, 80);
    if (contextText) {
      console.log(`   컨텍스트: ${contextText}${contextText.length >= 80 ? '...' : ''}`);
    }
  }
  console.log('');
}

console.log('=== 요약 ===');
console.log(`   Overfull 라인: ${sortedLines.length}개 · 🔴 RED: ${redCount} · 🟡 YELLOW: ${yellowCount}`);

console.log('\n=== 임계 ===');
console.log(`   < ${T_YELLOW_PT}pt: INFO (경미, 자연 발생 가능)`);
console.log(`   ${T_YELLOW_PT}~${T_RED_PT}pt: YELLOW (개선 검토 · 컬럼 폭 재조정 or 매크로 교체)`);
console.log(`   ≥ ${T_RED_PT}pt: RED (심각 · 즉시 정정 · \\choices → choices32/ii/v · 수식 디스플레이 분리)`);

console.log('\n=== 관련 자원 ===');
console.log('CLAUDE.md §"수식 줄바꿈·디스플레이 배치 규약" 규칙 4');
console.log('CLAUDE.md §"안전 절차" 원칙 2 (log 전수 검토)');
console.log('scripts/choices-width-check.mjs (사전 검증 · choices 폭)');

if (redCount > 0) {
  console.log('\n❌ 빌드 차단: 🔴 RED Overfull 검출. 즉시 정정 필요.');
  process.exit(1);
}

process.exit(0);
