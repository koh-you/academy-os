#!/usr/bin/env node
// 자체 교재 초안을 **새 번호로 조판해** 등록용 패키지로 만든다.
//
// 번호는 조판 시점에 이미지 안에 박히므로(`\setcounter{dmproblemcount}`) 원본 이미지를 복사할 수 없다 —
// 19번을 복사하면 자체 교재 3번 자리에 19가 찍힌 그림이 선다. 그래서 고른 문항의 **전사본**을 모아
// 임시 책으로 펴고 처음부터 다시 조판한다. 등록된 34권 전부에 전사본이 있어서 가능하다.
//
// 사용:
//   node scripts/latex-bank/build-collection.mjs --collection pbc_xxx --out <패키지폴더>
//   node scripts/latex-bank/build-collection.mjs --collection-file <초안.json> --out <패키지폴더>
//   ... --dry     조판까지만 하고 패키지는 만들지 않는다
//   ... --upload  등록까지 하고 초안을 「제작 완료」로 닫는다(--collection 으로 읽었을 때만)
//
// `--collection` 은 운영 서버에서 초안을 읽는다(ACADEMY_TEACHER_TOKEN 필요 · GET 만 한다).
// `--collection-file` 은 같은 모양의 JSON 을 파일에서 읽는다(서버 없이 확인할 때).
//
// 만든 패키지는 upload-package.mjs 로 등록한다. 기획: docs/problem-bank-composed-book-plan.md

import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { parseArgs } from "../problem-bank/args.mjs";

const execFileAsync = promisify(execFile);
const args = parseArgs(process.argv.slice(2));
const API_BASE = process.env.ACADEMY_API_BASE ?? "https://koh-you-math-academy-os-api.onrender.com";

if (!args.collection && !args["collection-file"]) {
  console.error("사용: --collection <초안id> | --collection-file <초안.json> [--out <패키지폴더>] [--dry]");
  process.exit(2);
}

