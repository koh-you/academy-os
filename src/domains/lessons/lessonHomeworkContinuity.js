import { shouldIgnoreLessonAttendance } from "./lessonClosure.js";
import { getSpecialLectureLessonTrackId } from "../specialLectures/specialLectureGuideUtils.js";

export function getLessonSortValue(lesson) {
  return `${lesson.date ?? ""}T${lesson.startTime || "00:00"}`;
}

export function isSpecialLectureLesson(lesson = {}) {
  return Boolean(
    lesson.lessonType === "specialLecture" ||
    lesson.lessonTrackType === "specialLecture" ||
    lesson.specialLectureGuideId
  );
}

export function getLessonContinuityKey(lesson = {}) {
  if (isSpecialLectureLesson(lesson)) {
    return lesson.lessonTrackId || (lesson.specialLectureGuideId ? getSpecialLectureLessonTrackId(lesson) : "");
  }
  if (lesson.classTemplateId) return `classTemplate:${lesson.classTemplateId}`;
  return `className:${lesson.className ?? ""}`;
}

export function isSameLessonGroup(lesson, candidate) {
  const lessonIsSpecial = isSpecialLectureLesson(lesson);
  const candidateIsSpecial = isSpecialLectureLesson(candidate);
  if (lessonIsSpecial || candidateIsSpecial) {
    const lessonKey = getLessonContinuityKey(lesson);
    const candidateKey = getLessonContinuityKey(candidate);
    return Boolean(lessonIsSpecial && candidateIsSpecial && lessonKey && lessonKey === candidateKey);
  }
  return getLessonContinuityKey(lesson) === getLessonContinuityKey(candidate);
}

function isSameLessonContinuityForStudent(lesson, candidate) {
  return isSpecialLectureLesson(lesson)
    ? isSameLessonGroup(lesson, candidate)
    : !isSpecialLectureLesson(candidate);
}

const attendedStatuses = new Set(["late", "present"]);

export function hasStudentAttendedLesson(records = [], lessonId = "", studentId = "") {
  return records.some((record) => (
    record?.lessonId === lessonId &&
    record?.studentId === studentId &&
    (
      attendedStatuses.has(record.attendanceStatus) ||
      [record.checkInAt, record.checkInTime].some(hasText)
    )
  ));
}

export function findPreviousLessonsForStudent(lessons, lesson, studentId, { records = null } = {}) {
  const currentSortValue = getLessonSortValue(lesson);
  const canVerifyAttendance = Array.isArray(records);
  return [...lessons]
    .filter((candidate) => candidate.lessonId !== lesson.lessonId)
    .filter((candidate) => !shouldIgnoreLessonAttendance(candidate))
    .filter((candidate) => candidate.studentIds?.includes(studentId))
    .filter((candidate) => isSameLessonContinuityForStudent(lesson, candidate))
    .filter((candidate) => !canVerifyAttendance || hasStudentAttendedLesson(records, candidate.lessonId, studentId))
    .filter((candidate) => getLessonSortValue(candidate) < currentSortValue)
    .sort((a, b) => getLessonSortValue(b).localeCompare(getLessonSortValue(a)));
}

export function findNextLessonForStudent(lessons, lesson, student) {
  const studentId = student?.studentId ?? "";
  const currentSortValue = getLessonSortValue(lesson);
  return [...lessons]
    .filter((candidate) => candidate.lessonId !== lesson.lessonId)
    .filter((candidate) => !shouldIgnoreLessonAttendance(candidate))
    .filter((candidate) => isSameLessonContinuityForStudent(lesson, candidate))
    .filter((candidate) => candidate.studentIds?.includes(studentId))
    .filter((candidate) => getLessonSortValue(candidate) > currentSortValue)
    .sort((a, b) => getLessonSortValue(a).localeCompare(getLessonSortValue(b)))[0];
}

export function createLinkedPreviousHomework(homeworks, lessons, lesson, student, sourceHomework) {
  const nextLesson = findNextLessonForStudent(lessons, lesson, student);
  if (!nextLesson) return null;

  const existing = homeworks.find(
    (homework) =>
      homework.lessonId === nextLesson.lessonId &&
      homework.studentId === student.studentId &&
      homework.homeworkType === "previous"
  );
  const title = sourceHomework.title ?? "";

  if (!title.trim() && !existing) return null;

  return {
    ...(existing ?? {}),
    homeworkId: existing?.homeworkId ?? `homework_previous_${nextLesson.date}_${student.studentId}`,
    lessonId: nextLesson.lessonId,
    studentId: student.studentId,
    title,
    subject: existing?.subject ?? sourceHomework.subject ?? "노션 수업 DB",
    homeworkType: "previous",
    totalProblems: existing?.totalProblems ?? sourceHomework.totalProblems ?? null,
    status: existing?.status ?? "verified",
    studentStatus: existing?.studentStatus ?? "not_started",
    teacherStatus: existing?.teacherStatus ?? "unverified",
    assignedDate: lesson.date,
    dueDate: existing?.dueDate ?? nextLesson.date,
    linkedFromLessonId: lesson.lessonId,
    linkedFromDate: lesson.date
  };
}

const meaningfulAttendanceStatuses = new Set([
  "absent",
  "excused",
  "late",
  "present",
  "unexcused"
]);

function hasText(value) {
  return String(value ?? "").trim().length > 0;
}

export function hasPersistedLessonProgress(records = [], lessonId = "") {
  return records.some((record) => {
    if (record?.lessonId !== lessonId) return false;
    if (meaningfulAttendanceStatuses.has(record.attendanceStatus)) return true;
    if ([record.checkInAt, record.checkInTime, record.checkOutAt, record.checkOutTime].some(hasText)) return true;
    if ([record.lessonMaterial, record.lessonProgress, record.teacherComment, record.studentComment, record.behaviorTag].some(hasText)) {
      return true;
    }
    if (hasText(record.assignmentStatus) && record.assignmentStatus !== "not_entered") return true;
    if (hasText(record.incompleteHomework) && record.incompleteHomework !== "not_entered") return true;
    return hasText(record.homeworkStatus) && record.homeworkStatus !== "not_started";
  });
}

export function selectLinkedPreviousHomework({
  homeworks = [],
  previousLessons = [],
  records = null,
  studentId = ""
} = {}) {
  const canVerifyLessonProgress = Array.isArray(records);

  for (const previousLesson of previousLessons) {
    const linkedHomework = homeworks.find(
      (homework) =>
        homework.lessonId === previousLesson.lessonId &&
        homework.studentId === studentId &&
        homework.homeworkType === "next"
    ) ?? null;
    if (linkedHomework) {
      return {
        ...linkedHomework,
        linkedFromLessonId: previousLesson.lessonId,
        linkedFromDate: previousLesson.date,
        homeworkType: "previous"
      };
    }

    if (!canVerifyLessonProgress || hasPersistedLessonProgress(records, previousLesson.lessonId)) {
      return null;
    }
  }

  return null;
}
