export function selectPreviousLessonMemoContext({
  allRecords = [],
  currentLesson,
  findPreviousLessonsForStudent,
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
  const previousLessons = findPreviousLessonsForStudent(
    lessons,
    currentLesson,
    student.studentId,
    { records: sourceRecords }
  );
  const previousLessonIds = new Set(previousLessons.map((item) => item.lessonId));
  const recordMatchesCurrentLessonGroup = (record) => {
    const sourceLesson = lessonById.get(record.lessonId);
    if (!sourceLesson) return !isSpecialLectureLesson(currentLesson);
    return previousLessonIds.has(sourceLesson.lessonId);
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
  const previousLessonRecordsInCurrentGroup = previousLessons
    .map((previousLesson) =>
      sourceRecords.find((item) => item.lessonId === previousLesson.lessonId && item.studentId === student.studentId)
    )
    .filter(Boolean);
  const previousLessonRecordInCurrentGroup = previousLessonRecordsInCurrentGroup[0] ?? null;
  const previousLessonRecord = previousLessonRecordInCurrentGroup;
  const previousEditableRecord = previousLessonRecord
    ? {
        ...previousLessonRecord,
        lessonMaterial: String(previousLessonRecord.lessonMaterial ?? ""),
        lessonProgress: String(
          previousLessonRecord.lessonProgress ??
          previousLessonRecord.progress ??
          previousLessonRecord.lessonContent ??
          ""
        )
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
