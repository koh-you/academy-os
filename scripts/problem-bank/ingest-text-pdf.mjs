#!/usr/bin/env node
// 텍스트 PDF(벡터 교재) → 문항 패키지(manifest.json + 문항 이미지). 비전 AI 호출 0.
//
// 사용:
//   node scripts/problem-bank/ingest-text-pdf.mjs --pdf "C:/…/rpm 중3-2 수학.pdf" --out output/problem-bank/rpm-m3-2 \
//     --title "RPM 중3-2 수학" --folder "중3 / RPM" --grade 중3 --subject 수학 [--pages 8-117] [--dpi 220]
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
  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const textContent = await page.getTextContent();
    pageTokens.set(pageNumber, toViewportTokens(textContent, viewport));
    pageSizes.set(pageNumber, { width: viewport.width, height: viewport.height });
    page.cleanup();
  }
  const badgeHeight = detectBadgeHeight([...pageTokens.values()]);
  if (!badgeHeight) {
    throw new Error("번호 배지(4자리 숫자)를 찾지 못했습니다. 텍스트 레이어가 없는 PDF 인지 확인하세요.");
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
    const footerUnit = readFooterUnit(tokens, pageHeight, badgeHeight);
    const printedPageToken = tokens
      .filter((token) => token.y > pageHeight * 0.94 && /^\d{1,3}$/.test(token.str.trim()) && token.h >= badgeHeight - 1)
      .sort((a, b) => a.x - b.x)
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
  console.log(`\n문항 ${items.length}개 · 단원 ${units.length}개 · flagged ${flagged.length}개 · 번호 연속 ${validation.numbers_contiguous ? "OK" : "끊김 " + JSON.stringify(continuity.gaps)}`);
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
