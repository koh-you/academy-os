#!/usr/bin/env node
// 개념원리 고등(22개정 공통수학1·2 · 대수 · 기하 · 미적분Ⅰ·Ⅱ · 확률과 통계) 학생용 → 문항 패키지(manifest.json + 문항 이미지). 비전 AI 호출 0.
//
// 중학 개념원리(ingest-gn.mjs · 구역마다 번호 재시작)와 달리 고등판은 책 전체 통번호(확인체크·개념원리 익히기·연습문제가 한 번호 열 · 「10」「456」)
// 와 중단원마다 다시 시작하는 필수·발전 예제 번호(「필수 03」)를 쓴다. 구역 이름·배지 라벨(필수·발전·확인체크·STEP·실력 UP)은 글자가 아니라
// 그림이라 글자 레이어에 없다 — 번호 글자의 크기·위치와 차례(TOC)로 구역을 정한다.
//   번호 h 15 · x < 20%W → 통번호 문항. 예제 쪽(h 19 번호가 있는 쪽)에서 x 가 들여쓰기(> 14%W)면 확인체크.
//   번호 h 19 · x < 20%W → 필수·발전 예제(풀이·KEY Point 딸림 → 발문만 · 「풀이」 라벨에서 끝). 예제 배지 왼쪽 라벨 색으로 발전 여부를 tag 에 적는다.
// id 는 「인쇄 쪽-번호」(통번호는 0 을 붙이지 않음 · 예제는 e번호): 16-10 · 16-e3 · 34-50. 인쇄 쪽 = pdf 쪽(공통수학1 · 확인) 이 아니면 바닥글 번호를 읽는다.
// 구역: 차례에서 읽은 「연습문제 N쪽」 이후 = 연습문제(STEP 띠는 그림이라 전사 에이전트가 쪽 이미지로 적는다) · 「[특강] N쪽」 = 특강(예제 라벨이 그림이라 건너뜀)
//   · 예제 번호가 있는 쪽 = 필수·발전 예제(확인체크 포함) · 나머지 통번호 쪽 = 개념원리 익히기.
// 답: 예제는 「풀이」 블록(KEY Point 앞까지)을 answers/<id>.jpg 로 오려 두고(마지막 굵은 값이 답 · 전사 에이전트가 읽는다), 통번호 문항의 답은
//   본책 끝 「빠른 정답 찾기」(ingest-gn-hs-answers.mjs) 에서 온다.
//
// 사용:
//   node scripts/problem-bank/ingest-gn-hs.mjs --pdf "C:/…/개념원리 공통수학1 학생용.pdf" --out output/problem-bank/gn-cm1 \
//     --title "개념원리 공통수학1" --pages 10-297 --toc 6-8 [--dpi 220] [--ocr [--ocr-dpi 300]] [--toc-json <파일>]
//   --toc: 차례 쪽 범위(소단원 「01 제목 N」·「연습문제 N」·「[특강] … N」·중단원 「1 제목」 을 읽는다). --toc-json 으로 사람이 고친 차례를 줄 수 있다.
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import os from "node:os";
import path from "node:path";
import { cropCanvasToFile, drawQa, inkExtent, parseArgs, parsePageRange, pdfjs, renderPage, toViewportTokens } from "./pdfTools.mjs";
import { findKoreanTessdata, findTesseract } from "./scanTools.mjs";
import { parseTesseractTsv } from "../../src/domains/problems/scanPdfSegmenter.js";

const execFileAsync = promisify(execFile);
const INGEST_VERSION = "gn-hs-1.0";
const text = (token) => String(token.str ?? "").trim();

