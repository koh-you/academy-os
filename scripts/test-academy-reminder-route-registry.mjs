import assert from "node:assert/strict";
import {
  academyReminderRouteSignatures,
  createAcademyReminderRouteRegistry
} from "../src/shared/server/academyReminderRouteRegistry.js";

const events = [];
const sends = [];
const listCalls = [];
const upsertCalls = [];
const deleteCalls = [];
let rawBody = {};
let listResult = { source: "supabase", academyReminders: [] };
let upsertResult = { source: "supabase", academyReminder: { reminderId: "reminder-1" }, verified: true };
let deleteResult = { source: "supabase", reminderId: "reminder-1", verified: true };
let routeError = null;

const registry = createAcademyReminderRouteRegistry({
  deleteAcademyReminder: async (reminderId) => {
    events.push("delete");
    deleteCalls.push(reminderId);
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  listAcademyReminders: async (filters) => {
    events.push("list");
    listCalls.push(filters);
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
  upsertAcademyReminder: async (reminder) => {
    events.push("upsert");
    upsertCalls.push(reminder);
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
assert.equal(Object.isFrozen(academyReminderRouteSignatures), true);
assert.equal(academyReminderRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(academyReminderRouteSignatures, [
  { method: "GET", path: "/api/academy-reminders" },
  { method: "POST", path: "/api/academy-reminders" },
  { method: "DELETE", path: "/api/academy-reminders" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.equal(await registry.dispatch(route("PATCH", "/api/academy-reminders")), false);
assert.deepEqual(events, []);

events.length = 0;
listCalls.length = 0;
assert.equal(
  await registry.dispatch(route("GET", "/api/academy-reminders", {
    date: "2026-08-18",
    includeDone: "true",
    status: "pending"
  })),
  true
);
assert.deepEqual(events, ["list"]);
assert.deepEqual(listCalls.at(-1), {
  date: "2026-08-18",
  from: "",
  to: "",
  includeDone: true,
  status: "pending"
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });
assert.equal(sends.at(-1).statusCode, 200);

events.length = 0;
upsertCalls.length = 0;
rawBody = { academyReminder: { reminderId: "reminder-1", title: "상담 일정" } };
assert.equal(await registry.dispatch(route("POST", "/api/academy-reminders")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(upsertCalls.at(-1), rawBody.academyReminder);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
deleteCalls.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/academy-reminders", { id: "reminder-1" })), true);
assert.deepEqual(events, ["delete"]);
assert.equal(deleteCalls.at(-1), "reminder-1");
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

routeError = { stage: "upsert", error: new Error("save failed") };
assert.equal(await registry.dispatch(route("POST", "/api/academy-reminders")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "save failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/academy-reminders")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "delete", error: new Error("delete failed") };
assert.equal(await registry.dispatch(route("DELETE", "/api/academy-reminders", { id: "reminder-1" })), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "delete failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("academy reminder route registry list, upsert, delete, and error contracts passed");
