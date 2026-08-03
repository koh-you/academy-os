import { areGeneratedLessonPersistedFieldsEqual } from "../lessons/generatedLessonPersistenceModel.js";

const examPrepScheduleFields = [
  "examPrepId",
  "schoolName",
  "grade",
  "subject",
  "textbook",
  "publisher",
  "examCycle",
  "examPeriod",
  "mathExamDate",
  "mathExamDates",
  "scope",
  "subTextbook",
  "review",
  "revisedReview",
  "memo",
  "specialNote",
  "source",
  "reviewAiStatus"
];

function normalizeExamPrepScheduleRow(row = {}) {
  return Object.fromEntries(examPrepScheduleFields.map((field) => [field, row[field] ?? (field === "mathExamDates" ? [] : "")]));
}

export function areDerivedExamPrepRowsEqual(left = {}, right = {}) {
  return JSON.stringify(normalizeExamPrepScheduleRow(left)) === JSON.stringify(normalizeExamPrepScheduleRow(right));
}

export function areDerivedExamPrepNonScheduleFieldsEqual(left = {}, right = {}) {
  const leftRow = normalizeExamPrepScheduleRow(left);
  const rightRow = normalizeExamPrepScheduleRow(right);
  ["examPeriod", "mathExamDate", "mathExamDates"].forEach((field) => {
    delete leftRow[field];
    delete rightRow[field];
  });
  return JSON.stringify(leftRow) === JSON.stringify(rightRow);
}

export function areDerivedLessonTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}

export function areDerivedLessonsEqual(left = {}, right = {}) {
  return String(left.lessonId ?? "") === String(right.lessonId ?? "") &&
    areGeneratedLessonPersistedFieldsEqual(left, right);
}

export function createDerivedExamPrepChanges(previousRows = [], nextRows = []) {
  const previousById = new Map(previousRows.map((row) => [row?.examPrepId, row]));
  return nextRows.flatMap((after) => {
    const before = previousById.get(after?.examPrepId);
    if (!before || areDerivedExamPrepRowsEqual(before, after)) return [];
    return [{ after, before }];
  });
}

function findGeneratedLessonForEvents({
  afterCandidate,
  beforeCandidate,
  getGeneratedLessonIdentityKeys,
  lessons
}) {
  const candidates = [beforeCandidate, afterCandidate].filter(Boolean);
  const identityKeys = new Set(candidates.flatMap((candidate) => getGeneratedLessonIdentityKeys(candidate)));
  const sourceIds = new Set(candidates.map((candidate) => candidate.sourceSchoolEventId).filter(Boolean));
  const lessonIds = new Set(candidates.map((candidate) => candidate.lessonId).filter(Boolean));
  return lessons.find((lesson) => (
    sourceIds.has(lesson.sourceSchoolEventId) ||
    lessonIds.has(lesson.lessonId) ||
    getGeneratedLessonIdentityKeys(lesson).some((key) => identityKeys.has(key))
  )) ?? null;
}

export function createDerivedLessonChanges({
  controls = {},
  eventChanges = [],
  lessons = [],
  students = []
}, {
  createPreExamLessonFromSchoolEvent,
  getGeneratedLessonIdentityKeys,
  getGeneratedLessonKey,
  normalizeGeneratedLessonControls
}) {
  const safeControls = normalizeGeneratedLessonControls(controls);
  const changesByLessonId = new Map();
  const plannedAfterIdentityKeys = new Set();

  eventChanges.forEach(({ after: afterEvent = null, before: beforeEvent = null } = {}) => {
    if (beforeEvent?.type !== "mathExam" && afterEvent?.type !== "mathExam") return;
    const beforeCandidate = beforeEvent ? createPreExamLessonFromSchoolEvent(beforeEvent, students) : null;
    const afterCandidate = afterEvent ? createPreExamLessonFromSchoolEvent(afterEvent, students) : null;
    const existing = findGeneratedLessonForEvents({
      afterCandidate,
      beforeCandidate,
      getGeneratedLessonIdentityKeys,
      lessons
    });
    const controlKeys = new Set([
      existing ? getGeneratedLessonKey(existing) : "",
      beforeCandidate ? getGeneratedLessonKey(beforeCandidate) : "",
      afterCandidate ? getGeneratedLessonKey(afterCandidate) : "",
      ...(existing ? getGeneratedLessonIdentityKeys(existing) : []),
      ...(beforeCandidate ? getGeneratedLessonIdentityKeys(beforeCandidate) : []),
      ...(afterCandidate ? getGeneratedLessonIdentityKeys(afterCandidate) : [])
    ].filter(Boolean));
    const isProtected = [...controlKeys].some((key) => (
      safeControls.suppressedKeys.includes(key) || safeControls.manualOverrideKeys.includes(key)
    ));
    if (isProtected) {
      if (existing) {
        throw new Error("이 수학시험의 직전수업은 수동 보호 또는 자동생성 제외 상태입니다. 보호 설정을 먼저 해제한 뒤 일정을 변경하세요.");
      }
      return;
    }
    if (!afterCandidate) {
      if (existing) changesByLessonId.set(existing.lessonId, { after: null, before: existing });
      return;
    }
    const afterIdentityKeys = getGeneratedLessonIdentityKeys(afterCandidate);
    if (afterIdentityKeys.some((key) => plannedAfterIdentityKeys.has(key))) {
      throw new Error("같은 학교·학년·시험일의 직전수업이 한 저장 계획에 중복되었습니다. 수학시험 날짜 항목을 확인하세요.");
    }
    afterIdentityKeys.forEach((key) => plannedAfterIdentityKeys.add(key));
    const after = existing
      ? { ...afterCandidate, lessonId: existing.lessonId }
      : afterCandidate;
    if (existing && areDerivedLessonsEqual(after, existing)) return;
    changesByLessonId.set(after.lessonId, { after, before: existing });
  });

  return [...changesByLessonId.values()];
}

export function verifyDerivedSchoolCalendarPlan({ examPrepChanges = [], lessonChanges = [] } = {}, {
  examPrepRows = [],
  lessons = []
} = {}) {
  const rowsById = new Map(examPrepRows.map((row) => [row.examPrepId, row]));
  const lessonsById = new Map(lessons.map((lesson) => [lesson.lessonId, lesson]));
  const examPrepMismatches = examPrepChanges
    .filter(({ after }) => !areDerivedExamPrepRowsEqual(after, rowsById.get(after.examPrepId) ?? {}))
    .map(({ after }) => after.examPrepId);
  const lessonMismatches = lessonChanges.flatMap(({ after, before }) => {
    const lessonId = after?.lessonId || before?.lessonId || "";
    const persisted = lessonsById.get(lessonId) ?? null;
    if (after ? areDerivedLessonsEqual(after, persisted ?? {}) : !persisted) return [];
    return [lessonId];
  });
  return {
    examPrepMismatches,
    lessonMismatches,
    verified: examPrepMismatches.length === 0 && lessonMismatches.length === 0
  };
}
