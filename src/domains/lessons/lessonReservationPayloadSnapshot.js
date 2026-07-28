export function createLessonReservationPayloadSnapshot({
  audience,
  compactMessage,
  getAssignmentStatus,
  getHomeworkFollowupNotice,
  getLessonContent,
  getLessonMaterial,
  isAssignmentStatusUnrecorded,
  mode,
  nextHomework,
  notificationTemplates = {},
  previousHomework,
  record,
  scheduledDate,
  student,
  supplementSchedules = [],
  testResultLines = []
}) {
  const sourceField =
    audience === "student" ? "studentComment" : "teacherComment";
  const commentBody = compactMessage(record?.[sourceField] ?? "");
  const assignmentStatus = getAssignmentStatus(record, previousHomework);
  const omitPreviousHomework =
    isAssignmentStatusUnrecorded(assignmentStatus);
  const homeworkFollowupNotice = omitPreviousHomework
    ? ""
    : getHomeworkFollowupNotice(
        record,
        audience,
        notificationTemplates
      );
  return {
    assignmentStatus,
    attendanceReason: record?.attendanceReason ?? "",
    attendanceStatus: record?.attendanceStatus ?? "pending",
    checkInTime: record?.checkInTime ?? "",
    checkOutTime: record?.checkOutTime ?? "",
    commentBodyOverride: commentBody,
    lateMinutes: record?.lateMinutes ?? "",
    lessonContent: getLessonContent(record),
    lessonMaterial: getLessonMaterial(record, student),
    homeworkFollowupNotice,
    nextHomework: nextHomework?.title ?? "",
    preparationNotice: "",
    previousHomework: omitPreviousHomework
      ? ""
      : previousHomework?.title ?? "",
    recipient:
      audience === "student"
        ? student.studentPhone
        : student.parentPhone,
    scheduledDate,
    scheduleMode: mode,
    studentId: student.studentId,
    supplementSchedule: supplementSchedules.join("\n"),
    testResult: testResultLines.join("\n"),
    target: audience
  };
}
