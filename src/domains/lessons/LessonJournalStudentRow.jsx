import { LessonJournalAssignmentStatusCell } from "./LessonJournalAssignmentStatusCell.jsx";
import { LessonJournalAttendanceButton } from "./LessonJournalAttendanceButton.jsx";
import { LessonJournalEditableFields } from "./LessonJournalEditableFields.jsx";
import { LessonJournalNotificationCommentCell } from "./LessonJournalNotificationCommentCell.jsx";
import { LessonJournalPrepMemoButton } from "./LessonJournalPrepMemoButton.jsx";
import { LessonJournalStudentIdentity } from "./LessonJournalStudentIdentity.jsx";

export function LessonJournalStudentRow({
  assignmentStatusCellProps,
  attendanceButtonProps,
  editableFieldsProps,
  parentNotificationCommentProps,
  prepMemoButtonProps,
  studentIdentityProps,
  studentNotificationCommentProps
}) {
  return (
    <div className="journalRow">
      <LessonJournalStudentIdentity {...studentIdentityProps} />
      <LessonJournalPrepMemoButton {...prepMemoButtonProps} />
      <LessonJournalAttendanceButton {...attendanceButtonProps} />
      <LessonJournalEditableFields {...editableFieldsProps} />
      <LessonJournalAssignmentStatusCell {...assignmentStatusCellProps} />
      <LessonJournalNotificationCommentCell {...parentNotificationCommentProps} />
      <LessonJournalNotificationCommentCell {...studentNotificationCommentProps} />
    </div>
  );
}
