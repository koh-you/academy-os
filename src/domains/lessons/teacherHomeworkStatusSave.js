import { saveLessonJournalRowsAction } from "./lessonJournalRowsSaveAction.js";

export const teacherHomeworkStatuses = Object.freeze([
  "unverified",
  "verified",
  "partial",
  "missing"
]);

export function createTeacherHomeworkStatusDraft(homework, teacherStatus, now = () => new Date().toISOString()) {
  if (!homework?.homeworkId || !homework?.lessonId || !homework?.studentId) {
    throw new Error("교사 확인 상태를 저장할 숙제 원천을 찾지 못했습니다.");
  }
  if (!teacherHomeworkStatuses.includes(teacherStatus)) {
    throw new Error("지원하지 않는 교사 숙제 확인 상태입니다.");
  }

  return {
    ...homework,
    status: teacherStatus === "verified" ? "verified" : teacherStatus,
    teacherStatus,
    verifiedAt: now()
  };
}

export async function saveTeacherHomeworkStatusAction({
  homework,
  now,
  request,
  teacherStatus
} = {}) {
  if (typeof request !== "function") throw new Error("교사 숙제 확인 저장 request가 필요합니다.");
  const nextHomework = createTeacherHomeworkStatusDraft(homework, teacherStatus, now);
  const result = await saveLessonJournalRowsAction({
    changedHomeworks: [nextHomework],
    currentHomeworks: [homework],
    request
  });
  const savedHomework = result.homeworks.find((item) => item.homeworkId === homework.homeworkId);
  if (!savedHomework) {
    throw new Error("교사 숙제 확인 저장 결과에서 대상 숙제를 찾지 못했습니다.");
  }
  return savedHomework;
}
