#!/usr/bin/env node
// 해설 크롭이 **그 문항의 풀이인지** 전수로 검사한다. 표본이 아니라 전 문항이다.
//
// 왜 표본으로는 안 되나: 밀림은 국소적이다. 어긋난 구간이 전체의 2%면(베이직쎈 확통 03단원 21문항이 그랬다)
// 30문항을 뽑아도 걸릴 확률이 절반이 안 된다. 실제로 단원별 표본 검사가 그 구간을 놓쳤다.
//
// 어떻게: 크롭을 OCR 해서 얻은 글자를, 담당 문항 i 뿐 아니라 **이웃 i-W..i+W 와 모두 대조**해 가장 잘 맞는
// 자리를 고른다. 이웃끼리의 상대 비교라 OCR 이 지저분해도 견디고, 어긋났으면 **몇 칸인지**까지 나온다.
//
// 점수: 문항 본문·보기에서 뽑은 숫자 토큰 가운데 그 책에서 드문 것일수록 크게 친다(idf). 1,2,3 같은 흔한
// 숫자는 거의 값이 없고 「1260」·「0.4772」 같은 것이 결정적이다. 토큰이 너무 적은 문항은 판정을 보류한다.
//
// 사용:
//   node scripts/latex-bank/check-answer-alignment.mjs --bank ssenb-alg [--window 3] [--jobs 8] [--limit 0]
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { parseArgs } from "../problem-bank/pdfTools.mjs";

const execFileAsync = promisify(execFile);
const args = parseArgs(process.argv.slice(2));
if (!args.bank) { console.error("사용: --bank <책> [--window 3] [--jobs 8] [--limit 0]"); process.exit(2); }
const bank = String(args.bank);
const WINDOW = Number(args.window) || 3;
const JOBS = Math.max(1, Math.min(16, Number(args.jobs) || Math.max(2, Math.floor(os.cpus().length / 2))));
const LIMIT = Number(args.limit) || 0;

const TESSERACT = [process.env.TESSERACT_PATH, "C:/Program Files/Tesseract-OCR/tesseract.exe", "tesseract"]
  .filter(Boolean).find((p) => p === "tesseract" || existsSync(p));
if (!TESSERACT) { console.error("tesseract 를 찾지 못했습니다."); process.exit(2); }

const itemsPath = path.join("latex-bank", bank, "items.json");
const pkgDir = path.join("output", "problem-bank", bank);
const ansPath = path.join(pkgDir, "manifest-answers.json");
for (const p of [itemsPath, ansPath]) if (!existsSync(p)) { console.error(`없음: ${p}`); process.exit(2); }

const itemsJson = JSON.parse(readFileSync(itemsPath, "utf8"));
const answers = JSON.parse(readFileSync(ansPath, "utf8"));

// 책 순서대로 문항 id 를 편다(단원 → 그룹 → 문항). 이 순서가 답지 풀이 순서다.
const order = [];
for (const unit of itemsJson.units ?? []) {
  for (const group of unit.groups ?? []) for (const id of group.items ?? []) order.push({ id, unit: unit.code, section: group.section ?? "" });
}
const indexOf = new Map(order.map((entry, i) => [entry.id, i]));

// ── 토큰 ────────────────────────────────────────────────────────────────────────
// 본문·보기에서 숫자만 뽑는다. 수식 기호는 OCR 이 못 읽어 쓸모가 없다.
const tokensOf = (item) => {
  const text = `${item?.body ?? ""} ${(item?.choices ?? []).join(" ")} ${item?.passage ?? ""}`;
  const out = new Set();
  for (const m of text.matchAll(/\d+(?:\.\d+)?/g)) {
    const t = m[0];
    if (t.length >= 2 || Number(t) >= 4) out.add(t); // 0~3 한 자리는 너무 흔해 뺀다
  }
  return out;
};
const itemTokens = new Map(order.map(({ id }) => [id, tokensOf(itemsJson.items?.[id])]));

// idf: 그 토큰을 가진 문항이 적을수록 크다.
const df = new Map();
for (const set of itemTokens.values()) for (const t of set) df.set(t, (df.get(t) ?? 0) + 1);
const N = order.length;
const idf = (t) => Math.log((N + 1) / ((df.get(t) ?? 0) + 1));