async function ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, tmpPath) {
  const scale = ocrDpi / 72;
  const { canvas } = await renderPage(page, scale);
  await writeFile(tmpPath, await canvas.encode("png"));
  const tokens = [];
  for (const psm of [11, 6]) {
    const { stdout } = await execFileAsync(tesseract, [tmpPath, "-", "-l", tessdataDir ? "kor+eng" : "eng", "--psm", String(psm), "-c", "tessedit_create_tsv=1", "-c", "tessedit_create_txt=0", ...(tessdataDir ? ["--tessdata-dir", tessdataDir] : [])], { maxBuffer: 64 * 1024 * 1024, windowsHide: true });
    for (const token of parseTesseractTsv(stdout, scale)) {
      if ((token.conf < 30 && !/^\d{1,3}$/.test(token.text)) || token.h < 2) continue;
      const dup = tokens.find((other) => Math.abs(other.x - token.x) < 2 && Math.abs(other.y - token.y) < 2 && Math.abs(other.w - token.w) < 4);
      if (dup) { if (token.conf > dup.conf) Object.assign(dup, token); continue; }
      tokens.push({ ...token });
    }
  }
  return tokens.map((token) => ({ str: token.text, x: token.x, y: token.y + token.h, w: token.w, h: token.h, fontName: "ocr", conf: token.conf }));
}

