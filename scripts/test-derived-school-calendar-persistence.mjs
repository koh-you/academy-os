import assert from "node:assert/strict";
import { saveDerivedSchoolCalendarAction } from "../src/domains/schoolCalendar/derivedSchoolCalendarAction.js";
import {
  areDerivedExamPrepNonScheduleFieldsEqual,
  createDerivedExamPrepChanges,
  createDerivedLessonChanges,
  verifyDerivedSchoolCalendarPlan
} from "../src/domains/schoolCalendar/derivedSchoolCalendarPersistence.js";

const version0 = "2026-08-03T00:00:00.000Z";
const rowBefore = {
  examCycle: "2026-2-mid",
  examPeriod: "2026-08-10 ~ 2026-08-14",
  examPrepId: "safe-derived-row",
  grade: "고1",
  mathExamDate: "2026-08-12",
  mathExamDates: [{ date: "2026-08-12", id: "math-1", label: "공통수학1", sourceSchoolEventId: "derived-event", subject: "공통수학1" }],
  memo: "",
  publisher: "안전출판",
  review: "",
  reviewAiStatus: "",
  revisedReview: "",
  schoolName: "안전고",
  scope: "1단원",
  source: "fixture",
  specialNote: "",
  subTextbook: "",
  subject: "공통수학1",
  textbook: "안전교재",
  updatedAt: version0
};
const rowAfter = {
  ...rowBefore,
  mathExamDate: "2026-08-13",
  mathExamDates: [{ ...rowBefore.mathExamDates[0], date: "2026-08-13" }]
};
const lessonBefore = {
  className: "안전고 고1 공통수학1 직전수업",
  classTemplateId: "",
  color: "#17213a",
  date: "2026-08-11",
  endTime: "21:00",
  lessonId: "lesson-derived-event",
  lessonTopic: "직전대비",
  lessonType: "preExam",
  sourceLabel: "",
  sourceSchoolEventId: "derived-event",
  startTime: "19:00",
  status: "scheduled",
  studentIds: ["safe-student"],
  updatedAt: version0
};
const lessonAfter = { ...lessonBefore, date: "2026-08-12" };

const examPrepChanges = createDerivedExamPrepChanges([rowBefore], [rowAfter]);
assert.equal(examPrepChanges.length, 1);
assert.equal(createDerivedExamPrepChanges([rowBefore], [rowBefore]).length, 0);
assert.equal(areDerivedExamPrepNonScheduleFieldsEqual(rowBefore, rowAfter), true);
assert.equal(areDerivedExamPrepNonScheduleFieldsEqual(rowBefore, { ...rowAfter, scope: "다른 범위" }), false);

const eventBefore = { date: "2026-08-12", eventId: "derived-event", examSubject: "공통수학1", grade: "고1", schoolName: "안전고", type: "mathExam" };
const eventAfter = { ...eventBefore, date: "2026-08-13" };
const lessonAdapters = {
  createPreExamLessonFromSchoolEvent: (event) => event?.type === "mathExam" ? {
    ...lessonBefore,
    date: new Date(`${event.date}T00:00:00Z`).toISOString().slice(0, 10) === "2026-08-13" ? "2026-08-12" : "2026-08-11",
    lessonId: `lesson-${event.eventId}`,
    updatedAt: undefined
  } : null,
  getGeneratedLessonIdentityKeys: (lesson) => [lesson?.sourceSchoolEventId].filter(Boolean),
  getGeneratedLessonKey: (lesson) => lesson?.sourceSchoolEventId ? `generated:pre_exam:${lesson.sourceSchoolEventId}` : "",
  normalizeGeneratedLessonControls: (controls = {}) => ({ manualOverrideKeys: controls.manualOverrideKeys ?? [], suppressedKeys: controls.suppressedKeys ?? [] })
};
const lessonChanges = createDerivedLessonChanges({
  eventChanges: [{ after: eventAfter, before: eventBefore }],
  lessons: [lessonBefore],
  students: [{ studentId: "safe-student" }]
}, lessonAdapters);
assert.equal(lessonChanges.length, 1);
assert.equal(lessonChanges[0].before.lessonId, lessonBefore.lessonId);
assert.equal(lessonChanges[0].after.date, lessonAfter.date);
assert.throws(
  () => createDerivedLessonChanges({
    controls: { manualOverrideKeys: ["generated:pre_exam:derived-event"] },
    eventChanges: [{ after: eventAfter, before: eventBefore }],
    lessons: [lessonBefore],
    students: []
  }, lessonAdapters),
  /보호 설정을 먼저 해제/
);
assert.equal(verifyDerivedSchoolCalendarPlan({ examPrepChanges, lessonChanges }, {
  examPrepRows: [rowAfter],
  lessons: [lessonAfter]
}).verified, true);

