#!/usr/bin/env node
// 텍스트 PDF 교재(RPM)의 LaTeX 오답은행 준비 — 문항 패키지(manifest.json)와 원본 PDF 에서
//   ① 문항·공통 지시문의 벡터 그림을 찾아 선명하게 크롭(figures/fig-<id>.png · figures/crops.json)
//   ② 글자 레이어를 줄 단위로 모은 전사 힌트(draft.json)
//   ③ items.json 뼈대(단원 목록 · id_style number)
// 를 만든다. 전사 에이전트는 draft.json 힌트와 크롭을 보고 body 만 전사하고, 그림은 이 크롭을 그대로 쓴다(TikZ 안 그림).
//
// 사용:
//   node scripts/latex-bank/prepare-text-pdf-bank.mjs --pdf "C:/…/rpm 중3-2 수학.pdf" --package <문항 패키지> \
//     --bank latex-bank/rpm-m3-2 --book "RPM 중3-2 수학" [--dpi 300]
//
// 그림 규칙(latex-bank/README.md): 원본 화질이 좋으면 크롭을 그대로 쓴다. 텍스트 PDF 는 벡터라 어느 해상도로도 선명하므로 크롭이다.
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { parseArgs, pdfjs, renderPage } from "../problem-bank/pdfTools.mjs";
import { findFigureClusters, pagePathBoxes, textBoxesOf } from "./pdfVectorFigures.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.pdf || !args.package || !args.bank || !args.book) {
  console.error("사용: --pdf <교재.pdf> --package <문항 패키지> --bank latex-bank/<책> --book <책 이름> [--dpi 300]");
  process.exit(2);
}
const dpi = Number(args.dpi) || 300;
// --whiten-gray: 쪽에 연회색 워터마크가 깔린 판(22개정 RPM 학생용)에서 크롭의 무채색 밝은 픽셀을 흰색으로 만든다.
const whitenGray = Boolean(args["whiten-gray"]);
const bankDir = path.resolve(args.bank);
const packageDir = path.resolve(args.package);
const manifest = JSON.parse(await readFile(path.join(packageDir, "manifest.json"), "utf8"));
await mkdir(path.join(bankDir, "figures"), { recursive: true });
await mkdir(path.join(bankDir, "draft", "figures-qa"), { recursive: true });

const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(args.pdf)), verbosity: 0 }).promise;
const toPt = (bbox, viewport) => ({ x0: bbox[0] * viewport.width, y0: bbox[1] * viewport.height, x1: bbox[2] * viewport.width, y1: bbox[3] * viewport.height });
const insideRegion = (b, r, pad = 1) => b.x0 >= r.x0 - pad && b.x1 <= r.x1 + pad && b.y0 >= r.y0 - pad && b.y1 <= r.y1 + pad;
const unionBox = (a, b) => ({ x0: Math.min(a.x0, b.x0), y0: Math.min(a.y0, b.y0), x1: Math.max(a.x1, b.x1), y1: Math.max(a.y1, b.y1) });

