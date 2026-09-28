#!/usr/bin/env node
// 전사 배치를 쪽 경계에서 더 작게 쪼갠다.
//
// 왜: 에이전트 비용은 `요청 수 × 마지막 문맥 ÷ 2` 로 자란다(2026-09-28 실측, 188개 에이전트). 배치를 절반으로 쪼개면
// 조각마다 요청 수도 마지막 문맥도 절반이라 조각당 비용이 1/4, 조각이 2배 → 총량이 절반이 된다. 한도에 걸렸을 때
// 잃는 작업량도 그만큼 줄어든다.
//
// 무엇을 바꾸지 않는가: 배치 목록의 본문(크롭·답·해설 경로, ⚠ 표시, 지시문 그룹, 힌트)을 한 글자도 바꾸지 않고
// `## pdf N쪽` 경계에서만 자른다. 쪽은 쪼개지 않는다 — 한 쪽 안의 문항은 같은 조각에 남아야 구역·지시문 판단이 선다.
// merge-batches 는 배치 경계에서 같은 section·같은 passage 인 그룹을 다시 이어 붙이므로 조각 수가 늘어도 결과가 같다.
//
// 사용:
//   node scripts/latex-bank/split-batches.mjs --work latex-bank/ssen-basic-alg/work [--target 14] [--dry]
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.work) {
  console.error("사용: --work latex-bank/<책>/work [--target 14] [--dry]");
  process.exit(2);
}
const work = path.resolve(args.work);
const target = Number(args.target ?? 14);
const min = Number(args.min ?? 0);
const dry = args.dry === true || String(args.dry ?? "") === "true";
// --only A,B,H 로 특정 배치만 다시 쪼갤 수 있다(이미 전사가 돈 배치는 건드리지 않으려고).
const only = args.only ? String(args.only).split(",").map((s) => s.trim()).filter(Boolean) : null;

const ITEM = /·\s*크롭\s/;               // 문항 줄은 「- <번호> · 크롭 …」
const PAGE = /^## pdf (\d+)쪽/;          // 쪽 블록 머리
const HEAD = /^#\s*전사 배치\s*(\S+)\s*·\s*(.*?)\s*·\s*pdf\s*(\d+)~(\d+)쪽(?:\s*\(인쇄\s*(\d+)~(\d+)쪽\))?/;

const files = fs.readdirSync(work).filter((f) => /^batch-[A-Z]+\.md$/.test(f)).sort();
if (!files.length) {
  console.error(`batch-*.md 가 없다: ${work}`);
  process.exit(2);
}

const origDir = path.join(work, "_orig");
const pieces = [];   // {name, unitCode, unitTitle, printedFrom, printedTo, count}
let totalBefore = 0, totalAfter = 0;

