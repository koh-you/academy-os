#!/usr/bin/env node
// figure 도해 검사 — TikZ 블록 · 좌표평면 대응 도해 유무 · 답 노출 · 좌표축 라벨 · 라벨 겹침 · 프레임 채움
// 2026-07-14 세션 36 마스터 확립 (2회 #17 팬터그래프 그림 회귀 사건 계기)
// 2026-07-20 세션 55 라벨-축 겹침 + 프레임 채움 검사 추가 (Check A · Check B)
//
// 참고 · 관심사 분리 (2026-07-22 세션 73):
//   - 실효 두께·점 크기·시리즈 일관성·직선 프레임 채움 = `scripts/figure-effective-check.mjs` 담당
//   - 이 도구는 라벨·여백·도해 유형 판정에 집중
//
// 단일 출처:
//   - bank/도해-카탈로그.md (mechanism 유형별 표준 도해)
//   - CLAUDE.md §"안전 절차" 원칙 5 (5-step 프로토콜)
//   - memory/feedback_figure_authoring_protocol.md
//   - memory/feedback_multilayer_situation_visualization.md
//   - memory/feedback_figure_design_system.md §1 라벨 겹침 · §7 프레임 채움 · §10 체크리스트 (신규)
//   - memory/feedback_label_placement.md (라벨 4대 규약, 신규)
//
// 검사 항목:
//   ① TikZ 블록 검출 · problem 슬롯 매핑
//   ② 좌표축 유무 (\draw ...->, x/y 라벨) — 좌표평면 대응 도해 판정
//   ③ 지문형 슬롯의 좌표평면 대응 도해 필수 여부 (원 C₁·C₂ 언급 대조)
//   ④ 답 노출 라벨 (구체 좌표·반지름·각도가 정답과 일치 감지 — 별도 답지 필요)
//   ⑤ 관용어 서사 시각화 감지 (강아지·펭귄 등 캐릭터 노드 라벨)
//   Ⓐ 라벨-축 겹침 (2026-07-20 세션 55): 축 근처 점의 node 위치가 축과 겹칠 위험
//   Ⓑ 프레임 채움 (2026-07-20 세션 55): 축 프레임 대비 콘텐츠 여백 > 25% RED, 15~25% YELLOW
//
// 사용법:
//   node scripts/figure-check.mjs <문제.tex>
//   node scripts/figure-check.mjs <파일1.tex> <파일2.tex> ...
//
// 반환 코드: 0 = GREEN·YELLOW / 1 = RED / 2 = 오용

import fs from 'node:fs';

// Check B 임계 (2026-07-20 세션 55 · 신정책: 평면도형 여백 ≥20%)
// 콘텐츠가 축의 80% 이하 (여백 ≥20%)여야 GREEN · 마스터 지시 "평면도형 그림은 좌표축의 전체 크기보다 항상 20% 이상 작게"
// 이전 정책 (≤15% GREEN)은 폐기 · 신정책: <20% RED, 20~25% YELLOW, ≥25% GREEN
const MARGIN_MIN_GREEN = 0.25; // ≥25% = GREEN
const MARGIN_MIN_YELLOW = 0.20; // 20~25% = YELLOW · <20% = RED
const AXIS_NEAR = 0.3;      // 축 근접 판정 거리 (그림 단위)

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-check.mjs <문제.tex> [파일2.tex ...]');
  console.error('  반환 코드: 0 = GREEN·YELLOW / 1 = RED / 2 = 오용');
  process.exit(2);
}

// 다중 파일은 하나씩 순회. 단일 파일 인터페이스 유지.
if (args.length > 1) {
  let anyRed = 0;
  for (const p of args) {
    console.log(`\n${'='.repeat(60)}\n📁 ${p}\n${'='.repeat(60)}`);
    const res = runOnFile(p);
    if (res === 1) anyRed = 1;
  }
  process.exit(anyRed);
} else {
  process.exit(runOnFile(args[0]));
}

// ------------------------------------------------------------
// 파일 1개 검사 (기존 로직 + Check A/B 확장)
// ------------------------------------------------------------
function runOnFile(texPath) {
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  return 2;
}

const raw = fs.readFileSync(texPath, 'utf8');
const lines = raw.split('\n');

