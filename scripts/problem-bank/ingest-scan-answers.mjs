#!/usr/bin/env node
// 스캔 교재(EBS 올림포스류)의 책 뒤 「정답과 풀이」 → 문항별 해설·빠른정답 이미지. 비전 AI 호출 0, 로컬 tesseract.
//
// 사용:
//   node scripts/problem-bank/ingest-scan-answers.mjs --pdf "C:/…/올림포스 공통수학1.pdf" --out output/problem-bank/olympos-cm1 [--pages 118-176]
//
// --out 은 ingest-scan-pdf.mjs 의 출력 폴더(manifest.json 이 있어야 한다). 결과는 RPM 의 ingest-answers 와 같은
// manifest-answers.json + answers/ + solutions/ 라 교재관리 「패키지 등록」이 한 폴더로 받는다.
//
// 해설 쪽에는 문항 코드가 없고 구역(유제·유형 확인·서술형…)마다 번호가 01 부터 다시 시작한다. 대신 해설의 순서가
// 본문 순서와 같으므로, 풀이 시작 배지(컬럼 왼쪽의 굵은 숫자)를 읽는 순서대로 문항 코드에 대응시키고 OCR 로 읽은
// 구역 내 번호를 문항의 type_label 순번과 대조한다(어긋나면 앞뒤 4문항 안에서 맞는 번호를 찾고, 없으면 flagged).
// 각 풀이 끝의 「답」 아이콘(작은 검정 사각형) 줄을 빠른정답으로 오린다.

