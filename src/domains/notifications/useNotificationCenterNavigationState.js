import { useEffect, useState } from "react";
import { resolveNotificationCenterActiveTab } from "./notificationCenterModel.js";

export function useNotificationCenterNavigationState({
  initialNotificationTab,
  showSpecialLectureTab
}) {
  const [activeNotificationTab, setActiveNotificationTab] = useState(
    resolveNotificationCenterActiveTab({
      initialNotificationTab,
      showSpecialLectureTab
    })
  );
  const [activeSpecialLectureWorkspaceTab, setActiveSpecialLectureWorkspaceTab] = useState("roster");
  const [activeNoticeWorkspace, setActiveNoticeWorkspace] = useState("compose");

  useEffect(() => {
    setActiveNotificationTab(
      resolveNotificationCenterActiveTab({
        initialNotificationTab,
        showSpecialLectureTab
      })
    );
  }, [initialNotificationTab, showSpecialLectureTab]);

  return {
    activeNotificationTab,
    activeNoticeWorkspace,
    activeSpecialLectureWorkspaceTab,
    setActiveNotificationTab,
    setActiveNoticeWorkspace,
    setActiveSpecialLectureWorkspaceTab
  };
}
