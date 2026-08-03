import assert from "node:assert/strict";
import { saveStudentRequest } from "../src/domains/students/studentApi.js";
import {
  areStudentsPersistedEqual,
  areStudentTimestampsEqual,
  createNextStudentUpdatedAt,
  createStudentConflict,
  createStudentVersionFilter,
  isStudentInsertConflict,
  resolveStudentRowSaveSuccess
} from "../src/domains/students/studentPersistence.js";

const baseStudent = {
  birthYear: "2010",
  defaultClassTemplateId: "template-a",
  grade: "고1",
  loginId: "student_one",
  name: "학생 한명",
  parentPhone: "01022223333",
  pin: "1234",
  scheduleOverride: "",
  schoolName: "테스트고",
  specialNote: "",
  status: "active",
  studentId: "student-1",
  studentPhone: "01011112222",
  textbook: "교재",
  updatedAt: "2026-08-03T00:00:00.000Z",
  withdrawalComment: "",
  withdrawalReason: "",
  withdrawnAt: ""
};

assert.equal(
  createStudentVersionFilter("학생/1", "2026-08-03T00:00:00.000+00:00"),
  "student_id=eq.%ED%95%99%EC%83%9D%2F1&updated_at=eq.2026-08-03T00%3A00%3A00.000%2B00%3A00"
);
assert.equal(isStudentInsertConflict(new Error("duplicate key 23505")), true);
assert.equal(createStudentConflict("student-1").code, "STUDENT_CONFLICT");
assert.equal(
  createNextStudentUpdatedAt(baseStudent.updatedAt, new Date("2026-08-02T00:00:00.000Z").getTime()),
  "2026-08-03T00:00:00.001Z"
);
assert.equal(
  areStudentTimestampsEqual("2026-08-03T00:00:00.001Z", "2026-08-03T09:00:00.001+09:00"),
  true
);
assert.equal(areStudentsPersistedEqual(baseStudent, { ...baseStudent, birthYear: 2010 }), true);

const persistedA = { ...baseStudent, schoolName: "A 저장", updatedAt: "2026-08-03T00:00:00.100Z" };
const pendingB = { ...baseStudent, schoolName: "B 후속 입력" };
const rebased = resolveStudentRowSaveSuccess({
  currentStudent: pendingB,
  persistedStudent: persistedA,
  requestedStudent: { ...baseStudent, schoolName: "A 저장" }
});
assert.equal(rebased.hasPendingChanges, true);
assert.equal(rebased.student.schoolName, "B 후속 입력");
assert.equal(rebased.student.updatedAt, persistedA.updatedAt);

let requestCall = null;
const requestedSavedStudent = await saveStudentRequest({
  request: async (...args) => {
    requestCall = args;
    return { source: "supabase", student: { ...baseStudent, updatedAt: "2026-08-03T00:00:00.001Z" }, verified: true };
  },
  student: baseStudent
});
assert.equal(requestedSavedStudent.updatedAt, "2026-08-03T00:00:00.001Z");
assert.deepEqual(requestCall.slice(0, 2), [
  "/api/students",
  { expectedUpdatedAt: baseStudent.updatedAt, student: baseStudent }
]);

let createPayload = null;
await saveStudentRequest({
  createOnly: true,
  request: async (_path, payload) => {
    createPayload = payload;
    return { source: "supabase", student: { ...baseStudent, updatedAt: "2026-08-03T00:00:00.001Z" }, verified: true };
  },
  student: { ...baseStudent, updatedAt: "" }
});
assert.equal(createPayload.createOnly, true);
assert.equal(Object.prototype.hasOwnProperty.call(createPayload, "expectedUpdatedAt"), false);
await assert.rejects(
  saveStudentRequest({ request: async () => ({}), student: { ...baseStudent, updatedAt: "" } }),
  /서버 버전/
);
await assert.rejects(
  saveStudentRequest({ request: async () => ({ source: "local_sample" }), student: baseStudent }),
  /Supabase 저장 결과/
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://student-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

function toDbRow(student) {
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

let storedRows = [toDbRow(baseStudent)];
const mutationRequests = [];
globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  assert.equal(requestUrl.pathname.split("/rest/v1/")[1], "students");
  const method = options.method || "GET";
  if (method === "GET") {
    const studentId = requestUrl.searchParams.get("student_id")?.replace(/^eq\./, "");
    const result = studentId ? storedRows.filter((row) => row.student_id === studentId) : storedRows;
    return new Response(JSON.stringify(result), { headers: { "Content-Type": "application/json" }, status: 200 });
  }

  const body = JSON.parse(options.body || "null");
  mutationRequests.push({ body, method, search: requestUrl.search });
  if (method === "PATCH") {
    const studentId = requestUrl.searchParams.get("student_id")?.replace(/^eq\./, "");
    const expectedUpdatedAt = requestUrl.searchParams.get("updated_at")?.replace(/^eq\./, "");
    const index = storedRows.findIndex((row) => row.student_id === studentId && row.updated_at === expectedUpdatedAt);
    if (index < 0) return new Response("[]", { headers: { "Content-Type": "application/json" }, status: 200 });
    storedRows[index] = { ...storedRows[index], ...body };
    return new Response(JSON.stringify([storedRows[index]]), { headers: { "Content-Type": "application/json" }, status: 200 });
  }
  if (method === "POST") {
    const rows = Array.isArray(body) ? body : [body];
    const hasConflict = rows.some((row) => storedRows.some((stored) => (
      stored.student_id === row.student_id || stored.login_id === row.login_id
    )));
    if (hasConflict) {
      return new Response(JSON.stringify({ message: "duplicate key 23505" }), {
        headers: { "Content-Type": "application/json" },
        status: 409
      });
    }
    storedRows.push(...rows);
    return new Response(JSON.stringify(rows), { headers: { "Content-Type": "application/json" }, status: 201 });
  }
  assert.fail(`unexpected Supabase fixture method: ${method}`);
};

try {
  const { listStudents, upsertStudent } = await import("../api/routes/coreData.js");
  const listedStudent = (await listStudents()).students[0];
  assert.equal(listedStudent.updatedAt, baseStudent.updatedAt);

  const updated = await upsertStudent(
    { ...listedStudent, schoolName: "CAS 저장 학교" },
    { expectedUpdatedAt: listedStudent.updatedAt }
  );
  assert.equal(updated.verified, true);
  assert.equal(updated.student.schoolName, "CAS 저장 학교");
  assert.notEqual(updated.student.updatedAt, listedStudent.updatedAt);
  assert.match(mutationRequests[0].search, /updated_at=eq\./);

  await assert.rejects(
    upsertStudent(
      { ...listedStudent, schoolName: "구버전 덮어쓰기" },
      { expectedUpdatedAt: listedStudent.updatedAt }
    ),
    (error) => error.code === "STUDENT_CONFLICT" && error.statusCode === 409
  );
  assert.equal(storedRows[0].school_name, "CAS 저장 학교");

  const newStudent = {
    ...baseStudent,
    loginId: "student_two",
    name: "학생 두명",
    studentId: "student-2",
    updatedAt: ""
  };
  const created = await upsertStudent(newStudent, { createOnly: true });
  assert.equal(created.verified, true);
  assert.equal(created.student.studentId, "student-2");
  await assert.rejects(
    upsertStudent({ ...newStudent, studentId: "student-3" }, { createOnly: true }),
    (error) => error.code === "STUDENT_CONFLICT" && error.statusCode === 409
  );
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("student persistence tests passed");
