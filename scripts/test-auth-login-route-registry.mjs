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
let refreshTeacherSession = null;
const refreshSessionCalls = [];
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
  getTeacherSession: (request) => {
    refreshSessionCalls.push(request);
    return refreshTeacherSession;
  },
  readJsonBody: async () => {
    if (readError) throw readError;
    return payload;
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(authLoginRouteSignatures, [
  { method: "POST", path: "/api/auth/login" },
  { method: "POST", path: "/api/auth/refresh" }
]);

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
    teacherId: "teacher-1",
    tenantId: "tenant_default",
    teacherRole: "owner"
  },
  authenticated: true,
  ok: true
});

// 멀티테넌트: 교사 계정의 tenantId / teacherRole 이 로그인 응답 account 에 그대로 실린다.
teacherAccount = {
  loginId: "assistant",
  name: "협력 교사",
  teacherId: "teacher-2",
  tenantId: "tenant_abc123",
  teacherRole: "assistant"
};
payload = { loginId: "assistant", password: "secret", role: "teacher" };
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).body.account.tenantId, "tenant_abc123");
assert.equal(sends.at(-1).body.account.teacherRole, "assistant");

teacherAccount = null;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { account: null, authenticated: false, ok: true });

readError = new Error("body failed");
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "body failed" });
assert.equal(sends.at(-1).statusCode, 500);

// 세션 연장. 교사 토큰은 8시간짜리라 수업 도중 끊기면 저장이 전부 401 이 됐다
// (2026-09-08 장애). 살아 있는 세션만 새 토큰으로 바꿔 주고, 만료된 건 그대로 401 이다 —
// 만료까지 연장해 주면 8시간 제한이 의미를 잃는다.
refreshTeacherSession = null;
assert.equal(await registry.dispatch(request("POST", "/api/auth/refresh")), true);
assert.equal(sends.at(-1).statusCode, 401);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  code: "auth_required",
  error: "로그인 세션이 만료되었습니다. 다시 로그인해 주세요."
});

refreshTeacherSession = {
  name: "고태영T",
  role: "teacher",
  teacherId: "teacher-1",
  tenantId: "tenant_abc123",
  teacherRole: "assistant"
};
assert.equal(await registry.dispatch(request("POST", "/api/auth/refresh")), true);
assert.equal(sends.at(-1).statusCode, 200);
assert.deepEqual(sends.at(-1).body, {
  account: {
    name: "고태영T",
    sessionToken: "teacher-token",
    teacherId: "teacher-1",
    tenantId: "tenant_abc123",
    teacherRole: "assistant"
  },
  authenticated: true,
  ok: true
});
// 연장은 로그인 자격을 다시 묻지 않는다(본문도 읽지 않는다).
assert.deepEqual(teacherAuthCalls.at(-1), ["assistant", "secret"]);

// tenantId / teacherRole 이 비어 있던 옛 토큰은 기본값으로 채워 재발급한다.
refreshTeacherSession = { name: "고태영T", role: "teacher", teacherId: "teacher-1" };
assert.equal(await registry.dispatch(request("POST", "/api/auth/refresh")), true);
assert.equal(sends.at(-1).body.account.tenantId, "tenant_default");
assert.equal(sends.at(-1).body.account.teacherRole, "owner");

// GET 은 이 레지스트리가 잡지 않는다.
assert.equal(await registry.dispatch(request("GET", "/api/auth/refresh")), false);

console.log("auth login role, credential routing, token, account response, refresh, and failure contracts passed");
