import assert from "node:assert/strict";
import {
  createNotificationJobRouteRegistry,
  notificationJobRouteSignatures
} from "../src/shared/server/notificationJobRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let listResult = { source: "supabase", notificationJobs: [{ notificationJobId: "job-1" }] };
let getJobResult = { source: "supabase", notificationJob: { notificationJobId: "job-1", provider: "solapi", providerMessageId: "group-1" } };
let cancelSolapiResult = { canceled: true };
let cancelJobResult = { source: "supabase", notificationJob: { status: "canceled" } };
let reserveResult = { source: "supabase", notificationJob: { status: "reserved" } };
let reconcileResult = { source: "supabase", updatedCount: 2 };
let upsertResult = { source: "supabase", notificationJob: { notificationJobId: "job-1" } };
let deleteResult = { source: "supabase", deletedNotificationJobIds: ["job-1"] };
let dispatchResult = { source: "supabase", dispatched: 1 };
let readinessResult = { source: "supabase", ready: true };
let reserveBulkResult = { source: "supabase", results: [] };
let dispatchAuthState = { configured: false, ok: false };
let routeError = null;

const registry = createNotificationJobRouteRegistry({
  cancelNotificationJob: async (notificationJobId, reason) => {
    events.push("cancelJob");
    if (routeError?.stage === "cancelJob") throw routeError.error;
    return cancelJobResult;
  },
  cancelSolapiReservationGroup: async (groupId) => {
    events.push("cancelSolapi");
    return cancelSolapiResult;
  },
  deleteNotificationJob: async (notificationJobId) => {
    events.push("delete");
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  dispatchDueNotificationJobs: async (options) => {
    events.push("dispatch");
    if (routeError?.stage === "dispatch") throw routeError.error;
    return dispatchResult;
  },
  checkNotificationReadiness: async (options) => {
    events.push("readiness");
    if (routeError?.stage === "readiness") throw routeError.error;
    return readinessResult;
  },
  getDispatchAuthState: (request, payload) => {
    events.push("authState");
    return dispatchAuthState;
  },
  getNotificationJob: async (notificationJobId) => {
    events.push("getJob");
    if (routeError?.stage === "getJob") throw routeError.error;
    return getJobResult;
  },
  getNotificationJobQueryFilters: (requestUrl) => {
    events.push("filters");
    return {};
  },
  getProviderMessageId: (result) => result?.groupId ?? null,
  listNotificationJobs: async (options) => {
    events.push("list");
    if (routeError?.stage === "list") throw routeError.error;
    return listResult;
  },
  parseVersionedWriteRequest: (method, pathname, body) => {
    events.push("parse");
    return body;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  reconcileSolapiNotificationJobs: async (options) => {
    events.push("reconcile");
    if (routeError?.stage === "reconcile") throw routeError.error;
    return reconcileResult;
  },
  reserveNotificationJobInSolapi: async (notificationJob, options) => {
    events.push("reserve");
    if (routeError?.stage === "reserve") throw routeError.error;
    return reserveResult;
  },
  reserveNotificationJobsInSolapi: async (notificationJobs, options) => {
    events.push("reserveBulk");
    if (routeError?.stage === "reserveBulk") throw routeError.error;
    return reserveBulkResult;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  summarizeNotificationJobForList: (job) => ({ notificationJobId: job.notificationJobId, summarized: true }),
  upsertNotificationJob: async (notificationJob) => {
    events.push("upsert");
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
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
assert.equal(Object.isFrozen(notificationJobRouteSignatures), true);
assert.equal(notificationJobRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(notificationJobRouteSignatures, [
  { method: "GET", path: "/api/notification-jobs" },
  { method: "POST", path: "/api/notification-jobs/cancel" },
  { method: "POST", path: "/api/notification-jobs/reserve" },
  { method: "POST", path: "/api/notification-jobs/reconcile-solapi" },
  { method: "POST", path: "/api/notification-jobs" },
  { method: "DELETE", path: "/api/notification-jobs" },
  { method: "POST", path: "/api/notification-jobs/dispatch-due" },
  { method: "POST", path: "/api/notification-jobs/readiness-check" },
  { method: "POST", path: "/api/notification-jobs/reserve-bulk" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/notification-jobs")), true);
assert.deepEqual(events, ["filters", "list"]);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  source: "supabase",
  notificationJobs: [{ notificationJobId: "job-1", summarized: true }]
});

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/notification-jobs", { includeResult: "true" })), true);
assert.deepEqual(sends.at(-1).body.notificationJobs, listResult.notificationJobs);

events.length = 0;
rawBody = { notificationJobId: "job-1" };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/cancel")), true);
assert.deepEqual(events, ["read", "parse", "getJob", "cancelSolapi", "cancelJob"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...cancelJobResult, solapiCancellation: cancelSolapiResult });

events.length = 0;
rawBody = { notificationJob: { lessonId: "lesson-1" } };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/reserve")), true);
assert.deepEqual(events, ["read", "parse", "reserve"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...reserveResult });

events.length = 0;
rawBody = { date: "2026-01-01" };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/reconcile-solapi")), true);
assert.deepEqual(events, ["read", "parse", "reconcile"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...reconcileResult });

events.length = 0;
rawBody = { notificationJob: { lessonId: "lesson-1" } };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs")), true);
assert.deepEqual(events, ["read", "parse", "upsert"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/notification-jobs", { id: "job-1" })), true);
assert.deepEqual(events, ["delete"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

deleteResult = { source: "supabase", deletedNotificationJobIds: [] };
assert.equal(await registry.dispatch(route("DELETE", "/api/notification-jobs", { id: "job-2" })), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "삭제 가능한 알림 이력이 아니거나 이미 삭제된 기록입니다."
});
assert.equal(sends.at(-1).statusCode, 409);

events.length = 0;
rawBody = {};
dispatchAuthState = { configured: false, ok: false };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/dispatch-due")), true);
assert.deepEqual(events, ["read", "authState", "parse", "dispatch"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...dispatchResult });

events.length = 0;
rawBody = { now: "2026-01-01T00:00:00.000Z" };
dispatchAuthState = { configured: true, ok: false };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/dispatch-due")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "Invalid notification dispatch token." });
assert.equal(sends.at(-1).statusCode, 401);
dispatchAuthState = { configured: false, ok: false };

events.length = 0;
rawBody = { windowMinutes: 15 };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/readiness-check")), true);
assert.deepEqual(events, ["read", "parse", "readiness"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...readinessResult });

events.length = 0;
rawBody = { notificationJobs: [{ lessonId: "lesson-1" }] };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/reserve-bulk")), true);
assert.deepEqual(events, ["read", "parse", "reserveBulk"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...reserveBulkResult });

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/notification-jobs")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = {
  stage: "cancelJob",
  error: Object.assign(new Error("취소 실패"), { code: "JOB_CONFLICT", field: "notificationJobId", statusCode: 409 })
};
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/cancel")), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "취소 실패",
  code: "JOB_CONFLICT",
  field: "notificationJobId"
});
assert.equal(sends.at(-1).statusCode, 409);

routeError = { stage: "getJob", error: new Error("조회 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/cancel")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "조회 실패" });

routeError = { stage: "reserve", error: new Error("예약 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/reserve")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "예약 실패" });

routeError = { stage: "reconcile", error: new Error("재조정 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/reconcile-solapi")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "재조정 실패" });

routeError = { stage: "upsert", error: new Error("저장 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "저장 실패" });

routeError = { stage: "delete", error: new Error("삭제 실패") };
assert.equal(await registry.dispatch(route("DELETE", "/api/notification-jobs", { id: "job-1" })), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제 실패" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "dispatch", error: new Error("발송 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/dispatch-due")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "발송 실패" });

routeError = { stage: "readiness", error: new Error("점검 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/readiness-check")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "점검 실패" });

routeError = { stage: "reserveBulk", error: new Error("일괄 예약 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notification-jobs/reserve-bulk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "일괄 예약 실패" });

console.log("notification job route registry list, cancel, reserve, reconcile, upsert, delete, dispatch, readiness, bulk, and error contracts passed");
