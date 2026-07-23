export function buildNoticePayload({
  academyName,
  mode = "immediate",
  noticeBody,
  noticeKind,
  noticeSpecialLectureMeta,
  noticeText,
  noticeTitle,
  recipient,
  scheduledAt,
  today
}) {
  const audienceLabel = recipient.audience === "student" ? "학생" : "학부모";
  return {
    academyName,
    commentBodyOverride: noticeText,
    forceDryRun: false,
    lessonDate: today,
    lessonName: noticeTitle.trim() || `${audienceLabel} 공지`,
    message: noticeText,
    noticeKind,
    noticeAudience: recipient.audience,
    noticeBody,
    noticeTitle,
    osScheduled: mode === "scheduled",
    parentPhone: recipient.student.parentPhone,
    scheduledDate: mode === "scheduled" ? scheduledAt : "",
    sendMode: mode === "scheduled" ? "scheduled" : "immediate",
    studentId: recipient.student.studentId,
    studentName: recipient.student.name,
    studentPhone: recipient.student.studentPhone,
    target: recipient.audience,
    ...(noticeKind === "special_lecture" && noticeSpecialLectureMeta
      ? {
          specialLectureAudience: noticeSpecialLectureMeta.audience,
          specialLectureDays: noticeSpecialLectureMeta.days,
          specialLectureGuideId: noticeSpecialLectureMeta.guideId,
          specialLectureTime: noticeSpecialLectureMeta.time,
          specialLectureTitle: noticeSpecialLectureMeta.title,
          specialLectureUrl: noticeSpecialLectureMeta.guideUrl
        }
      : {})
  };
}

export function buildNoticeJob({
  academyName,
  createdAt,
  idSuffix,
  idTimestamp,
  mode = "scheduled",
  noticeBody,
  noticeKind,
  noticeSpecialLectureMeta,
  noticeText,
  noticeTitle,
  recipient,
  scheduledAt,
  today
}) {
  const payload = buildNoticePayload({
    academyName,
    mode,
    noticeBody,
    noticeKind,
    noticeSpecialLectureMeta,
    noticeText,
    noticeTitle,
    recipient,
    scheduledAt,
    today
  });
  const notificationType = recipient.audience === "student" ? "notice_student" : "notice_parent";
  return {
    notificationJobId: `notice_${idTimestamp}_${recipient.student.studentId}_${recipient.audience}_${idSuffix}`,
    notificationType,
    studentId: recipient.student.studentId,
    target: recipient.audience,
    recipient: recipient.phone,
    scheduledAt: mode === "scheduled" ? scheduledAt : "",
    payload,
    previewBody: noticeText,
    status: mode === "scheduled" ? "scheduled" : "draft",
    provider: "academy-os",
    error: "",
    createdAt
  };
}
