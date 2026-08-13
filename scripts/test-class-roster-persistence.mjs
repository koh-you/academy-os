import assert from "node:assert/strict";
import { saveClassRosterRequest } from "../src/domains/students/classRosterApi.js";
import {
  areRosterStudentIdsEqual,
  createClassRosterSavePlan,
  createLessonRosterVersionFilter,
  verifyClassRosterSavePlan
} from "../src/domains/students/classRosterPersistence.js";
import {
  getEffectiveLessonStudentIds,
  isStudentAssignedToRegularLesson,
  isStudentScheduledForLesson
} from "../src/shared/utils/studentSchedule.js";

const version0 = "2026-08-03T00:00:00.000Z";
const studentA = {
  birthYear: "2010",
  defaultClassTemplateId: "class-a",
  grade: "고1",
  loginId: "student-a",
  name: "가학생",
  parentPhone: "",
  pin: "1234",
  scheduleOverride: "",
  schoolName: "안전고",
  specialNote: "",
  status: "active",
  studentId: "student-a",
  studentPhone: "",
  textbook: "",
  updatedAt: version0,
  withdrawalComment: "",
  withdrawalReason: "",
  withdrawnAt: ""
};
const studentB = { ...studentA, defaultClassTemplateId: "class-b", loginId: "student-b", name: "나학생", studentId: "student-b" };
const previousStudents = [studentA, studentB];
const nextStudents = [{ ...studentA, defaultClassTemplateId: "class-b" }, studentB];
const lessons = [
  { classTemplateId: "class-a", date: "2026-08-04", lessonId: "lesson-a", status: "scheduled", studentIds: ["student-a"], updatedAt: version0 },
  { classTemplateId: "class-b", date: "2026-08-04", lessonId: "lesson-b", status: "scheduled", studentIds: ["student-b", "manual-roster-member"], updatedAt: version0 },
  { classTemplateId: "class-c", date: "2026-08-04", lessonId: "lesson-unrelated", status: "scheduled", studentIds: ["manual-roster-member"], updatedAt: version0 },
  { classTemplateId: "class-a", date: "2026-08-02", lessonId: "lesson-history", status: "completed", studentIds: ["student-a"], updatedAt: version0 }
];

assert.equal(areRosterStudentIdsEqual(["b", "a", "a"], ["a", "b"]), true);
assert.equal(
  createLessonRosterVersionFilter("lesson/1", "2026-08-03T00:00:00.000+00:00"),
  "lesson_id=eq.lesson%2F1&updated_at=eq.2026-08-03T00%3A00%3A00.000%2B00%3A00"
);

const plan = createClassRosterSavePlan({
  fromDate: "2026-08-03",
  lessons,
  nextStudents,
  previousStudents
});
assert.equal(plan.studentChanges.length, 1);
assert.deepEqual(plan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]), [
  ["lesson-a", []],
  ["lesson-b", ["student-a", "student-b", "manual-roster-member"]]
]);
assert.equal(plan.lessonChanges.some((change) => change.lessonId === "lesson-history"), false);
assert.equal(plan.lessonChanges.some((change) => change.lessonId === "lesson-unrelated"), false);
assert.equal(verifyClassRosterSavePlan(plan, { lessons, students: previousStudents }).verified, false);

const mondayLesson = {
  classTemplateId: "class-a",
  date: "2026-08-03",
  lessonId: "lesson-monday",
  lessonType: "class",
  status: "scheduled",
  studentIds: [studentA.studentId],
  updatedAt: version0
};
const wednesdayLesson = { ...mondayLesson, date: "2026-08-05", lessonId: "lesson-wednesday" };
const fridayLesson = { ...mondayLesson, date: "2026-08-07", lessonId: "lesson-friday" };
const wednesdayMakeupLesson = {
  ...wednesdayLesson,
  lessonId: "lesson-wednesday-makeup",
  lessonType: "makeup"
};
const mondayFridayStudent = { ...studentA, scheduleOverride: "월금 17:00-19:00" };
assert.equal(isStudentScheduledForLesson(mondayLesson, mondayFridayStudent), true);
assert.equal(isStudentScheduledForLesson(wednesdayLesson, mondayFridayStudent), false);
assert.equal(isStudentScheduledForLesson(wednesdayMakeupLesson, mondayFridayStudent), true);
assert.deepEqual(
  getEffectiveLessonStudentIds(wednesdayLesson, [mondayFridayStudent]),
  [],
  "개별 월금 스케줄은 월수금 기본 반의 수요일 명단보다 우선한다"
);
assert.deepEqual(
  getEffectiveLessonStudentIds(wednesdayMakeupLesson, [mondayFridayStudent]),
  [studentA.studentId],
  "수동 보강 명단은 개별 정규 스케줄로 제거하지 않는다"
);

const overridePlan = createClassRosterSavePlan({
  fromDate: "2026-08-03",
  lessons: [mondayLesson, wednesdayLesson, fridayLesson, wednesdayMakeupLesson],
  nextStudents: [mondayFridayStudent],
  previousStudents: [studentA]
});
assert.deepEqual(
  overridePlan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]),
  [["lesson-wednesday", []]],
  "개별 스케줄 저장은 미래 정규수업 중 제외 요일 명단만 동기화한다"
);

