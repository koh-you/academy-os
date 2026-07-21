import { postJsonWithHeaders } from "../../shared/utils/apiClient.js";

export async function completeStudentHomework(sessionToken, homeworkId) {
  if (!sessionToken) throw new Error("학생 로그인 정보가 필요합니다.");
  if (!homeworkId) throw new Error("완료할 숙제를 찾지 못했습니다.");

  const result = await postJsonWithHeaders(
    "/api/portal-homeworks/complete",
    { homeworkId },
    { Authorization: `Bearer ${sessionToken}` }
  );
  if (!result?.verified || !result?.homework) {
    throw new Error("Supabase 숙제 완료 상태를 확인하지 못했습니다.");
  }
  return result.homework;
}

async function mutateStudentQuestion(sessionToken, payload) {
  if (!sessionToken) throw new Error("학생 로그인 정보가 필요합니다.");
  const result = await postJsonWithHeaders(
    "/api/portal-questions",
    payload,
    { Authorization: `Bearer ${sessionToken}` }
  );
  if (!result?.verified || !Array.isArray(result?.questions)) {
    throw new Error("Supabase 질문 저장 상태를 확인하지 못했습니다.");
  }
  return {
    question: result.question ?? null,
    questions: result.questions
  };
}

export function createStudentQuestion(sessionToken, text) {
  return mutateStudentQuestion(sessionToken, { action: "create", text });
}

export function updateStudentQuestion(sessionToken, questionId, status) {
  if (!questionId) throw new Error("변경할 질문을 찾지 못했습니다.");
  return mutateStudentQuestion(sessionToken, { action: "update", questionId, status });
}

export function deleteStudentQuestion(sessionToken, questionId) {
  if (!questionId) throw new Error("삭제할 질문을 찾지 못했습니다.");
  return mutateStudentQuestion(sessionToken, { action: "delete", questionId });
}
