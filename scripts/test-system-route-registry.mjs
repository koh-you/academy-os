import assert from "node:assert/strict";
import {
  createSystemRouteRegistry,
  systemRouteSignatures
} from "../src/shared/server/systemRouteRegistry.js";

const sends = [];
const reports = [];
const reads = [];
let allowReport = true;
let readError = null;
const registry = createSystemRouteRegistry({
  allowClientRuntimeError: (remoteAddress) => {
    assert.equal(remoteAddress, "127.0.0.8");
    return allowReport;
  },
  getCoreDataStatus: () => ({ configured: true, source: "fixture" }),
  normalizeClientRuntimeErrorReport: (report) => ({
    errorId: report.errorId || "normalized-error",
    message: String(report.message || "")
  }),
  readJsonBody: async (request, options) => {
    reads.push({ options, request });
    if (readError) throw readError;
    return { report: { errorId: "client-error-1", message: "render failed" } };
  },
  reportClientRuntimeError: (report) => reports.push(report),
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(systemRouteSignatures), true);
assert.deepEqual(systemRouteSignatures, [
  { method: "GET", path: "/health" },
  { method: "POST", path: "/api/client-errors" },
  { method: "GET", path: "/api/core/status" }
]);

function request(method, path) {
  return {
    request: { method, socket: { remoteAddress: "127.0.0.8" } },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("GET", "/unknown")), false);
assert.equal(sends.length, 0);

assert.equal(await registry.dispatch(request("OPTIONS", "/anywhere")), true);
assert.deepEqual(sends.at(-1), {
  body: {},
  request: request("OPTIONS", "/anywhere").request,
  response: request("OPTIONS", "/anywhere").response,
  statusCode: 204
});

assert.equal(await registry.dispatch(request("GET", "/health")), true);
assert.deepEqual(sends.at(-1).body, {
  features: {
    lessonJournalNotificationFollowup: "result_reconciled_unrecorded_preserve_next",
    lessonMemoSaveVerification: "memo_flags_ack_requery",
    manualAbsenceAttendanceDelivery: "next_available_hour"
  },
  ok: true,
  service: "academy-os-api"
});
assert.equal(sends.at(-1).statusCode, 200);

assert.equal(await registry.dispatch(request("GET", "/api/core/status")), true);
assert.deepEqual(sends.at(-1), {
  body: { ok: true, result: { configured: true, source: "fixture" } },
  request: request("GET", "/api/core/status").request,
  response: request("GET", "/api/core/status").response,
  statusCode: 200
});

allowReport = false;
assert.equal(await registry.dispatch(request("POST", "/api/client-errors")), true);
assert.equal(sends.at(-1).statusCode, 429);
assert.equal(reads.length, 0);
assert.equal(reports.length, 0);

allowReport = true;
assert.equal(await registry.dispatch(request("POST", "/api/client-errors")), true);
assert.deepEqual(reads.at(-1).options, { limitBytes: 64 * 1024 });
assert.deepEqual(reports.at(-1), { errorId: "client-error-1", message: "render failed" });
assert.deepEqual(sends.at(-1).body, { errorId: "client-error-1", ok: true });
assert.equal(sends.at(-1).statusCode, 202);

readError = new Error("invalid JSON");
assert.equal(await registry.dispatch(request("POST", "/api/client-errors")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "invalid JSON" });
assert.equal(sends.at(-1).statusCode, 400);

console.log("system route registry OPTIONS, health, core status, client error, limit, and failure contracts passed");
