// 반(class template)의 요일 묶음별 시간표.
//
// 2026-09-17 까지 반은 days + startTime + endTime 하나뿐이라 "화목 4-7 / 토 11-14" 를
// 표현할 수 없었고, 원장의 화목토 반 두 개만 코드 예외(saturdayStartTime)로 살았다.
// 이제 반은 scheduleRules = [{ days, startTime, endTime }, ...] 를 가진다. 비어 있으면
// 옛 단일 시간(days/startTime/endTime)을 규칙 하나로 본다. 모든 tenant 가 같은 길을 쓴다.
//
// 서버(classTemplateStore 검증)와 화면(반 개설 모달·달력·월 오픈)이 같이 쓴다.

export const CLASS_DAY_KEYS = Object.freeze(["mon", "tue", "wed", "thu", "fri", "sat", "sun"]);
export const CLASS_DAY_LABELS = Object.freeze({ mon: "월", tue: "화", wed: "수", thu: "목", fri: "금", sat: "토", sun: "일" });

const clockTimePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
const sundayFirstDayKeys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export function normalizeClockTime(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  const minute = Math.max(0, Math.min(59, Number(match[2]) || 0));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

/** "2026-09-17" → "wed". 한국 날짜 문자열 기준(UTC 계산이라 타임존에 안 흔들린다). */
export function getDayKeyForDate(date = "") {
  const match = String(date ?? "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return "";
  const parsed = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return sundayFirstDayKeys[parsed.getUTCDay()] ?? "";
}

function sortDayKeys(days = []) {
  return CLASS_DAY_KEYS.filter((day) => days.includes(day));
}

/**
 * 규칙 배열 정리. 잘못된 항목은 버리고(요일 없음·시간 없음·역순), 요일은 월→일 순.
 * 검증 오류를 문장으로 받고 싶으면 validateClassTemplateScheduleRules 를 쓴다.
 */
export function normalizeClassTemplateScheduleRules(rules = []) {
  if (!Array.isArray(rules)) return [];
  return rules
    .map((rule) => ({
      days: sortDayKeys(Array.from(new Set((Array.isArray(rule?.days) ? rule.days : []).map((day) => String(day).toLowerCase())))),
      startTime: normalizeClockTime(rule?.startTime),
      endTime: normalizeClockTime(rule?.endTime)
    }))
    .filter((rule) => rule.days.length > 0 && rule.startTime && rule.endTime && rule.startTime < rule.endTime);
}

/**
 * 저장 전 검증. 문제가 있으면 사람이 읽을 문장을 돌려주고, 없으면 "".
 * 같은 요일이 두 규칙에 들어가면 어느 시간을 써야 할지 정할 수 없으므로 막는다.
 */
export function validateClassTemplateScheduleRules(rules = []) {
  if (!Array.isArray(rules) || rules.length === 0) return "수업 요일을 하나 이상 선택해 주세요.";
  const seenDays = new Set();
  for (const [index, rule] of rules.entries()) {
    // 시간표가 하나뿐이면(옛 화면·단일 시간 반) 번호를 붙일 이유가 없다.
    const prefix = rules.length > 1 ? `${index + 1}번째 시간표: ` : "";
    // 같은 규칙 안의 중복(["tue","tue"])은 실수로 보고 하나로 합친다. 규칙 사이 중복만 막는다.
    const days = Array.from(new Set((Array.isArray(rule?.days) ? rule.days : []).map((day) => String(day).toLowerCase())));
    if (days.length === 0) return `${prefix}수업 요일을 하나 이상 선택해 주세요.`;
    const unknownDay = days.find((day) => !CLASS_DAY_KEYS.includes(day));
    if (unknownDay) return `${prefix}알 수 없는 요일입니다: ${unknownDay}`;
    const startTime = String(rule?.startTime ?? "").trim();
    const endTime = String(rule?.endTime ?? "").trim();
    if (!clockTimePattern.test(startTime) || !clockTimePattern.test(endTime)) return `${prefix}시작·종료 시간은 HH:MM 형식이어야 합니다.`;
    if (startTime >= endTime) return `${prefix}종료 시간은 시작 시간보다 늦어야 합니다.`;
    for (const day of days) {
      if (seenDays.has(day)) return `${CLASS_DAY_LABELS[day] ?? day}요일이 두 시간표에 겹칩니다. 한 요일은 한 시간표에만 넣어 주세요.`;
      seenDays.add(day);
    }
  }
  return "";
}

/** 반의 규칙 목록. scheduleRules 가 비면 옛 단일 시간을 규칙 하나로 돌려준다. */
export function getClassTemplateScheduleRules(template = {}) {
  const explicit = normalizeClassTemplateScheduleRules(template?.scheduleRules);
  if (explicit.length > 0) return explicit;
  return normalizeClassTemplateScheduleRules([{ days: template?.days, startTime: template?.startTime, endTime: template?.endTime }]);
}

/** 규칙에서 파생되는 요약값 — DB 의 days/start_time/end_time 과 옛 코드가 읽는다. */
export function deriveClassTemplateScheduleSummary(rules = []) {
  const normalized = normalizeClassTemplateScheduleRules(rules);
  const days = sortDayKeys(Array.from(new Set(normalized.flatMap((rule) => rule.days))));
  const [first] = [...normalized].sort((a, b) => CLASS_DAY_KEYS.indexOf(a.days[0]) - CLASS_DAY_KEYS.indexOf(b.days[0]));
  return { days, startTime: first?.startTime ?? "", endTime: first?.endTime ?? "" };
}

/**
 * 그 날짜(또는 요일 키)의 수업 시간. 규칙에 없는 요일이면 반의 기본 시간으로 돌아간다 —
 * 보강처럼 정규 요일 밖에 잡는 수업도 시간 기본값은 필요하다.
 */
export function getClassTemplateTimesForDate(template = {}, dateOrDayKey = "") {
  const dayKey = CLASS_DAY_KEYS.includes(dateOrDayKey) ? dateOrDayKey : getDayKeyForDate(dateOrDayKey);
  const rules = getClassTemplateScheduleRules(template);
  const matched = rules.find((rule) => rule.days.includes(dayKey)) ?? rules[0];
  return {
    startTime: matched?.startTime || normalizeClockTime(template?.startTime) || "",
    endTime: matched?.endTime || normalizeClockTime(template?.endTime) || ""
  };
}

/**
 * 반 카드·정산이 읽는 시간표 문구.
 * 규칙 하나: "19:00-22:00" (기존 표시 그대로). 둘 이상: "화목 16:00-19:00 / 토 10:00-13:00"
 * — 학생 개별 스케줄(scheduleOverride)과 같은 문법이라 정산 파서가 그대로 읽는다.
 */
export function formatClassTemplateScheduleLabel(template = {}) {
  const rules = getClassTemplateScheduleRules(template);
  if (rules.length === 0) {
    // 요일 없이 시간만 있는 옛 반도 시간은 보여준다.
    const startTime = normalizeClockTime(template?.startTime);
    const endTime = normalizeClockTime(template?.endTime);
    return startTime && endTime ? `${startTime}-${endTime}` : "";
  }
  if (rules.length === 1) return `${rules[0].startTime}-${rules[0].endTime}`;
  return rules
    .map((rule) => `${rule.days.map((day) => CLASS_DAY_LABELS[day]).join("")} ${rule.startTime}-${rule.endTime}`)
    .join(" / ");
}
