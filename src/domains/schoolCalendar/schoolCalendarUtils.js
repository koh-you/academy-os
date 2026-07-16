import {
  schoolCalendarKnownColors,
  schoolCalendarLegacyColorMap,
  schoolCalendarSchoolColorPalette
} from "../../app/appConfig.js";

export function normalizeSchoolName(value = "") {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[·ㆍ.,_/\\-]/g, "")
    .replace(/여자고등학교/g, "여고")
    .replace(/여자고/g, "여고")
    .replace(/남자고등학교/g, "남고")
    .replace(/남자고/g, "남고")
    .replace(/고등학교/g, "고")
    .replace(/중학교/g, "중");
}

export function getSchoolCalendarSchoolColor(schoolName = "") {
  const key = normalizeSchoolName(schoolName) || "학교미입력";
  if (schoolCalendarKnownColors[key]) return schoolCalendarKnownColors[key];
  const hash = [...key].reduce((total, character) => total + character.charCodeAt(0), 0);
  return schoolCalendarSchoolColorPalette[hash % schoolCalendarSchoolColorPalette.length];
}

export function normalizeSchoolCalendarColor(color = "") {
  const key = String(color || "").trim().toLowerCase();
  return schoolCalendarLegacyColorMap[key] || color;
}

export function getSchoolCalendarEventColor(event = {}) {
  return normalizeSchoolCalendarColor(event.color) || getSchoolCalendarSchoolColor(event.schoolName);
}

export function parseDateRangeText(value = "") {
  const text = String(value).trim();
  if (!text) return null;
  const match = text.match(/(\d{4})-(\d{2})-(\d{2})\s*[~\-–]\s*(?:(\d{4})-)?(\d{2})-(\d{2})/);
  if (!match) return null;
  const [, startYear, startMonth, startDay, endYear, endMonth, endDay] = match;
  return {
    date: `${startYear}-${startMonth}-${startDay}`,
    endDate: `${endYear || startYear}-${endMonth}-${endDay}`
  };
}

export function formatDateRangeText(date = "", endDate = "") {
  if (date && endDate) return `${date} ~ ${endDate}`;
  return date || endDate || "";
}

export function getDateRangeField(value = "", field) {
  const parsed = parseDateRangeText(value);
  if (!parsed) return "";
  return field === "endDate" ? parsed.endDate : parsed.date;
}

export function updateDateRangeField(value = "", field, nextValue = "") {
  const parsed = parseDateRangeText(value) ?? { date: "", endDate: "" };
  const nextRange = { ...parsed, [field]: nextValue };
  return formatDateRangeText(nextRange.date, nextRange.endDate);
}

export function isDateWithinEvent(date, event) {
  if (!event.endDate) return event.date === date;
  return event.date <= date && date <= event.endDate;
}

export function getMonthCellDisplayEvents(dayEvents = []) {
  const mathExamEvents = dayEvents.filter((event) => event.type === "mathExam").slice(0, 5);
  const academicEvents = dayEvents.filter((event) => event.type !== "examPeriod" && event.type !== "mathExam").slice(0, 3);
  const hiddenCount =
    Math.max(0, dayEvents.filter((event) => event.type === "mathExam").length - mathExamEvents.length) +
    Math.max(0, dayEvents.filter((event) => event.type !== "examPeriod" && event.type !== "mathExam").length - academicEvents.length);
  return { academicEvents, hiddenCount, mathExamEvents };
}

export function compactCalendarLabel(value = "") {
  return String(value ?? "").replace(/\s+/g, "");
}

function escapeCalendarRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function normalizeRepeatedSchoolPrefix(value = "", schoolName = "") {
  const cleanSchool = String(schoolName || "").trim();
  let label = String(value || "").trim().replace(/\s+/g, " ");
  if (!cleanSchool || !label) return label;
  const duplicatePrefix = new RegExp(`^${escapeCalendarRegExp(cleanSchool)}\\s+${escapeCalendarRegExp(cleanSchool)}`);
  while (duplicatePrefix.test(label)) {
    label = label.replace(duplicatePrefix, cleanSchool);
  }
  return label;
}

export function joinCalendarLabel(schoolName = "", detail = "", fallback = "") {
  const cleanSchool = String(schoolName || "").trim();
  const cleanDetail = normalizeRepeatedSchoolPrefix(String(detail || fallback || "").trim(), cleanSchool);
  if (!cleanDetail) return cleanSchool || "학교 미입력";
  if (!cleanSchool) return cleanDetail;
  if (compactCalendarLabel(cleanDetail).startsWith(compactCalendarLabel(cleanSchool))) {
    return cleanDetail;
  }
  return normalizeRepeatedSchoolPrefix(`${cleanSchool} ${cleanDetail}`, cleanSchool);
}

export function formatCalendarEventLabel(event = {}) {
  if (event.type === "mathExam") {
    return joinCalendarLabel(event.schoolName, event.title || event.examSubject || "수학시험");
  }
  if (event.type === "examPeriod") {
    return joinCalendarLabel(event.schoolName, event.title || "시험기간");
  }
  return joinCalendarLabel(event.schoolName, event.title || event.examSubject || "일정");
}

export function formatCalendarSummaryLabel(event = {}) {
  return [event.schoolName, event.grade, event.examSubject || event.subject]
    .filter(Boolean)
    .join(" ")
    .trim() || formatCalendarEventLabel(event);
}

export function getSchoolCalendarFilterGroup(event = {}) {
  if (event.type === "examPeriod") return "examPeriod";
  if (event.type === "mathExam") return "mathExam";
  if (event.type === "vacation") return "vacation";
  if (event.type === "schoolEvent") return "schoolEvent";
  return "custom";
}

export function formatPeriodSummaryLabel(event = {}) {
  const schools = Array.isArray(event.schoolNames) ? event.schoolNames.filter(Boolean) : [];
  if (!schools.length) return event.schoolName || "시험기간";
  if (schools.length <= 2) return schools.join(", ");
  return `${schools.slice(0, 2).join(", ")} 외 ${schools.length - 2}`;
}
