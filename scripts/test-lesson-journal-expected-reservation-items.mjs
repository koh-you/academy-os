import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalExpectedReservationItems } from "../src/domains/lessons/lessonJournalExpectedReservationItems.js";

function createDependencies(calls) {
  return {
    buildPayloadSnapshot: (payload) => {
      calls.payloads.push(payload);
      return payload;
    },
    createEmptyRecord: (lesson, student) => {
      calls.emptyRecords.push([lesson.lessonId, student.studentId]);
      return {
        lessonId: lesson.lessonId,
        notificationMutedParent: student.studentId === "student_CONTROL",
        notificationMutedStudent: false,
        studentId: student.studentId
      };
    },
    createNotificationJobId: (lessonId, studentId, audience) =>
      `${lessonId}:${studentId}:${audience}`,
    findRecord: (records, lesson, student) =>
      records.find((record) =>
        record.lessonId === lesson.lessonId &&
        record.studentId === student.studentId
      ),
    getHomework: (...args) => {
      calls.homeworkArgs.push(args);
      return {
        homeworkId: `${args[2].studentId}:${args[3]}`,
        title: `${args[3]} 숙제`
      };
    },
    getPayloadFingerprint: (payload) =>
      [
        payload.student.studentId,
        payload.audience,
        payload.scheduledDate,
        payload.previousHomework?.homeworkId,
        payload.nextHomework?.homeworkId,
        payload.supplementSchedules.join(","),
        payload.testResultLines.join(",")
      ].join("|"),
    getScheduledDate: (lesson, delayMinutes, options) => {
      calls.scheduledDates.push([lesson.lessonId, delayMinutes, options]);
      return `2026-07-29T${delayMinutes === 30 ? "09:30" : "09:00"}:00.000Z`;
    },
    getSupplementSchedules: (makeupTasks, studentId, options) => {
      calls.supplements.push([makeupTasks, studentId, options]);
      return [`supplement:${studentId}`];
    },
    getTestResultLines: (testSessions, testAttempts, lesson, student) => {
      calls.tests.push([testSessions, testAttempts, lesson.lessonId, student.studentId]);
      return [`test:${student.studentId}`];
    }
  };
}

function createCalls() {
  return {
    emptyRecords: [],
    homeworkArgs: [],
    payloads: [],
    scheduledDates: [],
    supplements: [],
    tests: []
  };
}

const lesson = { lessonId: "lesson_TARGET" };
const students = [
  { studentId: "student_TARGET" },
  { studentId: "student_CONTROL" }
];
const records = [
  {
    lessonId: "lesson_TARGET",
    notificationMutedParent: false,
    notificationMutedStudent: true,
    studentId: "student_TARGET"
  }
];
const homeworks = [{ homeworkId: "homework_SOURCE" }];
const lessons = [lesson];
const makeupTasks = [{ makeupTaskId: "makeup_SOURCE" }];
const testAttempts = [{ attemptId: "attempt_SOURCE" }];
const testSessions = [{ sessionId: "session_SOURCE" }];
const inputSnapshot = structuredClone({
  homeworks,
  lesson,
  lessons,
  makeupTasks,
  records,
  students,
  testAttempts,
  testSessions
});

const calls = createCalls();
const items = createLessonJournalExpectedReservationItems({
  ...createDependencies(calls),
  homeworks,
  lesson,
  lessons,
  makeupTasks,
  notificationPlanMode: "delay30",
  notificationTemplates: { lesson: "template_TARGET" },
  records,
  students,
  testAttempts,
  testSessions
});

