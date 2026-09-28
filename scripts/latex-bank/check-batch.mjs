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
// 책마다 임시 폴더를 분리한다 — 다른 책의 같은 글자 배치를 동시에 검사할 때 EBUSY 충돌 방지.
const tempDir = path.join(path.dirname(bankDir), `_batch-${path.basename(bankDir)}-${name}`);
await rm(tempDir, { recursive: true, force: true });
await mkdir(tempDir, { recursive: true });
// figures/ 통째 복사는 다른 배치 에이전트가 같은 순간에 그림을 쓰면 깨진다(조각을 작게 쪼개 20개가 동시에
// 도니 남이 쓰는 중인 `fig-*.tex.tmp…` 를 복사하려다 ENOENT 로 죽는다 — ssen-basic-calc1 F2 에서 실제 발생).
// 남의 임시 파일은 건너뛰고, 그래도 걸리면 한 번 더 시도한다.
const copyFigures = () => cp(path.join(bankDir, "figures"), path.join(tempDir, "figures"), {
  recursive: true,
  filter: (src) => !/\.tmp/i.test(path.basename(src)),
});
await copyFigures().catch(async (error) => {
  if (!["ENOENT", "EBUSY", "EPERM"].includes(error?.code)) throw error;
  await new Promise((done) => setTimeout(done, 500));
  await copyFigures();
});
// 이 배치가 쓰는 그림이 실제로 복사됐는지 확인한다. 빠지면 조판이 조용히 빈칸으로 나가므로 먼저 알린다.
{
  const need = new Set([
    ...(batch.figures ?? []),
    ...Object.values(batch.items ?? {}).map((item) => item?.figure).filter(Boolean),
  ]);
  const lost = [];
  for (const fig of need) {
    // items 의 figure 값은 `tikz:fig-33-34` 처럼 종류 접두가 붙어 있다. 접두를 떼야 파일 이름이 된다
    // (안 떼면 멀쩡한 그림을 「복사 안 됨」으로 잘못 알린다 — ssen-basic-calc1 F3 이 지적).
    const name = String(fig).replace(/^[a-z]+:/i, "").replace(/\.(tex|jpg|png|pdf)$/i, "");
    const candidates = [`${name}.tex`, `${name}.jpg`, `${name}.png`, `${name}.pdf`];
    let ok = false;
    for (const candidate of candidates) {
      try { await readFile(path.join(tempDir, "figures", candidate)); ok = true; break; } catch {}
    }
    if (!ok) lost.push(name);
  }
  if (lost.length) console.log(`⚠ 그림 파일이 복사되지 않았다(다시 돌려볼 것): ${lost.join(", ")}`);
}
const base = JSON.parse(await readFile(path.join(bankDir, "items.json"), "utf8"));
const unitLabel = batch.unit ?? "00 배치";
const [, code = "00", title = unitLabel] = unitLabel.match(/^(\d{2})\s*(.*)$/) ?? [];
const missing = (batch.groups ?? []).flatMap((group) => group.items).filter((id) => !batch.items?.[id]);
if (missing.length) console.log(`items 에 없는 id: ${missing.join(", ")}`);
const bank = { book: base.book, id_style: base.id_style, variant_level: 0, units: [{ code, title, groups: batch.groups ?? [] }], items: batch.items ?? {} };
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
