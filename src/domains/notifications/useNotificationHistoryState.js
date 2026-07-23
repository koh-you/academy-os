import { useState } from "react";
import {
  createNotificationHistoryViewModel,
  upsertLocalNoticeJobList
} from "./notificationCenterModel.js";
import {
  deleteNoticeJobAction,
  selectNoticeHistoryFilterAction
} from "./notificationNoticeActions.js";

export function useNotificationHistoryState({
  canCancelJob,
  canDeleteJob,
  confirmDeleteJob,
  deleteJob,
  getProviderReference,
  isSchedulePast,
  notificationJobs,
  refreshJobs,
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

  function deleteNotificationJob(job) {
    return deleteNoticeJobAction({
      canDeleteJob,
      confirmAction: confirmDeleteJob,
      deleteJob,
      deletingJobId,
      job,
      refresh: refreshJobs,
      setDeletingJobId,
      setJobAction: setNotificationJobAction
    });
  }

  function upsertLocalNoticeJob(job) {
    setLocalNoticeJobs((current) =>
      upsertLocalNoticeJobList(current, job)
    );
  }

  return {
    ...historyViewModel,
    deleteNotificationJob,
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