/** 차례 쪽에서 소단원·연습문제·특강·중단원을 읽는다(글자 레이어 판). 반환: { units: [{code,title,page,chapter}], exercises: [page], special: [page], chapters: [{title,page}] } */
async function readToc(doc, range, getTokens, ocrToc = false) {
  const units = [], exercises = [], special = [], chapters = [];
  // 차례의 쪽 번호는 「1 1 7」처럼 글자 사이가 벌어져 나오기도 한다 — 공백을 빼고 읽는다.
  const digits = (token) => text(token).replace(/\s+/g, "");
  for (let n = range[0]; n <= range[1]; n += 1) {
    const page = await doc.getPage(n);
    const viewport = page.getViewport({ scale: 1 });
    const tokens = (await getTokens(page, viewport)).filter((t) => text(t));
    const W = viewport.width;
    const sameLine = (a, b) => Math.abs(a.y - b.y) <= 3;
    const pageNumberOf = (token) => { const p = tokens.find((t) => Math.abs(t.y - token.y) <= (ocrToc ? 4 : 3) && t.x > W * 0.75 && /^\d{1,3}$/.test(digits(t)) && t.h >= (ocrToc ? 5 : 7) && t.h <= 10); return p ? Number(digits(p)) : null; };
    // 중단원 「1 제목」(번호 h 14~16 · 제목 h 10.5~12.5)은 첫 소단원 줄과 위아래로 몇 pt 어긋난다 — 쪽 안의 y 로 대응시킨다.
    const pageChapters = [];
    for (const token of tokens) {
      if (/^\d$/.test(text(token)) && token.h >= (ocrToc ? 10 : 13.5) && token.h <= 16.5 && token.x < W * 0.25) {
        const t = tokens.filter((o) => o !== token && Math.abs(o.y - token.y) <= 4 && o.x > token.x && o.x < W * 0.42 && o.h >= 10 && o.h <= 12.5 && !/^\d{2}$/.test(text(o))).sort((a, b) => a.x - b.x).map(text).join(" ");
        if (t) pageChapters.push({ y: token.y, title: `${text(token)} ${t}` });
      }
    }
    pageChapters.sort((a, b) => a.y - b.y);
    for (const chapter of pageChapters) chapters.push({ title: chapter.title, page: null });
    const chapterAt = (y) => { let found = null; for (const c of pageChapters) if (c.y <= y + 8) found = c; return found ? found.title : chapters.length ? chapters[chapters.length - 1].title : ""; };
    for (const token of tokens.sort((a, b) => a.y - b.y || a.x - b.x)) {
      const s = text(token);
      // 소단원: 「01」(h 9.5~10.5 · x 35~55%W) + 제목(h 8~9.5 · 수식 토큰 포함) + 쪽
      if (/^\d{2}$/.test(s) && token.h >= (ocrToc ? 6.5 : 9.5) && token.h <= 10.5 && token.x > W * 0.35 && token.x < W * 0.55) {
        const title = tokens.filter((o) => o !== token && Math.abs(o.y - token.y) <= (ocrToc ? 4 : 2.5) && o.x > token.x && o.x < W * 0.75 && o.h >= (ocrToc ? 5 : 8) && o.h <= (ocrToc ? 11 : 9.5)).sort((a, b) => a.x - b.x).map(text).join(" ").replace(/\s+/g, " ").trim();
        const p = pageNumberOf(token);
        if (title && p) {
          const chapter = chapterAt(token.y);
          units.push({ code: String(units.length + 1).padStart(2, "0"), title, page: p, chapter, sub: s });
          const entry = chapters.find((c) => c.title === chapter);
          if (entry && entry.page == null) entry.page = p;
        }
        continue;
      }
      if (s === "연습문제" && token.h >= (ocrToc ? 5 : 8) && token.h <= (ocrToc ? 11 : 9.5) && token.x > W * 0.35) { const p = pageNumberOf(token); if (p) exercises.push(p); continue; }
      if (/^\[?특강\]?$/.test(s) && token.x > W * 0.35) { const p = pageNumberOf(token); if (p) special.push(p); continue; }
    }
    page.cleanup();
  }
  return { units, exercises, special, chapters };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <파일> --out <폴더> [--title] [--pages a-b] [--toc a-b | --toc-json <파일>] [--dpi 220] [--ocr]");
    process.exit(2);
  }
  const dpi = Number(args.dpi) || 220;
  const scale = dpi / 72;
  const pdfBytes = await readFile(args.pdf);
  const sha256 = createHash("sha256").update(pdfBytes).digest("hex");
  const outDir = path.resolve(args.out);
  await Promise.all(["items", "answers", "pages", "qa"].map((dir) => mkdir(path.join(outDir, dir), { recursive: true })));
  const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
  const [fromPage, toPage] = parsePageRange(args.pages, doc.numPages);
  const title = args.title || path.basename(args.pdf, path.extname(args.pdf));
  const bookId = `pbk_${sha256.slice(0, 10)}`;
  const useOcr = Boolean(args.ocr);
  const tesseract = useOcr ? await findTesseract() : null;
  const tessdataDir = useOcr ? await findKoreanTessdata() : null;
  const ocrDpi = Number(args["ocr-dpi"]) || 300;
  const ocrTmp = path.join(os.tmpdir(), `ingest-gn-hs-ocr-${process.pid}.png`);
  if (useOcr) console.log(`OCR 모드: tesseract ${tessdataDir ? "kor+eng" : "eng"} · ${ocrDpi}dpi`);

  // 차례
  let toc;
  if (args["toc-json"]) toc = JSON.parse(await readFile(path.resolve(args["toc-json"]), "utf8"));
  else if (args.toc) toc = await readToc(doc, parsePageRange(args.toc, doc.numPages), async (page, viewport) => (useOcr ? await ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, ocrTmp) : toViewportTokens(await page.getTextContent(), viewport)), useOcr);
  else toc = { units: [], exercises: [], special: [], chapters: [] };
  await writeFile(path.join(outDir, "toc.json"), JSON.stringify(toc, null, 2), "utf8");
  console.log(`차례: 소단원 ${toc.units.length} · 연습문제 ${toc.exercises.length} · 특강 ${toc.special.length} · 중단원 ${toc.chapters.length}`);
  for (const unit of toc.units) console.log(`  ${unit.code} [${unit.sub ?? ""}] ${unit.title} · ${unit.page}쪽 (${unit.chapter})`);
  console.log(`  연습문제 ${toc.exercises.join(" ")} · 특강 ${toc.special.join(" ")}`);
  const unitStarts = toc.units.map((u) => u.page);
  const unitIndexOf = (printed) => { let idx = -1; for (const [i, p] of unitStarts.entries()) if (printed >= p) idx = i; return Math.max(0, idx); };
  // 연습문제 구역: 연습문제 시작 쪽부터 다음 소단원 시작 전까지. 특강도 같은 규칙.
  const nextUnitStartAfter = (printed) => unitStarts.find((p) => p > printed) ?? Infinity;
  const inRange = (starts, printed) => starts.some((s) => printed >= s && printed < nextUnitStartAfter(s));

  const items = [];
  const answers = {};
  const pageSummaries = [];
  const ocrPages = {};
  let printedPrev = null;
  const seenIds = new Set();
  let specialCounter = 0;

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const W = viewport.width, H = viewport.height;
    const tokens = useOcr ? await ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, ocrTmp) : toViewportTokens(await page.getTextContent(), viewport);
    if (useOcr) ocrPages[pageNumber] = tokens.map(({ str, x, y, w, h }) => ({ str, x, y, w, h }));
    const visible = tokens.filter((token) => text(token));

    // 인쇄 쪽: 바닥글(y > 93%)의 숫자(h 11~13). 못 읽으면 앞 쪽 + 1.
    const footer = visible.filter((token) => token.y > H * 0.93 && /^\d{1,3}$/.test(text(token)) && token.h >= 9 && token.h <= 14).sort((a, b) => a.h - b.h);
    const printedPage = footer.length ? Number(text(footer[footer.length - 1])) : printedPrev != null ? printedPrev + 1 : pageNumber;
    printedPrev = printedPage;

    const bodyTop = H * 0.05, bodyBottom = H * 0.93;
    const isSpecial = inRange(toc.special, printedPage);
    const isExercise = !isSpecial && inRange(toc.exercises, printedPage);
    if (isSpecial) specialCounter = 0;

    // 배지 후보: 통번호(h 14.5~15.5) · 예제(h 18.5~19.5). OCR 은 상자 높이가 조금 작다.
    const numH = useOcr ? [11, 16] : [14.4, 15.6];
    const exH = useOcr ? [16.5, 21] : [18.4, 19.6];
    const badges = [];
    for (const token of visible) {
      const s = text(token);
      if (token.y < bodyTop || token.y > bodyBottom || token.x > W * 0.2) continue;
      if (!/^\d{1,3}$/.test(s)) continue;
      if (token.h >= exH[0] && token.h <= exH[1]) badges.push({ kind: "e", n: Number(s), x: token.x, y: token.y, h: token.h, w: token.w });
      else if (token.h >= numH[0] && token.h <= numH[1]) {
        // STEP 옆 숫자(「STEP」 토큰 왼쪽 인접)는 제외
        if (visible.some((other) => text(other) === "STEP" && Math.abs(other.y - token.y) < 6 && token.x > other.x && token.x - other.x < 40)) continue;
        badges.push({ kind: "", n: Number(s), x: token.x, y: token.y, h: token.h, w: token.w });
      }
    }
    if (isSpecial || !badges.length) {
      pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, item_count: 0, section: isSpecial ? "특강" : "" });
      page.cleanup();
      continue;
    }
    const hasExample = badges.some((b) => b.kind === "e");
    const section = isExercise ? "연습문제" : hasExample ? "필수·발전 예제" : "개념원리 익히기";
    const unitIndex = unitIndexOf(printedPage);

    const pulLabels = visible.filter((token) => /^풀이/.test(text(token)) && token.h <= 9 && token.x < W * 0.6);
    const keyLabels = visible.filter((token) => /^KEY/i.test(text(token)) && token.h <= 10);
    const { canvas, context } = await renderPage(page, scale);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    await writeFile(path.join(outDir, "pages", `p${String(pageNumber).padStart(3, "0")}.jpg`), await (await renderPage(page, 100 / 72)).canvas.encode("jpeg", 82));

    badges.sort((a, b) => a.y - b.y);
    const qaBoxes = [];
    const pageItems = [];
    for (const [index, badge] of badges.entries()) {
      const next = badges[index + 1];
      const top = badge.y - badge.h - 3;
      let bottom = next ? next.y - next.h - 4 : bodyBottom;
      // 다음 문항 번호 위의 「교육청 기출」 작은 배지와 「STEP」 띠는 이 문항에 속하지 않는다.
      for (const token of visible) {
        const s = text(token);
        if ((s === "교육청" || s === "STEP") && token.y - token.h > badge.y && token.y - token.h - 4 < bottom) bottom = Math.min(bottom, token.y - token.h - 4);
      }
      let answerBox = null;
      if (badge.kind === "e") {
        // 예제: 발문은 「풀이」 라벨까지. 풀이 블록(→ KEY Point 또는 다음 배지 전)은 답 크롭.
        const pul = pulLabels.filter((token) => token.y > badge.y && token.y < bottom + 2).sort((a, b) => a.y - b.y)[0];
        if (pul) {
          const key = keyLabels.filter((token) => token.y > pul.y && token.y < bottom + 2).sort((a, b) => a.y - b.y)[0];
          answerBox = { y0: pul.y - pul.h - 3, y1: key ? key.y - key.h - 4 : bottom };
          bottom = Math.min(bottom, pul.y - pul.h - 3);
        }
      }
      // 본문 오른쪽 끝: 이 띠 안의 본문 크기 글자(h ≥ 9.5)의 최대 x. 오른쪽 여백 노트(h ≤ 9)는 제외된다.
      const bandTokens = visible.filter((token) => token.y > top && token.y - token.h < bottom && token.h >= 9.5 && token.x < W * 0.92);
      const rightEdge = bandTokens.length ? Math.max(...bandTokens.map((t) => t.x + t.w)) : W * 0.7;
      const x0 = Math.max(0, badge.x - 4);
      const x1 = Math.min(W * 0.92, Math.max(W * 0.55, rightEdge + 8));
      const ink = inkExtent(imageData, canvas.width, scale, { x0: x0 + 2, x1: x1 - 2, y0: top, y1: bottom });
      const box = { x0, y0: ink ? Math.max(top, ink.top - 3) : top, x1, y1: ink ? Math.min(bottom, ink.bottom + 3) : bottom };
      const label = `${printedPage}-${badge.kind}${badge.n}`;
      if (seenIds.has(label)) { console.log(`  중복 id ${label} (p${pageNumber}) — 건너뜀`); continue; }
      seenIds.add(label);
      const file = `items/${bookId}-${label}.jpg`;
      const size = await cropCanvasToFile(canvas, scale, box, path.join(outDir, file));
      const isCheck = badge.kind === "" && hasExample && badge.x > W * 0.14;
      const kindName = badge.kind === "e" ? "예제" : isCheck ? "확인체크" : "문항";
      const tags = [section, kindName];
      // 예제 배지 왼쪽 라벨(필수=파랑 · 발전=주황·빨강) 색으로 발전 표시.
      if (badge.kind === "e") {
        const sx0 = Math.max(0, Math.round((badge.x - 26) * scale)), sx1 = Math.round((badge.x - 4) * scale);
        const sy0 = Math.round((badge.y - badge.h) * scale), sy1 = Math.round(badge.y * scale);
        let r = 0, g = 0, b = 0, n = 0;
        for (let y = sy0; y < sy1; y += 2) for (let x = sx0; x < sx1; x += 2) { const o = (y * canvas.width + x) * 4; if (imageData[o] + imageData[o + 1] + imageData[o + 2] < 600) { r += imageData[o]; g += imageData[o + 1]; b += imageData[o + 2]; n += 1; } }
        if (n > 20 && r / n > b / n + 40) tags.push("발전");
      }
      // 교육청 기출 배지(작은 글자 · 번호 위)
      if (visible.some((token) => text(token) === "교육청" && Math.abs(token.x - badge.x) < 40 && token.y < badge.y - badge.h + 2 && token.y > badge.y - badge.h - 24)) tags.push("교육청 기출");
      const item = {
        item_id: `${bookId}-${label}`, number_label: label, number_sort: printedPage * 100 + index, printed_page: printedPage, pdf_page: pageNumber,
        column: 0, layout: "full", type_label: section, tags, unit_index: unitIndex, has_shared_passage: false, group_key: null,
        review_status: "ai_checked", review_note: "", kind: kindName, section, book_number: badge.kind === "" ? badge.n : null,
        regions: [{ kind: "body", position: 0, pdf_page: pageNumber, bbox_normalized: [box.x0 / W, box.y0 / H, box.x1 / W, box.y1 / H], file, width: size.width, height: size.height }]
      };
      if (answerBox) {
        const abox = { x0, y0: answerBox.y0, x1, y1: answerBox.y1 };
        const afile = `answers/${bookId}-${label}.jpg`;
        await cropCanvasToFile(canvas, scale, abox, path.join(outDir, afile));
        answers[label] = { text: "", file: afile, pdf_page: pageNumber, note: "예제 풀이 블록(마지막 굵은 값이 답)" };
      }
      pageItems.push(item);
      qaBoxes.push({ label, box, color: badge.kind === "e" ? "#c2410c" : isCheck ? "#1d4ed8" : "#176e59" });
    }
    items.push(...pageItems);
    pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, item_count: pageItems.length, section });
    await drawQa(canvas, W, H, qaBoxes, path.join(outDir, "qa", `p${String(pageNumber).padStart(3, "0")}.jpg`));
    console.log(`p${pageNumber} (${printedPage}쪽) ${section}: ${pageItems.map((item) => item.number_label).join(" ")}`);
    page.cleanup();
  }

  const units = toc.units.length ? toc.units : [{ code: "01", title, page: fromPage, chapter: "" }];
  const manifest = {
    schema_version: 1,
    book: { book_id: bookId, title, folder_path: args.folder || "", subject: args.subject || "수학", grade: args.grade || "", source_kind: useOcr ? "pdf_outline_ocr" : "pdf_text", source_file_name: path.basename(args.pdf), source_sha256: sha256, page_count: doc.numPages, pages_ingested: [fromPage, toPage], item_count: items.length, layout_profile: { numbering: "printed_page-book_number", render_dpi: dpi, ocr: useOcr ? "tesseract" : null }, ingest_version: INGEST_VERSION },
    units: units.map((unit, index) => { const own = items.filter((item) => item.unit_index === index); return { position: index, code: unit.code, title: unit.title, chapter: unit.chapter ?? "", start_page: unit.page, item_number_from: own[0]?.number_label, item_number_to: own.at(-1)?.number_label, item_count: own.length }; }),
    items,
    pages: pageSummaries
  };
  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  await writeFile(path.join(outDir, "validation.json"), JSON.stringify({ items: items.length, flagged: [] }, null, 2), "utf8");
  await writeFile(path.join(outDir, "manifest-answers.json"), JSON.stringify({ schema_version: 1, book_id: bookId, ingest_version: INGEST_VERSION, source_file_name: path.basename(args.pdf), solutions: [], answers: Object.entries(answers).map(([number_label, entry]) => ({ number_label, ...entry })), validation: { answers: { count: Object.keys(answers).length, note: "예제 풀이 블록만. 통번호 문항의 답은 빠른 정답 찾기(ingest-gn-hs-answers.mjs)" } } }, null, 2), "utf8");
  if (useOcr) await writeFile(path.join(outDir, "ocr-tokens.json"), JSON.stringify({ dpi: ocrDpi, pages: ocrPages }), "utf8");
  const kinds = {};
  for (const item of items) kinds[item.kind] = (kinds[item.kind] ?? 0) + 1;
  const sections = {};
  for (const item of items) sections[item.section] = (sections[item.section] ?? 0) + 1;
  console.log(`\n문항 ${items.length}개 (${Object.entries(kinds).map(([k, v]) => `${k} ${v}`).join(" · ")}) · 구역 ${Object.entries(sections).map(([k, v]) => `${k} ${v}`).join(" · ")} · 예제 풀이 크롭 ${Object.keys(answers).length} → ${outDir}`);
}

main().catch((error) => { console.error(error); process.exit(1); });