import { execFile } from "node:child_process";
import { access, mkdir, readdir, readFile, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import {
  alignSegmentsToItems,
  estimateSkewDegrees,
  parseTesseractTsv,
  rotatePoint
} from "../../src/domains/problems/scanPdfSegmenter.js";
import {
  cropToCanvas,
  drawQa,
  inkBand,
  inkRightEdge,
  parseArgs,
  parsePageRange,
  pdfjs,
  renderPage,
  writeStacked
} from "./pdfTools.mjs";
import { createCanvas, loadImage } from "@napi-rs/canvas";

const execFileAsync = promisify(execFile);
const INGEST_VERSION = "scan-answers-1.0";
const TESSERACT_CANDIDATES = [process.env.TESSERACT_PATH, "C:/Program Files/Tesseract-OCR/tesseract.exe", "tesseract"].filter(Boolean);

async function findTesseract() {
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

async function findKoreanTessdata() {
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
async function readHeaderKorean(binary, tessdataDir, canvas, renderScale, pageHeight, filePath) {
  const strip = createCanvas(canvas.width, Math.ceil(pageHeight * 0.24 * renderScale));
  strip.getContext("2d").drawImage(canvas, 0, Math.floor(pageHeight * 0.06 * renderScale), canvas.width, strip.height, 0, 0, canvas.width, strip.height);
  await writeFile(filePath, await strip.encode("png"));
  const { stdout } = await execFileAsync(binary, [filePath, "-", "-l", "kor", "--psm", "6", "--tessdata-dir", tessdataDir], { maxBuffer: 8 * 1024 * 1024, windowsHide: true });
  return stdout;
}

async function ocrTokens(binary, imagePath, scale) {
  const tokens = [];
  for (const psm of [11, 6]) {
    const { stdout } = await execFileAsync(binary, [imagePath, "-", "-l", "eng", "--psm", String(psm), "-c", "tessedit_create_tsv=1", "-c", "tessedit_create_txt=0"], { maxBuffer: 32 * 1024 * 1024, windowsHide: true });
    tokens.push(...parseTesseractTsv(stdout, scale));
  }
  return tokens;
}

function sampleDarkPoints(imageData, width, height, step) {
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

function rotateCanvas(canvas, degrees) {
  const rotated = createCanvas(canvas.width, canvas.height);
  const context = rotated.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, rotated.width, rotated.height);
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate((-degrees * Math.PI) / 180);
  context.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);
  return rotated;
}

const gray = (data, offset) => (data[offset] + data[offset + 1] + data[offset + 2]) / 3;
const isColored = (data, offset) => {
  const max = Math.max(data[offset], data[offset + 1], data[offset + 2]);
  const min = Math.min(data[offset], data[offset + 1], data[offset + 2]);
  return max - min > 50 && min < 240;
};

/** 컬럼 사이 점선 x(pt). 해설 쪽 점선은 연한 회색(≈200)이라 임계를 235 로 두고, 잉크 행 12% 이상·양옆 4pt 는 거의 비어야 한다. */
function findDottedGutter(imageData, width, height, scale, pageWidth, pageHeight) {
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
function columnLeftMargin(imageData, width, scale, column, pageHeight) {
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
function findColorBands(imageData, width, scale, column, pageHeight) {
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

/**
 * 「답」 아이콘 — 5~10pt 검정 정사각 틀 안에 흰 글자가 든 모양. 위 테두리(검정 런)와 같은 x·같은 폭의 아래 테두리가
 * 5~10pt 아래에 있고, 왼쪽·오른쪽 세로 테두리가 60% 이상 검고, 안쪽 검정 비율이 40% 이상이면 아이콘이다.
 * 글자·분수 가로줄·표 선은 네 변이 동시에 닫히지 않는다.
 */
function findAnswerIcons(imageData, width, scale, box, template = null) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale));
  const x1 = Math.ceil(box.x1 * scale);
  const y0 = Math.max(0, Math.floor(box.y0 * scale));
  const y1 = Math.ceil(box.y1 * scale);
  const minSize = Math.round(5 * scale);
  const maxSize = Math.round(10 * scale);
  // 초록 「참고」 라벨처럼 색 있는 상자는 아이콘이 아니다 — 검정(무채색)만 센다.
  const dark = (x, y) => y >= 0 && y < y1 && x >= 0 && x < x1 && gray(imageData, (y * width + x) * 4) < 130 && !isColored(imageData, (y * width + x) * 4);
  const runsAt = (y) => {
    const runs = [];
    let run = 0;
    for (let x = x0; x <= x1; x += 1) {
      if (x < x1 && dark(x, y)) {
        run += 1;
      } else {
        if (run >= minSize && run <= maxSize) runs.push({ x0: x - run, x1: x });
        run = 0;
      }
    }
    return runs;
  };
  const icons = [];
  // 「답」 줄은 컬럼 오른쪽에 붙는다. 왼쪽 절반(채점 기준표의 ❶❷❸·본문 굵은 글자)은 보지 않는다.
  const searchX0 = x0 + Math.round((x1 - x0) * 0.4);
  for (let y = y0; y < y1; y += 1) {
    for (const top of runsAt(y)) {
      if (top.x0 < searchX0) continue;
      if (icons.some((icon) => y >= icon.py0 - 1 && y <= icon.py1 + 3 && top.x0 >= icon.px0 - 3 && top.x1 <= icon.px1 + 3)) continue;
      // 틀 아래 테두리가 2~3px 두꺼우므로 조건을 만족하는 가장 큰 h 를 고른다(작은 h 로 잡으면 아래 테두리 행이 또 아이콘이 된다).
      for (let h = maxSize; h >= minSize; h -= 1) {
        if (y + h >= y1) continue;
        const bottom = runsAt(y + h).find((run) => Math.abs(run.x0 - top.x0) <= 2 && Math.abs(run.x1 - top.x1) <= 2);
        if (!bottom) continue;
        const w = top.x1 - top.x0;
        if (Math.abs(w - h) > Math.round(3 * scale)) continue;
        let leftDark = 0;
        let rightDark = 0;
        let filled = 0;
        for (let yy = y; yy <= y + h; yy += 1) {
          if (dark(top.x0, yy) || dark(top.x0 + 1, yy)) leftDark += 1;
          if (dark(top.x1 - 1, yy) || dark(top.x1 - 2, yy)) rightDark += 1;
          for (let xx = top.x0; xx < top.x1; xx += 1) if (dark(xx, yy)) filled += 1;
        }
        // 「답」 아이콘은 검정 바탕(전체 55% 이상 검정)이고 네 변이 거의 다 검다. 「비」「율」 같은 네모난 글자는 속이 희다.
        if (leftDark < h * 0.6 || rightDark < h * 0.6 || filled < w * h * 0.4) continue;
        // 채점 기준표의 ❶❷❸(속이 찬 원)은 네 귀퉁이가 희다. 「답」 상자는 귀퉁이가 검다(둥근 모서리라 1px 안쪽에서 본다).
        // 굵은 「0」 글자도 네 변이 닫힌 틀처럼 보이지만 속이 비어 있다. 「답」 아이콘은 검정 바탕에 흰 글자라 안쪽(25% 안)도 절반 가까이 검다.
        const innerX0 = top.x0 + Math.round(w * 0.25);
        const innerX1 = top.x1 - Math.round(w * 0.25);
        const innerY0 = y + Math.round(h * 0.25);
        const innerY1 = y + h - Math.round(h * 0.25);
        let innerDark = 0;
        let innerTotal = 0;
        for (let yy = innerY0; yy <= innerY1; yy += 1) for (let xx = innerX0; xx < innerX1; xx += 1) {
          innerTotal += 1;
          if (dark(xx, yy)) innerDark += 1;
        }
        // 표 칸의 회색 채움처럼 속이 통째로 검은 것(흰 글자 없음)도 아이콘이 아니다.
        if (innerTotal === 0 || innerDark < innerTotal * 0.3 || innerDark > innerTotal * 0.95) continue;
        const inset = Math.max(1, Math.round(scale * 0.6));
        const corners = [[top.x0 + inset, y + inset], [top.x1 - 1 - inset, y + inset], [top.x0 + inset, y + h - inset], [top.x1 - 1 - inset, y + h - inset]];
        if (corners.filter(([cx, cy]) => dark(cx, cy)).length < 3) continue;
        // 마지막으로 「답」 아이콘 견본(templates/olympos-answer-icon.png)과 정규화 상관이 0.5 이상이어야 한다 —
        // 검정 틀에 흰 글자라는 모양 규칙만으로는 「율」 같은 네모난 글자·표 칸을 다 못 거른다.
        if (template && templateMatch(imageData, width, top.x0, y, w, h + 1, template) < 0.5) continue;
        icons.push({ x: top.x0 / scale, y: (y + h / 2) / scale, w: w / scale, h: h / scale, px0: top.x0, px1: top.x1, py0: y, py1: y + h });
        break;
      }
    }
  }
  return icons.map(({ px0, px1, py0, py1, ...icon }) => icon);
}

/** 견본 이미지를 회색 배열로 읽는다. */
async function loadTemplate(filePath) {
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
function templateMatch(imageData, width, x, y, w, h, template) {
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
function inkRange(imageData, width, scale, box, bands) {
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

function localNumberOf(item) {
  const match = String(item.type_label ?? "").match(/(\d{1,2})\s*$/);
  return match ? Number(match[1]) : null;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <교재.pdf> --out <문항 패키지 폴더> [--pages a-b] [--dpi 220]");
    process.exit(2);
  }
  const outDir = path.resolve(args.out);
  const itemManifest = JSON.parse(await readFile(path.join(outDir, "manifest.json"), "utf8"));
  const bookId = String(itemManifest.book.book_id);
  // 수행평가는 책 뒤 해설에 없다(빠른정답만). 본문 순서 = 해설 순서인 문항만 대응 대상이다.
  const items = itemManifest.items
    .filter((item) => !(item.tags ?? []).includes("수행평가"))
    .sort((a, b) => a.number_sort - b.number_sort)
    .map((item) => ({ number: item.number_label, local: localNumberOf(item), section: (item.tags ?? [])[0] ?? "", unit: item.unit_index }));
  const dpi = Number(args.dpi) || 220;
  const renderScale = dpi / 72;
  const tesseract = await findTesseract();
  const koreanTessdata = await findKoreanTessdata();
  const answerTemplate = await loadTemplate(new URL("./templates/olympos-answer-icon.png", import.meta.url));
  if (!answerTemplate) console.log("「답」 아이콘 견본이 없어 모양 규칙만으로 답 줄을 찾습니다.");
  // 지난 실행의 파일이 남아 있으면 이번에 대응이 안 된 번호에 옛 이미지가 붙는다 — 정답·해설 출력은 매번 비우고 시작한다.
  await rm(path.join(outDir, "answers"), { recursive: true, force: true });
  await rm(path.join(outDir, "solutions"), { recursive: true, force: true });
  await Promise.all(["answers", "solutions", "qa"].map((dir) => mkdir(path.join(outDir, dir), { recursive: true })));
  for (const file of await readdir(path.join(outDir, "qa"))) if (file.startsWith("solution-")) await rm(path.join(outDir, "qa", file), { force: true });
  const tmpDir = path.join(os.tmpdir(), `problem-bank-scan-answers-${bookId}`);
  await mkdir(tmpDir, { recursive: true });

  const pdfBytes = await readFile(args.pdf);
  const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
  const lastItemPage = Math.max(...itemManifest.items.map((item) => item.pdf_page));
  const [fromPage, toPage] = args.pages ? parsePageRange(args.pages, doc.numPages) : [lastItemPage + 1, doc.numPages];
  console.log(`book_id ${bookId} · 문항 ${items.length}개(수행평가 제외) · 해설 쪽 ${fromPage}~${toPage}`);

  // 1) 쪽마다 풀이 조각을 모은다(아직 문항에 대응시키지 않는다).
  const segments = [];
  let pending = null;
  let started = false;
  const encode = (crop) => crop.encode("jpeg", 88);

  const answerCrops = (canvas, imageData, box, qaBoxes) => {
    const crops = [];
    for (const icon of findAnswerIcons(imageData, canvas.width, renderScale, box, answerTemplate)) {
      // 답 줄 띠: 아이콘 중심에서 위아래 9pt 안(분수 한 층)만. 윗줄(빈 틈 1.2pt 이상)로 번지지 않는다.
      const band = inkBand(imageData, canvas.width, renderScale, { x0: icon.x - 1.5, x1: box.x1 }, icon.y, { maxUp: 9, maxDown: 9, gapPt: 1.2 });
      const figure = band && (band.clippedTop || band.clippedBottom);
      const rough = {
        x0: icon.x - 1.5,
        x1: box.x1,
        y0: figure ? Math.min(band.top, icon.y - icon.h) - 2 : band ? band.top - 1.5 : icon.y - 5,
        // 답이 그래프·행렬이면 아래로 넓히되 40pt 까지만(표를 통째로 물지 않게).
        y1: figure ? Math.min(box.y1, icon.y + 40) : band ? band.bottom + 1.5 : icon.y + 5
      };
      const right = inkRightEdge(imageData, canvas.width, renderScale, rough);
      // 아이콘 오른쪽에 답 잉크가 없으면(빈 띠) 버린다.
      if (right <= icon.x + icon.w + 2) continue;
      const answerBox = { ...rough, x1: Math.min(box.x1, right + 2) };
      crops.push(encode(cropToCanvas(canvas, renderScale, answerBox)));
      qaBoxes.push({ box: answerBox, color: "#c026d3" });
    }
    return crops;
  };

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const pageWidth = viewport.width;
    const pageHeight = viewport.height;
    let { canvas, context } = await renderPage(page, renderScale);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // 「정답과 풀이」 머리글이 처음 나오는 쪽부터 해설이다(그 앞의 수행평가 뒷면·MEMO·표지는 건너뛴다).
    if (!started && koreanTessdata && !args.pages) {
      const header = await readHeaderKorean(tesseract, koreanTessdata, canvas, renderScale, pageHeight, path.join(tmpDir, `p${pageNumber}-head.png`));
      if (/정답\s*과\s*풀이/.test(header)) started = true;
      else {
        console.log(`p${pageNumber}: 해설 시작 전 — 건너뜀`);
        page.cleanup();
        continue;
      }
    }

    const pagePng = path.join(tmpDir, `p${pageNumber}.png`);
    await writeFile(pagePng, await canvas.encode("png"));
    let tokens = await ocrTokens(tesseract, pagePng, renderScale);
    const skew = estimateSkewDegrees(sampleDarkPoints(imageData, canvas.width, canvas.height, 4), Math.ceil(canvas.height / 4));
    if (Math.abs(skew) >= 0.15) {
      canvas = rotateCanvas(canvas, skew);
      context = canvas.getContext("2d");
      imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
      tokens = tokens.map((token) => {
        const center = rotatePoint(token.x + token.w / 2, token.y + token.h / 2, skew, pageWidth / 2, pageHeight / 2);
        return { ...token, x: center.x - token.w / 2, y: center.y - token.h / 2 };
      });
    }

    // 문항 코드(25445-0017)가 있는 쪽은 본문(수행평가 등)이다 — 해설이 아니므로 건너뛴다.
    if (tokens.some((token) => /^\d{5}-\d{4}$/.test(token.text) && token.conf >= 60)) {
      console.log(`p${pageNumber}: 본문 쪽(문항 코드 있음) — 건너뜀`);
      page.cleanup();
      continue;
    }
    // 해설 쪽은 늘 가운데 2단이다. 점선이 연해 못 찾으면 쪽 가운데를 쓴다. 빠른정답표(3단)·MEMO 는 컬럼 안 번호 줄
    // 모양(한 줄에 번호 여럿)·배지 없음으로 걸러진다.
    const dotted = findDottedGutter(imageData, canvas.width, canvas.height, renderScale, pageWidth, pageHeight);
    const gutterX = dotted > 0 ? dotted : pageWidth * 0.5;
    const bodyTop = pageHeight * 0.07;
    const bodyBottom = pageHeight * 0.935;
    const columns = [
      { index: 0, x0: pageWidth * 0.05, x1: gutterX - 3 },
      { index: 1, x0: gutterX + 3, x1: pageWidth * 0.95 }
    ];
    const qaBoxes = [];
    let pageCount = 0;

    for (const column of columns) {
      const left = columnLeftMargin(imageData, canvas.width, renderScale, column, pageHeight);
      // 컬럼 왼쪽 띠(여백 ~ +48pt)를 2배로 키워 한 번 더 읽는다 — 220dpi 에서 놓친 굵은 번호(01·12)를 줍는다.
      const stripX0 = Math.max(0, column.x0);
      const stripW = 48;
      const strip = createCanvas(Math.round(stripW * renderScale * 2), Math.round((bodyBottom - bodyTop) * renderScale * 2));
      strip.getContext("2d").drawImage(canvas, Math.round(stripX0 * renderScale), Math.round(bodyTop * renderScale), Math.round(stripW * renderScale), Math.round((bodyBottom - bodyTop) * renderScale), 0, 0, strip.width, strip.height);
      const stripPng = path.join(tmpDir, `p${pageNumber}-c${column.index}.png`);
      await writeFile(stripPng, await strip.encode("png"));
      const stripTokens = (await ocrTokens(tesseract, stripPng, renderScale * 2)).map((token) => ({ ...token, x: token.x + stripX0, y: token.y + bodyTop, fromStrip: true }));
      for (const token of stripTokens) {
        if (!/^[0O]?\d{1,2}$/.test(token.text) || token.conf < 40) continue;
        const known = tokens.find((other) => /^[0O]?\d{1,2}$/.test(other.text) && Math.abs(other.x - token.x) < 4 && Math.abs(other.y - token.y) < 4);
        if (!known) tokens.push(token);
      }
      const columnBox = { x0: left - 3, x1: column.x1 };
      const { bands, boxes } = findColorBands(imageData, canvas.width, renderScale, { x0: left, x1: column.x1 }, pageHeight);
      const insideBox = (y) => boxes.some((box) => y >= box.y0 - 1 && y <= box.y1 + 1);
      const insideBand = (y) => bands.some((band) => y >= band.y0 - 1 && y <= band.y1 + 1);
      const numberTokens = tokens.filter((token) => /^[0O]?\d{1,2}$/.test(token.text) && token.conf >= 40 && token.h >= 6.5 && token.h <= 12.5 && token.x >= column.x0 && token.x < column.x1);
      // 빠른정답 표의 줄(「01 ① 02 ② …」)은 한 줄에 번호가 여럿이다. 그런 줄의 번호는 풀이 시작이 아니다.
      // 같은 줄의 다른 번호도 굵은 크기(7.5pt 이상)·신뢰도 70 이상·15~150pt 오른쪽이어야 한다(한글 풀이 글에서 튀는 숫자 오독과 구분).
      // 빠른정답 줄에는 번호가 셋 이상 늘어선다(「01 ① 02 ② 03 ⑤」). 풀이 첫 줄에 숫자 하나가 튀는 것과 구분한다.
      const sharesLine = (token) => numberTokens.filter((other) => other !== token && other.h >= 7.5 && other.conf >= 70
        && Math.abs(other.y + other.h / 2 - (token.y + token.h / 2)) < 4 && other.x - (token.x + token.w) >= 15 && other.x - (token.x + token.w) <= 300).length >= 2;
      // 풀이 시작 배지 오른쪽에는 같은 줄에 풀이 글이 이어진다(머리글의 외딴 숫자와 구분).
      const hasTextRight = (token) => Boolean(inkRange(imageData, canvas.width, renderScale, { x0: token.x + token.w + 2, x1: Math.min(column.x1, token.x + token.w + 70), y0: token.y - 2, y1: token.y + token.h + 2 }, []));
      if (process.env.DEBUG_BADGES === String(pageNumber)) {
        for (const token of tokens.filter((token) => /\d/.test(token.text) && token.x >= column.x0 && token.x <= left + 12 && token.h >= 6)) {
          console.log(`  [${column.index}] ${token.text}@(${token.x.toFixed(0)},${token.y.toFixed(0)} h${token.h.toFixed(1)}) left=${left.toFixed(0)} box=${insideBox(token.y + token.h / 2)} band=${insideBand(token.y + token.h / 2)} shares=${sharesLine(token)} textRight=${hasTextRight(token)}`);
        }
        console.log(`  bands=${JSON.stringify(bands.map((band) => [Math.round(band.y0), Math.round(band.y1)]))} boxes=${JSON.stringify(boxes.map((box) => [Math.round(box.y0), Math.round(box.y1)]))}`);
      }
      // 배지 x 는 잉크 여백 추정 대신 굵은 번호 후보 자체의 가장 왼쪽 x 로 잡는다(들여쓴 「=…」 줄이 많은 쪽에서
      // 여백 추정이 어긋나던 것). 후보가 컬럼 안쪽 6~60pt 에 있어야 한다.
      const candidates = numberTokens
        .filter((token) => token.h >= 9.5 && token.x >= column.x0 + 6 && token.x <= column.x0 + 60 && token.y > bodyTop && token.y + token.h < bodyBottom)
        .filter((token) => !insideBox(token.y + token.h / 2) && !insideBand(token.y + token.h / 2) && !sharesLine(token) && hasTextRight(token));
      const badgeLeft = candidates.length ? Math.min(...candidates.map((token) => token.x)) : left;
      const badges = candidates
        .filter((token) => token.x <= badgeLeft + 8)
        .sort((a, b) => a.y - b.y)
        .filter((token, index, list) => index === 0 || token.y - list[index - 1].y > 6);
      for (const box of boxes) qaBoxes.push({ box: { x0: columnBox.x0, x1: columnBox.x1, y0: box.y0, y1: box.y1 }, color: "#9ca3af" });
      if (numberTokens.length >= 12 && numberTokens.filter(sharesLine).length >= numberTokens.length * 0.6) {
        console.log(`p${pageNumber} 컬럼 ${column.index + 1}: 빠른정답표 — 건너뜀`);
        continue;
      }

      // 컬럼 맨 위 이어지는 풀이: 첫 배지 위(색 띠 밖)에 검정 잉크가 6pt 이상 있으면 직전 풀이에 붙인다.
      const firstBadge = badges[0];
      const continuationLimit = firstBadge ? firstBadge.y - 3 : bodyBottom;
      const aboveBands = [...bands, ...boxes];
      if (pending) {
        const above = inkRange(imageData, canvas.width, renderScale, { ...columnBox, y0: bodyTop, y1: continuationLimit }, aboveBands);
        // 색 띠(새 구역·단원 머리) 앞까지만 이어진다.
        const firstBandTop = Math.min(continuationLimit, ...aboveBands.filter((band) => band.y0 > bodyTop).map((band) => band.y0));
        if (above && above.bottom - above.top >= 6 && above.top < firstBandTop) {
          const box = { ...columnBox, y0: Math.max(bodyTop, above.top - 3), y1: Math.min(firstBandTop - 2, above.bottom + 4) };
          pending.parts.push(encode(cropToCanvas(canvas, renderScale, box)));
          pending.answerParts.push(...answerCrops(canvas, imageData, box, qaBoxes));
          pending.continued_on = pageNumber;
          qaBoxes.push({ label: "+", box, color: "#b45309" });
        }
      }

      for (let index = 0; index < badges.length; index += 1) {
        const badge = badges[index];
        const next = badges[index + 1];
        // 아래 한계: 같은 컬럼 다음 배지, 또는 다음 색 띠(새 구역 상자·단원 머리), 또는 컬럼 바닥.
        const nextBand = Math.min(bodyBottom, ...aboveBands.filter((band) => band.y0 > badge.y + badge.h).map((band) => band.y0 - 2));
        const limit = Math.min(next ? next.y - 3 : bodyBottom, nextBand);
        const ink = inkRange(imageData, canvas.width, renderScale, { ...columnBox, y0: badge.y - 2, y1: limit }, []);
        const box = { ...columnBox, y0: Math.max(bodyTop, badge.y - 3), y1: ink ? Math.min(limit, ink.bottom + 4) : limit };
        const ocrNumber = Number(badge.text.replace(/^O/, "0"));
        pending = {
          ocrNumber: Number.isFinite(ocrNumber) ? ocrNumber : null,
          pdf_page: pageNumber,
          column: column.index,
          bbox_normalized: [box.x0 / pageWidth, box.y0 / pageHeight, box.x1 / pageWidth, box.y1 / pageHeight].map((value) => Number(value.toFixed(5))),
          parts: [encode(cropToCanvas(canvas, renderScale, box))],
          answerParts: answerCrops(canvas, imageData, box, qaBoxes),
          flags: ink ? [] : ["no_ink"]
        };
        segments.push(pending);
        pageCount += 1;
        qaBoxes.push({ label: badge.text, box, color: "#176e59" });
      }
    }
    await drawQa(canvas, pageWidth, pageHeight, qaBoxes, path.join(outDir, "qa", `solution-p${String(pageNumber).padStart(3, "0")}.jpg`));
    console.log(`해설 p${pageNumber}: 풀이 ${pageCount}개${dotted > 0 ? "" : " · 점선 없음(가운데 기준)"}${skew ? ` · 기울기 ${skew}°` : ""}`);
    page.cleanup();
  }
  await rm(tmpDir, { recursive: true, force: true });

  // 2) 풀이 조각 순서 ↔ 문항 순서 정렬(편집 거리). 읽은 구역 내 번호가 문항의 순번과 같으면 0, 못 읽었으면 0.3,
  //    다르면 1, 조각·문항을 건너뛰면 1.5. 전체 최소 비용 경로가 대응이다.
  // 오독(비용 2)보다 군더더기 조각 버리기(1.5)가 싸야 머리글 숫자 같은 조각이 문항을 밀어내지 않는다.
  const alignment = alignSegmentsToItems(segments.map((segment) => segment.ocrNumber), items.map((item) => item.local), { mismatchCost: 2 });
  const solutions = [];
  const answers = [];
  const mismatches = [];
  const unmatchedSegments = [];
  for (const [segmentIndex, itemIndex] of alignment.pairs) {
    const segment = segments[segmentIndex];
    if (itemIndex === null) {
      unmatchedSegments.push({ pdf_page: segment.pdf_page, read: segment.ocrNumber });
      continue;
    }
    const item = items[itemIndex];
    const flags = [...segment.flags];
    if (segment.ocrNumber !== null && segment.ocrNumber !== item.local) {
      flags.push("number_mismatch");
      mismatches.push({ number: item.number, pdf_page: segment.pdf_page, expected: item.local, read: segment.ocrNumber });
    }
    const parts = await Promise.all(segment.parts.map(async (buffer) => loadImage(await buffer)));
    const file = `solutions/${bookId}-${item.number}.jpg`;
    const size = await writeStacked(parts, path.join(outDir, file), Math.round(4 * renderScale));
    solutions.push({ number_label: item.number, file, parts: parts.length, pdf_page: segment.pdf_page, bbox_normalized: segment.bbox_normalized, continued_on: segment.continued_on, local_number_read: segment.ocrNumber, flags, ...size });
    if (segment.answerParts.length) {
      const answerParts = await Promise.all(segment.answerParts.map(async (buffer) => loadImage(await buffer)));
      const answerFile = `answers/${bookId}-${item.number}.jpg`;
      const answerSize = await writeStacked(answerParts, path.join(outDir, answerFile), Math.round(3 * renderScale));
      answers.push({ number_label: item.number, file: answerFile, parts: answerParts.length, pdf_page: segment.pdf_page, ...answerSize });
    }
  }
  solutions.sort((a, b) => a.number_label.localeCompare(b.number_label));
  answers.sort((a, b) => a.number_label.localeCompare(b.number_label));

  const covered = new Set(solutions.map((entry) => entry.number_label));
  const missing = items.filter((item) => !covered.has(item.number)).map((item) => item.number);
  const withoutAnswer = solutions.filter((entry) => !answers.some((answer) => answer.number_label === entry.number_label)).map((entry) => entry.number_label);
  const manifest = {
    schema_version: 1,
    book_id: bookId,
    ingest_version: INGEST_VERSION,
    source_file_name: path.basename(String(args.pdf)),
    solutions,
    answers,
    validation: {
      solutions: {
        count: solutions.length,
        expected: items.length,
        segments: segments.length,
        alignment_cost: alignment.cost,
        missing,
        flagged: solutions.filter((entry) => entry.flags.length).map((entry) => entry.number_label),
        continued: solutions.filter((entry) => entry.parts > 1).map((entry) => entry.number_label),
        mismatches,
        unmatched_segments: unmatchedSegments
      },
      answers: { count: answers.length, missing: withoutAnswer }
    }
  };
  await writeFile(path.join(outDir, "manifest-answers.json"), JSON.stringify(manifest, null, 2), "utf8");
  console.log(`\n해설 ${solutions.length}/${items.length}개 · 답 줄 ${answers.length}개 · 이어 붙인 풀이 ${manifest.validation.solutions.continued.length}개 · 번호 불일치 ${mismatches.length}건 · 대응 안 된 조각 ${unmatchedSegments.length}개 · 빠진 문항 ${missing.length}개`);
  if (missing.length) console.log(`빠진 문항: ${missing.slice(0, 30).join(" ")}${missing.length > 30 ? " …" : ""}`);
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
