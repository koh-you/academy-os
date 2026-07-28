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
      placeholder: "지난 숙제",
      source: "homework",
      value: previousHomeworkTitle
    },
    {
      ariaLabel: `${student.name} 다음 숙제`,
      editKey: `${recordId}:nextHomework`,
      field: "next",
      placeholder: "다음 숙제",
      source: "homework",
      value: nextHomeworkTitle
    }
  ];
}
