#!/usr/bin/env node
// 검수 대상 목록(ids-NN.txt)을 더 작은 조각으로 쪼갠다. 전사 배치 분할(split-batches.mjs)과 같은 이유다 —
// 에이전트 비용이 `요청 수 × 마지막 문맥 ÷ 2` 로 자라므로 조각을 줄이면 총량이 줄고, 끊겼을 때 잃는 양도 준다.
//
// 줄 순서를 바꾸지 않고 앞에서부터 target 줄씩 자르기만 한다. 원본은 `_orig/` 로 옮긴다.
//
// 사용:
//   node scripts/latex-bank/split-ids.mjs --dir latex-bank/ssenb-cm2/검수/2026-09-26 --only 06,07,08,09,10 [--target 25] [--dry]
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.dir) {
  console.error("사용: --dir <검수 폴더> [--only 06,07] [--target 25] [--dry]");
  process.exit(2);
}
const dir = path.resolve(args.dir);
const target = Number(args.target ?? 25);
const dry = args.dry === true || String(args.dry ?? "") === "true";
const only = args.only ? String(args.only).split(",").map((s) => s.trim()).filter(Boolean) : null;

const suffix = (n) => String.fromCharCode(97 + n); // a, b, c …
const files = fs.readdirSync(dir).filter((f) => /^ids-.*\.txt$/.test(f)).sort();
const pieces = [];
let before = 0, after = 0;

for (const file of files) {
  const key = file.replace(/^ids-/, "").replace(/\.txt$/, "");
  if (only && !only.includes(key)) continue;
  const lines = fs.readFileSync(path.join(dir, file), "utf8").split(/\r?\n/).filter((l) => l.trim());
  before += lines.length;
  if (lines.length <= target) { pieces.push({ name: key, n: lines.length, kept: true }); after += lines.length; continue; }

  const chunks = [];
  for (let i = 0; i < lines.length; i += target) chunks.push(lines.slice(i, i + target));
  chunks.forEach((chunk, idx) => {
    const name = `${key}${suffix(idx)}`;
    if (!dry) fs.writeFileSync(path.join(dir, `ids-${name}.txt`), chunk.join("\n") + "\n", "utf8");
    pieces.push({ name, n: chunk.length });
    after += chunk.length;
  });
  if (!dry) {
    fs.mkdirSync(path.join(dir, "_orig"), { recursive: true });
    fs.renameSync(path.join(dir, file), path.join(dir, "_orig", file));
  }
}

console.log(`${dry ? "[미리보기] " : ""}조각 ${pieces.length}개 · 문항 ${before} → ${after} ${before === after ? "(일치)" : "*** 불일치! ***"}`);
console.log(pieces.map((p) => `${p.name}:${p.n}`).join(" "));
if (before !== after) process.exit(1);