// 1. Pass 1: problem 환경 범위 수집 (probpair 안 소문항도 포함, pagepair 단위)
const problemRanges = []; // [{n, startLine, endLine, body}]
{
  let curProbNum = null;
  let curStart = null;
  let curBody = [];
  let inPagepair = false;
  let pagepairStart = null;
  let pagepairBody = [];
  let pagepairProbNum = null;

  for (let ln = 0; ln < lines.length; ln++) {
    const line = lines[ln];
    // pagepair 감지 (probpair 소문항 포함용)
    if (line.includes('\\begin{pagepair}')) {
      inPagepair = true;
      pagepairStart = ln + 1;
      pagepairBody = [];
      pagepairProbNum = null;
    }
    if (inPagepair) pagepairBody.push(line);
    if (line.includes('\\end{pagepair}')) {
      // pagepair 안 problem 번호로 등록
      if (pagepairProbNum !== null) {
        problemRanges.push({
          n: pagepairProbNum,
          startLine: pagepairStart,
          endLine: ln + 1,
          body: pagepairBody.join('\n'),
        });
      }
      inPagepair = false;
    }

    const probMatch = line.match(/\\begin\{problem\}\{(\d+)\}/);
    if (probMatch) {
      curProbNum = parseInt(probMatch[1]);
      curStart = ln + 1;
      curBody = [];
      if (inPagepair && pagepairProbNum === null) pagepairProbNum = curProbNum;
    }
    if (curProbNum !== null) curBody.push(line);
    if (line.includes('\\end{problem}')) {
      if (!inPagepair) {
        problemRanges.push({
          n: curProbNum,
          startLine: curStart,
          endLine: ln + 1,
          body: curBody.join('\n'),
        });
      }
      curProbNum = null;
    }
  }
}

// 2. Pass 2: TikZ 블록 검출 + problem 매핑
const tikzBlocks = [];
let inTikz = false;
let currentTikz = null;

for (let ln = 0; ln < lines.length; ln++) {
  const line = lines[ln];
  if (line.includes('\\begin{tikzpicture}')) {
    inTikz = true;
    // TikZ 시작 line 번호로 problem 매핑
    const containingProb = problemRanges.find(p =>
      ln + 1 >= p.startLine && ln + 1 <= p.endLine
    );
    currentTikz = {
      problem: containingProb ? containingProb.n : null,
      startLine: ln + 1,
      body: [],
      probContext: containingProb ? containingProb.body : '',
    };
    continue;
  }
  if (line.includes('\\end{tikzpicture}') && inTikz) {
    currentTikz.endLine = ln + 1;
    currentTikz.body.push(line);
    tikzBlocks.push(currentTikz);
    inTikz = false;
    currentTikz = null;
    continue;
  }
  if (inTikz) currentTikz.body.push(line);
}

console.log('🔍 figure 도해 검사');
console.log(`   파일: ${texPath}`);
console.log(`   TikZ 블록: ${tikzBlocks.length}개\n`);

if (tikzBlocks.length === 0) {
  console.log('✅ TikZ 블록 없음. 스킵.');
  return 0;
}

let redCount = 0;
let yellowCount = 0;

// 좌표축 감지 정규식
const AXIS_PATTERN = /\\draw\s*(\[.*?\])?\s*\(.*?\)\s*(->|to)\s*.*?\s*node/;
const AXIS_LABEL_PATTERN = /node\[.*?\]\s*\{\s*\$?([xy])\$?\s*\}/;

// 관용어 서사 캐릭터 감지 (feedback_multilayer_situation_visualization ❌ 금지)
const NARRATIVE_CHARS = /강아지|펭귄|고양이|공룡|CCTV|카메라|로봇|자동차/;

// 지문형 mechanism 감지 (C₁·C₂ 원 대응 or 대응/자취/확대 mechanism 키워드)
const DUAL_CIRCLE_MECHANISM = /C_?\{?1\}?.*C_?\{?2\}?|C_?\{?A\}?.*C_?\{?B\}?|원.*C_?1.*원.*C_?2/s;
const CORRESPONDENCE_KEYWORDS = /자취|확대비|축소비|대응 규칙|대응 관계|평행이동.*대칭|자취의 방정식|자취가 이루는 도형/;

