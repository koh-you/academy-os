import { createLessonJournalNotificationBarModel } from "./lessonJournalNotificationBarModel.js";

// 발송 상태 pill 묶음. 별도 상단 패널이 아니라 하단 고정바의 상태 영역 안에 들어간다.
export function LessonJournalNotificationBar({
  checkoutMissingStudents,
  notificationPlanMode,
  notificationPlanSummaryText,
  solapiReservationSyncStatus
}) {
  const model = createLessonJournalNotificationBarModel({ checkoutMissingStudents });

  return (
    <div aria-label="알림톡 상태" className="lessonNotificationStatusRow" role="region" tabIndex={0}>
      <span className={`lessonNotificationPlanStatus ${notificationPlanMode}`} title={notificationPlanSummaryText}>
        {notificationPlanSummaryText}
      </span>
      {model.checkoutMissingCount > 0 ? (
        <span className="checkoutMissingSummary" title={model.checkoutMissingTitle}>
          하원 미체크 {model.checkoutMissingCount}명
        </span>
      ) : null}
      <span
        aria-live="polite"
        className={`solapiReservationSync ${solapiReservationSyncStatus.state}`}
        title={solapiReservationSyncStatus.detail}
      >
        {solapiReservationSyncStatus.label}
      </span>
    </div>
  );
}
