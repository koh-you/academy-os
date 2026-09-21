// 재크롭 결과(임시 bank)의 crops.json 을 기존 bank 와 비교. 사용: node compare-crops.mjs <bank> [--apply]
// 같은 문항의 크롭은 상자 겹침(IoU)으로 옛 이름 ↔ 새 이름을 짝지어(다중 그림의 -2·-3 순서가 바뀌어도) 옛 이름으로 덮어쓴다.
// 짝이 없는 새 크롭은 새 이름으로 추가 · 짝이 없는 옛 크롭은 그대로 둔다(전사본이 참조할 수 있으므로).
import { readFile, copyFile, writeFile } from "node:fs/promises";
import path from "node:path";
const [bank, flag, skipArg] = process.argv.slice(2);
// --skip 문항 id(쉼표): 옛 크롭을 그대로 두는 문항(전사본이 합침 크롭을 쓰는 보기 그래프 등)
const skip = new Set((skipArg ?? "").split(",").filter(Boolean));
const oldDir = path.join("latex-bank", bank, "figures"), newDir = path.join("latex-bank", "_tmp", `recrop-${bank}`, "figures");
const oldCrops = JSON.parse(await readFile(path.join(oldDir, "crops.json"), "utf8"));
const newCrops = JSON.parse(await readFile(path.join(newDir, "crops.json"), "utf8"));
const items = JSON.parse(await readFile(path.join("latex-bank", bank, "items.json"), "utf8")).items;
const used = new Set();
for (const item of Object.values(items)) {
  const refs = [item.figure, ...(item.figure_parts ?? []), ...(item.figure_extra ?? [])].filter(Boolean);
  for (const ref of refs) if (typeof ref === "string" && ref.startsWith("crop:")) used.add(ref.slice(5));
  for (const x of (item.body ?? "").matchAll(/figures\/(fig-[^}]+\.png)/g)) used.add(x[1]);
}
const itemOf = (name) => (name.match(/^fig-(g?\d+-e?\d+|g\d+-\d+)(?:-(\d+))?\.png$/) ?? [, name])[1];
const area = (b) => Math.max(0, b[2] - b[0]) * Math.max(0, b[3] - b[1]);
const iou = (a, b) => { const i = [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.min(a[3], b[3])]; const ai = area(i); return ai / (area(a) + area(b) - ai); };
// 문항별로 옛 ↔ 새 크롭 짝짓기(IoU 큰 순 · 0.25 이상)
const byItemOld = {}, byItemNew = {};
for (const n of Object.keys(oldCrops)) (byItemOld[itemOf(n)] ??= []).push(n);
for (const n of Object.keys(newCrops)) (byItemNew[itemOf(n)] ??= []).push(n);
const pairs = [], onlyOld = [], onlyNew = [];
for (const id of new Set([...Object.keys(byItemOld), ...Object.keys(byItemNew)])) {
  const olds = byItemOld[id] ?? [], news = byItemNew[id] ?? [];
  const cand = [];
  for (const o of olds) for (const n of news) if (oldCrops[o].pdf_page === newCrops[n].pdf_page) cand.push({ o, n, s: iou(oldCrops[o].bbox_pt, newCrops[n].bbox_pt) });
  cand.sort((a, b) => b.s - a.s);
  const doneO = new Set(), doneN = new Set();
  for (const c of cand) { if (c.s < 0.25 || doneO.has(c.o) || doneN.has(c.n)) continue; pairs.push(c); doneO.add(c.o); doneN.add(c.n); }
  for (const o of olds) if (!doneO.has(o)) onlyOld.push(o);
  for (const n of news) if (!doneN.has(n)) onlyNew.push(n);
}
const same = [], changed = [];
for (const p of pairs) {
  const c = oldCrops[p.o], n = newCrops[p.n];
  const d = c.bbox_pt.map((v, i) => Math.abs(v - n.bbox_pt[i]));
  if (Math.max(...d) < 0.6 && p.o === p.n) same.push(p.o); else changed.push({ ...p, old: c.bbox_pt, new: n.bbox_pt, used: used.has(p.o) });
}
console.log(`같음 ${same.length} · 바뀜 ${changed.length} · 옛 이름만 ${onlyOld.length} · 새 이름만 ${onlyNew.length}`);
for (const c of changed) {
  const grow = [c.old[0] - c.new[0], c.old[1] - c.new[1], c.new[2] - c.old[2], c.new[3] - c.old[3]].map((v) => v.toFixed(0));
  console.log(`  ${c.used ? "★" : " "} ${c.o}${c.n !== c.o ? ` ← ${c.n}` : ""}: 좌${grow[0]} 위${grow[1]} 우${grow[2]} 아래${grow[3]}`);
}
if (onlyOld.length) console.log("옛 이름만(유지):", onlyOld.map((n) => (used.has(n) ? "★" : "") + n).join(" "));
if (onlyNew.length) console.log("새 이름만(추가):", onlyNew.join(" "));
if (flag === "--apply") {
  let count = 0;
  const merged = { ...oldCrops };
  for (const c of changed) { if (skip.has(itemOf(c.o))) continue; await copyFile(path.join(newDir, c.n), path.join(oldDir, c.o)); merged[c.o] = newCrops[c.n]; count += 1; }
  // 짝 없는 새 크롭: 옛 이름과 겹치지 않는 번호로 추가
  for (const n of onlyNew) {
    const id = itemOf(n);
    if (skip.has(id)) continue;
    let target = n, k = 2;
    while (merged[target] && !onlyOld.includes(target)) { target = `fig-${id}-${k}.png`; k += 1; }
    if (merged[target] && !onlyOld.includes(target)) continue;
    if (merged[target]) console.log(`  덮어씀(옛 크롭 모양 다름) ${target}`);
    await copyFile(path.join(newDir, n), path.join(oldDir, target)); merged[target] = newCrops[n]; count += 1;
    if (target !== n) console.log(`  추가 ${n} → ${target}`);
  }
  await writeFile(path.join(oldDir, "crops.json"), JSON.stringify(merged, null, 1), "utf8");
  console.log(`복사 ${count}`);
}
