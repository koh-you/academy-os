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

/** id 「12-13」(쪽-번호) → 책에 찍힌 문항 번호 13. 「0013」(id_style number · RPM) → 13. */
// 「12-e1」(쪽-예제 번호 · 100발100중 집중공략·서술형 예제)은 숫자 부분만 번호로 쓴다.
const bookNumber = (id) => Number((id.includes("-") ? id.split("-")[1] : id).replace(/\D/g, ""));

/** figures/crops.json — 벡터 PDF 에서 크롭한 그림의 원문 크기(pt). 있으면 원문 크기 그대로 넣고 폭이 넓으면 본문 아래에 둔다. */
let cropSizes = {};
const SIDE_FIGURE_MAX_PT = 170;

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
  if (figure.startsWith("crop:")) {
    const size = cropSizes[figure.slice(5)];
    // 원문 크기(pt)를 알면 그대로(본문 폭 440pt 넘지 않게), 모르면 상대 폭. 놓이는 폭(\linewidth · 그림 옆 minipage)보다 넓으면
    // 그 폭으로 줄인다(RPM 중3-2 0579 표 137pt 가 0.4 폭 minipage 를 넘어 오른쪽 열이 잘리던 것).
    if (size) return `\\setlength{\\dmfigw}{${Math.min(size.width_pt, 440).toFixed(1)}pt}\\ifdim\\dmfigw>\\linewidth\\setlength{\\dmfigw}{\\linewidth}\\fi\\includegraphics[width=\\dmfigw]{figures/${figure.slice(5)}}`;
    return `\\includegraphics[width=${width}]{figures/${figure.slice(5)}}`;
  }
  // TikZ 그림이 놓일 폭(그림 옆 minipage 0.4\linewidth 등)보다 넓으면 폭에 맞춰 줄인다(좁을 때는 원 크기).
  return `\\resizebox{\\ifdim\\width>\\linewidth\\linewidth\\else\\width\\fi}{!}{\\input{figures/${figure.replace(/^tikz:/, "")}}}`;
}

/** 그림을 본문 오른쪽에 둘지(원문 「오른쪽 그림」) 아래에 둘지(표·자료 상자처럼 넓은 크롭). */
function figurePlacement(item) {
  if (item.figure_layout) return item.figure_layout;
  const size = item.figure?.startsWith("crop:") ? cropSizes[item.figure.slice(5)] : null;
  return size && size.width_pt > SIDE_FIGURE_MAX_PT ? "below" : "side";
}

