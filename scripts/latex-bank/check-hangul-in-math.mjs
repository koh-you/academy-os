#!/usr/bin/env node
// 수식 모드($…$) 안에 한글이 들어간 자리를 찾는다.
//
// 왜 필요한가: XeLaTeX 수식 글꼴에는 한글 글리프가 없어서 `$n$은 자연수` 를 `$n은 자연수$` 처럼 쓰면
// **그 한글만 조용히 사라진다.** 오류도 경고도 나지 않아 `check-batch` 와 `build` 를 그대로 통과한다
// (쎈B 대수 104-14 에서 조판본을 눈으로 보다가 발견: `A=\{a_n|a_n=2n-1, n 은 자연수\}` → 「은 자연수」 증발).
// 고치는 법은 `\mbox{…}` 또는 `\text{…}` 로 감싸거나 수식 밖으로 빼는 것이다.
//
// 사용:
//   node scripts/latex-bank/check-hangul-in-math.mjs --bank latex-bank/ssenb-alg
//   node scripts/latex-bank/check-hangul-in-math.mjs --work latex-bank/ssenb-alg/work   (전사 배치 out-*.json)
//   node scripts/latex-bank/check-hangul-in-math.mjs --all                              (latex-bank/*/items.json 전부)
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const args = parseArgs(process.argv.slice(2));
const HANGUL = /[가-힣ㄱ-ㆎ]/;

// `\mbox{…}`·`\text{…}`·`\fbox{…}`·`\cond{…}` 안의 한글은 글상자(text mode)라 정상이므로 먼저 지운다.
// 특히 `\fbox{(가)}` 는 증명 빈칸에 수백 번 쓰이는데 `\hbox` 라 한글이 멀쩡히 찍힌다 — 빼지 않으면 오탐이 48건 난다.
const stripSafe = (s) => s
  .replace(/\\(?:mbox|text|textrm|mathrm|cond|bogi|dmhint|exprbox|blank|fbox)\s*(\[[^\]]*\])?\{[^{}]*\}/g, " ")
  .replace(/\\(?:mbox|text|textrm|mathrm|cond|bogi|dmhint|exprbox|fbox)\s*\{(?:[^{}]|\{[^{}]*\})*\}/g, " ");

// $…$ 조각만 떼어 낸다($$ 는 이 저장소에서 쓰지 않는다).
const mathChunks = (s) => {
  const out = [];
  const re = /(?<!\\)\$([^$]*)(?<!\\)\$/g;
  for (const m of s.matchAll(re)) out.push({ text: m[1], at: m.index });
  return out;
};

const scanItem = (id, item) => {
  const hits = [];
  const walk = (value, where) => {
    if (typeof value === "string") {
      // 글상자를 **먼저** 지운다. `\mbox{$n$은 자연수}` 처럼 안에 `$` 가 중첩되면 나중에 지워서는
      // 조각 나누기가 어긋나 오탐이 난다(개념원리 공통수학2 142-e2 에서 실제로 났다).
      for (const chunk of mathChunks(stripSafe(value))) {
        if (HANGUL.test(chunk.text)) hits.push({ id, where, snippet: `$${chunk.text}$`.slice(0, 90) });
      }
    } else if (Array.isArray(value)) value.forEach((v, i) => walk(v, `${where}[${i}]`));
    else if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) walk(v, `${where}.${k}`);
  };
  walk(item, "");
  return hits;
};

const scanBank = (file, label) => {
  const bank = JSON.parse(fs.readFileSync(file, "utf8"));
  const items = Array.isArray(bank.items)
    ? Object.fromEntries(bank.items.map((i, n) => [i.id ?? String(n), i]))
    : (bank.items ?? {});
  const hits = [];
  for (const [id, item] of Object.entries(items)) hits.push(...scanItem(id, item));
  // 그룹의 공통 지시문도 본다.
  for (const unit of bank.units ?? []) for (const g of unit.groups ?? []) {
    for (const key of ["passage", "section"]) if (g[key]) hits.push(...scanItem(g.id ?? "그룹", { [key]: g[key] }));
  }
  console.log(`${label} · 문항 ${Object.keys(items).length} · 수식 안 한글 ${hits.length}건`);
  for (const h of hits.slice(0, 40)) console.log(`  ${h.id}${h.where}  ${h.snippet}`);
  if (hits.length > 40) console.log(`  … 외 ${hits.length - 40}건`);
  return hits.length;
};

let total = 0;
if (args.all) {
  for (const dir of fs.readdirSync("latex-bank").sort()) {
    const file = path.join("latex-bank", dir, "items.json");
    if (fs.existsSync(file)) total += scanBank(file, dir);
  }
} else if (args.work) {
  const dir = path.resolve(args.work);
  for (const f of fs.readdirSync(dir).filter((f) => /^out-.*\.json$/.test(f)).sort()) {
    total += scanBank(path.join(dir, f), f);
  }
} else if (args.bank) {
  total += scanBank(path.join(path.resolve(args.bank), "items.json"), args.bank);
} else {
  console.error("사용: --bank <책> | --work <배치 폴더> | --all");
  process.exit(2);
}
console.log(total ? `\n합계 ${total}건 — \\mbox{…} 로 감싸거나 수식 밖으로 뺀다.` : "\n수식 안 한글 없음");
process.exit(total ? 1 : 0);
