// 멀티테넌트 1단계 — 테넌트 스코핑 헬퍼.
//
// 설계 원칙:
// - opt-in: 호출부가 tenantId 를 넘기지 않으면 아무 일도 하지 않는다(기존 동작 유지).
// - 플래그 OFF 기본: MULTITENANT_SCOPING 이 "true" 가 아니면 tenantId 를 넘겨도 무시한다.
//   → tenant_id 컬럼이 아직 없는 마이그레이션 이전에도 coreData 배관을 미리 넣어둘 수 있다.
// - 마이그레이션 + MULTITENANT_SCOPING=true 이후에만 실제로 쿼리/행에 tenant_id 가 붙는다.

import { AsyncLocalStorage } from "node:async_hooks";

export const TENANT_COLUMN = "tenant_id";
export const DEFAULT_TENANT_ID = "tenant_default";

// 요청 단위 테넌트 컨텍스트. HTTP 핸들러가 진입 직후 enterTenantContext(tenantId) 로 심으면,
// coreData 의 수백 개 쿼리 호출부를 건드리지 않아도 supabaseRest 가 자동으로 스코핑한다.
const tenantContext = new AsyncLocalStorage();

/** HTTP 핸들러 진입 직후 1회. 이후 비동기 연쇄에 값이 전파된다. */
export function enterTenantContext(tenantId) {
  tenantContext.enterWith({ tenantId: tenantId || null });
}

/** 콜백 범위에만 테넌트를 적용(크론/배치/테스트용). */
export function runWithTenant(tenantId, fn) {
  return tenantContext.run({ tenantId: tenantId || null }, fn);
}

export function getCurrentTenantId() {
  return tenantContext.getStore()?.tenantId ?? null;
}

/** 명시 tenantId 가 있으면 그것, 없으면 요청 컨텍스트의 tenantId. */
export function resolveTenantId(explicitTenantId) {
  return explicitTenantId ?? getCurrentTenantId() ?? null;
}

// 실제로 학원(tenant) 단위로 분리돼야 하는 테이블. docs/security/multi-tenant-phase1-plan.md (a) 기준.
// 새 스코핑 대상 테이블은 반드시 여기에 추가한다(test-tenant-scope.mjs 가 목록 드리프트를 잡는다).
export const TENANT_SCOPED_TABLES = new Set([
  // Tier A — 테넌트 소유 루트
  "students",
  "class_templates",
  "lessons",
  "school_events",
  "exam_prep_rows",
  "academy_reminders",
  "problem_books",
  "resource_materials",
  "test_sessions",
  "notification_jobs",
  "notification_logs",
  "teacher_accounts",
  "student_intake_applicants",
  "special_lecture_applications",
  // Tier B — FK 파생이지만 컬럼 직접 부착
  "lesson_student_records",
  "attendance_events",
  "homeworks",
  "makeup_tasks",
  "wrong_problem_statuses",
  "score_records",
  "test_attempts",
  "special_lecture_enrollments",
  "exam_analysis_runs",
  "exam_analysis_sources",
  "exam_analysis_questions",
  "exam_analysis_ai_jobs",
  "exam_analysis_events",
  "exam_post_submissions",
  "exam_submission_files"
]);

export function isTenantScopingEnabled() {
  // 서버 전용 모듈이지만 src/ eslint 는 node 글로벌을 안 준다. globalThis 경유로 읽는다.
  const flag = globalThis.process?.env?.MULTITENANT_SCOPING;
  return String(flag || "").trim().toLowerCase() === "true";
}

function shouldScope(table, tenantId) {
  return isTenantScopingEnabled() && TENANT_SCOPED_TABLES.has(table) && Boolean(tenantId);
}

/**
 * 읽기 쿼리스트링에 `&tenant_id=eq.<tenantId>` 를 덧붙인다.
 * 스코핑 비활성/비대상 테이블/tenantId 없음이면 원본 쿼리를 그대로 돌려준다.
 */
export function applyTenantFilterToQuery(table, query, tenantId) {
  if (!shouldScope(table, tenantId)) return query;
  const filter = `${TENANT_COLUMN}=eq.${encodeURIComponent(tenantId)}`;
  return query ? `${query}&${filter}` : filter;
}

/**
 * 쓰기 행 배열에 tenant_id 를 주입한다. 행에 이미 다른 tenant_id 가 있으면 교차 테넌트
 * 쓰기 시도로 보고 throw 한다.
 */
export function applyTenantToRows(table, rows, tenantId) {
  if (!shouldScope(table, tenantId) || !Array.isArray(rows)) return rows;
  return rows.map((row) => {
    const existing = row?.[TENANT_COLUMN];
    if (existing != null && existing !== tenantId) {
      throw new Error(
        `테넌트 불일치: ${table} 행의 ${TENANT_COLUMN}=${existing} 인데 세션 테넌트는 ${tenantId} 입니다.`
      );
    }
    return { ...row, [TENANT_COLUMN]: tenantId };
  });
}

/**
 * PATCH/DELETE 처럼 selector 로 대상 행을 고르는 경우, 스코핑이 켜졌는데 tenantId 가 없으면
 * 전 테넌트 대상 변경/삭제가 되므로 막는다. 조건 충족 시 tenant 필터를 덧붙인 쿼리를 돌려준다.
 */
export function requireTenantScopedMutationQuery(table, query, tenantId) {
  if (!isTenantScopingEnabled() || !TENANT_SCOPED_TABLES.has(table)) return query;
  if (!tenantId) {
    throw new Error(`테넌트 스코프가 필요한 변경입니다: ${table} (tenantId 미지정)`);
  }
  return applyTenantFilterToQuery(table, query, tenantId);
}
