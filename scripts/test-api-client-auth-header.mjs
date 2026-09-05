import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

// apiClient.js 는 import.meta.env / window 를 참조하므로 최소 stub 후 import.
globalThis.window = globalThis.window || { location: { hostname: "localhost" }, setTimeout, clearTimeout };

const { setApiAuthToken, withAuthHeaders } = await import("../src/shared/utils/apiClient.js");

// 토큰 없음 → Authorization 없음
assert.deepEqual(withAuthHeaders(), {});
assert.deepEqual(withAuthHeaders({ "Content-Type": "application/json" }), { "Content-Type": "application/json" });

// 토큰 설정 → 모든 헤더에 Bearer 첨부
setApiAuthToken("tok-123");
assert.deepEqual(withAuthHeaders(), { Authorization: "Bearer tok-123" });
assert.deepEqual(withAuthHeaders({ "Content-Type": "application/json" }), {
  Authorization: "Bearer tok-123",
  "Content-Type": "application/json"
});

// 로그아웃(빈 토큰) → 다시 제거
setApiAuthToken("");
assert.deepEqual(withAuthHeaders(), {});
setApiAuthToken(null);
assert.deepEqual(withAuthHeaders(), {});

// 호출부가 Authorization 을 명시하면 세션 토큰이 덮어쓰지 않는다(보고서 저장 경로).
setApiAuthToken("tok-session");
assert.deepEqual(withAuthHeaders({ Authorization: "Bearer explicit" }), { Authorization: "Bearer explicit" });
setApiAuthToken("");

// 회귀 방지: 앱 코드에서 인증 헤더를 우회하는 직접 호출이 다시 생기면 실패시킨다.
// 2026-09-05 버그 — `fetch(apiUrl(...))` 40곳이 토큰 없이 나가 운영에서 전부 401 이 났다.
const srcRoot = fileURLToPath(new URL("../src/", import.meta.url));
const apiClientPath = join(srcRoot, "shared", "utils", "apiClient.js");

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(entryPath)));
      continue;
    }
    if (/\.(js|jsx)$/.test(entry.name)) files.push(entryPath);
  }
  return files;
}

const bypassOffenders = [];
for (const filePath of await collectSourceFiles(srcRoot)) {
  if (filePath === apiClientPath) continue;
  const source = await readFile(filePath, "utf8");
  const relativePath = relative(srcRoot, filePath).replace(/\\/g, "/");
  if (source.includes("fetch(apiUrl(")) bypassOffenders.push(`${relativePath}: fetch(apiUrl(...))`);
  if (/\bfetchImpl:\s*fetch\b/.test(source)) bypassOffenders.push(`${relativePath}: fetchImpl: fetch`);
}
assert.deepEqual(
  bypassOffenders,
  [],
  `인증 헤더를 우회하는 직접 호출이 남아 있습니다. apiFetch / fetchWithAuth 를 쓰세요:\n${bypassOffenders.join("\n")}`
);

console.log("api client auth header: token attach/clear contract + apiFetch bypass guard passed");
