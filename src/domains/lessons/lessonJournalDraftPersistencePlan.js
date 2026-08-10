export function createLessonJournalDraftPersistencePlan({
  currentHomeworks = [],
  homeworkDrafts = [],
  lesson,
  lessons = [],
  now = () => new Date().toISOString(),
  recordDrafts = [],
  records = [],
  students = [],
  dependencies = {}
} = {}) {
  const {
    buildHomeworkDraftUpdate,
    getHomeworkStatusFromAssignmentStatus,
    getLessonHomework,
    isAssignmentStatusUnrecorded,
    normalizeAssignmentStatusValue
  } = dependencies;
  let nextHomeworks = currentHomeworks;
  const changedHomeworkMap = new Map();

  homeworkDrafts.forEach((draft) => {
    const student = students.find((item) => item.studentId === draft.studentId);
    if (!student) return;
    const result = buildHomeworkDraftUpdate(
      nextHomeworks,
      lesson,
      student,
      draft.homeworkType,
      draft.title ?? ""
    );
    nextHomeworks = result.homeworks;
    result.changedHomeworks.forEach((homework) => {
      changedHomeworkMap.set(homework.homeworkId, homework);
    });
  });

  const recordsToSave = recordDrafts
    .filter((record) => record?.lessonStudentRecordId)
    .map((record) => ({
      ...record,
      updatedBy: "instructor_owner_001",
      updatedAt: now()
    }));

  recordsToSave.forEach((record) => {
    const assignmentStatus =
      record.assignmentStatus ?? record.incompleteHomework ?? "";
    if (!assignmentStatus) return;
    if (isAssignmentStatusUnrecorded(assignmentStatus)) return;
    const student = students.find((item) => item.studentId === record.studentId);
    if (!student) return;
    const previousHomework = getLessonHomework(
      nextHomeworks,
      lesson,
      student,
      "previous",
      lessons,
      records
    );
    if (!previousHomework?.homeworkId || !previousHomework.title?.trim()) return;
    const existing = nextHomeworks.find(
      (homework) => homework.homeworkId === previousHomework.homeworkId
    );
    if (!existing) return;
    const homeworkStatus = getHomeworkStatusFromAssignmentStatus(assignmentStatus);
    const normalizedAssignmentStatus =
      normalizeAssignmentStatusValue(assignmentStatus);
    const checkedFields = {
      status: homeworkStatus.status,
      teacherStatus: homeworkStatus.teacherStatus,
      assignmentStatus: normalizedAssignmentStatus,
      incompleteHomework: normalizedAssignmentStatus
    };
    let checkTimestamp = "";
    const createCheckedHomework = (homework) => {
      if (!homework) return null;
      const dueDate = homework.dueDate || lesson.date;
      const changed = Object.entries({ ...checkedFields, dueDate }).some(
        ([field, value]) => (homework[field] ?? "") !== (value ?? "")
      );
      if (!changed) return null;
      const checkedAt = checkTimestamp || (checkTimestamp = now());
      return { ...homework, ...checkedFields, dueDate, checkedAt, updatedAt: checkedAt };
    };
    const nextHomework = createCheckedHomework(existing);
    const sourceHomework = nextHomeworks.find(
      (homework) =>
        homework.homeworkType === "next" &&
        homework.studentId === student.studentId &&
        homework.lessonId ===
          (existing.linkedFromLessonId || previousHomework.linkedFromLessonId) &&
        String(homework.title ?? "").trim() ===
          String(existing.title ?? "").trim()
    );
    const updatedSourceHomework = createCheckedHomework(sourceHomework);
    if (nextHomework) changedHomeworkMap.set(nextHomework.homeworkId, nextHomework);
    if (updatedSourceHomework) {
      changedHomeworkMap.set(
        updatedSourceHomework.homeworkId,
        updatedSourceHomework
      );
    }
    nextHomeworks = nextHomeworks.map((homework) => {
      if (nextHomework && homework.homeworkId === nextHomework.homeworkId) return nextHomework;
      if (
        updatedSourceHomework &&
        homework.homeworkId === updatedSourceHomework.homeworkId
      ) {
        return updatedSourceHomework;
      }
      return homework;
    });
  });

  return {
    changedHomeworks: [...changedHomeworkMap.values()],
    nextHomeworks,
    recordsToSave
  };
}
