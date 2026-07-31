import { spawnSync } from "node:child_process";

const startedAt = Date.now();
const npmExecPath = process.env.npm_execpath;
const command = npmExecPath ? process.execPath : process.platform === "win32" ? "npm.cmd" : "npm";
const args = npmExecPath
  ? [npmExecPath, "run", "test:production:verbose"]
  : ["run", "test:production:verbose"];
const result = spawnSync(command, args, {
  cwd: process.cwd(),
  encoding: "utf8",
  env: process.env,
  maxBuffer: 64 * 1024 * 1024
});

const output = `${result.stdout || ""}\n${result.stderr || ""}`.trim();
if (result.status === 0) {
  const elapsedSeconds = ((Date.now() - startedAt) / 1000).toFixed(1);
  const scenarioMatch = output.match(/"total"\s*:\s*(\d+)/g)?.at(-1)?.match(/\d+/)?.[0];
  console.log(`production tests passed${scenarioMatch ? ` · scenario ${scenarioMatch}/${scenarioMatch}` : ""} · ${elapsedSeconds}s`);
  process.exit(0);
}

const lines = output.split(/\r?\n/);
const important = lines.filter((line) => /\b(fail(?:ed|ure)?|error|not ok)\b/i.test(line));
console.error("production tests failed");
console.error([...important.slice(-80), ...lines.slice(-160)].join("\n"));
process.exit(result.status || 1);
