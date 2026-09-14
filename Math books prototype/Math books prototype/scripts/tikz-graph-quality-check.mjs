#!/usr/bin/env node
/**
 * tikz-graph-quality-check.mjs (v1.0 · 2026-07-23 세션 76)
 *
 * 목적 : 답지 그래프 4결함 통합 감지.
 *        세션 75 tikz-overlap-check 결함 (D1만 · 감지 부정확) 근본 해결.
 *        정책: [[feedback_answer_graph_quality_v1]]
 *
 * 감지 축 (4결함):
 *   D1. 라벨 관통 (RED) — 라벨 bbox가 곡선/직선/축과 겹침
 *   D2. 프레임 초과 (RED) — 곡선 y_min/y_max가 프레임 [ymin, ymax] 초과
 *   D3. 프레임 미채움 (YELLOW/RED) — 곡선 bbox width·height / 프레임 < 60% (RED < 40%)
 *   D4. 수선 누락 (YELLOW) — filldraw dot에서 x축·y축 dashed line 없음 (답지 파일만)
 *
 * 사용:
 *   node scripts/tikz-graph-quality-check.mjs <file.tex> [...]
 *   node scripts/tikz-graph-quality-check.mjs --dir <folder>
 *   옵션: --soft (RED > 0에도 exit 0) · --no-d4 (D4 감지 skip)
 */
import { readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const args = process.argv.slice(2);
const dirIdx = args.indexOf('--dir');
const softMode = args.includes('--soft');
const skipD4 = args.includes('--no-d4');

let files = [];
if (dirIdx >= 0) {
  const dir = args[dirIdx + 1];
  for (const e of readdirSync(dir)) {
    if (e.endsWith('.tex') && !e.includes('smoke')) files.push(join(dir, e));
  }
} else {
  files = args.filter(a => !a.startsWith('--'));
}

if (files.length === 0) {
  console.error('Usage: node tikz-graph-quality-check.mjs <file.tex> [...] | --dir <folder> [--soft] [--no-d4]');
  process.exit(2);
}

const TIKZ_RE = /\\begin\{tikzpicture\}([^\n]*)\n([\s\S]*?)\\end\{tikzpicture\}/g;
const NODE_RE = /\\node(\[[^\]]*\])?\s*(?:\(\w+\))?\s*at\s*\(([^)]+)\)\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
const FILLDRAW_RE = /\\filldraw\[[^\]]*\]\s*\(([^)]+)\)\s*circle\s*\(([-\d.]+)pt\)/g;
const DOMAIN_RE = /domain\s*=\s*([-\d.]+)\s*:\s*([-\d.]+)/;

function fontMetrics(cls) {
  if (cls.includes('tiny')) return { w: 0.13, h: 0.22 };
  if (cls.includes('scriptsize')) return { w: 0.16, h: 0.27 };
  if (cls.includes('footnotesize')) return { w: 0.18, h: 0.30 };
  return { w: 0.17, h: 0.28 };
}

function textLen(text) {
  const clean = text.replace(/\\[a-zA-Z]+/g, 'X').replace(/[{}\\_]/g, '').replace(/\$/g, '');
  return Math.max(1, clean.length);
}

function anchorOffset(anchor) {
  const map = {
    'north': [-0.5, -1], 'south': [-0.5, 0], 'east': [-1, -0.5], 'west': [0, -0.5],
    'north east': [-1, -1], 'north west': [0, -1], 'south east': [-1, 0], 'south west': [0, 0],
    'above': [-0.5, 0], 'below': [-0.5, -1], 'left': [-1, -0.5], 'right': [0, -0.5],
    'above right': [0, 0], 'above left': [-1, 0], 'below right': [0, -1], 'below left': [-1, -1],
    'center': [-0.5, -0.5]
  };
  return map[anchor] || [-0.5, -0.5];
}

function labelBbox(x, y, opts, text) {
  const cls = opts || '';
  const { w, h } = fontMetrics(cls);
  const len = textLen(text);
  const W = w * len;
  const H = h;
  const anchorMatch = cls.match(/anchor\s*=\s*([\w\s]+?)(?:,|\])/);
  let anchor = anchorMatch ? anchorMatch[1].trim() : null;
  if (!anchor) {
    for (const k of ['north east', 'north west', 'south east', 'south west',
                     'above right', 'above left', 'below right', 'below left',
                     'north', 'south', 'east', 'west', 'above', 'below', 'left', 'right', 'center']) {
      if (cls.includes(k)) { anchor = k; break; }
    }
  }
  const [ox, oy] = anchorOffset(anchor);
  return {
    x0: x + ox * W, x1: x + ox * W + W,
    y0: y + oy * H, y1: y + oy * H + H,
    text
  };
}

