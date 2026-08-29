export const newStudentMakeupClassName = "신입생 보강";
export const newStudentMakeupLessonTopic = "신입생 보강";
export const newStudentMakeupUiType = "newStudentMakeup";
export const closureMakeupClassName = "휴강 보충";
export const closureMakeupLessonTopic = "휴강 보충";
export const closureMakeupUiType = "closureMakeup";

export function isNewStudentMakeupLesson(lesson = {}) {
  return lesson.lessonType === "makeup" && (
    String(lesson.lessonTopic || "").trim() === newStudentMakeupLessonTopic ||
    String(lesson.className || "").trim() === newStudentMakeupClassName
  );
}

export function isClosureMakeupLesson(lesson = {}) {
  return lesson.lessonType === "makeup" && (
    String(lesson.lessonTopic || "").trim() === closureMakeupLessonTopic ||
    String(lesson.sourceLabel || "").includes("휴강 보충")
  );
}

export function getLessonModalUiType(lesson = {}) {
  if (isNewStudentMakeupLesson(lesson)) return newStudentMakeupUiType;
  if (isClosureMakeupLesson(lesson)) return closureMakeupUiType;
  return lesson.lessonType || "class";
}

export function getPersistedLessonType(lessonType = "") {
  return [newStudentMakeupUiType, closureMakeupUiType].includes(lessonType) ? "makeup" : lessonType;
}

export function getNewStudentMakeupLessonTopic(lessonType = "", fallback = "") {
  if (lessonType === newStudentMakeupUiType) return newStudentMakeupLessonTopic;
  if (lessonType === closureMakeupUiType) return closureMakeupLessonTopic;
  if (lessonType === "closure") return "휴강";
  return fallback;
}
