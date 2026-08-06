import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonNotificationJobId,
  isActiveNotificationJobStatus,
  isLessonCommentNotificationJob,
  isLessonRecordNotificationMuted,
  selectLessonStudentRecord
} from "../src/domains/lessons/lessonNotificationJobSelectors.js";
import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";

assert.equal(
  createLessonNotificationJobId(
    "lesson_TARGET",
    "student_TARGET",
    "parent"
  ),
  "lesson_comment_lesson_TARGET_student_TARGET_parent"
);
assert.equal(
  createLessonNotificationJobId("lesson_CONTROL", 123, "student"),
  "lesson_comment_lesson_CONTROL_123_student"
);
assert.equal(
  createLessonNotificationJobId(undefined, null, ""),
  "lesson_comment_undefined_null_"
);

for (const status of ["sent", "dry_run", "failed", "canceled"]) {
  const job = {
    notificationJobId: `job_${status}`,
    status
  };
  const snapshot = structuredClone(job);
  assert.equal(isActiveNotificationJobStatus(job), false, `${status} must be inactive`);
  assert.deepEqual(job, snapshot);
}

for (const status of [
  "scheduled",
  "queued",
  "pending_send",
  "send_unconfirmed",
  "draft",
  ""
]) {
  assert.equal(
    isActiveNotificationJobStatus({
      status
    }),
    true,
    `${status || "empty"} must stay active`
  );
}
assert.equal(isActiveNotificationJobStatus({}), true);
assert.equal(isActiveNotificationJobStatus(), true);

assert.equal(isLessonCommentNotificationJob({ notificationType: "parent_comment" }), true);
assert.equal(isLessonCommentNotificationJob({ notificationType: "student_comment" }), true);
assert.equal(isLessonCommentNotificationJob({ notificationType: "attendance" }), false);
assert.equal(isLessonCommentNotificationJob({ notificationType: "student_reminder" }), false);
assert.equal(isLessonCommentNotificationJob({}), false);
assert.equal(isLessonCommentNotificationJob(), false);

const mutedRecord = {
  notificationMutedParent: {
    reason: "가상 학부모 제외 TARGET"
  },
  notificationMutedStudent: 1
};
const mutedSnapshot = structuredClone(mutedRecord);
assert.equal(
  isLessonRecordNotificationMuted(mutedRecord, "student"),
  true
);
assert.equal(
  isLessonRecordNotificationMuted(mutedRecord, "parent"),
  true
);
assert.equal(
  isLessonRecordNotificationMuted(mutedRecord, "control"),
  true
);
assert.equal(
  isLessonRecordNotificationMuted(
    {
      notificationMutedParent: 0,
      notificationMutedStudent: ""
    },
    "student"
  ),
  false
);
assert.equal(
  isLessonRecordNotificationMuted(
    {
      notificationMutedParent: false,
      notificationMutedStudent: true
    },
    "parent"
  ),
  false
);
assert.equal(isLessonRecordNotificationMuted(null, "student"), false);
assert.equal(isLessonRecordNotificationMuted(undefined, "parent"), false);
assert.deepEqual(mutedRecord, mutedSnapshot);

const storedRecord = {
  lessonStudentRecordId: "record_TARGET",
  teacherComment: "저장된 TARGET"
};
const targetRecords = [storedRecord];
const targetLesson = {
  lessonId: "lesson_TARGET"
};
const targetStudent = {
  studentId: "student_TARGET"
};
const targetInputsSnapshot = structuredClone({
  lesson: targetLesson,
  records: targetRecords,
  student: targetStudent
});
const targetCalls = [];
const selectedStoredRecord = selectLessonStudentRecord({
  createEmptyRecord() {
    targetCalls.push("create");
    throw new Error("stored TARGET must not create a fallback record");
  },
  findRecord(records, lesson, student) {
    targetCalls.push({
      lesson,
      records,
      student,
      type: "find"
    });
    return storedRecord;
  },
  lesson: targetLesson,
  records: targetRecords,
  student: targetStudent
});
assert.strictEqual(selectedStoredRecord, storedRecord);
assert.equal(targetCalls.length, 1);
assert.equal(targetCalls[0].type, "find");
assert.strictEqual(targetCalls[0].records, targetRecords);
assert.strictEqual(targetCalls[0].lesson, targetLesson);
assert.strictEqual(targetCalls[0].student, targetStudent);
assert.deepEqual(
  {
    lesson: targetLesson,
    records: targetRecords,
    student: targetStudent
  },
  targetInputsSnapshot
);

