import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalDraftPersistencePlan } from "../src/domains/lessons/lessonJournalDraftPersistencePlan.js";

const students = [
  { name: "TARGET 학생", studentId: "student_target" },
  { name: "CONTROL 학생", studentId: "student_control" }
];
const currentHomeworks = [
  {
    homeworkId: "homework_explicit",
    homeworkType: "next",
    lessonId: "lesson_target",
    studentId: "student_control",
    title: "기존 명시 숙제 CONTROL"
  },
  {
    homeworkId: "homework_previous",
    homeworkType: "previous",
    linkedFromLessonId: "lesson_source",
    studentId: "student_target",
    title: "연결 숙제 TARGET"
  },
  {
    homeworkId: "homework_source",
    homeworkType: "next",
    lessonId: "lesson_source",
    studentId: "student_target",
    title: "연결 숙제 TARGET"
  }
];
const nowValues = [
  "2026-07-28T00:00:00.000Z",
  "2026-07-28T00:00:01.000Z",
  "2026-07-28T00:00:02.000Z",
  "2026-07-28T00:00:03.000Z"
];
let nowIndex = 0;
const plan = createLessonJournalDraftPersistencePlan({
  currentHomeworks,
  homeworkDrafts: [
    {
      homeworkType: "next",
      studentId: "student_control",
      title: "명시 변경 TARGET"
    },
    {
      homeworkType: "next",
      studentId: "student_missing",
      title: "무시 CONTROL"
    }
  ],
  lesson: {
    date: "2026-07-28",
    lessonId: "lesson_target"
  },
  lessons: [{ lessonId: "lesson_source" }],
  now: () => nowValues[nowIndex++],
  recordDrafts: [
    {
      assignmentStatus: "complete",
      lessonStudentRecordId: "lsr_target",
      studentId: "student_target"
    },
    {
      assignmentStatus: "not_entered",
      lessonStudentRecordId: "lsr_control",
      studentId: "student_control"
    },
    {
      assignmentStatus: "complete",
      studentId: "student_missing"
    }
  ],
  students,
  dependencies: {
    buildHomeworkDraftUpdate: (homeworks, _lesson, student, _homeworkType, title) => {
      const changed = {
        ...homeworks.find((homework) => homework.homeworkId === "homework_explicit"),
        studentId: student.studentId,
        title
      };
      return {
        changedHomeworks: [changed],
        homeworks: homeworks.map((homework) =>
          homework.homeworkId === changed.homeworkId ? changed : homework
        )
      };
    },
    getHomeworkStatusFromAssignmentStatus: () => ({
      status: "completed",
      teacherStatus: "verified"
    }),
    getLessonHomework: (homeworks, _lesson, student, homeworkType) =>
      homeworks.find(
        (homework) =>
          homework.studentId === student.studentId &&
          homework.homeworkType === homeworkType
      ),
    isAssignmentStatusUnrecorded: (status) => status === "not_entered",
    normalizeAssignmentStatusValue: (status) => status
  }
});

assert.deepEqual(
  plan.recordsToSave.map((record) => ({
    id: record.lessonStudentRecordId,
    updatedAt: record.updatedAt,
    updatedBy: record.updatedBy
  })),
  [
    {
      id: "lsr_target",
      updatedAt: "2026-07-28T00:00:00.000Z",
      updatedBy: "instructor_owner_001"
    },
    {
      id: "lsr_control",
      updatedAt: "2026-07-28T00:00:01.000Z",
      updatedBy: "instructor_owner_001"
    }
  ]
);
assert.deepEqual(
  plan.changedHomeworks.map((homework) => homework.homeworkId),
  ["homework_explicit", "homework_previous", "homework_source"]
);
assert.deepEqual(
  plan.changedHomeworks.slice(1).map((homework) => ({
    assignmentStatus: homework.assignmentStatus,
    checkedAt: homework.checkedAt,
    dueDate: homework.dueDate,
    status: homework.status,
    teacherStatus: homework.teacherStatus,
    updatedAt: homework.updatedAt
  })),
  [
    {
      assignmentStatus: "complete",
      checkedAt: "2026-07-28T00:00:02.000Z",
      dueDate: "2026-07-28",
      status: "completed",
      teacherStatus: "verified",
      updatedAt: "2026-07-28T00:00:03.000Z"
    },
    {
      assignmentStatus: "complete",
      checkedAt: "2026-07-28T00:00:02.000Z",
      dueDate: "2026-07-28",
      status: "completed",
      teacherStatus: "verified",
      updatedAt: "2026-07-28T00:00:03.000Z"
    }
  ]
);
assert.equal(
  plan.nextHomeworks.find((homework) => homework.homeworkId === "homework_explicit").title,
  "명시 변경 TARGET"
);
assert.equal(
  currentHomeworks.find((homework) => homework.homeworkId === "homework_explicit").title,
  "기존 명시 숙제 CONTROL"
);
assert.equal(currentHomeworks[1].assignmentStatus, undefined);

const emptyControl = createLessonJournalDraftPersistencePlan({
  currentHomeworks,
  lesson: { lessonId: "lesson_target" },
  dependencies: {
    buildHomeworkDraftUpdate: () => {
      throw new Error("must not run");
    },
    getHomeworkStatusFromAssignmentStatus: () => {
      throw new Error("must not run");
    },
    getLessonHomework: () => {
      throw new Error("must not run");
    },
    isAssignmentStatusUnrecorded: () => false,
    normalizeAssignmentStatusValue: (value) => value
  }
});
assert.deepEqual(emptyControl.changedHomeworks, []);
assert.deepEqual(emptyControl.recordsToSave, []);
assert.equal(emptyControl.nextHomeworks, currentHomeworks);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const planSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftPersistencePlan.js", import.meta.url),
  "utf8"
);
const saveStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const saveEnd = appSource.indexOf("async function handleSaveRecord(", saveStart);
const saveSource = appSource.slice(saveStart, saveEnd);

for (const binding of [
  "createLessonJournalDraftPersistencePlan({",
  "currentHomeworks: homeworksRef.current",
  "homeworkDrafts,",
  "recordDrafts,",
  "buildHomeworkDraftUpdate,",
  "getHomeworkStatusFromAssignmentStatus,",
  "getLessonHomework,",
  "isAssignmentStatusUnrecorded,",
  "normalizeAssignmentStatusValue",
  "persistencePlan.changedHomeworks",
  "persistencePlan.nextHomeworks",
  "persistencePlan.recordsToSave"
]) {
  assert.ok(saveSource.includes(binding), `missing persistence plan binding: ${binding}`);
}
for (const retainedSideEffect of [
  "saveLessonJournalHomeworksWithVerification(",
  "saveLessonJournalMakeupTasksWithVerification(",
  "saveLessonJournalRecordsWithVerification({",
  "request: postJson",
  "setHomeworks(nextHomeworks)",
  "setMakeupTasks(",
  "setRecords(nextRecords)"
]) {
  assert.ok(saveSource.includes(retainedSideEffect), `save side effect must remain in App: ${retainedSideEffect}`);
}
assert.ok(
  !saveSource.includes("const changedHomeworkMap = new Map()"),
  "App save handler must not retain the extracted homework change plan"
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
    !planSource.includes(forbiddenSideEffect),
    `draft persistence plan must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal draft persistence plan TARGET/CONTROL fixtures passed");
