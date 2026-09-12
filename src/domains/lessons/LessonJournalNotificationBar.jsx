import { createLessonJournalNotificationBarModel } from "./lessonJournalNotificationBarModel.js";

export function LessonJournalNotificationBar({
  checkoutMissingStudents,
  notificationPlanMode,
  notificationPlanSummaryText,
  solapiReservationSyncStatus
}) {
  const model = createLessonJournalNotificationBarModel({ checkoutMissingStudents });

  return (
    <section className="panel lessonSaveSummary" aria-label="발송 상태">
      <div aria-label="알림톡 상태" className="lessonNotificationStatusRow" role="region" tabIndex={0}>
        <strong>발송 상태</strong>
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
    </section>
  );
}
