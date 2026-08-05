import assert from "node:assert/strict";
import {
  createSpecialLectureApplicationId,
  createSpecialLectureEnrollmentId,
  fromSpecialLectureApplicationRow,
  fromSpecialLectureEnrollmentRow,
  fromStudentIntakeApplicantRow,
  normalizeSpecialLectureApplicationStatus,
  normalizeSpecialLectureEnrollmentSessionIds,
  normalizeSpecialLectureEnrollmentSessionPlans,
  normalizeSpecialLectureEnrollmentStatus,
  normalizeSpecialLectureRequestedSessionPlans,
  toSpecialLectureApplicationRow,
  toSpecialLectureEnrollmentRow,
  toStudentIntakeApplicantRow
} from "../src/shared/persistence/intakeSpecialLectureRowMappers.js";

function assertIsoTimestamp(value) {
  assert.equal(new Date(value).toISOString(), value);
}

const applicantRow = toStudentIntakeApplicantRow({
  applicantId: "applicant_mapper_1",
  source: "tally",
  sourceSubmissionId: "submission_mapper_1",
  formId: "form_mapper",
  formName: "입학 상담",
  status: "received",
  name: "상담 학생",
  birthYear: "2012",
  grade: "중2",
  schoolName: "으뜸중",
  studentPhone: "",
  parentPhone: "01011112222",
  defaultClassTemplateId: "template_mapper",
  enrollmentStatus: "상담중",
  currentLearningProcess: "중2-1",
  previousSemesterScore: "90",
  specialNote: "",
  memo: "전화 상담",
  rawPayload: { submissionId: "submission_mapper_1" },
  createdAt: "2026-08-05T00:00:00.000Z",
  unknownDomainField: "drop-me"
});
assert.equal(applicantRow.birth_year, 2012);
assert.equal(applicantRow.student_phone, null);
assert.equal(applicantRow.desired_class, "template_mapper");
assert.equal(applicantRow.created_at, "2026-08-05T00:00:00.000Z");
assertIsoTimestamp(applicantRow.updated_at);
assert.equal("unknown_domain_field" in applicantRow, false);

const applicantDomain = fromStudentIntakeApplicantRow({ ...applicantRow, unknown_db_column: "drop-me" });
assert.equal(applicantDomain.applicantId, "applicant_mapper_1");
assert.equal(applicantDomain.studentPhone, "");
assert.equal(applicantDomain.desiredClass, "template_mapper");
assert.equal(applicantDomain.defaultClassTemplateId, "template_mapper");
assert.deepEqual(applicantDomain.rawPayload, { submissionId: "submission_mapper_1" });
assert.equal("unknownDbColumn" in applicantDomain, false);
assert.equal(
  fromStudentIntakeApplicantRow({ applicant_id: "applicant_non_template", desired_class: "수학 상담" })
    .defaultClassTemplateId,
  ""
);

assert.match(createSpecialLectureApplicationId(), /^special_lecture_application_\d+_[a-z0-9]{6}$/);
assert.equal(normalizeSpecialLectureApplicationStatus("confirmed"), "confirmed");
assert.equal(normalizeSpecialLectureApplicationStatus("unknown"), "received");
assert.equal(normalizeSpecialLectureApplicationStatus(""), "received");
assert.deepEqual(
  normalizeSpecialLectureRequestedSessionPlans([
    {
      session_index: "0",
      requested_start_time: "7:05",
      requested_end_time: "29:90",
      override_reason: "등원 조정"
    },
    { sessionIndex: 2, requestedStartTime: "10:00", requestedEndTime: "12:00" },
    { sessionIndex: -1, requestedStartTime: "10:00", requestedEndTime: "12:00" },
    { sessionIndex: "invalid" }
  ]),
  [
    {
      sessionIndex: 0,
      requestedStartTime: "07:05",
      requestedEndTime: "23:59",
      overrideReason: "등원 조정"
    },
    {
      sessionIndex: 2,
      requestedStartTime: "10:00",
      requestedEndTime: "12:00",
      overrideReason: null
    }
  ]
);

const applicationRow = toSpecialLectureApplicationRow({
  applicationId: "special_application_mapper_1",
  specialLectureGuideId: "guide_mapper",
  guideSlug: "summer-mapper",
  campaign: "2026-summer",
  source: "tally",
  sourceSubmissionId: "submission_special_mapper",
  formId: "form_special_mapper",
  formName: "여름 특강",
  status: "invalid-status",
  studentName: "특강 학생",
  schoolName: "으뜸중",
  grade: "중2",
  studentPhone: "",
  parentPhone: "01022223333",
  selectedSession: "1회차",
  requestedSessionPlans: [
    { session_index: 1, requested_start_time: "9:00", requested_end_time: "11:00" }
  ],
  memo: "",
  rawPayload: { source: "fixture" },
  createdAt: "2026-08-05T01:00:00.000Z"
});
assert.equal(applicationRow.status, "received");
assert.equal(applicationRow.student_phone, null);
assert.deepEqual(applicationRow.requested_session_plans, [
  {
    sessionIndex: 1,
    requestedStartTime: "09:00",
    requestedEndTime: "11:00",
    overrideReason: null
  }
]);
assertIsoTimestamp(applicationRow.updated_at);

