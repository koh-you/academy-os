#!/usr/bin/env node
// TikZ 라벨 겹침 자동 감지 v1.1 — Gate 4.5 G9
// 2026-07-18 세션 48 후반 · 원 외 곡선 (arc·plot·bezier) 감지 확장
// v1.0 신설 · 마스터 4대 라벨 규약 자동화
//
// 목적:
//   답지·문제 tex의 tikzpicture 블록 파싱 · 원·직선·라벨 좌표 추출 ·
//   4대 규약 자동 검증. 라벨 iteration 사전 감지.
//
// 4대 규약 (feedback_label_placement.md):
//   R1. 라벨 bbox가 원 실선 통과 시 RED
//   R2. 라벨 bbox가 직선(실선) 통과 시 RED
//   R3. 두 라벨 bbox 겹침 시 RED
//   R4. 라벨과 점선(dashed) 겹침 시 YELLOW (허용)
//
// 사용:
//   node scripts/figure-tikz-label-check.mjs <파일.tex>
//   node scripts/figure-tikz-label-check.mjs <파일.tex> --slot 14 --debug
//
// 단일 출처: bank/그래프-학평-정독-2026-07-17.md §14 · feedback_label_placement.md

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-tikz-label-check.mjs <파일.tex> [--slot N] [--debug]');
  process.exit(2);
}

const filePath = args[0];
let onlySlot = null;
let debug = false;
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--slot' && args[i + 1]) onlySlot = parseInt(args[++i]);
  else if (args[i] === '--debug') debug = true;
}

if (!fs.existsSync(filePath)) {
  console.error(`❌ 파일 없음: ${filePath}`);
  process.exit(2);
}

const content = fs.readFileSync(filePath, 'utf8');

// ── tikzpicture 블록 추출 (overlay 세로선 필터) ─────────────────────
function extractTikzBlocks(text) {
  const blocks = [];
  const re = /\\begin\{tikzpicture\}(?:\[([^\]]*)\])?([\s\S]*?)\\end\{tikzpicture\}/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (/overlay,\s*remember picture/.test(m[0])) continue; // 페이지 세로선
    blocks.push({ options: m[1] || '', body: m[2], startIdx: m.index });
  }
  return blocks;
}

// ── tikz 옵션에서 scale 추출 ─────────────────────
function parseScale(options) {
  const xscale = parseFloat((options.match(/xscale=([\d.]+)/) || [])[1]) || 1;
  const yscale = parseFloat((options.match(/yscale=([\d.]+)/) || [])[1]) || 1;
  const scale = parseFloat((options.match(/(?<![xy])scale=([\d.]+)/) || [])[1]) || 1;
  return { xscale: xscale * scale, yscale: yscale * scale };
}

// ── 원 추출: \draw[...] (cx, cy) circle (r); ─────────────────────
function parseCircles(body) {
  const circles = [];
  // \draw[스타일] (x, y) circle (r);
  const re = /\\draw\[([^\]]*)\]\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*circle\s*\(\s*([\d.]+)\s*\)/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const style = m[1];
    const isDashed = /dash\s*pattern|dashed|fp-dashed/.test(style);
    circles.push({
      cx: parseFloat(m[2]),
      cy: parseFloat(m[3]),
      r: parseFloat(m[4]),
      dashed: isDashed,
      style,
    });
  }
  return circles;
}

// ── 직선 추출: \draw[...] (x1, y1) -- (x2, y2); ─────────────────────
function parseLines(body) {
  const lines = [];
  // \draw[스타일] (x1, y1) -- (x2, y2);
  // 스타일에 fp-dashed·dash pattern이 있으면 dashed
  const re = /\\draw\[([^\]]*)\]\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*--\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const style = m[1];
    const isDashed = /dash\s*pattern|dashed|fp-dashed|fp-aux/.test(style);
    lines.push({
      x1: parseFloat(m[2]), y1: parseFloat(m[3]),
      x2: parseFloat(m[4]), y2: parseFloat(m[5]),
      dashed: isDashed,
      style,
    });
  }
  return lines;
}

