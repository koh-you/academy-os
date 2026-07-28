import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  getLessonJournalEditableRecord,
  removeLessonJournalMakeupTaskDraft
} from "../src/domains/lessons/lessonJournalDraftMap.js";

const targetDraft = {
  lessonStudentRecordId: "record_TARGET",
  progressText: "TARGET 수정 진도"
};
const controlRecord = {
  lessonStudentRecordId: "record_CONTROL",
  progressText: "CONTROL 저장 진도"
};
const recordDrafts = {
  record_TARGET: targetDraft
};
const recordSnapshot = structuredClone(recordDrafts);

assert.equal(
  getLessonJournalEditableRecord({
    baseRecord: controlRecord,
    currentDrafts: recordDrafts,
    recordId: "record_TARGET"
  }),
  targetDraft
);
assert.equal(
  getLessonJournalEditableRecord({
    baseRecord: controlRecord,
    currentDrafts: recordDrafts,
    recordId: "record_CONTROL"
  }),
  controlRecord
);
assert.equal(
  getLessonJournalEditableRecord({
    baseRecord: controlRecord,
    currentDrafts: {
      record_NULL: null
    },
    recordId: "record_NULL"
  }),
  controlRecord
);
assert.equal(
  getLessonJournalEditableRecord({
    baseRecord: controlRecord,
    currentDrafts: {
      record_FALSE: false
    },
    recordId: "record_FALSE"
  }),
  false
);
assert.deepEqual(recordDrafts, recordSnapshot);

const targetTask = {
  studentId: "student_TARGET",
  taskId: "task_TARGET"
};
const controlTask = {
  studentId: "student_CONTROL",
  taskId: "task_CONTROL"
};
const makeupDrafts = {
  record_CONTROL: controlTask,
  record_TARGET: targetTask
};
const makeupSnapshot = structuredClone(makeupDrafts);
const removedDrafts = removeLessonJournalMakeupTaskDraft({
  currentDrafts: makeupDrafts,
  recordId: "record_TARGET"
});
assert.deepEqual(removedDrafts, {
  record_CONTROL: controlTask
});
assert.notEqual(removedDrafts, makeupDrafts);
assert.equal(removedDrafts.record_CONTROL, controlTask);
assert.deepEqual(makeupDrafts, makeupSnapshot);

const missingResult = removeLessonJournalMakeupTaskDraft({
  currentDrafts: makeupDrafts,
  recordId: "record_MISSING"
});
assert.equal(missingResult, makeupDrafts);
const nullDrafts = {
  record_NULL: null
};
assert.equal(
  removeLessonJournalMakeupTaskDraft({
    currentDrafts: nullDrafts,
    recordId: "record_NULL"
  }),
  nullDrafts
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftMap.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  "getLessonJournalEditableRecord,",
  "removeLessonJournalMakeupTaskDraft",
  "return getLessonJournalEditableRecord({",
  "currentDrafts: journalRecordDrafts,",
  "setJournalMakeupTaskDrafts((current) => (",
  "removeLessonJournalMakeupTaskDraft({",
  "currentDrafts: current,"
]) {
  assert.ok(appSource.includes(binding), `missing draft-map binding: ${binding}`);
}
assert.ok(!detailSource.includes("return journalRecordDrafts[recordId] ?? baseRecord"));
assert.ok(!detailSource.includes("delete next[recordId]"));

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "/api/",
  "Supabase",
  "localStorage",
  "setJournal"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `draft map must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal draft map TARGET/CONTROL fixtures passed");