const applicationDomain = fromSpecialLectureApplicationRow({
  ...applicationRow,
  requested_session_plans: [
    { session_index: 1, requested_start_time: "9:00", requested_end_time: "11:00" }
  ],
  unknown_db_column: true
});
assert.equal(applicationDomain.status, "received");
assert.equal(applicationDomain.studentPhone, "");
assert.deepEqual(applicationDomain.requestedSessionPlans, [
  {
    sessionIndex: 1,
    requestedStartTime: "09:00",
    requestedEndTime: "11:00",
    overrideReason: null
  }
]);
assert.equal("unknownDbColumn" in applicationDomain, false);
assert.equal(
  "requestedSessionPlans" in fromSpecialLectureApplicationRow({ application_id: "application_without_plans" }),
  false
);
assert.equal(
  "requested_session_plans" in toSpecialLectureApplicationRow({ applicationId: "application_without_plans" }),
  false
);

assert.match(createSpecialLectureEnrollmentId(), /^special_lecture_enrollment_\d+_[a-z0-9]{6}$/);
assert.equal(normalizeSpecialLectureEnrollmentStatus("canceled"), "canceled");
assert.equal(normalizeSpecialLectureEnrollmentStatus("unknown"), "active");
assert.deepEqual(
  normalizeSpecialLectureEnrollmentSessionIds(["session_1", "", "session_1", null, "session_2"]),
  ["session_1", "session_2"]
);
assert.deepEqual(
  normalizeSpecialLectureEnrollmentSessionPlans([
    {
      session_id: "session_1",
      status: "excluded",
      effective_start_time: "8:05",
      effective_end_time: "10:00",
      override_reason: "개별 제외"
    },
    { sessionId: "session_2", status: "unexpected" },
    { sessionId: "" }
  ]),
  [
    {
      sessionId: "session_1",
      status: "excluded",
      effectiveStartTime: "08:05",
      effectiveEndTime: "10:00",
      overrideReason: "개별 제외"
    },
    {
      sessionId: "session_2",
      status: "active",
      effectiveStartTime: null,
      effectiveEndTime: null,
      overrideReason: null
    }
  ]
);

const enrollmentRow = toSpecialLectureEnrollmentRow({
  enrollmentId: "special_enrollment_mapper_1",
  specialLectureGuideId: "guide_mapper",
  guideSlug: "summer-mapper",
  applicationId: "special_application_mapper_1",
  studentId: "student_mapper_1",
  status: "invalid-status",
  sessionIds: ["session_1", "session_1", "session_2"],
  sessionPlans: [
    { session_id: "session_1", effective_start_time: "8:05", effective_end_time: "10:00" }
  ],
  planSource: "teacher",
  planReviewedAt: "2026-08-05T02:00:00.000Z",
  memo: "",
  createdAt: "2026-08-05T01:30:00.000Z"
});
assert.equal(enrollmentRow.status, "active");
assert.deepEqual(enrollmentRow.session_ids, ["session_1", "session_2"]);
assert.equal(enrollmentRow.plan_source, "teacher");
assert.equal(enrollmentRow.plan_reviewed_at, "2026-08-05T02:00:00.000Z");
assertIsoTimestamp(enrollmentRow.updated_at);

const enrollmentDomain = fromSpecialLectureEnrollmentRow({ ...enrollmentRow, unknown_db_column: true });
assert.equal(enrollmentDomain.status, "active");
assert.deepEqual(enrollmentDomain.sessionIds, ["session_1", "session_2"]);
assert.equal(enrollmentDomain.planSource, "teacher");
assert.equal(enrollmentDomain.planReviewedAt, "2026-08-05T02:00:00.000Z");
assert.equal("unknownDbColumn" in enrollmentDomain, false);

const enrollmentWithoutReview = toSpecialLectureEnrollmentRow({
  enrollmentId: "special_enrollment_without_review"
});
assert.equal("plan_source" in enrollmentWithoutReview, false);
assert.equal("plan_reviewed_at" in enrollmentWithoutReview, false);
assert.equal(
  "planSource" in fromSpecialLectureEnrollmentRow({ enrollment_id: "special_enrollment_without_review" }),
  false
);

console.log("intake and special lecture row mapper null, legacy, version, and unknown-field contracts passed");
