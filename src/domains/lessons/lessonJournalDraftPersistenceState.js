export function mergeVerifiedLessonJournalHomeworks({
  plannedHomeworks = [],
  verifiedHomeworks = []
} = {}) {
  const verifiedById = new Map(
    verifiedHomeworks.map((homework) => [homework.homeworkId, homework])
  );
  return plannedHomeworks.map(
    (homework) => verifiedById.get(homework.homeworkId) ?? homework
  );
}

export function mergeLatestLessonJournalHomeworkConflict({
  conflictHomework = null,
  currentHomeworks = []
} = {}) {
  if (!conflictHomework?.homeworkId) {
    return { homeworks: currentHomeworks, recovered: false };
  }
  const hasCurrentHomework = currentHomeworks.some(
    (homework) => homework.homeworkId === conflictHomework.homeworkId
  );
  return {
    homeworks: hasCurrentHomework
      ? currentHomeworks.map((homework) => (
          homework.homeworkId === conflictHomework.homeworkId
            ? conflictHomework
            : homework
        ))
      : [conflictHomework, ...currentHomeworks],
    recovered: true
  };
}

export function mergeVerifiedLessonJournalMakeupTasks({
  currentTasks = [],
  verifiedTasks = [],
  upsertTask
} = {}) {
  return verifiedTasks.reduce(
    (tasks, task) => upsertTask(tasks, task),
    currentTasks
  );
}

export function mergeVerifiedLessonJournalRecords({
  currentRecords = [],
  verifiedRecords = [],
  upsertRecord
} = {}) {
  return verifiedRecords.reduce(
    (records, record) => upsertRecord(records, record),
    currentRecords
  );
}

export function createLessonJournalRecordSaveStates(records = [], status = "") {
  return Object.fromEntries(
    records.map((record) => [record.lessonStudentRecordId, status])
  );
}
