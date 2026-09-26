// 정독 작업 계획: 은행의 units/groups 를 단원별·구역 정렬 묶음(≤ MAX_PER_JOB 문항)으로 나눠
//   latex-bank/<bank>/정독/plan.json · latex-bank/<bank>/정독/jobs/<job>.json(문항 본문 포함) 을 쓴다.
// 사용: node latex-bank/tools/dokdu-plan.mjs <bank> [--force]   (plan.json 이 있으면 --force 없이는 덮어쓰지 않는다)
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { REGISTRY, MAX_PER_JOB } from "./dokdu-registry.mjs";

const [bank, ...flags] = process.argv.slice(2);
if (!bank || !REGISTRY[bank]) { console.error(`사용: node latex-bank/tools/dokdu-plan.mjs <bank> [--force] · 은행: ${Object.keys(REGISTRY).join(" ")}`); process.exit(1); }
const entry = REGISTRY[bank];
const dir = path.join("latex-bank", bank, "정독");
const planPath = path.join(dir, "plan.json");
const exists = await access(planPath).then(() => true, () => false);
if (exists && !flags.includes("--force")) { console.log(`이미 있음: ${planPath} (--force 로 다시 만듦)`); process.exit(0); }

const b = JSON.parse(await readFile(path.join("latex-bank", bank, "items.json"), "utf8"));
await mkdir(path.join(dir, "jobs"), { recursive: true });

const pick = (item) => {
  const out = {};
  for (const key of ["page", "body", "choices", "subs", "hint", "answer", "answer_source", "figure", "figure_extra", "figure_layout", "choices_layout", "level", "tag", "tags", "type", "source_tag"]) {
    if (item[key] !== undefined) out[key] = item[key];
  }
  return out;
};

const jobs = [];
for (const unit of b.units) {
  const groups = unit.groups.map((g) => ({ id: g.id, section: g.section, passage: g.passage ?? null, items: g.items }));
  const total = groups.reduce((s, g) => s + g.items.length, 0);
  if (total === 0) continue;
  const parts = Math.max(1, Math.ceil(total / MAX_PER_JOB));
  const target = Math.ceil(total / parts);
  // 구역 경계에서 자르되, 한 구역이 target 을 넘으면 그 안에서 자른다.
  const chunks = [];
  let cur = [], curN = 0;
  const push = (g, ids) => { cur.push({ ...g, items: ids }); curN += ids.length; };
  const flush = () => { if (curN) { chunks.push(cur); cur = []; curN = 0; } };
  for (const g of groups) {
    let ids = g.items;
    while (ids.length) {
      const room = target - curN;
      if (ids.length <= room) { push(g, ids); ids = []; }
      else if (curN === 0) { push(g, ids.slice(0, target)); ids = ids.slice(target); flush(); }
      else { flush(); }
    }
    if (curN >= target) flush();
  }
  flush();
  // 마지막 조각이 아주 작으면(≤ 8) 앞 조각에 합친다(문항 수 균형보다 파일 수 절약).
  if (chunks.length > 1 && chunks.at(-1).reduce((s, g) => s + g.items.length, 0) <= 8) {
    const last = chunks.pop();
    chunks.at(-1).push(...last);
  }
  chunks.forEach((chunk, index) => {
    const ids = chunk.flatMap((g) => g.items);
    const pages = ids.map((id) => b.items[id]?.page).filter((p) => Number.isInteger(p));
    const part = index + 1;
    const suffix = chunks.length > 1 ? `-p${part}` : "";
    const job = `${unit.code}${suffix}`;
    const range = `${Math.min(...pages)}~${Math.max(...pages)}쪽 · ${ids[0]}~${ids.at(-1)}`;
    jobs.push({
      job, unit_code: unit.code, unit_title: unit.title, part, parts: chunks.length, unit_total: total, count: ids.length, range,
      sections: chunk.map((g) => ({ id: g.id, section: g.section, count: g.items.length })),
      ids,
      job_file: path.posix.join("latex-bank", bank, "정독", "jobs", `${job}.json`),
      out: path.posix.join("latex-bank", bank, "정독", `mechanism-데이터-${entry.code}-${job}.md`),
    });
    const jobData = {
      bank, book: entry.book, code: entry.code, unit_code: unit.code, unit_title: unit.title, part, parts: chunks.length, unit_total: total, count: ids.length, range,
      groups: chunk.map((g) => ({ id: g.id, section: g.section, passage: g.passage, items: g.items })),
      items: Object.fromEntries(ids.map((id) => [id, pick(b.items[id])])),
    };
    writeFile(path.join(dir, "jobs", `${job}.json`), JSON.stringify(jobData, null, 1), "utf8");
  });
}
await writeFile(planPath, JSON.stringify({ bank, book: entry.book, code: entry.code, generated: new Date().toISOString(), max_per_job: MAX_PER_JOB, total_items: Object.keys(b.items).length, jobs }, null, 1), "utf8");
console.log(`${bank}: 문항 ${Object.keys(b.items).length} · 단원 ${b.units.length} → 작업 ${jobs.length}개(≤${MAX_PER_JOB}) · ${planPath}`);
for (const j of jobs) console.log(`  ${j.job.padEnd(8)} ${String(j.count).padStart(3)}문항  ${j.unit_title} (${j.part}/${j.parts}) · ${j.range}`);
