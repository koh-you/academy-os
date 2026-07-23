export function buildExamReviewPolishPayload({
  aiModel,
  aiPrompt,
  aiProvider,
  grade,
  lessonDate,
  lessonName,
  rawText,
  schoolName
} = {}) {
  return {
    aiProvider,
    aiModel,
    aiPrompt,
    audience: "teacher",
    grade,
    homeworkStatus: "시험 후 총평",
    lessonDate,
    lessonName,
    polishMode: "spellingOnly",
    rawText,
    schoolName,
    studentName: "시험관리"
  };
}

export async function polishExamReviewRequest({
  fetchImpl = fetch,
  payload,
  resolveApiUrl = (path) => path
} = {}) {
  const response = await fetchImpl(resolveApiUrl("/api/ai/comment-polish"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "시험 후 총평 AI 수정에 실패했습니다.");
  }
  return result.result;
}
