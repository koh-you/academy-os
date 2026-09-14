#!/usr/bin/env node
// 스캔 교재(EBS 올림포스류)의 책 뒤 「정답과 풀이」 → 문항별 해설·빠른정답 이미지. 비전 AI 호출 0, 로컬 tesseract.
//
// 사용:
//   node scripts/problem-bank/ingest-scan-answers.mjs --pdf "C:/…/올림포스 공통수학1.pdf" --out output/problem-bank/olympos-cm1 [--pages 118-176]
//
// --out 은 ingest-scan-pdf.mjs 의 출력 폴더(manifest.json 이 있어야 한다). 결과는 RPM 의 ingest-answers 와 같은
// manifest-answers.json + answers/ + solutions/ 라 교재관리 「패키지 등록」이 한 폴더로 받는다.
//
// 해설 쪽에는 문항 코드가 없고 구역(유제·유형 확인·서술형…)마다 번호가 01 부터 다시 시작한다. 대신 해설의 순서가
// 본문 순서와 같으므로, 풀이 시작 배지(컬럼 왼쪽의 굵은 숫자)를 읽는 순서대로 문항 코드에 대응시키고 OCR 로 읽은
// 구역 내 번호를 문항의 type_label 순번과 대조한다(어긋나면 앞뒤 4문항 안에서 맞는 번호를 찾고, 없으면 flagged).
// 각 풀이 끝의 「답」 아이콘(작은 검정 사각형) 줄을 빠른정답으로 오린다.

import { mkdir, readdir, readFile, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  alignSegmentsToItems,
  estimateSkewDegrees,
  parseTesseractTsv,
  rotatePoint
} from "../../src/domains/problems/scanPdfSegmenter.js";
import {
  cropToCanvas,
  drawQa,
  inkBand,
  inkRightEdge,
  parseArgs,
  parsePageRange,
  pdfjs,
  renderPage,
  writeStacked
} from "./pdfTools.mjs";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import {
  columnLeftMargin,
  findColorBands,
  findDottedGutter,
  findKoreanTessdata,
  findTesseract,
  gray,
  inkRange,
  isColored,
  loadTemplate,
  ocrTokens,
  readHeaderKorean,
  rotateCanvas,
  sampleDarkPoints,
  templateMatch
} from "./scanTools.mjs";

const INGEST_VERSION = "scan-answers-1.0";

// 책마다 다른 것만 프로파일로 둔다. olympos: 책 뒤 해설(2단·점선·검정 「답」 상자). ssen: 별책 답지(양쪽 컬럼 + 가운데 BOX 띠 ·
// 회색 「답」 상자 · 문항 번호가 「쪽-번호」).
const LAYOUTS = {
  olympos: { template: "olympos-answer-icon.png", iconDark: 130, bodyTop: 0.07, columns: null, skipCodePages: true, waitForHeader: true, excludeTags: ["수행평가"], local: "type_label", badgeMinH: 9.5 },
  ssen: { template: "ssen-answer-icon.png", iconDark: 205, bodyTop: 0.11, columns: [[0.03, 0.44], [0.56, 0.97]], skipCodePages: false, waitForHeader: false, excludeTags: [], local: "number_label", badgeMinH: 7.5 }
};
/**
 * 「답」 아이콘 — 5~10pt 검정 정사각 틀 안에 흰 글자가 든 모양. 위 테두리(검정 런)와 같은 x·같은 폭의 아래 테두리가
 * 5~10pt 아래에 있고, 왼쪽·오른쪽 세로 테두리가 60% 이상 검고, 안쪽 검정 비율이 40% 이상이면 아이콘이다.
 * 글자·분수 가로줄·표 선은 네 변이 동시에 닫히지 않는다.
 */
