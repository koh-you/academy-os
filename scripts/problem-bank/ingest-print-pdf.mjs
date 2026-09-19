#!/usr/bin/env node
// 프린트(HWP 출력 텍스트 PDF · 2단 · 「N.」 번호)의 문항 패키지 원천화 — 교재가 아닌 낱장 시험지·기출 모음용.
//
// 문항 쪽: 번호 「N.」(큰 글꼴) 위치로 문항을 나누고, 번호 위의 출처 태그(「2023년교육청고1공통11월> 9 [3점]」)·난이도(「Lv2 보통」)를
// 메타로 적는다. 답 쪽: 「N. [정답] X」 줄을 읽는다(수식 답은 HWP 사설 글꼴이라 못 읽으므로 crop 으로 남긴다). 해설 쪽: 「N) [정답]」
// 줄부터 다음 번호까지를 해설 크롭으로 만든다. 결과는 ingest-text-pdf 와 같은 manifest.json 이라 prepare-text-pdf-bank(벡터 그림 크롭·
// 전사 힌트) → make-batches → 전사 → build.mjs --review/--export 가 그대로 이어진다.
//
// 사용:
//   node scripts/problem-bank/ingest-print-pdf.mjs --pdf "C:/…/프린트.pdf" --out output/problem-bank/<이름> --title "2026 정의여고 1-2 중간고사 프린트"
//     [--item-pages 1-14] [--answer-page 15] [--solution-pages 16-26] [--dpi 200] [--unit "GM:평면좌표·직선·원"]
import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { cropCanvasToFile, drawQa, parseArgs, pdfjs, renderPage, toViewportTokens } from "./pdfTools.mjs";
import { pagePathBoxes } from "../latex-bank/pdfVectorFigures.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.pdf || !args.out || !args.title) {
  console.error("사용: --pdf <프린트.pdf> --out <패키지 폴더> --title <이름> [--item-pages a-b] [--answer-page n] [--solution-pages a-b] [--dpi 200]");
  process.exit(2);
}
const dpi = Number(args.dpi) || 200;
// --mode book: 구역마다 번호가 다시 시작하는 기출 모음 교재(100발100중). 번호 배지는 큰 글꼴 1~2자리 숫자(마침표 없음), id 는 「인쇄 쪽-번호」,
// 인쇄 쪽 = pdf 쪽 + --page-offset. 번호 줄의 작은 글씨(유형 제목)를 type_label 로, 쪽 머리의 구역 표시는 없으므로 배지 글꼴 크기로 구역을 짐작한다.
const bookMode = args.mode === "book";
const pageOffset = Number(args["page-offset"] ?? 0);
const scale = dpi / 72;
const parseRange = (text, fallback) => {
  if (!text) return fallback;
  const [a, b] = String(text).split("-").map(Number);
  return [a, b ?? a];
};

const pdfBytes = await readFile(args.pdf);
const sha256 = createHash("sha256").update(pdfBytes).digest("hex");
const bookId = `pbk_${sha256.slice(0, 10)}`;
const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
const outDir = path.resolve(args.out);
for (const sub of ["items", "pages", "qa", "answers", "solutions"]) await mkdir(path.join(outDir, sub), { recursive: true });

const [itemFrom, itemTo] = parseRange(args["item-pages"], [1, doc.numPages]);
const answerPage = args["answer-page"] ? Number(args["answer-page"]) : null;
const [solFrom, solTo] = parseRange(args["solution-pages"], [0, -1]);

/** 토큰을 줄(기준선 3pt 안 · 같은 컬럼)로 묶는다. 2단이라 왼쪽·오른쪽 컬럼의 같은 높이 줄을 섞지 않는다. */
function linesOf(tokens, gutter = Infinity) {
  const lines = [];
  for (const token of tokens.sort((a, b) => a.y - b.y || a.x - b.x)) {
    if (!token.str.trim()) continue;
    const side = token.x < gutter ? 0 : 1;
    const line = lines.find((entry) => entry.side === side && Math.abs(entry.y - token.y) < 3);
    if (line) line.tokens.push(token);
    else lines.push({ y: token.y, side, tokens: [token] });
  }
  for (const line of lines) {
    line.tokens.sort((a, b) => a.x - b.x);
    line.text = line.tokens.map((token) => token.str).join("").replace(/\s+/g, " ").trim();
    line.x = line.tokens[0].x;
    line.h = Math.max(...line.tokens.map((token) => token.h));
  }
  return lines.sort((a, b) => a.y - b.y);
}

