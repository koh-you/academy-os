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

export function mergeCreatedLessonJournalHomeworkConflict({
  conflictHomework = null,
  currentHomeworks = []
} = {}) {
  if (!conflictHomework?.homeworkId) {
    return { homeworks: currentHomeworks, recovered: false };
  }
  if (currentHomeworks.some((homework) => homework.homeworkId === conflictHomework.homeworkId)) {
    return { homeworks: currentHomeworks, recovered: false };
  }
  return {
    homeworks: [conflictHomework, ...currentHomeworks],
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