function findAnswerIcons(imageData, width, scale, box, template = null, darkThreshold = 130) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale));
  const x1 = Math.ceil(box.x1 * scale);
  const y0 = Math.max(0, Math.floor(box.y0 * scale));
  const y1 = Math.ceil(box.y1 * scale);
  const minSize = Math.round(5 * scale);
  const maxSize = Math.round(10 * scale);
  // 초록 「참고」 라벨처럼 색 있는 상자는 아이콘이 아니다 — 검정(무채색)만 센다.
  const dark = (x, y) => y >= 0 && y < y1 && x >= 0 && x < x1 && gray(imageData, (y * width + x) * 4) < darkThreshold && !isColored(imageData, (y * width + x) * 4);
  const runsAt = (y) => {
    const runs = [];
    let run = 0;
    for (let x = x0; x <= x1; x += 1) {
      if (x < x1 && dark(x, y)) {
        run += 1;
      } else {
        if (run >= minSize && run <= maxSize) runs.push({ x0: x - run, x1: x });
        run = 0;
      }
    }
    return runs;
  };
  const icons = [];
  // 「답」 줄은 컬럼 오른쪽에 붙는다. 왼쪽 절반(채점 기준표의 ❶❷❸·본문 굵은 글자)은 보지 않는다.
  const searchX0 = x0 + Math.round((x1 - x0) * 0.4);
  for (let y = y0; y < y1; y += 1) {
    for (const top of runsAt(y)) {
      if (top.x0 < searchX0) continue;
      if (icons.some((icon) => y >= icon.py0 - 1 && y <= icon.py1 + 3 && top.x0 >= icon.px0 - 3 && top.x1 <= icon.px1 + 3)) continue;
      // 틀 아래 테두리가 2~3px 두꺼우므로 조건을 만족하는 가장 큰 h 를 고른다(작은 h 로 잡으면 아래 테두리 행이 또 아이콘이 된다).
      for (let h = maxSize; h >= minSize; h -= 1) {
        if (y + h >= y1) continue;
        const bottom = runsAt(y + h).find((run) => Math.abs(run.x0 - top.x0) <= 2 && Math.abs(run.x1 - top.x1) <= 2);
        if (!bottom) continue;
        const w = top.x1 - top.x0;
        if (Math.abs(w - h) > Math.round(3 * scale)) continue;
        let leftDark = 0;
        let rightDark = 0;
        let filled = 0;
        for (let yy = y; yy <= y + h; yy += 1) {
          if (dark(top.x0, yy) || dark(top.x0 + 1, yy)) leftDark += 1;
          if (dark(top.x1 - 1, yy) || dark(top.x1 - 2, yy)) rightDark += 1;
          for (let xx = top.x0; xx < top.x1; xx += 1) if (dark(xx, yy)) filled += 1;
        }
        // 「답」 아이콘은 검정 바탕(전체 55% 이상 검정)이고 네 변이 거의 다 검다. 「비」「율」 같은 네모난 글자는 속이 희다.
        if (leftDark < h * 0.6 || rightDark < h * 0.6 || filled < w * h * 0.4) continue;
        // 채점 기준표의 ❶❷❸(속이 찬 원)은 네 귀퉁이가 희다. 「답」 상자는 귀퉁이가 검다(둥근 모서리라 1px 안쪽에서 본다).
        // 굵은 「0」 글자도 네 변이 닫힌 틀처럼 보이지만 속이 비어 있다. 「답」 아이콘은 검정 바탕에 흰 글자라 안쪽(25% 안)도 절반 가까이 검다.
        const innerX0 = top.x0 + Math.round(w * 0.25);
        const innerX1 = top.x1 - Math.round(w * 0.25);
        const innerY0 = y + Math.round(h * 0.25);
        const innerY1 = y + h - Math.round(h * 0.25);
        let innerDark = 0;
        let innerTotal = 0;
        for (let yy = innerY0; yy <= innerY1; yy += 1) for (let xx = innerX0; xx < innerX1; xx += 1) {
          innerTotal += 1;
          if (dark(xx, yy)) innerDark += 1;
        }
        // 표 칸의 회색 채움처럼 속이 통째로 검은 것(흰 글자 없음)도 아이콘이 아니다.
        // 회색 상자(쎈 답지)는 임계를 낮춰 보므로 속이 통째로 「어둡게」 잡힌다 — 그때는 위 한계를 두지 않는다.
        if (innerTotal === 0 || innerDark < innerTotal * 0.3 || (darkThreshold <= 150 && innerDark > innerTotal * 0.95)) continue;
        const inset = Math.max(1, Math.round(scale * 0.6));
        const corners = [[top.x0 + inset, y + inset], [top.x1 - 1 - inset, y + inset], [top.x0 + inset, y + h - inset], [top.x1 - 1 - inset, y + h - inset]];
        if (corners.filter(([cx, cy]) => dark(cx, cy)).length < 3) continue;
        // 마지막으로 「답」 아이콘 견본(templates/olympos-answer-icon.png)과 정규화 상관이 0.5 이상이어야 한다 —
        // 검정 틀에 흰 글자라는 모양 규칙만으로는 「율」 같은 네모난 글자·표 칸을 다 못 거른다.
        if (template && templateMatch(imageData, width, top.x0, y, w, h + 1, template) < (Number(process.env.ICON_NCC) || 0.5)) continue;
        icons.push({ x: top.x0 / scale, y: (y + h / 2) / scale, w: w / scale, h: h / scale, px0: top.x0, px1: top.x1, py0: y, py1: y + h });
        break;
      }
    }
  }
  return icons.map(({ px0, px1, py0, py1, ...icon }) => icon);
}

/**
 * 회색 「답」 상자(쎈 답지) — 회색(90~215) 세로 테두리 두 줄이 5~10pt 떨어져 같은 높이(5~10pt)로 서 있고, 그 사이 위·아래
 * 행도 회색이며 바깥 고리는 희다. 속의 흰 「답」 글자 때문에 가로 런으로는 안 잡히므로 세로 테두리로 찾는다.
 */
