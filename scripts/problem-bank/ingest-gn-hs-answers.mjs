#!/usr/bin/env node
// 개념원리 고등 학생용 PDF 끝의 「빠른 정답 찾기」 → 통번호 문항별 답 크롭. 비전 AI 호출 0.
//
// 빠른 정답 쪽은 2단이고 단마다 「1 (1) … (2) …」처럼 통번호(색 글자 · h 10~11 · 단 왼쪽 가장자리)와 답이 이어진다. 단 안에서 번호 윗변부터
// 다음 번호 윗변(또는 중단원 머리 「1 다항식의 연산 · 본책 12~35쪽」·단 바닥)까지를 한 항목으로 오려 answers/<item_id>.jpg 로 둔다.
// 통번호 ↔ 문항은 ingest-gn-hs.mjs 의 manifest(items[].book_number)로 잇는다. 글자 레이어 판은 answer_text 도 적는다(수식은 글꼴 코드라 참고용).
//
// 사용:
//   node scripts/problem-bank/ingest-gn-hs-answers.mjs --pdf "C:/…/개념원리 공통수학1 학생용.pdf" --out output/problem-bank/gn-cm1 --pages 298-312 [--dpi 220] [--ocr]
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import os from "node:os";
import path from "node:path";
import { cropCanvasToFile, drawQa, inkExtent, parseArgs, parsePageRange, pdfjs, renderPage, toViewportTokens } from "./pdfTools.mjs";
import { findKoreanTessdata, findTesseract } from "./scanTools.mjs";
import { parseTesseractTsv } from "../../src/domains/problems/scanPdfSegmenter.js";