// 답 노출 감지 (반지름·좌표·각도 구체값 라벨)
const RADIUS_LABEL = /circle\s*\(\s*([\d.]+)\s*\)/g;

for (const block of tikzBlocks) {
  const probLabel = block.problem ? `#${block.problem}` : '(전역)';
  const bodyText = block.body.join('\n');

  // 좌표축 검사
  const hasXAxis = /\\draw.*?->.*?\(.*?,\s*0\s*\)|node.*?\{\s*\$?x\$?\s*\}/i.test(bodyText);
  const hasYAxis = /\\draw.*?->.*?\(\s*0\s*,.*?\)|node.*?\{\s*\$?y\$?\s*\}/i.test(bodyText);
  const isCoordinatePlane = hasXAxis || hasYAxis;

  // 관용어 서사 감지
  const hasNarrativeChar = NARRATIVE_CHARS.test(bodyText);

  // 부모 problem이 지문형 (원 두 개 mechanism) or 대응 mechanism (자취·확대·평행이동)?
  const hasDualCircles = block.probContext && DUAL_CIRCLE_MECHANISM.test(block.probContext);
  const hasCorrespondence = block.probContext && CORRESPONDENCE_KEYWORDS.test(block.probContext);
  const requireCoordinatePlane = hasDualCircles || hasCorrespondence;

  // 좌표평면 안 원 개수
  const circleMatches = bodyText.match(/\\draw.*?circle\s*\(/g);
  const circleCount = circleMatches ? circleMatches.length : 0;

  // 판정
  let judgment, symbol, recommendation;
  const issues = [];

  if (hasNarrativeChar) {
    issues.push('🔴 관용어 서사 캐릭터 노드 감지 (강아지·펭귄 등 서사 시각화 금지)');
    redCount++;
  }

  if (requireCoordinatePlane && !isCoordinatePlane) {
    const label = hasDualCircles ? '원 C₁·C₂ 대응' : '자취·대응·확대 mechanism';
    issues.push(`🔴 지문형 슬롯 (${label} 발문) · 좌표평면 대응 도해 부재`);
    issues.push('   → 원리 도식만 그림. 좌표평면 대응 도해 추가 필수');
    issues.push('   → bank/도해-카탈로그.md M-01 팬터그래프 [좌표평면 대응 도해] 참조');
    redCount++;
  }

  // Check F (2026-07-22 세션 73 신설 · 마스터 지적)
  // 축 라벨 (`x`·`y`) 위치가 화살표 끝 (E/N) 인지 자동 감지
  // 규정 (feedback_figure_authoring_protocol §3-B) :
  //   - `x` 라벨 : x축 아래 (S · `below`) · 화살표 끝 (E · `right`) 금지
  //   - `y` 라벨 : y축 왼쪽 (W · `left`) · 화살표 끝 (N · `above`) 금지
  // 감지 : \draw[..arrow..] (...) -- (...) node[POS...] {$x$|$y$}
  //   축 판정 (endpoints on y=0 for x-axis, x=0 for y-axis) + POS 파싱
  if (isCoordinatePlane) {
    const axisLabelRe = /\\draw\s*\[([^\]]*(?:-stealth|->|<->)[^\]]*)\]\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*--\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*node\s*\[([^\]]*)\]\s*\{\s*\$?([xy])\$?\s*\}/g;
    let am;
    while ((am = axisLabelRe.exec(bodyText)) !== null) {
      const [x1, y1, x2, y2] = [am[2], am[3], am[4], am[5]].map(parseFloat);
      const nodeOpts = am[6];
      const label = am[7];
      const isXAxis = Math.abs(y1) < 0.01 && Math.abs(y2) < 0.01;
      const isYAxis = Math.abs(x1) < 0.01 && Math.abs(x2) < 0.01;
      const posTokens = nodeOpts.split(',').flatMap(p => p.trim().split(/\s+/));
      const hasRight = posTokens.includes('right');
      const hasAbove = posTokens.includes('above');
      const hasBelow = posTokens.includes('below');
      const hasLeft = posTokens.includes('left');
      if (isXAxis && label === 'x' && hasRight) {
        issues.push(`🔴 x축 라벨 위치 위반 : node[${nodeOpts}] {$x$} → 화살표 끝 (E) 금지 · below (S) 로 정정`);
        redCount++;
      } else if (isYAxis && label === 'y' && hasAbove) {
        issues.push(`🔴 y축 라벨 위치 위반 : node[${nodeOpts}] {$y$} → 화살표 끝 (N) 금지 · left (W) 로 정정`);
        redCount++;
      } else if (isXAxis && label === 'x' && !hasBelow) {
        issues.push(`🟡 x축 라벨 위치 확인 : node[${nodeOpts}] {$x$} → below (S) 권장`);
        yellowCount++;
      } else if (isYAxis && label === 'y' && !hasLeft) {
        issues.push(`🟡 y축 라벨 위치 확인 : node[${nodeOpts}] {$y$} → left (W) 권장`);
        yellowCount++;
      }
    }
  }

  if (issues.length === 0) {
    if (!isCoordinatePlane && !hasDualCircles) {
      // 좌표평면 없음 + 대응 mechanism 없음 = 순수 원리 도식 OK
      judgment = 'GREEN (원리 도식)';
      symbol = '✅';
    } else if (isCoordinatePlane) {
      judgment = 'GREEN (좌표평면 대응 도해)';
      symbol = '✅';
    } else {
      judgment = 'GREEN';
      symbol = '✅';
    }
  } else if (issues.some(i => i.startsWith('🔴'))) {
    judgment = 'RED';
    symbol = '🔴';
  } else {
    judgment = 'YELLOW';
    symbol = '🟡';
  }

  console.log(`${symbol} ${probLabel} \\begin{tikzpicture} @ line ${block.startLine}`);
  console.log(`   좌표축: ${isCoordinatePlane ? '있음' : '없음'} · 원 개수: ${circleCount}`);
  console.log(`   대응 mechanism 필요 여부: ${requireCoordinatePlane ? `예 (${hasDualCircles ? 'C₁·C₂' : '자취/대응/확대'})` : '아니오'}`);
  console.log(`   판정: ${judgment}`);
  if (issues.length > 0) {
    for (const iss of issues) {
      console.log(`   ${iss}`);
    }
  }

  // ═════════════════════════════════════════════════════════════
  // Check A · Check B (2026-07-20 세션 55 신설)
  // A: 라벨-축 겹침 · B: 축 프레임 대비 콘텐츠 여백
  // ═════════════════════════════════════════════════════════════
  const segments = extractDrawSegments(bodyText);
  const axisRange = computeAxisRange(segments);
  const { coordinates, points } = extractContentPoints(bodyText);

  const labelChecks = checkLabelAxisCollision(points);
  const marginCheck = checkFrameMargin(coordinates, points, axisRange);

  // Check A 출력
  const labelRedChecks = labelChecks.filter(r => r.level === 'RED');
  const labelGreenChecks = labelChecks.filter(r => r.level === 'GREEN');
  if (labelChecks.length > 0) {
    console.log(`   [Check A · 라벨-축 겹침]`);
    for (const r of labelChecks) {
      const mark = r.level === 'RED' ? '🔴' : '✅';
      console.log(`     ${mark} ${r.label} — ${r.level} (${r.reason})`);
    }
    if (labelRedChecks.length > 0) redCount++;
  } else {
    console.log(`   [Check A] 축 근접 라벨 없음 — GREEN`);
  }

  // Check B 출력
  if (marginCheck && (marginCheck.xAxis || marginCheck.yAxis)) {
    const parts = [];
    let sawRed = false, sawYellow = false;
    if (marginCheck.xAxis) {
      const r = marginCheck.xAxis;
      const mark = r.level === 'RED' ? '🔴' : r.level === 'YELLOW' ? '🟡' : '✅';
      parts.push(`x축 여백 ${(r.ratio * 100).toFixed(1)}% ${mark}${r.level}`);
      if (r.level === 'RED') sawRed = true;
      else if (r.level === 'YELLOW') sawYellow = true;
    }
    if (marginCheck.yAxis) {
      const r = marginCheck.yAxis;
      const mark = r.level === 'RED' ? '🔴' : r.level === 'YELLOW' ? '🟡' : '✅';
      parts.push(`y축 여백 ${(r.ratio * 100).toFixed(1)}% ${mark}${r.level}`);
      if (r.level === 'RED') sawRed = true;
      else if (r.level === 'YELLOW') sawYellow = true;
    }
    console.log(`   [Check B · 프레임 채움] ${parts.join(' · ')}`);
    // RED/YELLOW인 축의 세부 정보 출력
    if (marginCheck.xAxis && marginCheck.xAxis.level !== 'GREEN') {
      const r = marginCheck.xAxis;
      console.log(`     x축 [${r.axisMin}, ${r.axisMax}] · 콘텐츠 [${r.contentMin}, ${r.contentMax}] · 좌 ${r.marginLeft.toFixed(2)} 우 ${r.marginRight.toFixed(2)}`);
    }
    if (marginCheck.yAxis && marginCheck.yAxis.level !== 'GREEN') {
      const r = marginCheck.yAxis;
      console.log(`     y축 [${r.axisMin}, ${r.axisMax}] · 콘텐츠 [${r.contentMin}, ${r.contentMax}] · 하 ${r.marginBot.toFixed(2)} 상 ${r.marginTop.toFixed(2)}`);
    }
    if (sawRed) redCount++;
    else if (sawYellow) yellowCount++;
  } else {
    console.log(`   [Check B] 축 미검출 (skip)`);
  }

  console.log('');
}

