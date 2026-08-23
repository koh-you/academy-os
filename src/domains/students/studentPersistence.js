import { isActiveStudent } from "./lessonRosterSelectors.js";

const studentPersistenceFields = [
  "studentId",
  "name",
  "loginId",
  "pin",
  "status",
  "schoolName",
  "grade",
  "birthYear",
  "studentPhone",
  "parentPhone",
  "defaultClassTemplateId",
  "textbook",
  "specialNote",
  "scheduleOverride",
  "withdrawalComment",
  "withdrawalReason",
  "withdrawnAt"
];

function normalizeComparableValue(value) {
  return value == null ? "" : String(value);
}

export function createStudentVersionFilter(studentId, expectedUpdatedAt) {
  return [
    `student_id=eq.${encodeURIComponent(studentId)}`,
    `updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`
  ].join("&");
}

export function isStudentInsertConflict(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return (
    message.includes("23505") ||
    message.includes("duplicate key") ||
    message.includes("unique constraint")
  );
}

export function createStudentConflict(studentId, currentStudent = null, reason = "updated") {
  const reasonMessage = reason === "deleted"
    ? "다른 화면에서 먼저 삭제되었습니다."
    : reason === "duplicate"
      ? "같은 학생 ID 또는 로그인 ID가 이미 저장되어 있습니다."
      : "다른 화면에서 먼저 변경되었습니다.";
  return {
    code: "STUDENT_CONFLICT",
    currentStudent,
    studentId,
    message: `학생 ${studentId}가 ${reasonMessage} 현재 입력은 유지했으니 서버 저장본을 확인해 주세요.`
  };
}

export function createNextStudentUpdatedAt(expectedUpdatedAt = "", now = Date.now()) {
  const expectedTime = new Date(expectedUpdatedAt).getTime();
  const nextTime = Number.isFinite(expectedTime)
    ? Math.max(now, expectedTime + 1)
    : now;
  return new Date(nextTime).toISOString();
}

export function areStudentTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}

export function areStudentsPersistedEqual(requested = {}, persisted = {}) {
  return studentPersistenceFields.every(
    (field) => normalizeComparableValue(requested[field]) === normalizeComparableValue(persisted[field])
  );
}

export function verifyRestoredStudent({ studentId, studentsAfterResult }) {
  if (studentsAfterResult.source !== "supabase") {
    throw new Error("퇴원 취소 결과를 Supabase에서 다시 확인하지 못했습니다.");
  }
  const persistedStudent = (studentsAfterResult.students ?? []).find(
    (student) => student.studentId === studentId
  );
  if (!persistedStudent) {
    throw new Error("저장 응답은 받았지만 Supabase 재조회에서 학생을 찾지 못했습니다.");
  }
  if (
    !isActiveStudent(persistedStudent) ||
    persistedStudent.withdrawnAt ||
    persistedStudent.withdrawalReason ||
    persistedStudent.withdrawalComment
  ) {
    throw new Error("Supabase 재조회 값이 퇴원 취소 요청과 다릅니다. 완료로 처리하지 않았습니다.");
  }
  return persistedStudent;
}

export function resolveStudentRowSaveSuccess({
  currentStudent = {},
  persistedStudent = {},
  requestedStudent = {}
}) {
  const hasPendingChanges = !areStudentsPersistedEqual(requestedStudent, currentStudent);
  return {
    hasPendingChanges,
    student: hasPendingChanges
      ? { ...persistedStudent, ...currentStudent, updatedAt: persistedStudent.updatedAt }
      : { ...currentStudent, ...persistedStudent }
  };
}
