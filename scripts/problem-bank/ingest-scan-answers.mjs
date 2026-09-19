#!/usr/bin/env node
// 스캔 교재(EBS 올림포스류)의 책 뒤 「정답과 풀이」 → 문항별 해설·빠른정답 이미지. 비전 AI 호출 0, 로컬 tesseract.
//
// 사용:
//   node scripts/problem-bank/ingest-scan-answers.mjs --pdf "C:/…/올림포스 공통수학1.pdf" --out output/problem-bank/olympos-cm1 [--pages 118-176]
//     [--overrides latex-bank/<책>/answer-overrides.json]
//
// --overrides 는 OCR 이 놓친 풀이를 사람이 쪽·정규화 좌표로 지정한 파일이다(형식은 아래 applyOverrides 참고). 정렬 결과 위에
// 덧씌우므로 「해설을 못 찾은 문항」·「앞 문항에 잘못 이어 붙은 풀이」를 규칙을 안 바꾸고 고친다. 상자 위·아래는 잉크에 맞춰 조인다.
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
  coloredRuns,
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
  ssen: { template: "ssen-answer-icon.png", iconDark: 205, bodyTop: 0.11, columns: [[0.03, 0.44], [0.56, 0.97]], skipCodePages: false, waitForHeader: false, excludeTags: [], local: "number_label", badgeMinH: 7.5 },
  // lssen: 라이트쎈·쎈(중등) 별책 답지 — 두 컬럼(가운데 BOX 띠 없음) · 초록 4자리 책 전체 번호 배지 · 회색 「답」 상자.
  lssen: { template: "ssen-answer-icon.png", iconDark: 205, bodyTop: 0.08, columns: [[0.03, 0.49], [0.51, 0.97]], skipCodePages: false, waitForHeader: false, excludeTags: [], local: "book_number", badgeMinH: 7.5, badgeDigits: 4 }
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
  const overridden = manifest.validation.solutions.overrides ?? [];
  const verified = manifest.validation.solutions.verified_mismatches ?? [];
  lines.push(`- 해설 찾음 ${solutions.length}개 · 답 줄 찾음 ${answers.length}개 · 번호 불일치 ${mismatches.length}건 · 버린 조각 ${unmatched.length}개`);
  if (overridden.length) lines.push(`- 사람이 좌표로 지정한 풀이 ${overridden.length}개(\`qa/override-pNNN.jpg\` 파랑 상자): ${overridden.map((entry) => entry.number).sort().join(" ")}`);
  if (verified.length) lines.push(`- 번호 오독이지만 내용이 맞다고 확인한 해설 ${verified.length}개: ${verified.join(" ")}`);
  lines.push("");
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

/**
 * 사람이 지정한 풀이 상자(answer-overrides.json)를 정렬 결과 위에 덧씌운다.
 *
 *   { "solutions": { "13-01": [{ "page": 4, "box": [x0, y0, x1, y1], "answer_line": true }, …여러 조각이면 순서대로], … },
 *     "verified_mismatches": ["12-14", …]   // 번호 오독이지만 내용은 맞다고 사람이 확인한 것 }
 *
 * box 는 쪽 크기 기준 정규화 좌표. 위·아래는 상자 안 잉크에 맞춰 조이고(위 −3pt · 아래 +4pt) 좌우는 그대로 둔다.
 * answer_line: 「01 답 3」처럼 풀이 없이 답만 한 줄인 조각. 「답」 아이콘을 못 찾으면 그 조각 전체를 빠른정답으로도 쓴다.
 * 지정된 문항은 기존 해설·답 줄을 버리고 새 조각으로 바꾼다(앞 문항에 잘못 이어 붙은 풀이도 이 방법으로 자른다).
 */
