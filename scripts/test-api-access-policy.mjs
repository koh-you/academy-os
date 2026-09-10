import assert from "node:assert/strict";
import { getRequestHeader } from "../src/shared/server/httpRouteAdapter.js";
import { createSessionRouteGuard } from "../src/shared/server/sessionRouteGuard.js";
import {
  evaluateApiAccess,
  isAssistantAllowed,
  isDispatchTokenRoute,
  isKioskAllowed,
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
assert.equal(isPublicRoute("GET", "/"), true);
assert.equal(isPublicRoute("HEAD", "/"), true);
assert.equal(isPublicRoute("POST", "/api/auth/login"), true);
assert.equal(isPublicRoute("GET", "/api/portal-data"), true);
assert.equal(isPublicRoute("GET", "/api/students"), false);
assert.equal(isDispatchTokenRoute("POST", "/api/notification-jobs/dispatch-due"), true);

// ---------- 키오스크 ----------
assert.equal(isKioskAllowed("GET", "/api/students"), true);
assert.equal(isKioskAllowed("GET", "/api/lesson-records"), true);
assert.equal(isKioskAllowed("POST", "/api/attendance/check"), true);
assert.equal(isKioskAllowed("POST", "/api/attendance/preview"), true);
assert.equal(isKioskAllowed("POST", "/api/students"), false);
assert.equal(isKioskAllowed("DELETE", "/api/lessons"), false);
assert.equal(isKioskAllowed("POST", "/api/notifications/attendance-alimtalk"), false);

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

// teacher assistant → "수업일지 중심" 워크플로는 넓게, 그 밖은 막힘
// (자기 tenant 학생 등록·수업 개설·출결·숙제·데일리 테스트·알림톡·정리 삭제)
assert.equal(A("POST", "/api/attendance/check", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("GET", "/api/lessons", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("GET", "/api/students", { kind: "teacher", teacherRole: "assistant" }).ok, true);
// 알림톡 발송·예약은 협력 교사에게 닫혀 있다(2026-09-10 원장 요청).
// 솔라피 설정을 모든 계정이 공유하므로, 협력 교사가 보내도 원장님 계정에서 실제
// 학부모에게 나가고 요금도 원장님 앞으로 달린다.
for (const path of [
  "/api/notifications/attendance-alimtalk",
  "/api/notifications/comment-alimtalk",
  "/api/notifications/daily-report-alimtalk",
  "/api/notifications/student-schedule-reminder",
  "/api/notification-jobs",
  "/api/notification-jobs/reserve",
  "/api/notification-jobs/reserve-bulk",
  "/api/notification-jobs/cancel",
  "/api/notification-jobs/reconcile-solapi"
]) {
  const verdict = A("POST", path, { kind: "teacher", teacherRole: "assistant" });
  assert.equal(verdict.ok, false, `assistant 는 ${path} 를 못 불러야 한다`);
  assert.equal(verdict.code, "role_forbidden");
}
assert.equal(A("DELETE", "/api/notification-jobs", { kind: "teacher", teacherRole: "assistant" }).ok, false);
// 발송 기록 조회는 남겨둔다 — 자기 테넌트의 기록이고 부트스트랩이 부른다.
assert.equal(A("GET", "/api/notification-jobs", { kind: "teacher", teacherRole: "assistant" }).ok, true);
// 원장은 그대로 보낼 수 있다.
assert.equal(A("POST", "/api/notifications/attendance-alimtalk", { kind: "teacher", teacherRole: "owner" }).ok, true);
assert.equal(A("POST", "/api/students", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("POST", "/api/students/bulk", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("DELETE", "/api/students", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("POST", "/api/lessons", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("DELETE", "/api/lessons", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("POST", "/api/homeworks", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("POST", "/api/test-sessions", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("DELETE", "/api/test-sessions", { kind: "teacher", teacherRole: "assistant" }).ok, true);
assert.equal(A("POST", "/api/lesson-journal/rows/save", { kind: "teacher", teacherRole: "assistant" }).ok, true);
// 여전히 막히는 것: 유료 AI·시험분석 파이프라인·운영자 전용
assert.deepEqual(A("POST", "/api/ai/comment-polish", { kind: "teacher", teacherRole: "assistant" }), { ok: false, status: 403, code: "role_forbidden" });
assert.equal(A("POST", "/api/admin/seed-core-data", { kind: "teacher", teacherRole: "assistant" }).status, 403);
assert.equal(A("POST", "/api/exam-analysis-runs/detect-question-boundaries", { kind: "teacher", teacherRole: "assistant" }).status, 403);
assert.equal(A("POST", "/api/notifications/slack-daily-schedule", { kind: "teacher", teacherRole: "assistant" }).status, 403);
assert.equal(A("POST", "/api/special-lecture-applications", { kind: "teacher", teacherRole: "assistant" }).status, 403);
assert.equal(isAssistantAllowed("POST", "/api/attendance/check"), true);
assert.equal(isAssistantAllowed("POST", "/api/lessons"), true);
assert.equal(isAssistantAllowed("POST", "/api/students"), true);
assert.equal(isAssistantAllowed("POST", "/api/homeworks"), true);
assert.equal(isAssistantAllowed("POST", "/api/ai/comment-polish"), false);

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

// 키오스크 → GET /api/* + 출결 체크인만
assert.equal(A("GET", "/api/lesson-records", { kind: "kiosk" }).ok, true);
assert.equal(A("GET", "/api/students", { kind: "kiosk" }).ok, true);
assert.equal(A("POST", "/api/attendance/check", { kind: "kiosk" }).ok, true);
assert.equal(A("POST", "/api/attendance/preview", { kind: "kiosk" }).ok, true);
assert.deepEqual(A("POST", "/api/students", { kind: "kiosk" }), { ok: false, status: 403, code: "kiosk_forbidden" });
assert.equal(A("DELETE", "/api/lessons", { kind: "kiosk" }).status, 403);
assert.equal(A("POST", "/api/notifications/attendance-alimtalk", { kind: "kiosk" }).status, 403);
assert.equal(A("POST", "/api/lesson-records", { kind: "kiosk" }).status, 403);
// 루트/uptime 프로브는 공개
assert.equal(A("GET", "/", { kind: "none" }).ok, true);
assert.equal(A("HEAD", "/", { kind: "none" }).ok, true);

console.log("api access policy: ops token, public/dispatch, teacher owner/assistant, ops read/cas-write/highrisk, kiosk contracts passed");
