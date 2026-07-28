export function createLessonNotificationJob({
  academyName,
  audience,
  buildCommentPreview,
  buildPayloadSnapshot,
  getAssignmentStatus,
  getAssignmentStatusMessage,
  getAssignmentStatusParentMessage,
  getAssignmentStatusStudentMessage,
  getJobId,
  getLessonContent,
  getLessonMaterial,
  getPayloadFingerprint,
  lesson,
  mode,
  nextHomework,
  notificationTemplates = {},
  nowIso,
  previousHomework,
  record,
  recordId,
  scheduledDate,
  student,
  supplementSchedules = [],
  testResultLines = []
}) {
  const payloadSnapshot = buildPayloadSnapshot({
    audience,
    lesson,
    mode,
    nextHomework,
    notificationTemplates,
    previousHomework,
    record,
    scheduledDate,
    student,
    supplementSchedules,
    testResultLines
  });
  const commentBody = payloadSnapshot.commentBodyOverride;
  const assignmentStatus = getAssignmentStatus(record, previousHomework);
  const payload = {
    academyName,
    assignmentStatus,
    assignmentStatusMessage: getAssignmentStatusMessage(
      audience,
      assignmentStatus
    ),
    assignmentStatusParentMessage:
      getAssignmentStatusParentMessage(assignmentStatus),
    assignmentStatusStudentMessage:
      getAssignmentStatusStudentMessage(assignmentStatus),
    attendanceStatus: record?.attendanceStatus ?? "pending",
    attendanceReason: record?.attendanceReason ?? "",
    checkInTime: record?.checkInTime ?? "",
    checkOutTime: record?.checkOutTime ?? "",
    checkedAt: record?.checkInAt || record?.checkOutAt || "",
    lateMinutes: record?.lateMinutes ?? "",
    commentBodyOverride: commentBody,
    homeworkFollowupNotice: payloadSnapshot.homeworkFollowupNotice,
    lessonContent: getLessonContent(record),
    lessonDate: lesson.date,
    lessonId: lesson.lessonId,
    lessonMaterial: getLessonMaterial(record, student),
    lessonName: lesson.className,
    message: commentBody,
    nextHomework: nextHomework?.title ?? "",
    osScheduled: true,
    parentPhone: student.parentPhone,
    preparationNotice: payloadSnapshot.preparationNotice,
    previousHomework: payloadSnapshot.previousHomework,
    reservationFingerprint: getPayloadFingerprint(payloadSnapshot),
    scheduledDate,
    scheduleMode: mode,
    sendMode: "scheduled",
    studentId: student.studentId,
    studentName: student.name,
    studentPhone: student.studentPhone,
    supplementSchedule: supplementSchedules.join("\n"),
    testResult: testResultLines.join("\n"),
    target: audience
  };
  return {
    notificationJobId: getJobId(
      lesson.lessonId,
      student.studentId,
      audience
    ),
    notificationType:
      audience === "student" ? "student_comment" : "parent_comment",
    studentId: student.studentId,
    lessonId: lesson.lessonId,
    lessonStudentRecordId: recordId,
    target: audience,
    recipient:
      audience === "student"
        ? student.studentPhone
        : student.parentPhone,
    scheduledAt: scheduledDate,
    payload,
    previewBody: buildCommentPreview({
      audience,
      comment: commentBody,
      lesson,
      nextHomework,
      notificationTemplates,
      previousHomework,
      record,
      student,
      supplementSchedules,
      testResultLines
    }),
    status: "scheduled",
    provider: "academy-os-reserving",
    result: { reservationPending: true },
    error: "",
    createdAt: nowIso
  };
}
