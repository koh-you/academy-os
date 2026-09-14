#!/usr/bin/env node
// 스캔 PDF(글자 레이어 없음 · EBS 올림포스류) → 문항 패키지(manifest.json + 문항 이미지). 비전 AI 호출 0.
//
// 사용:
//   node scripts/problem-bank/ingest-scan-pdf.mjs --pdf "C:/…/올림포스 공통수학1.pdf" --out output/problem-bank/olympos-cm1 \
//     --title "올림포스 공통수학1" --folder "고1 / 올림포스" --grade 고1 --subject 수학 [--pages 9-15] [--dpi 220]
//
// 필요: tesseract 5 (winget UB-Mannheim.TesseractOCR). 한글 모델(kor.traineddata)은 %LOCALAPPDATA%\tessdata 에
// 두면 구역 이름·소단원을 읽고, 없으면 문항 코드(숫자)만으로 진행한다.
//
// 한 쪽 처리 순서: 렌더(/Rotate 반영) → 기울기 보정 → tesseract(eng, 흩어진 글자 모드) → 「25445-0017」 코드 토큰 →
// 코드 줄의 색 배지로 왼쪽, 코드 오른쪽으로 오른쪽, 같은 컬럼 다음 코드·잉크 빈 줄로 아래 → 크롭.
// 출력 형식은 ingest-text-pdf.mjs 와 같아 교재관리 「패키지 등록」이 그대로 받는다.

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import {
  findDottedGutter,
  findKoreanTessdata,
  findTesseract,
  groupTokenLines,
  joinLineTokens,
  makeBadgeFinder,
  makeBottomFinder,
  measureBandColor,
  measureBodyLeft,
  rotateCanvas,
  runTesseract,
  sampleDarkPoints
} from "./scanTools.mjs";
import {
  buildItemBoxes,
  checkCodeContinuity,
  estimateSkewDegrees,
  filterPlausibleCodes,
  findItemCodes,
  groupCodesByColumn,
  isSameUnitTitle,
  normalizeUnitTitle,
  parseTesseractTsv,
  rotatePoint,
  readFooterPage,
  readFooterUnit,
  readHeaderUnit,
  readOpenerUnit,
  readSectionLabel,
  sectionFromBadgeColor
} from "../../src/domains/problems/scanPdfSegmenter.js";
import { parseArgs, parsePageRange, pdfjs, renderPage } from "./pdfTools.mjs";

