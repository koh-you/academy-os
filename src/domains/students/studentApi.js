export async function saveStudentRequest({
  createOnly = false,
  request,
  student,
  timeoutMessage = "학생 저장이 15초를 넘었습니다. 현재 입력을 유지한 채 서버 저장 상태를 확인해 주세요."
}) {
  if (!student?.studentId) throw new Error("저장할 학생을 찾지 못했습니다.");
  if (!createOnly && !student.updatedAt) {
    throw new Error("학생의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 입력해 주세요.");
  }
  if (typeof request !== "function") throw new Error("학생 저장 request가 필요합니다.");

  const result = await request(
    "/api/students",
    {
      student,
      ...(createOnly ? { createOnly: true } : { expectedUpdatedAt: student.updatedAt })
    },
    15000,
    timeoutMessage
  );
  if (
    result?.source !== "supabase" ||
    result?.verified !== true ||
    result?.student?.studentId !== student.studentId ||
    !result?.student?.updatedAt
  ) {
    throw new Error("학생의 Supabase 저장 결과를 재조회로 확인하지 못했습니다. 현재 입력은 유지됩니다.");
  }
  return result.student;
}
