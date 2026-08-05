import assert from "node:assert/strict";
import {
  appStateWriteRouteSignatures,
  createAppStateWriteRouteRegistry
} from "../src/shared/server/appStateWriteRouteRegistry.js";

const events = [];
const sends = [];
const parseCalls = [];
const upsertCalls = [];
let rawBody = {};
let parseResult = {
  expectedUpdatedAt: "version-1",
  states: {
    attendanceSettings: { enabled: true },
    examPostSubmissions: [{ submissionId: "hidden" }],
    studentQuestions: [{ questionId: "hidden" }]
  }
};
let routeError = null;
const registry = createAppStateWriteRouteRegistry({
  parseVersionedWriteRequest: (...args) => {
    events.push("parse");
    parseCalls.push(args);
    if (routeError?.stage === "parse") throw routeError.error;
    return parseResult;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode }),
  upsertAppState: async (...args) => {
    events.push("upsert");
    upsertCalls.push(args);
    if (routeError?.stage === "upsert") throw routeError.error;
    return { source: "supabase", stateRows: {}, states: args[0] };
  }
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(appStateWriteRouteSignatures, [{ method: "POST", path: "/api/app-state" }]);

function request(method = "POST", path = "/api/app-state") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("GET")), false);
assert.equal(await registry.dispatch(request("POST", "/unknown")), false);
assert.equal(sends.length, 0);

rawBody = { expectedUpdatedAt: "version-1", states: { attendanceSettings: { enabled: true } } };
events.length = 0;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(events, ["read", "parse", "upsert"]);
assert.deepEqual(parseCalls.at(-1), ["POST", "/api/app-state", rawBody]);
assert.deepEqual(upsertCalls.at(-1), [
  { attendanceSettings: { enabled: true } },
  { expectedUpdatedAt: "version-1" }
]);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  source: "supabase",
  stateRows: {},
  states: { attendanceSettings: { enabled: true } }
});

parseResult = { states: { aiSettings: { model: "safe" } } };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(upsertCalls.at(-1), [{ aiSettings: { model: "safe" } }, { expectedUpdatedAt: null }]);

routeError = {
  stage: "parse",
  error: Object.assign(new Error("invalid field"), { code: "invalid_payload", field: "states", statusCode: 400 })
};
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 400);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "invalid field",
  code: "invalid_payload",
  field: "states"
});

routeError = { stage: "upsert", error: new Error("source failed") };
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 500);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });

console.log("app state write parser, protected keys, CAS token, source response, and error contracts passed");
