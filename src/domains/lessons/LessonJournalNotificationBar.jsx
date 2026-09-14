import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { createLessonJournalNotificationBarModel } from "./lessonJournalNotificationBarModel.js";

// 저장·발송 상태 pill 묶음. 헤더 우상단에 들어간다. 조작 버튼은 갖지 않는다.
export function LessonJournalNotificationBar({
  checkoutMissingStudents,
  journalSaveMessage = "",
  journalSaveState = "idle",
  notificationPlanMode,
  notificationPlanSummaryText,
  solapiReservationSyncStatus
}) {
  const model = createLessonJournalNotificationBarModel({ checkoutMissingStudents });
  // 저장 메시지가 Solapi 상태 pill 과 같은 문구면(라이브 예약 상태를 대신 보여주는 경우) 두 번 쓰지 않는다.
  const showJournalSaveMessage = Boolean(journalSaveMessage) && journalSaveMessage !== solapiReservationSyncStatus.label;

  return (
    <div aria-label="알림톡 상태" className="lessonNotificationStatusRow" role="region" tabIndex={0}>
      <InlineSaveStatus label="수업일지" saveState={journalSaveState} />
      {showJournalSaveMessage ? (
        <span className="lessonJournalSaveStatusMessage" title={journalSaveMessage}>{journalSaveMessage}</span>
      ) : null}
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
