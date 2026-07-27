export function getLessonModalValidationError({
  closureMakeupDate,
  closureMakeupEnabled,
  closureMakeupEndTime,
  closureMakeupStartTime,
  date,
  endTime,
  lessonType,
  name,
  normalizeTimeInput,
  startTime
}) {
  if (!name.trim()) return "수업명을 입력해 주세요.";
  if (!date) return "수업 날짜를 입력해 주세요.";
  if (!normalizeTimeInput(startTime) || !normalizeTimeInput(endTime) || endTime <= startTime) {
    return "수업 시작·종료 시간을 올바르게 입력해 주세요.";
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
  closureMakeupStartTime,
  color,
  date,
  endTime,
  isPersistedClosure,
  lessonId,
  lessonType,
  name,
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
    startTime,
    studentIds
  };
}
