#!/usr/bin/env node
/**
 * tikz-overlap-check.mjs (v1.0 · 2026-07-23 세션 75)
 *
 * 목적 : TikZ 그래프의 라벨(node) 위치가 축·곡선·기타 라벨과 겹치는지 감지.
 *        마스터 반복 지적 대응 (겹침 절대 금지).
 *
 * 감지 축:
 *   A. 라벨 bbox 대 x축(y=0) · y축(x=0) 겹침
 *   B. 라벨 bbox 대 곡선 궤적 (domain 샘플) 겹침
 *   C. 라벨-라벨 bbox 겹침
 *
 * 라벨 bbox 근사:
 *   - font=\scriptsize : 문자당 0.13 단위 폭 · 높이 0.25 단위
 *   - font=\tiny       : 문자당 0.10 단위 폭 · 높이 0.20 단위
 *   - font=\footnotesize: 문자당 0.15 단위 폭 · 높이 0.28 단위
 *   - anchor 종류에 따라 bbox 원점 offset
 *
 * 사용:
 *   node scripts/tikz-overlap-check.mjs <file.tex> [<file2.tex> ...]
 *   node scripts/tikz-overlap-check.mjs --dir <folder>
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';

const args = process.argv.slice(2);
const dirIdx = args.indexOf('--dir');
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
  console.error('Usage: node tikz-overlap-check.mjs <file.tex> [...] | --dir <folder>');
  process.exit(2);
}

const TIKZ_RE = /\\begin\{tikzpicture\}([^\n]*)\n([\s\S]*?)\\end\{tikzpicture\}/g;
const NODE_RE = /\\node(\[[^\]]*\])?\s*(?:\(\w+\))?\s*at\s*\(([^)]+)\)\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
const AXIS_RE = /\\draw\[[^\]]*\]\s*(?:\([^)]+\)\s*(?:--|node[^{}]*\{[^}]*\})?\s*)+/g;
const PLOT_RE = /\\draw\[[^\]]*(black|dm-|red|blue|gray)[^\]]*\][^;]*?plot\s*\(\\?x\s*,\s*\{([^}]+)\}\)/g;
const DOMAIN_RE = /domain\s*=\s*([-\d.]+)\s*:\s*([-\d.]+)/;

function fontMetrics(cls) {
  // 라벨 텍스트 실제 폭·높이 (TikZ 좌표 단위 · 실측 근사)
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

function findAxes(body) {
  const axes = [];
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
      if (Math.abs(x1) < 0.05 && Math.abs(x2) < 0.05) axes.push({ kind: 'y', min: Math.min(y1, y2), max: Math.max(y1, y2) });
      else if (Math.abs(y1) < 0.05 && Math.abs(y2) < 0.05) axes.push({ kind: 'x', min: Math.min(x1, x2), max: Math.max(x1, x2) });
    }
  }
  return axes;
}

function samplePlot(expr, dom, count = 100) {
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
    plots.push({ expr: plotM[1], domain: [parseFloat(domM[1]), parseFloat(domM[2])] });
  }
  return plots;
}

function analyzeBlock(body, lineOffset) {
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

  const axes = findAxes(body);
  const plots = findPlots(body);

  const issues = [];

  for (const n of nodes) {
    // 원점 O · x·y 축 라벨은 축 근처 배치가 정상 (예외)
    if (/^(O|\$x\$|\$y\$|\$\\mathrm\{O\}\$)$/.test(n.text.trim())) continue;

    for (const ax of axes) {
      if (ax.kind === 'x') {
        if (n.bbox.y0 <= 0 && n.bbox.y1 >= 0 &&
            n.bbox.x0 <= ax.max && n.bbox.x1 >= ax.min) {
          issues.push({ line: n.lineNo, kind: 'axis-x', text: n.text, detail: `y=0 축 겹침 bbox y=[${n.bbox.y0.toFixed(2)}, ${n.bbox.y1.toFixed(2)}]` });
        }
      } else if (ax.kind === 'y') {
        if (n.bbox.x0 <= 0 && n.bbox.x1 >= 0 &&
            n.bbox.y0 <= ax.max && n.bbox.y1 >= ax.min) {
          issues.push({ line: n.lineNo, kind: 'axis-y', text: n.text, detail: `x=0 축 겹침 bbox x=[${n.bbox.x0.toFixed(2)}, ${n.bbox.x1.toFixed(2)}]` });
        }
      }
    }

    for (const p of plots) {
      const samples = samplePlot(p.expr, p.domain);
      for (const [px, py] of samples) {
        if (pointInBbox(px, py, n.bbox)) {
          issues.push({ line: n.lineNo, kind: 'curve', text: n.text, detail: `곡선 (x=${px.toFixed(2)}, y=${py.toFixed(2)}) 겹침` });
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
          kind: 'label-label',
          text: `${nodes[i].text} vs ${nodes[j].text}`,
          detail: `라벨-라벨 bbox 겹침`
        });
      }
    }
  }

  return issues;
}

let totalRed = 0;
console.log('🔍 TikZ 라벨 겹침 감사 (v1.0 · 겹침 절대금지 정합)');
for (const file of files) {
  const text = readFileSync(file, 'utf-8');
  const allIssues = [];
  let m;
  TIKZ_RE.lastIndex = 0;
  while ((m = TIKZ_RE.exec(text)) !== null) {
    const body = m[2];
    const lineOffset = text.slice(0, m.index).split('\n').length;
    const issues = analyzeBlock(body, lineOffset);
    allIssues.push(...issues);
  }
  if (allIssues.length === 0) {
    console.log(`\n✅ ${basename(file)} : 겹침 0`);
    continue;
  }
  console.log(`\n── ${basename(file)} · ${allIssues.length}건 ──`);
  for (const i of allIssues) {
    console.log(`  🔴 L${i.line} [${i.kind}] "${i.text}" · ${i.detail}`);
    totalRed++;
  }
}
console.log(`\n📊 요약: RED ${totalRed}`);
if (totalRed > 0 && !args.includes('--soft')) process.exit(1);
