export function createLessonJournalSaveViewModel({
  homeworkDrafts = {},
  makeupTaskDrafts = {},
  manualSaveMessage = "",
  recordDrafts = {},
  recordSaveStates = []
} = {}) {
  const lessonJournalSaveStatus = recordSaveStates.includes("saving")
    ? { label: "저장 중...", tone: "saving" }
    : recordSaveStates.includes("dirty")
      ? { label: "저장 대기...", tone: "dirty" }
      : recordSaveStates.includes("failed")
        ? { label: "저장 실패", tone: "failed" }
        : recordSaveStates.includes("saved")
          ? { label: "저장 완료", tone: "saved" }
          : { label: "", tone: "idle" };

  const recordDraftCount = Object.keys(recordDrafts ?? {}).length;
  const homeworkDraftCount = Object.keys(homeworkDrafts ?? {}).length;
  const makeupTaskDraftCount = Object.keys(makeupTaskDrafts ?? {}).length;
  const draftChangeCount =
    recordDraftCount + homeworkDraftCount + makeupTaskDraftCount;
  const hasDraftChanges = draftChangeCount > 0;
  const stickySaveState = manualSaveMessage.includes("저장 실패")
    ? "failed"
    : manualSaveMessage.includes("저장 중")
      ? "saving"
      : hasDraftChanges
        ? "dirty"
        : manualSaveMessage.includes("저장 완료")
          ? "saved"
          : lessonJournalSaveStatus.tone;
  const stickySaveMessage = hasDraftChanges
    ? `저장 전 변경 ${draftChangeCount}건`
    : manualSaveMessage ||
      lessonJournalSaveStatus.label ||
      "편집을 시작하면 변경 내용이 여기에 표시됩니다.";

  return {
    draftChangeCount,
    hasDraftChanges,
    homeworkDraftCount,
    lessonJournalSaveStatus,
    makeupTaskDraftCount,
    recordDraftCount,
    stickySaveMessage,
    stickySaveState
  };
}