async function applyOverrides({ overrides, doc, renderScale, outDir, bookId, items, solutions, answers, answerCrops, encode, log }) {
  const spec = overrides.solutions ?? {};
  const numbers = Object.keys(spec);
  if (!numbers.length) return { applied: [], unknown: [] };
  const known = new Set(items.map((item) => item.number));
  const unknown = numbers.filter((number) => !known.has(number));
  // 쪽마다 한 번만 렌더한다(220dpi 캔버스가 커서 전부 들고 있지 않는다).
  const byPage = new Map();
  for (const number of numbers) {
    if (!known.has(number)) continue;
    const parts = Array.isArray(spec[number]) ? spec[number] : [spec[number]];
    parts.forEach((part, index) => {
      if (!byPage.has(part.page)) byPage.set(part.page, []);
      byPage.get(part.page).push({ number, index, part });
    });
  }
  const collected = new Map();
  for (const pageNumber of [...byPage.keys()].sort((a, b) => a - b)) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const { canvas, context } = await renderPage(page, renderScale);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const qaBoxes = [];
    for (const { number, index, part } of byPage.get(pageNumber)) {
      const [nx0, ny0, nx1, ny1] = part.box;
      const rough = { x0: nx0 * viewport.width, y0: ny0 * viewport.height, x1: nx1 * viewport.width, y1: ny1 * viewport.height };
      const ink = inkRange(imageData, canvas.width, renderScale, rough, []);
      const box = ink
        ? { ...rough, y0: Math.max(rough.y0, ink.top - 3), y1: Math.min(rough.y1, ink.bottom + 4) }
        : rough;
      if (!collected.has(number)) collected.set(number, { parts: [], answerParts: [], pages: [], boxes: [], flags: [] });
      const entry = collected.get(number);
      entry.parts.push({ index, buffer: encode(cropToCanvas(canvas, renderScale, box)) });
      const answerBuffers = answerCrops(canvas, imageData, box, qaBoxes);
      if (!answerBuffers.length && part.answer_line) answerBuffers.push(encode(cropToCanvas(canvas, renderScale, box)));
      entry.answerParts.push({ index, buffers: answerBuffers });
      entry.pages.push(pageNumber);
      entry.boxes.push([box.x0 / viewport.width, box.y0 / viewport.height, box.x1 / viewport.width, box.y1 / viewport.height].map((value) => Number(value.toFixed(5))));
      if (!ink) entry.flags.push("no_ink");
      qaBoxes.push({ label: number, box, color: "#1d4ed8" });
    }
    await drawQa(canvas, viewport.width, viewport.height, qaBoxes, path.join(outDir, "qa", `override-p${String(pageNumber).padStart(3, "0")}.jpg`));
    log(`override p${pageNumber}: ${byPage.get(pageNumber).length}조각`);
    page.cleanup();
  }
  const applied = [];
  for (const [number, entry] of collected) {
    entry.parts.sort((a, b) => a.index - b.index);
    entry.answerParts.sort((a, b) => a.index - b.index);
    const oldSolution = solutions.findIndex((solution) => solution.number_label === number);
    if (oldSolution >= 0) solutions.splice(oldSolution, 1);
    const oldAnswer = answers.findIndex((answer) => answer.number_label === number);
    // 정렬 단계가 남긴 답 줄 파일은 지운다 — 새 조각에서 「답」 아이콘을 못 찾으면 옛 파일이 고아로 남는다.
    if (oldAnswer >= 0) await rm(path.join(outDir, answers.splice(oldAnswer, 1)[0].file), { force: true });
    const parts = await Promise.all(entry.parts.map(async ({ buffer }) => loadImage(await buffer)));
    const file = `solutions/${bookId}-${number}.jpg`;
    const size = await writeStacked(parts, path.join(outDir, file), Math.round(4 * renderScale));
    const pages = [...new Set(entry.pages)];
    solutions.push({
      number_label: number,
      file,
      parts: parts.length,
      pdf_page: pages[0],
      bbox_normalized: entry.boxes[0],
      continued_on: pages.length > 1 ? pages[pages.length - 1] : undefined,
      local_number_read: null,
      flags: ["manual_override", ...new Set(entry.flags)],
      ...size
    });
    const answerBuffers = entry.answerParts.flatMap((part) => part.buffers);
    if (answerBuffers.length) {
      const answerParts = await Promise.all(answerBuffers.map(async (buffer) => loadImage(await buffer)));
      const answerFile = `answers/${bookId}-${number}.jpg`;
      const answerSize = await writeStacked(answerParts, path.join(outDir, answerFile), Math.round(3 * renderScale));
      answers.push({ number_label: number, file: answerFile, parts: answerParts.length, pdf_page: pages[0], ...answerSize });
    }
    applied.push({ number, parts: parts.length, pages, answer: answerBuffers.length > 0 });
  }
  return { applied, unknown };
}

