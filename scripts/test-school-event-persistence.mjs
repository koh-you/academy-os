import assert from "node:assert/strict";
import {
  deleteAndVerifySchoolEvent,
  deleteSchoolEventRequest,
  saveAndVerifySchoolEvent,
  saveSchoolEventRequest
} from "../src/domains/schoolCalendar/schoolEventApi.js";
import {
  areSchoolEventsPersistedEqual,
  areSchoolEventTimestampsEqual,
  createNextSchoolEventUpdatedAt,
  createSchoolEventConflict,
  createSchoolEventVersionFilter,
  isSchoolEventInsertConflict
} from "../src/domains/schoolCalendar/schoolEventPersistence.js";

const version0 = "2026-08-03T00:00:00.000Z";
const baseEvent = {
  color: "#7aa7ff",
  date: "2026-08-10",
  endDate: "2026-08-11",
  eventId: "school-event-1",
  examCycle: "",
  examSubject: "",
  grade: "고1",
  mathSubjectByDate: { "2026-08-10": "공통수학1" },
  memo: "기존 메모",
  schoolName: "안전고",
  title: "개학",
  type: "opening",
  updatedAt: version0
};

assert.equal(
  createSchoolEventVersionFilter("일정/1", "2026-08-03T00:00:00.000+00:00"),
  "school_event_id=eq.%EC%9D%BC%EC%A0%95%2F1&updated_at=eq.2026-08-03T00%3A00%3A00.000%2B00%3A00"
);
assert.equal(isSchoolEventInsertConflict(new Error("duplicate key 23505")), true);
assert.equal(createSchoolEventConflict(baseEvent.eventId).code, "SCHOOL_EVENT_CONFLICT");
assert.equal(
  createNextSchoolEventUpdatedAt(version0, new Date("2026-08-02T00:00:00.000Z").getTime()),
  "2026-08-03T00:00:00.001Z"
);
assert.equal(
  areSchoolEventTimestampsEqual("2026-08-03T00:00:00.001Z", "2026-08-03T09:00:00.001+09:00"),
  true
);
assert.equal(
  areSchoolEventsPersistedEqual(
    baseEvent,
    { ...baseEvent, mathSubjectByDate: { "2026-08-10": "공통수학1" } }
  ),
  true
);

let saveTransportArgs = null;
const apiSaved = await saveSchoolEventRequest({
  event: baseEvent,
  request: async (...args) => {
    saveTransportArgs = args;
    return {
      schoolEvent: { ...baseEvent, updatedAt: "2026-08-03T00:00:00.001Z" },
      source: "supabase",
      verified: true
    };
  }
});
assert.equal(apiSaved.updatedAt, "2026-08-03T00:00:00.001Z");
assert.deepEqual(saveTransportArgs.slice(0, 2), [
  "/api/school-events",
  { schoolEvent: baseEvent }
]);
await assert.rejects(
  saveSchoolEventRequest({ event: baseEvent, request: async () => ({ source: "local_sample" }) }),
  /Supabase 저장 결과/
);

const verifiedEvent = { ...baseEvent, updatedAt: "2026-08-03T00:00:00.001Z" };
const verifiedSave = await saveAndVerifySchoolEvent({
  event: baseEvent,
  read: async () => ({ schoolEvents: [verifiedEvent], source: "supabase" }),
  request: async () => ({ schoolEvent: verifiedEvent, source: "supabase", verified: true })
});
assert.deepEqual(verifiedSave, { schoolEvent: verifiedEvent, schoolEvents: [verifiedEvent] });
await assert.rejects(
  saveAndVerifySchoolEvent({
    event: baseEvent,
    read: async () => ({ schoolEvents: [], source: "supabase" }),
    request: async () => ({ schoolEvent: verifiedEvent, source: "supabase", verified: true })
  }),
  /원천 재조회/
);

