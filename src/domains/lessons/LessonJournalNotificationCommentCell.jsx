import { createLessonJournalNotificationCommentCellModel } from "./lessonJournalNotificationCommentCellModel.js";

export function LessonJournalNotificationCommentCell({
  audienceLabel,
  commentState,
  // 알림톡 권한이 없는 계정(협력 교사)에서는 버튼을 잠근다. 숨기지 않는 이유는
  // 나중에 권한을 풀면 그대로 동작해야 하고, 쓰는 사람이 "이 기능이 있긴 하다" 를
  // 알아야 하기 때문이다. 서버도 같이 막고 있다(apiAccessPolicy).
  isAlimtalkLocked = false,
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
        disabled={isAlimtalkLocked}
        onClick={onOpen}
        title={isAlimtalkLocked ? "이 계정에는 알림톡 권한이 없습니다." : undefined}
        type="button"
      >
        {audienceLabel} 알림톡
      </button>
      <small className={model.statusClassName}>
        {statusLabel}
      </small>
      <button
        className={model.muteButtonClassName}
        disabled={isAlimtalkLocked}
        onClick={onToggleMute}
        title={isAlimtalkLocked ? "이 계정에는 알림톡 권한이 없습니다." : model.muteButtonTitle}
        type="button"
      >
        {model.muteButtonLabel}
      </button>
    </div>
  );
}
