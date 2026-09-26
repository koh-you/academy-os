// 정독 에이전트 지시문 생성: latex-bank/agents/dokdu-prompt-bank.md 의 자리표시자를 채워 latex-bank/_tmp/dokdu/<bank>-<job>.md 에 쓴다.
// 사용: node latex-bank/tools/dokdu-prompt.mjs <bank> <job> [--resume]   → 지시문 파일 경로를 출력
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { REGISTRY, WORK_DIR, catalogNote } from "./dokdu-registry.mjs";
import { loadPlan, checkJob } from "./dokdu-lib.mjs";

const [bank, job, ...flags] = process.argv.slice(2);
if (!bank || !job || !REGISTRY[bank]) { console.error("사용: node latex-bank/tools/dokdu-prompt.mjs <bank> <job> [--resume]"); process.exit(1); }
const entry = REGISTRY[bank];
const plan = await loadPlan(bank);
const spec = plan.jobs.find((j) => j.job === job);
if (!spec) { console.error(`plan 에 없는 job: ${job}`); process.exit(1); }

let resumeNote = "출력 파일이 아직 없으면 처음부터 쓴다.";
const exists = await access(spec.out).then(() => true, () => false);
if (flags.includes("--resume") || exists) {
  const result = await checkJob(plan, spec);
  const kept = spec.ids.length - result.missing.length;
  resumeNote = `**재개 작업**: 출력 파일이 이미 있고 블록 ${result.blocks}개(범위 안 ${kept}문항)가 들어 있다. 먼저 \`node latex-bank/tools/dokdu-check.mjs ${bank} ${job}\` 로 상태를 보고, 파싱 오류가 난 블록만 고친 뒤 **없는 문항(${result.missing.length}개: ${result.missing.slice(0, 10).join(" ")}${result.missing.length > 10 ? " …" : ""})만 이어서** 쓴다. 이미 있는 블록은 다시 쓰지 않는다. 파일 끝의 「표본 판정 요약」「분류 이슈 목록」이 이미 있으면 새 블록을 그 앞에 넣고 요약을 갱신한다.`;
}

const template = await readFile(path.join("latex-bank", "agents", "dokdu-prompt-bank.md"), "utf8");
const filled = template
  .replaceAll("{BOOK}", entry.book).replaceAll("{BANK}", bank).replaceAll("{WORK_DIR}", WORK_DIR)
  .replaceAll("{UNIT_CODE}", spec.unit_code).replaceAll("{UNIT_TITLE}", spec.unit_title)
  .replaceAll("{PART}", String(spec.part)).replaceAll("{PARTS}", String(spec.parts)).replaceAll("{COUNT}", String(spec.count))
  .replaceAll("{JOB_FILE}", spec.job_file).replaceAll("{OUT_FILE}", spec.out).replaceAll("{JOB}", spec.job)
  .replaceAll("{ID_PREFIX}", entry.code).replaceAll("{RANGE}", spec.range)
  .replaceAll("{VENDOR_NOTE}", entry.vendor).replaceAll("{CATALOG_NOTE}", catalogNote(bank)).replaceAll("{RESUME_NOTE}", resumeNote);
await mkdir(path.join("latex-bank", "_tmp", "dokdu"), { recursive: true });
const outPath = path.join("latex-bank", "_tmp", "dokdu", `${bank}-${job}.md`);
await writeFile(outPath, filled, "utf8");
console.log(outPath);