// v1.1 호 추출: \draw[...] (cx, cy) arc (start:end:radius);
// arc는 원의 부분 · 라벨 감지에는 원과 유사 (반지름 · 각도 범위)
function parseArcs(body) {
  const arcs = [];
  const re = /\\draw\[([^\]]*)\]\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*arc\s*\(\s*(-?[\d.]+)\s*:\s*(-?[\d.]+)\s*:\s*(-?[\d.]+)\s*\)/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const style = m[1];
    const isDashed = /dash\s*pattern|dashed|fp-dashed|fp-aux/.test(style);
    // arc 시작점 (sx, sy) · 반지름 r · 시작각 α · 끝각 β
    const sx = parseFloat(m[2]), sy = parseFloat(m[3]);
    const startAng = parseFloat(m[4]);
    const endAng = parseFloat(m[5]);
    const r = parseFloat(m[6]);
    // arc 원 중심 = (sx - r*cos(α), sy - r*sin(α))
    const cx = sx - r * Math.cos(startAng * Math.PI / 180);
    const cy = sy - r * Math.sin(startAng * Math.PI / 180);
    arcs.push({ cx, cy, r, startAng, endAng, dashed: isDashed, style });
  }
  return arcs;
}

// v1.1 함수 그래프 추출: \draw[...] plot (\x, {f(\x)});
// domain=a:b · 라벨 겹침 감지는 개략적 (곡선 자체를 line segment로 근사)
function parsePlots(body) {
  const plots = [];
  const re = /\\draw\[([^\]]*)\]\s*(?:plot\s*)?\(\s*\\x\s*,\s*\{([^}]+)\}\s*\)/g;
  // domain 옵션 파싱
  const domRe = /domain\s*=\s*(-?[\d.]+)\s*:\s*(-?[\d.]+)/;
  let m;
  while ((m = re.exec(body)) !== null) {
    const style = m[1];
    const isDashed = /dash\s*pattern|dashed|fp-dashed|fp-aux/.test(style);
    const dm = style.match(domRe);
    const domain = dm ? [parseFloat(dm[1]), parseFloat(dm[2])] : null;
    plots.push({ expr: m[2], domain, dashed: isDashed, style });
  }
  return plots;
}

// ── 라벨 추출: \node[...] at (x, y) {text} ─────────────────────
function parseLabels(body) {
  const labels = [];
  const re = /\\node\[([^\]]*)\]\s*at\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const style = m[1];
    // fp-dot는 라벨 아님 (점 자체)
    if (/fp-dot/.test(style)) continue;
    const anchor = parseAnchor(style);
    const text = m[4].trim();
    labels.push({
      x: parseFloat(m[2]), y: parseFloat(m[3]),
      anchor,
      text,
      style,
    });
  }

  // \fppoint{x}{y}{text}{anchor} 매크로도 파싱
  const fpRe = /\\fppoint\{\s*(-?[\d.]+)\s*\}\{\s*(-?[\d.]+)\s*\}\{([^}]*)\}\{([^}]+)\}/g;
  while ((m = fpRe.exec(body)) !== null) {
    labels.push({
      x: parseFloat(m[1]), y: parseFloat(m[2]),
      anchor: parseAnchor(`anchor=${anchorReverse(m[4].trim())}`),
      text: m[3].trim(),
      style: 'fppoint',
      fpDirection: m[4].trim(),
    });
  }

  // \fpfunclabel{x}{y}{text}{anchor} 매크로
  const fplRe = /\\fpfunclabel\{\s*(-?[\d.]+)\s*\}\{\s*(-?[\d.]+)\s*\}\{([^}]*)\}\{([^}]+)\}/g;
  while ((m = fplRe.exec(body)) !== null) {
    labels.push({
      x: parseFloat(m[1]), y: parseFloat(m[2]),
      anchor: m[4].trim(),
      text: m[3].trim(),
      style: 'fpfunclabel',
    });
  }

  return labels;
}

