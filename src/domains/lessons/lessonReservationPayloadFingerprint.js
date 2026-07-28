export function createLessonReservationPayloadFingerprint({
  normalizeMessage,
  normalizePhone,
  payload = {}
}) {
  const scheduledDateSource = String(payload.scheduledDate ?? "").trim();
  const scheduledDateTimestamp = Date.parse(scheduledDateSource);
  const normalizedScheduledDate =
    scheduledDateSource && Number.isFinite(scheduledDateTimestamp)
      ? new Date(scheduledDateTimestamp).toISOString()
      : scheduledDateSource;
  return JSON.stringify({
    assignmentStatus: String(payload.assignmentStatus ?? ""),
    attendanceReason: String(
      payload.attendanceReason ?? payload.reason ?? ""
    ),
    attendanceStatus: String(payload.attendanceStatus ?? ""),
    checkInTime: String(payload.checkInTime ?? ""),
    checkOutTime: String(payload.checkOutTime ?? ""),
    commentBodyOverride: normalizeMessage(
      payload.commentBodyOverride ?? payload.message ?? ""
    ),
    homeworkFollowupNotice: normalizeMessage(
      payload.homeworkFollowupNotice ?? ""
    ),
    lateMinutes: String(payload.lateMinutes ?? ""),
    lessonContent: normalizeMessage(payload.lessonContent ?? ""),
    lessonMaterial: normalizeMessage(payload.lessonMaterial ?? ""),
    nextHomework: normalizeMessage(payload.nextHomework ?? ""),
    preparationNotice: normalizeMessage(payload.preparationNotice ?? ""),
    previousHomework: normalizeMessage(payload.previousHomework ?? ""),
    recipient: normalizePhone(
      payload.recipient ??
        (payload.target === "student"
          ? payload.studentPhone
          : payload.parentPhone) ??
        ""
    ),
    scheduledDate: normalizedScheduledDate,
    scheduleMode: String(payload.scheduleMode ?? ""),
    studentId: String(payload.studentId ?? ""),
    supplementSchedule: normalizeMessage(payload.supplementSchedule ?? ""),
    testResult: normalizeMessage(payload.testResult ?? ""),
    target: String(payload.target ?? "")
  });
}
