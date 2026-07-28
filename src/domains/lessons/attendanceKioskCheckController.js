export async function checkKioskAttendanceAction({
  attendanceOnlyMode,
  currentDate,
  getNowIso = () => new Date().toISOString(),
  getNowTimestamp = () => Date.now(),
  lateGraceMinutes,
  loadedDate,
  onAttendanceEvent,
  onDateChanged,
  onLesson,
  onRecord,
  options = {},
  phoneLast4,
  request
}) {
  if (attendanceOnlyMode && loadedDate !== currentDate) {
    onDateChanged();
    return {
      ok: false,
      message: "날짜가 바뀌어 출결 데이터를 다시 불러오는 중입니다. 잠시 후 다시 입력해 주세요."
    };
  }

  const digits = String(phoneLast4).replaceAll(/\D/g, "").slice(-4);
  if (digits.length !== 4) {
    return { ok: false, message: "휴대폰 번호 뒤 4자리를 입력해 주세요." };
  }

  try {
    const result = await request({
      action: options.action,
      attendanceStatus: options.attendanceStatus,
      checkInTime: options.checkInTime,
      checkOutTime: options.checkOutTime,
      phoneLast4: digits,
      lateMinutes: options.lateMinutes,
      lateGraceMinutes,
      lessonId: options.lessonId,
      sendAlimtalk: true,
      source: "kiosk",
      studentId: options.studentId
    });
    if (result.lesson) {
      onLesson(result.lesson);
    }
    if (result.record) {
      onRecord(result.record);
    }
    if (result.attendanceEvent) {
      onAttendanceEvent({
        notificationLogId:
          result.attendanceEvent.attendanceEventId ||
          `attendance_kiosk_${getNowTimestamp()}_${result.student?.studentId || "student"}`,
        channel: "attendance_kiosk",
        createdAt: result.attendanceEvent.createdAt || getNowIso(),
        lessonId: result.lesson?.lessonId,
        message: `[출결체크] ${result.message} · ${result.checkedTime || ""}`.trim(),
        provider: "academy-os",
        status: result.alimtalk?.status || "saved",
        studentId: result.student?.studentId,
        target: "parent"
      });
    }
    return { ok: true, ...result };
  } catch (error) {
    return {
      ok: false,
      message: error.message || "출결 저장에 실패했습니다. 선생님께 말씀해 주세요."
    };
  }
}
