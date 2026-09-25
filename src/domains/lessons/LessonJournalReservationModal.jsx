import { canCancelNotificationJob } from "../notifications/notificationJobSelectors.js";
import { getNotificationJobLabel } from "../notifications/notificationCenterConfig.js";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import {
  createLessonJournalAbsenceAlimtalkSectionModel,
  createLessonJournalReservationModalModel
} from "./lessonJournalReservationModalModel.js";
import { isManualAbsenceAlimtalkJob } from "./reservedAbsenceAlimtalkModel.js";
import "./lessonJournalAbsenceAlimtalkSection.css";

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
  lessonStudents,
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
  solapiReservationSyncStatus,
  solapiResultRefreshState,
  students,
  visibleReservationStudents
}) {
  const model = createLessonJournalReservationModalModel({
    // 2026-09-25 · 출결 결석 알림톡은 아래 전용 구획이 건수를 따로 세므로 위 카드·요약에서는 뺀다.
    // 한쪽만 빼면 "취소/실패 1건" 인데 목록이 비는 식으로 카드와 목록이 어긋난다.
    auditedJobCount: auditedLessonNotificationJobs.filter((job) => !isManualAbsenceAlimtalkJob(job)).length,
    canceledJobCount,
    failedJobCount,
    inspectLabel: reservationInspectLabels[reservationInspectMode] ?? "전체 예약",
    reservationAudit,
    reservationInspectMode,
    scheduledParentCount,
    scheduledStudentCount,
    solapiResultRefreshState
  });
  // 출결 결석 알림톡은 학생별 학부모/학생 칸(parent_comment·student_comment)에 들어가지 않아
  // 이 구획이 유일한 수업일지 쪽 확인·취소 자리다.
  const absenceSection = createLessonJournalAbsenceAlimtalkSectionModel({
    auditedJobs: auditedLessonNotificationJobs,
    cancelingReservationJobId,
    lessonStudents,
    students
  });

  function renderReservationStatusCell(job, isMuted = false) {
    if (isMuted) return <span className="reservationStatusCell muted">알림 제외</span>;
    const providerReference = getNotificationJobProviderReference(job);
    const needsContentUpdate = solapiReservationSyncStatus?.staleJobIds?.includes(job?.notificationJobId);
    return (
      <span className="reservationStatusCell">
        <small className="reservationStatusSource">Academy OS 상태</small>
        <span>{needsContentUpdate ? "예약 업데이트 필요" : formatNotificationJobStatus(job)}</span>
        {needsContentUpdate ? <small>현재 저장본과 예약 내용이 다릅니다.</small> : null}
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
        <span aria-live="polite">
          {solapiReservationSyncStatus?.label || model.auditMessage}
          {solapiReservationSyncStatus?.detail ? ` · ${solapiReservationSyncStatus.detail}` : ""}
        </span>
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
          <button className="primaryButton" onClick={onScheduleTodayTwoPm} type="button">
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
      {absenceSection.visible ? (
        <section className="reservationAbsenceSection">
          <div className="reservationAbsenceHeader">
            <strong>{absenceSection.title}</strong>
            <span>{absenceSection.countLabel}</span>
          </div>
          <small className="reservationAbsenceNote">{absenceSection.description}</small>
          <div className="reservationAbsenceList">
            {absenceSection.rows.map((row) => (
              <div className="reservationAbsenceRow" key={row.key}>
                <strong>{row.studentName}</strong>
                {row.outsideRoster ? (
                  <small className="reservationAbsenceOutsideRoster">명단 밖</small>
                ) : null}
                <span>{formatNotificationJobStatus(row.job)}</span>
                {row.showScheduledAtLabel ? <small>{`예약 ${row.scheduledAtLabel}`}</small> : null}
                {row.canCancel ? (
                  <button
                    className="dangerSoftButton compact"
                    disabled={row.isCanceling}
                    onClick={() => onCancelReservationJob(row.job)}
                    type="button"
                  >
                    {row.isCanceling ? "취소 중" : "예약 취소"}
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </section>
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
