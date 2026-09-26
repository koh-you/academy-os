// 2026-09-26 · 명단이 1명 이상이어야 저장되는 수업 유형.
// 검증(getLessonModalValidationError)과 푸터 안내(getLessonModalRosterNotice)가 같은 목록을 본다 —
// 두 문구가 갈라져서 "0명으로 저장됩니다" 와 "1명 이상 선택해 주세요" 가 같은 aria-live 에서 함께 읽히던 문제.
export const lessonModalRosterRequiredTypes = ["newStudentMakeup", "closureMakeup"];

export function isLessonModalRosterRequired(lessonType) {
  return lessonModalRosterRequiredTypes.includes(lessonType);
}

// 푸터의 명단 안내. 저장 중·저장 완료·저장 실패에는 그리지 않는다(실패 메시지가 이미 같은 말을 한다).
export function getLessonModalRosterNotice({
  lessonType,
  saveState = "idle",
  selectedStudentCount = 0
}) {
  if (selectedStudentCount > 0) return "";
  if (["saving", "verifying", "saved", "failed"].includes(saveState)) return "";
  return isLessonModalRosterRequired(lessonType)
    ? "학생을 1명 이상 선택해야 저장됩니다."
    : "포함 학생 0명으로 저장됩니다.";
}

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
  if (isLessonModalRosterRequired(lessonType) && studentIds.length === 0) {
    return lessonType === "closureMakeup" ? "휴강 보충 학생을 1명 이상 선택해 주세요." : "신입생 보강 학생을 1명 이상 선택해 주세요.";
  }
  if (isLessonModalRosterRequired(lessonType) && notificationEnabled && notificationAudiences.length === 0) {
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
    ...(isLessonModalRosterRequired(lessonType) ? {
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
