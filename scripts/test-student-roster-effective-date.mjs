import assert from "node:assert/strict";
import {
  getNextKoreaDateKey,
  getRosterEffectiveFromDate,
  hasStudentLessonRowOnDate
} from "../src/domains/students/rosterEffectiveDate.js";
import { createClassRosterSavePlan } from "../src/domains/students/classRosterPersistence.js";

assert.equal(getNextKoreaDateKey("2026-08-10"), "2026-08-11");
assert.equal(getNextKoreaDateKey("2026-12-31"), "2027-01-01");
assert.equal(getRosterEffectiveFromDate({ mode: "today", today: "2026-08-10" }), "2026-08-10");
assert.equal(getRosterEffectiveFromDate({ mode: "tomorrow", today: "2026-08-10" }), "2026-08-11");

const student = {
  defaultClassTemplateId: "mwf-4-7",
  name: "이채빈",
  status: "active",
  studentId: "student-lee",
  updatedAt: "2026-08-10T00:00:00.000Z"
};
const movedStudent = { ...student, defaultClassTemplateId: "mwf-7-10" };
const lessons = [
  { classTemplateId: "mwf-4-7", date: "2026-08-10", lessonId: "old-today", studentIds: [student.studentId], updatedAt: student.updatedAt },
  { classTemplateId: "mwf-7-10", date: "2026-08-10", lessonId: "new-today", studentIds: [], updatedAt: student.updatedAt },
  { classTemplateId: "mwf-4-7", date: "2026-08-12", lessonId: "old-future", studentIds: [student.studentId], updatedAt: student.updatedAt },
  { classTemplateId: "mwf-7-10", date: "2026-08-12", lessonId: "new-future", studentIds: [], updatedAt: student.updatedAt }
];

assert.equal(hasStudentLessonRowOnDate({ date: "2026-08-10", lessons, studentId: student.studentId }), true);
assert.equal(hasStudentLessonRowOnDate({
  date: "2026-08-10",
  lessons: lessons.map((lesson) => ({ ...lesson, studentIds: [] })),
  records: [{ lessonId: "old-today", studentId: student.studentId }],
  studentId: student.studentId
}), true, "명단에서 빠졌어도 오늘 저장 기록이 있으면 적용 시점을 선택해야 합니다.");

const tomorrowPlan = createClassRosterSavePlan({
  fromDate: "2026-08-11",
  lessons,
  nextStudents: [movedStudent],
  previousStudents: [student]
});
assert.deepEqual(
  tomorrowPlan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]),
  [["old-future", []], ["new-future", [student.studentId]]],
  "내일부터 반 이동은 오늘 기존 반 행을 보존해야 합니다."
);

const todayPlan = createClassRosterSavePlan({
  fromDate: "2026-08-10",
  lessons,
  nextStudents: [movedStudent],
  previousStudents: [student]
});
assert.deepEqual(
  todayPlan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]),
  [["old-today", []], ["new-today", [student.studentId]], ["old-future", []], ["new-future", [student.studentId]]]
);

const scheduledStudent = {
  ...student,
  defaultClassTemplateId: "mwf-7-10",
  scheduleOverride: "월 16:00-19:00 / 수금 19:00-22:00"
};
const reconciliationLessons = [
  { classTemplateId: "mwf-4-7", date: "2026-08-10", endTime: "19:00", lessonId: "host-today", lessonType: "class", startTime: "16:00", studentIds: [], updatedAt: student.updatedAt },
  { classTemplateId: "mwf-7-10", date: "2026-08-10", endTime: "22:00", lessonId: "wrong-today", lessonType: "class", startTime: "19:00", studentIds: [student.studentId], updatedAt: student.updatedAt },
  { classTemplateId: "mwf-7-10", date: "2026-08-12", endTime: "22:00", lessonId: "host-future", lessonType: "class", startTime: "19:00", studentIds: [], updatedAt: student.updatedAt },
  { classTemplateId: "mwf-4-7", date: "2026-08-12", endTime: "19:00", lessonId: "manual-makeup", lessonType: "makeup", startTime: "16:00", studentIds: [student.studentId], updatedAt: student.updatedAt }
];

const reconcileTomorrowPlan = createClassRosterSavePlan({
  fromDate: "2026-08-11",
  lessons: reconciliationLessons,
  nextStudents: [scheduledStudent],
  previousStudents: [scheduledStudent],
  reconcileStudentIds: [student.studentId]
});
assert.deepEqual(
  reconcileTomorrowPlan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]),
  [["host-future", [student.studentId]]],
  "내일부터 재계산하면 오늘 수업일지와 수동 보강은 그대로 두고 미래 host 명단만 보정합니다."
);

const reconcileTodayPlan = createClassRosterSavePlan({
  fromDate: "2026-08-10",
  lessons: reconciliationLessons,
  nextStudents: [scheduledStudent],
  previousStudents: [scheduledStudent],
  reconcileStudentIds: [student.studentId]
});
assert.deepEqual(
  reconcileTodayPlan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]),
  [
    ["host-today", [student.studentId]],
    ["wrong-today", []],
    ["host-future", [student.studentId]]
  ],
  "오늘부터 재계산하면 오늘 host 이동까지 반영하고 수동 보강은 보존합니다."
);

console.log("student roster effective date tests passed");