for (const missingRecord of [null, undefined]) {
  const fallbackRecord = {
    lessonStudentRecordId: `record_fallback_${String(missingRecord)}`
  };
  const fallbackCalls = [];
  const selectedFallback = selectLessonStudentRecord({
    createEmptyRecord(lesson, student) {
      fallbackCalls.push({
        lesson,
        student,
        type: "create"
      });
      return fallbackRecord;
    },
    findRecord(records, lesson, student) {
      fallbackCalls.push({
        lesson,
        records,
        student,
        type: "find"
      });
      return missingRecord;
    },
    lesson: targetLesson,
    records: targetRecords,
    student: targetStudent
  });
  assert.strictEqual(selectedFallback, fallbackRecord);
  assert.deepEqual(
    fallbackCalls.map((call) => call.type),
    ["find", "create"]
  );
  assert.strictEqual(fallbackCalls[1].lesson, targetLesson);
  assert.strictEqual(fallbackCalls[1].student, targetStudent);
}

for (const preservedControl of [false, 0, ""]) {
  let fallbackCallCount = 0;
  const selectedControl = selectLessonStudentRecord({
    createEmptyRecord() {
      fallbackCallCount += 1;
      return storedRecord;
    },
    findRecord() {
      return preservedControl;
    },
    lesson: targetLesson,
    records: targetRecords,
    student: targetStudent
  });
  assert.strictEqual(selectedControl, preservedControl);
  assert.equal(fallbackCallCount, 0);
}

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const selectorSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationJobSelectors.js", import.meta.url),
  "utf8"
);
for (const binding of [
  "createLessonNotificationJobId,",
  "isActiveNotificationJobStatus",
  "isLessonCommentNotificationJob",
  "isLessonRecordNotificationMuted",
  "selectLessonStudentRecord",
  "return createLessonNotificationJobId(lessonId, studentId, target)",
  "return isActiveNotificationJobStatus(job)",
  "lessonNotificationJobs.filter(isActiveNotificationJobStatus)",
  "createNotificationJobId: createLessonNotificationJobId",
  "return selectLessonStudentRecord({",
  "findRecord: findLessonStudentRecord",
  "records: recordsRef.current",
  "if (isLessonRecordNotificationMuted(record, target)) return null",
  "if (isLessonRecordNotificationMuted(record, target)) return;"
]) {
  assert.ok(appSource.includes(binding), `missing lesson job selector binding: ${binding}`);
}
assert.equal(
  appSource.split(".filter(isLessonCommentNotificationJob)").length - 1,
  4,
  "lesson comment reservation updates must preserve attendance and other notification jobs"
);
assert.ok(!appSource.includes("function createLessonNotificationJobId("));
assert.ok(!appSource.includes("function isActiveNotificationJobStatus("));
assert.ok(!appSource.includes("function isRecordNotificationMuted("));
assert.ok(
  !appSource.includes(
    "findLessonStudentRecord(recordsRef.current, lesson, student) ?? createEmptyRecord(lesson, student)"
  )
);

for (const sourceToken of [
  "const inactiveLessonNotificationJobStatuses",
  "export function createLessonNotificationJobId(",
  "`lesson_comment_${lessonId}_${studentId}_${target}`",
  "export function isActiveNotificationJobStatus(job = {})",
  "!inactiveLessonNotificationJobStatuses.has(job.status)",
  "export function isLessonCommentNotificationJob(job = {})",
  "lessonCommentNotificationTypes.has(job.notificationType)",
  "export function isLessonRecordNotificationMuted(record, target)",
  'target === "student"',
  "Boolean(record?.notificationMutedStudent)",
  "Boolean(record?.notificationMutedParent)",
  "export function selectLessonStudentRecord({",
  "return findRecord(records, lesson, student) ?? createEmptyRecord(lesson, student)"
]) {
  assert.ok(selectorSource.includes(sourceToken), `missing lesson job rule: ${sourceToken}`);
}

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
  "setNotification"
]) {
  assert.ok(
    !selectorSource.includes(forbiddenSideEffect),
    `lesson notification job selector must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson notification job selector TARGET/CONTROL fixtures passed");