const INGEST_VERSION = "scan-pdf-1.0";
const SECTION_TITLE_WORDS = /종합문제|수행평가|서술형|고난도|유형|익히기|정답|풀이|올림포스|공통수학|개념|단원명/;

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <파일> --out <폴더> [--title] [--folder] [--grade] [--subject] [--pages a-b] [--dpi 220]");
    process.exit(2);
  }
  const dpi = Number(args.dpi) || 220;
  const renderScale = dpi / 72;
  const previewScale = 100 / 72;
  const tesseract = await findTesseract();
  const koreanTessdata = await findKoreanTessdata();
  console.log(`tesseract: ${tesseract}${koreanTessdata ? ` · 한글 모델 ${koreanTessdata}` : " · 한글 모델 없음(구역·단원 이름 생략)"}`);

  const pdfBytes = await readFile(args.pdf);
  const sha256 = createHash("sha256").update(pdfBytes).digest("hex");
  const outDir = path.resolve(args.out);
  const tmpDir = path.join(os.tmpdir(), `problem-bank-scan-${sha256.slice(0, 8)}`);
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
  let codePrefix = "";
  let currentSection = "";
  let currentChapter = "";
  let lastPrintedPage = null;
  let lastNumber = null;
  let assessmentPageOrdinal = 0;
  let pendingOpener = null;
  const droppedCodes = [];
  const sectionCounters = new Map();

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const pageWidth = viewport.width;
    const pageHeight = viewport.height;
    let { canvas, context } = await renderPage(page, renderScale);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // OCR 은 회전 보간으로 흐려지기 전의 원본 렌더에서 한다. 흩어진 글자(11)·블록(6) 두 모드가 서로 놓치는
    // 코드를 보완하므로 둘을 합친다.
    const pagePng = path.join(tmpDir, `p${pageNumber}.png`);
    await writeFile(pagePng, await canvas.encode("png"));
    let tokens = [
      ...parseTesseractTsv(await runTesseract(tesseract, pagePng, { lang: "eng", psm: 11 }), renderScale),
      ...parseTesseractTsv(await runTesseract(tesseract, pagePng, { lang: "eng", psm: 6 }), renderScale)
    ];

    // 기울기 보정 — 1/4 표본으로 각도를 재고 0.15° 이상이면 캔버스를 돌리고 토큰 좌표도 같이 옮긴다.
    const skewStep = 4;
    const skew = estimateSkewDegrees(sampleDarkPoints(imageData, canvas.width, canvas.height, skewStep), Math.ceil(canvas.height / skewStep));
    if (Math.abs(skew) >= 0.15) {
      canvas = rotateCanvas(canvas, skew);
      context = canvas.getContext("2d");
      imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
      tokens = tokens.map((token) => {
        const center = rotatePoint(token.x + token.w / 2, token.y + token.h / 2, skew, pageWidth / 2, pageHeight / 2);
        return { ...token, x: center.x - token.w / 2, y: center.y - token.h / 2 };
      });
    }
    const { prefix, codes: rawCodes } = findItemCodes(tokens, { prefix: codePrefix });
    if (!codePrefix && prefix) {
      codePrefix = prefix;
      console.log(`문항 코드 접두 ${codePrefix}`);
    }
    const { kept: codes, dropped } = filterPlausibleCodes(rawCodes, lastNumber);
    for (const code of dropped) droppedCodes.push({ pdf_page: pageNumber, number: code.number, conf: code.conf, y: Number(code.y.toFixed(1)) });
    if (codes.length) lastNumber = Math.max(lastNumber ?? 0, ...codes.map((code) => Number.parseInt(code.number, 10)));

    const gutterX = findDottedGutter(imageData, canvas.width, canvas.height, renderScale, pageWidth, pageHeight);
    // 서술형 연습장은 왼쪽이 풀이 예시라 코드가 오른쪽 컬럼에만 있다 — 머리글을 못 읽어도 이 모양으로 안다.
    const gutterXForSection = (pageCodes) => (pageCodes.length <= 4 && pageCodes.every((code) => code.x > pageWidth * 0.5) && !pageCodes.some((code) => code.x + code.w > pageWidth * 0.97) ? "right_only" : "");

    const bodyLeft = measureBodyLeft(imageData, canvas.width, canvas.height, renderScale);
    const columns = groupCodesByColumn(codes);
    const colorBadge = makeBadgeFinder(imageData, canvas.width, canvas.height, renderScale);
    // 수행평가처럼 배지가 검정 숫자인 쪽은 색으로 못 잡는다 — 같은 띠의 큰(9pt 이상) 1~2자리 숫자 토큰을 배지로 본다.
    const tokenBadge = (band) => {
      const hit = tokens
        .filter((token) => /^\d{1,2}$/.test(token.text) && token.h >= 9 && token.x >= band.x0 && token.x + token.w <= band.x1 && token.y + token.h / 2 >= band.y0 && token.y + token.h / 2 <= band.y1)
        .sort((a, b) => a.x - b.x)[0];
      return hit ? hit.x : null;
    };
    const boxes = buildItemBoxes(columns, {
      pageWidth,
      pageHeight,
      gutterX,
      findBadgeLeft: (band) => colorBadge(band) ?? tokenBadge(band),
      findContentBottom: makeBottomFinder(imageData, canvas.width, canvas.height, renderScale),
      fallbackLeft: (column) => (column.index > 0 || (gutterX > 0 && column.right > gutterX + 20) ? (gutterX > 0 ? gutterX + 8 : pageWidth / 2 + 6) : bodyLeft)
    });


    // 바닥글 쪽 번호(작은 숫자) — 없으면 PDF 쪽 번호
    const printedPageToken = tokens
      .filter((token) => token.y > pageHeight * 0.93 && /^\d{1,3}$/.test(token.text) && token.conf >= 60)
      .sort((a, b) => b.conf - a.conf)[0];
    let printedPage = printedPageToken ? Number(printedPageToken.text) : pageNumber;
    let ocrDebug = null;

    // 구역·소단원(한글) — 머리글·바닥글 띠만 따로 읽는다.
    const previousSection = currentSection;
    let sectionLabel = "";
    let sectionTags = [];
    let footerUnit = null;
    let openerUnit = null;
    let headerUnit = null;
    let bigTitle = "";
    if (koreanTessdata) {
      const stripPng = async (name, y0, y1) => {
        const strip = createCanvas(canvas.width, Math.ceil((y1 - y0) * renderScale));
        strip.getContext("2d").drawImage(canvas, 0, Math.floor(y0 * renderScale), canvas.width, strip.height, 0, 0, canvas.width, strip.height);
        const file = path.join(tmpDir, `p${pageNumber}-${name}.png`);
        await writeFile(file, await strip.encode("png"));
        return file;
      };
      // 머리글은 글자가 크고 아이콘이 섞여 두 모드가 서로 다른 줄을 읽는다. 둘을 합쳐 본다.
      const headPng = await stripPng("head", pageHeight * 0.06, pageHeight * 0.3);
      const headTokens = parseTesseractTsv(await runTesseract(tesseract, headPng, { lang: "kor", psm: 6, tessdataDir: koreanTessdata, output: "tsv" }), renderScale);
      const headerText = [
        groupTokenLines(headTokens).map((line) => line.map((token) => token.text).join(" ")).join("\n"),
        groupTokenLines(headTokens).map(joinLineTokens).join("\n"),
        await runTesseract(tesseract, headPng, { lang: "kor", psm: 11, tessdataDir: koreanTessdata, output: "txt" })
      ].join("\n");
      // 단원 시작 쪽의 큰 제목(16pt 이상 한글 줄) — 작은 바닥글보다 믿을 만한 단원 이름.
      bigTitle = codes.length === 0
        ? groupTokenLines(headTokens.filter((token) => token.h >= 16 && token.conf >= 70 && /^[가-힣·\s]+$/.test(token.text)))
          .map((line) => joinLineTokens(line).replace(/[^가-힣\s·]/g, "").replace(/\s+/g, " ").trim())
          .find((text) => text.length >= 3 && !SECTION_TITLE_WORDS.test(text.replace(/\s+/g, ""))) || ""
        : "";
      const footerText = await runTesseract(tesseract, await stripPng("foot", pageHeight * 0.93, pageHeight * 0.985), { lang: "kor", psm: 6, tessdataDir: koreanTessdata, output: "txt" });
      // 「대단원 종합문제」「수행평가」는 머리글이 LEVEL·이름표라 바닥글에서만 읽힌다.
      sectionLabel = readSectionLabel(`${headerText}\n${footerText}`);
      sectionTags = /서술형/.test(headerText.replace(/\s+/g, "")) && sectionLabel !== "서술형 연습장" ? ["서술형"] : [];
      // 단원 시작 쪽은 큰 번호(20pt 이상 두 자리 숫자)가 머리글 띠에 있다. 정답 쪽의 「01 …」 줄과 구분한다.
      const hasBigNumber = tokens.some((token) => /^\d{2}$/.test(token.text) && token.h >= 20 && token.y < pageHeight * 0.3);
      openerUnit = codes.length === 0 && hasBigNumber ? readOpenerUnit(headerText) : null;
      // 단원 시작 쪽은 문항 쪽 다음의 첫 문항 없는 쪽이다. 뒤따르는 개념 쪽의 큰 글자로 덮어쓰지 않는다.
      if (bigTitle && !pendingOpener) pendingOpener = { title: bigTitle, page: pageNumber };
      headerUnit = readHeaderUnit(headerText);
      footerUnit = openerUnit || headerUnit || readFooterUnit(footerText);
      if (!sectionLabel && codes.length && currentSection === "유형 확인" && gutterXForSection(codes) === "right_only") sectionLabel = "서술형 연습장";
      // 고난도 다음에 오는 2단 6문항 쪽은 대단원 종합문제다(새 단원은 전폭 2문항 쪽으로 시작한다).
      if (!sectionLabel && codes.length >= 5 && currentSection === "내신·수능 고난도" && codes.some((code) => code.x + code.w < pageWidth * 0.6)) sectionLabel = "대단원 종합문제";
      const footerPage = readFooterPage(footerText);
      if (footerPage) printedPage = footerPage;
      ocrDebug = { header: headerText.replace(/\s+/g, " ").trim().slice(0, 120), footer: footerText.replace(/\s+/g, " ").trim(), big_title: bigTitle };
    }
    // 바닥글 쪽 번호가 앞 쪽과 이어지지 않으면(「446」처럼 잘못 읽힘) 앞 쪽 + 1 로 잡는다.
    if (lastPrintedPage !== null && Math.abs(printedPage - (lastPrintedPage + 1)) > 2) printedPage = lastPrintedPage + 1;
    lastPrintedPage = printedPage;
    // 머리글·바닥글에서 구역을 못 읽은 쪽은 모양·배지 색으로 정한다. 새 단원의 기본 유형 쪽(전폭 1~3문항)을
    // 종합문제 뒤에 그대로 이어 붙이지 않도록, 여기서 정한 뒤에 단원 판단을 한다.
    if (!sectionLabel && codes.length) {
      const allWide = boxes.every((box) => box.layout === "wide");
      if (allWide && boxes.length <= 3 && ["대단원 종합문제", "수행평가", "내신·수능 고난도"].includes(currentSection)) sectionLabel = "기본 유형 익히기";
    }
    if (!sectionLabel && codes.length) {
      const first = columns[0]?.codes[0];
      const color = first ? measureBandColor(imageData, canvas.width, canvas.height, renderScale, { x0: 0, x1: first.x - 2, y0: first.y - 6, y1: first.y + first.h + 12 }) : null;
      sectionLabel = sectionFromBadgeColor(color, { allWide: boxes.every((box) => box.layout === "wide"), previous: currentSection });
    }
    if (sectionLabel) currentSection = sectionLabel;
    // 대단원 종합문제는 소단원이 아니라 대단원 것이다 — 앞 소단원들을 묶는 단원을 하나 만든다.
    if (currentSection === "대단원 종합문제" && codes.length && !(units[units.length - 1]?.kind === "review") && (sectionLabel === "대단원 종합문제" || previousSection === "내신·수능 고난도")) {
      const regular = units.filter((unit) => unit.kind !== "review");
      const since = regular.filter((unit) => !unit.reviewed);
      since.forEach((unit) => { unit.reviewed = true; });
      const codesLabel = since.length ? `${since[0].code}~${since[since.length - 1].code}` : String(regular.length).padStart(2, "0");
      units.push({ position: units.length, kind: "review", code: `R${codesLabel}`, title: `대단원 종합문제 (${codesLabel})`, variants: new Map(), chapter: currentChapter, firstItemIndex: items.length, lastSeenPage: pageNumber });
    }
    if (units[units.length - 1]?.kind === "review" && currentSection === "대단원 종합문제") units[units.length - 1].lastSeenPage = pageNumber;
    // 수행평가 쪽은 「단원명 01 다항식의 연산」 이름표로 소단원을 가리킨다.
    let assessmentUnitIndex = null;
    if (currentSection === "수행평가" && codes.length) {
      const match = (ocrDebug?.header || "").match(/단원명\s*(\d{2})/) || (ocrDebug?.header || "").match(/(\d{2})\s*[가-힣]{2,}/);
      const code = match ? match[1] : "";
      const index = units.findIndex((unit) => unit.kind !== "review" && unit.code === code);
      assessmentUnitIndex = index >= 0 ? index : null;
      if (assessmentUnitIndex === null) {
        // 이름표를 못 읽으면 수행평가 쪽 순서대로 소단원에 붙인다.
        const regular = units.map((unit, unitIndex) => ({ unit, unitIndex })).filter(({ unit }) => unit.kind !== "review");
        assessmentUnitIndex = regular[Math.min(assessmentPageOrdinal, regular.length - 1)]?.unitIndex ?? null;
      }
      assessmentPageOrdinal += 1;
    }
    // 같은 소단원이 머리글(「01 다항식의연산」)과 바닥글(「이 다항식의 연산」)에서 띄어쓰기·코드가 다르게 읽힌다.
    if (footerUnit) {
      const last = units[units.length - 1];
      const expectedCode = String(units.filter((unit) => unit.kind !== "review").length + 1).padStart(2, "0");
      const existing = units.find((unit) => isSameUnitTitle(unit.title, footerUnit.title));
      if (existing) {
        if (!existing.code && footerUnit.code) existing.code = footerUnit.code;
        // 단원 시작 쪽의 큰 제목은 바닥글 작은 글자보다 믿을 만하다 — 가중치 3.
        existing.variants.set(footerUnit.title, (existing.variants.get(footerUnit.title) || 0) + (openerUnit ? 3 : 1));
        existing.lastSeenPage = pageNumber;
      } else if (footerUnit.code === expectedCode || (units.length === 0 && codes.length > 0)) {
        // 새 단원은 번호가 이어질 때만 만든다(OCR 오차·정답 쪽 바닥글 방지). 첫 단원은 「01」이 「이」로 읽혀도 만든다.
        // 앞 단원이 마지막으로 보인 쪽 다음부터의 문항(기본 유형 쪽)은 이 단원 것이다.
        const firstItemIndex = last ? items.findIndex((item) => item.pdf_page > last.lastSeenPage) : 0;
        units.push({
          position: units.length,
          code: footerUnit.code || expectedCode,
          title: footerUnit.title,
          variants: new Map([[footerUnit.title, openerUnit ? 3 : 1]]),
          chapter: currentChapter,
          firstItemIndex: firstItemIndex === -1 ? items.length : firstItemIndex,
          lastSeenPage: pageNumber
        });
        for (let index = units[units.length - 1].firstItemIndex; index < items.length; index += 1) items[index].unit_index = units.length - 1;
        // 바로 앞(4쪽 안) 단원 시작 쪽의 큰 제목이 있으면 그 표기에 가중치 3을 준다.
        if (pendingOpener && pageNumber - pendingOpener.page <= 4) {
          const created = units[units.length - 1];
          created.variants.set(pendingOpener.title, (created.variants.get(pendingOpener.title) || 0) + 3);
        }
        pendingOpener = null;
      }
    }

    if (codes.length === 0) {
      pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, count: 0, skew, ocr: ocrDebug });
      console.log(`p${pageNumber} (${printedPage}쪽) 문항 없음${skew ? ` · 기울기 ${skew}°` : ""}`);
      page.cleanup();
      continue;
    }

    const toBbox = (box) => [box.x0 / pageWidth, box.y0 / pageHeight, box.x1 / pageWidth, box.y1 / pageHeight].map((value) => Number(value.toFixed(5)));
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

    // 구역 내 순번은 코드 순서로 센다(상자 목록은 y 순이라 2단 쪽에서 왼쪽·오른쪽이 섞인다).
    for (const box of [...boxes].sort((a, b) => a.number.localeCompare(b.number))) {
      const itemId = `${bookId}-${box.number}`;
      const file = `items/${itemId}.jpg`;
      const { width, height } = await cropToFile(box, file);
      const reviewFlags = [...box.flags];
      if (box.conf < 80) reviewFlags.push("low_ocr_conf");
      // 구역 안 번호(유형 확인 01·서술형 02)는 배지 OCR 대신 같은 단원·구역 안 순서로 센다.
      const unitIndexForItem = assessmentUnitIndex ?? (units.length ? units.length - 1 : null);
      const sequenceKey = `${unitIndexForItem ?? -1}|${currentSection}`;
      const localNumber = (sectionCounters.get(sequenceKey) || 0) + 1;
      sectionCounters.set(sequenceKey, localNumber);
      const item = {
        item_id: itemId,
        number_label: box.number,
        number_sort: Number.parseInt(box.number, 10),
        source_code: `${box.prefix}-${box.number}`,
        printed_page: printedPage,
        pdf_page: pageNumber,
        column: box.column,
        layout: box.layout,
        type_label: currentSection ? `${currentSection} ${String(localNumber).padStart(2, "0")}` : "",
        tags: [...(currentSection ? [currentSection] : []), ...sectionTags],
        unit_index: unitIndexForItem,
        has_shared_passage: false,
        group_key: "",
        review_status: reviewFlags.length ? "flagged" : "ai_checked",
        review_note: reviewFlags.join(","),
        regions: [{ kind: "body", position: 0, pdf_page: pageNumber, bbox_normalized: toBbox(box), file, width, height }]
      };
      items.push(item);
      if (reviewFlags.length) flagged.push({ item_id: itemId, flags: reviewFlags });
    }

    // 미리보기 + 검수용 상자 그림
    const previewCanvas = createCanvas(Math.ceil(pageWidth * previewScale), Math.ceil(pageHeight * previewScale));
    const previewContext = previewCanvas.getContext("2d");
    previewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, previewCanvas.width, previewCanvas.height);
    await writeFile(path.join(outDir, "pages", `p${String(pageNumber).padStart(3, "0")}.jpg`), await previewCanvas.encode("jpeg", 82));
    previewContext.lineWidth = 2;
    previewContext.font = "bold 14px sans-serif";
    for (const box of boxes) {
      previewContext.strokeStyle = box.flags.length ? "#b7211e" : box.layout === "wide" ? "#1d4ed8" : "#176e59";
      previewContext.fillStyle = previewContext.strokeStyle;
      previewContext.strokeRect(box.x0 * previewScale, box.y0 * previewScale, (box.x1 - box.x0) * previewScale, (box.y1 - box.y0) * previewScale);
      previewContext.fillText(`${box.number}${box.flags.length ? ` ${box.flags.join(",")}` : ""}`, box.x0 * previewScale + 4, box.y0 * previewScale - 3);
    }
    await writeFile(path.join(outDir, "qa", `p${String(pageNumber).padStart(3, "0")}.jpg`), await previewCanvas.encode("jpeg", 82));

    pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, count: boxes.length, skew, section: currentSection, ocr: ocrDebug });
    const wide = boxes.filter((box) => box.layout === "wide").length;
    console.log(`p${pageNumber} (${printedPage}쪽) 문항 ${boxes.length}개${wide ? ` · 전폭 ${wide}` : ""} · ${boxes[0].number}~${boxes[boxes.length - 1].number}${currentSection ? ` · ${currentSection}` : ""}${footerUnit ? ` · ${footerUnit.code} ${footerUnit.title}` : ""}${skew ? ` · 기울기 ${skew}°` : ""}${flagged.length ? "" : ""}`);
    page.cleanup();
  }

  units.forEach((unit, index) => {
    // 여러 쪽에서 읽힌 이름 가운데 가장 자주 나온 표기를 쓴다(OCR 오차 표기는 소수).
    if (unit.variants.size) unit.title = normalizeUnitTitle([...unit.variants.entries()].sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)[0][0]);
    if (!unit.code) unit.code = String(index + 1).padStart(2, "0");
    const own = items.filter((item) => item.unit_index === index);
    // 범위 표시는 본문 문항(첫 연속 구간)만 — 뒤쪽 수행평가 문항은 개수에는 들어가되 범위를 늘리지 않는다.
    let blockEnd = 0;
    while (blockEnd + 1 < own.length && own[blockEnd + 1].number_sort - own[blockEnd].number_sort <= 1) blockEnd += 1;
    unit.item_number_from = own[0]?.number_label ?? "";
    unit.item_number_to = own[blockEnd]?.number_label ?? "";
    unit.item_count = own.length;
  });
  // 구역 내 순번은 단원 배정이 끝난 뒤 코드 순서로 다시 센다(단원 시작 쪽의 기본 유형 문항은 단원이 나중에 만들어져
  // 앞 단원 번호를 이어받았을 수 있다).
  const counters = new Map();
  for (const item of [...items].sort((a, b) => a.number_sort - b.number_sort)) {
    const section = item.tags.find((tag) => !["서술형"].includes(tag)) ?? "";
    if (!section) continue;
    const key = `${item.unit_index ?? -1}|${section}`;
    const localNumber = (counters.get(key) || 0) + 1;
    counters.set(key, localNumber);
    item.type_label = `${section} ${String(localNumber).padStart(2, "0")}`;
  }
  const continuity = checkCodeContinuity(items.map((item) => item.number_label));
  const validation = {
    count: items.length,
    code_prefix: codePrefix,
    page_counts: Object.fromEntries(pageSummaries.map((summary) => [summary.pdf_page, summary.count])),
    numbers_contiguous: continuity.gaps.length === 0 && continuity.duplicates.length === 0,
    continuity,
    flagged,
    dropped_codes: droppedCodes,
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
      layout_profile: { code_prefix: codePrefix, render_dpi: dpi, ocr: "tesseract" },
      ingest_version: INGEST_VERSION
    },
    units: units.map(({ firstItemIndex, variants, lastSeenPage, reviewed, kind, ...unit }) => unit),
    items,
    pages: pageSummaries
  };
  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  await writeFile(path.join(outDir, "validation.json"), JSON.stringify(validation, null, 2), "utf8");
  await rm(tmpDir, { recursive: true, force: true });
  console.log(`\n문항 ${items.length}개 · 단원 ${units.length}개 · flagged ${flagged.length}개 · 버린 코드 ${droppedCodes.length}개 · 번호 연속 ${validation.numbers_contiguous ? "OK" : `끊김 ${JSON.stringify(continuity.gaps)} 중복 ${JSON.stringify(continuity.duplicates)}`}`);
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
