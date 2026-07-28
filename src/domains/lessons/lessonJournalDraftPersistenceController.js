import { createLessonJournalDraftSaveOutcome } from "./lessonJournalDraftSaveOutcome.js";

export async function executeLessonJournalDraftPersistence({
  hasRecords = false,
  persistHomeworks,
  persistMakeupTasks,
  persistRecords,
  onFailure
} = {}) {
  const completedSources = [];

  try {
    const homeworkCount = await persistHomeworks();
    if (homeworkCount) {
      completedSources.push(`숙제 ${homeworkCount}건`);
    }

    const makeupTaskCount = await persistMakeupTasks();
    if (makeupTaskCount) {
      completedSources.push(`등원보충 ${makeupTaskCount}건`);
    }

    if (hasRecords) {
      const recordCount = await persistRecords();
      completedSources.push(`수업기록 ${recordCount}건`);
    }

    return createLessonJournalDraftSaveOutcome({ completedSources });
  } catch (error) {
    onFailure?.(error);
    return createLessonJournalDraftSaveOutcome({
      completedSources,
      error
    });
  }
}
