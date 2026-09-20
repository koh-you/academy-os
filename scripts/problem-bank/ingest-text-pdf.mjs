#!/usr/bin/env node
// 텍스트 PDF(벡터 교재) → 문항 패키지(manifest.json + 문항 이미지). 비전 AI 호출 0.
//
// 사용:
//   node scripts/problem-bank/ingest-text-pdf.mjs --pdf "C:/…/rpm 중3-2 수학.pdf" --out output/problem-bank/rpm-m3-2 \
//     --title "RPM 중3-2 수학" --folder "중3 / RPM" --grade 중3 --subject 수학 [--pages 8-117] [--dpi 220] [--ocr [--ocr-dpi 300]]
//   --ocr: 글자 레이어가 없는(글꼴 윤곽선화) PDF 는 쪽 렌더를 tesseract 로 읽어 같은 세그먼터를 돌린다(22개정 RPM 대수·기하·미적분·확통).
//
// 출력 폴더:
//   manifest.json     교재·단원·문항·영역(bbox·파일)·검수 상태
//   validation.json   번호 연속성·페이지별 개수·flagged 목록
//   items/*.jpg       문항 이미지 (dpi 기준 렌더 → 크롭)
//   pages/p###.jpg    페이지 미리보기 (100dpi)
//   qa/p###.jpg       경계 상자를 그린 검수용 페이지
//
// 경계는 src/domains/problems/textPdfSegmenter.js 가 글자 좌표로 정하고, 하단은 렌더 이미지의
// 잉크 투영으로 다시 조인다(그림이 마지막 글줄 아래로 내려오는 경우).

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import {
  checkNumberContinuity,
  detectBadgeHeight,
  readFooterUnit,
  segmentPage
} from "../../src/domains/problems/textPdfSegmenter.js";
import {
  cleanLabel,
  findGutterX,
  inkExtent,
  parseArgs,
  parsePageRange,
  pdfjs,
  renderPage,
  toViewportTokens
} from "./pdfTools.mjs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import os from "node:os";
import { findKoreanTessdata, findTesseract } from "./scanTools.mjs";
import { parseTesseractTsv } from "../../src/domains/problems/scanPdfSegmenter.js";
const execFileAsync = promisify(execFile);

/**
 * --ocr: 글자 레이어가 없는 PDF(글꼴이 윤곽선으로 바뀐 22개정 RPM 대수·기하·미적분·확통)를 쪽 렌더 + tesseract 로 읽어
 * 글자 레이어 토큰과 같은 꼴({str,x,y(baseline),w,h})로 만든다. 세그먼터(배지·지시문·유형 머리·바닥글)는 그대로 쓴다.
 * psm 11(흩어진 글) 결과를 쓰고, 같은 자리 토큰이 겹치면 신뢰도 높은 것만 남긴다.
 */
