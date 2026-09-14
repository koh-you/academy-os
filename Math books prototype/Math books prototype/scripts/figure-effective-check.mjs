#!/usr/bin/env node
// figure-effective-check.mjs — TikZ 실효 렌더링 두께·프레임 채움 검사
// 2026-07-21 세션 57 신설 · v1.0
// 2026-07-22 세션 73 v1.1: 직선 프레임 채움 검사 추가 (Check 4)
// 계기: 01 R-2 (scale=0.35)와 R-3 (scale=0.7) 실효 두께 2배 차이 · 점선 프레임 미채움 미감지
//       세션 72 L2-12 그림 (feedback_figure_effective_rendering §46 규칙 2 미편입 · 세션 73 완결)
// 정책: feedback_figure_effective_rendering v1.0
//
// 검사 항목:
//   1. line width 실효 두께 = X × scale · 목표 범위 밖이면 RED
//      - 축: 실효 [0.6, 0.8]pt
//      - 곡선/직선: 실효 [0.35, 0.55]pt
//      - 점선: 실효 [0.25, 0.45]pt
//   2. 정점/파생점 반경 실효 = X × scale · 목표 범위 밖이면 RED
//      - 정점: 실효 [0.7, 0.85]pt
//      - 파생점: 실효 [0.6, 0.75]pt
//   3. 시리즈 일관성: 같은 파일 내 여러 TikZ 블록 실효 두께 편차 20% 초과 시 YELLOW
//   4. 무한 직선 프레임 채움 (v1.1 신설): 축 스팬 40%↑ 긴 선이 축 프레임 좌우 [xmin, xmax] 채움
//      - 점선 (임계·매개 직선) 미채움 → RED · 실선 → YELLOW (선분 vs 무한 직선 판별 필요)
//
// 사용: node scripts/figure-effective-check.mjs <파일.tex>
// 반환: 0 = 통과 / 1 = RED / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-effective-check.mjs <파일.tex>');
  console.error('  반환: 0 = 통과 / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const tex = fs.readFileSync(texPath, 'utf8');

// 실효 두께·반경 목표 (pt)
const TARGET = {
  axis:      { min: 0.55, max: 0.85, name: '축' },
  curve:     { min: 0.30, max: 0.60, name: '곡선/직선/원' },
  dashed:    { min: 0.20, max: 0.45, name: '점선/보조선' },
  vertex:    { min: 0.65, max: 0.90, name: '정점 (주요 점)' },
  auxPoint:  { min: 0.55, max: 0.80, name: '파생점 (교점 등)' },
};

// Check 4 (v1.1 세션 73) · 무한 직선 프레임 채움 임계
const LINE_LONG_RATIO = 0.4;         // 축 40% 이상 스팬 = 무한 직선 후보
const FRAME_EDGE_TOLERANCE = 0.05;   // 축 경계 근접 판정 (그림 단위)

// TikZ 블록 파싱
const blocks = [];
const tikzRe = /\\begin\{tikzpicture\}(\[[^\]]*\])?([\s\S]*?)\\end\{tikzpicture\}/g;
let m;
let idx = 0;
// 레이아웃 장식 tikz 제외 — 도해가 아니므로 두께·일관성 판정 대상이 아니다.
// 헤더 세로 분할선·배경 로고 등은 [overlay,remember picture] 로 절대 배치되며,
// 그 선 두께(0.4pt)가 도해 곡선(0.5pt)과 섞여 "시리즈 일관성" 거짓 YELLOW 를 만들었다.
// graph-position-audit.mjs 에 넣은 DECORATIVE_RE 와 같은 취지 (2026-07-30 세션 104).
// 오탐을 방치하면 훅이 매 편집마다 늑대를 외쳐 게이트 자체가 무시된다.
const DECORATIVE_OPT = /\b(overlay|remember\s+picture)\b/;
while ((m = tikzRe.exec(tex)) !== null) {
  const optArg = m[1] || '';
  if (DECORATIVE_OPT.test(optArg)) continue;   // 레이아웃 장식 — 감사 제외
  idx++;
  const body = m[2];
  const startLine = tex.slice(0, m.index).split('\n').length;

  // scale 파싱
  const scaleMatch = optArg.match(/scale\s*=\s*([0-9.]+)/);
  const scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1.0;

  // 각 \draw의 line width 추출 (전체 명령 파싱하여 축 좌표 패턴도 감지)
  const drawItems = [];
  const lineItems = []; // Check 4 · 무한 직선 프레임 채움 후보
  const curveItems = []; // v1.3 (세션 75) Check 6·8 · 곡선 domain 후보
  let xAxisMin = Infinity, xAxisMax = -Infinity;
  let yAxisMin = Infinity, yAxisMax = -Infinity;
  let hasXAxis = false, hasYAxis = false;
  // \draw[...] ...; 전체 캡처 (세미콜론까지)
  const drawFullRe = /\\draw\s*\[([^\]]*)\]([\s\S]*?);/g;
  let d;
  while ((d = drawFullRe.exec(body)) !== null) {
    const attr = d[1];
    const path = d[2];
    if (path.includes('\\begin') || path.includes('\\end')) continue;
    const isDashed = /dash\s*pattern|dashed/.test(attr);
    const hasPlot = /\bplot\b/.test(path);

    // 좌표 쌍 추출 (v1.1 · sloped 라벨 node[...] {...} 사이에 있어도 감지)
    const coordRe = /\(\s*(-?[0-9.]+)\s*,\s*(-?[0-9.]+)\s*\)/g;
    const coords = [];
    let cm;
    while ((cm = coordRe.exec(path)) !== null) {
      coords.push({ x: parseFloat(cm[1]), y: parseFloat(cm[2]) });
    }

    // 축 판정 : 첫·끝 좌표 중 하나가 (0,0)이고 다른 하나가 축 위
    let isAxisByPath = false;
    let px1 = null, py1 = null, px2 = null, py2 = null;
    if (coords.length >= 2) {
      const first = coords[0], last = coords[coords.length - 1];
      [px1, py1, px2, py2] = [first.x, first.y, last.x, last.y];
      const isOrig1 = px1 === 0 && py1 === 0;
      const isOrig2 = px2 === 0 && py2 === 0;
      const other = isOrig1 ? [px2, py2] : (isOrig2 ? [px1, py1] : null);
      if (other && (other[0] === 0 || other[1] === 0)) {
        isAxisByPath = true;
      }
    }

    // line width 처리 (기존 로직)
    const lwMatch = attr.match(/line\s*width\s*=\s*([0-9.]+)\s*pt/);
    if (lwMatch) {
      const rawWidth = parseFloat(lwMatch[1]);
      const effective = rawWidth * scale;
      const isAxis = /-stealth|->/.test(attr) || rawWidth >= 0.8 || isAxisByPath;
      let category = 'curve';
      if (isDashed) category = 'dashed';
      else if (isAxis) category = 'axis';
      drawItems.push({ raw: rawWidth, effective, category });
    }

    // Check 4 · 축 범위 수집 + 무한 직선 후보 수집 (2 좌표 쌍이 있을 때만)
    if (coords.length >= 2 && px1 !== null) {
      // 축 세그먼트 감지 (y=0 → x축 · x=0 → y축)
      const EPS = 0.01;
      if (Math.abs(py1) < EPS && Math.abs(py2) < EPS) {
        hasXAxis = true;
        xAxisMin = Math.min(xAxisMin, px1, px2);
        xAxisMax = Math.max(xAxisMax, px1, px2);
      }
      if (Math.abs(px1) < EPS && Math.abs(px2) < EPS) {
        hasYAxis = true;
        yAxisMin = Math.min(yAxisMin, py1, py2);
        yAxisMax = Math.max(yAxisMax, py1, py2);
      }
      // 무한 직선 후보: 축 아님·plot 아님·화살표 아님
      if (!isAxisByPath && !hasPlot && !/-stealth|->/.test(attr)) {
        lineItems.push({
          x1: px1, y1: py1, x2: px2, y2: py2,
          isDashed,
        });
      }
    }

    // v1.3 (세션 75) : 곡선 domain 수집 (Check 6·8 · 와부고 그래프 표준)
    // plot 명령의 domain=X:Y 파싱 · 곡선의 x 범위 판정
    if (hasPlot) {
      const domainMatch = attr.match(/domain\s*=\s*(-?[0-9.]+)\s*:\s*(-?[0-9.]+)/);
      if (domainMatch) {
        curveItems.push({
          xMin: parseFloat(domainMatch[1]),
          xMax: parseFloat(domainMatch[2]),
        });
      }
    }
  }

  // \filldraw ... circle (Xpt) 추출
  const circleItems = [];
  const filldrawRe = /\\filldraw[^;\n]*circle\s*\(\s*([0-9.]+)\s*pt\s*\)/g;
  let c;
  while ((c = filldrawRe.exec(body)) !== null) {
    const rawR = parseFloat(c[1]);
    const effective = rawR * scale;
    const category = rawR >= 2.15 ? 'vertex' : 'auxPoint';
    circleItems.push({ raw: rawR, effective, category });
  }

  const axisRange = {
    xAxis: hasXAxis ? { min: xAxisMin, max: xAxisMax } : null,
    yAxis: hasYAxis ? { min: yAxisMin, max: yAxisMax } : null,
  };
  blocks.push({ idx, startLine, scale, drawItems, circleItems, lineItems, curveItems, axisRange, body });
}

