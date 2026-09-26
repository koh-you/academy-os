// 검수 id 목록 생성: latex-bank/<bank>/검수/<date>/ids-NN.txt (한 줄 「id<TAB>qa/pNNN.jpg」 · 쪽·번호 순 · N개씩)
// 사용: node make-review-ids.mjs <bank> <date> [per=68]
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
const [bank, date, perArg] = process.argv.slice(2);
const per = Number(perArg) || 68;
const items = JSON.parse(await readFile(path.join("latex-bank", bank, "items.json"), "utf8")).items;
const key = (id) => { const [p, n] = id.split("-"); return [Number(p), n.startsWith("e") ? -1000 + Number(n.slice(1)) : Number(n)]; };
const ids = Object.keys(items).sort((a, b) => { const [pa, na] = key(a), [pb, nb] = key(b); return pa - pb || na - nb; });
const dir = path.join("latex-bank", bank, "검수", date);
await mkdir(dir, { recursive: true });
let n = 0;
for (let i = 0; i < ids.length; i += per) {
  n += 1;
  const lines = ids.slice(i, i + per).map((id) => `${id}\tqa/p${id.split("-")[0].padStart(3, "0")}.jpg`);
  await writeFile(path.join(dir, `ids-${String(n).padStart(2, "0")}.txt`), lines.join("\n") + "\n", "utf8");
}
console.log(`${bank}: ${ids.length}문항 → ${n}개 목록(${per}씩) · ${dir}`);
