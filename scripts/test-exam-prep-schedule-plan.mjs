import assert from "node:assert/strict";
import {
  createExamPrepScheduleGroups,
  createExamPrepScheduleSavePlan,
  rebaseExamPrepScheduleChange
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

// 버전 충돌 복구. 서버가 돌려준 최신 수업 위에 같은 편집을 다시 얹는다.
// 화면이 옛 원본을 들고 있던 사이 태블릿 출결이 명단에 학생을 추가했고(updatedAt 도
// 바뀜), 다른 학생의 시간도 다른 화면에서 바뀐 상황.
const conflictChange = secondPlan.changes[0]; // l2, 대상 a, 16:00-18:00
const currentLesson = {
  ...persistedAfterFirst[1],
  studentIds: [...persistedAfterFirst[1].studentIds, "z"],
  specialLectureStudentSchedules: [
    { studentId: "c", startTime: "09:00", endTime: "10:00", scheduleType: "adjusted", overrideReason: "다른 화면" },
    { studentId: "a", startTime: "14:00", endTime: "16:00", scheduleType: "adjusted", overrideReason: "시험대비 일정 수정" }
  ],
  updatedAt: "2026-09-12T10:00:00.000Z"
};
const rebased = rebaseExamPrepScheduleChange(conflictChange, currentLesson, secondPlan);
// before 는 서버 최신본 그대로 — CAS 가 이걸 기준으로 다시 비교한다.
assert.equal(rebased.before, currentLesson);
assert.equal(rebased.after.updatedAt, "2026-09-12T10:00:00.000Z");
// 최신 명단(z 추가)을 유지하고, 편집 대상(a)만 새 시간, 다른 학생(c)의 최신 시간은 보존.
assert.deepEqual(rebased.after.studentIds, [...persistedAfterFirst[1].studentIds, "z"]);
assert.deepEqual(
  rebased.after.specialLectureStudentSchedules.map((schedule) => [schedule.studentId, schedule.startTime, schedule.endTime]),
  [["c", "09:00", "10:00"], ["a", "16:00", "18:00"]]
);

// 다른 수업의 change 는 건드리지 않는다.
assert.equal(rebaseExamPrepScheduleChange(secondPlan.changes[1], currentLesson, secondPlan), secondPlan.changes[1]);
// 최신본이 없으면 원래 change 그대로.
assert.equal(rebaseExamPrepScheduleChange(conflictChange, null, secondPlan), conflictChange);
// 최신 명단에 대상 학생이 없으면 null — 그 수업은 이번 저장에서 뺀다.
assert.equal(
  rebaseExamPrepScheduleChange(conflictChange, { ...currentLesson, studentIds: ["c", "z"] }, secondPlan),
  null
);

console.log("exam prep schedule plan tests passed");
