import { normalizeSchoolName } from "../schoolCalendar/schoolCalendarUtils.js";

/**
 * 2026-10-01 · "그 날짜에서 이 학교만 빼기".
 *
 * 일요 시험대비 수업은 날짜당 한 개로 그날 걸린 모든 학교를 합쳐 만든다
 * (examPrepLessonCandidateBuilder). 그래서 수업을 지우면 빼려던 학교뿐 아니라 그날 전체가
 * 사라졌고, 시험정보의 "이번 고사 내신 준비 제외" 는 그 학교의 일요대비 4회 전부를 뺐다.
 * 날짜 하나에서 학교 하나만 빼는 자리가 없었다(2026-10-01 요청).
 *
 * 제외는 수업이 아니라 `생성 키 + 학교` 로 남긴다. 수업에만 적어 두면 재생성이 명단을
 * 원천(시험정보 행) 기준으로 되돌려 놓기 때문이다. 학교명은 시험정보 행에서 고칠 수 있어
 * 학생 쪽 표기와 어긋날 수 있으므로 비교는 normalizeSchoolName 으로 하고, 화면에 보여줄
 * 원래 표기는 따로 들고 있는다(제외하면 명단에서 사라져 표기를 다시 알 수 없다).
 */
export function createExamPrepSchoolKey(schoolName = "") {
  return normalizeSchoolName(schoolName);
}

export function normalizeExamPrepSchoolExclusions(value = []) {
  if (!Array.isArray(value)) return [];
  const byKey = new Map();
  value.forEach((entry) => {
    const generatedKey = String(entry?.generatedKey || "").trim();
    const schoolKey = createExamPrepSchoolKey(entry?.schoolKey || entry?.schoolName);
    if (!generatedKey || !schoolKey) return;
    byKey.set(`${generatedKey}::${schoolKey}`, {
      generatedKey,
      schoolKey,
      schoolName: String(entry?.schoolName || entry?.schoolKey || "").trim() || schoolKey
    });
  });
  return [...byKey.values()].sort((left, right) => (
    left.generatedKey.localeCompare(right.generatedKey) ||
    left.schoolKey.localeCompare(right.schoolKey)
  ));
}

export function isExamPrepSchoolExcluded(exclusions = [], generatedKey = "", schoolName = "") {
  const key = String(generatedKey || "").trim();
  const schoolKey = createExamPrepSchoolKey(schoolName);
  if (!key || !schoolKey) return false;
  return normalizeExamPrepSchoolExclusions(exclusions)
    .some((entry) => entry.generatedKey === key && entry.schoolKey === schoolKey);
}

export function getExamPrepExcludedSchools(exclusions = [], generatedKey = "") {
  const key = String(generatedKey || "").trim();
  if (!key) return [];
  return normalizeExamPrepSchoolExclusions(exclusions)
    .filter((entry) => entry.generatedKey === key);
}

export function addExamPrepSchoolExclusion(exclusions = [], generatedKey = "", schoolName = "") {
  const key = String(generatedKey || "").trim();
  const schoolKey = createExamPrepSchoolKey(schoolName);
  if (!key || !schoolKey) return normalizeExamPrepSchoolExclusions(exclusions);
  return normalizeExamPrepSchoolExclusions([
    ...exclusions,
    { generatedKey: key, schoolKey, schoolName: String(schoolName || "").trim() || schoolKey }
  ]);
}

export function removeExamPrepSchoolExclusion(exclusions = [], generatedKey = "", schoolName = "") {
  const key = String(generatedKey || "").trim();
  const schoolKey = createExamPrepSchoolKey(schoolName);
  return normalizeExamPrepSchoolExclusions(exclusions)
    .filter((entry) => !(entry.generatedKey === key && entry.schoolKey === schoolKey));
}

