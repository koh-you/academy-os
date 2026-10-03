#!/usr/bin/env node
// 스캔 문항 패키지의 manifest.json 문항 목록을 전사본(latex-bank/<책>/items.json)에 맞춘다 — 스캔 배지 OCR 이 놓친 문항은
// 「쪽-번호」 id 로 항목을 만들어 넣고, 전사본에 없는 항목(유형 라벨 상자·단원 간지·지시문 조각으로 잘못 잘린 것 · 번호를 잘못 읽은 것)은 뺀다.
// 이렇게 맞춘 뒤 ingest-scan-answers.mjs 를 다시 돌리면 해설·답 크롭이 실제 번호로 정렬된다(번호가 밀린 문항에 다른 문항 해설이 붙지 않게).
//
// 사용: node scripts/latex-bank/sync-manifest-to-bank.mjs --bank latex-bank/ssen-basic-cm1 --package output/problem-bank/ssen-basic-cm1
// 원래 manifest 는 manifest.scan.json 으로 남긴다(처음 한 번만).
import { copyFile, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.bank || !args.package) {
  console.error("사용: --bank latex-bank/<책> --package output/problem-bank/<책>");
  process.exit(2);
}
const bank = JSON.parse(await readFile(path.join(args.bank, "items.json"), "utf8"));
const manifestPath = path.join(args.package, "manifest.json");
const backupPath = path.join(args.package, "manifest.scan.json");
if (!existsSync(backupPath)) await copyFile(manifestPath, backupPath);
const manifest = JSON.parse(await readFile(backupPath, "utf8"));
const byLabel = new Map(manifest.items.map((item) => [item.number_label, item]));
const bookId = manifest.book.book_id;

const items = [];
let added = 0;
// 단원 번호는 **전사본의 순서**가 원천이다. 예전에는 스캔 manifest 에서 code 로 찾았는데, 스캔에 단원이 없는 책은
// findIndex 가 -1 이라 모든 문항이 0단원으로 몰리고 단원 목록도 빈 채로 나갔다
// (2026-10-03 실측: RPM 중학 3-1 1,133문항·중학 3-2 673문항이 단원 0개로 등록돼 있었다).
for (const [unitIndex, unit] of bank.units.entries()) {
  for (const group of unit.groups) {
    for (const id of group.items) {
      const existing = byLabel.get(id);
      if (existing) {
        const page = bank.id_style === "number" && Number.isInteger(bank.items[id]?.page) ? { printed_page: bank.items[id].page } : {};
        items.push({ ...existing, ...page, type_label: group.section, unit_index: unitIndex });
        continue;
      }
      // 「쪽-번호」 id 는 쪽을 id 에서, 책 전체 번호 id(라이트쎈·쎈)는 전사본의 page 에서 읽는다.
      const [pageText, numberText] = id.split("-");
      const bookNumbered = bank.id_style === "number";
      const printedPage = bookNumbered ? Number(bank.items[id]?.page ?? 0) : Number(pageText);
      // 「30-e1」(쪽-예제 번호)은 숫자 부분만 번호로(예제는 같은 번호 문항보다 앞).
      const numberSort = bookNumbered ? Number(id) : printedPage * 100 + Number(String(numberText).replace(/\D/g, "")) - (String(numberText).startsWith("e") ? 0.5 : 0);
      items.push({
        item_id: `${bookId}-${id}`, number_label: id, number_sort: numberSort, printed_page: printedPage, pdf_page: printedPage,
        column: 0, layout: "column", type_label: group.section, tags: [], unit_index: unitIndex >= 0 ? unitIndex : 0, has_shared_passage: Boolean(group.passage),
        group_key: null, review_status: "ai_checked", review_note: "스캔 크롭에 없어 전사본(쪽 렌더)으로 추가한 문항", regions: []
      });
      added += 1;
    }
  }
}
const bankIds = new Set(items.map((item) => item.number_label));
const dropped = manifest.items.filter((item) => !bankIds.has(item.number_label)).map((item) => item.number_label);
items.sort((a, b) => a.number_sort - b.number_sort);
// 단원 목록도 전사본에서 만든다. 스캔 manifest 가 들고 있던 부가 정보(chapter 등)는 code 가 같을 때 이어받는다.
const scanUnitByCode = new Map((manifest.units ?? []).map((unit) => [String(unit.code ?? ""), unit]));
const units = bank.units.map((unit, index) => {
  const own = items.filter((item) => item.unit_index === index);
  return {
    ...(scanUnitByCode.get(unit.code) ?? {}),
    position: index,
    code: unit.code,
    title: unit.title,
    item_number_from: own[0]?.number_label ?? "",
    item_number_to: own.at(-1)?.number_label ?? "",
    item_count: own.length
  };
});
await writeFile(manifestPath, JSON.stringify({ ...manifest, book: { ...manifest.book, item_count: items.length }, units, items, synced_to_bank: { bank: args.bank, added, dropped } }, null, 2), "utf8");
console.log(`manifest.json: 문항 ${items.length}개 (전사본 기준 · 추가 ${added} · 제외 ${dropped.length}: ${dropped.join(" ")})`);
