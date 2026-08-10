import { normalizeTimeInput } from "./attendance.js";

const lessonFields = [
  "lessonId",
  "classTemplateId",
  "className",
  "date",
  "color",
  "status",
  "lessonType",
  "lessonTopic",
  "sourceMakeupTaskId",
  "sourceSchoolEventId",
  "sourceLabel",
  "lessonTrackId",
  "lessonTrackType",
  "specialLectureGuideId",
  "specialLectureSessionId",
  "specialLectureSessionIndex"
];

export const lessonJournalHistoryHomeworkFields = [
  "homeworkId",
  "lessonId",
  "studentId",
  "homeworkType",
  "title",
  "subject",
  "assignedDate",
  "dueDate",
  "studentStatus",
  "teacherStatus",
  "status",
  "totalProblems",
  "assignmentStatus",
  "incompleteHomework",
  "checkedAt",
  "verifiedAt",
  "linkedFromLessonId",
  "linkedFromDate"
];

function normalizeFields(value = {}, fields = []) {
  return Object.fromEntries(fields.map((field) => [field, value[field] ?? ""]));
}

function normalizeStringList(values = []) {
  return [...new Set(Array.isArray(values) ? values.map(String) : [])].sort();
}

function normalizeSchedules(values = []) {
  return [...(Array.isArray(values) ? values : [])]
    .map((value) => ({
      date: value?.date ?? "",
      endTime: normalizeTimeInput(value?.endTime ?? ""),
      scheduleType: value?.scheduleType ?? "",
      startTime: normalizeTimeInput(value?.startTime ?? ""),
      studentId: value?.studentId ?? ""
    }))
    .sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
}

export function areLessonJournalHistoryTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}

export function areLessonJournalHistoryLessonsEqual(left = {}, right = {}) {
  return JSON.stringify(normalizeFields(left, lessonFields)) === JSON.stringify(normalizeFields(right, lessonFields)) &&
    normalizeTimeInput(left.startTime ?? "") === normalizeTimeInput(right.startTime ?? "") &&
    normalizeTimeInput(left.endTime ?? "") === normalizeTimeInput(right.endTime ?? "") &&
    JSON.stringify(normalizeStringList(left.studentIds)) === JSON.stringify(normalizeStringList(right.studentIds)) &&
    JSON.stringify(normalizeSchedules(left.specialLectureStudentSchedules)) === JSON.stringify(normalizeSchedules(right.specialLectureStudentSchedules));
}

export function areLessonJournalHistoryHomeworksEqual(left = {}, right = {}) {
  return JSON.stringify(normalizeFields(left, lessonJournalHistoryHomeworkFields)) === JSON.stringify(normalizeFields(right, lessonJournalHistoryHomeworkFields));
}

export function createLessonJournalHistoryPlan({
  action,
  afterLesson = null,
  beforeLesson = null,
  homeworks = []
} = {}) {
  const normalizedAction = String(action || "");
  const homeworkChanges = homeworks.map((homework) => ({
    after: ["copy"].includes(normalizedAction) ? homework : null,
    before: ["undo_copy"].includes(normalizedAction) ? homework : null
  }));
  return {
    action: normalizedAction,
    homeworkChanges,
    lessonChange: { after: afterLesson, before: beforeLesson }
  };
}

export function verifyLessonJournalHistoryPlan({ homeworkChanges = [], lessonChange = {} } = {}, {
  homeworks = [],
  lesson = null
} = {}) {
  const homeworkById = new Map(homeworks.map((homework) => [homework.homeworkId, homework]));
  const homeworkMismatches = homeworkChanges.flatMap(({ after, before }) => {
    const homeworkId = after?.homeworkId || before?.homeworkId || "";
    const persisted = homeworkById.get(homeworkId) ?? null;
    if (after ? areLessonJournalHistoryHomeworksEqual(after, persisted ?? {}) : !persisted) return [];
    return [homeworkId];
  });
  const expectedLesson = lessonChange.after ?? null;
  const lessonVerified = expectedLesson
    ? areLessonJournalHistoryLessonsEqual(expectedLesson, lesson ?? {})
    : !lesson;
  return {
    homeworkMismatches,
    lessonMismatch: lessonVerified ? "" : lessonChange.after?.lessonId || lessonChange.before?.lessonId || "",
    verified: lessonVerified && homeworkMismatches.length === 0
  };
}