/** 글자 토큰을 줄(기준선 3pt 안)로 묶어 왼쪽부터 이어 붙인 힌트 문자열. 그림 안 라벨(figure 영역)은 뺀다. */
function textHint(tokens, region, figureBoxes) {
  const inRegion = tokens.filter((token) => insideRegion(token, region, 2) && !figureBoxes.some((box) => insideRegion(token, box, 1)));
  const lines = [];
  for (const token of inRegion.sort((a, b) => a.y1 - b.y1 || a.x0 - b.x0)) {
    const line = lines.find((entry) => Math.abs(entry.y - token.y1) < 3.2);
    if (line) line.tokens.push(token);
    else lines.push({ y: token.y1, tokens: [token] });
  }
  return lines
    .sort((a, b) => a.y - b.y)
    .map((line) => line.tokens.sort((a, b) => a.x0 - b.x0).map((token) => token.str).join("").replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

// 자동 크롭은 매번 새로 만든다(규칙이 바뀌면 옛 크롭·크기 기록이 남지 않게). figures/ 의 사람이 둔 파일(fig-*.tex 등)은 건드리지 않는다.
const crops = {};
// 사람 지정 그림 상자(latex-bank/<책>/figure-overrides.json): { "0438": { "union": true, "pad": [왼,위,오,아래] } | { "box": [x0,y0,x1,y1] (쪽 pt) } }
const overridesPath = path.join(bankDir, "figure-overrides.json");
const figureOverrides = existsSync(overridesPath) ? JSON.parse(await readFile(overridesPath, "utf8")) : {};
for (const file of await readdir(path.join(bankDir, "figures")).catch(() => [])) if (/^fig-.*\.png$/.test(file)) await rm(path.join(bankDir, "figures", file), { force: true });
const draft = { book: args.book, dpi, items: {}, groups: {} };
let figureCount = 0;
const pages = [...new Set(manifest.items.map((item) => item.pdf_page))].sort((a, b) => a - b);
for (const pageNumber of pages) {
  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1 });
  const paths = await pagePathBoxes(page);
  const allTokens = textBoxesOf(await page.getTextContent(), viewport);
  const renderScale = dpi / 72;
  const { canvas, context } = await renderPage(page, renderScale);
  // 숨은 글자(흰색·투명 렌더 — 교사용 답)는 렌더에 잉크가 없다. 그림 상자를 넓히거나 힌트 줄에 섞이지 않게 따로 둔다.
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const hasInk = (box) => {
    const x0 = Math.max(0, Math.floor(box.x0 * renderScale)), x1 = Math.min(canvas.width, Math.ceil(box.x1 * renderScale));
    const y0 = Math.max(0, Math.floor(box.y0 * renderScale)), y1 = Math.min(canvas.height, Math.ceil(box.y1 * renderScale));
    let dark = 0;
    for (let y = y0; y < y1; y += 2) for (let x = x0; x < x1; x += 2) {
      const offset = (y * canvas.width + x) * 4;
      if ((imageData[offset] + imageData[offset + 1] + imageData[offset + 2]) / 3 < 170 && (dark += 1) >= 4) return true;
    }
    return false;
  };
  const tokens = allTokens.filter(hasInk);
  const hiddenTokens = allTokens.filter((token) => !tokens.includes(token));
  const qa = createCanvas(Math.round(viewport.width * 1.5), Math.round(viewport.height * 1.5));
  const qaContext = qa.getContext("2d");
  qaContext.drawImage(canvas, 0, 0, qa.width, qa.height);
  qaContext.lineWidth = 2;

  const cropTo = async (box, file) => {
    const x = Math.max(0, Math.floor(box.x0 * renderScale));
    const y = Math.max(0, Math.floor(box.y0 * renderScale));
    const w = Math.min(canvas.width - x, Math.ceil((box.x1 - box.x0) * renderScale));
    const h = Math.min(canvas.height - y, Math.ceil((box.y1 - box.y0) * renderScale));
    const out = createCanvas(w, h);
    const outContext = out.getContext("2d");
    outContext.drawImage(canvas, x, y, w, h, 0, 0, w, h);
    if (whitenGray) {
      // 연회색 워터마크(로고 · 무채색 · 밝음)를 흰색으로. 색이 있는 채움(분홍 삼각형·파란 표 머리)은 채도가 있어 남는다.
      const image = outContext.getImageData(0, 0, w, h);
      const px = image.data;
      for (let i = 0; i < px.length; i += 4) {
        const max = Math.max(px[i], px[i + 1], px[i + 2]);
        const min = Math.min(px[i], px[i + 1], px[i + 2]);
        if (max - min < 10 && min > 232) { px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; }
      }
      outContext.putImageData(image, 0, 0);
    }
    await writeFile(path.join(bankDir, "figures", file), await out.encode("png"));
    crops[file] = { width_pt: Number((box.x1 - box.x0).toFixed(1)), height_pt: Number((box.y1 - box.y0).toFixed(1)), pdf_page: pageNumber, bbox_pt: [box.x0, box.y0, box.x1, box.y1].map((v) => Number(v.toFixed(1))) };
    figureCount += 1;
  };

  const pageItems = manifest.items.filter((item) => item.pdf_page === pageNumber);
  const bodyRegions = pageItems.map((item) => toPt(item.regions.find((region) => region.kind === "body").bbox_normalized, viewport));

  // 공통 지시문 그룹의 그림: 지시문 영역에서 구성 문항 본문 영역을 뺀 나머지.
  const groupsOnPage = new Map();
  for (const item of pageItems) {
    const passage = item.regions.find((region) => region.kind === "passage");
    if (!passage || !item.group_key) continue;
    const key = `${item.group_key}-p${pageNumber}`;
    if (!groupsOnPage.has(key)) groupsOnPage.set(key, { key: item.group_key, region: toPt(passage.bbox_normalized, viewport), members: [] });
    groupsOnPage.get(key).members.push(item.number_label);
  }
  for (const group of groupsOnPage.values()) {
    const memberRegions = pageItems.filter((item) => group.members.includes(item.number_label)).map((item) => toPt(item.regions.find((region) => region.kind === "body").bbox_normalized, viewport));
    // 지시문 영역의 그림 덩어리 가운데 구성 문항 하나의 본문 영역 안에 완전히 든 것은 그 문항의 그림이다. 나머지가 그룹 그림.
    // (문항 본문 영역이 그림 자리까지 넓게 잡혀 있어도 라벨·호가 잘리지 않게 path·글자는 모두 쓴다.)
    const clusters = findFigureClusters(paths, group.region, tokens).filter((cluster) => !memberRegions.some((region) => insideRegion(cluster, region, 3)));
    const freeTokens = tokens.filter((token) => !memberRegions.some((region) => insideRegion(token, region, 1)));
    const entry = { members: group.members, pdf_page: pageNumber, hint: textHint(freeTokens, group.region, clusters), clusters: clusters.length };
    if (clusters.length) {
      const box = clusters.reduce(unionBox);
      const file = `fig-g${group.key}.png`;
      await cropTo(box, file);
      entry.figure = `crop:${file}`;
      qaContext.strokeStyle = "#16a34a";
      qaContext.strokeRect(box.x0 * 1.5, box.y0 * 1.5, (box.x1 - box.x0) * 1.5, (box.y1 - box.y0) * 1.5);
    }
    draft.groups[group.key] = entry;
  }

  for (const [index, item] of pageItems.entries()) {
    const region = bodyRegions[index];
    // 번호 배지(13pt 굵은 숫자 · 영역 위쪽)의 윗변 위에서 시작하는 path 는 구역 머리띠 장식이다.
    const badge = tokens.filter((token) => insideRegion(token, region, 2) && token.h >= 12 && token.y0 < region.y0 + 30);
    const topLimit = badge.length ? Math.min(...badge.map((token) => token.y0)) : region.y0;
    const clusters = findFigureClusters(paths, region, tokens, { topLimit });
    const entry = {
      pdf_page: pageNumber,
      printed_page: item.printed_page,
      type_label: item.type_label,
      group_key: item.group_key ?? null,
      tags: item.tags ?? [],
      clusters: clusters.length,
      hint: textHint(tokens, region, clusters),
      hidden: textHint(hiddenTokens, region, [])
    };
    const override = figureOverrides[item.number_label];
    if (override?.box) {
      const [x0, y0, x1, y1] = override.box;
      const file = `fig-${item.number_label}.png`;
      await cropTo({ x0, y0, x1, y1 }, file);
      entry.figure = `crop:${file}`;
      entry.note = "사람 지정 상자(figure-overrides.json)";
      // extra: [[x0,y0,x1,y1], …] → fig-<id>-2.png … (둘째 그림 · figure_extra 용)
      for (const [index, extraBox] of (override.extra ?? []).entries()) {
        const [ex0, ey0, ex1, ey1] = extraBox;
        const extraFile = `fig-${item.number_label}-${index + 2}.png`;
        await cropTo({ x0: ex0, y0: ey0, x1: ex1, y1: ey1 }, extraFile);
        (entry.figure_parts ??= []).push(`crop:${extraFile}`);
      }
      qaContext.strokeStyle = "#1d4ed8";
      qaContext.strokeRect(x0 * 1.5, y0 * 1.5, (x1 - x0) * 1.5, (y1 - y0) * 1.5);
    } else if (clusters.length && override?.union) {
      const [pl = 0, pt = 0, pr = 0, pb = 0] = override.pad ?? [];
      const union = clusters.reduce(unionBox);
      const box = { x0: union.x0 - pl, y0: union.y0 - pt, x1: union.x1 + pr, y1: union.y1 + pb };
      const file = `fig-${item.number_label}.png`;
      await cropTo(box, file);
      entry.figure = `crop:${file}`;
      entry.note = `그림 덩어리 ${clusters.length}개를 사람 지정으로 합침(figure-overrides.json)`;
      qaContext.strokeStyle = "#1d4ed8";
      qaContext.strokeRect(box.x0 * 1.5, box.y0 * 1.5, (box.x1 - box.x0) * 1.5, (box.y1 - box.y0) * 1.5);
    } else if (clusters.length) {
      // 덩어리가 여럿이면(보기 ①~⑤ 가 그림인 문항 · 표 + 도형) 한 상자로 합친다. 다만 합친 상자가 본문 글줄을 삼키면
      // (그림 사이에 발문이 있는 경우) 합치지 않고 큰 덩어리를 대표 그림으로, 나머지는 fig-<id>-2.png … 로 따로 둔다.
      const union = clusters.reduce(unionBox);
      const swallows = tokens.some((token) => token.h >= 9.5 && token.str.trim().length >= 4 && insideRegion(token, union, 1) && !clusters.some((cluster) => insideRegion(token, cluster, 1)));
      const area = (box) => (box.x1 - box.x0) * (box.y1 - box.y0);
      const ordered = [...clusters].sort((a, b) => area(b) - area(a));
      const main = clusters.length > 1 && swallows ? ordered[0] : union;
      const file = `fig-${item.number_label}.png`;
      await cropTo(main, file);
      entry.figure = `crop:${file}`;
      if (clusters.length > 1 && swallows) {
        entry.figure_parts = [];
        for (const [index, extra] of ordered.slice(1).entries()) {
          const extraFile = `fig-${item.number_label}-${index + 2}.png`;
          await cropTo(extra, extraFile);
          entry.figure_parts.push(`crop:${extraFile}`);
        }
        entry.note = `그림 덩어리 ${clusters.length}개 사이에 본문이 있어 따로 크롭(대표 = 가장 큰 것 · 나머지 fig-<id>-2…) — 어느 것이 문항 그림인지 확인`;
      } else if (clusters.length > 1) {
        entry.note = `그림 덩어리 ${clusters.length}개를 한 상자로 합침 — 크롭 확인`;
      }
      qaContext.strokeStyle = clusters.length > 1 ? "#ea580c" : "#c026d3";
      for (const box of clusters.length > 1 && swallows ? clusters : [union]) qaContext.strokeRect(box.x0 * 1.5, box.y0 * 1.5, (box.x1 - box.x0) * 1.5, (box.y1 - box.y0) * 1.5);
    }
    draft.items[item.number_label] = entry;
  }
  await writeFile(path.join(bankDir, "draft", "figures-qa", `p${String(pageNumber).padStart(3, "0")}.png`), await qa.encode("png"));
  console.log(`p${pageNumber}: 문항 ${pageItems.length} · 그림 ${pageItems.filter((item) => draft.items[item.number_label].figure).length} · 그룹 그림 ${[...groupsOnPage.values()].filter((group) => draft.groups[group.key]?.figure).length}`);
  page.cleanup();
}