function localNumberOf(item, source = "type_label") {
  // book_number: 「0259」 처럼 책 전체 번호 그대로(라이트쎈·쎈).
  if (source === "book_number") {
    const match = String(item.number_label ?? "").match(/(\d{1,4})\s*$/);
    return match ? Number(match[1]) : null;
  }
  const text = source === "number_label" ? String(item.number_label ?? "").split("-").pop() : String(item.type_label ?? "");
  const match = text.match(/(\d{1,2})\s*$/);
  return match ? Number(match[1]) : null;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.pdf || !args.out) {
    console.error("사용: --pdf <교재.pdf 또는 답지.pdf> --out <문항 패키지 폴더> [--layout olympos|ssen] [--pages a-b] [--dpi 220] [--overrides <json>]");
    process.exit(2);
  }
  const outDir = path.resolve(args.out);
  const itemManifest = JSON.parse(await readFile(path.join(outDir, "manifest.json"), "utf8"));
  const bookId = String(itemManifest.book.book_id);
  // 수행평가는 책 뒤 해설에 없다(빠른정답만). 본문 순서 = 해설 순서인 문항만 대응 대상이다.
  const layout = LAYOUTS[String(args.layout ?? "olympos")];
  // 배지 숫자 자릿수(기본 1~2 · 라이트쎈 4). 이 정규식으로 풀이 시작 번호 후보를 고른다.
  const badgeDigits = layout.badgeDigits ?? 2;
  const badgeRe = badgeDigits === 4 ? /^\d{4}$/ : /^[0O]?\d{1,2}$/;
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
  for (const file of await readdir(path.join(outDir, "qa"))) if (file.startsWith("solution-") || file.startsWith("override-")) await rm(path.join(outDir, "qa", file), { force: true });
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
        if (!badgeRe.test(token.text) || token.conf < 40) continue;
        const known = tokens.find((other) => badgeRe.test(other.text) && Math.abs(other.x - token.x) < 4 && Math.abs(other.y - token.y) < 4);
        if (!known) tokens.push(token);
      }
      // 상자 왼쪽은 배지 x 로 정한다(아래에서 후보를 찾은 뒤 갱신). 잉크 여백 추정이 어긋나는 컬럼(답지 BOX 띠 옆)에 대비.
      const columnBox = { x0: left - 3, x1: column.x1 };
      const { bands, boxes } = findColorBands(imageData, canvas.width, renderScale, { x0: left, x1: column.x1 }, pageHeight);
      const insideBox = (y) => boxes.some((box) => y >= box.y0 - 1 && y <= box.y1 + 1);
      const insideBand = (y) => bands.some((band) => y >= band.y0 - 1 && y <= band.y1 + 1);
      const numberTokens = tokens.filter((token) => badgeRe.test(token.text) && token.conf >= 40 && token.h >= 6.5 && token.h <= 12.5 && token.x >= column.x0 && token.x < column.x1);
      // 빠른정답 표의 줄(「01 ① 02 ② …」)은 한 줄에 번호가 여럿이다. 그런 줄의 번호는 풀이 시작이 아니다.
      // 같은 줄의 다른 번호도 굵은 크기(7.5pt 이상)·신뢰도 70 이상·15~150pt 오른쪽이어야 한다(한글 풀이 글에서 튀는 숫자 오독과 구분).
      // 빠른정답 줄에는 번호가 넷 이상 늘어선다(「01 ① 02 ② 03 ⑤ 04 ③」). 풀이 첫 줄에 숫자 하나가 튀는 것과 구분한다.
      // 같은 자리를 두 번 읽은 토큰(전체 OCR + 왼쪽 띠 OCR)은 하나로 세고, 「답」 아이콘 오독(한 자리 「8」)은 세지 않는다 —
      // 반 컬럼 격자 줄(「14 y²+8y+16 | 15 답 x²-4x-4」)이 빠른정답 줄로 오인돼 왼쪽 배지가 빠지던 것.
      const sharesLine = (token) => {
        const seen = [];
        for (const other of numberTokens) {
          if (other === token || other.h < 7.5 || other.conf < 70 || other.text.replace(/^O/, "0").length < 2) continue;
          const gap = other.x - (token.x + token.w);
          if (Math.abs(other.y + other.h / 2 - (token.y + token.h / 2)) >= 4 || gap < 15 || gap > 300) continue;
          if (!seen.some((x) => Math.abs(x - other.x) < 4)) seen.push(other.x);
        }
        // 빠른정답 줄은 번호가 넷 이상 늘어선다. 반 컬럼 격자(「01 ○ 02 ○ 03 ×」)는 셋이라 배지로 남긴다.
        return seen.length >= 3;
      };
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
        // 배지 x: 컬럼 안쪽 6~60pt(쎈 별책 답지는 컬럼 경계에 바싹 붙어 1pt 부터). 첫 줄 배지는 bodyTop 바로 위에 걸릴 수 있어 4pt 여유.
        .filter((token) => token.h >= layout.badgeMinH && token.x >= column.x0 + (layout.badgeDigits === 4 ? 1 : 6) && token.x <= column.x0 + 60 && token.y > bodyTop - 4 && token.y + token.h < bodyBottom)
        .filter((token) => !insideBox(token.y + token.h / 2) && !insideBand(token.y + token.h / 2) && !sharesLine(token) && hasTextRight(token));
      const badgeLeft = candidates.length ? Math.min(...candidates.map((token) => token.x)) : left;
      if (process.env.DEBUG_BADGES === String(pageNumber)) console.log(`  [${column.index}] numberTokens=${numberTokens.map((t) => `${t.text}@${t.x.toFixed(0)},${t.y.toFixed(0)}h${t.h.toFixed(1)}c${Math.round(t.conf)}`).join(" ")} candidates=${candidates.map((t) => t.text).join(",")} bodyTop=${bodyTop.toFixed(0)} colx0=${column.x0.toFixed(0)}`);
      if (candidates.length) columnBox.x0 = badgeLeft - 3;
      const ocrBadges = candidates
        .filter((token) => token.x <= badgeLeft + 8)
        .sort((a, b) => a.y - b.y)
        .filter((token, index, list) => index === 0 || token.y - list[index - 1].y > 6);
      // OCR 이 놓친 배지 보완(쎈 답지): 배지 번호는 색 글자(주황·초록·빨강)라 배지 x 띠 안의 색 잉크 덩어리(높이 5~13pt)가
      // 곧 배지 자리다. 읽은 배지와 겹치지 않는 덩어리는 번호 미상(null → 정렬 비용 0.3)으로 넣는다. 색 띠·상자 안은 뺀다.
      const coloredBadges = candidates.length && layout.template === "ssen-answer-icon.png"
        ? coloredRuns(imageData, canvas.width, renderScale, { x0: badgeLeft - 2, x1: badgeLeft + 14, y0: bodyTop, y1: bodyBottom })
          .filter((run) => run.h >= 5 && run.h <= 13 && run.density >= 0.18 && run.density < 0.55 && !insideBox(run.y0 + run.h / 2) && !insideBand(run.y0 + run.h / 2))
          .filter((run) => !ocrBadges.some((token) => Math.abs(token.y - run.y0) < 8))
          .filter((run) => hasTextRight({ x: badgeLeft, w: 10, y: run.y0, h: run.h }))
          .map((run) => ({ text: "?", x: badgeLeft, y: run.y0, w: 10, h: run.h, conf: 0, colored: true, density: run.density }))
        : [];
      if (process.env.DEBUG_COLOR === String(pageNumber) && candidates.length) {
        for (const run of coloredRuns(imageData, canvas.width, renderScale, { x0: badgeLeft - 2, x1: badgeLeft + 14, y0: bodyTop, y1: bodyBottom })) {
          console.log(`  color [${column.index}] y=${run.y0.toFixed(0)} h=${run.h.toFixed(1)} d=${run.density.toFixed(2)} ocr=${ocrBadges.some((token) => Math.abs(token.y - run.y0) < 8)} box=${insideBox(run.y0 + run.h / 2)} band=${insideBand(run.y0 + run.h / 2)}`);
        }
      }
      if (coloredBadges.length) console.log(`p${pageNumber} 컬럼 ${column.index + 1}: 색 배지 보완 ${coloredBadges.length}개 (y ${coloredBadges.map((token) => `${token.y.toFixed(0)}/${token.density.toFixed(2)}`).join(" ")})`);
      const badges = [...ocrBadges, ...coloredBadges].sort((a, b) => a.y - b.y);
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

      // 개념 쪽의 짧은 답은 한 컬럼 안에서 두세 줄(「14 | 15」 「01 ○ 02 ○ 03 ×」)로 나뉘어 실리기도 한다(베이직쎈 공통수학1).
      // 왼쪽 배지와 같은 줄의 오른쪽에 굵은 번호가 있고 그 x 자리가 둘 이상의 줄에서 겹치면 그 줄들은 반 컬럼 격자다:
      // 각 배지는 자기 x 부터 다음 격자 열 앞까지 오리고, 순서는 줄(위→아래) 안에서 왼쪽→오른쪽이다(순번 정렬이 어긋나
      // 오른쪽 열 번호가 통째로 빠지던 것).
      const gridTokens = numberTokens
        // 격자 번호는 배지처럼 두 자리(「02」「15」)다 — 풀이 글 속의 한 자리 숫자(「2」)는 세지 않는다.
        .filter((token) => token.text.replace(/^O/, "0").length >= 2 && token.h >= layout.badgeMinH && token.x >= badgeLeft + 25 && token.x <= column.x1 - 20 && token.y > bodyTop && token.y + token.h < bodyBottom)
        .filter((token) => !insideBox(token.y + token.h / 2) && !insideBand(token.y + token.h / 2) && hasTextRight(token))
        .filter((token) => badges.some((badge) => Math.abs(badge.y - token.y) < 5))
        .sort((a, b) => a.x - b.x || a.y - b.y)
        .filter((token, index, list) => !list.slice(0, index).some((other) => Math.abs(other.x - token.x) < 4 && Math.abs(other.y - token.y) < 4));
      const gridClusters = [];
      for (const token of gridTokens) {
        const cluster = gridClusters.find((entry) => Math.abs(entry.x - token.x) < 10);
        if (cluster) cluster.tokens.push(token);
        else gridClusters.push({ x: token.x, tokens: [token] });
      }
      // 격자로 보는 조건: 오른쪽 번호가 둘 이상(같은 열에 두 줄이거나 한 줄에 두 열).
      const gridColumns = gridTokens.length >= 2 ? gridClusters : [];
      const gridRows = gridColumns.flatMap((cluster) => cluster.tokens.map((token) => token.y));
      const inGridRow = (token) => gridRows.some((y) => Math.abs(y - token.y) < 5);
      const nextColumnX = (x) => Math.min(columnBox.x1, ...gridColumns.filter((cluster) => cluster.x > x + 10).map((cluster) => cluster.x - 4));
      const placed = [
        ...badges.map((token) => ({ token, x0: columnBox.x0, x1: inGridRow(token) ? nextColumnX(token.x) : columnBox.x1 })),
        ...gridColumns.flatMap((cluster) => cluster.tokens.map((token) => ({ token, x0: cluster.x - 4, x1: nextColumnX(cluster.x) })))
      ].sort((a, b) => (Math.abs(a.token.y - b.token.y) < 5 ? a.token.x - b.token.x : a.token.y - b.token.y));
      if (gridColumns.length) console.log(`p${pageNumber} 컬럼 ${column.index + 1}: 반 컬럼 격자 열 ${gridColumns.length} · 번호 ${gridColumns.reduce((sum, cluster) => sum + cluster.tokens.length, 0)}`);
      if (process.env.DEBUG_GRID === String(pageNumber)) {
        for (const token of numberTokens.filter((token) => token.x >= badgeLeft + 25)) {
          console.log(`  grid? [${column.index}] ${token.text}@(${token.x.toFixed(0)},${token.y.toFixed(0)} h${token.h.toFixed(1)} c${token.conf}) box=${insideBox(token.y + token.h / 2)} band=${insideBand(token.y + token.h / 2)} textRight=${hasTextRight(token)} row=${badges.some((badge) => Math.abs(badge.y - token.y) < 5)}`);
        }
        console.log(`  badges=${badges.map((badge) => `${badge.text}@${badge.y.toFixed(0)}`).join(" ")}`);
      }
      for (let index = 0; index < placed.length; index += 1) {
        const { token: badge, x0: badgeX0, x1: badgeX1 } = placed[index];
        // 아래 한계: 같은 (반)컬럼의 다음 배지, 또는 다음 색 띠(새 구역 상자·단원 머리), 또는 컬럼 바닥.
        const next = placed.slice(index + 1).find((entry) => entry.token.y > badge.y + 5 && entry.x0 < badgeX1 && entry.x1 > badgeX0)?.token;
        const nextBand = Math.min(bodyBottom, ...aboveBands.filter((band) => band.y0 > badge.y + badge.h).map((band) => band.y0 - 2));
        const limit = Math.min(next ? next.y - 3 : bodyBottom, nextBand);
        const ink = inkRange(imageData, canvas.width, renderScale, { x0: badgeX0, x1: badgeX1, y0: badge.y - 2, y1: limit }, []);
        const box = { x0: badgeX0, x1: badgeX1, y0: Math.max(bodyTop, badge.y - 3), y1: ink ? Math.min(limit, ink.bottom + 4) : limit };
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
  // 3) 사람이 지정한 상자(--overrides)로 놓친 풀이를 채우고 잘못 이어 붙은 풀이를 자른다.
  const overrides = args.overrides ? JSON.parse(await readFile(path.resolve(String(args.overrides)), "utf8")) : null;
  const overrideResult = overrides
    ? await applyOverrides({ overrides, doc, renderScale, outDir, bookId, items, solutions, answers, answerCrops, encode, log: (line) => console.log(line) })
    : { applied: [], unknown: [] };
  if (overrideResult.unknown.length) console.warn(`overrides 에 없는 문항 번호(무시): ${overrideResult.unknown.join(" ")}`);
  const verifiedMismatches = new Set(overrides?.verified_mismatches ?? []);
  for (const solution of solutions) {
    if (verifiedMismatches.has(solution.number_label)) solution.flags = solution.flags.filter((flag) => flag !== "number_mismatch");
  }
  const overridden = new Set(overrideResult.applied.map((entry) => entry.number));
  const remainingMismatches = mismatches.filter((entry) => !overridden.has(entry.number) && !verifiedMismatches.has(entry.number));
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
        mismatches: remainingMismatches,
        verified_mismatches: [...verifiedMismatches].filter((number) => mismatches.some((entry) => entry.number === number)),
        overrides: overrideResult.applied,
        unmatched_segments: unmatchedSegments
      },
      answers: { count: answers.length, missing: withoutAnswer }
    }
  };
  await writeFile(path.join(outDir, "manifest-answers.json"), JSON.stringify(manifest, null, 2), "utf8");
  await writeFile(path.join(outDir, "검수-필요.md"), buildReviewList({ itemManifest, items, solutions, answers, manifest, itemValidation: await readFile(path.join(outDir, "validation.json"), "utf8").then(JSON.parse).catch(() => ({})) }), "utf8");
  console.log(`\n해설 ${solutions.length}/${items.length}개 · 답 줄 ${answers.length}개 · 이어 붙인 풀이 ${manifest.validation.solutions.continued.length}개 · 번호 불일치 ${remainingMismatches.length}건 · 사람 지정 ${overrideResult.applied.length}개 · 대응 안 된 조각 ${unmatchedSegments.length}개 · 빠진 문항 ${missing.length}개`);
  if (missing.length) console.log(`빠진 문항: ${missing.slice(0, 30).join(" ")}${missing.length > 30 ? " …" : ""}`);
  console.log(`출력: ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
