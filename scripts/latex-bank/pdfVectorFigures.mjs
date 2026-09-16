// 텍스트 PDF 의 벡터 그림 찾기 — 쪽의 operator list 에서 path(선·곡선·사각형)의 쪽 좌표 bbox 를 모으고, 문항 영역 안의
// path 를 묶어 그림 영역으로 만든다. 글자 레이어가 있는 교재(RPM)는 그림도 벡터라 크롭이 선명하므로 TikZ 대신 크롭을 쓴다.
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

const OP = pdfjs.OPS;
// constructPath 의 op 코드(pdfjs 4.x): 13 moveTo · 14 lineTo · 15 curveTo · 16 curveTo2 · 17 curveTo3 · 18 closePath · 19 rectangle
const PATH_ARGC = { 13: 2, 14: 2, 15: 6, 16: 4, 17: 4, 18: 0, 19: 4 };

const mul = (m, n) => [
  m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]
];
const apply = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];

/**
 * 쪽의 벡터 path bbox 목록. 좌표는 위가 0 인 쪽 pt(pdfjs viewport scale 1 기준).
 * @returns {Promise<{ x0:number, y0:number, x1:number, y1:number, kind:"fill"|"stroke", w:number, h:number }[]>}
 */
export async function pagePathBoxes(page) {
  const viewport = page.getViewport({ scale: 1 });
  const ops = await page.getOperatorList();
  const base = viewport.transform; // PDF 사용자 좌표 → 위가 0 인 쪽 좌표
  let ctm = base;
  const stack = [];
  const boxes = [];
  let pendingBox = null;
  for (let i = 0; i < ops.fnArray.length; i += 1) {
    const fn = ops.fnArray[i];
    const args = ops.argsArray[i];
    if (fn === OP.save) stack.push(ctm);
    else if (fn === OP.restore) ctm = stack.pop() ?? base;
    else if (fn === OP.transform) ctm = mul(ctm, args);
    else if (fn === OP.paintFormXObjectBegin) {
      stack.push(ctm);
      if (args[0]) ctm = mul(ctm, args[0]);
    } else if (fn === OP.paintFormXObjectEnd) ctm = stack.pop() ?? base;
    else if (fn === OP.constructPath) {
      const [codes, coords] = args;
      let k = 0;
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      const add = (x, y) => {
        const [px, py] = apply(ctm, x, y);
        if (px < x0) x0 = px; if (px > x1) x1 = px; if (py < y0) y0 = py; if (py > y1) y1 = py;
      };
      for (const code of codes) {
        const n = PATH_ARGC[code] ?? 0;
        if (code === 19) {
          const [x, y, w, h] = [coords[k], coords[k + 1], coords[k + 2], coords[k + 3]];
          add(x, y); add(x + w, y + h); add(x, y + h); add(x + w, y);
        } else {
          for (let j = 0; j < n; j += 2) add(coords[k + j], coords[k + j + 1]);
        }
        k += n;
      }
      pendingBox = Number.isFinite(x0) ? { x0, y0, x1, y1 } : null;
    } else if (fn === OP.fill || fn === OP.eoFill || fn === OP.stroke || fn === OP.closeStroke || fn === OP.fillStroke || fn === OP.closeFillStroke || fn === OP.eoFillStroke || fn === OP.closeEOFillStroke) {
      if (pendingBox) {
        const kind = fn === OP.stroke || fn === OP.closeStroke ? "stroke" : "fill";
        boxes.push({ ...pendingBox, kind, w: pendingBox.x1 - pendingBox.x0, h: pendingBox.y1 - pendingBox.y0 });
      }
      pendingBox = null;
    } else if (fn === OP.endPath || fn === OP.clip || fn === OP.eoClip) {
      pendingBox = null;
    }
  }
  return boxes;
}

const inside = (b, r, pad = 1) => b.x0 >= r.x0 - pad && b.x1 <= r.x1 + pad && b.y0 >= r.y0 - pad && b.y1 <= r.y1 + pad;
const overlaps = (a, b, pad = 0) => a.x0 - pad < b.x1 && b.x0 - pad < a.x1 && a.y0 - pad < b.y1 && b.y0 - pad < a.y1;
const union = (a, b) => ({ x0: Math.min(a.x0, b.x0), y0: Math.min(a.y0, b.y0), x1: Math.max(a.x1, b.x1), y1: Math.max(a.y1, b.y1) });

