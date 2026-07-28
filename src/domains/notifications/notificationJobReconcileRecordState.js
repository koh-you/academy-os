export function mergeNotificationJobReconcileRecords({
  currentRecords = [],
  records = [],
  upsertRecord
} = {}) {
  return records.reduce(
    (accumulatedRecords, record) => upsertRecord(accumulatedRecords, record),
    currentRecords
  );
}

export function createNotificationJobReconcileSavedStates(records = []) {
  return Object.fromEntries(
    records
      .filter((record) => record?.lessonStudentRecordId)
      .map((record) => [record.lessonStudentRecordId, "saved"])
  );
}
