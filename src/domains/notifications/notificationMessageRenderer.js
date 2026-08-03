export function normalizeNotificationText(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function normalizeMessageBodyText(value) {
  return String(value ?? "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function createNotificationMessageBlock(label, value) {
  const text = normalizeNotificationText(value);
  return text ? `${label}\n${text}` : "";
}

export function createNotificationMessageLine(label, value) {
  const text = normalizeNotificationText(value);
  return text ? `${label} : ${text}` : "";
}

export function joinNotificationMessageBlocks(blocks) {
  return blocks.map(normalizeNotificationText).filter(Boolean).join("\n\n");
}

function normalizeBulletLines(value = "") {
  return normalizeNotificationText(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.startsWith("-") ? line : `- ${line}`)
    .join("\n");
}

function attendanceLabel(status) {
  return {
    absent: "결석",
    checkin: "등원",
    checkout: "하원",
    excused: "인정결석",
    late: "지각",
    pending: "대기",
    present: "등원"
  }[status] ?? status ?? "등원";
}

function formatAttendanceTime(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  const isoTime = text.match(/T(\d{2}:\d{2})/);
  if (isoTime?.[1]) return isoTime[1];
  const koreanTime = text.match(/(오전|오후)\s*(\d{1,2}):(\d{2})/);
  if (koreanTime) {
    const period = koreanTime[1];
    let hour = Number(koreanTime[2]);
    if (period === "오후" && hour < 12) hour += 12;
    if (period === "오전" && hour === 12) hour = 0;
    return `${String(hour).padStart(2, "0")}:${koreanTime[3]}`;
  }
  const time = text.match(/(\d{1,2}:\d{2})/);
  if (time?.[1]) return time[1].padStart(5, "0");
  return text;
}

function attendanceLabelWithDetail({ attendanceStatus, checkedAt, checkInTime, lateMinutes, reason } = {}) {
  const label = attendanceLabel(attendanceStatus);
  if (!["지각", "결석", "인정결석"].includes(label)) return label;

  const details = [];
  const cleanReason = normalizeNotificationText(reason);
  const time = formatAttendanceTime(checkInTime || checkedAt);
  if (cleanReason) details.push(`사유: ${cleanReason}`);
  if (label === "지각" && time) details.push(`등원 ${time}`);
  if (label === "지각" && !time && lateMinutes) details.push(`${lateMinutes}분 지각`);
  if ((label === "결석" || label === "인정결석") && time) details.push(`처리 ${time}`);
  return details.length ? `${label} (${details.join(" · ")})` : label;
}

function attendanceLabelForAttendanceBody({ attendanceStatus, reason } = {}) {
  const label = attendanceLabel(attendanceStatus);
  const cleanReason = normalizeNotificationText(reason);
  if (cleanReason && ["지각", "결석", "인정결석"].includes(label)) {
    return `${label} (사유: ${cleanReason})`;
  }
  return label;
}

export function formatLessonNotificationAttendance(recordOrPayload = {}) {
  return attendanceLabelWithDetail({
    attendanceStatus: recordOrPayload.attendanceStatus,
    checkedAt: recordOrPayload.checkedAt || recordOrPayload.checkInAt,
    checkInTime: recordOrPayload.checkInTime,
    lateMinutes: recordOrPayload.lateMinutes,
    reason: recordOrPayload.attendanceReason ?? recordOrPayload.reason
  });
}

export function buildAttendanceBody({ attendanceStatus, checkedAt, checkInTime, checkOutTime, lessonName, reason } = {}) {
  const timeSource = attendanceStatus === "checkout" ? checkOutTime || checkedAt : checkInTime || checkedAt;
  const time = formatAttendanceTime(timeSource);
  return joinNotificationMessageBlocks([
    createNotificationMessageLine("🏫 출결", attendanceLabelForAttendanceBody({ attendanceStatus, reason })),
    lessonName ? createNotificationMessageLine("📘 수업", lessonName) : "",
    time ? createNotificationMessageLine("🕒 시간", time) : ""
  ]);
}

export function buildLessonNotificationBody({
  attendanceStatus,
  attendanceReason,
  checkInTime,
  checkedAt,
  assignmentStatus,
  extraBlocks = [],
  homeworkFollowupNotice,
  lessonContent,
  lessonMaterial,
  nextHomework,
  omitPreviousHomework = false,
  previousHomework,
  preparationNotice,
  supplementSchedule,
  testResult,
  teacherComment
} = {}) {
  const assignmentStatusMessage = assignmentStatus ?? "";
  const preparationText = normalizeNotificationText(preparationNotice);
  const homeworkFollowupText = normalizeBulletLines(homeworkFollowupNotice);
  const supplementText = normalizeBulletLines(supplementSchedule);
  const teacherCommentText = normalizeNotificationText(teacherComment);
  const commentText = joinNotificationMessageBlocks([
    preparationText && !teacherCommentText.includes(preparationText) ? preparationText : "",
    teacherCommentText
  ]);
  const supplementNotice = joinNotificationMessageBlocks([
    homeworkFollowupText,
    supplementText
  ]);

  return joinNotificationMessageBlocks([
    createNotificationMessageLine("🏫 출결", attendanceLabelWithDetail({ attendanceStatus, checkedAt, checkInTime, reason: attendanceReason })),
    omitPreviousHomework ? "" : createNotificationMessageLine("✅ 과제 상태", assignmentStatusMessage),
    createNotificationMessageLine("📚 강의 교재", lessonMaterial),
    createNotificationMessageLine("🧭 강의 내용", lessonContent),
    omitPreviousHomework ? "" : createNotificationMessageLine("📘 지난 과제", previousHomework),
    createNotificationMessageLine("➡️ 다음 과제", nextHomework),
    createNotificationMessageBlock("📝 테스트", testResult),
    ...extraBlocks,
    createNotificationMessageBlock("⭐ 보충/확인 안내", omitPreviousHomework ? supplementText : supplementNotice),
    createNotificationMessageBlock("💬 코멘트", commentText)
  ]);
}

function buildLessonCommentBody(payload, audience) {
  return buildLessonNotificationBody({
    attendanceStatus: payload.attendanceStatus,
    attendanceReason: payload.attendanceReason || payload.reason,
    checkInTime: payload.checkInTime,
    checkedAt: payload.checkedAt,
    assignmentStatus:
      audience === "student"
        ? payload.assignmentStatusStudentMessage || payload.assignmentStatusMessage || payload.assignmentStatus
        : payload.assignmentStatusParentMessage || payload.assignmentStatusMessage || payload.assignmentStatus,
    audience,
    omitPreviousHomework: payload.assignmentStatus === "not_entered",
    homeworkFollowupNotice: payload.homeworkFollowupNotice,
    lessonContent: payload.lessonContent,
    lessonMaterial: payload.lessonMaterial,
    nextHomework: payload.nextHomework,
    previousHomework: payload.previousHomework,
    preparationNotice: payload.preparationNotice,
    supplementSchedule: payload.supplementSchedule,
    testResult: payload.testResult,
    teacherComment: payload.message
  });
}

function hasLessonCommentContext(payload = {}) {
  return Boolean(
    payload.lessonId ||
    payload.osScheduled ||
    payload.attendanceStatus ||
    payload.assignmentStatus ||
    payload.assignmentStatusMessage ||
    payload.lessonMaterial ||
    payload.lessonContent ||
    payload.previousHomework ||
    payload.nextHomework ||
    payload.supplementSchedule ||
    payload.preparationNotice ||
    payload.homeworkFollowupNotice
  );
}

function isNoticePayload(payload = {}) {
  const notificationType = String(payload.notificationType ?? "");
  return Boolean(
    payload.noticeKind ||
    payload.noticeTitle ||
    payload.noticeBody ||
    notificationType === "notice_parent" ||
    notificationType === "notice_student"
  );
}

export function resolveLessonCommentBody(payload = {}, audience = "parent") {
  const overrideText = normalizeMessageBodyText(payload.commentBodyOverride);
  if (isNoticePayload(payload)) {
    return overrideText || normalizeMessageBodyText(payload.message) || buildLessonCommentBody(payload, audience);
  }
  if (!hasLessonCommentContext(payload)) {
    return overrideText || buildLessonCommentBody(payload, audience);
  }
  return buildLessonCommentBody({
    ...payload,
    message: normalizeMessageBodyText(payload.message) || overrideText
  }, audience);
}
