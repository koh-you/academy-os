export function createLessonJournalAbsenceSourceModel({ lesson, lessons = [], records = [], task }) {
  if (task?.taskType !== "absence_makeup") {
    return { isVisible: false };
  }

  const studentId = task.studentId || lesson?.studentIds?.[0] || "";
  const sourceRecord =
    records.find((record) => record.lessonStudentRecordId === task.sourceId || record.recordId === task.sourceId) ??
    records.find((record) => record.lessonId === task.sourceLessonId && record.studentId === studentId) ??
    null;
  const sourceLessonId = sourceRecord?.lessonId || task.sourceLessonId || "";
  const sourceLesson = lessons.find((item) => item.lessonId === sourceLessonId) ?? null;
  const classLabel =
    sourceLesson?.className ||
    sourceLesson?.title ||
    sourceLesson?.lessonTopic ||
    task.sourceLabel ||
    "수업명 미확인";
  const dateLabel = sourceLesson?.date || task.lessonDate || "날짜 미확인";
  const timeLabel = [sourceLesson?.startTime, sourceLesson?.endTime].filter(Boolean).join("-");
  const absenceReason = sourceRecord?.absenceReason || task.absenceReason || task.reason || "결석 사유 미입력";

  return {
    absenceReason,
    classLabel,
    dateLabel,
    isVisible: true,
    timeLabel
  };
}
