const studentIntakeApplicantPersistenceFields = [
  "source",
  "sourceSubmissionId",
  "formId",
  "formName",
  "status",
  "name",
  "birthYear",
  "grade",
  "schoolName",
  "studentPhone",
  "parentPhone",
  "defaultClassTemplateId",
  "enrollmentStatus",
  "currentLearningProcess",
  "previousSemesterScore",
  "specialNote",
  "memo",
  "rawPayload",
  "createdAt"
];

function normalizeComparableValue(value) {
  if (value == null) return "";
  if (Array.isArray(value)) return JSON.stringify(value.map(normalizeComparableValue));
  if (typeof value === "object") {
    return JSON.stringify(Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, normalizeComparableValue(value[key])])
    ));
  }
  return String(value);
}

export function createStudentIntakeApplicantVersionFilter(applicantId, expectedUpdatedAt) {
  return [
    `applicant_id=eq.${encodeURIComponent(applicantId)}`,
    `updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`
  ].join("&");
}

export function createStudentIntakeApplicantConflict(applicantId, currentApplicant = null, reason = "updated") {
  const reasonMessage = reason === "deleted"
    ? "다른 화면에서 먼저 삭제되었습니다."
    : "다른 화면에서 먼저 변경되었습니다.";
  return {
    applicantId,
    code: "STUDENT_INTAKE_APPLICANT_CONFLICT",
    currentApplicant,
    message: `Tally 후보 ${applicantId}가 ${reasonMessage} 현재 입력은 유지했으니 서버 저장본을 확인해 주세요.`
  };
}

export function createNextStudentIntakeApplicantUpdatedAt(expectedUpdatedAt = "", now = Date.now()) {
  const expectedTime = new Date(expectedUpdatedAt).getTime();
  const nextTime = Number.isFinite(expectedTime)
    ? Math.max(now, expectedTime + 1)
    : now;
  return new Date(nextTime).toISOString();
}

export function areStudentIntakeApplicantTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}

export function areStudentIntakeApplicantsPersistedEqual(requested = {}, persisted = {}) {
  return studentIntakeApplicantPersistenceFields.every((field) => {
    if (field === "defaultClassTemplateId") {
      return normalizeComparableValue(requested.defaultClassTemplateId || requested.desiredClass) ===
        normalizeComparableValue(persisted.defaultClassTemplateId || persisted.desiredClass);
    }
    return normalizeComparableValue(requested[field]) === normalizeComparableValue(persisted[field]);
  });
}
