export function createLessonJournalCommentAudienceModel({
  audience = "parent",
  record = {}
} = {}) {
  const isParent = audience === "parent";
  const field = isParent ? "teacherComment" : "studentComment";

  return {
    aiStatus: isParent
      ? record?.teacherCommentAiStatus
      : record?.studentCommentAiStatus,
    comment: record?.[field] ?? "",
    field,
    isParent
  };
}

export function createLessonJournalCommentComposerModel({
  audience = "parent",
  audienceModel = createLessonJournalCommentAudienceModel({ audience }),
  draftSaveState = "idle",
  hasUnsavedDraft = false,
  initialSendTiming = "default",
  integrationStatus = null,
  lesson = {},
  record = {},
  saveState = "idle",
  student = {},
  dependencies = {}
} = {}) {
  const {
    getAudienceStatus,
    isLessonScheduleExpired,
    normalizeSaveState
  } = dependencies;
  const planMode = ["default", "delay30", "nextDay11am", "none"].includes(initialSendTiming)
    ? initialSendTiming
    : "default";
  const sendDelayMinutes = planMode === "delay30" ? 30 : planMode === "nextDay11am" ? "nextDay11am" : 0;
  const isManualResendAvailable = isLessonScheduleExpired(
    lesson,
    sendDelayMinutes
  );
  const sendTiming = isManualResendAvailable
    ? "now"
    : planMode === "none"
      ? "none"
      : "scheduled";
  const normalizedDraftSaveState = normalizeSaveState(saveState);
  const normalizedLocalDraftSaveState = normalizeSaveState(draftSaveState);
  const visibleDraftSaveState =
    hasUnsavedDraft && !["dirty", "saving"].includes(normalizedLocalDraftSaveState)
      ? "dirty"
      : normalizedLocalDraftSaveState !== "idle"
        ? normalizedLocalDraftSaveState
        : normalizedDraftSaveState;
  const { isParent } = audienceModel;
  const title = isParent
    ? `${student.name} 학부모 알림톡`
    : `${student.name} 학생 알림톡`;
  const previewTitle = isParent
    ? "학부모 알림톡 미리보기"
    : "학생 알림톡 미리보기";
  const isNotificationMuted = isParent
    ? Boolean(record?.notificationMutedParent)
    : Boolean(record?.notificationMutedStudent);
  const notificationStatus = integrationStatus?.notifications;
  const audienceNotificationStatus = getAudienceStatus(
    notificationStatus,
    audience
  );
  const forceDryRun = false;
  const canSendNowToRealRecipient =
    !audienceNotificationStatus?.dryRun &&
    audienceNotificationStatus?.allowRealRecipients;
  const forceTestRecipient = !canSendNowToRealRecipient;
  const actionLabel = isNotificationMuted
    ? "알림 제외"
    : isManualResendAvailable
      ? "수동 재발송"
      : planMode === "none"
        ? "발송 안 함"
        : planMode === "delay30"
          ? "30분 지연 예약"
          : planMode === "nextDay11am"
            ? "다음날 11시 예약"
            : "예약 발송";
  return {
    actionLabel,
    audienceNotificationStatus,
    canSendNowToRealRecipient,
    forceDryRun,
    forceTestRecipient,
    isManualResendAvailable,
    isNotificationMuted,
    isParent,
    planMode,
    previewTitle,
    sendDelayMinutes,
    sendTiming,
    title,
    visibleDraftSaveState
  };
}
