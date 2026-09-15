#!/usr/bin/env node
// 전사 배치 목록 생성 — 문항 크롭 패키지(manifest.json)를 pdf 쪽 범위로 나눠, 배치마다 쪽 이미지·문항 크롭·답·해설 경로를 적은
// md 를 만든다. 전사 에이전트(latex-transcriber)에게 하나씩 넘긴다.
//
// 사용:
//   node scripts/latex-bank/make-batches.mjs --package output/problem-bank/ssen-basic-cm2 --out <폴더> \
//     --batches "A:16-19:02 직선의 방정식,B:20-24:02 직선의 방정식,E:33-36:03 원의 방정식" [--page-offset 6]
//
// --batches 는 「이름:pdf쪽범위:단원」 을 쉼표로 잇는다. --page-offset 은 인쇄 쪽 = pdf 쪽 + offset (기본 0 · 베이직쎈 6).
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.package || !args.out || !args.batches) {
  console.error("사용: --package <크롭 패키지> --out <폴더> --batches \"A:16-19:02 직선의 방정식,…\" [--page-offset 6]");
  process.exit(2);
}
const root = path.resolve(args.package);
const offset = Number(args["page-offset"] ?? 0);
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
fs.mkdirSync(path.resolve(args.out), { recursive: true });
const win = (file) => path.join(root, file);
for (const spec of String(args.batches).split(",").map((value) => value.trim()).filter(Boolean)) {
  const [name, range, unit] = spec.split(":").map((value) => value.trim());
  const [from, to] = range.split("-").map(Number);
  let count = 0;
  let body = "";
  for (let page = from; page <= to; page += 1) {
    const items = manifest.items.filter((item) => item.pdf_page === page);
    const summary = manifest.pages.find((entry) => entry.pdf_page === page);
    body += `## pdf ${page}쪽 = 인쇄 ${page + offset}쪽 · 구역(자동 추정): ${summary?.block || "?"} · 쪽 이미지: ${win(`qa/p${String(page).padStart(3, "0")}.jpg`)}\n\n`;
    for (const item of items) {
      const passage = item.regions.find((region) => region.kind === "passage");
      body += `- ${item.number_label} · 크롭 ${win(item.regions[0].file)}`;
      if (passage) body += ` · 지시문 크롭 ${win(passage.file)}`;
      body += ` · 답 ${win(`answers/${item.item_id}.jpg`)} · 해설 ${win(`solutions/${item.item_id}.jpg`)}`;
      if (item.review_status === "flagged") body += ` · ⚠ ${item.review_note}`;
      body += "\n";
      count += 1;
    }
    body += "\n";
  }
  const head = `# 전사 배치 ${name} · ${unit} · pdf ${from}~${to}쪽 (인쇄 ${from + offset}~${to + offset}쪽)\n\n문항 ${count}개. 답·해설 크롭 파일이 없을 수 있다(답지에서 못 찾은 문항) — 그때는 답지 쪽 렌더로 대조하거나 발문을 풀어 「계산」으로 적는다.\n\n`;
  fs.writeFileSync(path.join(path.resolve(args.out), `batch-${name}.md`), head + body, "utf8");
  console.log(`${name} ${from}-${to} ${unit} · ${count}문항`);
}
