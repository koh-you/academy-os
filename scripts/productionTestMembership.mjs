// test:production 의 실행 목록은 scripts/production-test-file-list.json 하나다(2026-09-19).
//
// 예전에는 package.json 의 test:production 이 `npm run test:x && node scripts/y.mjs && …` 105구간
// 체인이었고, 가드 7개가 그 문자열 자체에 `includes("npm run test:x")` 를 걸어 "이 검사는
// test:production 에 들어 있다" 를 고정했다. 그 방식은 (1) npm 프로세스를 82번 띄워 로컬에서
// 1분 넘게 낭비하고, (2) 체인에서 직접 실행되는 스크립트가 평면 목록에는 없어 평면 목록만
// 돌린 로컬 검증이 CI 와 어긋났다(2026-09-19 #381 에서 실제로 놓침). 이제 모든 검사는 평면
// 목록에 있고, 가드는 여기서 "npm 스크립트가 도는 파일이 목록에 있는지" 를 묻는다.
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");

export const productionTestFileListPath = resolve(scriptDirectory, "production-test-file-list.json");

export function readProductionTestFileList() {
  return JSON.parse(readFileSync(productionTestFileListPath, "utf8"));
}

function readPackageScripts() {
  return JSON.parse(readFileSync(resolve(repositoryRoot, "package.json"), "utf8")).scripts ?? {};
}

/**
 * npm 스크립트가 최종적으로 실행하는 `node scripts/…` 파일들(체인·중첩 npm run 전개, 순서 유지).
 * @param {string} scriptName
 * @param {Record<string, string>} [scripts]
 * @returns {string[]}
 */
export function resolveNpmScriptTestFiles(scriptName, scripts = readPackageScripts()) {
  const command = scripts[scriptName];
  if (!command) throw new Error(`package.json 에 ${scriptName} 스크립트가 없습니다.`);
  const files = [];
  for (const part of command.split("&&").map((segment) => segment.trim())) {
    const nested = part.match(/^npm run (\S+)$/);
    if (nested) {
      files.push(...resolveNpmScriptTestFiles(nested[1], scripts));
      continue;
    }
    const direct = part.match(/^node (scripts\/\S+)$/);
    if (direct) {
      files.push(direct[1]);
      continue;
    }
    throw new Error(`${scriptName} 의 "${part}" 는 node scripts/… 실행이 아니라 평면 목록으로 표현할 수 없습니다.`);
  }
  return files;
}

/**
 * CI 워크플로(.github/workflows/production-checks.yml)의 `npm run …` 단계가 실제로 실행하는
 * `node scripts/…` 파일들. lint·build 같은 비-스크립트 단계는 건너뛴다. 도달 가능성 검사용.
 * @returns {Set<string>}
 */
export function resolveCiWorkflowTestFiles({ scripts = readPackageScripts(), workflowSource } = {}) {
  const source = workflowSource ?? readFileSync(resolve(repositoryRoot, ".github", "workflows", "production-checks.yml"), "utf8");
  const files = new Set();
  for (const match of source.matchAll(/npm run (\S+)/g)) {
    const command = scripts[match[1]];
    if (!command) continue;
    const queue = [command];
    while (queue.length) {
      for (const part of queue.shift().split("&&").map((segment) => segment.trim())) {
        const nested = part.match(/^npm run (\S+)$/);
        if (nested && scripts[nested[1]]) queue.push(scripts[nested[1]]);
        const direct = part.match(/^node (scripts\/\S+)/);
        if (direct) files.add(direct[1]);
      }
    }
  }
  for (const file of readProductionTestFileList()) files.add(file);
  return files;
}

/** npm 스크립트가 도는 모든 파일이 test:production 평면 목록에 있으면 true. */
export function isNpmScriptCoveredByProductionTests(scriptName, { fileList = readProductionTestFileList(), scripts } = {}) {
  const listed = new Set(fileList);
  return resolveNpmScriptTestFiles(scriptName, scripts).every((file) => listed.has(file));
}

/** 특정 파일 하나가 평면 목록에 있으면 true. */
export function isTestFileInProductionList(file, fileList = readProductionTestFileList()) {
  return fileList.includes(file);
}

/** 평면 목록이 이 npm 스크립트의 파일들로 시작하면 true(계약 검사가 맨 앞에 온다는 순서 보장). */
export function doesProductionListStartWithNpmScript(scriptName, { fileList = readProductionTestFileList(), scripts } = {}) {
  const files = resolveNpmScriptTestFiles(scriptName, scripts);
  return files.every((file, index) => fileList[index] === file);
}
