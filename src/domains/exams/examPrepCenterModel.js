function getExamPeriodStart(row = {}) {
  return String(row.examPeriod ?? "").match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? "9999-12-31";
}

export function sortExamPrepRows(rows = [], sortMode = "school", studentRosterByExamPrepId = {}) {
  const schoolGradeFallback = (first, second) =>
    String(first.schoolName || "").localeCompare(String(second.schoolName || ""), "ko") ||
    String(first.grade || "").localeCompare(String(second.grade || ""), "ko", { numeric: true }) ||
    String(first.examPrepId || "").localeCompare(String(second.examPrepId || ""));
  return [...rows].sort((first, second) => {
    if (sortMode === "exam_period") {
      return getExamPeriodStart(first).localeCompare(getExamPeriodStart(second)) || schoolGradeFallback(first, second);
    }
    if (sortMode === "grade") {
      return String(first.grade || "").localeCompare(String(second.grade || ""), "ko", { numeric: true }) || schoolGradeFallback(first, second);
    }
    if (sortMode === "student_count") {
      const countDifference = (studentRosterByExamPrepId[second.examPrepId]?.length ?? 0) -
        (studentRosterByExamPrepId[first.examPrepId]?.length ?? 0);
      return countDifference || schoolGradeFallback(first, second);
    }
    return schoolGradeFallback(first, second);
  });
}

export function createExamPrepCenterDisplayModel({
  currentExamCycle,
  dedupeRows,
  editingExamPrepId,
  getAggregateSaveState,
  getMathExamEntries,
  getRowSchoolGradeKey,
  getStudentSchoolGradeKey,
  query,
  reviewModalRowId,
  rowSaveStates = {},
  rows = [],
  showExcluded = false,
  selectedClassTemplateId,
  selectedExamCycle,
  students = [],
  templates = []
} = {}) {
  const isAllClasses = !selectedClassTemplateId;
  const activeStudents = students.filter((student) => (student.status ?? "active") === "active");
  const classStudents = activeStudents.filter(
    (student) =>
      (isAllClasses || student.defaultClassTemplateId === selectedClassTemplateId)
  );
  const activeSchoolGradeKeys = new Set(activeStudents.map(getStudentSchoolGradeKey).filter(Boolean));
  const classSchoolGradeKeys = new Set(classStudents.map(getStudentSchoolGradeKey).filter(Boolean));
  const studentsBySchoolGradeKey = new Map();
  classStudents.forEach((student) => {
    const key = getStudentSchoolGradeKey(student);
    if (!key) return;
    const matches = studentsBySchoolGradeKey.get(key) ?? [];
    matches.push(student);
    studentsBySchoolGradeKey.set(key, matches);
  });
  studentsBySchoolGradeKey.forEach((matchingStudents) => {
    matchingStudents.sort((first, second) =>
      String(first.name || "").localeCompare(String(second.name || ""), "ko") ||
      String(first.studentId || "").localeCompare(String(second.studentId || ""))
    );
  });
  const displayRows = dedupeRows(rows, { includeExcluded: true });
  const studentRosterByExamPrepId = Object.fromEntries(
    displayRows.map((row) => [
      row.examPrepId,
      studentsBySchoolGradeKey.get(getRowSchoolGradeKey(row)) ?? []
    ])
  );
  const orphanedRows = displayRows.filter((row) => {
    const rowCycle = row.examCycle ?? currentExamCycle;
    return rowCycle === selectedExamCycle && !activeSchoolGradeKeys.has(getRowSchoolGradeKey(row));
  });
  const orphanedExamPrepIds = new Set(orphanedRows.map((row) => row.examPrepId));
  const matchingRows = displayRows.filter((row) => {
    const rowCycle = row.examCycle ?? currentExamCycle;
    const matchesCycle = rowCycle === selectedExamCycle;
    const matchesClass = classSchoolGradeKeys.has(getRowSchoolGradeKey(row)) || orphanedExamPrepIds.has(row.examPrepId);
    return matchesCycle && matchesClass;
  });
  const excludedRows = matchingRows.filter((row) => row.isExcluded);
  const visibleRows = matchingRows.filter((row) => showExcluded ? row.isExcluded : !row.isExcluded);
  const normalizedQuery = String(query ?? "").toLowerCase();
  const filteredRows = visibleRows.filter((row) => {
    const haystack = [
      row.schoolName,
      row.grade,
      row.subject,
      row.publisher,
      row.scope,
      row.subTextbook,
      row.examPeriod,
      getMathExamEntries(row).map((entry) => `${entry.date} ${entry.grade} ${entry.subject} ${entry.label}`).join(" "),
      row.mathExamDate,
      row.specialNote,
      row.memo,
      (studentRosterByExamPrepId[row.examPrepId] ?? []).map((student) => student.name).join(" ")
    ].join(" ");
    return haystack.toLowerCase().includes(normalizedQuery);
  });

  return {
    classStudents,
    displayRows,
    editingExamPrepRow: visibleRows.find((row) => row.examPrepId === editingExamPrepId) ?? null,
    examPrepSaveState: getAggregateSaveState(filteredRows.map((row) => rowSaveStates[row.examPrepId])),
    filteredRows,
    orphanedExamPrepIds,
    orphanedRows,
    excludedRows,
    reviewModalRow: visibleRows.find((row) => row.examPrepId === reviewModalRowId) ?? null,
    studentRosterByExamPrepId,
    selectedClass: isAllClasses
      ? { classTemplateId: "", name: "전체 반" }
      : templates.find((template) => template.classTemplateId === selectedClassTemplateId),
    visibleRows
  };
}