const items = [];
const pageSummaries = [];
const answers = {};
let gutterGuess = null;

// ── 문항 쪽 ──────────────────────────────────────────────────────────────
for (let pageNumber = itemFrom; pageNumber <= itemTo; pageNumber += 1) {
  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1 });
  const tokens = toViewportTokens(await page.getTextContent(), viewport);
  // 래스터 그림 상자: 컬럼 마지막 문항의 그림이 글자 줄 아래에 놓이면 글자만으로는 바닥을 못 잡는다.
  const imageBoxes = (await pagePathBoxes(page)).filter((box) => box.kind === "image");
  const gutter = gutterGuess ?? viewport.width / 2;
  const lines = linesOf(tokens, gutter);
  // 번호 줄: 「N.」 한 토큰, 큰 글꼴(13pt 이상). 본문 시작 「N)」 은 번호가 아니다.
  const numberLines = tokens
    .filter((token) => (bookMode ? /^\d{1,2}$/.test(token.str.trim()) && token.h >= 17 : /^\d{1,3}\.$/.test(token.str.trim()) && token.h >= 13))
    .map((token) => ({ x: token.x, y: token.y, h: token.h, text: token.str.trim() }));
  // book 모드: 번호가 모두 쪽 가운데 왼쪽(x 150~220 · 집중공략·서술형 쪽의 예제/연습문제)이면 한 단 · 아니면 두 단.
  const singleColumn = bookMode && numberLines.length > 0 && numberLines.every((line) => line.x > 120 && line.x < 230);
  const columns = [[], []];
  for (const line of numberLines) columns[singleColumn ? 0 : line.x < gutter ? 0 : 1].push(line);
  // 머리글(「수학영역」 큰 제목)·바닥글(쪽 번호) 사이가 본문 영역.
  const headerBottom = Math.max(0, ...lines.filter((line) => line.h >= 20 && line.y < viewport.height * 0.15).map((line) => line.y + 4));
  const footerTop = Math.min(viewport.height, ...lines.filter((line) => line.y > viewport.height * 0.9 && /^\d+$/.test(line.text)).map((line) => line.y - line.h - 6));
  const { canvas } = await renderPage(page, scale);
  await writeFile(path.join(outDir, "pages", `p${String(pageNumber).padStart(3, "0")}.jpg`), await canvas.encode("jpeg", 85));
  const qaBoxes = [];
  const pageItems = [];
  for (const [columnIndex, column] of columns.entries()) {
    const x0 = singleColumn ? Math.min(...column.map((line) => line.x)) - 6 : columnIndex === 0 ? 40 : gutter + 8;
    const x1 = singleColumn ? viewport.width - 40 : columnIndex === 0 ? gutter - 8 : viewport.width - 40;
    const colGutter = singleColumn ? -Infinity : gutter;
    for (const [index, line] of column.entries()) {
      const numberTop = line.y - line.h;
      // 번호 위 70pt 안의 작은 글꼴 줄(출처 태그·난이도)을 문항에 포함한다.
      const metaLines = bookMode ? [] : lines.filter((entry) => entry.y < numberTop && entry.y > numberTop - 70 && entry.h < 10 && (columnIndex === 0 ? entry.x < colGutter : entry.x >= colGutter));
      // 크롭은 번호 줄부터. 출처 태그·난이도 줄(머리띠 상자)은 텍스트로만 적는다 — 크롭에 넣으면 벡터 그림 검출이 상자 선을 그림으로 잡는다.
      const top = numberTop - 3;
      const next = column[index + 1];
      let bottom;
      if (next) {
        const nextMeta = bookMode ? [] : lines.filter((entry) => entry.y < next.y - next.h && entry.y > next.y - next.h - 70 && entry.h < 10 && (columnIndex === 0 ? entry.x < colGutter : entry.x >= colGutter));
        bottom = (nextMeta.length ? Math.min(...nextMeta.map((entry) => entry.y - entry.h)) : next.y - next.h) - 6;
      } else {
        // 마지막 문항: 이 컬럼의 마지막 글자 줄까지(빈 공간은 뺀다).
        const columnLines = lines.filter((entry) => entry.y > line.y && entry.y < footerTop && entry.x >= x0 - 2 && (columnIndex === 0 ? entry.x < colGutter : entry.x >= colGutter));
        const columnImages = imageBoxes.filter((box) => box.y0 > numberTop && box.y1 < footerTop && box.x0 >= x0 - 2 && (columnIndex === 0 ? box.x0 < colGutter : box.x0 >= colGutter));
        bottom = Math.min(footerTop, Math.max(columnLines.length ? Math.max(...columnLines.map((entry) => entry.y)) : line.y, ...columnImages.map((box) => box.y1)) + 14);
      }
      const number = Number(line.text.replace(".", ""));
      const printedPage = pageNumber + pageOffset;
      // 예제(큰 번호)는 같은 쪽 연습문제와 번호가 겹치므로 「쪽-e번호」 로 구분한다(출처 배지 「N쪽 예제 1」).
      const isExample = bookMode && line.h >= 40;
      const label = bookMode ? `${printedPage}-${isExample ? "e" : ""}${String(number).padStart(isExample ? 1 : 2, "0")}` : String(number).padStart(2, "0");
      // book 모드: 번호 줄의 작은 글씨(유형 번호·제목)가 유형 라벨. 예제(51pt 번호)는 제목이 큰 글씨라 따로 잡는다.
      const titleTokens = bookMode ? tokens.filter((token) => Math.abs(token.y - line.y) < line.h && token.x > line.x + line.h * 0.8 && token.x < x1 && token.h < 9 && token.str.trim()) : [];
      const bookTypeLabel = titleTokens.map((token) => token.str.trim()).join(" ").replace(/^\d{1,2}\s*/, "").trim();
      const kind = !bookMode ? "" : line.h >= 40 ? "예제" : singleColumn ? "연습문제" : "문항";
      const box = { x0, y0: Math.max(headerBottom, top), x1, y1: bottom };
      const file = `items/${bookId}-${label}.jpg`;
      const size = await cropCanvasToFile(canvas, scale, box, path.join(outDir, file));
      const sourceTag = metaLines.find((entry) => /\d{4}년|\[\d점\]/.test(entry.text))?.text ?? "";
      const level = metaLines.find((entry) => /^Lv\s*\d/.test(entry.text))?.text.replace(/\s+/g, " ") ?? "";
      const item = {
        item_id: `${bookId}-${label}`, number_label: label, number_sort: bookMode ? printedPage * 100 + number - (isExample ? 0.5 : 0) : number, printed_page: printedPage, pdf_page: pageNumber,
        column: columnIndex, layout: singleColumn ? "full" : "column", type_label: bookMode ? bookTypeLabel : sourceTag, tags: bookMode ? [kind] : level ? [level] : [], unit_index: 0, has_shared_passage: false, group_key: null,
        review_status: "ai_checked", review_note: "", source_tag: sourceTag, level, kind,
        regions: [{ kind: "body", position: 0, pdf_page: pageNumber, bbox_normalized: [box.x0 / viewport.width, box.y0 / viewport.height, box.x1 / viewport.width, box.y1 / viewport.height], file, width: size.width, height: size.height }]
      };
      pageItems.push(item);
      qaBoxes.push({ label, box, color: columnIndex === 0 ? "#176e59" : "#1d4ed8" });
    }
  }
  if (bookMode) {
    const ordered = pageItems.filter((item) => item.kind === "문항").sort((a, b) => a.number_sort - b.number_sort);
    for (let i = 1; i < ordered.length; i += 1) {
      const prev = ordered[i - 1].number_sort % 100, cur = ordered[i].number_sort % 100;
      if (cur > prev + 1) { ordered[i].review_status = "flagged"; ordered[i].review_note = `number_gap(expected ${prev + 1})`; }
    }
  }
  items.push(...pageItems);
  pageSummaries.push({ pdf_page: pageNumber, printed_page: pageNumber + pageOffset, item_count: pageItems.length, layout: singleColumn ? "full" : "column" });
  await drawQa(canvas, viewport.width, viewport.height, qaBoxes, path.join(outDir, "qa", `p${String(pageNumber).padStart(3, "0")}.jpg`));
  console.log(`p${pageNumber}: 문항 ${pageItems.length} (${pageItems.map((item) => item.number_label).join(" ")})`);
  page.cleanup();
}
items.sort((a, b) => a.number_sort - b.number_sort);

