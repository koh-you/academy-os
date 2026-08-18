import assert from "node:assert/strict";
import {
  createStudentRouteRegistry,
  studentRouteSignatures
} from "../src/shared/server/studentRouteRegistry.js";

const events = [];
const sends = [];
const deleteCalls = [];
const upsertCalls = [];
let rawBody = {};
let listResult = { source: "supabase", students: [] };
let auditResult = { studentId: "student-1", references: [] };
let deleteResult = { source: "supabase", studentId: "student-1", verified: true };
let upsertResult = { source: "supabase", student: { studentId: "student-1" }, verified: true };
let upsertBulkResult = { source: "supabase", students: [] };
let routeError = null;

const registry = createStudentRouteRegistry({
  auditWithdrawnStudentDeletion: async (studentId) => {
    events.push("audit");
    if (routeError?.stage === "audit") throw routeError.error;
    assert.equal(studentId, "student-1");
    return auditResult;
  },
  deleteWithdrawnStudent: async (studentId, confirmationName, forceDeleteWithReferences, expectedReferenceFingerprint) => {
    events.push("delete");
    deleteCalls.push({ confirmationName, expectedReferenceFingerprint, forceDeleteWithReferences, studentId });
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  listStudents: async () => {
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
  upsertStudent: async (student, options) => {
    events.push("upsert");
    upsertCalls.push({ options, student });
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertStudents: async (students) => {
    events.push("upsertBulk");
    if (routeError?.stage === "upsertBulk") throw routeError.error;
    return upsertBulkResult;
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
assert.equal(Object.isFrozen(studentRouteSignatures), true);
assert.equal(studentRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(studentRouteSignatures, [
  { method: "GET", path: "/api/students" },
  { method: "GET", path: "/api/students/delete-audit" },
  { method: "DELETE", path: "/api/students" },
  { method: "POST", path: "/api/students" },
  { method: "POST", path: "/api/students/bulk" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/students")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
assert.equal(
  await registry.dispatch(route("GET", "/api/students/delete-audit", { studentId: "student-1" })),
  true
);
assert.deepEqual(events, ["audit"]);
assert.deepEqual(sends.at(-1).body, { ok: true, audit: auditResult });

events.length = 0;
deleteCalls.length = 0;
rawBody = {
  confirmationName: "홍길동",
  expectedReferenceFingerprint: "fp-1",
  forceDeleteWithReferences: true,
  studentId: "student-1"
};
assert.equal(await registry.dispatch(route("DELETE", "/api/students")), true);
assert.deepEqual(events, ["read", "delete"]);
assert.deepEqual(deleteCalls.at(-1), {
  confirmationName: "홍길동",
  expectedReferenceFingerprint: "fp-1",
  forceDeleteWithReferences: true,
  studentId: "student-1"
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

events.length = 0;
upsertCalls.length = 0;
rawBody = { student: { studentId: "student-1", name: "홍길동" }, createOnly: true, expectedUpdatedAt: "v1" };
assert.equal(await registry.dispatch(route("POST", "/api/students")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(upsertCalls.at(-1), {
  options: { createOnly: true, expectedUpdatedAt: "v1" },
  student: rawBody.student
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
rawBody = { student: { studentId: "student-2", name: "김철수" } };
assert.equal(await registry.dispatch(route("POST", "/api/students")), true);
assert.deepEqual(upsertCalls.at(-1).options, { createOnly: false, expectedUpdatedAt: undefined });

events.length = 0;
rawBody = { students: [{ studentId: "student-1" }, { studentId: "student-2" }] };
assert.equal(await registry.dispatch(route("POST", "/api/students/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/students")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = {
  stage: "delete",
  error: Object.assign(new Error("삭제 실패"), { audit: { operation: "delete_withdrawn_student" }, statusCode: 409 })
};
assert.equal(await registry.dispatch(route("DELETE", "/api/students")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제 실패", audit: { operation: "delete_withdrawn_student" } });
assert.equal(sends.at(-1).statusCode, 409);

routeError = {
  stage: "upsert",
  error: Object.assign(new Error("저장 실패"), {
    code: "STUDENT_CONFLICT",
    currentStudent: { studentId: "student-1" },
    statusCode: 409
  })
};
assert.equal(await registry.dispatch(route("POST", "/api/students")), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "저장 실패",
  code: "STUDENT_CONFLICT",
  currentStudent: { studentId: "student-1" }
});

console.log("student route registry list, audit, delete, upsert, bulk, and error contracts passed");
