export function resolveLessonJournalEditableText({
  currentValues = [],
  fallbackValues = []
} = {}) {
  const currentValue = currentValues.find((value) => String(value ?? "").trim());
  if (currentValue !== undefined) return String(currentValue ?? "");

  const fallbackValue = fallbackValues.find((value) => String(value ?? "").trim());
  return fallbackValue === undefined ? "" : String(fallbackValue ?? "").trim();
}

export function createLessonJournalEditableFieldsModel({
  nextHomeworkTitle = "",
  previousHomeworkTitle = "",
  previousLessonContent = "",
  previousLessonMaterial = "",
  record = {},
  recordId = "",
  student = {}
}) {
  return [
    {
      ariaLabel: `${student.name} 강의 교재`,
      editKey: `${recordId}:lessonMaterial`,
      field: "lessonMaterial",
      placeholder: previousLessonMaterial || student.textbook || student.currentTextbook || "강의 교재",
      source: "record",
      value: record.lessonMaterial ?? ""
    },
    {
      ariaLabel: `${student.name} 오늘 강의 내용`,
      editKey: `${recordId}:lessonProgress`,
      field: "lessonProgress",
      placeholder: previousLessonContent || "오늘 강의 내용",
      source: "record",
      value: record.lessonProgress ?? record.progress ?? ""
    },
    {
      ariaLabel: `${student.name} 지난 숙제`,
      editKey: `${recordId}:previousHomework`,
      field: "previous",
      placeholder: "미입력",
      source: "homework",
      value: previousHomeworkTitle
    },
    {
      ariaLabel: `${student.name} 다음 숙제`,
      editKey: `${recordId}:nextHomework`,
      field: "next",
      placeholder: "미입력",
      source: "homework",
      value: nextHomeworkTitle
    }
  ];
}