if (blocks.length === 0) {
  console.log(`✅ TikZ 블록 없음. 검사 대상 아님.`);
  process.exit(0);
}

// 리포트
console.log(`🔍 TikZ 실효 렌더링 검사 (v1.0)`);
console.log(`   파일: ${texPath}`);
console.log(`   TikZ 블록: ${blocks.length}개`);
console.log();

let redCount = 0;
let yellowCount = 0;
const allEffective = [];  // 시리즈 일관성 계산용

for (const b of blocks) {
  console.log(`── 블록 ${b.idx} (line ${b.startLine}, scale=${b.scale}) ──`);

  // Check 5 (v1.2 세션 75 2026-07-23) : scale=1.0 통일 규약 감시
  // feedback_figure_effective_rendering §37 대안 · 세션 74 좌표 압축 재조판 프로토콜
  if (Math.abs(b.scale - 1.0) > 0.01) {
    console.log(`  🔴 scale=${b.scale} (세션 74 규약 위반) · scale=1.0 통일 · 좌표 압축 factor로 물리 크기 조정`);
    redCount++;
  }

  for (const it of b.drawItems) {
    const t = TARGET[it.category];
    const inRange = it.effective >= t.min && it.effective <= t.max;
    const status = inRange ? '✓' : '🔴';
    if (!inRange) redCount++;
    console.log(`  ${status} ${t.name}: raw=${it.raw}pt · 실효=${it.effective.toFixed(2)}pt · 목표 [${t.min}, ${t.max}]pt`);
    allEffective.push({ category: it.category, effective: it.effective, block: b.idx });
  }

  for (const it of b.circleItems) {
    const t = TARGET[it.category];
    const inRange = it.effective >= t.min && it.effective <= t.max;
    const status = inRange ? '✓' : '🔴';
    if (!inRange) redCount++;
    console.log(`  ${status} ${t.name}: raw=${it.raw}pt · 실효=${it.effective.toFixed(2)}pt · 목표 [${t.min}, ${t.max}]pt`);
    allEffective.push({ category: it.category, effective: it.effective, block: b.idx });
  }

  // Check 4 · 무한 직선 프레임 채움 (v1.1 세션 73)
  // v1.2 (세션 73 후반) : 양쪽 endpoints가 모두 프레임 안 · 선분 판단 · skip
  if (b.axisRange.xAxis && b.lineItems.length > 0) {
    const axisMin = b.axisRange.xAxis.min;
    const axisMax = b.axisRange.xAxis.max;
    const axisSpan = axisMax - axisMin;
    if (axisSpan > 0) {
      for (const li of b.lineItems) {
        const xMin = Math.min(li.x1, li.x2);
        const xMax = Math.max(li.x1, li.x2);
        const lineSpan = xMax - xMin;
        // 축 40%↑ 스팬 = 무한 직선 후보
        if (lineSpan < axisSpan * LINE_LONG_RATIO) continue;
        const leftGap = xMin - axisMin;
        const rightGap = axisMax - xMax;
        const leftAtOrBeyond = leftGap <= FRAME_EDGE_TOLERANCE;
        const rightAtOrBeyond = rightGap <= FRAME_EDGE_TOLERANCE;
        // 🔴 신설 2026-08-04 세션 111 — 「프레임에 잘렸나」는 x gap 만으로 못 잰다.
        //    직선은 기울기에 따라 좌·우 변이 아니라 위·아래 변에서 잘리고,
        //    비스듬한 것은 **양 끝이 서로 다른 변**에 닿는다.
        //    그래서 제대로 된 물음은 이것이다 — **두 끝점이 각각 네 변 중 하나에 놓여 있나.**
        //    실측 둘 —
        //      · 블록 1 의 l_2 는 위·아래 변에 닿는데 x gap 이 좌우 0.68 이라 거짓 경보가 났다
        //      · 블록 3 의 l_a 는 위 변과 오른쪽 변에 닿는다 (양 끝이 다른 변이다)
        const yAx = b.axisRange.yAxis;
        const onFrameEdge = (x, y) => {
          if (Math.abs(x - axisMin) <= FRAME_EDGE_TOLERANCE) return true;
          if (Math.abs(x - axisMax) <= FRAME_EDGE_TOLERANCE) return true;
          if (yAx && Math.abs(y - yAx.min) <= FRAME_EDGE_TOLERANCE) return true;
          if (yAx && Math.abs(y - yAx.max) <= FRAME_EDGE_TOLERANCE) return true;
          return false;
        };
        if (onFrameEdge(li.x1, li.y1) && onFrameEdge(li.x2, li.y2)) {
          console.log(`  ✓ 직선 프레임 채움: (${li.x1}, ${li.y1}) -- (${li.x2}, ${li.y2}) · 두 끝이 프레임 변에 놓였다`);
          continue;
        }
        if (leftAtOrBeyond && rightAtOrBeyond) {
          console.log(`  ✓ 직선 프레임 채움: (${li.x1}, ${li.y1}) -- (${li.x2}, ${li.y2}) · 축 [${axisMin.toFixed(1)}, ${axisMax.toFixed(1)}] OK`);
        } else if (!leftAtOrBeyond && !rightAtOrBeyond) {
          // 🔴 정정 2026-08-04 세션 111 — 종전에는 여기서 `continue` 로 넘어갔다.
          //    「양쪽 끝이 다 프레임 안이면 선분이다」로 본 것인데, **짧게 그린 직선이 바로 그 꼴**이다.
          //    한쪽만 짧으면 잡고 양쪽 다 짧으면 안 잡아, 잡아야 할 것만 골라서 놓쳤다.
          //    계기: 마스터 지적 「답지 그림들에서 직선이 다 좀 짧지 않아?」
          //    실측 — 재현-1회-답지.tex 블록 3 의 l_a 가 좌 gap 2.15 · 우 gap 0.54 인데 침묵했다.
          //    🔴 진짜 선분(삼각형 변 · 선분 AB)도 함께 뜬다. 그래서 RED 가 아니라 YELLOW 다.
          //       사람이 보고 「선분이면 넘어간다」고 판단한다. 침묵보다 낫다.
          yellowCount++;
          console.log(`  🟡 직선/선분 프레임 미채움 (양쪽): (${li.x1}, ${li.y1}) -- (${li.x2}, ${li.y2}) · 축 [${axisMin.toFixed(1)}, ${axisMax.toFixed(1)}] · 좌 gap ${leftGap.toFixed(2)} · 우 gap ${rightGap.toFixed(2)} (무한 직선이면 프레임 끝까지 늘린다 · 진짜 선분이면 넘어간다)`);
        } else if (li.isDashed) {
          redCount++;
          console.log(`  🔴 점선 프레임 미채움: (${li.x1}, ${li.y1}) -- (${li.x2}, ${li.y2}) · 축 [${axisMin.toFixed(1)}, ${axisMax.toFixed(1)}] · 좌 gap ${leftGap.toFixed(2)} · 우 gap ${rightGap.toFixed(2)} (임계·매개 직선 · 축 전체 채움 필수)`);
        } else {
          yellowCount++;
          console.log(`  🟡 실선 프레임 미채움: (${li.x1}, ${li.y1}) -- (${li.x2}, ${li.y2}) · 축 [${axisMin.toFixed(1)}, ${axisMax.toFixed(1)}] · 좌 gap ${leftGap.toFixed(2)} · 우 gap ${rightGap.toFixed(2)} (선분 vs 무한 직선 판별 필요)`);
        }
      }
    }
  }
  // v1.3 (세션 75) Check 6 · 곡선 bbox ⊆ 축 프레임 (와부고 그래프 표준)
  // 곡선 domain의 x 범위가 축 x 범위 안에 있어야 함. 벗어나면 RED (프레임 밖 튀어나감)
  if (b.axisRange.xAxis && b.curveItems.length > 0) {
    const axisXMin = b.axisRange.xAxis.min;
    const axisXMax = b.axisRange.xAxis.max;
    const axisXSpan = axisXMax - axisXMin;
    for (const cv of b.curveItems) {
      const leftOverflow = cv.xMin < axisXMin - 0.05;
      const rightOverflow = cv.xMax > axisXMax + 0.05;
      if (leftOverflow || rightOverflow) {
        redCount++;
        const side = leftOverflow && rightOverflow ? '좌·우 양쪽' : (leftOverflow ? '좌측' : '우측');
        console.log(`  🔴 Check 6 · 곡선 프레임 밖 튀어나감 (${side}): domain=[${cv.xMin}, ${cv.xMax}] · 축 [${axisXMin.toFixed(1)}, ${axisXMax.toFixed(1)}] (와부고 그래프 표준 위반)`);
      } else {
        // Check 8 · 곡선 활용률 (span / axisSpan 비율 · 60%~90% 권장)
        const curveSpan = cv.xMax - cv.xMin;
        const ratio = curveSpan / axisXSpan;
        if (ratio < 0.30) {
          yellowCount++;
          console.log(`  🟡 Check 8 · 곡선 활용률 낮음 (${(ratio * 100).toFixed(1)}% · 권장 [30%, 90%]): domain span=${curveSpan.toFixed(2)} / 축 span=${axisXSpan.toFixed(2)}`);
        } else if (ratio > 0.95) {
          yellowCount++;
          console.log(`  🟡 Check 8 · 곡선 활용률 과다 (${(ratio * 100).toFixed(1)}% · 권장 [30%, 90%]): 축 범위 확장 or 곡선 domain 축소`);
        } else {
          console.log(`  ✓ Check 6·8 · 곡선 활용률 ${(ratio * 100).toFixed(1)}% · 프레임 안 정합`);
        }
      }
    }
  }

  console.log();
}

