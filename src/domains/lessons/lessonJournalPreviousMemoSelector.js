import { isStudentScheduledForLesson } from "../../shared/utils/studentSchedule.js";

export function selectPreviousLessonMemoContext({
  allRecords = [],
  currentLesson,
  findPreviousLessonForStudent,
  isClosureLesson,
  isSameLessonGroup,
  isSpecialLectureLesson,
  lessons = [],
  records = [],
  student
}) {
  const sourceRecords = allRecords.length ? allRecords : records;
  const lessonById = new Map(lessons.map((item) => [item.lessonId, item]));
  const getRecordLessonDate = (record) => {
    const sourceLesson = lessonById.get(record.lessonId);
    if (sourceLesson?.date) return sourceLesson.date;
    return String(record.lessonStudentRecordId ?? "").match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? "";
  };
  const getRecordLessonSortValue = (record) => {
    const sourceLesson = lessonById.get(record.lessonId);
    return `${getRecordLessonDate(record)} ${sourceLesson?.startTime ?? ""}`;
  };
  const recordMatchesCurrentLessonGroup = (record) => {
    const sourceLesson = lessonById.get(record.lessonId);
    if (!sourceLesson) return !isSpecialLectureLesson(currentLesson);
    return isSameLessonGroup(currentLesson, sourceLesson);
  };
  const acknowledgedMemoCutoff = sourceRecords
    .filter((item) =>
      item.studentId === student.studentId &&
      item.prepMemoCheckedAt &&
      item.prepMemoCheckedSourceDate &&
      getRecordLessonDate(item) <= currentLesson.date
    )
    .sort((recordA, recordB) => (
      String(recordB.prepMemoCheckedSourceDate).localeCompare(String(recordA.prepMemoCheckedSourceDate)) ||
      String(recordB.prepMemoCheckedAt).localeCompare(String(recordA.prepMemoCheckedAt))
    ))[0] ?? null;
  const acknowledgedMemoCutoffDate = acknowledgedMemoCutoff?.prepMemoCheckedSourceDate ?? "";
  const isMemoRecordAcknowledged = (record) => {
    const recordDate = getRecordLessonDate(record);
    return Boolean(acknowledgedMemoCutoffDate && recordDate && recordDate <= acknowledgedMemoCutoffDate);
  };
  const previousLessons = lessons
    .filter((item) =>
      item.lessonId !== currentLesson.lessonId &&
      item.date < currentLesson.date &&
      item.status !== "canceled" &&
      !isClosureLesson(item) &&
      item.studentIds?.includes(student.studentId) &&
      isStudentScheduledForLesson(item, student) &&
      isSameLessonGroup(currentLesson, item)
    )
    .sort((lessonA, lessonB) => (
      `${lessonB.date} ${lessonB.startTime ?? ""}`.localeCompare(`${lessonA.date} ${lessonA.startTime ?? ""}`)
    ));

  const previousLessonRecordsInCurrentGroup = previousLessons
    .map((previousLesson) =>
      sourceRecords.find((item) => item.lessonId === previousLesson.lessonId && item.studentId === student.studentId)
    )
    .filter(Boolean);
  const previousLessonRecordInCurrentGroup = previousLessonRecordsInCurrentGroup[0] ?? null;
  const bridgedPreviousLesson = previousLessons.length === 0
    ? findPreviousLessonForStudent(lessons, currentLesson, student.studentId, {
        allowRegularClassFallback: true,
        student
      })
    : null;
  const bridgedPreviousLessonRecord = bridgedPreviousLesson
    ? sourceRecords.find((item) => item.lessonId === bridgedPreviousLesson.lessonId && item.studentId === student.studentId) ?? null
    : null;
  const previousLessonRecord = previousLessonRecordInCurrentGroup ?? bridgedPreviousLessonRecord;
  const editableSourceRecords = previousLessonRecordsInCurrentGroup.length
    ? previousLessonRecordsInCurrentGroup
    : bridgedPreviousLessonRecord
      ? [bridgedPreviousLessonRecord]
      : [];
  const latestNonEmptyValue = (fieldNames) => {
    for (const record of editableSourceRecords) {
      for (const fieldName of fieldNames) {
        const value = record?.[fieldName];
        if (String(value ?? "").trim()) return String(value);
      }
    }
    return "";
  };
  const previousEditableRecord = editableSourceRecords.length
    ? {
        ...(previousLessonRecord ?? {}),
        lessonMaterial: latestNonEmptyValue(["lessonMaterial"]),
        lessonProgress: latestNonEmptyValue(["lessonProgress", "progress", "lessonContent"])
      }
    : null;
  const visiblePreviousMemoRecord = previousLessonRecord?.preparationMemo?.trim() && !isMemoRecordAcknowledged(previousLessonRecord)
    ? previousLessonRecord
    : null;

  const referenceMemoRecord = sourceRecords
    .filter((item) =>
      item.lessonId !== currentLesson.lessonId &&
      item.studentId === student.studentId &&
      item.preparationMemo?.trim() &&
      getRecordLessonDate(item) < currentLesson.date
      && recordMatchesCurrentLessonGroup(item)
      && !isMemoRecordAcknowledged(item)
      && item.lessonId !== previousLessonRecord?.lessonId
    )
    .sort((recordA, recordB) => getRecordLessonSortValue(recordB).localeCompare(getRecordLessonSortValue(recordA)))[0];

  return {
    acknowledgedMemoCutoff,
    acknowledgedMemoCutoffDate,
    previousEditableRecord,
    previousMemoRecord: visiblePreviousMemoRecord,
    previousRecord: previousLessonRecord ?? null,
    referenceRecord: visiblePreviousMemoRecord ? null : referenceMemoRecord ?? null
  };
}
