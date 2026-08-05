import assert from "node:assert/strict";
import {
  createTestSessionReadRouteRegistry,
  testSessionReadRouteSignatures
} from "../src/shared/server/testSessionReadRouteRegistry.js";

const attemptCalls = [];
const sends = [];
const sessionCalls = [];
let routeError = null;
const registry = createTestSessionReadRouteRegistry({
  listTestAttempts: async (filters) => {
    attemptCalls.push(filters);
    if (routeError === "attempts") throw new Error("attempt source failed");
    return { source: "supabase", testAttempts: [{ testAttemptId: "attempt-safe" }] };
  },
  listTestSessions: async (filters) => {
    sessionCalls.push(filters);
    if (routeError === "sessions") throw new Error("session source failed");
    return { source: "supabase", testSessions: [{ testSessionId: "session-safe" }] };
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

function request(method = "GET", path = "/api/test-sessions") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(testSessionReadRouteSignatures, [
  { method: "GET", path: "/api/test-sessions" },
  { method: "GET", path: "/api/test-attempts" }
]);
assert.equal(await registry.dispatch(request("POST")), false);
assert.equal(await registry.dispatch(request("GET", "/unknown")), false);
assert.equal(sends.length, 0);

assert.equal(await registry.dispatch(request("GET", "/api/test-sessions?date=2026-08-05&testDate=legacy&classTemplateId=class-safe")), true);
assert.deepEqual(sessionCalls.at(-1), {
  testDate: "2026-08-05",
  classTemplateId: "class-safe"
});
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  source: "supabase",
  testSessions: [{ testSessionId: "session-safe" }]
});

assert.equal(await registry.dispatch(request("GET", "/api/test-sessions?testDate=2026-08-04")), true);
assert.deepEqual(sessionCalls.at(-1), { testDate: "2026-08-04", classTemplateId: "" });

assert.equal(await registry.dispatch(request("GET", "/api/test-attempts?testSessionId=session-safe&studentId=student-safe")), true);
assert.deepEqual(attemptCalls.at(-1), {
  testSessionId: "session-safe",
  studentId: "student-safe"
});
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  source: "supabase",
  testAttempts: [{ testAttemptId: "attempt-safe" }]
});

routeError = "sessions";
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 500);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "session source failed" });

routeError = "attempts";
assert.equal(await registry.dispatch(request("GET", "/api/test-attempts")), true);
assert.equal(sends.at(-1).statusCode, 500);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "attempt source failed" });

console.log("test session and attempt read query, source response, and failure contracts passed");
