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

/**
 * getLessonJournalStudents 와 같은 명단(퇴원 경계 동일)의 ID 만, 정렬 없이.
 * 달력 pill 의 "(N명)" 처럼 인원수만 필요한 곳용 — 달력은 렌더마다 그 달의 모든 수업에 이걸
 * 부르는데, 이름 정렬(Intl ko collation)과 students.find 가 그 비용의 대부분이었다
 * (60명·308수업에서 4.4 ms → 0.4 ms).
 */
export function getLessonJournalStudentIds(lesson = {}, students = []) {
  const studentById = new Map(students.map((student) => [student.studentId, student]));
  return getLessonStudentIds(lesson, students).filter((studentId) => {
    const student = studentById.get(studentId);
    return Boolean(student) && isStudentVisibleInLessonJournal(student, lesson.date);
  });
}

export function getActiveStudentIdsFromSelection(studentIds = [], students = []) {
  const selectedStudentIds = new Set(studentIds);
  return sortStudentsByName(students
    .filter((student) => isActiveStudent(student) && selectedStudentIds.has(student.studentId)))
    .map((student) => student.studentId);
}
