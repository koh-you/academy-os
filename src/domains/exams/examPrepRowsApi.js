export function saveExamPrepRowsRequest({ examPrepRows = [], request }) {
  if (typeof request !== "function") {
    throw new Error("시험정보 저장 request가 필요합니다.");
  }
  return request("/api/exam-prep-rows/bulk", { examPrepRows });
}

export async function deleteExamPrepRowRequest({
  examPrepId,
  fetchImpl = fetch,
  resolveApiUrl = (path) => path
}) {
  const response = await fetchImpl(
    resolveApiUrl(`/api/exam-prep-rows?id=${encodeURIComponent(examPrepId)}&confirm=true`),
    { method: "DELETE" }
  );
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "시험정보 삭제 실패");
  }
  return result;
}
