export function createSupplementSchedulePersistencePlan({
  addMinutes,
  createLessonId,
  createLessonName,
  followUpTypeLabel,
  getDayKey,
  getLessonColor,
  getLessonStudentIds,
  lessons = [],
  normalizeTime,
  now = () => new Date().toISOString(),
  students = [],
  task
} = {}) {
  const student = students.find((item) => item.studentId === task?.studentId);
  if (!student) throw new Error("보충 일정을 반영할 학생 정보를 찾을 수 없습니다.");
  if (!task?.makeupTaskId) throw new Error("보충관리 ID가 없어 일정을 반영할 수 없습니다.");
  if (!task.scheduledDate || !task.scheduledTime) throw new Error("배정일과 시간을 입력해야 일정을 반영할 수 있습니다.");

  const lessonId = task.linkedLessonId || createLessonId(task);
  const scheduleTime = normalizeTime(task.scheduledTime);
  const duplicateLesson = lessons.find((lesson) => {
    if (!lesson || lesson.lessonId === lessonId || lesson.status === "canceled") return false;
    const lessonTime = normalizeTime(lesson.startTime);
    const lessonStudentIds = getLessonStudentIds(lesson);
    const sameSourceTask = lesson.sourceMakeupTaskId && lesson.sourceMakeupTaskId === task.makeupTaskId;
    const sameStudentSchedule =
      lesson.lessonType === "makeup" &&
      lesson.date === task.scheduledDate &&
      lessonTime === scheduleTime &&
      lessonStudentIds.includes(student.studentId);
    return sameSourceTask || sameStudentSchedule;
  });
  if (duplicateLesson) {
    throw new Error(
      `이미 같은 학생의 보충 일정이 있습니다: ${duplicateLesson.date} ${duplicateLesson.startTime || ""} ${duplicateLesson.className || ""}`.trim()
    );
  }

  const lesson = {
    lessonId,
    classTemplateId: "",
    className: createLessonName(task, student),
    lessonType: "makeup",
    date: task.scheduledDate,
    dayOfWeek: getDayKey(task.scheduledDate),
    startTime: task.scheduledTime,
    endTime: addMinutes(task.scheduledTime, 60),
    color: getLessonColor(task.taskType),
    teacherId: "instructor_owner_001",
    studentIds: [student.studentId],
    status: "scheduled",
    lessonTopic: `${followUpTypeLabel(task.taskType)} 일정`,
    sourceMakeupTaskId: task.makeupTaskId,
    sourceLabel: task.sourceLabel
  };
  const nextTask = {
    ...task,
    status: "scheduled",
    scheduledDate: lesson.date,
    scheduledTime: lesson.startTime,
    linkedLessonId: lessonId,
    linkedLessonDate: lesson.date,
    linkedLessonTime: lesson.startTime,
    needsLessonResync: false,
    lastScheduledAt: now()
  };
  return { lesson, nextTask, scheduleTime, student };
}
