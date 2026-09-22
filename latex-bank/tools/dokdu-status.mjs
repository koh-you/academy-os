// 정독 진행 상태: plan.json 이 있는 은행의 작업마다 done(검증 통과) / partial(파일 있음 · 블록 n/N) / missing 을 판정한다.
// 사용: node latex-bank/tools/dokdu-status.mjs [bank …] [--pending N] [--quiet]
//   출력: 은행별 표 + 합계. 대기 작업 목록은 latex-bank/_tmp/dokdu/pending.json 에 쓴다(순서 = ORDER · 단원 순).
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { ORDER } from "./dokdu-registry.mjs";
import { loadPlan, checkJob } from "./dokdu-lib.mjs";

const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const pendingIndex = args.indexOf("--pending");
const pendingN = pendingIndex >= 0 ? Number(args[pendingIndex + 1]) : 40;
const banks = args.filter((a) => !a.startsWith("--") && !(pendingIndex >= 0 && a === args[pendingIndex + 1]));
const targets = banks.length ? banks : ORDER;

const pending = [];
const totals = { jobs: 0, done: 0, partial: 0, missing: 0, items: 0, items_done: 0, items_partial: 0 };
for (const bank of targets) {
  const planPath = path.join("latex-bank", bank, "정독", "plan.json");
  if (!(await access(planPath).then(() => true, () => false))) { if (!quiet) console.log(`${bank}: plan 없음`); continue; }
  const plan = await loadPlan(bank);
  const rows = [];
  let done = 0, partial = 0, missing = 0, itemsDone = 0, itemsPartial = 0;
  for (const spec of plan.jobs) {
    const exists = await access(spec.out).then(() => true, () => false);
    let state = "missing", note = "";
    if (exists) {
      const result = await checkJob(plan, spec);
      if (!result.errors.length) { state = "done"; done += 1; itemsDone += spec.count; note = `★${JSON.stringify(result.stars)}`; }
      else { state = "partial"; partial += 1; itemsPartial += result.blocks; note = `${result.blocks}/${spec.count} · ${result.errors[0]}`; }
      if (state !== "done") pending.push({ bank, job: spec.job, state, blocks: result.blocks, count: spec.count, errors: result.errors.slice(0, 3) });
    } else { missing += 1; pending.push({ bank, job: spec.job, state, blocks: 0, count: spec.count, errors: [] }); }
    rows.push(`  ${spec.job.padEnd(8)} ${state.padEnd(7)} ${String(spec.count).padStart(3)}문항 ${note}`);
  }
  totals.jobs += plan.jobs.length; totals.done += done; totals.partial += partial; totals.missing += missing;
  totals.items += plan.total_items; totals.items_done += itemsDone; totals.items_partial += itemsPartial;
  console.log(`${bank} (${plan.book}): 작업 ${plan.jobs.length} · done ${done} · partial ${partial} · missing ${missing} · 문항 ${itemsDone}/${plan.total_items}`);
  if (!quiet) for (const row of rows) console.log(row);
}
console.log(`합계: 작업 ${totals.done}/${totals.jobs} 완료 (partial ${totals.partial} · missing ${totals.missing}) · 문항 ${totals.items_done}/${totals.items} (+진행 중 블록 ${totals.items_partial})`);
await mkdir(path.join("latex-bank", "_tmp", "dokdu"), { recursive: true });
await writeFile(path.join("latex-bank", "_tmp", "dokdu", "pending.json"), JSON.stringify(pending.slice(0, pendingN), null, 1), "utf8");
console.log(`대기 ${pending.length}개 → latex-bank/_tmp/dokdu/pending.json (앞 ${Math.min(pendingN, pending.length)}개)`);