console.log('=== 요약 ===');
console.log(`   TikZ 블록: ${tikzBlocks.length} · 🔴 RED: ${redCount} · 🟡 YELLOW: ${yellowCount}`);

console.log('\n=== 판정 기준 (feedback_multilayer_situation_visualization) ===');
console.log('   🥇 좌표평면 대응 도해 — 발문 수학 대상 (원·궤도·집합) 관계 시각화');
console.log('   🥈 원리 도식 — mechanism 구조 (좌표평면 없음)');
console.log('   ❌ 관용어 서사 — 강아지·펭귄 등 캐릭터 시각화 금지');
console.log('   ');
console.log('   지문형 슬롯 (C₁·C₂ 대응) → 좌표평면 대응 도해 필수');
console.log('   지문형이 아닌 mechanism → 원리 도식만 OK');

console.log('\n=== 관련 자원 ===');
console.log('bank/도해-카탈로그.md (mechanism 유형별 표준 도해)');
console.log('CLAUDE.md §"안전 절차" 원칙 5 (5-step 프로토콜)');
console.log('feedback_figure_authoring_protocol · feedback_multilayer_situation_visualization');
console.log('실효 두께·점 크기·시리즈 일관성·직선 프레임 채움 → scripts/figure-effective-check.mjs (별도)');

