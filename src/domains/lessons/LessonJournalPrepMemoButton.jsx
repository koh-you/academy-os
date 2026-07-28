import { createLessonJournalMemoIndicatorModel } from "./lessonJournalMemoIndicatorModel.js";

export function LessonJournalPrepMemoButton({
  acknowledgedMemoCutoffDate,
  onOpen,
  preparationMemo,
  prepParentVisible,
  prepStudentVisible,
  previousPreparationMemo,
  referencePreparationMemo,
  studentName
}) {
  const {
    hasCurrentMemo,
    memoButtonDescription,
    priorMemoNeedsAttention
  } = createLessonJournalMemoIndicatorModel({
    acknowledgedMemoCutoffDate,
    preparationMemo,
    prepParentVisible,
    prepStudentVisible,
    previousPreparationMemo,
    referencePreparationMemo
  });

  return (
    <div className="journalPrepCell">
      <button
        aria-label={`${studentName} 수업메모 · ${memoButtonDescription}`}
        className="prepMemoButton"
        onClick={onOpen}
        type="button"
      >
        <span>수업메모</span>
        {hasCurrentMemo ? <span aria-hidden="true" className="prepMemoWrittenMark">✓</span> : null}
        {priorMemoNeedsAttention ? <span aria-hidden="true" className="prepMemoAttentionMark">!</span> : null}
      </button>
    </div>
  );
}
