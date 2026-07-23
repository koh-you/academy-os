export function createHomeworkSupplementItems(
  homeworks = [],
  {
    getReason = () => ""
  } = {}
) {
  return homeworks.map((homework) => {
    const reason = getReason(homework);
    return {
      id: homework.homeworkId,
      studentId: homework.studentId,
      title: homework.title,
      meta: `${homework.dueDate || homework.assignedDate || "-"} 기준 · ${reason}`,
      task: {
        taskType: "homework_makeup",
        studentId: homework.studentId,
        sourceId: homework.homeworkId,
        sourceDate: homework.assignedDate || homework.dueDate || "",
        sourceDueDate: homework.dueDate || "",
        sourceLabel: homework.title,
        supplementHomeworkNote: homework.title,
        reason,
        supplementMethod: "arrival_makeup"
      }
    };
  });
}

export function createRetestSupplementItems(
  records = [],
  {
    getLessonLabel = () => "연결 수업 없음"
  } = {}
) {
  return records.map((record) => {
    const sourceLabel = getLessonLabel(record.lessonId);
    return {
      id: record.lessonStudentRecordId,
      studentId: record.studentId,
      title: sourceLabel,
      meta: "재시험 필요",
      task: {
        taskType: "retest",
        studentId: record.studentId,
        sourceId: record.lessonStudentRecordId,
        sourceLabel,
        reason: "재시험 필요"
      }
    };
  });
}