function bboxIntersects(a, b) {
  return !(a.x1 < b.x0 || a.x0 > b.x1 || a.y1 < b.y0 || a.y0 > b.y1);
}

function pointInBbox(px, py, b) {
  return px >= b.x0 && px <= b.x1 && py >= b.y0 && py <= b.y1;
}

function parseCoord(s) {
  const m = s.match(/^\s*([-\d.]+)\s*,\s*([-\d.]+)\s*$/);
  if (!m) return null;
  return [parseFloat(m[1]), parseFloat(m[2])];
}

/** 축 프레임 추출: -stealth 화살표 라인 → x-axis, y-axis 범위 */
function findFrame(body) {
  let xAxis = null;
  let yAxis = null;
  const draws = body.matchAll(/\\draw\[[^\]]*\]([^;]*?);/g);
  for (const d of draws) {
    const path = d[1];
    const opts = d[0].match(/\\draw\[([^\]]*)\]/)[1];
    if (!/-stealth|->/.test(opts)) continue;
    const coords = [...path.matchAll(/\(([^)]+)\)/g)]
      .map(c => parseCoord(c[1]))
      .filter(c => c !== null);
    if (coords.length < 2) continue;
    for (let i = 0; i < coords.length - 1; i++) {
      const [x1, y1] = coords[i];
      const [x2, y2] = coords[i + 1];
      if (Math.abs(x1) < 0.05 && Math.abs(x2) < 0.05) {
        yAxis = { min: Math.min(y1, y2), max: Math.max(y1, y2) };
      } else if (Math.abs(y1) < 0.05 && Math.abs(y2) < 0.05) {
        xAxis = { min: Math.min(x1, x2), max: Math.max(x1, x2) };
      }
    }
  }
  if (!xAxis || !yAxis) return null;
  return {
    xmin: xAxis.min, xmax: xAxis.max,
    ymin: yAxis.min, ymax: yAxis.max,
    xWidth: xAxis.max - xAxis.min,
    yHeight: yAxis.max - yAxis.min
  };
}

/** 축 라인 (x=0, y=0) — D1 감지에 사용 */
function frameToAxes(frame) {
  return [
    { kind: 'x', min: frame.xmin, max: frame.xmax },
    { kind: 'y', min: frame.ymin, max: frame.ymax }
  ];
}

function samplePlot(expr, dom, count = 40) {
  const [dmin, dmax] = dom;
  const samples = [];
  const fnBody = expr.replace(/\\?x/g, 'x')
    .replace(/sqrt/g, 'Math.sqrt')
    .replace(/(\d)(\()/g, '$1*$2');
  let fn;
  try { fn = new Function('x', `return ${fnBody};`); }
  catch { return samples; }
  for (let i = 0; i <= count; i++) {
    const x = dmin + (dmax - dmin) * i / count;
    let y;
    try { y = fn(x); if (!Number.isFinite(y)) continue; }
    catch { continue; }
    samples.push([x, y]);
  }
  return samples;
}

function findPlots(body) {
  const plots = [];
  const drawRe = /\\draw\[([^\]]*)\]([^;]*?);/g;
  for (const m of body.matchAll(drawRe)) {
    const opts = m[1];
    const path = m[2];
    const domM = opts.match(DOMAIN_RE);
    if (!domM) continue;
    const plotM = path.match(/plot\s*\(\\?x\s*,\s*\{([^}]+)\}\)/);
    if (!plotM) continue;
    plots.push({
      expr: plotM[1],
      domain: [parseFloat(domM[1]), parseFloat(domM[2])],
      opts
    });
  }
  return plots;
}

/** 도트 (filldraw circle) 추출 */
function findDots(body) {
  const dots = [];
  for (const m of body.matchAll(FILLDRAW_RE)) {
    const coord = parseCoord(m[1]);
    if (!coord) continue;
    dots.push({ x: coord[0], y: coord[1], radius: parseFloat(m[2]) });
  }
  return dots;
}

