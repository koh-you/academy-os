#!/usr/bin/env node
// 전사 배치 JSON(그룹 + 문항 일부) 하나를 임시 책으로 조판해 LaTeX 오류·Overfull 을 확인한다. 병합 전에 전사 에이전트가 쓴다.
//
// 사용: node scripts/latex-bank/check-batch.mjs <batch.json> [--bank latex-bank/ssen-basic-cm2]
//
// 배치 JSON: { "unit": "02 직선의 방정식", "groups": [...], "items": {...} }. 임시 폴더 latex-bank/_batch-<이름>/ 에
// items.json 을 만들고 원본 bank 의 figures/ 를 복사한 뒤 build.mjs 를 그대로 돌린다(같은 sty · 같은 조판).
import { execFile } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const execFileAsync = promisify(execFile);
const [file] = process.argv.slice(2).filter((arg) => !arg.startsWith("--") && !process.argv[process.argv.indexOf(arg) - 1]?.startsWith("--"));
const args = parseArgs(process.argv.slice(2));
if (!file) {
  console.error("사용: node scripts/latex-bank/check-batch.mjs <batch.json> [--bank latex-bank/ssen-basic-cm2]");
  process.exit(2);
}
const bankDir = path.resolve(args.bank ?? "latex-bank/ssen-basic-cm2");
const batch = JSON.parse(await readFile(file, "utf8"));
const name = path.basename(file, path.extname(file)).replace(/[^\w-]/g, "_");
const tempDir = path.join(path.dirname(bankDir), `_batch-${name}`);
await rm(tempDir, { recursive: true, force: true });
await mkdir(tempDir, { recursive: true });
await cp(path.join(bankDir, "figures"), path.join(tempDir, "figures"), { recursive: true });
const base = JSON.parse(await readFile(path.join(bankDir, "items.json"), "utf8"));
const unitLabel = batch.unit ?? "00 배치";
const [, code = "00", title = unitLabel] = unitLabel.match(/^(\d{2})\s*(.*)$/) ?? [];
const missing = (batch.groups ?? []).flatMap((group) => group.items).filter((id) => !batch.items?.[id]);
if (missing.length) console.log(`items 에 없는 id: ${missing.join(", ")}`);
const bank = { book: base.book, variant_level: 0, units: [{ code, title, groups: batch.groups ?? [] }], items: batch.items ?? {} };
await writeFile(path.join(tempDir, "items.json"), JSON.stringify(bank, null, 1), "utf8");
try {
  const { stdout } = await execFileAsync(process.execPath, [path.resolve("scripts/latex-bank/build.mjs"), "--bank", tempDir], { maxBuffer: 16 * 1024 * 1024 });
  process.stdout.write(stdout);
  const log = await readFile(path.join(tempDir, "build", "book.log"), "utf8");
  const overfull = (log.match(/^Overfull/gm) ?? []).length;
  const pages = log.match(/\((\d+) pages?\)/)?.[1] ?? "?";
  const undefinedRefs = (log.match(/Undefined control sequence|Missing \$ inserted/g) ?? []).length;
  console.log(`배치 ${name}: ${Object.keys(bank.items).length}문항 · ${pages}쪽 · Overfull ${overfull} · 치명 경고 ${undefinedRefs}`);
} catch (error) {
  const log = await readFile(path.join(tempDir, "build", "book.log"), "utf8").catch(() => "");
  const errors = log.split("\n").filter((line) => line.startsWith("!") || /^l\.\d+/.test(line)).slice(0, 12);
  console.log(`배치 ${name}: 컴파일 실패\n${errors.join("\n")}\n${error.message.split("\n")[0]}`);
  process.exitCode = 1;
}