let requestPayload = null;
const actionResult = await saveDerivedSchoolCalendarAction({
  controls: {},
  eventChanges: [{ after: eventAfter, before: eventBefore }],
  lessons: [lessonBefore],
  nextRows: [rowAfter],
  previousRows: [rowBefore],
  request: async (path, payload, timeout) => {
    assert.equal(path, "/api/school-calendar/derived-save");
    assert.equal(timeout, 30000);
    requestPayload = payload;
    return {
      auditId: payload.auditId,
      examPrepRows: [rowAfter],
      lessonIdsToDelete: [],
      lessons: [lessonAfter],
      source: "supabase",
      verified: true
    };
  },
  students: [{ studentId: "safe-student" }]
}, lessonAdapters);
assert.equal(actionResult.verified, true);
assert.deepEqual(Object.keys(requestPayload).sort(), ["auditId", "examPrepChanges", "lessonChanges"]);
assert.equal(requestPayload.examPrepChanges.length, 1);
assert.equal(requestPayload.lessonChanges.length, 1);
await assert.rejects(
  saveDerivedSchoolCalendarAction({
    controls: {},
    eventChanges: [{ after: eventAfter, before: eventBefore }],
    lessons: [lessonBefore],
    nextRows: [rowAfter],
    previousRows: [rowBefore],
    request: async () => ({ source: "supabase", verified: "true" }),
    students: [{ studentId: "safe-student" }]
  }, lessonAdapters),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "verified"
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://derived-calendar-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

function toExamPrepRow(row) {
  return {
    exam_cycle: row.examCycle,
    exam_period: row.examPeriod,
    exam_prep_id: row.examPrepId,
    exam_term: row.examCycle,
    grade: row.grade,
    math_exam_date: row.mathExamDate,
    math_exam_dates: row.mathExamDates,
    memo: row.memo,
    publisher: row.publisher,
    review: row.review,
    review_ai_status: row.reviewAiStatus,
    revised_review: row.revisedReview,
    school_name: row.schoolName,
    scope: row.scope,
    source: row.source,
    special_note: row.specialNote,
    sub_materials: row.subTextbook,
    subject: row.subject,
    textbook: row.textbook,
    updated_at: row.updatedAt
  };
}

function toLessonRow(lesson) {
  return {
    class_name: lesson.className,
    class_template_id: lesson.classTemplateId || null,
    color: lesson.color,
    end_time: lesson.endTime,
    lesson_date: lesson.date,
    lesson_id: lesson.lessonId,
    lesson_topic: lesson.lessonTopic,
    lesson_type: lesson.lessonType,
    source_label: lesson.sourceLabel || null,
    source_school_event_id: lesson.sourceSchoolEventId,
    start_time: lesson.startTime,
    status: lesson.status,
    student_ids: lesson.studentIds,
    updated_at: lesson.updatedAt
  };
}

let storedExamPrepRows;
let storedLessons;
let examPatchCount = 0;
let forceLessonConflict = false;

function resetFixture() {
  storedExamPrepRows = [toExamPrepRow(rowBefore)];
  storedLessons = [toLessonRow(lessonBefore)];
  examPatchCount = 0;
  forceLessonConflict = false;
}

function getEq(searchParams, field) {
  return searchParams.get(field)?.replace(/^eq\./, "") ?? "";
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  const table = requestUrl.pathname.split("/rest/v1/")[1];
  const method = options.method || "GET";
  if (method === "GET") {
    if (table === "exam_prep_rows") return Response.json(storedExamPrepRows);
    if (table === "lessons") {
      const lessonId = getEq(requestUrl.searchParams, "lesson_id");
      if (forceLessonConflict && examPatchCount > 0 && lessonId === lessonBefore.lessonId) {
        storedLessons[0] = { ...storedLessons[0], updated_at: "2026-08-03T00:00:09.000Z" };
        forceLessonConflict = false;
      }
      return Response.json(lessonId ? storedLessons.filter((row) => row.lesson_id === lessonId) : storedLessons);
    }
    if (["homeworks", "lesson_student_records", "notification_jobs"].includes(table)) return Response.json([]);
  }
  if (method === "PATCH") {
    const body = JSON.parse(options.body || "{}");
    if (table === "exam_prep_rows") {
      const id = getEq(requestUrl.searchParams, "exam_prep_id");
      const version = getEq(requestUrl.searchParams, "updated_at");
      const index = storedExamPrepRows.findIndex((row) => row.exam_prep_id === id && row.updated_at === version);
      if (index < 0) return Response.json([]);
      storedExamPrepRows[index] = { ...storedExamPrepRows[index], ...body };
      examPatchCount += 1;
      return Response.json([storedExamPrepRows[index]]);
    }
    if (table === "lessons") {
      const id = getEq(requestUrl.searchParams, "lesson_id");
      const version = getEq(requestUrl.searchParams, "updated_at");
      const index = storedLessons.findIndex((row) => row.lesson_id === id && row.updated_at === version);
      if (index < 0) return Response.json([]);
      storedLessons[index] = { ...storedLessons[index], ...body };
      return Response.json([storedLessons[index]]);
    }
  }
  if (method === "POST" && table === "lessons") {
    const body = JSON.parse(options.body || "[]");
    storedLessons.push(...body);
    return Response.json(body);
  }
  if (method === "DELETE") {
    const idField = table === "lessons" ? "lesson_id" : "exam_prep_id";
    const id = getEq(requestUrl.searchParams, idField);
    const version = getEq(requestUrl.searchParams, "updated_at");
    const rows = table === "lessons" ? storedLessons : storedExamPrepRows;
    const deleted = rows.filter((row) => row[idField] === id && row.updated_at === version);
    if (table === "lessons") storedLessons = rows.filter((row) => !deleted.includes(row));
    else storedExamPrepRows = rows.filter((row) => !deleted.includes(row));
    return Response.json(deleted);
  }
  assert.fail(`unexpected Supabase fixture request: ${method} ${table} ${requestUrl.search}`);
};

try {
  const { saveDerivedSchoolCalendarPlan } = await import("../api/routes/coreData.js");
  const plan = {
    auditId: "derived-normal",
    examPrepChanges,
    lessonChanges: [{ after: lessonAfter, before: lessonBefore }]
  };
  await assert.rejects(
    saveDerivedSchoolCalendarPlan({
      ...plan,
      auditId: "derived-invalid-scope",
      examPrepChanges: [{ after: { ...rowAfter, scope: "허용되지 않은 변경" }, before: rowBefore }]
    }),
    /시험기간과 수학시험 날짜 필드만 변경/
  );
  resetFixture();
  const saved = await saveDerivedSchoolCalendarPlan(plan);
  assert.equal(saved.verified, true);
  assert.equal(storedExamPrepRows[0].math_exam_date, rowAfter.mathExamDate);
  assert.equal(storedLessons[0].lesson_date, lessonAfter.date);

  const retried = await saveDerivedSchoolCalendarPlan({ ...plan, auditId: "derived-retry" });
  assert.equal(retried.verified, true);
  assert.equal(examPatchCount, 1, "same desired state retry must not write the row again");

  const savedRow = saved.examPrepRows[0];
  const savedLesson = saved.lessons[0];
  const clearedRow = { ...savedRow, mathExamDate: "", mathExamDates: [] };
  const deleted = await saveDerivedSchoolCalendarPlan({
    auditId: "derived-delete",
    examPrepChanges: [{ after: clearedRow, before: savedRow }],
    lessonChanges: [{ after: null, before: savedLesson }]
  });
  assert.equal(deleted.verified, true);
  assert.deepEqual(deleted.lessonIdsToDelete, [lessonBefore.lessonId]);
  assert.equal(storedExamPrepRows[0].math_exam_date ?? "", "");
  assert.equal(storedLessons.length, 0);

  resetFixture();
  storedLessons = [];
  const created = await saveDerivedSchoolCalendarPlan({
    auditId: "derived-create",
    examPrepChanges,
    lessonChanges: [{ after: lessonAfter, before: null }]
  });
  assert.equal(created.verified, true);
  assert.equal(storedLessons[0].lesson_id, lessonAfter.lessonId);

  resetFixture();
  forceLessonConflict = true;
  await assert.rejects(
    saveDerivedSchoolCalendarPlan({ ...plan, auditId: "derived-rollback" }),
    (error) => error.code === "SCHOOL_CALENDAR_DERIVED_SAVE_FAILED" && error.audit?.rollback?.verified === true
  );
  assert.equal(storedExamPrepRows[0].math_exam_date, rowBefore.mathExamDate);
  assert.equal(storedExamPrepRows[0].updated_at, rowBefore.updatedAt);
  assert.equal(storedLessons[0].updated_at, "2026-08-03T00:00:09.000Z", "external lesson change must be preserved");
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("derived school calendar persistence tests passed");
