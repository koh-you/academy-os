export function createLessonJournalAssignmentStatusPlan({
  baseRecord,
  getFollowupOptions,
  getFollowupPatch,
  normalizeAssignmentStatus,
  previousHomework,
  value
}) {
  const normalizedValue = normalizeAssignmentStatus(value);
  const homeworkTitle = previousHomework?.title || previousHomework?.sourceLabel || "";

  if (normalizedValue === "not_checked" && homeworkTitle) {
    return {
      message: "수업일지 · 미검사는 다음 정규수업 확인 문구를 오늘 알림톡에 반영합니다.",
      recordUpdate: {
        kind: "patch",
        patch: {
          assignmentStatus: normalizedValue,
          incompleteHomework: normalizedValue,
          needsMakeup: false,
          ...getFollowupPatch(baseRecord, "next_lesson", previousHomework),
          prepParentVisible: true,
          prepStudentVisible: true,
          teacherCommentSendStatus: "",
          studentCommentSendStatus: ""
        }
      },
      removeMakeupTask: true
    };
  }

  if (!getFollowupOptions(normalizedValue).length) {
    return {
      message: "",
      recordUpdate: {
        kind: "patch",
        patch: {
          assignmentStatus: normalizedValue,
          incompleteHomework: normalizedValue,
          ...getFollowupPatch(baseRecord)
        }
      },
      removeMakeupTask: true
    };
  }

  return {
    message: "",
    recordUpdate: {
      field: "assignmentStatus",
      kind: "field",
      value: normalizedValue
    },
    removeMakeupTask: true
  };
}
