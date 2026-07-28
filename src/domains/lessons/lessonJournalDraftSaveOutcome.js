export function createLessonJournalDraftSaveOutcome({
  completedSources = [],
  error = null
} = {}) {
  if (!error) {
    return {
      ok: true,
      message: `수업일지 · 저장 완료 · ${completedSources.join(" · ") || "변경 없음"}`
    };
  }

  const errorMessage = error?.message || "수정본 유지";
  return {
    ok: false,
    message: `수업일지 · ${
      completedSources.length
        ? `부분 저장 · ${completedSources.join(" · ")} · `
        : ""
    }저장 실패 · ${errorMessage}`
  };
}
