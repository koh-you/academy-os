import assert from "node:assert/strict";
import { getRequestHeader } from "../src/shared/server/httpRouteAdapter.js";
import { createSessionRouteGuard } from "../src/shared/server/sessionRouteGuard.js";
import {
  evaluateApiAccess,
  isAssistantAllowed,
  isDispatchTokenRoute,
  isPublicRoute
} from "../src/shared/server/apiAccessPolicy.js";

// ---------- ops 토큰 ----------
let clock = Date.UTC(2026, 8, 4, 0, 0, 0);
const guard = createSessionRouteGuard({
  getRequestHeader,
  getSecret: () => "session-secret",
  getOpsSecret: () => "ops-secret",
  now: () => clock
});

const readToken = guard.createOpsSessionToken({ scope: "read", tenantId: "tenant_abc", label: "claude-local" });
const readSession = guard.verifyOpsSessionToken(readToken);
assert.equal(readSession.role, "ops");
assert.equal(readSession.scope, "read");
assert.equal(readSession.tenantId, "tenant_abc");
assert.equal(readSession.crossTenant, false);

// 다른 비밀로 서명된 세션 토큰은 ops 로 인식 안 됨
assert.equal(guard.verifyOpsSessionToken(guard.createTeacherSessionToken({ teacherId: "t1", name: "T" })), null);
// 잘못된 scope
assert.throws(() => guard.createOpsSessionToken({ scope: "admin", tenantId: "tenant_abc" }), /잘못된 ops scope/);
// tenantId 도 crossTenant 도 없으면 거부
assert.throws(() => guard.createOpsSessionToken({ scope: "read" }), /tenantId 또는 crossTenant/);
// crossTenant 토큰
const crossToken = guard.createOpsSessionToken({ scope: "highrisk", crossTenant: true, label: "operator" });
assert.equal(guard.verifyOpsSessionToken(crossToken).tenantId, null);
assert.equal(guard.verifyOpsSessionToken(crossToken).crossTenant, true);
// 만료
clock += 1000 * 60 * 60 * 3;
assert.equal(guard.verifyOpsSessionToken(readToken), null);

// ---------- 공개 / dispatch 라우트 ----------
assert.equal(isPublicRoute("GET", "/health"), true);
assert.equal(isPublicRoute("POST", "/api/auth/login"), true);
assert.equal(isPublicRoute("GET", "/api/portal-data"), true);
assert.equal(isPublicRoute("GET", "/api/students"), false);
assert.equal(isDispatchTokenRoute("POST", "/api/notification-jobs/dispatch-due"), true);

// ---------- evaluateApiAccess ----------
const A = (method, pathname, auth) => evaluateApiAccess({ method, pathname, auth });

// 공개
assert.deepEqual(A("GET", "/health", { kind: "none" }), { ok: true, status: 200 });
assert.equal(A("OPTIONS", "/api/students", { kind: "none" }).ok, true);

// 인증 없음 → 401
assert.deepEqual(A("GET", "/api/students", { kind: "none" }), { ok: false, status: 401, code: "auth_required" });

// dispatch 토큰
assert.equal(A("POST", "/api/notification-jobs/dispatch-due", { kind: "dispatch" }).ok, true);
assert.equal(A("POST", "/api/notification-jobs/dispatch-due", { kind: "none" }).status, 401);
assert.equal(A("POST", "/api/students", { kind: "dispatch" }).status, 403);

// teacher owner → 전부 허용
assert.equal(A("DELETE", "/api/lessons", { kind: "teacher", teacherRole: "owner" }).ok, true);
assert.equal(A("POST", "/api/admin/seed-core-data", { kind: "teacher", teacherRole: "owner" }).ok, true);

// teacher assistant → 출결 표면만
assert.equal(A("POST", "/api/attendance/check", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("GET", "/api/lessons", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("GET", "/api/students", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("POST", "/api/notifications/attendance-alimtalk", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.deepEqual(A("POST", "/api/students", { kind: "teacher", teacherRole: "assistant" }), { ok: false, status: 403, code: "role_forbidden" });
assert.equal(A("DELETE", "/api/lessons", { kind: "teacher", teacherRole: "assistant" }).status, 403);
assert.equal(A("POST", "/api/notifications/daily-report-alimtalk", { kind: "teacher", teacherRole: "assistant" }).status, 403);
assert.equal(A("POST", "/api/lesson-journal/rows/save", { kind: "teacher", teacherRole: "assistant" }).status, 403);
assert.equal(isAssistantAllowed("POST", "/api/attendance/check"), true);
assert.equal(isAssistantAllowed("POST", "/api/lessons"), false);

// ops read → GET 만
assert.equal(A("GET", "/api/students", { kind: "ops", opsScope: "read" }).ok, true);
assert.deepEqual(A("POST", "/api/students", { kind: "ops", opsScope: "read" }), { ok: false, status: 403, code: "scope_forbidden" });

// ops cas-write → GET + 지정 POST, 발송/삭제 불가
assert.equal(A("GET", "/api/students", { kind: "ops", opsScope: "cas-write" }).ok, true);
assert.equal(A("POST", "/api/lesson-journal/rows/save", { kind: "ops", opsScope: "cas-write" }).ok, true);
assert.equal(A("POST", "/api/students", { kind: "ops", opsScope: "cas-write", hasVersionField: false }).status, 422);
assert.equal(A("POST", "/api/students", { kind: "ops", opsScope: "cas-write" }).ok, true);
assert.equal(A("DELETE", "/api/lessons", { kind: "ops", opsScope: "cas-write" }).status, 403);
assert.equal(A("POST", "/api/notifications/attendance-alimtalk", { kind: "ops", opsScope: "cas-write" }).status, 403);
assert.equal(A("POST", "/api/notification-jobs/reserve", { kind: "ops", opsScope: "cas-write" }).status, 403);
assert.equal(A("POST", "/api/ai/comment-polish", { kind: "ops", opsScope: "cas-write" }).status, 403);

// ops highrisk → 전부
assert.equal(A("DELETE", "/api/lessons", { kind: "ops", opsScope: "highrisk" }).ok, true);
assert.equal(A("POST", "/api/notifications/attendance-alimtalk", { kind: "ops", opsScope: "highrisk" }).ok, true);

console.log("api access policy: ops token, public/dispatch, teacher owner/assistant, ops read/cas-write/highrisk contracts passed");