/** 출처 배지를 첫 줄 위로 더 올리는 높이(mm). 첫 줄(앞 120자)에 cases·pmatrix·aligned 가 있으면 5.5, 분수·근호·큰 괄호가 있으면 3.5, 아니면 1.5. */
function badgeRaiseMm(item) {
  const head = String(item.body ?? "").slice(0, 120);
  // 검수(RPM 대수 0610·0613 · 미적분Ⅰ 0040·0147·0199): cases 위 중괄호·첫 줄 분수 분자·displaystyle lim 에 배지가 닿아 한 단계씩 더 올린다.
  if (/\\begin\{(cases|pmatrix|aligned)\}/.test(head)) return 6.5;
  if (/\\dfrac|\\sqrt|\\left\(|\\displaystyle|\\lim|\\sum|\\int/.test(head)) return 4.5;
  return 1.5;
}

/** 「쪽-번호」 id 의 번호 부분 → 배지 글. 「13」→「13번」 · 「e1」→「예제 1」 · 개념원리 「h1」→「핵심문제 1」·「c1」→「확인 1」·「u1」→「유제 1」. */
const KIND_LABELS = { e: "예제", h: "핵심문제", c: "확인", u: "유제" };
function kindLabel(numberText) {
  const match = String(numberText).match(/^([a-z]+)(\d+)$/);
  if (!match) return `${numberText}번`;
  return `${KIND_LABELS[match[1]] ?? match[1]} ${match[2]}`;
}

/** 문항 하나의 본문 LaTeX(번호·출처 배지 포함 · dmpnum 두 번째 인자). */
function renderItemBody(id, rawItem, group, bank) {
  // 전사본의 별도 줄 수식(\centerline)은 좁은 낱장 폭에서 넘치므로 폭에 맞춰 줄이는 \dispeq 로 바꾼다.
  const item = { ...rawItem, body: String(rawItem.body ?? "").replace(/\\centerline\{/g, "\\dispeq{") };
  // 출처 배지: 쪽-번호 id 는 「책 12쪽 13번」, 책 전체 번호 id(RPM)는 「책 0013번 · 9쪽」.
  const badgeText = bank.id_style === "number"
    ? `${bank.book} ${id}번${item.page ? ` · ${item.page}쪽` : ""}`
    : `${bank.book} ${id.split("-")[0]}쪽 ${kindLabel(id.split("-")[1])}`;
  // 배지는 sty 가 첫 줄 위 5mm 에 띄우는데 첫 줄에 분수·cases 가 오면 닿는다 — 첫 줄 키에 따라 더 올린다(sty 수정 없이).
  // 올린 만큼 문항 앞 간격도 벌려(book.tex 쪽) 앞 문항과 겹치지 않게 한다.
  const badge = `\\smash{\\raisebox{${badgeRaiseMm(item)}mm}{\\dmkichul{${badgeText}${item.tag ? ` · ${item.tag}` : ""}}}}`;
  const parts = [badge];
  if (item.figure && figurePlacement(item) === "side") {
    // 원문처럼 「오른쪽 그림」이 본문 오른쪽에 오도록 본문 0.58 · 그림 0.4 폭으로 나란히 둔다.
    // 좁은 폭에서 한글 양쪽 정렬은 어간이 크게 벌어지므로 왼쪽 정렬(\raggedright).
    // 발문 뒤에 붙인 전폭 블록(보기 그래프 ①~⑤ · 보기 상자 · 조건 상자)은 좁은 본문 minipage 안이 아니라 그림 아래 전폭에 둔다.
    const cut = item.body.search(/\\par\\(medskip|smallskip)\\noindent\\includegraphics|\\bogi\{|\\exprbox\{|\\dispeq\{/);
    const [bodyMain, bodyWide] = cut >= 0 ? [item.body.slice(0, cut), item.body.slice(cut)] : [item.body, ""];
    parts.push(`\\noindent\\begin{minipage}[t]{0.58\\linewidth}\\vspace{0pt}\\raggedright ${bodyMain}\\end{minipage}\\hfill\\begin{minipage}[t]{0.4\\linewidth}\\vspace{0pt}\\centering ${renderFigure(item.figure, "0.92\\linewidth")}\\end{minipage}\\par`);
    if (bodyWide) parts.push(`\\noindent ${bodyWide}`);
  } else if (item.figure && figurePlacement(item) === "end") {
    // 「end」: 그림을 문항 맨 아래(소문항·보기·힌트 뒤)에 둔다 — 원문이 시행 상자·보기 다음에 그림을 놓은 문항(개념원리 확통 73-151).
    parts.push(item.body);
  } else if (item.figure) {
    // 표·자료 상자처럼 넓은 그림은 본문 아래 가운데. 발문 뒤에 보기 상자(\bogi)·조건 상자(\exprbox)가 붙어 있으면 원문 순서대로
    // 「발문 → 그림 → 보기 상자」(RPM 중3-2 0627 상자그림 문항에서 그림이 보기 뒤로 밀리던 것).
    const cut = item.body.search(/\\bogi\{|\\exprbox\{/);
    const [bodyMain, bodyWide] = cut > 0 ? [item.body.slice(0, cut), item.body.slice(cut)] : [item.body, ""];
    parts.push(bodyMain, `\\par\\smallskip\\begin{center}${renderFigure(item.figure, "\\linewidth")}\\end{center}`);
    if (bodyWide) parts.push(`\\noindent ${bodyWide}`);
  } else {
    parts.push(item.body);
  }
  // 둘째 그림(풀이 과정 상자·자료 표처럼 본문 아래 오는 것)은 항상 본문 아래 가운데.
  if (item.figure_extra) parts.push(`\\par\\smallskip\\begin{center}${renderFigure(item.figure_extra, "\\linewidth")}\\end{center}`);
  if (item.subs) parts.push(item.subs.map((sub, index) => `\\dmsubprob{${index + 1}} ${sub}`).join("\n"));
  if (item.choices) {
    const env = item.choices_layout === "v" ? "choicesv" : item.choices_layout === "ii" ? "choicesii" : "choices32";
    // 분수(dfrac)·근호 보기는 키가 커 두 줄 배치에서 위아래 행이 맞닿는다 — 보이지 않는 지주(strut)로 행 높이를 벌린다(sty 수정 없이).
    const strut = item.choices.some((choice) => /\\dfrac|\\sqrt/.test(choice)) ? "\\rule[-3ex]{0pt}{8ex}" : "";
    // 수식은 글자 수보다 넓게 찍히므로 수식 길이의 절반을 더해 잰다(라이트쎈 공통수학2 1381 ④ 처럼 한글 24자 + 긴 수식이 잘리던 것).
    const visualLength = (choice) => choice.replace(/\$[^$]*\$/g, (math) => "M".repeat(Math.max(1, Math.round((math.length - 2) / 2)))).length;
    if (env === "choicesv" && item.choices.some((choice) => visualLength(choice) > 26)) {
      // 긴 한글 보기(문장형)는 choicesv 의 \mbox 안에서 줄이 안 바뀌어 잘린다 — 문단으로 하나씩 놓는다.
      parts.push(`\\par\\medskip${item.choices.map((choice, index) => `\\par\\noindent\\hangindent=1.4em\\hangafter=1 {\\small ${CIRCLED[index]}}\\ ${choice}`).join("")}\\par\\medskip`);
    } else {
      parts.push(`\\begin{${env}}${item.choices.map((choice) => `{${strut}${choice}}`).join("")}\\end{${env}}`);
    }
  }
  if (item.hint) parts.push(`\\dmhint{${item.hint}}`);
  if (item.figure && figurePlacement(item) === "end") parts.push(`\\par\\smallskip\\begin{center}${renderFigure(item.figure, "\\linewidth")}\\end{center}`);
  // dm-editorial 의 번호 칸(9mm)은 세 자리까지다. 1000번 이상은 「1013.」 이 2.6pt 넘치므로 본문을 그만큼 오른쪽으로 민다(sty 수정 없이).
  if (bookNumber(id) >= 1000) return `\\hspace*{2mm}\\begin{minipage}[t]{\\dimexpr\\linewidth-2mm\\relax}\\vspace{0pt}${parts.join("\n")}\\end{minipage}`;
  return parts.join("\n");
}

async function compile(xelatex, dir, file) {
  // timeout: 낱장 하나가 2시간 넘게 멈춘 사례(RPM 중3-1 0522 · MiKTeX 프로세스가 응답 없음)가 있어 3분 안에 안 끝나면 죽이고 한 번 더 시도한다.
  const run = () => execFileAsync(xelatex, ["-interaction=nonstopmode", "-halt-on-error", "-output-directory=build", file], { cwd: dir, maxBuffer: 64 * 1024 * 1024, windowsHide: true, timeout: 180_000, killSignal: "SIGKILL" });
  const runWithRetry = async () => {
    try { await run(); } catch (error) { if (error.killed || error.signal) { console.log(`  ${file}: xelatex 응답 없음(3분) → 다시 시도`); await run(); } else throw error; }
  };
  try {
    await runWithRetry();
    await runWithRetry();
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
  // 수식 안의 `\,`(원소 나열 `\{1,\,2,\,5\}`)는 math glue 라 줄바꿈 지점이 된다 — 좁은 낱장에서 `5}` 가 다음 줄로 밀려 잘린다(라이트쎈 공통수학2 0678).
  // 같은 폭의 kern(`\mkern3mu`)으로 바꿔 수식 안에서 줄이 안 바뀌게 한다(binoppenalty 규약과 같은 취지). 원천 items.json 은 그대로 둔다.
  const bank = JSON.parse(await readFile(path.join(dir, "items.json"), "utf8"), (key, value) =>
    // 쉼표(mathpunct) 뒤에도 TeX 이 자동으로 glue 를 넣어 줄이 바뀔 수 있으므로 `,\,` 는 `{,}`(Ord) + kern 으로 바꾼다.
    typeof value === "string"
      ? value
          // 쉼표 뒤 `\mathopen{}`: 다음 `-3` 이 이항 연산자로 잡혀 「, − 3」 처럼 벌어지지 않게(Open 뒤의 Bin 은 Ord 가 된다 · 개념원리 219-u4).
          .replace(/\$([^$]*)\$/g, (math) => math.replace(/,\\,/g, "{,}\\mkern3mu\\mathopen{}").replace(/\\,/g, "\\mkern3mu "))
          // 배점 「[5점]」 이 줄 끝에서 「[5」「점]」 로 갈라지지 않게(100발100중 서술형). 앞 낱말과도 붙인다(「[6점]」 홀로 둘째 줄).
          .replace(/ \[(\d+)점\]/g, "~\\mbox{[$1점]}")
          .replace(/\[(\d+)점\]/g, "\\mbox{[$1점]}")
          // 「(정답 2개)」 가 「(정답」「2개)」 로 갈라지지 않게(RPM 중3-2 0515 · 개념원리 101-02).
          .replace(/\(정답 (\d+)개\)/g, "\\mbox{(정답 $1개)}")
      : value
  );
  cropSizes =JSON.parse(await readFile(path.join(dir, "figures", "crops.json"), "utf8").catch(() => "{}"));
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
      // 첨자·지수 자리의 빈칸 상자(\blank)는 본문 크기로 찍혀 원문(작은 상자)과 어긋난다 — 첨자 안에서는 작은 상자로 바꾼다.
      // \blank[0.8em] 을 \text 안에 그대로 쓰면 세로로 길고 좁은 상자가 된다(개념원리 78-18) — 첨자용은 fboxsep 을 줄인 작은 정사각형으로 따로 그린다.
      const supBlank = "$1{\\text{\\scriptsize\\setlength{\\fboxsep}{1.5pt}\\framebox[1.5em]{\\rule{0pt}{1.6ex}}}}";
      const itemTex = renderItemBody(id, item, group, bank).replace(/([_^])\{\\blank(\[[^\]]*\])?\}/g, supBlank).replace(/([_^])\\blank(?![\[\w])/g, supBlank);
      await writeFile(path.join(dir, "items", `${id}.tex`), `${header.join("\n")}\n${itemTex}\n`, "utf8");
    }
  }

  // 2) book.tex — 구역별 배너 + 공통 지시문 + 문항
  const preamble = `\\documentclass[10pt,a4paper]{article}
\\usepackage{../sty/dm-editorial}
\\usepackage{fontspec}
% 문항 전사용 보조 매크로(dm-editorial 매크로를 덮어쓰지 않는다)
\\newcommand{\\pt}[1]{\\mathrm{#1}}
\\newcommand{\\seg}[1]{\\overline{\\mathrm{#1}}}
\\newcommand{\\arc}[1]{\\overset{\\frown}{\\mathrm{#1}}}
\\newcommand{\\vecAB}[1]{\\overrightarrow{\\mathrm{#1}}}
\\newcommand{\\exprbox}[1]{\\par\\smallskip\\noindent\\begin{center}\\fbox{\\begin{minipage}{0.9\\linewidth}\\centering\\vspace{1.5mm}#1\\vspace{1.5mm}\\end{minipage}}\\end{center}}
% 여집합 · 「보기」 상자(ㄱ·ㄴ·ㄷ 참거짓 문항 — 줄바꿈은 \\\\)
\\newcommand{\\comp}[1]{{#1}^{\\mathrm{c}}}
% 별도 줄 수식(원문의 가운데 줄): 좁은 낱장 폭보다 넓으면 폭에 맞게 줄인다(전사본의 \\centerline 을 build 가 이것으로 바꾼다).
\\newcommand{\\dispeq}[1]{\\centerline{\\resizebox{\\ifdim\\width>\\linewidth\\linewidth\\else\\width\\fi}{!}{#1}}}
\\newcommand{\\bogi}[1]{\\par\\smallskip\\noindent\\begin{center}\\fbox{\\begin{minipage}{0.9\\linewidth}\\vspace{1mm}{\\small\\bfseries 보기}\\par\\smallskip\\setlength{\\parskip}{0.6mm}#1\\vspace{1mm}\\end{minipage}}\\end{center}}
\\newcommand{\\blank}[1][1.5em]{\\raisebox{-0.15ex}{\\framebox[#1]{\\rule{0pt}{1.4ex}}}}
\\newcommand{\\dmhint}[1]{\\par\\smallskip\\begin{tcolorbox}[enhanced,colback=dm-navylight!60,colframe=dm-navy!40,boxrule=0.3pt,sharp corners,left=3mm,right=3mm,top=2mm,bottom=2mm,boxsep=0mm]\\small\\setlength{\\parskip}{1mm}#1\\end{tcolorbox}}
% 구역 제목·공통 지시문은 뒤에 문항 한 개는 붙을 자리가 있어야 찍는다(쪽 끝 고아 방지).
\\newcommand{\\dmsection}[1]{\\par\\needspace{10\\baselineskip}\\vspace{3mm}\\noindent{\\color{dm-navy}\\hrule height 0.6pt}\\vspace{1.2mm}\\noindent{\\dmheadingfont\\bfseries\\fontsize{11}{13}\\selectfont\\color{dm-navy}#1}\\par\\vspace{4mm}}
% 지시문 뒤 4mm: 다음 문항의 출처 배지가 5mm 위로 올라오므로 긴 지시문 줄과 겹치지 않게 한다.
\\newcommand{\\dmpassage}[1]{\\par\\needspace{8\\baselineskip}\\medskip\\noindent{\\dmheadingfont\\bfseries\\color{dm-navy}#1}\\par\\vspace{4mm}}
% 줄바꿈 규약(프로토타입 mathbook-problems.sty · style.sty 와 같음): 수식 안에서는 줄을 바꾸지 않고, 「(단, …)」·「x축」은 한 덩어리.
\\binoppenalty=10000 \\relpenalty=10000
\\newlength{\\dmfigw}
% 수식을 안 끊는 대신, 긴 수식 앞에서 줄을 바꾸면 앞 줄이 많이 비는 경우(RPM 중3-1 1022 지시문·0979)에 overfull 로 잘리지 않도록
% 비상 늘임 폭을 준다 — tolerance 안에서 조판되는 문단에는 영향이 없다.
\\emergencystretch=2em
\\newcommand{\\nob}[1]{\\mbox{#1}}
% 「(단, …)」 은 한 덩어리가 원칙이지만 그림 옆 좁은 폭(0.58)에서 긴 조건이 그림 뒤로 넘어가 잘리므로(RPM 공통수학2 0151),
% 「(단,」 만 첫 낱말에 붙이고 안쪽 낱말 사이에서는 줄을 바꿀 수 있게 둔다(수식 안은 여전히 안 끊긴다).
\\newcommand{\\cond}[1]{\\mbox{(단,}\\nobreakspace#1)}
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
      // 그룹 그림(공통 표·그림) 뒤 4mm: 첫 문항의 출처 배지가 5mm 위로 올라가 표 아래 행에 겹치지 않게 한다(쎈 중3-2 0124).
      if (group.figure) lines.push(`\\begin{center}${renderFigure(group.figure)}\\end{center}\\vspace{4mm}`);
      // 문항 사이 최소 6mm(출처 배지가 1.5mm 올라가 있어 위 문항의 상자·그림 아래변에 닿지 않게). dmpnum 의 fill 은 그 위에 더해진다.
      // 문항 번호는 책에 찍힌 번호(id 의 뒤 두 자리 · 쪽마다 다시 시작)와 같게 카운터를 맞춘다.
      for (const id of group.items) {
        const extra = badgeRaiseMm(bank.items[id]) - 1.5;
        lines.push(`${extra > 0 ? `\\vspace{${extra}mm}` : ""}\\setcounter{dmproblemcount}{${bookNumber(id) - 1}}\\dmpnum{${id}}{\\input{items/${id}}}\\vspace{6mm}`);
      }
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
    const exportDir = args.export ? path.resolve(typeof args.export === "string" ? args.export : `${packageDir}-latex`) : null;
    const byLabel = new Map(manifest.items.map((item) => [item.number_label, item]));
    // --bank-only(스캔 교재): 전사본(items.json)이 문항 목록의 원천이다. 전사 에이전트가 쪽에서 찾아 넣은 문항(스캔 크롭이 놓친 번호)은
    // 「쪽-번호」 id 로 manifest 항목을 만들어 넣고, 전사본에 없는 manifest 항목(유형 라벨 상자·단원 간지·지시문 조각으로 잘못 잘린 것)은 뺀다.
    if (args["bank-only"]) {
      const bankIds = new Set(unitGroups.flatMap(({ group }) => group.items));
      let added = 0;
      for (const { unit, group } of unitGroups) {
        for (const id of group.items) {
          if (byLabel.has(id)) continue;
          const [pageText, numberText] = id.split("-");
          const bookNumbered = bank.id_style === "number";
          const printedPage = bookNumbered ? Number(bank.items[id]?.page ?? 0) : Number(pageText);
          // 「30-e1」(쪽-예제 번호)은 숫자 부분만 번호로(예제는 같은 번호 문항보다 앞).
          const numberSort = bookNumbered ? Number(id) : printedPage * 100 + Number(String(numberText).replace(/\D/g, "")) - (String(numberText).startsWith("e") ? 0.5 : 0);
          const unitIndex = manifest.units.findIndex((entry) => entry.code === unit.code);
          const synthesized = {
            item_id: `${manifest.book.book_id}-${id}`, number_label: id, number_sort: numberSort, printed_page: printedPage, pdf_page: printedPage,
            column: 0, layout: "column", type_label: group.section, tags: [], unit_index: unitIndex >= 0 ? unitIndex : 0, has_shared_passage: false, group_key: null,
            review_status: "ai_checked", review_note: "스캔 크롭에 없어 전사본(쪽 렌더)으로 추가한 문항", regions: []
          };
          byLabel.set(id, synthesized);
          manifest.items.push(synthesized);
          added += 1;
        }
      }
      const before = manifest.items.length;
      manifest.items = manifest.items.filter((item) => bankIds.has(item.number_label));
      manifest.items.sort((a, b) => a.number_sort - b.number_sort);
      console.log(`bank-only: 전사본 기준 문항 ${manifest.items.length}개 (추가 ${added} · 제외 ${before - manifest.items.length})`);
    }
    if (args.review) await mkdir(path.join(dir, "review"), { recursive: true });
    const only = typeof args.only === "string" ? new Set(args.only.split(",").map((s) => s.trim()).filter(Boolean)) : null;
    // --only + --export = 패치: 이미 export 된 패키지에서 지정 문항의 png·manifest 항목만 바꾼다(나머지 파일은 건드리지 않는다).
    const patchExport = Boolean(exportDir && only);
    if (patchExport && !(await readFile(path.join(exportDir, "manifest.json")).catch(() => null))) throw new Error(`--only 패치는 export 된 manifest 가 있어야 한다: ${exportDir}`);
    if (exportDir && !patchExport) {
      await rm(path.join(exportDir, "items"), { recursive: true, force: true });
      await mkdir(path.join(exportDir, "items"), { recursive: true });
    }
    const exported = [];

    /** 문항 하나를 낱장(110mm 폭)으로 조판해 잉크 범위만 남긴 캔버스로 돌려준다. 번호는 책 번호. */
    // 낱장 조판은 worker 마다 다른 임시 파일(_single-<k>.tex)을 써서 동시에 돌린다(문항 1400개 × xelatex 2회 · 순차 4.5초/문항 → 16코어에서 수 분).
    // 낱장 높이는 200mm 로 시작하고, 증명 상자 + 세로 보기처럼 한 쪽을 넘치는 문항(RPM 대수 1117)은 2쪽이 생기므로 더 긴 낱장으로 다시 조판한다(첫 쪽만 쓰면 보기가 잘린다).
    const renderSingle = async (id, group, dpi, slot = 0) => {
      const heights = [200, 300, 420];
      for (const [attempt, paperHeight] of heights.entries()) {
        const single = `${preamble}\\usepackage{multicol}\\geometry{paperwidth=110mm,paperheight=${paperHeight}mm,margin=6mm,headheight=0pt,headsep=0pt,footskip=0pt}\\pagestyle{empty}\\begin{document}\\setcounter{dmproblemcount}{${bookNumber(id) - 1}}\\vspace*{${badgeRaiseMm(bank.items[id]) + 1}mm}
${group.passage ? `\\dmpassage{${group.passage}}${badgeRaiseMm(bank.items[id]) > 1.5 ? `\\vspace{${badgeRaiseMm(bank.items[id]) - 1.5}mm}` : ""}` : ""}${group.figure ? `\\begin{center}${renderFigure(group.figure)}\\end{center}\\vspace{4mm}` : ""}
\\dmpnum{${id}}{\\input{items/${id}}}\\end{document}`;
        const texName = `_single-${slot}.tex`;
        await writeFile(path.join(dir, texName), single, "utf8");
        await compile(xelatex, dir, texName);
        const pdfBytes = await readFile(path.join(dir, "build", texName.replace(/\.tex$/, ".pdf")));
        const doc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes), verbosity: 0 }).promise;
        if (doc.numPages > 1 && attempt < heights.length - 1) { await doc.destroy(); continue; }
        if (doc.numPages > 1) console.log(`  ${id}: 낱장 ${paperHeight}mm 로도 ${doc.numPages}쪽 — 첫 쪽만 사용`);
        else if (attempt > 0) console.log(`  ${id}: 낱장 ${paperHeight}mm 로 조판(200mm 초과)`);
        const page = await doc.getPage(1);
        const { canvas: rendered, context } = await renderPage(page, dpi / 72);
        const trimmed = trimToInk(rendered, context);
        page.cleanup();
        await doc.destroy();
        return trimmed;
      }
    };

    // --only 0526,1022 : 검수 뒤 고친 문항만 다시 렌더할 때. --review 는 그 id 의 review png 만, --export 는 export 된 패키지의 그 id 만 패치한다.
    const jobs = unitGroups.flatMap(({ group }) => group.items.filter((id) => !only || only.has(id)).map((id) => ({ id, group })));
    const renderOne = async ({ id, group }, slot) => {
        let typeset;
        try {
          typeset = await renderSingle(id, group, 200, slot);
        } catch (error) {
          console.log(`  ${id}: ${error.message}`);
          return;
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
            // 인쇄 쪽도 전사본이 원천이다 — 스캔 manifest 는 pdf 쪽 + 고정 offset 이라 간지가 빠진 스캔에서는 뒤로 갈수록 어긋난다(쎈 중3-2: 33쪽부터 1~4쪽 차이).
            ...(Number.isInteger(bank.items[id]?.page) ? { printed_page: bank.items[id].page } : {}),
            has_shared_passage: false,
            review_note: [source.review_note, `latex 조판본(latex-bank/${path.basename(dir)}/items/${id}.tex)`].filter(Boolean).join(" · ")
          });
        }
        if (!args.review) return;
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
    };
    // 동시 실행: --jobs N(기본 CPU 절반 · 최대 8). 순서는 결과에 영향이 없다(exported 는 item_id 로 찾는다).
    const workers = Math.max(1, Math.min(8, Number(args.jobs) || Math.floor(os.cpus().length / 2)));
    let cursor = 0;
    await Promise.all(Array.from({ length: workers }, async (_, slot) => {
      while (cursor < jobs.length) {
        const job = jobs[cursor++];
        await renderOne(job, slot);
      }
    }));
    for (let slot = 0; slot < workers; slot++) await rm(path.join(dir, `_single-${slot}.tex`), { force: true });
    if (args.review) console.log(`review/: ${(await readdir(path.join(dir, "review"))).length}장`);

    if (patchExport) {
      const existing = JSON.parse(await readFile(path.join(exportDir, "manifest.json"), "utf8"));
      const typesetIds = new Set(existing.items.filter((item) => String(item.review_note ?? "").includes("latex 조판본")).map((item) => item.item_id));
      for (const entry of exported) typesetIds.add(entry.item_id);
      existing.items = existing.items.map((item) => exported.find((entry) => entry.item_id === item.item_id) ?? item);
      existing.typeset = { ...(existing.typeset ?? {}), items: typesetIds.size };
      await writeFile(path.join(exportDir, "manifest.json"), JSON.stringify(existing, null, 2), "utf8");
      console.log(`export 패치: ${exported.length}문항 갱신 → ${exportDir} (조판본 ${typesetIds.size}문항)`);
    } else if (exportDir) {
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
      // --answers-from-bank(스캔 교재): 스캔 답지 크롭은 번호가 밀리거나 빠지므로, 전사본의 answer(답지·해설로 확정한 것)를 조판해
      // answers/<item_id>.jpg 로 둔다. 한 PDF 에 문항마다 한 쪽으로 넣어 한 번만 컴파일한다. 해설(solutions/)은 스캔 크롭 그대로.
      if (args["answers-from-bank"]) {
        const answerIds = exported.map((entry) => entry.number_label);
        const pages = answerIds.map((id) => `\\noindent{\\small\\textbf{${id}}}\\quad ${bank.items[id].answer ?? ""}\\par\\newpage`);
        const answersTex = `${preamble}\\geometry{paperwidth=110mm,paperheight=120mm,margin=5mm,headheight=0pt,headsep=0pt,footskip=0pt}\\pagestyle{empty}\\begin{document}\n${pages.join("\n")}\\end{document}`;
        await writeFile(path.join(dir, "_answers.tex"), answersTex, "utf8");
        await compile(xelatex, dir, "_answers.tex");
        const answersPdf = await pdfjs.getDocument({ data: new Uint8Array(await readFile(path.join(dir, "build", "_answers.pdf"))), verbosity: 0 }).promise;
        await mkdir(path.join(exportDir, "answers"), { recursive: true });
        const answerEntries = [];
        for (const [index, id] of answerIds.entries()) {
          const page = await answersPdf.getPage(index + 1);
          const { canvas: rendered, context } = await renderPage(page, 200 / 72);
          const trimmed = trimToInk(rendered, context);
          page.cleanup();
          const entry = exported[index];
          const file = `answers/${entry.item_id}.jpg`;
          await writeFile(path.join(exportDir, file), await trimmed.encode("jpeg", 90));
          answerEntries.push({ number_label: id, file, parts: 1, pdf_page: null, width: trimmed.width, height: trimmed.height, source: "latex-bank answer" });
        }
        const answersManifestPath = path.join(exportDir, "manifest-answers.json");
        const answersManifest = JSON.parse(await readFile(answersManifestPath, "utf8").catch(() => "{}"));
        answersManifest.answers = answerEntries;
        answersManifest.answers_source = `latex-bank/${path.basename(dir)} items.json answer (조판 렌더)`;
        await writeFile(answersManifestPath, JSON.stringify(answersManifest, null, 2), "utf8");
        console.log(`answers-from-bank: 답 이미지 ${answerEntries.length}개를 전사본 answer 로 조판`);
      }
      // 파일 md5(다시 등록 때 바뀐 파일만 올리기)·검수 메모(교재관리 「검토 필요」)를 manifest 에 적는다.
      await execFileAsync(process.execPath, [path.resolve("scripts/latex-bank/annotate-package.mjs"), "--package", exportDir, "--bank", dir], { maxBuffer: 4 * 1024 * 1024 }).then(({ stdout }) => process.stdout.write(stdout));
      console.log(`export: ${exported.length}문항 조판본 → ${exportDir} (교재관리 › 패키지 등록 폴더)`);
    }
  }
}


main().catch((error) => {
  console.error(error);
  process.exit(1);
});