/** 초안을 서버 또는 파일에서 읽는다. 모양은 { collection, sections, items }. */
async function loadCollection() {
  if (args["collection-file"]) return JSON.parse(await readFile(path.resolve(String(args["collection-file"])), "utf8"));
  const token = process.env.ACADEMY_TEACHER_TOKEN;
  if (!token) throw new Error("ACADEMY_TEACHER_TOKEN 이 없습니다(또는 --collection-file 을 쓰세요).");
  const response = await fetch(`${API_BASE}/api/problem-bank/collection?collectionId=${encodeURIComponent(String(args.collection))}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) throw new Error(`초안을 읽지 못했습니다: HTTP ${response.status}`);
  return response.json();
}

/** 전사본이 있는 책들의 지도: book_id → { bank, title, packageDir }. find-book-packages 를 그대로 쓴다. */
async function loadBookMap() {
  const { stdout } = await execFileAsync(process.execPath, ["scripts/latex-bank/find-book-packages.mjs", "--json"], { maxBuffer: 16 * 1024 * 1024 });
  const rows = JSON.parse(stdout);
  return new Map(rows.filter((row) => row.bookId).map((row) => [row.bookId, row]));
}

/** 서버 itemId(`<bookId>-<번호표>`)를 교재와 번호표로 가른다. */
function splitItemId(itemId, bookIds) {
  for (const bookId of bookIds) {
    if (itemId.startsWith(`${bookId}-`)) return { bookId, numberLabel: itemId.slice(bookId.length + 1) };
  }
  return null;
}

const detail = await loadCollection();
const collection = detail.collection ?? {};
const settings = collection.printSettings ?? {};
const sourceLabel = settings.sourceLabel ?? "full";
const title = String(collection.title ?? "").trim();
if (!title) throw new Error("초안에 교재 이름이 없습니다.");

const bookMap = await loadBookMap();
const bookIds = [...bookMap.keys()];
const sectionById = new Map((detail.sections ?? []).map((section) => [section.sectionId, section]));
const ordered = [...(detail.items ?? [])].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));

// 구획 순서대로, 구획 안에서는 담은 순서대로. 번호는 구획을 넘어 1부터 이어진다.
const sections = (detail.sections ?? []).slice().sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
const groupsBySection = new Map(sections.map((section) => [section.sectionId, []]));
for (const entry of ordered) {
  const bucket = groupsBySection.get(entry.sectionId);
  if (bucket) bucket.push(entry);
}

const bankCache = new Map();
async function loadBank(bank) {
  if (!bankCache.has(bank)) bankCache.set(bank, JSON.parse(await readFile(path.join("latex-bank", bank, "items.json"), "utf8")));
  return bankCache.get(bank);
}

const collectionId = String(collection.collectionId ?? args.collection ?? "draft");
const bookId = `pbk_${createHash("sha256").update(`collection:${collectionId}`).digest("hex").slice(0, 10)}`;
const workDir = path.join("latex-bank", `_collection-${collectionId}`);
await rm(workDir, { recursive: true, force: true });
await mkdir(path.join(workDir, "figures"), { recursive: true });

const items = {};
const units = [];
const figureCopies = [];
const missing = [];
let number = 0;

for (const section of sections) {
  const entries = groupsBySection.get(section.sectionId) ?? [];
  if (!entries.length) continue;
  const groupItems = [];
  for (const entry of entries) {
    const split = splitItemId(entry.itemId, bookIds);
    const source = split ? bookMap.get(split.bookId) : null;
    if (!source) { missing.push(`${entry.itemId}: 교재를 못 찾음`); continue; }
    const bank = await loadBank(source.bank);
    const original = bank.items?.[split.numberLabel];
    if (!original) { missing.push(`${entry.itemId}: 전사본에 없음(${source.bank})`); continue; }

    number += 1;
    const newId = String(number).padStart(4, "0");
    // 그림은 책마다 같은 이름이 있을 수 있어(fig-11) 새 id 로 바꿔 복사한다.
    let figure = original.figure ?? "";
    if (figure) {
      const [kind, name] = String(figure).split(":");
      const extension = kind === "tikz" ? ".tex" : ".png";
      figureCopies.push({
        from: path.join("latex-bank", source.bank, "figures", `${name}${extension}`),
        to: path.join(workDir, "figures", `fig-${newId}${extension}`)
      });
      figure = `${kind}:fig-${newId}`;
    }
    items[newId] = {
      ...original,
      page: number,
      ...(figure ? { figure } : {}),
      // 출처는 조판 시점에 이미지 안에 들어간다. 자체 교재는 자기 제목이 아니라 **원본 교재**를 가리켜야 한다.
      ...(sourceLabel === "none" ? {} : {
        source_badge: sourceLabel === "book"
          ? source.title
          : `${source.title} ${String(split.numberLabel).includes("-") ? `${split.numberLabel.split("-")[0]}쪽 ${split.numberLabel.split("-")[1]}번` : `${split.numberLabel}번`}`
      }),
      // 꼬리표는 교재 자신의 성질이라 그대로 둔다(대표 문제·서술형·숫자변형).
      origin: { book_id: split.bookId, book: source.title, number_label: split.numberLabel }
    };
    groupItems.push(newId);
  }
  if (!groupItems.length) continue;
  units.push({
    code: String(units.length + 1).padStart(2, "0"),
    title: section.title || `구획 ${units.length + 1}`,
    groups: [{ id: `U${units.length + 1}-A1`, section: settings.showTypeHeading === false ? "" : (section.title || ""), items: groupItems }]
  });
}

if (!number) throw new Error("담긴 문항이 하나도 없습니다.");
await writeFile(path.join(workDir, "items.json"), JSON.stringify({
  book: title,
  source_package: `collection:${collectionId}`,
  id_style: "number",
  variant_level: 0,
  units,
  items
}, null, 1), "utf8");

for (const copy of figureCopies) {
  await cp(copy.from, copy.to).catch(() => missing.push(`그림 없음: ${copy.from}`));
}

console.log(`임시 책 ${workDir} · ${number}문항 · ${units.length}구획 · 그림 ${figureCopies.length}`);
if (missing.length) console.log(`  빠진 것 ${missing.length}건\n${missing.slice(0, 10).map((line) => `    ${line}`).join("\n")}`);

if (args.dry) {
  console.log("\n--dry 라 조판·패키지는 만들지 않았습니다. items.json 만 확인하세요.");
  process.exit(missing.length ? 1 : 0);
}

// 조판이 읽을 **스캔 패키지 자리**를 만들어 준다(자체 교재는 스캔 원본이 없다).
const packageDir = path.resolve(String(args.out ?? path.join("output", "problem-bank", `collection-${collectionId}`)));
const sourceDir = `${packageDir}-src`;
await mkdir(sourceDir, { recursive: true });
await writeFile(path.join(sourceDir, "manifest.json"), JSON.stringify({
  book: {
    book_id: bookId,
    title,
    folder_path: collection.folderPath ?? "",
    subject: collection.subject ?? "",
    grade: collection.grade ?? "",
    source_kind: "composed",
    source_file_name: "",
    source_sha256: "",
    page_count: number,
    item_count: number,
    layout_profile: {},
    ingest_version: `collection-1.0`
  },
  units: units.map((unit, index) => ({ position: index, code: unit.code, title: unit.title, item_count: unit.groups[0].items.length })),
  items: []
}, null, 2), "utf8");

const buildArgs = [
  "scripts/latex-bank/build.mjs", "--bank", workDir, "--bank-only",
  "--package", sourceDir, "--export", packageDir,
  ...(sourceLabel === "none" ? [] : ["--source-badge"])
];
console.log(`\n조판: node ${buildArgs.join(" ")}`);
const build = await execFileAsync(process.execPath, buildArgs, { maxBuffer: 64 * 1024 * 1024, timeout: 60 * 60 * 1000 });
for (const line of build.stdout.trim().split("\n").slice(-4)) console.log(`  ${line}`);

console.log(`\n패키지 ${packageDir}`);

const wantsUpload = args.upload === true || String(args.upload ?? "") === "true";
if (!wantsUpload) {
  console.log(`다음: node scripts/problem-bank/upload-package.mjs --package "${packageDir}" --confirm`);
  process.exit(0);
}

const uploadToken = process.env.ACADEMY_TEACHER_TOKEN;
if (!uploadToken) throw new Error("--upload 에는 ACADEMY_TEACHER_TOKEN 이 필요합니다.");
const upload = await execFileAsync(process.execPath, [
  path.resolve("scripts/problem-bank/upload-package.mjs"), "--package", packageDir, "--confirm"
], { env: { ...process.env, ACADEMY_TEACHER_TOKEN: uploadToken }, maxBuffer: 64 * 1024 * 1024, timeout: 60 * 60 * 1000 });
for (const line of upload.stdout.trim().split("\n").slice(-4)) console.log(`  ${line}`);
if (/실패 [1-9]/.test(upload.stdout)) throw new Error("등록이 실패해 초안 상태를 바꾸지 않았습니다.");

// 초안을 「제작 완료」로 닫는다. 안 닫으면 화면에 영원히 「제작 대기」로 남는다.
if (args["collection-file"]) {
  console.log("\n--collection-file 로 읽어 초안 상태는 바꾸지 않았습니다(서버에 없는 초안).");
} else {
  const response = await fetch(`${API_BASE}/api/problem-bank/collection-build`, {
    method: "POST",
    headers: { Authorization: `Bearer ${uploadToken}`, "content-type": "application/json" },
    body: JSON.stringify({ collectionId, status: "published", publishedBookId: bookId })
  });
  if (!response.ok) throw new Error(`초안을 「제작 완료」로 바꾸지 못했습니다: HTTP ${response.status}`);
  console.log(`\n초안 ${collectionId} → 제작 완료 · 교재 ${bookId}`);
}
