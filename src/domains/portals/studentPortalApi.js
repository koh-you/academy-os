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
