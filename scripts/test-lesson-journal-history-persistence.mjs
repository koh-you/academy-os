import assert from "node:assert/strict";
import { saveLessonJournalHistoryAction } from "../src/domains/lessons/lessonJournalHistoryAction.js";
import {
  areLessonJournalHistoryHomeworksEqual,
  areLessonJournalHistoryLessonsEqual,
  createLessonJournalHistoryPlan,
  verifyLessonJournalHistoryPlan
} from "../src/domains/lessons/lessonJournalHistoryPersistence.js";

const version0 = "2026-08-03T00:00:00.000Z";
const sourceLesson = {
  className: "안전반",
  classTemplateId: "safe-class",
  color: "#17213a",
  date: "2026-08-03",
  endTime: "18:00",
  lessonId: "safe-source-lesson",
  lessonTopic: "정규수업",
  lessonType: "class",
  startTime: "16:00",
  status: "scheduled",
  studentIds: ["safe-student"],
  updatedAt: version0
};
const copiedLesson = {
  ...sourceLesson,
  date: "2026-08-05",
  lessonId: "safe-copied-lesson",
  updatedAt: ""
};
const copiedHomework = {
  assignedDate: "2026-08-03",
  dueDate: "2026-08-05",
  homeworkId: "safe-copied-homework",
  homeworkType: "previous",
  lessonId: copiedLesson.lessonId,
  linkedFromDate: sourceLesson.date,
  linkedFromLessonId: sourceLesson.lessonId,
  status: "verified",
  studentId: "safe-student",
  studentStatus: "not_started",
  teacherStatus: "unverified",
  title: "안전 숙제",
  updatedAt: ""
};

assert.equal(areLessonJournalHistoryLessonsEqual(copiedLesson, { ...copiedLesson, startTime: "16:00:00" }), true);
assert.equal(areLessonJournalHistoryHomeworksEqual(copiedHomework, { ...copiedHomework, updatedAt: version0 }), true);
const copyPlan = createLessonJournalHistoryPlan({
  action: "copy",
  afterLesson: copiedLesson,
  homeworks: [copiedHomework]
});
assert.equal(copyPlan.homeworkChanges.length, 1);
assert.equal(verifyLessonJournalHistoryPlan(copyPlan, {
  homeworks: [copiedHomework],
  lesson: copiedLesson
}).verified, true);

let actionPayload = null;
await saveLessonJournalHistoryAction({
  action: "copy",
  afterLesson: copiedLesson,
  homeworks: [copiedHomework],
  request: async (path, payload, timeout) => {
    assert.equal(path, "/api/lesson-journal/history-action");
    assert.equal(timeout, 30000);
    actionPayload = payload;
    return {
      action: payload.action,
      auditId: payload.auditId,
      homeworks: [copiedHomework],
      lesson: copiedLesson,
      source: "supabase",
      verified: true
    };
  }
});
assert.equal(actionPayload.action, "copy");

const copyTargetHomework = {
  ...copiedHomework,
  homeworkId: "safe-source-next-homework",
  homeworkType: "next",
  lessonId: sourceLesson.lessonId
};
const copyTarget = {
  date: "2026-08-06",
  dayOfWeek: "thu",
  findPreviousLesson: () => sourceLesson,
  homeworks: [copyTargetHomework],
  lessons: [sourceLesson],
  sourceLesson
};
let unknownResultPayload = null;
const originalConsoleError = console.error;
try {
  console.error = () => {};
  await assert.rejects(saveLessonJournalHistoryAction({
    action: "copy",
    copyTarget,
    request: async (_path, payload) => {
      unknownResultPayload = payload;
      throw new Error("response lost after commit");
    }
  }), /response lost/);
} finally {
  console.error = originalConsoleError;
}
let retryPayload = null;
await saveLessonJournalHistoryAction({
  action: "copy",
  copyTarget,
  request: async (_path, payload) => {
    retryPayload = payload;
    return {
      auditId: payload.auditId,
      homeworks: payload.homeworkChanges.map((change) => change.after),
      lesson: payload.lessonChange.after,
      source: "supabase",
      verified: true
    };
  }
});
assert.equal(retryPayload.lessonChange.after.lessonId, unknownResultPayload.lessonChange.after.lessonId);
assert.deepEqual(retryPayload.homeworkChanges, unknownResultPayload.homeworkChanges);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://lesson-history-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

