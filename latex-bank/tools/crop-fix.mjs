// 사람 지정 상자로 그림 크롭을 다시 만든다(300dpi · 연회색 워터마크 흰색화 · crops.json 갱신).
// 사용: node crop-fix.mjs <bank> "<pdf>" <fig-name.png> <pdf쪽> x0 y0 x1 y1 [whitenMin]
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { pdfjs, renderPage } from "../../scripts/problem-bank/pdfTools.mjs";
const [bank, pdf, name, pageNo, x0, y0, x1, y1, whitenArg] = process.argv.slice(2);
const box = { x0: +x0, y0: +y0, x1: +x1, y1: +y1 };
const whitenMin = Number(whitenArg) || 232;
const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(pdf)), verbosity: 0 }).promise;
const page = await doc.getPage(Number(pageNo));
const scale = 300 / 72;
const { canvas } = await renderPage(page, scale);
const x = Math.max(0, Math.floor(box.x0 * scale)), y = Math.max(0, Math.floor(box.y0 * scale));
const w = Math.min(canvas.width - x, Math.ceil((box.x1 - box.x0) * scale)), h = Math.min(canvas.height - y, Math.ceil((box.y1 - box.y0) * scale));
const out = createCanvas(w, h);
const ctx = out.getContext("2d");
ctx.drawImage(canvas, x, y, w, h, 0, 0, w, h);
const image = ctx.getImageData(0, 0, w, h);
const px = image.data;
for (let i = 0; i < px.length; i += 4) {
  const max = Math.max(px[i], px[i + 1], px[i + 2]), min = Math.min(px[i], px[i + 1], px[i + 2]);
  if (max - min < 10 && min > whitenMin) { px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; }
}
ctx.putImageData(image, 0, 0);
const figDir = path.join("latex-bank", bank, "figures");
await writeFile(path.join(figDir, name), await out.encode("png"));
const cropsPath = path.join(figDir, "crops.json");
const crops = JSON.parse(await readFile(cropsPath, "utf8"));
crops[name] = { width_pt: +(box.x1 - box.x0).toFixed(1), height_pt: +(box.y1 - box.y0).toFixed(1), pdf_page: Number(pageNo), bbox_pt: [box.x0, box.y0, box.x1, box.y1], manual: true };
await writeFile(cropsPath, JSON.stringify(crops, null, 1), "utf8");
console.log(`${name}: ${w}x${h}px · ${(box.x1 - box.x0).toFixed(1)}x${(box.y1 - box.y0).toFixed(1)}pt`);
