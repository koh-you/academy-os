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
  const classStudents = students.filter(
    (student) =>
      (student.status ?? "active") === "active" &&
      (isAllClasses || student.defaultClassTemplateId === selectedClassTemplateId)
  );
  const classSchoolGradeKeys = new Set(classStudents.map(getStudentSchoolGradeKey).filter(Boolean));
  const displayRows = dedupeRows(rows, { includeExcluded: true });
  const matchingRows = displayRows.filter((row) => {
    const rowCycle = row.examCycle ?? currentExamCycle;
    const matchesCycle = rowCycle === selectedExamCycle;
    const matchesClass = classSchoolGradeKeys.has(getRowSchoolGradeKey(row));
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
      row.memo
    ].join(" ");
    return haystack.toLowerCase().includes(normalizedQuery);
  });

  return {
    classStudents,
    displayRows,
    editingExamPrepRow: visibleRows.find((row) => row.examPrepId === editingExamPrepId) ?? null,
    examPrepSaveState: getAggregateSaveState(filteredRows.map((row) => rowSaveStates[row.examPrepId])),
    filteredRows,
    excludedRows,
    reviewModalRow: visibleRows.find((row) => row.examPrepId === reviewModalRowId) ?? null,
    selectedClass: isAllClasses
      ? { classTemplateId: "", name: "전체 반" }
      : templates.find((template) => template.classTemplateId === selectedClassTemplateId),
    visibleRows
  };
}
