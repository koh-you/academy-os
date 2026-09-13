// 문제은행 CLI 공통 도구 — 인자 파싱·페이지 렌더·글자 좌표·잉크 투영·거터 탐지·크롭.
// ingest-text-pdf.mjs(문항)와 ingest-answers.mjs(빠른정답·해설)가 같이 쓴다.

import { writeFile } from "node:fs/promises";
import { createCanvas } from "@napi-rs/canvas";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

export { pdfjs };

export function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2);
    const next = argv[index + 1];
    if (next === undefined || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}

export function parsePageRange(value, pageCount) {
  if (!value) return [1, pageCount];
  const match = String(value).match(/^(\d+)\s*-\s*(\d+)$/);
  if (!match) throw new Error(`--pages 형식은 "8-117" 처럼 씁니다: ${value}`);
  return [Math.max(1, Number(match[1])), Math.min(pageCount, Number(match[2]))];
}

/** 교재 서체의 사설 글리프(ù = °) 와 조판용 백틱을 사람이 읽는 글자로 바꾼다. */
export function cleanLabel(text) {
  return String(text ?? "").replace(/ù/g, "°").replace(/`/g, "").replace(/\s+/g, " ").trim();
}

export function createCanvasFactory() {
  return {
    create(width, height) {
      const canvas = createCanvas(width, height);
      return { canvas, context: canvas.getContext("2d") };
    },
    reset(target, width, height) {
      target.canvas.width = width;
      target.canvas.height = height;
    },
    destroy() {}
  };
}

export async function renderPage(page, scale) {
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: context, viewport, canvasFactory: createCanvasFactory() }).promise;
  return { canvas, context, viewport };
}

/** pdf.js 텍스트 항목을 뷰포트(좌상단 원점) 좌표로 바꾼다. y 는 baseline. */
export function toViewportTokens(textContent, viewport) {
  const tokens = [];
  for (const item of textContent.items) {
    if (!("str" in item)) continue;
    const [, , , , x, y] = pdfjs.Util.transform(viewport.transform, item.transform);
    // 교재 PDF 에는 제어문자(\u0007 등)가 글자 사이에 섞여 있다. 공백으로 바꾼다.
    const str = String(item.str).replace(/[\u0000-\u001f]/g, " ");
    tokens.push({ str, x, y, w: item.width, h: item.height, fontName: item.fontName });
  }
  return tokens;
}

/**
 * 잉크 투영. [x0,x1]×[y0,y1] (pt) 안에서 첫/마지막 잉크 행을 pt 로 돌려준다.
 * 회색 임계 200 · 한 행에 어두운 픽셀 2개 이상이면 잉크.
 *
 * 다음 문항 번호 바로 위에 붙는 「중요」 아이콘(작은 그림)이 같은 컬럼에 있으면 하단이 거기까지 늘어난다
 * (0126번 사례). 아이콘은 폭이 좁으므로, 세그먼트 하단 근처(iconZonePt)에서 잉크 폭이 iconMaxWidthPt 보다
 * 좁은 행은 내용으로 세지 않는다. 소문항 (2)처럼 빈 줄 뒤에 오는 진짜 내용은 폭이 넓어 그대로 남는다.
 */
export function inkExtent(imageData, imageWidth, scale, box, { iconZonePt = 18, iconMaxWidthPt = 18 } = {}) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale));
  const x1 = Math.min(imageWidth, Math.ceil(box.x1 * scale));
  const y0 = Math.max(0, Math.floor(box.y0 * scale));
  const y1 = Math.min(Math.floor(imageData.length / 4 / imageWidth), Math.ceil(box.y1 * scale));
  const iconZoneStart = y1 - Math.round(iconZonePt * scale);
  const iconMaxWidth = iconMaxWidthPt * scale;
  let first = -1;
  let last = -1;
  for (let y = y0; y < y1; y += 1) {
    let dark = 0;
    let minX = -1;
    let maxX = -1;
    const rowOffset = y * imageWidth * 4;
    for (let x = x0; x < x1; x += 2) {
      const offset = rowOffset + x * 4;
      const gray = (imageData[offset] + imageData[offset + 1] + imageData[offset + 2]) / 3;
      if (gray < 200) {
        dark += 1;
        if (minX === -1) minX = x;
        maxX = x;
      }
    }
    if (dark < 2) continue;
    // 아이콘은 컬럼 왼쪽 가장자리에 붙는다. 오른쪽 그림 라벨(x·C 같은 한 글자)은 건드리지 않는다.
    if (y >= iconZoneStart && maxX - minX < iconMaxWidth && minX - x0 < iconMaxWidth * 1.5) continue;
    if (first === -1) first = y;
    last = y;
  }
  if (first === -1) return null;
  return { top: first / scale, bottom: (last + 1) / scale };
}

/**
 * 한 글줄의 세로 잉크 범위. yCenter(pt) 행에서 위·아래로 잉크가 이어지는 동안 넓힌다.
 * 분수의 가로줄과 분자·분모 사이 빈 틈(1pt 안팎)은 gapPt 안이므로 한 줄로 이어지고,
 * 이웃 글줄과의 간격(4pt 이상)에서 멈춘다. 잉크가 없으면 null.
 */
export function inkBand(imageData, imageWidth, scale, xRange, yCenter, { maxUp = 14, maxDown = 10, gapPt = 2.2 } = {}) {
  const x0 = Math.max(0, Math.floor(xRange.x0 * scale));
  const x1 = Math.min(imageWidth, Math.ceil(xRange.x1 * scale));
  const imageHeight = Math.floor(imageData.length / 4 / imageWidth);
  const rowHasInk = (y) => {
    if (y < 0 || y >= imageHeight) return false;
    const rowOffset = y * imageWidth * 4;
    let dark = 0;
    for (let x = x0; x < x1; x += 1) {
      const offset = rowOffset + x * 4;
      if ((imageData[offset] + imageData[offset + 1] + imageData[offset + 2]) / 3 < 200) {
        dark += 1;
        if (dark >= 2) return true;
      }
    }
    return false;
  };
  const center = Math.round(yCenter * scale);
  const gap = Math.round(gapPt * scale);
  const walk = (step, limitPt) => {
    let last = -1;
    let blank = 0;
    const limit = Math.round(limitPt * scale);
    for (let y = center, count = 0; count <= limit; y += step, count += 1) {
      if (rowHasInk(y)) {
        last = y;
        blank = 0;
      } else if (last !== -1 && (blank += 1) > gap) {
        return { last, clipped: false };
      }
    }
    // 한계까지 잉크가 이어졌다 — 그림(그래프)처럼 한 글줄보다 큰 내용이다.
    return { last, clipped: last !== -1 && blank <= gap };
  };
  const up = walk(-1, maxUp);
  const down = walk(1, maxDown);
  if (up.last === -1 && down.last === -1) return null;
  return {
    top: (up.last === -1 ? center : up.last) / scale,
    bottom: ((down.last === -1 ? center : down.last) + 1) / scale,
    clippedTop: up.clipped,
    clippedBottom: down.clipped
  };
}

/** 상자 안에서 잉크가 있는 가장 오른쪽 x(pt). 「답 ③」처럼 짧은 답 줄의 오른쪽 여백을 잘라 낼 때 쓴다. */
export function inkRightEdge(imageData, imageWidth, scale, box) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale));
  const x1 = Math.min(imageWidth, Math.ceil(box.x1 * scale));
  const y0 = Math.max(0, Math.floor(box.y0 * scale));
  const y1 = Math.min(Math.floor(imageData.length / 4 / imageWidth), Math.ceil(box.y1 * scale));
  for (let x = x1 - 1; x >= x0; x -= 1) {
    let dark = 0;
    for (let y = y0; y < y1; y += 1) {
      const offset = (y * imageWidth + x) * 4;
      if ((imageData[offset] + imageData[offset + 1] + imageData[offset + 2]) / 3 < 200 && (dark += 1) >= 2) return (x + 1) / scale;
    }
  }
  return -1;
}

/** 컬럼 사이 세로 점선(거터)의 x 를 찾는다 — 어떤 x 에서 잉크 행 비율이 60% 를 넘으면 그것. */
export function findGutterX(imageData, imageWidth, imageHeight, scale, fromX, toX, fromY, toY) {
  const x0 = Math.floor(fromX * scale);
  const x1 = Math.ceil(toX * scale);
  const y0 = Math.floor(fromY * scale);
  const y1 = Math.min(imageHeight, Math.ceil(toY * scale));
  let bestX = -1;
  let bestRatio = 0;
  for (let x = x0; x < x1; x += 1) {
    let inked = 0;
    for (let y = y0; y < y1; y += 2) {
      const offset = (y * imageWidth + x) * 4;
      const gray = (imageData[offset] + imageData[offset + 1] + imageData[offset + 2]) / 3;
      if (gray < 215) inked += 1;
    }
    const ratio = inked / ((y1 - y0) / 2);
    if (ratio > bestRatio) {
      bestRatio = ratio;
      bestX = x;
    }
  }
  // 점선이라 잉크 비율이 0.3 안팎이다. 0.2 를 넘는 가장 진한 세로줄을 거터로 본다.
  return bestRatio >= 0.2 ? bestX / scale : -1;
}


/** 렌더된 캔버스에서 pt 상자를 잘라 JPEG 로 저장한다. */
export async function cropCanvasToFile(canvas, renderScale, box, filePath) {
  const sx = Math.round(box.x0 * renderScale);
  const sy = Math.round(box.y0 * renderScale);
  const sw = Math.max(1, Math.round((box.x1 - box.x0) * renderScale));
  const sh = Math.max(1, Math.round((box.y1 - box.y0) * renderScale));
  const crop = createCanvas(sw, sh);
  crop.getContext("2d").drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
  await writeFile(filePath, await crop.encode("jpeg", 88));
  return { width: sw, height: sh };
}
