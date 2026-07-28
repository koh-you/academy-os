export function buildNewLessonModalLessons({
  classTemplateId,
  closureMakeupLessonId,
  formValues,
  lessonId,
  resolveDayKey,
  resolveLessonColor,
  studentIds,
  teacherId = "instructor_owner_001"
}) {
  const lesson = {
    lessonId,
    classTemplateId,
    className: formValues.name,
    lessonType: formValues.lessonType,
    lessonTopic: formValues.lessonType === "closure" ? "휴강" : "",
    date: formValues.date,
    dayOfWeek: resolveDayKey(formValues.date),
    startTime: formValues.startTime,
    endTime: formValues.endTime,
    color: resolveLessonColor({
      className: formValues.name,
      classTemplateId,
      lessonType: formValues.lessonType
    }),
    teacherId,
    studentIds,
    sourceLabel: formValues.lessonType === "closure"
      ? closureMakeupLessonId
        ? `연결 휴강 보충 · ${closureMakeupLessonId}`
        : "휴강 보충 없음"
      : "",
    status: "scheduled"
  };
  if (!closureMakeupLessonId) return [lesson];

  const makeupClassName = `${formValues.name} · 휴강 보충`;
  return [
    lesson,
    {
      lessonId: closureMakeupLessonId,
      classTemplateId,
      className: makeupClassName,
      lessonType: "makeup",
      lessonTopic: "휴강 보충",
      date: formValues.closureMakeupDate,
      dayOfWeek: resolveDayKey(formValues.closureMakeupDate),
      startTime: formValues.closureMakeupStartTime,
      endTime: formValues.closureMakeupEndTime,
      color: resolveLessonColor({
        className: makeupClassName,
        classTemplateId,
        lessonType: "makeup"
      }),
      teacherId,
      studentIds,
      sourceLabel: `원 휴강 수업 · ${lessonId}`,
      status: "scheduled"
    }
  ];
}