if (redCount > 0) {
  console.log('\n❌ 빌드 차단: 🔴 RED figure 결함. 5-step 프로토콜 재이행 + 카탈로그 참조.');
  return 1;
}

return 0;
} // end runOnFile

// ═════════════════════════════════════════════════════════════
// Check A / Check B 지원 함수 (2026-07-20 세션 55 신설)
// (임계 MARGIN_*·AXIS_NEAR는 파일 상단 참조)
// ═════════════════════════════════════════════════════════════

// \draw ... 좌표 세그먼트 추출 (계산식 좌표 제외 · 단순 (x, y) 좌표만)
function extractDrawSegments(text) {
  const segments = [];
  const drawRe = /\\draw\b[^\n;]*?;/g;
  const matches = text.match(drawRe);
  if (!matches) return segments;
  for (const drawStmt of matches) {
    // 계산식 (예: $ (C)!1.15!(P) $) 이 포함된 draw는 축 검출용으로 제외
    if (drawStmt.includes('$ (') || drawStmt.includes('$(')) continue;
    const coordRe = /\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)/g;
    const coords = [];
    let cm;
    while ((cm = coordRe.exec(drawStmt)) !== null) {
      coords.push({ x: parseFloat(cm[1]), y: parseFloat(cm[2]) });
    }
    for (let i = 0; i < coords.length - 1; i++) {
      segments.push({
        x1: coords[i].x, y1: coords[i].y,
        x2: coords[i + 1].x, y2: coords[i + 1].y,
      });
    }
  }
  return segments;
}