const mondayWednesdayFridayStudent = { ...studentA, scheduleOverride: "월수금 17:00-19:00" };
const restoreWednesdayPlan = createClassRosterSavePlan({
  fromDate: "2026-08-03",
  lessons: [{ ...wednesdayLesson, studentIds: [] }],
  nextStudents: [mondayWednesdayFridayStudent],
  previousStudents: [mondayFridayStudent]
});
assert.deepEqual(
  restoreWednesdayPlan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]),
  [["lesson-wednesday", [studentA.studentId]]],
  "나중에 월수금으로 수정하면 미래 수요일 정규 명단을 다시 포함한다"
);

const timedRegularLessons = [
  { classTemplateId: "template_mwf_4_7", date: "2026-08-03", endTime: "19:00", lessonId: "monday-4-7", lessonType: "class", startTime: "16:00", status: "scheduled", studentIds: [], updatedAt: version0 },
  { classTemplateId: "template_mwf_7_10", date: "2026-08-03", endTime: "22:00", lessonId: "monday-7-10", lessonType: "class", startTime: "19:00", status: "scheduled", studentIds: ["lee-jinhoo", "park-jihyun"], updatedAt: version0 },
  { classTemplateId: "template_mwf_7_10", date: "2026-08-05", endTime: "22:00", lessonId: "wednesday-7-10", lessonType: "class", startTime: "19:00", status: "scheduled", studentIds: ["lee-jinhoo", "park-jihyun"], updatedAt: version0 },
  { classTemplateId: "template_tt_sat_back", date: "2026-08-08", endTime: "16:00", lessonId: "saturday-1-4", lessonType: "class", startTime: "13:00", status: "scheduled", studentIds: ["manual-roster-member"], updatedAt: version0 }
];
const leeBefore = { ...studentA, defaultClassTemplateId: "template_mwf_7_10", name: "이진후", studentId: "lee-jinhoo" };
const leeAfter = { ...leeBefore, scheduleOverride: "월 16:00-19:00 / 수금 19:00-22:00" };
const parkBefore = { ...studentA, defaultClassTemplateId: "template_mwf_7_10", name: "박지현", studentId: "park-jihyun" };
const parkAfter = { ...parkBefore, scheduleOverride: "수 19:00-22:00 / 토 13:00-16:00" };

assert.equal(isStudentAssignedToRegularLesson(timedRegularLessons[0], leeAfter), true);
assert.equal(isStudentAssignedToRegularLesson(timedRegularLessons[1], leeAfter), false);
assert.equal(isStudentAssignedToRegularLesson(timedRegularLessons[2], leeAfter), true);
assert.equal(isStudentAssignedToRegularLesson(timedRegularLessons[3], parkAfter), true);

const individualTimesPlan = createClassRosterSavePlan({
  fromDate: "2026-08-03",
  lessons: timedRegularLessons,
  nextStudents: [leeAfter, parkAfter],
  previousStudents: [leeBefore, parkBefore]
});
assert.deepEqual(
  individualTimesPlan.lessonChanges.map((change) => [change.lessonId, change.afterStudentIds]),
  [
    ["monday-4-7", ["lee-jinhoo"]],
    ["monday-7-10", []],
    ["saturday-1-4", ["park-jihyun", "manual-roster-member"]]
  ],
  "이진후는 월요일 4-7, 박지현은 토요일 1-4 명단으로 옮기고 수요일 7-10은 유지한다"
);

