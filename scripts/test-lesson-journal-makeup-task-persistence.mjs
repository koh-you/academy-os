import assert from "node:assert/strict";
import {
  createLessonJournalMakeupTaskId,
  createLessonJournalMakeupTaskPersistenceSnapshot
} from "../src/domains/lessons/lessonJournalMakeupTaskPersistence.js";

const taskDraft = {
  studentId: "safe-makeup-student",
  sourceHomeworkId: "safe-source-homework",
  sourceId: "safe-source-homework",
  sourceLabel: "안전 원 숙제",
  sourceLessonId: "safe-source-lesson",
  supplementHomeworkNote: "안전 원 숙제",
  supplementMethod: "arrival_makeup",
  taskType: "homework_makeup"
};
const stableTaskId = createLessonJournalMakeupTaskId(taskDraft);
assert.equal(stableTaskId, createLessonJournalMakeupTaskId({ ...taskDraft, createdAt: "later" }));
assert.notEqual(stableTaskId, createLessonJournalMakeupTaskId({ ...taskDraft, sourceId: "other-source" }));
assert.deepEqual(
  createLessonJournalMakeupTaskPersistenceSnapshot({ ...taskDraft, createdAt: "first", updatedAt: "first" }),
  createLessonJournalMakeupTaskPersistenceSnapshot({ ...taskDraft, createdAt: "retry", updatedAt: "retry" })
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://lesson-makeup-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

let storedRows = [];
let insertCount = 0;
let patchCount = 0;
let failInsertAfterApply = false;
let failPatchAfterApply = false;

function matchingRows(requestUrl) {
  return storedRows.filter((row) => [...requestUrl.searchParams.entries()].every(([field, raw]) => {
    if (!["makeup_task_id", "updated_at"].includes(field)) return true;
    return row[field] === raw.replace(/^eq\./, "");
  }));
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  const table = requestUrl.pathname.split("/rest/v1/")[1];
  const method = options.method || "GET";
  assert.equal(table, "makeup_tasks");
  if (method === "GET") return Response.json(matchingRows(requestUrl));
  if (method === "POST") {
    const rows = JSON.parse(options.body || "[]");
    if (storedRows.some((stored) => rows.some((row) => row.makeup_task_id === stored.makeup_task_id))) {
      return new Response(JSON.stringify({ message: "duplicate key" }), { status: 409 });
    }
    storedRows.push(...structuredClone(rows));
    insertCount += rows.length;
    if (failInsertAfterApply) {
      failInsertAfterApply = false;
      return new Response(JSON.stringify({ message: "response lost after insert" }), { status: 504 });
    }
    return Response.json(rows);
  }
  if (method === "PATCH") {
    const targets = matchingRows(requestUrl);
    const patch = JSON.parse(options.body || "{}");
    targets.forEach((target) => Object.assign(target, structuredClone(patch)));
    patchCount += targets.length;
    if (failPatchAfterApply) {
      failPatchAfterApply = false;
      return new Response(JSON.stringify({ message: "response lost after patch" }), { status: 504 });
    }
    return Response.json(targets);
  }
  assert.fail(`unexpected Supabase fixture request: ${method} ${requestUrl}`);
};

try {
  const { saveLessonJournalMakeupTasks } = await import("../api/routes/coreData.js");
  const firstRequest = {
    ...taskDraft,
    attemptCount: 0,
    childHomeworkIds: [],
    createdAt: "2026-08-03T00:00:00.000Z",
    makeupTaskId: stableTaskId,
    notificationDraft: "",
    scheduledDate: "2026-08-03",
    scheduledTime: "",
    status: "draft"
  };

  failInsertAfterApply = true;
  const firstResult = await saveLessonJournalMakeupTasks([firstRequest], { auditId: "unknown-insert" });
  assert.equal(firstResult.verified, true);
  assert.equal(firstResult.makeupTasks[0].makeupTaskId, stableTaskId);
  assert.equal(insertCount, 1);
  assert.equal(patchCount, 0);

  const retryResult = await saveLessonJournalMakeupTasks([
    { ...firstRequest, createdAt: "2026-08-03T00:01:00.000Z" }
  ], { auditId: "retry-same-logical-request" });
  assert.equal(retryResult.verified, true);
  assert.equal(insertCount, 1, "unknown-result retry must not insert a duplicate task");
  assert.equal(patchCount, 0, "same desired retry must not rewrite the saved task");

  const currentTask = retryResult.makeupTasks[0];
  failPatchAfterApply = true;
  const updatedResult = await saveLessonJournalMakeupTasks([{
    ...currentTask,
    supplementHomeworkNote: "교사 후속 수정"
  }], { auditId: "unknown-patch" });
  assert.equal(updatedResult.makeupTasks[0].supplementHomeworkNote, "교사 후속 수정");
  assert.equal(patchCount, 1);

  const storedMetadata = JSON.parse(storedRows[0].note);
  storedRows[0] = {
    ...storedRows[0],
    note: JSON.stringify({ ...storedMetadata, supplementHomeworkNote: "다른 화면의 최신 수정" }),
    updated_at: "2026-08-03T00:10:00.000Z"
  };
  await assert.rejects(
    saveLessonJournalMakeupTasks([{
      ...updatedResult.makeupTasks[0],
      supplementHomeworkNote: "오래된 재시도"
    }], { auditId: "stale-retry" }),
    (error) => error.code === "LESSON_JOURNAL_MAKEUP_TASK_CONFLICT" && error.statusCode === 409
  );
  assert.equal(JSON.parse(storedRows[0].note).supplementHomeworkNote, "다른 화면의 최신 수정");
  assert.equal(patchCount, 1, "stale retry must not overwrite the newer task");
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("lesson journal makeup stable ID, unknown-result retry, CAS, and verification fixtures passed");
