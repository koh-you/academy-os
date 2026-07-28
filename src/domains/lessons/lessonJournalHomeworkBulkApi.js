export function createLessonJournalHomeworkSaveFingerprint(homework = {}) {
  return JSON.stringify({
    assignmentStatus: homework.assignmentStatus ?? "",
    checkedAt: homework.checkedAt ?? "",
    dueDate: homework.dueDate ?? "",
    homeworkId: homework.homeworkId ?? "",
    incompleteHomework: homework.incompleteHomework ?? "",
    status: homework.status ?? "",
    teacherStatus: homework.teacherStatus ?? "",
    title: homework.title ?? ""
  });
}

export async function saveLessonJournalHomeworksWithVerification({
  homeworks = [],
  request
} = {}) {
  if (!homeworks.length) return [];

  const verification = await request("/api/homeworks/bulk", { homeworks });
  if (verification.source !== "supabase") {
    throw new Error("숙제를 Supabase에서 다시 확인하지 못했습니다.");
  }

  const verifiedById = new Map(
    (verification.homeworks ?? []).map((homework) => [homework.homeworkId, homework])
  );
  return homeworks.map((homework) => {
    const verified = verifiedById.get(homework.homeworkId);
    if (
      !verified ||
      createLessonJournalHomeworkSaveFingerprint(verified) !==
        createLessonJournalHomeworkSaveFingerprint(homework)
    ) {
      throw new Error(
        `숙제 저장 후 Supabase 재조회 값이 일치하지 않습니다: ${homework.homeworkId}`
      );
    }
    return verified;
  });
}
