import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, outletSource, screenSource, packageSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/LearningSupportCenters.jsx", import.meta.url), "utf8"),
  readFile(new URL("../package.json", import.meta.url), "utf8")
]);

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing source boundary: ${start}`);
  assert.ok(endIndex > startIndex, `missing source boundary: ${end}`);
  return source.slice(startIndex, endIndex);
}

const autosaveSource = sourceBetween(
  appSource,
  "const sharedAppState = useMemo(() => ({",
  "const initialSharedAppStateRef"
);
assert.equal(autosaveSource.includes("wrongProblems"), false);

const controllerSource = sourceBetween(
  appSource,
  "function getWrongProblemPersistenceController()",
  "async function loadCoreDataFromApi()"
);
for (const boundary of [
  "createAppStatePersistenceController({",
  "onState: setWrongProblemSaveState",
  "/api/app-state?includeRows=true&verify=wrong-problems-",
  "write: ({ expectedUpdatedAt, states }) => postAppState(states, { expectedUpdatedAt })"
]) {
  assert.ok(controllerSource.includes(boundary), `missing wrong-problem persistence boundary: ${boundary}`);
}

const saveActionSource = sourceBetween(
  appSource,
  "async function handleSaveWrongProblems()",
  "const teacherViewAdapters"
);
for (const boundary of [
  "wrongProblemSaveRevisionRef.current",
  "getWrongProblemPersistenceController().save({ wrongProblems })",
  "requestedRevision !== wrongProblemSaveRevisionRef.current"
]) {
  assert.ok(saveActionSource.includes(boundary), `missing explicit-save behavior: ${boundary}`);
}

const followUpSource = sourceBetween(
  screenSource,
  "export function FollowUpCenter(",
  "function WrongProblemBoard("
);
for (const boundary of [
  "wrongProblemSaveState = \"idle\"",
  "<InlineSaveStatus label=\"학생별 오답\"",
  "학생별 오답 저장",
  "onClick={onSaveWrongProblems}",
  "wrongProblemSaveMessage"
]) {
  assert.ok(followUpSource.includes(boundary), `missing explicit-save UI: ${boundary}`);
}
assert.ok(screenSource.includes("저장 중 수정했다면 한 번 더 저장해 주세요."));
assert.equal(followUpSource.includes("AutosaveRiskNotice"), false);
assert.equal(followUpSource.includes("오답관리 자동저장"), false);

for (const boundary of [
  "wrongProblemSaveState: models.wrongProblemSaveState",
  "wrongProblemSaveBusy: models.wrongProblemSaveBusy",
  "onSaveWrongProblems: actions.handleSaveWrongProblems"
]) {
  assert.ok(outletSource.includes(boundary), `missing teacher adapter boundary: ${boundary}`);
}

const packageJson = JSON.parse(packageSource);
assert.equal(
  packageJson.scripts["test:wrong-problem-explicit-save"],
  "node scripts/test-wrong-problem-explicit-save.mjs"
);
assert.ok(packageJson.scripts["test:production"].includes("test-wrong-problem-explicit-save.mjs"));

console.log("wrong-problem explicit save boundary passed");
