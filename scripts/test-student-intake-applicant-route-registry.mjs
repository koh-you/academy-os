import assert from "node:assert/strict";
import {
  createStudentIntakeApplicantRouteRegistry,
  studentIntakeApplicantRouteSignatures
} from "../src/shared/server/studentIntakeApplicantRouteRegistry.js";

const events = [];
const sends = [];
const upsertCalls = [];
let rawBody = {};
let listResult = { source: "supabase", studentIntakeApplicants: [] };
let upsertResult = { source: "supabase", applicant: { applicantId: "applicant-1" }, verified: true };
let routeError = null;

const registry = createStudentIntakeApplicantRouteRegistry({
  listStudentIntakeApplicants: async () => {
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
  upsertStudentIntakeApplicant: async (applicant, options) => {
    events.push("upsert");
    upsertCalls.push({ applicant, options });
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
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
assert.equal(Object.isFrozen(studentIntakeApplicantRouteSignatures), true);
assert.equal(studentIntakeApplicantRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(studentIntakeApplicantRouteSignatures, [
  { method: "GET", path: "/api/student-intake-applicants" },
  { method: "POST", path: "/api/student-intake-applicants" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/student-intake-applicants")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
upsertCalls.length = 0;
rawBody = { applicant: { applicantId: "applicant-1", name: "홍길동" }, expectedUpdatedAt: "v1" };
assert.equal(await registry.dispatch(route("POST", "/api/student-intake-applicants")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(upsertCalls.at(-1), {
  applicant: rawBody.applicant,
  options: { expectedUpdatedAt: "v1" }
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
rawBody = { name: "홍길동" };
assert.equal(await registry.dispatch(route("POST", "/api/student-intake-applicants")), true);
assert.deepEqual(upsertCalls.at(-1).applicant, rawBody);

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/student-intake-applicants")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = {
  stage: "upsert",
  error: Object.assign(new Error("저장 실패"), {
    code: "APPLICANT_CONFLICT",
    currentApplicant: { applicantId: "applicant-1" },
    statusCode: 409
  })
};
assert.equal(await registry.dispatch(route("POST", "/api/student-intake-applicants")), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  code: "APPLICANT_CONFLICT",
  currentApplicant: { applicantId: "applicant-1" },
  error: "저장 실패"
});
assert.equal(sends.at(-1).statusCode, 409);

console.log("student intake applicant route registry list, upsert, and error contracts passed");