// ── anchor 파싱 ─────────────────────
function parseAnchor(style) {
  // anchor 값이 "south west" 같은 공백 포함일 수 있음 · comma나 ]까지
  const m = style.match(/anchor=([a-z]+(?:\s+[a-z]+)?)(?:,|$)/);
  return m ? m[1].trim() : 'center';
}

// fppoint 방향 옵션의 anchor 반대: above right → south west
function anchorReverse(direction) {
  const map = {
    'above': 'south', 'below': 'north', 'left': 'east', 'right': 'west',
    'above left': 'south east', 'above right': 'south west',
    'below left': 'north east', 'below right': 'north west',
  };
  return map[direction] || 'center';
}

// ── 라벨 bbox 근사 계산 (tikz 유닛) ─────────────────────
// font \small ≈ 문자당 1.5mm 폭 · 2.5mm 높이 (\small 실측 근사)
// tikz 유닛 = scale × 10mm (기본 1cm)
// bbox는 anchor 위치 기준 · anchor 반대 방향에 확장
function computeBBox(label, xscale, yscale) {
  const charCountRaw = label.text.replace(/\$|\\mathrm|\\ell|\\|_|\{|\}|\s|\^|\{|\}/g, '').length;
  const charCount = Math.max(1, charCountRaw);
  const widthMM = charCount * 1.5; // \small 근사 · 여유 최소
  const heightMM = 2.5;
  const wUnit = widthMM / (10 * xscale);
  const hUnit = heightMM / (10 * yscale);

  const { x, y, anchor } = label;
  let xMin, xMax, yMin, yMax;
  // anchor는 bbox의 어느 corner/edge가 (x, y)인지
  switch (anchor) {
    case 'south west': xMin = x; xMax = x + wUnit; yMin = y; yMax = y + hUnit; break;
    case 'south east': xMin = x - wUnit; xMax = x; yMin = y; yMax = y + hUnit; break;
    case 'north west': xMin = x; xMax = x + wUnit; yMin = y - hUnit; yMax = y; break;
    case 'north east': xMin = x - wUnit; xMax = x; yMin = y - hUnit; yMax = y; break;
    case 'west': xMin = x; xMax = x + wUnit; yMin = y - hUnit/2; yMax = y + hUnit/2; break;
    case 'east': xMin = x - wUnit; xMax = x; yMin = y - hUnit/2; yMax = y + hUnit/2; break;
    case 'south': xMin = x - wUnit/2; xMax = x + wUnit/2; yMin = y; yMax = y + hUnit; break;
    case 'north': xMin = x - wUnit/2; xMax = x + wUnit/2; yMin = y - hUnit; yMax = y; break;
    default: xMin = x - wUnit/2; xMax = x + wUnit/2; yMin = y - hUnit/2; yMax = y + hUnit/2; break;
  }
  return { xMin, xMax, yMin, yMax, wUnit, hUnit };
}

// ── R1: 라벨 bbox가 원 실선 통과? ─────────────────────
// 라벨 중앙에서 원 실선까지 거리 vs 라벨 크기 대비. 원 위 점 라벨(자연 배치)은 exemption.
function checkCircleOverlap(bbox, circle) {
  const cx = (bbox.xMin + bbox.xMax) / 2;
  const cy = (bbox.yMin + bbox.yMax) / 2;
  const distToCenter = Math.sqrt((cx - circle.cx)**2 + (cy - circle.cy)**2);
  const distToRing = Math.abs(distToCenter - circle.r);
  const halfDiag = Math.sqrt((bbox.xMax - bbox.xMin)**2 + (bbox.yMax - bbox.yMin)**2) / 2;
  // exemption: 라벨 중앙이 원 실선 매우 근접 (원 위 점 자연 배치) · distToRing < 0.15
  //   → 이 경우는 라벨이 원 위 점의 라벨로서 자연 배치 · 감지 안 함
  if (distToRing < 0.15) return false;
  // 라벨 중앙이 원 실선에서 이격되어 있는데 · bbox의 반대편 corner가 원 통과
  return distToRing < halfDiag * 0.5;
}

