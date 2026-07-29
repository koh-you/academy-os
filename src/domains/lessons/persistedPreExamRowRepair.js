export function createPersistedPreExamRowRepair({
  addDaysInKorea,
  getExamPrepIdFromDerivedMathEvent,
  inferMathExamLabelFromPreExamLesson,
  normalizeGradeLabel,
  normalizeMathExamEntries,
  normalizeMathSubject,
  safeIdPart,
  syncPrimaryMathExamDate
}) {
  return function repairExamPrepRowsFromPersistedPreExamLessons(
    rows = [],
    lessons = []
  ) {
    const preExamLessons = lessons.filter(
      (lesson) =>
        lesson.lessonType === "preExam" &&
        lesson.date &&
        String(
          lesson.sourceSchoolEventId || ""
        ).startsWith("derived_math_")
    );
    if (!rows.length || !preExamLessons.length) {
      return rows;
    }

    return rows.map((row) => {
      const sourceLessons = preExamLessons.filter(
        (lesson) =>
          getExamPrepIdFromDerivedMathEvent(
            lesson.sourceSchoolEventId,
            [row]
          ) === row.examPrepId
      );
      if (!sourceLessons.length) return row;

      let didRepair = false;
      const entries = normalizeMathExamEntries(row, {
        includeBlank: true
      }).filter(
        (entry) =>
          entry.date ||
          entry.label ||
          entry.subject ||
          entry.grade ||
          entry.sourceSchoolEventId
      );

      sourceLessons.forEach((lesson) => {
        const examDate =
          lesson.sourceExamDate ||
          addDaysInKorea(lesson.date, 1);
        if (!examDate) return;
        const sourceEventId =
          lesson.sourceSchoolEventId || "";
        const entryId =
          sourceEventId.replace(
            `derived_math_${row.examPrepId}_`,
            ""
          ) ||
          `math_${safeIdPart(
            row.examPrepId || "exam"
          )}_${safeIdPart(examDate)}`;
        const existingIndex = entries.findIndex(
          (entry) =>
            (sourceEventId &&
              entry.sourceSchoolEventId ===
                sourceEventId) ||
            (entry.date === examDate &&
              normalizeGradeLabel(
                entry.grade || row.grade
              ) === normalizeGradeLabel(row.grade))
        );
        const previousEntry =
          existingIndex >= 0
            ? entries[existingIndex]
            : null;
        const nextEntry = {
          ...(previousEntry ?? {}),
          id: previousEntry?.id || entryId,
          date: previousEntry?.date || examDate,
          grade:
            previousEntry?.grade || row.grade || "",
          subject:
            previousEntry?.subject ||
            normalizeMathSubject(row.subject),
          label:
            previousEntry?.label ||
            inferMathExamLabelFromPreExamLesson(
              lesson,
              row
            ),
          sourceSchoolEventId:
            previousEntry?.sourceSchoolEventId ||
            sourceEventId
        };
        if (existingIndex >= 0) {
          if (
            JSON.stringify(entries[existingIndex]) !==
            JSON.stringify(nextEntry)
          ) {
            entries[existingIndex] = nextEntry;
            didRepair = true;
          }
          return;
        }
        entries.push(nextEntry);
        didRepair = true;
      });

      if (!didRepair) return row;
      const nextEntries = entries.filter(
        (entry) => entry.date || entry.label
      );
      const nextMathExamDate =
        row.mathExamDate ||
        syncPrimaryMathExamDate(nextEntries);
      return {
        ...row,
        mathExamDate: nextMathExamDate,
        mathExamDates: nextEntries
      };
    });
  };
}
