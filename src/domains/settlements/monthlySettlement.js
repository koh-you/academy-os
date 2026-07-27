import {
  getStudentScheduleForLesson,
  parseStudentScheduleOverride
} from "../../shared/utils/studentSchedule.js";

export const monthlySettlementStateKey = "monthlyInstructorSettlements";
export const monthlySettlementFactor = 0.5 * 0.967 * 0.985;
export const monthlySettlementRateTable = {
  high: {
    defaultAmount: 450000,
    sixHoursAmount: 341000
  },
  middle: {
    defaultAmount: 420000,
    sixHoursAmount: 308000
  }
};

const settlementModes = new Set(["fixed", "new", "withdrawn"]);
const dayKeyOrder = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const dayKeyLabels = {
  sun: "일",
  mon: "월",
  tue: "화",
  wed: "수",
  thu: "목",
  fri: "금",
  sat: "토"
};
const attendanceLabels = {
  absent: "결석",
  checkin: "등원",
  checkout: "하원",
  excused: "인정결석",
  late: "지각",
  pending: "대기",
  present: "출석",
  unexcused: "무단결석"
};
const makeupLessonTypes = new Set(["makeup", "homeworkMakeup", "absenceMakeup", "retest"]);
const specialLectureLessonTypes = new Set(["specialLecture", "special_lecture"]);
const nonTeachingLessonTypes = new Set(["closure"]);

function normalizeText(value = "") {
  return String(value ?? "").trim();
}

function normalizeMoneyInput(value, fallback = "") {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.round(number)) : fallback;
}

function normalizeSignedMoneyInput(value, fallback = 0) {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(number) : fallback;
}

function normalizeMonthDate(value = "", monthKey = "") {
  const date = normalizeText(value).slice(0, 10);
  return date.startsWith(`${monthKey}-`) ? date : "";
}

function getDateParts(dateKey = "") {
  const match = normalizeText(dateKey).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return {
    day: Number(match[3]),
    month: Number(match[2]),
    year: Number(match[1])
  };
}

function getClockMinutes(value = "") {
  const match = normalizeText(value).match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;
  return hour * 60 + minute;
}

function getDurationHours(startTime = "", endTime = "") {
  const startMinutes = getClockMinutes(startTime);
  const endMinutes = getClockMinutes(endTime);
  if (startMinutes === null || endMinutes === null || endMinutes <= startMinutes) return 0;
  return (endMinutes - startMinutes) / 60;
}

function roundHours(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function hasStudent(lesson = {}, studentId = "") {
  const studentIds = Array.isArray(lesson.studentIds) ? lesson.studentIds : [];
  return studentIds.includes(studentId);
}

function isCanceledLesson(lesson = {}) {
  return ["canceled", "deleted"].includes(lesson.status);
}

export function isSpecialLectureSettlementLesson(lesson = {}) {
  return specialLectureLessonTypes.has(lesson.lessonType) ||
    specialLectureLessonTypes.has(lesson.lessonTrackType) ||
    Boolean(lesson.specialLectureGuideId || lesson.specialLectureSessionId);
}

export function isMakeupSettlementLesson(lesson = {}) {
  return makeupLessonTypes.has(lesson.lessonType) || Boolean(lesson.sourceMakeupTaskId);
}

export function isRegularSettlementLesson(lesson = {}) {
  return !isCanceledLesson(lesson) &&
    !nonTeachingLessonTypes.has(lesson.lessonType) &&
    !isMakeupSettlementLesson(lesson) &&
    !isSpecialLectureSettlementLesson(lesson);
}

export function getMonthRange(monthKey = "") {
  const match = normalizeText(monthKey).match(/^(\d{4})-(\d{2})$/);
  if (!match) return { endDate: "", startDate: "" };
  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12) return { endDate: "", startDate: "" };
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return {
    endDate: `${match[1]}-${match[2]}-${String(lastDay).padStart(2, "0")}`,
    startDate: `${match[1]}-${match[2]}-01`
  };
}