await writeFile(path.join(bankDir, "figures", "crops.json"), JSON.stringify(crops, null, 1), "utf8");
await writeFile(path.join(bankDir, "draft", "draft.json"), JSON.stringify(draft, null, 1), "utf8");

// items.json 뼈대(없을 때만). 단원은 패키지 manifest 의 units 순서, 인쇄 쪽 범위는 문항에서 계산.
const itemsPath = path.join(bankDir, "items.json");
if (!existsSync(itemsPath)) {
  const units = manifest.units.map((unit, index) => {
    const pagesOf = manifest.items.filter((item) => item.unit_index === index).map((item) => item.printed_page);
    return { code: String(index + 1).padStart(2, "0"), title: unit.title, pages: pagesOf.length ? `${Math.min(...pagesOf)}~${Math.max(...pagesOf)}` : "", groups: [] };
  });
  await writeFile(itemsPath, JSON.stringify({ book: args.book, source_package: path.basename(packageDir), id_style: "number", variant_level: 0, units, items: {} }, null, 1), "utf8");
  console.log(`items.json 뼈대: 단원 ${units.length}`);
}
console.log(`그림 크롭 ${figureCount}개 → ${path.join(bankDir, "figures")} · 힌트 ${Object.keys(draft.items).length}문항 → draft/draft.json · 확인 이미지 draft/figures-qa/`);
