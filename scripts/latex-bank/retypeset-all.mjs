#!/usr/bin/env node
// 등록된 교재를 한 권씩 재조판하고 바뀐 이미지만 다시 올린다. **중단·재개가 전제다.**
//
// 한 권이 끝날 때마다 `docs/source-badge-removal-progress.md` 의 표를 고치므로, 세션이 끊기거나
// 컴퓨터를 꺼도 다음 실행이 이어간다. 표가 곧 상태다 — 따로 상태 파일을 두면 표와 어긋나고,
// 어긋나면 어느 쪽이 맞는지 알 수 없다.
//
//   ⬜  아직 조판 안 함
//   ⏳  조판은 끝났고 **등록만** 실패(토큰 만료 등). 다시 실행하면 조판을 건너뛰고 등록만 한다.
//   ✅  등록까지 끝남
//
// ⏳ 를 따로 두는 까닭: 조판이 책당 5~22분이라 「조판도 안 한 책」과 섞이면 몇 시간을 다시 쓴다.
//
// 사용:
//   node scripts/latex-bank/retypeset-all.mjs --list            남은 책만 보여 준다
//   node scripts/latex-bank/retypeset-all.mjs --only ssenb-alg  한 권만
//   node scripts/latex-bank/retypeset-all.mjs                   남은 책 전부(오래 걸린다)
//   ... --no-upload                                             조판만 하고 등록은 안 한다
//   ... --upload-only --ids a,b                                 조판은 건너뛰고 **이미 만들어 둔 패키지만** 올린다
//                                                               (토큰이 만료돼 등록만 실패했을 때 — 조판을 다시 하지 않는다)
//
// 토큰: ACADEMY_TEACHER_TOKEN 환경변수. 값은 출력하지 않는다.

import { execFile } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { parseArgs } from "../problem-bank/args.mjs";

const execFileAsync = promisify(execFile);
const args = parseArgs(process.argv.slice(2));
const PROGRESS = "docs/source-badge-removal-progress.md";
const UPLOAD_CWD = "C:/Users/PC/github/academy-os-wt-ssenb";

/** 진행표를 읽는다. 표가 상태다. ⬜ 아직 · ⏳ 조판됨(등록만 남음) · ✅ 끝. */
async function remainingBanks() {
  const text = await readFile(PROGRESS, "utf8");
  const rows = [];
  for (const line of text.split("\n")) {
    const match = line.match(/^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*([^|]+?)\s*\|\s*(\d+)\s*\|\s*(⬜|⏳|✅)/);
    if (match) {
      rows.push({
        bank: match[1],
        title: match[2],
        items: Number(match[3]),
        done: match[4] === "✅",
        typeset: match[4] === "⏳"
      });
    }
  }
  return rows;
}

/** 표의 상태 칸을 바꾼다. 다음 실행이 이걸 보고 무엇을 건너뛸지 정한다. */
async function markState(bank, mark, note) {
  const text = await readFile(PROGRESS, "utf8");
  const today = new Date().toISOString().slice(0, 10);
  const next = text.split("\n").map((line) => {
    if (!line.match(new RegExp(`^\\|\\s*\\d+\\s*\\|\\s*\`${bank}\``))) return line;
    return line.replace(/\|\s*(?:⬜|⏳|✅)[^|]*\|\s*$/, `| ${mark} ${today} · ${note} |`);
  }).join("\n");
  await writeFile(PROGRESS, next, "utf8");
}

const map = JSON.parse((await execFileAsync(process.execPath, ["scripts/latex-bank/find-book-packages.mjs", "--json"], { maxBuffer: 16 * 1024 * 1024 })).stdout);
const byBank = new Map(map.map((row) => [row.bank, row]));

