#!/usr/bin/env node
// 「빠른정답」 크롭이 깨진 문항을 전사본의 확정 답으로 다시 조판해 바꾼다.
//
// 스캔 답지에서 답 배지를 자를 때 조각을 너무 많이 이어 붙여 세로로 길쭉한 띠가 나오는 자리가 있다
// (2026-10-03 실측: 등록 교재 2.5만 답 중 13개 · 예 RPM 공통수학2 0277 은 188×609 에 배지·그림·다른 글이 섞였다).
// 해설 크롭은 멀쩡하므로 답 이미지 하나만 갈아 끼운다.
//
// 사용:
//   node scripts/latex-bank/fix-answer-crops.mjs --bank latex-bank/rpm-cm2 \
//     --package "C:/Users/PC/Desktop/문제은행-패키지/rpm-공통수학2-라텍스-패키지" --ids 0277,0457
//   --check 를 주면 바꾸지 않고 무엇을 바꿀지만 보여 준다.
//
// 바꾼 뒤에는 upload-package.mjs 로 다시 등록해야 서버에 반영된다(md5 가 달라진 파일만 올라간다).

import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { createCanvas } from "@napi-rs/canvas";
import { parseArgs, pdfjs, renderPage } from "../problem-bank/pdfTools.mjs";

const execFileAsync = promisify(execFile);
const XELATEX = [process.env.XELATEX_PATH, path.join(process.env.LOCALAPPDATA || "", "Programs/MiKTeX/miktex/bin/x64/xelatex.exe"), "xelatex"].filter(Boolean);

async function findXelatex() {
  for (const candidate of XELATEX) {
    try { await execFileAsync(candidate, ["--version"]); return candidate; } catch { /* 다음 후보 */ }
  }
  throw new Error("xelatex 를 찾지 못했습니다.");
}

/** 렌더 캔버스에서 잉크 범위만 남기고 자른다(build.mjs 와 같은 규칙). */
function trimToInk(rendered, context, pad = 10) {
  const { width, height } = rendered;
  const data = context.getImageData(0, 0, width, height).data;
  let top = height, bottom = 0, left = width, right = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4;
      if ((data[offset] + data[offset + 1] + data[offset + 2]) / 3 < 200) {
        if (y < top) top = y;
        if (y > bottom) bottom = y;
        if (x < left) left = x;
        if (x > right) right = x;
      }
    }
  }
  if (bottom < top) return rendered;
  const x0 = Math.max(0, left - pad), y0 = Math.max(0, top - pad);
  const x1 = Math.min(width, right + pad), y1 = Math.min(height, bottom + pad);
  const out = createCanvas(x1 - x0, y1 - y0);
  out.getContext("2d").drawImage(rendered, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
  return out;
}

const args = parseArgs(process.argv.slice(2));
if (!args.bank || !args.package || !args.ids) {
  console.error("사용: --bank latex-bank/<책> --package <패키지폴더> --ids 0277,0457 [--check]");
  process.exit(2);
}
const bankDir = path.resolve(String(args.bank));
const packageDir = path.resolve(String(args.package));
const ids = String(args.ids).split(",").map((s) => s.trim()).filter(Boolean);

const bank = JSON.parse(await readFile(path.join(bankDir, "items.json"), "utf8"));
const answersPath = path.join(packageDir, "manifest-answers.json");
const answers = JSON.parse(await readFile(answersPath, "utf8"));
const byLabel = new Map((answers.answers ?? []).map((entry) => [entry.number_label, entry]));

const jobs = [];
for (const id of ids) {
  const answer = String(bank.items?.[id]?.answer ?? "").trim();
  const entry = byLabel.get(id);
  if (!entry) { console.log(`  ${id}: 패키지에 답 항목이 없다 — 건너뜀`); continue; }
  if (!answer) { console.log(`  ${id}: 전사본에 확정 답이 비어 있다 — 건너뜀(사람이 답을 채워야 한다)`); continue; }
  jobs.push({ id, answer, entry });
  console.log(`  ${id}: ${entry.width}×${entry.height}(조각 ${entry.parts ?? 1}) → 전사본 답 ${answer}`);
}
if (!jobs.length || args.check) {
  console.log(args.check ? "\n--check 라 바꾸지 않았습니다." : "\n바꿀 것이 없습니다.");
  process.exit(0);
}

// 답만 한 쪽에 하나씩. build.mjs 의 낱장 조판과 같은 글꼴·매크로를 쓰려고 책 폴더 안에서 컴파일한다.
const preamble = `\\documentclass[11pt]{article}
\\usepackage{../sty/dm-editorial}
\\usepackage{fontspec}
\\newcommand{\\pt}[1]{\\mathrm{#1}}
\\newcommand{\\comp}[1]{{#1}^{\\mathrm{c}}}
\\geometry{paperwidth=70mm,paperheight=28mm,margin=4mm,headheight=0pt,headsep=0pt,footskip=0pt}
\\pagestyle{empty}`;
const pages = jobs.map((job) => `\\noindent ${job.answer}\\par\\newpage`);
const texName = "_fixanswers.tex";
await writeFile(path.join(bankDir, texName), `${preamble}\n\\begin{document}\n${pages.join("\n")}\\end{document}\n`, "utf8");

const xelatex = await findXelatex();
await execFileAsync(xelatex, ["-interaction=nonstopmode", "-halt-on-error", "-output-directory=build", texName], { cwd: bankDir, maxBuffer: 64 * 1024 * 1024, windowsHide: true, timeout: 180_000 });

const pdf = await pdfjs.getDocument({ data: new Uint8Array(await readFile(path.join(bankDir, "build", "_fixanswers.pdf"))), verbosity: 0 }).promise;
if (pdf.numPages !== jobs.length) throw new Error(`조판 쪽 수(${pdf.numPages})가 고칠 문항 수(${jobs.length})와 다르다`);

for (const [index, job] of jobs.entries()) {
  const page = await pdf.getPage(index + 1);
  const { canvas: rendered, context } = await renderPage(page, 200 / 72);
  const trimmed = trimToInk(rendered, context);
  page.cleanup();
  const bytes = await trimmed.encode("jpeg", 92);
  await writeFile(path.join(packageDir, job.entry.file), bytes);
  job.entry.width = trimmed.width;
  job.entry.height = trimmed.height;
  job.entry.parts = 1;
  job.entry.md5 = createHash("md5").update(bytes).digest("hex");
  job.entry.source = "latex-bank answer (크롭 깨짐 교체)";
  console.log(`  ${job.id}: ${trimmed.width}×${trimmed.height} 로 교체`);
}
await pdf.destroy();
await rm(path.join(bankDir, texName), { force: true });
await writeFile(answersPath, JSON.stringify(answers, null, 2), "utf8");
console.log(`\n${jobs.length}개 교체 · ${answersPath}`);
console.log("upload-package.mjs 로 다시 등록해야 서버에 반영됩니다.");
