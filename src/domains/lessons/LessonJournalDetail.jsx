import { useEffect } from "react";
import { applyStudentScheduleToLesson } from "../../shared/utils/studentSchedule.js";
import {
  assignmentStatusOptions,
  isAssignmentStatusUnrecorded,
  normalizeAssignmentStatusValue
} from "./assignmentStatus.js";
import { getAttendanceDisplay, hasMissingCheckOut } from "./attendance.js";
import { defaultAttendanceSettings } from "./attendanceSettings.js";
import { LessonJournalClosureNotice } from "./LessonJournalClosureNotice.jsx";
import { LessonJournalAbsenceSourceNotice } from "./LessonJournalAbsenceSourceNotice.jsx";
import { LessonJournalHeader } from "./LessonJournalHeader.jsx";
import { LessonJournalNotificationBar } from "./LessonJournalNotificationBar.jsx";
import { LessonJournalReminderPanel } from "./LessonJournalReminderPanel.jsx";
import { LessonJournalReservationModal } from "./LessonJournalReservationModal.jsx";
import { LessonJournalSaveBar } from "./LessonJournalSaveBar.jsx";
import { LessonJournalStudentPreviewModal } from "./LessonJournalStudentPreviewModal.jsx";
import { LessonJournalStudentRow } from "./LessonJournalStudentRow.jsx";
import { LessonJournalTable } from "./LessonJournalTable.jsx";
import { getLessonJournalEffectiveCommentSendStatus } from "./lessonJournalCommentSendStatus.js";
import { createLessonJournalExpectedReservationItems } from "./lessonJournalExpectedReservationItems.js";
import { selectPreviousLessonMemoContext } from "./lessonJournalPreviousMemoSelector.js";
import { createLessonJournalReservationAuditModel } from "./lessonJournalReservationAuditModel.js";
import { createLessonJournalReservationAuditResult } from "./lessonJournalReservationAuditResult.js";
import { applyCanceledLessonJournalReservationJob } from "./lessonJournalReservationAuditTransitions.js";
import { createLessonJournalReservationControlModel } from "./lessonJournalReservationControlModel.js";
import { createLessonJournalReservationSyncStatus } from "./lessonJournalReservationSyncModel.js";
import { selectLessonJournalHomeworkFollowupContext } from "./lessonJournalPreparationMemoModel.js";
import { isClosureLesson as getIsClosureLesson } from "./lessonClosure.js";
import {
  createLessonNotificationJobId,
  isActiveNotificationJobStatus
} from "./lessonNotificationJobSelectors.js";
import { useLessonJournalDraftController } from "./useLessonJournalDraftController.js";
import { useLessonJournalOverlayState } from "./useLessonJournalOverlayState.js";
import { useLessonJournalReservationState } from "./useLessonJournalReservationState.js";

