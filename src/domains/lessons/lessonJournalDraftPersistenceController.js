import { createLessonJournalDraftSaveOutcome } from "./lessonJournalDraftSaveOutcome.js";

export async function executeLessonJournalDraftPersistence({
  persistJournalRows,
  persistMakeupTasks,
  onFailure
} = {}) {
  const completedSources = [];
  let journalRowsCompleted = false;

  try {
    const { homeworkCount = 0, recordCount = 0 } = await persistJournalRows();
    journalRowsCompleted = true;
    if (homeworkCount) {
      completedSources.push(`숙제 ${homeworkCount}건`);
    }
    if (recordCount) {
      completedSources.push(`수업기록 ${recordCount}건`);
    }

    const makeupTaskCount = await persistMakeupTasks();
    if (makeupTaskCount) {
      completedSources.push(`등원보충 ${makeupTaskCount}건`);
    }

    return createLessonJournalDraftSaveOutcome({ completedSources });
  } catch (error) {
    onFailure?.(error, { journalRowsCompleted });
    return createLessonJournalDraftSaveOutcome({
      completedSources,
      error
    });
  }
}
