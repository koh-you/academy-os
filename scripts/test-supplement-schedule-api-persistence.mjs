import assert from "node:assert/strict";
import { createSupplementScheduleSavePlan } from "../src/domains/supplements/supplementSchedulePersistence.js";

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://supplement-schedule-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

const rowsByTable = { lessons: [], makeup_tasks: [] };
let failTaskInsertBeforeApply = false;
let failLessonPatchAfterApply = false;
let failTaskPatchAfterApply = false;
let mutateLessonBeforeTaskConflict = false;

function matchingRows(table, requestUrl) {
  const idField = table === "lessons" ? "lesson_id" : "makeup_task_id";
  return rowsByTable[table].filter((row) => [...requestUrl.searchParams.entries()].every(([field, raw]) => {
    if (![idField, "updated_at"].includes(field)) return true;
    return String(row[field] ?? "") === raw.replace(/^eq\./, "");
  }));
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  const table = requestUrl.pathname.split("/rest/v1/")[1];
  const method = options.method || "GET";
  assert.ok(table === "lessons" || table === "makeup_tasks", `unexpected table ${table}`);
  if (method === "GET") {
    if (table === "makeup_tasks" && mutateLessonBeforeTaskConflict) {
      mutateLessonBeforeTaskConflict = false;
      rowsByTable.lessons[0] = {
        ...rowsByTable.lessons[0],
        source_label: "다른 화면의 최신 수업일지",
        updated_at: "2026-08-05T09:00:00.000Z"
      };
    }
    return Response.json(structuredClone(matchingRows(table, requestUrl)));
  }
  if (method === "POST") {
    const rows = JSON.parse(options.body || "[]");
    if (table === "makeup_tasks" && failTaskInsertBeforeApply) {
      failTaskInsertBeforeApply = false;
      return new Response(JSON.stringify({ message: "fixture task insert failed" }), { status: 500 });
    }
    const idField = table === "lessons" ? "lesson_id" : "makeup_task_id";
    if (rowsByTable[table].some((stored) => rows.some((row) => row[idField] === stored[idField]))) {
      return new Response(JSON.stringify({ message: "duplicate key" }), { status: 409 });
    }
    rowsByTable[table].push(...structuredClone(rows));
    return Response.json(rows);
  }
  if (method === "PATCH") {
    const targets = matchingRows(table, requestUrl);
    const patch = JSON.parse(options.body || "{}");
    targets.forEach((target) => Object.assign(target, structuredClone(patch)));
    if (table === "lessons" && failLessonPatchAfterApply) {
      failLessonPatchAfterApply = false;
      return new Response(JSON.stringify({ message: "response lost after lesson patch" }), { status: 504 });
    }
    if (table === "makeup_tasks" && failTaskPatchAfterApply) {
      failTaskPatchAfterApply = false;
      return new Response(JSON.stringify({ message: "response lost after task patch" }), { status: 504 });
    }
    return Response.json(structuredClone(targets));
  }
  if (method === "DELETE") {
    const targets = matchingRows(table, requestUrl);
    rowsByTable[table] = rowsByTable[table].filter((row) => !targets.includes(row));
    return Response.json(structuredClone(targets));
  }
  assert.fail(`unexpected Supabase fixture request: ${method} ${requestUrl}`);
};

const initialLesson = {
  className: "안전 보충",
  color: "#123456",
  date: "2026-08-05",
  endTime: "16:30",
  lessonId: "safe-supplement-lesson",
  lessonTopic: "결석 보강 일정",
  lessonType: "makeup",
  sourceLabel: "안전 원 수업",
  sourceMakeupTaskId: "safe-supplement-task",
  startTime: "15:30",
  status: "scheduled",
  studentIds: ["safe-student"]
};
const initialTask = {
  linkedLessonDate: "2026-08-05",
  linkedLessonId: "safe-supplement-lesson",
  linkedLessonTime: "15:30",
  makeupTaskId: "safe-supplement-task",
  scheduledDate: "2026-08-05",
  scheduledTime: "15:30",
  sourceId: "safe-source",
  sourceLabel: "안전 원 수업",
  status: "scheduled",
  studentId: "safe-student",
  taskType: "absence_makeup"
};

