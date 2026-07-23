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
