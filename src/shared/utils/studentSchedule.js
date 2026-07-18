const dayTokenMap = {
  일: "sun",
  월: "mon",
  화: "tue",
  수: "wed",
  목: "thu",
  금: "fri",
  토: "sat"
};

const koreaDayKeys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function getLessonDayKey(lesson = {}) {
  if (!lesson?.date) return "";
  const date = new Date(`${lesson.date}T00:00:00+09:00`);
  if (Number.isNaN(date.getTime())) return "";
  return koreaDayKeys[date.getDay()] ?? "";
}

function normalizeScheduleSegmentText(value = "") {
  return String(value ?? "")
    .replaceAll("：", ":")
    .replaceAll("–", "-")
    .replaceAll("—", "-")
    .replaceAll("~", "-")
    .replaceAll("부터", "-")
    .replaceAll("까지", "")
    .replaceAll("to", "-")
    .trim();
}

function normalizeScheduleHour(hour, { isEnd = false, startHour = null } = {}) {
  let nextHour = Number(hour);
  if (!Number.isFinite(nextHour)) return null;
  if (nextHour <= 7) nextHour += 12;
  if (isEnd && Number.isFinite(startHour) && nextHour <= startHour) nextHour += 12;
  return Math.max(0, Math.min(23, nextHour));
}

function parseScheduleTimeToken(value = "", options = {}) {
  const text = String(value ?? "").replace(/시/g, "").trim();
  const match = text.match(/^(\d{1,2})(?::(\d{1,2}))?$/);
  if (!match) return "";
  const minute = Math.max(0, Math.min(59, Number(match[2] ?? 0) || 0));
  const rawHour = Number(match[1]);
  const explicitClock = Boolean(match[2]) || rawHour >= 13 || rawHour === 0;
  const hour = explicitClock
    ? Math.max(0, Math.min(23, rawHour))
    : normalizeScheduleHour(rawHour, options);
  if (hour === null) return "";
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function getScheduleTimeMinutes(value = "") {
  const match = String(value ?? "").match(/^(\d{2}):(\d{2})$/);
  if (!match) return null;
  return Number(match[1]) * 60 + Number(match[2]);
}

function parseScheduleDays(segment = "") {
  const days = [];
  for (const char of String(segment ?? "")) {
    if (dayTokenMap[char] && !days.includes(dayTokenMap[char])) {
      days.push(dayTokenMap[char]);
    }
  }
  return days;
}

function parseScheduleSegment(segment = "") {
  const text = normalizeScheduleSegmentText(segment);
  const match = text.match(/(\d{1,2}(?::\d{1,2})?)\s*-\s*(\d{1,2}(?::\d{1,2})?)/);
  if (!match) return null;
  const days = parseScheduleDays(text);
  const startTime = parseScheduleTimeToken(match[1]);
  const startHour = getScheduleTimeMinutes(startTime) === null ? null : Math.floor(getScheduleTimeMinutes(startTime) / 60);
  const endTime = parseScheduleTimeToken(match[2], { isEnd: true, startHour });
  if (!startTime || !endTime) return null;
  return {
    days,
    endTime,
    label: days.length ? `${days.join(",")} ${startTime}-${endTime}` : `${startTime}-${endTime}`,
    startTime
  };
}

export function parseStudentScheduleOverride(scheduleOverride = "") {
  return String(scheduleOverride ?? "")
    .split(/[\/;\n]+/)
    .map(parseScheduleSegment)
    .filter(Boolean);
}

export function getStudentScheduleForLesson(lesson = {}, student = {}) {
  const specialLectureSchedule = Array.isArray(lesson?.specialLectureStudentSchedules)
    ? lesson.specialLectureStudentSchedules.find((schedule) => schedule?.studentId === student?.studentId)
    : null;
  if (specialLectureSchedule?.startTime && specialLectureSchedule?.endTime) {
    return {
      endTime: specialLectureSchedule.endTime,
      label: `${specialLectureSchedule.startTime}-${specialLectureSchedule.endTime}`,
      overrideReason: specialLectureSchedule.overrideReason || "",
      scheduleType: specialLectureSchedule.scheduleType === "adjusted" ? "adjusted" : "official",
      source: "specialLecture",
      startTime: specialLectureSchedule.startTime
    };
  }
  const rules = parseStudentScheduleOverride(student?.scheduleOverride);
  if (!rules.length) return null;
  const lessonDayKey = getLessonDayKey(lesson);
  const rule = rules.find((item) => !item.days.length || item.days.includes(lessonDayKey)) ?? null;
  return rule ? { ...rule, scheduleType: "profile", source: "studentProfile" } : null;
}

export function applyStudentScheduleToLesson(lesson = {}, student = {}) {
  const rule = getStudentScheduleForLesson(lesson, student);
  if (!rule) return lesson;
  return {
    ...lesson,
    endTime: rule.endTime,
    startTime: rule.startTime,
    studentScheduleLabel: `${rule.startTime}-${rule.endTime}`,
    studentScheduleOverride: rule.scheduleType === "adjusted" || rule.scheduleType === "profile",
    studentScheduleReason: rule.overrideReason || "",
    studentScheduleSource: rule.source === "specialLecture" ? "specialLectureStudentSchedules" : student?.scheduleOverride ?? "",
    studentScheduleType: rule.scheduleType
  };
}
