import { academyBrandName, noticeWithdrawnClassFilterId } from "../../app/appConfig.js";
import { apiUrl, isRequestTimeoutError, postJsonWithTimeout } from "../../shared/utils/apiClient.js";
import { copyTextToClipboard } from "../exams/outputPreview.js";
import {
  defaultSpecialLectureGuides,
  normalizeSpecialLectureGuide
} from "../specialLectures/specialLectureGuideUtils.js";
import { NotificationCenterHeader, NotificationSectionTabs } from "./NotificationCenterNavigation.jsx";
import { NotificationNoticeWorkspace } from "./NotificationNoticeWorkspace.jsx";
import { ParentResponseContextPanel } from "./ParentResponseContextPanel.jsx";
import {
  getNotificationJobLabel,
  getNotificationStatusLabel,
  noticeMessageTemplates
} from "./notificationCenterConfig.js";
import { canCancelNotificationJob } from "./notificationJobSelectors.js";
import {
  createNotificationNoticeJobRequestBindings,
  deleteNoticeJobRequest,
  polishNoticeMessageRequest
} from "./notificationNoticeApi.js";
import {
  createCancelNoticeJobBinding,
  createReconcileNoticeResultsBinding
} from "./notificationNoticeActions.js";
import { getParentResponseContexts } from "./parentResponseContext.js";
import { useNotificationCenterNavigationState } from "./useNotificationCenterNavigationState.js";
import { useNotificationComposerState } from "./useNotificationComposerState.js";
import { useNotificationHistoryState } from "./useNotificationHistoryState.js";
import { useNotificationRecipientState } from "./useNotificationRecipientState.js";

