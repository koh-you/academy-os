export const lessonJournalTableColumns = Object.freeze([
  "학생",
  "수업메모",
  "출결",
  "강의 교재",
  "강의 내용",
  "지난 숙제",
  "다음 숙제",
  "과제 상태",
  "학부모 알림톡",
  "학생 알림톡"
]);

export function createLessonJournalTableModel({ isEditMode = false } = {}) {
  return {
    className: isEditMode ? "journalTable editing" : "journalTable",
    columns: lessonJournalTableColumns
  };
}
