// 검수 id 목록 생성: latex-bank/<bank>/검수/<date>/ids-NN.txt (한 줄 「id<TAB>qa/pNNN.jpg」 · 쪽·번호 순 · N개씩)
// 사용: node make-review-ids.mjs <bank> <date> [per=68]
//
// 쪽 이미지 qa/pNNN.jpg · pages/pNNN.jpg 는 **pdf 쪽** 번호로 저장된다. 문항 id 의 앞자리는 **인쇄 쪽**이다.
// 둘은 같을 때가 많지만 스캔에 앞 간지가 빠지면 어긋난다(베이직쎈 확통: 인쇄 8쪽 = pdf 3쪽 · 차이 5).
// 그대로 인쇄 쪽으로 경로를 적으면 검수자가 엉뚱한 쪽을 원본이라 믿고 대조한다(2026-09-28 확통 배치 01 이 발견).
// 그래서 패키지 manifest.json 의 printed_page ↔ page 로 대응을 실측해 pdf 쪽으로 적는다.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
const [bank, date, perArg] = process.argv.slice(2);
const per = Number(perArg) || 68;
const items = JSON.parse(await readFile(path.join("latex-bank", bank, "items.json"), "utf8")).items;

// 인쇄쪽 → pdf쪽 표를 manifest 에서 만든다. 없으면 같다고 본다.
const pdfPageOf = new Map();
try {
  const manifest = JSON.parse(await readFile(path.join("output", "problem-bank", bank, "manifest.json"), "utf8"));
  for (const entry of manifest.items ?? manifest.problems ?? []) {
    const printed = Number(entry.printed_page), pdf = Number(entry.page ?? entry.pdf_page);
    if (Number.isFinite(printed) && Number.isFinite(pdf)) pdfPageOf.set(printed, pdf);
  }
} catch {}
const gaps = [...new Set([...pdfPageOf].map(([printed, pdf]) => printed - pdf))].sort((a, b) => a - b);
console.log(`인쇄쪽 − pdf쪽 = ${gaps.join(" / ") || "0 (manifest 없음)"}`);

const key = (id) => { const [p, n] = id.split("-"); return [Number(p), n.startsWith("e") ? -1000 + Number(n.slice(1)) : Number(n)]; };
const ids = Object.keys(items).sort((a, b) => { const [pa, na] = key(a), [pb, nb] = key(b); return pa - pb || na - nb; });
const dir = path.join("latex-bank", bank, "검수", date);
await mkdir(dir, { recursive: true });
const unknown = new Set();
let n = 0;
for (let i = 0; i < ids.length; i += per) {
  n += 1;
  const lines = ids.slice(i, i + per).map((id) => {
    const printed = Number(id.split("-")[0]);
    let pdf = pdfPageOf.get(printed);
    // manifest 가 그 쪽을 안 담았으면(검출기가 통째로 놓친 쪽) 가장 가까운 쪽의 차이를 빌린다.
    for (let d = 1; d <= 6 && pdf === undefined; d += 1) {
      const lo = pdfPageOf.get(printed - d), hi = pdfPageOf.get(printed + d);
      if (lo !== undefined) pdf = lo + d;
      else if (hi !== undefined) pdf = hi - d;
    }
    if (pdf === undefined) { unknown.add(printed); pdf = printed; }
    return `${id}\tqa/p${String(pdf).padStart(3, "0")}.jpg`;
  });
  await writeFile(path.join(dir, `ids-${String(n).padStart(2, "0")}.txt`), lines.join("\n") + "\n", "utf8");
}
console.log(`${bank}: ${ids.length}문항 → ${n}개 목록(${per}씩) · ${dir}`);
if (unknown.size) console.log(`  [확인 필요] manifest 에 없어 인쇄쪽 그대로 쓴 쪽: ${[...unknown].sort((a, b) => a - b).join(" ")}`);
