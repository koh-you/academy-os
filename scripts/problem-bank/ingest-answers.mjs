#!/usr/bin/env node
// 정답과 풀이(해설) PDF → 문항별 해설 이미지 + 「답」 줄만 오려 낸 빠른정답 이미지. 비전 AI 호출 0.
//
// 사용:
//   node scripts/problem-bank/ingest-answers.mjs --solutions "…정답.pdf" --out <문항 패키지 폴더> [--book-id pbk_…] [--dpi 220]
//
// --out 을 ingest-text-pdf 의 출력 폴더로 주면 manifest.json 옆에 정답·해설이 들어가 교재관리에서 한 번에 등록된다.
// 그때 --book-id 는 그 manifest.json 에서 읽는다(다른 폴더면 --book-id 필수).
//
// 출력 폴더:
//   manifest-answers.json   { book_id, solutions: [{number_label, file, parts, …}], answers: [{number_label, file, …}] }
//   solutions/*.jpg         번호별 해설 (컬럼·쪽을 넘어 이어지는 풀이는 이어 붙여 한 장으로)
//   answers/*.jpg           번호별 「답」 줄 (해설 안의 답 아이콘 U+E34C 부터 그 줄 끝까지)
//   qa/*.jpg                경계 상자를 그린 검수용 페이지
//
// 해설 PDF 는 문항 PDF 와 같은 세그먼터(번호 배지 · 컬럼 · 잉크 하단)를 쓰고, 「본문 p.」 배너 줄에서 자른다.
// 컬럼 맨 위에 배지 없이 시작하는 글줄은 앞 문항의 이어지는 풀이로 보고 앞 문항에 붙인다.
//
// 별도 「빠른 정답」 PDF 는 판(edition)이 다를 수 있어 쓰지 않는다 — RPM 3-2 의 경우 빠른정답 PDF 는
// 673문항판, 교재·해설 PDF 는 644문항판(0001 답이 12/13 vs 15/17)이었다. 해설의 답 줄이 교재와 같은 판이다.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { checkNumberContinuity, detectBadgeHeight, segmentPage } from "../../src/domains/problems/textPdfSegmenter.js";
import { findGutterX, inkBand, inkExtent, inkRightEdge, parseArgs, pdfjs, renderPage, toViewportTokens } from "./pdfTools.mjs";

const INGEST_VERSION = "answers-1.0";
const SOLUTION_BANNER_PATTERN = /^본문\s*(?:p\.|\d)/;
const ANSWER_ICON = ""; // 해설의 「답」 아이콘 글리프
const BODY_BOTTOM_RATIO = 0.937; // 바닥글(쪽번호·단원명) 위. 본문 마지막 글줄은 0.93H 근처까지 내려온다.

async function loadPages(pdfPath) {
  const bytes = await readFile(pdfPath);
  const doc = await pdfjs.getDocument({ data: new Uint8Array(bytes), verbosity: 0 }).promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const textContent = await page.getTextContent();
    pages.push({ pageNumber, tokens: toViewportTokens(textContent, viewport), width: viewport.width, height: viewport.height });
    page.cleanup();
  }
  return { doc, pages };
}

async function drawQa(canvas, pageWidth, pageHeight, boxes, filePath) {
  const scale = 100 / 72;
  const preview = createCanvas(Math.ceil(pageWidth * scale), Math.ceil(pageHeight * scale));
  const context = preview.getContext("2d");
  context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, preview.width, preview.height);
  context.lineWidth = 1.5;
  context.font = "bold 11px sans-serif";
  for (const { label, box, color = "#176e59" } of boxes) {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.strokeRect(box.x0 * scale, box.y0 * scale, (box.x1 - box.x0) * scale, (box.y1 - box.y0) * scale);
    if (label) context.fillText(label, box.x0 * scale + 2, box.y0 * scale - 2);
  }
  await writeFile(filePath, await preview.encode("jpeg", 82));
}

