import assert from "node:assert/strict";
import {
  createLessonRecordRouteRegistry,
  lessonRecordRouteSignatures
} from "../src/shared/server/lessonRecordRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let listResult = { source: "supabase", records: [] };
let listForLessonsResult = { source: "supabase", records: ["for-lessons"] };
let listLessonsResult = { source: "supabase", lessons: [{ lessonId: "lesson-1" }] };
let upsertResult = { source: "supabase", record: { lessonId: "lesson-1", studentId: "student-1" } };
let patchResult = { source: "supabase", record: { notificationStatus: "sent" } };
let retestPatchResult = { source: "supabase", record: { needsRetest: true } };
let pruneResult = { source: "supabase", removed: 0 };
let upsertBulkResult = { source: "supabase", records: [] };
let routeError = null;

const registry = createLessonRecordRouteRegistry({
  listLessons: async (options) => {
    events.push("listLessons");
    return listLessonsResult;
  },
  listLessonStudentRecords: async () => {
    events.push("list");
    if (routeError?.stage === "list") throw routeError.error;
    return listResult;
  },
  listLessonStudentRecordsForLessons: async (lessons) => {
    events.push("listForLessons");
    if (routeError?.stage === "listForLessons") throw routeError.error;
    return listForLessonsResult;
  },
  pruneStaleLessonStudentRecords: async (lessonId) => {
    events.push("prune");
    if (routeError?.stage === "prune") throw routeError.error;
    return pruneResult;
  },
  patchLessonStudentRecordNotificationStatus: async (record) => {
    events.push("patch");
    if (routeError?.stage === "patch") throw routeError.error;
    return patchResult;
  },
  patchLessonStudentRecordRetestStatus: async (record) => {
    events.push("retestPatch");
    if (routeError?.stage === "retestPatch") throw routeError.error;
    return retestPatchResult;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  upsertLessonStudentRecord: async (record) => {
    events.push("upsert");
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertLessonStudentRecords: async (records) => {
    events.push("upsertBulk");
    if (routeError?.stage === "upsertBulk") throw routeError.error;
    return upsertBulkResult;
  }
});

function route(method, path, searchParams = {}) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  Object.entries(searchParams).forEach(([key, value]) => requestUrl.searchParams.set(key, value));
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(lessonRecordRouteSignatures), true);
assert.equal(lessonRecordRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(lessonRecordRouteSignatures, [
  { method: "GET", path: "/api/lesson-records" },
  { method: "POST", path: "/api/lesson-records" },
  { method: "POST", path: "/api/lesson-records/notification-status" },
  { method: "POST", path: "/api/lesson-records/retest-status" },
  { method: "POST", path: "/api/lesson-records/prune-stale" },
  { method: "POST", path: "/api/lesson-records/bulk" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/lesson-records")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/lesson-records", { date: "2026-01-01" })), true);
assert.deepEqual(events, ["listLessons", "listForLessons"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listForLessonsResult });

events.length = 0;
rawBody = { record: { lessonId: "lesson-1", studentId: "student-1" } };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
rawBody = { record: { lessonId: "lesson-1", studentId: "student-1", notificationStatus: "sent" } };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/notification-status")), true);
assert.deepEqual(events, ["read", "patch"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...patchResult });

events.length = 0;
rawBody = { record: { lessonId: "lesson-1", studentId: "student-1", needsRetest: true } };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/retest-status")), true);
assert.deepEqual(events, ["read", "retestPatch"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...retestPatchResult });

events.length = 0;
rawBody = { lessonId: "lesson-1" };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/prune-stale")), true);
assert.deepEqual(events, ["read", "prune"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...pruneResult });

events.length = 0;
rawBody = { records: [{ lessonId: "lesson-1" }] };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/lesson-records")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "upsert", error: new Error("저장 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "저장 실패" });

routeError = { stage: "patch", error: new Error("상태 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/notification-status")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "상태 실패" });

routeError = { stage: "retestPatch", error: new Error("재시험 상태 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/retest-status")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "재시험 상태 실패" });

routeError = { stage: "prune", error: new Error("정리 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/prune-stale")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "정리 실패" });

routeError = { stage: "upsertBulk", error: new Error("일괄 저장 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/lesson-records/bulk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "일괄 저장 실패" });

console.log("lesson record route registry list, upsert, notification status, retest status, prune, bulk, and error contracts passed");
