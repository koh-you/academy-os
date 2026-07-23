import { NotificationComposeWorkspace } from "./NotificationComposeWorkspace.jsx";
import { NotificationHistoryPanel } from "./NotificationHistoryPanel.jsx";
import { NoticeWorkspaceTabs } from "./NotificationCenterNavigation.jsx";

export function NotificationNoticeWorkspace({
  activeNoticeWorkspace,
  composeWorkspaceProps,
  historyPanelProps,
  noticeWorkspaceTabsProps
}) {
  return (
    <>
      <NoticeWorkspaceTabs {...noticeWorkspaceTabsProps} />
      {activeNoticeWorkspace === "compose" ? (
        <NotificationComposeWorkspace {...composeWorkspaceProps} />
      ) : null}
      {activeNoticeWorkspace === "history" ? (
        <NotificationHistoryPanel {...historyPanelProps} />
      ) : null}
    </>
  );
}
