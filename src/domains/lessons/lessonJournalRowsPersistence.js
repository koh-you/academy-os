import {
  areLessonJournalHistoryHomeworksEqual,
  areLessonJournalHistoryTimestampsEqual,
  lessonJournalHistoryHomeworkFields
} from "./lessonJournalHistoryPersistence.js";

export const lessonJournalRecordFields = [
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
  return lessonJournalRecordFields.every((field) => (
    normalizeRecordValue(field, left[field]) === normalizeRecordValue(field, right[field])
  ));
}

function normalizeHomeworkValue(_field, value) {
  return value ?? "";
}

const lessonJournalHomeworkCheckStateFields = [
  "assignmentStatus",
  "incompleteHomework",
  "status",
  "teacherStatus"
];

function createLessonJournalChangeRebase({
  after = {},
  before = {},
  current = {},
  fields = [],
  normalizeValue = (_field, value) => value ?? ""
} = {}) {
  const changedFields = fields.filter((field) => (
    normalizeValue(field, before[field]) !== normalizeValue(field, after[field])
  ));
  const conflictingFields = changedFields.filter((field) => {
    const beforeValue = normalizeValue(field, before[field]);
    const afterValue = normalizeValue(field, after[field]);
    const currentValue = normalizeValue(field, current[field]);
    return currentValue !== beforeValue && currentValue !== afterValue;
  });
  const value = { ...current };
  changedFields.forEach((field) => {
    value[field] = after[field];
  });
  return { changedFields, conflictingFields, value };
}

export function rebaseLessonJournalHomeworkChange(change = {}, current = {}) {
  const rebased = createLessonJournalChangeRebase({
    after: change.after,
    before: change.before,
    current,
    fields: lessonJournalHistoryHomeworkFields,
    normalizeValue: normalizeHomeworkValue
  });
  const sameAppliedCheckState = lessonJournalHomeworkCheckStateFields.every((field) => (
    normalizeHomeworkValue(field, change.after?.[field]) ===
    normalizeHomeworkValue(field, current?.[field])
  ));
  if (sameAppliedCheckState && rebased.conflictingFields.includes("checkedAt")) {
    rebased.conflictingFields = rebased.conflictingFields.filter((field) => field !== "checkedAt");
    rebased.value.checkedAt = current.checkedAt;
  }
  return rebased;
}

export function rebaseLessonJournalRecordChange(change = {}, current = {}) {
  return createLessonJournalChangeRebase({
    after: change.after,
    before: change.before,
    current,
    fields: lessonJournalRecordFields,
    normalizeValue: normalizeRecordValue
  });
}

function doesPersistedChangeMatch({
  after = {},
  before = null,
  persisted = {},
  fields = [],
  normalizeValue = (_field, value) => value ?? ""
} = {}) {
  if (!before) return fields.every((field) => (
    normalizeValue(field, after[field]) === normalizeValue(field, persisted[field])
  ));
  return fields.every((field) => (
    normalizeValue(field, before[field]) === normalizeValue(field, after[field]) ||
    normalizeValue(field, after[field]) === normalizeValue(field, persisted[field])
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
  const homeworkMismatches = homeworkChanges.flatMap(({ after, before }) => {
    const persisted = homeworkById.get(after?.homeworkId);
    return persisted && doesPersistedChangeMatch({
      after,
      before,
      persisted,
      fields: lessonJournalHistoryHomeworkFields,
      normalizeValue: normalizeHomeworkValue
    })
      ? []
      : [after?.homeworkId ?? ""];
  });
  const recordMismatches = recordChanges.flatMap(({ after, before }) => {
    const identity = `${after?.lessonId}::${after?.studentId}`;
    const persisted = recordByIdentity.get(identity);
    return persisted && doesPersistedChangeMatch({
      after,
      before,
      persisted,
      fields: lessonJournalRecordFields,
      normalizeValue: normalizeRecordValue
    })
      ? []
      : [after?.lessonStudentRecordId || identity];
  });
  return {
    homeworkMismatches,
    recordMismatches,
    verified: homeworkMismatches.length === 0 && recordMismatches.length === 0
  };
}