const execFileAsync = promisify(execFile);
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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out || !args.pages) {
    console.error("사용: --pdf <파일> --out <ingest-gn-hs 출력 폴더> --pages a-b [--dpi 220] [--ocr]");
    process.exit(2);
  }
  const outDir = path.resolve(args.out);
  const manifest = JSON.parse(await readFile(path.join(outDir, "manifest.json"), "utf8"));
  const byNumber = new Map(manifest.items.filter((item) => item.book_number != null).map((item) => [item.book_number, item]));
  const dpi = Number(args.dpi) || 220;
  const scale = dpi / 72;
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(args.pdf)), verbosity: 0 }).promise;
  const [fromPage, toPage] = parsePageRange(args.pages, doc.numPages);
  const useOcr = Boolean(args.ocr);
  const tesseract = useOcr ? await findTesseract() : null;
  const tessdataDir = useOcr ? await findKoreanTessdata() : null;
  const ocrDpi = Number(args["ocr-dpi"]) || 300;
  const ocrTmp = path.join(os.tmpdir(), `ingest-gn-hs-answers-ocr-${process.pid}.png`);
  await mkdir(path.join(outDir, "answers"), { recursive: true });
  await mkdir(path.join(outDir, "qa"), { recursive: true });
  const numH = useOcr ? [7.5, 13] : [10.3, 10.8];
  const entries = [];
  const missing = new Set(byNumber.keys());
  let duplicates = 0;

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const W = viewport.width, H = viewport.height;
    const tokens = (useOcr ? await ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, ocrTmp) : toViewportTokens(await page.getTextContent(), viewport)).filter((token) => text(token));
    const bodyTop = H * 0.05, bodyBottom = H * 0.94;
    const halfOf = (token) => (token.x < W * 0.5 ? 0 : 1);
    // 번호 후보: h 10.3~10.8(답 글자는 10.0) · 1~3자리. 같은 x(±4pt)끼리 묶어 번호 열을 만든다(반쪽마다 1~2열).
    const candidates = tokens.filter((token) => /^\d{1,3}$/.test(text(token).replace(/\s+/g, "")) && token.h >= numH[0] && token.h <= numH[1] && token.y > bodyTop && token.y < bodyBottom);
    const clusters = [];
    for (const token of candidates.sort((a, b) => a.x - b.x)) {
      const cluster = clusters.find((c) => Math.abs(c.x - token.x) <= 4);
      if (cluster) { cluster.tokens.push(token); cluster.x = (cluster.x * (cluster.tokens.length - 1) + token.x) / cluster.tokens.length; } else clusters.push({ x: token.x, tokens: [token] });
    }
    const numberClusters = clusters.filter((c) => c.tokens.length >= 2 || candidates.length <= 3);
    const numbers = numberClusters.flatMap((c) => c.tokens.map((t) => ({ token: t, cluster: c })));
    // 중단원 머리(큰 번호 h ≥ 18)는 항목 경계.
    const heads = tokens.filter((token) => /^\d{1,2}$/.test(text(token)) && token.h >= 18 && token.y > bodyTop && token.y < bodyBottom);
    if (!numbers.length) { page.cleanup(); continue; }
    const { canvas } = await renderPage(page, scale);
    const context = canvas.getContext("2d");
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const qaBoxes = [];
    numbers.sort((a, b) => a.cluster.x - b.cluster.x || a.token.y - b.token.y);
    for (const [index, { token, cluster }] of numbers.entries()) {
      const half = halfOf(token);
      const n = Number(text(token).replace(/\s+/g, ""));
      const next = numbers.slice(index + 1).find((other) => other.cluster === cluster);
      const head = heads.filter((h) => halfOf(h) === half && h.y - h.h > token.y).sort((a, b) => a.y - b.y)[0];
      const top = token.y - token.h - 3;
      let bottom = next ? next.token.y - next.token.h - 4 : bodyBottom;
      if (head) bottom = Math.min(bottom, head.y - head.h - 6);
      const x0 = Math.max(0, token.x - 3), x1 = half === 0 ? W * 0.5 - 4 : W * 0.95;
      const ink = inkExtent(imageData, canvas.width, scale, { x0: x0 + 1, x1: x1 - 1, y0: top, y1: bottom });
      const box = { x0, y0: top, x1, y1: ink ? Math.min(bottom, ink.bottom + 3) : bottom };
      const item = byNumber.get(n);
      if (!item) { qaBoxes.push({ label: `${n}?`, box, color: "#b91c1c" }); continue; }
      if (!missing.has(n)) { duplicates += 1; continue; }
      missing.delete(n);
      const file = `answers/${item.item_id}.jpg`;
      await cropCanvasToFile(canvas, scale, box, path.join(outDir, file));
      const lineTokens = tokens.filter((other) => other !== token && other.y > top && other.y - other.h < box.y1 && other.x >= x0 && other.x < x1);
      entries.push({ number_label: item.number_label, book_number: n, file, parts: 1, pdf_page: pageNumber, text: useOcr ? "" : lineTokens.sort((a, b) => a.y - b.y || a.x - b.x).map(text).join(" ").slice(0, 200), source: "빠른 정답 찾기" });
      qaBoxes.push({ label: String(n), box, color: "#1d4ed8" });
    }
    await drawQa(canvas, W, H, qaBoxes, path.join(outDir, "qa", `answers-p${String(pageNumber).padStart(3, "0")}.jpg`));
    console.log(`p${pageNumber}: 번호 ${numbers.length}개 · 열 ${numberClusters.map((c) => Math.round(c.x)).join("/")}`);
    page.cleanup();
  }

  const answersPath = path.join(outDir, "manifest-answers.json");
  const existing = JSON.parse(await readFile(answersPath, "utf8").catch(() => "{}"));
  const kept = (existing.answers ?? []).filter((entry) => !entries.some((e) => e.number_label === entry.number_label));
  existing.answers = [...kept, ...entries];
  existing.answers_source = `${path.basename(args.pdf)} 빠른 정답 찾기 p${fromPage}-${toPage} (통번호) + 예제 풀이 블록`;
  existing.validation = { ...(existing.validation ?? {}), quick_answers: { count: entries.length, missing: [...missing].sort((a, b) => a - b), duplicates } };
  await writeFile(answersPath, JSON.stringify(existing, null, 2), "utf8");
  console.log(`\n답 크롭 ${entries.length}개 · 통번호 문항 ${byNumber.size} · 빠진 번호 ${missing.size}${missing.size ? `: ${[...missing].sort((a, b) => a - b).slice(0, 30).join(" ")}` : ""} · 중복 ${duplicates}`);
}

main().catch((error) => { console.error(error); process.exit(1); });
