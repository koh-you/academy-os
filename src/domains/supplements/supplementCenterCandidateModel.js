export function createHomeworkSupplementItems(
  homeworks = [],
  {
    getReason = () => ""
  } = {}
) {
  return homeworks.map((homework) => {
    const reason = getReason(homework);
    return {
      id: homework.homeworkId,
      studentId: homework.studentId,
      title: homework.title,
      meta: `${homework.dueDate || homework.assignedDate || "-"} 기준 · ${reason}`,
      task: {
        taskType: "homework_makeup",
        studentId: homework.studentId,
        sourceId: homework.homeworkId,
        sourceDate: homework.assignedDate || homework.dueDate || "",
        sourceDueDate: homework.dueDate || "",
        sourceLabel: homework.title,
        supplementHomeworkNote: homework.title,
        reason,
        supplementMethod: "arrival_makeup"
      }
    };
  });
}

export function createRetestSupplementItems(
  records = [],
  {
    getLessonLabel = () => "연결 수업 없음"
  } = {}
) {
  return records.map((record) => {
    const sourceLabel = getLessonLabel(record.lessonId);
    return {
      id: record.lessonStudentRecordId,
      studentId: record.studentId,
      title: sourceLabel,
      meta: "재시험 필요",
      task: {
        taskType: "retest",
        studentId: record.studentId,
        sourceId: record.lessonStudentRecordId,
        sourceLabel,
        reason: "재시험 필요"
      }
    };
  });
}

export function createAbsenceSupplementCandidateModel({
  attendanceLabels = {},
  formatDdayLabel = () => "",
  futureAbsenceMakeupVisibleDays = 7,
  getAvailability = () => ({}),
  getHomeworkCheckLabel = () => "",
  getLesson = () => null,
  getLessonContent = () => "",
  getLessonDate = () => "",
  getLessonLabel = () => "연결 수업 없음",
  getNextHomework = () => null,
  getPreviousHomework = () => null,
  getStudent = () => null,
  records = []
} = {}) {
  function createSourceContext(record = {}) {
    const sourceLesson = getLesson(record);
    const student = getStudent(record);
    const sourcePreviousHomework = getPreviousHomework(record);
    const sourceNextHomework = sourceLesson && student
      ? getNextHomework(sourceLesson, student)
      : null;
    return {
      sourceDate: getLessonDate(record),
      sourceLessonContent: getLessonContent(record),
      sourceLessonId: record.lessonId || "",
      sourceLessonLabel: sourceLesson
        ? `${sourceLesson.date} ${sourceLesson.className}`
        : getLessonLabel(record.lessonId),
      sourceLessonMaterial: record.lessonMaterial || "",
      sourceNextHomework: sourceNextHomework?.title || record.nextHomework || "",
      sourcePreviousHomework: sourcePreviousHomework?.title || record.previousHomework || ""
    };
  }

  function createItem(record) {
    const homeworkCheckLabel = getHomeworkCheckLabel(record);
    const availability = getAvailability(record);
    const sourceContext = createSourceContext(record);
    return {
      id: record.lessonStudentRecordId,
      studentId: record.studentId,
      title: sourceContext.sourceLessonLabel || getLessonLabel(record.lessonId),
      meta: [
        `${attendanceLabels[record.attendanceStatus] ?? record.attendanceStatus} · ${record.attendanceReason || "사유 미입력"}`,
        homeworkCheckLabel ? `지난 숙제 확인: ${homeworkCheckLabel}` : ""
      ].filter(Boolean).join(" · "),
      futureMeta: availability.isDeferred
        ? `${formatDdayLabel(availability.daysUntilLesson)} · ${futureAbsenceMakeupVisibleDays}일 전부터 기본 목록에 표시`
        : "",
      isFutureDeferred: availability.isDeferred,
      lessonDate: availability.lessonDate,
      task: {
        taskType: "absence_makeup",
        studentId: record.studentId,
        sourceId: record.lessonStudentRecordId,
        ...sourceContext,
        sourceLabel: sourceContext.sourceLessonLabel || getLessonLabel(record.lessonId),
        reason: homeworkCheckLabel ? "결석 보강 · 지난 숙제 확인" : "결석 보강",
        absenceReason: record.attendanceReason || "사유 미입력",
        supplementHomeworkNote: homeworkCheckLabel,
        supplementMethod: "onsite_makeup"
      }
    };
  }

  function hydrateTask(task = {}) {
    if (task.taskType !== "absence_makeup") return task;
    const sourceRecord = records.find((record) => record.lessonStudentRecordId === task.sourceId);
    const sourceContext = sourceRecord ? createSourceContext(sourceRecord) : {};
    const homeworkCheckLabel = getHomeworkCheckLabel(sourceRecord);
    const homeworkCheckSeed = homeworkCheckLabel ||
      task.sourcePreviousHomework ||
      sourceContext.sourcePreviousHomework ||
      task.supplementHomeworkNote ||
      "";
    return {
      ...task,
      sourceDate: task.sourceDate || sourceContext.sourceDate || task.lessonDate || "",
      sourceLessonContent: task.sourceLessonContent || sourceContext.sourceLessonContent || "",
      sourceLessonId: task.sourceLessonId || sourceContext.sourceLessonId || "",
      sourceLessonLabel: task.sourceLessonLabel || sourceContext.sourceLessonLabel || task.sourceLabel || "",
      sourceLessonMaterial: task.sourceLessonMaterial || sourceContext.sourceLessonMaterial || "",
      sourceNextHomework: task.sourceNextHomework || sourceContext.sourceNextHomework || "",
      sourcePreviousHomework: task.sourcePreviousHomework || sourceContext.sourcePreviousHomework || homeworkCheckLabel || "",
      supplementHomeworkNote: homeworkCheckSeed
    };
  }

  return {
    createItem,
    createSourceContext,
    hydrateTask
  };
}