// ── 답 쪽: 「N. [정답] X」 ─────────────────────────────────────────────────
if (answerPage) {
  const page = await doc.getPage(answerPage);
  const viewport = page.getViewport({ scale: 1 });
  const lines = linesOf(toViewportTokens(await page.getTextContent(), viewport), viewport.width / 2);
  const { canvas } = await renderPage(page, scale);
  await writeFile(path.join(outDir, "pages", `p${String(answerPage).padStart(3, "0")}.jpg`), await canvas.encode("jpeg", 85));
  for (const line of lines) {
    const match = line.text.match(/^(\d{1,3})\.\s*\[정답\]\s*(.*)$/);
    if (!match) continue;
    const label = String(Number(match[1])).padStart(2, "0");
    const item = items.find((entry) => entry.number_label === label);
    if (!item) continue;
    const circled = match[2].match(/[①②③④⑤]/)?.[0];
    const box = { x0: line.x - 2, y0: line.y - line.h - 3, x1: Math.min(viewport.width, line.x + 180), y1: line.y + 5 };
    const file = `answers/${item.item_id}.jpg`;
    await cropCanvasToFile(canvas, scale, box, path.join(outDir, file));
    answers[label] = { text: circled ?? null, raw: match[2], file, pdf_page: answerPage };
  }
  console.log(`답 쪽 p${answerPage}: ${Object.keys(answers).length}개 (기호 답 ${Object.values(answers).filter((entry) => entry.text).length} · 수식 답은 크롭)`);
  page.cleanup();
}