const scoreAgainst = (ocrTokens, id) => {
  const want = itemTokens.get(id);
  if (!want || want.size === 0) return { score: 0, weight: 0 };
  let hit = 0, total = 0;
  for (const t of want) { const w = idf(t); total += w; if (ocrTokens.has(t)) hit += w; }
  return { score: total > 0 ? hit / total : 0, weight: total };
};

// ── OCR ────────────────────────────────────────────────────────────────────────
const tmp = await mkdtemp(path.join(os.tmpdir(), "align-"));
const ocrOne = async (file, i) => {
  const out = path.join(tmp, `o${i}`);
  try {
    await execFileAsync(TESSERACT, [file, out, "--psm", "6", "-l", "eng"], { maxBuffer: 8 * 1024 * 1024 });
    return await readFile(`${out}.txt`, "utf8");
  } catch { return ""; }
};

const solutions = (answers.solutions ?? []).filter((s) => indexOf.has(s.number_label));
const targets = LIMIT ? solutions.slice(0, LIMIT) : solutions;
console.log(`${bank}: 문항 ${N} · 해설 ${solutions.length} · 검사 ${targets.length} · 일꾼 ${JOBS}`);

const results = new Array(targets.length);
let cursor = 0, done = 0;
await Promise.all(Array.from({ length: JOBS }, async () => {
  while (cursor < targets.length) {
    const i = cursor++;
    const s = targets[i];
    const file = path.join(pkgDir, s.file);
    const text = existsSync(file) ? await ocrOne(file, i) : "";
    const ocrTokens = new Set([...text.matchAll(/\d+(?:\.\d+)?/g)].map((m) => m[0]));
    const at = indexOf.get(s.number_label);
    const cands = [];
    for (let d = -WINDOW; d <= WINDOW; d += 1) {
      const j = at + d;
      if (j < 0 || j >= order.length) continue;
      // 같은 단원 안에서만 비교한다(단원 경계에서 배지가 01 로 되돌아가므로).
      if (order[j].unit !== order[at].unit) continue;
      const { score, weight } = scoreAgainst(ocrTokens, order[j].id);
      cands.push({ d, id: order[j].id, score, weight });
    }
    const self = cands.find((c) => c.d === 0) ?? { score: 0, weight: 0 };
    const best = cands.reduce((a, b) => (b.score > a.score ? b : a), cands[0] ?? { d: 0, score: 0 });
    const byD = {};
    for (const c of cands) byD[c.d] = c.score;
    results[i] = { id: s.number_label, at, unit: order[at].unit, section: order[at].section, self, best, byD, tokens: itemTokens.get(s.number_label)?.size ?? 0 };
    done += 1;
    if (done % 200 === 0) console.log(`  … ${done}/${targets.length}`);
  }
}));
await rm(tmp, { recursive: true, force: true });

// ── 판정 ────────────────────────────────────────────────────────────────────────
// 문항 하나씩 argmax 를 보면 잡음이 크다(정상인 책에서도 −3~+2 가 흩어져 나온다).
// 진짜 밀림은 **같은 칸수가 구간 내내 이어지는** 것이므로 구간별로 점수를 합산해 판정한다.
const found = results.filter(Boolean).sort((a, b) => a.at - b.at);
const offsets = [];
for (let d = -WINDOW; d <= WINDOW; d += 1) offsets.push(d);

const verdictFor = (rows, label) => {
  const usable = rows.filter((r) => r.tokens >= 2);
  if (usable.length < 4) return { label, n: rows.length, usable: usable.length, verdict: "표본 부족" };
  const sum = new Map(offsets.map((d) => [d, 0]));
  for (const r of usable) for (const d of offsets) sum.set(d, sum.get(d) + (r.byD?.[d] ?? 0));
  const ranked = [...sum].map(([d, s]) => ({ d, avg: s / usable.length })).sort((a, b) => b.avg - a.avg);
  const top = ranked[0], zero = ranked.find((x) => x.d === 0);
  const verdict = top.d === 0 ? "일치"
    : top.avg >= zero.avg + 0.12 ? `${top.d > 0 ? "+" : ""}${top.d}칸 밀림`
    : "일치(약함)";
  return { label, n: rows.length, usable: usable.length, best: top.d, bestAvg: +top.avg.toFixed(3), zeroAvg: +zero.avg.toFixed(3), verdict };
};

