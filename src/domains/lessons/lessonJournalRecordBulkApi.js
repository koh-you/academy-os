export async function saveLessonJournalRecordsWithVerification({
  records = [],
  request,
  matchesRecord
} = {}) {
  if (!records.length) return [];

  const result = await request("/api/lesson-records/bulk", { records });
  if (result.source !== "supabase") {
    throw new Error("수업기록을 Supabase에서 다시 확인하지 못했습니다.");
  }

  const verifiedRecords = Array.isArray(result.records) ? result.records : [];
  const verifiedById = new Map(
    verifiedRecords.map((record) => [record.lessonStudentRecordId, record])
  );
  records.forEach((record) => {
    const verified = verifiedById.get(record.lessonStudentRecordId);
    if (!verified || !matchesRecord(record, verified)) {
      throw new Error(
        `수업기록 저장 후 Supabase 재조회 값이 일치하지 않습니다: ${record.lessonStudentRecordId}`
      );
    }
  });

  return verifiedRecords;
}
