#!/usr/bin/env node
// 병합 직후 items.json 을 훑어 「배치 경계에서만 생기는」 어긋남을 잡는다.
//
// 왜 필요한가: 배치를 작게 쪼개면(35문항 → 12문항) 경계가 3배로 늘어난다. 경계마다 생길 수 있는 사고는 세 가지다.
//   ① 같은 구역인데 제목 문자열이 미세하게 달라(\frac vs \dfrac, 공백) 유형 머리가 두 번 찍힌다.
//      — ssenb-calc1 유형 09 에서 실제로 일어났다. merge 는 문자열이 정확히 같을 때만 그룹을 합친다.
//   ② 배치마다 표기 관례가 갈린다(「5개」 vs 「$5$개」, `\sim` vs `{\sim}`).
//   ③ 배지 번호가 경계에서 끊기거나 겹친다.
// 그래서 이 검사는 조각을 작게 쓰는 대가를 상쇄하는 안전장치다. 고치지는 않고 어디가 어긋났는지만 알린다.
//
// 사용:
//   node scripts/latex-bank/check-merged.mjs --bank latex-bank/ssen-basic-alg [--json out.json]
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.bank) { console.error("사용: --bank latex-bank/<책> [--json <파일>]"); process.exit(2); }
const bankDir = path.resolve(args.bank);
const bank = JSON.parse(fs.readFileSync(path.join(bankDir, "items.json"), "utf8"));
const items = Array.isArray(bank.items) ? Object.fromEntries(bank.items.map((i) => [i.id, i])) : (bank.items ?? {});

const problems = [];
const add = (kind, where, note) => problems.push({ kind, where, note });

// 비교용으로 제목을 눌러 편다. 눈에 같아 보이는데 문자열이 다른 경우를 찾으려는 것이다.
const flatten = (s) => String(s ?? "")
  .replace(/\\dfrac/g, "\\frac")
  .replace(/\\left|\\right/g, "")
  .replace(/[{}$\s]/g, "")
  .replace(/[·∙・]/g, "");

// ── ① 구역 제목: 같은 단원에서 눌러 편 제목은 같은데 원문이 다른 짝 ──────────────────
for (const unit of bank.units ?? []) {
  const seen = new Map(); // 눌러편제목 → 처음 만난 원문
  for (const g of unit.groups ?? []) {
    const key = flatten(g.section);
    if (!key) continue;
    if (!seen.has(key)) { seen.set(key, g.section); continue; }
    if (seen.get(key) !== g.section) {
      add("구역제목", `${unit.code} ${unit.title} / ${g.id}`, `같은 제목인데 표기가 다름:\n      A: ${seen.get(key)}\n      B: ${g.section}`);
    }
  }
  // 이웃한 두 그룹의 제목·지시문이 완전히 같으면 합쳐졌어야 한다(경계에서 안 합쳐진 흔적).
  const gs = unit.groups ?? [];
  for (let i = 1; i < gs.length; i += 1) {
    if (gs[i].section === gs[i - 1].section && (gs[i].passage ?? "") === (gs[i - 1].passage ?? "") && !gs[i].figure && !gs[i - 1].figure) {
      add("안합쳐짐", `${unit.code} / ${gs[i - 1].id}+${gs[i].id}`, `제목·지시문이 같은 이웃 그룹이 따로 남았다 — 유형 머리가 두 번 찍힌다`);
    }
  }
}

// ── ② 표기 관례 ────────────────────────────────────────────────────────────────
// 「(정답 2개)」는 고정 문구라 표기 관례 판단에서 뺀다. 이걸 세면 「맨숫자 쪽이 3건뿐」 같은 오탐이 난다
// (쎈B 대수에서 실제로 그랬다 — 나머지 26건은 「$5$초 후」처럼 수식 사이에 놓인 수라 정상이었다).
const bodies = Object.entries(items).map(([id, it]) => [id, String(it?.body ?? "").replace(/\(정답\s*\d+개\)/g, "")]);
const countIf = (re) => bodies.filter(([, b]) => re.test(b)).map(([id]) => id);
const mathCounter = countIf(/\$\d+\$\s*(개|명|가지|번|쪽|권|자루|송이|마리|점|시간|분|초)/);
const plainCounter = countIf(/(?<![$\d])\d+\s*(개|명|가지|번|쪽|권|자루|송이|마리|점|시간|분|초)/);
if (mathCounter.length && plainCounter.length) {
  add("번호표기", "책 전체", `한글 문장 속 수 표기가 갈림 — 맨숫자 ${plainCounter.length}문항 vs $수식$ ${mathCounter.length}문항 (관례는 맨숫자). 예: ${mathCounter.slice(0, 5).join(" ")}`);
}
const bareSim = countIf(/(?<!\{)\\sim(?!\})/);
const wrapSim = countIf(/\{\\sim\}/);
if (bareSim.length && wrapSim.length) {
  add("sim표기", "책 전체", `\\sim 표기가 갈림 — 맨 ${bareSim.length}문항 vs {\\sim} ${wrapSim.length}문항. 예: ${bareSim.slice(0, 5).join(" ")}`);
}

