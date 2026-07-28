import { createLessonJournalAttendanceButtonModel } from "./lessonJournalAttendanceButtonModel.js";

export function LessonJournalAttendanceButton({
  attendanceDisplay,
  attendanceLesson,
  checkoutMissing,
  isClosureLesson,
  onOpenAttendance,
  record,
  student
}) {
  const model = createLessonJournalAttendanceButtonModel({
    attendanceDisplay,
    checkoutMissing,
    isClosureLesson,
    record
  });

  return (
    <button
      className={model.className}
      disabled={model.disabled}
      onClick={() => onOpenAttendance({ lesson: attendanceLesson, record, student })}
      type="button"
    >
      <span>{model.label}</span>
      {model.detail ? <small>{model.detail}</small> : null}
      {model.showDateMismatch ? <small className="attendanceMismatchText">확인 필요</small> : null}
      {model.showCheckoutMissing ? <small className="checkoutMissingText">하원 미체크</small> : null}
    </button>
  );
}
