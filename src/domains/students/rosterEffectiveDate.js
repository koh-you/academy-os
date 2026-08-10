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
