#!/usr/bin/env node
// work/ 의 batch-*.md 머리글을 읽어 merge-batches.mjs 의 --map 문자열을 만든다.
//
// 왜 따로 두나: split-batches.mjs 를 여러 번(배치별로 나눠) 돌리면 그때마다 merge-map.txt 가 그 실행분만 담는다.
// 병합 직전에 이 도구로 현재 work/ 전체를 다시 훑어 만드는 것이 안전하다.
//
// 순서 규칙: 단원 코드 오름차순 → 같은 단원 안에서는 pdf 쪽 오름차순. merge-batches 는 적힌 순서대로 이어 붙이므로
// 쪽 순서가 곧 책 순서여야 한다.
//
// 사용:
//   node scripts/latex-bank/build-merge-map.mjs --work latex-bank/ssen-basic-alg/work [--require-out]
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.work) { console.error("사용: --work latex-bank/<책>/work [--require-out]"); process.exit(2); }
const work = path.resolve(args.work);
const requireOut = args["require-out"] === true || String(args["require-out"] ?? "") === "true";

const HEAD = /^#\s*전사 배치\s*(\S+)\s*·\s*(.*?)\s*·\s*pdf\s*(\d+)~(\d+)쪽(?:\s*\(인쇄\s*(\d+)~(\d+)쪽\))?/;
const rows = [];
const missing = [];

for (const file of fs.readdirSync(work).filter((f) => /^batch-.+\.md$/.test(f))) {
  const first = fs.readFileSync(path.join(work, file), "utf8").split("\n")[0];
  const m = HEAD.exec(first);
  if (!m) { console.error(`머리글 못 읽음: ${file}`); continue; }
  const [, name, unitLabel, pdfFrom, pdfTo, printedFrom, printedTo] = m;
  const um = /^(\d{2})\s*(.*)$/.exec(unitLabel.trim());
  const hasOut = fs.existsSync(path.join(work, `out-${name}.json`));
  if (!hasOut) missing.push(name);
  if (requireOut && !hasOut) continue;
  rows.push({
    name,
    code: um?.[1] ?? "00",
    title: um?.[2] ?? unitLabel.trim(),
    pdfFrom: Number(pdfFrom),
    from: Number(printedFrom ?? pdfFrom),
    to: Number(printedTo ?? pdfTo),
  });
}

rows.sort((a, b) => (a.code === b.code ? a.pdfFrom - b.pdfFrom : a.code.localeCompare(b.code)));

// 단원의 인쇄쪽 범위는 그 단원 배치 전체의 최소~최대.
const range = new Map();
for (const r of rows) {
  const cur = range.get(r.code) ?? { from: Infinity, to: -Infinity, title: r.title };
  cur.from = Math.min(cur.from, r.from);
  cur.to = Math.max(cur.to, r.to);
  range.set(r.code, cur);
}

const map = rows.map((r) => `${r.name}:${r.code}:${r.title}:${range.get(r.code).from}~${range.get(r.code).to}`).join(",");
fs.writeFileSync(path.join(work, "merge-map.txt"), map, "utf8");

console.log(`배치 ${rows.length}개 · 단원 ${range.size}개 → ${path.join(work, "merge-map.txt")}`);
for (const [code, r] of [...range].sort()) {
  console.log(`  ${code} ${r.title} · 인쇄 ${r.from}~${r.to} · 조각 ${rows.filter((x) => x.code === code).length}개`);
}
if (missing.length) console.log(`out-*.json 없는 조각 ${missing.length}개: ${missing.slice(0, 40).join(" ")}${missing.length > 40 ? " …" : ""}`);
