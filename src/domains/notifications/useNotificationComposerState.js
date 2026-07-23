import { useState } from "react";
import { createNotificationComposerViewModel } from "./notificationCenterModel.js";
import { applyNoticeTemplateAction } from "./notificationNoticeActions.js";

export function useNotificationComposerState({
  formatKoreaTimeLabel,
  solapiResultSyncCheckedAt,
  solapiResultTargets,
  templates,
  today
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

  return {
    ...composerViewModel,
    applyNoticeTemplate,
    dispatchMessage,
    isPolishingNotice,
    isSendingNotice,
    noticeBody,
    noticeKind,
    noticeSpecialLectureMeta,
    noticeTemplateId,
    noticeTitle,
    scheduleDate,
    scheduleTime,
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
