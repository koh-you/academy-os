#!/usr/bin/env node
// 재조판 캠페인 로그를 읽어 **조판은 끝났는데 등록만 실패한 책**을 진행표에 적는다.
//
// 캠페인은 등록이 실패하면 진행표를 ⬜ 그대로 둔다(다시 집도록). 그런데 「조판도 안 한 책」과
// 「조판은 됐고 등록만 남은 책」이 둘 다 ⬜ 라서, 토큰이 돌아왔을 때 어느 쪽에 --upload-only 를
// 써야 하는지 로그를 뒤져야 한다. 로그는 임시 폴더에 있어 세션이 끝나면 사라진다.
//
// 그래서 로그에서 그 목록을 뽑아 **저장소 안 진행표**에 적어 둔다. 세션이 끊겨도 이어갈 수 있다.
//
// 사용:
//   node scripts/latex-bank/sync-retypeset-progress.mjs --log <캠페인로그>
//   node scripts/latex-bank/sync-retypeset-progress.mjs --log <로그> --print   진행표는 안 고치고 목록만

import { readFile, writeFile } from "node:fs/promises";
import { parseArgs } from "../problem-bank/args.mjs";

const args = parseArgs(process.argv.slice(2));
const PROGRESS = "docs/source-badge-removal-progress.md";
if (!args.log) {
  console.error("사용: --log <캠페인 로그 파일> [--print]");
  process.exit(2);
}

const log = await readFile(String(args.log), "utf8");

// 로그 모양: `=== <책> · <제목> · N문항` 뒤에 `✅ <책> (…)` 또는 `✗ <책>: 등록 실패 …`
const typesetOk = new Set();
const uploadFailed = new Set();
const done = new Set();
for (const line of log.split("\n")) {
  const started = line.match(/^=== (\S+) ·/);
  if (started) { typesetOk.add(started[1]); continue; }
  const finished = line.match(/^✅ (\S+) /);
  if (finished) { done.add(finished[1]); continue; }
  const failed = line.match(/^✗ (\S+): 등록 실패/);
  if (failed) uploadFailed.add(failed[1]);
}
// 조판은 끝났는데 등록만 실패한 책 = 등록 실패한 것 중 끝내 ✅ 가 안 붙은 것
const waiting = [...uploadFailed].filter((bank) => !done.has(bank));

console.log(`조판 시작 ${typesetOk.size} · 등록까지 완료 ${done.size} · 등록만 대기 ${waiting.length}`);
if (waiting.length) console.log(`  ${waiting.join(", ")}`);
if (args.print || !waiting.length) process.exit(0);

const text = await readFile(PROGRESS, "utf8");
const marker = "## 등록만 대기 (조판 끝)";
const block = [
  marker,
  "",
  "토큰이 만료돼 등록만 실패한 책이다. **조판은 이미 끝났으므로 다시 조판하지 않는다** —",
  "토큰을 새로 받은 뒤 아래 명령으로 등록만 돌린다.",
  "",
  "```bash",
  "node scripts/latex-bank/retypeset-all.mjs --upload-only --ids \\",
  `  ${waiting.join(",")}`,
  "```",
  "",
  `갱신: ${new Date().toISOString().slice(0, 16).replace("T", " ")}`,
  ""
].join("\n");

// 머리말에 괄호가 있어 그대로 정규식에 넣으면 포획 그룹이 돼 **아무것도 안 바뀐다**
// (2026-10-03: 「적었습니다」라고 찍고 실제로는 옛 목록이 그대로 남았다). 글자 그대로 찾는다.
const start = text.indexOf(marker);
let next;
if (start >= 0) {
  const after = text.indexOf("\n## ", start + marker.length);
  next = text.slice(0, start) + `${block}\n` + (after >= 0 ? text.slice(after + 1) : "");
} else {
  next = text.replace("## 재개 방법", `${block}\n## 재개 방법`);
}
await writeFile(PROGRESS, next, "utf8");
console.log(`\n${PROGRESS} 에 적었습니다.`);