/**
 * 학교별 참여·시간 변경을 **한 요청**으로 보내는 저장 계획.
 *
 * 학교마다 따로 보내면 같은 수업에 CAS 쓰기가 연달아 나가 두 번째부터 충돌이 난다. 그리고
 * 저장 상태가 행마다 갈려 "다 저장됐나?" 를 한눈에 볼 수 없었다. 그래서 바뀐 것을 모아
 * 수업 하나의 `after` 를 만들고 한 번만 보낸다(examPrepSchoolPlanDraft 주석 참고).
 *
 * 저장되지 않은 자동 생성 수업은 계획이 비어 있다 — 화면 수업은 생성 계획에서 다시 만들어
 * 지므로 제외는 생성 제어만으로 충분하고, 시간은 저장할 원본이 없다.
 */
export function createExamPrepSchoolPlanSavePlan({
  persistedLessons = [],
  schoolTimes = [],
  sourceLesson = {},
  students = [],
  studentTimes = [],
  toExclude = []
} = {}) {
  const excludedKeys = new Set(
    toExclude.map((entry) => createExamPrepSchoolKey(entry?.schoolKey || entry?.schoolName)).filter(Boolean)
  );
  const roster = new Set(sourceLesson.studentIds ?? []);
  const removedStudentIds = students
    .filter((student) => roster.has(student.studentId))
    .filter((student) => excludedKeys.has(createExamPrepSchoolKey(student.schoolName)))
    .map((student) => student.studentId)
    .filter(Boolean);
  const scheduleByStudentId = new Map();
  schoolTimes.forEach((entry) => {
    (entry.studentIds ?? []).forEach((studentId) => scheduleByStudentId.set(studentId, {
      endTime: entry.endTime,
      startTime: entry.startTime
    }));
  });
  studentTimes.forEach((entry) => scheduleByStudentId.set(entry.studentId, {
    endTime: entry.endTime,
    startTime: entry.startTime
  }));
  const intent = { removedStudentIds, scheduleByStudentId };
  const persistedLesson = persistedLessons
    .find((lesson) => lesson?.lessonId === sourceLesson.lessonId) ?? null;
  if (!persistedLesson) return { changes: [], ...intent };
  const after = applyExamPrepSchoolPlanToLesson(persistedLesson, intent);
  return {
    changes: after ? [{ after, before: persistedLesson }] : [],
    ...intent
  };
}

function applyExamPrepSchoolPlanToLesson(lesson, { removedStudentIds = [], scheduleByStudentId = new Map() }) {
  const removed = new Set(removedStudentIds);
  const studentIds = (lesson.studentIds ?? []).filter((studentId) => !removed.has(studentId));
  const roster = new Set(studentIds);
  const schedules = (lesson.specialLectureStudentSchedules ?? [])
    .filter((schedule) => roster.has(schedule?.studentId) && !scheduleByStudentId.has(schedule?.studentId));
  scheduleByStudentId.forEach((time, studentId) => {
    // 명단에 없는 학생의 개별 시간은 서버가 거부한다. 같은 저장에서 빠진 학생은 건너뛴다.
    if (!roster.has(studentId)) return;
    schedules.push({
      endTime: time.endTime,
      overrideReason: "시험대비 학교별 시간",
      scheduleType: "adjusted",
      startTime: time.startTime,
      studentId
    });
  });
  const sameRoster = studentIds.length === (lesson.studentIds ?? []).length;
  const sameSchedules = JSON.stringify(schedules) === JSON.stringify(lesson.specialLectureStudentSchedules ?? []);
  if (sameRoster && sameSchedules) return null;
  return { ...lesson, specialLectureStudentSchedules: schedules, studentIds };
}

/**
 * 충돌이면 서버 최신본 위에 같은 의도를 다시 얹는다. 최신 명단에 할 일이 남아 있지 않으면 null.
 */
export function rebaseExamPrepSchoolPlanChange(change, currentLesson, plan = {}) {
  const lessonId = change?.after?.lessonId;
  if (!lessonId || !currentLesson?.lessonId || currentLesson.lessonId !== lessonId) return change;
  const after = applyExamPrepSchoolPlanToLesson(currentLesson, {
    removedStudentIds: plan.removedStudentIds ?? [],
    scheduleByStudentId: plan.scheduleByStudentId ?? new Map()
  });
  if (!after) return null;
  return { after, before: currentLesson };
}