export function LessonJournalDetail({
  academyReminders = [],
  academyTests = [],
  aiSettings,
  allRecords = [],
  attendanceSettings = defaultAttendanceSettings,
  effects = {},
  integrationStatus,
  homeworks = [],
  lesson,
  lessonNotificationPlan = { mode: "default" },
  lessons,
  materials = [],
  makeupTasks = [],
  onBack,
  onEditLesson,
  onOpenAttendance,
  onOpenExamPrep,
  onOpenReport,
  notificationJobs = [],
  records,
  runtime,
  saveStates,
  students,
  templates = [],
  testAttempts = [],
  testSessions = []
}) {
  const {
    AcademyReminderList,
    academyReminder,
    CommentComposerModal,
    ExamPrepLessonDetail,
    PreparationMemoModal,
    StudentPortalV2,
    SupplementMakeupLessonDetail,
    buildInitialCommentDraft,
    buildLessonReservationPayloadSnapshot,
    createEmptyRecord,
    createLessonStudentRecordId,
    defaultAiSettings,
    findLessonStudentRecord,
    findPreviousLessonForStudent,
    formatKoreaTimeLabel,
    formatLessonTimeRange,
    formatNotificationJobStatus,
    getAcademyRemindersForLesson,
    getCommentButtonState,
    getCommentStatusLabel,
    getDisplayCommentSendStatus,
    getHomeworkFollowupFromRecord,
    getHomeworkFollowupMethodFromRecord,
    getHomeworkFollowupOptionsForAssignmentStatus,
    getHomeworkFollowupPatch,
    getLessonAlimtalkScheduledDate,
    getLessonContent,
    getLessonHomework,
    getLessonJournalStudents,
    getLessonRecordWithPreviousDefaults,
    getLessonReservationPayloadFingerprint,
    getLessonTestResultLines,
    getNotificationJobProviderReference,
    getSolapiNotificationJobProviderReference,
    getStudentSupplementSchedules,
    isExamPrepLesson,
    isLessonAlimtalkScheduleExpired,
    isNotificationSchedulePast,
    isSameLessonGroup,
    isSpecialLectureLesson,
    isSupplementMakeupTaskLesson,
    nestedPanels,
    today
  } = runtime;
  const {
    persistence: {
      onChangeRecord,
      onDeleteLesson,
      onPassMakeupTask,
      onSaveLessonJournalDrafts,
      onSaveRecord,
      onScheduleMakeupTask,
      onToggleStudentNotificationMute,
      onUpdateHomework,
      onUpdateLessonNotificationPlan,
      onUpdateMakeupTask
    } = {},
    provider: {
      loadLessonJournalReservationAudit,
      onApplyLessonNotificationPlan,
      onCancelNotificationJob,
      onPolishComment,
      onReconcileSolapiNotificationResults,
      onScheduleLessonNotificationsAt,
      onSendComment
    } = {}
  } = effects;
  const resolvedAiSettings = aiSettings ?? defaultAiSettings;
  const {
    commentModal,
    editingMemoKey,
    prepMemoModal,
    setCommentModal,
    setEditingMemoKey,
    setPrepMemoModal,
    setStudentPreviewId,
    studentPreviewId
  } = useLessonJournalOverlayState();
  const {
    cancelingReservationJobId,
    reservationApplyState,
    reservationAudit,
    reservationInspectMode,
    reservationModalOpen,
    setCancelingReservationJobId,
    setReservationApplyState,
    setReservationAudit,
    setReservationInspectMode,
    setReservationModalOpen,
    setSolapiResultRefreshState,
    solapiResultRefreshState
  } = useLessonJournalReservationState({
    lessonId: lesson.lessonId,
    notificationPlanMode: lessonNotificationPlan?.mode,
    notificationPlanScheduledAt: lessonNotificationPlan?.scheduledAt
  });
  const commentAiProvider = resolvedAiSettings.commentProvider ?? defaultAiSettings.commentProvider;
  const commentAiModel = resolvedAiSettings.commentModel ?? defaultAiSettings.commentModel;
  const linkedMakeupTask = makeupTasks.find((task) => task.makeupTaskId === lesson.sourceMakeupTaskId || task.linkedLessonId === lesson.lessonId);
  const isClosureLesson = getIsClosureLesson(lesson);
  const notificationPlanMode = isClosureLesson ? "none" : (lessonNotificationPlan?.mode || "default");
  const defaultAlimtalkTimeLabel = formatKoreaTimeLabel(getLessonAlimtalkScheduledDate(lesson, 0, { allowPastFallback: false }));
  const delayedAlimtalkTimeLabel = formatKoreaTimeLabel(getLessonAlimtalkScheduledDate(lesson, 30, { allowPastFallback: false }));
  const isDefaultScheduleExpired = isLessonAlimtalkScheduleExpired(lesson, 0);
  const isDelayedScheduleExpired = isLessonAlimtalkScheduleExpired(lesson, 30);
  const lessonNotificationJobs = notificationJobs.filter((job) => job.lessonId === lesson.lessonId);
  const auditedLessonNotificationJobs = Array.isArray(reservationAudit.osJobs) ? reservationAudit.osJobs : lessonNotificationJobs;
  const todayTwoPmIso = new Date(`${today}T14:00:00+09:00`).toISOString();
  const canScheduleTodayTwoPm = lesson.date < today && Boolean(onScheduleLessonNotificationsAt);
  const lessonStudents = getLessonJournalStudents(lesson, students);
  const isClosureMakeupLesson = lesson.lessonType === "makeup" && lesson.lessonTopic === "휴강 보충";
  const linkedClosureMakeupLesson = isClosureLesson
    ? (Array.isArray(lessons) ? lessons : []).find((item) => item.sourceLabel === `원 휴강 수업 · ${lesson.lessonId}`)
    : null;
  const linkedClosureLesson = isClosureMakeupLesson
    ? (Array.isArray(lessons) ? lessons : []).find((item) => item.sourceLabel === `연결 휴강 보충 · ${lesson.lessonId}`)
    : null;
  const lessonAcademyReminders = getAcademyRemindersForLesson(academyReminders, lesson, lessonStudents);
  const {
    canceledJobCount,
    failedJobCount,
    getStudentReservationStatus,
    issueReservationJobs,
    orphanScheduledJobs,
    reservationInspectLabels,
    scheduledParentCount,
    scheduledStudentCount,
    sentParentCount,
    sentStudentCount,
    shouldShowIssueAudit,
    visibleReservationStudents
  } = createLessonJournalReservationAuditModel({
    auditedJobs: auditedLessonNotificationJobs,
    lessonStudents,
    reservationInspectMode
  });
  const lessonRecordSaveStates = lessonStudents
    .map((student) => saveStates[createLessonStudentRecordId(lesson.lessonId, student.studentId)])
    .filter(Boolean);
  const defaultScheduleHintText = isDefaultScheduleExpired
    ? `기본 예약 시간 지남 · ${defaultAlimtalkTimeLabel}`
    : `기본 예약 ${defaultAlimtalkTimeLabel}`;
  const isLessonNotificationOff = notificationPlanMode === "none";
  const checkoutMissingStudents = isClosureLesson ? [] : lessonStudents.filter((student) => {
    const record = findLessonStudentRecord(records, lesson, student);
    const attendanceLesson = applyStudentScheduleToLesson(lesson, student);
    return hasMissingCheckOut(record, attendanceLesson);
  });
  const isSupplementMakeupLesson = isSupplementMakeupTaskLesson(lesson, linkedMakeupTask);
  const isAbsenceMakeupLesson = isSupplementMakeupLesson && linkedMakeupTask?.taskType === "absence_makeup";
  const isHomeworkMakeupLesson = isSupplementMakeupLesson && linkedMakeupTask?.taskType === "homework_makeup";
  const isExamPrepLessonCurrent = isExamPrepLesson(lesson);

  const {
    applyHomeworkFollowupMethod,
    getEditableRecord,
    getHomeworkDraftTitle,
    handleAssignmentStatusChange,
    hasJournalDraftChanges,
    journalDraftChangeCount,
    journalEditMode,
    journalManualSaveMessage,
    journalStickySaveMessage,
    journalStickySaveState,
    saveJournalDrafts: saveJournalDraftChanges,
    setJournalManualSaveMessage,
    startJournalEditMode: beginJournalEditMode,
    updateJournalHomeworkDraft,
    updateJournalRecordDraft
  } = useLessonJournalDraftController({
    createEmptyRecord,
    createLessonStudentRecordId,
    getHomeworkFollowupOptionsForAssignmentStatus,
    getHomeworkFollowupPatch,
    lesson,
    lessonStudents,
    onSaveLessonJournalDrafts,
    recordSaveStates: lessonRecordSaveStates
  });
  const activeLessonReservationJobs = lessonNotificationJobs.filter(isActiveNotificationJobStatus);
  const solapiResultRefreshTargetJobs = auditedLessonNotificationJobs.filter((job) =>
    job.provider === "solapi" &&
    getNotificationJobProviderReference(job) &&
    (job.status === "send_unconfirmed" || (job.status === "scheduled" && isNotificationSchedulePast(job.scheduledAt, 0)))
  );
  const completedSolapiResultJobs = auditedLessonNotificationJobs.filter((job) =>
    job.provider === "solapi" &&
    getNotificationJobProviderReference(job) &&
    job.status === "sent"
  );
  const failedSolapiResultJobs = auditedLessonNotificationJobs.filter((job) =>
    job.provider === "solapi" &&
    getNotificationJobProviderReference(job) &&
    job.status === "failed"
  );
  const hasSolapiResultRefreshTarget = solapiResultRefreshTargetJobs.length > 0;

  function getExpectedSolapiReservationItems() {
    return createLessonJournalExpectedReservationItems({
      buildPayloadSnapshot: buildLessonReservationPayloadSnapshot,
      createEmptyRecord,
      createNotificationJobId: createLessonNotificationJobId,
      findRecord: findLessonStudentRecord,
      getHomework: getLessonHomework,
      getPayloadFingerprint: getLessonReservationPayloadFingerprint,
      getScheduledDate: getLessonAlimtalkScheduledDate,
      getSupplementSchedules: getStudentSupplementSchedules,
      getTestResultLines: getLessonTestResultLines,
      homeworks,
      lesson,
      lessons,
      makeupTasks,
      notificationPlanMode,
      notificationPlanScheduledAt: lessonNotificationPlan?.scheduledAt,
      notificationTemplates: resolvedAiSettings.notificationTemplates,
      records,
      students: lessonStudents,
      testAttempts,
      testSessions
    });
  }

  const solapiReservationSyncStatus = createLessonJournalReservationSyncStatus({
    activeJobs: activeLessonReservationJobs,
    applyState: reservationApplyState,
    completedResultCount: completedSolapiResultJobs.length,
    failedResultCount: failedSolapiResultJobs.length,
    getExpectedItems: getExpectedSolapiReservationItems,
    getPayloadFingerprint: getLessonReservationPayloadFingerprint,
    getProviderReference: getNotificationJobProviderReference,
    hasDraftChanges: hasJournalDraftChanges,
    hasResultRefreshTarget: hasSolapiResultRefreshTarget,
    isAssignmentStatusUnrecorded,
    isScheduleExpired:
      notificationPlanMode !== "manual" &&
      isLessonAlimtalkScheduleExpired(lesson, notificationPlanMode === "delay30" ? 30 : 0),
    notificationPlanMode,
    notificationPlanScheduledAt: lessonNotificationPlan?.scheduledAt
  });
  const {
    canApplySolapiReservation,
    canRefreshSolapiResults,
    notificationPlanSummaryText,
    solapiApplyButtonLabel,
    solapiResultRefreshTitle
  } = createLessonJournalReservationControlModel({
    defaultScheduleHintText,
    delayedScheduleLabel: delayedAlimtalkTimeLabel,
    formatManualScheduledAt: formatKoreaTimeLabel,
    hasApplyHandler: Boolean(onApplyLessonNotificationPlan),
    hasDraftChanges: hasJournalDraftChanges,
    hasRefreshHandler: Boolean(onReconcileSolapiNotificationResults),
    isDelayedScheduleExpired,
    notificationPlanMode,
    notificationPlanScheduledAt: lessonNotificationPlan?.scheduledAt,
    reservationApplyState,
    resultRefreshState: solapiResultRefreshState,
    resultRefreshTargetCount: solapiResultRefreshTargetJobs.length,
    syncStatus: solapiReservationSyncStatus
  });

  function startJournalEditMode() {
    const firstRecordId = beginJournalEditMode();
    if (firstRecordId) {
      setEditingMemoKey(`${firstRecordId}:lessonMaterial`);
    }
  }

  async function refreshReservationAudit() {
    setReservationAudit((current) => ({ ...current, message: "OS 예약 기록을 조회하는 중입니다.", state: "loading" }));
    try {
      const result = await loadLessonJournalReservationAudit({
        date: lesson.date,
        lessonId: lesson.lessonId
      });
      setReservationAudit(createLessonJournalReservationAuditResult(result));
    } catch (error) {
      setReservationAudit((current) => ({
        ...current,
        message: `OS 예약 기록 조회 실패: ${error.message}`,
        state: "failed"
      }));
    }
  }

  useEffect(() => {
    if (!reservationModalOpen) return;
    refreshReservationAudit().catch((error) => {
      setReservationAudit((current) => ({
        ...current,
        message: `예약 원천 조회 실패: ${error.message}`,
        state: "failed"
      }));
    });
  }, [lesson.date, lesson.lessonId, reservationModalOpen]);

  async function cancelReservationJob(job) {
    if (!job?.notificationJobId || cancelingReservationJobId) return;
    if (typeof window !== "undefined" && !window.confirm("이 알림톡 예약 1건을 취소할까요? 취소한 기록은 이력에 남습니다.")) return;
    setCancelingReservationJobId(job.notificationJobId);
    try {
      const result = await onCancelNotificationJob?.(job, "수업일지 예약 확인에서 취소");
      if (result?.notificationJob) {
        setReservationAudit((currentAudit) =>
          applyCanceledLessonJournalReservationJob({
            currentAudit,
            notificationJob: result.notificationJob
          })
        );
      } else {
        await refreshReservationAudit();
      }
    } catch (error) {
      setReservationAudit((current) => ({ ...current, message: `예약 취소 실패: ${error.message}`, state: "failed" }));
    } finally {
      setCancelingReservationJobId("");
    }
  }

  if (isHomeworkMakeupLesson) {
    return (
      <SupplementMakeupLessonDetail
        runtime={nestedPanels}
        attendanceSettings={attendanceSettings}
        homeworks={homeworks}
        lesson={lesson}
        lessons={lessons}
        onDeleteLesson={onDeleteLesson}
        onEditLesson={onEditLesson}
        onOpenAttendance={onOpenAttendance}
        onPassTask={onPassMakeupTask}
        onScheduleTask={onScheduleMakeupTask}
        onUpdateTask={onUpdateMakeupTask}
        records={records}
        students={students}
        task={linkedMakeupTask}
      />
    );
  }
  if (isExamPrepLessonCurrent) {
    return (
      <ExamPrepLessonDetail
        createEmptyRecord={createEmptyRecord}
        lesson={lesson}
        onDeleteLesson={onDeleteLesson}
        onEditLesson={onEditLesson}
        students={students}
      />
    );
  }
  function openCommentComposer(audience, targetStudent, baseRecord, previousHomework, nextHomework) {
    const field = audience === "student" ? "studentComment" : "teacherComment";
    const supplementSchedules = getStudentSupplementSchedules(makeupTasks, targetStudent.studentId, { lesson, mode: "lesson_comment" });
    const testResultLines = getLessonTestResultLines(testSessions, testAttempts, lesson, targetStudent);
    const draft = buildInitialCommentDraft({
      audience,
      existingComment: baseRecord?.[field] ?? "",
      record: baseRecord,
      supplementSchedules
    });
    setCommentModal({
      audience,
      initialCommentDraft: draft,
      nextHomework,
      previousHomework,
      record: baseRecord,
      student: targetStudent,
      supplementSchedules,
      testResultLines
    });
  }

  function getCommentModalRecord() {
    if (!commentModal) return null;
    const recordId = createLessonStudentRecordId(lesson.lessonId, commentModal.student.studentId);
    return records.find((item) => item.lessonStudentRecordId === recordId) ?? commentModal.record;
  }

  async function saveJournalDrafts() {
    const saved = await saveJournalDraftChanges();
    if (saved?.ok) setReservationApplyState("idle");
  }

  async function applySolapiReservationPlan() {
    if (!onApplyLessonNotificationPlan || hasJournalDraftChanges) return;
    setReservationApplyState("applying");
    const result = await onApplyLessonNotificationPlan(lesson.lessonId);
    if (result?.ok === false) {
      setReservationApplyState("failed");
      setJournalManualSaveMessage(`Solapi 반영 실패 · ${result.error || "예약 확인 필요"}`);
      return;
    }
    setReservationApplyState("saved");
    setJournalManualSaveMessage(notificationPlanMode === "none" ? "Solapi 취소 반영 완료" : "Solapi 예약 반영 완료");
  }

  async function refreshSolapiSendResults() {
    if (!canRefreshSolapiResults) return;
    setSolapiResultRefreshState("loading");
    setJournalManualSaveMessage("솔라피 발송결과 · 확인 중");
    try {
      const result = await onReconcileSolapiNotificationResults?.({ date: lesson.date, lessonId: lesson.lessonId });
      setSolapiResultRefreshState("saved");
      setJournalManualSaveMessage(`솔라피 발송결과 · ${result?.updatedCount ?? 0}건 반영`);
      if (reservationModalOpen) {
        await refreshReservationAudit();
      }
    } catch (error) {
      setSolapiResultRefreshState("failed");
      setJournalManualSaveMessage(`솔라피 발송결과 실패 · ${error.message}`);
    }
  }

  function getEffectiveCommentSendStatus(record, student, target) {
    return getLessonJournalEffectiveCommentSendStatus({
      formatJobStatus: formatNotificationJobStatus,
      getDisplayStatus: getDisplayCommentSendStatus,
      getReservationStatus: getStudentReservationStatus,
      record,
      student,
      target
    });
  }

  return (
    <section className="lessonJournalPage">
      <LessonJournalHeader
        formatLessonTimeRange={formatLessonTimeRange}
        lesson={lesson}
        onBack={onBack}
        onDeleteLesson={onDeleteLesson}
        onEditLesson={onEditLesson}
        onOpenExamPrep={onOpenExamPrep}
        studentCount={lessonStudents.length}
      />

      {isAbsenceMakeupLesson ? (
        <LessonJournalAbsenceSourceNotice
          lesson={lesson}
          lessons={lessons}
          records={records}
          task={linkedMakeupTask}
        />
      ) : null}

      <LessonJournalClosureNotice
        formatLessonTimeRange={formatLessonTimeRange}
        isClosureLesson={isClosureLesson}
        isClosureMakeupLesson={isClosureMakeupLesson}
        linkedClosureLesson={linkedClosureLesson}
        linkedClosureMakeupLesson={linkedClosureMakeupLesson}
      />

      <LessonJournalReminderPanel reminderCount={lessonAcademyReminders.length}>
        <AcademyReminderList runtime={academyReminder} reminders={lessonAcademyReminders} students={students} templates={templates} />
      </LessonJournalReminderPanel>

      <LessonJournalNotificationBar
        canApplySolapiReservation={canApplySolapiReservation}
        canRefreshSolapiResults={canRefreshSolapiResults}
        checkoutMissingStudents={checkoutMissingStudents}
        defaultAlimtalkTimeLabel={defaultAlimtalkTimeLabel}
        delayedAlimtalkTimeLabel={delayedAlimtalkTimeLabel}
        formatKoreaTimeLabel={formatKoreaTimeLabel}
        hasSolapiResultRefreshTarget={hasSolapiResultRefreshTarget}
        isClosureLesson={isClosureLesson}
        isDefaultScheduleExpired={isDefaultScheduleExpired}
        isDelayedScheduleExpired={isDelayedScheduleExpired}
        journalEditMode={journalEditMode}
        lessonId={lesson.lessonId}
        lessonNotificationPlan={lessonNotificationPlan}
        notificationPlanMode={notificationPlanMode}
        notificationPlanSummaryText={notificationPlanSummaryText}
        onApplySolapiReservationPlan={applySolapiReservationPlan}
        onOpenReservationAudit={() => {
          setReservationInspectMode("all");
          setReservationModalOpen(true);
        }}
        onRefreshSolapiSendResults={refreshSolapiSendResults}
        onStartJournalEditMode={startJournalEditMode}
        onUpdateLessonNotificationPlan={onUpdateLessonNotificationPlan}
        reservationApplyState={reservationApplyState}
        solapiApplyButtonLabel={solapiApplyButtonLabel}
        solapiReservationSyncStatus={solapiReservationSyncStatus}
        solapiResultRefreshState={solapiResultRefreshState}
        solapiResultRefreshTitle={solapiResultRefreshTitle}
      />

      {reservationModalOpen ? (
        <LessonJournalReservationModal
          auditedLessonNotificationJobs={auditedLessonNotificationJobs}
          canceledJobCount={canceledJobCount}
          cancelingReservationJobId={cancelingReservationJobId}
          canRefreshSolapiResults={canRefreshSolapiResults}
          canScheduleTodayTwoPm={canScheduleTodayTwoPm}
          createEmptyRecord={createEmptyRecord}
          failedJobCount={failedJobCount}
          findLessonStudentRecord={findLessonStudentRecord}
          formatNotificationJobStatus={formatNotificationJobStatus}
          getNotificationJobProviderReference={getSolapiNotificationJobProviderReference}
          getStudentReservationStatus={getStudentReservationStatus}
          hasSolapiResultRefreshTarget={hasSolapiResultRefreshTarget}
          issueReservationJobs={issueReservationJobs}
          lesson={lesson}
          onCancelReservationJob={cancelReservationJob}
          onClose={() => setReservationModalOpen(false)}
          onRefreshReservationAudit={refreshReservationAudit}
          onRefreshSolapiSendResults={refreshSolapiSendResults}
          onScheduleTodayTwoPm={() => onScheduleLessonNotificationsAt?.(lesson.lessonId, todayTwoPmIso)}
          onSetReservationInspectMode={setReservationInspectMode}
          orphanScheduledJobs={orphanScheduledJobs}
          records={records}
          reservationAudit={reservationAudit}
          reservationInspectLabels={reservationInspectLabels}
          reservationInspectMode={reservationInspectMode}
          scheduledParentCount={scheduledParentCount}
          scheduledStudentCount={scheduledStudentCount}
          shouldShowIssueAudit={shouldShowIssueAudit}
          solapiResultRefreshState={solapiResultRefreshState}
          students={students}
          visibleReservationStudents={visibleReservationStudents}
        />
      ) : null}

      <LessonJournalTable isEditMode={journalEditMode}>
          {lessonStudents.map((student) => {
            const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
            const persistedRecord = findLessonStudentRecord(records, lesson, student) ?? createEmptyRecord(lesson, student);
            const editableRecord = getEditableRecord(recordId, persistedRecord);
            const attendanceLesson = applyStudentScheduleToLesson(lesson, student);
            const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons, allRecords);
            const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
            const previousHomeworkTitle = getHomeworkDraftTitle(student, "previous", previousHomework);
            const nextHomeworkTitle = getHomeworkDraftTitle(student, "next", nextHomework);
            const effectivePreviousHomework = previousHomeworkTitle !== (previousHomework?.title ?? "")
              ? { ...(previousHomework ?? {}), title: previousHomeworkTitle }
              : previousHomework;
            const effectiveNextHomework = nextHomeworkTitle !== (nextHomework?.title ?? "")
              ? { ...(nextHomework ?? {}), title: nextHomeworkTitle }
              : nextHomework;
            const previousMemoContext = selectPreviousLessonMemoContext({
              allRecords,
              currentLesson: lesson,
              findPreviousLessonForStudent,
              isClosureLesson: getIsClosureLesson,
              isSameLessonGroup,
              isSpecialLectureLesson,
              lessons,
              records,
              student
            });
            const previousRecord = previousMemoContext.previousRecord;
            const previousEditableRecord = previousMemoContext.previousEditableRecord ?? previousRecord;
            const record = getLessonRecordWithPreviousDefaults(editableRecord, previousEditableRecord);
            const attendanceDisplay = isClosureLesson
              ? { detail: "", label: "휴강", statusClass: "pending" }
              : getAttendanceDisplay(record, attendanceLesson, attendanceSettings.lateGraceMinutes);
            const checkoutMissing = !isClosureLesson && hasMissingCheckOut(record, attendanceLesson);
            const previousMemoRecord = previousMemoContext.previousMemoRecord;
            const referenceRecord = previousMemoContext.referenceRecord;
            const previousLessonMaterial = previousEditableRecord?.lessonMaterial?.trim() ?? "";
            const previousLessonContent = getLessonContent(previousEditableRecord);
            const previousPreparationMemo = previousMemoRecord?.preparationMemo?.trim() ?? "";
            const referencePreparationMemo = referenceRecord?.preparationMemo?.trim() ?? "";
            const homeworkFollowupContext = selectLessonJournalHomeworkFollowupContext({
              getHomeworkFollowup: getHomeworkFollowupFromRecord,
              previousRecord,
              referenceRecord
            });
            const parentCommentSendStatus = getEffectiveCommentSendStatus(record, student, "parent");
            const studentCommentSendStatus = getEffectiveCommentSendStatus(record, student, "student");
            const parentCommentState = getCommentButtonState(record.teacherComment, parentCommentSendStatus);
            const studentCommentState = getCommentButtonState(record.studentComment, studentCommentSendStatus);
            const assignmentStatusValue = normalizeAssignmentStatusValue(record.assignmentStatus ?? record.incompleteHomework ?? "");
            const homeworkFollowupOptions = getHomeworkFollowupOptionsForAssignmentStatus(assignmentStatusValue);
            const selectedHomeworkFollowupMethod = getHomeworkFollowupMethodFromRecord(record);

            return (
              <LessonJournalStudentRow
                assignmentStatusCellProps={{
                  assignmentStatusAriaLabel: `${student.name} 숙제 상태`,
                  assignmentStatusOptions,
                  assignmentStatusValue,
                  homeworkFollowupOptions,
                  journalEditMode,
                  onApplyHomeworkFollowupMethod: (method) =>
                    applyHomeworkFollowupMethod(student, record, effectivePreviousHomework, method),
                  onAssignmentStatusChange: (value) =>
                    handleAssignmentStatusChange(student, record, effectivePreviousHomework, value),
                  previousHomeworkTitle: effectivePreviousHomework?.title,
                  selectedHomeworkFollowupMethod
                }}
                attendanceButtonProps={{
                  attendanceDisplay,
                  attendanceLesson,
                  checkoutMissing,
                  isClosureLesson,
                  onOpenAttendance,
                  record,
                  student
                }}
                editableFieldsProps={{
                  editingMemoKey,
                  journalEditMode,
                  nextHomeworkTitle,
                  onEdit: setEditingMemoKey,
                  onUpdateHomeworkDraft: (homeworkType, value) =>
                    updateJournalHomeworkDraft(student, homeworkType, value),
                  onUpdateRecordDraft: (field, value) =>
                    updateJournalRecordDraft(student, record, field, value),
                  previousHomeworkTitle,
                  previousLessonContent,
                  previousLessonMaterial,
                  record,
                  recordId,
                  student
                }}
                key={student.studentId}
                parentNotificationCommentProps={{
                  audienceLabel: "학부모",
                  commentState: parentCommentState,
                  isLessonNotificationOff,
                  isNotificationMuted: record.notificationMutedParent,
                  onOpen: () =>
                    openCommentComposer("parent", student, record, effectivePreviousHomework, effectiveNextHomework),
                  onToggleMute: () => onToggleStudentNotificationMute?.(lesson, student, "parent"),
                  statusLabel: getCommentStatusLabel(record.teacherComment, parentCommentSendStatus)
                }}
                prepMemoButtonProps={{
                  acknowledgedMemoCutoffDate: previousMemoContext.acknowledgedMemoCutoffDate,
                  onOpen: () => setPrepMemoModal({
                    acknowledgedMemoCutoff: previousMemoContext.acknowledgedMemoCutoff,
                    homeworkFollowup: homeworkFollowupContext.followup,
                    homeworkFollowupRecord: homeworkFollowupContext.sourceRecord,
                    nextHomework,
                    previousHomework,
                    previousMemoRecord,
                    previousRecord,
                    record,
                    referenceRecord,
                    student
                  }),
                  preparationMemo: record.preparationMemo,
                  prepParentVisible: record.prepParentVisible,
                  prepStudentVisible: record.prepStudentVisible,
                  previousPreparationMemo,
                  referencePreparationMemo,
                  studentName: student.name
                }}
                studentIdentityProps={{
                  attendanceLesson,
                  onOpenStudentPreview: setStudentPreviewId,
                  student
                }}
                studentNotificationCommentProps={{
                  audienceLabel: "학생",
                  commentState: studentCommentState,
                  isLessonNotificationOff,
                  isNotificationMuted: record.notificationMutedStudent,
                  onOpen: () =>
                    openCommentComposer("student", student, record, effectivePreviousHomework, effectiveNextHomework),
                  onToggleMute: () => onToggleStudentNotificationMute?.(lesson, student, "student"),
                  statusLabel: getCommentStatusLabel(record.studentComment, studentCommentSendStatus)
                }}
              />
            );
          })}
      </LessonJournalTable>

      <LessonJournalSaveBar
        hasDraftChanges={hasJournalDraftChanges}
        isEditMode={journalEditMode}
        manualSaveMessage={journalManualSaveMessage}
        message={journalStickySaveMessage}
        onSave={saveJournalDrafts}
        saveState={journalStickySaveState}
      />

      {commentModal ? (
        <CommentComposerModal
          aiModel={commentAiModel}
          aiProvider={commentAiProvider}
          audience={commentModal.audience}
          integrationStatus={integrationStatus}
          initialCommentDraft={commentModal.initialCommentDraft}
          initialSendTiming={notificationPlanMode}
          lesson={lesson}
          onChangeRecord={onChangeRecord}
          onClose={() => setCommentModal(null)}
          onPolishComment={onPolishComment}
          onSaveRecord={onSaveRecord}
          onSendComment={onSendComment}
          record={getCommentModalRecord()}
          saveState={saveStates[createLessonStudentRecordId(lesson.lessonId, commentModal.student.studentId)] ?? "idle"}
          nextHomework={commentModal.nextHomework}
          notificationTemplates={resolvedAiSettings.notificationTemplates}
          previousHomework={commentModal.previousHomework}
          student={commentModal.student}
          supplementSchedules={commentModal.supplementSchedules}
          testResultLines={commentModal.testResultLines}
        />
      ) : null}

      {prepMemoModal ? (
        <PreparationMemoModal
          runtime={nestedPanels}
          acknowledgedMemoCutoff={prepMemoModal.acknowledgedMemoCutoff}
          homeworkFollowup={prepMemoModal.homeworkFollowup}
          homeworkFollowupRecord={prepMemoModal.homeworkFollowupRecord}
          homeworkFollowupLesson={prepMemoModal.homeworkFollowupRecord ? lessons.find((item) => item.lessonId === prepMemoModal.homeworkFollowupRecord.lessonId) : null}
          lesson={lesson}
          onChangeRecord={onChangeRecord}
          onClose={() => setPrepMemoModal(null)}
          onSaveRecord={onSaveRecord}
          record={
            records.find((item) =>
              item.lessonStudentRecordId === createLessonStudentRecordId(lesson.lessonId, prepMemoModal.student.studentId)
            ) ?? prepMemoModal.record
          }
          saveState={saveStates[createLessonStudentRecordId(lesson.lessonId, prepMemoModal.student.studentId)] ?? "idle"}
          student={prepMemoModal.student}
          previousRecord={prepMemoModal.previousMemoRecord}
          previousLesson={prepMemoModal.previousMemoRecord ? lessons.find((item) => item.lessonId === prepMemoModal.previousMemoRecord.lessonId) : null}
          referenceRecord={prepMemoModal.referenceRecord}
          referenceLesson={prepMemoModal.referenceRecord ? lessons.find((item) => item.lessonId === prepMemoModal.referenceRecord.lessonId) : null}
        />
      ) : null}

      <LessonJournalStudentPreviewModal
        PortalComponent={StudentPortalV2}
        homeworks={homeworks}
        lessons={lessons}
        makeupTasks={makeupTasks}
        materials={materials}
        onClose={() => setStudentPreviewId("")}
        records={records}
        studentPreviewId={studentPreviewId}
        students={students}
      />
    </section>
  );
}