// ── 해설 쪽: 「N) [정답]」 줄부터 다음 번호까지 ────────────────────────────
const solutions = [];
if (solTo >= solFrom && solFrom > 0) {
  const starts = [];
  const canvases = new Map();
  for (let pageNumber = solFrom; pageNumber <= solTo; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const lines = linesOf(toViewportTokens(await page.getTextContent(), viewport), viewport.width / 2);
    const { canvas } = await renderPage(page, scale);
    canvases.set(pageNumber, { canvas, viewport, lines });
    await writeFile(path.join(outDir, "pages", `p${String(pageNumber).padStart(3, "0")}.jpg`), await canvas.encode("jpeg", 85));
    const gutter = viewport.width / 2;
    for (const line of lines) {
      const match = line.text.match(/^(\d{1,3})\)\s*\[정답\]/);
      if (match) starts.push({ label: String(Number(match[1])).padStart(2, "0"), pageNumber, column: line.x < gutter ? 0 : 1, y: line.y - line.h - 3 });
    }
    page.cleanup();
  }
  // 같은 쪽·같은 컬럼의 다음 시작 줄(없으면 컬럼 끝)까지가 한 해설. 쪽·컬럼을 넘어가는 풀이는 첫 조각만 잘라도 대부분 읽힌다(뒤 조각은 이어 붙임).
  for (const [index, start] of starts.entries()) {
    const { canvas, viewport, lines } = canvases.get(start.pageNumber);
    const gutter = viewport.width / 2;
    const x0 = start.column === 0 ? 40 : gutter + 8;
    const x1 = start.column === 0 ? gutter - 8 : viewport.width - 40;
    const next = starts[index + 1];
    const parts = [];
    const footerTop = viewport.height * 0.92;
    if (next && next.pageNumber === start.pageNumber && next.column === start.column) {
      parts.push({ pageNumber: start.pageNumber, box: { x0, y0: start.y, x1, y1: next.y - 4 } });
    } else {
      const columnLines = lines.filter((entry) => entry.y > start.y && entry.y < footerTop && (start.column === 0 ? entry.x < gutter : entry.x >= gutter));
      parts.push({ pageNumber: start.pageNumber, box: { x0, y0: start.y, x1, y1: Math.min(footerTop, (columnLines.length ? Math.max(...columnLines.map((entry) => entry.y)) : start.y) + 14) } });
      // 다음 시작이 다른 컬럼/쪽이면 그 앞부분(컬럼 머리~다음 시작)을 이어 붙인다.
      if (next) {
        const target = canvases.get(next.pageNumber);
        const g2 = target.viewport.width / 2;
        const nx0 = next.column === 0 ? 40 : g2 + 8;
        const nx1 = next.column === 0 ? g2 - 8 : target.viewport.width - 40;
        const headerBottom = Math.max(0, ...target.lines.filter((line) => line.h >= 20 && line.y < target.viewport.height * 0.15).map((line) => line.y + 4), ...target.lines.filter((line) => /프린트\(해설\)|^정의여고$/.test(line.text)).map((line) => line.y + 4));
        const head = target.lines.filter((entry) => entry.y > headerBottom && entry.y < next.y && (next.column === 0 ? entry.x < g2 : entry.x >= g2));
        if (head.length) parts.push({ pageNumber: next.pageNumber, box: { x0: nx0, y0: Math.min(...head.map((entry) => entry.y - entry.h)) - 3, x1: nx1, y1: next.y - 4 } });
      }
    }
    const item = items.find((entry) => entry.number_label === start.label);
    if (!item) continue;
    const file = `solutions/${item.item_id}.jpg`;
    if (parts.length === 1) {
      const { canvas: c } = canvases.get(parts[0].pageNumber);
      await cropCanvasToFile(c, scale, parts[0].box, path.join(outDir, file));
    } else {
      const { writeStacked, cropToCanvas } = await import("./pdfTools.mjs");
      await writeStacked(parts.map((part) => cropToCanvas(canvases.get(part.pageNumber).canvas, scale, part.box)), path.join(outDir, file), 12);
    }
    solutions.push({ number_label: start.label, file, parts: parts.length, pdf_page: start.pageNumber });
  }
  console.log(`해설 쪽 p${solFrom}~${solTo}: ${solutions.length}개`);
}

