export function createClassRosterAuditId(now = Date.now()) {
  const randomPart = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2, 10);
  return `class-roster-${now}-${randomPart}`;
}

export async function saveClassRosterRequest({
  auditId = createClassRosterAuditId(),
  lessonChanges = [],
  request,
  studentChanges = [],
  timeoutMessage = "반 명단 저장이 30초를 넘었습니다. 중복 실행하지 말고 현재 입력을 유지한 채 서버 상태를 확인해 주세요."
} = {}) {
  if (typeof request !== "function") throw new Error("반 명단 저장 request가 필요합니다.");
  if (studentChanges.some(({ after, before }) => (
    !after?.studentId || (before && !before.updatedAt)
  ))) {
    throw new Error("학생 반 배정의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 시도해 주세요.");
  }
  if (lessonChanges.some((change) => !change.lessonId || !change.expectedUpdatedAt)) {
    throw new Error("미래 수업 명단의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 시도해 주세요.");
  }
  const result = await request(
    "/api/class-rosters/save",
    { auditId, lessonChanges, studentChanges },
    30000,
    timeoutMessage
  );
  if (result?.source !== "supabase" || result?.verified !== true || result?.auditId !== auditId) {
    throw new Error("반 배정 저장 결과를 확인하지 못했습니다.");
  }
  if (result.cleanup?.verified === false) {
    const error = new Error("반 배정은 저장됐지만 제외 학생의 연결 기록 정리를 확인하지 못했습니다. 다시 저장해 주세요.");
    error.classRosterCommitted = true;
    error.result = result;
    throw error;
  }
  return result;
}
