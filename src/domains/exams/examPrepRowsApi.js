export async function saveExamPrepRowsRequest({ allowRestore = false, examPrepRows = [], request }) {
  if (typeof request !== "function") {
    throw new Error("시험정보 저장 request가 필요합니다.");
  }
  const result = await request("/api/exam-prep-rows/bulk", {
    examPrepRows,
    ...(allowRestore ? { allowRestore: true } : {})
  });
  if (result?.source !== "supabase" || !Array.isArray(result?.examPrepRows)) {
    throw new Error("시험정보의 Supabase 저장 결과를 확인하지 못했습니다. 현재 입력은 유지됩니다.");
  }
  if (allowRestore && result.verified !== true) {
    throw new Error("시험정보 삭제 복구를 Supabase 재조회로 확인하지 못했습니다.");
  }
  return result;
}

export async function deleteExamPrepRowRequest({
  auditId,
  examPrepId,
  fetchImpl = fetch,
  resolveApiUrl = (path) => path
}) {
  const response = await fetchImpl(
    resolveApiUrl(
      `/api/exam-prep-rows?id=${encodeURIComponent(examPrepId)}&confirm=true&auditId=${encodeURIComponent(auditId)}`
    ),
    { method: "DELETE" }
  );
  const result = await response.json();
  if (!response.ok || !result.ok) {
    const error = new Error(result.error || "시험정보 삭제 실패");
    error.audit = result.audit;
    throw error;
  }
  return result;
}
