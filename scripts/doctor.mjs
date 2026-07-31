import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

function runGit(args, cwd = process.cwd()) {
  try {
    return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch {
    return "";
  }
}

function addResult(results, level, label, detail) {
  results.push({ level, label, detail });
}

const results = [];
const root = runGit(["rev-parse", "--show-toplevel"]);
if (!root) {
  console.error("[FAIL] Git 저장소 안에서 실행해야 합니다.");
  process.exit(1);
}

const nodeMajor = Number(process.versions.node.split(".")[0]);
addResult(results, nodeMajor === 24 ? "OK" : nodeMajor >= 20 ? "WARN" : "FAIL", "Node.js", process.versions.node);
addResult(results, "OK", "저장소", root);
addResult(results, runGit(["status", "--porcelain"]) ? "WARN" : "OK", "작업트리", runGit(["status", "--porcelain"]) ? "변경사항 있음" : "clean");

const branch = runGit(["branch", "--show-current"]);
const remote = runGit(["remote", "get-url", "origin"]);
addResult(results, branch === "main" ? "OK" : "WARN", "브랜치", branch || "detached");
addResult(results, remote.includes("koh-you/academy-os") ? "OK" : "WARN", "GitHub 원격", remote || "없음");
const upstream = runGit(["rev-parse", "--abbrev-ref", "@{upstream}"]);
const [ahead = "?", behind = "?"] = runGit(["rev-list", "--left-right", "--count", "HEAD...@{upstream}"]).split(/\s+/);
addResult(
  results,
  upstream && ahead === "0" && behind === "0" ? "OK" : "WARN",
  "Git 동기화",
  upstream ? `${upstream} 기준 ${ahead} ahead / ${behind} behind` : "upstream 없음"
);

if (process.platform === "win32") {
  const recommendedRoot = path.normalize("C:\\Dev\\academy-os");
  addResult(
    results,
    path.normalize(root).toLowerCase() === recommendedRoot.toLowerCase() ? "OK" : "WARN",
    "Windows 권장 경로",
    path.normalize(root).toLowerCase() === recommendedRoot.toLowerCase() ? recommendedRoot : `${root} (권장: ${recommendedRoot})`
  );
  const staleCopy = "C:\\Users\\PC\\Documents\\academy os";
  if (fs.existsSync(path.join(staleCopy, ".git")) && path.normalize(root).toLowerCase() !== path.normalize(staleCopy).toLowerCase()) {
    addResult(results, "INFO", "자동 작업 전용 clone", `${staleCopy} — 오전 9시 자동 작업만 사용, 사람 작업 금지`);
  }
}

addResult(results, fs.existsSync(path.join(root, ".env")) ? "OK" : "INFO", "운영 로컬 환경변수", fs.existsSync(path.join(root, ".env")) ? "설정됨(값은 표시하지 않음)" : "없음 — 안전 미리보기에는 불필요");

for (const result of results) console.log(`[${result.level}] ${result.label}: ${result.detail}`);
if (results.some((result) => result.level === "FAIL")) process.exit(1);
