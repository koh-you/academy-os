import assert from "node:assert/strict";
import {
  createPortalWriteRouteRegistry,
  portalWriteRouteSignatures
} from "../src/shared/server/portalWriteRouteRegistry.js";

const sends = [];
const events = [];
let session = null;
let payload = {};
let actionError = null;
const actionCalls = new Map();
function action(name, result) {
  return async (...args) => {
    events.push(`action:${name}`);
    actionCalls.set(name, args);
    if (actionError) throw actionError;
    return result;
  };
}
const registry = createPortalWriteRouteRegistry({
  completePortalHomework: action("homework", { homework: { homeworkId: "homework-1" }, verified: true }),
  getPortalSession: () => {
    events.push("guard");
    return session;
  },
  mutatePortalQuestion: action("question", { questions: [{ questionId: "question-1" }], verified: true }),
  readJsonBody: async () => {
    events.push("read");
    return payload;
  },
  savePortalExamPostSubmission: action("examPost", { submission: { submissionId: "submission-1" }, verified: true }),
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode }),
  upsertPortalState: action("state", { source: "supabase", states: {} })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(portalWriteRouteSignatures, [
  { method: "POST", path: "/api/portal-state" },
  { method: "POST", path: "/api/portal-homeworks/complete" },
  { method: "POST", path: "/api/portal-questions" },
  { method: "POST", path: "/api/portal-exam-post-submissions" }
]);

function request(path, method = "POST") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("/api/portal-state", "GET")), false);
assert.equal(await registry.dispatch(request("/unknown")), false);
assert.equal(sends.length, 0);

for (const { path } of portalWriteRouteSignatures) {
  events.length = 0;
  assert.equal(await registry.dispatch(request(path)), true);
  assert.deepEqual(events, ["guard"]);
  assert.equal(sends.at(-1).statusCode, 401);
  assert.deepEqual(sends.at(-1).body, { ok: false, error: "학생 세션 인증이 필요합니다." });
}

session = { role: "student", studentId: "student-1" };

payload = { states: { ignoredLegacyState: true } };
events.length = 0;
assert.equal(await registry.dispatch(request("/api/portal-state")), true);
assert.deepEqual(events, ["guard", "read", "action:state"]);
assert.deepEqual(actionCalls.get("state"), [session, payload.states]);
assert.deepEqual(sends.at(-1).body, { ok: true, source: "supabase", states: {} });

payload = { homeworkId: "homework-1" };
assert.equal(await registry.dispatch(request("/api/portal-homeworks/complete")), true);
assert.deepEqual(actionCalls.get("homework"), [session, "homework-1"]);
assert.equal(sends.at(-1).body.verified, true);

payload = { action: "create", text: "질문" };
assert.equal(await registry.dispatch(request("/api/portal-questions")), true);
assert.deepEqual(actionCalls.get("question"), [session, payload]);
assert.equal(sends.at(-1).body.questions[0].questionId, "question-1");

payload = { submission: { targetId: "target-1" } };
assert.equal(await registry.dispatch(request("/api/portal-exam-post-submissions")), true);
assert.deepEqual(actionCalls.get("examPost"), [session, payload]);
assert.equal(sends.at(-1).body.submission.submissionId, "submission-1");

actionError = Object.assign(new Error("conflict"), { statusCode: 409 });
assert.equal(await registry.dispatch(request("/api/portal-homeworks/complete")), true);
assert.equal(sends.at(-1).statusCode, 409);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "conflict" });

assert.equal(await registry.dispatch(request("/api/portal-state")), true);
assert.equal(sends.at(-1).statusCode, 500);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "conflict" });

console.log("portal write guards, payload mapping, action routing, source response, and error status contracts passed");
