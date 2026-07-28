export async function polishLessonJournalCommentDraft({
  aiModel,
  aiProvider,
  audience,
  draftComment = "",
  generatedPreviewText = "",
  lesson,
  normalizeText,
  record = {},
  requestPolish,
  sourceText = "",
  student
}) {
  const field = audience === "parent" ? "teacherComment" : "studentComment";
  const nextRecord = {
    ...record,
    [field]: draftComment
  };
  const rawText =
    normalizeText(draftComment) ||
    normalizeText(sourceText) ||
    normalizeText(generatedPreviewText);
  const result = await requestPolish(
    lesson,
    student,
    nextRecord,
    audience,
    aiProvider,
    aiModel,
    {
      persist: false,
      rawText
    }
  );

  if (result?.ok && result.polishedText) {
    return {
      ok: true,
      polishedText: result.polishedText,
      statusLabel: `완료 · ${result.provider}`
    };
  }

  const error = result?.error || "AI 수정 실패";
  return {
    error,
    ok: false,
    polishedText: "",
    statusLabel: `실패 · ${error}`
  };
}
