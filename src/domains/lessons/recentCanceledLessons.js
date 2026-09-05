export const canceledLessonRetentionMs = 7 * 24 * 60 * 60 * 1000;

function canceledAtMs(lesson = {}) {
  return new Date(lesson.updatedAt || lesson.deletedAt || "").getTime();
}

export function selectRecentCanceledLessons(lessons = [], now = Date.now()) {
  const nowMs = new Date(now).getTime();
  if (!Number.isFinite(nowMs)) return [];
  return lessons
    .filter((lesson) => {
      if (lesson?.status !== "canceled") return false;
      const timestamp = canceledAtMs(lesson);
      return Number.isFinite(timestamp) && timestamp <= nowMs && nowMs - timestamp < canceledLessonRetentionMs;
    })
    .sort((left, right) => {
      const dateOrder = String(right.date || "").localeCompare(String(left.date || ""));
      if (dateOrder) return dateOrder;
      return String(left.startTime || "").localeCompare(String(right.startTime || ""));
    });
}

export function getCanceledLessonRemainingDays(lesson, now = Date.now()) {
  const timestamp = canceledAtMs(lesson);
  const nowMs = new Date(now).getTime();
  if (!Number.isFinite(timestamp) || !Number.isFinite(nowMs)) return 0;
  return Math.max(0, Math.ceil((canceledLessonRetentionMs - (nowMs - timestamp)) / (24 * 60 * 60 * 1000)));
}
