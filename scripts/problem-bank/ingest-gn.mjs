#!/usr/bin/env node
// 개념원리(22개정 · 텍스트 PDF 또는 글꼴 윤곽선화 PDF) 학생용 → 문항 패키지(manifest.json + 문항 이미지). 비전 AI 호출 0.
//
// 개념원리는 구역마다 번호가 다시 시작하고 문항 종류가 여럿이라 id 를 「인쇄 쪽-종류번호」로 둔다.
//   17-01   개념원리 확인하기 · 계산력 강화하기 · 이런 문제가 시험에 나온다 · 중단원 마무리하기 · 실력 UP 의 큰 두 자리 번호(01, 02 …)
//   17-h1   핵심문제 익히기의 핵심문제 01(회색 상자 · 풀이·답이 딸린 예제 → 발문만) → 배지 「핵심문제 1」
//   17-c1   핵심문제 익히기의 「확인 1」 → 배지 「확인 1」
//   34-e1   서술형 대비 문제의 「예제 1」(풀이 과정 딸림 → 발문만) → 배지 「예제 1」
//   34-u1   서술형 대비 문제의 「유제 1」 → 배지 「유제 1」
// 문항 영역: 번호 배지 윗변부터 같은 컬럼의 다음 배지(또는 「풀이」 라벨 · 구역 머리 · 쪽 바닥)까지, 잉크로 위·아래를 조인다.
// 핵심문제·예제의 「답」 줄은 answers/<id>.jpg 로 오려 두고 글자 레이어가 있으면 answer_text 도 적는다.
//
// 사용:
//   node scripts/problem-bank/ingest-gn.mjs --pdf "C:/…/개념원리 중학 3-1 학생용.pdf" --out output/problem-bank/gn-m31 \
//     --title "개념원리 중학 3-1" --pages 11-220 [--dpi 220] [--ocr [--ocr-dpi 300]]
//   --ocr: 글자 레이어가 없는 판(공통수학2·대수·기하·미적분·확통)은 쪽 렌더를 tesseract(kor+eng)로 읽는다.
// 인쇄 쪽은 바닥글의 쪽 번호(큰 숫자)를 읽고, 못 읽으면 앞 쪽 + 1.
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
const INGEST_VERSION = "gn-1.0";

const SECTION_HEADERS = [
  ["개념원리", "확인하기", "개념원리 확인하기"],
  ["핵심문제", "익히기", "핵심문제 익히기"],
  ["계산력", "강화하기", "계산력 강화하기"],
  ["이런 문제가", "", "이런 문제가 시험에 나온다"],
  ["중단원", "마무리하기", "중단원 마무리하기"],
  ["서술형", "", "서술형 대비 문제"],
  ["실력", "", "실력 UP"]
];

/** OCR 토큰(글자 레이어 없는 판) — ingest-text-pdf --ocr 와 같은 방식. y 는 baseline. */
async function ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, tmpPath) {
  const scale = ocrDpi / 72;
  const { canvas } = await renderPage(page, scale);
  await writeFile(tmpPath, await canvas.encode("png"));
  const tokens = [];
  for (const psm of [11, 6]) {
    const { stdout } = await execFileAsync(tesseract, [tmpPath, "-", "-l", tessdataDir ? "kor+eng" : "eng", "--psm", String(psm), "-c", "tessedit_create_tsv=1", "-c", "tessedit_create_txt=0", ...(tessdataDir ? ["--tessdata-dir", tessdataDir] : [])], { maxBuffer: 64 * 1024 * 1024, windowsHide: true });
    for (const token of parseTesseractTsv(stdout, scale)) {
      if ((token.conf < 30 && !/^\d{1,2}$/.test(token.text)) || token.h < 2) continue;
      const dup = tokens.find((other) => Math.abs(other.x - token.x) < 2 && Math.abs(other.y - token.y) < 2 && Math.abs(other.w - token.w) < 4);
      if (dup) { if (token.conf > dup.conf) Object.assign(dup, token); continue; }
      tokens.push({ ...token });
    }
  }
  return tokens.map((token) => ({ str: token.text, x: token.x, y: token.y + token.h, w: token.w, h: token.h, fontName: "ocr", conf: token.conf }));
}