let requestPayload = null;
const apiResult = await saveClassRosterRequest({
  auditId: "class-roster-fixture",
  lessonChanges: plan.lessonChanges,
  request: async (_path, payload) => {
    requestPayload = payload;
    return {
      auditId: payload.auditId,
      cleanup: { errors: [], verified: true },
      source: "supabase",
      verified: true
    };
  },
  studentChanges: plan.studentChanges
});
assert.equal(apiResult.verified, true);
assert.equal(requestPayload.auditId, "class-roster-fixture");
assert.deepEqual(Object.keys(requestPayload).sort(), ["auditId", "lessonChanges", "studentChanges"]);
await assert.rejects(
  saveClassRosterRequest({
    auditId: "invalid-response",
    lessonChanges: plan.lessonChanges,
    request: async () => ({ source: "supabase", verified: "true" }),
    studentChanges: plan.studentChanges
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "verified"
);
await assert.rejects(
  saveClassRosterRequest({
    auditId: "missing-version",
    lessonChanges: [{ ...plan.lessonChanges[0], expectedUpdatedAt: "" }],
    request: async () => ({}),
    studentChanges: plan.studentChanges
  }),
  /수업 명단의 서버 버전/
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://class-roster-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

function toStudentRow(student) {
  return {
    birth_year: Number(student.birthYear) || null,
    default_class_template_id: student.defaultClassTemplateId || null,
    grade: student.grade || null,
    login_id: student.loginId,
    name: student.name,
    parent_phone: student.parentPhone || null,
    pin: student.pin,
    schedule_override: student.scheduleOverride || null,
    school_name: student.schoolName || null,
    special_note: student.specialNote || null,
    status: student.status,
    student_id: student.studentId,
    student_phone: student.studentPhone || null,
    textbook: student.textbook || null,
    updated_at: student.updatedAt,
    withdrawal_comment: student.withdrawalComment || null,
    withdrawal_reason: student.withdrawalReason || null,
    withdrawn_at: student.withdrawnAt || null
  };
}

function toLessonRow(lesson) {
  return {
    class_name: lesson.lessonId,
    class_template_id: lesson.classTemplateId,
    color: "#17213a",
    end_time: "19:00",
    lesson_date: lesson.date,
    lesson_id: lesson.lessonId,
    start_time: "16:00",
    status: lesson.status,
    student_ids: lesson.studentIds,
    updated_at: lesson.updatedAt
  };
}

let storedStudents;
let storedLessons;
let forceSecondLessonConflict = false;
let lessonPatchCount = 0;

function resetStoredRows() {
  storedStudents = previousStudents.map(toStudentRow);
  storedLessons = lessons.map(toLessonRow);
  lessonPatchCount = 0;
}

function getEq(searchParams, field) {
  return searchParams.get(field)?.replace(/^eq\./, "") ?? "";
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  const table = requestUrl.pathname.split("/rest/v1/")[1];
  const method = options.method || "GET";
  if (method === "GET") {
    if (table === "students") {
      const id = getEq(requestUrl.searchParams, "student_id");
      return Response.json(id ? storedStudents.filter((row) => row.student_id === id) : storedStudents);
    }
    if (table === "lessons") {
      const id = getEq(requestUrl.searchParams, "lesson_id");
      if (forceSecondLessonConflict && id === "lesson-b" && lessonPatchCount === 1) {
        const row = storedLessons.find((item) => item.lesson_id === id);
        row.updated_at = "2026-08-03T00:00:09.000Z";
        row.student_ids = ["student-b", "external-student"];
        forceSecondLessonConflict = false;
      }
      return Response.json(id ? storedLessons.filter((row) => row.lesson_id === id) : storedLessons);
    }
    if (["notification_jobs", "lesson_student_records"].includes(table)) return Response.json([]);
  }
  if (method === "PATCH") {
    const body = JSON.parse(options.body || "{}");
    if (table === "students") {
      const id = getEq(requestUrl.searchParams, "student_id");
      const version = getEq(requestUrl.searchParams, "updated_at");
      const index = storedStudents.findIndex((row) => row.student_id === id && row.updated_at === version);
      if (index < 0) return Response.json([]);
      storedStudents[index] = { ...storedStudents[index], ...body };
      return Response.json([storedStudents[index]]);
    }
    if (table === "lessons") {
      const id = getEq(requestUrl.searchParams, "lesson_id");
      const version = getEq(requestUrl.searchParams, "updated_at");
      const index = storedLessons.findIndex((row) => row.lesson_id === id && row.updated_at === version);
      if (index < 0) return Response.json([]);
      storedLessons[index] = { ...storedLessons[index], ...body };
      lessonPatchCount += 1;
      return Response.json([storedLessons[index]]);
    }
  }
  if (method === "DELETE" && table === "students") {
    const id = getEq(requestUrl.searchParams, "student_id");
    const version = getEq(requestUrl.searchParams, "updated_at");
    const deleted = storedStudents.filter((row) => row.student_id === id && row.updated_at === version);
    storedStudents = storedStudents.filter((row) => !deleted.includes(row));
    return Response.json(deleted);
  }
  assert.fail(`unexpected Supabase fixture request: ${method} ${table} ${requestUrl.search}`);
};

try {
  const { saveClassRosterPlan } = await import("../api/routes/coreData.js");
  resetStoredRows();
  const saved = await saveClassRosterPlan({ auditId: "normal-save", ...plan });
  assert.equal(saved.verified, true);
  assert.equal(saved.cleanup.verified, true);
  assert.equal(storedStudents.find((row) => row.student_id === "student-a").default_class_template_id, "class-b");
  assert.deepEqual(storedLessons.find((row) => row.lesson_id === "lesson-a").student_ids, []);
  assert.deepEqual(storedLessons.find((row) => row.lesson_id === "lesson-b").student_ids, ["student-a", "student-b", "manual-roster-member"]);

  resetStoredRows();
  forceSecondLessonConflict = true;
  await assert.rejects(
    saveClassRosterPlan({ auditId: "rollback-save", ...plan }),
    (error) => error.code === "CLASS_ROSTER_SAVE_FAILED" && error.audit?.rollback?.verified === true
  );
  assert.equal(storedStudents.find((row) => row.student_id === "student-a").default_class_template_id, "class-a");
  assert.equal(storedStudents.find((row) => row.student_id === "student-a").updated_at, version0);
  assert.deepEqual(storedLessons.find((row) => row.lesson_id === "lesson-a").student_ids, ["student-a"]);
  assert.equal(storedLessons.find((row) => row.lesson_id === "lesson-a").updated_at, version0);
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("class roster persistence tests passed");
