// 결정적 id(날짜·학교·고사 등에서 만들어지는 id)에 붙는 tenant 조각.
//
// 수업·학사일정·테스트 세션의 id 는 `lesson_exam_prep_<날짜>` 처럼 입력값만으로 정해진다.
// 교사가 한 명일 때는 같은 id 가 두 번 나올 수 없었지만, 협력 교사가 같은 학교·같은 날짜를
// 입력하면 원장과 **같은 id** 가 되고, 표의 기본키는 tenant 를 모르므로 insert 는 409 로
// 튕기거나(insertRows) upsert 는 원장 행을 통째로 끌어온다(2026-09-19 감사).
//
// 원장 tenant(tenant_default)는 조각을 붙이지 않는다 — 운영 데이터의 id 는 그대로다.
// 그 밖의 tenant 는 `_t<uuid 앞 8자>` 를 뒤에 붙인다. 접두어(`lesson_exam_prep_`,
// `derived_math_<examPrepId>_` …)로 판별하는 코드는 접미라서 그대로 동작한다.
//
// 화면은 App 이 로그인/보기 전환 시 setTenantIdScope 로 현재 tenant 를 알려 준다.
// (apiClient 의 setViewTenantId 와 같은 방식의 모듈 상태.)

export const DEFAULT_TENANT_ID = "tenant_default";

let currentScope = "";

export function createTenantIdScope(tenantId = "") {
  const normalized = String(tenantId ?? "").trim();
  if (!normalized || normalized === DEFAULT_TENANT_ID) return "";
  return normalized.replace(/^tenant_/, "").replace(/[^0-9A-Za-z]/g, "").slice(0, 8);
}

export function setTenantIdScope(tenantId = "") {
  currentScope = createTenantIdScope(tenantId);
}

export function getTenantIdScope() {
  return currentScope;
}

/** 현재 tenant 조각을 id 뒤에 붙인다. 이미 붙어 있거나 원장 tenant 면 그대로. */
export function scopeDeterministicId(id = "") {
  const value = String(id ?? "");
  if (!currentScope || !value) return value;
  const suffix = `_t${currentScope}`;
  return value.endsWith(suffix) ? value : `${value}${suffix}`;
}
