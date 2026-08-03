const schoolEventPersistenceFields = [
  "eventId",
  "schoolName",
  "title",
  "type",
  "date",
  "endDate",
  "memo",
  "color",
  "grade",
  "examCycle",
  "examSubject",
  "mathSubjectByDate"
];

function normalizeComparableValue(value) {
  if (value == null) return "";
  if (Array.isArray(value)) return JSON.stringify(value.map(normalizeComparableValue));
  if (typeof value === "object") {
    return JSON.stringify(Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, nestedValue]) => [key, normalizeComparableValue(nestedValue)])
    ));
  }
  return String(value);
}

export function createSchoolEventVersionFilter(eventId, expectedUpdatedAt) {
  return [
    `school_event_id=eq.${encodeURIComponent(eventId)}`,
    `updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`
  ].join("&");
}

export function isSchoolEventInsertConflict(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return (
    message.includes("23505") ||
    message.includes("duplicate key") ||
    message.includes("unique constraint")
  );
}

export function createSchoolEventConflict(eventId, currentSchoolEvent = null, reason = "updated") {
  const reasonMessage = reason === "deleted"
    ? "다른 화면에서 먼저 삭제되었습니다."
    : reason === "duplicate"
      ? "같은 일정 ID가 이미 다른 내용으로 저장되어 있습니다."
      : "다른 화면에서 먼저 변경되었습니다.";
  return {
    code: "SCHOOL_EVENT_CONFLICT",
    currentSchoolEvent,
    eventId,
    message: `학사일정 ${eventId}가 ${reasonMessage} 현재 입력은 유지했으니 서버 저장본을 확인해 주세요.`
  };
}

export function createNextSchoolEventUpdatedAt(expectedUpdatedAt = "", now = Date.now()) {
  const expectedTime = new Date(expectedUpdatedAt).getTime();
  const nextTime = Number.isFinite(expectedTime)
    ? Math.max(now, expectedTime + 1)
    : now;
  return new Date(nextTime).toISOString();
}

export function areSchoolEventTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}

export function areSchoolEventsPersistedEqual(requested = {}, persisted = {}) {
  return schoolEventPersistenceFields.every(
    (field) => normalizeComparableValue(requested[field]) === normalizeComparableValue(persisted[field])
  );
}
