export async function sendNoticeNowAction({
  buildJob,
  isRequestTimeoutError,
  isSending,
  noticeRecipients = [],
  noticeText,
  persistJob,
  refreshJobs,
  sendNotification,
  setDispatchMessage,
  setIsHistoryOpen,
  setIsSending,
  setJobFilter
}) {
  if (!noticeText || noticeRecipients.length === 0 || isSending) return;
  setIsSending(true);
  setDispatchMessage(`공지 즉시 발송 중: 0/${noticeRecipients.length}건 요청 시작`);
  let sentCount = 0;
  let pendingCount = 0;
  let failedCount = 0;
  let recordFailedCount = 0;
  try {
    for (const [index, recipient] of noticeRecipients.entries()) {
      const notificationJob = buildJob(recipient, "immediate");
      const audienceLabel = recipient.audience === "student" ? "학생" : "학부모";
      setDispatchMessage(
        `공지 즉시 발송 중: ${index + 1}/${noticeRecipients.length}건 · ${recipient.student.name} ${audienceLabel}`
      );
      try {
        const result = await sendNotification(notificationJob.payload);
        sentCount += 1;
        try {
          await persistJob({
            ...notificationJob,
            status: result.result?.dryRun ? "dry_run" : "sent",
            provider: result.provider ?? "solapi",
            result: result.result ?? null
          });
        } catch (recordError) {
          recordFailedCount += 1;
        }
      } catch (error) {
        const timedOut = isRequestTimeoutError(error);
        if (timedOut) pendingCount += 1;
        else failedCount += 1;
        try {
          await persistJob({
            ...notificationJob,
            status: timedOut ? "send_unconfirmed" : "failed",
            error: error.message
          });
        } catch (recordError) {
          recordFailedCount += 1;
        }
      }
    }
    setDispatchMessage(
      `공지 발송 처리 완료: 성공 ${sentCount}건${pendingCount ? `, 확인 필요 ${pendingCount}건` : ""}${failedCount ? `, 실패 ${failedCount}건` : ""}${recordFailedCount ? `, 기록 저장 실패 ${recordFailedCount}건` : ""}`
    );
    setJobFilter(pendingCount ? "pending" : failedCount ? "failed" : "sent");
    setIsHistoryOpen(true);
    refreshJobs();
  } finally {
    setIsSending(false);
  }
}

export async function scheduleNoticeAction({
  buildJob,
  formatScheduledAt,
  isSchedulePast,
  isSending,
  noticeRecipients = [],
  noticeText,
  now,
  persistJob,
  refreshJobs,
  reportError,
  reserveJob,
  scheduledAt,
  setDispatchMessage,
  setIsHistoryOpen,
  setIsSending,
  setJobFilter,
  upsertLocalJob
}) {
  if (!noticeText || noticeRecipients.length === 0 || !scheduledAt || isSending) return;
  if (isSchedulePast(scheduledAt, 0)) {
    setDispatchMessage(
      "예약 시각이 이미 지났습니다. 새 예약 시각을 선택하거나 즉시 발송을 사용해 주세요."
    );
    return;
  }
  setIsSending(true);
  setDispatchMessage(`Solapi 공지 예약 중: 0/${noticeRecipients.length}건`);
  let savedCount = 0;
  let failedCount = 0;
  try {
    const jobs = noticeRecipients.map((recipient) => buildJob(recipient, "scheduled"));
    for (const [index, notificationJob] of jobs.entries()) {
      setDispatchMessage(`Solapi 공지 예약 중: ${index + 1}/${jobs.length}건`);
      try {
        const reservedJob = await reserveJob(notificationJob);
        upsertLocalJob(reservedJob);
        savedCount += 1;
      } catch (error) {
        const failedJob = {
          ...notificationJob,
          status: "failed",
          error: `Solapi 예약 실패: ${error.message}`,
          updatedAt: now()
        };
        upsertLocalJob(failedJob);
        try {
          await persistJob(failedJob);
        } catch (persistError) {
          reportError(persistError);
        }
        failedCount += 1;
      }
    }
    setDispatchMessage(
      `${formatScheduledAt(scheduledAt)} Solapi 공지 예약 완료: 성공 ${savedCount}건${failedCount ? `, 실패 ${failedCount}건` : ""}`
    );
    setJobFilter(failedCount ? "failed" : "scheduled");
    setIsHistoryOpen(true);
    refreshJobs();
  } finally {
    setIsSending(false);
  }
}

