import assert from "node:assert/strict";
import { saveStudentIntakeApplicantRequest } from "../src/domains/students/studentIntakeApplicantApi.js";
import {
  areStudentIntakeApplicantsPersistedEqual,
  areStudentIntakeApplicantTimestampsEqual,
  createNextStudentIntakeApplicantUpdatedAt,
  createStudentIntakeApplicantConflict,
  createStudentIntakeApplicantVersionFilter
} from "../src/domains/students/studentIntakeApplicantPersistence.js";

const applicant = {
  applicantId: "intake-api",
  currentLearningProcess: "수열",
  updatedAt: "2026-08-03T00:00:00.000Z"
};
let transportRequest = null;
const transportResult = await saveStudentIntakeApplicantRequest({
  applicant,
  request: async (...args) => {
    transportRequest = args;
    return {
      applicant: { ...applicant, updatedAt: "2026-08-03T00:00:00.001Z" },
      ok: true,
      source: "supabase",
      verified: true
    };
  }
});
assert.equal(transportResult.updatedAt, "2026-08-03T00:00:00.001Z");
assert.deepEqual(transportRequest, [
  "/api/student-intake-applicants",
  { applicant, expectedUpdatedAt: applicant.updatedAt },
  15000,
  "Tally 후보 저장이 15초를 넘었습니다. 현재 입력을 유지한 채 잠시 뒤 서버 상태를 확인해 주세요."
]);
await assert.rejects(
  saveStudentIntakeApplicantRequest({ applicant: { applicantId: "missing-version" }, request: async () => ({}) }),
  /서버 버전/
);
await assert.rejects(
  saveStudentIntakeApplicantRequest({ applicant, request: async () => ({ source: "local_sample" }) }),
  /Supabase 저장 결과/
);
assert.equal(
  createStudentIntakeApplicantVersionFilter("후보/1", "2026-08-03T00:00:00.000+00:00"),
  "applicant_id=eq.%ED%9B%84%EB%B3%B4%2F1&updated_at=eq.2026-08-03T00%3A00%3A00.000%2B00%3A00"
);
assert.equal(createStudentIntakeApplicantConflict("intake-1").code, "STUDENT_INTAKE_APPLICANT_CONFLICT");
assert.equal(
  createNextStudentIntakeApplicantUpdatedAt(
    "2026-08-03T00:00:00.000Z",
    new Date("2026-08-02T00:00:00.000Z").getTime()
  ),
  "2026-08-03T00:00:00.001Z"
);
assert.equal(
  areStudentIntakeApplicantTimestampsEqual(
    "2026-08-03T00:00:00.001Z",
    "2026-08-03T09:00:00.001+09:00"
  ),
  true
);
assert.equal(
  areStudentIntakeApplicantsPersistedEqual(
    { defaultClassTemplateId: "template-a" },
    { defaultClassTemplateId: "template-a", desiredClass: "template-a" }
  ),
  true
);
assert.equal(
  areStudentIntakeApplicantsPersistedEqual(
    { rawPayload: { nested: { left: 1, right: 2 }, source: "tally" } },
    { rawPayload: { source: "tally", nested: { right: 2, left: 1 } } }
  ),
  true
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://student-intake-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

let storedRows = [{
  applicant_id: "intake-existing",
  birth_year: 2010,
  created_at: "2026-08-01T00:00:00.000Z",
  current_learning_process: "기존 과정",
  desired_class: "template-a",
  enrollment_status: "상담중",
  form_id: "form-1",
  form_name: "신규생 접수",
  grade: "고1",
  memo: "기존 메모",
  name: "테스트 학생",
  parent_phone: "01022223333",
  previous_semester_score: "3등급",
  raw_payload: { fixture: true },
  school_name: "테스트고",
  source: "tally",
  source_submission_id: "submission-1",
  special_note: "기존 특이사항",
  status: "received",
  student_phone: "01011112222",
  updated_at: "2026-08-03T00:00:00.000Z"
}];
const mutationRequests = [];
globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  assert.equal(requestUrl.pathname.split("/rest/v1/")[1], "student_intake_applicants");
  const method = options.method || "GET";
  if (method === "GET") {
    const applicantId = requestUrl.searchParams.get("applicant_id")?.replace(/^eq\./, "");
    const rows = applicantId
      ? storedRows.filter((row) => row.applicant_id === applicantId)
      : storedRows;
    return new Response(JSON.stringify(rows), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  }
  if (method === "PATCH") {
    const body = JSON.parse(options.body || "{}");
    const applicantId = requestUrl.searchParams.get("applicant_id")?.replace(/^eq\./, "");
    const expectedUpdatedAt = requestUrl.searchParams.get("updated_at")?.replace(/^eq\./, "");
    mutationRequests.push({ body, search: requestUrl.search });
    const matchingIndex = storedRows.findIndex((row) => (
      row.applicant_id === applicantId && row.updated_at === expectedUpdatedAt
    ));
    if (matchingIndex < 0) {
      return new Response("[]", { headers: { "Content-Type": "application/json" }, status: 200 });
    }
    storedRows[matchingIndex] = { ...storedRows[matchingIndex], ...body };
    return new Response(JSON.stringify([storedRows[matchingIndex]]), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  }
  assert.fail(`unexpected Supabase fixture method: ${method}`);
};

try {
  const { listStudentIntakeApplicants, upsertStudentIntakeApplicant } = await import("../api/routes/coreData.js");
  const existing = (await listStudentIntakeApplicants()).applicants[0];
  const saved = await upsertStudentIntakeApplicant(
    { ...existing, currentLearningProcess: "CAS 최신 과정" },
    { expectedUpdatedAt: existing.updatedAt }
  );
  assert.equal(saved.source, "supabase");
  assert.equal(saved.verified, true);
  assert.equal(saved.applicant.currentLearningProcess, "CAS 최신 과정");
  assert.notEqual(saved.applicant.updatedAt, existing.updatedAt);
  assert.match(mutationRequests[0].search, /updated_at=eq\./);

  await assert.rejects(
    upsertStudentIntakeApplicant(
      { ...existing, currentLearningProcess: "구버전 덮어쓰기" },
      { expectedUpdatedAt: existing.updatedAt }
    ),
    (error) => error.code === "STUDENT_INTAKE_APPLICANT_CONFLICT" && error.statusCode === 409
  );
  assert.equal(storedRows[0].current_learning_process, "CAS 최신 과정");

  storedRows = [];
  await assert.rejects(
    upsertStudentIntakeApplicant(existing, { expectedUpdatedAt: existing.updatedAt }),
    (error) => error.code === "STUDENT_INTAKE_APPLICANT_CONFLICT" && error.currentApplicant === null
  );
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("student intake applicant API CAS and verification fixtures passed");
