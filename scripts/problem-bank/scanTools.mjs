// 스캔 교재 CLI 공통 도구 — tesseract 호출·기울기·색/잉크 통계·컬럼·견본 대조. ingest-scan-pdf(문항)·ingest-scan-answers(정답·해설)가 같이 쓴다.

import { execFile } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import { parseTesseractTsv } from "../../src/domains/problems/scanPdfSegmenter.js";

const execFileAsync = promisify(execFile);

/** 한 글줄의 토큰을 글자로 잇는다 — 글자 높이의 절반보다 좁은 틈은 같은 낱말(「인 수 분해」→「인수분해」). */
export function joinLineTokens(line) {
  let text = "";
  let previous = null;
  for (const token of line) {
    if (previous) text += token.x - (previous.x + previous.w) < Math.max(previous.h, token.h) * 0.5 ? "" : " ";
    text += token.text;
    previous = token;
  }
  return text;
}

/** 같은 글줄(세로 중심이 4pt 안)의 토큰을 왼쪽부터 묶는다. */
export function groupTokenLines(tokens) {
  const lines = [];
  for (const token of [...tokens].sort((a, b) => a.y + a.h / 2 - (b.y + b.h / 2) || a.x - b.x)) {
    const center = token.y + token.h / 2;
    const line = lines.find((entry) => Math.abs(entry.center - center) < 4);
    if (line) {
      line.tokens.push(token);
      line.center = (line.center * (line.tokens.length - 1) + center) / line.tokens.length;
    } else {
      lines.push({ center, tokens: [token] });
    }
  }
  return lines.map((line) => line.tokens.sort((a, b) => a.x - b.x));
}
export const TESSERACT_CANDIDATES = [process.env.TESSERACT_PATH, "C:/Program Files/Tesseract-OCR/tesseract.exe", "tesseract"].filter(Boolean);

export async function findTesseract() {
  for (const candidate of TESSERACT_CANDIDATES) {
    try {
      await execFileAsync(candidate, ["--version"]);
      return candidate;
    } catch {
      // 다음 후보
    }
  }
  throw new Error("tesseract 를 찾지 못했습니다. winget install UB-Mannheim.TesseractOCR 또는 TESSERACT_PATH 를 지정하세요.");
}

export async function findKoreanTessdata() {
  const dirs = [process.env.TESSDATA_PREFIX, path.join(process.env.LOCALAPPDATA || os.homedir(), "tessdata"), "C:/Program Files/Tesseract-OCR/tessdata"].filter(Boolean);
  for (const dir of dirs) {
    try {
      await access(path.join(dir, "kor.traineddata"));
      return dir;
    } catch {
      // 다음 후보
    }
  }
  return null;
}

/** 머리글 띠(위 6~30%)의 한글 OCR 텍스트. 「정답과 풀이」 시작 쪽을 찾는 데만 쓴다. */
export async function readHeaderKorean(binary, tessdataDir, canvas, renderScale, pageHeight, filePath) {
  const strip = createCanvas(canvas.width, Math.ceil(pageHeight * 0.24 * renderScale));
  strip.getContext("2d").drawImage(canvas, 0, Math.floor(pageHeight * 0.06 * renderScale), canvas.width, strip.height, 0, 0, canvas.width, strip.height);
  await writeFile(filePath, await strip.encode("png"));
  const { stdout } = await execFileAsync(binary, [filePath, "-", "-l", "kor", "--psm", "6", "--tessdata-dir", tessdataDir], { maxBuffer: 8 * 1024 * 1024, windowsHide: true });
  return stdout;
}

export async function ocrTokens(binary, imagePath, scale) {
  const tokens = [];
  for (const psm of [11, 6]) {
    const { stdout } = await execFileAsync(binary, [imagePath, "-", "-l", "eng", "--psm", String(psm), "-c", "tessedit_create_tsv=1", "-c", "tessedit_create_txt=0"], { maxBuffer: 32 * 1024 * 1024, windowsHide: true });
    tokens.push(...parseTesseractTsv(stdout, scale));
  }
  return tokens;
}

