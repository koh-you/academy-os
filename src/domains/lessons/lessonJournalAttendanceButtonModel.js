export function createLessonJournalAttendanceButtonModel({
  attendanceDisplay = {},
  checkoutMissing = false,
  isClosureLesson = false,
  record = {}
}) {
  return {
    className: `attendanceBadge attendance-${attendanceDisplay.statusClass ?? record.attendanceStatus ?? "pending"}`,
    detail: attendanceDisplay.detail ?? "",
    disabled: isClosureLesson,
    label: attendanceDisplay.label ?? "",
    showCheckoutMissing: Boolean(checkoutMissing),
    showDateMismatch: Boolean(attendanceDisplay.dateMismatch)
  };
}
