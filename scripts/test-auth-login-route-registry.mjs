import assert from "node:assert/strict";
import {
  authLoginRouteSignatures,
  createAuthLoginRouteRegistry
} from "../src/shared/server/authLoginRouteRegistry.js";

const sends = [];
const studentAuthCalls = [];
const teacherAuthCalls = [];
const portalTokenCalls = [];
const teacherTokenCalls = [];
let payload = {};
let readError = null;
let studentAccount = null;
let teacherAccount = null;
const registry = createAuthLoginRouteRegistry({
  authenticateStudentOrParent: async (...args) => {
    studentAuthCalls.push(args);
    return studentAccount;
  },
  authenticateTeacher: async (...args) => {
    teacherAuthCalls.push(args);
    return teacherAccount;
  },
  createPortalSessionToken: (account) => {
    portalTokenCalls.push(account);
    return "portal-token";
  },
  createTeacherSessionToken: (account) => {
    teacherTokenCalls.push(account);
    return "teacher-token";
  },
  readJsonBody: async () => {
    if (readError) throw readError;
    return payload;
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(authLoginRouteSignatures, [{ method: "POST", path: "/api/auth/login" }]);

function request(method = "POST", path = "/api/auth/login") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("GET")), false);
assert.equal(await registry.dispatch(request("POST", "/unknown")), false);
assert.equal(sends.length, 0);

payload = { loginId: "ignored", password: "ignored", role: "admin" };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "지원하지 않는 로그인 역할입니다." });
assert.equal(sends.at(-1).statusCode, 403);
assert.equal(studentAuthCalls.length, 0);
assert.equal(teacherAuthCalls.length, 0);

studentAccount = {
  loginId: "student-1",
  name: "학생",
  studentId: "student-1"
};
payload = { loginId: "  student-login  ", password: "0123", role: "student" };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(studentAuthCalls.at(-1), ["student", "student-login", "0123"]);
assert.deepEqual(portalTokenCalls.at(-1), { ...studentAccount, role: "student" });
assert.deepEqual(sends.at(-1).body, {
  account: {
    actorId: "student-1",
    loginId: "student-1",
    name: "학생",
    role: "student",
    sessionToken: "portal-token",
    studentId: "student-1"
  },
  authenticated: true,
  ok: true
});

payload = { loginId: "parent-student-1", password: "0123", role: "parent" };
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).body.account.actorId, "parent_student-1");
assert.equal(sends.at(-1).body.account.role, "parent");

studentAccount = null;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { account: null, authenticated: false, ok: true });

teacherAccount = {
  loginId: "teacher",
  name: "고태영T",
  teacherId: "teacher-1"
};
payload = { loginId: " teacher ", password: "secret", role: "teacher" };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(teacherAuthCalls.at(-1), ["teacher", "secret"]);
assert.deepEqual(teacherTokenCalls.at(-1), teacherAccount);
assert.deepEqual(sends.at(-1).body, {
  account: {
    loginId: "teacher",
    name: "고태영T",
    sessionToken: "teacher-token",
    teacherId: "teacher-1"
  },
  authenticated: true,
  ok: true
});

teacherAccount = null;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { account: null, authenticated: false, ok: true });

readError = new Error("body failed");
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "body failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("auth login role, credential routing, token, account response, and failure contracts passed");
