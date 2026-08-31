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
  record = {},
  saveState = "idle",
  student = {},
  dependencies = {}
} = {}) {
  const {
    getAudienceStatus,
    normalizeSaveState
  } = dependencies;
  const isLessonNotificationOff = initialSendTiming === "none";
  const sendTiming = isLessonNotificationOff ? "none" : "now";
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
    : isLessonNotificationOff
      ? "발송 안 함"
      : "즉시 발송";
  return {
    actionLabel,
    audienceNotificationStatus,
    canSendNowToRealRecipient,
    forceDryRun,
    forceTestRecipient,
    isLessonNotificationOff,
    isNotificationMuted,
    isParent,
    previewTitle,
    sendTiming,
    title,
    visibleDraftSaveState
  };
}
