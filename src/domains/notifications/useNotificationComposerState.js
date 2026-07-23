import { useState } from "react";
import { createNotificationComposerViewModel } from "./notificationCenterModel.js";
import {
  applyNoticeTemplateAction,
  polishNoticeMessageAction,
  refreshNoticeJobsInBackgroundAction,
  scheduleNoticeAction,
  sendNoticeNowAction
} from "./notificationNoticeActions.js";
import { buildNoticeJob as createNotificationNoticeJob } from "./notificationNoticeBuilders.js";

export function useNotificationComposerState({
  academyName,
  aiModel,
  aiPrompt,
  aiProvider,
  formatKoreaTimeLabel,
  isRequestTimeoutError,
  isSchedulePast,
  noticeRecipients,
  persistJob,
  polishMessage,
  refreshJobs,
  reportError,
  reserveJob,
  sendNotification,
  setIsHistoryOpen,
  setJobFilter,
  solapiResultSyncCheckedAt,
  solapiResultTargets,
  templates,
  today,
  upsertLocalJob
}) {
  const [dispatchMessage, setDispatchMessage] = useState("");
  const [isPolishingNotice, setIsPolishingNotice] = useState(false);
  const [isSendingNotice, setIsSendingNotice] = useState(false);
  const [noticeBody, setNoticeBody] = useState("");
  const [noticeKind, setNoticeKind] = useState("general");
  const [noticeSpecialLectureMeta, setNoticeSpecialLectureMeta] = useState(null);
  const [noticeTemplateId, setNoticeTemplateId] = useState("notice");
  const [noticeTitle, setNoticeTitle] = useState("");
  const [scheduleDate, setScheduleDate] = useState(today);
  const [scheduleTime, setScheduleTime] = useState("18:00");
  const composerViewModel = createNotificationComposerViewModel({
    formatKoreaTimeLabel,
    noticeBody,
    noticeTitle,
    scheduleDate,
    scheduleTime,
    solapiResultSyncCheckedAt,
    solapiResultTargets
  });

  function applyNoticeTemplate(templateId) {
    applyNoticeTemplateAction({
      setNoticeBody,
      setNoticeKind,
      setNoticeSpecialLectureMeta,
      setNoticeTemplateId,
      setNoticeTitle,
      templateId,
      templates
    });
  }

  function buildNoticeJob(recipient, mode = "scheduled") {
    const idTimestamp = Date.now();
    const idSuffix = Math.random().toString(36).slice(2, 7);
    const createdAt = new Date().toISOString();
    return createNotificationNoticeJob({
      academyName,
      createdAt,
      idSuffix,
      idTimestamp,
      mode,
      noticeBody,
      noticeKind,
      noticeSpecialLectureMeta,
      noticeText: composerViewModel.noticeText,
      noticeTitle,
      recipient,
      scheduledAt: composerViewModel.scheduledAt,
      today
    });
  }

  function refreshNoticeJobsInBackground() {
    refreshNoticeJobsInBackgroundAction({
      refreshJobs,
      setDispatchMessage
    });
  }

  function sendNoticeNow() {
    return sendNoticeNowAction({
      buildJob: buildNoticeJob,
      isRequestTimeoutError,
      isSending: isSendingNotice,
      noticeRecipients,
      noticeText: composerViewModel.noticeText,
      persistJob,
      refreshJobs: refreshNoticeJobsInBackground,
      sendNotification,
      setDispatchMessage,
      setIsHistoryOpen,
      setIsSending: setIsSendingNotice,
      setJobFilter
    });
  }

  function scheduleNotice() {
    return scheduleNoticeAction({
      buildJob: buildNoticeJob,
      formatScheduledAt: formatKoreaTimeLabel,
      isSchedulePast,
      isSending: isSendingNotice,
      noticeRecipients,
      noticeText: composerViewModel.noticeText,
      now: () => new Date().toISOString(),
      persistJob,
      refreshJobs: refreshNoticeJobsInBackground,
      reportError,
      reserveJob,
      scheduledAt: composerViewModel.scheduledAt,
      setDispatchMessage,
      setIsHistoryOpen,
      setIsSending: setIsSendingNotice,
      setJobFilter,
      upsertLocalJob
    });
  }

  function polishNoticeMessage() {
    return polishNoticeMessageAction({
      aiModel,
      aiPrompt,
      aiProvider,
      isPolishing: isPolishingNotice,
      noticeBody,
      noticeTitle,
      polishMessage,
      setDispatchMessage,
      setIsPolishing: setIsPolishingNotice,
      setNoticeBody,
      today
    });
  }

  return {
    ...composerViewModel,
    applyNoticeTemplate,
    buildNoticeJob,
    dispatchMessage,
    isPolishingNotice,
    isSendingNotice,
    noticeBody,
    noticeKind,
    noticeSpecialLectureMeta,
    noticeTemplateId,
    noticeTitle,
    polishNoticeMessage,
    refreshNoticeJobsInBackground,
    scheduleDate,
    scheduleNotice,
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
    setScheduleTime
  };
}