function toLessonRow(lesson) {
  return {
    class_name: lesson.className,
    class_template_id: lesson.classTemplateId || null,
    color: lesson.color,
    end_time: lesson.endTime,
    lesson_date: lesson.date,
    lesson_id: lesson.lessonId,
    lesson_topic: lesson.lessonTopic,
    lesson_type: lesson.lessonType,
    source_label: lesson.sourceLabel || null,
    source_makeup_task_id: lesson.sourceMakeupTaskId || null,
    source_school_event_id: lesson.sourceSchoolEventId || null,
    start_time: lesson.startTime,
    status: lesson.status,
    student_ids: lesson.studentIds,
    updated_at: lesson.updatedAt
  };
}

function toHomeworkRow(homework) {
  return {
    assigned_date: homework.assignedDate || null,
    assignment_status: homework.assignmentStatus || null,
    checked_at: homework.checkedAt || null,
    due_date: homework.dueDate || null,
    homework_id: homework.homeworkId,
    homework_type: homework.homeworkType,
    incomplete_homework: homework.incompleteHomework || null,
    lesson_id: homework.lessonId,
    linked_from_date: homework.linkedFromDate || null,
    linked_from_lesson_id: homework.linkedFromLessonId || null,
    status: homework.status || null,
    student_id: homework.studentId,
    student_status: homework.studentStatus,
    subject: homework.subject || null,
    teacher_status: homework.teacherStatus,
    title: homework.title,
    total_problems: homework.totalProblems ?? null,
    updated_at: homework.updatedAt,
    verified_at: homework.verifiedAt || null
  };
}

let storedLessons;
let storedHomeworks;
let storedRecords;
let storedNotificationJobs;
let lessonInsertCount;
let homeworkInsertCount;
let failNextHomeworkInsert;

function resetFixture() {
  storedLessons = [toLessonRow(sourceLesson)];
  storedHomeworks = [];
  storedRecords = [];
  storedNotificationJobs = [];
  lessonInsertCount = 0;
  homeworkInsertCount = 0;
  failNextHomeworkInsert = false;
}

function getEq(searchParams, field) {
  return searchParams.get(field)?.replace(/^eq\./, "") ?? "";
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  const table = requestUrl.pathname.split("/rest/v1/")[1];
  const method = options.method || "GET";
  const tableRows = {
    homeworks: storedHomeworks,
    lesson_student_records: storedRecords,
    lessons: storedLessons,
    notification_jobs: storedNotificationJobs
  }[table];
  if (method === "GET" && tableRows) {
    const identityFields = {
      homeworks: ["homework_id", "lesson_id"],
      lesson_student_records: ["lesson_id"],
      lessons: ["lesson_id"],
      notification_jobs: ["lesson_id"]
    }[table];
    let rows = tableRows;
    identityFields.forEach((field) => {
      const expected = getEq(requestUrl.searchParams, field);
      if (expected) rows = rows.filter((row) => row[field] === expected);
    });
    return Response.json(rows);
  }
  if (method === "POST" && ["lessons", "homeworks"].includes(table)) {
    if (table === "homeworks" && failNextHomeworkInsert) {
      failNextHomeworkInsert = false;
      return new Response(JSON.stringify({ message: "forced homework insert failure" }), { status: 409 });
    }
    const body = JSON.parse(options.body || "[]");
    if (table === "lessons") {
      storedLessons.push(...body);
      lessonInsertCount += body.length;
    } else {
      storedHomeworks.push(...body);
      homeworkInsertCount += body.length;
    }
    return Response.json(body);
  }
  if (method === "PATCH" && table === "lessons") {
    const lessonId = getEq(requestUrl.searchParams, "lesson_id");
    const version = getEq(requestUrl.searchParams, "updated_at");
    const index = storedLessons.findIndex((row) => row.lesson_id === lessonId && row.updated_at === version);
    if (index < 0) return Response.json([]);
    storedLessons[index] = { ...storedLessons[index], ...JSON.parse(options.body || "{}") };
    return Response.json([storedLessons[index]]);
  }
  if (method === "DELETE" && ["lessons", "homeworks"].includes(table)) {
    const idField = table === "lessons" ? "lesson_id" : "homework_id";
    const id = getEq(requestUrl.searchParams, idField);
    const version = getEq(requestUrl.searchParams, "updated_at");
    const rows = table === "lessons" ? storedLessons : storedHomeworks;
    const deleted = rows.filter((row) => row[idField] === id && (!version || row.updated_at === version));
    if (table === "lessons") storedLessons = rows.filter((row) => !deleted.includes(row));
    else storedHomeworks = rows.filter((row) => !deleted.includes(row));
    return Response.json(deleted);
  }
  assert.fail(`unexpected Supabase fixture request: ${method} ${table} ${requestUrl.search}`);
};

