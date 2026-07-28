import { createLessonJournalNotificationBarModel } from "./lessonJournalNotificationBarModel.js";

export function LessonJournalNotificationBar({
  canApplySolapiReservation,
  canRefreshSolapiResults,
  checkoutMissingStudents,
  defaultAlimtalkTimeLabel,
  delayedAlimtalkTimeLabel,
  formatKoreaTimeLabel,
  hasSolapiResultRefreshTarget,
  isClosureLesson,
  isDefaultScheduleExpired,
  isDelayedScheduleExpired,
  journalEditMode,
  lessonId,
  lessonNotificationPlan,
  notificationPlanMode,
  notificationPlanSummaryText,
  onApplySolapiReservationPlan,
  onOpenReservationAudit,
  onRefreshSolapiSendResults,
  onStartJournalEditMode,
  onUpdateLessonNotificationPlan,
  reservationApplyState,
  solapiApplyButtonLabel,
  solapiReservationSyncStatus,
  solapiResultRefreshState,
  solapiResultRefreshTitle
}) {
  const model = createLessonJournalNotificationBarModel({
    canApplySolapiReservation,
    checkoutMissingStudents,
    hasSolapiResultRefreshTarget,
    journalEditMode,
    reservationApplyState,
    solapiResultRefreshState
  });

  return (
    <section className="panel lessonSaveSummary" aria-label="발송 상태와 작업">
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
      <div aria-label="알림톡 예약 작업" className="lessonNotificationActionRow" role="region" tabIndex={0}>
        {model.showEditAction ? (
          <button className="schedulePlanButton" onClick={onStartJournalEditMode} type="button">
            수정 시작
          </button>
        ) : null}
        <label className="lessonNotificationPlanSelect">
          <span>예약 설정</span>
          <select
            aria-label="알림톡 예약 설정"
            disabled={isClosureLesson}
            onChange={(event) => onUpdateLessonNotificationPlan?.(lessonId, event.target.value)}
            value={notificationPlanMode}
          >
            {notificationPlanMode === "manual" ? (
              <option value="manual">수동 예약 · {lessonNotificationPlan?.scheduledAt ? formatKoreaTimeLabel(lessonNotificationPlan.scheduledAt) : "시각 미정"}</option>
            ) : null}
            <option disabled={isDefaultScheduleExpired} value="default">기본 예약 · {defaultAlimtalkTimeLabel}</option>
            <option disabled={isDelayedScheduleExpired} value="delay30">30분 지연 · {delayedAlimtalkTimeLabel}</option>
            <option value="none">알림톡 없음</option>
          </select>
        </label>
        <button className="schedulePlanButton check" onClick={onOpenReservationAudit} type="button">
          예약 확인
        </button>
        {model.showRefreshAction ? (
          <button
            className={solapiResultRefreshState === "failed" ? "dangerSoftButton" : "schedulePlanButton check"}
            disabled={!canRefreshSolapiResults}
            onClick={onRefreshSolapiSendResults}
            title={solapiResultRefreshTitle}
            type="button"
          >
            {model.refreshButtonLabel}
          </button>
        ) : null}
        {model.showApplyAction ? (
          <button
            className="sendButton"
            disabled={!canApplySolapiReservation}
            onClick={onApplySolapiReservationPlan}
            type="button"
          >
            {solapiApplyButtonLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
}