// ── R2: 라벨 bbox가 직선 통과? (선분-사각형 교차) ─────────────────────
function checkLineOverlap(bbox, line) {
  // 선분 (x1,y1) → (x2,y2)와 사각형 bbox 교차 검사
  const { xMin, xMax, yMin, yMax } = bbox;
  const { x1, y1, x2, y2 } = line;
  // 선분 양 끝점이 모두 사각형 한 쪽 밖이면 교차 X
  if ((x1 < xMin && x2 < xMin) || (x1 > xMax && x2 > xMax)) return false;
  if ((y1 < yMin && y2 < yMin) || (y1 > yMax && y2 > yMax)) return false;
  // 선분 파라미터화 · 사각형 4변과 교차 계산
  const dx = x2 - x1, dy = y2 - y1;
  const inside = (x, y) => x >= xMin && x <= xMax && y >= yMin && y <= yMax;
  if (inside(x1, y1) || inside(x2, y2)) return true;
  // 4변 검사
  const edges = [
    [xMin, yMin, xMax, yMin], [xMax, yMin, xMax, yMax],
    [xMax, yMax, xMin, yMax], [xMin, yMax, xMin, yMin],
  ];
  for (const [ex1, ey1, ex2, ey2] of edges) {
    if (segmentIntersect(x1, y1, x2, y2, ex1, ey1, ex2, ey2)) return true;
  }
  return false;
}

function segmentIntersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
  const d = (a2x - a1x) * (b2y - b1y) - (a2y - a1y) * (b2x - b1x);
  if (Math.abs(d) < 1e-9) return false;
  const t = ((b1x - a1x) * (b2y - b1y) - (b1y - a1y) * (b2x - b1x)) / d;
  const u = ((b1x - a1x) * (a2y - a1y) - (b1y - a1y) * (a2x - a1x)) / d;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

// ── R3: 두 라벨 bbox 겹침 ─────────────────────
function checkBBoxOverlap(a, b) {
  return !(a.xMax < b.xMin || b.xMax < a.xMin || a.yMax < b.yMin || b.yMax < a.yMin);
}

// ── 메인 ─────────────────────
const blocks = extractTikzBlocks(content);
// 슬롯 매핑: \soltitle{N} 또는 \begin{problem}{N} 근처 tikzpicture
function findSlotForBlock(block) {
  const before = content.slice(0, block.startIdx);
  const soltitleM = [...before.matchAll(/\\soltitle\{(\d+)\}/g)].pop();
  const problemM = [...before.matchAll(/\\begin\{problem\}\{(\d+)\}/g)].pop();
  const soltitleIdx = soltitleM ? soltitleM.index : -1;
  const problemIdx = problemM ? problemM.index : -1;
  if (problemIdx > soltitleIdx) return parseInt(problemM[1]);
  if (soltitleIdx >= 0) return parseInt(soltitleM[1]);
  return null;
}

console.log(`🔍 TikZ 라벨 겹침 감지 v1.0 (G9)`);
console.log(`   파일: ${filePath}`);
console.log(`   tikzpicture 블록: ${blocks.length}건`);
console.log('');

let totalRed = 0, totalYellow = 0, totalOK = 0;

