#!/usr/bin/env node
// 번호 배지형 스캔 교재(베이직쎈류) → 문항 패키지(manifest.json + 문항 이미지). 비전 AI 호출 0, 로컬 tesseract.
//
// 사용:
//   node scripts/problem-bank/ingest-scan-badges.mjs --pdf "C:/…/베이직쎈-공통수학2.pdf" --out output/problem-bank/ssen-basic-cm2 \
//     --title "베이직쎈 공통수학2" --folder "고1 / 쎈" --grade 고1 --subject 수학 [--pages 2-15] [--units "01 평면좌표,02 직선의 방정식"]
//     [--unit-pages "2-15,16-32,33-54"]   ← 단원 경계를 PDF 쪽 범위로 못 박는다(--units 와 같은 순서). 없으면 「실전 → 개념」 전환으로 나눈다.
//
// 올림포스와 달리 문항 코드가 없고 번호(01·02…)가 구역(개념 쪽·기본&핵심 유형·실전 감각 UP)마다 다시 시작한다.
// 그래서 문항 번호는 「인쇄 쪽-번호」(12-13)로 두고 쪽 안의 굵은 번호 배지를 앵커로 자른다. 개념 쪽의 공통 지시문
// (말풍선 아이콘 줄)은 passage 영역으로 뒤따르는 문항마다 붙는다. 유형 쪽의 「유형 004 제목」 라벨은 배지가 아니라
// type_label 이 된다. 출력 형식은 ingest-scan-pdf.mjs 와 같다.

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { estimateSkewDegrees, parseTesseractTsv, rotatePoint } from "../../src/domains/problems/scanPdfSegmenter.js";
import { cropToCanvas, drawQa, parseArgs, parsePageRange, pdfjs, renderPage } from "./pdfTools.mjs";
import {
  columnLeftMargin,
  findDottedGutter,
  findKoreanTessdata,
  findTesseract,
  gray,
  groupTokenLines,
  inkRange,
  joinLineTokens,
  isColored,
  ocrTokens,
  rotateCanvas,
  runTesseract,
  sampleDarkPoints
} from "./scanTools.mjs";

const INGEST_VERSION = "scan-badges-1.1";

/**
 * 배지 띠(배지 x 좌우 좁은 세로 띠)를 2배로 키워 숫자만 다시 읽는다. 쪽 전체 OCR 이 놓친 굵은 두 자리 배지를 되찾는 보조 판독.
 * 돌려주는 토큰 좌표는 쪽(pt) 기준이다. 세 자리(유형 라벨)·한 자리는 버린다.
 */
/** 컬럼 왼쪽 띠에서 색 꼬리표(유형 상자 머리) 줄의 y(pt) 목록 — 띠 폭의 18% 이상이 색(꼬리표 안 흰 글자 때문에 낮다)이고 높이 7~18pt 인 덩어리. 배지 줄은 호출 쪽에서 뺀다. */
function findTypeTagRows(imageData, width, scale, box) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale)), x1 = Math.ceil(box.x1 * scale);
  const y0 = Math.max(0, Math.floor(box.y0 * scale)), y1 = Math.ceil(box.y1 * scale);
  const rows = [];
  for (let y = y0; y < y1; y += 1) {
    let colored = 0;
    const rowOffset = y * width * 4;
    for (let x = x0; x < x1; x += 1) {
      const o = rowOffset + x * 4;
      const max = Math.max(imageData[o], imageData[o + 1], imageData[o + 2]), min = Math.min(imageData[o], imageData[o + 1], imageData[o + 2]);
      if (max - min > 50 && max < 235) colored += 1;
    }
    rows.push(colored >= (x1 - x0) * 0.18);
  }
  const tops = [];
  const gap = Math.round(2.5 * scale);
  let start = -1;
  let last = -1;
  for (let index = 0; index <= rows.length; index += 1) {
    const on = index < rows.length && rows[index];
    if (on) {
      if (start === -1) start = index;
      last = index;
      continue;
    }
    if (start !== -1 && (index - last > gap || index === rows.length)) {
      const h = (last + 1 - start) / scale;
      if (h >= 5 && h <= 18) tops.push((y0 + start) / scale);
      start = -1;
    }
  }
  return tops;
}

async function ocrBadgeStrip(tesseract, canvas, renderScale, box, imagePath, pattern = /^\d{2}$/, minH = 9) {
  const crop = cropToCanvas(canvas, renderScale, box);
  const zoom = 2;
  const scaled = createCanvas(crop.width * zoom, crop.height * zoom);
  const context = scaled.getContext("2d");
  context.imageSmoothingEnabled = true;
  context.drawImage(crop, 0, 0, scaled.width, scaled.height);
  await writeFile(imagePath, await scaled.encode("png"));
  // 두 psm(흩어진 글 11 · 단일 블록 6)으로 읽어 합친다 — 한쪽이 놓친 배지(주황 「44」)를 다른 쪽이 잡는다.
  const found = [];
  for (const psm of [11, 6]) {
    const tsv = await runTesseract(tesseract, imagePath, { lang: "eng", psm, output: "tsv" }).catch(() => "");
    found.push(...parseTesseractTsv(tsv, renderScale * zoom)
      .filter((token) => pattern.test(token.text) && token.conf >= 30 && token.h >= minH && token.h <= 14)
      .map((token) => ({ ...token, x: token.x + box.x0, y: token.y + box.y0, strip: true })));
  }
  return found
    .sort((a, b) => a.y - b.y || b.conf - a.conf)
    .filter((token, index, list) => !list.slice(0, index).some((other) => Math.abs(other.y - token.y) <= 6));
}

/**
 * 머리글(위 3~16%) 한글 OCR → 구역 종류와 개념 제목.
 * 개념 쪽은 오른쪽 위에 관련 유형 목록(「유형 | 001~004」)이 있고, 유형 쪽은 관련 개념(「개념 | 01」)·「기본&핵심 유형」이,
 * 실전 쪽은 「실전 감각 UP」이 있다. 「개념 03」 같은 장식 숫자는 OCR 이 못 읽으므로 개념 번호는 쪽 순서로 센다.
 */
