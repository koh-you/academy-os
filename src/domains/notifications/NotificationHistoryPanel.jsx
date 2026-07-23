import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { NotificationHistoryRow } from "./NotificationHistoryRow.jsx";

export function NotificationHistoryPanel({
  canCancelJob,
  canDeleteJob,
  canReconcileSolapiResults,
  deletingJobId,
  filteredJobs,
  filterLabel,
  formatJobStatus,
  formatTimeLabel,
  getJobLabel,
  getProviderReference,
  getStatusClass,
  getStatusLabel,
  isHistoryOpen,
  isShowingAll,
  notificationJobAction,
  onCancelJob,
  onDeleteJob,
  onReconcileSolapiResults,
  onShowAll,
  onToggleHistory,
  solapiResultLastCheckedLabel,
  solapiResultSyncState,
  solapiResultTargetCount,
  studentName
}) {
  return (
    <section className="notificationPanel notificationQueuePanel">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">NOTIFICATION HISTORY</p>
          <h2>알림톡 발송 기록 · {filterLabel}</h2>
        </div>
        <div className="notificationQueueActions">
          <span className="solapiResultSyncControl">
            <span>결과 확인 시간</span>
            <strong>{solapiResultLastCheckedLabel}</strong>
          </span>
          <button
            className="softButton compact"
            disabled={!canReconcileSolapiResults || solapiResultSyncState.state === "loading"}
            onClick={onReconcileSolapiResults}
            type="button"
          >
            {solapiResultSyncState.state === "loading" ? "확인 중" : "Solapi 결과 확인"}
          </button>
          {!isShowingAll ? (
            <button className="softButton compact" onClick={onShowAll} type="button">전체 보기</button>
          ) : null}
          <span className="countBadge">{filteredJobs.length}건</span>
          <button
            aria-expanded={isHistoryOpen}
            className="softButton compact"
            onClick={onToggleHistory}
            type="button"
          >
            {isHistoryOpen ? "접기" : "펼치기"}
          </button>
        </div>
      </div>
      {notificationJobAction.message ? (
        <p
          className={[
            "inlineNotice",
            "notificationJobActionNotice",
            notificationJobAction.state === "failed" ? "danger" : "",
            notificationJobAction.state === "saved" ? "ok" : ""
          ].filter(Boolean).join(" ")}
          role="status"
        >
          {notificationJobAction.message}
        </p>
      ) : null}
      <p className={[
        "inlineNotice",
        "noticeSolapiResultNotice",
        solapiResultSyncState.state === "failed" ? "danger" : "",
        solapiResultSyncState.state === "saved" ? "ok" : "",
        solapiResultSyncState.state === "partial" ? "warning" : ""
      ].filter(Boolean).join(" ")}>
        {solapiResultSyncState.message || (
          solapiResultTargetCount
            ? `Solapi 예약/확인필요 알림톡 ${solapiResultTargetCount}건이 있습니다. 버튼을 누르면 모든 알림 유형의 예약 목록을 Solapi 그룹/메시지 결과와 직접 대조해 OS 상태를 갱신합니다.`
            : "Solapi 예약 또는 확인필요 알림톡이 있으면 이곳에서 OS 상태와 직접 대조할 수 있습니다."
        )}
      </p>
      {isHistoryOpen ? (
        <div className="notificationTable noticeHistoryTable">
          <div className="notificationTableHead">
            <span>상태</span>
            <span>종류</span>
            <span>학생</span>
            <span>발송시각</span>
            <span>수신번호</span>
            <span>미리보기</span>
            <span>관리</span>
          </div>
          {filteredJobs.length === 0 ? (
            <EmptyState as="p" className="emptyState">알림톡 발송 기록이 없습니다.</EmptyState>
          ) : (
            filteredJobs.map((job) => (
              <NotificationHistoryRow
                canCancelJob={canCancelJob}
                canDeleteJob={canDeleteJob}
                deletingJobId={deletingJobId}
                formatJobStatus={formatJobStatus}
                formatTimeLabel={formatTimeLabel}
                getJobLabel={getJobLabel}
                getProviderReference={getProviderReference}
                getStatusClass={getStatusClass}
                getStatusLabel={getStatusLabel}
                job={job}
                key={job.notificationJobId}
                onCancelJob={onCancelJob}
                onDeleteJob={onDeleteJob}
                studentName={studentName}
              />
            ))
          )}
        </div>
      ) : (
        <div className="noticeHistoryCollapsedSummary">
          <strong>{filterLabel} {filteredJobs.length}건</strong>
          <span>상세 발송 기록은 펼치면 확인할 수 있습니다.</span>
        </div>
      )}
    </section>
  );
}