// y=0 세그먼트 = x축, x=0 세그먼트 = y축 (여러 draw로 분할된 축 통합)
function computeAxisRange(segments) {
  let xAxisMin = Infinity, xAxisMax = -Infinity;
  let yAxisMin = Infinity, yAxisMax = -Infinity;
  let hasX = false, hasY = false;
  const EPS = 0.01;
  for (const s of segments) {
    if (Math.abs(s.y1) < EPS && Math.abs(s.y2) < EPS) {
      hasX = true;
      xAxisMin = Math.min(xAxisMin, s.x1, s.x2);
      xAxisMax = Math.max(xAxisMax, s.x1, s.x2);
    }
    if (Math.abs(s.x1) < EPS && Math.abs(s.x2) < EPS) {
      hasY = true;
      yAxisMin = Math.min(yAxisMin, s.y1, s.y2);
      yAxisMax = Math.max(yAxisMax, s.y1, s.y2);
    }
  }
  return {
    xAxis: hasX ? { min: xAxisMin, max: xAxisMax } : null,
    yAxis: hasY ? { min: yAxisMin, max: yAxisMax } : null,
  };
}

// 콘텐츠 점 · 라벨 위치 추출
function extractContentPoints(text) {
  const coordinates = {}; // name → {x, y}
  const points = []; // {x, y, label, position, isNodeAt?}

  // \coordinate (name) at (x, y);
  const coordRe = /\\coordinate\s*\(\s*([A-Za-z0-9_]+)\s*\)\s*at\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*;/g;
  let m;
  while ((m = coordRe.exec(text)) !== null) {
    coordinates[m[1]] = { x: parseFloat(m[2]), y: parseFloat(m[3]) };
  }

  // \filldraw ... (X) circle (r) node[POS,...] {LABEL};  · X = (x,y) 또는 name
  // label 안 중첩 {...}(예: $\mathrm{A}$) 지원
  const filldrawRe = /\\filldraw\b[^;]*?\(\s*([^)]+?)\s*\)\s*circle\s*\([^)]*\)\s*node\s*\[([^\]]*)\]\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*;/g;
  while ((m = filldrawRe.exec(text)) !== null) {
    const anchor = m[1].trim();
    const nodeOpts = m[2];
    const label = m[3];
    const pt = resolvePoint(anchor, coordinates);
    if (pt !== null) {
      points.push({
        x: pt.x, y: pt.y,
        label: cleanLabel(label),
        position: extractPositionKeywords(nodeOpts),
      });
    }
  }

  // \node[POS,...] at (x, y) {LABEL};
  const nodeAtRe = /\\node\s*(?:\[([^\]]*)\])?\s*at\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*;/g;
  while ((m = nodeAtRe.exec(text)) !== null) {
    const nodeOpts = m[1] || '';
    const x = parseFloat(m[2]);
    const y = parseFloat(m[3]);
    const label = m[4];
    points.push({
      x, y,
      label: cleanLabel(label),
      position: extractPositionKeywords(nodeOpts),
      isNodeAt: true,
    });
  }

  return { coordinates, points };
}

function resolvePoint(anchor, coordinates) {
  const numMatch = anchor.match(/^\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*$/);
  if (numMatch) return { x: parseFloat(numMatch[1]), y: parseFloat(numMatch[2]) };
  if (coordinates[anchor]) return coordinates[anchor];
  return null;
}

function cleanLabel(label) {
  let s = label.trim();
  s = s.replace(/\$/g, '');
  s = s.replace(/\\mathrm\s*\{([^}]*)\}/g, '$1');
  s = s.replace(/\\text(bf|it|rm)?\s*\{([^}]*)\}/g, '$2');
  return s.trim();
}

function extractPositionKeywords(nodeOpts) {
  const keywords = new Set();
  const parts = nodeOpts.split(',').map((s) => s.trim());
  const dirs = ['above', 'below', 'left', 'right'];
  for (const part of parts) {
    const key = part.split('=')[0].trim();
    const tokens = key.split(/\s+/);
    for (const t of tokens) {
      if (dirs.includes(t)) keywords.add(t);
    }
  }
  return Array.from(keywords);
}

// 축 라벨(x, y, O)은 콘텐츠 bbox에서 제외
function isAxisLabel(label) {
  const s = label.trim();
  return s === 'x' || s === 'y' || s === 'O' || s === 'o';
}