/** dashed line 추출: (x1, y1) -- (x2, y2) 형태 */
function findDashedLines(body) {
  const lines = [];
  const drawRe = /\\draw\[([^\]]*)\]([^;]*?);/g;
  for (const m of body.matchAll(drawRe)) {
    const opts = m[1];
    if (!opts.includes('dash pattern')) continue;
    const path = m[2];
    // "(x1, y1) -- (x2, y2)" 파싱 (node[...] 제외)
    const cleanPath = path.replace(/node\s*\[[^\]]*\]\s*\{[^{}]*\}/g, '');
    const coords = [...cleanPath.matchAll(/\(([-\d.\s,]+)\)/g)]
      .map(c => parseCoord(c[1]))
      .filter(c => c !== null);
    for (let i = 0; i < coords.length - 1; i++) {
      lines.push({ x1: coords[i][0], y1: coords[i][1], x2: coords[i + 1][0], y2: coords[i + 1][1], opts });
    }
  }
  return lines;
}

function analyzeBlock(body, lineOffset, isAnswerSheet) {
  const issues = [];
  const frame = findFrame(body);
  if (!frame) return issues;
  const axes = frameToAxes(frame);
  const plots = findPlots(body);
  const dots = findDots(body);
  const dashed = findDashedLines(body);

  // Nodes for D1
  const nodes = [];
  for (const m of body.matchAll(NODE_RE)) {
    const optsRaw = m[1] || '';
    const coord = parseCoord(m[2]);
    const text = m[3];
    if (!coord) continue;
    const bbox = labelBbox(coord[0], coord[1], optsRaw, text);
    const lineNo = lineOffset + body.slice(0, m.index).split('\n').length - 1;
    nodes.push({ bbox, coord, text, lineNo });
  }

  // D1 · 라벨 관통 감지 (라벨-축·라벨-곡선·라벨-라벨)
  for (const n of nodes) {
    if (/^(O|\$x\$|\$y\$|\$\\mathrm\{O\}\$)$/.test(n.text.trim())) continue;
    for (const ax of axes) {
      if (ax.kind === 'x') {
        if (n.bbox.y0 <= 0 && n.bbox.y1 >= 0 &&
            n.bbox.x0 <= ax.max && n.bbox.x1 >= ax.min) {
          issues.push({ line: n.lineNo, kind: 'D1-축', severity: 'RED', text: n.text, detail: `x축 겹침 bbox y=[${n.bbox.y0.toFixed(2)}, ${n.bbox.y1.toFixed(2)}]` });
        }
      } else if (ax.kind === 'y') {
        if (n.bbox.x0 <= 0 && n.bbox.x1 >= 0 &&
            n.bbox.y0 <= ax.max && n.bbox.y1 >= ax.min) {
          issues.push({ line: n.lineNo, kind: 'D1-축', severity: 'RED', text: n.text, detail: `y축 겹침 bbox x=[${n.bbox.x0.toFixed(2)}, ${n.bbox.x1.toFixed(2)}]` });
        }
      }
    }
    for (const p of plots) {
      const samples = samplePlot(p.expr, p.domain);
      for (const [px, py] of samples) {
        if (pointInBbox(px, py, n.bbox)) {
          issues.push({ line: n.lineNo, kind: 'D1-곡선', severity: 'RED', text: n.text, detail: `곡선 (x=${px.toFixed(2)}, y=${py.toFixed(2)}) 관통` });
          break;
        }
      }
    }
  }
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (bboxIntersects(nodes[i].bbox, nodes[j].bbox)) {
        issues.push({
          line: nodes[i].lineNo,
          kind: 'D1-라벨',
          severity: 'RED',
          text: `${nodes[i].text} vs ${nodes[j].text}`,
          detail: `라벨-라벨 bbox 겹침`
        });
      }
    }
  }

  // D2·D3 · 곡선 프레임 정합
  for (const p of plots) {
    const samples = samplePlot(p.expr, p.domain);
    if (samples.length === 0) continue;
    let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
    for (const [x, y] of samples) {
      if (x < xMin) xMin = x; if (x > xMax) xMax = x;
      if (y < yMin) yMin = y; if (y > yMax) yMax = y;
    }
    // 라인 번호 근사
    const idx = body.indexOf(p.expr);
    const lineNo = lineOffset + (idx >= 0 ? body.slice(0, idx).split('\n').length - 1 : 0);
    // clip 안에 있는지 확인
    const hasClip = /\\begin\{scope\}[\s\S]*?\\clip[\s\S]*?\\end\{scope\}/.test(
      body.slice(0, idx) + body.slice(idx, idx + 500)
    );
    // D2 · 프레임 초과
    const overflowY = yMax > frame.ymax + 0.05 || yMin < frame.ymin - 0.05;
    const overflowX = xMax > frame.xmax + 0.05 || xMin < frame.xmin - 0.05;
    if ((overflowY || overflowX) && !hasClip) {
      issues.push({
        line: lineNo, kind: 'D2-초과', severity: 'RED',
        text: p.expr.slice(0, 40),
        detail: `프레임 초과: 곡선 y=[${yMin.toFixed(2)}, ${yMax.toFixed(2)}] · 프레임 y=[${frame.ymin.toFixed(2)}, ${frame.ymax.toFixed(2)}] (clip 없음)`
      });
    }
    // D3 · 프레임 미채움 (x 또는 y 활용률)
    const yUse = (yMax - yMin) / frame.yHeight;
    const xUse = (xMax - xMin) / frame.xWidth;
    const use = Math.max(xUse, yUse);
    if (use < 0.4) {
      issues.push({
        line: lineNo, kind: 'D3-미채움', severity: 'RED',
        text: p.expr.slice(0, 40),
        detail: `프레임 활용률 ${(use * 100).toFixed(0)}% (곡선 x·y bbox / 프레임) · 40% 미만`
      });
    } else if (use < 0.6) {
      issues.push({
        line: lineNo, kind: 'D3-미채움', severity: 'YELLOW',
        text: p.expr.slice(0, 40),
        detail: `프레임 활용률 ${(use * 100).toFixed(0)}% · 60% 미만`
      });
    }
  }

  // D4 · 시작점 수선 누락 (답지만)
  if (!skipD4 && isAnswerSheet) {
    for (const d of dots) {
      // (x, 0) 인 x축 위 도트 · (0, y) 인 y축 위 도트는 수선 불필요
      if (Math.abs(d.y) < 0.05 || Math.abs(d.x) < 0.05) continue;
      // dashed line 존재 확인: (d.x, d.y) -- (d.x, 0) or (d.x, d.y) -- (0, d.y)
      const hasVertical = dashed.some(l =>
        (Math.abs(l.x1 - d.x) < 0.1 && Math.abs(l.y1 - d.y) < 0.1 && Math.abs(l.x2 - d.x) < 0.1 && Math.abs(l.y2) < 0.15) ||
        (Math.abs(l.x2 - d.x) < 0.1 && Math.abs(l.y2 - d.y) < 0.1 && Math.abs(l.x1 - d.x) < 0.1 && Math.abs(l.y1) < 0.15)
      );
      const hasHorizontal = dashed.some(l =>
        (Math.abs(l.x1 - d.x) < 0.1 && Math.abs(l.y1 - d.y) < 0.1 && Math.abs(l.x2) < 0.15 && Math.abs(l.y2 - d.y) < 0.1) ||
        (Math.abs(l.x2 - d.x) < 0.1 && Math.abs(l.y2 - d.y) < 0.1 && Math.abs(l.x1) < 0.15 && Math.abs(l.y1 - d.y) < 0.1)
      );
      if (!hasVertical || !hasHorizontal) {
        const missing = [];
        if (!hasVertical) missing.push('y축 방향 수선');
        if (!hasHorizontal) missing.push('x축 방향 수선');
        issues.push({
          line: lineOffset, kind: 'D4-수선', severity: 'YELLOW',
          text: `dot (${d.x}, ${d.y})`,
          detail: `${missing.join(' · ')} 누락`
        });
      }
    }
  }

  return issues;
}

