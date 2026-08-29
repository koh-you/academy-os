export function getLessonModalValidationError({
  closureMakeupDate,
  closureMakeupEnabled,
  closureMakeupEndTime,
  closureMakeupStartTime,
  date,
  endTime,
  lessonType,
  name,
  notificationAudiences = [],
  notificationEnabled = false,
  normalizeTimeInput,
  startTime,
  studentIds = []
}) {
  if (!name.trim()) return "수업명을 입력해 주세요.";
  if (!date) return "수업 날짜를 입력해 주세요.";
  if (!normalizeTimeInput(startTime) || !normalizeTimeInput(endTime) || endTime <= startTime) {
    return "수업 시작·종료 시간을 올바르게 입력해 주세요.";
  }
  if (["newStudentMakeup", "closureMakeup"].includes(lessonType) && studentIds.length === 0) {
    return lessonType === "closureMakeup" ? "휴강 보충 학생을 1명 이상 선택해 주세요." : "신입생 보강 학생을 1명 이상 선택해 주세요.";
  }
  if (["newStudentMakeup", "closureMakeup"].includes(lessonType) && notificationEnabled && notificationAudiences.length === 0) {
    return "알림톡을 받을 학부모 또는 학생을 선택해 주세요.";
  }
  if (lessonType === "closure" && closureMakeupEnabled) {
    if (!closureMakeupDate) return "휴강 보충 날짜를 입력해 주세요.";
    if (
      !normalizeTimeInput(closureMakeupStartTime) ||
      !normalizeTimeInput(closureMakeupEndTime) ||
      closureMakeupEndTime <= closureMakeupStartTime
    ) {
      return "휴강 보충 시작·종료 시간을 올바르게 입력해 주세요.";
    }
  }
  return "";
}

export function createLessonModalSubmitPayload({
  classTemplateId,
  closureMakeupDate,
  closureMakeupEnabled,
  closureMakeupEndTime,
  closureMakeupLessonId,
  closureMakeupNotificationDrafts = {},
  closureMakeupStartTime,
  color,
  date,
  endTime,
  isPersistedClosure,
  lessonId,
  lessonType,
  name,
  notificationAudiences = [],
  notificationEnabled = false,
  includeStudentReminder = true,
  startTime,
  studentIds
}) {
  return {
    classTemplateId,
    closureMakeupDate,
    closureMakeupEnabled:
      lessonType === "closure" && !isPersistedClosure && closureMakeupEnabled,
    closureMakeupEndTime,
    closureMakeupLessonId,
    closureMakeupStartTime,
    color,
    date,
    endTime,
    lessonType,
    lessonId,
    name: name.trim(),
    ...(["newStudentMakeup", "closureMakeup"].includes(lessonType) ? {
      notificationAudiences: notificationEnabled ? notificationAudiences : [],
      notificationEnabled,
      ...(lessonType === "closureMakeup" ? {
        closureMakeupNotificationDrafts: notificationEnabled ? closureMakeupNotificationDrafts : {},
        includeStudentReminder
      } : {})
    } : {}),
    startTime,
    studentIds
  };
}