// Check A: 라벨-축 겹침
function checkLabelAxisCollision(points) {
  const results = [];
  for (const p of points) {
    if (p.isNodeAt) continue;
    if (isAxisLabel(p.label)) continue;
    const nearYAxis = Math.abs(p.x) < AXIS_NEAR;
    const nearXAxis = Math.abs(p.y) < AXIS_NEAR;
    if (!nearYAxis && !nearXAxis) continue;
    const pos = p.position;
    const hasVertical = pos.includes('above') || pos.includes('below');
    const hasHorizontal = pos.includes('left') || pos.includes('right');
    // y축 근처: above/below만 있으면 y축과 겹칠 위험
    if (nearYAxis && hasVertical && !hasHorizontal) {
      results.push({
        level: 'RED',
        label: `${p.label}(${p.x}, ${p.y}) node[${pos.join(' ')}]`,
        reason: 'y축 실선과 겹칠 위험 → left/right 조합 권장',
      });
      continue;
    }
    // x축 근처: left/right만 있으면 x축과 겹칠 위험
    if (nearXAxis && hasHorizontal && !hasVertical) {
      results.push({
        level: 'RED',
        label: `${p.label}(${p.x}, ${p.y}) node[${pos.join(' ')}]`,
        reason: 'x축 실선과 겹칠 위험 → above/below 조합 권장',
      });
      continue;
    }
    // 근접했으나 위치 조합이 올바름
    let reason = '축 회피 OK';
    if (nearYAxis && hasHorizontal) reason = 'left/right로 y축 회피';
    else if (nearXAxis && hasVertical) reason = 'above/below로 x축 회피';
    else if (nearYAxis && nearXAxis && hasVertical && hasHorizontal) reason = '원점 근처·복합 방향 OK';
    results.push({
      level: 'GREEN',
      label: `${p.label}(${p.x}, ${p.y}) node[${pos.join(' ') || '(none)'}]`,
      reason,
    });
  }
  return results;
}

// Check B: 축 프레임 vs 콘텐츠 여백
function checkFrameMargin(coordinates, points, axisRange) {
  const contentPoints = [];
  for (const key in coordinates) {
    contentPoints.push({ x: coordinates[key].x, y: coordinates[key].y });
  }
  for (const p of points) {
    if (isAxisLabel(p.label)) continue;
    contentPoints.push({ x: p.x, y: p.y });
  }
  if (contentPoints.length === 0) return null;

  let cxMin = Infinity, cxMax = -Infinity, cyMin = Infinity, cyMax = -Infinity;
  for (const p of contentPoints) {
    cxMin = Math.min(cxMin, p.x); cxMax = Math.max(cxMax, p.x);
    cyMin = Math.min(cyMin, p.y); cyMax = Math.max(cyMax, p.y);
  }

  const results = { xAxis: null, yAxis: null };
  if (axisRange.xAxis) {
    const axisSpan = axisRange.xAxis.max - axisRange.xAxis.min;
    const marginLeft = cxMin - axisRange.xAxis.min;
    const marginRight = axisRange.xAxis.max - cxMax;
    const totalMargin = Math.max(0, marginLeft) + Math.max(0, marginRight);
    const ratio = axisSpan > 0 ? totalMargin / axisSpan : 0;
    results.xAxis = {
      axisMin: axisRange.xAxis.min, axisMax: axisRange.xAxis.max,
      contentMin: cxMin, contentMax: cxMax,
      marginLeft, marginRight, ratio,
      level: ratio >= MARGIN_MIN_GREEN ? 'GREEN' : ratio >= MARGIN_MIN_YELLOW ? 'YELLOW' : 'RED',
    };
  }
  if (axisRange.yAxis) {
    const axisSpan = axisRange.yAxis.max - axisRange.yAxis.min;
    const marginBot = cyMin - axisRange.yAxis.min;
    const marginTop = axisRange.yAxis.max - cyMax;
    const totalMargin = Math.max(0, marginBot) + Math.max(0, marginTop);
    const ratio = axisSpan > 0 ? totalMargin / axisSpan : 0;
    results.yAxis = {
      axisMin: axisRange.yAxis.min, axisMax: axisRange.yAxis.max,
      contentMin: cyMin, contentMax: cyMax,
      marginBot, marginTop, ratio,
      level: ratio >= MARGIN_MIN_GREEN ? 'GREEN' : ratio >= MARGIN_MIN_YELLOW ? 'YELLOW' : 'RED',
    };
  }
  return results;
}
