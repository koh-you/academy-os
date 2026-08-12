import assert from "node:assert/strict";
import {
  createExamPrepContentSavePlan,
  createExamPrepScheduleGroups,
  createExamPrepScheduleSavePlan,
  getExamPrepLessonContent
} from "../src/domains/lessons/examPrepSchedulePlan.js";

const students = [
  { studentId: "a", name: "가학생", schoolName: "상계고", defaultClassTemplateId: "class_1" },
  { studentId: "b", name: "나학생", schoolName: "상계고", defaultClassTemplateId: "class_2" },
  { studentId: "c", name: "다학생", schoolName: "정의여고", defaultClassTemplateId: "class_1" }
];
const templates = [
  { classTemplateId: "class_1", className: "월수금반" },
  { classTemplateId: "class_2", className: "화목반" }
];
const lessons = [
  { lessonId: "l1", lessonType: "examPrep", date: "2026-09-06", startTime: "13:00", endTime: "18:00", studentIds: ["a", "b", "c"], specialLectureStudentSchedules: [] },
  { lessonId: "l2", lessonType: "examPrep", date: "2026-09-13", startTime: "13:00", endTime: "18:00", studentIds: ["a", "b", "c"], specialLectureStudentSchedules: [{ studentId: "c", startTime: "15:00", endTime: "17:00", scheduleType: "adjusted" }] },
  { lessonId: "l3", lessonType: "examPrep", date: "2026-09-20", startTime: "13:00", endTime: "18:00", studentIds: ["a", "c"], specialLectureStudentSchedules: [] }
];

assert.deepEqual(
  createExamPrepScheduleGroups({ lesson: lessons[0], mode: "class", students, templates }).map(({ key, label, studentIds }) => ({ key, label, studentIds })),
  [
    { key: "class_1", label: "월수금반", studentIds: ["a", "c"] },
    { key: "class_2", label: "화목반", studentIds: ["b"] }
  ]
);

const firstPlan = createExamPrepScheduleSavePlan({
  lessons,
  mode: "school",
  persistedLessons: [],
  selectedKeys: ["상계고"],
  sourceLesson: lessons[0],
  startTime: "14:00",
  endTime: "16:00",
  students
});
assert.deepEqual(firstPlan.targetStudentIds, ["a", "b"]);
assert.deepEqual(firstPlan.changes.map((change) => [change.after.lessonId, change.after.specialLectureStudentSchedules.map((schedule) => schedule.studentId)]), [
  ["l1", ["a", "b"]],
  ["l2", ["c", "a", "b"]],
  ["l3", ["a"]]
]);

const persistedAfterFirst = firstPlan.changes.map((change) => ({ ...change.after, updatedAt: `2026-09-${change.after.lessonId}` }));
const secondPlan = createExamPrepScheduleSavePlan({
  lessons: persistedAfterFirst,
  mode: "student",
  persistedLessons: persistedAfterFirst,
  selectedKeys: ["a"],
  sourceLesson: persistedAfterFirst[1],
  startTime: "16:00",
  endTime: "18:00",
  students
});
assert.deepEqual(secondPlan.changes.map((change) => change.after.lessonId), ["l2", "l3"]);
assert.equal(persistedAfterFirst[0].specialLectureStudentSchedules.find((schedule) => schedule.studentId === "a").startTime, "14:00");
assert.equal(secondPlan.changes[0].after.specialLectureStudentSchedules.find((schedule) => schedule.studentId === "a").startTime, "16:00");
assert.equal(secondPlan.changes[1].after.specialLectureStudentSchedules.find((schedule) => schedule.studentId === "a").startTime, "16:00");

assert.throws(() => createExamPrepScheduleSavePlan({ lessons, sourceLesson: lessons[0], students, selectedKeys: [], startTime: "14:00", endTime: "13:00" }), /종료 시간/);

assert.equal(getExamPrepLessonContent({ lessonTopic: "시험대비" }), "");
assert.equal(getExamPrepLessonContent({ lessonTopic: " 함수 단원 오답 정리 " }), "함수 단원 오답 정리");
const contentPlan = createExamPrepContentSavePlan({
  content: " 함수 단원 오답 정리 ",
  persistedLessons: [{ ...lessons[0], lessonTopic: "시험대비", updatedAt: "version-1" }],
  sourceLesson: lessons[0]
});
assert.equal(contentPlan.changes.length, 1);
assert.equal(contentPlan.changes[0].before.updatedAt, "version-1");
assert.equal(contentPlan.changes[0].after.lessonTopic, "함수 단원 오답 정리");
assert.equal(contentPlan.content, "함수 단원 오답 정리");
assert.equal(createExamPrepContentSavePlan({
  content: "함수 단원 오답 정리",
  persistedLessons: [contentPlan.changes[0].after],
  sourceLesson: contentPlan.changes[0].after
}).changes.length, 0);

console.log("exam prep schedule plan tests passed");
