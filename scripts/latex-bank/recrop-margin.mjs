#!/usr/bin/env node
// 자동 크롭(figures/crops.json 의 bbox_pt · manual 아님)을 여백을 더해 다시 오린다 — 윤곽선 PDF(OCR 판)에서 그림 가장자리의
// 라벨(A·B·x·O)이 글자 path 로 잡혀 크롭 밖으로 반쯤 잘리던 것(RPM 대수 0721·0735·0740·0758 …). 크기 기록(width_pt·height_pt·bbox_pt)도 갱신한다.
//
// 사용:
//   node scripts/latex-bank/recrop-margin.mjs --pdf "C:/…/RPM 대수 학생용.pdf" --bank latex-bank/rpm-alg [--dx 6] [--dy 4] [--dpi 300] [--whiten-gray] [--only fig-0721.png,…]
//   한쪽만 넓힐 때는 --dl/--dr/--dt/--db(왼·오른·위·아래 pt)로 dx·dy 를 덮어쓴다 — 반대쪽을 같이 넓히면 이웃 글자가 딸려 들어오는 경우(RPM 기하 0118 오른쪽 라벨).
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { parseArgs, pdfjs, renderPage } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.pdf || !args.bank) { console.error("사용: --pdf <파일> --bank latex-bank/<책> [--dx 6] [--dy 4] [--dpi 300] [--whiten-gray] [--only a.png,b.png]"); process.exit(2); }
const dx = Number(args.dx ?? 6), dy = Number(args.dy ?? 4), dpi = Number(args.dpi) || 300;
const side = (key, fallback) => (args[key] === undefined ? fallback : Number(args[key]));
const dl = side("dl", dx), dr = side("dr", dx), dt = side("dt", dy), db = side("db", dy);
const scale = dpi / 72;
const figuresDir = path.join(path.resolve(args.bank), "figures");
const cropsPath = path.join(figuresDir, "crops.json");
const crops = JSON.parse(await readFile(cropsPath, "utf8"));
const only = typeof args.only === "string" ? new Set(args.only.split(",").map((s) => s.trim())) : null;
const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(args.pdf)), verbosity: 0 }).promise;
const byPage = new Map();
for (const [file, entry] of Object.entries(crops)) {
  if (entry.manual || !entry.bbox_pt || !entry.pdf_page) continue;
  if (only && !only.has(file)) continue;
  if (!byPage.has(entry.pdf_page)) byPage.set(entry.pdf_page, []);
  byPage.get(entry.pdf_page).push([file, entry]);
}
let done = 0;
for (const [pageNumber, entries] of [...byPage].sort((a, b) => a[0] - b[0])) {
  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1 });
  const { canvas } = await renderPage(page, scale);
  const ctx = canvas.getContext("2d");
  for (const [file, entry] of entries) {
    const [bx0, by0, bx1, by1] = entry.bbox_pt;
    const x0 = Math.max(0, bx0 - dl), y0 = Math.max(0, by0 - dt), x1 = Math.min(viewport.width, bx1 + dr), y1 = Math.min(viewport.height, by1 + db);
    const px0 = Math.round(x0 * scale), py0 = Math.round(y0 * scale), pw = Math.round((x1 - x0) * scale), ph = Math.round((y1 - y0) * scale);
    const out = createCanvas(pw, ph);
    const octx = out.getContext("2d");
    octx.drawImage(canvas, px0, py0, pw, ph, 0, 0, pw, ph);
    if (args["whiten-gray"]) {
      const image = octx.getImageData(0, 0, pw, ph); const px = image.data;
      for (let i = 0; i < px.length; i += 4) { const max = Math.max(px[i], px[i + 1], px[i + 2]), min = Math.min(px[i], px[i + 1], px[i + 2]); if (max - min < 10 && min > 232) { px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; } }
      octx.putImageData(image, 0, 0);
    }
    await writeFile(path.join(figuresDir, file), await out.encode("png"));
    crops[file] = { ...entry, width_pt: Number((x1 - x0).toFixed(1)), height_pt: Number((y1 - y0).toFixed(1)), bbox_pt: [x0, y0, x1, y1].map((v) => Number(v.toFixed(1))), margin: [dl, dr, dt, db] };
    done += 1;
  }
  page.cleanup();
}
await writeFile(cropsPath, JSON.stringify(crops, null, 1), "utf8");
console.log(`여백 재크롭 ${done}개 (왼 ${dl} · 오른 ${dr} · 위 ${dt} · 아래 ${db} pt) → ${figuresDir}`);