function cropToCanvas(canvas, renderScale, box) {
  const sx = Math.round(box.x0 * renderScale);
  const sy = Math.round(box.y0 * renderScale);
  const sw = Math.max(1, Math.round((box.x1 - box.x0) * renderScale));
  const sh = Math.max(1, Math.round((box.y1 - box.y0) * renderScale));
  const crop = createCanvas(sw, sh);
  crop.getContext("2d").drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
  return crop;
}

/** 여러 조각을 세로로 이어 한 장으로 만든다(컬럼·쪽을 넘어가는 풀이). */
async function writeStacked(parts, filePath, gapPx) {
  const width = Math.max(...parts.map((part) => part.width));
  const height = parts.reduce((sum, part) => sum + part.height, 0) + gapPx * (parts.length - 1);
  const sheet = createCanvas(width, height);
  const context = sheet.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, width, height);
  let y = 0;
  for (const part of parts) {
    context.drawImage(part, 0, y);
    y += part.height + gapPx;
  }
  await writeFile(filePath, await sheet.encode("jpeg", 88));
  return { width, height };
}

/**
 * 컬럼 맨 위, 첫 배지보다 위에 있는 본문 글줄(앞 문항의 이어지는 풀이)의 상자. 없으면 null.
 * 대단원 배너(큰 글자)·쪽머리(작은 글자)·배너 라벨은 본문 크기가 아니므로 제외한다.
 */
function continuationBox(tokens, column, firstBadge, badgeHeight, columnBox) {
  // 대단원 배너의 큰 숫자(「01」)는 컬럼 왼쪽에 붙는다. 그림의 세로 축 라벨처럼 오른쪽에 있는 큰 글자는 배너가 아니다.
  const bannerBottom = Math.max(0, ...tokens
    .filter((token) => token.h >= badgeHeight + 2 && token.x >= column.left - 10 && token.x < column.left + 60 && token.y < firstBadge.y)
    .map((token) => token.y + 4));
  const bodyTokens = tokens.filter((token) =>
    token.str.trim()
    && token.w > 0
    && token.h >= 8.5
    && token.h < badgeHeight - 0.3
    && token.x >= column.left - 10
    && token.x < column.right
    && token.y > bannerBottom
    && token.y < firstBadge.y - firstBadge.h - 2);
  if (bodyTokens.length === 0) return null;
  const top = Math.min(...bodyTokens.map((token) => token.y - token.h));
  return { x0: columnBox.x0, x1: columnBox.x1, y0: Math.max(0, top - 4), y1: firstBadge.y - firstBadge.h - 4 };
}