function findGrayIcons(imageData, width, scale, box) {
  const x0 = Math.max(0, Math.floor(box.x0 * scale));
  const x1 = Math.ceil(box.x1 * scale);
  const y0 = Math.max(0, Math.floor(box.y0 * scale));
  const y1 = Math.ceil(box.y1 * scale);
  const minSize = Math.round(5 * scale);
  const maxSize = Math.round(10 * scale);
  const value = (x, y) => (x < 0 || y < 0 || x >= x1 || y >= y1 ? 255 : gray(imageData, (y * width + x) * 4));
  const grayish = (x, y) => { const v = value(x, y); return v >= 90 && v <= 215; };
  const searchX0 = x0 + Math.round((x1 - x0) * 0.3);
  // 세로 회색 런(2px 폭 허용)의 시작 y·길이
  const verticalRuns = [];
  for (let x = searchX0; x < x1; x += 1) {
    let run = 0;
    for (let y = y0; y <= y1; y += 1) {
      if (y < y1 && (grayish(x, y) || grayish(x + 1, y))) {
        run += 1;
        continue;
      }
      if (run >= minSize && run <= maxSize) verticalRuns.push({ x, y0: y - run, y1: y });
      run = 0;
    }
  }
  const icons = [];
  for (const left of verticalRuns) {
    if (icons.some((icon) => Math.abs(icon.px0 - left.x) < minSize && Math.abs(icon.py0 - left.y0) < minSize)) continue;
    const right = verticalRuns.find((run) => run.x - left.x >= minSize && run.x - left.x <= maxSize && Math.abs(run.y0 - left.y0) <= 2 && Math.abs(run.y1 - left.y1) <= 2);
    if (!right) continue;
    const w = right.x - left.x + 1;
    const h = left.y1 - left.y0;
    if (Math.abs(w - h) > Math.round(3 * scale)) continue;
    // 위·아래 테두리 행이 회색(70% 이상)
    let topGray = 0;
    let bottomGray = 0;
    for (let xx = left.x; xx <= right.x; xx += 1) {
      if (grayish(xx, left.y0) || grayish(xx, left.y0 + 1)) topGray += 1;
      if (grayish(xx, left.y1 - 1) || grayish(xx, left.y1 - 2)) bottomGray += 1;
    }
    if (topGray < w * 0.7 || bottomGray < w * 0.7) continue;
    // 바깥 고리(3px)는 희다
    let ringWhite = 0;
    let ringTotal = 0;
    for (let yy = left.y0 - 3; yy < left.y1 + 3; yy += 1) {
      ringTotal += 2;
      if (value(left.x - 3, yy) > 225) ringWhite += 1;
      if (value(right.x + 3, yy) > 225) ringWhite += 1;
    }
    for (let xx = left.x; xx <= right.x; xx += 1) {
      ringTotal += 2;
      if (value(xx, left.y0 - 3) > 225) ringWhite += 1;
      if (value(xx, left.y1 + 2) > 225) ringWhite += 1;
    }
    if (ringWhite < ringTotal * 0.75) continue;
    icons.push({ x: left.x / scale, y: (left.y0 + h / 2) / scale, w: w / scale, h: h / scale, px0: left.x, py0: left.y0 });
  }
  return icons.map(({ px0, py0, ...icon }) => icon);
}