function readPageHeader(text) {
  const flat = String(text ?? "").replace(/\s+/g, " ");
  const compact = flat.replace(/\s+/g, "");
  if (/실전|감각/.test(compact)) return { block: "실전", conceptTitle: "" };
  if (/기본.{0,3}핵심|핵심유형|개념[|1lI]\d{2}/.test(compact)) return { block: "유형", conceptTitle: "" };
  if (/유형[|1lI]?\d{3}/.test(compact)) {
    // 개념 제목: 두 자리 번호 뒤의 한글 구절(소단원 제목이 먼저 오면 뒤의 것이 개념 제목).
    const phrases = [...flat.matchAll(/(?:^|\D)(\d{1,2})\s*[\[\];:]?\s*([가-힣][가-힣\s]{4,30})/g)].map((match) => match[2].trim());
    const title = phrases.filter((phrase) => !/정답|풀이|유형/.test(phrase)).pop() ?? "";
    return { block: "개념", conceptTitle: title };
  }
  return { block: "", conceptTitle: "" };
}

/**
 * 컬럼 왼쪽 띠의 색 있는 작은 덩어리(말풍선 아이콘 = 공통 지시문 줄의 시작). 세로 6~14pt, 가로 6~16pt.
 * @returns {Array<{ y: number, h: number }>} 중심 y·높이(pt)
 */
function findInstructionMarkers(imageData, width, scale, { x0, x1, y0, y1 }) {
  const px0 = Math.floor(x0 * scale);
  const px1 = Math.ceil(x1 * scale);
  const py0 = Math.floor(y0 * scale);
  const py1 = Math.ceil(y1 * scale);
  const rows = [];
  for (let y = py0; y < py1; y += 1) {
    let count = 0;
    for (let x = px0; x < px1; x += 1) if (isColored(imageData, (y * width + x) * 4)) count += 1;
    rows.push(count >= 2);
  }
  const markers = [];
  let start = -1;
  rows.forEach((on, index) => {
    if (on && start === -1) start = index;
    if (!on && start !== -1) {
      const h = index - start;
      if (h >= 6 * scale && h <= 14 * scale) {
        const top = py0 + start;
        // 「예」 상자처럼 색 테두리 안의 것은 제외 — 아이콘 왼쪽(5~20pt)에 같은 행들을 지나는 색 세로선이 있으면 상자다.
        let borderRows = 0;
        for (let y = top; y < top + h; y += 1) {
          for (let x = Math.max(0, px0 - Math.round(20 * scale)); x < px0 - Math.round(4 * scale); x += 1) {
            if (isColored(imageData, (y * width + x) * 4)) { borderRows += 1; break; }
          }
        }
        // 아이콘 오른쪽(4~60pt)에는 지시문 글(검정)이 같은 행에 있어야 한다.
        let textRows = 0;
        for (let y = top; y < top + h; y += 1) {
          for (let x = px1 + Math.round(4 * scale); x < px1 + Math.round(60 * scale); x += 1) {
            if (gray(imageData, (y * width + x) * 4) < 150) { textRows += 1; break; }
          }
        }
        // 아이콘의 왼쪽 끝 x — 지시문 말풍선은 배지 자리에, 「◎」 풀이 힌트는 들여쓴 자리에 온다.
        let iconLeft = px1;
        for (let y = top; y < top + h; y += 1) {
          for (let x = px0; x < px1; x += 1) {
            if (isColored(imageData, (y * width + x) * 4)) { iconLeft = Math.min(iconLeft, x); break; }
          }
        }
        if (borderRows < h * 0.6 && textRows >= h * 0.3) markers.push({ y: (top + h / 2) / scale, h: h / scale, x: iconLeft / scale });
      }
      start = -1;
    }
  });
  return markers;
}

