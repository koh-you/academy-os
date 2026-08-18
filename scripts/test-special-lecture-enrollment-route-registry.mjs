import assert from "node:assert/strict";
import {
  createSpecialLectureEnrollmentRouteRegistry,
  specialLectureEnrollmentRouteSignatures
} from "../src/shared/server/specialLectureEnrollmentRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let listResult = { source: "supabase", specialLectureEnrollments: [] };
let upsertResult = { source: "supabase", enrollment: { enrollmentId: "enrollment-1" } };
let upsertBulkResult = { source: "supabase", enrollments: [] };
let routeError = null;

const registry = createSpecialLectureEnrollmentRouteRegistry({
  listSpecialLectureEnrollments: async () => {
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
  upsertSpecialLectureEnrollment: async (enrollment) => {
    events.push("upsert");
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertSpecialLectureEnrollments: async (enrollments) => {
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
assert.equal(Object.isFrozen(specialLectureEnrollmentRouteSignatures), true);
assert.equal(specialLectureEnrollmentRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(specialLectureEnrollmentRouteSignatures, [
  { method: "GET", path: "/api/special-lecture-enrollments" },
  { method: "POST", path: "/api/special-lecture-enrollments" },
  { method: "POST", path: "/api/special-lecture-enrollments/bulk" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/special-lecture-enrollments")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
rawBody = { enrollment: { enrollmentId: "enrollment-1", studentId: "student-1" } };
assert.equal(await registry.dispatch(route("POST", "/api/special-lecture-enrollments")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
rawBody = { enrollments: [{ enrollmentId: "enrollment-1" }, { enrollmentId: "enrollment-2" }] };
assert.equal(await registry.dispatch(route("POST", "/api/special-lecture-enrollments/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/special-lecture-enrollments")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "upsert", error: new Error("저장 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/special-lecture-enrollments")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "저장 실패" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "upsertBulk", error: new Error("일괄 저장 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/special-lecture-enrollments/bulk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "일괄 저장 실패" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("special lecture enrollment route registry list, upsert, bulk, and error contracts passed");