/** 사람이 먼저 볼 것만 추린 검수 목록(마크다운). 패키지 폴더에 「검수-필요.md」로 남긴다. */
function buildReviewList({ itemManifest, items, solutions, answers, manifest, itemValidation }) {
  const all = itemManifest.items;
  const byNumber = new Map(all.map((item) => [item.number_label, item]));
  const unitTitle = (item) => itemManifest.units[item.unit_index]?.title ?? "";
  const solutionByNumber = new Map(solutions.map((entry) => [entry.number_label, entry]));
  const sortedSolved = [...solutionByNumber.keys()].sort();
  const assess = all.filter((item) => !items.some((entry) => entry.number === item.number_label));
  const { missing, mismatches, unmatched_segments: unmatched } = manifest.validation.solutions;
  const noAnswer = manifest.validation.answers.missing;
  const lines = [];
  lines.push(`# ${itemManifest.book.title} · 사람 확인 목록`, "");
  lines.push("## 개수", "");
  lines.push(`- 문항 ${all.length}개 (본문 ${all.length - assess.length} + 수행평가 ${assess.length})`);
  lines.push(`- 해설 대상 ${items.length}개 = 본문 문항. 수행평가 ${assess.length}문항은 책 뒤 「정답과 풀이」에 해설이 없다(빠른정답표에만 답이 있음 — 아직 안 오림).`);
  lines.push(`- 해설 찾음 ${solutions.length}개 · 답 줄 찾음 ${answers.length}개 · 번호 불일치 ${mismatches.length}건 · 버린 조각 ${unmatched.length}개`, "");
  lines.push(`## ① 해설을 못 찾은 문항 ${missing.length}개 — 우선 확인`, "");
  lines.push("해설 쪽에서 풀이 시작 번호(굵은 숫자)를 OCR 이 못 읽은 경우다. `qa/solution-pNNN.jpg` 에서 상자 없는 풀이가 이 문항이다. 해설 없이 등록되며, 오답지 인쇄의 해설 쪽에서 빠진다.", "");
  lines.push("| 문항 코드 | 단원 | 구역 | 본문 위치 | 해설 쪽(짐작) |", "|---|---|---|---|---|");
  for (const number of missing) {
    const item = byNumber.get(number);
    const previous = sortedSolved.filter((key) => key < number).pop();
    const next = sortedSolved.find((key) => key > number);
    const guess = previous && next ? `p${solutionByNumber.get(previous).pdf_page}~p${solutionByNumber.get(next).pdf_page}` : "";
    lines.push(`| ${number} | ${unitTitle(item)} | ${item.type_label} | 본문 p${item.pdf_page} | ${guess} |`);
  }
  lines.push("", `## ② 번호가 안 맞는 해설 ${mismatches.length}건 — 해설이 다른 문항 것일 수 있음`, "");
  lines.push("| 문항 코드 | 구역 | 해설 쪽 | 기대 번호 | 읽은 번호 |", "|---|---|---|---|---|");
  for (const entry of mismatches) lines.push(`| ${entry.number} | ${byNumber.get(entry.number)?.type_label ?? ""} | p${entry.pdf_page} | ${entry.expected} | ${entry.read} |`);
  lines.push("", `## ③ 해설은 있지만 「답」 줄을 못 오린 문항 ${noAnswer.length}개 — 빠른정답만 빠짐`, "");
  lines.push("해설 이미지에는 답이 들어 있다. 오답지의 「빠른정답」 격자에서만 빠진다.", "");
  lines.push("| 문항 코드 | 단원 | 구역 | 해설 쪽 |", "|---|---|---|---|");
  for (const number of noAnswer) {
    const item = byNumber.get(number);
    lines.push(`| ${number} | ${unitTitle(item)} | ${item.type_label} | p${solutionByNumber.get(number)?.pdf_page ?? ""} |`);
  }
  lines.push("", `## ④ 문항에 대응 못 한 풀이 조각 ${unmatched.length}개 — 대개 머리글 숫자·표 안 숫자(무시 가능)`, "");
  lines.push("| 해설 쪽 | 읽은 번호 |", "|---|---|");
  for (const entry of unmatched) lines.push(`| p${entry.pdf_page} | ${entry.read} |`);
  const flagged = itemValidation.flagged ?? [];
  lines.push("", `## ⑤ 문항 자르기 flagged ${flagged.length}개`, "");
  for (const entry of flagged) {
    const item = byNumber.get(entry.item_id.split("-").pop());
    if (item) lines.push(`- ${item.number_label} (${item.type_label}, 본문 p${item.pdf_page}): ${entry.flags.join(", ")} — \`qa/p${String(item.pdf_page).padStart(3, "0")}.jpg\` 빨강 상자`);
  }
  lines.push("", `## ⑥ 수행평가 ${assess.length}문항 — 해설 없음(정상)`, "");
  const groups = new Map();
  for (const item of assess) {
    const key = unitTitle(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item.number_label);
  }
  for (const [title, numbers] of groups) lines.push(`- ${title}: ${numbers[0]}~${numbers[numbers.length - 1]} (${numbers.length}문항)`);
  lines.push("", "## 확인 방법", "");
  lines.push("1. 위 ①·② 문항은 `qa/solution-pNNN.jpg` 를 열어 해당 풀이에 초록 상자가 없거나 번호가 다른지 본다.");
  lines.push("2. 교재관리 › 패키지 등록 후, 교재별 오답에서 위 번호를 눌러 해설·빠른정답이 붙는지 미리보기로 확인한다.");
  lines.push("3. 잘못 붙은 해설이 있으면 문항 코드와 해설 쪽 번호를 알려 주면 규칙을 고쳐 다시 만든다(등록을 다시 해도 학생 기록은 남는다).");
  return `${lines.join("\n")}\n`;
}

