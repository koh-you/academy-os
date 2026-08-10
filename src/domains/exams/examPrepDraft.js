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
