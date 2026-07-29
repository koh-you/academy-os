export function createPreExamMathLabelInference({
  normalizeGradeLabel
}) {
  return function inferMathExamLabelFromPreExamLesson(
    lesson = {},
    row = {}
  ) {
    const schoolName = String(
      row.schoolName || ""
    ).trim();
    const grade = normalizeGradeLabel(row.grade || "");
    const text = String(lesson.className || "")
      .replace(/\s*직전수업\s*$/, "")
      .replace(schoolName, "")
      .replace(grade, "")
      .trim();
    if (!text || /^\d+$/.test(text)) return "";
    if (
      ["수학", "수학시험", row.subject].includes(text)
    ) {
      return "";
    }
    return text;
  };
}
