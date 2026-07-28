export function createLessonJournalHomeworkFollowupPlan({
  baseRecord,
  getFollowupPatch,
  lesson,
  method,
  normalizeAssignmentStatus,
  previousHomework,
  student
}) {
  const homeworkTitle = previousHomework.title || previousHomework.sourceLabel || "지난 숙제";
  const clearFollowupPatch = getFollowupPatch(baseRecord);
  const commonPatch = {
    assignmentStatus: normalizeAssignmentStatus(
      baseRecord.assignmentStatus ?? baseRecord.incompleteHomework ?? ""
    ),
    incompleteHomework: normalizeAssignmentStatus(
      baseRecord.assignmentStatus ?? baseRecord.incompleteHomework ?? ""
    ),
    teacherCommentSendStatus: "",
    studentCommentSendStatus: ""
  };

  if (method === "arrival_makeup") {
    return {
      makeupTask: {
        taskType: "homework_makeup",
        studentId: student.studentId,
        sourceId: previousHomework.homeworkId,
        sourceHomeworkId: previousHomework.homeworkId,
        sourceLessonId: previousHomework.lessonId || lesson.lessonId,
        sourceDate: previousHomework.assignedDate || lesson.date,
        sourceDueDate: previousHomework.dueDate || lesson.date,
        sourceLabel: homeworkTitle,
        reason: "등원보충 필요 숙제",
        supplementHomeworkNote: homeworkTitle,
        supplementMethod: "arrival_makeup"
      },
      message: "수업일지 · 등원보충 초안 · 변경 저장 후 Supabase 반영",
      recordPatch: {
        ...commonPatch,
        needsMakeup: true,
        ...clearFollowupPatch,
        prepParentVisible: Boolean(clearFollowupPatch.preparationMemo && baseRecord.prepParentVisible),
        prepStudentVisible: Boolean(clearFollowupPatch.preparationMemo && baseRecord.prepStudentVisible)
      },
      removeMakeupTask: false
    };
  }

  return {
    makeupTask: null,
    message: method === "next_lesson"
      ? "수업일지 · 다음 정규수업 확인 문구를 오늘 알림톡에 반영합니다."
      : "수업일지 · 수업 후 보충 문구를 오늘 알림톡에 반영합니다.",
    recordPatch: {
      ...commonPatch,
      needsMakeup: false,
      ...getFollowupPatch(baseRecord, method, previousHomework),
      prepParentVisible: true,
      prepStudentVisible: true
    },
    removeMakeupTask: true
  };
}
