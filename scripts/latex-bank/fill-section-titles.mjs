#!/usr/bin/env node
// 병합 뒤 items.json 에서 「유형 NNN」처럼 번호만 있고 제목이 빠진 구역 이름을 앞 그룹에서 채운다.
//
// 왜 생기나: 유형 라벨 상자는 그 유형의 첫 문항 위에 한 번만 인쇄된다. 배치를 쪽 경계에서 쪼개면 뒤 조각은
// 라벨이 없는 쪽만 담당하게 되고, 담당 밖 쪽을 읽지 않는 규칙 때문에 제목을 알 수 없어 번호만 적는다
// (out-E1·out-T1·out-AM1·out-AN1 에서 실제로 그랬다). 제목이 다르면 merge-batches 가 같은 유형을
// 한 그룹으로 합치지 않아 유형 머리가 두 번 찍힌다.
//
// 채우는 규칙: 같은 단원 안에서 바로 앞쪽에 있는, 번호가 같고 제목이 있는 구역 이름을 그대로 쓴다.
// 못 찾으면 고치지 않고 알린다(사람이 쪽 이미지로 확인할 자리).
//
// 사용:
//   node scripts/latex-bank/fill-section-titles.mjs --bank latex-bank/ssen-basic-alg [--dry]
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.bank) { console.error("사용: --bank latex-bank/<책> [--dry]"); process.exit(2); }
const dry = args.dry === true || String(args.dry ?? "") === "true";
const bankPath = path.join(path.resolve(args.bank), "items.json");
const bank = JSON.parse(fs.readFileSync(bankPath, "utf8"));

// 번호만 있는 것: 「유형 116」 · 「유형 116 」 · 「개념 44」 처럼 뒤에 제목이 없는 꼴.
const BARE = /^(유형|개념)\s*(\d+)\s*$/;
const TITLED = /^(유형|개념)\s*(\d+)\s+(\S.*)$/;

let filled = 0;
const unresolved = [];
for (const unit of bank.units ?? []) {
  const groups = unit.groups ?? [];
  for (let i = 0; i < groups.length; i += 1) {
    const m = BARE.exec(String(groups[i].section ?? "").trim());
    if (!m) continue;
    const [, kind, num] = m;
    // 앞쪽에서 같은 종류·같은 번호의 제목 있는 구역을 찾는다.
    let found = null;
    for (let j = i - 1; j >= 0; j -= 1) {
      const t = TITLED.exec(String(groups[j].section ?? "").trim());
      if (t && t[1] === kind && t[2] === num) { found = groups[j].section; break; }
    }
    if (!found) { unresolved.push(`${unit.code} / ${groups[i].id} — ${groups[i].section}`); continue; }
    console.log(`  ${unit.code} / ${groups[i].id}: 「${groups[i].section}」 → 「${found}」`);
    if (!dry) groups[i].section = found;
    filled += 1;
  }
}

// 공통 지시문이 쪽을 넘어 이어지는 자리: 앞 그룹에는 지시문이 있고 뒤 그룹은 비어 있다.
// 지시문 상자는 그 묶음의 첫 쪽에만 인쇄되므로, 뒤 조각을 맡은 전사자는 담당 쪽에서 지시문을 볼 수 없어
// 규칙대로 비워 둔다(보고마다 「병합 때 앞 그룹과 이어 붙일지 확인 바람」이라고 남겼다). 그대로 두면
// 오답지로 뽑을 때 그 문항들만 발문 없이 식만 나온다 — 검수 02 가 12-48 에서 지적했다.
//
// **조각 경계에서만 물려받는다.** 같은 조각 안에서 전사자가 그룹을 둘로 나눴다면 그는 두 그룹을 다 보고
// 나눈 것이므로, 뒤 그룹이 지시문 없이 비어 있는 것이 원문 그대로다. 이 가드가 없으면 멀쩡한 독립 문항에
// 남의 지시문이 붙는다 — 베이직쎈 미적분1 U1-PD15(23-14~16)에 U1-PD14 의 지시문이 붙어 23-16 은 조건까지
// 어긋났다(검수 06 지적, 2026-09-28). 조각 경계는 work/out-*.json 의 그룹 소속으로 판정한다.
const batchOfGroup = new Map();
if (args.work) {
  const workDir = path.resolve(args.work);
  for (const file of fs.readdirSync(workDir).filter((f) => /^out-.*\.json$/.test(f))) {
    try {
      const batch = JSON.parse(fs.readFileSync(path.join(workDir, file), "utf8"));
      for (const group of batch.groups ?? []) if (group.id) batchOfGroup.set(group.id, file);
    } catch {}
  }
  console.log(`조각 경계 판정: work/out-*.json ${new Set(batchOfGroup.values()).size}개에서 그룹 ${batchOfGroup.size}개`);
} else {
  console.log("[주의] --work 를 안 주면 조각 경계를 알 수 없어 지시문 물려받기를 건너뛴다.");
}
let inherited = 0;
const skipped = [];
for (const unit of bank.units ?? []) {
  const groups = unit.groups ?? [];
  for (let i = 1; i < groups.length; i += 1) {
    const a = groups[i - 1], b = groups[i];
    if (a.section !== b.section) continue;
    if (!String(a.passage ?? "").trim() || String(b.passage ?? "").trim()) continue;
    if (a.figure || b.figure) continue;
    const batchA = batchOfGroup.get(a.id), batchB = batchOfGroup.get(b.id);
    if (!batchA || !batchB || batchA === batchB) {
      skipped.push(`${unit.code} / ${b.id} ← ${a.id} (${batchA ?? "?"} 안에서 나뉜 그룹)`);
      continue;
    }
    console.log(`  지시문 물려받음 ${unit.code} / ${b.id} ← ${a.id} (${batchA} → ${batchB}): 「${String(a.passage).slice(0, 34)}」`);
    if (!dry) b.passage = a.passage;
    inherited += 1;
  }
}
if (skipped.length) {
  console.log(`  같은 조각 안에서 나뉜 그룹이라 물려받지 않음 ${skipped.length}건(전사자가 보고 나눈 것이다):`);
  for (const s of skipped) console.log(`    ${s}`);
}

// 제목을 채우고 나면 앞 그룹과 제목·지시문이 똑같아지는 자리가 생긴다. merge-batches 는 병합 시점에
// 이미 같은 것만 합치므로, 여기서 다시 한 번 이어 붙여야 유형 머리가 두 번 찍히지 않는다.
let joined = 0;
for (const unit of bank.units ?? []) {
  const groups = unit.groups ?? [];
  for (let i = groups.length - 1; i > 0; i -= 1) {
    const a = groups[i - 1], b = groups[i];
    const same = a.section === b.section && (a.passage ?? "") === (b.passage ?? "") && !a.figure && !b.figure;
    if (!same) continue;
    console.log(`  합침 ${unit.code} / ${a.id} + ${b.id} (${b.items?.length ?? 0}문항)`);
    if (!dry) { a.items.push(...(b.items ?? [])); groups.splice(i, 1); }
    joined += 1;
  }
}

console.log(`${dry ? "[미리보기] " : ""}제목 채움 ${filled}건 · 그룹 합침 ${joined}건 · 못 찾음 ${unresolved.length}건`);
for (const u of unresolved) console.log(`  [확인 필요] ${u}`);
if (!dry && (filled || joined || inherited)) {
  fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`, "utf8");
  console.log(`→ ${bankPath} 갱신. 이어서 check-merged 로 「안합쳐짐」이 사라졌는지 확인할 것.`);
}
