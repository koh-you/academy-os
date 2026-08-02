import {
  isRegularSettlementLesson,
  isSpecialLectureSettlementLesson
} from "./monthlySettlement.js";

const canceledStatuses = new Set(["canceled", "deleted"]);
const presentStatuses = new Set(["present", "checkin", "checkout"]);

function createCounts() {
  return {
    absent: 0,
    excused: 0,
    late: 0,
    pending: 0,
    present: 0,
    total: 0
  };
}

function getAttendanceStatus(record = null) {
  const status = String(record?.attendanceStatus || "pending").trim();
  if (presentStatuses.has(status)) return "present";
  if (status === "late") return "late";
  if (status === "excused") return "excused";
  if (status === "absent" || status === "unexcused") return "absent";
  return "pending";
}

function buildRecordMap(records = []) {
  return new Map(records.map((record) => [
    `${record.lessonId}::${record.studentId}`,
    record
  ]));
}

function countLessons(lessons = [], records = [], studentId = "") {
  const recordByLessonStudent = buildRecordMap(records);
  return lessons.reduce((counts, lesson) => {
    const status = getAttendanceStatus(
      recordByLessonStudent.get(`${lesson.lessonId}::${studentId}`)
    );
    counts.total += 1;
    counts[status] += 1;
    return counts;
  }, createCounts());
}

function isActiveStudentLesson(lesson = {}, studentId = "") {
  return !canceledStatuses.has(lesson.status) &&
    Array.isArray(lesson.studentIds) &&
    lesson.studentIds.includes(studentId);
}

export function buildStudentMonthlyAttendanceSummary({
  lessons = [],
  monthKey = "",
  records = [],
  studentId = ""
} = {}) {
  const monthLessons = lessons.filter((lesson) =>
    String(lesson.date || "").startsWith(`${monthKey}-`) &&
    isActiveStudentLesson(lesson, studentId)
  );
  const regularLessons = monthLessons.filter(isRegularSettlementLesson);
  const specialLessons = monthLessons.filter(isSpecialLectureSettlementLesson);
  return {
    regular: countLessons(regularLessons, records, studentId),
    special: countLessons(specialLessons, records, studentId)
  };
}

export function buildSpecialLectureAttendanceSummary({
  guideId = "",
  lessons = [],
  records = [],
  sessions = [],
  studentId = ""
} = {}) {
  const plannedSessionIds = new Set(sessions.map((session) => session.sessionId).filter(Boolean));
  const lessonsBySessionId = new Map();
  lessons.forEach((lesson) => {
    if (!isActiveStudentLesson(lesson, studentId) || !isSpecialLectureSettlementLesson(lesson)) return;
    if (guideId && lesson.specialLectureGuideId !== guideId) return;
    if (!plannedSessionIds.has(lesson.specialLectureSessionId)) return;
    lessonsBySessionId.set(lesson.specialLectureSessionId, lesson);
  });
  const journalLessons = [...lessonsBySessionId.values()];
  return {
    ...countLessons(journalLessons, records, studentId),
    journalCount: journalLessons.length,
    journalMissingCount: Math.max(0, plannedSessionIds.size - journalLessons.length),
    plannedCount: plannedSessionIds.size
  };
}
