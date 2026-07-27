import assert from "node:assert/strict";
import { getSpecialLectureEnrollmentSaveSnapshot } from "../src/domains/specialLectures/specialLectureGuideUtils.js";

const browserEnrollment = {
  applicationId: "application_1",
  enrollmentId: "enrollment_1",
  memo: "선생님 수기 입력 정정",
  planReviewedAt: "2026-07-27T04:01:02.345Z",
  planSource: "manual",
  sessionIds: ["session_1", "session_2"],
  sessionPlans: [
    {
      sessionId: "session_1",
      status: "active",
      effectiveStartTime: "13:00",
      effectiveEndTime: "15:00",
      overrideReason: "선생님 수기 입력 정정"
    },
    {
      sessionId: "session_2",
      status: "active",
      effectiveStartTime: "12:00",
      effectiveEndTime: "14:00",
      overrideReason: "선생님 수기 입력 정정"
    }
  ],
  specialLectureGuideId: "guide_1",
  status: "active",
  studentId: "student_1"
};

const supabaseEnrollment = {
  ...browserEnrollment,
  planReviewedAt: "2026-07-27T04:01:02.345+00:00"
};

assert.equal(
  getSpecialLectureEnrollmentSaveSnapshot(browserEnrollment),
  getSpecialLectureEnrollmentSaveSnapshot(supabaseEnrollment),
  "동일한 UTC 시각의 Z/+00:00 표기는 같은 저장값으로 검증해야 합니다."
);

assert.notEqual(
  getSpecialLectureEnrollmentSaveSnapshot(browserEnrollment),
  getSpecialLectureEnrollmentSaveSnapshot({
    ...supabaseEnrollment,
    sessionPlans: supabaseEnrollment.sessionPlans.map((plan, index) =>
      index === 1 ? { ...plan, effectiveStartTime: "13:00" } : plan
    )
  }),
  "실제 회차 시간 차이는 저장값 불일치로 검출해야 합니다."
);

assert.notEqual(
  getSpecialLectureEnrollmentSaveSnapshot(browserEnrollment),
  getSpecialLectureEnrollmentSaveSnapshot({
    ...supabaseEnrollment,
    sessionPlans: supabaseEnrollment.sessionPlans.map((plan, index) =>
      index === 1 ? { ...plan, status: "excluded" } : plan
    )
  }),
  "실제 회차 선택 차이는 저장값 불일치로 검출해야 합니다."
);

console.log("Special lecture enrollment save verification tests passed.");
