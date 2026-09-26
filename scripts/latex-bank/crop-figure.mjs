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
const cutContext = cut.getContext("2d");
cutContext.drawImage(canvas, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
if (args["whiten-gray"]) {
  // prepare-text-pdf-bank 의 --whiten-gray 와 같은 규칙: 연회색 워터마크(무채색·밝음)를 흰색으로. 채도 있는 채움은 남는다.
  const whitenMin = Number(args["whiten-min"]) || 232;
  const image = cutContext.getImageData(0, 0, x1 - x0, y1 - y0);
  const px = image.data;
  for (let i = 0; i < px.length; i += 4) {
    const max = Math.max(px[i], px[i + 1], px[i + 2]);
    const min = Math.min(px[i], px[i + 1], px[i + 2]);
    if (max - min < 10 && min > whitenMin) { px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; }
  }
  cutContext.putImageData(image, 0, 0);
}
await writeFile(args.out, await cut.encode(args.out.endsWith(".png") ? "png" : "jpeg", 92));
console.log(`${path.basename(args.out)} ${x1 - x0}x${y1 - y0}px @${dpi}dpi`);

// 같은 폴더에 crops.json(prepare-text-pdf-bank 산출 · 원문 크기 pt)이 있으면 이 크롭의 크기를 적어 둔다 —
// build.mjs 가 크롭을 원문 크기로 놓으므로, 자동 크롭을 사람이 다시 만들었을 때 옛 크기가 남아 있으면 그림이 커지거나 낱장을 넘친다.
const cropsPath = path.join(path.dirname(args.out), "crops.json");
try {
  const crops = JSON.parse(await readFile(cropsPath, "utf8"));
  const scale = 72 / dpi;
  crops[path.basename(args.out)] = { ...(crops[path.basename(args.out)] ?? {}), width_pt: Number(((x1 - x0) * scale).toFixed(1)), height_pt: Number(((y1 - y0) * scale).toFixed(1)), pdf_page: Number(args.page), manual: true };
  await writeFile(cropsPath, JSON.stringify(crops, null, 1), "utf8");
} catch {
  // crops.json 이 없는 은행(스캔 경로)은 상대 폭으로 놓이므로 기록하지 않는다.
}
