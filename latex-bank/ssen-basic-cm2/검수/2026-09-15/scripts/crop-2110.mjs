// 21-10 삽화 고해상 크롭. 사용: node crop-2110.mjs <x0> <y0> <x1> <y1> (문항 bbox 안 상대 비율 0~1) [out]
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { pdfjs, renderPage } from "../../../../../scripts/problem-bank/pdfTools.mjs";

const PDF = "C:/Users/PC/Documents/카카오톡 받은 파일/베이직쎈-공통수학2.pdf";
const PAGE = 15;
const ITEM = [0.0259, 0.6435, 0.46343, 0.8213];
const [rx0, ry0, rx1, ry1] = process.argv.slice(2, 6).map(Number);
const out = process.argv[6] ?? "C:/Users/PC/AppData/Local/Temp/claude/C--Users-PC-github-academy-os/55c100af-7174-429e-a2ba-c03a3c31e7ff/scratchpad/crop-2110.png";

const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(PDF)), verbosity: 0 }).promise;
const page = await doc.getPage(PAGE);
const { canvas } = await renderPage(page, 600 / 72);
const W = canvas.width, H = canvas.height;
const ix0 = ITEM[0] * W, iy0 = ITEM[1] * H, iw = (ITEM[2] - ITEM[0]) * W, ih = (ITEM[3] - ITEM[1]) * H;
const x0 = Math.round(ix0 + (Number.isFinite(rx0) ? rx0 : 0) * iw);
const y0 = Math.round(iy0 + (Number.isFinite(ry0) ? ry0 : 0) * ih);
const x1 = Math.round(ix0 + (Number.isFinite(rx1) ? rx1 : 1) * iw);
const y1 = Math.round(iy0 + (Number.isFinite(ry1) ? ry1 : 1) * ih);
const cut = createCanvas(x1 - x0, y1 - y0);
cut.getContext("2d").drawImage(canvas, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
await writeFile(out, await cut.encode(out.endsWith(".jpg") ? "jpeg" : "png"));
console.log(`${path.basename(out)} ${x1 - x0}x${y1 - y0} px @600dpi (page ${W}x${H})`);
