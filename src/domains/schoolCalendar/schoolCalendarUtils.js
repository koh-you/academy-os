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
