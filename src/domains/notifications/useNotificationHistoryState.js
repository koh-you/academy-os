import { useState } from "react";
import {
  createNotificationHistoryViewModel,
  upsertLocalNoticeJobList
} from "./notificationCenterModel.js";
import { selectNoticeHistoryFilterAction } from "./notificationNoticeActions.js";

export function useNotificationHistoryState({
  canCancelJob,
  getProviderReference,
  isSchedulePast,
  notificationJobs,
  setActiveWorkspace
}) {
  const [deletingJobId, setDeletingJobId] = useState("");
  const [isNoticeHistoryOpen, setIsNoticeHistoryOpen] = useState(false);
  const [notificationJobAction, setNotificationJobAction] = useState({ message: "", state: "idle" });
  const [jobFilter, setJobFilter] = useState("all");
  const [localNoticeJobs, setLocalNoticeJobs] = useState([]);
  const [solapiResultSyncState, setSolapiResultSyncState] = useState({ checkedAt: "", state: "idle", message: "" });
  const historyViewModel = createNotificationHistoryViewModel({
    canCancelJob,
    getProviderReference,
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

  return {
    ...historyViewModel,
    deletingJobId,
    isNoticeHistoryOpen,
    jobFilter,
    notificationJobAction,
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
