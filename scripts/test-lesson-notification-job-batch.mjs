import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonNotificationJobBatch } from "../src/domains/lessons/lessonNotificationJobBatch.js";

const closureLesson = {
  lessonId: "lesson_CLOSURE",
  lessonType: "closure"
};
const closureCalls = [];
assert.deepEqual(
  createLessonNotificationJobBatch({
    buildJob() {
      closureCalls.push("build");
      throw new Error("closure lesson must not build jobs");
    },
    isClosureLesson(lesson) {
      closureCalls.push(["closure", lesson]);
      return true;
    },
    lesson: closureLesson,
    mode: "default",
    scheduledDate: "2026-07-29T05:00:00.000Z",
    students: [
      {
        studentId: "student_CONTROL"
      }
    ]
  }),
  []
);
assert.deepEqual(closureCalls, [["closure", closureLesson]]);

const lesson = {
  lessonId: "lesson_TARGET",
  lessonType: "regular"
};
const students = [
  {
    name: "가상 TARGET",
    studentId: "student_TARGET"
  },
  {
    name: "가상 CONTROL",
    studentId: "student_CONTROL"
  }
];
const inputSnapshot = structuredClone({
  lesson,
  students
});
const scheduledDate = "2026-07-29T05:00:00.000Z";
const calls = [];
const targetParentJob = {
  notificationJobId: "job_TARGET_parent"
};
const targetStudentJob = {
  notificationJobId: "job_TARGET_student"
};
const controlStudentJob = {
  notificationJobId: "job_CONTROL_student"
};
const result = createLessonNotificationJobBatch({
  buildJob(currentLesson, student, target, currentScheduledDate, mode) {
    calls.push([
      "build",
      currentLesson,
      student,
      target,
      currentScheduledDate,
      mode
    ]);
    if (student.studentId === "student_TARGET" && target === "parent") {
      return targetParentJob;
    }
    if (student.studentId === "student_TARGET" && target === "student") {
      return targetStudentJob;
    }
    if (target === "parent") return null;
    return controlStudentJob;
  },
  isClosureLesson(currentLesson) {
    calls.push(["closure", currentLesson]);
    return false;
  },
  lesson,
  mode: "delay30",
  scheduledDate,
  students
});
assert.deepEqual(result, [
  targetParentJob,
  targetStudentJob,
  controlStudentJob
]);
assert.deepEqual(calls, [
  ["closure", lesson],
  ["build", lesson, students[0], "parent", scheduledDate, "delay30"],
  ["build", lesson, students[0], "student", scheduledDate, "delay30"],
  ["build", lesson, students[1], "parent", scheduledDate, "delay30"],
  ["build", lesson, students[1], "student", scheduledDate, "delay30"]
]);
assert.equal(result[0], targetParentJob);
assert.equal(result[1], targetStudentJob);
assert.equal(result[2], controlStudentJob);
assert.deepEqual(
  {
    lesson,
    students
  },
  inputSnapshot
);

const falsyResult = createLessonNotificationJobBatch({
  buildJob(currentLesson, student, target) {
    if (target === "parent") return false;
    return "";
  },
  isClosureLesson: () => false,
  lesson,
  mode: "default",
  scheduledDate,
  students: [students[0]]
});
assert.deepEqual(falsyResult, []);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const batchSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationJobBatch.js", import.meta.url),
  "utf8"
);
for (const binding of [
  'import { createLessonNotificationJobBatch } from "../domains/lessons/lessonNotificationJobBatch.js"',
  "function buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode)",
  "return createLessonNotificationJobBatch({",
  "buildJob: buildLessonNotificationJob",
  "isClosureLesson: getIsClosureLesson",
  "students: lessonStudents"
]) {
  assert.ok(appSource.includes(binding), `missing batch binding: ${binding}`);
}
assert.ok(!appSource.includes("if (getIsClosureLesson(lesson)) return []"));
assert.ok(!appSource.includes('buildLessonNotificationJob(lesson, student, "parent", scheduledDate, mode)'));

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "setNotificationJobs",
  "persistCanceledNotificationJob",
  "reserveLessonNotificationJobs"
]) {
  assert.ok(
    !batchSource.includes(forbiddenSideEffect),
    `lesson notification batch must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson notification job batch TARGET/CONTROL fixtures passed");