const text = (token) => String(token.str ?? "").trim();

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <파일> --out <폴더> [--title] [--pages a-b] [--dpi 220] [--ocr]");
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
  const ocrTmp = path.join(os.tmpdir(), `ingest-gn-ocr-${process.pid}.png`);
  if (useOcr) console.log(`OCR 모드: tesseract ${tessdataDir ? "kor+eng" : "eng"} · ${ocrDpi}dpi`);

  const items = [];
  const units = [];
  const answers = {};
  const pageSummaries = [];
  const ocrPages = {};
  let section = "";
  let printedPrev = null;
  const counters = { e: 0, u: 0 };
  const seenIds = new Set();

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const W = viewport.width, H = viewport.height;
    const tokens = useOcr ? await ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, ocrTmp) : toViewportTokens(await page.getTextContent(), viewport);
    if (useOcr) ocrPages[pageNumber] = tokens.map(({ str, x, y, w, h }) => ({ str, x, y, w, h }));
    const visible = tokens.filter((token) => text(token));

    // 인쇄 쪽: 바닥글(y > 94%)의 가장 큰 숫자.
    const footer = visible.filter((token) => token.y > H * 0.94 && /^\d{1,3}$/.test(text(token)) && token.h >= 9).sort((a, b) => a.h - b.h);
    const printedPage = footer.length ? Number(text(footer[footer.length - 1])) : printedPrev != null ? printedPrev + 1 : pageNumber;
    printedPrev = printedPage;

    // 소단원 시작(「01 제곱근의 뜻과 표현」 · 제목 h 27 · 번호는 그림): 새 단원 + 개념 이해 구역(문항 없음 · 개념 번호 ①② 원은 배지가 아니다).
    const unitTitle = visible.find((token) => token.y < H * 0.13 && token.h >= 24 && /[가-힣]/.test(text(token)));
    if (unitTitle) {
      units.push({ position: units.length, code: String(units.length + 1).padStart(2, "0"), title: text(unitTitle), chapter: "", firstItemIndex: items.length });
      section = "개념 이해";
    }
    // 구역 머리(쪽 위 8% · 큰 글자).
    const head = visible.filter((token) => token.y < H * 0.09 && token.h >= 13);
    for (const [first, second, name] of SECTION_HEADERS) {
      if (head.some((token) => text(token).startsWith(first)) && (!second || head.some((token) => text(token).startsWith(second)))) { section = name; break; }
    }
    if (!section || section === "개념 이해") {
      pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, item_count: 0, section });
      page.cleanup();
      continue;
    }
    const isSeosul = section === "서술형 대비 문제";
    const isHaeksim = section === "핵심문제 익히기";
    if (head.some((token) => text(token).startsWith("서술형"))) counters.e = 0, counters.u = 0;
    const sidebarX = W * 0.72; // KEY POINT · 개념 노트 시작

    // 배지 후보
    const badges = [];
    // 구역 머리가 없는 쪽은 첫 문항이 위 7% 까지 올라온다(핵심문제 03 · y 70pt/808).
    const bodyTop = H * 0.065, bodyBottom = H * 0.935;
    const sameLine = (a, b) => Math.abs(a.y - b.y) <= Math.max(a.h, b.h) * 0.6;
    // 읽는 순서(왼쪽 컬럼 위→아래, 오른쪽 컬럼)로 훑어야 예제·유제 순번이 맞는다.
    const ordered = [...visible].sort((a, b) => (a.x < W * 0.5 ? 0 : 1) - (b.x < W * 0.5 ? 0 : 1) || a.y - b.y || a.x - b.x);
    for (const token of ordered) {
      const s = text(token);
      if (token.y < bodyTop || token.y > bodyBottom) continue;
      // 큰 두 자리 번호(h 16.5~19 · STEP 옆 숫자 제외) → 「쪽-NN」. OCR 은 상자 높이가 조금 작게 나온다.
      if (/^\d{1,2}$/.test(s) && token.h >= (useOcr ? 12 : 16.5) && token.h <= 20 && !visible.some((other) => text(other) === "STEP" && sameLine(other, token) && other.x < token.x && token.x - other.x < 45)) {
        if (isHaeksim || isSeosul) continue; // 핵심문제 번호는 아래에서 h 15 로 잡는다
        badges.push({ kind: "", n: Number(s), x: token.x, y: token.y, h: token.h, w: token.w });
        continue;
      }
      // 핵심문제 01 (h 15 · 왼쪽 여백)
      if (isHaeksim && /^\d{2}$/.test(s) && token.h >= (useOcr ? 10 : 14) && token.h <= 16.4 && token.x < W * 0.16) {
        badges.push({ kind: "h", n: Number(s), x: token.x, y: token.y, h: token.h, w: token.w });
        continue;
      }
      // 확인 N · 예제 N · 유제 N
      // 「확인 N」의 N 은 글자 레이어에 있지만 서술형 「예제 N」「유제 N」의 N 은 그림(글자 없음) — 구역 안에서 순서대로 센다.
      const label = s === "확인" ? "c" : s === "예제" ? "e" : s === "유제" ? "u" : null;
      if (label && token.h <= 10.5 && token.x < sidebarX) {
        if (label !== "c" && !isSeosul) continue;
        if (label === "c" && !isHaeksim) continue;
        const digit = visible.find((other) => other !== token && /^\d{1,2}$/.test(text(other)) && sameLine(other, token) && other.x > token.x && other.x - (token.x + token.w) < 14);
        if (label === "c" && !digit) continue;
        const n = digit ? Number(text(digit)) : (counters[label] = (counters[label] ?? 0) + 1);
        badges.push({ kind: label, n, x: token.x, y: digit ? Math.max(token.y, digit.y) : token.y, h: digit ? Math.max(token.h, digit.h) : token.h, w: digit ? digit.x + digit.w - token.x : token.w });
      }
    }
    if (!badges.length) {
      pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, item_count: 0, section });
      page.cleanup();
      continue;
    }

    // 컬럼: 배지 x 가 쪽 중앙(45~60%)을 넘는 것이 있으면 2단(중단원·실력 UP·서술형). 핵심문제·확인하기는 오른쪽 여백 노트를 빼고 본문 폭.
    const twoCol = isSeosul || (badges.some((b) => b.x > W * 0.45) && badges.some((b) => b.x < W * 0.4));
    const gutter = twoCol ? W * 0.5 : null;
    const columnRight = (b) => (twoCol ? (b.x < gutter ? gutter - 6 : W * 0.93) : Math.min(W * 0.93, isHaeksim || section === "개념원리 확인하기" ? sidebarX : W * 0.93));
    const columnOf = (b) => (twoCol && b.x >= gutter ? 1 : 0);

    // 풀이·답 라벨(작은 글자)
    const pulLabels = visible.filter((token) => /^풀이/.test(text(token)) && token.h <= 9 && token.x < sidebarX);
    const dapLabels = visible.filter((token) => text(token) === "답" && token.h <= 9);

    const { canvas, context } = await renderPage(page, scale);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    await writeFile(path.join(outDir, "pages", `p${String(pageNumber).padStart(3, "0")}.jpg`), await (await renderPage(page, 100 / 72)).canvas.encode("jpeg", 82));

    badges.sort((a, b) => columnOf(a) - columnOf(b) || a.y - b.y);
    const qaBoxes = [];
    const pageItems = [];
    for (const [index, badge] of badges.entries()) {
      const col = columnOf(badge);
      const next = badges.slice(index + 1).find((other) => columnOf(other) === col);
      const top = badge.y - badge.h - 3;
      let bottom = next ? next.y - next.h - 4 : bodyBottom;
      // 핵심문제·예제·유제는 「풀이」 라벨에서 끝난다(발문만). 확인·번호 문항도 아래에 풀이가 오면 거기서 끝.
      const pul = pulLabels.filter((token) => token.y - token.h > badge.y - badge.h && token.y < bottom + 2 && (twoCol ? columnOf(token) === col : true)).sort((a, b) => a.y - b.y)[0];
      if (pul) bottom = Math.min(bottom, pul.y - pul.h - 3);
      const x0 = twoCol && col === 1 ? gutter + 4 : Math.max(0, badge.x - 4);
      const x1 = columnRight(badge);
      const ink = inkExtent(imageData, canvas.width, scale, { x0: x0 + 2, x1: x1 - 2, y0: top, y1: bottom });
      const box = { x0, y0: ink ? Math.max(top, ink.top - 3) : top, x1, y1: ink ? Math.min(bottom, ink.bottom + 3) : bottom };
      const label = `${printedPage}-${badge.kind}${badge.kind ? badge.n : String(badge.n).padStart(2, "0")}`;
      if (seenIds.has(label)) { console.log(`  중복 id ${label} (p${pageNumber}) — 건너뜀`); continue; }
      seenIds.add(label);
      const file = `items/${bookId}-${label}.jpg`;
      const size = await cropCanvasToFile(canvas, scale, box, path.join(outDir, file));
      const kindName = { "": "문항", h: "핵심문제", c: "확인", e: "예제", u: "유제" }[badge.kind];
      const tags = [section, kindName];
      if (visible.some((token) => text(token) === "꼭" && Math.abs(token.x - badge.x) < 30 && token.y < badge.y - badge.h && token.y > badge.y - badge.h - 20)) tags.push("꼭나와");
      const item = {
        item_id: `${bookId}-${label}`, number_label: label, number_sort: printedPage * 100 + index, printed_page: printedPage, pdf_page: pageNumber,
        column: col, layout: twoCol ? "column" : "full", type_label: section, tags, unit_index: Math.max(0, units.length - 1), has_shared_passage: false, group_key: null,
        review_status: "ai_checked", review_note: "", kind: kindName, section,
        regions: [{ kind: "body", position: 0, pdf_page: pageNumber, bbox_normalized: [box.x0 / W, box.y0 / H, box.x1 / W, box.y1 / H], file, width: size.width, height: size.height }]
      };
      // 핵심문제·예제: 「답」 줄(풀이 아래 · 다음 배지 전).
      if (badge.kind === "h" || badge.kind === "e") {
        const limit = next ? next.y - next.h : bodyBottom;
        const dap = dapLabels.filter((token) => token.y > badge.y && token.y < limit && (twoCol ? columnOf(token) === col : true)).sort((a, b) => b.y - a.y)[0];
        if (dap) {
          const lineTokens = visible.filter((token) => token !== dap && Math.abs(token.y - dap.y) < 4 && token.x > dap.x && token.x < x1 + 40 && token.h <= 11);
          const answerText = useOcr ? "" : lineTokens.sort((a, b) => a.x - b.x).map(text).join(" ").trim();
          const abox = { x0: dap.x - 2, y0: dap.y - Math.max(dap.h, 9) - 4, x1: Math.max(...lineTokens.map((t) => t.x + t.w), dap.x + 60) + 3, y1: dap.y + 5 };
          const afile = `answers/${bookId}-${label}.jpg`;
          await cropCanvasToFile(canvas, scale, abox, path.join(outDir, afile));
          answers[label] = { text: answerText, file: afile, pdf_page: pageNumber };
          item.answer_text = answerText;
        }
      }
      pageItems.push(item);
      qaBoxes.push({ label, box, color: badge.kind === "h" || badge.kind === "e" ? "#c2410c" : badge.kind ? "#1d4ed8" : "#176e59" });
    }
    items.push(...pageItems);
    pageSummaries.push({ pdf_page: pageNumber, printed_page: printedPage, item_count: pageItems.length, section });
    await drawQa(canvas, W, H, qaBoxes, path.join(outDir, "qa", `p${String(pageNumber).padStart(3, "0")}.jpg`));
    console.log(`p${pageNumber} (${printedPage}쪽) ${section || "?"}: ${pageItems.map((item) => item.number_label).join(" ")}`);
    page.cleanup();
  }

  const manifest = {
    schema_version: 1,
    book: { book_id: bookId, title, folder_path: args.folder || "", subject: args.subject || "수학", grade: args.grade || "", source_kind: useOcr ? "pdf_outline_ocr" : "pdf_text", source_file_name: path.basename(args.pdf), source_sha256: sha256, page_count: doc.numPages, pages_ingested: [fromPage, toPage], item_count: items.length, layout_profile: { numbering: "printed_page-kind", render_dpi: dpi, ocr: useOcr ? "tesseract" : null }, ingest_version: INGEST_VERSION },
    units: units.map((unit, index) => { const own = items.filter((item) => item.unit_index === index); return { position: index, code: unit.code, title: unit.title, chapter: "", item_number_from: own[0]?.number_label, item_number_to: own.at(-1)?.number_label, item_count: own.length }; }),
    items,
    pages: pageSummaries
  };
  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  await writeFile(path.join(outDir, "validation.json"), JSON.stringify({ items: items.length, flagged: [] }, null, 2), "utf8");
  await writeFile(path.join(outDir, "manifest-answers.json"), JSON.stringify({ schema_version: 1, book_id: bookId, ingest_version: INGEST_VERSION, source_file_name: path.basename(args.pdf), solutions: [], answers: Object.entries(answers).map(([number_label, entry]) => ({ number_label, ...entry })), validation: { answers: { count: Object.keys(answers).length, note: "핵심문제·예제의 본문 답 줄만. 나머지는 정답 PDF" } } }, null, 2), "utf8");
  if (useOcr) await writeFile(path.join(outDir, "ocr-tokens.json"), JSON.stringify({ dpi: ocrDpi, pages: ocrPages }), "utf8");
  const kinds = {};
  for (const item of items) kinds[item.kind] = (kinds[item.kind] ?? 0) + 1;
  console.log(`\n문항 ${items.length}개 (${Object.entries(kinds).map(([k, v]) => `${k} ${v}`).join(" · ")}) · 본문 답 줄 ${Object.keys(answers).length} → ${outDir}`);
}

main().catch((error) => { console.error(error); process.exit(1); });