// ── ③ id·배지 연속성 ───────────────────────────────────────────────────────────
const listed = [];
for (const unit of bank.units ?? []) for (const g of unit.groups ?? []) listed.push(...(g.items ?? []));
const dup = listed.filter((id, i) => listed.indexOf(id) !== i);
if (dup.length) add("중복id", "units", `그룹 목록에 같은 id 가 두 번: ${[...new Set(dup)].slice(0, 10).join(" ")}`);
const orphan = listed.filter((id) => !items[id]);
if (orphan.length) add("없는id", "units", `그룹은 가리키는데 items 에 없음: ${orphan.slice(0, 10).join(" ")}`);
const unlisted = Object.keys(items).filter((id) => !listed.includes(id));
if (unlisted.length) add("미등재", "items", `items 에 있는데 어느 그룹에도 없음: ${unlisted.slice(0, 10).join(" ")}`);

// 쪽 안 배지 번호(`인쇄쪽-번호` id)가 쪽마다 연속인지. 구역이 바뀌면 01 로 돌아가는 것이 정상이라 「줄어듦」은 넘긴다.
const byPage = new Map();
for (const id of listed) {
  const m = /^(\d+)-(\d+)$/.exec(id);
  if (!m) continue;
  const page = Number(m[1]);
  if (!byPage.has(page)) byPage.set(page, []);
  byPage.get(page).push(Number(m[2]));
}
for (const [page, nums] of [...byPage].sort((a, b) => a[0] - b[0])) {
  const sorted = [...nums].sort((a, b) => a - b);
  const gaps = [];
  for (let i = 1; i < sorted.length; i += 1) {
    if (sorted[i] === sorted[i - 1]) continue;
    if (sorted[i] - sorted[i - 1] > 1) gaps.push(`${sorted[i - 1]}→${sorted[i]}`);
  }
  if (gaps.length) add("배지끊김", `${page}쪽`, `번호가 건너뜀: ${gaps.join(" ")} (크롭이 빠진 문항일 수 있다 — 쪽 이미지 확인)`);
}

// 쎈B 계열: 단원 문항 수 == 그 단원 마지막 배지 번호.
for (const unit of bank.units ?? []) {
  const ids = (unit.groups ?? []).flatMap((g) => g.items ?? []);
  const last = ids.map((id) => Number(/-(\d+)$/.exec(id)?.[1] ?? 0)).filter(Boolean);
  const hasRef = ids.some((id) => items[id]?.ssen_ref);
  if (!hasRef || !last.length) continue;
  const max = Math.max(...last);
  if (ids.length !== max) add("단원수", `${unit.code} ${unit.title}`, `문항 ${ids.length}개인데 마지막 배지는 ${max} — ${max - ids.length}개가 비었을 수 있다`);
}

// ── 출력 ───────────────────────────────────────────────────────────────────────
const total = listed.length;
console.log(`${bank.book} · 문항 ${total} · 단원 ${(bank.units ?? []).length} · 그룹 ${(bank.units ?? []).reduce((t, u) => t + (u.groups ?? []).length, 0)}`);
if (!problems.length) { console.log("경계 검사 통과 — 어긋남 없음"); }
else {
  console.log(`어긋남 ${problems.length}건`);
  for (const p of problems) console.log(`  [${p.kind}] ${p.where}\n    ${p.note}`);
}
if (args.json) fs.writeFileSync(path.resolve(args.json), JSON.stringify({ book: bank.book, total, problems }, null, 1), "utf8");
process.exit(problems.some((p) => ["안합쳐짐", "중복id", "없는id", "미등재"].includes(p.kind)) ? 1 : 0);
