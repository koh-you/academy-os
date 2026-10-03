#!/usr/bin/env node
// 숫자변형 주문서를 만든다. 전사본에서 원본 문항을 꺼내 「무엇을 바꿔야 하는지」를 적은 파일 하나로 묶는다.
//
// 변형 문항은 **같은 책 안의 자매 문항**이다(별도 교재를 만들지 않는다). id 는 `<원본>v<단계>` 이고
// `variant_of` 가 원본을 가리킨다. 그래야 오답지·시험지가 원본 옆에 변형을 세울 수 있고,
// 조판·답안지·패키지·등록이 전부 기존 경로를 그대로 탄다.
//
// 사용:
//   node scripts/latex-bank/make-variants.mjs --bank latex-bank/ssenb-alg --ids 7-01,9-16,10-19
//   node scripts/latex-bank/make-variants.mjs --bank latex-bank/ssenb-alg --group U1-A1
//   node scripts/latex-bank/make-variants.mjs --bank latex-bank/ssenb-alg --unit 01 --limit 20
//   node scripts/latex-bank/make-variants.mjs --bank latex-bank/ssenb-alg --all --level 1   # (가) 전권
//
// 주문서는 `latex-bank/<책>/variants/order-<이름>.json` 에 떨어진다. 변형 에이전트가 그걸 읽고
// **배치 모양의 응답 파일**(check-batch.mjs 가 그대로 받는 모양)을 쓰면 apply-variants.mjs 가 전사본에 넣는다.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "../problem-bank/args.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.bank) {
  console.error("사용: --bank latex-bank/<책> (--ids a,b | --group <그룹id> | --unit <코드> | --all) [--level 1] [--limit N]");
  process.exit(2);
}
const bankDir = path.resolve(String(args.bank));
const level = Math.max(1, Number(args.level ?? 1));
const limit = Number(args.limit ?? 0) || Infinity;
const bank = JSON.parse(await readFile(path.join(bankDir, "items.json"), "utf8"));

/** 문항이 어느 단원·그룹에 있는지. 주문서에 유형 이름을 같이 넣어 변형의 결이 유형을 벗어나지 않게 한다. */
const place = new Map();
for (const unit of bank.units ?? []) {
  for (const group of unit.groups ?? []) {
    for (const id of group.items ?? []) {
      place.set(id, { unit: `${unit.code} ${unit.title}`, unitCode: unit.code, groupId: group.id, section: group.section ?? "" });
    }
  }
}

function selectIds() {
  if (args.ids) return String(args.ids).split(",").map((s) => s.trim()).filter(Boolean);
  const all = [...place.keys()];
  if (args.group) return all.filter((id) => place.get(id).groupId === String(args.group));
  if (args.unit) return all.filter((id) => place.get(id).unitCode === String(args.unit));
  if (args.all === true || String(args.all ?? "") === "true") return all;
  return [];
}
const requested = selectIds();
if (!requested.length) {
  console.error("고를 문항이 없다 — --ids · --group · --unit · --all 중 하나를 주세요.");
  process.exit(2);
}

/** 그림의 종류. 변형에서 그림을 어떻게 다룰지가 여기서 갈린다. */
function figureKind(figure) {
  const value = String(figure ?? "");
  if (!value) return "none";
  if (value.startsWith("tikz:")) return "tikz";
  if (value.startsWith("crop:")) return "crop";
  return "other";
}

