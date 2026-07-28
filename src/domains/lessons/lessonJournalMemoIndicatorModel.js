export function createLessonJournalMemoIndicatorModel({
  acknowledgedMemoCutoffDate = "",
  preparationMemo = "",
  prepParentVisible = false,
  prepStudentVisible = false,
  previousPreparationMemo = "",
  referencePreparationMemo = ""
}) {
  const hasCurrentMemo = Boolean(preparationMemo?.trim());
  const priorMemoNeedsAttention = Boolean(previousPreparationMemo || referencePreparationMemo);
  const priorMemoAttentionLabel = previousPreparationMemo ? "직전 메모 확인" : "참고 메모 확인";
  const visibilityLabel = prepStudentVisible && prepParentVisible
    ? "학생·학부모 작성창으로 가져오기"
    : prepStudentVisible
      ? "학생 작성창으로 가져오기"
      : prepParentVisible
        ? "학부모 작성창으로 가져오기"
        : "작성창 가져오기 안 함";
  const priorMemoLabel = priorMemoNeedsAttention
    ? priorMemoAttentionLabel
    : acknowledgedMemoCutoffDate
      ? "이전 메모 확인 완료"
      : "이전 메모 없음";

  return {
    hasCurrentMemo,
    memoButtonDescription: [
      hasCurrentMemo ? "현재 메모 작성됨" : "현재 메모 미작성",
      priorMemoLabel,
      visibilityLabel
    ].join(" · "),
    priorMemoAttentionLabel,
    priorMemoNeedsAttention
  };
}