let totalRed = 0;
let totalYellow = 0;
console.log('🔍 답지 그래프 품질 감사 (v1.0 · 4결함 통합 · 세션 76)');

for (const file of files) {
  const text = readFileSync(file, 'utf-8');
  const isAnswerSheet = /답지|answer|solution/i.test(basename(file));
  const allIssues = [];
  let m;
  TIKZ_RE.lastIndex = 0;
  while ((m = TIKZ_RE.exec(text)) !== null) {
    const body = m[2];
    const lineOffset = text.slice(0, m.index).split('\n').length;
    const issues = analyzeBlock(body, lineOffset, isAnswerSheet);
    allIssues.push(...issues);
  }
  const red = allIssues.filter(i => i.severity === 'RED').length;
  const yel = allIssues.filter(i => i.severity === 'YELLOW').length;
  totalRed += red; totalYellow += yel;

  if (allIssues.length === 0) {
    console.log(`\n✅ ${basename(file)} : 결함 0`);
    continue;
  }
  console.log(`\n── ${basename(file)} · RED ${red} · YELLOW ${yel} ──`);
  for (const i of allIssues) {
    const marker = i.severity === 'RED' ? '🔴' : '🟡';
    console.log(`  ${marker} L${i.line} [${i.kind}] ${i.text.slice(0, 50)} · ${i.detail}`);
  }
}

console.log(`\n📊 요약: RED ${totalRed} · YELLOW ${totalYellow}`);
if (totalRed > 0 && !softMode) process.exit(1);
