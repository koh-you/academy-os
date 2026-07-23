import { useState } from "react";
import {
  createNotificationHistoryViewModel,
  upsertLocalNoticeJobList
} from "./notificationCenterModel.js";
import { selectNoticeHistoryFilterAction } from "./notificationNoticeActions.js";

export function useNotificationHistoryState({
  canCancelJob,
  getDateString,
  getProviderReference,
  initialHistoryDate = "",
  isSchedulePast,
  notificationJobs,
  onRefresh,
  setDispatchMessage,
  setActiveWorkspace
}) {
  const [deletingJobId, setDeletingJobId] = useState("");
  const [historyDate, setHistoryDate] = useState(initialHistoryDate);
  const [isNoticeHistoryOpen, setIsNoticeHistoryOpen] = useState(false);
  const [notificationJobAction, setNotificationJobAction] = useState({ message: "", state: "idle" });
  const [jobFilter, setJobFilter] = useState("all");
  const [localNoticeJobs, setLocalNoticeJobs] = useState([]);
  const [solapiResultSyncState, setSolapiResultSyncState] = useState({ checkedAt: "", state: "idle", message: "" });
  const historyViewModel = createNotificationHistoryViewModel({
    canCancelJob,
    getDateString,
    getProviderReference,
    historyDate,
    isSchedulePast,
    jobFilter,
    localNoticeJobs,
    notificationJobs
  });

  function selectJobFilter(nextFilter) {
    selectNoticeHistoryFilterAction({
      nextFilter,
      setActiveWorkspace,
      setIsHistoryOpen: setIsNoticeHistoryOpen,
      setJobFilter
    });
  }

  function upsertLocalNoticeJob(job) {
    setLocalNoticeJobs((current) =>
      upsertLocalNoticeJobList(current, job)
    );
  }

  function refreshHistoryForDate(nextDate = historyDate) {
    Promise.resolve(onRefresh?.({ date: nextDate })).catch((error) => {
      setDispatchMessage((current) =>
        `${current || "알림 기록"} 새로고침 실패: ${error.message}`
      );
    });
  }

  function changeHistoryDate(nextDate) {
    setHistoryDate(nextDate);
    setActiveWorkspace("history");
    setIsNoticeHistoryOpen(true);
    refreshHistoryForDate(nextDate);
  }

  return {
    ...historyViewModel,
    changeHistoryDate,
    deletingJobId,
    historyDate,
    isNoticeHistoryOpen,
    jobFilter,
    notificationJobAction,
    refreshHistoryForDate,
    selectJobFilter,
    setDeletingJobId,
    setIsNoticeHistoryOpen,
    setJobFilter,
    setNotificationJobAction,
    setSolapiResultSyncState,
    solapiResultSyncState,
    upsertLocalNoticeJob
  };
}