let deleteRequestUrl = "";
await deleteSchoolEventRequest({
  event: baseEvent,
  fetchImpl: async (url) => {
    deleteRequestUrl = url;
    return Response.json({
      ok: true,
      schoolEventId: baseEvent.eventId,
      source: "supabase",
      verified: true
    });
  },
  resolveApiUrl: (path) => `https://fixture.test${path}`
});
assert.match(deleteRequestUrl, /expectedUpdatedAt=2026-08-03T00%3A00%3A00.000Z/);
const verifiedDelete = await deleteAndVerifySchoolEvent({
  event: baseEvent,
  fetchImpl: async () => Response.json({
    ok: true,
    schoolEventId: baseEvent.eventId,
    source: "supabase",
    verified: true
  }),
  read: async () => ({ schoolEvents: [], source: "supabase" })
});
assert.deepEqual(verifiedDelete, { schoolEventId: baseEvent.eventId, schoolEvents: [] });
await assert.rejects(
  deleteSchoolEventRequest({ event: { eventId: "missing-version" } }),
  /서버 버전/
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://school-event-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

function toDbRow(event) {
  return {
    app_event_type: event.type,
    color: event.color || null,
    end_date: event.endDate || null,
    event_payload: { ...event, type: event.type },
    event_type: event.type === "schoolEvent" ? "event" : event.type,
    exam_cycle: event.examCycle || null,
    exam_subject: event.examSubject || null,
    grade: event.grade || null,
    math_subject_by_date: event.mathSubjectByDate || {},
    memo: event.memo || null,
    school_event_id: event.eventId,
    school_name: event.schoolName,
    start_date: event.date,
    title: event.title,
    updated_at: event.updatedAt
  };
}

let storedRows = [toDbRow(baseEvent)];
const mutationRequests = [];
function getEq(searchParams, field) {
  return searchParams.get(field)?.replace(/^eq\./, "") ?? "";
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  assert.equal(requestUrl.pathname.split("/rest/v1/")[1], "school_events");
  const method = options.method || "GET";
  if (method === "GET") {
    const eventId = getEq(requestUrl.searchParams, "school_event_id");
    return Response.json(eventId ? storedRows.filter((row) => row.school_event_id === eventId) : storedRows);
  }
  const body = JSON.parse(options.body || "null");
  mutationRequests.push({ body, method, search: requestUrl.search });
  if (method === "PATCH") {
    const eventId = getEq(requestUrl.searchParams, "school_event_id");
    const expectedUpdatedAt = getEq(requestUrl.searchParams, "updated_at");
    const index = storedRows.findIndex((row) => (
      row.school_event_id === eventId && row.updated_at === expectedUpdatedAt
    ));
    if (index < 0) return Response.json([]);
    storedRows[index] = { ...storedRows[index], ...body };
    return Response.json([storedRows[index]]);
  }
  if (method === "POST") {
    const rows = Array.isArray(body) ? body : [body];
    if (rows.some((row) => storedRows.some((stored) => stored.school_event_id === row.school_event_id))) {
      return Response.json({ message: "duplicate key 23505" }, { status: 409 });
    }
    storedRows.push(...rows);
    return Response.json(rows, { status: 201 });
  }
  if (method === "DELETE") {
    const eventId = getEq(requestUrl.searchParams, "school_event_id");
    const expectedUpdatedAt = getEq(requestUrl.searchParams, "updated_at");
    const deleted = storedRows.filter((row) => (
      row.school_event_id === eventId && row.updated_at === expectedUpdatedAt
    ));
    storedRows = storedRows.filter((row) => !deleted.includes(row));
    return Response.json(deleted);
  }
  assert.fail(`unexpected Supabase fixture method: ${method}`);
};

try {
  const {
    deleteSchoolEvent,
    listSchoolEvents,
    upsertSchoolEvent
  } = await import("../api/routes/coreData.js");
  const listedEvent = (await listSchoolEvents()).schoolEvents[0];
  const updated = await upsertSchoolEvent({ ...listedEvent, memo: "CAS 저장 메모" });
  assert.equal(updated.verified, true);
  assert.equal(updated.schoolEvent.memo, "CAS 저장 메모");
  assert.notEqual(updated.schoolEvent.updatedAt, listedEvent.updatedAt);
  assert.match(mutationRequests[0].search, /updated_at=eq\./);

  await assert.rejects(
    upsertSchoolEvent({ ...listedEvent, memo: "구버전 덮어쓰기" }),
    (error) => error.code === "SCHOOL_EVENT_CONFLICT" && error.statusCode === 409
  );
  assert.equal(storedRows[0].memo, "CAS 저장 메모");

  const newEvent = {
    ...baseEvent,
    eventId: "school-event-2",
    title: "방학",
    type: "vacation",
    updatedAt: ""
  };
  const created = await upsertSchoolEvent(newEvent);
  assert.equal(created.verified, true);
  assert.equal(created.schoolEvent.eventId, newEvent.eventId);
  const retried = await upsertSchoolEvent(newEvent);
  assert.equal(retried.schoolEvent.updatedAt, created.schoolEvent.updatedAt);
  await assert.rejects(
    upsertSchoolEvent({ ...newEvent, title: "중복 ID 다른 일정" }),
    (error) => error.code === "SCHOOL_EVENT_CONFLICT" && error.statusCode === 409
  );

  await assert.rejects(
    deleteSchoolEvent(newEvent.eventId, { expectedUpdatedAt: version0 }),
    (error) => error.code === "SCHOOL_EVENT_CONFLICT" && error.statusCode === 409
  );
  const deleted = await deleteSchoolEvent(newEvent.eventId, {
    expectedUpdatedAt: created.schoolEvent.updatedAt
  });
  assert.equal(deleted.verified, true);
  assert.equal(storedRows.some((row) => row.school_event_id === newEvent.eventId), false);
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("school event CAS, readback, retry, and delete persistence tests passed");
