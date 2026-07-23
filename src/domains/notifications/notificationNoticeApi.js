const noticeJobPersistTimeoutMessage =
  "발송 기록 저장 요청이 15초를 넘었습니다. 새로고침 후 기록 반영 여부를 확인해 주세요.";
const noticeJobReserveTimeoutMessage =
  "Solapi 예약 요청이 45초를 넘었습니다. 실제 예약 여부는 발송 기록 또는 Solapi에서 확인해 주세요.";

export async function persistNoticeJobRequest({
  notificationJob,
  request
}) {
  await request(
    "/api/notification-jobs",
    { notificationJob },
    15000,
    noticeJobPersistTimeoutMessage
  );
}

export async function reserveNoticeJobRequest({
  notificationJob,
  request
}) {
  const result = await request(
    "/api/notification-jobs/reserve",
    { notificationJob, reason: "공지 Solapi 예약" },
    45000,
    noticeJobReserveTimeoutMessage
  );
  return result.notificationJob ?? notificationJob;
}

export function createNotificationNoticeJobRequestBindings({ request }) {
  return {
    persistNoticeJob(notificationJob) {
      return persistNoticeJobRequest({
        notificationJob,
        request
      });
    },
    reserveNoticeJob(notificationJob) {
      return reserveNoticeJobRequest({
        notificationJob,
        request
      });
    }
  };
}

export async function polishNoticeMessageRequest({
  payload,
  request,
  resolveApiUrl
}) {
  const response = await request(resolveApiUrl("/api/ai/comment-polish"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "공지 AI 수정에 실패했습니다.");
  }
  return result;
}

export async function deleteNoticeJobRequest({
  notificationJobId,
  request,
  resolveApiUrl
}) {
  const response = await request(
    resolveApiUrl(`/api/notification-jobs?id=${encodeURIComponent(notificationJobId)}`),
    { method: "DELETE" }
  );
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || `삭제 실패: ${response.status}`);
  }
  if (
    !Array.isArray(result.deletedNotificationJobIds) ||
    !result.deletedNotificationJobIds.includes(notificationJobId)
  ) {
    throw new Error("Supabase에서 삭제된 알림 이력을 확인하지 못했습니다.");
  }
  return result;
}
