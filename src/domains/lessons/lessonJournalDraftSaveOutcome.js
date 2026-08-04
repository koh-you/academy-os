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

  const originalErrorMessage = error?.message || "수정본 유지";
  const errorMessage = /dynamically imported module|importing a module script failed|module script.*mime/i.test(originalErrorMessage)
    ? "페이지가 새 버전으로 바뀌어 저장 모듈을 불러오지 못했습니다. 현재 입력을 복사해 둔 뒤 새로고침하고 다시 저장해 주세요."
    : originalErrorMessage;
  return {
    ok: false,
    message: `수업일지 · ${
      completedSources.length
        ? `부분 저장 · ${completedSources.join(" · ")} · `
        : ""
    }저장 실패 · ${errorMessage}`
  };
}