export function sampleDarkPoints(imageData, width, height, step) {
  const points = [];
  for (let y = 0; y < height; y += step) {
    const rowOffset = y * width * 4;
    for (let x = 0; x < width; x += step) {
      const offset = rowOffset + x * 4;
      if ((imageData[offset] + imageData[offset + 1] + imageData[offset + 2]) / 3 < 140) points.push([x / step, y / step]);
    }
  }
  return points;
}

export function rotateCanvas(canvas, degrees) {
  const rotated = createCanvas(canvas.width, canvas.height);
  const context = rotated.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, rotated.width, rotated.height);
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate((-degrees * Math.PI) / 180);
  context.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);
  return rotated;
}

export const gray = (data, offset) => (data[offset] + data[offset + 1] + data[offset + 2]) / 3;
export const isColored = (data, offset) => {
  const max = Math.max(data[offset], data[offset + 1], data[offset + 2]);
  const min = Math.min(data[offset], data[offset + 1], data[offset + 2]);
  return max - min > 50 && min < 240;
};

/** 컬럼 사이 점선 x(pt). 해설 쪽 점선은 연한 회색(≈200)이라 임계를 235 로 두고, 잉크 행 12% 이상·양옆 4pt 는 거의 비어야 한다. */
export function findDottedGutter(imageData, width, height, scale, pageWidth, pageHeight) {
  const x0 = Math.floor(pageWidth * 0.44 * scale);
  const x1 = Math.ceil(pageWidth * 0.56 * scale);
  const y0 = Math.floor(pageHeight * 0.12 * scale);
  const y1 = Math.min(height, Math.ceil(pageHeight * 0.9 * scale));
  const ratioAt = (x) => {
    let inked = 0;
    for (let y = y0; y < y1; y += 2) if (gray(imageData, (y * width + x) * 4) < 235) inked += 1;
    return inked / ((y1 - y0) / 2);
  };
  const side = Math.round(4 * scale);
  let best = -1;
  let bestRatio = 0;
  for (let x = x0; x < x1; x += 1) {
    const ratio = ratioAt(x);
    if (ratio < 0.12 || ratio <= bestRatio) continue;
    if (ratioAt(x - side) < 0.05 && ratioAt(x + side) < 0.05) {
      best = x;
      bestRatio = ratio;
    }
  }
  return best === -1 ? -1 : best / scale;
}

/** 컬럼 본문의 왼쪽 여백(pt) — 행마다 첫 잉크 x 를 2pt 칸으로 세어 가장 많은 칸(글줄이 시작하는 자리)의 왼쪽 끝. */
export function columnLeftMargin(imageData, width, scale, column, pageHeight) {
  // 컬럼 경계 바로 옆의 거터 점선(2px)이 「글줄 시작」으로 세이지 않게 6pt 안쪽부터 본다.
  const x0 = Math.floor((column.x0 + 6) * scale);
  const x1 = Math.ceil(column.x1 * scale);
  const bins = new Map();
  for (let y = Math.floor(pageHeight * 0.1 * scale); y < pageHeight * 0.92 * scale; y += 2) {
    const rowOffset = y * width * 4;
    for (let x = x0; x < x1; x += 1) {
      if (gray(imageData, rowOffset + x * 4) < 200) {
        const bin = Math.floor(x / scale / 2);
        bins.set(bin, (bins.get(bin) || 0) + 1);
        break;
      }
    }
  }
  // 가장 붐비는 칸(글줄 시작 자리)에서 왼쪽으로, 1/4 이상 붐비는 칸이 붙어 있는 동안 넓힌다(굵은 배지·잔여 기울기).
  // 떨어져 있는 칸(거터 점선·앞 컬럼 넘침)은 안 잇는다.
  let peakBin = -1;
  let peak = 0;
  for (const [bin, count] of bins) if (count > peak) [peakBin, peak] = [bin, count];
  if (peakBin === -1) return column.x0;
  let leftBin = peakBin;
  while ((bins.get(leftBin - 1) || 0) >= peak * 0.25 || (bins.get(leftBin - 2) || 0) >= peak * 0.25) leftBin -= (bins.get(leftBin - 1) || 0) >= peak * 0.25 ? 1 : 2;
  return leftBin * 2;
}

/**
 * 컬럼 안의 색 띠(단원 머리 초록 바·구역 라벨·빠른정답 상자 테두리)를 행 단위로 찾아 [y0,y1](pt) 목록으로 돌려준다.
 * 색 픽셀이 컬럼 폭의 35% 를 넘는 행이 띠다. 얇은 띠 둘(상자 위·아래 테두리)은 사이를 상자로 본다.
 */
