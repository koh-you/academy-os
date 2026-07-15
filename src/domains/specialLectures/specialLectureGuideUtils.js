const defaultSpecialLectureBrandName = "으뜸수학 고태영T";

function getKoreaDateString(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

const today = getKoreaDateString();

export const specialLectureSeasonOptions = [
  { value: "summer", label: "여름방학" },
  { value: "winter", label: "겨울방학" },
  { value: "custom", label: "직접 입력" }
];

export const specialLectureApplicationStatusOptions = [
  { value: "received", label: "접수" },
  { value: "confirmed", label: "확정" },
  { value: "contacted", label: "연락 완료" },
  { value: "waiting", label: "대기" },
  { value: "canceled", label: "취소" }
];

export function getSpecialLectureSeasonShortLabel(season = "summer") {
  if (season === "winter") return "겨울";
  if (season === "summer") return "여름";
  return "";
}

export function replaceSpecialLectureToken(value = "", previousToken = "", nextToken = "") {
  const text = String(value ?? "");
  const previousText = String(previousToken ?? "").trim();
  const nextText = String(nextToken ?? "").trim();
  if (!previousText || !nextText || !text.includes(previousText)) return text;
  return text.replace(previousText, nextText);
}

export function replaceSpecialLectureYearToken(value = "", previousYear = "", nextYear = "") {
  const text = String(value ?? "");
  const fromYear = String(previousYear ?? "").trim();
  const toYear = String(nextYear ?? "").trim();
  if (!/^\d{4}$/.test(toYear)) return text;
  if (/^\d{4}$/.test(fromYear) && text.includes(fromYear)) return text.replace(fromYear, toYear);
  return text.replace(/\d{4}/, toYear);
}

export function replaceSpecialLectureYearInDateKey(value = "", previousYear = "", nextYear = "") {
  const text = String(value ?? "").trim();
  const fromYear = String(previousYear ?? "").trim();
  const toYear = String(nextYear ?? "").trim();
  if (!/^\d{4}$/.test(toYear)) return text;
  if (/^\d{4}$/.test(fromYear) && text.startsWith(`${fromYear}-`)) {
    return `${toYear}${text.slice(fromYear.length)}`;
  }
  if (/^\d{4}-/.test(text)) return `${toYear}${text.slice(4)}`;
  return text;
}

export const specialLectureWeekdayOptions = [
  { value: 1, label: "월" },
  { value: 2, label: "화" },
  { value: 3, label: "수" },
  { value: 4, label: "목" },
  { value: 5, label: "금" },
  { value: 6, label: "토" },
  { value: 0, label: "일" }
];

export const defaultSpecialLecturePricePerSession = 37500;
export const defaultSpecialLecturePricePerHour = 12500;
export const defaultSpecialLectureApplicationUrl = "https://tally.so/r/eql9aJ";

export const defaultSpecialLectureGuides = [
  {
    specialLectureGuideId: "special_lecture_2026_summer_high1_clinic_mwf",
    slug: "2026-summer-high1-clinic-mwf",
    year: "2026",
    season: "summer",
    title: "2026 여름 개별 진도 클리닉",
    shortTitle: "여름 개별 진도 클리닉",
    audience: "예비고1, 예비고2",
    goal: "개별 진도와 취약 단원을 학생별로 점검합니다.",
    specialNotes: "",
    days: "월·수·금",
    time: "13:00-16:00",
    periodStart: "2026-07-22",
    periodEnd: "2026-08-07",
    lessonCount: "총 8회 · 24시간",
    totalHours: 24,
    tuition: "300,000원",
    pricingMode: "perSession",
    pricePerSession: 37500,
    pricePerHour: 12500,
    teacher: "고태영T",
    textbook: "개별 선정",
    defaultSessionTopic: "개별 클리닉",
    scheduleRules: [
      { days: [1, 3, 5], startTime: "13:00", endTime: "16:00" }
    ],
    summary: "방학 동안 각 학생의 현재 진도를 기준으로 빈틈을 정리하고, 다음 학기 수업을 따라갈 수 있는 계산력과 개념 연결을 점검합니다.",
    highlights: [
      "학생별 현재 진도와 취약 단원을 기준으로 수업합니다.",
      "새 교재를 일괄 지정하지 않고 필요한 교재를 개별 선정합니다.",
      "매 회차 수업에서 풀이 습관과 복습 우선순위를 함께 확인합니다."
    ],
    sessions: [
      { date: "7월 22일", dateKey: "2026-07-22", day: "수", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" },
      { date: "7월 24일", dateKey: "2026-07-24", day: "금", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" },
      { date: "7월 27일", dateKey: "2026-07-27", day: "월", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" },
      { date: "7월 29일", dateKey: "2026-07-29", day: "수", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" },
      { date: "7월 31일", dateKey: "2026-07-31", day: "금", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" },
      { date: "8월 3일", dateKey: "2026-08-03", day: "월", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" },
      { date: "8월 5일", dateKey: "2026-08-05", day: "수", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" },
      { date: "8월 7일", dateKey: "2026-08-07", day: "금", startTime: "13:00", endTime: "16:00", topic: "개별 클리닉" }
    ],
    noticeMemo: "자세한 커리큘럼과 안내사항은 링크에서 확인 부탁드립니다.",
    applicationUrl: defaultSpecialLectureApplicationUrl,
    updatedAt: "2026-07-14T00:00:00.000Z"
  },
  {
    specialLectureGuideId: "special_lecture_2026_summer_high1_common_math2_tts",
    slug: "2026-summer-high1-common-math2-tts",
    year: "2026",
    season: "summer",
    title: "2026 고1 여름 공통수학2 유형 문제풀이",
    shortTitle: "고1 공통수학2 여름특강",
    audience: "고등학교 1학년",
    goal: "공통수학2 핵심 단원을 유형별 문제풀이로 정리합니다.",
    specialNotes: "",
    days: "화·목 / 토",
    time: "화·목 13:00-16:00, 토 16:00-19:00",
    periodStart: "2026-07-21",
    periodEnd: "2026-08-11",
    lessonCount: "총 10회 · 30시간",
    totalHours: 30,
    tuition: "375,000원",
    pricingMode: "perSession",
    pricePerSession: 37500,
    pricePerHour: 12500,
    teacher: "고태영T",
    textbook: "올림포스 유형편 공통수학2",
    defaultSessionTopic: "공통수학2 유형별 문제풀이",
    scheduleRules: [
      { days: [2, 4], startTime: "13:00", endTime: "16:00" },
      { days: [6], startTime: "16:00", endTime: "19:00" }
    ],
    summary: "평면좌표와 직선, 원의 방정식, 도형의 이동, 집합과 명제를 방학 중 한 흐름으로 묶어 고1 2학기 학습의 출발점을 안정적으로 만듭니다.",
    highlights: [
      "단원별 핵심 개념을 확인한 뒤 바로 유형 문제로 연결합니다.",
      "학교 내신에서 자주 흔들리는 계산 과정과 조건 해석을 점검합니다.",
      "수업 후 복습 방향을 정리해 다음 회차에서 누적 확인합니다."
    ],
    sessions: [
      { date: "7월 21일", dateKey: "2026-07-21", day: "화", startTime: "13:00", endTime: "16:00", topic: "01. 평면좌표와 직선의 방정식" },
      { date: "7월 23일", dateKey: "2026-07-23", day: "목", startTime: "13:00", endTime: "16:00", topic: "01. 평면좌표와 직선의 방정식" },
      { date: "7월 25일", dateKey: "2026-07-25", day: "토", startTime: "16:00", endTime: "19:00", topic: "02. 원의 방정식" },
      { date: "7월 28일", dateKey: "2026-07-28", day: "화", startTime: "13:00", endTime: "16:00", topic: "02. 원의 방정식" },
      { date: "7월 30일", dateKey: "2026-07-30", day: "목", startTime: "13:00", endTime: "16:00", topic: "03. 도형의 이동" },
      { date: "8월 1일", dateKey: "2026-08-01", day: "토", startTime: "16:00", endTime: "19:00", topic: "03. 도형의 이동" },
      { date: "8월 4일", dateKey: "2026-08-04", day: "화", startTime: "13:00", endTime: "16:00", topic: "04. 집합" },
      { date: "8월 6일", dateKey: "2026-08-06", day: "목", startTime: "13:00", endTime: "16:00", topic: "04. 집합" },
      { date: "8월 8일", dateKey: "2026-08-08", day: "토", startTime: "16:00", endTime: "19:00", topic: "05. 명제" },
      { date: "8월 11일", dateKey: "2026-08-11", day: "화", startTime: "13:00", endTime: "16:00", topic: "05. 명제" }
    ],
    noticeMemo: "자세한 커리큘럼과 안내사항은 링크에서 확인 부탁드립니다.",
    applicationUrl: defaultSpecialLectureApplicationUrl,
    updatedAt: "2026-07-14T00:00:00.000Z"
  }
];

export function normalizeSpecialLectureSession(session = {}, index = 0) {
  return {
    date: String(session.date ?? "").trim(),
    dateKey: String(session.dateKey ?? session.date_key ?? "").trim(),
    day: String(session.day ?? "").trim(),
    startTime: String(session.startTime ?? session.start_time ?? "").trim(),
    endTime: String(session.endTime ?? session.end_time ?? "").trim(),
    topic: String(session.topic ?? session.content ?? "").trim() || `회차 ${index + 1}`
  };
}

export function normalizeSpecialLectureScheduleRule(rule = {}) {
  const days = Array.isArray(rule.days)
    ? rule.days.map((day) => Number(day)).filter((day) => specialLectureWeekdayOptions.some((option) => option.value === day))
    : [];
  return {
    days: [...new Set(days)],
    startTime: String(rule.startTime ?? rule.start_time ?? "13:00").slice(0, 5),
    endTime: String(rule.endTime ?? rule.end_time ?? "16:00").slice(0, 5)
  };
}

export function normalizeSpecialLectureScheduleRules(rules = []) {
  const normalized = Array.isArray(rules)
    ? rules.map(normalizeSpecialLectureScheduleRule).filter((rule) => rule.days.length > 0 && rule.startTime && rule.endTime)
    : [];
  return normalized.length ? normalized : [{ days: [1, 3, 5], startTime: "13:00", endTime: "16:00" }];
}

export function getWeekdayLabel(dayValue) {
  return specialLectureWeekdayOptions.find((option) => option.value === Number(dayValue))?.label ?? "";
}

function parseDateKeyParts(dateKey = "") {
  const match = String(dateKey ?? "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3])
  };
}

export function createDateFromKey(dateKey = "") {
  const parts = parseDateKeyParts(dateKey);
  if (!parts) return null;
  const date = new Date(parts.year, parts.month - 1, parts.day);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatSpecialLectureDateLabel(dateKey = "") {
  const parts = parseDateKeyParts(dateKey);
  if (!parts) return String(dateKey ?? "");
  return `${parts.month}월 ${parts.day}일`;
}

export function getSpecialLectureDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function timeToMinutes(value = "") {
  const [hour, minute] = String(value ?? "").split(":").map((part) => Number(part));
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return 0;
  return hour * 60 + minute;
}

export function getSpecialLectureSessionHours(session = {}) {
  const start = timeToMinutes(session.startTime);
  const end = timeToMinutes(session.endTime);
  return end > start ? (end - start) / 60 : 0;
}

export function getSpecialLectureTotalHours(sessions = []) {
  return sessions.reduce((sum, session) => sum + getSpecialLectureSessionHours(session), 0);
}

export function formatSpecialLectureHours(hours = 0) {
  const safeHours = Number(hours);
  if (!Number.isFinite(safeHours) || safeHours <= 0) return "";
  return Number.isInteger(safeHours) ? `${safeHours}시간` : `${safeHours.toFixed(1)}시간`;
}

export function formatSpecialLectureLessonCount(sessionCount = 0, totalHours = 0) {
  const countText = `총 ${sessionCount}회`;
  const hoursText = formatSpecialLectureHours(totalHours);
  return hoursText ? `${countText} · ${hoursText}` : countText;
}

export function formatCurrencyWon(value = 0) {
  const number = Math.round(Number(value) || 0);
  return `${number.toLocaleString("ko-KR")}원`;
}

export function parseCurrencyNumber(value = "") {
  const number = Number(String(value ?? "").replaceAll(/[^\d.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

export function calculateSpecialLectureTuition({ pricingMode = "perSession", pricePerHour = 0, pricePerSession = 0, sessionCount = 0, totalHours = 0 } = {}) {
  if (pricingMode === "perHour") return totalHours * Number(pricePerHour || 0);
  return sessionCount * Number(pricePerSession || 0);
}

export function formatSpecialLectureRuleDays(rule = {}) {
  return (rule.days ?? []).map(getWeekdayLabel).filter(Boolean).join("·");
}

export function formatSpecialLectureDaysFromRules(rules = []) {
  return rules.map(formatSpecialLectureRuleDays).filter(Boolean).join(" / ");
}

export function formatSpecialLectureTimeFromRules(rules = []) {
  if (!rules.length) return "";
  const timeGroups = rules.map((rule) => ({
    days: formatSpecialLectureRuleDays(rule),
    time: `${rule.startTime}-${rule.endTime}`
  }));
  const uniqueTimes = [...new Set(timeGroups.map((group) => group.time))];
  if (uniqueTimes.length === 1) return uniqueTimes[0];
  return timeGroups.map((group) => `${group.days} ${group.time}`).join(", ");
}

export function generateSpecialLectureSessions(guide = {}) {
  const start = createDateFromKey(guide.periodStart);
  const end = createDateFromKey(guide.periodEnd);
  const rules = normalizeSpecialLectureScheduleRules(guide.scheduleRules);
  if (!start || !end || end < start) return [];
  const sessions = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    const weekday = cursor.getDay();
    const dateKey = getSpecialLectureDateKey(cursor);
    rules
      .filter((rule) => rule.days.includes(weekday))
      .forEach((rule) => {
        sessions.push(normalizeSpecialLectureSession({
          date: formatSpecialLectureDateLabel(dateKey),
          dateKey,
          day: getWeekdayLabel(weekday),
          startTime: rule.startTime,
          endTime: rule.endTime,
          topic: guide.defaultSessionTopic || guide.goal || "특강 수업"
        }, sessions.length));
      });
    cursor.setDate(cursor.getDate() + 1);
  }
  return sessions.sort((left, right) =>
    String(left.dateKey || left.date).localeCompare(String(right.dateKey || right.date)) ||
    String(left.startTime).localeCompare(String(right.startTime))
  );
}

export function getSpecialLectureCalculatedFields(guide = {}) {
  const sessions = Array.isArray(guide.sessions) ? guide.sessions.map(normalizeSpecialLectureSession) : [];
  const sessionCount = sessions.length;
  const totalHours = getSpecialLectureTotalHours(sessions);
  const pricePerSession = Number(guide.pricePerSession) || defaultSpecialLecturePricePerSession;
  const pricePerHour = Number(guide.pricePerHour) || defaultSpecialLecturePricePerHour;
  const pricingMode = guide.pricingMode === "perHour" ? "perHour" : "perSession";
  const tuitionValue = calculateSpecialLectureTuition({ pricingMode, pricePerHour, pricePerSession, sessionCount, totalHours });
  return {
    lessonCount: formatSpecialLectureLessonCount(sessionCount, totalHours),
    totalHours,
    tuition: formatCurrencyWon(tuitionValue)
  };
}

export function shouldReplaceSpecialLectureDefaultTopics(sessions = [], previousDefaultTopic = "") {
  const defaultTopic = String(previousDefaultTopic ?? "").trim();
  if (!sessions.length) return true;
  return sessions.every((session) => {
    const topic = String(session?.topic ?? "").trim();
    return !topic || topic === defaultTopic;
  });
}

export function applySpecialLectureCalculatedScheduleDraft(guide = {}, previousGuide = guide) {
  const normalizedGuide = normalizeSpecialLectureGuide(guide, previousGuide);
  const generatedSessions = generateSpecialLectureSessions(normalizedGuide);
  const existingSessions = Array.isArray(previousGuide?.sessions)
    ? previousGuide.sessions.map(normalizeSpecialLectureSession)
    : [];
  const replaceDefaultTopics = shouldReplaceSpecialLectureDefaultTopics(existingSessions, previousGuide?.defaultSessionTopic);
  const sessions = generatedSessions.length
    ? generatedSessions.map((session, index) => ({
        ...session,
        topic: replaceDefaultTopics ? session.topic : existingSessions[index]?.topic || session.topic
      }))
    : normalizedGuide.sessions;
  const totalHours = getSpecialLectureTotalHours(sessions);
  const tuition = calculateSpecialLectureTuition({
    pricingMode: normalizedGuide.pricingMode,
    pricePerHour: normalizedGuide.pricePerHour,
    pricePerSession: normalizedGuide.pricePerSession,
    sessionCount: sessions.length,
    totalHours
  });
  return normalizeSpecialLectureGuide({
    ...normalizedGuide,
    days: generatedSessions.length ? formatSpecialLectureDaysFromRules(normalizedGuide.scheduleRules) : normalizedGuide.days,
    time: generatedSessions.length ? formatSpecialLectureTimeFromRules(normalizedGuide.scheduleRules) : normalizedGuide.time,
    sessions,
    lessonCount: formatSpecialLectureLessonCount(sessions.length, totalHours),
    totalHours,
    tuition: formatCurrencyWon(tuition),
    updatedAt: new Date().toISOString()
  }, previousGuide);
}

export function createNextSpecialLectureSession(sessions = [], guide = {}) {
  const normalizedSessions = sessions.map(normalizeSpecialLectureSession);
  const lastSession = normalizedSessions[normalizedSessions.length - 1] ?? {};
  let nextDateKey = String(guide.periodStart || today || "").trim();
  const lastDate = createDateFromKey(lastSession.dateKey);
  if (lastDate) {
    lastDate.setDate(lastDate.getDate() + 1);
    nextDateKey = getSpecialLectureDateKey(lastDate);
  }
  const weekday = createDateFromKey(nextDateKey)?.getDay();
  return normalizeSpecialLectureSession({
    date: formatSpecialLectureDateLabel(nextDateKey),
    dateKey: nextDateKey,
    day: getWeekdayLabel(weekday),
    startTime: lastSession.startTime || "13:00",
    endTime: lastSession.endTime || "16:00",
    topic: guide.defaultSessionTopic || "특강 수업"
  }, normalizedSessions.length);
}

export function getSpecialLectureWeekdayCounts(sessions = []) {
  const counts = new Map(specialLectureWeekdayOptions.map((option) => [option.label, 0]));
  sessions.forEach((session) => {
    const label = session.day || getWeekdayLabel(createDateFromKey(session.dateKey)?.getDay());
    if (!label) return;
    counts.set(label, (counts.get(label) ?? 0) + 1);
  });
  return specialLectureWeekdayOptions
    .map((option) => ({ label: option.label, count: counts.get(option.label) ?? 0 }))
    .filter((item) => item.count > 0);
}

export function getSpecialLectureRangeFromSessions(sessions = []) {
  const dateKeys = sessions.map((session) => session.dateKey).filter(Boolean).sort();
  return {
    start: dateKeys[0] || "",
    end: dateKeys[dateKeys.length - 1] || ""
  };
}

export function getSpecialLectureEndDateKey(guide = {}) {
  const sessionRange = getSpecialLectureRangeFromSessions(guide.sessions ?? []);
  return String(guide.periodEnd || sessionRange.end || "").trim();
}

export function getSpecialLectureStartDateKey(guide = {}) {
  const sessionRange = getSpecialLectureRangeFromSessions(guide.sessions ?? []);
  return String(guide.periodStart || sessionRange.start || "").trim();
}

export function isSpecialLectureArchived(guide = {}) {
  return guide.status === "archived" || Boolean(guide.archivedAt);
}

export function isSpecialLecturePast(guide = {}, todayKey = today) {
  const endDate = getSpecialLectureEndDateKey(guide);
  return Boolean(endDate && endDate < todayKey);
}

export function isSpecialLecturePrimaryGuide(guide = {}) {
  return !isSpecialLectureArchived(guide) && !isSpecialLecturePast(guide);
}

export function getSpecialLectureStatusBadge(guide = {}, todayKey = today) {
  if (isSpecialLectureArchived(guide)) return { label: "보관", tone: "archived" };
  if (isSpecialLecturePast(guide, todayKey)) return { label: "지난 특강", tone: "past" };
  const startDate = getSpecialLectureStartDateKey(guide);
  if (startDate && startDate > todayKey) return { label: "예정", tone: "upcoming" };
  return { label: "진행중", tone: "active" };
}

export function getDefaultSpecialLectureGuideId(guides = []) {
  return guides.find(isSpecialLecturePrimaryGuide)?.specialLectureGuideId || "";
}

function getCalendarMonthLabel(year, monthIndex) {
  return `${year}년 ${monthIndex + 1}월`;
}

export function createSpecialLectureCalendarMonths(guide = {}) {
  const sessions = Array.isArray(guide.sessions) ? guide.sessions.map(normalizeSpecialLectureSession) : [];
  const inferredRange = getSpecialLectureRangeFromSessions(sessions);
  const startKey = guide.periodStart || inferredRange.start;
  const endKey = guide.periodEnd || inferredRange.end;
  const start = createDateFromKey(startKey);
  const end = createDateFromKey(endKey);
  if (!start || !end || end < start) return [];

  const sessionMap = new Map();
  sessions.forEach((session) => {
    if (!session.dateKey) return;
    const current = sessionMap.get(session.dateKey) ?? [];
    sessionMap.set(session.dateKey, [...current, session]);
  });

  const months = [];
  const cursorMonth = new Date(start.getFullYear(), start.getMonth(), 1);
  const lastMonth = new Date(end.getFullYear(), end.getMonth(), 1);
  while (cursorMonth <= lastMonth) {
    const year = cursorMonth.getFullYear();
    const month = cursorMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const gridStart = new Date(firstDay);
    gridStart.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7));
    const gridEnd = new Date(lastDay);
    gridEnd.setDate(lastDay.getDate() + (6 - ((lastDay.getDay() + 6) % 7)));

    const days = [];
    const dayCursor = new Date(gridStart);
    while (dayCursor <= gridEnd) {
      const dateKey = getSpecialLectureDateKey(dayCursor);
      const currentSessions = sessionMap.get(dateKey) ?? [];
      days.push({
        dateKey,
        day: dayCursor.getDate(),
        inRange: dayCursor >= start && dayCursor <= end,
        isCurrentMonth: dayCursor.getMonth() === month,
        sessions: currentSessions
      });
      dayCursor.setDate(dayCursor.getDate() + 1);
    }

    months.push({
      key: `${year}-${String(month + 1).padStart(2, "0")}`,
      label: getCalendarMonthLabel(year, month),
      days
    });
    cursorMonth.setMonth(cursorMonth.getMonth() + 1);
  }
  return months;
}

export function normalizeSpecialLectureGuide(guide = {}, fallback = defaultSpecialLectureGuides[0], index = 0) {
  const source = { ...(fallback ?? {}), ...(guide ?? {}) };
  const id = String(source.specialLectureGuideId || source.id || `special_lecture_${index + 1}`).trim();
  const slug = String(source.slug || id).trim().replaceAll(/\s+/g, "-").toLowerCase();
  const scheduleRules = normalizeSpecialLectureScheduleRules(source.scheduleRules);
  const sessions = Array.isArray(source.sessions)
    ? source.sessions.map(normalizeSpecialLectureSession).filter((session) => session.date || session.topic)
    : [];
  const calculated = getSpecialLectureCalculatedFields({
    ...source,
    sessions,
    scheduleRules
  });
  return {
    specialLectureGuideId: id,
    slug,
    year: String(source.year ?? "").trim(),
    season: String(source.season ?? "summer").trim(),
    title: String(source.title ?? "").trim(),
    shortTitle: String(source.shortTitle || source.title || "").trim(),
    audience: String(source.audience ?? "").trim(),
    goal: String(source.goal ?? "").trim(),
    specialNotes: String(source.specialNotes ?? source.special_notes ?? "").replace(/\r\n?/g, "\n"),
    days: String(source.days ?? "").trim(),
    time: String(source.time ?? "").trim(),
    periodStart: String(source.periodStart ?? "").trim(),
    periodEnd: String(source.periodEnd ?? "").trim(),
    lessonCount: String(source.lessonCount || calculated.lessonCount || "").trim(),
    totalHours: Number(source.totalHours ?? calculated.totalHours) || 0,
    tuition: String(source.tuition || calculated.tuition || "").trim(),
    pricingMode: source.pricingMode === "perHour" ? "perHour" : "perSession",
    pricePerSession: Number(source.pricePerSession) || defaultSpecialLecturePricePerSession,
    pricePerHour: Number(source.pricePerHour) || defaultSpecialLecturePricePerHour,
    teacher: String(source.teacher ?? "고태영T").trim(),
    textbook: String(source.textbook ?? "").trim(),
    defaultSessionTopic: String(source.defaultSessionTopic ?? source.goal ?? "특강 수업").trim(),
    scheduleRules,
    summary: String(source.summary ?? "").trim(),
    highlights: Array.isArray(source.highlights)
      ? source.highlights.map((item) => String(item ?? "").trim()).filter(Boolean).slice(0, 6)
      : [],
    sessions,
    noticeMemo: String(source.noticeMemo ?? "").trim(),
    applicationUrl: String(guide?.applicationUrl ?? guide?.application_url ?? fallback?.applicationUrl ?? fallback?.application_url ?? defaultSpecialLectureApplicationUrl).trim(),
    status: source.status === "archived" || source.archived === true ? "archived" : "active",
    archivedAt: String(source.archivedAt ?? source.archived_at ?? "").trim(),
    updatedAt: String(source.updatedAt ?? "").trim()
  };
}

export function createSpecialLectureGuideFromTemplate(template = defaultSpecialLectureGuides[0]) {
  const now = new Date();
  const year = String(now.getFullYear());
  const season = "summer";
  const id = `special_lecture_${year}_${season}_${Date.now().toString(36)}`;
  const guide = normalizeSpecialLectureGuide({
    ...template,
    specialLectureGuideId: id,
    slug: `${year}-${season}-special-${Date.now().toString(36)}`,
    year,
    season,
    title: `${year} 여름방학 특강`,
    shortTitle: "여름방학 특강",
    audience: "",
    goal: "",
    specialNotes: "",
    periodStart: "",
    periodEnd: "",
    days: "",
    time: "",
    lessonCount: "",
    totalHours: 0,
    tuition: "",
    textbook: "",
    defaultSessionTopic: "특강 수업",
    sessions: [],
    applicationUrl: template.applicationUrl || defaultSpecialLectureApplicationUrl,
    status: "active",
    archivedAt: "",
    updatedAt: new Date().toISOString()
  }, template);
  return guide;
}

export function normalizeSpecialLectureGuides(guides = defaultSpecialLectureGuides) {
  const sourceGuides = Array.isArray(guides) ? guides : defaultSpecialLectureGuides;
  return sourceGuides.map((guide, index) =>
    normalizeSpecialLectureGuide(guide, defaultSpecialLectureGuides[index] ?? defaultSpecialLectureGuides[0], index)
  );
}

export function normalizeSpecialLectureApplication(application = {}, index = 0) {
  const nowIso = new Date().toISOString();
  const id = String(application.applicationId || application.id || `special_lecture_application_${index + 1}`).trim();
  const status = specialLectureApplicationStatusOptions.some((option) => option.value === application.status)
    ? application.status
    : "received";
  return {
    applicationId: id,
    specialLectureGuideId: String(application.specialLectureGuideId || application.special_lecture_guide_id || "").trim(),
    guideSlug: String(application.guideSlug || application.guide_slug || application.guideId || "").trim(),
    campaign: String(application.campaign || "").trim(),
    source: String(application.source || "manual").trim(),
    sourceSubmissionId: String(application.sourceSubmissionId || application.source_submission_id || "").trim(),
    formId: String(application.formId || application.form_id || "").trim(),
    formName: String(application.formName || application.form_name || "").trim(),
    status,
    studentName: String(application.studentName || application.student_name || application.name || "").trim(),
    schoolName: String(application.schoolName || application.school_name || "").trim(),
    grade: String(application.grade || "").trim(),
    studentPhone: String(application.studentPhone || application.student_phone || "").trim(),
    parentPhone: String(application.parentPhone || application.parent_phone || "").trim(),
    selectedSession: String(application.selectedSession || application.selected_session || "").trim(),
    memo: String(application.memo || "").trim(),
    rawPayload: application.rawPayload ?? application.raw_payload ?? null,
    createdAt: application.createdAt || application.created_at || nowIso,
    updatedAt: application.updatedAt || application.updated_at || nowIso
  };
}

export function normalizeSpecialLectureApplications(applications = []) {
  return Array.isArray(applications)
    ? applications.map(normalizeSpecialLectureApplication)
    : [];
}

export function getSpecialLectureApplicationStatusLabel(status = "received") {
  return specialLectureApplicationStatusOptions.find((option) => option.value === status)?.label ?? "접수";
}

export function getSpecialLectureGuideSlug(guide = {}) {
  return String(guide.slug || guide.specialLectureGuideId || defaultSpecialLectureGuides[0].slug).trim();
}

export function getSpecialLecturePublicUrl(guide = {}) {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://academy-os-blue.vercel.app";
  return `${origin}/#special-lecture?guide=${encodeURIComponent(getSpecialLectureGuideSlug(guide))}`;
}

export function getSpecialLectureGuideSlugFromLocation(location = null) {
  const sourceLocation = location || (typeof window !== "undefined" ? window.location : null);
  if (!sourceLocation) return "";
  const searchGuide = new URLSearchParams(sourceLocation.search || "").get("guide");
  if (searchGuide) return searchGuide;
  const hash = String(sourceLocation.hash || "").replace(/^#/, "");
  if (!hash.startsWith("special-lecture")) return "";
  const [, hashQuery = ""] = hash.split("?");
  const hashGuide = new URLSearchParams(hashQuery).get("guide");
  if (hashGuide) return hashGuide;
  return hash.replace(/^special-lecture\/?/, "").trim();
}

export function appendSpecialLectureUrlParams(url = "", params = {}) {
  const rawUrl = String(url ?? "").trim();
  if (!rawUrl) return "";
  try {
    const nextUrl = new URL(rawUrl);
    Object.entries(params).forEach(([key, value]) => {
      const text = String(value ?? "").trim();
      if (text) nextUrl.searchParams.set(key, text);
    });
    return nextUrl.toString();
  } catch {
    return rawUrl;
  }
}

export function getSpecialLectureApplicationUrl(guide = {}) {
  const normalizedGuide = normalizeSpecialLectureGuide(guide);
  if (!normalizedGuide.applicationUrl) return "";
  const campaign = [
    normalizedGuide.year,
    normalizedGuide.season,
    normalizedGuide.title
  ].filter(Boolean).join("_").replaceAll(/\s+/g, "_");
  return appendSpecialLectureUrlParams(normalizedGuide.applicationUrl, {
    specialLectureId: normalizedGuide.specialLectureGuideId,
    guideId: getSpecialLectureGuideSlug(normalizedGuide),
    source: "os_guide",
    campaign: campaign || "special_lecture"
  });
}

export function buildSpecialLectureNoticeText(guide = {}, guideUrl = getSpecialLecturePublicUrl(guide), brandName = defaultSpecialLectureBrandName) {
  const normalizedGuide = normalizeSpecialLectureGuide(guide);
  const specialNotes = normalizedGuide.specialNotes.trim();
  const specialNotesLines = specialNotes
    ? ["", `특이사항: ${specialNotes}`]
    : [];
  return [
    `안녕하세요. ${brandName}입니다.`,
    "",
    `${normalizedGuide.title} 안내드립니다.`,
    "",
    `대상: ${normalizedGuide.audience || "-"}`,
    `요일: ${normalizedGuide.days || "-"}`,
    `시간: ${normalizedGuide.time || "-"}`,
    `시수: ${normalizedGuide.lessonCount || "-"}`,
    ...specialNotesLines,
    "",
    normalizedGuide.noticeMemo || "자세한 커리큘럼과 안내사항은 아래 링크에서 확인 부탁드립니다.",
    guideUrl
  ].join("\n");
}

export function isSpecialLectureRoute() {
  if (typeof window === "undefined") return false;
  return window.location.pathname === "/special-lecture" || window.location.hash.startsWith("#special-lecture");
}