try {
  const { saveLessonJournalHistoryPlan } = await import("../api/routes/coreData.js");
  resetFixture();
  const savedCopy = await saveLessonJournalHistoryPlan({ auditId: "copy-1", ...copyPlan });
  assert.equal(savedCopy.verified, true);
  assert.equal(savedCopy.lesson.lessonId, copiedLesson.lessonId);
  assert.equal(savedCopy.homeworks.length, 1);
  assert.equal(lessonInsertCount, 1);
  assert.equal(homeworkInsertCount, 1);
  await saveLessonJournalHistoryPlan({ auditId: "copy-retry", ...copyPlan });
  assert.equal(lessonInsertCount, 1, "copy retry must not insert the lesson twice");
  assert.equal(homeworkInsertCount, 1, "copy retry must not insert homework twice");

  const cancelPlan = createLessonJournalHistoryPlan({
    action: "cancel",
    afterLesson: { ...savedCopy.lesson, status: "canceled" },
    beforeLesson: savedCopy.lesson
  });
  const canceled = await saveLessonJournalHistoryPlan({ auditId: "cancel-1", ...cancelPlan });
  assert.equal(canceled.lesson.status, "canceled");
  const cancelRetry = await saveLessonJournalHistoryPlan({ auditId: "cancel-retry", ...cancelPlan });
  assert.equal(cancelRetry.lesson.status, "canceled");

  const undoCancelPlan = createLessonJournalHistoryPlan({
    action: "undo_cancel",
    afterLesson: { ...savedCopy.lesson, status: "scheduled" },
    beforeLesson: canceled.lesson
  });
  storedRecords.push({
    attendance: "present",
    homework: "done",
    lesson_id: copiedLesson.lessonId,
    lesson_student_record_id: "safe-restored-record",
    student_id: "safe-student",
    updated_at: version0
  });
  const restored = await saveLessonJournalHistoryPlan({ auditId: "undo-cancel", ...undoCancelPlan });
  assert.equal(restored.lesson.status, "scheduled");
  assert.equal(restored.relatedHomeworks[0].homeworkId, copiedHomework.homeworkId);
  assert.equal(restored.relatedRecords[0].lessonStudentRecordId, "safe-restored-record");
  storedRecords = [];

  const undoCopyPlan = createLessonJournalHistoryPlan({
    action: "undo_copy",
    beforeLesson: restored.lesson,
    homeworks: savedCopy.homeworks
  });
  const removed = await saveLessonJournalHistoryPlan({ auditId: "undo-copy", ...undoCopyPlan });
  assert.equal(removed.lesson, null);
  assert.equal(storedLessons.some((row) => row.lesson_id === copiedLesson.lessonId), false);
  assert.equal(storedHomeworks.length, 0);
  const removedRetry = await saveLessonJournalHistoryPlan({ auditId: "undo-copy-retry", ...undoCopyPlan });
  assert.equal(removedRetry.verified, true);

  resetFixture();
  failNextHomeworkInsert = true;
  await assert.rejects(
    saveLessonJournalHistoryPlan({ auditId: "copy-rollback", ...copyPlan }),
    (error) => error.audit?.rollback?.verified === true
  );
  assert.equal(storedLessons.some((row) => row.lesson_id === copiedLesson.lessonId), false);
  assert.equal(storedHomeworks.length, 0);

  resetFixture();
  const protectedCopy = await saveLessonJournalHistoryPlan({ auditId: "copy-protected", ...copyPlan });
  storedRecords.push({ lesson_id: copiedLesson.lessonId, lesson_student_record_id: "safe-record" });
  await assert.rejects(
    saveLessonJournalHistoryPlan({
      auditId: "undo-copy-protected",
      ...createLessonJournalHistoryPlan({
        action: "undo_copy",
        beforeLesson: protectedCopy.lesson,
        homeworks: protectedCopy.homeworks
      })
    }),
    /새 수업기록·숙제·알림 작업/
  );
  assert.equal(storedLessons.some((row) => row.lesson_id === copiedLesson.lessonId), true);
  assert.equal(storedHomeworks.length, 1);
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("lesson journal copy cancel undo CAS, retry, protection, and rollback fixtures passed");
