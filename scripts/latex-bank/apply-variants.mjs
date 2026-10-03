#!/usr/bin/env node
// 변형 에이전트가 쓴 응답 파일을 전사본(items.json)에 넣는다. 넣기 전에 계약을 전부 검사한다.
//
// 변형은 같은 책 안의 자매 문항으로 들어간다 — 원본 바로 뒤 자리에 끼우므로 조판·답안지·패키지·등록이
// 기존 경로를 그대로 탄다. 화면에서는 `variant_of` 가 있는 문항을 평소 목록에서 빼고, 오답지·시험지의
// 「숫자변형 함께 넣기」를 켤 때만 원본 옆에 세운다.
//
// 사용:
//   node scripts/latex-bank/apply-variants.mjs --bank latex-bank/ssenb-alg --response <응답.json> --check
//   node scripts/latex-bank/apply-variants.mjs --bank latex-bank/ssenb-alg --response <응답.json>
//
// --check 는 바꾸지 않고 계약 위반만 보여 준다. 위반이 하나라도 있으면 적용하지 않는다 —
// 틀린 변형은 없는 변형보다 나쁘다.

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "../problem-bank/args.mjs";

const args = parseArgs(process.argv.slice(2));
if (!args.bank || !args.response) {
  console.error("사용: --bank latex-bank/<책> --response <응답.json> [--check]");
  process.exit(2);
}
const bankDir = path.resolve(String(args.bank));
const itemsPath = path.join(bankDir, "items.json");
const bank = JSON.parse(await readFile(itemsPath, "utf8"));
const response = JSON.parse(await readFile(path.resolve(String(args.response)), "utf8"));

const CHOICE_MARKS = ["①", "②", "③", "④", "⑤"];

/**
 * 문항에서 숫자만 뽑는다. 하나도 안 바뀌었으면 「숫자변형」이 아니다.
 *
 * 본문만 보면 안 된다 — 「다음 중 옳은 것은?」 류는 본문이 발문 한 줄이고 **보기**가 문항의 내용이다.
 * 본문만 비교했더니 멀쩡한 변형이 「바뀐 것이 없다」로 거절됐다(2026-10-03 유형 01 거듭제곱근).
 */
function numbersOf(item) {
  const text = [String(item?.body ?? ""), ...(Array.isArray(item?.choices) ? item.choices.map(String) : [])].join(" ");
  return (text.match(/\d+(?:\.\d+)?/g) ?? []).join(",");
}

/** 본문과 보기를 합친 글. 「아무것도 안 바뀌었다」를 가리는 데 쓴다. */
function contentOf(item) {
  return [String(item?.body ?? "").trim(), ...(Array.isArray(item?.choices) ? item.choices.map((choice) => String(choice).trim()) : [])].join("|");
}

/** 문항이 어느 그룹에 있는지 — 변형을 원본 바로 뒤에 끼우려면 그룹을 알아야 한다. */
const groupOf = new Map();
for (const unit of bank.units ?? []) {
  for (const group of unit.groups ?? []) {
    for (const id of group.items ?? []) groupOf.set(id, group);
  }
}

const problems = [];
const ready = [];
const entries = Object.entries(response.items ?? {});
if (!entries.length) problems.push("응답에 items 가 없다");

