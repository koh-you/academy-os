#!/usr/bin/env node
// 등록용 패키지(export 폴더)의 manifest 에 두 가지를 적는다 — 이미지는 다시 만들지 않는다.
//   ① 파일 md5: manifest.json 의 문항 영역·manifest-answers.json 의 답·해설 항목마다 `md5`. 교재관리가 다시 등록할 때
//      서버 Storage 의 md5 와 대조해 바뀐 파일만 올린다.
//   ② 검수 메모: latex-bank/<책>/검수/<날짜>/review-*.json 의 🔴 findings 와 전사-review-needed.json 의 사람 판단이 필요한
//      메모(📝)를 문항의 review_note 로 넣고 review_status 를 "flagged" 로 둔다(교재관리 「검토 필요」 목록에 문항 이미지와 함께 나온다).
//      메모가 없는 문항은 ai_checked 로 되돌린다(스캔 자르기 단계의 경계 flag 는 조판본에서 의미가 없다).
//
// 사용:
//   node scripts/latex-bank/annotate-package.mjs --package "C:/…/문제은행-패키지/rpm-공통수학1-라텍스-패키지" \
//     [--bank latex-bank/rpm-cm1] [--review latex-bank/rpm-cm1/검수/2026-09-17] [--include-yellow] [--resolved 0545,0703]
//   --bank 만 주면 검수 폴더는 bank/검수/ 아래 가장 최근 날짜를 쓴다. --resolved 는 이미 고친 finding 의 문항 id(빼고 싶은 것).
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.package) {
  console.error("사용: --package <등록용 패키지 폴더> [--bank latex-bank/<책>] [--review <검수 폴더>] [--include-yellow] [--resolved id,id]");
  process.exit(2);
}
const packageDir = path.resolve(String(args.package));
const includeYellow = Boolean(args["include-yellow"]);
const resolved = new Set(String(args.resolved ?? "").split(",").map((value) => value.trim()).filter(Boolean));

const md5Of = async (file) => createHash("md5").update(await readFile(file)).digest("hex");

// ① md5
const manifestPath = path.join(packageDir, "manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
let hashed = 0;
for (const item of manifest.items ?? []) {
  for (const region of item.regions ?? []) {
    const file = path.join(packageDir, region.file);
    if (!existsSync(file)) continue;
    region.md5 = await md5Of(file);
    hashed += 1;
  }
}
const answersPath = path.join(packageDir, "manifest-answers.json");
let answersHashed = 0;
if (existsSync(answersPath)) {
  const answers = JSON.parse(await readFile(answersPath, "utf8"));
  for (const entry of [...(answers.answers ?? []), ...(answers.solutions ?? [])]) {
    const file = path.join(packageDir, entry.file);
    if (!existsSync(file)) continue;
    entry.md5 = await md5Of(file);
    answersHashed += 1;
  }
  await writeFile(answersPath, JSON.stringify(answers, null, 2), "utf8");
}

// ② 검수 메모
let reviewDir = args.review ? path.resolve(String(args.review)) : null;
if (!reviewDir && args.bank) {
  const base = path.join(path.resolve(String(args.bank)), "검수");
  const dates = existsSync(base) ? (await readdir(base)).filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name)).sort() : [];
  if (dates.length) reviewDir = path.join(base, dates.at(-1));
}
const notes = new Map();
const addNote = (id, line) => {
  if (!id || resolved.has(id)) return;
  if (!notes.has(id)) notes.set(id, []);
  if (!notes.get(id).includes(line)) notes.get(id).push(line);
};
// 사람 판단이 필요한 전사 메모만(절차 기록 — 「답지 N쪽 렌더로 확정」「라벨 상자 제외」 — 은 뺀다).
const memoPattern = /확인 필요|오식|사람 판단|사람 확정|추정|불확실|애매|판독 (불가|어려)|의심|확인 뒤|근사/;
let reviewFiles = 0;
if (reviewDir && existsSync(reviewDir)) {
  for (const name of (await readdir(reviewDir)).sort()) {
    if (/^review-\d+\.json$/.test(name)) {
      const report = JSON.parse(await readFile(path.join(reviewDir, name), "utf8"));
      for (const finding of report.findings ?? []) {
        if (finding.severity === "red") addNote(finding.id, `🔴 ${finding.where ? `[${finding.where}] ` : ""}${finding.note}${finding.fix ? ` → ${finding.fix}` : ""}`);
        else if (includeYellow && finding.severity === "yellow") addNote(finding.id, `🟡 ${finding.where ? `[${finding.where}] ` : ""}${finding.note}`);
      }
      reviewFiles += 1;
    } else if (name === "전사-review-needed.json") {
      const entries = JSON.parse(await readFile(path.join(reviewDir, name), "utf8"));
      for (const entry of Array.isArray(entries) ? entries : []) {
        if (memoPattern.test(String(entry.note ?? ""))) addNote(entry.id, `📝 ${entry.note}`);
      }
      reviewFiles += 1;
    }
  }
}
let flagged = 0;
let cleared = 0;
if (reviewDir) {
  for (const item of manifest.items ?? []) {
    const lines = notes.get(item.number_label);
    if (lines?.length) {
      // 🔴 먼저, 그 다음 🟡 · 📝.
      const order = { "🔴": 0, "🟡": 1, "📝": 2 };
      item.review_status = "flagged";
      item.review_note = [...lines].sort((a, b) => (order[a.slice(0, 2)] ?? 9) - (order[b.slice(0, 2)] ?? 9)).join("\n");
      flagged += 1;
    } else if (item.review_status === "flagged") {
      item.review_status = "ai_checked";
      item.review_note = "";
      cleared += 1;
    }
  }
}
manifest.annotated = { at: new Date().toISOString(), md5: hashed, answers_md5: answersHashed, review_dir: reviewDir ? path.basename(reviewDir) : null, flagged, cleared, include_yellow: includeYellow };
await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
console.log(`${path.basename(packageDir)}: md5 문항 ${hashed} · 답·해설 ${answersHashed}${reviewDir ? ` · 검수 ${path.basename(reviewDir)}(파일 ${reviewFiles}) → 검토 필요 ${flagged} · 경계 flag 해제 ${cleared}` : " · 검수 폴더 없음"}`);