export async function reconcileNoticeResultsAction({
  isLoading,
  now,
  reconcileResults,
  refreshJobs,
  resultTargetCount,
  setIsHistoryOpen,
  setJobFilter,
  setSyncState,
  syncCheckedAt,
  targetIds = []
}) {
  if (!reconcileResults || !targetIds.length || isLoading) return;
  setSyncState({
    checkedAt: syncCheckedAt,
    state: "loading",
    message: `Solapi 예약 ${targetIds.length}건을 조회하고 OS 기록과 대조하는 중입니다.`
  });
  try {
    const result = await reconcileResults({ notificationJobIds: targetIds });
    const checkedCount = result?.checkedCount ?? 0;
    const updatedCount = result?.updatedCount ?? 0;
    const failedCount = (result?.checked ?? []).filter(
      (item) => item.status === "failed_to_check"
    ).length;
    setSyncState({
      checkedAt: now(),
      state: failedCount ? "partial" : "saved",
      message: `Solapi 결과 대조 완료: 대상 ${targetIds.length}건 · 조회 ${checkedCount}건 · OS 반영 ${updatedCount}건${failedCount ? ` · 조회 실패 ${failedCount}건` : ""}`
    });
    if (updatedCount || resultTargetCount) setJobFilter("pending");
    setIsHistoryOpen(true);
    refreshJobs();
  } catch (error) {
    setSyncState((current) => ({
      ...current,
      state: "failed",
      message: `Solapi 결과 대조 실패: ${error.message}`
    }));
  }
}

export async function polishNoticeMessageAction({
  aiModel,
  aiPrompt,
  aiProvider,
  isPolishing,
  noticeBody,
  noticeTitle,
  polishMessage,
  setDispatchMessage,
  setIsPolishing,
  setNoticeBody,
  today
}) {
  if (!noticeBody.trim() || isPolishing) return;
  setIsPolishing(true);
  setDispatchMessage("");
  try {
    const result = await polishMessage({
      aiProvider,
      aiModel,
      aiPrompt,
      audience: "parent",
      lessonName: noticeTitle.trim() || "알림관리 공지",
      lessonDate: today,
      rawText: noticeBody,
      studentName: "수신자",
      schoolName: "",
      grade: "",
      lessonMaterial: "",
      lessonContent: "",
      attendanceStatus: "",
      homeworkStatus: "",
      assignmentStatus: ""
    });
    setNoticeBody(result.polishedText ?? noticeBody);
    setDispatchMessage("공지 문구를 AI로 다듬었습니다.");
  } catch (error) {
    setDispatchMessage(`AI 수정 실패: ${error.message}`);
  } finally {
    setIsPolishing(false);
  }
}