for (const file of files) {
  if (only && !only.includes(file.replace(/^batch-/, "").replace(/\.md$/, ""))) continue;
  const text = fs.readFileSync(path.join(work, file), "utf8");
  const lines = text.split("\n");
  const head = HEAD.exec(lines[0]);
  if (!head) { console.error(`머리글을 못 읽었다(건너뜀): ${file}`); continue; }
  const [, name, unitLabel, pdfFrom, , printedFrom] = head;
  const unitMatch = /^(\d{2})\s*(.*)$/.exec(unitLabel.trim());
  const unitCode = unitMatch?.[1] ?? "";
  const unitTitle = unitMatch?.[2] ?? unitLabel.trim();
  const offset = Number(printedFrom ?? pdfFrom) - Number(pdfFrom);

  // 머리글 다음 ~ 첫 쪽 블록 앞까지가 배치 공통 안내다. 조각마다 그대로 싣는다.
  const firstPage = lines.findIndex((l) => PAGE.test(l));
  const preamble = lines.slice(1, firstPage === -1 ? lines.length : firstPage);

  // 쪽 블록으로 자른다.
  const blocks = [];
  let cur = null;
  for (let i = firstPage; i >= 0 && i < lines.length; i += 1) {
    const m = PAGE.exec(lines[i]);
    if (m) { if (cur) blocks.push(cur); cur = { page: Number(m[1]), lines: [], count: 0 }; }
    if (!cur) continue;
    cur.lines.push(lines[i]);
    if (ITEM.test(lines[i])) cur.count += 1;
  }
  if (cur) blocks.push(cur);

  const before = blocks.reduce((t, b) => t + b.count, 0);
  totalBefore += before;

  // 목표 문항 수를 넘지 않게 쪽 단위로 묶는다. 한 쪽이 목표보다 커도 쪽은 쪼개지 않는다.
  const groups = [];
  let g = [];
  let n = 0;
  for (const b of blocks) {
    if (g.length && n + b.count > target) { groups.push(g); g = []; n = 0; }
    g.push(b); n += b.count;
  }
  if (g.length) groups.push(g);

  // 너무 작은 조각은 앞 조각에 붙인다. 조각마다 지시서·가이드를 다시 싣는 고정 비용이 있어서, 문항이 적으면
  // 문항당 비용이 되레 치솟는다(2026-09-28 실측: 7~10문항 조각 20만/문항 vs 12~16문항 조각 9.5만/문항).
  for (let i = groups.length - 1; i > 0; i -= 1) {
    const size = groups[i].reduce((t, b) => t + b.count, 0);
    if (size < min) { groups[i - 1].push(...groups[i]); groups.splice(i, 1); }
  }

  if (groups.length <= 1) {
    // 쪼갤 필요가 없다 — 원본 이름을 그대로 쓴다.
    pieces.push({ name, unitCode, unitTitle, from: blocks[0].page + offset, to: blocks[blocks.length - 1].page + offset, count: before, kept: true });
    totalAfter += before;
    continue;
  }

  groups.forEach((grp, idx) => {
    const pieceName = `${name}${idx + 1}`;
    const from = grp[0].page;
    const to = grp[grp.length - 1].page;
    const count = grp.reduce((t, b) => t + b.count, 0);
    const header = `# 전사 배치 ${pieceName} · ${unitLabel} · pdf ${from}~${to}쪽 (인쇄 ${from + offset}~${to + offset}쪽)`;
    const note = `\n> 이 조각은 원래 배치 ${name}(pdf ${blocks[0].page}~${blocks[blocks.length - 1].page}쪽 · ${before}문항)의 ${idx + 1}/${groups.length} 조각이다. 담당은 아래 쪽뿐이고, 앞뒤 조각의 쪽은 건드리지 않는다. 산출물은 \`out-${pieceName}.json\`.`;
    const body = [header, ...preamble.slice(0, 1), note, ...preamble.slice(1), ...grp.flatMap((b) => b.lines)].join("\n");
    const outPath = path.join(work, `batch-${pieceName}.md`);
    if (!dry) fs.writeFileSync(outPath, body.replace(/문항 \d+개\./, `문항 ${count}개.`), "utf8");
    pieces.push({ name: pieceName, unitCode, unitTitle, from: from + offset, to: to + offset, count });
    totalAfter += count;
  });

  if (!dry) {
    fs.mkdirSync(origDir, { recursive: true });
    fs.renameSync(path.join(work, file), path.join(origDir, file));
  }
}

// 단원별 인쇄쪽 범위(merge 의 --map 마지막 칸)는 그 단원 조각 전체의 최소~최대로 잡는다.
const unitRange = new Map();
for (const p of pieces) {
  const k = p.unitCode;
  const r = unitRange.get(k) ?? { from: Infinity, to: -Infinity };
  r.from = Math.min(r.from, p.from); r.to = Math.max(r.to, p.to);
  unitRange.set(k, r);
}
const map = pieces.map((p) => {
  const r = unitRange.get(p.unitCode);
  return `${p.name}:${p.unitCode}:${p.unitTitle}:${r.from}~${r.to}`;
}).join(",");

if (!dry) {
  fs.writeFileSync(path.join(work, "merge-map.txt"), map, "utf8");
  const table = ["| 조각 | 단원 | 인쇄쪽 | 문항 |", "| --- | --- | --- | --- |",
    ...pieces.map((p) => `| ${p.name} | ${p.unitCode} ${p.unitTitle} | ${p.from}~${p.to} | ${p.count} |`)].join("\n");
  fs.writeFileSync(path.join(work, "배치-지도-분할.md"), `# 분할 배치 지도 (목표 ${target}문항)\n\n원본은 \`_orig/\` 에 있다.\n\n${table}\n`, "utf8");
}

const sizes = pieces.map((p) => p.count).sort((a, b) => a - b);
console.log(`${dry ? "[미리보기] " : ""}배치 ${files.length}개 → 조각 ${pieces.length}개`);
console.log(`문항 ${totalBefore} → ${totalAfter} ${totalBefore === totalAfter ? "(일치)" : "*** 불일치! ***"}`);
console.log(`조각 문항 수: 최소 ${sizes[0]} · 중앙 ${sizes[Math.floor(sizes.length / 2)]} · 최대 ${sizes[sizes.length - 1]}`);
if (!dry) console.log(`merge 지도: ${path.join(work, "merge-map.txt")}`);
if (totalBefore !== totalAfter) process.exit(1);
