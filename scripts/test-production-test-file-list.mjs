// test:production 의 실행 목록(평면 목록) 자체의 건전성.
//
// 2026-09-19 부터 test:production 은 `node scripts/run-production-tests-summary.mjs` 하나이고
// 무엇을 돌릴지는 scripts/production-test-file-list.json 이 정한다. 예전 105구간 npm 체인은
// (1) npm 프로세스 82개를 띄워 로컬에서 1분 넘게 낭비했고, (2) 체인에서만 직접 실행되는 스크립트가
// 평면 목록에 없어 평면 목록만 돌린 로컬 검증이 CI 와 어긋났다. 여기서는 목록이 실제 파일을
// 가리키고, 중복이 없고, 계약 검사가 맨 앞에 오며, 가드가 쓰는 membership 헬퍼가 체인 전개를
// 올바르게 하는지 고정한다.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  doesProductionListStartWithNpmScript,
  isNpmScriptCoveredByProductionTests,
  isTestFileInProductionList,
  readProductionTestFileList,
  resolveCiWorkflowTestFiles,
  resolveNpmScriptTestFiles
} from "./productionTestMembership.mjs";

const repositoryRoot = fileURLToPath(new URL("..", import.meta.url));
const fileList = readProductionTestFileList();
const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

// 1. test:production 은 평면 목록 실행기 하나다 — 체인을 다시 키우지 않는다.
assert.equal(packageJson.scripts["test:production"], "node scripts/run-production-tests-summary.mjs");

// 2. 목록의 파일은 전부 존재하고, 중복이 없으며, 실행기 자신이나 요약기는 들어 있지 않다.
assert.ok(fileList.length >= 400, `production test list looks truncated: ${fileList.length}`);
assert.equal(new Set(fileList).size, fileList.length, "production test list has duplicates");
for (const file of fileList) {
  assert.ok(existsSync(resolve(repositoryRoot, file)), `missing test file: ${file}`);
  assert.ok(!/run-production-tests/.test(file), `runner must not list itself: ${file}`);
}

// 3. versioned-write 계약 검사가 맨 앞에서 돈다(체인 시절 startsWith 계약).
assert.ok(doesProductionListStartWithNpmScript("test:contract:versioned-write"));
assert.deepEqual(
  fileList.slice(0, resolveNpmScriptTestFiles("test:contract:versioned-write").length),
  resolveNpmScriptTestFiles("test:contract:versioned-write")
);

// 4. 개별 npm 스크립트는 그대로 남아 있고(단일 실행용), 그 파일들은 모두 목록에 있다.
for (const scriptName of [
  "test:api-server-boot",
  "test:tenant-scope",
  "test:account-scoped-cache",
  "test:fourth-pass-server-route-baseline",
  "test:notification-job-api",
  "test:problem-bank-exam-model"
]) {
  assert.ok(isNpmScriptCoveredByProductionTests(scriptName), `${scriptName} must stay covered by the flat list`);
}
assert.ok(isTestFileInProductionList("scripts/scenario-tests-production.cjs"));

// 5. membership 헬퍼의 전개 규칙: 중첩 npm run 을 순서대로 펼치고, 평면 목록으로 표현할 수 없는
//    명령(예: 쉘 파이프)은 조용히 통과시키지 않는다.
{
  const scripts = {
    "test:a": "node scripts/a.mjs",
    "test:b": "npm run test:a && node scripts/b.mjs",
    "test:c": "npm run test:b && node scripts/c.mjs",
    "test:bad": "node scripts/a.mjs | tee out.txt"
  };
  assert.deepEqual(resolveNpmScriptTestFiles("test:c", scripts), ["scripts/a.mjs", "scripts/b.mjs", "scripts/c.mjs"]);
  assert.equal(isNpmScriptCoveredByProductionTests("test:c", { fileList: ["scripts/a.mjs", "scripts/b.mjs", "scripts/c.mjs"], scripts }), true);
  assert.equal(isNpmScriptCoveredByProductionTests("test:c", { fileList: ["scripts/a.mjs", "scripts/c.mjs"], scripts }), false);
  assert.equal(doesProductionListStartWithNpmScript("test:b", { fileList: ["scripts/a.mjs", "scripts/b.mjs", "scripts/z.mjs"], scripts }), true);
  assert.equal(doesProductionListStartWithNpmScript("test:b", { fileList: ["scripts/z.mjs", "scripts/a.mjs", "scripts/b.mjs"], scripts }), false);
  assert.throws(() => resolveNpmScriptTestFiles("test:bad", scripts), /평면 목록으로 표현할 수 없습니다/);
  assert.throws(() => resolveNpmScriptTestFiles("test:missing", scripts), /스크립트가 없습니다/);
}

// 6. 도달 가능성: scripts/test-*.{mjs,cjs} 는 전부 CI 가 실행해야 한다(평면 목록, 또는 워크플로의
//    fast-checks 단계가 도는 npm 스크립트). 2026-09-19 감사에서 29개가 CI 어디서도 실행되지 않고
//    있었다(그중 4개는 이미 깨진 죽은 검사, 1개는 2026-09-05 401 장애 뒤에 만든 인증 헤더 가드).
//    빼려면 아래 allowlist 에 이유와 함께 적는다 — 조용히 빠지는 일이 다시 없게.
const reachabilityAllowlist = new Map([
  // Windows checkout 에서 CRLF 가 baseline 키를 깨고, 140개 미추적 색 리터럴이 남아 있어 아직 gate 로
  // 못 쓴다(css:5 후속). 로컬 `npm run test:ui-color-token-hygiene` 로만 본다.
  ["scripts/test-ui-color-token-hygiene.cjs", "CRLF baseline · 미추적 리터럴 140 — 별도 정리 뒤 편입"]
]);
const scriptsDirectory = resolve(repositoryRoot, "scripts");
const listed = resolveCiWorkflowTestFiles();
const unreachable = readdirSync(scriptsDirectory)
  .filter((name) => /^test-.*\.(mjs|cjs)$/.test(name))
  .map((name) => `scripts/${name}`)
  .filter((file) => !listed.has(file) && !reachabilityAllowlist.has(file));
assert.deepEqual(
  unreachable,
  [],
  ["test scripts that CI never runs (add to production-test-file-list.json or to the allowlist with a reason):", ...unreachable].join(" | ")
);
for (const file of reachabilityAllowlist.keys()) {
  assert.ok(existsSync(resolve(repositoryRoot, file)), `allowlisted script no longer exists, remove it: ${file}`);
  assert.ok(!listed.has(file), `allowlisted script is also reachable from CI, drop one: ${file}`);
}

console.log(`production test file list: ${fileList.length} files · no duplicates · contracts first · every scripts/test-* reachable (allowlist ${reachabilityAllowlist.size}) · membership helper contract passed`);
