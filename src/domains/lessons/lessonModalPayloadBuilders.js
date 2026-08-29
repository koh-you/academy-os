import {
  getNewStudentMakeupLessonTopic,
  getPersistedLessonType
} from "./newStudentMakeup.js";

function buildClosureMakeupLesson({
  classTemplateId,
  closureMakeupLessonId,
  formValues,
  resolveDayKey,
  resolveLessonColor,
  sourceLessonId,
  studentIds,
  teacherId
}) {
  if (!closureMakeupLessonId) return null;
  const makeupClassName = `${formValues.name} · 휴강 보충`;
  return {
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
    sourceLabel: `원 휴강 수업 · ${sourceLessonId}`,
    status: "scheduled"
  };
}

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
  const persistedLessonType = getPersistedLessonType(formValues.lessonType);
  const lesson = {
    lessonId,
    classTemplateId,
    className: formValues.name,
    lessonType: persistedLessonType,
    lessonTopic: getNewStudentMakeupLessonTopic(formValues.lessonType),
    date: formValues.date,
    dayOfWeek: resolveDayKey(formValues.date),
    startTime: formValues.startTime,
    endTime: formValues.endTime,
    color: resolveLessonColor({
      className: formValues.name,
      classTemplateId,
      lessonType: persistedLessonType
    }),
    teacherId,
    studentIds,
    sourceLabel: formValues.lessonType === "closure"
      ? closureMakeupLessonId
        ? `연결 휴강 보충 · ${closureMakeupLessonId}`
        : "휴강 보충 없음"
      : formValues.lessonType === "closureMakeup"
        ? "별도 휴강 보충"
        : "",
    status: "scheduled"
  };
  const makeupLesson = buildClosureMakeupLesson({
    classTemplateId,
    closureMakeupLessonId,
    formValues,
    resolveDayKey,
    resolveLessonColor,
    sourceLessonId: lessonId,
    studentIds,
    teacherId
  });
  return makeupLesson ? [lesson, makeupLesson] : [lesson];
}

export function buildUpdatedLessonModalLessons({
  classTemplateId,
  closureMakeupLessonId,
  editingLesson,
  formValues,
  latestSourceLesson,
  resolveDayKey,
  resolveLessonColor,
  studentIds,
  teacherId = "instructor_owner_001"
}) {
  const persistedLessonType = getPersistedLessonType(formValues.lessonType);
  const lesson = {
    ...latestSourceLesson,
    isExamPrepAutoLesson: undefined,
    isVirtualGeneratedLesson: undefined,
    classTemplateId,
    className: formValues.name,
    lessonType: persistedLessonType,
    lessonTopic: getNewStudentMakeupLessonTopic(formValues.lessonType, editingLesson?.lessonTopic || ""),
    date: formValues.date,
    dayOfWeek: resolveDayKey(formValues.date),
    startTime: formValues.startTime,
    endTime: formValues.endTime,
    color: resolveLessonColor({
      ...editingLesson,
      className: formValues.name,
      classTemplateId,
      lessonType: persistedLessonType
    }),
    studentIds,
    sourceLabel: formValues.lessonType === "closure"
      ? closureMakeupLessonId
        ? `연결 휴강 보충 · ${closureMakeupLessonId}`
        : editingLesson?.lessonType === "closure"
          ? editingLesson.sourceLabel || "휴강 보충 없음"
          : "휴강 보충 없음"
      : editingLesson?.sourceLabel || "",
    status: editingLesson?.status ?? "scheduled"
  };
  const makeupLesson = buildClosureMakeupLesson({
    classTemplateId,
    closureMakeupLessonId,
    formValues,
    resolveDayKey,
    resolveLessonColor,
    sourceLessonId: lesson.lessonId,
    studentIds,
    teacherId
  });
  return makeupLesson ? [lesson, makeupLesson] : [lesson];
}
