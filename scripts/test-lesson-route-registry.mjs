import assert from "node:assert/strict";
import {
  createLessonRouteRegistry,
  lessonRouteSignatures
} from "../src/shared/server/lessonRouteRegistry.js";

const events = [];
const sends = [];
const auditLogs = [];
let rawBody = {};
let listResult = { source: "supabase", lessons: [] };
let upsertResult = { source: "supabase", lesson: { lessonId: "lesson-1" } };
let upsertBulkResult = { source: "supabase", lessons: [] };
let preflightResult = { source: "supabase", blockers: [] };
let syncResult = { source: "supabase", lessons: [] };
let deleteResult = { source: "supabase", deleted: true };
let routeError = null;
let auditIdCounter = 0;

const registry = createLessonRouteRegistry({
  createAuditId: () => `audit-${++auditIdCounter}`,
  deleteLesson: async (lessonId) => {
    events.push("deleteLesson");
    if (routeError?.stage === "deleteLesson") throw routeError.error;
    return deleteResult;
  },
  deleteExamPrepLessonForReconcile: async (lessonId, options) => {
    events.push("deleteReconcile");
    if (routeError?.stage === "deleteReconcile") throw routeError.error;
    return { ...deleteResult, audit: { operation: "delete_exam_prep_lesson", auditId: options.auditId } };
  },
  deleteLessonsBefore: async (beforeDate) => {
    events.push("deleteBefore");
    if (routeError?.stage === "deleteBefore") throw routeError.error;
    return deleteResult;
  },
  getLessonClosurePreflight: async (lessonId) => {
    events.push("preflight");
    if (routeError?.stage === "preflight") throw routeError.error;
    return preflightResult;
  },
  logAudit: (tag, audit, options) => {
    auditLogs.push({ tag, audit, options });
  },
  listLessons: async (options) => {
    events.push("list");
    if (routeError?.stage === "list") throw routeError.error;
    return listResult;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  syncSpecialLectureLessonStudentSchedule: async (payload) => {
    events.push("sync");
    if (routeError?.stage === "sync") throw routeError.error;
    return syncResult;
  },
  upsertLesson: async (lesson) => {
    events.push("upsert");
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertLessons: async (lessons) => {
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
assert.equal(Object.isFrozen(lessonRouteSignatures), true);
assert.equal(lessonRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(lessonRouteSignatures, [
  { method: "GET", path: "/api/lessons" },
  { method: "POST", path: "/api/lessons" },
  { method: "POST", path: "/api/lessons/bulk" },
  { method: "GET", path: "/api/lessons/closure-preflight" },
  { method: "POST", path: "/api/lessons/special-lecture-student-schedule" },
  { method: "DELETE", path: "/api/lessons" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/lessons", { date: "2026-01-01", includeCanceled: "true" })), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
rawBody = { lesson: { lessonId: "lesson-1" } };
assert.equal(await registry.dispatch(route("POST", "/api/lessons")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
rawBody = { lessons: [{ lessonId: "lesson-1" }] };
assert.equal(await registry.dispatch(route("POST", "/api/lessons/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/lessons/closure-preflight", { lessonId: "lesson-1" })), true);
assert.deepEqual(events, ["preflight"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...preflightResult });

events.length = 0;
rawBody = { lessonId: "lesson-1" };
assert.equal(await registry.dispatch(route("POST", "/api/lessons/special-lecture-student-schedule")), true);
assert.deepEqual(events, ["read", "sync"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...syncResult });

events.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/lessons", { id: "lesson-1" })), true);
assert.deepEqual(events, ["deleteLesson"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

events.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/lessons", { before: "2026-01-01" })), true);
assert.deepEqual(events, ["deleteBefore"]);

events.length = 0;
auditLogs.length = 0;
auditIdCounter = 0;
assert.equal(
  await registry.dispatch(route("DELETE", "/api/lessons", { id: "lesson-1", mode: "exam-prep-reconcile" })),
  true
);
assert.deepEqual(events, ["deleteReconcile"]);
assert.equal(auditLogs.length, 1);
assert.equal(auditLogs[0].tag, "[exam-prep-delete-audit]");
assert.equal(auditLogs[0].audit.auditId, "audit-1");
assert.equal(auditLogs[0].options, undefined);

events.length = 0;
assert.equal(
  await registry.dispatch(route("DELETE", "/api/lessons", { id: "lesson-1", mode: "exam-prep-reconcile", auditId: "explicit-audit" })),
  true
);
assert.equal(auditLogs.at(-1).audit.auditId, "explicit-audit");

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/lessons")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "preflight", error: new Error("preflight failed") };
assert.equal(await registry.dispatch(route("GET", "/api/lessons/closure-preflight", { lessonId: "lesson-1" })), true);
assert.equal(sends.at(-1).statusCode, 400);

routeError = { stage: "sync", error: new Error("sync failed") };
assert.equal(await registry.dispatch(route("POST", "/api/lessons/special-lecture-student-schedule")), true);
assert.equal(sends.at(-1).statusCode, 409);

auditLogs.length = 0;
routeError = {
  stage: "deleteReconcile",
  error: Object.assign(new Error("삭제 실패"), { audit: { operation: "delete_exam_prep_lesson" } })
};
assert.equal(
  await registry.dispatch(route("DELETE", "/api/lessons", { id: "lesson-1", mode: "exam-prep-reconcile" })),
  true
);
assert.equal(auditLogs.length, 1);
assert.equal(auditLogs[0].options.isError, true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "삭제 실패",
  audit: { operation: "delete_exam_prep_lesson" }
});
assert.equal(sends.at(-1).statusCode, 409);

routeError = { stage: "deleteLesson", error: new Error("삭제 실패 2") };
assert.equal(await registry.dispatch(route("DELETE", "/api/lessons", { id: "lesson-1" })), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제 실패 2" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("lesson route registry list, upsert, bulk, preflight, sync, delete, and error contracts passed");
