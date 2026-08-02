import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const children = [];
let stopping = false;
const safeApiPort = process.env.ACADEMY_SAFE_API_PORT || "8787";
const safeEnvironment = {
  ...process.env,
  VITE_API_BASE_URL: `http://127.0.0.1:${safeApiPort}`
};

function start(label, args) {
  const child = spawn(process.execPath, args, {
    cwd: root,
    env: safeEnvironment,
    stdio: "inherit"
  });
  children.push(child);
  child.on("exit", (code, signal) => {
    if (stopping) return;
    console.error(`${label} stopped unexpectedly (${signal || code || 0}).`);
    stop(code || 1);
  });
}

function stop(exitCode = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) {
    if (!child.killed) child.kill();
  }
  setTimeout(() => process.exit(exitCode), 100).unref();
}

process.on("SIGINT", () => stop(0));
process.on("SIGTERM", () => stop(0));

console.log("Academy OS 안전 미리보기를 시작합니다.");
console.log("가상 API만 사용하며 운영 Supabase·Storage·Solapi에는 연결하지 않습니다.");
start("safe api", [path.join(root, "scripts", "safe-local-api.mjs")]);
start("vite", [path.join(root, "node_modules", "vite", "bin", "vite.js"), "--host", "127.0.0.1", "--mode", "safe"]);
