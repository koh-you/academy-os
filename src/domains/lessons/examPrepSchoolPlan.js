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
 * 제외를 이미 저장된 수업에도 바로 반영하는 저장 계획.
 *
 * 생성 제어만 바꾸면 저장된 수업은 다음 "생성 수업 적용" 까지 예전 명단을 들고 있어 화면과
 * 서버가 어긋난다. 그래서 같은 순간에 기존 시험대비 일정 저장 경로(CAS + 서버 재조회)로
 * 명단에서 그 학교 학생을 뺀다. 수업기록이나 알림 작업이 걸린 학생이 있으면 서버가 막아
 * 주므로(preflightExamPrepRosterRemovals) 여기서 따로 검사하지 않는다.
 *
 * 저장되지 않은 자동 생성 수업은 계획이 비어 있다 — 화면 수업은 생성 계획에서 다시 만들어
 * 지므로 생성 제어만 바꾸면 충분하다.
 */
export function createExamPrepSchoolRosterSavePlan({
  persistedLessons = [],
  schoolName = "",
  sourceLesson = {},
  students = []
} = {}) {
  const schoolKey = createExamPrepSchoolKey(schoolName);
  if (!schoolKey) throw new Error("제외할 학교를 선택해 주세요.");
  const roster = new Set(sourceLesson.studentIds ?? []);
  const removedStudentIds = students
    .filter((student) => roster.has(student.studentId))
    .filter((student) => createExamPrepSchoolKey(student.schoolName) === schoolKey)
    .map((student) => student.studentId)
    .filter(Boolean);
  const persistedLesson = persistedLessons
    .find((lesson) => lesson?.lessonId === sourceLesson.lessonId) ?? null;
  if (!persistedLesson) return { changes: [], removedStudentIds, schoolKey, schoolName };
  const after = applyExamPrepSchoolRemovalToLesson(persistedLesson, removedStudentIds);
  return {
    changes: after ? [{ after, before: persistedLesson }] : [],
    removedStudentIds,
    schoolKey,
    schoolName
  };
}

function applyExamPrepSchoolRemovalToLesson(lesson, removedStudentIds = []) {
  const removed = new Set(removedStudentIds);
  const studentIds = (lesson.studentIds ?? []).filter((studentId) => !removed.has(studentId));
  if (studentIds.length === (lesson.studentIds ?? []).length) return null;
  return {
    ...lesson,
    specialLectureStudentSchedules: (lesson.specialLectureStudentSchedules ?? [])
      .filter((schedule) => !removed.has(schedule?.studentId)),
    studentIds
  };
}

/**
 * 버전 충돌이면 서버 최신본 위에 같은 의도("이 학교 학생을 명단에서 뺀다")를 다시 얹는다.
 * 시간 수정 쪽 rebaseExamPrepScheduleChange 와 같은 이유 — 원본이 바뀌어도 원장님이 저장을
 * 한 번 더 누른 것과 같은 결과여야 한다. 최신 명단에 그 학교 학생이 없으면 null(할 일 없음).
 */
export function rebaseExamPrepSchoolRosterChange(change, currentLesson, plan = {}) {
  const lessonId = change?.after?.lessonId;
  if (!lessonId || !currentLesson?.lessonId || currentLesson.lessonId !== lessonId) return change;
  const after = applyExamPrepSchoolRemovalToLesson(currentLesson, plan.removedStudentIds ?? []);
  if (!after) return null;
  return { after, before: currentLesson };
}
