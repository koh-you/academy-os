// 지금 로그인한 선생님의 id. 수업·수업기록·보충 계획의 updatedBy/teacherId 도장에 쓴다.
//
// 2026-09-19 까지는 "instructor_owner_001"(원장 id)이 22곳에 글자 그대로 박혀 있어 협력
// 교사가 저장한 기록도 원장이 쓴 것처럼 남았다. App 이 세션이 바뀔 때 setSessionActor 로
// 알려 주고, 세션을 모르는 모듈은 getSessionTeacherId() 를 기본값으로 쓴다.
// (apiClient 의 setCurrentTeacherRole, tenantIdScope 와 같은 모듈 상태 방식.)

export const DEFAULT_TEACHER_ID = "instructor_owner_001";

let currentTeacherId = DEFAULT_TEACHER_ID;

export function setSessionActor({ teacherId } = {}) {
  currentTeacherId = String(teacherId ?? "").trim() || DEFAULT_TEACHER_ID;
}

export function getSessionTeacherId() {
  return currentTeacherId;
}
