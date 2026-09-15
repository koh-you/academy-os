#!/usr/bin/env node
// LaTeX 오답은행 빌드 — items.json(사람이 확정한 전사) → items/*.tex · book.tex · answers.tex → xelatex → build/*.pdf
//
// 사용:
//   node scripts/latex-bank/build.mjs --bank latex-bank/ssen-basic-cm2 [--review] [--export [폴더]]
//
// - 조판은 프로토타입 DeeP Math 통합 기준(latex-bank/sty/dm-editorial.sty)을 그대로 쓴다. 새 sty 를 만들지 않는다.
// - items/*.tex 는 items.json 에서 다시 만든다(원천 = items.json). 손으로 고칠 때는 items.json 을 고친다.
// - --review: 문항마다 「원본 크롭 ↔ 조판본」을 나란히 놓은 review/*.png 를 만든다(사람 확정용). 크롭은 문항 패키지
//   (output/problem-bank/<책>) 의 items/ 에서 읽는다.
// - --export [폴더]: 문항마다 조판본 PNG(200 dpi · 책 번호)를 만들고, 원본 크롭 패키지의 manifest·정답·해설을 그대로 이어받은
//   등록용 패키지 폴더(기본 output/problem-bank/<책>-latex)를 만든다. 이 폴더를 교재관리 › 패키지 등록에 올리면 오답지에
//   조판본이 나온다. 조판본이 없는 문항(수행평가 등)은 원본 크롭이 그대로 남는다.

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

/**
 * items.json 의 단원 목록. 여러 단원을 한 책으로 둘 때는 `units: [{ code, title, groups }]`,
 * 단원 하나짜리(1단원 시범 형식)는 `unit: "01 평면좌표"` + `groups` 를 그대로 받는다.
 * @returns {{ code: string, title: string, label: string, groups: object[] }[]}
 */
function bankUnits(bank) {
  const parse = (label) => {
    const match = String(label).match(/^(\d{2})\s*(.*)$/);
    return { code: match ? match[1] : "", title: match ? match[2] : String(label), label: String(label) };
  };
  if (Array.isArray(bank.units)) {
    return bank.units.map((unit) => ({ ...parse(unit.code && unit.title ? `${unit.code} ${unit.title}` : unit.unit ?? unit.title), groups: unit.groups ?? [] }));
  }
  return [{ ...parse(bank.unit), groups: bank.groups ?? [] }];
}

/** id 「12-13」 → 책에 찍힌 문항 번호 13. */
const bookNumber = (id) => Number(id.split("-")[1]);

