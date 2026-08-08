import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalAbsenceSourceModel } from "../src/domains/lessons/lessonJournalAbsenceSourceModel.js";

const [appSource, registrySource, hubSource, detailSource, panelsSource, absenceNoticeSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonNestedPanels.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalAbsenceSourceNotice.jsx", import.meta.url), "utf8")
]);

for (const componentName of ["PreparationMemoModal", "SupplementMakeupLessonDetail"]) {
  assert.equal(panelsSource.includes(`export function ${componentName}(`), true);
  assert.equal(appSource.includes(`function ${componentName}(`), false);
  assert.equal(registrySource.includes('() => import("../domains/lessons/LessonNestedPanels.jsx")'), true);
  assert.equal(registrySource.includes(`"${componentName}"`), true);
}

const runtimeMatch = appSource.match(/const lessonNestedPanelRuntime = Object\.freeze\(\{([\s\S]*?)\n\}\);/);
assert.ok(runtimeMatch, "nested lesson panel runtime must remain App-owned");
const runtimeKeys = runtimeMatch[1].split(",").map((value) => value.trim()).filter(Boolean).sort();
assert.deepEqual(runtimeKeys, [
  "createEmptyRecord",
  "createLessonStudentRecordId",
  "findLessonStudentRecord",
  "followUpTypeLabel",
  "formatKoreaTimeLabel",
  "formatKoreanDateTime",
  "getActiveLessonStudents",
  "getHomeworkFollowupPatch",
  "getLessonContent",
  "getLessonHomework",
  "getSaveButtonLabel",
  "getSupplementScheduleChangeDetailSeed",
  "getSupplementTaskSourceLabel",
  "normalizeTimeInput"
].sort());

for (const source of [hubSource, detailSource]) {
  assert.equal(source.includes("nestedPanels,"), true);
  assert.equal(source.includes("runtime={nestedPanels}"), true);
}
assert.equal(appSource.includes("PreparationMemoModal: lazyTeacherViewComponents.PreparationMemoModal"), true);
assert.equal(appSource.includes("SupplementMakeupLessonDetail: lazyTeacherViewComponents.SupplementMakeupLessonDetail"), true);
assert.equal(appSource.includes("nestedPanels: lessonNestedPanelRuntime"), true);
assert.equal(panelsSource.includes("onScheduleTask({"), true);
assert.equal(panelsSource.includes("onPassTask({"), true);
assert.equal(panelsSource.includes('<ModalFooter className="confirmActions">'), true);
assert.equal(panelsSource.includes('onClick={() => setPassConfirmMode("")}'), true);
assert.equal(panelsSource.includes("onClick={confirmPassTask}"), true);
assert.equal(panelsSource.includes("onSaveRecord(recordId, lesson, student"), true);
assert.equal(panelsSource.includes("skipNotificationRefresh: true"), true);

assert.equal(hubSource.includes('selectedMakeupTask?.taskType === "homework_makeup"'), true);
assert.equal(hubSource.includes("isHomeworkMakeupLesson ? ("), true);
assert.equal(detailSource.includes('linkedMakeupTask?.taskType === "absence_makeup"'), true);
assert.equal(detailSource.includes('linkedMakeupTask?.taskType === "homework_makeup"'), true);
assert.equal(detailSource.includes("if (isHomeworkMakeupLesson)"), true);
assert.equal(detailSource.includes("<LessonJournalAbsenceSourceNotice"), true);
assert.equal(absenceNoticeSource.includes('aria-label="결석한 수업"'), true);

const absenceSourceModel = createLessonJournalAbsenceSourceModel({
  lesson: { lessonId: "makeup-1", studentIds: ["student-1"] },
  lessons: [{
    className: "월수금 7-10반",
    date: "2026-07-27",
    endTime: "22:00",
    lessonId: "source-lesson-1",
    startTime: "19:00"
  }],
  records: [{
    absenceReason: "병결",
    lessonId: "source-lesson-1",
    lessonStudentRecordId: "source-record-1",
    studentId: "student-1"
  }],
  task: {
    sourceId: "source-record-1",
    studentId: "student-1",
    taskType: "absence_makeup"
  }
});
assert.deepEqual(absenceSourceModel, {
  absenceReason: "병결",
  classLabel: "월수금 7-10반",
  dateLabel: "2026-07-27",
  isVisible: true,
  timeLabel: "19:00-22:00"
});
assert.deepEqual(
  createLessonJournalAbsenceSourceModel({ lesson: {}, task: { taskType: "homework_makeup" } }),
  { isVisible: false }
);

for (const forbidden of [
  'from "../../app/App.jsx"',
  'from "../../app/TeacherViewOutlet.js"',
  "fetch(",
  "postJson",
  "localStorage",
  "Supabase",
  '"/api/'
]) {
  assert.equal(panelsSource.includes(forbidden), false, `nested lesson panels must not own ${forbidden}`);
  assert.equal(absenceNoticeSource.includes(forbidden), false, `absence source notice must not own ${forbidden}`);
}

console.log("nested lesson panel runtime, persistence callback, and lazy boundary fixtures passed");
