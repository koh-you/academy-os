// 정독 출력 검증 CLI. 사용: node latex-bank/tools/dokdu-check.mjs <bank> <job> [--json]
//   통과하면 「ok …」(exit 0), 아니면 「FAIL …」 + 오류 목록(exit 1).
import { loadPlan, checkJob, formatResult } from "./dokdu-lib.mjs";

const [bank, job, ...flags] = process.argv.slice(2);
if (!bank || !job) { console.error("사용: node latex-bank/tools/dokdu-check.mjs <bank> <job> [--json]"); process.exit(1); }
const plan = await loadPlan(bank);
const spec = plan.jobs.find((j) => j.job === job);
if (!spec) { console.error(`plan 에 없는 job: ${job}`); process.exit(1); }
const result = await checkJob(plan, spec);
console.log(flags.includes("--json") ? JSON.stringify(result) : formatResult(result));
process.exit(result.errors.length ? 1 : 0);