const byUnit = new Map();
for (const r of found) { if (!byUnit.has(r.unit)) byUnit.set(r.unit, []); byUnit.get(r.unit).push(r); }
console.log("\n=== 단원별 ===");
const unitVerdicts = [];
for (const [u, rows] of [...byUnit].sort()) {
  const v = verdictFor(rows, u);
  unitVerdicts.push(v);
  console.log(`  ${u}: ${String(v.verdict).padEnd(10)} (문항 ${v.n} · 판정가능 ${v.usable} · d0 ${v.zeroAvg ?? "-"} / 최적 d${v.best ?? "-"} ${v.bestAvg ?? "-"})`);
}

// 단원 안쪽에서 시작해 안쪽에서 끝나는 밀림은 구역 경계로 못 잡는다 — 구역은 문항이 4~6개뿐이라
// 정상인 책에서도 잡음으로 5곳쯤 뜬다(ssenb-cm1 실측). 대신 **판정가능 문항 WIN 개짜리 창을 미끄러뜨려**
// 표본을 충분히 채운다. 창마다 최적 d 를 구하고, 같은 d 가 이어지는 구간만 보고한다.
const WIN = Number(args.win) || 12;
const MARGIN2 = Number(args.margin) || 0.10;
const runs = [];
for (const [u, rowsAll] of [...byUnit].sort()) {
  const rows = rowsAll.filter((r) => r.tokens >= 2).sort((a, b) => a.at - b.at);
  if (rows.length < WIN) continue;
  const winBest = [];
  for (let i = 0; i + WIN <= rows.length; i += 1) {
    const slice = rows.slice(i, i + WIN);
    const sum = new Map(offsets.map((d) => [d, 0]));
    for (const r of slice) for (const d of offsets) sum.set(d, sum.get(d) + (r.byD?.[d] ?? 0));
    const ranked = [...sum].map(([d, s]) => ({ d, avg: s / WIN })).sort((a, b) => b.avg - a.avg);
    const zero = ranked.find((x) => x.d === 0);
    winBest.push(ranked[0].d !== 0 && ranked[0].avg >= zero.avg + MARGIN2 ? ranked[0].d : 0);
  }
  // 같은 d 가 이어지는 구간을 모은다.
  let i = 0;
  while (i < winBest.length) {
    const d = winBest[i];
    let k = i; while (k + 1 < winBest.length && winBest[k + 1] === d) k += 1;
    if (d !== 0) {
      const from = rows[i], to = rows[Math.min(k + WIN - 1, rows.length - 1)];
      runs.push({ unit: u, d, windows: k - i + 1, from: from.id, to: to.id, section: from.section });
    }
    i = k + 1;
  }
}
console.log(`\n=== 창 ${WIN}문항 미끄럼 검사 — 밀린 구간 ${runs.length}곳 ===`);
for (const r of runs) console.log(`  ${String(r.d > 0 ? "+" + r.d : r.d).padStart(2)}칸 · ${r.unit}단원 ${r.from} ~ ${r.to} (창 ${r.windows}개 연속)`);
if (!runs.length) console.log("  없음");
const badSections = runs;

const ok = found.filter((r) => r.tokens >= 2 && r.self.score >= 0.5).length;
const shifted = badSections;
const unsure = found.filter((r) => r.tokens < 2);
console.log(`\n문항 단위 참고: 자기 점수 0.5 이상 ${ok} · 토큰 부족 ${unsure.length}`);

await writeFile(path.join("latex-bank", bank, "정렬검사-결과.json"),
  `${JSON.stringify({ bank, checked: found.length, unitVerdicts, badSections, items: found.map((r)=>({id:r.id,unit:r.unit,section:r.section,tokens:r.tokens,self:+r.self.score.toFixed(3),byD:r.byD})) }, null, 1)}\n`, "utf8");
console.log(`\n→ latex-bank/${bank}/정렬검사-결과.json`);
