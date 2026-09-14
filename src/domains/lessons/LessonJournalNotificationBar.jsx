import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { createLessonJournalNotificationBarModel } from "./lessonJournalNotificationBarModel.js";

// 저장·발송 상태 pill 묶음. 헤더 우상단에 들어간다. 조작 버튼은 갖지 않는다.
// 저장 상태는 InlineSaveStatus pill 하나로만 보여준다(저장 메시지 텍스트를 옆에 또 쓰면 중복).
export function LessonJournalNotificationBar({
  checkoutMissingStudents,
  journalSaveState = "idle",
  notificationPlanMode,
  notificationPlanSummaryText,
  solapiReservationSyncStatus
}) {
  const model = createLessonJournalNotificationBarModel({ checkoutMissingStudents });

  return (
    <div aria-label="알림톡 상태" className="lessonNotificationStatusRow" role="region" tabIndex={0}>
      <InlineSaveStatus label="수업일지" saveState={journalSaveState} />
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
