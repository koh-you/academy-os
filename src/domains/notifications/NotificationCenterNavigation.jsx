export function NotificationCenterHeader({
  notificationJobsStatus,
  onRefresh,
  pageDescription,
  pageTitle
}) {
  const isLoading = notificationJobsStatus?.state === "loading";
  const noticeClass = notificationJobsStatus?.state === "failed"
    ? "inlineNotice danger"
    : "inlineNotice";

  return (
    <>
      <div className="pageTop">
        <div>
          <h1>{pageTitle}</h1>
          {pageDescription ? <p className="muted">{pageDescription}</p> : null}
        </div>
        <div className="pageActions">
          <button className="softButton" disabled={isLoading} onClick={onRefresh} type="button">
            {isLoading ? "기록 불러오는 중" : "기록 새로고침"}
          </button>
        </div>
      </div>
      {["loading", "failed"].includes(notificationJobsStatus?.state) ? (
        <div className={`${noticeClass} notificationJobsStatusNotice`}>
          <span>{notificationJobsStatus.message}</span>
          {notificationJobsStatus.state === "failed" ? (
            <button className="softButton compact" onClick={onRefresh} type="button">다시 시도</button>
          ) : null}
        </div>
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
        <div className="notificationSectionTabs">
          <button
            className={activeNotificationTab === "notice" ? "active" : ""}
            onClick={() => onSelectNotificationTab("notice")}
            type="button"
          >
            공지 발송
          </button>
          <button
            className={activeNotificationTab === "specialLecture" ? "active" : ""}
            onClick={() => onSelectNotificationTab("specialLecture")}
            type="button"
          >
            특강 안내문
          </button>
        </div>
      ) : null}
      {activeNotificationTab === "specialLecture" && hideNotificationSectionTabs ? (
        <div className="notificationSectionTabs specialLectureTopTabs" role="tablist" aria-label="특강관리 작업 구분">
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
        </div>
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
  pendingCount,
  scheduledCount,
  sentCount
}) {
  const tabs = [
    ["scheduled", "예약", scheduledCount],
    ["sent", "발송 완료", sentCount],
    ["pending", "확인 필요", pendingCount],
    ["all", "전체 기록", managedCount]
  ];

  return (
    <div className="notificationSectionTabs noticeWorkspaceTabs" role="tablist" aria-label="알림관리 작업 구분">
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
          aria-selected={activeNoticeWorkspace === "history" && jobFilter === id}
          className={activeNoticeWorkspace === "history" && jobFilter === id ? "active" : ""}
          key={id}
          onClick={() => onSelectJobFilter(id)}
          role="tab"
          type="button"
        >
          {label} {count}건
        </button>
      ))}
    </div>
  );
}
