import { copyTextToClipboard } from "../exams/outputPreview.js";
import { defaultSpecialLectureGuides } from "../specialLectures/specialLectureGuideUtils.js";
import { NotificationCenterHeader, NotificationSectionTabs } from "./NotificationCenterNavigation.jsx";
import { NotificationNoticeWorkspace } from "./NotificationNoticeWorkspace.jsx";
import { ParentResponseContextPanel } from "./ParentResponseContextPanel.jsx";
import { useNotificationCenterNavigationState } from "./useNotificationCenterNavigationState.js";
import { useNotificationNoticeController } from "./useNotificationNoticeController.js";

export function NotificationCenter({
  runtime,
  SpecialLectureNoticePanel,
  aiSettings,
  classTemplates = [],
  compactPageHeader = false,
  effects = {},
  hideNotificationSectionTabs = false,
  initialNotificationTab = "notice",
  lessons = [],
  notificationJobs,
  notificationJobsStatus = { state: "idle", message: "" },
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
    specialLecturePersistence: {
      onCreateSpecialLectureStudent,
      onReplaceSpecialLectureStudent,
      onSaveSpecialLectureEnrollment,
      onSaveSpecialLectureEnrollments,
      onSaveSpecialLectureGuides,
      onSyncSpecialLectureStudentSchedules,
      onUpdateSpecialLectureApplication
    } = {},
    specialLectureDeletion: {
      onDeleteSpecialLectureApplication
    } = {},
    specialLectureOrchestration: {
      onCreateSpecialLectureLessons
    } = {},
    specialLectureNavigation: {
      onOpenSpecialLectureLesson
    } = {}
  } = effects;
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
  const {
    applySpecialLectureGuideToNotice,
    composeWorkspaceProps,
    formatKoreaTimeLabel,
    historyPanelProps,
    managedNotificationJobs,
    noticeWorkspaceTabsProps,
    refreshHistoryForDate
  } = useNotificationNoticeController({
    activeNoticeWorkspace,
    aiSettings,
    notificationJobs,
    classTemplates,
    effects,
    notificationJobsStatus,
    runtime,
    setActiveNotificationTab,
    setActiveNoticeWorkspace,
    students
  });

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
          composeWorkspaceProps={composeWorkspaceProps}
          historyPanelProps={historyPanelProps}
          noticeWorkspaceTabsProps={noticeWorkspaceTabsProps}
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