const orders = [];
const skipped = [];
for (const id of requested) {
  if (orders.length >= limit) break;
  const item = bank.items?.[id];
  if (!item) { skipped.push(`${id}: 전사본에 없다`); continue; }
  if (item.variant_of) { skipped.push(`${id}: 이미 변형 문항이다`); continue; }
  const variantId = `${id}v${level}`;
  if (bank.items?.[variantId]) { skipped.push(`${id}: ${variantId} 이 이미 있다`); continue; }
  const kind = figureKind(item.figure);
  const spot = place.get(id) ?? {};
  const order = {
    variant_id: variantId,
    variant_of: id,
    variant_level: level,
    unit: spot.unit ?? "",
    group_id: spot.groupId ?? "",
    section: spot.section ?? "",
    figure_kind: kind,
    // crop 은 스캔 그림이라 숫자가 그림 안에 박혀 있을 수 있다. 그림이 못 따라오면 그 숫자는 건드리지 못한다.
    figure_rule: kind === "none"
      ? "그림 없음 — 본문 숫자만 바꾼다."
      : kind === "tikz"
        ? `그림은 figures/${String(item.figure).slice(5)}.tex 다. 바꾼 숫자가 그림에도 보이면 figures/fig-${variantId}.tex 로 복사해 좌표·라벨을 같이 고치고 figure 를 "tikz:fig-${variantId}" 로 적는다. 그림에 숫자가 없으면 원본 figure 를 그대로 둔다.`
        : "스캔 그림(crop)이라 그림 안 숫자는 못 바꾼다. 그림에 **안 적힌** 값만 바꾸고, 그림의 숫자를 바꿔야 풀리는 문항이면 skip 에 넣고 이유를 적는다.",
    original: {
      page: item.page ?? null,
      tag: item.tag ?? "",
      body: item.body ?? "",
      ...(item.choices ? { choices: item.choices, choices_layout: item.choices_layout ?? "" } : {}),
      ...(item.figure ? { figure: item.figure } : {}),
      ...(item.answer ? { answer: item.answer } : {})
    }
  };
  orders.push(order);
}

const name = args.ids ? "ids" : args.group ? `g${args.group}` : args.unit ? `u${args.unit}` : "all";
const outPath = args.out
  ? path.resolve(String(args.out))
  : path.join(bankDir, "variants", `order-${name}-v${level}.json`);
await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, JSON.stringify({
  book: bank.book,
  bank: path.relative(process.cwd(), bankDir).replace(/\\/g, "/"),
  variant_level: level,
  contract: {
    response_path: outPath.replace(/order-/, "response-"),
    response_shape: "{ unit, groups: [{ id, section, items: [변형id…] }], items: { 변형id: {…} } }",
    item_shape: {
      page: "원본과 같은 값",
      variant_of: "원본 id",
      variant_level: level,
      tag: "숫자변형",
      body: "원문 골조를 그대로 두고 숫자만 바꾼다",
      choices: "원본이 객관식이면 같은 개수로 전부 다시 계산",
      choices_layout: "원본 그대로",
      figure: "figure_rule 에 따라",
      answer: "다시 계산한 답(객관식은 ①~⑤ 중 하나)",
      answer_source: "계산",
      solution: "답이 맞는지 사람이 확인할 수 있는 풀이. 필수 — 없으면 적용이 거부된다",
      variation_note: "무엇을 무엇으로 바꿨나(예: AB=4→6, BC=8→12)"
    },
    rules: [
      "묻는 것과 풀이 방법은 바꾸지 않는다. 바꾸는 것은 숫자(와 그에 따라 달라지는 답)뿐이다.",
      "답이 정수·간단한 분수로 떨어지게 숫자를 고른다. 원본이 깔끔하게 떨어졌으면 변형도 떨어져야 한다.",
      "원본과 답이 같은 값이 되게 만들지 않는다 — 답만 베껴 쓰면 변형이 소용없다.",
      "객관식 오답 보기도 다시 만든다. 원본 보기를 그대로 두면 계산하지 않고도 답이 보인다.",
      "단원·유형의 범위를 넘는 개념을 끌어오지 않는다(주문서의 section 을 지킨다).",
      "풀이(solution)에 중간값을 적는다. 답만 적으면 검증이 불가능하다.",
      "확신이 없으면 만들지 말고 skip 에 id 와 이유를 적는다. 틀린 변형은 없는 변형보다 나쁘다."
    ],
    verify: [
      "node scripts/latex-bank/check-batch.mjs <응답파일> --bank <책>   (조판 검증)",
      "node scripts/latex-bank/apply-variants.mjs --bank <책> --response <응답파일> --check   (계약 검증)"
    ]
  },
  orders
}, null, 1), "utf8");

console.log(`주문 ${orders.length}건 → ${outPath}`);
const byKind = orders.reduce((map, order) => map.set(order.figure_kind, (map.get(order.figure_kind) ?? 0) + 1), new Map());
console.log(`  그림: ${[...byKind].map(([kind, count]) => `${kind} ${count}`).join(" · ")}`);
if (skipped.length) console.log(`  건너뜀 ${skipped.length}건\n${skipped.slice(0, 10).map((line) => `    ${line}`).join("\n")}`);
