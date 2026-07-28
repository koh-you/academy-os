function createLessonStudentRecordId(lessonId, studentId) {
  return `lsr_${lessonId.replace("lesson_", "")}_${studentId}`;
}

export function getLessonStudentRecordIdentity(record = null) {
  if (!record) return "";
  if (record.lessonStudentRecordId) return record.lessonStudentRecordId;
  if (record.lessonId && record.studentId) {
    return createLessonStudentRecordId(record.lessonId, record.studentId);
  }
  return "";
}

export function getLessonStudentRecordDate(record = null) {
  if (!record) return "";
  return String(record.lessonStudentRecordId ?? "").match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? "";
}

export function createLessonJournalPreparationMemoModel({
  acknowledgedMemoCutoff = null,
  currentRecord = {},
  localCheckedMemo = {},
  previousLesson = null,
  previousRecord = null,
  referenceLesson = null,
  referenceRecord = null
} = {}) {
  const previousMemo = previousRecord?.preparationMemo?.trim() ?? "";
  const previousLessonLabel = previousLesson
    ? `${previousLesson.date} · ${previousLesson.className}`
    : "직전 수업";
  const referenceMemo = referenceRecord?.preparationMemo?.trim() ?? "";
  const referenceLessonLabel = referenceLesson
    ? `${referenceLesson.date} · ${referenceLesson.className}`
    : "최근 참고 수업";
  const priorMemoSourceRecord = previousMemo ? previousRecord : referenceMemo ? referenceRecord : null;
  const priorMemoSourceLesson = previousMemo ? previousLesson : referenceMemo ? referenceLesson : null;
  const priorMemoSourceRecordId = getLessonStudentRecordIdentity(priorMemoSourceRecord);
  const priorMemoSourceDate =
    priorMemoSourceLesson?.date || getLessonStudentRecordDate(priorMemoSourceRecord);
  const effectiveCheckedSourceDate =
    localCheckedMemo.sourceDate || currentRecord.prepMemoCheckedSourceDate || "";
  const isPriorMemoChecked = Boolean(
    priorMemoSourceDate &&
    effectiveCheckedSourceDate &&
    priorMemoSourceDate <= effectiveCheckedSourceDate
  );
  const visiblePreviousMemo = isPriorMemoChecked ? "" : previousMemo;
  const visibleReferenceMemo = isPriorMemoChecked ? "" : referenceMemo;
  const priorMemoKind = previousMemo ? "previous" : referenceMemo ? "reference" : "";
  const visiblePriorMemo = visiblePreviousMemo || visibleReferenceMemo;
  const visiblePriorLessonLabel = visiblePreviousMemo
    ? previousLessonLabel
    : referenceLessonLabel;
  const priorMemoEyebrow = priorMemoKind === "reference" ? "REFERENCE" : "PREVIOUS";
  const priorMemoTitle = priorMemoKind === "reference" ? "최근 참고 메모" : "직전 수업메모";
  const checkedMemoDate =
    localCheckedMemo.sourceDate || acknowledgedMemoCutoff?.prepMemoCheckedSourceDate || "";
  const checkedMemoAt =
    localCheckedMemo.checkedAt || acknowledgedMemoCutoff?.prepMemoCheckedAt || "";
  const hasCheckedPriorMemo = Boolean(checkedMemoDate || isPriorMemoChecked);
  const canCheckPriorMemo = Boolean(
    priorMemoSourceRecordId &&
    priorMemoSourceDate &&
    !isPriorMemoChecked
  );

  return {
    canCheckPriorMemo,
    checkedMemoAt,
    checkedMemoDate,
    hasCheckedPriorMemo,
    isPriorMemoChecked,
    priorMemoEyebrow,
    priorMemoKind,
    priorMemoSourceDate,
    priorMemoSourceRecordId,
    priorMemoTitle,
    visiblePreviousMemo,
    visiblePriorLessonLabel,
    visiblePriorMemo,
    visibleReferenceMemo
  };
}
