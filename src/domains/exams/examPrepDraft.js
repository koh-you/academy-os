export function cloneExamPrepDraft(row) {
  if (!row) return null;
  return {
    ...row,
    mathExamDates: Array.isArray(row.mathExamDates)
      ? row.mathExamDates.map((entry) => ({ ...entry }))
      : []
  };
}

export function updateExamPrepDraft(draft, examPrepId, field, value) {
  if (!draft || draft.examPrepId !== examPrepId) return draft;
  return { ...draft, [field]: value };
}

export function areExamPrepDraftsEqual(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

export function applyExamPrepDraftToLogicalGroup({
  draftRow,
  getLogicalKey,
  rows = []
} = {}) {
  const existingRow = rows.find((row) => row.examPrepId === draftRow?.examPrepId);
  if (!existingRow) return rows;
  const exclusionChanged = Boolean(existingRow.isExcluded) !== Boolean(draftRow.isExcluded);
  const logicalKey = exclusionChanged ? getLogicalKey(existingRow) : "";

  return rows.map((row) => {
    if (row.examPrepId === existingRow.examPrepId) {
      return {
        ...existingRow,
        ...draftRow,
        examPrepId: existingRow.examPrepId,
        updatedAt: existingRow.updatedAt
      };
    }
    if (!exclusionChanged || getLogicalKey(row) !== logicalKey) return row;
    return { ...row, isExcluded: Boolean(draftRow.isExcluded) };
  });
}
