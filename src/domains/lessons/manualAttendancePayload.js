const manualAttendanceStatusActions = new Set(["absent", "excused", "pending"]);

export function createManualAttendanceRequestPayload({
  lateGraceMinutes,
  lesson,
  options = {},
  student,
  updatedBy = "instructor_owner_001",
  values
}) {
  const hasManualCheckOutTime = Boolean(String(values.checkOutTime ?? "").trim());
  const shouldSaveCheckOut =
    values.attendanceStatus === "checkout" ||
    (hasManualCheckOutTime && !manualAttendanceStatusActions.has(values.attendanceStatus));
  const nextAttendanceStatus = shouldSaveCheckOut ? "checkout" : values.attendanceStatus;

  return {
    nextAttendanceStatus,
    payload: {
      action: shouldSaveCheckOut
        ? "checkout"
        : manualAttendanceStatusActions.has(nextAttendanceStatus)
          ? "status"
          : "checkin",
      actorId: updatedBy,
      attendanceReason: values.attendanceReason,
      attendanceStatus: nextAttendanceStatus,
      checkInTime: values.checkInTime,
      checkOutTime: values.checkOutTime,
      date: lesson.date,
      lateMinutes: values.lateMinutes,
      lateGraceMinutes,
      lessonId: lesson.lessonId,
      sendAlimtalk: Boolean(options.sendAlimtalk),
      source: "manual",
      studentId: student.studentId
    }
  };
}
