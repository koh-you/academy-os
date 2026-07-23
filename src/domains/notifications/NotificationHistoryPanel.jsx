import { AsyncOperationStatus } from "../../shared/components/AsyncOperationStatus.jsx";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
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
  historyDate,
  isHistoryOpen,
  isLoading,
  isShowingAll,
  notificationJobAction,
  notificationJobActionOperationState,
  onCancelJob,
  onChangeHistoryDate,
  onDeleteJob,
  onReconcileSolapiResults,
  onShowAll,
  onToggleHistory,
  solapiResultLastCheckedLabel,
  solapiResultOperationState,
  solapiResultSyncState,
  solapiResultTargetCount,
  studentName
}) {
  return (
    <section className="notificationPanel notificationQueuePanel">
      <SectionHeader
        actions={(
          <>
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
          <label className="notificationHistoryDateFilter">
            <span>조회 날짜</span>
            <input
              aria-label="알림톡 발송 기록 조회 날짜"
              disabled={isLoading}
              onChange={(event) => onChangeHistoryDate(event.target.value)}
              type="date"
              value={historyDate}
            />
          </label>
          {historyDate ? (
            <button className="softButton compact" disabled={isLoading} onClick={() => onChangeHistoryDate("")} type="button">전체 날짜</button>
          ) : null}
          {!isShowingAll ? (
            <button className="softButton compact" onClick={onShowAll} type="button">전체 보기</button>
          ) : null}
          <span className="countBadge">{filteredJobs.length}건</span>
          <button
            aria-controls="notification-history-content"
            aria-expanded={isHistoryOpen}
            className="softButton compact"
            onClick={onToggleHistory}
            type="button"
          >
            {isHistoryOpen ? "접기" : "펼치기"}
          </button>
          </>
        )}
        actionsClassName="notificationQueueActions"
        density="slim"
        eyebrow="NOTIFICATION HISTORY"
        title={`알림톡 발송 기록 · ${historyDate || "전체 날짜"} · ${filterLabel}`}
      />
      {notificationJobAction.message ? (
        <AsyncOperationStatus
          className="notificationJobActionNotice"
          description={notificationJobAction.message}
          label="알림 기록 작업"
          state={notificationJobActionOperationState}
        />
      ) : null}
      <AsyncOperationStatus
        className="noticeSolapiResultNotice"
        description={solapiResultSyncState.message || (
          solapiResultTargetCount
            ? `Solapi 예약/확인필요 알림톡 ${solapiResultTargetCount}건이 있습니다. 버튼을 누르면 모든 알림 유형의 예약 목록을 Solapi 그룹/메시지 결과와 직접 대조해 OS 상태를 갱신합니다.`
            : "Solapi 예약 또는 확인필요 알림톡이 있으면 이곳에서 OS 상태와 직접 대조할 수 있습니다."
        )}
        label="Solapi 결과 대조"
        state={solapiResultOperationState}
      />
      {isHistoryOpen ? (
        <DataTableShell className="notificationTable noticeHistoryTable" id="notification-history-content" label="알림톡 발송 기록">
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
        </DataTableShell>
      ) : (
        <div className="noticeHistoryCollapsedSummary">
          <strong>{filterLabel} {filteredJobs.length}건</strong>
          <span>상세 발송 기록은 펼치면 확인할 수 있습니다.</span>
        </div>
      )}
    </section>
  );
}
