import { isStudentVisibleInLessonJournal } from "./withdrawalLessonBoundary.js";
import { getEffectiveLessonStudentIds } from "../../shared/utils/studentSchedule.js";

export function getLessonStudentIds(lesson = {}, students = []) {
  return students.length
    ? getEffectiveLessonStudentIds(lesson, students)
    : Array.isArray(lesson?.studentIds) ? lesson.studentIds : [];
}

export function isWithdrawnStudent(student = {}) {
  return (student.status ?? "active") !== "active" || Boolean(student.withdrawnAt);
}

export function isActiveStudent(student = {}) {
  return student && !isWithdrawnStudent(student);
}

export function compareStudentsByName(left = {}, right = {}) {
  const nameCompare = String(left.name ?? "").localeCompare(String(right.name ?? ""), "ko", {
    numeric: true,
    sensitivity: "base"
  });
  return nameCompare || String(left.studentId ?? "").localeCompare(String(right.studentId ?? ""));
}

export function sortStudentsByName(students = []) {
  return [...students].sort(compareStudentsByName);
}

export function getActiveLessonStudents(lesson = {}, students = []) {
  return sortStudentsByName(getLessonStudentIds(lesson, students)
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter(isActiveStudent));
}

export function getLessonJournalStudents(lesson = {}, students = []) {
  return sortStudentsByName(getLessonStudentIds(lesson, students)
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter((student) => student && isStudentVisibleInLessonJournal(student, lesson.date)));
}

export function getActiveStudentIdsFromSelection(studentIds = [], students = []) {
  const selectedStudentIds = new Set(studentIds);
  return sortStudentsByName(students
    .filter((student) => isActiveStudent(student) && selectedStudentIds.has(student.studentId)))
    .map((student) => student.studentId);
}
