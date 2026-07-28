import { normalizeTimeInput } from "./attendance.js";

export function getLessonModalSaveSnapshot(lesson = {}) {
  return JSON.stringify({
    className: lesson.className || "",
    classTemplateId: lesson.classTemplateId || "",
    color: lesson.color || "",
    date: lesson.date || "",
    endTime: normalizeTimeInput(lesson.endTime),
    lessonId: lesson.lessonId || "",
    lessonTrackId: lesson.lessonTrackId || "",
    lessonTrackType: lesson.lessonTrackType || "",
    lessonTopic: lesson.lessonTopic || "",
    lessonType: lesson.lessonType || "",
    sourceMakeupTaskId: lesson.sourceMakeupTaskId || "",
    sourceSchoolEventId: lesson.sourceSchoolEventId || "",
    sourceLabel: lesson.sourceLabel || "",
    specialLectureGuideId: lesson.specialLectureGuideId || "",
    specialLectureSessionId: lesson.specialLectureSessionId || "",
    specialLectureSessionIndex: lesson.specialLectureSessionIndex ?? null,
    specialLectureStudentSchedules: Object.fromEntries(
      Object.entries(lesson.specialLectureStudentSchedules ?? {})
        .sort(([leftStudentId], [rightStudentId]) => leftStudentId.localeCompare(rightStudentId))
    ),
    startTime: normalizeTimeInput(lesson.startTime),
    status: lesson.status || "scheduled",
    studentIds: [...new Set(lesson.studentIds ?? [])].sort()
  });
}
