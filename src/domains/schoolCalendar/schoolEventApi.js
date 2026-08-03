export async function saveSchoolEventRequest({
  event,
  request,
  timeoutMessage = "학사일정 저장이 15초를 넘었습니다. 현재 입력을 유지한 채 서버 저장 상태를 확인해 주세요."
}) {
  if (!event?.eventId) throw new Error("저장할 학사일정 ID가 필요합니다.");
  if (typeof request !== "function") throw new Error("학사일정 저장 request가 필요합니다.");

  const result = await request(
    "/api/school-events",
    { schoolEvent: event },
    15000,
    timeoutMessage
  );
  if (
    result?.source !== "supabase" ||
    result?.verified !== true ||
    result?.schoolEvent?.eventId !== event.eventId ||
    !result?.schoolEvent?.updatedAt
  ) {
    throw new Error("학사일정의 Supabase 저장 결과를 재조회로 확인하지 못했습니다. 현재 입력은 유지됩니다.");
  }
  return result.schoolEvent;
}

export async function deleteSchoolEventRequest({
  event,
  fetchImpl = fetch,
  resolveApiUrl = (path) => path
}) {
  if (!event?.eventId) throw new Error("삭제할 학사일정 ID가 필요합니다.");
  if (!event.updatedAt) {
    throw new Error("학사일정의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 삭제해 주세요.");
  }

  const path = `/api/school-events?id=${encodeURIComponent(event.eventId)}&expectedUpdatedAt=${encodeURIComponent(event.updatedAt)}`;
  const response = await fetchImpl(resolveApiUrl(path), { method: "DELETE" });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    const error = new Error(result.error || "학사일정 삭제 실패");
    error.code = result.code;
    error.currentSchoolEvent = result.currentSchoolEvent;
    error.statusCode = response.status;
    throw error;
  }
  if (
    result.source !== "supabase" ||
    result.verified !== true ||
    result.schoolEventId !== event.eventId
  ) {
    throw new Error("학사일정 삭제 결과를 Supabase 재조회로 확인하지 못했습니다. 목록을 새로고침해 주세요.");
  }
  return result;
}

export async function saveAndVerifySchoolEvent({ event, read, request }) {
  if (typeof read !== "function") throw new Error("학사일정 재조회 request가 필요합니다.");
  const savedEvent = await saveSchoolEventRequest({ event, request });
  const verification = await read(
    "/api/school-events",
    12000,
    "학사일정 저장 후 서버 재조회가 12초를 넘었습니다. 현재 입력은 유지됩니다."
  );
  const verifiedEvent = verification?.schoolEvents?.find((item) => item.eventId === savedEvent.eventId);
  if (
    verification?.source !== "supabase" ||
    !Array.isArray(verification?.schoolEvents) ||
    !verifiedEvent ||
    !areSchoolEventsPersistedEqual(savedEvent, verifiedEvent) ||
    !areSchoolEventTimestampsEqual(savedEvent.updatedAt, verifiedEvent.updatedAt)
  ) {
    throw new Error("학사일정 저장 후 Supabase 원천 재조회를 확인하지 못했습니다. 현재 입력은 유지됩니다.");
  }
  return { schoolEvent: verifiedEvent, schoolEvents: verification.schoolEvents };
}

export async function deleteAndVerifySchoolEvent({ event, fetchImpl, read, resolveApiUrl }) {
  if (typeof read !== "function") throw new Error("학사일정 재조회 request가 필요합니다.");
  await deleteSchoolEventRequest({ event, fetchImpl, resolveApiUrl });
  const verification = await read(
    "/api/school-events",
    12000,
    "학사일정 삭제 후 서버 재조회가 12초를 넘었습니다. 목록을 새로고침해 주세요."
  );
  if (
    verification?.source !== "supabase" ||
    !Array.isArray(verification?.schoolEvents) ||
    verification.schoolEvents.some((item) => item.eventId === event.eventId)
  ) {
    throw new Error("학사일정 삭제 후 Supabase 원천 재조회를 확인하지 못했습니다.");
  }
  return { schoolEventId: event.eventId, schoolEvents: verification.schoolEvents };
}
import {
  areSchoolEventsPersistedEqual,
  areSchoolEventTimestampsEqual
} from "./schoolEventPersistence.js";