export async function deleteNoticeJobAction({
  canDeleteJob,
  confirmAction,
  deleteJob,
  deletingJobId,
  job,
  refresh,
  setDeletingJobId,
  setJobAction
}) {
  if (!canDeleteJob(job) || deletingJobId) return;
  const isPastUnconfirmed = job.status === "send_unconfirmed";
  const confirmationMessage = isPastUnconfirmed
    ? "이 '확인 필요' 알림 이력 1건을 Academy OS에서 삭제할까요? 과거 Solapi 발송 결과는 변경되지 않으며 삭제한 OS 이력은 복구할 수 없습니다."
    : "이 발송 전 공지 기록 1건을 Academy OS에서 삭제할까요? 삭제한 기록은 복구할 수 없습니다.";
  if (confirmAction && !confirmAction(confirmationMessage)) return;
  setDeletingJobId(job.notificationJobId);
  setJobAction({
    message: isPastUnconfirmed
      ? "확인 필요 알림 이력을 삭제하는 중입니다."
      : "발송하지 않은 공지 기록을 삭제하는 중입니다.",
    state: "saving"
  });
  try {
    await deleteJob(job.notificationJobId);
    setJobAction({
      message: isPastUnconfirmed
        ? "확인 필요 알림 이력 1건을 삭제했습니다."
        : "발송하지 않은 공지 기록 1건을 삭제했습니다.",
      state: "saved"
    });
    await refresh?.();
  } catch (error) {
    setJobAction({
      message: `알림 이력 삭제 실패: ${error.message}`,
      state: "failed"
    });
  } finally {
    setDeletingJobId("");
  }
}

export async function cancelNoticeJobAction({
  canCancelJob,
  cancelJob,
  confirmAction,
  deletingJobId,
  job,
  refreshJobs,
  setDeletingJobId,
  setIsHistoryOpen,
  setJobAction,
  setJobFilter,
  upsertLocalJob
}) {
  if (!canCancelJob(job) || deletingJobId) return;
  const confirmationMessage =
    "이 알림톡 예약 1건을 취소할까요? Solapi 실제 예약도 함께 취소하며, 취소 이력은 남습니다.";
  if (confirmAction && !confirmAction(confirmationMessage)) return;
  setDeletingJobId(job.notificationJobId);
  setJobAction({
    message: "Solapi 실제 예약과 Academy OS 기록을 함께 취소하는 중입니다.",
    state: "saving"
  });
  try {
    if (!cancelJob) {
      throw new Error("Solapi 실제 예약 취소 경로가 연결되어 있지 않습니다.");
    }
    const result = await cancelJob(job, "알림관리에서 예약 취소");
    if (!result?.notificationJob || result.notificationJob.status !== "canceled") {
      throw new Error("OS 취소 상태를 확인하지 못했습니다.");
    }
    upsertLocalJob(result.notificationJob);
    setJobAction({
      message: result.solapiCancellation
        ? "Solapi 실제 예약과 Academy OS 기록을 함께 취소했습니다."
        : "Academy OS 예약을 취소했습니다. Solapi 예약 그룹이 없는 알림입니다.",
      state: "saved"
    });
    setJobFilter("draft");
    setIsHistoryOpen(true);
    refreshJobs();
  } catch (error) {
    setJobAction({
      message: `알림톡 예약 취소 실패: ${error.message}`,
      state: "failed"
    });
  } finally {
    setDeletingJobId("");
  }
}

export function refreshNoticeJobsInBackgroundAction({
  refreshJobs,
  setDispatchMessage
}) {
  Promise.resolve(refreshJobs?.()).catch((error) => {
    setDispatchMessage(
      (current) =>
        `${current || "처리는 완료됐습니다."} 발송 기록 새로고침 실패: ${error.message}`
    );
  });
}

export function applyNoticeTemplateAction({
  setNoticeBody,
  setNoticeKind,
  setNoticeSpecialLectureMeta,
  setNoticeTemplateId,
  setNoticeTitle,
  templateId,
  templates = []
}) {
  const template = templates.find((item) => item.id === templateId);
  setNoticeTemplateId(templateId);
  if (!template) {
    setNoticeKind("general");
    setNoticeSpecialLectureMeta(null);
    return;
  }
  setNoticeKind(templateId === "specialLecture" ? "special_lecture" : "general");
  setNoticeSpecialLectureMeta(null);
  setNoticeTitle(template.title);
  setNoticeBody(template.body);
}

export function selectNoticeHistoryFilterAction({
  nextFilter,
  setActiveWorkspace,
  setIsHistoryOpen,
  setJobFilter
}) {
  setJobFilter(nextFilter);
  setActiveWorkspace("history");
  setIsHistoryOpen(true);
}
