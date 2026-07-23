const notificationHistoryFilterLabels = {
  all: "최근 알림",
  scheduled: "예약",
  sent: "발송 완료",
  pending: "확인 필요",
  failed: "실패",
  draft: "정리함"
};

export function isNoticeWithdrawnStudent(student = {}) {
  return ["paused", "withdrawn"].includes(student.status ?? "active") || Boolean(student.withdrawnAt);
}

export function filterNoticeSelectedStudentIds(
  selectedStudentIds = [],
  classFilteredStudents = []
) {
  return selectedStudentIds.filter((studentId) =>
    classFilteredStudents.some((student) => student.studentId === studentId)
  );
}

export function toggleNoticeSelectedStudentId(
  selectedStudentIds = [],
  studentId
) {
  return selectedStudentIds.includes(studentId)
    ? selectedStudentIds.filter((item) => item !== studentId)
    : [...selectedStudentIds, studentId];
}

export function selectAllNoticeStudentIds(students = []) {
  return students.map((student) => student.studentId);
}

export function upsertLocalNoticeJobList(
  currentJobs = [],
  job,
  limit = 80
) {
  return [
    job,
    ...currentJobs.filter(
      (item) => item.notificationJobId !== job.notificationJobId
    )
  ].slice(0, limit);
}

export function resolveNotificationStudentName({
  payload,
  studentId,
  students = []
}) {
  return payload?.studentName
    || students.find((student) => student.studentId === studentId)?.name
    || "학생";
}

export function createNotificationComposerViewModel({
  formatKoreaTimeLabel,
  noticeBody = "",
  noticeTitle = "",
  scheduleDate = "",
  scheduleTime = "",
  solapiResultSyncCheckedAt = "",
  solapiResultTargets = []
}) {
  const noticeText = [
    noticeTitle.trim() ? `[${noticeTitle.trim()}]` : "",
    noticeBody.trim()
  ].filter(Boolean).join("\n\n");
  const scheduledAt = scheduleDate && scheduleTime
    ? new Date(`${scheduleDate}T${scheduleTime}:00+09:00`).toISOString()
    : "";
  const solapiResultSyncTargetIds = [
    ...new Set(
      solapiResultTargets
        .map((job) => job.notificationJobId)
        .filter(Boolean)
    )
  ];
  const solapiResultLastCheckedLabel = solapiResultSyncCheckedAt
    ? formatKoreaTimeLabel(solapiResultSyncCheckedAt)
    : "아직 없음";

  return {
    noticeText,
    scheduledAt,
    solapiResultLastCheckedLabel,
    solapiResultSyncTargetIds
  };
}

export function createNotificationRecipientViewModel({
  classFilter = "all",
  classTemplates = [],
  normalizePhoneNumber,
  normalizeSearchText,
  noticeRecipientMode = "selected",
  noticeWithdrawnClassFilterId,
  searchText = "",
  selectedStudentIds = [],
  students = []
}) {
  const activeStudents = students.filter((student) => !isNoticeWithdrawnStudent(student));
  const withdrawnStudents = students.filter((student) => isNoticeWithdrawnStudent(student));
  const classTemplateById = new Map(
    classTemplates.map((template) => [template.classTemplateId, template])
  );
  const studentMatchesNoticeClass = (student) => {
    if (classFilter === noticeWithdrawnClassFilterId) return isNoticeWithdrawnStudent(student);
    if (classFilter === "all") return true;
    const template = classTemplateById.get(classFilter);
    return (
      student.defaultClassTemplateId === classFilter ||
      student.classTemplateId === classFilter ||
      student.classId === classFilter ||
      (template?.name && [student.className, student.defaultClassName].includes(template.name))
    );
  };
  const sourceStudents =
    classFilter === noticeWithdrawnClassFilterId ? withdrawnStudents : activeStudents;
  const classFilteredStudents = sourceStudents.filter((student) =>
    studentMatchesNoticeClass(student)
  );
  const keyword = normalizeSearchText(searchText).toLowerCase();
  const searchableStudents = classFilteredStudents.filter((student) =>
    !keyword ||
    [student.name, student.schoolName, student.grade, student.studentPhone, student.parentPhone]
      .some((value) => String(value ?? "").toLowerCase().includes(keyword))
  );
  const selectedNoticeStudents = classFilteredStudents.filter((student) =>
    selectedStudentIds.includes(student.studentId)
  );
  const targetStudents = selectedNoticeStudents;
  const targetAudiences = noticeRecipientMode === "parent"
    ? ["parent"]
    : noticeRecipientMode === "student"
      ? ["student"]
      : ["parent", "student"];
  const visibleNoticeStudents = searchableStudents;
  const noticeRecipients = targetStudents.flatMap((student) =>
    targetAudiences
      .map((audience) => ({
        audience,
        phone: audience === "student" ? student.studentPhone : student.parentPhone,
        student
      }))
      .filter((recipient) => normalizePhoneNumber(recipient.phone))
  );

  return {
    activeStudents,
    classFilteredStudents,
    noticeRecipients,
    parentRecipientCount: noticeRecipients.filter((recipient) => recipient.audience === "parent").length,
    searchableStudents,
    selectedNoticeStudents,
    studentRecipientCount: noticeRecipients.filter((recipient) => recipient.audience === "student").length,
    targetAudiences,
    targetStudents,
    visibleNoticeStudents,
    withdrawnStudents
  };
}

export function createNotificationHistoryViewModel({
  canCancelJob,
  getProviderReference,
  isSchedulePast,
  jobFilter = "all",
  localNoticeJobs = [],
  notificationJobs = []
}) {
  const persistedNotificationJobIds = new Set(notificationJobs.map((job) => job.notificationJobId));
  const mergedNotificationJobs = [
    ...localNoticeJobs.filter((job) => !persistedNotificationJobIds.has(job.notificationJobId)),
    ...notificationJobs
  ];
  const managedNotificationJobs = mergedNotificationJobs;
  const solapiResultTargets = managedNotificationJobs.filter((job) =>
    job.provider === "solapi" &&
    getProviderReference(job) &&
    ["scheduled", "send_unconfirmed"].includes(job.status)
  );
  const pastScheduledJobs = managedNotificationJobs.filter((job) =>
    canCancelJob(job) &&
    job.scheduledAt &&
    isSchedulePast(job.scheduledAt)
  );
  const scheduledJobs = managedNotificationJobs.filter((job) =>
    canCancelJob(job) &&
    (!job.scheduledAt || !isSchedulePast(job.scheduledAt))
  );
  const sentJobs = managedNotificationJobs.filter((job) => job.status === "sent");
  const pendingJobs = managedNotificationJobs
    .filter((job) => job.status === "send_unconfirmed")
    .concat(pastScheduledJobs);
  const failedJobs = managedNotificationJobs.filter((job) => job.status === "failed");
  const archivedJobs = managedNotificationJobs.filter((job) =>
    job.status === "draft" || job.status === "dry_run" || job.status === "canceled"
  );
  const filteredNotificationJobs = {
    all: managedNotificationJobs.slice(0, 40),
    scheduled: scheduledJobs,
    sent: sentJobs,
    pending: pendingJobs,
    failed: failedJobs,
    draft: archivedJobs
  }[jobFilter] ?? managedNotificationJobs.slice(0, 40);

  return {
    archivedJobs,
    failedJobs,
    filteredNotificationJobs,
    filterLabel: notificationHistoryFilterLabels[jobFilter] ?? notificationHistoryFilterLabels.all,
    managedNotificationJobs,
    pastScheduledJobs,
    pendingJobs,
    scheduledJobs,
    sentJobs,
    solapiResultTargets
  };
}
