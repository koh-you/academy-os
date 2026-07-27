import assert from "node:assert/strict";
import {
  createCanceledAbsenceMakeupTask,
  createCanceledSupplementLesson,
  getAbsenceSourcePreservationSnapshot,
  getCanceledAbsenceMakeupSaveSnapshot,
  keepSourceAbsenceCancellationMode
} from "../src/domains/supplements/supplementCancellation.js";

const canceledAt = "2026-07-27T12:00:00.000Z";
const sourceRecord = {
  attendanceReason: "개인 일정",
  attendanceStatus: "absent",
  checkInAt: "",
  checkInTime: "",
  checkOutAt: "",
  checkOutTime: "",
  lessonId: "lesson_regular_1",
  lessonStudentRecordId: "record_absence_1",
  studentId: "student_1"
};
const sourceSnapshot = getAbsenceSourcePreservationSnapshot(sourceRecord);
const task = {
  linkedLessonDate: "2026-07-29",
  linkedLessonId: "lesson_makeup_1",
  linkedLessonTime: "13:00",
  makeupTaskId: "makeup_absence_1",
  scheduledDate: "2026-07-29",
  scheduledTime: "13:00",
  sourceId: sourceRecord.lessonStudentRecordId,
  sourceLessonId: sourceRecord.lessonId,
  status: "scheduled",
  studentId: sourceRecord.studentId,
  taskType: "absence_makeup"
};
const lesson = {
  className: "결석보강 · 학생",
  date: "2026-07-29",
  lessonId: task.linkedLessonId,
  lessonType: "makeup",
  sourceMakeupTaskId: task.makeupTaskId,
  status: "scheduled",
  studentIds: [sourceRecord.studentId]
};

const canceledTask = createCanceledAbsenceMakeupTask(task, canceledAt);
const canceledLesson = createCanceledSupplementLesson(lesson, canceledAt);
const canceledUnsavedCandidate = createCanceledAbsenceMakeupTask({
  makeupTaskId: "makeup_absence_unsaved_candidate",
  sourceId: sourceRecord.lessonStudentRecordId,
  sourceLessonId: sourceRecord.lessonId,
  status: "draft",
  studentId: sourceRecord.studentId,
  taskType: "absence_makeup"
}, canceledAt);

assert.equal(canceledTask.status, "canceled");
assert.equal(canceledTask.cancellationMode, keepSourceAbsenceCancellationMode);
assert.equal(canceledTask.sourceAttendancePreserved, true);
assert.equal(canceledTask.sourceId, sourceRecord.lessonStudentRecordId);
assert.equal(canceledTask.linkedLessonId, lesson.lessonId);
assert.equal(canceledLesson.status, "canceled");
assert.deepEqual(canceledLesson.studentIds, lesson.studentIds);
assert.equal(canceledLesson.sourceMakeupTaskId, lesson.sourceMakeupTaskId);
assert.equal(canceledUnsavedCandidate.status, "canceled");
assert.equal(canceledUnsavedCandidate.cancellationMode, keepSourceAbsenceCancellationMode);
assert.equal(canceledUnsavedCandidate.sourceAttendancePreserved, true);
assert.equal(canceledUnsavedCandidate.linkedLessonId, undefined);
assert.equal(
  getAbsenceSourcePreservationSnapshot(sourceRecord),
  sourceSnapshot,
  "보강 취소 계산은 원 결석 출결 원천을 변경하지 않아야 합니다."
);
assert.equal(
  getCanceledAbsenceMakeupSaveSnapshot(canceledTask),
  getCanceledAbsenceMakeupSaveSnapshot({ ...canceledTask }),
  "취소 저장 snapshot은 재조회 뒤에도 같아야 합니다."
);
assert.throws(
  () => createCanceledAbsenceMakeupTask({ ...task, taskType: "homework_makeup" }, canceledAt),
  /결석보강 항목만/
);

console.log("supplement cancellation contract passed");