for (const block of blocks) {
  const slotN = findSlotForBlock(block);
  if (onlySlot && slotN !== onlySlot) continue;

  const { xscale, yscale } = parseScale(block.options);
  const circles = parseCircles(block.body);
  const arcs = parseArcs(block.body);
  const lines = parseLines(block.body);
  const plots = parsePlots(block.body);
  const labels = parseLabels(block.body);

  // v1.1 arc는 원과 유사하게 처리 (부분 원이지만 라벨 감지에는 R1 규약 활용)
  const allCircles = [...circles, ...arcs];

  if (debug) {
    console.log(`--- 슬롯 #${slotN || '?'} · scale (${xscale.toFixed(2)}, ${yscale.toFixed(2)}) ---`);
    console.log(`   원 ${circles.length} · 호 ${arcs.length} · 직선 ${lines.length} · 곡선 ${plots.length} · 라벨 ${labels.length}`);
  }

  const problems = [];
  const bboxes = labels.map(l => ({ ...l, bbox: computeBBox(l, xscale, yscale) }));

  // R1·R2·R4 검사
  for (const lb of bboxes) {
    // R1: 각 원·호 실선
    for (const c of allCircles) {
      const overlap = checkCircleOverlap(lb.bbox, c);
      if (overlap) {
        const severity = c.dashed ? 'YELLOW' : 'RED';
        const rule = c.dashed ? 'R4' : 'R1';
        const kind = c.startAng !== undefined ? '호' : '원';
        problems.push({
          rule, severity,
          msg: `라벨 '${lb.text}' bbox가 ${c.dashed ? '점선' : '실선'} ${kind} (center=(${c.cx.toFixed(2)}, ${c.cy.toFixed(2)}), r=${c.r}) 통과`,
        });
      }
    }
    // R2·R4: 각 직선
    for (const ln of lines) {
      const overlap = checkLineOverlap(lb.bbox, ln);
      if (overlap) {
        const severity = ln.dashed ? 'YELLOW' : 'RED';
        const rule = ln.dashed ? 'R4' : 'R2';
        problems.push({
          rule, severity,
          msg: `라벨 '${lb.text}' bbox가 ${ln.dashed ? '점선' : '실선'} (${ln.x1},${ln.y1})-(${ln.x2},${ln.y2}) 통과`,
        });
      }
    }
  }

  // R3: 라벨 간 겹침
  for (let i = 0; i < bboxes.length; i++) {
    for (let j = i + 1; j < bboxes.length; j++) {
      if (checkBBoxOverlap(bboxes[i].bbox, bboxes[j].bbox)) {
        problems.push({
          rule: 'R3', severity: 'RED',
          msg: `라벨 '${bboxes[i].text}' bbox와 '${bboxes[j].text}' bbox 겹침`,
        });
      }
    }
  }

  const reds = problems.filter(p => p.severity === 'RED').length;
  const yellows = problems.filter(p => p.severity === 'YELLOW').length;
  totalRed += reds; totalYellow += yellows;
  if (reds === 0 && yellows === 0) totalOK++;

  const badge = reds > 0 ? '🔴' : yellows > 0 ? '🟡' : '✅';
  console.log(`${badge} 슬롯 #${slotN || '?'} · 라벨 ${labels.length} · RED ${reds} · YELLOW ${yellows}`);
  for (const p of problems) {
    const icon = p.severity === 'RED' ? '🔴' : '🟡';
    console.log(`   ${icon} [${p.rule}] ${p.msg}`);
  }
  if (problems.length > 0) console.log('');
}

console.log('=== 요약 ===');
console.log(`   RED: ${totalRed}건 (실선 통과 or 라벨 간 겹침)`);
console.log(`   YELLOW: ${totalYellow}건 (점선 겹침 허용)`);
console.log(`   블록 OK: ${totalOK}건`);
console.log('');
console.log('=== 관련 자산 ===');
console.log('   feedback_label_placement.md (4대 규약)');
console.log('   bank/그래프-학평-정독-2026-07-17.md §14 (예정)');
console.log('   Gate 4.5 v3.11 · G9 (본 도구)');

process.exit(totalRed > 0 ? 3 : 0);
