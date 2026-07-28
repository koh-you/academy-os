import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalDraftSaveRequest } from "../src/domains/lessons/lessonJournalDraftSaveRequest.js";

const recordDrafts = {
  lsr_control: {
    lessonStudentRecordId: "lsr_control",
    lessonMaterial: "CONTROL"
  },
  lsr_target: {
    lessonStudentRecordId: "lsr_target",
    lessonMaterial: "TARGET"
  }
};
const homeworkDrafts = {
  "lsr_target:next": {
    homeworkType: "next",
    key: "lsr_target:next",
    studentId: "student_target",
    title: "다음 숙제 TARGET"
  }
};
const makeupTaskDrafts = {
  lsr_target: {
    sourceId: "homework_target",
    studentId: "student_target",
    taskType: "homework_makeup"
  }
};
const target = createLessonJournalDraftSaveRequest({
  hasDraftChanges: true,
  homeworkDrafts,
  makeupTaskDrafts,
  recordDrafts
});

assert.equal(target.hasDraftChanges, true);
assert.equal(target.changeCount, 4);
assert.deepEqual(
  target.recordDrafts.map((record) => record.lessonStudentRecordId),
  ["lsr_control", "lsr_target"]
);
assert.deepEqual(
  target.homeworkDrafts.map((homework) => homework.key),
  ["lsr_target:next"]
);
assert.deepEqual(
  target.makeupTaskDrafts.map((task) => task.sourceId),
  ["homework_target"]
);
assert.equal(recordDrafts.lsr_target.lessonMaterial, "TARGET");

const emptyControl = createLessonJournalDraftSaveRequest();
assert.deepEqual(emptyControl, {
  changeCount: 0,
  hasDraftChanges: false,
  homeworkDrafts: [],
  makeupTaskDrafts: [],
  recordDrafts: []
});

const blockedControl = createLessonJournalDraftSaveRequest({
  hasDraftChanges: false,
  recordDrafts: {
    retained: { lessonStudentRecordId: "retained" }
  }
});
assert.equal(blockedControl.hasDraftChanges, false);
assert.equal(blockedControl.changeCount, 1);
assert.equal(blockedControl.recordDrafts[0].lessonStudentRecordId, "retained");

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const requestSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftSaveRequest.js", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

for (const binding of [
  "createLessonJournalDraftSaveRequest({",
  "hasDraftChanges: hasJournalDraftChanges",
  "homeworkDrafts: journalHomeworkDrafts",
  "makeupTaskDrafts: journalMakeupTaskDrafts",
  "recordDrafts: journalRecordDrafts",
  "if (!journalDraftSaveRequest.hasDraftChanges)",
  "journalDraftSaveRequest.recordDrafts",
  "journalDraftSaveRequest.homeworkDrafts",
  "journalDraftSaveRequest.makeupTaskDrafts"
]) {
  assert.ok(journalSource.includes(binding), `missing draft save request binding: ${binding}`);
}
for (const retainedAction of [
  "async function saveJournalDrafts()",
  "onSaveLessonJournalDrafts?.(",
  "setJournalRecordDrafts({})",
  "setJournalHomeworkDrafts({})",
  "setJournalMakeupTaskDrafts({})"
]) {
  assert.ok(journalSource.includes(retainedAction), `draft save action must remain in App: ${retainedAction}`);
}
assert.ok(
  !journalSource.includes("Object.values(journalRecordDrafts)"),
  "LessonJournalDetail must use the extracted draft request"
);
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "notification_jobs",
  "Solapi",
  "useState",
  "useEffect"
]) {
  assert.ok(
    !requestSource.includes(forbiddenSideEffect),
    `draft save request must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal draft save request TARGET/CONTROL fixtures passed");
