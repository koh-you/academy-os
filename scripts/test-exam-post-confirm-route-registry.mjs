import assert from "node:assert/strict";
import {
  createExamPostConfirmRouteRegistry,
  examPostConfirmRouteSignatures
} from "../src/shared/server/examPostConfirmRouteRegistry.js";

const events = [];
const sends = [];
const actionCalls = [];
let session = null;
let payload = { submissionId: "submission-1", confirmed: true };
let actionError = null;

const registry = createExamPostConfirmRouteRegistry({
  confirmExamPostSubmission: async (...args) => {
    events.push("action");
    actionCalls.push(args);
    if (actionError) throw actionError;
    return { submissions: [{ submissionId: "submission-1", confirmed: true }], verified: true };
  },
  getTeacherSession: () => {
    events.push("guard");
    return session;
  },
  readJsonBody: async () => {
    events.push("read");
    return payload;
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(examPostConfirmRouteSignatures, [
  { method: "POST", path: "/api/exam-post-submissions/confirm" }
]);

function request(method = "POST", path = "/api/exam-post-submissions/confirm") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("GET")), false);
assert.equal(await registry.dispatch(request("POST", "/unknown")), false);
assert.equal(sends.length, 0);

events.length = 0;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(events, ["guard"]);
assert.equal(sends.at(-1).statusCode, 401);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "교사 세션 인증이 필요합니다. 다시 로그인해 주세요."
});

session = { role: "teacher", teacherId: "teacher-1" };
events.length = 0;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(events, ["guard", "read", "action"]);
assert.deepEqual(actionCalls.at(-1), [session, payload]);
assert.equal(sends.at(-1).statusCode, 200);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  submissions: [{ submissionId: "submission-1", confirmed: true }],
  verified: true
});

actionError = Object.assign(new Error("conflict"), { statusCode: 409 });
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 409);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "conflict" });

actionError = new Error("source failed");
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).statusCode, 500);

console.log("exam post confirm teacher guard, payload, source response, and error status contracts passed");
