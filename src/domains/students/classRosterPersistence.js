import { areStudentsPersistedEqual } from "./studentPersistence.js";
import { isStudentAssignedToRegularLesson } from "../../shared/utils/studentSchedule.js";

function normalizeStudentId(value) {
  return String(value ?? "").trim();
}

export function normalizeRosterStudentIds(studentIds = []) {
  return [...new Set((studentIds ?? []).map(normalizeStudentId).filter(Boolean))].sort();
}

export function areRosterStudentIdsEqual(left = [], right = []) {
  return JSON.stringify(normalizeRosterStudentIds(left)) === JSON.stringify(normalizeRosterStudentIds(right));
}

export function areRosterTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}

export function createNextRosterUpdatedAt(expectedUpdatedAt = "", now = Date.now()) {
  const expectedTime = new Date(expectedUpdatedAt).getTime();
  return new Date(Number.isFinite(expectedTime) ? Math.max(now, expectedTime + 1) : now).toISOString();
}

export function createLessonRosterVersionFilter(lessonId, expectedUpdatedAt) {
  return [
    `lesson_id=eq.${encodeURIComponent(lessonId)}`,
    `updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`
  ].join("&");
}

export function areClassRosterStudentTargetsEqual(requested = {}, persisted = {}) {
  return areStudentsPersistedEqual(requested, persisted);
}

export function createClassRosterStudentChanges(previousStudents = [], nextStudents = []) {
  const previousById = new Map(previousStudents.map((student) => [student.studentId, student]));
  return nextStudents.flatMap((student) => {
    const previousStudent = previousById.get(student.studentId) ?? null;
    if (previousStudent && areClassRosterStudentTargetsEqual(previousStudent, student)) return [];
    return [{
      after: student,
      before: previousStudent
    }];
  });
}

function isActiveStudent(student = {}) {
  return (student.status ?? "active") === "active";
}

function isRosterManagedLesson(lesson = {}, fromDate = "") {
  return (
    (lesson.status ?? "scheduled") !== "canceled" &&
    String(lesson.date ?? "") >= String(fromDate ?? "")
  );
}

function sortSelectedActiveStudentIds(studentIds = [], students = []) {
  const selectedIds = new Set(studentIds);
  const studentById = new Map(students.map((student) => [student.studentId, student]));
  const sortedActiveStudentIds = students
    .filter((student) => isActiveStudent(student) && selectedIds.has(student.studentId))
    .sort((left, right) => String(left.name ?? "").localeCompare(String(right.name ?? ""), "ko"))
    .map((student) => student.studentId);
  const preservedUnmanagedStudentIds = studentIds.filter((studentId) => {
    const student = studentById.get(studentId);
    return !student || !isActiveStudent(student);
  });
  return [...sortedActiveStudentIds, ...preservedUnmanagedStudentIds];
}

export function createClassRosterLessonChanges({
  changedStudentIds = [],
  fromDate = "",
  lessons = [],
  nextStudents = [],
  previousStudents = []
} = {}) {
  const changedIds = new Set(changedStudentIds.map(normalizeStudentId).filter(Boolean));
  if (changedIds.size === 0) return [];
  const previousById = new Map(previousStudents.map((student) => [student.studentId, student]));
  const nextById = new Map(nextStudents.map((student) => [student.studentId, student]));

  return lessons.flatMap((lesson) => {
    if (!isRosterManagedLesson(lesson, fromDate)) return [];
    let nextStudentIds = [...(lesson.studentIds ?? [])];
    let didChangeMembership = false;
    for (const studentId of changedIds) {
      const previousStudent = previousById.get(studentId) ?? null;
      const nextStudent = nextById.get(studentId) ?? null;
      const wasScheduleMember = isActiveStudent(previousStudent) &&
        isStudentAssignedToRegularLesson(lesson, previousStudent);
      const shouldBeScheduleMember = isActiveStudent(nextStudent) &&
        isStudentAssignedToRegularLesson(lesson, nextStudent);
      const includesStudent = nextStudentIds.includes(studentId);
      if (wasScheduleMember && !shouldBeScheduleMember && includesStudent) {
        nextStudentIds = nextStudentIds.filter((id) => id !== studentId);
        didChangeMembership = true;
      }
      if (shouldBeScheduleMember && !includesStudent) {
        nextStudentIds.push(studentId);
        didChangeMembership = true;
      }
    }
    if (!didChangeMembership) return [];
    nextStudentIds = sortSelectedActiveStudentIds(nextStudentIds, nextStudents);
    if (areRosterStudentIdsEqual(lesson.studentIds, nextStudentIds)) return [];
    return [{
      afterStudentIds: nextStudentIds,
      beforeStudentIds: [...(lesson.studentIds ?? [])],
      expectedUpdatedAt: lesson.updatedAt ?? "",
      lessonId: lesson.lessonId
    }];
  });
}

export function createClassRosterSavePlan({
  fromDate = "",
  lessons = [],
  nextStudents = [],
  previousStudents = []
} = {}) {
  const studentChanges = createClassRosterStudentChanges(previousStudents, nextStudents);
  const changedStudentIds = studentChanges.map(({ after }) => after.studentId);
  return {
    fromDate,
    lessonChanges: createClassRosterLessonChanges({
      changedStudentIds,
      fromDate,
      lessons,
      nextStudents,
      previousStudents
    }),
    studentChanges
  };
}

export function verifyClassRosterSavePlan({ lessonChanges = [], studentChanges = [] } = {}, {
  lessons = [],
  students = []
} = {}) {
  const persistedStudentsById = new Map(students.map((student) => [student.studentId, student]));
  const persistedLessonsById = new Map(lessons.map((lesson) => [lesson.lessonId, lesson]));
  const studentMismatches = studentChanges
    .filter(({ after }) => !areClassRosterStudentTargetsEqual(after, persistedStudentsById.get(after.studentId) ?? {}))
    .map(({ after }) => after.studentId);
  const lessonMismatches = lessonChanges
    .filter((change) => !areRosterStudentIdsEqual(
      change.afterStudentIds,
      persistedLessonsById.get(change.lessonId)?.studentIds ?? []
    ))
    .map((change) => change.lessonId);
  return {
    lessonMismatches,
    studentMismatches,
    verified: studentMismatches.length === 0 && lessonMismatches.length === 0
  };
}
