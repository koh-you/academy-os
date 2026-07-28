const acceptedAbsenceNotificationStatuses = new Set(["scheduled", "dry_run"]);

export async function saveManualAttendanceAction({
  nextAttendanceStatus,
  onLesson,
  onNotificationJob,
  onRecord,
  options = {},
  payload,
  request
}) {
  const result = await request(payload);
  const nextRecord = result.record;
  if (!nextRecord) {
    throw new Error("출결 저장 결과가 없습니다.");
  }

  if (result.lesson) {
    onLesson(result.lesson);
  }
  onRecord(nextRecord);

  const attendanceNotificationJob = result.alimtalk?.result?.notificationJob;
  if (attendanceNotificationJob) {
    onNotificationJob(attendanceNotificationJob);
  }

  if (
    options.sendAlimtalk &&
    nextAttendanceStatus === "absent" &&
    !acceptedAbsenceNotificationStatuses.has(attendanceNotificationJob?.status)
  ) {
    throw new Error(
      `결석 출결은 저장됐지만 다음 정각 알림톡 예약에 실패했습니다. ${
        result.alimtalk?.error ||
        attendanceNotificationJob?.error ||
        "알림관리에서 상태를 확인해 주세요."
      }`
    );
  }

  return {
    alimtalk: result.alimtalk,
    record: nextRecord,
    saved: true
  };
}
