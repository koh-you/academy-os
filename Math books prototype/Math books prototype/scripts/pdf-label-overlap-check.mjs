#!/usr/bin/env node
/**
 * pdf-label-overlap-check.mjs (v2.4 · 2026-07-24 세션 76)
 *
 * 목적 : PDF 실측 기반 TikZ 라벨 겹침 · 자유공간 반경 판정.
 *        기존 tikz-overlap-check.mjs (좌표 근사)의 라벨 폭·bbox 부정확 결함을
 *        xelatex 이중 컴파일 + pdftoppm 픽셀 diff + flood-fill 클러스터링으로 대체.
 *
 * 원리 (5단계):
 *   (1) 각 tikzpicture 블록에 자동 bounding box 삽입 → A/B PGM 크기 동일화
 *   (2) variant A (원본 라벨) 와 variant B (라벨 텍스트 제거) 를 xelatex 컴파일
 *   (3) pdftoppm -gray -r 300 → PGM 파일
 *   (4) 픽셀 diff (A dark, B light) → 라벨 픽셀 마스크 → flood-fill 클러스터
 *   (5) 각 클러스터에서 : (a) 겹침 = variant B 안 non-white 픽셀 수
 *                            (b) 자유공간 = 8 방향 픽셀 스캔 (프레임 안/밖 분리)
 *                            (c) 방향성 = anchor 방향의 반대편만 재배치 여지로 판정
 *
 * 판정 매트릭스 (v1.1) :
 *   원점 O 라벨                         → ✅ GREEN 예외 (축 교차점 자연 배치)
 *   겹침 ≤ 5px                          → ✅ GREEN
 *   겹침 > 5px + inTarget ≥ 40px        → 🔴 RED · 대안 A (프레임 안 밀착 재배치)
 *   겹침 > 5px + outTarget ≥ 40px       → 🟡 YELLOW · 대안 C (프레임 확장 · 상단 자유공간)
 *   겹침 > 5px + 위 모두 아님           → 🟠 ORANGE · 대안 B (라벨 제거 · 지문 서술 이동)
 *
 *   inTarget = anchor에서 추론한 대상 방향의 반대 3방향의 프레임 안 자유공간 최대
 *   outTarget = 반대 3방향의 프레임 밖 자유공간 최대
 *
 * v1.1 개선 :
 *   - 원점 라벨 (O · \mathrm{O}) 예외 처리
 *   - sloped 라벨 (draw 안 삽입 node) 라인번호 정확 계산
 *   - 방향성 자유공간 판정 (관대함 해결)
 *
 * v1.2 개선 :
 *   - sloped 라벨 draw-path 좌표 · pos 파싱 → 실제 tikz 위치 계산 → 클러스터 매칭
 *   - --classify 옵션 : variant C (축만 · 곡선 제거) 추가 컴파일로 축/곡선 겹침 분류
 *
 * v1.3 개선 :
 *   - 역방향 매칭 (클러스터 → 노드) : 큰 라벨이 여러 클러스터로 나뉜 경우도 매칭 성공
 *   - tolerance 60 → 220px 상향 (sloped 위치 계산 오차·mapping 오차 흡수 · 넉넉히)
 *   - \filldraw · \fill · \path 안 삽입 node 파싱 확장 (예 : filldraw 원 옆 A·B·C 라벨)
 *   - 매칭 실패 클러스터도 nearest node 정보 표시 (matched X → ~"nearest" (Xpx))
 *
 * v1.4 개선 :
 *   - mapping 실측 기반 재구축 : pgm 크기 + useasboundingbox 범위로 정확한 pxPerTikz 계산
 *   - autoBoundingBox pad 0.5 → 1.0 (sloped 라벨의 bbox 밖 튀어나감 완화)
 *   - tolerance 220 → 100 (mapping 정확도 개선 결과)
 *   - --classify 요약 : 축전용·곡선전용·혼합 분포 파일·전체 총합 표시
 *
 * v1.5 개선 :
 *   - mergeAdjacentClusters mergeDist 12 → 25px (여러 조각 라벨 병합 개선)
 *   - 클러스터 최소 크기 20 미만 필터 (서브픽셀 렌더링 노이즈 제거)
 *   - 진단 헤더 : 파싱 노드 수 · raw/merged 클러스터 수 · 매칭 성공률 표시
 *
 * v1.6 개선 :
 *   - mapping.toTikz 역산 함수 추가
 *   - 리포트 각 라벨에 클러스터 pixel count·tikz 좌표 표시 (판독 지원)
 *
 * v1.7 개선 :
 *   - --debug-nodes / --debug-block <n> 옵션 : 특정 블록의 파싱 노드·클러스터 목록 출력
 *   - filldraw 좌표 필터 완화 (< 2 → < 1) : filldraw 안 attached node 파싱 성공 (핵심 버그 정정)
 *
 * v1.8 개선 :
 *   - 블록별 컴파일 병렬화 (concurrency 3 기본) — spawn Promise 기반
 *   - --concurrency <n> 옵션 : 병렬 컴파일 수 조절
 *
 * v1.9 개선 :
 *   - YELLOW 임계 재조정 : outTarget이 inTarget보다 1.5배 이상 우위 시 YELLOW
 *   - RED 이중 임계 : inTarget ≥ 60px (확실) or ≥ 40px (완화) → RED, 그 사이 outTarget 우세 → YELLOW
 *
 * v2.0 개선 :
 *   - 축 라벨 (x, y, $x$, $y$, $x^2$, $\mathrm{X}$) 예외 처리 · 화살표 끝 자연 배치
 *   - 리포트 정리 : --debug-nodes 없으면 tikz 좌표·count 축약 · nearest 실패 시엔 계속 표시
 *
 * v2.1~2.3 : refresh-all 편입 · 정책 등재 · --help 옵션
 *
 * v2.4 개선 :
 *   - sloped 접선 라벨 예외 처리 (원칙 1 "밀착표기 우선" · 자연 배치)
 *   - 좌표값 라벨 예외 처리 (숫자·분수·√·π · 축 tick 자연 배치)
 *
 * 사용 :
 *   node scripts/pdf-label-overlap-check.mjs <file.tex> [--soft] [--keep-temp] [--classify]
 *   node scripts/pdf-label-overlap-check.mjs --dir <folder> [--soft]
 *
 * 옵션 :
 *   --soft         : RED 있어도 exit 0 (refresh-all 파이프라인용)
 *   --keep-temp    : 임시 파일 유지 (디버깅)
 *   --classify     : 축·곡선 겹침 분류 (variant C 컴파일 추가 · 시간 50% 증가)
 *   --dpi <n>      : 래스터 DPI (기본 300)
 *   --dark <n>     : dark 픽셀 임계 (기본 200)
 *   --overlap <n>  : 겹침 픽셀 임계 (기본 5)
 *   --free <n>     : 자유공간 반경 임계 px (기본 40)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, readdirSync, statSync } from 'node:fs';
import { basename, join, dirname, resolve } from 'node:path';
import { execSync, spawn } from 'node:child_process';
import { tmpdir } from 'node:os';

// ═══════════════════════════════════════════════════════════════
// CLI 인자 파싱
// ═══════════════════════════════════════════════════════════════
const args = process.argv.slice(2);
const OPT = {
  soft: args.includes('--soft'),
  keepTemp: args.includes('--keep-temp'),
  classify: args.includes('--classify'),
  debugNodes: args.includes('--debug-nodes'),
  debugBlock: parseInt(argVal('--debug-block') || '-1', 10),
  concurrency: parseInt(argVal('--concurrency') || '3', 10),
  dpi: parseInt(argVal('--dpi') || '300', 10),
  darkThresh: parseInt(argVal('--dark') || '200', 10),
  overlapThresh: parseInt(argVal('--overlap') || '5', 10),
  freeThresh: parseInt(argVal('--free') || '40', 10),
};

function argVal(name) {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
}

const dirIdx = args.indexOf('--dir');
let files = [];
if (dirIdx >= 0) {
  const dir = args[dirIdx + 1];
  for (const e of readdirSync(dir)) {
    if (e.endsWith('.tex') && !e.includes('smoke')) files.push(join(dir, e));
  }
} else {
  files = args.filter(a => !a.startsWith('--') && a.endsWith('.tex'));
}

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🔍 pdf-label-overlap-check.mjs v2.0 · PDF 실측 기반 TikZ 라벨 겹침 감사

사용:
  node scripts/pdf-label-overlap-check.mjs <file.tex> [<file2.tex> ...] [옵션]
  node scripts/pdf-label-overlap-check.mjs --dir <folder> [옵션]

옵션:
  --soft              RED 있어도 exit 0 (refresh-all 파이프라인용)
  --classify          축·곡선 겹침 분류 (variant C 컴파일 추가 · +50% 시간)
  --keep-temp         임시 파일 유지 (디버그)
  --debug-nodes       모든 리포트에 클러스터 tikz·pixel 상세 표시
  --debug-block <n>   특정 블록만 파싱 노드·클러스터 목록 출력
  --concurrency <n>   병렬 컴파일 수 (기본 3)
  --dpi <n>           래스터 DPI (기본 300)
  --dark <n>          dark 픽셀 임계 (기본 200)
  --overlap <n>       겹침 픽셀 임계 (기본 5)
  --free <n>          자유공간 반경 임계 px (기본 40)
  --help, -h          이 도움말

판정 매트릭스:
  ✅ GREEN     원점 O · 축 라벨 (x·y) 예외 · 겹침 ≤ 5px
  🔴 RED      겹침 있고 프레임 안 자유공간 (반대편) ≥ 40px
             → 대안 A · 프레임 안 밀착 재배치
  🟡 YELLOW   프레임 밖 자유공간이 안보다 1.5배 우위
             → 대안 C · 프레임 확장 (세션 75 방식)
  🟠 ORANGE   양쪽 자유공간 모두 좁음
             → 대안 B · 라벨 제거 · 지문 서술 이동

원리:
  xelatex 이중 컴파일 (라벨 있음/없음) + pdftoppm 픽셀 diff
  + flood-fill 클러스터링 + 방향성 자유공간 판정

관련 정책 : memory/feedback_pdf_label_overlap_check.md
`);
  process.exit(0);
}

if (files.length === 0) {
  console.error('Usage: node pdf-label-overlap-check.mjs <file.tex> [...] | --dir <folder>');
  console.error('Options: --soft --classify --keep-temp --dpi <n> --dark <n> --overlap <n> --free <n>');
  console.error('         --debug-nodes --debug-block <n> --concurrency <n>');
  console.error('         --help / -h : 자세한 도움말');
  process.exit(2);
}

// Poppler 경로 (Windows MiKTeX + Poppler 설치 환경)
const POPPLER = process.env.POPPLER_BIN
  || 'C:/Users/user/AppData/Local/Microsoft/WinGet/Packages/oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe/poppler-25.07.0/Library/bin';
const PDFTOPPM = existsSync(`${POPPLER}/pdftoppm.exe`) ? `"${POPPLER}/pdftoppm.exe"` : 'pdftoppm';

// ═══════════════════════════════════════════════════════════════
// PGM 파서 (P5 raw grayscale)
// ═══════════════════════════════════════════════════════════════
function parsePgm(path) {
  const buf = readFileSync(path);
  let p = 0;
  const readToken = () => {
    while (p < buf.length && /\s/.test(String.fromCharCode(buf[p]))) p++;
    if (buf[p] === 0x23) { while (p < buf.length && buf[p] !== 0x0a) p++; return readToken(); }
    const start = p;
    while (p < buf.length && !/\s/.test(String.fromCharCode(buf[p]))) p++;
    return buf.slice(start, p).toString('ascii');
  };
  const magic = readToken();
  if (magic !== 'P5') throw new Error(`unsupported PGM: ${magic}`);
  const w = parseInt(readToken(), 10);
  const h = parseInt(readToken(), 10);
  const maxVal = parseInt(readToken(), 10);
  p++;
  return { w, h, maxVal, pixels: buf.slice(p) };
}

// ═══════════════════════════════════════════════════════════════
// TikZ 블록 추출 · 자동 bbox · 라벨 스트립
// ═══════════════════════════════════════════════════════════════
const TIKZ_BLOCK_RE = /\\begin\{tikzpicture\}(\[[^\]]*\])?\s*\r?\n([\s\S]*?)\\end\{tikzpicture\}/g;

function extractTikzBlocks(text) {
  const blocks = [];
  let m;
  TIKZ_BLOCK_RE.lastIndex = 0;
  while ((m = TIKZ_BLOCK_RE.exec(text)) !== null) {
    const startLine = text.slice(0, m.index).split('\n').length;
    const opts = m[1] || '';
    const body = m[2];
    const full = m[0];
    blocks.push({ startLine, opts, body, full, startIdx: m.index });
  }
  return blocks;
}

function autoBoundingBox(tikzBody) {
  const coordRe = /\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g;
  let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
  let m;
  while ((m = coordRe.exec(tikzBody)) !== null) {
    const x = parseFloat(m[1]), y = parseFloat(m[2]);
    if (Math.abs(x) > 100 || Math.abs(y) > 100) continue; // outlier 제외
    if (x < xMin) xMin = x; if (x > xMax) xMax = x;
    if (y < yMin) yMin = y; if (y > yMax) yMax = y;
  }
  if (!Number.isFinite(xMin)) return null;
  // v1.4 : pad 0.5 → 1.0 (sloped 라벨이 useasboundingbox 밖으로 튀어나가는 오차 완화)
  const pad = 1.0;
  return { xMin: xMin - pad, yMin: yMin - pad, xMax: xMax + pad, yMax: yMax + pad };
}

// `\draw[..] ... plot (\x, {expr}) ...;` 형태 draw 문 전체 제거 → 곡선 제거
// 여러 줄 걸친 draw 문도 처리 · plot 키워드 있는 draw 만 제거
function stripCurves(tikzBody) {
  return tikzBody.replace(
    /\\draw\s*\[[^\]]*\][^;]*?plot\s*\(\\?x\s*,\s*\{[^}]+\}\)[^;]*?;/g,
    ''
  );
}

// 모든 \node[..] {text} · node[..] {text} 의 텍스트를 빈 문자열로 치환 (balanced brace)
function stripLabels(tikzBody) {
  let out = '';
  let i = 0;
  while (i < tikzBody.length) {
    const remain = tikzBody.slice(i);
    const nodeMatch = remain.match(/^(\\?node\s*\[[^\]]*\](?:\s*at\s*\([^)]+\))?\s*)\{/);
    if (nodeMatch) {
      out += nodeMatch[1] + '{';
      i += nodeMatch[0].length;
      let depth = 1;
      while (i < tikzBody.length && depth > 0) {
        if (tikzBody[i] === '{') depth++;
        else if (tikzBody[i] === '}') depth--;
        if (depth === 0) break;
        i++;
      }
      out += '}';
      i++;
    } else {
      out += tikzBody[i];
      i++;
    }
  }
  return out;
}

// LaTeX 소스 \node 파싱 (라인·좌표·텍스트) — 라벨-클러스터 매칭용
function parseNodesFromSource(tikzBody, sourceLineOffset = 0) {
  const nodes = [];

  // p1 : 독립 \node[..] at (x, y) {text}
  const p1 = /\\node\s*(\[[^\]]*\])?\s*at\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  let m;
  while ((m = p1.exec(tikzBody)) !== null) {
    const line = sourceLineOffset + tikzBody.slice(0, m.index).split('\n').length - 1;
    nodes.push({ line, opts: m[1] || '', tikzX: parseFloat(m[2]), tikzY: parseFloat(m[3]), text: m[4], kind: 'at' });
  }

  // p2 : draw · filldraw · fill · path 안 삽입 node[..] {text} — 앞뒤 좌표와 pos로 위치 계산
  // 예 : `\draw[..] (x0,y0) -- node[pos=..] {text} (xN,yN);`
  //       `\filldraw[..] (x,y) circle (r) node[anchor=..] {text};`  ← v1.3 확장
  const drawRe = /\\(?:draw|filldraw|fill|path)\s*(\[[^\]]*\])([^;]*?);/g;
  const coordRe = /\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g;
  const insideNodeRe = /(^|[^\\])node\s*(\[[^\]]*\])\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  while ((m = drawRe.exec(tikzBody)) !== null) {
    const drawBody = m[2];
    const drawBodyOffset = m.index + m[1].length + '\\draw'.length; // 대략
    const actualDrawBodyStart = tikzBody.indexOf(drawBody, m.index);
    // draw path 안 모든 좌표
    coordRe.lastIndex = 0;
    const drawCoords = [];
    let cm;
    while ((cm = coordRe.exec(drawBody)) !== null) {
      drawCoords.push({ x: parseFloat(cm[1]), y: parseFloat(cm[2]), idx: cm.index });
    }
    // v1.7 : filldraw 는 좌표 1개(원 중심)만 있으므로 < 1로 완화
    //   기존 < 2는 draw path 위주 · filldraw 안 attached node 파싱 실패 원인
    if (drawCoords.length < 1) continue;
    // draw 안 node[..] {text}
    insideNodeRe.lastIndex = 0;
    let nm;
    while ((nm = insideNodeRe.exec(drawBody)) !== null) {
      const nodeIdxInBody = nm.index + nm[1].length;
      const nodeAbsIdx = actualDrawBodyStart + nodeIdxInBody;
      const line = sourceLineOffset + tikzBody.slice(0, nodeAbsIdx).split('\n').length - 1;
      const opts = nm[2];
      const text = nm[3];
      // pos 파싱 (기본 0.5)
      const posMatch = opts.match(/pos\s*=\s*([\d.]+)/);
      const pos = posMatch ? parseFloat(posMatch[1]) : 0.5;
      // node 앞뒤 좌표 찾기
      let cBefore = null, cAfter = null;
      for (const c of drawCoords) {
        if (c.idx < nodeIdxInBody) cBefore = c;
        else if (c.idx > nodeIdxInBody && !cAfter) cAfter = c;
      }
      if (cBefore && cAfter) {
        const tikzX = cBefore.x + pos * (cAfter.x - cBefore.x);
        const tikzY = cBefore.y + pos * (cAfter.y - cBefore.y);
        nodes.push({ line, opts, text, kind: 'sloped', tikzX, tikzY });
      } else if (cBefore) {
        // filldraw / draw 안에서 한 좌표만 있고 그 옆에 node → 좌표 위치 = 라벨 위치
        // 예 : \filldraw (2, 0) circle (0.8pt) node[below] {A}  →  A 라벨은 (2, 0) 근처
        nodes.push({ line, opts, text, kind: 'attached', tikzX: cBefore.x, tikzY: cBefore.y });
      } else {
        nodes.push({ line, opts, text, kind: 'sloped', tikzX: null, tikzY: null });
      }
    }
  }
  return nodes;
}

function generateStandalone(tikzFull, bbox) {
  // v1.4 : useasboundingbox + clip 결합
  //   - useasboundingbox : PDF 페이지 크기 결정 (밖으로 튀어나가는 sloped 라벨 방지)
  //   - clip             : 실제 렌더링을 bbox 안으로 강제 (pgm 크기 = bbox + border 정확)
  //   pad=1.0이므로 정상 라벨이 clip될 위험 낮음
  const bboxCmd = `\\useasboundingbox (${bbox.xMin}, ${bbox.yMin}) rectangle (${bbox.xMax}, ${bbox.yMax});`
    + `\n  \\clip (${bbox.xMin}, ${bbox.yMin}) rectangle (${bbox.xMax}, ${bbox.yMax});`;
  const patched = tikzFull.replace(
    /(\\begin\{tikzpicture\}(?:\[[^\]]*\])?)/,
    `$1\n  ${bboxCmd}`
  );
  return `\\documentclass[tikz,border=2pt]{standalone}
\\usepackage{amsmath,amssymb}
\\usepackage[hangul]{kotex}
\\usetikzlibrary{arrows.meta,positioning,decorations.pathreplacing,patterns,calc}
\\definecolor{dm-accent}{HTML}{B7211E}
\\definecolor{dm-navy}{HTML}{0A2540}
\\definecolor{dm-lavender}{HTML}{F5EEF8}
\\begin{document}
${patched}
\\end{document}
`;
}

// ═══════════════════════════════════════════════════════════════
// 컴파일 · 래스터
// ═══════════════════════════════════════════════════════════════
function compileAndRaster(texContent, workDir, tag, dpi) {
  const texPath = join(workDir, `${tag}.tex`);
  writeFileSync(texPath, texContent, 'utf-8');
  try {
    execSync(`xelatex -interaction=nonstopmode -output-directory="${workDir}" "${texPath}"`, {
      stdio: 'pipe',
      cwd: workDir,
    });
  } catch (e) {
    return null; // 컴파일 실패
  }
  const pdfPath = join(workDir, `${tag}.pdf`);
  if (!existsSync(pdfPath)) return null;
  try {
    execSync(`${PDFTOPPM} -gray -r ${dpi} "${pdfPath}" "${join(workDir, tag + '-render')}"`, {
      stdio: 'pipe',
    });
  } catch (e) {
    return null;
  }
  const pgmPath = join(workDir, `${tag}-render-1.pgm`);
  if (!existsSync(pgmPath)) return null;
  return parsePgm(pgmPath);
}

// v1.8 : Promise 기반 async 컴파일 (병렬 실행용)
function compileAndRasterAsync(texContent, workDir, tag, dpi) {
  const texPath = join(workDir, `${tag}.tex`);
  writeFileSync(texPath, texContent, 'utf-8');
  return new Promise((resolve) => {
    const xproc = spawn('xelatex', ['-interaction=nonstopmode', `-output-directory=${workDir}`, texPath], {
      cwd: workDir, stdio: 'ignore',
    });
    xproc.on('close', (code) => {
      const pdfPath = join(workDir, `${tag}.pdf`);
      if (code !== 0 || !existsSync(pdfPath)) { resolve(null); return; }
      // Poppler pdftoppm 이 경로에 quote 없이 spawn (Windows 절대경로)
      const pdftoppmExe = PDFTOPPM.replace(/^"|"$/g, '');
      const outputPrefix = join(workDir, tag + '-render');
      const pproc = spawn(pdftoppmExe, ['-gray', '-r', String(dpi), pdfPath, outputPrefix], {
        stdio: 'ignore',
      });
      pproc.on('close', (code2) => {
        const pgmPath = join(workDir, `${tag}-render-1.pgm`);
        if (code2 !== 0 || !existsSync(pgmPath)) { resolve(null); return; }
        try { resolve(parsePgm(pgmPath)); } catch { resolve(null); }
      });
      pproc.on('error', () => resolve(null));
    });
    xproc.on('error', () => resolve(null));
  });
}

// v1.8 : 동시성 제한 pool
async function runWithConcurrency(tasks, concurrency) {
  const results = new Array(tasks.length);
  let idx = 0;
  const workers = new Array(Math.min(concurrency, tasks.length)).fill(0).map(async () => {
    while (idx < tasks.length) {
      const i = idx++;
      results[i] = await tasks[i]();
    }
  });
  await Promise.all(workers);
  return results;
}

// ═══════════════════════════════════════════════════════════════
// 픽셀 diff · 클러스터링 · 판정
// ═══════════════════════════════════════════════════════════════
function labelPixelMask(pgmA, pgmB, darkThresh) {
  const { w, h } = pgmA;
  const mask = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    if (pgmA.pixels[i] < darkThresh && pgmB.pixels[i] >= darkThresh) mask[i] = 1;
  }
  return { w, h, mask };
}

function clusterFloodFill(labelMask) {
  const { w, h, mask } = labelMask;
  const label = new Int32Array(w * h);
  const clusters = [];
  const stack = [];
  const dxs = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dys = [0, 0, -1, 1, -1, 1, -1, 1];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      if (mask[idx] && !label[idx]) {
        const cid = clusters.length + 1;
        stack.push(x, y);
        let count = 0, xMin = x, xMax = x, yMin = y, yMax = y;
        while (stack.length > 0) {
          const py = stack.pop(), px = stack.pop();
          const pi = py * w + px;
          if (label[pi] || !mask[pi]) continue;
          label[pi] = cid; count++;
          if (px < xMin) xMin = px; if (px > xMax) xMax = px;
          if (py < yMin) yMin = py; if (py > yMax) yMax = py;
          for (let k = 0; k < 8; k++) {
            const nx = px + dxs[k], ny = py + dys[k];
            if (nx >= 0 && nx < w && ny >= 0 && ny < h && mask[ny * w + nx] && !label[ny * w + nx]) {
              stack.push(nx, ny);
            }
          }
        }
        clusters.push({ id: cid, count, xMin, xMax, yMin, yMax });
      }
    }
  }
  return clusters;
}

function bboxDistance(a, b) {
  const dx = Math.max(0, Math.max(a.xMin - b.xMax, b.xMin - a.xMax));
  const dy = Math.max(0, Math.max(a.yMin - b.yMax, b.yMin - a.yMax));
  return Math.max(dx, dy);
}

function mergeAdjacentClusters(clusters, mergeDist = 25) {
  const merged = clusters.map(c => ({ ...c }));
  let changed = true;
  while (changed) {
    changed = false;
    outer: for (let i = 0; i < merged.length; i++) {
      for (let j = i + 1; j < merged.length; j++) {
        if (bboxDistance(merged[i], merged[j]) <= mergeDist) {
          merged[i].xMin = Math.min(merged[i].xMin, merged[j].xMin);
          merged[i].yMin = Math.min(merged[i].yMin, merged[j].yMin);
          merged[i].xMax = Math.max(merged[i].xMax, merged[j].xMax);
          merged[i].yMax = Math.max(merged[i].yMax, merged[j].yMax);
          merged[i].count += merged[j].count;
          merged.splice(j, 1);
          changed = true;
          break outer;
        }
      }
    }
  }
  return merged;
}

function computeContentBBox(pgmB, darkThresh, pad = 3) {
  const { w, h, pixels } = pgmB;
  let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (pixels[y * w + x] < darkThresh) {
        if (x < xMin) xMin = x; if (x > xMax) xMax = x;
        if (y < yMin) yMin = y; if (y > yMax) yMax = y;
      }
    }
  }
  if (!Number.isFinite(xMin)) return { xMin: 0, yMin: 0, xMax: w - 1, yMax: h - 1 };
  return {
    xMin: Math.max(0, xMin - pad), yMin: Math.max(0, yMin - pad),
    xMax: Math.min(w - 1, xMax + pad), yMax: Math.min(h - 1, yMax + pad)
  };
}

function nonWhitePixelCount(pgm, x0, y0, x1, y1, thresh) {
  const { w, h, pixels } = pgm;
  let cnt = 0;
  for (let y = Math.max(0, y0); y <= Math.min(h - 1, y1); y++) {
    for (let x = Math.max(0, x0); x <= Math.min(w - 1, x1); x++) {
      if (pixels[y * w + x] < thresh) cnt++;
    }
  }
  return cnt;
}

function freeSpaceRadius(pgm, cluster, contentBBox, thresh, maxR = 120) {
  const { w, h, pixels } = pgm;
  const cx = (cluster.xMin + cluster.xMax) / 2;
  const cy = (cluster.yMin + cluster.yMax) / 2;
  const halfW = (cluster.xMax - cluster.xMin) / 2;
  const halfH = (cluster.yMax - cluster.yMin) / 2;
  const dirs = [
    [0, -1, 'N'], [1, -1, 'NE'], [1, 0, 'E'], [1, 1, 'SE'],
    [0, 1, 'S'], [-1, 1, 'SW'], [-1, 0, 'W'], [-1, -1, 'NW']
  ];
  const inside = {}, outside = {};
  for (const [dx, dy, name] of dirs) {
    const startX = cx + dx * (halfW + 1);
    const startY = cy + dy * (halfH + 1);
    let rInside = 0, rOutside = 0, outsideFlag = false;
    for (let r = 1; r <= maxR; r++) {
      const px = Math.round(startX + dx * r);
      const py = Math.round(startY + dy * r);
      if (px < 0 || px >= w || py < 0 || py >= h) break;
      const inCB = px >= contentBBox.xMin && px <= contentBBox.xMax
                && py >= contentBBox.yMin && py <= contentBBox.yMax;
      if (!inCB) {
        if (!outsideFlag) { outsideFlag = true; rInside = r - 1; }
        rOutside = r;
        continue;
      }
      if (pixels[py * w + px] < thresh) {
        if (!outsideFlag) rInside = r - 1;
        break;
      }
      if (!outsideFlag) rInside = r;
      rOutside = r;
    }
    inside[name] = rInside;
    outside[name] = rOutside;
  }
  return { inside, outside };
}

// ═══════════════════════════════════════════════════════════════
// 라벨-노드 매칭 (근사)
// ═══════════════════════════════════════════════════════════════
// v1.4 : 실측 기반 mapping · v1.6 : pxToTikz 역산 추가
function buildTikzToPixelMapping(bbox, pgmW, pgmH, borderPt = 2, dpi = 300) {
  const pxPerPt = dpi / 72;
  const borderPx = borderPt * pxPerPt;
  const tikzW = bbox.xMax - bbox.xMin;
  const tikzH = bbox.yMax - bbox.yMin;
  const innerW = Math.max(1, pgmW - 2 * borderPx);
  const innerH = Math.max(1, pgmH - 2 * borderPx);
  const pxPerTikzX = innerW / tikzW;
  const pxPerTikzY = innerH / tikzH;
  return {
    toPx: (tx, ty) => ({
      x: borderPx + (tx - bbox.xMin) * pxPerTikzX,
      y: borderPx + (bbox.yMax - ty) * pxPerTikzY
    }),
    toTikz: (px, py) => ({
      x: bbox.xMin + (px - borderPx) / pxPerTikzX,
      y: bbox.yMax - (py - borderPx) / pxPerTikzY
    }),
    pxPerTikz: { x: pxPerTikzX, y: pxPerTikzY },
  };
}

// v1.3 : 역방향 매칭 (각 클러스터 → 가장 가까운 노드)
// 여러 클러스터가 같은 노드에 매칭 가능 (큰 라벨이 여러 클러스터로 나뉜 경우).
// 반환 : cluster.id → nodeInfo 매핑 (실패 시 nearestNode 정보만 · distance 리포트용)
function matchClustersToNodes(clusters, nodes, mapping, tolerance = 100) {
  const clusterToNode = new Map();
  const positionalNodes = nodes.filter(n => n.tikzX !== null && n.tikzY !== null);
  for (const c of clusters) {
    const cx = (c.xMin + c.xMax) / 2;
    const cy = (c.yMin + c.yMax) / 2;
    let best = null, bestD = Infinity;
    for (const n of positionalNodes) {
      const px = mapping.toPx(n.tikzX, n.tikzY);
      const d = Math.hypot(px.x - cx, px.y - cy);
      if (d < bestD) { bestD = d; best = n; }
    }
    if (best && bestD <= tolerance) {
      clusterToNode.set(c.id, { node: best, distance: bestD, matched: true });
    } else if (best) {
      // tolerance 초과 · 리포트에 nearestNode·거리 정보 유지 (디버그 용)
      clusterToNode.set(c.id, { node: null, nearest: best, distance: bestD, matched: false });
    }
  }
  return clusterToNode;
}

// ═══════════════════════════════════════════════════════════════
// 판정 (v1.1 · 원점 예외 + 방향성 자유공간)
// ═══════════════════════════════════════════════════════════════

// 원점 라벨 : 축 교차점에서 자연 배치 · 겹침 감지 예외
function isOriginLabel(text) {
  if (!text) return false;
  const t = text.trim();
  return /^(O|\$O\$|\$\\mathrm\{O\}\$|\$\\text\{O\}\$)$/.test(t);
}

// v2.0 : 축 라벨 (x, y, $x$, $y$, $x^2$ 등) · 축 화살표 끝 자연 배치 예외
function isAxisLabel(text) {
  if (!text) return false;
  const t = text.trim();
  return /^(x|y|X|Y|\$[xyXY](\^\{?\d+\}?|')?\$|\$\\mathrm\{[xyXY]\}\$)$/.test(t);
}

// v2.4 : 좌표값 라벨 (순수 숫자·부호·분수·√·π · 변수 없음) · 축 tick 자연 배치 예외
//   예 : "$3$", "$-2$", "$\dfrac{5}{2}$", "$\sqrt{2}$", "$-\sqrt{3}$", "$\pi$", "$2\pi$"
function isCoordinateLabel(text) {
  if (!text) return false;
  const t = text.trim();
  const dollarMatch = t.match(/^\$(.*)\$$/);
  if (!dollarMatch) {
    // 인라인 수식 아니면 순수 숫자만
    return /^-?\d+(?:\.\d+)?$/.test(t);
  }
  const inner = dollarMatch[1];
  // 수학 매크로 (좌표값에 허용) 제거 → 남은 게 숫자·부호만이면 좌표값
  const stripped = inner
    .replace(/\\d?frac\{-?\d+\}\{-?\d+\}/g, 'N')  // \dfrac{a}{b} → N
    .replace(/\\sqrt\{-?\d+\}/g, 'N')             // \sqrt{n} → N
    .replace(/\\pi\b/g, 'N')                      // \pi → N
    .replace(/\\,|\\;|\\ |\\!/g, '')              // 공백 매크로 제거
    .replace(/\\left|\\right/g, '')               // \left \right 제거
    .replace(/\s/g, '');
  // 남은 문자가 숫자·부호·괄호·N만 있으면 좌표값
  return /^-?[\d\-+()N.,]+$/.test(stripped);
}

// v2.4 : sloped 라벨 (draw path 안 sloped 회전 배치) · 접선·직선 밀착 자연 배치 예외
function isSlopedLabel(nodeInfo) {
  if (!nodeInfo || !nodeInfo.opts) return false;
  return nodeInfo.kind === 'sloped' && /\bsloped\b/.test(nodeInfo.opts);
}

// anchor → 대상 방향 : 라벨 anchor 반대편에 대상 (곡선·축·점)이 있음
//   anchor=north  → 라벨 상단이 대상에 붙음 → 대상 방향 = N
//   anchor=south  → 대상 방향 = S
//   anchor=east   → 대상 방향 = E
//   기본 (center) → null (모든 방향에서 재배치 가능)
function anchorToTargetDir(opts) {
  if (!opts) return null;
  const anchorMatch = opts.match(/anchor\s*=\s*([\w\s]+?)(?:,|\])/);
  let anchor = anchorMatch ? anchorMatch[1].trim() : null;
  if (!anchor) {
    // opts 안에 짧은 키워드 (above 등) 검색
    for (const k of ['north east', 'north west', 'south east', 'south west',
                     'above right', 'above left', 'below right', 'below left',
                     'north', 'south', 'east', 'west', 'above', 'below',
                     'left', 'right', 'center']) {
      if (opts.includes(k)) { anchor = k; break; }
    }
  }
  const map = {
    'north': 'N', 'south': 'S', 'east': 'E', 'west': 'W',
    'north east': 'NE', 'north west': 'NW', 'south east': 'SE', 'south west': 'SW',
    'above': 'N', 'below': 'S', 'left': 'W', 'right': 'E',
    'above right': 'NE', 'above left': 'NW', 'below right': 'SE', 'below left': 'SW',
    'center': null,
  };
  return map[anchor] || null;
}

// 대상 방향의 반대 3방향 (재배치 여지)
const OPPOSITE_DIRS = {
  'N':  ['S',  'SE', 'SW'],
  'S':  ['N',  'NE', 'NW'],
  'E':  ['W',  'NW', 'SW'],
  'W':  ['E',  'NE', 'SE'],
  'NE': ['SW', 'S',  'W'],
  'NW': ['SE', 'S',  'E'],
  'SE': ['NW', 'N',  'W'],
  'SW': ['NE', 'N',  'E'],
};

function targetableFree(dirs, targetDir) {
  if (!targetDir) return Math.max(...Object.values(dirs));
  return Math.max(...OPPOSITE_DIRS[targetDir].map(d => dirs[d] || 0));
}

// v1.9 : YELLOW 임계 재조정
//   RED : 프레임 안 자유공간 ≥ freeThresh · 즉 재배치로 명확 해결 가능
//   YELLOW : 프레임 안 좁지만 밖은 넓음 (out > in * 1.5 이고 out ≥ freeThresh)
//           → 프레임 확장 (세션 75 방식) 이 재배치보다 효율적
//   ORANGE : 안·밖 모두 좁음 · 라벨 제거·지문 이동 필요
function verdictFor(overlap, inside, outside, nodeInfo) {
  if (nodeInfo && isOriginLabel(nodeInfo.text)) {
    return { kind: 'GREEN', mark: '✅', label: '원점 라벨 예외', excepted: true };
  }
  if (nodeInfo && isAxisLabel(nodeInfo.text)) {
    return { kind: 'GREEN', mark: '✅', label: '축 라벨 예외 (자연 배치)', excepted: true };
  }
  // v2.4 : sloped 접선 라벨 · 원칙 1 "밀착표기 우선" 자연 배치
  if (nodeInfo && isSlopedLabel(nodeInfo)) {
    return { kind: 'GREEN', mark: '✅', label: 'sloped 밀착 라벨 예외 (자연 배치)', excepted: true };
  }
  // v2.4 : 좌표값 라벨 (숫자·분수·√·π) · 축 tick 자연 배치
  if (nodeInfo && isCoordinateLabel(nodeInfo.text)) {
    return { kind: 'GREEN', mark: '✅', label: '좌표값 라벨 예외 (축 tick 자연 배치)', excepted: true };
  }
  if (overlap <= OPT.overlapThresh) return { kind: 'GREEN', mark: '✅', label: '겹침 없음' };
  const targetDir = nodeInfo ? anchorToTargetDir(nodeInfo.opts) : null;
  const inTarget = targetableFree(inside, targetDir);
  const outTarget = targetableFree(outside, targetDir);
  const inHigh = OPT.freeThresh;                                // 40
  const inMedium = Math.round(OPT.freeThresh * 1.5);            // 60
  // RED : 프레임 안 자유공간 확실 (≥ 60px)
  if (inTarget >= inMedium) return { kind: 'RED', mark: '🔴', label: `대안 A · 프레임 안 재배치 가능 (target=${targetDir || 'any'}, in=${inTarget}px)`, inTarget, outTarget, targetDir };
  // YELLOW : 프레임 밖 자유공간이 안보다 크게 우위 (프레임 확장이 더 나음)
  if (outTarget >= inHigh && outTarget >= inTarget * 1.5) return { kind: 'YELLOW', mark: '🟡', label: `대안 C · 프레임 확장 우위 (target=${targetDir || 'any'}, in=${inTarget}px, out=${outTarget}px)`, inTarget, outTarget, targetDir };
  // 임계 사이 (프레임 안 40~60px) → RED (완화 임계)
  if (inTarget >= inHigh) return { kind: 'RED', mark: '🔴', label: `대안 A · 프레임 안 재배치 가능 (target=${targetDir || 'any'}, in=${inTarget}px)`, inTarget, outTarget, targetDir };
  return { kind: 'ORANGE', mark: '🟠', label: `대안 B · 라벨 제거 · 지문 이동 (target=${targetDir || 'any'})`, inTarget, outTarget, targetDir };
}

// ═══════════════════════════════════════════════════════════════
// 파일 · 블록 처리
// ═══════════════════════════════════════════════════════════════
async function processFile(file, workRoot) {
  const text = readFileSync(file, 'utf-8');
  const blocks = extractTikzBlocks(text);
  const fileIssues = [];
  const summary = {
    GREEN: 0, RED: 0, YELLOW: 0, ORANGE: 0, blocks: 0, errors: 0,
    // v1.4 : --classify 축·곡선 총합 (RED/YELLOW/ORANGE 클러스터만 집계)
    axisOnly: 0, curveOnly: 0, mixed: 0,
  };

  // v1.8 : 각 블록의 컴파일·래스터 작업을 병렬 실행 · 이후 분석은 순차
  const compileTasks = blocks.map((block, bi) => async () => {
    const bbox = autoBoundingBox(block.body);
    if (!bbox) return { bi, block, bbox: null, error: 'no-bbox' };
    const workDir = join(workRoot, `${basename(file, '.tex')}-b${bi}`);
    mkdirSync(workDir, { recursive: true });
    const texA = generateStandalone(block.full, bbox);
    const texB = generateStandalone(
      block.full.replace(block.body, stripLabels(block.body)),
      bbox
    );
    const [pgmA, pgmB] = await Promise.all([
      compileAndRasterAsync(texA, workDir, 'A', OPT.dpi),
      compileAndRasterAsync(texB, workDir, 'B', OPT.dpi),
    ]);
    let pgmC = null;
    if (OPT.classify) {
      const texC = generateStandalone(
        block.full.replace(block.body, stripCurves(stripLabels(block.body))),
        bbox
      );
      pgmC = await compileAndRasterAsync(texC, workDir, 'C', OPT.dpi);
      if (pgmC && pgmB && (pgmC.w !== pgmB.w || pgmC.h !== pgmB.h)) pgmC = null;
    }
    return { bi, block, bbox, workDir, pgmA, pgmB, pgmC };
  });

  const compileResults = await runWithConcurrency(compileTasks, OPT.concurrency);

  // 순차 분석
  for (const r of compileResults) {
    const { bi, block, bbox, workDir, pgmA, pgmB, pgmC } = r;
    summary.blocks++;
    if (!bbox) { summary.errors++; continue; }
    if (!pgmA || !pgmB) { summary.errors++; continue; }
    if (pgmA.w !== pgmB.w || pgmA.h !== pgmB.h) { summary.errors++; continue; }

    const labelMask = labelPixelMask(pgmA, pgmB, OPT.darkThresh);
    const rawClusters = clusterFloodFill(labelMask);
    // v1.5 : 최소 크기 필터 (20 픽셀 이하 = 서브픽셀 렌더링 잔재 · 노이즈)
    const filteredClusters = rawClusters.filter(c => c.count >= 20);
    const clusters = mergeAdjacentClusters(filteredClusters);
    const contentBBox = computeContentBBox(pgmB, OPT.darkThresh);

    const nodes = parseNodesFromSource(block.body, block.startLine);
    const mapping = buildTikzToPixelMapping(bbox, pgmA.w, pgmA.h, 2, OPT.dpi);
    const clusterToNode = matchClustersToNodes(clusters, nodes, mapping);

    // v1.7 : --debug-nodes 옵션 · 특정 블록 노드·클러스터 목록 출력
    if (OPT.debugNodes && (OPT.debugBlock < 0 || OPT.debugBlock === bi)) {
      console.log(`\n🔬 block#${bi} 파싱 노드 ${nodes.length}개:`);
      for (const n of nodes) {
        const px = n.tikzX !== null ? mapping.toPx(n.tikzX, n.tikzY) : null;
        console.log(`   L${n.line} [${n.kind}] tikz=(${n.tikzX},${n.tikzY}) ` +
          `${px ? `px=(${Math.round(px.x)},${Math.round(px.y)}) ` : ''}"${n.text.slice(0, 30)}"`);
      }
      console.log(`🔬 block#${bi} 클러스터 ${clusters.length}개:`);
      for (const c of clusters) {
        const cx = (c.xMin + c.xMax) / 2;
        const cy = (c.yMin + c.yMax) / 2;
        const t = mapping.toTikz(cx, cy);
        const m = clusterToNode.get(c.id);
        const mLabel = m ? (m.matched ? `→ "${m.node.text.slice(0, 20)}" (${Math.round(m.distance)}px)` : `~ "${m.nearest.text.slice(0, 20)}" (${Math.round(m.distance)}px)`) : '(no match)';
        console.log(`   cid=${c.id} bbox=(${c.xMin},${c.yMin})-(${c.xMax},${c.yMax}) count=${c.count} tikz=(${t.x.toFixed(2)},${t.y.toFixed(2)}) ${mLabel}`);
      }
    }

    // v1.5 : 진단 카운트
    summary.parsedNodes = (summary.parsedNodes || 0) + nodes.length;
    summary.rawClusters = (summary.rawClusters || 0) + rawClusters.length;
    summary.mergedClusters = (summary.mergedClusters || 0) + clusters.length;
    let matchedCount = 0;
    for (const [, v] of clusterToNode) if (v.matched) matchedCount++;
    summary.matched = (summary.matched || 0) + matchedCount;
    summary.unmatched = (summary.unmatched || 0) + (clusters.length - matchedCount);

    for (const c of clusters) {
      const overlap = nonWhitePixelCount(pgmB, c.xMin, c.yMin, c.xMax, c.yMax, OPT.darkThresh);
      const area = Math.max(1, (c.xMax - c.xMin + 1) * (c.yMax - c.yMin + 1));
      const { inside, outside } = freeSpaceRadius(pgmB, c, contentBBox, OPT.darkThresh);
      const insideMax = Math.max(...Object.values(inside));
      const outsideMax = Math.max(...Object.values(outside));

      // v1.2 축·곡선 분류 : variant C 있으면
      let overlapAxis = null, overlapCurve = null;
      if (pgmC) {
        overlapAxis = nonWhitePixelCount(pgmC, c.xMin, c.yMin, c.xMax, c.yMax, OPT.darkThresh);
        overlapCurve = overlap - overlapAxis; // B - C 근사
        if (overlapCurve < 0) overlapCurve = 0;
      }

      // 클러스터-노드 매칭 (판정 전에 필요 · 원점·anchor 정보)
      const matched = clusterToNode.get(c.id);
      const nodeInfo = matched && matched.node ? matched.node : null;
      const nearestInfo = matched && !matched.matched ? matched : null;

      const v = verdictFor(overlap, inside, outside, nodeInfo);
      summary[v.kind]++;
      if (v.kind === 'GREEN') continue;

      // v1.4 : classify 분포 집계
      if (overlapAxis !== null && overlapCurve !== null) {
        if (overlapAxis > 0 && overlapCurve === 0) summary.axisOnly++;
        else if (overlapAxis === 0 && overlapCurve > 0) summary.curveOnly++;
        else if (overlapAxis > 0 && overlapCurve > 0) summary.mixed++;
      }

      // v1.4 : 매칭 실패 시 예측 픽셀 위치 계산 (디버그 용)
      // v1.6 : 클러스터 중심의 tikz 좌표 역산 (디버그 용)
      let expectedPx = null;
      if (nearestInfo && nearestInfo.nearest.tikzX !== null) {
        expectedPx = mapping.toPx(nearestInfo.nearest.tikzX, nearestInfo.nearest.tikzY);
      }
      const clusterCx = (c.xMin + c.xMax) / 2;
      const clusterCy = (c.yMin + c.yMax) / 2;
      const clusterTikz = mapping.toTikz(clusterCx, clusterCy);
      fileIssues.push({
        file,
        line: nodeInfo ? nodeInfo.line : (nearestInfo ? nearestInfo.nearest.line : block.startLine),
        blockIdx: bi,
        clusterId: c.id,
        cbbox: c,
        clusterCount: c.count,
        clusterTikz,
        expectedPx,
        overlap,
        overlapAxis, overlapCurve,
        density: (overlap / area) * 100,
        insideMax, outsideMax,
        insideDirs: inside, outsideDirs: outside,
        nodeText: nodeInfo
          ? nodeInfo.text
          : (nearestInfo
              ? `~"${nearestInfo.nearest.text.slice(0, 20)}" (${Math.round(nearestInfo.distance)}px)`
              : '(matched X)'),
        nodeKind: nodeInfo ? nodeInfo.kind : (nearestInfo ? 'nearest' : null),
        verdict: v,
      });
    }

    if (!OPT.keepTemp) {
      try { rmSync(workDir, { recursive: true, force: true }); } catch {}
    }
  }

  return { fileIssues, summary };
}

// ═══════════════════════════════════════════════════════════════
// 실행
// ═══════════════════════════════════════════════════════════════
console.log(`🔍 PDF-based TikZ 라벨 겹침 감사 (v2.4 · 픽셀 실측 · 방향성 판정 · 병렬 컴파일${OPT.classify ? ' · 축·곡선 분류' : ''})`);
console.log(`   임계 : 겹침 > ${OPT.overlapThresh}px · 자유공간 반경 ≥ ${OPT.freeThresh}px · DPI ${OPT.dpi} · concurrency ${OPT.concurrency}\n`);

const workRoot = join(tmpdir(), `pdf-overlap-${Date.now()}`);
mkdirSync(workRoot, { recursive: true });

let totalRed = 0, totalYellow = 0, totalOrange = 0, totalGreen = 0, totalBlocks = 0, totalErrors = 0;
let totalAxisOnly = 0, totalCurveOnly = 0, totalMixed = 0;

async function main() {
for (const file of files) {
  const { fileIssues, summary } = await processFile(file, workRoot);
  totalRed += summary.RED;
  totalYellow += summary.YELLOW;
  totalOrange += summary.ORANGE;
  totalGreen += summary.GREEN;
  totalBlocks += summary.blocks;
  totalErrors += summary.errors;
  totalAxisOnly += summary.axisOnly;
  totalCurveOnly += summary.curveOnly;
  totalMixed += summary.mixed;

  if (fileIssues.length === 0) {
    console.log(`✅ ${basename(file)} : GREEN ${summary.GREEN} / blocks ${summary.blocks}${summary.errors ? ` / ⚠️ compile-error ${summary.errors}` : ''}`);
    continue;
  }
  const classifyHeader = OPT.classify
    ? ` · 축전용 ${summary.axisOnly} · 곡선전용 ${summary.curveOnly} · 혼합 ${summary.mixed}`
    : '';
  const diagHeader = ` · 노드 ${summary.parsedNodes} · 클러스터 raw ${summary.rawClusters}→merged ${summary.mergedClusters} · 매칭 ${summary.matched}/${summary.matched + summary.unmatched}`;
  console.log(`\n── ${basename(file)} · GREEN ${summary.GREEN} · RED ${summary.RED} · YELLOW ${summary.YELLOW} · ORANGE ${summary.ORANGE} · blocks ${summary.blocks}${diagHeader}${classifyHeader}${summary.errors ? ` · ⚠️ compile-error ${summary.errors}` : ''} ──`);
  for (const i of fileIssues) {
    const dirsIn = Object.entries(i.insideDirs).filter(([, v]) => v >= 20).map(([k, v]) => `${k}${v}`).join('/');
    const dirsOut = Object.entries(i.outsideDirs).filter(([, v]) => v >= 20).map(([k, v]) => `${k}${v}`).join('/');
    const kind = i.nodeKind ? ` [${i.nodeKind}]` : '';
    const classify = (i.overlapAxis !== null && i.overlapAxis !== undefined)
      ? ` · 축 ${i.overlapAxis}px · 곡선 ${i.overlapCurve}px`
      : '';
    // v2.0 : --debug-nodes 지정 시만 클러스터 tikz·count 상세 · nearest 실패 시엔 항상 표시
    let debug = '';
    if (i.nodeKind === 'nearest' && i.expectedPx) {
      debug = ` · count=${i.clusterCount} · tikz=(${i.clusterTikz.x.toFixed(2)},${i.clusterTikz.y.toFixed(2)}) · 예측 px=(${Math.round(i.expectedPx.x)},${Math.round(i.expectedPx.y)})`;
    } else if (OPT.debugNodes) {
      debug = ` · count=${i.clusterCount} · tikz=(${i.clusterTikz.x.toFixed(2)},${i.clusterTikz.y.toFixed(2)})`;
    }
    console.log(`  ${i.verdict.mark} L${i.line} block#${i.blockIdx} cid=${i.clusterId}${kind} "${(i.nodeText || '').slice(0, 32)}" `);
    console.log(`     겹침 ${i.overlap}px (${i.density.toFixed(1)}%)${classify} · in-max ${i.insideMax}px [${dirsIn}] · out-max ${i.outsideMax}px [${dirsOut}]${debug}`);
    console.log(`     → ${i.verdict.label}`);
  }
}

const classifyTotal = OPT.classify
  ? ` · 축전용 ${totalAxisOnly} · 곡선전용 ${totalCurveOnly} · 혼합 ${totalMixed}`
  : '';
console.log(`\n📊 요약 : GREEN ${totalGreen} · 🔴 RED ${totalRed} · 🟡 YELLOW ${totalYellow} · 🟠 ORANGE ${totalOrange} · blocks ${totalBlocks}${classifyTotal}${totalErrors ? ` · ⚠️ compile-error ${totalErrors}` : ''}`);

if (!OPT.keepTemp) {
  try { rmSync(workRoot, { recursive: true, force: true }); } catch {}
}

const failCount = totalRed + totalYellow + totalOrange;
if (failCount > 0 && !OPT.soft) process.exit(1);
}

main().catch(e => { console.error('FATAL:', e); process.exit(2); });
