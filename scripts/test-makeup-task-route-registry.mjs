import assert from "node:assert/strict";
import {
  createMakeupTaskRouteRegistry,
  makeupTaskRouteSignatures
} from "../src/shared/server/makeupTaskRouteRegistry.js";

const events = [];
const sends = [];
const upsertCalls = [];
const upsertBulkCalls = [];
const deleteCalls = [];
let rawBody = {};
let listResult = { source: "supabase", makeupTasks: [] };
let upsertResult = { source: "supabase", makeupTask: { taskId: "task-1" }, verified: true };
let upsertBulkResult = { source: "supabase", makeupTasks: [] };
let deleteResult = { source: "supabase", taskId: "task-1", verified: true };
let deleteAllResult = { source: "supabase", deletedCount: 3, verified: true };
let routeError = null;

const registry = createMakeupTaskRouteRegistry({
  deleteAllMakeupTasks: async () => {
    events.push("deleteAll");
    if (routeError?.stage === "deleteAll") throw routeError.error;
    return deleteAllResult;
  },
  deleteMakeupTask: async (taskId) => {
    events.push("delete");
    deleteCalls.push(taskId);
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  listMakeupTasks: async () => {
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
  upsertMakeupTask: async (task) => {
    events.push("upsert");
    upsertCalls.push(task);
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertMakeupTasks: async (tasks) => {
    events.push("upsertBulk");
    upsertBulkCalls.push(tasks);
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
assert.equal(Object.isFrozen(makeupTaskRouteSignatures), true);
assert.equal(makeupTaskRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(makeupTaskRouteSignatures, [
  { method: "GET", path: "/api/makeup-tasks" },
  { method: "POST", path: "/api/makeup-tasks" },
  { method: "POST", path: "/api/makeup-tasks/bulk" },
  { method: "DELETE", path: "/api/makeup-tasks" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.equal(await registry.dispatch(route("PATCH", "/api/makeup-tasks")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/makeup-tasks")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
upsertCalls.length = 0;
rawBody = { makeupTask: { taskId: "task-1", title: "결석 보강" } };
assert.equal(await registry.dispatch(route("POST", "/api/makeup-tasks")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(upsertCalls.at(-1), rawBody.makeupTask);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
upsertBulkCalls.length = 0;
rawBody = { makeupTasks: [{ taskId: "task-1" }, { taskId: "task-2" }] };
assert.equal(await registry.dispatch(route("POST", "/api/makeup-tasks/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(upsertBulkCalls.at(-1), rawBody.makeupTasks);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

events.length = 0;
deleteCalls.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/makeup-tasks", { id: "task-1" })), true);
assert.deepEqual(events, ["delete"]);
assert.equal(deleteCalls.at(-1), "task-1");
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

events.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/makeup-tasks", { all: "true" })), true);
assert.deepEqual(events, ["deleteAll"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteAllResult });

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/makeup-tasks")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "upsert", error: new Error("save failed") };
assert.equal(await registry.dispatch(route("POST", "/api/makeup-tasks")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "save failed" });

routeError = { stage: "upsertBulk", error: new Error("bulk save failed") };
assert.equal(await registry.dispatch(route("POST", "/api/makeup-tasks/bulk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "bulk save failed" });

routeError = { stage: "delete", error: new Error("delete failed") };
assert.equal(await registry.dispatch(route("DELETE", "/api/makeup-tasks", { id: "task-1" })), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "delete failed" });

routeError = { stage: "deleteAll", error: new Error("delete all failed") };
assert.equal(await registry.dispatch(route("DELETE", "/api/makeup-tasks", { all: "true" })), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "delete all failed" });

console.log("makeup task route registry list, upsert, bulk, delete, deleteAll, and error contracts passed");
