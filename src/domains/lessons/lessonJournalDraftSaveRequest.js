function draftValues(drafts) {
  return Object.values(drafts ?? {});
}

export function createLessonJournalDraftSaveRequest({
  hasDraftChanges = false,
  homeworkDrafts = {},
  makeupTaskDrafts = {},
  recordDrafts = {}
} = {}) {
  const homeworkDraftList = draftValues(homeworkDrafts);
  const makeupTaskDraftList = draftValues(makeupTaskDrafts);
  const recordDraftList = draftValues(recordDrafts);

  return {
    changeCount:
      homeworkDraftList.length +
      makeupTaskDraftList.length +
      recordDraftList.length,
    hasDraftChanges: Boolean(hasDraftChanges),
    homeworkDrafts: homeworkDraftList,
    makeupTaskDrafts: makeupTaskDraftList,
    recordDrafts: recordDraftList
  };
}
