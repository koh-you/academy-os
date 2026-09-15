#!/usr/bin/env node
// 전사 배치 out-*.json 을 latex-bank/<책>/items.json 의 units[] 로 병합한다.
//
// 사용:
//   node scripts/latex-bank/merge-batches.mjs --work <배치 폴더> --bank latex-bank/ssen-basic-cm2 \
//     --map "A:02:직선의 방정식:22~38,B:02:직선의 방정식:22~38,E:03:원의 방정식:39~60"
//
// --map 은 「배치:단원코드:단원제목:인쇄쪽범위」. 같은 단원의 배치는 적힌 순서대로 이어 붙이고, 배치 경계에서 같은 구역·같은
// 지시문이 이어지면 한 그룹으로 합친다(지시문이 두 번 찍히지 않게). 이미 있는 단원 코드는 통째로 바뀐다(1단원처럼 병합 대상이
// 아닌 단원은 그대로). review_needed 는 <work>/review-needed-merged.json 에 모은다.
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.work || !args.bank || !args.map) {
  console.error("사용: --work <배치 폴더> --bank latex-bank/<책> --map \"A:02:직선의 방정식:22~38,…\"");
  process.exit(2);
}
const bankPath = path.join(path.resolve(args.bank), "items.json");
const bank = JSON.parse(fs.readFileSync(bankPath, "utf8"));
if (!Array.isArray(bank.units)) {
  // 1단원 시범 형식(unit + groups) → units[] 로 올린다.
  const match = String(bank.unit ?? "").match(/^(\d{2})\s*(.*)$/);
  bank.units = [{ code: match?.[1] ?? "01", title: match?.[2] ?? bank.unit, pages: "", groups: bank.groups ?? [] }];
  delete bank.unit;
  delete bank.groups;
}
const reviews = [];
const byUnit = new Map();
for (const spec of String(args.map).split(",").map((value) => value.trim()).filter(Boolean)) {
  const [letter, code, title, pages = ""] = spec.split(":").map((value) => value.trim());
  const file = path.join(path.resolve(args.work), `out-${letter}.json`);
  if (!fs.existsSync(file)) {
    console.log(`${letter}: 없음 (건너뜀)`);
    continue;
  }
  const batch = JSON.parse(fs.readFileSync(file, "utf8"));
  if (!byUnit.has(code)) byUnit.set(code, { code, title, pages, groups: [], items: {} });
  const unit = byUnit.get(code);
  for (const group of batch.groups) {
    const last = unit.groups[unit.groups.length - 1];
    if (last && last.section === group.section && (last.passage ?? "") === (group.passage ?? "") && !group.figure && !last.figure) {
      last.items.push(...group.items);
    } else {
      unit.groups.push({ ...group });
    }
  }
  Object.assign(unit.items, batch.items);
  for (const note of batch.review_needed ?? []) reviews.push({ batch: letter, ...note });
  console.log(`${letter}: ${Object.keys(batch.items).length}문항 · 그룹 ${batch.groups.length}`);
}
for (const unit of byUnit.values()) {
  const entry = { code: unit.code, title: unit.title, pages: unit.pages, groups: unit.groups };
  const existing = bank.units.findIndex((candidate) => candidate.code === unit.code);
  if (existing >= 0) bank.units[existing] = entry;
  else bank.units.push(entry);
  for (const [id, item] of Object.entries(unit.items)) bank.items[id] = item;
  console.log(`단원 ${unit.code}: 그룹 ${unit.groups.length} · 문항 ${Object.keys(unit.items).length}`);
}
bank.units.sort((a, b) => a.code.localeCompare(b.code));

// 사람이 diff 를 볼 수 있게 그룹 한 줄·문항 한 줄로 쓴다.
const groupsText = (groups) => groups.map((group) => "      " + JSON.stringify(group)).join(",\n");
let text = `{\n  "book": ${JSON.stringify(bank.book)},\n  "source_package": ${JSON.stringify(bank.source_package ?? "")},\n  "variant_level": ${bank.variant_level ?? 0},\n  "units": [\n`;
text += bank.units.map((unit) => `    { "code": ${JSON.stringify(unit.code)}, "title": ${JSON.stringify(unit.title)}, "pages": ${JSON.stringify(unit.pages ?? "")}, "groups": [\n${groupsText(unit.groups)}\n    ] }`).join(",\n");
text += "\n  ],\n  \"items\": {\n";
const order = bank.units.flatMap((unit) => unit.groups.flatMap((group) => group.items));
const seen = new Set();
const ordered = [...order, ...Object.keys(bank.items)].filter((id) => (seen.has(id) ? false : seen.add(id)));
text += ordered.map((id) => `    ${JSON.stringify(id)}: ${JSON.stringify(bank.items[id])}`).join(",\n");
text += "\n  }\n}\n";
fs.writeFileSync(bankPath, text, "utf8");
fs.writeFileSync(path.join(path.resolve(args.work), "review-needed-merged.json"), JSON.stringify(reviews, null, 2), "utf8");
console.log(`items.json: 단원 ${bank.units.length} · 문항 ${Object.keys(bank.items).length} · review ${reviews.length}`);
