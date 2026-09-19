// test:production 의 실행 목록(평면 목록) 자체의 건전성.
//
// 2026-09-19 부터 test:production 은 `node scripts/run-production-tests-summary.mjs` 하나이고
// 무엇을 돌릴지는 scripts/production-test-file-list.json 이 정한다. 예전 105구간 npm 체인은
// (1) npm 프로세스 82개를 띄워 로컬에서 1분 넘게 낭비했고, (2) 체인에서만 직접 실행되는 스크립트가
// 평면 목록에 없어 평면 목록만 돌린 로컬 검증이 CI 와 어긋났다. 여기서는 목록이 실제 파일을
// 가리키고, 중복이 없고, 계약 검사가 맨 앞에 오며, 가드가 쓰는 membership 헬퍼가 체인 전개를
// 올바르게 하는지 고정한다.
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  doesProductionListStartWithNpmScript,
  isNpmScriptCoveredByProductionTests,
  isTestFileInProductionList,
  readProductionTestFileList,
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

console.log(`production test file list: ${fileList.length} files · no duplicates · contracts first · membership helper contract passed`);
