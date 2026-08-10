export function createStudentExamPrepRow({
  examCycle,
  examPrepId,
  grade,
  publisher = "",
  schoolName,
  subject = "공통수학1"
}) {
  return {
    examPrepId,
    examCycle,
    schoolName,
    grade,
    subject,
    publisher,
    scope: "",
    subTextbook: "",
    examPeriod: "",
    mathExamDate: "",
    mathExamDates: [],
    review: "",
    revisedReview: "",
    memo: "",
    isExcluded: false,
    source: "학생DB 자동생성"
  };
}
