// 시험정보 자동 생성 id 의 tenant 구분자.
//
// 자동 생성 id 는 `exam_prep_<고사>_<학교>_<학년>_<과목>` 인데 exam_prep_rows 의 PK 는
// exam_prep_id 하나다(tenant 는 컬럼일 뿐). 그래서 협력 교사 tenant 가 원장과 같은
// 학교·학년(창북중 중3 등)을 등록하면 **같은 id** 가 만들어지고, 원장 행이 tenant 필터에
// 가려 보이지 않으니 insert → PK 충돌 → "저장 실패", 삭제도 0건(2026-09-18 최경석 보고).
//
// 원장 tenant(tenant_default)는 기존 id 를 그대로 둔다(데이터 불변). 다른 tenant 는 id 에
// tenant 조각을 넣어 겹치지 않게 한다.
export const DEFAULT_TENANT_ID = "tenant_default";

export function createExamPrepRowIdScope(tenantId = "") {
  const normalized = String(tenantId ?? "").trim();
  if (!normalized || normalized === DEFAULT_TENANT_ID) return "";
  return normalized.replace(/^tenant_/, "").replace(/[^0-9A-Za-z]/g, "").slice(0, 8);
}

export function createStudentExamPrepRowId({ examCycle, grade, idScope = "", safeIdPart, schoolName, subject }) {
  const scopePart = idScope ? `${safeIdPart(idScope)}_` : "";
  return `exam_prep_${scopePart}${safeIdPart(examCycle)}_${safeIdPart(schoolName)}_${safeIdPart(grade)}_${safeIdPart(subject)}`;
}
