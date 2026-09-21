// 쪽 이미지(output/problem-bank/<bank>/pages/pNNN.jpg · 220dpi)에서 pt 상자를 잘라 PNG 로. 사용: node crop-page.mjs <bank> <pdf쪽> x0 y0 x1 y1 <out.png> [zoom]
import { readFile, writeFile } from "node:fs/promises";
import { createCanvas, loadImage } from "@napi-rs/canvas";
const [bank, pageNo, x0, y0, x1, y1, out, zoomArg] = process.argv.slice(2);
const img = await loadImage(await readFile(`output/problem-bank/${bank}/pages/p${String(pageNo).padStart(3, "0")}.jpg`));
const scale = img.width / 533.9, zoom = Number(zoomArg) || 2;
const sx = Math.round(x0 * scale), sy = Math.round(y0 * scale), sw = Math.round((x1 - x0) * scale), sh = Math.round((y1 - y0) * scale);
const canvas = createCanvas(Math.round((x1 - x0) * zoom * 2), Math.round((y1 - y0) * zoom * 2));
const ctx = canvas.getContext("2d");
ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
await writeFile(out, await canvas.encode("png"));
console.log(out, canvas.width, canvas.height);
