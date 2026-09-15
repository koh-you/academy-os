// 배치 out-*.json 을 latex-bank/ssen-basic-cm2/items.json 의 units[] 로 병합한다. 사용: node merge-batches.mjs <workDir> [배치 글자들]
import fs from "node:fs";
import path from "node:path";

const [workDir, letters = "ABCDEFGH"] = process.argv.slice(2);
const bankPath = "latex-bank/ssen-basic-cm2/items.json";
const bank = JSON.parse(fs.readFileSync(bankPath, "utf8"));
const unitOf = { A: "02", B: "02", C: "02", D: "02", E: "03", F: "03", G: "03", H: "03" };
const titles = { "02": "직선의 방정식", "03": "원의 방정식" };
const pagesOf = { "02": "22~38", "03": "39~60" };
const reviews = [];
const byUnit = new Map();
for (const letter of letters) {
  const file = path.join(workDir, `out-${letter}.json`);
  if (!fs.existsSync(file)) {
    console.log(`${letter}: 없음 (건너뜀)`);
    continue;
  }
  const batch = JSON.parse(fs.readFileSync(file, "utf8"));
  const code = unitOf[letter];
  if (!byUnit.has(code)) byUnit.set(code, { code, title: titles[code], pages: pagesOf[code], groups: [], items: {} });
  const unit = byUnit.get(code);
  for (const group of batch.groups) {
    const last = unit.groups[unit.groups.length - 1];
    // 배치 경계에서 같은 구역·같은 지시문이 이어지면 한 그룹으로 합친다(지시문이 두 번 찍히지 않게).
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
  const existing = bank.units.findIndex((entry) => entry.code === unit.code);
  const entry = { code: unit.code, title: unit.title, pages: unit.pages, groups: unit.groups };
  if (existing >= 0) bank.units[existing] = entry;
  else bank.units.push(entry);
  for (const [id, item] of Object.entries(unit.items)) bank.items[id] = item;
  console.log(`단원 ${unit.code}: 그룹 ${unit.groups.length} · 문항 ${Object.keys(unit.items).length}`);
}
bank.units.sort((a, b) => a.code.localeCompare(b.code));
const groupsText = (groups) => groups.map((group) => "      " + JSON.stringify(group)).join(",\n");
let text = `{\n  "book": ${JSON.stringify(bank.book)},\n  "source_package": ${JSON.stringify(bank.source_package)},\n  "variant_level": 0,\n  "units": [\n`;
text += bank.units.map((unit) => `    { "code": ${JSON.stringify(unit.code)}, "title": ${JSON.stringify(unit.title)}, "pages": ${JSON.stringify(unit.pages ?? "")}, "groups": [\n${groupsText(unit.groups)}\n    ] }`).join(",\n");
text += "\n  ],\n  \"items\": {\n";
const order = bank.units.flatMap((unit) => unit.groups.flatMap((group) => group.items));
const seen = new Set();
const ordered = [...order, ...Object.keys(bank.items)].filter((id) => (seen.has(id) ? false : seen.add(id)));
text += ordered.map((id) => `    ${JSON.stringify(id)}: ${JSON.stringify(bank.items[id])}`).join(",\n");
text += "\n  }\n}\n";
fs.writeFileSync(bankPath, text, "utf8");
fs.writeFileSync(path.join(workDir, "review-needed-merged.json"), JSON.stringify(reviews, null, 2), "utf8");
console.log(`items.json: 단원 ${bank.units.length} · 문항 ${Object.keys(bank.items).length} · review ${reviews.length}`);