const unitSpec = String(args.unit ?? "01:프린트").split(":");
const manifest = {
  schema_version: 1,
  book: { book_id: bookId, title: args.title, folder_path: "", subject: args.subject || "", grade: args.grade || "", source_kind: "pdf_text_print", source_file_name: path.basename(args.pdf), source_sha256: sha256, page_count: doc.numPages, pages_ingested: [itemFrom, itemTo], item_count: items.length, layout_profile: { render_dpi: dpi, columns: 2 }, ingest_version: "print-1.0" },
  units: [{ position: 0, code: unitSpec[0], title: unitSpec[1] ?? unitSpec[0], chapter: "", item_number_from: items[0]?.number_label, item_number_to: items.at(-1)?.number_label, item_count: items.length }],
  items,
  pages: pageSummaries
};
await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
await writeFile(path.join(outDir, "manifest-answers.json"), JSON.stringify({ schema_version: 1, book_id: bookId, ingest_version: "print-1.0", source_file_name: path.basename(args.pdf), solutions, answers: Object.entries(answers).map(([number_label, entry]) => ({ number_label, ...entry })), validation: { solutions: { count: solutions.length, expected: items.length, missing: items.filter((item) => !solutions.some((entry) => entry.number_label === item.number_label)).map((item) => item.number_label) }, answers: { count: Object.keys(answers).length, missing: items.filter((item) => !answers[item.number_label]).map((item) => item.number_label) } } }, null, 2), "utf8");
await writeFile(path.join(outDir, "validation.json"), JSON.stringify({ items: items.length, flagged: [] }, null, 2), "utf8");
console.log(`\n문항 ${items.length}개 · 답 ${Object.keys(answers).length} · 해설 ${solutions.length} → ${outDir}`);
