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

function normalizeTenantIdList(values) {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

/**
 * HTTP 핸들러 진입 직후 1회. 이후 비동기 연쇄에 값이 전파된다.
 *
 * `tenantId` 는 **쓰기** 테넌트다(행에 주입되고 PATCH/DELETE 필터가 된다). 반드시 하나다.
 * `readTenantIds` 는 **읽기** 범위다. 여러 학원을 한 화면에 모아 보여줘야 하는 주체
 * (예: 여러 선생님 학생을 같이 받는 로비 태블릿)만 두 개 이상을 갖는다.
 * 생략하면 읽기 범위는 쓰기 테넌트 하나와 같다.
 */
export function enterTenantContext(tenantId, { readTenantIds } = {}) {
  tenantContext.enterWith({
    tenantId: tenantId || null,
    readTenantIds: normalizeTenantIdList(readTenantIds)
  });
}

/** 콜백 범위에만 테넌트를 적용(크론/배치/테스트용). */
export function runWithTenant(tenantId, fn, { readTenantIds } = {}) {
  return tenantContext.run(
    { tenantId: tenantId || null, readTenantIds: normalizeTenantIdList(readTenantIds) },
    fn
  );
}

/**
 * 읽기 범위는 그대로 두고 쓰기 테넌트만 바꾼다.
 * 키오스크처럼 "여러 학원의 명단을 읽은 뒤, 고른 학생이 속한 학원에만 쓰는" 흐름에서 쓴다.
 * 읽기 범위가 지정돼 있으면 그 안의 테넌트로만 바꿀 수 있다.
 */
export function setWriteTenant(tenantId) {
  const store = tenantContext.getStore();
  const readTenantIds = store?.readTenantIds ?? [];
  const nextTenantId = String(tenantId || "").trim();
  if (!nextTenantId) throw new Error("쓰기 테넌트가 필요합니다.");
  if (readTenantIds.length && !readTenantIds.includes(nextTenantId)) {
    throw new Error(`허용되지 않은 테넌트입니다: ${nextTenantId}`);
  }
  tenantContext.enterWith({ tenantId: nextTenantId, readTenantIds });
}

export function getCurrentTenantId() {
  return tenantContext.getStore()?.tenantId ?? null;
}

/** 읽기에 적용할 테넌트 목록. 지정이 없으면 쓰기 테넌트 하나. */
export function getReadTenantIds() {
  const store = tenantContext.getStore();
  const readTenantIds = store?.readTenantIds ?? [];
  if (readTenantIds.length) return readTenantIds;
  return store?.tenantId ? [store.tenantId] : [];
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
  // 정산·상담기록·성적·보고서 등 교사 소유 데이터가 state_key 별로 들어간다.
  // 기본키가 (tenant_id, state_key) 복합키다 — supabase/20260907_app_state_tenant.sql
  "app_state",
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

/** 명시 값이 있으면 그것, 없으면 요청 컨텍스트의 읽기 범위. 항상 배열. */
export function resolveReadTenantIds(explicitTenantId) {
  if (Array.isArray(explicitTenantId)) return normalizeTenantIdList(explicitTenantId);
  if (explicitTenantId) return [String(explicitTenantId)];
  return getReadTenantIds();
}

/**
 * 읽기 쿼리스트링에 테넌트 필터를 덧붙인다. 하나면 `tenant_id=eq.<id>`,
 * 여럿이면 `tenant_id=in.(<id>,<id>)`.
 * 스코핑 비활성/비대상 테이블/테넌트 없음이면 원본 쿼리를 그대로 돌려준다.
 */
export function applyTenantFilterToQuery(table, query, tenantId) {
  const tenantIds = Array.isArray(tenantId)
    ? normalizeTenantIdList(tenantId)
    : (tenantId ? [String(tenantId)] : []);
  if (!shouldScope(table, tenantIds.length ? tenantIds[0] : null)) return query;
  // PostgREST in.(...) 값에 콤마·괄호·따옴표가 들어가면 목록이 깨지므로 각 값을 큰따옴표로 감싼다.
  const filter = tenantIds.length === 1
    ? `${TENANT_COLUMN}=eq.${encodeURIComponent(tenantIds[0])}`
    : `${TENANT_COLUMN}=in.${encodeURIComponent(`(${tenantIds.map((id) => `"${id}"`).join(",")})`)}`;
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