// 시리즈 일관성 (같은 카테고리 블록간 편차)
const byCat = {};
for (const e of allEffective) {
  if (!byCat[e.category]) byCat[e.category] = [];
  byCat[e.category].push(e.effective);
}
for (const cat of Object.keys(byCat)) {
  const vals = byCat[cat];
  if (vals.length < 2) continue;
  const mn = Math.min(...vals);
  const mx = Math.max(...vals);
  if (mn === 0) continue;
  const ratio = mx / mn;
  if (ratio > 1.20) {
    yellowCount++;
    console.log(`🟡 시리즈 일관성 · ${TARGET[cat].name}: 실효 두께 최소 ${mn.toFixed(2)}pt / 최대 ${mx.toFixed(2)}pt (${ratio.toFixed(2)}x 차이)`);
  }
}

console.log(`\n📊 요약: RED ${redCount}건 · YELLOW ${yellowCount}건 (블록 ${blocks.length}개)`);

if (redCount > 0) {
  console.log(`\n❌ 실효 렌더링 목표 범위 밖 → scale 또는 line width 조정 필요`);
  process.exit(1);
}
if (yellowCount > 0) {
  console.log(`\n⚠️  시리즈 일관성 편차 · scale 통일 or line width 보정 권장`);
}
console.log(`\n✅ 통과`);
process.exit(0);
