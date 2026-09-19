import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const defaultFileListPath = resolve(scriptDirectory, "production-test-file-list.json");

function runTestFile(file) {
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
      complete({ file, ok: false, error, stdout, stderr });
    });
    child.on("close", (code, signal) => {
      complete({ file, ok: code === 0, code, signal, stdout, stderr });
    });
  });
}

function combinedOutput(result) {
  return [...result.stdout, ...result.stderr].map((chunk) => chunk.toString("utf8")).join("");
}

/**
 * Runs every script in `fileListPath` (a JSON array of paths relative to the
 * repo root) serially, stopping at the first failure — matching the fail-fast
 * semantics of the `&&`-joined npm chain this replaces. Each file still runs
 * as its own `node` process (so one script's crash/global state can't leak
 * into the next), but without the extra `npm run` process per step.
 *
 * @param {string} [fileListPath]
 * @returns {Promise<{ ok: boolean, exitCode: number, summary: string, failureOutput?: string }>}
 */
export async function runFlatTestList(fileListPath = defaultFileListPath) {
  const files = JSON.parse(readFileSync(fileListPath, "utf8"));
  if (!Array.isArray(files) || files.length === 0) {
    return { ok: false, exitCode: 1, summary: `${fileListPath}이 비어 있거나 잘못됐습니다.` };
  }

  const startedAt = performance.now();
  const allOutput = [];
  // 로컬 전용 우회: 공유 clone 의 node_modules 에 패키지가 빠져 부팅 자체가 안 되는 검사
  // (예: @supabase/supabase-js 없이 test-api-server-boot)를 건너뛰고 나머지를 본다. CI 는 쓰지
  // 않는다. 건너뛴 파일은 요약에 그대로 찍혀 "전부 통과" 로 읽히지 않는다.
  const skipped = new Set(String(process.env.ACADEMY_SKIP_TEST_FILES || "").split(",").map((entry) => entry.trim()).filter(Boolean));
  const skippedFiles = [];

  for (const file of files) {
    if (skipped.has(file)) {
      skippedFiles.push(file);
      continue;
    }
    const result = await runTestFile(file);
    const output = combinedOutput(result);
    allOutput.push(output);

    if (!result.ok) {
      const elapsedSeconds = ((performance.now() - startedAt) / 1000).toFixed(1);
      const header = `production tests failed at ${file}${result.signal ? ` (signal ${result.signal})` : ` (exit ${result.code ?? "error"})`} · ${elapsedSeconds}s`;
      const lines = output.split(/\r?\n/);
      const important = lines.filter((line) => /\b(fail(?:ed|ure)?|error|not ok)\b/i.test(line));
      const failureOutput = [header, result.error?.stack || result.error?.message, ...important.slice(-80), ...lines.slice(-160)]
        .filter(Boolean)
        .join("\n");
      return { ok: false, exitCode: result.code || 1, summary: header, failureOutput };
    }
  }

  const elapsedSeconds = ((performance.now() - startedAt) / 1000).toFixed(1);
  const combined = allOutput.join("\n");
  const scenarioMatch = combined.match(/"total"\s*:\s*(\d+)/g)?.at(-1)?.match(/\d+/)?.[0];
  return {
    ok: true,
    exitCode: 0,
    summary: `production tests passed · ${files.length - skippedFiles.length}/${files.length} scripts${scenarioMatch ? ` · scenario ${scenarioMatch}/${scenarioMatch}` : ""} · ${elapsedSeconds}s${skippedFiles.length ? ` · 건너뜀(ACADEMY_SKIP_TEST_FILES): ${skippedFiles.join(", ")}` : ""}`
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await runFlatTestList();
  if (result.ok) {
    console.log(result.summary);
  } else {
    console.error(result.failureOutput || result.summary);
  }
  process.exitCode = result.exitCode;
}
