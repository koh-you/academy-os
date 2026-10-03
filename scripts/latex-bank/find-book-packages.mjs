#!/usr/bin/env node
// 전사본(latex-bank/<책>)마다 **스캔 패키지**와 **조판 패키지**가 어디 있는지 찾아 준다.
//
// 패키지가 worktree 네 곳과 바탕화면에 흩어져 있어서(한 권씩 다른 세션에서 만들었다) 재조판할 때마다
// 경로를 손으로 찾고 있었다. 전수 재조판처럼 34권을 도는 작업에서는 그게 가장 흔한 실수 자리다.
//
// 사용:
//   node scripts/latex-bank/find-book-packages.mjs              사람이 읽는 표
//   node scripts/latex-bank/find-book-packages.mjs --json       기계가 읽는 지도
//   node scripts/latex-bank/find-book-packages.mjs --bank rpm-alg
//
// 짝은 **교재 제목**으로 맞춘다(폴더 이름은 한글·영문이 섞여 있어 못 믿는다).

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "../problem-bank/args.mjs";

const args = parseArgs(process.argv.slice(2));

// 패키지가 놓이는 자리들. 새 worktree 가 생기면 여기 더한다.
const PACKAGE_ROOTS = [
  "C:/Users/PC/Desktop/문제은행-패키지",
  "C:/Users/PC/github/academy-os/output/problem-bank",
  "C:/Users/PC/github/academy-os-wt-ssenb/output/problem-bank",
  "C:/Users/PC/github/academy-os-wt-ssen3/output/problem-bank",
  "C:/Users/PC/github/academy-os-wt-olympos/output/problem-bank",
  "C:/Dev/academy-os/output/problem-bank"
];

/** 전사본 목록(문항이 들어 있는 것만). 변형 세트와 임시 배치 폴더는 뺀다. */
async function listBanks() {
  const entries = await readdir("latex-bank", { withFileTypes: true });
  const banks = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;
    try {
      const bank = JSON.parse(await readFile(path.join("latex-bank", entry.name, "items.json"), "utf8"));
      const count = Object.keys(bank.items ?? {}).length;
      if (!count || !bank.book) continue;
      banks.push({ dir: entry.name, title: String(bank.book), count, variantLevel: bank.variant_level ?? 0 });
    } catch { /* items.json 이 없는 폴더는 건너뛴다 */ }
  }
  return banks.sort((a, b) => b.count - a.count);
}

/** 모든 패키지 폴더를 한 번 훑어 { title: [{ dir, items, bookId, typeset }] } 로 모은다. */
async function listPackages() {
  const byTitle = new Map();
  for (const root of PACKAGE_ROOTS) {
    let names = [];
    try { names = await readdir(root); } catch { continue; }
    for (const name of names) {
      const dir = path.join(root, name);
      let manifest;
      try { manifest = JSON.parse(await readFile(path.join(dir, "manifest.json"), "utf8")); } catch { continue; }
      const title = String(manifest.book?.title ?? "");
      if (!title) continue;
      // 조판 패키지인지 스캔 패키지인지는 **문항이 조판본을 가리키는지**로 가른다(폴더 이름이 아니라 내용).
      const typeset = (manifest.items ?? []).some((item) => String(item.review_note ?? "").includes("latex 조판본"));
      const list = byTitle.get(title) ?? [];
      list.push({ dir: dir.replace(/\\/g, "/"), items: manifest.items?.length ?? 0, bookId: manifest.book?.book_id ?? "", typeset });
      byTitle.set(title, list);
    }
  }
  return byTitle;
}

const banks = await listBanks();
const packages = await listPackages();
const rows = [];
for (const bank of banks) {
  if (bank.variantLevel) continue; // 변형 세트는 독립 교재가 아니다
  const found = packages.get(bank.title) ?? [];
  // 스캔 패키지는 조판본이 아닌 것 중 문항이 가장 많은 것, 조판 패키지는 조판본 중 가장 많은 것.
  const scan = found.filter((entry) => !entry.typeset).sort((a, b) => b.items - a.items)[0] ?? null;
  const typeset = found.filter((entry) => entry.typeset).sort((a, b) => b.items - a.items)[0] ?? null;
  rows.push({
    bank: bank.dir,
    title: bank.title,
    items: bank.count,
    bookId: typeset?.bookId ?? scan?.bookId ?? "",
    packageDir: scan?.dir ?? null,
    exportDir: typeset?.dir ?? null
  });
}

const picked = args.bank ? rows.filter((row) => row.bank === String(args.bank)) : rows;
if (args.json) {
  console.log(JSON.stringify(picked, null, 1));
} else {
  for (const row of picked) {
    console.log(`${row.bank.padEnd(18)} ${String(row.items).padStart(5)}  ${row.title}`);
    console.log(`  스캔 ${row.packageDir ?? "— 못 찾음"}`);
    console.log(`  조판 ${row.exportDir ?? "— 못 찾음"}`);
  }
  const missing = picked.filter((row) => !row.packageDir || !row.exportDir);
  console.log(`\n전사본 ${picked.length}권 · 스캔 없음 ${picked.filter((row) => !row.packageDir).length} · 조판 없음 ${picked.filter((row) => !row.exportDir).length}`);
  if (missing.length) console.log(`못 찾은 책: ${missing.map((row) => row.bank).join(", ")}`);
}
