export const newStudentMakeupClassName = "신입생 보강";
export const newStudentMakeupLessonTopic = "신입생 보강";
export const newStudentMakeupUiType = "newStudentMakeup";

export function isNewStudentMakeupLesson(lesson = {}) {
  return lesson.lessonType === "makeup" && (
    String(lesson.lessonTopic || "").trim() === newStudentMakeupLessonTopic ||
    String(lesson.className || "").trim() === newStudentMakeupClassName
  );
}

export function getLessonModalUiType(lesson = {}) {
  return isNewStudentMakeupLesson(lesson)
    ? newStudentMakeupUiType
    : lesson.lessonType || "class";
}

export function getPersistedLessonType(lessonType = "") {
  return lessonType === newStudentMakeupUiType ? "makeup" : lessonType;
}

export function getNewStudentMakeupLessonTopic(lessonType = "", fallback = "") {
  if (lessonType === newStudentMakeupUiType) return newStudentMakeupLessonTopic;
  if (lessonType === "closure") return "휴강";
  return fallback;
}
