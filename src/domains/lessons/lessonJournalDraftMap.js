export function getLessonJournalEditableRecord({
  baseRecord,
  currentDrafts,
  recordId
}) {
  return currentDrafts[recordId] ?? baseRecord;
}

export function removeLessonJournalMakeupTaskDraft({
  currentDrafts,
  recordId
}) {
  if (!currentDrafts[recordId]) return currentDrafts;
  const nextDrafts = { ...currentDrafts };
  delete nextDrafts[recordId];
  return nextDrafts;
}
