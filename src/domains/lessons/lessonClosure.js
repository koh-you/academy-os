export const lessonClosureBlockingNotificationStatuses = new Set([
  "pending_send",
  "queued",
  "scheduled",
  "send_unconfirmed"
]);

export function isClosureLesson(lesson = {}) {
  return lesson?.lessonType === "closure";
}

export function isLessonClosureConversion(initialLesson = null, nextLessonType = "") {
  return Boolean(initialLesson?.lessonId) &&
    !isClosureLesson(initialLesson) &&
    nextLessonType === "closure";
}

export function isLessonTypeChoiceDisabled({
  initialLesson = null,
  isFormLocked = false,
  nextLessonType = ""
} = {}) {
  if (isFormLocked) return true;
  if (!initialLesson) return false;
  if (isClosureLesson(initialLesson)) return nextLessonType !== "closure";
  return false;
}

export function getLessonClosureBlockingNotificationJobs(notificationJobs = [], lessonId = "") {
  return notificationJobs.filter((job) =>
    job?.lessonId === lessonId &&
    lessonClosureBlockingNotificationStatuses.has(job?.status)
  );
}

export function getLessonClosureRoster(initialLesson = null, selectedStudentIds = []) {
  const sourceIds = initialLesson?.lessonId
    ? initialLesson.studentIds
    : selectedStudentIds;
  return [...new Set(Array.isArray(sourceIds) ? sourceIds.filter(Boolean) : [])];
}

export function shouldIgnoreLessonAttendance(lesson = null) {
  return !lesson ||
    isClosureLesson(lesson) ||
    ["canceled", "deleted"].includes(lesson.status);
}

export function getCountableAttendanceRecords(records = []) {
  return records.filter((record) => !shouldIgnoreLessonAttendance(record?.lesson));
}

export function getLessonClosureSourceSnapshot(lesson = {}) {
  const normalizedStudentSchedules = Object.fromEntries(
    Object.entries(lesson.specialLectureStudentSchedules ?? {})
      .sort(([leftStudentId], [rightStudentId]) => leftStudentId.localeCompare(rightStudentId))
  );
  return JSON.stringify({
    className: lesson.className || "",
    classTemplateId: lesson.classTemplateId || "",
    date: lesson.date || "",
    endTime: lesson.endTime || "",
    lessonId: lesson.lessonId || "",
    lessonTrackId: lesson.lessonTrackId || "",
    lessonTrackType: lesson.lessonTrackType || "",
    lessonType: lesson.lessonType || "",
    specialLectureGuideId: lesson.specialLectureGuideId || "",
    specialLectureSessionId: lesson.specialLectureSessionId || "",
    specialLectureSessionIndex: lesson.specialLectureSessionIndex ?? null,
    specialLectureStudentSchedules: normalizedStudentSchedules,
    startTime: lesson.startTime || "",
    status: lesson.status || "scheduled",
    studentIds: [...new Set(lesson.studentIds ?? [])].sort()
  });
}