export function NotificationCenter({
  runtime,
  SpecialLectureNoticePanel,
  aiSettings,
  classTemplates = [],
  compactPageHeader = false,
  hideNotificationSectionTabs = false,
  initialNotificationTab = "notice",
  lessons = [],
  notificationJobs,
  notificationJobsStatus = { state: "idle", message: "" },
  onCancelNotificationJob,
  onCreateSpecialLectureStudent,
  onCreateSpecialLectureLessons,
  onDeleteSpecialLectureApplication,
  onReplaceSpecialLectureStudent,
  onOpenSpecialLectureLesson,
  onRefresh,
  onReconcileSolapiNotificationResults,
  onSaveSpecialLectureEnrollment,
  onSaveSpecialLectureEnrollments,
  onSaveSpecialLectureGuides,
  onSyncSpecialLectureStudentSchedules,
  onUpdateSpecialLectureApplication,
  pageDescription = "",
  pageTitle = "알림관리",
  showSpecialLectureTab = true,
  specialLectureApplications = [],
  specialLectureEnrollments = [],
  specialLectureGuides = defaultSpecialLectureGuides,
  specialLectureGuideSaveState = "idle",
  records = [],
  students = []
}) {
  if (!runtime || typeof SpecialLectureNoticePanel !== "function") {
    throw new Error("NotificationCenter requires App runtime and special lecture panel bindings.");
  }
  const {
    canDeleteNotificationJob,
    defaultAiSettings,
    formatKoreaTimeLabel,
    formatNotificationJobStatus,
    getAiPrompt,
    getKoreaDateString,
    getNotificationJobStatusClass,
    getSolapiNotificationJobProviderReference,
    isNotificationSchedulePast,
    normalizeMessageText,
    normalizePhoneNumber,
    today
  } = runtime;
  const resolvedAiSettings = aiSettings ?? defaultAiSettings;
  const {
    activeNotificationTab,
    activeNoticeWorkspace,
    activeSpecialLectureWorkspaceTab,
    setActiveNotificationTab,
    setActiveNoticeWorkspace,
    setActiveSpecialLectureWorkspaceTab
  } = useNotificationCenterNavigationState({
    initialNotificationTab,
    showSpecialLectureTab
  });
  const commentAiProvider = resolvedAiSettings.commentProvider ?? defaultAiSettings.commentProvider;
  const commentAiModel = resolvedAiSettings.commentModel ?? defaultAiSettings.commentModel;
  const isNotificationJobsLoading = notificationJobsStatus?.state === "loading";
  const {
    archivedJobs,
    deleteNotificationJob,
    deletingJobId,
    failedJobs,
    filteredNotificationJobs,
    filterLabel,
    historyDate,
    isNoticeHistoryOpen,
    jobFilter,
    managedNotificationJobs,
    notificationJobAction,
    pastScheduledJobs,
    pendingJobs,
    scheduledJobs,
    selectJobFilter,
    setDeletingJobId,
    setHistoryDate,
    setIsNoticeHistoryOpen,
    setJobFilter,
    setNotificationJobAction,
    setSolapiResultSyncState,
    sentJobs,
    solapiResultSyncState,
    solapiResultTargets,
    upsertLocalNoticeJob
  } = useNotificationHistoryState({
    canCancelJob: canCancelNotificationJob,
    canDeleteJob: canDeleteNotificationJob,
    confirmDeleteJob: (message) => typeof window === "undefined" || window.confirm(message),
    deleteJob: (notificationJobId) =>
      deleteNoticeJobRequest({
        notificationJobId,
        request: fetch,
        resolveApiUrl: apiUrl
      }),
    getDateString: getKoreaDateString,
    getProviderReference: getSolapiNotificationJobProviderReference,
    initialHistoryDate: today,
    isSchedulePast: isNotificationSchedulePast,
    notificationJobs,
    refreshJobs: (nextDate) => onRefresh?.({ date: nextDate }),
    setActiveWorkspace: setActiveNoticeWorkspace
  });
  const parentResponseContextCount = getParentResponseContexts(managedNotificationJobs, students).length;
  const {
    classFilter,
    clearSelectedStudents,
    getNoticeAudiencePhone,
    noticeRecipients,
    noticeRecipientMode,
    parentRecipientCount,
    searchText,
    selectAllVisibleStudents,
    selectedStudentIds,
    setClassFilter,
    setNoticeRecipientMode,
    setSearchText,
    studentName,
    studentRecipientCount,
    targetAudiences,
    targetStudents,
    toggleStudentSelection,
    visibleNoticeStudents,
    withdrawnStudents
  } = useNotificationRecipientState({
    classTemplates,
    normalizePhoneNumber,
    normalizeSearchText: normalizeMessageText,
    noticeWithdrawnClassFilterId,
    students
  });
  const {
    persistNoticeJob,
    reserveNoticeJob
  } = createNotificationNoticeJobRequestBindings({
    request: postJsonWithTimeout
  });
  const {
    applyNoticeTemplate,
    buildNoticeJob,
    dispatchMessage,
    isPolishingNotice,
    isSendingNotice,
    noticeBody,
    noticeKind,
    noticeSpecialLectureMeta,
    noticeTemplateId,
    noticeText,
    noticeTitle,
    polishNoticeMessage,
    refreshNoticeJobsInBackground,
    scheduleDate,
    scheduleNotice,
    scheduledAt,
    scheduleTime,
    sendNoticeNow,
    setDispatchMessage,
    setIsPolishingNotice,
    setIsSendingNotice,
    setNoticeBody,
    setNoticeKind,
    setNoticeSpecialLectureMeta,
    setNoticeTemplateId,
    setNoticeTitle,
    setScheduleDate,
    setScheduleTime,
    solapiResultLastCheckedLabel,
    solapiResultSyncTargetIds
  } = useNotificationComposerState({
    academyName: academyBrandName,
    aiModel: commentAiModel,
    aiPrompt: getAiPrompt(resolvedAiSettings, "noticeMessage"),
    aiProvider: commentAiProvider,
    formatKoreaTimeLabel,
    isRequestTimeoutError,
    isSchedulePast: isNotificationSchedulePast,
    noticeRecipients,
    persistJob: persistNoticeJob,
    polishMessage: (payload) =>
      polishNoticeMessageRequest({
        payload,
        request: fetch,
        resolveApiUrl: apiUrl
      }),
    refreshJobs: refreshHistoryForDate,
    reportError: (error) => console.error(error),
    reserveJob: reserveNoticeJob,
    sendNotification: (payload) => postJsonWithTimeout(
      "/api/notifications/comment-alimtalk",
      payload,
      45000,
      "알림톡 발송 요청이 45초를 넘었습니다. 실제 발송 여부는 발송 기록 또는 Solapi에서 확인해 주세요."
    ),
    setIsHistoryOpen: setIsNoticeHistoryOpen,
    setJobFilter,
    solapiResultSyncCheckedAt: solapiResultSyncState.checkedAt,
    solapiResultTargets,
    templates: noticeMessageTemplates,
    today,
    upsertLocalJob: upsertLocalNoticeJob
  });
  const reconcileSolapiResultsForNoticeJobs = createReconcileNoticeResultsBinding({
    isLoading: solapiResultSyncState.state === "loading",
    now: () => new Date().toISOString(),
    reconcileResults: onReconcileSolapiNotificationResults,
    refreshJobs: refreshNoticeJobsInBackground,
    resultTargetCount: solapiResultTargets.length,
    setIsHistoryOpen: setIsNoticeHistoryOpen,
    setJobFilter,
    setSyncState: setSolapiResultSyncState,
    syncCheckedAt: solapiResultSyncState.checkedAt,
    targetIds: solapiResultSyncTargetIds
  });
  const cancelNotificationJob = createCancelNoticeJobBinding({
    canCancelJob: canCancelNotificationJob,
    cancelJob: onCancelNotificationJob,
    confirmAction: (message) => typeof window === "undefined" || window.confirm(message),
    deletingJobId,
    refreshJobs: refreshNoticeJobsInBackground,
    setDeletingJobId,
    setIsHistoryOpen: setIsNoticeHistoryOpen,
    setJobAction: setNotificationJobAction,
    setJobFilter,
    upsertLocalJob: upsertLocalNoticeJob
  });

  function refreshHistoryForDate(nextDate = historyDate) {
    Promise.resolve(onRefresh?.({ date: nextDate })).catch((error) => {
      setDispatchMessage((current) =>
        `${current || "알림 기록"} 새로고침 실패: ${error.message}`
      );
    });
  }

  function changeHistoryDate(nextDate) {
    setHistoryDate(nextDate);
    setActiveNoticeWorkspace("history");
    setIsNoticeHistoryOpen(true);
    refreshHistoryForDate(nextDate);
  }
  const notificationJobActionOperationState = {
    failed: "error",
    saved: "success",
    saving: "loading"
  }[notificationJobAction.state] ?? "idle";
  const solapiResultOperationState = {
    failed: "error",
    loading: "loading",
    partial: "partial",
    saved: "success"
  }[solapiResultSyncState.state] ?? "idle";

  function applySpecialLectureGuideToNotice(guide, noticeBodyText, guideUrl) {
    const normalizedGuide = normalizeSpecialLectureGuide(guide);
    setNoticeTemplateId("specialLecture");
    setNoticeKind("special_lecture");
    setNoticeSpecialLectureMeta({
      guideId: normalizedGuide.specialLectureGuideId,
      guideUrl,
      title: normalizedGuide.title,
      audience: normalizedGuide.audience,
      days: normalizedGuide.days,
      time: normalizedGuide.time
    });
    setNoticeTitle(normalizedGuide.title || "특강 안내");
    setNoticeBody(noticeBodyText);
    setActiveNotificationTab("notice");
    setActiveNoticeWorkspace("compose");
    setDispatchMessage("특강 안내문을 저장한 뒤 공지 발송 화면에 반영했습니다. 수신 대상을 확인한 뒤 예약 발송 또는 즉시 발송으로 진행하세요.");
  }

  return (
    <section className={compactPageHeader ? "notificationCenterPage compactPageHeader" : "notificationCenterPage"}>
      <NotificationCenterHeader
        notificationJobsStatus={notificationJobsStatus}
        onRefresh={() => refreshHistoryForDate()}
        pageDescription={pageDescription}
        pageTitle={pageTitle}
      />
      <NotificationSectionTabs
        activeNotificationTab={activeNotificationTab}
        activeSpecialLectureWorkspaceTab={activeSpecialLectureWorkspaceTab}
        hideNotificationSectionTabs={hideNotificationSectionTabs}
        onSelectNotificationTab={setActiveNotificationTab}
        onSelectSpecialLectureWorkspaceTab={setActiveSpecialLectureWorkspaceTab}
        showSpecialLectureTab={showSpecialLectureTab}
      />

      {activeNotificationTab === "specialLecture" ? (
        <SpecialLectureNoticePanel
          activeWorkspaceTab={activeSpecialLectureWorkspaceTab}
          applications={specialLectureApplications}
          enrollments={specialLectureEnrollments}
          guides={specialLectureGuides}
          lessons={lessons}
          notificationJobs={notificationJobs}
          records={records}
          saveState={specialLectureGuideSaveState}
          onApplyToNotice={applySpecialLectureGuideToNotice}
          onCreateStudent={onCreateSpecialLectureStudent}
          onCreateSpecialLectureLessons={onCreateSpecialLectureLessons}
          onDeleteApplication={onDeleteSpecialLectureApplication}
          onReplaceStudent={onReplaceSpecialLectureStudent}
          onOpenLesson={onOpenSpecialLectureLesson}
          onSaveEnrollment={onSaveSpecialLectureEnrollment}
          onSaveEnrollments={onSaveSpecialLectureEnrollments}
          onSaveGuides={onSaveSpecialLectureGuides}
          onSyncSpecialLectureStudentSchedules={onSyncSpecialLectureStudentSchedules}
          onUpdateApplication={onUpdateSpecialLectureApplication}
          students={students}
        />
      ) : (
        <NotificationNoticeWorkspace
          activeNoticeWorkspace={activeNoticeWorkspace}
          composeWorkspaceProps={{
            composerPanelProps: {
              dispatchMessage,
              isPolishingNotice,
              isSendingNotice,
              noticeBody,
              noticeMessageTemplates,
              noticeRecipientCount: noticeRecipients.length,
              noticeTemplateId,
              noticeText,
              noticeTitle,
              onApplyTemplate: applyNoticeTemplate,
              onBodyChange: setNoticeBody,
              onPolishNotice: polishNoticeMessage,
              onScheduleDateChange: setScheduleDate,
              onScheduleNotice: scheduleNotice,
              onScheduleTimeChange: setScheduleTime,
              onSendNoticeNow: sendNoticeNow,
              onTitleChange: setNoticeTitle,
              scheduleDate,
              scheduledAt,
              scheduleTime
            },
            noticeRecipientCount: noticeRecipients.length,
            recipientPanelProps: {
              classFilter,
              classTemplates,
              getAudiencePhone: getNoticeAudiencePhone,
              normalizePhoneNumber,
              noticeRecipientCount: noticeRecipients.length,
              noticeRecipientMode,
              noticeWithdrawnClassFilterId,
              onClassFilterChange: setClassFilter,
              onClearSelectedStudents: clearSelectedStudents,
              onNoticeRecipientModeChange: setNoticeRecipientMode,
              onSearchTextChange: setSearchText,
              onSelectAllVisibleStudents: selectAllVisibleStudents,
              onToggleStudentSelection: toggleStudentSelection,
              parentRecipientCount,
              searchText,
              selectedStudentIds,
              studentRecipientCount,
              targetAudiences,
              targetStudentCount: targetStudents.length,
              visibleStudents: visibleNoticeStudents,
              withdrawnStudentCount: withdrawnStudents.length
            }
          }}
          historyPanelProps={{
            canCancelJob: canCancelNotificationJob,
            canDeleteJob: canDeleteNotificationJob,
            canReconcileSolapiResults: Boolean(onReconcileSolapiNotificationResults && solapiResultSyncTargetIds.length),
            deletingJobId,
            filteredJobs: filteredNotificationJobs,
            filterLabel,
            formatJobStatus: formatNotificationJobStatus,
            formatTimeLabel: formatKoreaTimeLabel,
            getJobLabel: getNotificationJobLabel,
            getProviderReference: getSolapiNotificationJobProviderReference,
            getStatusClass: getNotificationJobStatusClass,
            getStatusLabel: getNotificationStatusLabel,
            historyDate,
            isHistoryOpen: isNoticeHistoryOpen,
            isLoading: isNotificationJobsLoading,
            isShowingAll: jobFilter === "all",
            notificationJobAction,
            notificationJobActionOperationState,
            onCancelJob: cancelNotificationJob,
            onChangeHistoryDate: changeHistoryDate,
            onDeleteJob: deleteNotificationJob,
            onReconcileSolapiResults: reconcileSolapiResultsForNoticeJobs,
            onShowAll: () => setJobFilter("all"),
            onToggleHistory: () => setIsNoticeHistoryOpen((current) => !current),
            solapiResultLastCheckedLabel,
            solapiResultOperationState,
            solapiResultSyncState,
            solapiResultTargetCount: solapiResultTargets.length,
            studentName
          }}
           noticeWorkspaceTabsProps={{
             activeNoticeWorkspace,
             jobFilter,
             managedCount: managedNotificationJobs.length,
             onSelectCompose: () => setActiveNoticeWorkspace("compose"),
             onSelectJobFilter: selectJobFilter,
             onSelectParentContext: () => setActiveNoticeWorkspace("parent_context"),
             parentContextCount: parentResponseContextCount,
             pendingCount: pendingJobs.length,
             scheduledCount: scheduledJobs.length,
             sentCount: sentJobs.length
           }}
           parentResponseContextPanel={(
             <ParentResponseContextPanel
               formatDateTime={formatKoreaTimeLabel}
               notificationJobs={managedNotificationJobs}
               onCopy={copyTextToClipboard}
               students={students}
             />
           )}
         />
      )}
    </section>
  );
}