/**
 * 문항 영역(쪽 pt) 안의 그림 영역들. 분수 가로줄·밑줄·빈칸 상자·번호 배지처럼 글의 일부인 path 는 뺀다.
 * 남은 path 를 서로 gap pt 안에 있으면 한 덩어리로 묶고, 덩어리에 겹치는 글자 토큰(도형 라벨)을 더해 bbox 를 넓힌다.
 * @param {object[]} paths pagePathBoxes 결과
 * @param {{x0,y0,x1,y1}} region 문항 영역
 * @param {{x0,y0,x1,y1,h,str}[]} textBoxes 쪽 글자 토큰(위가 0 인 좌표)
 */
export function findFigureClusters(paths, region, textBoxes, { gap = 8, minSize = 12, topLimit = -Infinity } = {}) {
  // topLimit: 문항 번호 배지 윗변. 그 위에서 시작하는 path(구역 머리띠 장식)는 문항 그림이 아니다.
  const inRegion = paths.filter((box) => inside(box, region, 2) && box.y0 >= topLimit - 4);
  const isThin = (box) => box.h < 1.6 || box.w < 1.6;
  // 굵기 있는 path 가 그림의 뼈대다. 분수 가로줄·밑줄·문항 구분선처럼 얇은 선은 뼈대(또는 뼈대에 이미 붙은 선)에 닿을 때만
  // 넣는다(도형의 한 변·축·표의 칸 선). 번호 배지·빈칸 상자 같은 작은 색 채움은 뺀다.
  // 낮고 좁은 색 채움(h ≤ 14pt · w ≤ 80pt)은 번호 배지·빈칸·「대표문제」 같은 태그 라벨의 바탕이다.
  const candidates = inRegion.filter((box) => !isThin(box) && !(box.kind === "fill" && box.h <= 14 && box.w <= 80));
  const thin = inRegion.filter(isThin);
  let grew = true;
  while (grew) {
    grew = false;
    for (const box of thin) {
      if (candidates.includes(box)) continue;
      if (candidates.some((other) => overlaps(box, other, 3))) {
        candidates.push(box);
        grew = true;
      }
    }
  }
  const clusters = [];
  for (const box of candidates) {
    let merged = { ...box };
    for (let i = clusters.length - 1; i >= 0; i -= 1) {
      if (overlaps(clusters[i], merged, gap)) {
        merged = union(merged, clusters[i]);
        clusters.splice(i, 1);
      }
    }
    clusters.push(merged);
  }
  const results = [];
  for (const cluster of clusters) {
    if (cluster.x1 - cluster.x0 < minSize && cluster.y1 - cluster.y0 < minSize) continue;
    // 덩어리 안에 폭·높이 모두 8pt 이상인 도형이 하나는 있어야 그림이다. 직각 표시 같은 5pt 네모에 밑줄·작은 글자만 붙은
    // 것(구역 머리띠의 아이콘 줄)은 그림이 아니다.
    const members = candidates.filter((c) => inside(c, cluster, 0.5));
    if (!members.some((c) => Math.min(c.w, c.h) >= 8)) continue;
    // 그림 안·가까이의 작은 글자(정점 라벨·길이 · 9pt 미만)를 넣어 넓힌다. 본문 크기 글자는 덩어리 안에 완전히 들어 있을 때만
    // (표의 칸 글) 넣는다 — 표 바로 위 본문 줄이 딸려 오지 않게.
    let box = { ...cluster };
    for (let pass = 0; pass < 2; pass += 1) {
      for (const token of textBoxes) {
        if (!inside(token, region, 2)) continue;
        if (token.h >= 9.5 ? inside(token, cluster, 1.5) : overlaps(token, box, 5)) box = union(box, token);
      }
    }
    results.push({ x0: box.x0 - 2, y0: box.y0 - 2, x1: box.x1 + 2, y1: box.y1 + 2, paths: members.length });
  }
  return results.sort((a, b) => a.y0 - b.y0 || a.x0 - b.x0);
}

/** 쪽 글자 토큰 → 위가 0 인 bbox 목록. */
export function textBoxesOf(textContent, viewport) {
  const boxes = [];
  for (const item of textContent.items) {
    if (!item.str || !item.str.trim() || !item.height) continue;
    // 쪽마다 mediabox 원점이 다를 수 있어 path 와 같은 viewport 변환을 쓴다.
    const [x, y1] = viewport.convertToViewportPoint(item.transform[4], item.transform[5]);
    const h = Math.abs(item.height) || Math.abs(item.transform[3]);
    boxes.push({ x0: x, x1: x + (item.width || h * item.str.length * 0.5), y0: y1 - h, y1: y1 + h * 0.25, h, str: item.str });
  }
  return boxes;
}
