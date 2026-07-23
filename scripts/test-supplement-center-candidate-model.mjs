import assert from "node:assert/strict";
import {
  createAbsenceSupplementCandidateModel,
  createHomeworkSupplementItems,
  createRetestSupplementItems
} from "../src/domains/supplements/supplementCenterCandidateModel.js";

const homeworkItems = createHomeworkSupplementItems(
  [
    {
      assignedDate: "2026-07-20",
      dueDate: "2026-07-22",
      homeworkId: "homework-1",
      studentId: "student-1",
      title: "교재 10~12쪽"
    },
    {
      assignedDate: "2026-07-21",
      dueDate: "",
      homeworkId: "homework-2",
      studentId: "student-2",
      title: "오답 정리"
    }
  ],
  {
    getReason: (homework) => homework.homeworkId === "homework-1" ? "숙제 미완료" : "숙제 부분완료"
  }
);
assert.deepEqual(homeworkItems, [
  {
    id: "homework-1",
    meta: "2026-07-22 기준 · 숙제 미완료",
    studentId: "student-1",
    task: {
      reason: "숙제 미완료",
      sourceDate: "2026-07-20",
      sourceDueDate: "2026-07-22",
      sourceId: "homework-1",
      sourceLabel: "교재 10~12쪽",
      studentId: "student-1",
      supplementHomeworkNote: "교재 10~12쪽",
      supplementMethod: "arrival_makeup",
      taskType: "homework_makeup"
    },
    title: "교재 10~12쪽"
  },
  {
    id: "homework-2",
    meta: "2026-07-21 기준 · 숙제 부분완료",
    studentId: "student-2",
    task: {
      reason: "숙제 부분완료",
      sourceDate: "2026-07-21",
      sourceDueDate: "",
      sourceId: "homework-2",
      sourceLabel: "오답 정리",
      studentId: "student-2",
      supplementHomeworkNote: "오답 정리",
      supplementMethod: "arrival_makeup",
      taskType: "homework_makeup"
    },
    title: "오답 정리"
  }
]);

const retestItems = createRetestSupplementItems(
  [
    {
      lessonId: "lesson-1",
      lessonStudentRecordId: "record-1",
      studentId: "student-1"
    }
  ],
  {
    getLessonLabel: (lessonId) => lessonId === "lesson-1"
      ? "2026-07-23 중3A"
      : "연결 수업 없음"
  }
);
assert.deepEqual(retestItems, [
  {
    id: "record-1",
    meta: "재시험 필요",
    studentId: "student-1",
    task: {
      reason: "재시험 필요",
      sourceId: "record-1",
      sourceLabel: "2026-07-23 중3A",
      studentId: "student-1",
      taskType: "retest"
    },
    title: "2026-07-23 중3A"
  }
]);

assert.deepEqual(createHomeworkSupplementItems(), []);
assert.deepEqual(createRetestSupplementItems(), []);

const absenceRecord = {
  attendanceReason: "독감",
  attendanceStatus: "absent",
  lessonId: "lesson-absence",
  lessonMaterial: "개념서 3단원",
  lessonStudentRecordId: "record-absence",
  nextHomework: "record 다음 숙제 fallback",
  previousHomework: "record 지난 숙제 fallback",
  studentId: "student-absence"
};
const absenceLesson = {
  className: "중3A",
  date: "2026-07-30",
  lessonId: "lesson-absence"
};
const absenceModel = createAbsenceSupplementCandidateModel({
  attendanceLabels: { absent: "결석" },
  formatDdayLabel: (days) => `D-${days}`,
  futureAbsenceMakeupVisibleDays: 7,
  getAvailability: () => ({
    daysUntilLesson: 7,
    isDeferred: true,
    lessonDate: "2026-07-30"
  }),
  getHomeworkCheckLabel: (record) => record?.lessonStudentRecordId === "record-absence"
    ? "교재 10~12쪽"
    : "",
  getLesson: (record) => record?.lessonId === absenceLesson.lessonId ? absenceLesson : null,
  getLessonContent: () => "이차방정식",
  getLessonDate: () => "2026-07-30",
  getLessonLabel: () => "연결 수업 없음",
  getNextHomework: () => ({ title: "개념서 40~42쪽" }),
  getPreviousHomework: () => ({ title: "개념서 35~37쪽" }),
  getStudent: () => ({ name: "고태영", studentId: "student-absence" }),
  records: [absenceRecord]
});
const absenceSourceContext = absenceModel.createSourceContext(absenceRecord);
assert.deepEqual(absenceSourceContext, {
  sourceDate: "2026-07-30",
  sourceLessonContent: "이차방정식",
  sourceLessonId: "lesson-absence",
  sourceLessonLabel: "2026-07-30 중3A",
  sourceLessonMaterial: "개념서 3단원",
  sourceNextHomework: "개념서 40~42쪽",
  sourcePreviousHomework: "개념서 35~37쪽"
});

const absenceItem = absenceModel.createItem(absenceRecord);
assert.deepEqual(absenceItem, {
  futureMeta: "D-7 · 7일 전부터 기본 목록에 표시",
  id: "record-absence",
  isFutureDeferred: true,
  lessonDate: "2026-07-30",
  meta: "결석 · 독감 · 지난 숙제 확인: 교재 10~12쪽",
  studentId: "student-absence",
  task: {
    absenceReason: "독감",
    reason: "결석 보강 · 지난 숙제 확인",
    sourceDate: "2026-07-30",
    sourceId: "record-absence",
    sourceLabel: "2026-07-30 중3A",
    sourceLessonContent: "이차방정식",
    sourceLessonId: "lesson-absence",
    sourceLessonLabel: "2026-07-30 중3A",
    sourceLessonMaterial: "개념서 3단원",
    sourceNextHomework: "개념서 40~42쪽",
    sourcePreviousHomework: "개념서 35~37쪽",
    studentId: "student-absence",
    supplementHomeworkNote: "교재 10~12쪽",
    supplementMethod: "onsite_makeup",
    taskType: "absence_makeup"
  },
  title: "2026-07-30 중3A"
});

const hydratedAbsence = absenceModel.hydrateTask({
  makeupTaskId: "task-absence",
  sourceId: "record-absence",
  sourceLessonContent: "선생님 저장 수업내용",
  sourcePreviousHomework: "선생님 저장 지난 숙제",
  studentId: "student-absence",
  supplementHomeworkNote: "",
  taskType: "absence_makeup"
});
assert.equal(hydratedAbsence.sourceLessonContent, "선생님 저장 수업내용");
assert.equal(hydratedAbsence.sourcePreviousHomework, "선생님 저장 지난 숙제");
assert.equal(hydratedAbsence.sourceNextHomework, "개념서 40~42쪽");
assert.equal(hydratedAbsence.supplementHomeworkNote, "교재 10~12쪽");
assert.equal(hydratedAbsence.sourceLessonLabel, "2026-07-30 중3A");

const homeworkTask = { makeupTaskId: "task-homework", taskType: "homework_makeup" };
assert.equal(absenceModel.hydrateTask(homeworkTask), homeworkTask);

console.log("supplement center candidate model fixture passed");
