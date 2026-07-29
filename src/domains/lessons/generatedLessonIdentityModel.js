import { getExamPrepGeneratedKeyForDate } from "./generatedExamPrepKeyBuilder.js";
import {
  compactCalendarLabel,
  normalizeSchoolName
} from "../schoolCalendar/schoolCalendarUtils.js";

export function createGeneratedLessonIdentityModel({
  addDaysInKorea,
  isExamPrepLesson,
  normalizeGradeLabel
}) {
  function getGeneratedLessonKey(lesson = {}) {
    const sourceId = lesson.sourceSchoolEventId || "";
    if (sourceId.startsWith("generated:")) return sourceId;
    if (lesson.lessonType === "preExam" && sourceId) {
      return `generated:pre_exam:${sourceId}`;
    }
    if (isExamPrepLesson(lesson)) {
      return getExamPrepGeneratedKeyForDate(lesson.date);
    }
    return "";
  }

  function getPreExamCompatibilityKey(lesson = {}) {
    if (lesson.lessonType !== "preExam") return "";
    const sourceExamDate =
      lesson.sourceExamDate ||
      addDaysInKorea(lesson.date, 1);
    const [schoolName = "", grade = ""] = String(
      lesson.className || ""
    )
      .replace(/\s*직전수업\s*$/, "")
      .split(/\s+/);
    const schoolKey = normalizeSchoolName(schoolName);
    const gradeKey = compactCalendarLabel(
      normalizeGradeLabel(grade)
    );
    if (!schoolKey || !gradeKey || !sourceExamDate) return "";
    return `preExam|${schoolKey}|${gradeKey}|${sourceExamDate}`;
  }

  function getGeneratedLessonIdentityKeys(lesson = {}) {
    const examPrepKeys = isExamPrepLesson(lesson)
      ? [
          getExamPrepGeneratedKeyForDate(lesson.date)
        ]
      : [];
    return [
      ...new Set(
        [
          getGeneratedLessonKey(lesson),
          getPreExamCompatibilityKey(lesson),
          ...examPrepKeys
        ].filter(Boolean)
      )
    ];
  }

  return {
    getGeneratedLessonIdentityKeys,
    getGeneratedLessonKey,
    getPreExamCompatibilityKey
  };
}
