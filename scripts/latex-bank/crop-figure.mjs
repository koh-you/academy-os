#!/usr/bin/env node
// 원문 그림 고해상 크롭 — 스캔 화질이 그대로 쓸 만한 삽화(실생활 그림 등)를 latex-bank 의 figures/<이름>.jpg 로 오려 낸다.
//
// 사용:
//   node scripts/latex-bank/crop-figure.mjs --pdf "C:/…/베이직쎈-공통수학2.pdf" --page 15 \
//     --item 0.0259,0.6435,0.4634,0.8213 --rel 0.55,0.05,1,0.95 --out latex-bank/ssen-basic-cm2/figures/fig-21-10.jpg [--dpi 600]
//
// --item 은 문항 크롭의 bbox_normalized(manifest.json · 쪽 기준 0~1), --rel 은 그 문항 상자 안에서 그림이 차지하는
// 상대 비율(왼쪽·위·오른쪽·아래 0~1). --item 을 빼면 --rel 을 쪽 전체 기준 비율로 본다.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { parseArgs, pdfjs, renderPage } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.pdf || !args.page || !args.out) {
  console.error("사용: --pdf <파일> --page <쪽> [--item x0,y0,x1,y1] --rel x0,y0,x1,y1 --out figures/<이름>.jpg [--dpi 600]");
  process.exit(2);
}
const numbers = (value, fallback) => (value ? String(value).split(",").map(Number) : fallback);
const item = numbers(args.item, [0, 0, 1, 1]);
const rel = numbers(args.rel, [0, 0, 1, 1]);
const dpi = Number(args.dpi) || 600;

const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(args.pdf)), verbosity: 0 }).promise;
const page = await doc.getPage(Number(args.page));
const { canvas } = await renderPage(page, dpi / 72);
const W = canvas.width;
const H = canvas.height;
const ix0 = item[0] * W;
const iy0 = item[1] * H;
const iw = (item[2] - item[0]) * W;
const ih = (item[3] - item[1]) * H;
const x0 = Math.round(ix0 + rel[0] * iw);
const y0 = Math.round(iy0 + rel[1] * ih);
const x1 = Math.round(ix0 + rel[2] * iw);
const y1 = Math.round(iy0 + rel[3] * ih);
const cut = createCanvas(x1 - x0, y1 - y0);
cut.getContext("2d").drawImage(canvas, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
await writeFile(args.out, await cut.encode(args.out.endsWith(".png") ? "png" : "jpeg", 92));
console.log(`${path.basename(args.out)} ${x1 - x0}x${y1 - y0}px @${dpi}dpi`);
