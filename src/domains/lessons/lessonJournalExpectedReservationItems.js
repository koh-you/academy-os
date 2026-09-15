export function createLessonJournalExpectedReservationItems({
  buildPayloadSnapshot,
  createEmptyRecord,
  createNotificationJobId,
  findRecord,
  getHomework,
  getPayloadFingerprint,
  getScheduledDate,
  getSupplementSchedules,
  getTestResultLines,
  homeworks = [],
  lesson,
  lessons = [],
  makeupTasks = [],
  notificationPlanMode = "default",
  notificationPlanScheduledAt = "",
  notificationTemplates = {},
  records = [],
  students = [],
  testAttempts = [],
  testSessions = []
}) {
  if (notificationPlanMode === "none") return [];
  const scheduledDate = notificationPlanMode === "manual"
    ? notificationPlanScheduledAt
    : getScheduledDate(
        lesson,
        notificationPlanMode === "delay30" ? 30 : notificationPlanMode === "nextDay11am" ? "nextDay11am" : 0,
        { allowPastFallback: false }
      );
  if (!scheduledDate) return [];

  return students.flatMap((student) => {
    const record = findRecord(records, lesson, student) ?? createEmptyRecord(lesson, student);
    const previousHomework = getHomework(homeworks, lesson, student, "previous", lessons, records);
    const nextHomework = getHomework(homeworks, lesson, student, "next");
    const supplementSchedules = getSupplementSchedules(makeupTasks, student.studentId, {
      lesson,
      mode: "lesson_comment"
    });
    const testResultLines = getTestResultLines(testSessions, testAttempts, lesson, student);

    return ["parent", "student"].flatMap((audience) => {
      if (audience === "parent" && record.notificationMutedParent) return [];
      if (audience === "student" && record.notificationMutedStudent) return [];
      const payloadSnapshot = buildPayloadSnapshot({
        audience,
        lesson,
        mode: notificationPlanMode,
        nextHomework,
        notificationTemplates,
        previousHomework,
        record,
        // 전체 records 를 넘겨야 지난 숙제가 찍힌 record 를 찾아 서버와 같은 과제상태가 나온다.
        // 안 넘기면 유추된 과제상태가 빈 값이 되어 예약 지문이 영구히 어긋난다(2026-09-15 보고).
        records,
        scheduledDate,
        student,
        supplementSchedules,
        testResultLines
      });
      return [{
        fingerprint: getPayloadFingerprint(payloadSnapshot),
        notificationJobId: createNotificationJobId(lesson.lessonId, student.studentId, audience)
      }];
    });
  });
}
