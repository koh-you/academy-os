export function saveExamPrepLessonsRequest({ lessons = [], request }) {
  return request("/api/lessons/bulk", { lessons });
}

export function deleteExamPrepLessonRequest({
  fetchImpl = fetch,
  lessonId,
  resolveApiUrl = (path) => path
}) {
  return fetchImpl(
    resolveApiUrl(`/api/lessons?id=${encodeURIComponent(lessonId)}`),
    { method: "DELETE" }
  );
}