assert.deepEqual(items, [
  {
    fingerprint: "student_TARGET|parent|2026-07-29T09:30:00.000Z|student_TARGET:previous|student_TARGET:next|supplement:student_TARGET|test:student_TARGET",
    notificationJobId: "lesson_TARGET:student_TARGET:parent"
  },
  {
    fingerprint: "student_CONTROL|student|2026-07-29T09:30:00.000Z|student_CONTROL:previous|student_CONTROL:next|supplement:student_CONTROL|test:student_CONTROL",
    notificationJobId: "lesson_TARGET:student_CONTROL:student"
  }
]);
assert.deepEqual(calls.scheduledDates, [
  ["lesson_TARGET", 30, { allowPastFallback: false }]
]);
assert.deepEqual(calls.emptyRecords, [["lesson_TARGET", "student_CONTROL"]]);
assert.equal(calls.homeworkArgs.length, 4);
assert.equal(calls.homeworkArgs[0].length, 5);
assert.equal(calls.homeworkArgs[0][3], "previous");
assert.equal(calls.homeworkArgs[0][4], lessons);
assert.equal(calls.homeworkArgs[1].length, 4);
assert.equal(calls.homeworkArgs[1][3], "next");
assert.deepEqual(calls.payloads.map((payload) => [payload.student.studentId, payload.audience]), [
  ["student_TARGET", "parent"],
  ["student_CONTROL", "student"]
]);
assert.deepEqual(
  { homeworks, lesson, lessons, makeupTasks, records, students, testAttempts, testSessions },
  inputSnapshot
);

const manualCalls = createCalls();
const manualItems = createLessonJournalExpectedReservationItems({
  ...createDependencies(manualCalls),
  lesson,
  notificationPlanMode: "manual",
  notificationPlanScheduledAt: "2026-07-30T10:00:00.000Z",
  records,
  students: [students[0]]
});
assert.equal(manualCalls.scheduledDates.length, 0);
assert.deepEqual(manualItems.map((item) => item.notificationJobId), [
  "lesson_TARGET:student_TARGET:parent"
]);
assert.equal(manualCalls.payloads[0].scheduledDate, "2026-07-30T10:00:00.000Z");

for (const earlyCase of [
  {
    notificationPlanMode: "none",
    notificationPlanScheduledAt: "2026-07-30T10:00:00.000Z"
  },
  {
    notificationPlanMode: "manual",
    notificationPlanScheduledAt: ""
  }
]) {
  const earlyCalls = createCalls();
  assert.deepEqual(
    createLessonJournalExpectedReservationItems({
      ...createDependencies(earlyCalls),
      ...earlyCase,
      lesson,
      students
    }),
    []
  );
  assert.deepEqual(earlyCalls, createCalls());
}

const defaultCalls = createCalls();
createLessonJournalExpectedReservationItems({
  ...createDependencies(defaultCalls),
  lesson,
  notificationPlanMode: "default",
  students: []
});
assert.deepEqual(defaultCalls.scheduledDates, [
  ["lesson_TARGET", 0, { allowPastFallback: false }]
]);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const builderSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalExpectedReservationItems.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);
const builderStart = detailSource.indexOf("function getExpectedSolapiReservationItems()");
const builderEnd = detailSource.indexOf("\n  const solapiReservationSyncStatus", builderStart);
const AppBuilderSource = detailSource.slice(builderStart, builderEnd);

for (const binding of [
  'import { createLessonJournalExpectedReservationItems } from "../domains/lessons/lessonJournalExpectedReservationItems.js"',
  "return createLessonJournalExpectedReservationItems({",
  "buildPayloadSnapshot: buildLessonReservationPayloadSnapshot,",
  "createNotificationJobId: createLessonNotificationJobId,",
  "getPayloadFingerprint: getLessonReservationPayloadFingerprint,",
  "getScheduledDate: getLessonAlimtalkScheduledDate,",
  "notificationPlanScheduledAt: lessonNotificationPlan?.scheduledAt,",
  "students: lessonStudents,"
]) {
  assert.ok(appSource.includes(binding), `missing App expected-item binding: ${binding}`);
}
for (const movedLogic of [
  'if (notificationPlanMode === "none") return []',
  "students.flatMap((student) =>",
  'return ["parent", "student"].flatMap((audience) =>',
  "record.notificationMutedParent",
  "record.notificationMutedStudent",
  "const payloadSnapshot = buildPayloadSnapshot({",
  "fingerprint: getPayloadFingerprint(payloadSnapshot)",
  "notificationJobId: createNotificationJobId("
]) {
  assert.ok(builderSource.includes(movedLogic), `missing expected-item builder contract: ${movedLogic}`);
}
assert.ok(!AppBuilderSource.includes("lessonStudents.flatMap("));
for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs",
  "new Date"
]) {
  assert.ok(!builderSource.includes(forbiddenSideEffect), `expected-item builder must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal expected reservation item TARGET/CONTROL fixtures passed");
