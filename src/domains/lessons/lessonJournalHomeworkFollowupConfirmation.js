import { saveLessonJournalRowsAction } from "./lessonJournalRowsSaveAction.js";

function removeLegacyHomeworkFollowupMemoLines(value = "") {
  return String(value ?? "")
    .trim()
    .split("\n")
    .filter((line) => !/^\s*(다음 수업 확인|수업 후 보충)\s*:\s*.+\s*$/.test(line))
    .join("\n")
    .trim();
}

export function createConfirmedHomeworkFollowupRecord(sourceRecord = {}, now = () => new Date().toISOString()) {
  if (!sourceRecord.lessonStudentRecordId || !sourceRecord.lessonId || !sourceRecord.studentId) {
    throw new Error("확인할 숙제의 원 수업기록을 찾지 못했습니다.");
  }
  return {
    ...sourceRecord,
    homeworkFollowupMethod: "",
    homeworkFollowupSourceHomeworkId: "",
    homeworkFollowupText: "",
    preparationMemo: removeLegacyHomeworkFollowupMemoLines(sourceRecord.preparationMemo),
    updatedAt: now(),
    updatedBy: "instructor_owner_001"
  };
}

export async function confirmLessonJournalHomeworkFollowup({
  currentRecords = [],
  request,
  sourceRecord
} = {}) {
  const latestSourceRecord = currentRecords.find((record) => (
    record.lessonId === sourceRecord?.lessonId && record.studentId === sourceRecord?.studentId
  )) ?? sourceRecord;
  const recordToSave = createConfirmedHomeworkFollowupRecord(latestSourceRecord);
  const result = await saveLessonJournalRowsAction({
    changedHomeworks: [],
    currentHomeworks: [],
    currentRecords,
    recordsToSave: [recordToSave],
    request
  });
  const record = (result.records ?? []).find((item) => (
    item.lessonId === recordToSave.lessonId && item.studentId === recordToSave.studentId
  ));
  if (!record) {
    throw new Error("확인할 숙제 저장 결과를 찾지 못했습니다.");
  }
  return { ...result, record };
}