/** 본문(15~90%)에서 잉크 행 비율이 2% 미만인 x 가 가장 길게 이어지는 구간의 중심(pt). 없으면 쪽 가운데. */
function findWhiteChannel(imageData, width, height, scale, pageWidth, pageHeight) {
  const y0 = Math.floor(pageHeight * 0.15 * scale);
  const y1 = Math.min(height, Math.ceil(pageHeight * 0.9 * scale));
  let best = null;
  let start = -1;
  for (let x = Math.floor(pageWidth * 0.35 * scale); x <= pageWidth * 0.65 * scale; x += 1) {
    let inked = 0;
    for (let y = y0; y < y1; y += 2) if (gray(imageData, (y * width + x) * 4) < 200) inked += 1;
    const blank = inked / ((y1 - y0) / 2) < 0.02;
    if (blank && start === -1) start = x;
    if ((!blank || x >= pageWidth * 0.65 * scale) && start !== -1) {
      if (!best || x - start > best.x1 - best.x0) best = { x0: start, x1: x };
      start = -1;
    }
  }
  return best ? (best.x0 + best.x1) / 2 / scale : pageWidth * 0.5;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <파일> --out <폴더> [--title] [--folder] [--grade] [--subject] [--pages a-b] [--units \"01 평면좌표,02 …\"] [--concepts \"01 두 점 사이의 거리,02 …\"] [--dpi 220]");
    process.exit(2);
  }
  const dpi = Number(args.dpi) || 220;
  // --numbering book: 문항 번호가 책 전체 4자리(0001~)인 판(라이트쎈·쎈). 배지는 네 자리, id 는 그 번호, 정렬·연속성도 번호 그대로.
  // 기본(page)은 베이직쎈처럼 쪽마다 01 부터 다시 시작하는 두 자리 배지 — id 「쪽-번호」.
  const bookNumbering = String(args.numbering ?? "page") === "book";
  // --badge3: 문항 번호가 중단원마다 1 부터 다시 시작하되 세 자리까지 가는 판(쎈B).
  //   기본 판정은 「세 자리 = 유형 라벨」인데, 쎈B 는 뒷단원 문항이 「033」처럼 세 자리라 통째로
  //   유형 라벨로 먹혀 단원 하나가 3문항만 잡혔다. 이 모드에서는 자릿수 대신 왼쪽 「유형」 꼬리표
  //   상자(hasTagLeft)와 연한 초록 글자로 라벨을 가른다 — 문항 번호 왼쪽은 비어 있다.
  const wideBadge = args.badge3 === true || String(args.badge3 ?? "") === "true";
  const badgePattern = bookNumbering ? /^\d{4}$/ : (wideBadge ? /^\d{2,3}$/ : /^\d{2}$/);
  const badgeMinH = bookNumbering ? 8 : 9.5;
  const renderScale = dpi / 72;
  const previewScale = 100 / 72;
  const unitNames = String(args.units ?? "").split(",").map((value) => value.trim()).filter(Boolean);
  // 개념 제목은 차례에서 받는 것이 OCR(장식 서체)보다 확실하다: --concepts "01 두 점 사이의 거리,02 …". 없으면 머리글 OCR.
  const conceptNames = String(args.concepts ?? "").split(",").map((value) => value.trim()).filter(Boolean);
  // 단원 경계를 쪽 범위로 받으면(--unit-pages "2-15,16-32") 머리글 전환 규칙 대신 그 범위로 단원을 정한다.
  const unitPageRanges = String(args["unit-pages"] ?? "").split(",").map((value) => value.trim()).filter(Boolean).map((range) => {
    const match = range.match(/^(\d+)\s*-\s*(\d+)$/);
    if (!match) throw new Error(`--unit-pages 형식: "2-15,16-32" (받은 값 ${range})`);
    return [Number(match[1]), Number(match[2])];
  });
  const tesseract = await findTesseract();
  const koreanTessdata = await findKoreanTessdata();
  if (!koreanTessdata) throw new Error("한글 모델(kor.traineddata)이 필요합니다 — 구역·제목을 머리글에서 읽습니다.");

  const pdfBytes = await readFile(args.pdf);
  const sha256 = createHash("sha256").update(pdfBytes).digest("hex");
  const outDir = path.resolve(args.out);
  const tmpDir = path.join(os.tmpdir(), `problem-bank-scan-badges-${sha256.slice(0, 8)}`);
  await Promise.all(["items", "pages", "qa"].map((dir) => mkdir(path.join(outDir, dir), { recursive: true })));
  await mkdir(tmpDir, { recursive: true });

  const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
  const [fromPage, toPage] = parsePageRange(args.pages, doc.numPages);
  const title = args.title || path.basename(args.pdf, path.extname(args.pdf));
  const bookId = `pbk_${sha256.slice(0, 10)}`;

  const items = [];
  const units = [];
  const pageSummaries = [];
  const flagged = [];
  let currentBlock = "";
  let previousBlock = "";
  let currentConcept = "";
  let currentType = "";
  let lastPrintedPage = null;
  let conceptCounter = 0;
  let lastNumber = null;
  let typeCounter = 0;
  let lastBlockOfPreviousPage = "";

  const pushUnit = (index) => {
    const name = unitNames[index] || `중단원 ${String(index + 1).padStart(2, "0")}`;
    const match = name.match(/^(\d{2})\s*(.*)$/);
    units.push({ position: index, code: match ? match[1] : String(index + 1).padStart(2, "0"), title: match ? match[2] || name : name, chapter: "" });
  };
  const ensureUnit = (pageNumber) => {
    if (unitPageRanges.length) {
      const index = unitPageRanges.findIndex(([from, to]) => pageNumber >= from && pageNumber <= to);
      if (index < 0) throw new Error(`p${pageNumber} 이 --unit-pages 범위 밖입니다.`);
      while (units.length <= index) pushUnit(units.length);
      return index;
    }
    if (units.length === 0 || (currentBlock === "개념" && previousBlock === "실전")) pushUnit(units.length);
    return units.length - 1;
  };

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const pageWidth = viewport.width;
    const pageHeight = viewport.height;
    let { canvas, context } = await renderPage(page, renderScale);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

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

    // 머리글: 구역·개념 제목
    const headStrip = createCanvas(canvas.width, Math.ceil(pageHeight * 0.13 * renderScale));
    headStrip.getContext("2d").drawImage(canvas, 0, Math.floor(pageHeight * 0.03 * renderScale), canvas.width, headStrip.height, 0, 0, canvas.width, headStrip.height);
    const headPng = path.join(tmpDir, `p${pageNumber}-head.png`);
    await writeFile(headPng, await headStrip.encode("png"));
    const headerText = await runTesseract(tesseract, headPng, { lang: "kor", psm: 6, tessdataDir: koreanTessdata, output: "txt" });
    const header = readPageHeader(headerText);
    // 제목 구절을 못 찾은 개념 쪽은 머리글에서 가장 큰(12pt 이상) 한글 글줄을 제목으로 쓴다(「개념 03」 장식 숫자 옆).
    if (header.block === "개념" && !header.conceptTitle) {
      const headTokens = parseTesseractTsv(await runTesseract(tesseract, headPng, { lang: "kor", psm: 6, tessdataDir: koreanTessdata, output: "tsv" }), renderScale);
      header.conceptTitle = groupTokenLines(headTokens.filter((token) => token.h >= 12 && /[가-힣]/.test(token.text)))
        .map((line) => joinLineTokens(line).replace(/[^가-힣0-9a-zA-Z\s,·()+=<>-]/g, "").replace(/\s+/g, " ").trim())
        .filter((text) => text.length >= 3 && !/기본|핵심|유형|실전|감각|정답|풀이/.test(text))
        .sort((a, b) => b.length - a.length)[0] ?? "";
    }
    // 개념 쪽은 왼쪽 위에 큰 색 번호 상자가 있다(OCR 이 못 읽는 장식 숫자) — 색 픽셀 비율로 본다.
    const conceptBadgeColored = (() => {
      let colored = 0;
      let total = 0;
      for (let y = Math.floor(pageHeight * 0.06 * renderScale); y < pageHeight * 0.115 * renderScale; y += 2) {
        for (let x = Math.floor(pageWidth * 0.06 * renderScale); x < pageWidth * 0.2 * renderScale; x += 2) {
          total += 1;
          if (isColored(imageData, (y * canvas.width + x) * 4)) colored += 1;
        }
      }
      return total > 0 && colored / total >= 0.2;
    })();
    if (!header.block && conceptBadgeColored) header.block = "개념";

    // 쪽 번호(바닥 모서리의 작은 숫자)
    const printedPageToken = tokens
      .filter((token) => token.y > pageHeight * 0.93 && /^\d{1,3}$/.test(token.text) && token.conf >= 60)
      .sort((a, b) => Math.min(a.x, pageWidth - a.x - a.w) - Math.min(b.x, pageWidth - b.x - b.w))[0];
    let printedPage = printedPageToken ? Number(printedPageToken.text) : (lastPrintedPage ?? pageNumber - 1) + 1;
    if (lastPrintedPage !== null && Math.abs(printedPage - (lastPrintedPage + 1)) > 2) printedPage = lastPrintedPage + 1;
    // --page-offset N: 인쇄 쪽 = pdf 쪽 + N 으로 고정(첫 쪽 바닥글이 없거나 OCR 이 흔들리는 스캔).
    if (args["page-offset"] !== undefined) printedPage = pageNumber + Number(args["page-offset"]);
    lastPrintedPage = printedPage;

    const bodyTop = pageHeight * 0.06;
    const bodyBottom = pageHeight * 0.935;
    // 컬럼 경계: 점선이 있으면 점선, 없으면 쪽 가운데(35~65%)에서 가장 넓은 빈 세로 통로의 중심(스캔이 치우친 쪽 대비).
    const dotted = findDottedGutter(imageData, canvas.width, canvas.height, renderScale, pageWidth, pageHeight);
    const gutterX = dotted > 0 ? dotted : findWhiteChannel(imageData, canvas.width, canvas.height, renderScale, pageWidth, pageHeight);
    // 스캔이 왼쪽으로 치우친 쪽은 배지가 쪽 가장자리 2~3pt 에 붙는다 — 왼쪽 컬럼은 0 부터 본다.
    const columns = [
      { index: 0, x0: 0, x1: gutterX - 3 },
      { index: 1, x0: gutterX + 3, x1: pageWidth }
    ];

    // 유형 라벨(3자리 굵은 숫자)·문항 배지(1~2자리 굵은 숫자)
    // 글자 색: 유형 라벨은 초록 글자(연한 바탕), 개념 쪽 문항 배지는 주황 글자, 유형·실전 쪽 배지는 검정 글자.
    const glyphColor = (token) => {
      const x0 = Math.max(0, Math.floor(token.x * renderScale));
      const x1 = Math.min(canvas.width, Math.ceil((token.x + token.w) * renderScale));
      const y0 = Math.max(0, Math.floor(token.y * renderScale));
      const y1 = Math.min(canvas.height, Math.ceil((token.y + token.h) * renderScale));
      let count = 0;
      const sum = [0, 0, 0];
      for (let y = y0; y < y1; y += 1) for (let x = x0; x < x1; x += 1) {
        const offset = (y * canvas.width + x) * 4;
        const max = Math.max(imageData[offset], imageData[offset + 1], imageData[offset + 2]);
        const min = Math.min(imageData[offset], imageData[offset + 1], imageData[offset + 2]);
        if (max - min <= 40 || min > 200) continue;
        count += 1;
        sum[0] += imageData[offset];
        sum[1] += imageData[offset + 1];
        sum[2] += imageData[offset + 2];
      }
      return count >= 15 ? sum.map((value) => value / count) : null;
    };
    // 유형 라벨 = 연한 초록 글자(평균 밝기 150 이상). 유형 쪽 배지도 초록이지만 진하다(≈128,153,98).
    const isGreenGlyph = (token) => {
      const color = glyphColor(token);
      return Boolean(color) && color[1] > color[0] + 10 && color[1] >= color[2] && (color[0] + color[1] + color[2]) / 3 >= 140;
    };
    // 유형 라벨 왼쪽에는 「유형」 꼬리표 상자가 붙어 있다(흑백 스캔 쪽에서는 색 대신 이것으로 안다). 배지 왼쪽은 비어 있다.
    const hasTagLeft = (token) => {
      const column = columns.find((entry) => token.x >= entry.x0 && token.x < entry.x1) ?? columns[0];
      // 꼬리표는 속이 찬 상자(≈22×9pt)라 어두운 픽셀이 영역의 35% 를 넘는다. 거터 점선·쪽 가장자리는 컬럼 안쪽 3pt 로 잘라 낸다.
      const x0 = Math.max(0, Math.floor(Math.max(column.x0 + 3, token.x - 28) * renderScale));
      const x1 = Math.max(0, Math.floor((token.x - 4) * renderScale));
      const y0 = Math.max(0, Math.floor(token.y * renderScale));
      const y1 = Math.min(canvas.height, Math.ceil((token.y + token.h) * renderScale));
      if (x1 - x0 < 10 * renderScale) return false;
      let dark = 0;
      let total = 0;
      for (let y = y0; y < y1; y += 1) for (let x = x0; x < x1; x += 1) {
        total += 1;
        if (gray(imageData, (y * canvas.width + x) * 4) < 170) dark += 1;
      }
      return total > 0 && dark / total >= 0.35;
    };
    // 3자리는 유형 라벨뿐이다(문항 배지는 두 자리까지). 앞의 0 이 떨어져 두 자리로 읽힌 라벨은 연한 초록 글자로 안다.
    // 「018」을 「O18」로 읽은 것(앞 0 이 알파벳 O)도 세 글자라 라벨이다 — 회색 유형 쪽에서 배지로 잘못 잡혀 뒤 번호가 밀렸다(32쪽).
    const isTypeLabelToken = (token) => !bookNumbering && (wideBadge
      // 쎈B: 문항 번호도 세 자리라 자릿수로는 못 가른다. 「유형」 꼬리표 상자가 왼쪽에 붙어 있거나
      // 연한 초록 글자면 라벨이다(문항 번호 왼쪽은 비어 있고 글자는 주황·보라).
      ? (hasTagLeft(token) || isGreenGlyph(token))
      : (/^[0O]?\d{3}$/.test(token.text) || /^O\d{2}$/.test(token.text) || isGreenGlyph(token)));
    const ringColored = isTypeLabelToken;
    let typeProbe = typeCounter;
    // 유형 라벨: 본문(위 14% 아래)의 색 상자 위 굵은 숫자. OCR 이 「001」을 「01」「1」로 읽어도 라벨이다.
    const typeLabels = tokens
      .filter((token) => /^\d{1,3}$/.test(token.text) && token.conf >= 50 && token.h >= 9 && token.h <= 13 && token.y > pageHeight * 0.06 && isTypeLabelToken(token))
      .sort((a, b) => a.y - b.y)
      // 같은 줄(6pt 안)에서는 가장 왼쪽 것만 라벨이다(제목 글자가 숫자로 읽히는 「491」 같은 것 제외).
      .filter((token, index, list) => !list.some((other, otherIndex) => otherIndex !== index && Math.abs(other.y - token.y) <= 6 && other.x < token.x && token.x - other.x < 200))
      // 라벨 번호는 책 순서로 1~3씩 는다. 본문 숫자(「C(2√3, 1)」→「428」)는 여기서 걸러 문항 하단을 자르지 않게 한다.
      .sort((a, b) => (a.x < gutterX ? 0 : 1) - (b.x < gutterX ? 0 : 1) || a.y - b.y)
      .filter((token) => {
        const value = /^\d{3}$/.test(token.text) ? Number(token.text) : null;
        if (value === null) {
          typeProbe += 1;
          return true;
        }
        if ((typeProbe === 0 && value <= 30) || (value > typeProbe && value <= typeProbe + 3)) {
          typeProbe = value;
          return true;
        }
        return false;
      });
    if (process.env.DEBUG_SSEN === String(pageNumber)) {
      console.log(`  gutter dotted=${dotted.toFixed(1)} gutterX=${gutterX.toFixed(1)} columns=${JSON.stringify(columns.map((c) => [Math.round(c.x0), Math.round(c.x1)]))}`);
      for (const token of tokens.filter((token) => /^\d{1,3}$/.test(token.text) && token.h >= 8)) console.log(`  ${token.text}@(${token.x.toFixed(0)},${token.y.toFixed(0)} h${token.h.toFixed(1)} c${Math.round(token.conf)}) color=${JSON.stringify((glyphColor(token) ?? []).map(Math.round))}`);
    }
    const pageBlock = header.block || currentBlock;
    if (pageBlock && pageBlock !== currentBlock) {
      previousBlock = currentBlock;
      currentBlock = pageBlock;
    }
    if (pageBlock === "개념" && (header.block === "개념")) {
      conceptCounter += 1;
      const given = conceptNames.find((name) => name.startsWith(String(conceptCounter).padStart(2, "0")));
      currentConcept = given ? `개념 ${given}` : `개념 ${String(conceptCounter).padStart(2, "0")}${header.conceptTitle ? ` ${header.conceptTitle}` : ""}`;
    }
    const unitIndex = ensureUnit(pageNumber);

    const boxes = [];
    const passages = [];
    for (const column of columns) {
      const left = columnLeftMargin(imageData, canvas.width, renderScale, column, pageHeight);
      const candidates = tokens
        // 배지는 늘 두 자리(01·13)다. 한 자리는 선택지 「①」 오독이다.
        .filter((token) => badgePattern.test(token.text) && token.conf >= 40 && token.h >= badgeMinH && token.h <= 13)
        .filter((token) => token.x >= column.x0 + 2 && token.x <= column.x0 + 80 && token.y > bodyTop && token.y + token.h < bodyBottom)
        .filter((token) => !ringColored(token))
      // 배지 x: 후보마다 [x, x+8pt] 창에 드는 후보 수를 세어 가장 많은 창의 왼쪽 끝(두 OCR 모드가 같은 배지를 조금 다른 x 로
      // 읽어도, 기울어진 쪽에서 한 배지만 왼쪽으로 튀어도 흔들리지 않게 — 4pt 칸 묶기는 동률일 때 튄 값을 고르기도 했다).
      let badgeLeft = left;
      if (candidates.length) {
        const windows = candidates.map((token) => ({ x: token.x, count: candidates.filter((other) => other.x >= token.x && other.x <= token.x + 8).length }));
        badgeLeft = windows.sort((a, b) => b.count - a.count || a.x - b.x)[0].x;
      }
      // 배지 띠 재판독: 쪽 전체 OCR 이 굵은 두 자리 배지를 놓치면(「11」 신뢰도 0 등) 그 문항이 앞 문항 크롭에 붙는다.
      // 배지 x 좌우 좁은 띠만 2배로 키워 숫자만 다시 읽어 빠진 배지를 보탠다(같은 y 의 배지는 한 번만).
      const stripTokens = candidates.length
        ? await ocrBadgeStrip(tesseract, canvas, renderScale, { x0: Math.max(column.x0, badgeLeft - 5), x1: badgeLeft + (bookNumbering ? 34 : 22), y0: bodyTop, y1: bodyBottom }, path.join(tmpDir, `p${pageNumber}-badges-${column.index}.png`), badgePattern, badgeMinH - 0.5)
        : [];
      // 띠에서 읽은 두 자리가 유형 라벨(「032」)의 앞 두 글자일 수 있다 — 라벨 왼쪽에는 「유형」 꼬리표 상자가 붙어 있고
      // 배지 왼쪽은 빈 여백이므로 꼬리표로 가른다(색은 회색 쪽에서 못 쓴다). 선택지 「④ 1」이 「41」로 읽히는 것은 신뢰도(≥75)로 거른다.
      // 신뢰도 낮은(30~75) 띠 토큰은 위·아래 배지와 번호가 이어질 때만(43 ↔ 44 ↔ 45) 받는다 — 주황 배지 「44」는 48 로 읽힌다.
      const stripFit = stripTokens.filter((token) => Math.abs(token.x - badgeLeft) <= 4 && !ringColored(token) && !hasTagLeft(token));
      const sure = [...candidates.filter((token) => token.x <= badgeLeft + 8), ...stripFit.filter((token) => token.conf >= 75)];
      const sequential = stripFit.filter((token) => token.conf < 75).filter((token) => {
        const value = Number(token.text);
        const above = sure.filter((other) => other.y < token.y - 6).sort((a, b) => b.y - a.y)[0];
        const below = sure.filter((other) => other.y > token.y + 6).sort((a, b) => a.y - b.y)[0];
        return (above && Number(above.text) + 1 === value) || (below && Number(below.text) - 1 === value);
      });
      const badges = [...sure, ...sequential]
        .sort((a, b) => a.y - b.y || b.conf - a.conf)
        .filter((token, index, list) => !list.slice(0, index).some((other) => Math.abs(other.y - token.y) <= 6));
      const columnTypes = typeLabels.filter((token) => token.x >= column.x0 && token.x < column.x0 + 80).sort((a, b) => a.y - b.y);
      // 지시문 말풍선은 배지와 같은 x(+5pt 안)에 온다. 그보다 들여쓴 색 아이콘(「◎」 풀이 힌트)은 위 문항의 일부라 무시한다.
      const markers = currentBlock !== "개념" ? [] : findInstructionMarkers(imageData, canvas.width, renderScale, { x0: badgeLeft - 2, x1: badgeLeft + 14, y0: bodyTop, y1: bodyBottom })
        .filter((marker) => marker.x <= badgeLeft + 5)
        .filter((marker) => !badges.some((badge) => Math.abs(badge.y + badge.h / 2 - marker.y) < 8) && !columnTypes.some((label) => Math.abs(label.y + label.h / 2 - marker.y) < 8));
      const columnBox = { x0: badgeLeft - 4, x1: column.x1 };
      // 아래 한계 후보: 다음 배지·유형 라벨·지시문 아이콘·컬럼 바닥
      // 책 전체 번호 판(라이트쎈·쎈)의 유형 상자: 컬럼 왼쪽 끝 진한 색 꼬리표(「유형 03」 ≈ 40×12pt)가 줄 폭의 절반을 넘게 색으로 채운다.
      // 그 위·아래 3pt 안이 흰 줄이면 상자 머리다 — 여기서 앞 문항을 자른다(안 자르면 다음 유형 상자가 앞 문항 크롭에 붙는다).
      const typeTagStops = bookNumbering ? findTypeTagRows(imageData, canvas.width, renderScale, { x0: Math.max(column.x0, badgeLeft - 10), x1: badgeLeft + 60, y0: bodyTop, y1: bodyBottom }).filter((y) => !badges.some((badge) => Math.abs(badge.y - y) < 10)) : [];
      if (process.env.DEBUG_SSEN === String(pageNumber)) console.log(`  col${column.index} typeTagStops=${typeTagStops.map((y) => y.toFixed(0)).join(",")} badgeLeft=${badgeLeft.toFixed(0)} column.x0=${column.x0.toFixed(0)}`);
      const stops = [
        ...badges.map((badge) => badge.y - 3),
        ...columnTypes.map((label) => label.y - 8),
        ...typeTagStops.map((y) => y - 6),
        ...markers.map((marker) => marker.y - marker.h / 2 - 3),
        bodyBottom
      ].sort((a, b) => a - b);
      const nextStop = (y) => stops.find((stop) => stop > y + 4) ?? bodyBottom;
      if (process.env.DEBUG_SSEN === String(pageNumber)) console.log(`  strip-check ${stripTokens.map((t) => `${t.text}@${t.y.toFixed(0)} ring=${ringColored(t)} tag=${hasTagLeft(t)} color=${JSON.stringify((glyphColor(t) ?? []).map(Math.round))}`).join(" | ")}`);
      if (process.env.DEBUG_SSEN === String(pageNumber)) console.log(`  col${column.index} badgeLeft=${badgeLeft.toFixed(0)} cand=${candidates.map((b) => `${b.text}@${b.x.toFixed(0)},${b.y.toFixed(0)}`).join(",")} strip=${stripTokens.map((b) => `${b.text}@${b.x.toFixed(0)},${b.y.toFixed(0)}c${Math.round(b.conf)}h${b.h.toFixed(1)}`).join(",")} badges=${badges.map((b) => `${b.text}@${b.y.toFixed(0)}`).join(",")} types=${columnTypes.map((t) => `${t.text}@${t.y.toFixed(0)}`).join(",")} markers=${markers.map((m) => m.y.toFixed(0)).join(",")}`);

      // 공통 지시문: 아이콘 줄부터 다음 정지선까지
      for (const marker of markers) {
        const top = marker.y - marker.h / 2 - 3;
        const limit = nextStop(marker.y + marker.h / 2);
        const ink = inkRange(imageData, canvas.width, renderScale, { ...columnBox, y0: top, y1: limit }, []);
        if (!ink) continue;
        passages.push({ column: column.index, box: { ...columnBox, y0: Math.max(bodyTop, ink.top - 3), y1: Math.min(limit, ink.bottom + 4) }, members: [] });
      }
      // 반 컬럼 격자(쎈 중등·라이트쎈 개념 쪽): 한 줄에 「0261 | 0262」 처럼 문항 둘이 나란히 온다. 왼쪽 배지와 같은 줄, 컬럼 가운데
      // (배지에서 컬럼 폭의 35~70%)에 있는 배지가 오른쪽 문항이다 — 왼쫓 문항은 그 배지 앞에서, 오른쪽 문항은 거기서 컬럼 끝까지 자른다.
      const columnWidth = column.x1 - badgeLeft;
      const rightBadges = bookNumbering
        ? tokens
          .filter((token) => badgePattern.test(token.text) && token.conf >= 40 && token.h >= badgeMinH - 1 && token.h <= 13)
          .filter((token) => token.x >= badgeLeft + columnWidth * 0.35 && token.x <= badgeLeft + columnWidth * 0.7 && token.y > bodyTop && token.y + token.h < bodyBottom)
          .filter((token) => badges.some((badge) => Math.abs(badge.y - token.y) < 6))
          .filter((token, index, list) => !list.slice(0, index).some((other) => Math.abs(other.y - token.y) <= 6))
        : [];
      const placed = [
        ...badges.map((badge) => {
          const pair = rightBadges.find((token) => Math.abs(token.y - badge.y) < 6);
          return { badge, x0: columnBox.x0, x1: pair ? pair.x - 4 : columnBox.x1, half: pair ? "left" : null };
        }),
        ...rightBadges.map((token) => ({ badge: token, x0: token.x - 4, x1: columnBox.x1, half: "right" }))
      ].sort((a, b) => (Math.abs(a.badge.y - b.badge.y) < 6 ? a.badge.x - b.badge.x : a.badge.y - b.badge.y));
      for (const { badge, x0: bx0, x1: bx1, half } of placed) {
        const limit = nextStop(badge.y + badge.h);
        const cell = { x0: bx0, x1: bx1 };
        const ink = inkRange(imageData, canvas.width, renderScale, { ...cell, y0: badge.y - 2, y1: limit }, []);
        const box = { ...cell, y0: Math.max(bodyTop, badge.y - 3), y1: ink ? Math.min(limit, ink.bottom + 4) : limit };
        const number = Number(badge.text.replace(/^O/, "0"));
        const typeAbove = columnTypes.filter((label) => label.y < badge.y).pop();
        const passage = passages.filter((entry) => entry.column === column.index && entry.box.y1 <= badge.y + 2).pop();
        // 지시문은 같은 컬럼에서 다음 지시문·유형 라벨 전까지의 문항에 붙는다.
        const passageStillActive = passage && !columnTypes.some((label) => label.y > passage.box.y1 && label.y < badge.y);
        const flags = [];
        if (!ink) flags.push("no_ink");
        if (box.y1 - box.y0 < 10) flags.push("too_short");
        if (half) flags.push(`half_${half}`);
        boxes.push({ column: column.index, number, box, typeLabel: typeAbove ? typeAbove.text : null, passage: passageStillActive ? passage : null, conf: badge.conf, flags });
        if (passageStillActive) passage.members.push(number);
      }
    }
    // 같은 줄(6pt 안)의 반 컬럼 짝은 왼쪽 → 오른쪽.
    boxes.sort((a, b) => a.column - b.column || (Math.abs(a.box.y0 - b.box.y0) < 6 ? a.box.x0 - b.box.x0 : a.box.y0 - b.box.y0));
    // 번호는 쪽 안에서 읽는 순서대로 1씩 는다. OCR 오독(14→24·06 중복)은 순서로 바로잡고 표시한다.
    // 앞 쪽과 같은 구역이면 첫 번호도 앞 쪽 마지막 번호 + 1 이어야 한다.
    let expected = (bookNumbering || currentBlock === lastBlockOfPreviousPage) && lastNumber !== null ? lastNumber + 1 : null;
    const seen = new Set();
    for (const [index, entry] of boxes.entries()) {
      if (expected !== null && entry.number !== expected) {
        const diff = Math.abs(entry.number - expected);
        // 책 전체 번호 판: 읽은 값이 다음 배지와 이어지면(읽은 값 + 1 = 다음 읽은 값) 오독이 아니라 책이 건너뛴 것(스캔에 없는 단원)이다 —
        // 읽은 값을 믿고 표시만 한다. 다음 배지와도 안 이어지고 기대값과 한 자리만 다르면 오독으로 고친다.
        const nextRead = boxes[index + 1]?.number ?? null;
        const runsOn = nextRead !== null && nextRead === entry.number + 1;
        const oneDigitOff = String(entry.number).padStart(4, "0").split("").filter((ch, k) => ch !== String(expected).padStart(4, "0")[k]).length === 1;
        const bookMisread = bookNumbering && !runsOn && (seen.has(entry.number) || entry.number === 0 || oneDigitOff || diff >= 300);
        // 쪽 번호 판: 오독으로 볼 만한 것만 고친다: 중복·0·큰 수, 앞자리 오독(±10·±20), 한두 개 차이. 그 밖은 읽은 값을 믿고 표시만 한다.
        const pageMisread = !bookNumbering && (seen.has(entry.number) || entry.number === 0 || entry.number > 60 || [10, 20].includes(diff));
        if (bookMisread || pageMisread) {
          entry.flags.push(`number_corrected(${entry.number})`);
          entry.number = expected;
        } else {
          entry.flags.push(`number_gap(expected ${expected})`);
        }
      }
      seen.add(entry.number);
      expected = entry.number + 1;
    }
    lastNumber = boxes.length ? boxes[boxes.length - 1].number : lastNumber;
    lastBlockOfPreviousPage = currentBlock;

    // 유형 라벨 제목(한글) — 라벨 줄 띠를 읽는다.
    const typeTitles = new Map();
    for (const label of typeLabels) {
      const y0 = Math.max(0, Math.floor((label.y - 3) * renderScale));
      const h = Math.ceil((label.h + 6) * renderScale);
      const strip = createCanvas(Math.ceil((pageWidth * 0.45) * renderScale), h);
      strip.getContext("2d").drawImage(canvas, Math.floor((label.x + label.w + 2) * renderScale), y0, strip.width, h, 0, 0, strip.width, h);
      const file = path.join(tmpDir, `p${pageNumber}-type-${label.text}.png`);
      await writeFile(file, await strip.encode("png"));
      const text = (await runTesseract(tesseract, file, { lang: "kor", psm: 7, tessdataDir: koreanTessdata, output: "txt" })).replace(/[^가-힣0-9a-zA-Z\s,·()+=<>-]/g, "").replace(/\s+/g, " ").trim();
      typeTitles.set(label.text, text);
    }

    const toBbox = (box) => [box.x0 / pageWidth, box.y0 / pageHeight, box.x1 / pageWidth, box.y1 / pageHeight].map((value) => Number(value.toFixed(5)));
    async function cropToFile(box, file) {
      const crop = cropToCanvas(canvas, renderScale, box);
      await writeFile(path.join(outDir, file), await crop.encode("jpeg", 88));
      return { width: crop.width, height: crop.height };
    }
    const passageFiles = new Map();
    for (const [index, passage] of passages.entries()) {
      if (!passage.members.length) continue;
      const file = `items/${bookId}-p${printedPage}-passage-${index + 1}.jpg`;
      const size = await cropToFile(passage.box, file);
      passageFiles.set(passage, { kind: "passage", position: 1, pdf_page: pageNumber, bbox_normalized: toBbox(passage.box), file, ...size });
    }
    let pageCount = 0;
    for (const entry of boxes) {
      const numberLabel = bookNumbering ? String(entry.number).padStart(4, "0") : `${printedPage}-${String(entry.number).padStart(2, "0")}`;
      const itemId = `${bookId}-${numberLabel}`;
      if (items.some((item) => item.item_id === itemId)) {
        flagged.push({ item_id: itemId, flags: ["duplicate_number"] });
        continue;
      }
      const file = `items/${itemId}.jpg`;
      const size = await cropToFile(entry.box, file);
      if (entry.typeLabel) {
        const read = entry.typeLabel;
        // 라벨 번호는 책 전체에서 1씩 는다. 3자리로 읽힌 값이 앞 라벨보다 1~3 크면 그 값을, 아니면 앞 라벨 + 1 을 쓴다
        // (본문 숫자 「434」가 라벨로 잘못 잡힌 경우 대비).
        const value = /^\d{3}$/.test(read) ? Number(read) : null;
        const plausible = value !== null && (typeCounter === 0 ? value <= 30 : value > typeCounter && value <= typeCounter + 3);
        if (plausible || value === null) {
          typeCounter = plausible ? value : typeCounter + 1;
          currentType = `유형 ${String(typeCounter).padStart(3, "0")} ${typeTitles.get(read) ?? ""}`.trim();
        }
      }
      const typeLabel = currentBlock === "유형" ? currentType : currentBlock === "개념" ? currentConcept : currentBlock === "실전" ? "실전 감각 UP" : "";
      const regions = [{ kind: "body", position: 0, pdf_page: pageNumber, bbox_normalized: toBbox(entry.box), file, ...size }];
      const passageRegion = entry.passage ? passageFiles.get(entry.passage) : null;
      if (passageRegion) regions.push(passageRegion);
      const reviewFlags = entry.flags.filter((flag) => !flag.startsWith("half_"));
      if (entry.conf < 50 && !reviewFlags.some((flag) => flag.startsWith("number_corrected"))) reviewFlags.push("low_ocr_conf");
      items.push({
        item_id: itemId,
        number_label: numberLabel,
        number_sort: bookNumbering ? entry.number : printedPage * 100 + entry.number,
        printed_page: printedPage,
        pdf_page: pageNumber,
        column: entry.column,
        layout: "column",
        type_label: typeLabel,
        tags: [currentBlock || "본문"].concat(entry.typeLabel ? [`유형 ${entry.typeLabel}`] : []),
        unit_index: unitIndex,
        has_shared_passage: Boolean(passageRegion),
        group_key: passageRegion ? `${printedPage}-passage-${passages.indexOf(entry.passage) + 1}` : "",
        review_status: reviewFlags.length ? "flagged" : "ai_checked",
        review_note: reviewFlags.join(","),
        regions
      });
      if (reviewFlags.length) flagged.push({ item_id: itemId, flags: reviewFlags });
      pageCount += 1;
    }

    // 미리보기·검수 이미지
    const previewCanvas = createCanvas(Math.ceil(pageWidth * previewScale), Math.ceil(pageHeight * previewScale));
    const previewContext = previewCanvas.getContext("2d");
    previewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, previewCanvas.width, previewCanvas.height);
    await writeFile(path.join(outDir, "pages", `p${String(pageNumber).padStart(3, "0")}.jpg`), await previewCanvas.encode("jpeg", 82));
    const qaBoxes = boxes.map((entry) => ({ label: String(entry.number), box: entry.box, color: entry.flags.length ? "#b7211e" : "#176e59" }));
    for (const passage of passages) if (passage.members.length) qaBoxes.push({ label: `지시문→${passage.members.join(",")}`, box: passage.box, color: "#b45309" });
    for (const label of typeLabels) qaBoxes.push({ label: `유형 ${label.text}`, box: { x0: label.x - 2, y0: label.y - 2, x1: label.x + label.w + 2, y1: label.y + label.h + 2 }, color: "#1d4ed8" });
    await drawQa(canvas, pageWidth, pageHeight, qaBoxes, path.join(outDir, "qa", `p${String(pageNumber).padStart(3, "0")}.jpg`));

    pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, count: pageCount, block: currentBlock, skew, header: headerText.replace(/\s+/g, " ").trim().slice(0, 80) });
    console.log(`p${pageNumber} (${printedPage}쪽) 문항 ${pageCount}개 · ${currentBlock || "?"}${currentBlock === "개념" && currentConcept ? ` · ${currentConcept}` : ""}${typeLabels.length ? ` · 유형 ${typeLabels.map((label) => label.text).join(",")}` : ""}${passages.filter((entry) => entry.members.length).length ? ` · 지시문 ${passages.filter((entry) => entry.members.length).length}` : ""}${skew ? ` · 기울기 ${skew}°` : ""}`);
    page.cleanup();
  }
  await rm(tmpDir, { recursive: true, force: true });

  units.forEach((unit, index) => {
    const own = items.filter((item) => item.unit_index === index);
    unit.item_number_from = own[0]?.number_label ?? "";
    unit.item_number_to = own[own.length - 1]?.number_label ?? "";
    unit.item_count = own.length;
  });
  const validation = {
    count: items.length,
    page_counts: Object.fromEntries(pageSummaries.map((summary) => [summary.pdf_page, summary.count])),
    flagged,
    ocr: "tesseract",
    ai_visual_check: "not_used",
    human_review_count: 0
  };
  const manifest = {
    schema_version: 1,
    book: {
      book_id: bookId,
      title,
      folder_path: args.folder || "",
      subject: args.subject || "",
      grade: args.grade || "",
      source_kind: "pdf_scan",
      source_file_name: path.basename(args.pdf),
      source_sha256: sha256,
      page_count: doc.numPages,
      pages_ingested: [fromPage, toPage],
      item_count: items.length,
      layout_profile: { numbering: bookNumbering ? "book-badge" : "printed_page-badge", render_dpi: dpi, ocr: "tesseract" },
      ingest_version: INGEST_VERSION
    },
    units,
    items,
    pages: pageSummaries
  };
  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  await writeFile(path.join(outDir, "validation.json"), JSON.stringify(validation, null, 2), "utf8");
  console.log(`\n문항 ${items.length}개 · 단원 ${units.length}개 · flagged ${flagged.length}개`);
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
