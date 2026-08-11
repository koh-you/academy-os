export async function saveExamPrepSchedulePlanRequest({ auditId, changes, request }) {
  if (typeof request !== "function") throw new Error("시험대비 일정 저장 요청 함수가 필요합니다.");
  return request("/api/exam-prep-schedule/save", { auditId, changes });
}