export function findColorBands(imageData, width, scale, column, pageHeight) {
  const x0 = Math.floor(column.x0 * scale);
  const x1 = Math.ceil(column.x1 * scale);
  const threshold = (x1 - x0) * 0.35;
  const rows = [];
  for (let y = Math.floor(pageHeight * 0.05 * scale); y < pageHeight * 0.95 * scale; y += 1) {
    const rowOffset = y * width * 4;
    let colored = 0;
    for (let x = x0; x < x1; x += 2) if (isColored(imageData, rowOffset + x * 4)) colored += 1;
    rows.push(colored * 2 >= threshold);
  }
  const bands = [];
  const base = Math.floor(pageHeight * 0.05 * scale);
  let start = -1;
  rows.forEach((on, index) => {
    if (on && start === -1) start = index;
    if (!on && start !== -1) {
      bands.push({ y0: (base + start) / scale, y1: (base + index) / scale });
      start = -1;
    }
  });
  if (start !== -1) bands.push({ y0: (base + start) / scale, y1: (base + rows.length) / scale });
  // 얇은 띠(테두리, 3pt 이하)가 연달아 오면 그 사이가 빠른정답 상자다.
  const boxes = [];
  for (let index = 0; index < bands.length - 1; index += 1) {
    const top = bands[index];
    const bottom = bands[index + 1];
    if (top.y1 - top.y0 <= 3 && bottom.y1 - bottom.y0 <= 3 && bottom.y0 - top.y1 < 90) {
      boxes.push({ y0: top.y0, y1: bottom.y1 });
      index += 1;
    }
  }
  return { bands, boxes };
}


/** 견본 이미지를 회색 배열로 읽는다. */
export async function loadTemplate(filePath) {
  try {
    const image = await loadImage(await readFile(filePath));
    const canvas = createCanvas(image.width, image.height);
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);
    const data = context.getImageData(0, 0, image.width, image.height).data;
    const values = new Float32Array(image.width * image.height);
    for (let index = 0; index < values.length; index += 1) values[index] = gray(data, index * 4);
    return { width: image.width, height: image.height, values };
  } catch {
    return null;
  }
}

/** 후보 상자(x,y,w,h px)를 견본 크기로 늘여 비교한 정규화 상관(−1~1). 견본과 후보를 각각 평균 0 으로 맞춘다. */
export function templateMatch(imageData, width, x, y, w, h, template) {
  const sample = new Float32Array(template.width * template.height);
  for (let ty = 0; ty < template.height; ty += 1) {
    const sy = y + Math.floor((ty / template.height) * h);
    for (let tx = 0; tx < template.width; tx += 1) {
      const sx = x + Math.floor((tx / template.width) * w);
      sample[ty * template.width + tx] = gray(imageData, (sy * width + sx) * 4);
    }
  }
  const mean = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
  const meanA = mean(sample);
  const meanB = mean(template.values);
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let index = 0; index < sample.length; index += 1) {
    const a = sample[index] - meanA;
    const b = template.values[index] - meanB;
    dot += a * b;
    normA += a * a;
    normB += b * b;
  }
  return normA && normB ? dot / Math.sqrt(normA * normB) : 0;
}

/** 상자 안 검정 잉크의 세로 범위(pt). 색 띠 안은 무시한다. */
export function inkRange(imageData, width, scale, box, bands) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale));
  const x1 = Math.ceil(box.x1 * scale);
  const y0 = Math.max(0, Math.floor(box.y0 * scale));
  const y1 = Math.ceil(box.y1 * scale);
  let first = -1;
  let last = -1;
  for (let y = y0; y < y1; y += 1) {
    const pt = y / scale;
    if (bands.some((band) => pt >= band.y0 - 1 && pt <= band.y1 + 1)) continue;
    const rowOffset = y * width * 4;
    let dark = 0;
    for (let x = x0; x < x1; x += 2) if (gray(imageData, rowOffset + x * 4) < 190 && (dark += 1) >= 2) break;
    if (dark < 2) continue;
    if (first === -1) first = y;
    last = y;
  }
  return first === -1 ? null : { top: first / scale, bottom: (last + 1) / scale };
}

