import assert from "node:assert/strict";
import { getRequestHeader } from "../src/shared/server/httpRouteAdapter.js";
import {
  createSessionRouteGuard,
  timingSafeEqualText
} from "../src/shared/server/sessionRouteGuard.js";

let clock = Date.UTC(2026, 7, 5, 0, 0, 0);
let secret = "fixture-secret";
const guard = createSessionRouteGuard({
  getRequestHeader,
  getSecret: () => secret,
  now: () => clock
});

assert.equal(Object.isFrozen(guard), true);
assert.equal(timingSafeEqualText("same", "same"), true);
assert.equal(timingSafeEqualText("same", "different"), false);

const teacherToken = guard.createTeacherSessionToken({
  name: "고태영T",
  teacherId: "teacher-1"
});
const teacherPayload = JSON.parse(Buffer.from(teacherToken.split(".")[0], "base64url").toString("utf8"));
assert.deepEqual(teacherPayload, {
  exp: clock + 1000 * 60 * 60 * 8,
  name: "고태영T",
  role: "teacher",
  teacherId: "teacher-1",
  tenantId: "tenant_default"
});
assert.deepEqual(guard.verifyTeacherSessionToken(teacherToken), teacherPayload);
assert.equal(guard.verifyPortalSessionToken(teacherToken), null);

// 멀티테넌트: 명시된 tenantId 는 토큰 payload 와 verify 결과에 그대로 실린다.
const tenantScopedToken = guard.createTeacherSessionToken({
  name: "협력 교사",
  teacherId: "teacher-2",
  tenantId: "tenant_abc123"
});
assert.equal(guard.verifyTeacherSessionToken(tenantScopedToken)?.tenantId, "tenant_abc123");

const portalToken = guard.createPortalSessionToken({
  name: "학생",
  role: "student",
  studentId: "student-1"
});
const portalPayload = JSON.parse(Buffer.from(portalToken.split(".")[0], "base64url").toString("utf8"));
assert.deepEqual(portalPayload, {
  exp: clock + 1000 * 60 * 60 * 24 * 14,
  name: "학생",
  role: "student",
  studentId: "student-1"
});
assert.deepEqual(guard.verifyPortalSessionToken(portalToken), portalPayload);
assert.equal(guard.verifyTeacherSessionToken(portalToken), null);

const parentToken = guard.createPortalSessionToken({
  name: "학생 보호자",
  role: "parent",
  studentId: "student-1"
});
assert.equal(guard.verifyPortalSessionToken(parentToken)?.role, "parent");

const teacherRequest = { headers: { authorization: `Bearer ${teacherToken}` } };
assert.equal(guard.getAuthorizationToken(teacherRequest), teacherToken);
assert.equal(guard.getTeacherSession(teacherRequest)?.teacherId, "teacher-1");
assert.equal(guard.getPortalSession(teacherRequest), null);
assert.deepEqual(guard.getTeacherOrPortalSession(teacherRequest), {
  portalSession: null,
  teacherSession: teacherPayload
});

const portalRequest = { headers: { authorization: `bearer ${portalToken}` } };
assert.equal(guard.getPortalSession(portalRequest)?.studentId, "student-1");
assert.deepEqual(guard.getTeacherOrPortalSession(portalRequest), {
  portalSession: portalPayload,
  teacherSession: null
});

assert.equal(guard.getTeacherSession({ headers: { authorization: teacherToken } })?.teacherId, "teacher-1");
assert.equal(guard.getTeacherSession({ headers: { authorization: "not-a-token" } }), null);
assert.equal(guard.getPortalSession({ headers: {} }), null);

const [payload, signature] = teacherToken.split(".");
const replacement = signature.endsWith("A") ? "B" : "A";
const tamperedToken = `${payload}.${signature.slice(0, -1)}${replacement}`;
assert.equal(guard.verifySignedSessionToken(tamperedToken), null);
secret = "rotated-secret";
assert.equal(guard.verifySignedSessionToken(teacherToken), null);
secret = "fixture-secret";

clock = teacherPayload.exp;
assert.equal(guard.verifyTeacherSessionToken(teacherToken)?.teacherId, "teacher-1");
clock += 1;
assert.equal(guard.verifyTeacherSessionToken(teacherToken), null);

console.log("session token, expiry, signature, bearer, teacher, portal, and mixed guard contracts passed");
