import { spawnSync } from "node:child_process";

const result = spawnSync(process.execPath, ["scripts/scenario-tests-production.cjs"], {
  cwd: process.cwd(),
  encoding: "utf8",
  env: { ...process.env, TZ: process.env.TZ || "Asia/Seoul" },
  maxBuffer: 20 * 1024 * 1024
});

if (result.error) throw result.error;

let report;
try {
  report = JSON.parse(result.stdout);
} catch {
  process.stderr.write(result.stderr || result.stdout);
  throw new Error("정적 시나리오 결과 JSON을 읽지 못했습니다.");
}

const failedChecks = Array.isArray(report.failed) ? report.failed : [];
const totalChecks = Array.isArray(report.checks) ? report.checks.length : Number(report.total || 0);
console.log(`scenario checks: ${totalChecks - failedChecks.length}/${totalChecks} passed`);

if (result.status !== 0 || report.ok !== true || failedChecks.length > 0) {
  failedChecks.slice(0, 20).forEach((check) => console.error(`- ${check.name}: ${check.detail || "failed"}`));
  process.exit(result.status || 1);
}
