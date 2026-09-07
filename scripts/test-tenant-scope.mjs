import assert from "node:assert/strict";
import {
  TENANT_SCOPED_TABLES,
  applyTenantFilterToQuery,
  applyTenantToRows,
  enterTenantContext,
  getCurrentTenantId,
  isTenantScopingEnabled,
  requireTenantScopedMutationQuery,
  resolveTenantId,
  runWithTenant
} from "../src/shared/server/tenantScope.js";

const TID = "tenant_abc123";

// --- AsyncLocalStorage 요청 컨텍스트 ---
assert.equal(getCurrentTenantId(), null);
assert.equal(resolveTenantId(undefined), null);
assert.equal(resolveTenantId("tenant_x"), "tenant_x"); // 명시값은 컨텍스트 없이도 우선
await runWithTenant("tenant_ctx", async () => {
  assert.equal(getCurrentTenantId(), "tenant_ctx");
  assert.equal(resolveTenantId(undefined), "tenant_ctx");
  assert.equal(resolveTenantId("tenant_explicit"), "tenant_explicit"); // 명시 > 컨텍스트
  await new Promise((r) => setTimeout(r, 1));
  assert.equal(getCurrentTenantId(), "tenant_ctx"); // 비동기 연쇄에도 전파
});
assert.equal(getCurrentTenantId(), null); // run 밖으로 나오면 복원
enterTenantContext("tenant_enter");
assert.equal(getCurrentTenantId(), "tenant_enter");
enterTenantContext(null);
assert.equal(getCurrentTenantId(), null);

// --- 스코핑 OFF (기본): tenantId 를 넘겨도 아무것도 안 바뀐다 ---
delete process.env.MULTITENANT_SCOPING;
assert.equal(isTenantScopingEnabled(), false);
assert.equal(applyTenantFilterToQuery("students", "select=*&order=name.asc", TID), "select=*&order=name.asc");
assert.deepEqual(applyTenantToRows("students", [{ student_id: "s1" }], TID), [{ student_id: "s1" }]);
assert.equal(requireTenantScopedMutationQuery("students", "student_id=eq.s1", undefined), "student_id=eq.s1");

process.env.MULTITENANT_SCOPING = "false";
assert.equal(isTenantScopingEnabled(), false);

// --- 스코핑 ON ---
process.env.MULTITENANT_SCOPING = "true";
assert.equal(isTenantScopingEnabled(), true);

// 대상 테이블 + tenantId → 필터 append
assert.equal(
  applyTenantFilterToQuery("students", "select=*&order=name.asc", TID),
  "select=*&order=name.asc&tenant_id=eq.tenant_abc123"
);
// 빈 쿼리
assert.equal(applyTenantFilterToQuery("lessons", "", TID), "tenant_id=eq.tenant_abc123");
// 값 인코딩
assert.equal(applyTenantFilterToQuery("lessons", "select=*", "tenant a/b"), "select=*&tenant_id=eq.tenant%20a%2Fb");

// 비대상 테이블 → 그대로 (kiosk_devices 는 여러 테넌트를 가로지르는 것이 존재 이유다)
assert.equal(applyTenantFilterToQuery("kiosk_devices", "select=*", TID), "select=*");
// app_state 는 정산·상담·성적이 들어가므로 반드시 스코핑 대상이다
assert.equal(
  applyTenantFilterToQuery("app_state", "select=*", TID),
  "select=*&tenant_id=eq.tenant_abc123"
);
// tenantId 없음 → 그대로 (읽기는 막지 않음)
assert.equal(applyTenantFilterToQuery("students", "select=*", ""), "select=*");

// 행 주입
assert.deepEqual(applyTenantToRows("students", [{ student_id: "s1" }, { student_id: "s2" }], TID), [
  { student_id: "s1", tenant_id: TID },
  { student_id: "s2", tenant_id: TID }
]);
// 이미 같은 tenant_id → 통과
assert.deepEqual(applyTenantToRows("students", [{ student_id: "s1", tenant_id: TID }], TID), [
  { student_id: "s1", tenant_id: TID }
]);
// 다른 tenant_id → 교차 테넌트 쓰기 차단
assert.throws(() => applyTenantToRows("students", [{ student_id: "s1", tenant_id: "tenant_other" }], TID), /테넌트 불일치/);
// 비대상 테이블 → 주입 안 함
assert.deepEqual(applyTenantToRows("kiosk_devices", [{ kiosk_id: "k" }], TID), [{ kiosk_id: "k" }]);
// app_state 는 주입한다(복합키 (tenant_id, state_key) 로 upsert 되어야 한다)
assert.deepEqual(applyTenantToRows("app_state", [{ state_key: "k" }], TID), [
  { state_key: "k", tenant_id: TID }
]);

// PATCH/DELETE selector: 대상 테이블 + tenantId 없음 → throw
assert.throws(() => requireTenantScopedMutationQuery("lessons", "lesson_date=lt.2026-01-01", ""), /테넌트 스코프가 필요/);
// 대상 테이블 + tenantId → 필터 붙은 쿼리
assert.equal(
  requireTenantScopedMutationQuery("lessons", "lesson_date=lt.2026-01-01", TID),
  "lesson_date=lt.2026-01-01&tenant_id=eq.tenant_abc123"
);
// 비대상 테이블 → 그대로 (tenantId 없어도 OK)
assert.equal(requireTenantScopedMutationQuery("kiosk_devices", "kiosk_id=eq.k", ""), "kiosk_id=eq.k");
// app_state 삭제/수정은 테넌트 없이는 막힌다(전 테넌트 삭제 방지)
assert.throws(() => requireTenantScopedMutationQuery("app_state", "state_key=eq.k", ""), /테넌트 스코프가 필요/);

// --- TENANT_SCOPED_TABLES 드리프트 가드 (docs/security/multi-tenant-phase1-plan.md (a)) ---
const expectedTables = [
  "academy_reminders", "app_state", "attendance_events", "class_templates", "exam_analysis_ai_jobs",
  "exam_analysis_events", "exam_analysis_questions", "exam_analysis_runs", "exam_analysis_sources",
  "exam_post_submissions", "exam_prep_rows", "exam_submission_files", "homeworks",
  "lesson_student_records", "lessons", "makeup_tasks", "notification_jobs", "notification_logs",
  "problem_books", "resource_materials", "school_events", "score_records", "special_lecture_applications",
  "special_lecture_enrollments", "student_intake_applicants", "students", "teacher_accounts",
  "test_attempts", "test_sessions", "wrong_problem_statuses"
];
assert.deepEqual([...TENANT_SCOPED_TABLES].sort(), expectedTables.sort());

process.env.MULTITENANT_SCOPING = "false";
console.log("tenant scope: flag gating, query filter, row injection, mutation guard, table-list drift passed");