const uploadOnly = args["upload-only"] === true || String(args["upload-only"] ?? "") === "true";
let todo = (await remainingBanks()).filter((row) => !row.done);
// ⏳(조판 끝 · 등록만 남음)는 조판을 건너뛴다. 다시 조판하면 책당 5~22분을 그대로 버린다.
if (args.only) todo = todo.filter((row) => row.bank === String(args.only));
if (args.ids) {
  // --upload-only 는 「조판은 됐고 등록만 실패한 책」만 받아야 한다. 아직 조판 안 한 책을 섞으면
  // 배지가 그대로인 옛 패키지를 올린 뒤 ✅ 로 적혀 영영 안 고쳐진다.
  const wanted = new Set(String(args.ids).split(",").map((value) => value.trim()).filter(Boolean));
  todo = todo.filter((row) => wanted.has(row.bank));
}
if (uploadOnly && !args.ids && !args.only) {
  console.error("--upload-only 는 --ids 또는 --only 로 **조판이 끝난 책**을 지정해야 합니다.");
  process.exit(2);
}
if (args.list) {
  for (const row of todo) {
    const found = byBank.get(row.bank);
    console.log(`${row.bank.padEnd(18)} ${String(row.items).padStart(5)}  ${row.title}  ${found?.packageDir ? "" : "← 스캔 패키지 못 찾음"}`);
  }
  console.log(`\n남은 책 ${todo.length}권 · 문항 ${todo.reduce((sum, row) => sum + row.items, 0)}`);
  process.exit(0);
}

const token = process.env.ACADEMY_TEACHER_TOKEN ?? "";
const upload = args["no-upload"] !== true && String(args["no-upload"] ?? "") !== "true";
if (upload && !token) {
  console.error("ACADEMY_TEACHER_TOKEN 이 없습니다(--no-upload 면 없어도 됩니다).");
  process.exit(2);
}

for (const row of todo) {
  const found = byBank.get(row.bank);
  if (!found?.exportDir) { console.log(`✗ ${row.bank}: 조판 패키지를 못 찾았습니다 — 건너뜁니다`); continue; }
  // 스캔 패키지가 안 남은 책은 조판 패키지를 원천으로 쓴다(--bank-only 가 문항·단원을 전사본에서 다시 세우므로 자기참조가 안전하다).
  const packageDir = found.packageDir ?? found.exportDir;
  const started = Date.now();
  console.log(`\n=== ${row.bank} · ${row.title} · ${row.items}문항${uploadOnly ? " (등록만)" : ""}`);
  const skipBuild = uploadOnly || row.typeset;
  if (!skipBuild) try {
    const build = await execFileAsync(process.execPath, [
      "scripts/latex-bank/build.mjs", "--bank", `latex-bank/${row.bank}`, "--bank-only",
      "--package", packageDir, "--export", found.exportDir
    ], { maxBuffer: 64 * 1024 * 1024, timeout: 60 * 60 * 1000 });
    for (const line of build.stdout.trim().split("\n").slice(-3)) console.log(`  ${line}`);
  } catch (error) {
    console.log(`✗ ${row.bank}: 조판 실패 — ${String(error.message).split("\n")[0]}`);
    continue;
  }
  const minutes = Math.round((Date.now() - started) / 60000);

  let uploaded = "등록 안 함";
  if (upload) {
    try {
      const result = await execFileAsync(process.execPath, [
        "scripts/problem-bank/upload-package.mjs", "--package", found.exportDir, "--confirm"
      ], { cwd: UPLOAD_CWD, env: { ...process.env, ACADEMY_TEACHER_TOKEN: token }, maxBuffer: 64 * 1024 * 1024, timeout: 60 * 60 * 1000 });
      const text = result.stdout;
      for (const line of text.trim().split("\n").slice(-4)) console.log(`  ${line}`);
      if (/실패 [1-9]/.test(text)) {
        console.log(`✗ ${row.bank}: 등록 실패`);
        if (!skipBuild) await markState(row.bank, "⏳", "조판 끝 · 등록 대기");
        continue;
      }
      // 진행 표시는 CR 로 덮어쓰는 중간 값이라 그대로 적으면 「40/420 교체」처럼 사실과 다른 기록이
      // 남는다(2026-10-03 베이직쎈 공통수학2 에서 실제로 그랬다). **계획 줄**을 읽는다.
      const plan = text.match(/문항 이미지 (\d+) → 올릴 것 (\d+)/);
      uploaded = plan ? `${plan[2]}/${plan[1]}장 교체` : "등록 완료";
    } catch (error) {
      console.log(`✗ ${row.bank}: 등록 실패 — ${String(error.message).split("\n")[0]}`);
      // 조판은 끝났다. 표에 ⏳ 로 적어 다음 실행이 **조판을 건너뛰고 등록만** 하게 한다.
      if (!skipBuild) await markState(row.bank, "⏳", "조판 끝 · 등록 대기");
      continue;
    }
  }
  await markState(row.bank, "✅", `${uploaded} · ${minutes}분`);
  console.log(`✅ ${row.bank} (${minutes}분 · ${uploaded})`);
}
console.log("\n끝. 남은 책은 --list 로 확인하세요.");