async function ingestSolutions({ pdfPath, outDir, bookId, dpi }) {
  const { doc, pages } = await loadPages(pdfPath);
  const badgeHeight = detectBadgeHeight(pages.map((page) => page.tokens));
  if (!badgeHeight) throw new Error("해설 PDF 에서 4자리 번호를 찾지 못했습니다.");
  const renderScale = dpi / 72;
  const solutions = [];
  const answers = [];
  const seen = new Set();
  let gutterProfile = null;
  // 아직 파일로 안 쓴 마지막 문항. 다음 컬럼 맨 위의 이어지는 풀이를 여기에 붙인다.
  let pending = null;

  async function flushPending() {
    if (!pending) return;
    const { number, parts, answerParts, meta } = pending;
    const file = `solutions/${bookId}-${number}.jpg`;
    const size = await writeStacked(parts, path.join(outDir, file), Math.round(6 * renderScale));
    solutions.push({ number_label: number, file, parts: parts.length, ...meta, ...size });
    if (answerParts.length) {
      const answerFile = `answers/${bookId}-${number}.jpg`;
      const answerSize = await writeStacked(answerParts, path.join(outDir, answerFile), Math.round(3 * renderScale));
      answers.push({ number_label: number, file: answerFile, parts: answerParts.length, pdf_page: meta.pdf_page, ...answerSize });
    }
    pending = null;
  }

  for (const info of pages) {
    const { tokens, width: pageWidth, height: pageHeight } = info;
    const segmentation = segmentPage(tokens, {
      badgeHeight,
      pageWidth,
      pageHeight,
      bodyBottom: pageHeight * BODY_BOTTOM_RATIO,
      markerPattern: SOLUTION_BANNER_PATTERN
    });
    if (segmentation.segments.length === 0) continue;
    const page = await doc.getPage(info.pageNumber);
    const { canvas, context } = await renderPage(page, renderScale);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const columns = segmentation.columns;
    if (columns.length === 2 && !gutterProfile) {
      const gutterX = findGutterX(imageData, canvas.width, canvas.height, renderScale, columns[0].left + 60, columns[1].left - 10, pageHeight * 0.15, pageHeight * 0.85);
      gutterProfile = gutterX > 0 ? { gutterX, columnWidth: gutterX - columns[0].left } : null;
    }
    const qaBoxes = [];
    const columnBoxOf = (columnIndex) => {
      const column = columns[columnIndex];
      if (columns.length === 2 && gutterProfile) return { x0: column.left - 8, x1: column.left + gutterProfile.columnWidth - 3 };
      return { x0: column.left - 8, x1: column.right - (columnIndex === columns.length - 1 ? 0 : 6) };
    };
    // 상자 안의 「답」 아이콘마다 그 줄(분수 위아래 포함)의 띠를 돌려준다.
    const answerBandsFor = (box) => tokens
      .filter((token) => token.str === ANSWER_ICON && token.x >= box.x0 && token.x < box.x1 && token.y > box.y0 && token.y <= box.y1)
      .map((icon) => {
        const band = inkBand(imageData, canvas.width, renderScale, { x0: icon.x - 1.5, x1: box.x1 }, icon.y - icon.h / 2, { maxUp: 15, maxDown: 16, gapPt: 1.6 });
        // 답이 그래프·표처럼 한 글줄보다 크면(잉크가 띠 한계까지 이어지면) 문항 상자 끝까지 넓힌다.
        const figure = band && (band.clippedTop || band.clippedBottom);
        const rough = {
          x0: icon.x - 1.5,
          x1: box.x1,
          y0: figure ? Math.min(band.top, icon.y - icon.h) - 2 : band ? band.top - 1.5 : icon.y - icon.h - 2,
          y1: figure ? box.y1 : band ? band.bottom + 1.5 : icon.y + 3
        };
        const right = inkRightEdge(imageData, canvas.width, renderScale, rough);
        return right > 0 ? { ...rough, x1: Math.min(box.x1, right + 2) } : rough;
      });

    for (let columnIndex = 0; columnIndex < columns.length; columnIndex += 1) {
      const columnSegments = segmentation.segments.filter((segment) => segment.column === columnIndex).sort((a, b) => a.y0 - b.y0);
      if (columnSegments.length === 0) continue;
      const columnBox = columnBoxOf(columnIndex);
      // 컬럼 맨 위의 이어지는 풀이 → 직전 문항에 붙인다.
      if (pending) {
        const continuation = continuationBox(tokens, columns[columnIndex], columnSegments[0].badge, badgeHeight, columnBox);
        if (continuation) {
          const ink = inkExtent(imageData, canvas.width, renderScale, { ...continuation, x0: continuation.x0 + 2, x1: continuation.x1 - 2 }, { iconZonePt: 0 });
          const box = ink ? { ...continuation, y0: Math.max(continuation.y0, ink.top - 3), y1: Math.min(continuation.y1, ink.bottom + 4) } : continuation;
          pending.parts.push(cropToCanvas(canvas, renderScale, box));
          for (const band of answerBandsFor(box)) pending.answerParts.push(cropToCanvas(canvas, renderScale, band));
          pending.meta.continued_on = info.pageNumber;
          qaBoxes.push({ label: `${pending.number}+`, box, color: "#b45309" });
        }
      }
      await flushPending();

      for (const segment of columnSegments) {
        if (seen.has(segment.number)) continue;
        await flushPending();
        const ink = inkExtent(imageData, canvas.width, renderScale, { x0: columnBox.x0 + 2, x1: columnBox.x1 - 2, y0: segment.y0, y1: segment.y1 }, { iconZonePt: 0 });
        const box = { ...columnBox, y0: segment.y0, y1: ink ? Math.min(segment.y1, ink.bottom + 5) : segment.y1 };
        seen.add(segment.number);
        const answerBands = answerBandsFor(box);
        pending = {
          number: segment.number,
          parts: [cropToCanvas(canvas, renderScale, box)],
          answerParts: answerBands.map((band) => cropToCanvas(canvas, renderScale, band)),
          meta: {
            pdf_page: info.pageNumber,
            bbox_normalized: [box.x0 / pageWidth, box.y0 / pageHeight, box.x1 / pageWidth, box.y1 / pageHeight].map((value) => Number(value.toFixed(5))),
            flags: ink ? [] : ["no_ink"]
          }
        };
        qaBoxes.push({ label: segment.number, box });
        for (const band of answerBands) qaBoxes.push({ box: band, color: "#c026d3" });
      }
    }
    await drawQa(canvas, pageWidth, pageHeight, qaBoxes, path.join(outDir, "qa", `solution-p${String(info.pageNumber).padStart(3, "0")}.jpg`));
    console.log(`해설 p${info.pageNumber}: ${qaBoxes.filter((entry) => entry.label && !entry.label.endsWith("+")).length}개`);
    page.cleanup();
  }
  await flushPending();
  return { solutions, answers, badgeHeight };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.out || !args.solutions) {
    console.error("사용: --solutions <해설.pdf> --out <문항 패키지 폴더> [--book-id <pbk_…>] [--dpi 220]");
    process.exit(2);
  }
  const outDir = path.resolve(args.out);
  let bookId = String(args["book-id"] ?? "");
  if (!bookId) {
    const itemManifest = await readFile(path.join(outDir, "manifest.json"), "utf8").then(JSON.parse).catch(() => null);
    bookId = String(itemManifest?.book?.book_id ?? "");
    if (!bookId) throw new Error("--book-id 가 없고 --out 폴더에 manifest.json 도 없습니다. 문항 패키지 폴더를 --out 으로 주거나 --book-id 를 지정하세요.");
    console.log(`book_id ${bookId} (manifest.json 에서 읽음)`);
  }
  if (!/^pbk_[a-f0-9]{6,32}$/.test(bookId)) throw new Error("--book-id 는 교재관리에 등록된 pbk_… 값이어야 합니다.");
  const dpi = Number(args.dpi) || 220;
  await Promise.all(["answers", "solutions", "qa"].map((dir) => mkdir(path.join(outDir, dir), { recursive: true })));

  const { solutions, answers } = await ingestSolutions({ pdfPath: String(args.solutions), outDir, bookId, dpi });
  const withoutAnswer = solutions.filter((entry) => !answers.some((answer) => answer.number_label === entry.number_label)).map((entry) => entry.number_label);
  const manifest = {
    schema_version: 1,
    book_id: bookId,
    ingest_version: INGEST_VERSION,
    source_file_name: path.basename(String(args.solutions)),
    solutions,
    answers,
    validation: {
      solutions: {
        count: solutions.length,
        continuity: checkNumberContinuity(solutions.map((entry) => entry.number_label)),
        flagged: solutions.filter((entry) => entry.flags.length).map((entry) => entry.number_label),
        continued: solutions.filter((entry) => entry.parts > 1).map((entry) => entry.number_label)
      },
      answers: { count: answers.length, missing: withoutAnswer }
    }
  };
  await writeFile(path.join(outDir, "manifest-answers.json"), JSON.stringify(manifest, null, 2), "utf8");
  console.log(`\n해설 ${solutions.length}개 · 답 줄 ${answers.length}개 · 이어 붙인 풀이 ${manifest.validation.solutions.continued.length}개`);
  console.log(JSON.stringify(manifest.validation));
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
