import assert from "node:assert/strict";
import {
  createTestSessionWriteRouteRegistry,
  testSessionWriteRouteSignatures
} from "../src/shared/server/testSessionWriteRouteRegistry.js";

const deleteCalls = [];
const sends = [];
const upsertCalls = [];
let rawBody = {};
let routeError = null;
const registry = createTestSessionWriteRouteRegistry({
  deleteTestSession: async (testSessionId) => {
    deleteCalls.push(testSessionId);
    if (routeError === "delete") throw new Error("delete source failed");
    return { deletedTestSessionId: testSessionId, source: "supabase" };
  },
  readJsonBody: async () => rawBody,
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode }),
  upsertTestSessionWithAttempts: async (...args) => {
    upsertCalls.push(args);
    if (routeError === "upsert") throw new Error("write source failed");
    return { source: "supabase", testSession: args[0], testAttempts: args[1] };
  }
});

function request(method = "POST", path = "/api/test-sessions") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(testSessionWriteRouteSignatures, [
  { method: "POST", path: "/api/test-sessions" },
  { method: "DELETE", path: "/api/test-sessions" }
]);
assert.equal(await registry.dispatch(request("GET")), false);
assert.equal(await registry.dispatch(request("POST", "/unknown")), false);

rawBody = {
  testSession: { testSessionId: "session-canonical" },
  session: { testSessionId: "session-legacy" },
  testAttempts: [{ testAttemptId: "attempt-canonical" }],
  attempts: [{ testAttemptId: "attempt-legacy" }]
};
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(upsertCalls.at(-1), [rawBody.testSession, rawBody.testAttempts]);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  source: "supabase",
  testSession: rawBody.testSession,
  testAttempts: rawBody.testAttempts
});

rawBody = {
  session: { testSessionId: "session-legacy" },
  attempts: [{ testAttemptId: "attempt-legacy" }]
};
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(upsertCalls.at(-1), [rawBody.session, rawBody.attempts]);

rawBody = { testSessionId: "session-flat", title: "flat payload" };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(upsertCalls.at(-1), [rawBody, []]);

assert.equal(await registry.dispatch(request("DELETE", "/api/test-sessions?testSessionId=session-canonical&id=session-legacy")), true);
assert.equal(deleteCalls.at(-1), "session-canonical");
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  deletedTestSessionId: "session-canonical",
  source: "supabase"
});

assert.equal(await registry.dispatch(request("DELETE", "/api/test-sessions?id=session-legacy")), true);
assert.equal(deleteCalls.at(-1), "session-legacy");

routeError = "upsert";
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 500);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "write source failed" });

routeError = "delete";
assert.equal(await registry.dispatch(request("DELETE")), true);
assert.equal(deleteCalls.at(-1), "");
assert.equal(sends.at(-1).statusCode, 500);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "delete source failed" });

console.log("test session write aliases, delete selector, source response, and failure contracts passed");
