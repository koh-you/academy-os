import { createLessonJournalCommentSendPayload } from "./lessonJournalCommentSendPayload.js";
import { polishLessonJournalCommentDraft } from "./lessonJournalCommentPolishController.js";
import { saveLessonJournalCommentDraft } from "./lessonJournalCommentSaveController.js";
import {
  createLessonJournalCommentAudienceModel,
  createLessonJournalCommentComposerModel
} from "./lessonJournalCommentComposerModel.js";
import { LessonJournalCommentComposerView } from "./LessonJournalCommentComposerView.jsx";
import { useLessonJournalCommentComposerDraft } from "./useLessonJournalCommentComposerDraft.js";

export function LessonJournalCommentComposer({
  aiModel,
  aiProvider,
  audience,
  dependencies,
  integrationStatus,
  initialCommentDraft,
  initialSendTiming = "default",
  lesson,
  nextHomework,
  notificationTemplates = {},
  onClose,
  onPolishComment,
  onSaveRecord,
  onSendComment,
  previousHomework,
  record,
  saveState = "idle",
  student,
  supplementSchedules = [],
  testResultLines = []
}) {
  const {
    buildPreviewText,
    buildSourceText,
    createEmptyRecord,
    createRecordId,
    formatTimeLabel,
    getAudienceStatus,
    getDisplaySendStatus,
    getSafetyText,
    getSafetyTone,
    normalizeSaveState,
    normalizeText
  } = dependencies;
  const commentAudienceModel = createLessonJournalCommentAudienceModel({
    audience,
    record
  });
  const {
    aiStatus,
    comment,
    field
  } = commentAudienceModel;
  const {
    draftComment,
    draftSaveState,
    hasUnsavedDraft,
    isSourceOpen,
    localAiStatus,
    markDraftSaved,
    setDraftComment,
    setDraftSaveState,
    setLocalAiStatus,
    toggleSource
  } = useLessonJournalCommentComposerDraft({
    aiStatus,
    audience,
    comment,
    field,
    initialCommentDraft,
    record,
    studentId: student.studentId
  });
  const commentComposerModel = createLessonJournalCommentComposerModel({
    audience,
    audienceModel: commentAudienceModel,
    draftSaveState,
    hasUnsavedDraft,
    initialSendTiming,
    integrationStatus,
    record,
    saveState,
    student,
    dependencies: {
      formatTimeLabel,
      getAudienceStatus,
      getDisplaySendStatus,
      getSafetyText,
      getSafetyTone,
      normalizeSaveState
    }
  });
  const {
    forceDryRun,
    forceTestRecipient,
    sendTiming
  } = commentComposerModel;
  const sourceText = buildSourceText({
    audience,
    lesson,
    nextHomework,
    notificationTemplates,
    previousHomework,
    record,
    student,
    supplementSchedules,
    testResultLines
  });
  const generatedPreviewText = buildPreviewText({
    audience,
    comment: draftComment,
    lesson,
    nextHomework,
    notificationTemplates,
    previousHomework,
    record,
    student,
    supplementSchedules,
    testResultLines
  });

  function handleClose() {
    if (
      hasUnsavedDraft &&
      typeof window !== "undefined" &&
      !window.confirm("저장하지 않은 최종 문구가 있습니다. 닫을까요?")
    ) {
      return;
    }
    onClose();
  }

  async function handlePolishClick() {
    setLocalAiStatus("AI 수정 중");
    const result = await polishLessonJournalCommentDraft({
      aiModel,
      aiProvider,
      audience,
      draftComment,
      generatedPreviewText,
      lesson,
      normalizeText,
      record,
      requestPolish: onPolishComment,
      sourceText,
      student
    });
    if (result.ok) {
      setDraftComment(result.polishedText);
      setDraftSaveState("dirty");
      setLocalAiStatus(result.statusLabel);
      return;
    }
    setLocalAiStatus(result.statusLabel);
  }

  async function handleSaveDraftClick() {
    setDraftSaveState("saving");
    const result = await saveLessonJournalCommentDraft({
      createEmptyRecord,
      createRecordId,
      draftComment,
      field,
      lesson,
      record,
      saveRecord: onSaveRecord,
      student
    });
    if (!result.ok) {
      setDraftSaveState("failed");
      return false;
    }
    markDraftSaved(draftComment);
    return true;
  }

  function handleSendClick() {
    if (hasUnsavedDraft) return;
    const payload = createLessonJournalCommentSendPayload({
      draftComment,
      field,
      forceDryRun,
      forceTestRecipient,
      generatedPreviewText,
      record,
      sendTiming
    });
    onSendComment(lesson, student, payload.record, audience, payload.options);
  }

  return (
    <LessonJournalCommentComposerView
      draftComment={draftComment}
      draftSaveState={draftSaveState}
      generatedPreviewText={generatedPreviewText}
      hasUnsavedDraft={hasUnsavedDraft}
      isSourceOpen={isSourceOpen}
      lesson={lesson}
      localAiStatus={localAiStatus}
      model={commentComposerModel}
      onChangeDraft={setDraftComment}
      onClose={handleClose}
      onPolish={handlePolishClick}
      onSave={handleSaveDraftClick}
      onSend={handleSendClick}
      onToggleSource={toggleSource}
      sourceText={sourceText}
    />
  );
}
