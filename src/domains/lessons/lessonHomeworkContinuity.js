const meaningfulAttendanceStatuses = new Set([
  "absent",
  "excused",
  "late",
  "present",
  "unexcused"
]);

function hasText(value) {
  return String(value ?? "").trim().length > 0;
}

export function hasPersistedLessonProgress(records = [], lessonId = "") {
  return records.some((record) => {
    if (record?.lessonId !== lessonId) return false;
    if (meaningfulAttendanceStatuses.has(record.attendanceStatus)) return true;
    if ([record.checkInAt, record.checkInTime, record.checkOutAt, record.checkOutTime].some(hasText)) return true;
    if ([record.lessonMaterial, record.lessonProgress, record.teacherComment, record.studentComment, record.behaviorTag].some(hasText)) {
      return true;
    }
    if (hasText(record.assignmentStatus) && record.assignmentStatus !== "not_entered") return true;
    if (hasText(record.incompleteHomework) && record.incompleteHomework !== "not_entered") return true;
    return hasText(record.homeworkStatus) && record.homeworkStatus !== "not_started";
  });
}

export function selectLinkedPreviousHomework({
  homeworks = [],
  previousLessons = [],
  records = null,
  studentId = ""
} = {}) {
  const canVerifyLessonProgress = Array.isArray(records);

  for (const previousLesson of previousLessons) {
    const linkedHomework = homeworks.find(
      (homework) =>
        homework.lessonId === previousLesson.lessonId &&
        homework.studentId === studentId &&
        homework.homeworkType === "next"
    ) ?? null;
    if (linkedHomework) {
      return {
        ...linkedHomework,
        linkedFromLessonId: previousLesson.lessonId,
        linkedFromDate: previousLesson.date,
        homeworkType: "previous"
      };
    }

    if (!canVerifyLessonProgress || hasPersistedLessonProgress(records, previousLesson.lessonId)) {
      return null;
    }
  }

  return null;
}