export function isInk(data, offset) {
  return (data[offset] + data[offset + 1] + data[offset + 2]) / 3 < 200;
}

/** 상자 안 색 잉크(무채색 아님)의 세로 덩어리 목록(pt · { y0, h, density }). 한 행에 색 픽셀이 2개 이상이면 색 행이고, 1.5pt 안 끊김은 잇는다. */
export function coloredRuns(imageData, width, scale, box) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale));
  const x1 = Math.ceil(box.x1 * scale);
  const y0 = Math.max(0, Math.floor(box.y0 * scale));
  const y1 = Math.ceil(box.y1 * scale);
  const gap = Math.round(1.5 * scale);
  const runs = [];
  let start = -1;
  let last = -1;
  let filled = 0;
  for (let y = y0; y <= y1; y += 1) {
    let colored = 0;
    if (y < y1) {
      const rowOffset = y * width * 4;
      for (let x = x0; x < x1; x += 1) if (isColored(imageData, rowOffset + x * 4)) colored += 1;
    }
    if (colored >= 2) {
      if (start === -1) { start = y; filled = 0; }
      last = y;
      filled += colored;
      continue;
    }
    if (start !== -1 && y - last > gap) {
      // density: 덩어리 상자 안 색 픽셀 비율 — 색 글자(숫자)는 0.2~0.5, 색 바탕 라벨(「풀이」「전략」)은 0.6 이상.
      runs.push({ y0: start / scale, h: (last + 1 - start) / scale, density: filled / ((last + 1 - start) * (x1 - x0)) });
      start = -1;
    }
  }
  return runs;
}

/**
 * 코드 줄 띠 안에서 가장 왼쪽 색 덩어리(번호 배지 「01」·「유제 3」)의 왼쪽 x(pt).
 * 띠 위·아래로 이어지는 세로 색선(예제 풀이 막대·상자 테두리)은 배지가 아니므로 건너뛴다.
 */
export function makeBadgeFinder(imageData, width, height, scale) {
  return (band) => {
    const x0 = Math.max(0, Math.floor(band.x0 * scale));
    const x1 = Math.min(width, Math.ceil(band.x1 * scale));
    const y0 = Math.max(0, Math.floor(band.y0 * scale));
    const y1 = Math.min(height, Math.ceil(band.y1 * scale));
    const probe = Math.round(6 * scale);
    const columnHits = new Int32Array(x1 - x0);
    for (let y = y0; y < y1; y += 1) {
      const rowOffset = y * width * 4;
      for (let x = x0; x < x1; x += 1) {
        if (isColored(imageData, rowOffset + x * 4)) columnHits[x - x0] += 1;
      }
    }
    const minRun = Math.round(1.2 * scale);
    // 「01」의 0 은 연한 회색으로 찍혀 색으로는 안 잡힌다 — 색 덩어리 왼쪽으로 잉크가 3pt 안에 이어지면 붙인다.
    const maxGap = Math.round(3 * scale);
    const maxExtend = Math.round(14 * scale);
    const columnInk = (x) => {
      let count = 0;
      for (let y = y0; y < y1; y += 1) {
        const offset = (y * width + x) * 4;
        if ((imageData[offset] + imageData[offset + 1] + imageData[offset + 2]) / 3 < 225 && (count += 1) >= 2) return true;
      }
      return false;
    };
    const extendLeftAcrossInk = (startX) => {
      let left = startX;
      let gap = 0;
      for (let x = startX - 1; x >= x0 && startX - x <= maxExtend; x -= 1) {
        if (columnInk(x)) {
          left = x;
          gap = 0;
        } else if ((gap += 1) > maxGap) {
          break;
        }
      }
      return left;
    };
    let run = 0;
    for (let x = 0; x < columnHits.length; x += 1) {
      if (columnHits[x] >= 2) {
        run += 1;
        if (run >= minRun) {
          const startX = x0 + x - run + 1;
          // 띠 바깥(위·아래)에서도 같은 x 에 색이 이어지면 세로선이다.
          let outside = 0;
          for (let dy = 1; dy <= probe; dy += 1) {
            const above = y0 - dy;
            const below = y1 + dy;
            if (above >= 0 && isColored(imageData, (above * width + startX + Math.floor(run / 2)) * 4)) outside += 1;
            if (below < height && isColored(imageData, (below * width + startX + Math.floor(run / 2)) * 4)) outside += 1;
          }
          if (outside >= probe) {
            run = 0;
            continue;
          }
          return extendLeftAcrossInk(startX) / scale;
        }
      } else {
        run = 0;
      }
    }
    return null;
  };
}

