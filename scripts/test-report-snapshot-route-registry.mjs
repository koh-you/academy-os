import assert from "node:assert/strict";
import {
  createReportSnapshotRouteRegistry,
  reportSnapshotRouteSignatures
} from "../src/shared/server/reportSnapshotRouteRegistry.js";

const events = [];
const parseCalls = [];
const saveCalls = [];
const sends = [];
const upsertCalls = [];
let authenticated = true;
let routeError = null;
const rawBody = { snapshot: { reportId: "report-safe" } };
const parsedSnapshot = { reportId: "report-safe", title: "안전 보고서" };

const listAppState = async () => ({ source: "supabase", states: {} });
const registry = createReportSnapshotRouteRegistry({
  getTeacherSession: () => {
    events.push("auth");
    return authenticated ? { teacherId: "teacher-safe" } : null;
  },
  listAppState,
  parseVersionedWriteRequest: (...args) => {
    events.push("parse");
    parseCalls.push(args);
    if (routeError?.stage === "parse") throw routeError.error;
    return { snapshot: parsedSnapshot };
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  saveReportSnapshotWithVerification: async (input) => {
    events.push("save");
    saveCalls.push(input);
    if (routeError?.stage === "save") throw routeError.error;
    return { snapshot: input.snapshot, source: "supabase", verified: true };
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode }),
  upsertAppState: async (...args) => {
    upsertCalls.push(args);
    return { source: "supabase" };
  }
});

function request(method = "POST", path = "/api/report-snapshots") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(reportSnapshotRouteSignatures, [{ method: "POST", path: "/api/report-snapshots" }]);
assert.equal(await registry.dispatch(request("GET")), false);
assert.equal(await registry.dispatch(request("POST", "/unknown")), false);

authenticated = false;
events.length = 0;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(events, ["auth"]);
assert.equal(sends.at(-1).statusCode, 401);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "보고서 저장 세션 인증이 필요합니다. 다시 로그인해 주세요."
});

authenticated = true;
events.length = 0;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(events, ["auth", "read", "parse", "save"]);
assert.deepEqual(parseCalls.at(-1), ["POST", "/api/report-snapshots", rawBody]);
assert.equal(saveCalls.at(-1).snapshot, parsedSnapshot);
assert.equal(saveCalls.at(-1).operations.read, listAppState);
await saveCalls.at(-1).operations.write({ reportSnapshots: [parsedSnapshot] }, { expectedUpdatedAt: null });
assert.deepEqual(upsertCalls.at(-1), [
  { reportSnapshots: [parsedSnapshot] },
  { expectedUpdatedAt: null }
]);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  snapshot: parsedSnapshot,
  source: "supabase",
  verified: true
});

routeError = {
  stage: "parse",
  error: Object.assign(new Error("invalid snapshot"), {
    code: "invalid_payload",
    field: "snapshot",
    statusCode: 400
  })
};
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 400);
assert.deepEqual(sends.at(-1).body, {
  code: "invalid_payload",
  error: "invalid snapshot",
  field: "snapshot",
  ok: false
});

routeError = { stage: "save", error: new Error("source failed") };
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 500);
assert.deepEqual(sends.at(-1).body, {
  code: undefined,
  error: "source failed",
  ok: false
});

console.log("report snapshot teacher guard, parser, source operations, response, and error contracts passed");
