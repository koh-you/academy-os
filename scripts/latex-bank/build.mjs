#!/usr/bin/env node
// LaTeX 오답은행 빌드 — items.json(사람이 확정한 전사) → items/*.tex · book.tex · answers.tex → xelatex → build/*.pdf
//
// 사용:
//   node scripts/latex-bank/build.mjs --bank latex-bank/ssen-basic-cm2 [--review]
//
// - 조판은 프로토타입 DeeP Math 통합 기준(latex-bank/sty/dm-editorial.sty)을 그대로 쓴다. 새 sty 를 만들지 않는다.
// - items/*.tex 는 items.json 에서 다시 만든다(원천 = items.json). 손으로 고칠 때는 items.json 을 고친다.
// - --review: 문항마다 「원본 크롭 ↔ 조판본」을 나란히 놓은 review/*.png 를 만든다(사람 확정용). 크롭은 문항 패키지
//   (output/problem-bank/<책>) 의 items/ 에서 읽는다.

import { execFile } from "node:child_process";
import { mkdir, readFile, writeFile, rm, readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import { parseArgs, pdfjs, renderPage } from "../problem-bank/pdfTools.mjs";

const execFileAsync = promisify(execFile);
const XELATEX_CANDIDATES = [process.env.XELATEX_PATH, path.join(process.env.LOCALAPPDATA || "", "Programs/MiKTeX/miktex/bin/x64/xelatex.exe"), "xelatex"].filter(Boolean);

async function findXelatex() {
  for (const candidate of XELATEX_CANDIDATES) {
    try {
      await execFileAsync(candidate, ["--version"]);
      return candidate;
    } catch {
      // 다음 후보
    }
  }
  throw new Error("xelatex 를 찾지 못했습니다. winget install MiKTeX.MiKTeX 또는 XELATEX_PATH 를 지정하세요.");
}

const CIRCLED = ["①", "②", "③", "④", "⑤"];

/** 문항 하나의 본문 LaTeX(번호·출처 배지 포함 · dmpnum 두 번째 인자). */
function renderItemBody(id, item, group, bank) {
  const [page, number] = id.split("-");
  const badge = `\\dmkichul{${bank.book} ${page}쪽 ${number}번${item.tag ? ` · ${item.tag}` : ""}}`;
  const parts = [badge, item.body];
  if (item.subs) parts.push(item.subs.map((sub, index) => `\\dmsubprob{${index + 1}} ${sub}`).join("\n"));
  if (item.figure) parts.push(`\\par\\begin{center}\\input{figures/${item.figure.replace(/^tikz:/, "")}}\\end{center}`);
  if (item.choices) {
    const env = item.choices_layout === "v" ? "choicesv" : item.choices_layout === "ii" ? "choicesii" : "choices32";
    parts.push(`\\begin{${env}}${item.choices.map((choice) => `{${choice}}`).join("")}\\end{${env}}`);
  }
  if (item.hint) parts.push(`\\dmhint{${item.hint}}`);
  return parts.join("\n");
}

async function compile(xelatex, dir, file) {
  const run = () => execFileAsync(xelatex, ["-interaction=nonstopmode", "-halt-on-error", "-output-directory=build", file], { cwd: dir, maxBuffer: 64 * 1024 * 1024, windowsHide: true });
  try {
    await run();
    await run();
  } catch (error) {
    const log = await readFile(path.join(dir, "build", file.replace(/\.tex$/, ".log")), "utf8").catch(() => "");
    const firstError = log.split("\n").find((line) => line.startsWith("!"));
    throw new Error(`xelatex 실패 (${file}): ${firstError ?? error.message}`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.bank) {
    console.error("사용: --bank latex-bank/<책> [--review] [--package output/problem-bank/<책>]");
    process.exit(2);
  }
  const dir = path.resolve(args.bank);
  const bank = JSON.parse(await readFile(path.join(dir, "items.json"), "utf8"));
  const xelatex = await findXelatex();
  await mkdir(path.join(dir, "items"), { recursive: true });
  await mkdir(path.join(dir, "build"), { recursive: true });

  // 1) items/*.tex (원천 items.json 에서)
  const orderedIds = bank.groups.flatMap((group) => group.items);
  for (const group of bank.groups) {
    for (const id of group.items) {
      const item = bank.items[id];
      if (!item) throw new Error(`items.json 에 ${id} 가 없습니다.`);
      const header = [
        `% id: ${id}`,
        `% book: ${bank.book} · ${bank.unit}`,
        `% section: ${group.section}`,
        group.passage ? `% passage: ${group.passage}` : null,
        `% figure: ${item.figure ?? group.figure ?? "none"}`,
        `% answer: ${item.answer}`,
        `% answer_source: ${item.answer_source}`,
        `% variant_level: ${bank.variant_level} (원본 전사)`,
        "% 이 파일은 build.mjs 가 items.json 에서 만든다. 고칠 때는 items.json 을 고친다."
      ].filter(Boolean);
      await writeFile(path.join(dir, "items", `${id}.tex`), `${header.join("\n")}\n${renderItemBody(id, item, group, bank)}\n`, "utf8");
    }
  }

  // 2) book.tex — 구역별 배너 + 공통 지시문 + 문항
  const preamble = `\\documentclass[10pt,a4paper]{article}
\\usepackage{../sty/dm-editorial}
\\usepackage{fontspec}
% 문항 전사용 보조 매크로(dm-editorial 매크로를 덮어쓰지 않는다)
\\newcommand{\\pt}[1]{\\mathrm{#1}}
\\newcommand{\\seg}[1]{\\overline{\\mathrm{#1}}}
\\newcommand{\\blank}{\\framebox[1.5em]{\\rule{0pt}{1.4ex}}}
\\newcommand{\\dmhint}[1]{\\par\\smallskip\\begin{tcolorbox}[enhanced,colback=dm-navylight!60,colframe=dm-navy!40,boxrule=0.3pt,sharp corners,left=3mm,right=3mm,top=2mm,bottom=2mm,boxsep=0mm]\\small\\setlength{\\parskip}{1mm}#1\\end{tcolorbox}}
\\newcommand{\\dmsection}[1]{\\par\\vspace{3mm}\\noindent{\\color{dm-navy}\\hrule height 0.6pt}\\vspace{1.2mm}\\noindent{\\dmheadingfont\\bfseries\\fontsize{11}{13}\\selectfont\\color{dm-navy}#1}\\par\\vspace{2mm}}
\\newcommand{\\dmpassage}[1]{\\par\\medskip\\noindent{\\dmheadingfont\\bfseries\\color{dm-navy}#1}\\par\\smallskip}
\\renewcommand{\\dmchapunit}{${bank.unit}}
`;
  const lines = [preamble, "\\begin{document}", `\\dmchapter{${bank.unit.split(" ")[0]}}{${bank.unit.split(" ").slice(1).join(" ")}}`, "\\setcounter{dmproblemcount}{0}"];
  let lastSection = "";
  for (const group of bank.groups) {
    if (group.section !== lastSection) {
      lines.push(`\\dmsection{${group.section}}`);
      lastSection = group.section;
    }
    if (group.passage) lines.push(`\\dmpassage{${group.passage}}`);
    if (group.figure) lines.push(`\\begin{center}\\input{figures/${group.figure.replace(/^tikz:/, "")}}\\end{center}`);
    for (const id of group.items) lines.push(`\\dmpnum{${id}}{\\input{items/${id}}}`);
  }
  // 답
  lines.push("\\clearpage", "\\dmsection{정답}", "\\begin{multicols}{2}\\small");
  for (const id of orderedIds) lines.push(`\\noindent\\textbf{${id}}\\ ${bank.items[id].answer}\\par`);
  lines.push("\\end{multicols}", "\\end{document}");
  await writeFile(path.join(dir, "book.tex"), lines.join("\n").replace("\\usepackage{fontspec}", "\\usepackage{fontspec}\n\\usepackage{multicol}"), "utf8");
  await compile(xelatex, dir, "book.tex");
  console.log(`book.pdf: ${orderedIds.length}문항 · ${path.join(dir, "build", "book.pdf")}`);

  // 3) review — 문항별 원본 크롭 ↔ 조판본
  if (args.review) {
    const packageDir = path.resolve(args.package ?? path.join("output", "problem-bank", path.basename(dir)));
    const manifest = JSON.parse(await readFile(path.join(packageDir, "manifest.json"), "utf8"));
    const byLabel = new Map(manifest.items.map((item) => [item.number_label, item]));
    await mkdir(path.join(dir, "review"), { recursive: true });
    for (const group of bank.groups) {
      for (const id of group.items) {
        const single = `${preamble}\\usepackage{multicol}\\geometry{paperwidth=110mm,paperheight=200mm,margin=6mm,headheight=0pt,headsep=0pt,footskip=0pt}\\pagestyle{empty}\\begin{document}\\setcounter{dmproblemcount}{0}
${group.passage ? `\\dmpassage{${group.passage}}` : ""}${group.figure ? `\\begin{center}\\input{figures/${group.figure.replace(/^tikz:/, "")}}\\end{center}` : ""}
\\dmpnum{${id}}{\\input{items/${id}}}\\end{document}`;
        await writeFile(path.join(dir, "_single.tex"), single, "utf8");
        try {
          await compile(xelatex, dir, "_single.tex");
        } catch (error) {
          console.log(`  ${id}: ${error.message}`);
          continue;
        }
        const pdfBytes = await readFile(path.join(dir, "build", "_single.pdf"));
        const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
        const page = await doc.getPage(1);
        const { canvas: rendered, context: renderedContext } = await renderPage(page, 150 / 72);
        // 조판본은 잉크 범위만 남긴다(단면 용지의 빈 아래쪽 제거).
        const data = renderedContext.getImageData(0, 0, rendered.width, rendered.height).data;
        let inkBottom = 0;
        for (let yy = rendered.height - 1; yy > 0 && !inkBottom; yy -= 1) {
          for (let xx = 0; xx < rendered.width; xx += 2) {
            const offset = (yy * rendered.width + xx) * 4;
            if ((data[offset] + data[offset + 1] + data[offset + 2]) / 3 < 200) {
              inkBottom = yy;
              break;
            }
          }
        }
        const typeset = createCanvas(rendered.width, Math.min(rendered.height, inkBottom + 24));
        typeset.getContext("2d").drawImage(rendered, 0, 0);
        const source = byLabel.get(id);
        const crops = [];
        for (const region of source?.regions ?? []) {
          if (region.kind === "passage" && group.items[0] !== id) continue;
          crops.push(await loadImage(path.join(packageDir, region.file)));
        }
        const cropWidth = 620;
        const cropHeight = crops.reduce((sum, image) => sum + Math.round(image.height * (cropWidth / image.width)) + 8, 0);
        const height = Math.max(typeset.height, cropHeight) + 40;
        const sheet = createCanvas(cropWidth + typeset.width + 30, height);
        const context = sheet.getContext("2d");
        context.fillStyle = "#fff";
        context.fillRect(0, 0, sheet.width, sheet.height);
        context.fillStyle = "#333";
        context.font = "bold 16px sans-serif";
        context.fillText(`${id} · 원본 크롭`, 8, 24);
        context.fillText("조판본", cropWidth + 30, 24);
        let y = 34;
        for (const image of crops.reverse()) {
          const h = Math.round(image.height * (cropWidth / image.width));
          context.drawImage(image, 0, y, cropWidth, h);
          y += h + 8;
        }
        context.drawImage(typeset, cropWidth + 20, 34);
        await writeFile(path.join(dir, "review", `${id}.png`), await sheet.encode("png"));
        page.cleanup();
      }
    }
    await rm(path.join(dir, "_single.tex"), { force: true });
    console.log(`review/: ${(await readdir(path.join(dir, "review"))).length}장`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
