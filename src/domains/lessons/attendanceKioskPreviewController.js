export async function previewKioskAttendanceAction({
  attendanceOnlyMode,
  currentDate,
  lateGraceMinutes,
  loadedDate,
  onDateChanged,
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
      phoneLast4: digits,
      lateGraceMinutes,
      lessonId: options.lessonId,
      source: "kiosk",
      studentId: options.studentId
    });
    return { ok: true, ...result };
  } catch (error) {
    return {
      ok: false,
      message: error.message || "출결 확인에 실패했습니다. 선생님께 말씀해 주세요."
    };
  }
}
