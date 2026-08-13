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
  const match = String(lesson.date).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return "";
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, monthIndex, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== monthIndex ||
    date.getUTCDate() !== day
  ) return "";
  return koreaDayKeys[date.getUTCDay()] ?? "";
}

function isProfileScheduleManagedLesson(lesson = {}, student = {}) {
  const lessonType = String(lesson?.lessonType || "class");
  return (
    Boolean(lesson?.classTemplateId) &&
    ["class", "closure"].includes(lessonType)
  );
}

function isRuleMatchedToLesson(rule = {}, lesson = {}) {
  const lessonDayKey = getLessonDayKey(lesson);
  if (rule.days.length && !rule.days.includes(lessonDayKey)) return false;
  if (!lesson?.startTime || !lesson?.endTime) return true;
  const ruleStart = getScheduleTimeMinutes(rule.startTime);
  const ruleEnd = getScheduleTimeMinutes(rule.endTime);
  const lessonStart = getScheduleTimeMinutes(lesson.startTime);
  const lessonEnd = getScheduleTimeMinutes(lesson.endTime);
  if ([ruleStart, ruleEnd, lessonStart, lessonEnd].some((value) => value === null)) return false;
  return lessonStart <= ruleStart && ruleEnd <= lessonEnd;
}

function isRuleOverlappingLesson(rule = {}, lesson = {}) {
  const lessonDayKey = getLessonDayKey(lesson);
  if (rule.days.length && !rule.days.includes(lessonDayKey)) return false;
  if (!lesson?.startTime || !lesson?.endTime) return true;
  const ruleStart = getScheduleTimeMinutes(rule.startTime);
  const ruleEnd = getScheduleTimeMinutes(rule.endTime);
  const lessonStart = getScheduleTimeMinutes(lesson.startTime);
  const lessonEnd = getScheduleTimeMinutes(lesson.endTime);
  if ([ruleStart, ruleEnd, lessonStart, lessonEnd].some((value) => value === null)) return false;
  return lessonStart < ruleEnd && ruleStart < lessonEnd;
}

function isRuleAssignedToLesson(rule = {}, lesson = {}, student = {}) {
  return lesson.classTemplateId === student?.defaultClassTemplateId
    ? isRuleOverlappingLesson(rule, lesson)
    : isRuleMatchedToLesson(rule, lesson);
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
  if (!isProfileScheduleManagedLesson(lesson, student)) return null;
  const rules = parseStudentScheduleOverride(student?.scheduleOverride);
  if (!rules.length) return null;
  const dayRules = rules.filter((item) => item.days.length > 0);
  const rule = dayRules.length
    ? dayRules.find((item) => isRuleAssignedToLesson(item, lesson, student)) ?? null
    : lesson.classTemplateId === student?.defaultClassTemplateId
      ? rules.find((item) => isRuleMatchedToLesson(item, lesson)) ?? null
      : null;
  return rule ? { ...rule, scheduleType: "profile", source: "studentProfile" } : null;
}

export function findStudentPartialDefaultLessonOverlaps(lessons = [], student = {}) {
  const rules = parseStudentScheduleOverride(student?.scheduleOverride);
  if (!student?.defaultClassTemplateId || rules.length === 0) return [];
  const overlaps = [];
  const seen = new Set();
  for (const lesson of lessons) {
    if (!isProfileScheduleManagedLesson(lesson, student)) continue;
    if (lesson.classTemplateId !== student.defaultClassTemplateId) continue;
    for (const rule of rules) {
      if (!isRuleOverlappingLesson(rule, lesson) || isRuleMatchedToLesson(rule, lesson)) continue;
      const key = [lesson.classTemplateId, lesson.startTime, lesson.endTime, rule.startTime, rule.endTime].join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      overlaps.push({
        className: lesson.className || lesson.title || "기본 소속 반",
        lessonEndTime: lesson.endTime || "",
        lessonStartTime: lesson.startTime || "",
        scheduleEndTime: rule.endTime,
        scheduleStartTime: rule.startTime
      });
    }
  }
  return overlaps;
}

export function isStudentAssignedToRegularLesson(lesson = {}, student = {}) {
  if (!isProfileScheduleManagedLesson(lesson, student)) return false;
  const rules = parseStudentScheduleOverride(student?.scheduleOverride);
  const dayRules = rules.filter((rule) => rule.days.length > 0);
  if (dayRules.length) {
    return dayRules.some((rule) => isRuleAssignedToLesson(rule, lesson, student));
  }
  return lesson.classTemplateId === student?.defaultClassTemplateId;
}

export function isStudentScheduledForLesson(lesson = {}, student = {}) {
  if (!isProfileScheduleManagedLesson(lesson, student)) return true;
  const rules = parseStudentScheduleOverride(student?.scheduleOverride);
  const dayRules = rules.filter((rule) => rule.days.length > 0);
  if (!dayRules.length) return true;
  if (lesson.classTemplateId !== student?.defaultClassTemplateId) return true;
  return dayRules.some((rule) => isRuleOverlappingLesson(rule, lesson));
}

export function getEffectiveLessonStudentIds(lesson = {}, students = []) {
  const studentById = new Map(students.map((student) => [student.studentId, student]));
  return (Array.isArray(lesson?.studentIds) ? lesson.studentIds : []).filter((studentId) => {
    const student = studentById.get(studentId);
    return !student || isStudentScheduledForLesson(lesson, student);
  });
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
