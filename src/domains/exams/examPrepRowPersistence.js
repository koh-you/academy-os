export function createExamPrepRowVersionFilter(examPrepId, expectedUpdatedAt) {
  return [
    `exam_prep_id=eq.${encodeURIComponent(examPrepId)}`,
    `updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`
  ].join("&");
}

export function isExamPrepRowInsertConflict(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return (
    message.includes("23505") ||
    message.includes("duplicate key") ||
    message.includes("unique constraint")
  );
}

export function createExamPrepRowConflict(examPrepId, currentRow = null, reason = "updated") {
  const reasonMessage = reason === "deleted"
    ? "다른 화면에서 먼저 삭제되었습니다."
    : "다른 화면에서 먼저 변경되었습니다.";
  return {
    code: "EXAM_PREP_ROW_CONFLICT",
    currentRow,
    examPrepId,
    message: `시험정보 ${examPrepId}가 ${reasonMessage} 현재 입력은 유지했으니 서버 저장본을 확인해 주세요.`
  };
}

export function createNextExamPrepRowUpdatedAt(expectedUpdatedAt = "", now = Date.now()) {
  const expectedTime = new Date(expectedUpdatedAt).getTime();
  const nextTime = Number.isFinite(expectedTime)
    ? Math.max(now, expectedTime + 1)
    : now;
  return new Date(nextTime).toISOString();
}

export function areExamPrepRowTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}
