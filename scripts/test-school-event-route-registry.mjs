import assert from "node:assert/strict";
import {
  createSchoolEventRouteRegistry,
  schoolEventRouteSignatures
} from "../src/shared/server/schoolEventRouteRegistry.js";

const events = [];
const sends = [];
const bodies = [];
let rawBody = {};
let listResult = { source: "supabase", schoolEvents: [] };
let upsertResult = { source: "supabase", schoolEvent: { eventId: "event-1" }, verified: true };
let upsertBulkResult = { source: "supabase", schoolEvents: [] };
let deleteResult = { source: "supabase", schoolEventId: "event-1", verified: true };
let routeError = null;

const registry = createSchoolEventRouteRegistry({
  deleteSchoolEvent: async (eventId, options) => {
    events.push("delete");
    bodies.push({ eventId, options });
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  listSchoolEvents: async () => {
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
  upsertSchoolEvent: async (event) => {
    events.push("upsert");
    bodies.push(event);
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertSchoolEvents: async (events2) => {
    events.push("upsertBulk");
    bodies.push(events2);
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
assert.equal(Object.isFrozen(schoolEventRouteSignatures), true);
assert.equal(schoolEventRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(schoolEventRouteSignatures, [
  { method: "GET", path: "/api/school-events" },
  { method: "POST", path: "/api/school-events" },
  { method: "POST", path: "/api/school-events/bulk" },
  { method: "DELETE", path: "/api/school-events" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.equal(await registry.dispatch(route("PATCH", "/api/school-events")), false);
assert.deepEqual(events, []);

events.length = 0;
sends.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/school-events")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1), {
  body: { ok: true, ...listResult },
  request: sends.at(-1).request,
  response: sends.at(-1).response,
  statusCode: 200
});

events.length = 0;
bodies.length = 0;
rawBody = { schoolEvent: { eventId: "event-1", title: "중간고사" } };
assert.equal(await registry.dispatch(route("POST", "/api/school-events")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(bodies.at(-1), rawBody.schoolEvent);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });
assert.equal(sends.at(-1).statusCode, 200);

events.length = 0;
bodies.length = 0;
rawBody = { schoolEvents: [{ eventId: "event-1" }, { eventId: "event-2" }] };
assert.equal(await registry.dispatch(route("POST", "/api/school-events/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(bodies.at(-1), rawBody.schoolEvents);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

events.length = 0;
bodies.length = 0;
assert.equal(
  await registry.dispatch(route("DELETE", "/api/school-events", { id: "event-1", expectedUpdatedAt: "2026-08-01T00:00:00.000Z" })),
  true
);
assert.deepEqual(events, ["delete"]);
assert.deepEqual(bodies.at(-1), { eventId: "event-1", options: { expectedUpdatedAt: "2026-08-01T00:00:00.000Z" } });
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

events.length = 0;
sends.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/school-events")), true);
assert.deepEqual(events, []);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제할 학사일정 ID가 필요합니다." });
assert.equal(sends.at(-1).statusCode, 500);

routeError = {
  stage: "upsert",
  error: Object.assign(new Error("다른 화면에서 먼저 변경되었습니다."), {
    code: "SCHOOL_EVENT_CONFLICT",
    currentSchoolEvent: { eventId: "event-1", title: "기말고사" },
    statusCode: 409
  })
};
rawBody = { schoolEvent: { eventId: "event-1", title: "중간고사" } };
assert.equal(await registry.dispatch(route("POST", "/api/school-events")), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "다른 화면에서 먼저 변경되었습니다.",
  code: "SCHOOL_EVENT_CONFLICT",
  currentSchoolEvent: { eventId: "event-1", title: "기말고사" }
});
assert.equal(sends.at(-1).statusCode, 409);

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/school-events")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("school event route registry list, upsert, bulk, delete, and error contracts passed");
