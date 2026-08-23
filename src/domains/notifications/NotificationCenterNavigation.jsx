import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";

export function NotificationCenterHeader({
  notificationJobsStatus,
  onRefresh,
  pageDescription,
  pageTitle
}) {
  const isLoading = notificationJobsStatus?.state === "loading";

  return (
    <>
      <PageHeader
        actions={(
          <button className="softButton" disabled={isLoading} onClick={onRefresh} type="button">
            {isLoading ? "기록 불러오는 중" : "기록 새로고침"}
          </button>
        )}
        description={pageDescription}
        title={pageTitle}
      />
      {["loading", "failed"].includes(notificationJobsStatus?.state) ? (
        <EmptyState
          action={notificationJobsStatus.state === "failed" ? (
            <button className="softButton compact" onClick={onRefresh} type="button">다시 시도</button>
          ) : null}
          aria-busy={isLoading ? "true" : undefined}
          aria-live="polite"
          className="inlineNotice notificationJobsStatusNotice"
          role={notificationJobsStatus.state === "failed" ? "alert" : "status"}
          title={notificationJobsStatus.message || (isLoading ? "알림 기록을 불러오는 중입니다." : "알림 기록을 불러오지 못했습니다.")}
          tone={notificationJobsStatus.state === "failed" ? "error" : "loading"}
        />
      ) : null}
    </>
  );
}

export function NotificationSectionTabs({
  activeNotificationTab,
  activeSpecialLectureWorkspaceTab,
  hideNotificationSectionTabs,
  onSelectNotificationTab,
  onSelectSpecialLectureWorkspaceTab,
  showSpecialLectureTab
}) {
  return (
    <>
      {showSpecialLectureTab && !hideNotificationSectionTabs ? (
        <WorkspaceTabs label="알림관리 영역 선택">
          <button
            aria-selected={activeNotificationTab === "notice"}
            className={activeNotificationTab === "notice" ? "active" : ""}
            onClick={() => onSelectNotificationTab("notice")}
            role="tab"
            type="button"
          >
            공지 발송
          </button>
          <button
            aria-selected={activeNotificationTab === "specialLecture"}
            className={activeNotificationTab === "specialLecture" ? "active" : ""}
            onClick={() => onSelectNotificationTab("specialLecture")}
            role="tab"
            type="button"
          >
            특강 안내문
          </button>
        </WorkspaceTabs>
      ) : null}
      {activeNotificationTab === "specialLecture" && hideNotificationSectionTabs ? (
        <WorkspaceTabs className="specialLectureTopTabs" label="특강관리 작업 구분">
          <button
            aria-selected={activeSpecialLectureWorkspaceTab === "roster"}
            className={activeSpecialLectureWorkspaceTab === "roster" ? "active" : ""}
            onClick={() => onSelectSpecialLectureWorkspaceTab("roster")}
            role="tab"
            type="button"
          >
            특강 수업
          </button>
          <button
            aria-selected={activeSpecialLectureWorkspaceTab === "guide"}
            className={activeSpecialLectureWorkspaceTab === "guide" ? "active" : ""}
            onClick={() => onSelectSpecialLectureWorkspaceTab("guide")}
            role="tab"
            type="button"
          >
            특강 안내문
          </button>
        </WorkspaceTabs>
      ) : null}
    </>
  );
}

export function NoticeWorkspaceTabs({
  activeNoticeWorkspace,
  jobFilter,
  managedCount,
  onSelectCompose,
  onSelectJobFilter,
  onSelectParentContext,
  parentContextCount,
  pendingCount,
  scheduledCount,
  sentCount
}) {
  const tabs = [
    ["parent_context", "학부모 응대", parentContextCount],
    ["scheduled", "예약", scheduledCount],
    ["sent", "발송 완료", sentCount],
    ["pending", "확인 필요", pendingCount],
    ["all", "전체 기록", managedCount]
  ];

  return (
    <WorkspaceTabs className="noticeWorkspaceTabs" label="알림관리 작업 구분">
      <button
        aria-selected={activeNoticeWorkspace === "compose"}
        className={activeNoticeWorkspace === "compose" ? "active" : ""}
        onClick={onSelectCompose}
        role="tab"
        type="button"
      >
        개별 발송
      </button>
      {tabs.map(([id, label, count]) => (
        <button
          aria-selected={id === "parent_context" ? activeNoticeWorkspace === "parent_context" : activeNoticeWorkspace === "history" && jobFilter === id}
          className={id === "parent_context" ? activeNoticeWorkspace === "parent_context" ? "active" : "" : activeNoticeWorkspace === "history" && jobFilter === id ? "active" : ""}
          key={id}
          onClick={() => id === "parent_context" ? onSelectParentContext() : onSelectJobFilter(id)}
          role="tab"
          type="button"
        >
          {label} {count}건
        </button>
      ))}
    </WorkspaceTabs>
  );
}