/** 렌더 캔버스에서 잉크 범위(회색 200 미만)를 찾아 여백 pad 픽셀만 남기고 자른다. */
function trimToInk(rendered, context, pad = 12) {
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

/** 그림 참조 → LaTeX. `tikz:이름` 은 figures/이름.tex 를 \input, `crop:이름.jpg` 는 스캔 크롭을 \includegraphics. */
function renderFigure(figure, width = "0.38\\linewidth") {
  if (figure.startsWith("crop:")) return `\\includegraphics[width=${width}]{figures/${figure.slice(5)}}`;
  return `\\input{figures/${figure.replace(/^tikz:/, "")}}`;
}

/** 문항 하나의 본문 LaTeX(번호·출처 배지 포함 · dmpnum 두 번째 인자). */
function renderItemBody(id, item, group, bank) {
  const [page, number] = id.split("-");
  const badge = `\\dmkichul{${bank.book} ${page}쪽 ${number}번${item.tag ? ` · ${item.tag}` : ""}}`;
  const parts = [badge];
  if (item.figure) {
    // 원문처럼 「오른쪽 그림」이 본문 오른쪽에 오도록 본문 0.58 · 그림 0.4 폭으로 나란히 둔다.
    parts.push(`\\noindent\\begin{minipage}[t]{0.58\\linewidth}\\vspace{0pt}${item.body}\\end{minipage}\\hfill\\begin{minipage}[t]{0.4\\linewidth}\\vspace{0pt}\\centering ${renderFigure(item.figure, "0.92\\linewidth")}\\end{minipage}\\par`);
  } else {
    parts.push(item.body);
  }
  if (item.subs) parts.push(item.subs.map((sub, index) => `\\dmsubprob{${index + 1}} ${sub}`).join("\n"));
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
    console.error("사용: --bank latex-bank/<책> [--review] [--export [폴더]] [--package output/problem-bank/<책>]");
    process.exit(2);
  }
  const dir = path.resolve(args.bank);
  const bank = JSON.parse(await readFile(path.join(dir, "items.json"), "utf8"));
  const xelatex = await findXelatex();
  await mkdir(path.join(dir, "items"), { recursive: true });
  await mkdir(path.join(dir, "build"), { recursive: true });

  // 1) items/*.tex (원천 items.json 에서)
  const units = bankUnits(bank);
  const unitGroups = units.flatMap((unit) => unit.groups.map((group) => ({ unit, group })));
  const orderedIds = unitGroups.flatMap(({ group }) => group.items);
  for (const { unit, group } of unitGroups) {
    for (const id of group.items) {
      const item = bank.items[id];
      if (!item) throw new Error(`items.json 에 ${id} 가 없습니다.`);
      const header = [
        `% id: ${id}`,
        `% book: ${bank.book} · ${unit.label}`,
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
\\newcommand{\\blank}[1][1.5em]{\\framebox[#1]{\\rule{0pt}{1.4ex}}}
\\newcommand{\\dmhint}[1]{\\par\\smallskip\\begin{tcolorbox}[enhanced,colback=dm-navylight!60,colframe=dm-navy!40,boxrule=0.3pt,sharp corners,left=3mm,right=3mm,top=2mm,bottom=2mm,boxsep=0mm]\\small\\setlength{\\parskip}{1mm}#1\\end{tcolorbox}}
% 구역 제목·공통 지시문은 뒤에 문항 한 개는 붙을 자리가 있어야 찍는다(쪽 끝 고아 방지).
\\newcommand{\\dmsection}[1]{\\par\\needspace{7\\baselineskip}\\vspace{3mm}\\noindent{\\color{dm-navy}\\hrule height 0.6pt}\\vspace{1.2mm}\\noindent{\\dmheadingfont\\bfseries\\fontsize{11}{13}\\selectfont\\color{dm-navy}#1}\\par\\vspace{2mm}}
\\newcommand{\\dmpassage}[1]{\\par\\needspace{6\\baselineskip}\\medskip\\noindent{\\dmheadingfont\\bfseries\\color{dm-navy}#1}\\par\\smallskip}
% 줄바꿈 규약(프로토타입 mathbook-problems.sty · style.sty 와 같음): 수식 안에서는 줄을 바꾸지 않고, 「(단, …)」·「x축」은 한 덩어리.
\\binoppenalty=10000 \\relpenalty=10000
\\newcommand{\\nob}[1]{\\mbox{#1}}
\\newcommand{\\cond}[1]{\\mbox{(단, #1)}}
\\raggedbottom
`;
  const lines = [preamble, "\\begin{document}"];
  // 단원마다 새 쪽에서 장 머리(\\dmchapter)로 시작하고 마스트헤드 문구(\\dmchapunit)도 단원별로 바꾼다.
  for (const [unitIndex, unit] of units.entries()) {
    if (unitIndex > 0) lines.push("\\vspace*{0pt plus 1filll}", "\\clearpage");
    lines.push(`\\renewcommand{\\dmchapunit}{${unit.label}}`, `\\dmchapter{${unit.code}}{${unit.title}}`, "\\setcounter{dmproblemcount}{0}");
    let lastSection = "";
    for (const group of unit.groups) {
      if (group.section !== lastSection) {
        lines.push(`\\dmsection{${group.section}}`);
        lastSection = group.section;
      }
      if (group.passage) lines.push(`\\dmpassage{${group.passage}}`);
      if (group.figure) lines.push(`\\begin{center}${renderFigure(group.figure)}\\end{center}`);
      // 문항 사이 최소 4mm(출처 배지가 위 문항 그림에 닿지 않게). dmpnum 의 fill 은 그 위에 더해진다.
      // 문항 번호는 책에 찍힌 번호(id 의 뒤 두 자리 · 쪽마다 다시 시작)와 같게 카운터를 맞춘다.
      for (const id of group.items) lines.push(`\\setcounter{dmproblemcount}{${bookNumber(id) - 1}}\\dmpnum{${id}}{\\input{items/${id}}}\\vspace{4mm}`);
    }
  }
  // 답
  // dmpnum 은 문항마다 `plus 1fill` 을 넣어 쪽 안에서 고르게 벌린다(프로토타입 디자인). 마지막 쪽만은 남는 공간을
  // 한 단계 높은 filll 로 흡수해 문항이 늘어지지 않게 한다(sty 는 수정 금지).
  lines.push("\\vspace*{0pt plus 1filll}", "\\clearpage", "\\dmsection{정답}", "\\begin{multicols}{2}\\small");
  for (const unit of units) {
    if (units.length > 1) lines.push(`\\noindent\\textbf{${unit.label}}\\par\\smallskip`);
    for (const id of unit.groups.flatMap((group) => group.items)) lines.push(`\\noindent\\textbf{${id}}\\ ${bank.items[id].answer}\\par`);
  }
  lines.push("\\end{multicols}", "\\end{document}");
  await writeFile(path.join(dir, "book.tex"), lines.join("\n").replace("\\usepackage{fontspec}", "\\usepackage{fontspec}\n\\usepackage{multicol}"), "utf8");
  await compile(xelatex, dir, "book.tex");
  console.log(`book.pdf: ${orderedIds.length}문항 · ${path.join(dir, "build", "book.pdf")}`);

  // 3) 문항 낱장 조판 → review(원본 크롭 ↔ 조판본) · export(조판본 문항 이미지 패키지)
  if (args.review || args.export) {
    const packageDir = path.resolve(args.package ?? path.join("output", "problem-bank", path.basename(dir)));
    const manifest = JSON.parse(await readFile(path.join(packageDir, "manifest.json"), "utf8"));
    const byLabel = new Map(manifest.items.map((item) => [item.number_label, item]));
    const exportDir = args.export ? path.resolve(typeof args.export === "string" ? args.export : `${packageDir}-latex`) : null;
    if (args.review) await mkdir(path.join(dir, "review"), { recursive: true });
    if (exportDir) {
      await rm(path.join(exportDir, "items"), { recursive: true, force: true });
      await mkdir(path.join(exportDir, "items"), { recursive: true });
    }
    const exported = [];

    /** 문항 하나를 낱장(110mm 폭)으로 조판해 잉크 범위만 남긴 캔버스로 돌려준다. 번호는 책 번호. */
    const renderSingle = async (id, group, dpi) => {
      const single = `${preamble}\\usepackage{multicol}\\geometry{paperwidth=110mm,paperheight=200mm,margin=6mm,headheight=0pt,headsep=0pt,footskip=0pt}\\pagestyle{empty}\\begin{document}\\setcounter{dmproblemcount}{${bookNumber(id) - 1}}
${group.passage ? `\\dmpassage{${group.passage}}` : ""}${group.figure ? `\\begin{center}${renderFigure(group.figure)}\\end{center}` : ""}
\\dmpnum{${id}}{\\input{items/${id}}}\\end{document}`;
      await writeFile(path.join(dir, "_single.tex"), single, "utf8");
      await compile(xelatex, dir, "_single.tex");
      const pdfBytes = await readFile(path.join(dir, "build", "_single.pdf"));
      const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
      const page = await doc.getPage(1);
      const { canvas: rendered, context } = await renderPage(page, dpi / 72);
      const trimmed = trimToInk(rendered, context);
      page.cleanup();
      return trimmed;
    };

    for (const { group } of unitGroups) {
      for (const id of group.items) {
        let typeset;
        try {
          typeset = await renderSingle(id, group, 200);
        } catch (error) {
          console.log(`  ${id}: ${error.message}`);
          continue;
        }
        const source = byLabel.get(id);
        if (exportDir && source) {
          // 등록용 패키지: 원본 크롭 대신 조판본 한 장을 body 영역으로 둔다(공통 지시문·그림이 조판본 안에 들어 있으므로 passage 영역은 없앤다).
          const file = `items/${source.item_id}.png`;
          await writeFile(path.join(exportDir, file), await typeset.encode("png"));
          const body = (source.regions ?? []).find((region) => region.kind === "body") ?? source.regions?.[0];
          exported.push({
            ...source,
            regions: [{ kind: "body", position: 0, pdf_page: body?.pdf_page ?? null, bbox_normalized: body?.bbox_normalized ?? null, file, width: typeset.width, height: typeset.height }],
            // 구역·유형 라벨은 사람이 확정한 전사본(그룹 section)이 원천이다. 스캔 OCR 이 읽은 라벨은 회색 유형 쪽에서 자주 어긋난다.
            type_label: group.section,
            has_shared_passage: false,
            review_note: [source.review_note, `latex 조판본(latex-bank/${path.basename(dir)}/items/${id}.tex)`].filter(Boolean).join(" · ")
          });
        }
        if (!args.review) continue;
        // review 시트: 왼쪽 원본 크롭(들), 오른쪽 조판본
        const crops = [];
        for (const region of source?.regions ?? []) {
          if (region.kind === "passage" && group.items[0] !== id) continue;
          crops.push(await loadImage(path.join(packageDir, region.file)));
        }
        const shown = createCanvas(Math.round(typeset.width * 0.75), Math.round(typeset.height * 0.75));
        shown.getContext("2d").drawImage(typeset, 0, 0, shown.width, shown.height);
        const cropWidth = 620;
        const cropHeight = crops.reduce((sum, image) => sum + Math.round(image.height * (cropWidth / image.width)) + 8, 0);
        const height = Math.max(shown.height, cropHeight) + 40;
        const sheet = createCanvas(cropWidth + shown.width + 30, height);
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
        context.drawImage(shown, cropWidth + 20, 34);
        await writeFile(path.join(dir, "review", `${id}.png`), await sheet.encode("png"));
      }
    }
    await rm(path.join(dir, "_single.tex"), { force: true });
    if (args.review) console.log(`review/: ${(await readdir(path.join(dir, "review"))).length}장`);

    if (exportDir) {
      // manifest: 문항 목록은 조판본이 있는 것만 바꾸고, 나머지(수행평가 등)는 원본 크롭을 그대로 복사한다.
      const exportedIds = new Set(exported.map((item) => item.item_id));
      const rest = manifest.items.filter((item) => !exportedIds.has(item.item_id));
      for (const item of rest) {
        for (const region of item.regions ?? []) {
          await mkdir(path.dirname(path.join(exportDir, region.file)), { recursive: true });
          await writeFile(path.join(exportDir, region.file), await readFile(path.join(packageDir, region.file)));
        }
      }
      const outManifest = {
        ...manifest,
        ingest_version: `${manifest.ingest_version}+latex-bank`,
        typeset: { source: `latex-bank/${path.basename(dir)}`, items: exported.length, dpi: 200, note: "문항 이미지는 LaTeX 조판본. 원본 크롭 패키지는 " + path.basename(packageDir) },
        items: manifest.items.map((item) => exported.find((entry) => entry.item_id === item.item_id) ?? item)
      };
      await writeFile(path.join(exportDir, "manifest.json"), JSON.stringify(outManifest, null, 2), "utf8");
      // 정답·해설 패키지와 validation 은 그대로 복사(문항 id 가 같으므로 함께 등록된다).
      for (const name of ["validation.json", "manifest-answers.json", "검수-필요.md"]) {
        const bytes = await readFile(path.join(packageDir, name)).catch(() => null);
        if (bytes) await writeFile(path.join(exportDir, name), bytes);
      }
      for (const sub of ["answers", "solutions"]) {
        const files = await readdir(path.join(packageDir, sub)).catch(() => []);
        if (!files.length) continue;
        await mkdir(path.join(exportDir, sub), { recursive: true });
        for (const name of files) await writeFile(path.join(exportDir, sub, name), await readFile(path.join(packageDir, sub, name)));
      }
      console.log(`export: ${exported.length}문항 조판본 → ${exportDir} (교재관리 › 패키지 등록 폴더)`);
    }
  }
}


main().catch((error) => {
  console.error(error);
  process.exit(1);
});
