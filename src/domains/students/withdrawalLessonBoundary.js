import { getNextKoreaDateKey } from "./rosterEffectiveDate.js";

function normalizeDateKey(dateKey = "") {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(dateKey)) ? String(dateKey) : "";
}

export function getWithdrawalDateKey(withdrawnAt = "") {
  if (!withdrawnAt) return "";
  const parsed = new Date(withdrawnAt);
  if (Number.isNaN(parsed.getTime())) return "";
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(parsed);
}

export function isStudentVisibleInLessonJournal(student = {}, lessonDate = "") {
  if (student.status !== "paused" || !student.withdrawnAt) return true;
  const withdrawalDate = getWithdrawalDateKey(student.withdrawnAt);
  const normalizedLessonDate = normalizeDateKey(lessonDate);
  return Boolean(withdrawalDate && normalizedLessonDate && normalizedLessonDate <= withdrawalDate);
}

export function getWithdrawalFutureLessonStartDate(withdrawalDate = "") {
  return getNextKoreaDateKey(withdrawalDate);
}

export function createWithdrawalStudentMutation({
  studentId = "",
  students = [],
  withdrawalInfo = {},
  withdrawnAt = ""
} = {}) {
  const currentStudent = students.find((student) => student.studentId === studentId);
  if (!currentStudent) throw new Error("퇴원 처리할 학생을 최신 학생 원천에서 찾지 못했습니다.");
  if (currentStudent.status === "paused" && currentStudent.withdrawnAt) {
    return { alreadyWithdrawn: true, nextStudents: students, pausedStudent: currentStudent };
  }
  const pausedStudent = {
    ...currentStudent,
    status: "paused",
    withdrawalReason: withdrawalInfo.reason || currentStudent.withdrawalReason || "other",
    withdrawalComment: withdrawalInfo.comment ?? currentStudent.withdrawalComment ?? "",
    withdrawnAt
  };
  return {
    alreadyWithdrawn: false,
    nextStudents: students.map((student) => student.studentId === studentId ? pausedStudent : student),
    pausedStudent
  };
}
