import {
  areLessonJournalHistoryHomeworksEqual,
  areLessonJournalHistoryTimestampsEqual
} from "./lessonJournalHistoryPersistence.js";

const recordFields = [
  "lessonStudentRecordId",
  "lessonId",
  "studentId",
  "attendanceStatus",
  "attendanceReason",
  "lateMinutes",
  "checkInAt",
  "checkInTime",
  "checkOutAt",
  "checkOutTime",
  "previousHomework",
  "nextHomework",
  "incompleteHomework",
  "lessonMaterial",
  "lessonContent",
  "assignmentStatus",
  "homeworkFollowupMethod",
  "homeworkFollowupText",
  "homeworkFollowupSourceHomeworkId",
  "preparationMemo",
  "prepMemoCheckedAt",
  "prepMemoCheckedSourceDate",
  "prepMemoCheckedSourceRecordId",
  "prepStudentNotice",
  "prepStudentVisible",
  "prepParentVisible",
  "prepParentNotice",
  "prepStudentAiStatus",
  "prepParentAiStatus",
  "behaviorTag",
  "homeworkStatus",
  "needsMakeup",
  "needsRetest",
  "lessonProgress",
  "teacherComment",
  "studentComment",
  "teacherCommentAiStatus",
  "studentCommentAiStatus",
  "teacherCommentSendStatus",
  "studentCommentSendStatus",
  "notificationMutedParent",
  "notificationMutedStudent",
  "notificationMutedReason"
];

const booleanRecordFields = new Set([
  "needsMakeup",
  "needsRetest",
  "notificationMutedParent",
  "notificationMutedStudent",
  "prepParentVisible",
  "prepStudentVisible"
]);

function normalizeRecordValue(field, value) {
  if (booleanRecordFields.has(field)) return Boolean(value);
  if (field === "lateMinutes") return value === "" || value === null || value === undefined ? "" : Number(value);
  if (field === "homeworkStatus") return value || "not_started";
  if (field === "attendanceStatus") return value || "pending";
  if (field === "lessonProgress") return value ?? "";
  return value ?? "";
}

export function areLessonJournalRowsTimestampsEqual(left, right) {
  return areLessonJournalHistoryTimestampsEqual(left, right);
}

export function areLessonJournalRecordsEqual(left = {}, right = {}) {
  return recordFields.every((field) => (
    normalizeRecordValue(field, left[field]) === normalizeRecordValue(field, right[field])
  ));
}

export function createLessonJournalRowsSavePlan({
  changedHomeworks = [],
  currentHomeworks = [],
  currentRecords = [],
  recordsToSave = []
} = {}) {
  const homeworkById = new Map(currentHomeworks.map((homework) => [homework.homeworkId, homework]));
  const recordByIdentity = new Map(currentRecords.map((record) => [
    `${record.lessonId}::${record.studentId}`,
    record
  ]));
  return {
    homeworkChanges: changedHomeworks.map((homework) => ({
      after: homework,
      before: homeworkById.get(homework.homeworkId) ?? null
    })),
    recordChanges: recordsToSave.map((record) => {
      const before = recordByIdentity.get(`${record.lessonId}::${record.studentId}`) ?? null;
      return {
        after: before
          ? { ...record, lessonStudentRecordId: before.lessonStudentRecordId }
          : record,
        before
      };
    })
  };
}

export function verifyLessonJournalRowsSavePlan({
  homeworkChanges = [],
  recordChanges = []
} = {}, {
  homeworks = [],
  records = []
} = {}) {
  const homeworkById = new Map(homeworks.map((homework) => [homework.homeworkId, homework]));
  const recordByIdentity = new Map(records.map((record) => [
    `${record.lessonId}::${record.studentId}`,
    record
  ]));
  const homeworkMismatches = homeworkChanges.flatMap(({ after }) => {
    const persisted = homeworkById.get(after?.homeworkId);
    return persisted && areLessonJournalHistoryHomeworksEqual(after, persisted)
      ? []
      : [after?.homeworkId ?? ""];
  });
  const recordMismatches = recordChanges.flatMap(({ after }) => {
    const identity = `${after?.lessonId}::${after?.studentId}`;
    const persisted = recordByIdentity.get(identity);
    return persisted && areLessonJournalRecordsEqual(after, persisted)
      ? []
      : [after?.lessonStudentRecordId || identity];
  });
  return {
    homeworkMismatches,
    recordMismatches,
    verified: homeworkMismatches.length === 0 && recordMismatches.length === 0
  };
}