/** 띠 안 색 픽셀의 평균 색 [r,g,b]. 없으면 null. */
export function measureBandColor(imageData, width, height, scale, band) {
  const x0 = Math.max(0, Math.floor(band.x0 * scale));
  const x1 = Math.min(width, Math.ceil(band.x1 * scale));
  const y0 = Math.max(0, Math.floor(band.y0 * scale));
  const y1 = Math.min(height, Math.ceil(band.y1 * scale));
  let count = 0;
  const sum = [0, 0, 0];
  for (let y = y0; y < y1; y += 1) {
    for (let x = x0; x < x1; x += 1) {
      const offset = (y * width + x) * 4;
      if (!isColored(imageData, offset)) continue;
      count += 1;
      sum[0] += imageData[offset];
      sum[1] += imageData[offset + 1];
      sum[2] += imageData[offset + 2];
    }
  }
  return count >= 20 ? sum.map((value) => Math.round(value / count)) : null;
}

/**
 * 상자 안에서 코드 줄 아래 내용의 잉크 하단(pt). 내용이 있은 뒤 gapPt 이상 빈 줄이 오면 거기서 끝난다
 * (유제 다음에 오는 다음 예제 상자·유형 헤더를 안 물게). 그림 안 빈 틈·선택지 줄 간격은 gapPt 보다 좁다.
 */
export function makeBottomFinder(imageData, width, height, scale, { gapPt = 22 } = {}) {
  return (box) => {
    const x0 = Math.max(0, Math.floor(box.x0 * scale));
    const x1 = Math.min(width, Math.ceil(box.x1 * scale));
    const y0 = Math.max(0, Math.floor(box.y0 * scale));
    const y1 = Math.min(height, Math.ceil(box.y1 * scale));
    const gap = Math.round(gapPt * scale);
    let last = -1;
    let blank = 0;
    for (let y = y0; y < y1; y += 1) {
      const rowOffset = y * width * 4;
      let dark = 0;
      for (let x = x0; x < x1; x += 2) {
        if (isInk(imageData, rowOffset + x * 4) && (dark += 1) >= 2) break;
      }
      if (dark >= 2) {
        last = y;
        blank = 0;
      } else if (last !== -1 && (blank += 1) > gap) {
        break;
      }
    }
    return last === -1 ? null : (last + 1) / scale + 4;
  };
}

/** 쪽 본문의 왼쪽 여백 — 본문 띠(15%~85%)에서 잉크가 시작하는 x 의 하위 5% 분위. */
export function measureBodyLeft(imageData, width, height, scale) {
  const starts = [];
  for (let y = Math.floor(height * 0.15); y < height * 0.85; y += 4) {
    const rowOffset = y * width * 4;
    for (let x = 0; x < width; x += 1) {
      if (isInk(imageData, rowOffset + x * 4)) {
        starts.push(x);
        break;
      }
    }
  }
  starts.sort((a, b) => a - b);
  return starts.length ? starts[Math.floor(starts.length * 0.05)] / scale : 40;
}


export async function runTesseract(binary, imagePath, { lang = "eng", psm = 11, tessdataDir = null, output = "tsv" }) {
  const args = [imagePath, "-", "-l", lang, "--psm", String(psm)];
  if (tessdataDir) args.push("--tessdata-dir", tessdataDir);
  // 「tsv」 설정 파일은 tessdata 폴더의 configs/ 에서 찾으므로(한글 모델을 둔 사용자 폴더에는 없다) 매개변수로 켠다.
  if (output === "tsv") args.push("-c", "tessedit_create_tsv=1", "-c", "tessedit_create_txt=0");
  const { stdout } = await execFileAsync(binary, args, { maxBuffer: 32 * 1024 * 1024, windowsHide: true });
  return stdout;
}

/** 어두운 픽셀을 1/step 로 표본해 기울기를 잰다. */
