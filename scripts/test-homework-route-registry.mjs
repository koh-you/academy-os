import assert from "node:assert/strict";
import {
  createHomeworkRouteRegistry,
  homeworkRouteSignatures
} from "../src/shared/server/homeworkRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let listResult = { source: "supabase", homeworks: [] };
let upsertResult = { source: "supabase", homework: { homeworkId: "homework-1" } };
let upsertBulkResult = { source: "supabase", homeworks: [] };
let routeError = null;

const registry = createHomeworkRouteRegistry({
  listHomeworks: async () => {
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
  upsertHomework: async (homework) => {
    events.push("upsert");
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertHomeworks: async (homeworks) => {
    events.push("upsertBulk");
    if (routeError?.stage === "upsertBulk") throw routeError.error;
    return upsertBulkResult;
  }
});

function route(method, path) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(homeworkRouteSignatures), true);
assert.equal(homeworkRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(homeworkRouteSignatures, [
  { method: "GET", path: "/api/homeworks" },
  { method: "POST", path: "/api/homeworks" },
  { method: "POST", path: "/api/homeworks/bulk" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/homeworks")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
rawBody = { homework: { homeworkId: "homework-1" } };
assert.equal(await registry.dispatch(route("POST", "/api/homeworks")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
rawBody = { homeworks: [{ homeworkId: "homework-1" }] };
assert.equal(await registry.dispatch(route("POST", "/api/homeworks/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/homeworks")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "upsert", error: new Error("저장 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/homeworks")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "저장 실패" });

routeError = { stage: "upsertBulk", error: new Error("일괄 저장 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/homeworks/bulk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "일괄 저장 실패" });

console.log("homework route registry list, upsert, bulk, and error contracts passed");
