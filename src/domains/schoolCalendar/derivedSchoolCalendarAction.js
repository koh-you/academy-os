import {
  createDerivedExamPrepChanges,
  createDerivedLessonChanges
} from "./derivedSchoolCalendarPersistence.js";

export function createDerivedSchoolCalendarAuditId(now = Date.now()) {
  const suffix = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2, 10);
  return `school-calendar-derived-${now}-${suffix}`;
}

export async function saveDerivedSchoolCalendarAction({
  controls,
  eventChanges,
  lessons,
  nextRows,
  previousRows,
  request,
  students,
  timeoutMessage = "학사일정 연동 저장이 30초를 넘었습니다. 입력을 유지한 채 서버 상태를 확인해 주세요."
}, adapters) {
  if (typeof request !== "function") throw new Error("학사일정 연동 저장 request가 필요합니다.");
  const auditId = createDerivedSchoolCalendarAuditId();
  const examPrepChanges = createDerivedExamPrepChanges(previousRows, nextRows);
  const lessonChanges = createDerivedLessonChanges({
    controls,
    eventChanges,
    lessons,
    students
  }, adapters);
  if (examPrepChanges.length === 0 && lessonChanges.length === 0) {
    return { auditId, examPrepRows: [], lessonIdsToDelete: [], lessons: [], source: "unchanged", verified: true };
  }
  if (examPrepChanges.some(({ before }) => !before?.updatedAt)) {
    throw new Error("시험관리 원본의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 시도해 주세요.");
  }
  if (lessonChanges.some(({ before }) => before && !before.updatedAt)) {
    throw new Error("직전수업 원본의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 시도해 주세요.");
  }
  const result = await request(
    "/api/school-calendar/derived-save",
    { auditId, examPrepChanges, lessonChanges },
    30000,
    timeoutMessage
  );
  if (result?.source !== "supabase" || result?.verified !== true || result?.auditId !== auditId) {
    throw new Error("학사일정 연동 저장 결과를 Supabase 재조회로 확인하지 못했습니다.");
  }
  return result;
}
