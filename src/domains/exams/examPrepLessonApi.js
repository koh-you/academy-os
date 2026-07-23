export function saveExamPrepLessonsRequest({ lessons = [], request }) {
  return request("/api/lessons/bulk", { lessons });
}

export async function deleteExamPrepLessonRequest({
  auditId,
  fetchImpl = fetch,
  lessonId,
  resolveApiUrl = (path) => path
}) {
  const response = await fetchImpl(
    resolveApiUrl(
      `/api/lessons?id=${encodeURIComponent(lessonId)}&mode=exam-prep-reconcile&auditId=${encodeURIComponent(auditId)}`
    ),
    { method: "DELETE" }
  );
  const result = await response.json();
  if (!response.ok || !result.ok) {
    const error = new Error(result.error || "시험대비 수업 삭제 실패");
    error.audit = result.audit;
    throw error;
  }
  return result;
}
