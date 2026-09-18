import { normalizeAssignmentStatusValue } from "../lessons/assignmentStatus.js";

function normalizeDateKey(dateKey = "") {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(dateKey)) ? String(dateKey) : "";
}

export function getNextKoreaDateKey(dateKey = "") {
  const normalizedDate = normalizeDateKey(dateKey);
  if (!normalizedDate) return "";
  const base = new Date(`${normalizedDate}T00:00:00+09:00`);
  base.setUTCDate(base.getUTCDate() + 1);
  return new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric"
  }).format(base);
}

export function getRosterEffectiveFromDate({ mode = "today", today = "" } = {}) {
  const normalizedToday = normalizeDateKey(today);
  if (!normalizedToday) return "";
  return mode === "tomorrow" ? getNextKoreaDateKey(normalizedToday) : normalizedToday;
}

export function hasStudentLessonRowOnDate({ date = "", lessons = [], records = [], studentId = "" } = {}) {
  const normalizedDate = normalizeDateKey(date);
  if (!normalizedDate || !studentId) return false;
  const lessonIds = new Set(
    lessons
      .filter((lesson) => lesson.date === normalizedDate)
      .filter((lesson) => (lesson.studentIds ?? []).includes(studentId))
      .map((lesson) => lesson.lessonId)
  );
  if (lessonIds.size > 0) return true;
  const lessonIdsOnDate = new Set(
    lessons.filter((lesson) => lesson.date === normalizedDate).map((lesson) => lesson.lessonId)
  );
  return records.some((record) => (
    record.studentId === studentId && lessonIdsOnDate.has(record.lessonId)
  ));
}

// 오늘 행에 "지킬 것" 이 있는지. 출결이 찍혔거나(대기 아님) 수업일지 칸에 뭐라도 적혔으면 참.
// 잘못 등록한 학생을 그날 바로 퇴원시킬 때 빈 행이 남지 않게, 퇴원 창의 기본값이 이걸 본다
// (2026-09-18: 원장이 테스트 학생을 등록·퇴원했더니 오늘 수업일지에 빈 행이 남았다).
export function hasStudentSavedLessonDataOnDate({ date = "", lessons = [], records = [], studentId = "" } = {}) {
  const normalizedDate = normalizeDateKey(date);
  if (!normalizedDate || !studentId) return false;
  const lessonIdsOnDate = new Set(
    lessons.filter((lesson) => lesson.date === normalizedDate).map((lesson) => lesson.lessonId)
  );
  return records.some((record) => {
    if (record.studentId !== studentId || !lessonIdsOnDate.has(record.lessonId)) return false;
    const attendanceStatus = record.attendanceStatus ?? "pending";
    if (attendanceStatus !== "pending" || record.checkInAt || record.checkOutAt) return true;
    // 수업일지 칸(강의 교재·진도·메모·코멘트)에 뭐라도 적혔는지. 과제 상태는 "미입력" 이 기본이라
    // 값이 있으면 사람이 고른 것이다.
    return ["lessonMaterial", "lessonProgress", "preparationMemo", "teacherComment", "studentComment"]
      .some((field) => String(record[field] ?? "").trim() !== "")
      || !["", "not_entered"].includes(normalizeAssignmentStatusValue(record.assignmentStatus));
  });
}

/**
 * 퇴원 창 기본값. 오늘 행이 없으면 "today"(선택지도 안 뜬다). 오늘 행에 저장된 게 있으면
 * "tomorrow"(오늘 기록 보존). 오늘 행이 있지만 비어 있으면 "today" — 그날 등록했다 바로
 * 퇴원시키는 경우라 남길 이유가 없다.
 */
export function getDefaultRosterEffectiveMode({ date = "", lessons = [], records = [], studentId = "" } = {}) {
  const args = { date, lessons, records, studentId };
  if (!hasStudentLessonRowOnDate(args)) return "today";
  return hasStudentSavedLessonDataOnDate(args) ? "tomorrow" : "today";
}
