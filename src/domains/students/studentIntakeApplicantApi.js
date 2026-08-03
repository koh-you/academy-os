export async function saveStudentIntakeApplicantRequest({
  applicant,
  request,
  timeoutMessage = "Tally 후보 저장이 15초를 넘었습니다. 현재 입력을 유지한 채 잠시 뒤 서버 상태를 확인해 주세요."
}) {
  if (!applicant?.applicantId) {
    throw new Error("저장할 Tally 후보를 찾지 못했습니다.");
  }
  if (!applicant.updatedAt) {
    throw new Error("Tally 후보의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 입력해 주세요.");
  }
  if (typeof request !== "function") {
    throw new Error("Tally 후보 저장 request가 필요합니다.");
  }

  const result = await request(
    "/api/student-intake-applicants",
    {
      applicant,
      expectedUpdatedAt: applicant.updatedAt
    },
    15000,
    timeoutMessage
  );
  if (
    result?.source !== "supabase" ||
    result?.verified !== true ||
    result?.applicant?.applicantId !== applicant.applicantId ||
    !result?.applicant?.updatedAt
  ) {
    throw new Error("Tally 후보의 Supabase 저장 결과를 재조회로 확인하지 못했습니다. 현재 입력은 유지됩니다.");
  }
  return result.applicant;
}
