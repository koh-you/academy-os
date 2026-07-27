function normalizeSpecialLectureStudentSchedule(schedule = null) {
  if (!schedule) return null;
  return {
    studentId: String(schedule.studentId || ""),
    startTime: String(schedule.startTime || ""),
    endTime: String(schedule.endTime || ""),
    scheduleType: schedule.scheduleType === "adjusted" ? "adjusted" : "official",
    overrideReason: String(schedule.overrideReason || "")
  };
}

export function getSpecialLectureStudentSchedule(lesson = {}, studentId = "") {
  return (Array.isArray(lesson?.specialLectureStudentSchedules) ? lesson.specialLectureStudentSchedules : [])
    .find((schedule) => schedule.studentId === studentId) ?? null;
}

export function haveSameSpecialLectureStudentSchedule(left = null, right = null) {
  return JSON.stringify(normalizeSpecialLectureStudentSchedule(left)) ===
    JSON.stringify(normalizeSpecialLectureStudentSchedule(right));
}

export function getSpecialLectureStudentSyncOperation({
  lesson = null,
  studentId = "",
  expectedSchedule = null
} = {}) {
  const existingSchedule = getSpecialLectureStudentSchedule(lesson ?? {}, studentId);
  const isInRoster = Boolean(lesson && (lesson.studentIds ?? []).includes(studentId));
  if (!expectedSchedule) return isInRoster || existingSchedule ? "remove" : "none";
  if (!lesson || !isInRoster || !existingSchedule) return "add";
  return haveSameSpecialLectureStudentSchedule(existingSchedule, expectedSchedule) ? "none" : "update";
}

export function isSpecialLectureStudentScheduleSynced({
  lesson = null,
  studentId = "",
  expectedSchedule = null
} = {}) {
  return getSpecialLectureStudentSyncOperation({ lesson, studentId, expectedSchedule }) === "none";
}

export function getSpecialLectureStudentSyncProtectionReasons({
  lesson = null,
  lessonDate = "",
  studentId = "",
  expectedSchedule = null,
  records = [],
  notificationJobs = [],
  pendingNotificationStatuses = [],
  todayDateKey = ""
} = {}) {
  const reasons = [];
  if (lessonDate && todayDateKey && lessonDate <= todayDateKey) reasons.push("오늘·과거 수업");
  if (!lesson) return reasons;
  if (lesson.status === "completed") reasons.push("완료 수업");

  const operation = getSpecialLectureStudentSyncOperation({ lesson, studentId, expectedSchedule });
  if (
    operation === "remove" &&
    (Array.isArray(records) ? records : [])
      .some((record) => record.lessonId === lesson.lessonId && record.studentId === studentId)
  ) {
    reasons.push("해당 학생 기록");
  }

  const pendingStatuses = pendingNotificationStatuses instanceof Set
    ? pendingNotificationStatuses
    : new Set(pendingNotificationStatuses);
  if (
    (Array.isArray(notificationJobs) ? notificationJobs : []).some((job) =>
      job.lessonId === lesson.lessonId &&
      pendingStatuses.has(job.status) &&
      (!job.studentId || job.studentId === studentId)
    )
  ) {
    reasons.push("해당 학생 대기 알림");
  }
  return [...new Set(reasons)];
}

export function mergeSpecialLectureStudentSchedule({
  lesson = {},
  studentId = "",
  expectedSchedule = null
} = {}) {
  const studentIds = new Set(lesson.studentIds ?? []);
  const preservedSchedules = (Array.isArray(lesson.specialLectureStudentSchedules)
    ? lesson.specialLectureStudentSchedules
    : [])
    .filter((schedule) => schedule.studentId !== studentId);

  if (expectedSchedule) studentIds.add(studentId);
  else studentIds.delete(studentId);

  return {
    ...lesson,
    studentIds: [...studentIds],
    specialLectureStudentSchedules: [
      ...preservedSchedules,
      ...(expectedSchedule ? [normalizeSpecialLectureStudentSchedule(expectedSchedule)] : [])
    ]
  };
}
