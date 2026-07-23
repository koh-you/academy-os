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
  selectedClassTemplateId,
  selectedExamCycle,
  students = [],
  templates = []
} = {}) {
  const classStudents = students.filter(
    (student) => (student.status ?? "active") === "active" && student.defaultClassTemplateId === selectedClassTemplateId
  );
  const classSchoolGradeKeys = new Set(classStudents.map(getStudentSchoolGradeKey).filter(Boolean));
  const displayRows = dedupeRows(rows);
  const visibleRows = displayRows.filter((row) => {
    const rowCycle = row.examCycle ?? currentExamCycle;
    const matchesCycle = rowCycle === selectedExamCycle;
    const matchesClass = classSchoolGradeKeys.has(getRowSchoolGradeKey(row));
    return matchesCycle && matchesClass;
  });
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
    reviewModalRow: visibleRows.find((row) => row.examPrepId === reviewModalRowId) ?? null,
    selectedClass: templates.find((template) => template.classTemplateId === selectedClassTemplateId),
    visibleRows
  };
}
