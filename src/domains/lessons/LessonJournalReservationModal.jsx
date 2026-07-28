import { canCancelNotificationJob } from "../notifications/notificationJobSelectors.js";
import { getNotificationJobLabel } from "../notifications/notificationCenterConfig.js";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { createLessonJournalReservationModalModel } from "./lessonJournalReservationModalModel.js";

export function LessonJournalReservationModal({
  auditedLessonNotificationJobs,
  canceledJobCount,
  cancelingReservationJobId,
  canRefreshSolapiResults,
  canScheduleTodayTwoPm,
  createEmptyRecord,
  failedJobCount,
  findLessonStudentRecord,
  formatNotificationJobStatus,
  getNotificationJobProviderReference,
  getStudentReservationStatus,
  hasSolapiResultRefreshTarget,
  issueReservationJobs,
  lesson,
  onCancelReservationJob,
  onClose,
  onRefreshReservationAudit,
  onRefreshSolapiSendResults,
  onScheduleTodayTwoPm,
  onSetReservationInspectMode,
  orphanScheduledJobs,
  records,
  reservationAudit,
  reservationInspectLabels,
  reservationInspectMode,
  scheduledParentCount,
  scheduledStudentCount,
  shouldShowIssueAudit,
  solapiResultRefreshState,
  students,
  visibleReservationStudents
}) {
  const model = createLessonJournalReservationModalModel({
    auditedJobCount: auditedLessonNotificationJobs.length,
    canceledJobCount,
    failedJobCount,
    inspectLabel: reservationInspectLabels[reservationInspectMode] ?? "전체 예약",
    reservationAudit,
    reservationInspectMode,
    scheduledParentCount,
    scheduledStudentCount,
    solapiResultRefreshState
  });

  function renderReservationStatusCell(job, isMuted = false) {
    if (isMuted) return <span className="reservationStatusCell muted">알림 제외</span>;
    const providerReference = getNotificationJobProviderReference(job);
    return (
      <span className="reservationStatusCell">
        <small className="reservationStatusSource">Academy OS 상태</small>
        <span>{formatNotificationJobStatus(job)}</span>
        {providerReference ? <small>Solapi 그룹 · {providerReference}</small> : null}
        {canCancelNotificationJob(job) ? (
          <button
            className="dangerSoftButton compact"
            disabled={cancelingReservationJobId === job.notificationJobId}
            onClick={() => onCancelReservationJob(job)}
            type="button"
          >
            {cancelingReservationJobId === job.notificationJobId ? "취소 중" : "취소"}
          </button>
        ) : null}
      </span>
    );
  }

  return (
    <Modal
      className="reservationStatusModal"
      title="알림톡 예약 확인"
      subtitle={`${lesson.date} · ${lesson.className}`}
      onClose={onClose}
    >
      <div className="reservationSummaryGrid">
        {model.summaryCards.map((card) => (
          <MetricCard
            active={reservationInspectMode === card.mode}
            className="reservationSummaryCard"
            density="compact"
            key={card.mode}
            label={card.label}
            onClick={() => onSetReservationInspectMode(
              reservationInspectMode === card.mode ? "all" : card.mode
            )}
            tone={card.mode === "issues" ? "warning" : "default"}
            value={`${card.count}건`}
          />
        ))}
      </div>
      <div className="reservationModalActions">
        <span>{model.auditMessage}</span>
        <button
          className="softButton compact"
          disabled={reservationAudit.state === "loading"}
          onClick={onRefreshReservationAudit}
          type="button"
        >
          {model.auditRefreshLabel}
        </button>
        {hasSolapiResultRefreshTarget ? (
          <button
            className="softButton compact"
            disabled={!canRefreshSolapiResults}
            onClick={onRefreshSolapiSendResults}
            type="button"
          >
            {model.resultRefreshLabel}
          </button>
        ) : null}
        {model.showAllViewAction ? (
          <button className="softButton compact" onClick={() => onSetReservationInspectMode("all")} type="button">
            전체 보기
          </button>
        ) : null}
        {canScheduleTodayTwoPm ? (
          <button className="sendButton" onClick={onScheduleTodayTwoPm} type="button">
            오늘 14:00 일괄예약
          </button>
        ) : null}
      </div>
      {orphanScheduledJobs.length ? (
        <div className="reservationWarningBox">
          <strong>명단 밖 예약 {orphanScheduledJobs.length}건</strong>
          <span>현재 수업일지 명단에 없는 학생 예약입니다. 확인 후 취소하세요.</span>
          {orphanScheduledJobs.map((job) => (
            <button
              className="dangerSoftButton compact"
              disabled={cancelingReservationJobId === job.notificationJobId}
              key={job.notificationJobId}
              onClick={() => onCancelReservationJob(job)}
              type="button"
            >
              {job.payload?.studentName || job.studentId} · {getNotificationJobLabel(job.notificationType)} 취소
            </button>
          ))}
        </div>
      ) : null}
      <div className="reservationInspectHeader">
        <strong>{model.inspectTitle}</strong>
        <span>{model.inspectSummary}</span>
      </div>
      <DataTableShell className="reservationStatusTable" label="학생별 알림 예약 상태">
        <div className="reservationStatusRow head">
          <span>학생</span>
          <span>학부모</span>
          <span>학생</span>
        </div>
        {visibleReservationStudents.length ? visibleReservationStudents.map((student) => {
          const record = findLessonStudentRecord(records, lesson, student) ?? createEmptyRecord(lesson, student);
          const parentJob = getStudentReservationStatus(student, "parent");
          const studentJob = getStudentReservationStatus(student, "student");
          return (
            <div className="reservationStatusRow" key={student.studentId}>
              <strong>{student.name}</strong>
              {renderReservationStatusCell(parentJob, record.notificationMutedParent)}
              {renderReservationStatusCell(studentJob, record.notificationMutedStudent)}
            </div>
          );
        }) : (
          <EmptyState as="p" className="emptyState compact">해당 조건의 학생 예약이 없습니다.</EmptyState>
        )}
      </DataTableShell>
      {shouldShowIssueAudit ? (
        <section className="reservationIssueList">
          <div className="reservationAuditHeader">
            <strong>OS 취소/실패</strong>
            <span>{issueReservationJobs.length}건</span>
          </div>
          <div className="reservationAuditList">
            {issueReservationJobs.length ? issueReservationJobs.map((job) => (
              <article key={job.notificationJobId}>
                <strong>{job.payload?.studentName || students.find((student) => student.studentId === job.studentId)?.name || job.studentId || "학생"}</strong>
                <span>{getNotificationJobLabel(job.notificationType)} · {formatNotificationJobStatus(job)}</span>
                <small>{job.notificationJobId}</small>
              </article>
            )) : (
              <EmptyState as="p" className="emptyState compact">취소/실패한 OS 예약이 없습니다.</EmptyState>
            )}
          </div>
        </section>
      ) : null}
    </Modal>
  );
}
