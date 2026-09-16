// 학원 브랜드 문구. 화면(appConfig)과 서버(알림톡 #{학원명})가 같은 규칙을 쓴다.
//
// academyBrandName 은 원장 이름이 박혀 있다. 협력 교사 tenant 의 알림톡·화면은
// formatTeacherBrandName(선생님 이름) 으로 "으뜸수학 최경석T" 처럼 만든다.
// 원장 계정 이름은 "고태영T" 라 결과가 academyBrandName 과 같다 — 기존 발송 문구 불변.
export const academyBrandName = "으뜸수학 고태영T";
export const academyName = "으뜸수학";

/**
 * 학원 이름 + 선생님 이름. 계정 이름이 이미 "T" 로 끝나면(고태영T) 덧붙이지 않는다.
 * 이름이 비면 학원 대표 문구로 돌아간다.
 */
export function formatTeacherBrandName(teacherName = "") {
  const name = String(teacherName ?? "").trim();
  if (!name) return academyBrandName;
  return `${academyName} ${name.endsWith("T") ? name : `${name}T`}`;
}
