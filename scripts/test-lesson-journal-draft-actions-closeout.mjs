import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, detailSource, controllerSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/useLessonJournalDraftController.js", import.meta.url), "utf8")
]);
const modelUrls = [
  "../src/domains/lessons/lessonJournalRecordDraft.js",
  "../src/domains/lessons/lessonJournalHomeworkDraft.js",
  "../src/domains/lessons/lessonJournalHomeworkFollowupPlan.js",
  "../src/domains/lessons/lessonJournalAssignmentStatusPlan.js",
  "../src/domains/lessons/lessonJournalDraftMap.js"
];
const modelSources = await Promise.all(
  modelUrls.map((url) => readFile(new URL(url, import.meta.url), "utf8"))
);
for (const actionBoundary of [
  "function getEditableRecord(recordId, baseRecord)",
  "function updateJournalRecordDraft(student, baseRecord, field, value)",
  "function handleAssignmentStatusChange(student, baseRecord, previousHomework, value)",
  "function updateJournalRecordDraftPatch(student, baseRecord, patch = {})",
  "function removeJournalMakeupTaskDraft(student)",
  "function applyHomeworkFollowupMethod(student, baseRecord, previousHomework, method)",
  "function getHomeworkDraftKey(student, homeworkType)",
  "function getHomeworkDraftTitle(student, homeworkType, homework)",
  "function updateJournalHomeworkDraft(student, homeworkType, title)",
  "async function saveJournalDrafts()"
]) {
  assert.equal(
    controllerSource.split(actionBoundary).length - 1,
    1,
    `draft action boundary must remain once in the controller: ${actionBoundary}`
  );
}

for (const pureBinding of [
  "getLessonJournalEditableRecord({",
  "createLessonJournalRecordFieldPatch({",
  "createLessonJournalAssignmentStatusPlan({",
  "createLessonJournalRecordDraft({",
  "removeLessonJournalMakeupTaskDraft({",
  "createLessonJournalHomeworkFollowupPlan({",
  "createLessonJournalHomeworkDraftKey({",
  "getLessonJournalHomeworkDraftTitle({",
  "createLessonJournalHomeworkDraft({"
]) {
  assert.ok(controllerSource.includes(pureBinding), `missing pure draft binding: ${pureBinding}`);
}

for (const controllerOwnedEffect of [
  "const nowIso = new Date().toISOString()",
  "setJournalRecordDrafts((current) => ({ ...current, [recordId]: record }))",
  "setJournalHomeworkDrafts((current) => ({",
  "setJournalMakeupTaskDrafts((current) => (",
  "setJournalMakeupTaskDrafts((current) => ({",
  "setJournalManualSaveMessage(",
  "onSaveLessonJournalDrafts?.("
]) {
  assert.ok(controllerSource.includes(controllerOwnedEffect), `missing controller-owned draft effect: ${controllerOwnedEffect}`);
}
assert.ok(detailSource.includes("useLessonJournalDraftController({"));
assert.ok(detailSource.includes("const saved = await saveJournalDraftChanges()"));
assert.ok(appSource.includes("async function handleSaveLessonJournalDrafts("));

for (const modelSource of modelSources) {
  for (const forbiddenSideEffect of [
    "useState",
    "useEffect",
    "fetch(",
    "postJson",
    "getJsonWithTimeout",
    "new Date",
    "/api/",
    "localStorage",
    "setJournal",
    "onSaveLessonJournalDrafts"
  ]) {
    assert.ok(
      !modelSource.includes(forbiddenSideEffect),
      `draft model must stay pure: ${forbiddenSideEffect}`
    );
  }
}

const asyncFunctions = controllerSource.match(/\basync function\s+\w+\s*\(/g) ?? [];
assert.equal(asyncFunctions.length, 1);
assert.equal(
  asyncFunctions.filter((signature) => signature.includes("saveJournalDrafts")).length,
  1
);

console.log("lesson journal local draft action closeout boundary passed");