try {
  const { saveSupplementSchedulePlan } = await import("../api/routes/coreData.js");

  failTaskInsertBeforeApply = true;
  await assert.rejects(
    saveSupplementSchedulePlan({
      auditId: "rollback-new-plan",
      ...createSupplementScheduleSavePlan({ afterLesson: initialLesson, afterTask: initialTask })
    }),
    (error) => error.audit?.rollback?.verified === true
  );
  assert.equal(rowsByTable.lessons.length, 0, "failed task insert must roll back the new lesson");
  assert.equal(rowsByTable.makeup_tasks.length, 0);

  const created = await saveSupplementSchedulePlan({
    auditId: "create-plan",
    ...createSupplementScheduleSavePlan({ afterLesson: initialLesson, afterTask: initialTask })
  });
  assert.equal(created.verified, true);
  assert.equal(rowsByTable.lessons.length, 1);
  assert.equal(rowsByTable.makeup_tasks.length, 1);

  const retry = await saveSupplementSchedulePlan({
    auditId: "retry-plan",
    ...createSupplementScheduleSavePlan({ afterLesson: initialLesson, afterTask: initialTask })
  });
  assert.equal(retry.verified, true);
  assert.equal(rowsByTable.lessons.length, 1, "same plan retry must not duplicate the lesson");
  assert.equal(rowsByTable.makeup_tasks.length, 1, "same plan retry must not duplicate the task");

  const beforeLesson = created.lesson;
  const beforeTask = created.makeupTask;
  const changedLesson = { ...beforeLesson, date: "2026-08-06", startTime: "16:00", endTime: "17:00" };
  const changedTask = {
    ...beforeTask,
    linkedLessonDate: "2026-08-06",
    linkedLessonTime: "16:00",
    scheduledDate: "2026-08-06",
    scheduledTime: "16:00"
  };
  failLessonPatchAfterApply = true;
  failTaskPatchAfterApply = true;
  const updated = await saveSupplementSchedulePlan({
    auditId: "update-plan",
    ...createSupplementScheduleSavePlan({
      afterLesson: changedLesson,
      afterTask: changedTask,
      beforeLesson,
      beforeTask
    })
  });
  assert.equal(updated.lesson.date, "2026-08-06");
  assert.equal(updated.makeupTask.scheduledTime, "16:00");

  const beforeConflictLesson = updated.lesson;
  const beforeConflictTask = updated.makeupTask;
  const taskMetadata = JSON.parse(rowsByTable.makeup_tasks[0].note);
  rowsByTable.makeup_tasks[0] = {
    ...rowsByTable.makeup_tasks[0],
    note: JSON.stringify({ ...taskMetadata, supplementHomeworkNote: "다른 화면의 최신 보충 메모" }),
    updated_at: "2026-08-05T08:00:00.000Z"
  };
  const conflictLesson = { ...beforeConflictLesson, date: "2026-08-07" };
  const conflictTask = {
    ...beforeConflictTask,
    linkedLessonDate: "2026-08-07",
    scheduledDate: "2026-08-07"
  };
  await assert.rejects(
    saveSupplementSchedulePlan({
      auditId: "task-conflict-rolls-back-lesson",
      ...createSupplementScheduleSavePlan({
        afterLesson: conflictLesson,
        afterTask: conflictTask,
        beforeLesson: beforeConflictLesson,
        beforeTask: beforeConflictTask
      })
    }),
    (error) => error.code === "SUPPLEMENT_SCHEDULE_CONFLICT" && error.audit?.rollback?.verified === true
  );
  assert.equal(rowsByTable.lessons[0].lesson_date, "2026-08-06");
  assert.equal(rowsByTable.lessons[0].updated_at, beforeConflictLesson.updatedAt);
  assert.equal(JSON.parse(rowsByTable.makeup_tasks[0].note).supplementHomeworkNote, "다른 화면의 최신 보충 메모");

  rowsByTable.makeup_tasks[0] = {
    ...rowsByTable.makeup_tasks[0],
    note: JSON.stringify(taskMetadata),
    updated_at: beforeConflictTask.updatedAt
  };
  mutateLessonBeforeTaskConflict = true;
  rowsByTable.makeup_tasks[0].updated_at = "2026-08-05T08:30:00.000Z";
  await assert.rejects(
    saveSupplementSchedulePlan({
      auditId: "rollback-collision",
      ...createSupplementScheduleSavePlan({
        afterLesson: conflictLesson,
        afterTask: conflictTask,
        beforeLesson: beforeConflictLesson,
        beforeTask: beforeConflictTask
      })
    }),
    (error) => error.code === "SUPPLEMENT_SCHEDULE_PARTIAL_FAILURE" && error.audit?.rollback?.verified === false
  );
  assert.equal(rowsByTable.lessons[0].source_label, "다른 화면의 최신 수업일지");
  assert.equal(rowsByTable.lessons[0].updated_at, "2026-08-05T09:00:00.000Z");
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("supplement schedule atomic save, CAS, rollback, and collision fixtures passed");
