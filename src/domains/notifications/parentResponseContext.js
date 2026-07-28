function text(value = "") {
  return String(value ?? "").trim();
}

const parentResponseNotificationTypes = new Set(["daily_report", "parent_comment"]);

export function getParentResponseContextBody(job = {}) {
  return text(
    job.previewBody ||
    job.payload?.previewBody ||
    job.payload?.commentBodyOverride ||
    job.payload?.reportBody ||
    job.payload?.message
  );
}

export function getParentResponseContexts(notificationJobs = [], students = []) {
  const studentsById = new Map(students.map((student) => [student.studentId, student]));
  return notificationJobs
    .filter((job) => job.status === "sent")
    .filter((job) => parentResponseNotificationTypes.has(job.notificationType))
    .filter((job) => (job.target || job.payload?.target || "parent") === "parent")
    .map((job) => {
      const student = studentsById.get(job.studentId) ?? {};
      const body = getParentResponseContextBody(job);
      return {
        body,
        lessonDate: text(job.payload?.lessonDate),
        notificationJobId: text(job.notificationJobId),
        notificationType: text(job.notificationType),
        parentPhone: text(job.recipient || job.payload?.parentPhone || student.parentPhone),
        sentAt: text(
          job.result?.solapiGroup?.dateSent ||
          job.result?.response?.groupInfo?.dateSent ||
          job.scheduledAt ||
          job.createdAt ||
          job.updatedAt
        ),
        studentId: text(job.studentId),
        studentName: text(job.payload?.studentName || student.name || "학생")
      };
    })
    .filter((context) => Boolean(context.body))
    .sort((left, right) => right.sentAt.localeCompare(left.sentAt));
}

export function buildParentChannelLookupText(context = {}) {
  return [
    "별관 채널 학부모 답장 확인",
    `학생: ${text(context.studentName) || "미확인"}`,
    `학부모 번호: ${text(context.parentPhone) || "미입력"}`,
    `발송 시각: ${text(context.sentAt) || "미입력"}`,
    `수업일: ${text(context.lessonDate) || "미입력"}`
  ].join("\n");
}
