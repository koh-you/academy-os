import {
  createLessonJournalRowsSavePlan,
  verifyLessonJournalRowsSavePlan
} from "./lessonJournalRowsPersistence.js";

export function createLessonJournalRowsSaveAuditId(now = Date.now()) {
  const suffix = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2, 10);
  return `lesson-journal-rows-${now}-${suffix}`;
}

export async function saveLessonJournalRowsAction({
  changedHomeworks = [],
  currentHomeworks = [],
  currentRecords = [],
  recordsToSave = [],
  request
} = {}) {
  if (typeof request !== "function") throw new Error("수업일지 행 저장 request가 필요합니다.");
  const plan = createLessonJournalRowsSavePlan({
    changedHomeworks,
    currentHomeworks,
    currentRecords,
    recordsToSave
  });
  if (!plan.homeworkChanges.length && !plan.recordChanges.length) {
    return { auditId: "", homeworks: [], records: [], source: "none", verified: true };
  }
  const auditId = createLessonJournalRowsSaveAuditId();
  const result = await request(
    "/api/lesson-journal/rows/save",
    { auditId, ...plan },
    30000,
    "수업기록·숙제 저장이 30초를 넘었습니다. 수정본을 유지한 채 서버 상태를 다시 확인해 주세요."
  );
  const verification = verifyLessonJournalRowsSavePlan(plan, result);
  if (
    result?.auditId !== auditId ||
    result?.source !== "supabase" ||
    result?.verified !== true ||
    !verification.verified
  ) {
    throw new Error("수업기록·숙제 저장 결과를 Supabase 재조회로 확인하지 못했습니다.");
  }
  return result;
}
