#!/usr/bin/env node
// 개념원리 「정답 및 풀이」 PDF → 문항별 답 크롭(빠른정답 상자의 한 항목씩). 비전 AI 호출 0.
//
// 정답 PDF 는 구역마다 「개념원리 확인하기 ▸ 본문 11쪽」 같은 머리와 함께 빠른정답 상자를 두고, 그 안에 「01 ⑴7, −7 …」처럼
// 번호(색 글자)와 답이 나열된다. 상자(둥근 사각형 path)를 찾아 안의 번호 토큰(색 있음 · 1~2자리)마다 다음 번호 앞까지를
// 한 항목으로 오려 answers/<item_id>.jpg 로 둔다. 항목 ↔ 문항 대응은 머리의 본문 쪽 범위 + 구역 종류 + 번호로 한다.
//   개념원리 확인하기 · 이런 문제가 시험에 나온다 · 중단원 마무리하기 · 계산력 강화하기 · 실력 UP → 「쪽-NN」
//   핵심문제 익히기 → 「쪽-cN」(확인 N · 핵심문제 답은 본문에 있음)   서술형 대비 문제 → 「쪽-uN」(유제 N)
// 글자 레이어의 수식은 사설 글꼴 코드라 answer_text 는 참고용이고, 전사 에이전트는 크롭을 읽는다.
//
// 사용:
//   node scripts/problem-bank/ingest-gn-answers.mjs --pdf "C:/…/개념원리 중학 3-1 정답.pdf" --out output/problem-bank/gn-m31 [--pages 2-88] [--dpi 220] [--ocr]
// --out 은 ingest-gn.mjs 의 출력 폴더(manifest.json 필요). 결과는 manifest-answers.json 의 answers 에 합쳐진다(본문 답 줄은 유지).
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import os from "node:os";
import path from "node:path";
import { cropCanvasToFile, drawQa, parseArgs, parsePageRange, pdfjs, renderPage, toViewportTokens } from "./pdfTools.mjs";
import { pagePathBoxes } from "../latex-bank/pdfVectorFigures.mjs";
import { findKoreanTessdata, findTesseract } from "./scanTools.mjs";
import { parseTesseractTsv } from "../../src/domains/problems/scanPdfSegmenter.js";