function localNumberOf(item, source = "type_label") {
  const text = source === "number_label" ? String(item.number_label ?? "").split("-").pop() : String(item.type_label ?? "");
  const match = text.match(/(\d{1,2})\s*$/);
  return match ? Number(match[1]) : null;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <교재.pdf 또는 답지.pdf> --out <문항 패키지 폴더> [--layout olympos|ssen] [--pages a-b] [--dpi 220]");
    process.exit(2);
  }
  const outDir = path.resolve(args.out);
  const itemManifest = JSON.parse(await readFile(path.join(outDir, "manifest.json"), "utf8"));
  const bookId = String(itemManifest.book.book_id);
  // 수행평가는 책 뒤 해설에 없다(빠른정답만). 본문 순서 = 해설 순서인 문항만 대응 대상이다.
  const layout = LAYOUTS[String(args.layout ?? "olympos")];
  if (!layout) throw new Error(`--layout 은 ${Object.keys(LAYOUTS).join("|")} 가운데 하나입니다.`);
  const items = itemManifest.items
    .filter((item) => !(item.tags ?? []).some((tag) => layout.excludeTags.includes(tag)))
    .sort((a, b) => a.number_sort - b.number_sort)
    .map((item) => ({ number: item.number_label, local: localNumberOf(item, layout.local), section: (item.tags ?? [])[0] ?? "", unit: item.unit_index }));
  const dpi = Number(args.dpi) || 220;
  const renderScale = dpi / 72;
  const tesseract = await findTesseract();
  const koreanTessdata = await findKoreanTessdata();
  const answerTemplate = await loadTemplate(new URL(`./templates/${layout.template}`, import.meta.url));
  if (!answerTemplate) console.log("「답」 아이콘 견본이 없어 모양 규칙만으로 답 줄을 찾습니다.");
  // 지난 실행의 파일이 남아 있으면 이번에 대응이 안 된 번호에 옛 이미지가 붙는다 — 정답·해설 출력은 매번 비우고 시작한다.
  await rm(path.join(outDir, "answers"), { recursive: true, force: true });
  await rm(path.join(outDir, "solutions"), { recursive: true, force: true });
  await Promise.all(["answers", "solutions", "qa"].map((dir) => mkdir(path.join(outDir, dir), { recursive: true })));
  for (const file of await readdir(path.join(outDir, "qa"))) if (file.startsWith("solution-")) await rm(path.join(outDir, "qa", file), { force: true });
  const tmpDir = path.join(os.tmpdir(), `problem-bank-scan-answers-${bookId}`);
  await mkdir(tmpDir, { recursive: true });

  const pdfBytes = await readFile(args.pdf);
  const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
  const lastItemPage = Math.max(...itemManifest.items.map((item) => item.pdf_page));
  const [fromPage, toPage] = args.pages ? parsePageRange(args.pages, doc.numPages) : [lastItemPage + 1, doc.numPages];
  console.log(`book_id ${bookId} · 문항 ${items.length}개(수행평가 제외) · 해설 쪽 ${fromPage}~${toPage}`);

  // 1) 쪽마다 풀이 조각을 모은다(아직 문항에 대응시키지 않는다).
  const segments = [];
  let pending = null;
  let started = !layout.waitForHeader;
  const encode = (crop) => crop.encode("jpeg", 88);

  const answerCrops = (canvas, imageData, box, qaBoxes) => {
    const crops = [];
    const icons = layout.iconDark > 150
      ? findGrayIcons(imageData, canvas.width, renderScale, box)
      : findAnswerIcons(imageData, canvas.width, renderScale, box, answerTemplate, layout.iconDark);
    for (const icon of icons) {
      // 답 줄 띠: 아이콘 중심에서 위아래 9pt 안(분수 한 층)만. 윗줄(빈 틈 1.2pt 이상)로 번지지 않는다.
      const band = inkBand(imageData, canvas.width, renderScale, { x0: icon.x - 1.5, x1: box.x1 }, icon.y, { maxUp: 9, maxDown: 9, gapPt: 1.2 });
      const figure = band && (band.clippedTop || band.clippedBottom);
      const rough = {
        x0: icon.x - 1.5,
        x1: box.x1,
        y0: figure ? Math.min(band.top, icon.y - icon.h) - 2 : band ? band.top - 1.5 : icon.y - 5,
        // 답이 그래프·행렬이면 아래로 넓히되 40pt 까지만(표를 통째로 물지 않게).
        y1: figure ? Math.min(box.y1, icon.y + 40) : band ? band.bottom + 1.5 : icon.y + 5
      };
      const right = inkRightEdge(imageData, canvas.width, renderScale, rough);
      // 아이콘 오른쪽에 답 잉크가 없으면(빈 띠) 버린다.
      if (right <= icon.x + icon.w + 2) continue;
      const answerBox = { ...rough, x1: Math.min(box.x1, right + 2) };
      crops.push(encode(cropToCanvas(canvas, renderScale, answerBox)));
      qaBoxes.push({ box: answerBox, color: "#c026d3" });
    }
    return crops;
  };

  for (let pageNumber = fromPage; pageNumber <= toPage; pageNumber += 1) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const pageWidth = viewport.width;
    const pageHeight = viewport.height;
    let { canvas, context } = await renderPage(page, renderScale);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // 「정답과 풀이」 머리글이 처음 나오는 쪽부터 해설이다(그 앞의 수행평가 뒷면·MEMO·표지는 건너뛴다).
    if (!started && koreanTessdata && !args.pages) {
      const header = await readHeaderKorean(tesseract, koreanTessdata, canvas, renderScale, pageHeight, path.join(tmpDir, `p${pageNumber}-head.png`));
      if (/정답\s*과\s*풀이/.test(header)) started = true;
      else {
        console.log(`p${pageNumber}: 해설 시작 전 — 건너뜀`);
        page.cleanup();
        continue;
      }
    }

    const pagePng = path.join(tmpDir, `p${pageNumber}.png`);
    await writeFile(pagePng, await canvas.encode("png"));
    let tokens = await ocrTokens(tesseract, pagePng, renderScale);
    const skew = estimateSkewDegrees(sampleDarkPoints(imageData, canvas.width, canvas.height, 4), Math.ceil(canvas.height / 4));
    if (Math.abs(skew) >= 0.15) {
      canvas = rotateCanvas(canvas, skew);
      context = canvas.getContext("2d");
      imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
      tokens = tokens.map((token) => {
        const center = rotatePoint(token.x + token.w / 2, token.y + token.h / 2, skew, pageWidth / 2, pageHeight / 2);
        return { ...token, x: center.x - token.w / 2, y: center.y - token.h / 2 };
      });
    }

    // 문항 코드(25445-0017)가 있는 쪽은 본문(수행평가 등)이다 — 해설이 아니므로 건너뛴다.
    if (layout.skipCodePages && tokens.some((token) => /^\d{5}-\d{4}$/.test(token.text) && token.conf >= 60)) {
      console.log(`p${pageNumber}: 본문 쪽(문항 코드 있음) — 건너뜀`);
      page.cleanup();
      continue;
    }
    // 해설 쪽은 늘 가운데 2단이다. 점선이 연해 못 찾으면 쪽 가운데를 쓴다. 빠른정답표(3단)·MEMO 는 컬럼 안 번호 줄
    // 모양(한 줄에 번호 여럿)·배지 없음으로 걸러진다.
    const dotted = layout.columns ? -1 : findDottedGutter(imageData, canvas.width, canvas.height, renderScale, pageWidth, pageHeight);
    const gutterX = dotted > 0 ? dotted : pageWidth * 0.5;
    const bodyTop = pageHeight * layout.bodyTop;
    const bodyBottom = pageHeight * 0.935;
    const columns = layout.columns
      ? layout.columns.map(([from, to], index) => ({ index, x0: pageWidth * from, x1: pageWidth * to }))
      : [
        { index: 0, x0: pageWidth * 0.05, x1: gutterX - 3 },
        { index: 1, x0: gutterX + 3, x1: pageWidth * 0.95 }
      ];
    const qaBoxes = [];
    let pageCount = 0;

    for (const column of columns) {
      const left = columnLeftMargin(imageData, canvas.width, renderScale, column, pageHeight);
      // 컬럼 왼쪽 띠(여백 ~ +48pt)를 2배로 키워 한 번 더 읽는다 — 220dpi 에서 놓친 굵은 번호(01·12)를 줍는다.
      const stripX0 = Math.max(0, column.x0);
      const stripW = 48;
      const strip = createCanvas(Math.round(stripW * renderScale * 2), Math.round((bodyBottom - bodyTop) * renderScale * 2));
      strip.getContext("2d").drawImage(canvas, Math.round(stripX0 * renderScale), Math.round(bodyTop * renderScale), Math.round(stripW * renderScale), Math.round((bodyBottom - bodyTop) * renderScale), 0, 0, strip.width, strip.height);
      const stripPng = path.join(tmpDir, `p${pageNumber}-c${column.index}.png`);
      await writeFile(stripPng, await strip.encode("png"));
      const stripTokens = (await ocrTokens(tesseract, stripPng, renderScale * 2)).map((token) => ({ ...token, x: token.x + stripX0, y: token.y + bodyTop, fromStrip: true }));
      for (const token of stripTokens) {
        if (!/^[0O]?\d{1,2}$/.test(token.text) || token.conf < 40) continue;
        const known = tokens.find((other) => /^[0O]?\d{1,2}$/.test(other.text) && Math.abs(other.x - token.x) < 4 && Math.abs(other.y - token.y) < 4);
        if (!known) tokens.push(token);
      }
      const columnBox = { x0: left - 3, x1: column.x1 };
      const { bands, boxes } = findColorBands(imageData, canvas.width, renderScale, { x0: left, x1: column.x1 }, pageHeight);
      const insideBox = (y) => boxes.some((box) => y >= box.y0 - 1 && y <= box.y1 + 1);
      const insideBand = (y) => bands.some((band) => y >= band.y0 - 1 && y <= band.y1 + 1);
      const numberTokens = tokens.filter((token) => /^[0O]?\d{1,2}$/.test(token.text) && token.conf >= 40 && token.h >= 6.5 && token.h <= 12.5 && token.x >= column.x0 && token.x < column.x1);
      // 빠른정답 표의 줄(「01 ① 02 ② …」)은 한 줄에 번호가 여럿이다. 그런 줄의 번호는 풀이 시작이 아니다.
      // 같은 줄의 다른 번호도 굵은 크기(7.5pt 이상)·신뢰도 70 이상·15~150pt 오른쪽이어야 한다(한글 풀이 글에서 튀는 숫자 오독과 구분).
      // 빠른정답 줄에는 번호가 셋 이상 늘어선다(「01 ① 02 ② 03 ⑤」). 풀이 첫 줄에 숫자 하나가 튀는 것과 구분한다.
      const sharesLine = (token) => numberTokens.filter((other) => other !== token && other.h >= 7.5 && other.conf >= 70
        && Math.abs(other.y + other.h / 2 - (token.y + token.h / 2)) < 4 && other.x - (token.x + token.w) >= 15 && other.x - (token.x + token.w) <= 300).length >= 2;
      // 풀이 시작 배지 오른쪽에는 같은 줄에 풀이 글이 이어진다(머리글의 외딴 숫자와 구분).
      const hasTextRight = (token) => Boolean(inkRange(imageData, canvas.width, renderScale, { x0: token.x + token.w + 2, x1: Math.min(column.x1, token.x + token.w + 70), y0: token.y - 2, y1: token.y + token.h + 2 }, []));
      if (process.env.DEBUG_BADGES === String(pageNumber)) {
        for (const token of tokens.filter((token) => /\d/.test(token.text) && token.x >= column.x0 && token.x <= left + 12 && token.h >= 6)) {
          console.log(`  [${column.index}] ${token.text}@(${token.x.toFixed(0)},${token.y.toFixed(0)} h${token.h.toFixed(1)}) left=${left.toFixed(0)} box=${insideBox(token.y + token.h / 2)} band=${insideBand(token.y + token.h / 2)} shares=${sharesLine(token)} textRight=${hasTextRight(token)}`);
        }
        console.log(`  bands=${JSON.stringify(bands.map((band) => [Math.round(band.y0), Math.round(band.y1)]))} boxes=${JSON.stringify(boxes.map((box) => [Math.round(box.y0), Math.round(box.y1)]))}`);
      }
      // 배지 x 는 잉크 여백 추정 대신 굵은 번호 후보 자체의 가장 왼쪽 x 로 잡는다(들여쓴 「=…」 줄이 많은 쪽에서
      // 여백 추정이 어긋나던 것). 후보가 컬럼 안쪽 6~60pt 에 있어야 한다.
      const candidates = numberTokens
        .filter((token) => token.h >= layout.badgeMinH && token.x >= column.x0 + 6 && token.x <= column.x0 + 60 && token.y > bodyTop && token.y + token.h < bodyBottom)
        .filter((token) => !insideBox(token.y + token.h / 2) && !insideBand(token.y + token.h / 2) && !sharesLine(token) && hasTextRight(token));
      const badgeLeft = candidates.length ? Math.min(...candidates.map((token) => token.x)) : left;
      const badges = candidates
        .filter((token) => token.x <= badgeLeft + 8)
        .sort((a, b) => a.y - b.y)
        .filter((token, index, list) => index === 0 || token.y - list[index - 1].y > 6);
      for (const box of boxes) qaBoxes.push({ box: { x0: columnBox.x0, x1: columnBox.x1, y0: box.y0, y1: box.y1 }, color: "#9ca3af" });
      if (numberTokens.length >= 12 && numberTokens.filter(sharesLine).length >= numberTokens.length * 0.6) {
        console.log(`p${pageNumber} 컬럼 ${column.index + 1}: 빠른정답표 — 건너뜀`);
        continue;
      }

      // 컬럼 맨 위 이어지는 풀이: 첫 배지 위(색 띠 밖)에 검정 잉크가 6pt 이상 있으면 직전 풀이에 붙인다.
      const firstBadge = badges[0];
      const continuationLimit = firstBadge ? firstBadge.y - 3 : bodyBottom;
      const aboveBands = [...bands, ...boxes];
      if (pending) {
        const above = inkRange(imageData, canvas.width, renderScale, { ...columnBox, y0: bodyTop, y1: continuationLimit }, aboveBands);
        // 색 띠(새 구역·단원 머리) 앞까지만 이어진다.
        const firstBandTop = Math.min(continuationLimit, ...aboveBands.filter((band) => band.y0 > bodyTop).map((band) => band.y0));
        if (above && above.bottom - above.top >= 6 && above.top < firstBandTop) {
          const box = { ...columnBox, y0: Math.max(bodyTop, above.top - 3), y1: Math.min(firstBandTop - 2, above.bottom + 4) };
          pending.parts.push(encode(cropToCanvas(canvas, renderScale, box)));
          pending.answerParts.push(...answerCrops(canvas, imageData, box, qaBoxes));
          pending.continued_on = pageNumber;
          qaBoxes.push({ label: "+", box, color: "#b45309" });
        }
      }

      for (let index = 0; index < badges.length; index += 1) {
        const badge = badges[index];
        const next = badges[index + 1];
        // 아래 한계: 같은 컬럼 다음 배지, 또는 다음 색 띠(새 구역 상자·단원 머리), 또는 컬럼 바닥.
        const nextBand = Math.min(bodyBottom, ...aboveBands.filter((band) => band.y0 > badge.y + badge.h).map((band) => band.y0 - 2));
        const limit = Math.min(next ? next.y - 3 : bodyBottom, nextBand);
        const ink = inkRange(imageData, canvas.width, renderScale, { ...columnBox, y0: badge.y - 2, y1: limit }, []);
        const box = { ...columnBox, y0: Math.max(bodyTop, badge.y - 3), y1: ink ? Math.min(limit, ink.bottom + 4) : limit };
        const ocrNumber = Number(badge.text.replace(/^O/, "0"));
        pending = {
          ocrNumber: Number.isFinite(ocrNumber) ? ocrNumber : null,
          pdf_page: pageNumber,
          column: column.index,
          bbox_normalized: [box.x0 / pageWidth, box.y0 / pageHeight, box.x1 / pageWidth, box.y1 / pageHeight].map((value) => Number(value.toFixed(5))),
          parts: [encode(cropToCanvas(canvas, renderScale, box))],
          answerParts: answerCrops(canvas, imageData, box, qaBoxes),
          flags: ink ? [] : ["no_ink"]
        };
        segments.push(pending);
        pageCount += 1;
        qaBoxes.push({ label: badge.text, box, color: "#176e59" });
      }
    }
    await drawQa(canvas, pageWidth, pageHeight, qaBoxes, path.join(outDir, "qa", `solution-p${String(pageNumber).padStart(3, "0")}.jpg`));
    console.log(`해설 p${pageNumber}: 풀이 ${pageCount}개${dotted > 0 ? "" : " · 점선 없음(가운데 기준)"}${skew ? ` · 기울기 ${skew}°` : ""}`);
    page.cleanup();
  }
  await rm(tmpDir, { recursive: true, force: true });

  // 2) 풀이 조각 순서 ↔ 문항 순서 정렬(편집 거리). 읽은 구역 내 번호가 문항의 순번과 같으면 0, 못 읽었으면 0.3,
  //    다르면 1, 조각·문항을 건너뛰면 1.5. 전체 최소 비용 경로가 대응이다.
  // 오독(비용 2)보다 군더더기 조각 버리기(1.5)가 싸야 머리글 숫자 같은 조각이 문항을 밀어내지 않는다.
  const alignment = alignSegmentsToItems(segments.map((segment) => segment.ocrNumber), items.map((item) => item.local), { mismatchCost: 2 });
  const solutions = [];
  const answers = [];
  const mismatches = [];
  const unmatchedSegments = [];
  for (const [segmentIndex, itemIndex] of alignment.pairs) {
    const segment = segments[segmentIndex];
    if (itemIndex === null) {
      unmatchedSegments.push({ pdf_page: segment.pdf_page, read: segment.ocrNumber });
      continue;
    }
    const item = items[itemIndex];
    const flags = [...segment.flags];
    if (segment.ocrNumber !== null && segment.ocrNumber !== item.local) {
      flags.push("number_mismatch");
      mismatches.push({ number: item.number, pdf_page: segment.pdf_page, expected: item.local, read: segment.ocrNumber });
    }
    const parts = await Promise.all(segment.parts.map(async (buffer) => loadImage(await buffer)));
    const file = `solutions/${bookId}-${item.number}.jpg`;
    const size = await writeStacked(parts, path.join(outDir, file), Math.round(4 * renderScale));
    solutions.push({ number_label: item.number, file, parts: parts.length, pdf_page: segment.pdf_page, bbox_normalized: segment.bbox_normalized, continued_on: segment.continued_on, local_number_read: segment.ocrNumber, flags, ...size });
    if (segment.answerParts.length) {
      const answerParts = await Promise.all(segment.answerParts.map(async (buffer) => loadImage(await buffer)));
      const answerFile = `answers/${bookId}-${item.number}.jpg`;
      const answerSize = await writeStacked(answerParts, path.join(outDir, answerFile), Math.round(3 * renderScale));
      answers.push({ number_label: item.number, file: answerFile, parts: answerParts.length, pdf_page: segment.pdf_page, ...answerSize });
    }
  }
  solutions.sort((a, b) => a.number_label.localeCompare(b.number_label));
  answers.sort((a, b) => a.number_label.localeCompare(b.number_label));

  const covered = new Set(solutions.map((entry) => entry.number_label));
  const missing = items.filter((item) => !covered.has(item.number)).map((item) => item.number);
  const withoutAnswer = solutions.filter((entry) => !answers.some((answer) => answer.number_label === entry.number_label)).map((entry) => entry.number_label);
  const manifest = {
    schema_version: 1,
    book_id: bookId,
    ingest_version: INGEST_VERSION,
    source_file_name: path.basename(String(args.pdf)),
    solutions,
    answers,
    validation: {
      solutions: {
        count: solutions.length,
        expected: items.length,
        segments: segments.length,
        alignment_cost: alignment.cost,
        missing,
        flagged: solutions.filter((entry) => entry.flags.length).map((entry) => entry.number_label),
        continued: solutions.filter((entry) => entry.parts > 1).map((entry) => entry.number_label),
        mismatches,
        unmatched_segments: unmatchedSegments
      },
      answers: { count: answers.length, missing: withoutAnswer }
    }
  };
  await writeFile(path.join(outDir, "manifest-answers.json"), JSON.stringify(manifest, null, 2), "utf8");
  await writeFile(path.join(outDir, "검수-필요.md"), buildReviewList({ itemManifest, items, solutions, answers, manifest, itemValidation: await readFile(path.join(outDir, "validation.json"), "utf8").then(JSON.parse).catch(() => ({})) }), "utf8");
  console.log(`\n해설 ${solutions.length}/${items.length}개 · 답 줄 ${answers.length}개 · 이어 붙인 풀이 ${manifest.validation.solutions.continued.length}개 · 번호 불일치 ${mismatches.length}건 · 대응 안 된 조각 ${unmatchedSegments.length}개 · 빠진 문항 ${missing.length}개`);
  if (missing.length) console.log(`빠진 문항: ${missing.slice(0, 30).join(" ")}${missing.length > 30 ? " …" : ""}`);
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
