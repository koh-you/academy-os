import { normalizeNotificationText as normalizeMessageText } from "../notifications/notificationMessageRenderer.js";
import { getJsonWithTimeout, postJson } from "../../shared/utils/apiClient.js";

const lessonRecordRequeryVerificationFields = [
  "homeworkFollowupMethod",
  "homeworkFollowupText",
  "homeworkFollowupSourceHomeworkId",
  "preparationMemo",
  "prepStudentVisible",
  "prepParentVisible",
  "prepMemoCheckedAt",
  "prepMemoCheckedSourceDate",
  "prepMemoCheckedSourceRecordId"
];

function normalizeLessonRecordVerificationValue(field, value) {
  if (["prepStudentVisible", "prepParentVisible"].includes(field)) {
    return Boolean(value) ? "true" : "false";
  }
  if (field === "prepMemoCheckedAt" && value) {
    const timestamp = Date.parse(value);
    if (Number.isFinite(timestamp)) return new Date(timestamp).toISOString();
  }
  return normalizeMessageText(value);
}

function hasMatchingVerifiedLessonRecordFields(expectedRecord = {}, savedRecord = {}) {
  return lessonRecordRequeryVerificationFields
    .filter((field) => Object.prototype.hasOwnProperty.call(expectedRecord, field))
    .every((field) => (
      normalizeLessonRecordVerificationValue(field, expectedRecord[field]) ===
      normalizeLessonRecordVerificationValue(field, savedRecord?.[field])
    ));
}

/**
 * Owns the verified-persist transport contract for a single lesson record:
 * POST /api/lesson-records, an optional field-level requery against
 * GET /api/lesson-records, and an optional related-homeworks bulk save.
 * Ref/state bookkeeping (timers, recordsRef, setRecords, localStorage,
 * notification refresh) stays in App.jsx's handleSaveRecord.
 */
export async function saveLessonRecordAction({ record, relatedHomeworks = [], recordId, verifyFields = [] }) {
  const saveResult = await postJson("/api/lesson-records", { record });
  let savedRecord = saveResult?.record;
  if (!savedRecord || !hasMatchingVerifiedLessonRecordFields(record, savedRecord)) {
    throw new Error("수업기록 저장 후 Supabase 재조회 값이 일치하지 않습니다.");
  }
  if (verifyFields.length > 0) {
    const recordsAfterResult = await getJsonWithTimeout(
      "/api/lesson-records",
      15000,
      "수업기록 저장 확인이 15초를 넘었습니다. 중복 저장하지 말고 잠시 뒤 다시 확인해 주세요."
    );
    const requeriedRecord = (recordsAfterResult.records ?? []).find((item) => item.lessonStudentRecordId === recordId);
    const mismatchedField = verifyFields.find((fieldKey) => (
      String(requeriedRecord?.[fieldKey] ?? "") !== String(record?.[fieldKey] ?? "")
    ));
    if (!requeriedRecord || mismatchedField) {
      throw new Error(`수업기록 저장 후 Supabase 재조회에서 ${mismatchedField || "최종 문구"} 값이 일치하지 않습니다.`);
    }
    savedRecord = requeriedRecord;
  }
  if (relatedHomeworks.length > 0) {
    await postJson("/api/homeworks/bulk", { homeworks: relatedHomeworks });
  }
  return { savedRecord };
}