const execFileAsync = promisify(execFile);
const text = (token) => String(token.str ?? "").trim();
const SECTION_KIND = [
  ["확인하기", "개념원리 확인하기", ""], ["익히기", "핵심문제 익히기", "c"], ["시험에", "이런 문제가 시험에 나온다", ""], ["나온다", "이런 문제가 시험에 나온다", ""],
  ["마무리하기", "중단원 마무리하기", ""], ["대비", "서술형 대비 문제", "u"], ["강화하기", "계산력 강화하기", ""], ["실력", "실력 UP", ""]
];

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
  return tokens.map((token) => ({ str: token.text, x: token.x, y: token.y + token.h, w: token.w, h: token.h, fontName: "ocr" }));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) { console.error("사용: --pdf <정답.pdf> --out <문항 패키지 폴더> [--pages a-b] [--dpi 220] [--ocr]"); process.exit(2); }
  const outDir = path.resolve(args.out);
  const manifest = JSON.parse(await readFile(path.join(outDir, "manifest.json"), "utf8"));
  const answersPath = path.join(outDir, "manifest-answers.json");
  const answersDoc = JSON.parse(await readFile(answersPath, "utf8").catch(() => JSON.stringify({ schema_version: 1, book_id: manifest.book.book_id, answers: [], solutions: [] })));
  await mkdir(path.join(outDir, "answers"), { recursive: true });
  await mkdir(path.join(outDir, "qa"), { recursive: true });
  const dpi = Number(args.dpi) || 220;
  const scale = dpi / 72;
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(args.pdf)), verbosity: 0 }).promise;
  const [fromPage, toPage] = parsePageRange(args.pages, doc.numPages);
  const useOcr = Boolean(args.ocr);
  const tesseract = useOcr ? await findTesseract() : null;
  const tessdataDir = useOcr ? await findKoreanTessdata() : null;
  const ocrDpi = Number(args["ocr-dpi"]) || 300;
  const ocrTmp = path.join(os.tmpdir(), `ingest-gn-ans-${process.pid}.png`);

  // 문항 색인: (인쇄 쪽, 종류, 번호) → item
  const byKey = new Map();
  for (const item of manifest.items) {
    const [pageText, rest] = item.number_label.split("-");
    const kind = rest.replace(/\d+/g, "");
    byKey.set(`${pageText}|${kind}|${Number(rest.replace(/\D/g, ""))}`, item);
  }
  const found = new Map();
  let boxCount = 0;

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const W = viewport.width, H = viewport.height;
    const tokens = (useOcr ? await ocrPageTokens(tesseract, tessdataDir, page, ocrDpi, ocrTmp) : toViewportTokens(await page.getTextContent(), viewport)).filter((t) => text(t));
    // 머리: 「본문 N쪽」 「본문 N~M쪽」 토큰 줄
    const heads = [];
    for (const token of tokens) {
      const s = text(token);
      const m = s.match(/본문\s*(\d{1,3})(?:\s*[~∼-]\s*(\d{1,3}))?/);
      if (!m) continue;
      let from = Number(m[1]), to = m[2] ? Number(m[2]) : from;
      // 「본문 12」「~13」「쪽」 처럼 쪼개진 토큰
      const rest = tokens.filter((other) => other !== token && Math.abs(other.y - token.y) < 3 && other.x > token.x && other.x - (token.x + token.w) < 40).sort((a, b) => a.x - b.x).map(text).join("");
      const m2 = rest.match(/^[~∼-]\s*(\d{1,3})/);
      if (!m[2] && m2) to = Number(m2[1]);
      const label = tokens.filter((other) => Math.abs(other.y - token.y) < 10 && other.x < token.x && other.h >= 9).map(text).join(" ");
      const kindEntry = SECTION_KIND.find(([key]) => label.includes(key));
      if (!kindEntry) continue;
      heads.push({ y: token.y, x: token.x, from, to, section: kindEntry[1], kind: kindEntry[2], label });
    }
    if (process.env.GN_DEBUG) console.log(`p${pageNumber} heads ${heads.length}: ${heads.map((h) => `${h.section}(${h.from}~${h.to})`).join(" · ")}`);
    if (!heads.length) { page.cleanup(); continue; }
    const paths = await pagePathBoxes(page);
    const { canvas } = await renderPage(page, scale);
    const qaBoxes = [];
    for (const head of heads) {
      // 머리 아래에서 시작하는 상자(테두리 path · 폭 150pt 이상 · 머리 x 를 포함)
      const box = paths
        .filter((p) => p.w >= 150 && p.h >= 14 && p.y0 >= head.y - 30 && p.y0 <= head.y + 12 && p.x0 <= head.x && p.x1 >= head.x - 20)
        .sort((a, b) => a.y0 - b.y0)[0];
      if (!box) { console.log(`  p${pageNumber} ${head.section} 본문 ${head.from}~${head.to}: 상자 못 찾음`); continue; }
      boxCount += 1;
      if (process.env.GN_DEBUG) console.log(`  p${pageNumber} ${head.section} ${head.from}~${head.to} 상자 ${box.x0.toFixed(0)},${box.y0.toFixed(0)}-${box.x1.toFixed(0)},${box.y1.toFixed(0)}`);
      const inside = tokens.filter((t) => t.x >= box.x0 - 1 && t.x + t.w <= box.x1 + 2 && t.y - t.h >= head.y + 2 && t.y <= box.y1 + 1);
      // 번호 토큰: 1~2자리 숫자 · 색 있음(사설 글꼴이 아닌 굵은 글자) — 색은 렌더에서 잰다.
      const data = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
      const colored = (t) => {
        let dark = 0; const sum = [0, 0, 0];
        for (let y = Math.max(0, Math.round((t.y - t.h) * scale)); y < Math.min(canvas.height, Math.round(t.y * scale)); y += 1) for (let x = Math.max(0, Math.round(t.x * scale)); x < Math.min(canvas.width, Math.round((t.x + t.w) * scale)); x += 1) {
          const o = (y * canvas.width + x) * 4; const r = data[o], g = data[o + 1], b = data[o + 2];
          if ((r + g + b) / 3 > 190) continue; dark += 1; sum[0] += r; sum[1] += g; sum[2] += b;
        }
        if (!dark) return false; const mean = sum.map((v) => v / dark); return Math.max(...mean) - Math.min(...mean) > 25;
      };
      const ordered = [...inside].sort((a, b) => (Math.abs(a.y - b.y) < 4 ? a.x - b.x : a.y - b.y));
      const numberTokens = ordered.filter((t) => /^\d{1,2}$/.test(text(t)) && t.h >= 8 && colored(t));
      // 항목 = 번호 토큰부터 다음 번호 토큰 앞까지. 서술형 상자처럼 번호가 그림(글자 없음)이면 줄·간격(20pt)으로 칸을 나눠 1부터 센다.
      const entries = [];
      if (numberTokens.length) {
        for (const [i, nt] of numberTokens.entries()) {
          const start = ordered.indexOf(nt);
          const end = i + 1 < numberTokens.length ? ordered.indexOf(numberTokens[i + 1]) : ordered.length;
          entries.push({ n: Number(text(nt)), tokens: ordered.slice(start, end), textTokens: ordered.slice(start + 1, end) });
        }
      } else {
        let cell = null;
        for (const t of ordered) {
          const last = cell?.tokens.at(-1);
          if (!last || Math.abs(t.y - last.y) >= 4 || t.x - (last.x + last.w) > 20) { cell = { n: entries.length + 1, tokens: [t], textTokens: [t] }; entries.push(cell); } else { cell.tokens.push(t); cell.textTokens.push(t); }
        }
      }
      for (const { n, tokens: entryTokens, textTokens } of entries) {
        // 쪽 범위 안에서 같은 종류·번호인 문항(범위가 여러 쪽이면 앞 쪽부터)
        let item = null;
        for (let p = head.from; p <= head.to && !item; p += 1) item = byKey.get(`${p}|${head.kind}|${n}`) ?? null;
        if (!item) { continue; }
        const x0 = Math.min(...entryTokens.map((t) => t.x)) - 2, x1 = Math.max(...entryTokens.map((t) => t.x + t.w)) + 2;
        const y0 = Math.min(...entryTokens.map((t) => t.y - t.h)) - 3, y1 = Math.max(...entryTokens.map((t) => t.y)) + 4;
        const crop = { x0: Math.max(box.x0, x0), y0, x1: Math.min(box.x1, x1), y1 };
        const file = `answers/${item.item_id}.jpg`;
        await cropCanvasToFile(canvas, scale, crop, path.join(outDir, file));
        const answerText = useOcr ? "" : textTokens.map(text).join(" ").replace(/\s+/g, " ").trim();
        found.set(item.number_label, { number_label: item.number_label, text: answerText, file, pdf_page: pageNumber, section: head.section });
        qaBoxes.push({ label: item.number_label, box: crop, color: "#1d4ed8" });
      }
      qaBoxes.push({ label: `${head.section} ${head.from}~${head.to}`, box: { x0: box.x0, y0: box.y0, x1: box.x1, y1: box.y1 }, color: "#176e59" });
    }
    await drawQa(canvas, W, H, qaBoxes, path.join(outDir, "qa", `answers-p${String(pageNumber).padStart(3, "0")}.jpg`));
    page.cleanup();
  }

  const existing = new Map((answersDoc.answers ?? []).map((entry) => [entry.number_label, entry]));
  for (const [label, entry] of found) if (!existing.has(label)) existing.set(label, entry);
  answersDoc.answers = [...existing.values()];
  const missing = manifest.items.filter((item) => !existing.has(item.number_label)).map((item) => item.number_label);
  answersDoc.validation = { ...(answersDoc.validation ?? {}), answers: { count: existing.size, expected: manifest.items.length, boxes: boxCount, missing } };
  await writeFile(answersPath, JSON.stringify(answersDoc, null, 2), "utf8");
  console.log(`빠른정답 상자 ${boxCount}개 · 답 크롭 ${found.size}개 (본문 답 줄 포함 ${existing.size}/${manifest.items.length}) · 빠진 문항 ${missing.length}${missing.length ? ": " + missing.slice(0, 30).join(" ") + (missing.length > 30 ? " …" : "") : ""}`);
}

main().catch((error) => { console.error(error); process.exit(1); });