for (const [id, variant] of entries) {
  const fail = (message) => problems.push(`${id}: ${message}`);
  const sourceId = String(variant.variant_of ?? "");
  const original = bank.items?.[sourceId];
  if (!sourceId) { fail("variant_of 가 없다"); continue; }
  if (!original) { fail(`variant_of «${sourceId}» 가 전사본에 없다`); continue; }
  if (!id.startsWith(`${sourceId}v`)) { fail(`id 가 «${sourceId}v<단계>» 모양이 아니다`); continue; }
  if (bank.items?.[id]) { fail("전사본에 이미 있다"); continue; }
  if (!groupOf.has(sourceId)) { fail(`원본 «${sourceId}» 이 어느 그룹에도 없다`); continue; }

  if (!Number.isInteger(variant.variant_level) || variant.variant_level < 1) fail("variant_level 이 1 이상의 정수가 아니다");
  if (!String(variant.body ?? "").trim()) fail("body 가 비었다");
  if (contentOf(variant) === contentOf(original)) fail("본문도 보기도 원본과 같다 — 바뀐 것이 없다");
  if (numbersOf(variant) === numbersOf(original) && !variant.figure_changed) {
    fail("본문·보기의 숫자가 원본과 똑같다 — 숫자변형이 아니다(그림만 바꿨으면 figure_changed: true 를 적는다)");
  }
  if (!String(variant.solution ?? "").trim()) fail("solution 이 없다 — 답을 검증할 수 없으므로 거부한다");
  else if (String(variant.solution).trim().length < 10) fail("solution 이 너무 짧다(중간값을 적어야 검증할 수 있다)");
  if (!String(variant.variation_note ?? "").trim()) fail("variation_note 가 없다 — 무엇을 바꿨는지 적어야 한다");
  if (String(variant.answer_source ?? "") !== "계산") fail('answer_source 가 "계산" 이 아니다');

  const answer = String(variant.answer ?? "").trim();
  if (!answer) fail("answer 가 비었다");
  if (Array.isArray(original.choices) && original.choices.length) {
    if (!Array.isArray(variant.choices)) fail("원본이 객관식인데 choices 가 없다");
    else {
      if (variant.choices.length !== original.choices.length) fail(`보기 개수가 원본과 다르다(${variant.choices.length} ≠ ${original.choices.length})`);
      if (variant.choices.every((choice, index) => String(choice).trim() === String(original.choices[index] ?? "").trim())) {
        fail("보기가 원본과 전부 같다 — 계산하지 않고도 답이 보인다");
      }
      const index = CHOICE_MARKS.indexOf(answer);
      if (index < 0) fail(`객관식 답이 ①~⑤ 가 아니다(«${answer}»)`);
      else if (index >= variant.choices.length) fail(`답 «${answer}» 이 보기 범위를 넘는다`);
    }
  } else if (Array.isArray(variant.choices) && variant.choices.length) {
    fail("원본은 서답형인데 변형에 보기를 붙였다");
  }

  // 그림: 스캔 그림을 그대로 쓰면 그림 안 숫자와 본문이 어긋날 수 있다. 일부러 그랬다는 근거를 받는다.
  const originalFigure = String(original.figure ?? "");
  const variantFigure = String(variant.figure ?? "");
  if (originalFigure.startsWith("crop:") && variantFigure === originalFigure && !String(variant.figure_kept_reason ?? "").trim()) {
    fail("스캔 그림을 그대로 쓰면서 figure_kept_reason 이 없다 — 그림 안 숫자가 본문과 어긋나지 않는 근거를 적는다");
  }
  if (originalFigure && !variantFigure) fail("원본에 그림이 있는데 변형에 figure 가 없다(일부러 뺐으면 figure 를 \"\" 로 적고 variation_note 에 쓴다)");

  ready.push({ id, sourceId, variant, original });
}

for (const line of problems) console.log(`  ✗ ${line}`);
console.log(`\n응답 ${entries.length}건 · 통과 ${ready.length} · 위반 ${problems.length}`);
for (const skip of response.skipped ?? []) console.log(`  (에이전트 skip) ${typeof skip === "string" ? skip : `${skip.id}: ${skip.reason ?? ""}`}`);

if (problems.length) {
  console.log("\n위반이 있어 적용하지 않았습니다. 응답을 고친 뒤 다시 실행하세요.");
  process.exit(1);
}
if (args.check) {
  console.log("\n--check 라 적용하지 않았습니다.");
  process.exit(0);
}

for (const { id, sourceId, variant, original } of ready) {
  // 쪽은 원본을 물려받는다 — 패키지의 인쇄쪽·정렬이 원본 옆자리에 서야 한다.
  bank.items[id] = {
    page: original.page ?? variant.page ?? null,
    variant_of: sourceId,
    variant_level: variant.variant_level,
    tag: variant.tag || "숫자변형",
    body: variant.body,
    ...(variant.figure ? { figure: variant.figure } : {}),
    ...(Array.isArray(variant.choices) && variant.choices.length
      ? { choices: variant.choices, ...(original.choices_layout ? { choices_layout: original.choices_layout } : {}) }
      : {}),
    answer: String(variant.answer).trim(),
    answer_source: "계산",
    solution: variant.solution,
    variation_note: variant.variation_note
  };
  const group = groupOf.get(sourceId);
  const at = group.items.indexOf(sourceId);
  group.items.splice(at + 1, 0, id);
}

await writeFile(itemsPath, JSON.stringify(bank, null, 1), "utf8");
console.log(`\n${ready.length}건 적용 → ${itemsPath}`);
console.log("다음: build.mjs 로 조판하고(변형만 보려면 --only <변형id>) 패키지를 다시 등록합니다.");
