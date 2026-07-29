export function createGeneratedPreExamLessonBuilder({
  addDaysInKorea,
  createPreExamGeneratedKey,
  createPreExamLessonId,
  getDayKey,
  getStandardLessonColor,
  getStudentsForSchoolCalendarEvent
}) {
  return function createPreExamLessonFromSchoolEvent(
    event = {},
    students = []
  ) {
    if (event.type !== "mathExam" || !event.date) return null;
    const lessonStudents =
      getStudentsForSchoolCalendarEvent(students, event);
    if (lessonStudents.length === 0) return null;
    const subject =
      event.examSubject || event.subject || "수학";
    const gradeLabel = event.grade
      ? `${event.grade} `
      : "";
    const sourceId =
      event.eventId ||
      `${event.schoolName}_${event.grade}_${subject}_${event.date}`;
    const generatedKey = createPreExamGeneratedKey({
      ...event,
      eventId: sourceId
    });
    return {
      lessonId: createPreExamLessonId(sourceId),
      classTemplateId: "",
      className: `${
        event.schoolName || "학교 미입력"
      } ${gradeLabel}${subject} 직전수업`,
      lessonType: "preExam",
      lessonTopic: "직전대비",
      sourceSchoolEventId: sourceId,
      sourceExamDate: event.date,
      examCycle: event.examCycle || "",
      date: addDaysInKorea(event.date, -1),
      dayOfWeek: getDayKey(
        addDaysInKorea(event.date, -1)
      ),
      startTime: "19:00",
      endTime: "21:00",
      color: getStandardLessonColor({
        lessonType: "preExam"
      }),
      teacherId: "instructor_owner_001",
      studentIds: lessonStudents.map(
        (student) => student.studentId
      ),
      status: "scheduled",
      generatedKey
    };
  };
}
