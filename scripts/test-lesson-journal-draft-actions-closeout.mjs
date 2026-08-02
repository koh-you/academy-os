import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readAppWithLessonJournalSource(import.meta.url);
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
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
assert.ok(detailStart >= 0 && detailEnd > detailStart, "LessonJournalDetail boundary must exist");
const detailSource = appSource.slice(detailStart, detailEnd);

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
    detailSource.split(actionBoundary).length - 1,
    1,
    `draft action boundary must remain once in App: ${actionBoundary}`
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
  assert.ok(detailSource.includes(pureBinding), `missing pure draft binding: ${pureBinding}`);
}

for (const appOwnedEffect of [
  "const nowIso = new Date().toISOString()",
  "setJournalRecordDrafts((current) => ({ ...current, [recordId]: record }))",
  "setJournalHomeworkDrafts((current) => ({",
  "setJournalMakeupTaskDrafts((current) => (",
  "setJournalMakeupTaskDrafts((current) => ({",
  "setJournalManualSaveMessage(",
  "onSaveLessonJournalDrafts?.("
]) {
  assert.ok(detailSource.includes(appOwnedEffect), `missing App-owned draft effect: ${appOwnedEffect}`);
}

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

const asyncFunctions = detailSource.match(/\basync function\s+\w+\s*\(/g) ?? [];
assert.equal(asyncFunctions.length, 5);
assert.equal(
  asyncFunctions.filter((signature) => signature.includes("saveJournalDrafts")).length,
  1
);

console.log("lesson journal local draft action closeout boundary passed");