export function getCurrentKoreaMonthKey(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric"
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}`;
}

export function listMonthDates(monthKey = "") {
  const { endDate, startDate } = getMonthRange(monthKey);
  const endParts = getDateParts(endDate);
  if (!startDate || !endParts) return [];
  return Array.from({ length: endParts.day }, (_, index) =>
    `${monthKey}-${String(index + 1).padStart(2, "0")}`
  );
}

export function getDateDayKey(dateKey = "") {
  const parts = getDateParts(dateKey);
  if (!parts) return "";
  return dayKeyOrder[new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()] ?? "";
}

function scheduleRuleToText(rule = {}) {
  const days = Array.isArray(rule.days) ? rule.days.map((day) => dayKeyLabels[day] ?? "").join("") : "";
  return `${days ? `${days} ` : ""}${rule.startTime || ""}-${rule.endTime || ""}`.trim();
}

export function getDefaultStudentScheduleText(student = {}, classTemplates = []) {
  if (normalizeText(student.scheduleOverride)) return normalizeText(student.scheduleOverride);
  const template = classTemplates.find((item) => item.classTemplateId === student.defaultClassTemplateId);
  if (!template) return "";
  const timeLabel = normalizeText(template.timeLabel);
  if (timeLabel && /[월화수목금토일]/.test(timeLabel)) return timeLabel;
  const days = (Array.isArray(template.days) ? template.days : [])
    .map((day) => dayKeyLabels[day] ?? "")
    .join("");
  const clockText = timeLabel || (
    template.startTime && template.endTime ? `${template.startTime}-${template.endTime}` : ""
  );
  return `${days ? `${days} ` : ""}${clockText}`.trim();
}

export function buildMonthlyScheduleEvents(monthKey = "", scheduleText = "") {
  const rules = parseStudentScheduleOverride(scheduleText);
  if (!rules.length) return [];
  return listMonthDates(monthKey).flatMap((date) => {
    const dayKey = getDateDayKey(date);
    return rules
      .filter((rule) => !rule.days.length || rule.days.includes(dayKey))
      .map((rule, index) => ({
        attendanceStatus: "pending",
        date,
        durationHours: roundHours(getDurationHours(rule.startTime, rule.endTime)),
        endTime: rule.endTime,
        eventId: `schedule_${date}_${index}_${rule.startTime}_${rule.endTime}`,
        eventType: "regular",
        isForecast: true,
        label: "정규 예정",
        source: "monthlySchedule",
        startTime: rule.startTime
      }));
  });
}

function buildActualLessonEvent(lesson = {}, record = null, student = {}) {
  const studentSchedule = getStudentScheduleForLesson(lesson, student);
  const startTime = studentSchedule?.startTime || lesson.startTime || "";
  const endTime = studentSchedule?.endTime || lesson.endTime || "";
  const attendanceStatus = record?.attendanceStatus || "pending";
  const eventType = isSpecialLectureSettlementLesson(lesson)
    ? "special"
    : isMakeupSettlementLesson(lesson)
      ? "makeup"
      : "regular";
  return {
    attendanceStatus,
    attendanceLabel: attendanceLabels[attendanceStatus] ?? attendanceStatus ?? "대기",
    className: lesson.className || "",
    date: lesson.date,
    durationHours: roundHours(getDurationHours(startTime, endTime)),
    endTime,
    eventId: lesson.lessonId,
    eventType,
    isForecast: false,
    label: eventType === "makeup" ? "보충" : eventType === "special" ? "특강" : "정규",
    lessonId: lesson.lessonId,
    lessonType: lesson.lessonType || "",
    source: "lessonJournal",
    startTime
  };
}

export function buildStudentMonthEvidence({
  lessons = [],
  monthKey = "",
  records = [],
  student = {}
} = {}) {
  const recordsByLessonStudent = new Map(
    records.map((record) => [`${record.lessonId}::${record.studentId}`, record])
  );
  const studentLessons = lessons
    .filter((lesson) =>
      normalizeText(lesson.date).startsWith(`${monthKey}-`) &&
      !isCanceledLesson(lesson) &&
      !nonTeachingLessonTypes.has(lesson.lessonType) &&
      hasStudent(lesson, student.studentId)
    )
    .sort((a, b) => (
      String(a.date).localeCompare(String(b.date)) ||
      String(a.startTime || "").localeCompare(String(b.startTime || ""))
    ));
  const actualEvents = studentLessons.map((lesson) =>
    buildActualLessonEvent(
      lesson,
      recordsByLessonStudent.get(`${lesson.lessonId}::${student.studentId}`) ?? null,
      student
    )
  );
  const actualRegularEvents = actualEvents.filter((event) => event.eventType === "regular");
  const regularEvents = actualRegularEvents;
  const makeupEvents = actualEvents.filter((event) => event.eventType === "makeup");
  const specialEvents = actualEvents.filter((event) => event.eventType === "special");
  const actualStatusCounts = actualRegularEvents.reduce((counts, event) => {
    const status = event.attendanceStatus || "pending";
    counts[status] = (counts[status] ?? 0) + 1;
    return counts;
  }, {});
  return {
    actualRegularEvents,
    actualStatusCounts,
    firstActualRegularDate: actualRegularEvents[0]?.date || "",
    lastActualRegularDate: actualRegularEvents.at(-1)?.date || "",
    makeupCount: makeupEvents.length,
    makeupEvents,
    makeupHours: roundHours(makeupEvents.reduce((sum, event) => sum + event.durationHours, 0)),
    regularCount: regularEvents.length,
    regularEvents,
    regularHours: roundHours(regularEvents.reduce((sum, event) => sum + event.durationHours, 0)),
    specialCount: specialEvents.length,
    specialEvents,
    specialHours: roundHours(specialEvents.reduce((sum, event) => sum + event.durationHours, 0))
  };
}

export function getWeeklyScheduleHours(scheduleText = "") {
  return roundHours(
    parseStudentScheduleOverride(scheduleText).reduce((sum, rule) => {
      const weeklyDays = Math.max(1, Array.isArray(rule.days) ? rule.days.length : 0);
      return sum + getDurationHours(rule.startTime, rule.endTime) * weeklyDays;
    }, 0)
  );
}

export function getDefaultFixedAmountForStudent(
  student = {},
  scheduleText = "",
  classTemplates = []
) {
  const grade = normalizeText(student.grade);
  const resolvedScheduleText = normalizeText(scheduleText) ||
    getDefaultStudentScheduleText(student, classTemplates);
  const weeklyHours = getWeeklyScheduleHours(resolvedScheduleText);
  const isSixHours = Math.abs(weeklyHours - 6) < 0.01;
  if (grade.startsWith("중")) {
    return isSixHours
      ? monthlySettlementRateTable.middle.sixHoursAmount
      : monthlySettlementRateTable.middle.defaultAmount;
  }
  if (grade.startsWith("고")) {
    return isSixHours
      ? monthlySettlementRateTable.high.sixHoursAmount
      : monthlySettlementRateTable.high.defaultAmount;
  }
  return "";
}

export function getMonthlySettlementRateLabel(student = {}, scheduleText = "") {
  const grade = normalizeText(student.grade);
  const weeklyHours = getWeeklyScheduleHours(scheduleText);
  if (!grade.startsWith("중") && !grade.startsWith("고")) return "학년별 단가 미설정";
  const schoolLevel = grade.startsWith("중") ? "중등" : "고등";
  return Math.abs(weeklyHours - 6) < 0.01
    ? `${schoolLevel} 주 6시간 기준`
    : `${schoolLevel} 기본 고정급`;
}

export function getFixedAmountAfterScheduleChange({
  classTemplates = [],
  currentFixedAmount = "",
  nextScheduleText = "",
  previousScheduleText = "",
  student = {}
} = {}) {
  const previousDefault = getDefaultFixedAmountForStudent(
    student,
    previousScheduleText,
    classTemplates
  );
  const nextDefault = getDefaultFixedAmountForStudent(
    student,
    nextScheduleText,
    classTemplates
  );
  const normalizedCurrentAmount = normalizeMoneyInput(currentFixedAmount, "");
  return normalizedCurrentAmount !== "" && normalizedCurrentAmount === previousDefault
    ? nextDefault
    : normalizedCurrentAmount;
}

export function normalizeMonthlySettlementStudentSetting(
  setting = {},
  { classTemplates = [], monthKey = "", student = {} } = {}
) {
  const { endDate, startDate } = getMonthRange(monthKey);
  const withdrawnDate = normalizeMonthDate(student.withdrawnAt, monthKey);
  const scheduleText = normalizeText(setting.scheduleText) ||
    getDefaultStudentScheduleText(student, classTemplates);
  const hasStoredFixedAmount = setting.fixedAmount !== "" &&
    setting.fixedAmount !== null &&
    setting.fixedAmount !== undefined &&
    Number.isFinite(Number(setting.fixedAmount));
  const mode = settlementModes.has(setting.mode)
    ? setting.mode
    : withdrawnDate ? "withdrawn" : "fixed";
  return {
    adjustmentAmount: normalizeSignedMoneyInput(setting.adjustmentAmount, 0),
    endDate: normalizeMonthDate(setting.endDate, monthKey) || (mode === "withdrawn" ? withdrawnDate : endDate),
    excluded: Boolean(setting.excluded),
    fixedAmount: normalizeMoneyInput(
      setting.fixedAmount,
      hasStoredFixedAmount
        ? ""
        : getDefaultFixedAmountForStudent(student, scheduleText, classTemplates)
    ),
    mode,
    note: normalizeText(setting.note),
    scheduleText,
    specialGrossAmount: normalizeMoneyInput(setting.specialGrossAmount, 0),
    startDate: normalizeMonthDate(setting.startDate, monthKey) || (mode === "withdrawn" ? startDate : "")
  };
}

export function normalizeMonthlySettlementMonth(
  month = {},
  { classTemplates = [], lessons = [], monthKey = "", students = [] } = {}
) {
  const normalizedMonthKey = normalizeText(month.monthKey || monthKey).slice(0, 7);
  const sourceSettings = month.studentSettings && typeof month.studentSettings === "object"
    ? month.studentSettings
    : {};
  const visibleStudents = getMonthlySettlementStudents({
    lessons,
    monthKey: normalizedMonthKey,
    students
  });
  return {
    monthKey: normalizedMonthKey,
    studentSettings: Object.fromEntries(visibleStudents.map((student) => {
      const evidence = buildStudentMonthEvidence({
        classTemplates,
        lessons,
        monthKey: normalizedMonthKey,
        records: [],
        scheduleText: sourceSettings[student.studentId]?.scheduleText,
        student
      });
      const normalizedSetting = normalizeMonthlySettlementStudentSetting(
        sourceSettings[student.studentId],
        { classTemplates, monthKey: normalizedMonthKey, student }
      );
      if (!normalizedSetting.startDate) {
        normalizedSetting.startDate = evidence.firstActualRegularDate;
      }
      return [student.studentId, normalizedSetting];
    })),
    updatedAt: normalizeText(month.updatedAt)
  };
}

export function createDefaultMonthlySettlementState() {
  return {
    months: {},
    updatedAt: "",
    version: 1
  };
}

export function normalizeMonthlySettlementState(state = {}) {
  const sourceMonths = state?.months && typeof state.months === "object" && !Array.isArray(state.months)
    ? state.months
    : {};
  return {
    months: Object.fromEntries(
      Object.entries(sourceMonths)
        .filter(([monthKey]) => /^\d{4}-\d{2}$/.test(monthKey))
        .map(([monthKey, month]) => [
          monthKey,
          {
            monthKey,
            studentSettings: month?.studentSettings && typeof month.studentSettings === "object"
              ? month.studentSettings
              : {},
            updatedAt: normalizeText(month?.updatedAt)
          }
        ])
    ),
    updatedAt: normalizeText(state?.updatedAt),
    version: Math.max(1, Number(state?.version) || 1)
  };
}

export function getMonthlySettlementStudents({
  lessons = [],
  monthKey = "",
  students = []
} = {}) {
  const monthStudentIds = new Set(
    lessons
      .filter((lesson) =>
        normalizeText(lesson.date).startsWith(`${monthKey}-`) &&
        isRegularSettlementLesson(lesson)
      )
      .flatMap((lesson) => Array.isArray(lesson.studentIds) ? lesson.studentIds : [])
  );
  return students
    .filter((student) => monthStudentIds.has(student.studentId))
    .sort((a, b) => (
      String(a.defaultClassTemplateId || "").localeCompare(String(b.defaultClassTemplateId || "")) ||
      String(a.name || "").localeCompare(String(b.name || ""), "ko")
    ));
}

export function buildStudentSettlementRow({
  classTemplates = [],
  lessons = [],
  monthKey = "",
  records = [],
  setting = {},
  student = {}
} = {}) {
  const normalizedSetting = normalizeMonthlySettlementStudentSetting(setting, {
    classTemplates,
    monthKey,
    student
  });
  const evidence = buildStudentMonthEvidence({
    classTemplates,
    lessons,
    monthKey,
    records,
    scheduleText: normalizedSetting.scheduleText,
    student
  });
  const { endDate, startDate } = getMonthRange(monthKey);
  const weeklyScheduleHours = getWeeklyScheduleHours(normalizedSetting.scheduleText);
  const periodStart = normalizedSetting.mode === "new"
    ? evidence.firstActualRegularDate
    : startDate;
  const periodEnd = normalizedSetting.mode === "withdrawn"
    ? evidence.lastActualRegularDate
    : endDate;
  const hasAutomaticBoundary = normalizedSetting.mode === "new"
    ? Boolean(periodStart)
    : normalizedSetting.mode === "withdrawn"
      ? Boolean(periodEnd)
      : true;
  const recognizedRegularEvents = evidence.regularEvents.filter((event) =>
    hasAutomaticBoundary &&
    (!periodStart || event.date >= periodStart) &&
    (!periodEnd || event.date <= periodEnd)
  );
  const recognizedRegularHours = roundHours(
    recognizedRegularEvents.reduce((sum, event) => sum + event.durationHours, 0)
  );
  const monthlyScheduleEvents = buildMonthlyScheduleEvents(monthKey, normalizedSetting.scheduleText);
  const proratedScheduleEvents = hasAutomaticBoundary
    ? monthlyScheduleEvents.filter((event) =>
      (!periodStart || event.date >= periodStart) &&
      (!periodEnd || event.date <= periodEnd)
    )
    : [];
  const monthlyScheduleCount = monthlyScheduleEvents.length;
  const prorationCount = proratedScheduleEvents.length;
  const partialRatio = normalizedSetting.mode === "fixed"
    ? 1
    : monthlyScheduleCount > 0
      ? Math.max(0, Math.min(1, prorationCount / monthlyScheduleCount))
      : 0;
  const hasFixedAmount = normalizedSetting.fixedAmount !== "";
  const hasRegularJournal = evidence.regularCount > 0;
  const calculatedBaseAmount = hasFixedAmount && hasRegularJournal
    ? normalizedSetting.mode === "fixed"
      ? Number(normalizedSetting.fixedAmount)
      : Math.round(Number(normalizedSetting.fixedAmount) * partialRatio)
    : 0;
  const baseAmount = normalizedSetting.excluded ? 0 : calculatedBaseAmount;
  const regularGrossAmount = normalizedSetting.excluded
    ? 0
    : baseAmount + normalizedSetting.adjustmentAmount;
  const firstEverRegularDate = lessons
    .filter((lesson) =>
      isRegularSettlementLesson(lesson) &&
      (Array.isArray(lesson.studentIds) ? lesson.studentIds : []).includes(student.studentId)
    )
    .map((lesson) => lesson.date)
    .filter(Boolean)
    .sort()[0] || "";
  return {
    ...evidence,
    baseAmount,
    firstEverRegularDate,
    hasFixedAmount,
    hasRegularJournal,
    isNewCandidate: Boolean(
      firstEverRegularDate &&
      firstEverRegularDate.startsWith(`${monthKey}-`) &&
      firstEverRegularDate !== startDate
    ),
    monthlyScheduleCount,
    partialRatio,
    periodEnd,
    periodStart,
    prorationCount,
    prorationSource: monthlyScheduleEvents.length ? "monthlySchedule" : "missingSchedule",
    recognizedRegularCount: recognizedRegularEvents.length,
    recognizedRegularEvents,
    recognizedRegularHours,
    regularGrossAmount,
    setting: normalizedSetting,
    student,
    weeklyScheduleHours
  };
}

export function buildMonthlySettlementSummary(rows = []) {
  const regularGrossAmount = Math.round(rows.reduce((sum, row) => sum + row.regularGrossAmount, 0));
  const regularNetAmount = Math.round(regularGrossAmount * monthlySettlementFactor);
  return {
    excludedStudentCount: rows.filter((row) => row.setting.excluded).length,
    prorationScheduleMissingCount: rows.filter((row) =>
      !row.setting.excluded &&
      row.setting.mode !== "fixed" &&
      row.hasRegularJournal &&
      row.monthlyScheduleCount === 0
    ).length,
    regularGrossAmount,
    regularNetAmount,
    unsetRateCount: rows.filter((row) => !row.setting.excluded && !row.hasFixedAmount).length
  };
}

export function createMonthlySettlementStateWithMonth(state = {}, month = {}) {
  const current = normalizeMonthlySettlementState(state);
  const monthKey = normalizeText(month.monthKey).slice(0, 7);
  const updatedAt = normalizeText(month.updatedAt) || new Date().toISOString();
  return {
    months: {
      ...current.months,
      [monthKey]: {
        monthKey,
        studentSettings: month.studentSettings && typeof month.studentSettings === "object"
          ? month.studentSettings
          : {},
        updatedAt
      }
    },
    updatedAt,
    version: current.version + 1
  };
}

export function getMonthlySettlementMonthSaveSnapshot(month = {}) {
  const settings = month.studentSettings && typeof month.studentSettings === "object"
    ? month.studentSettings
    : {};
  return JSON.stringify({
    monthKey: normalizeText(month.monthKey).slice(0, 7),
    studentSettings: Object.fromEntries(
      Object.entries(settings)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([studentId, setting]) => [
          studentId,
          {
            adjustmentAmount: normalizeSignedMoneyInput(setting?.adjustmentAmount, 0),
            endDate: normalizeText(setting?.endDate),
            excluded: Boolean(setting?.excluded),
            fixedAmount: normalizeMoneyInput(setting?.fixedAmount, ""),
            mode: settlementModes.has(setting?.mode) ? setting.mode : "fixed",
            note: normalizeText(setting?.note),
            scheduleText: normalizeText(setting?.scheduleText),
            specialGrossAmount: normalizeMoneyInput(setting?.specialGrossAmount, 0),
            startDate: normalizeText(setting?.startDate)
          }
        ])
    ),
    updatedAt: normalizeText(month.updatedAt)
  });
}

export function formatSettlementHours(value = 0) {
  const number = roundHours(value);
  return Number.isInteger(number) ? `${number}시간` : `${number.toFixed(1)}시간`;
}

export function formatSettlementWon(value = 0) {
  return `${Math.round(Number(value) || 0).toLocaleString("ko-KR")}원`;
}

export function formatSettlementPercent(value = 0) {
  return `${Math.round((Number(value) || 0) * 1000) / 10}%`;
}

export function getSettlementAttendanceLabel(status = "pending") {
  return attendanceLabels[status] ?? status ?? "대기";
}

export function scheduleTextFromRules(scheduleText = "") {
  return parseStudentScheduleOverride(scheduleText).map(scheduleRuleToText).join(" / ");
}