async function ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, tmpPath) {
  const scale = ocrDpi / 72;
  const { canvas } = await renderPage(page, scale);
  // OCR 용 사본(이진화): 밝기 225 미만은 검정, 나머지는 흰색. RPM 기하·미적분·확통은 배지 앞자리 0 이 연회색(밝기 190 안팎)이라
  // tesseract 가 「0001」을 「1」로 읽는다(대수는 네 자리가 같은 색). 연한 워터마크(밝기 235 이상)는 지워진다.
  {
    const ctx = canvas.getContext("2d");
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const px = image.data;
    for (let i = 0; i < px.length; i += 4) {
      const v = (px[i] + px[i + 1] + px[i + 2]) / 3 < 225 ? 0 : 255;
      px[i] = v; px[i + 1] = v; px[i + 2] = v;
    }
    const ocrCanvas = createCanvas(canvas.width, canvas.height);
    ocrCanvas.getContext("2d").putImageData(image, 0, 0);
    await writeFile(tmpPath, await ocrCanvas.encode("png"));
  }
  const tokens = [];
  for (const psm of [11, 6]) {
    const { stdout } = await execFileAsync(tesseract, [tmpPath, "-", "-l", tessdataDir ? "kor+eng" : "eng", "--psm", String(psm), "-c", "tessedit_create_tsv=1", "-c", "tessedit_create_txt=0", ...(tessdataDir ? ["--tessdata-dir", tessdataDir] : [])], { maxBuffer: 64 * 1024 * 1024, windowsHide: true });
    for (const token of parseTesseractTsv(stdout, scale)) {
      if ((token.conf < 30 && !/^\d{4}$/.test(token.text)) || token.h < 2) continue;
      const dup = tokens.find((other) => Math.abs(other.x - token.x) < 2 && Math.abs(other.y - token.y) < 2 && Math.abs(other.w - token.w) < 4);
      if (dup) { if (token.conf > dup.conf) Object.assign(dup, token); continue; }
      tokens.push({ ...token });
    }
  }
  // 글자 레이어에서는 배지(13pt)와 본문 숫자(9.5pt)가 글꼴 크기로 갈리지만 OCR 상자 높이로는 안 갈린다. RPM 배지는 색(초록)이 있고
  // 정확히 네 자리이므로, 3~4자리 숫자 토큰 중 「네 자리 + 색 있음」만 남기고 나머지(본문 숫자·「01|2」 소단원 코드)는 뺀다
  // (OCR 판은 draft 글자 힌트를 안 만들므로 잃는 것이 없다). 바닥글 줄(쪽번호 · 검정)은 그대로 둔다.
  const { width, height } = canvas;
  const data = canvas.getContext("2d").getImageData(0, 0, width, height).data;
  // 배지 초록은 안티에일리어싱으로 픽셀마다 채도가 흔들리므로(RPM 대수 실측 평균 105,160,137) 어두운 픽셀의 평균색으로 본다:
  // 평균의 최대-최소 채널 차가 15 넘으면 색 있음(검정 본문 숫자는 8 안팎 · 가는 「0001」은 21).
  const colored = (token) => {
    let dark = 0;
    const sum = [0, 0, 0];
    const x0 = Math.max(0, Math.round(token.x * scale)), x1 = Math.min(width, Math.round((token.x + token.w) * scale));
    const y0 = Math.max(0, Math.round(token.y * scale)), y1 = Math.min(height, Math.round((token.y + token.h) * scale));
    for (let y = y0; y < y1; y += 1) for (let x = x0; x < x1; x += 1) {
      const o = (y * width + x) * 4;
      const r = data[o], g = data[o + 1], b = data[o + 2];
      if ((r + g + b) / 3 > 190) continue;
      dark += 1; sum[0] += r; sum[1] += g; sum[2] += b;
    }
    if (!dark) return false;
    const mean = sum.map((v) => v / dark);
    return Math.max(...mean) - Math.min(...mean) > 15;
  };
  const pageHeightPt = height / scale;
  if (process.env.OCR_DEBUG) console.log("  4자리:", tokens.filter((t) => /^\d{4}$/.test(t.text)).map((t) => `${t.text}@${t.x.toFixed(0)},${t.y.toFixed(0)} h${t.h.toFixed(1)} c${t.conf.toFixed(0)}${colored(t) ? "" : "(검정)"}`).join(" "));
  const isBadge = (token) => /^\d{4}$/.test(token.text) && token.y < pageHeightPt * 0.93 && colored(token);
  // 지시문 「[0023~0026]」 은 OCR 이 괄호를 떼고 「0023」「0026」 만 줄 때가 있다 — 같은 줄 가까이에 「[」「~」「]」 토큰이 있으면 남긴다.
  const nearBracket = (token) => tokens.some((other) => other !== token && Math.abs(other.y - token.y) < 3 && Math.abs(other.x - token.x) < 60 && /[\[\]~]/.test(other.text));
  return tokens
    .filter((token) => !(/^\d{3,4}$/.test(token.text) && token.y < pageHeightPt * 0.93) || isBadge(token) || nearBracket(token))
    // 세그먼터 토큰: y 는 baseline(상자 아래변). 숫자 배지는 descender 가 없어 상자 높이 = 글자 높이.
    // fontName "ocr-badge" 는 색 있는 네 자리 번호 — 세그먼터가 배지를 이것만으로 고른다(지시문 번호가 배지가 되지 않게).
    .map((token) => ({ str: token.text, x: token.x, y: token.y + token.h, w: token.w, h: token.h, fontName: isBadge(token) ? "ocr-badge" : "ocr", conf: token.conf }));
}
const INGEST_VERSION = "text-pdf-1.0";

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <파일> --out <폴더> [--title] [--folder] [--grade] [--subject] [--pages a-b] [--dpi 220]");
    process.exit(2);
  }
  const dpi = Number(args.dpi) || 220;
  const renderScale = dpi / 72;
  const previewScale = 100 / 72;
  const pdfBytes = await readFile(args.pdf);
  const sha256 = createHash("sha256").update(pdfBytes).digest("hex");
  const outDir = path.resolve(args.out);
  await Promise.all(["items", "pages", "qa"].map((dir) => mkdir(path.join(outDir, dir), { recursive: true })));

  const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
  const [fromPage, toPage] = parsePageRange(args.pages, doc.numPages);
  const title = args.title || path.basename(args.pdf, path.extname(args.pdf));
  const bookId = `pbk_${sha256.slice(0, 10)}`;

  // 1) 전 페이지 글자 좌표 수집 (배지 높이는 교재 전체에서 정한다)
  const pageTokens = new Map();
  const pageSizes = new Map();
  const useOcr = Boolean(args.ocr);
  const tesseract = useOcr ? await findTesseract() : null;
  const tessdataDir = useOcr ? await findKoreanTessdata() : null;
  const ocrDpi = Number(args["ocr-dpi"]) || 300;
  const ocrTmp = path.join(os.tmpdir(), `ingest-ocr-${process.pid}.png`);
  if (useOcr) console.log(`OCR 모드: tesseract ${tessdataDir ? "kor+eng" : "eng"} · ${ocrDpi}dpi`);
  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    if (useOcr) {
      pageTokens.set(pageNumber, await ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, ocrTmp));
      if ((pageNumber - fromPage) % 10 === 9) console.log(`  OCR ${pageNumber}/${toPage}`);
    } else {
      const textContent = await page.getTextContent();
      pageTokens.set(pageNumber, toViewportTokens(textContent, viewport));
    }
    pageSizes.set(pageNumber, { width: viewport.width, height: viewport.height });
    page.cleanup();
  }
  const badgeHeight = detectBadgeHeight([...pageTokens.values()]);
  if (!badgeHeight) {
    throw new Error("번호 배지(4자리 숫자)를 찾지 못했습니다. 텍스트 레이어가 없는 PDF 이면 --ocr 를 붙이세요.");
  }
  console.log(`배지 글자 높이 ${badgeHeight}pt · 페이지 ${fromPage}~${toPage}`);

  // 2) 페이지별 세그먼트 → 렌더 → 잉크로 하단 조정 → 크롭
  const items = [];
  const units = [];
  const pageSummaries = [];
  const flagged = [];
  let gutterProfile = null;
  let currentChapter = "";
  let lastTypeLabel = "";

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const tokens = pageTokens.get(pageNumber);
    const { width: pageWidth, height: pageHeight } = pageSizes.get(pageNumber);
    // 바닥글은 쪽의 맨 아랫줄(가장 큰 y 에서 6pt 안)만 본다. 22개정 RPM 처럼 본문·숨은 풀이 글자가 바닥글 바로 위(0.94 이상)까지
    // 내려오는 판에서 「=40」 같은 본문 숫자가 단원 코드로 읽히지 않게 한다.
    const lowest = Math.max(...tokens.filter((token) => token.str.trim()).map((token) => token.y));
    const footerRow = tokens.filter((token) => token.y >= lowest - 6);
    const footerUnit = readFooterUnit(footerRow, pageHeight, badgeHeight);
    // 쪽번호: 바닥글 줄에서 가장 큰 숫자 글자(판마다 배지보다 작을 수 있다 · 22개정 11pt vs 배지 13pt).
    const printedPageToken = footerRow
      .filter((token) => /^\d{1,3}$/.test(token.str.trim()) && token.h >= 9)
      .sort((a, b) => a.h - b.h || a.x - b.x)
      .pop();
    const printedPage = printedPageToken ? Number(printedPageToken.str.trim()) : pageNumber;

    // 소단원(01. 삼각비)은 홀수 쪽 바닥글에만 있고 짝수 쪽은 대단원(I. 삼각비)이다.
    // 단원 트리는 소단원 기준으로 만들고, 대단원은 그 위 폴더 이름으로만 쓴다.
    if (footerUnit.level === "chapter") currentChapter = footerUnit.title;
    if (footerUnit.level === "unit" && !units.some((unit) => unit.code === footerUnit.code && unit.title === footerUnit.title)) {
      units.push({ position: units.length, code: footerUnit.code, title: footerUnit.title, chapter: currentChapter, firstItemIndex: items.length });
    }

    const segmentation = segmentPage(tokens, { badgeHeight, pageWidth, pageHeight });
    if (segmentation.segments.length === 0) {
      pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, count: 0 });
      continue;
    }

    const page = await doc.getPage(pageNumber);
    const { canvas, context } = await renderPage(page, renderScale);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // 컬럼 x 범위: 왼쪽 컬럼은 거터 점선 앞까지, 오른쪽 컬럼은 왼쪽과 같은 폭.
    const columns = segmentation.columns;
    if (columns.length === 2 && !gutterProfile) {
      const gutterX = findGutterX(
        imageData, canvas.width, canvas.height, renderScale,
        columns[0].left + 60, columns[1].left - 10, pageHeight * 0.15, pageHeight * 0.85
      );
      gutterProfile = gutterX > 0 ? { gutterX, columnWidth: gutterX - columns[0].left } : null;
      if (gutterProfile) console.log(`거터 x ${gutterProfile.gutterX.toFixed(1)}pt · 컬럼 폭 ${gutterProfile.columnWidth.toFixed(1)}pt`);
    }

    // 컬럼 x 범위를 거터 기준으로 다시 잡는다. 같은 행에 배지가 둘이면 세그먼트가 준 x 를 존중한다.
    function resolveX(segment) {
      if (!(columns.length === 2 && gutterProfile)) return { x0: segment.x0, x1: segment.x1 };
      const column = columns[segment.column];
      const columnX0 = column.left - 8;
      const columnX1 = column.left + gutterProfile.columnWidth - 3;
      const x0 = segment.x0 <= column.left - 5 ? columnX0 : segment.x0;
      const x1 = segment.x1 >= column.right - 7 ? columnX1 : segment.x1;
      return { x0, x1 };
    }
    async function cropToFile(box, file) {
      const sx = Math.round(box.x0 * renderScale);
      const sy = Math.round(box.y0 * renderScale);
      const sw = Math.max(1, Math.round((box.x1 - box.x0) * renderScale));
      const sh = Math.max(1, Math.round((box.y1 - box.y0) * renderScale));
      const crop = createCanvas(sw, sh);
      crop.getContext("2d").drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
      await writeFile(path.join(outDir, file), await crop.encode("jpeg", 88));
      return { width: sw, height: sh };
    }
    const toBbox = (box) => [box.x0 / pageWidth, box.y0 / pageHeight, box.x1 / pageWidth, box.y1 / pageHeight]
      .map((value) => Number(value.toFixed(5)));

    const pageItems = [];
    const refinedByNumber = new Map();
    for (const segment of segmentation.segments) {
      const { x0, x1 } = resolveX(segment);
      const ink = inkExtent(imageData, canvas.width, renderScale, { x0: x0 + 2, x1: x1 - 2, y0: segment.y0, y1: segment.y1 });
      const y0 = segment.y0;
      const y1 = ink ? Math.min(segment.y1, ink.bottom + 5) : segment.y1;
      refinedByNumber.set(segment.number, { x0, x1, y0, y1 });
      const itemId = `${bookId}-${segment.number}`;
      const file = `items/${itemId}.jpg`;
      const { width: sw, height: sh } = await cropToFile({ x0, x1, y0, y1 }, file);
      const bbox = toBbox({ x0, x1, y0, y1 });

      const reviewFlags = [];
      if (!ink) reviewFlags.push("no_ink");
      if (y1 - y0 < 10) reviewFlags.push("too_short");
      if (y1 - y0 > pageHeight * 0.85) reviewFlags.push("too_tall");
      const item = {
        item_id: itemId,
        number_label: segment.number,
        number_sort: Number.parseInt(segment.number, 10),
        printed_page: printedPage,
        pdf_page: pageNumber,
        column: segment.column,
        // 유형 헤더는 첫 문항 위에만 있고 다음 쪽으로 이어진 문항에는 없다. 읽는 순서상 직전 유형을 잇는다.
        type_label: cleanLabel(segment.typeTitle) || lastTypeLabel,
        tags: segment.tags,
        unit_index: units.length ? units.length - 1 : null,
        has_shared_passage: Boolean(segment.groupKey),
        group_key: segment.groupKey || "",
        review_status: reviewFlags.length ? "flagged" : "ai_checked",
        review_note: reviewFlags.join(","),
        regions: [{
          kind: "body",
          position: 0,
          pdf_page: pageNumber,
          bbox_normalized: bbox,
          file,
          width: sw,
          height: sh
        }]
      };
      lastTypeLabel = item.type_label;
      items.push(item);
      pageItems.push({ item, box: { x0, y0, x1, y1 } });
      if (reviewFlags.length) flagged.push({ item_id: itemId, flags: reviewFlags });
    }

    // 공통 지시문 그룹(「[0522~0524] 다음 자료의 평균을 구하시오.」): 지시문부터 범위 끝까지를
    // 한 장으로 잘라 그 범위 문항마다 passage 영역으로 붙인다. 그림이 문항 줄 옆까지 내려와도 안 잘린다.
    for (const group of segmentation.groups) {
      const { x0, x1 } = resolveX({ column: group.column, x0: group.x0, x1: group.x1 });
      const memberBoxes = group.memberNumbers.map((number) => refinedByNumber.get(number)).filter(Boolean);
      const y1 = memberBoxes.length ? Math.max(...memberBoxes.map((box) => box.y1)) : group.y1;
      const box = { x0, x1, y0: group.y0, y1 };
      const file = `items/${bookId}-group-${group.key}-p${pageNumber}.jpg`;
      const { width, height } = await cropToFile(box, file);
      const region = { kind: "passage", position: 1, pdf_page: pageNumber, bbox_normalized: toBbox(box), file, width, height };
      for (const number of group.memberNumbers) {
        const entry = pageItems.find(({ item }) => item.number_label === number);
        if (entry) entry.item.regions.push(region);
      }
      pageItems.push({ item: { number_label: `[${group.from}~${group.to}]` }, box, isGroup: true });
    }

    // 미리보기 + 검수용 상자 그림
    const previewCanvas = createCanvas(Math.ceil(pageWidth * previewScale), Math.ceil(pageHeight * previewScale));
    const previewContext = previewCanvas.getContext("2d");
    previewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, previewCanvas.width, previewCanvas.height);
    await writeFile(path.join(outDir, "pages", `p${String(pageNumber).padStart(3, "0")}.jpg`), await previewCanvas.encode("jpeg", 82));
    previewContext.lineWidth = 2;
    previewContext.strokeStyle = "#176e59";
    previewContext.fillStyle = "#176e59";
    previewContext.font = "bold 14px sans-serif";
    for (const { item, box, isGroup } of pageItems) {
      previewContext.strokeStyle = isGroup ? "#b7211e" : "#176e59";
      previewContext.fillStyle = previewContext.strokeStyle;
      previewContext.setLineDash(isGroup ? [6, 4] : []);
      previewContext.strokeRect(box.x0 * previewScale, box.y0 * previewScale, (box.x1 - box.x0) * previewScale, (box.y1 - box.y0) * previewScale);
      previewContext.fillText(item.number_label, box.x0 * previewScale + 4, box.y0 * previewScale + 16);
    }
    await writeFile(path.join(outDir, "qa", `p${String(pageNumber).padStart(3, "0")}.jpg`), await previewCanvas.encode("jpeg", 82));

    const itemCount = pageItems.filter((entry) => !entry.isGroup).length;
    pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, count: itemCount, groups: segmentation.groups.length });
    console.log(`p${pageNumber} (${printedPage}쪽) 문항 ${itemCount}개${segmentation.groups.length ? ` · 공통지시문 ${segmentation.groups.length}` : ""}${footerUnit.title ? ` · ${footerUnit.code} ${footerUnit.title}` : ""}`);
    page.cleanup();
  }

  // OCR 판: 색 있는 네 자리 숫자를 오독한 가짜 배지(본문의 「4225」 등)는 앞뒤 번호와 동떨어진다 — 앞 유효 번호 + 1 에서 40 넘게 벗어나고
  // 다음 문항이 그 번호를 잇지 않으면 뺀다(문항 이미지는 남지만 manifest 에서 빠진다).
  if (useOcr) {
    const kept = [];
    for (const [index, item] of items.entries()) {
      const n = Number(item.number_label);
      const prev = kept.length ? Number(kept[kept.length - 1].number_label) : n - 1;
      const next = items[index + 1] ? Number(items[index + 1].number_label) : null;
      const isolated = Math.abs(n - (prev + 1)) > 40 && !(next != null && Math.abs(next - (n + 1)) <= 2);
      if (isolated) { console.log(`  가짜 배지 제외: ${item.number_label} (p${item.pdf_page})`); continue; }
      kept.push(item);
    }
    const removed = items.length - kept.length;
    items.length = 0; items.push(...kept);
    if (removed) for (const unit of units) unit.firstItemIndex = Math.min(unit.firstItemIndex, items.length);
  }
  // 3) 단원 범위 · 검증
  units.forEach((unit, index) => {
    const nextFirst = units[index + 1]?.firstItemIndex ?? items.length;
    unit.item_number_from = items[unit.firstItemIndex]?.number_label ?? "";
    unit.item_number_to = items[nextFirst - 1]?.number_label ?? "";
    unit.item_count = Math.max(0, nextFirst - unit.firstItemIndex);
  });
  const continuity = checkNumberContinuity(items.map((item) => item.number_label));
  const validation = {
    count: items.length,
    badge_height_pt: badgeHeight,
    gutter: gutterProfile,
    page_counts: Object.fromEntries(pageSummaries.map((summary) => [summary.pdf_page, summary.count])),
    numbers_contiguous: continuity.gaps.length === 0 && continuity.duplicates.length === 0,
    continuity,
    flagged,
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
      source_kind: "pdf_text",
      source_file_name: path.basename(args.pdf),
      source_sha256: sha256,
      page_count: doc.numPages,
      pages_ingested: [fromPage, toPage],
      item_count: items.length,
      layout_profile: { badge_height_pt: badgeHeight, gutter: gutterProfile, render_dpi: dpi },
      ingest_version: INGEST_VERSION
    },
    units: units.map(({ firstItemIndex, ...unit }) => unit),
    items,
    pages: pageSummaries
  };
  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  await writeFile(path.join(outDir, "validation.json"), JSON.stringify(validation, null, 2), "utf8");
  // OCR 판은 글자 레이어 대신 이 토큰(쪽 pt · y 는 baseline)을 prepare-text-pdf-bank 가 힌트·그림 판정에 쓴다.
  if (useOcr) await writeFile(path.join(outDir, "ocr-tokens.json"), JSON.stringify({ dpi: ocrDpi, pages: Object.fromEntries([...pageTokens].map(([n, tokens]) => [n, tokens.map(({ str, x, y, w, h, fontName }) => ({ str, x, y, w, h, fontName }))])) }), "utf8");
  console.log(`\n문항 ${items.length}개 · 단원 ${units.length}개 · flagged ${flagged.length}개 · 번호 연속 ${validation.numbers_contiguous ? "OK" : "끊김 " + JSON.stringify(continuity.gaps)}`);
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
