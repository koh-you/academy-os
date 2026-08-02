import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");

export const domainTestGroups = Object.freeze({
  lesson: Object.freeze([
    "scripts/test-lesson-calendar-model.mjs",
    "scripts/test-lesson-calendar-keyboard-model.mjs",
    "scripts/test-lesson-modal-draft-model.mjs",
    "scripts/test-lesson-modal-draft-transitions.mjs",
    "scripts/test-lesson-modal-initial-draft.mjs",
    "scripts/test-lesson-modal-save-state.mjs",
    "scripts/test-lesson-modal-student-model.mjs",
    "scripts/test-lesson-journal-draft-controller.mjs",
    "scripts/test-lesson-journal-effect-adapter.mjs",
    "scripts/test-lesson-nested-panels-boundary.mjs"
  ]),
  supplement: Object.freeze([
    "scripts/test-supplement-job-builders.mjs",
    "scripts/test-supplement-cancellation.mjs",
    "scripts/test-supplement-task-content-save-controller.mjs",
    "scripts/test-supplement-notification-control-controller.mjs",
    "scripts/test-supplement-center-selection-model.mjs",
    "scripts/test-supplement-schedule-plan.mjs",
    "scripts/test-supplement-effect-adapter.mjs"
  ]),
  student: Object.freeze([
    "scripts/test-tally-student-merge.mjs",
    "scripts/test-student-handover-pdf.mjs",
    "scripts/test-student-withdrawal-boundary.mjs",
    "scripts/test-parent-response-context.mjs",
    "scripts/test-student-list-sort.mjs",
    "scripts/test-student-effect-adapter.mjs",
    "scripts/test-student-profile-boundary.mjs",
    "scripts/test-student-lifecycle-overlays.mjs",
    "scripts/test-student-withdrawn-list-boundary.mjs"
  ]),
  notification: Object.freeze([
    "scripts/test-notification-center-model.mjs",
    "scripts/test-notification-notice-actions.mjs",
    "scripts/test-notification-notice-api.mjs",
    "scripts/test-notification-notice-builders.mjs",
    "scripts/test-notification-refresh-reconcile-controller.mjs",
    "scripts/test-notification-effect-adapter.mjs",
    "scripts/test-notification-notice-controller-boundary.mjs"
  ]),
  settlement: Object.freeze([
    "scripts/test-monthly-settlement.mjs",
    "scripts/test-monthly-settlement-controller.mjs",
    "scripts/test-monthly-settlement-view-boundary.mjs",
    "scripts/test-monthly-regular-lesson-open.mjs",
    "scripts/test-student-withdrawal-boundary.mjs",
    "scripts/test-special-lecture-enrollment-save.mjs",
    "scripts/test-special-lecture-plan-sync.mjs"
  ])
});

const unsafeParallelTestPattern = /(?:browser|smoke|server|e2e)/i;
const defaultConcurrency = 4;

export function validateDomainTestGroups() {
  const errors = [];

  for (const [domain, files] of Object.entries(domainTestGroups)) {
    if (!Array.isArray(files) || files.length === 0) {
      errors.push(`${domain}: 테스트 파일이 없습니다.`);
      continue;
    }

    const duplicates = files.filter((file, index) => files.indexOf(file) !== index);
    if (duplicates.length > 0) {
      errors.push(`${domain}: 중복 테스트 ${[...new Set(duplicates)].join(", ")}`);
    }

    for (const file of files) {
      if (!existsSync(resolve(repositoryRoot, file))) {
        errors.push(`${domain}: 파일 없음 ${file}`);
      }
      if (unsafeParallelTestPattern.test(file)) {
        errors.push(`${domain}: 병렬 실행 금지 대상 ${file}`);
      }
    }
  }

  return errors;
}

function runTestFile(file) {
  const startedAt = performance.now();

  return new Promise((complete) => {
    const child = spawn(process.execPath, [resolve(repositoryRoot, file)], {
      cwd: repositoryRoot,
      env: { ...process.env, TZ: process.env.TZ || "Asia/Seoul" },
      stdio: ["ignore", "pipe", "pipe"]
    });
    const stdout = [];
    const stderr = [];

    child.stdout.on("data", (chunk) => stdout.push(chunk));
    child.stderr.on("data", (chunk) => stderr.push(chunk));
    child.on("error", (error) => {
      complete({ file, ok: false, error, stdout, stderr, elapsedMs: performance.now() - startedAt });
    });
    child.on("close", (code, signal) => {
      complete({
        file,
        ok: code === 0,
        code,
        signal,
        stdout,
        stderr,
        elapsedMs: performance.now() - startedAt
      });
    });
  });
}

async function runWithConcurrency(files, concurrency) {
  const results = new Array(files.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < files.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await runTestFile(files[index]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, files.length) }, () => worker()));
  return results;
}

function printFailure(result) {
  const output = [...result.stdout, ...result.stderr]
    .map((chunk) => chunk.toString("utf8"))
    .join("")
    .trim();
  console.error(`\nFAILED ${result.file}${result.signal ? ` (signal ${result.signal})` : ` (exit ${result.code ?? "error"})`}`);
  if (result.error) console.error(result.error.stack || result.error.message);
  if (output) console.error(output);
}

async function main() {
  const requested = process.argv.slice(2);
  const validationErrors = validateDomainTestGroups();

  if (validationErrors.length > 0) {
    validationErrors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
    return;
  }

  if (requested.includes("--self-test")) {
    console.log(`domain runner config passed · ${Object.keys(domainTestGroups).length} domains`);
    return;
  }

  if (requested.includes("--list")) {
    for (const [domain, files] of Object.entries(domainTestGroups)) {
      console.log(`${domain}: ${files.length} fixtures`);
    }
    return;
  }

  const domains = requested.length === 0 || requested.includes("all")
    ? Object.keys(domainTestGroups)
    : requested;
  const unknownDomains = domains.filter((domain) => !domainTestGroups[domain]);

  if (unknownDomains.length > 0) {
    console.error(`unknown domain: ${unknownDomains.join(", ")}`);
    console.error(`available domains: ${Object.keys(domainTestGroups).join(", ")}`);
    process.exitCode = 1;
    return;
  }

  const files = [...new Set(domains.flatMap((domain) => domainTestGroups[domain]))];
  const startedAt = performance.now();
  const results = await runWithConcurrency(files, defaultConcurrency);
  const failures = results.filter((result) => !result.ok);
  const elapsedSeconds = ((performance.now() - startedAt) / 1000).toFixed(2);

  if (failures.length > 0) {
    failures.forEach(printFailure);
    console.error(`\ndomain tests failed · ${domains.join("+")} · ${files.length - failures.length}/${files.length} fixtures · ${elapsedSeconds}s`);
    process.exitCode = 1;
    return;
  }

  console.log(`domain tests passed · ${domains.join("+")} · ${files.length}/${files.length} fixtures · ${elapsedSeconds}s`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
