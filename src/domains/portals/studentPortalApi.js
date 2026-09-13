import { apiUrl, postJsonWithHeaders } from "../../shared/utils/apiClient.js";

/** 학생 포털 › 오답: 선생님이 기록한 문항 요약(교재·단원·문항·기록). 읽기 전용. */
export async function fetchStudentWrongAnswers(sessionToken) {
  if (!sessionToken) throw new Error("학생 로그인 정보가 필요합니다.");
  const response = await fetch(apiUrl("/api/portal-problem-bank"), { headers: { Authorization: `Bearer ${sessionToken}` } });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) throw new Error(result?.error || `오답 목록을 불러오지 못했습니다 (${response.status})`);
  return result;
}

/** 학생 포털 › 오답: 자기 기록이 있는 문항의 이미지 서명 URL. 필요한 문항만 그때그때 받는다. */
export async function fetchStudentWrongAnswerImages(sessionToken, itemIds) {
  if (!sessionToken) throw new Error("학생 로그인 정보가 필요합니다.");
  const result = await postJsonWithHeaders("/api/portal-problem-bank/item-images", { itemIds }, { Authorization: `Bearer ${sessionToken}` });
  return result.regions ?? [];
}

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
