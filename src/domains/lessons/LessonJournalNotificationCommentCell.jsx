import { createLessonJournalNotificationCommentCellModel } from "./lessonJournalNotificationCommentCellModel.js";

export function LessonJournalNotificationCommentCell({
  audienceLabel,
  commentState,
  isLessonNotificationOff,
  isNotificationMuted,
  onOpen,
  onToggleMute,
  statusLabel
}) {
  const model = createLessonJournalNotificationCommentCellModel({
    commentState,
    isLessonNotificationOff,
    isNotificationMuted
  });

  return (
    <div className="journalCommentCell">
      <button
        className={model.openButtonClassName}
        onClick={onOpen}
        type="button"
      >
        {audienceLabel} 알림톡
      </button>
      <small className={model.statusClassName}>
        {statusLabel}
      </small>
      <button
        className={model.muteButtonClassName}
        onClick={onToggleMute}
        title={model.muteButtonTitle}
        type="button"
      >
        {model.muteButtonLabel}
      </button>
    </div>
  );
}
