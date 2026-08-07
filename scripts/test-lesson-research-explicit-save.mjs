import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, outletSource, screenSource, autosaveSource, packageSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/PlanningToolCenters.jsx", import.meta.url), "utf8"),
  readFile(new URL("./test-app-state-autosave-concurrency-inventory.mjs", import.meta.url), "utf8"),
  readFile(new URL("../package.json", import.meta.url), "utf8")
]);

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing source boundary: ${start}`);
  assert.ok(endIndex > startIndex, `missing source boundary: ${end}`);
  return source.slice(startIndex, endIndex);
}

const sharedStateSource = sourceBetween(
  appSource,
  "const sharedAppState = useMemo(() => ({",
  "const initialSharedAppStateRef"
);
assert.equal(sharedStateSource.includes("lessonResearchItems"), false);
assert.ok(autosaveSource.includes('sharedStateKeys.includes("lessonResearchItems"), false'));

const controllerSource = sourceBetween(
  appSource,
  "function getLessonResearchPersistenceController()",
  "useEffect(() => {"
);
for (const boundary of [
  "createAppStatePersistenceController({",
  "onState: setLessonResearchSaveState",
  "/api/app-state?includeRows=true&verify=lesson-research-",
  "write: ({ expectedUpdatedAt, states }) => postAppState(states, { expectedUpdatedAt })"
]) {
  assert.ok(controllerSource.includes(boundary), `missing lesson-research persistence boundary: ${boundary}`);
}

const actionSource = sourceBetween(
  appSource,
  "function handleAddLessonResearchItem(subject, typeInfo)",
  "function handleRefreshNotificationHistory"
);
for (const boundary of [
  'setLessonResearchSaveState("dirty")',
  "lessonResearchSaveRevisionRef.current += 1",
  "getLessonResearchPersistenceController().save({ lessonResearchItems })",
  "requestedRevision !== lessonResearchSaveRevisionRef.current"
]) {
  assert.ok(actionSource.includes(boundary), `missing explicit-save behavior: ${boundary}`);
}

const screenBoundary = sourceBetween(
  screenSource,
  "export function LessonResearchCenter({",
  "export function AIVariantProblemCenter"
);
for (const boundary of [
  'lessonResearchSaveState = "idle"',
  '<InlineSaveStatus label="수업연구 교안"',
  "수업연구 저장",
  "onClick={onSaveItems}",
  "lessonResearchSaveMessage"
]) {
  assert.ok(screenBoundary.includes(boundary), `missing explicit-save UI: ${boundary}`);
}
assert.equal(screenBoundary.includes("AutosaveRiskNotice"), false);
assert.equal(screenBoundary.includes("수업연구 자동저장"), false);

for (const boundary of [
  "lessonResearchSaveBusy: models.lessonResearchSaveBusy",
  "lessonResearchSaveState: models.lessonResearchSaveState",
  "onSaveItems: actions.handleSaveLessonResearchItems"
]) {
  assert.ok(outletSource.includes(boundary), `missing teacher adapter boundary: ${boundary}`);
}

const packageJson = JSON.parse(packageSource);
assert.equal(
  packageJson.scripts["test:lesson-research-explicit-save"],
  "node scripts/test-lesson-research-explicit-save.mjs"
);
assert.ok(packageJson.scripts["test:production"].includes("test-lesson-research-explicit-save.mjs"));

console.log("lesson-research explicit save boundary passed");
