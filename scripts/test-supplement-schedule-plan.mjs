import assert from "node:assert/strict";
import { createSupplementSchedulePersistencePlan } from "../src/domains/supplements/supplementSchedulePlan.js";

const task = {
  makeupTaskId: "makeup-1",
  studentId: "student-1",
  taskType: "absence_makeup",
  scheduledDate: "2026-07-23",
  scheduledTime: "15:00",
  sourceLabel: "7월 20일 결석"
};
const students = [{ studentId: "student-1", name: "고태영" }];
const dependencies = {
  addMinutes: () => "16:00",
  createLessonId: (item) => `lesson_supplement_${item.makeupTaskId}`,
  createLessonName: (_item, student) => `결석보강 · ${student.name}`,
  followUpTypeLabel: () => "결석보강",
  getDayKey: () => "thu",
  getLessonColor: () => "#fixture",
  getLessonStudentIds: (lesson) => lesson.studentIds || [],
  normalizeTime: (value = "") => String(value).slice(0, 5),
  now: () => "2026-07-21T15:00:00.000Z",
  students
};

const plan = createSupplementSchedulePersistencePlan({ ...dependencies, task });
assert.deepEqual(plan.lesson, {
  lessonId: "lesson_supplement_makeup-1",
  classTemplateId: "",
  className: "결석보강 · 고태영",
  lessonType: "makeup",
  date: "2026-07-23",
  dayOfWeek: "thu",
  startTime: "15:00",
  endTime: "16:00",
  color: "#fixture",
  teacherId: "instructor_owner_001",
  studentIds: ["student-1"],
  status: "scheduled",
  lessonTopic: "결석보강 일정",
  sourceMakeupTaskId: "makeup-1",
  sourceLabel: "7월 20일 결석"
});
assert.equal(plan.nextTask.linkedLessonId, "lesson_supplement_makeup-1");
assert.equal(plan.nextTask.lastScheduledAt, "2026-07-21T15:00:00.000Z");
assert.equal(plan.nextTask.needsLessonResync, false);

const linkedPlan = createSupplementSchedulePersistencePlan({
  ...dependencies,
  task: { ...task, linkedLessonId: "lesson-existing" }
});
assert.equal(linkedPlan.lesson.lessonId, "lesson-existing");

await assert.rejects(async () => createSupplementSchedulePersistencePlan({ ...dependencies, students: [], task }), /학생 정보를 찾을 수 없습니다/);
await assert.rejects(async () => createSupplementSchedulePersistencePlan({ ...dependencies, task: { ...task, makeupTaskId: "" } }), /보충관리 ID가 없어/);
await assert.rejects(async () => createSupplementSchedulePersistencePlan({ ...dependencies, task: { ...task, scheduledTime: "" } }), /배정일과 시간을 입력해야/);

const duplicateBySource = { lessonId: "other-1", date: "2026-07-22", startTime: "14:00", className: "기존 원천", lessonType: "makeup", sourceMakeupTaskId: "makeup-1", studentIds: [] };
assert.throws(() => createSupplementSchedulePersistencePlan({ ...dependencies, lessons: [duplicateBySource], task }), /이미 같은 학생의 보충 일정이 있습니다: 2026-07-22 14:00 기존 원천/);

const duplicateByStudentTime = { lessonId: "other-2", date: task.scheduledDate, startTime: "15:00:00", className: "기존 학생 일정", lessonType: "makeup", studentIds: ["student-1"] };
assert.throws(() => createSupplementSchedulePersistencePlan({ ...dependencies, lessons: [duplicateByStudentTime], task }), /기존 학생 일정/);

const ignoredLessons = [
  { ...duplicateByStudentTime, lessonId: "lesson_supplement_makeup-1" },
  { ...duplicateByStudentTime, lessonId: "canceled", status: "canceled" },
  { ...duplicateByStudentTime, lessonId: "regular", lessonType: "regular" }
];
assert.equal(createSupplementSchedulePersistencePlan({ ...dependencies, lessons: ignoredLessons, task }).lesson.lessonId, "lesson_supplement_makeup-1");

console.log("supplement schedule persistence plan: deterministic contract passed");
