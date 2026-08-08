import assert from "node:assert/strict";
import {
  createWithdrawalStudentMutation,
  getWithdrawalDateKey,
  getWithdrawalFutureLessonStartDate,
  isStudentVisibleInLessonJournal
} from "../src/domains/students/withdrawalLessonBoundary.js";

assert.equal(
  getWithdrawalFutureLessonStartDate("2026-07-27"),
  "2026-07-28",
  "퇴원일 당일 수업은 보존하고 다음 날부터만 명단 제외를 시작해야 합니다."
);
assert.equal(
  getWithdrawalFutureLessonStartDate("2026-12-31"),
  "2027-01-01",
  "연말 퇴원도 다음 달 첫날부터만 명단 제외를 시작해야 합니다."
);
assert.equal(getWithdrawalFutureLessonStartDate(""), "");
assert.equal(getWithdrawalFutureLessonStartDate("2026-7-27"), "");

const withdrawnStudent = { status: "paused", withdrawnAt: "2026-07-27T11:05:26.949+00:00" };
assert.equal(getWithdrawalDateKey(withdrawnStudent.withdrawnAt), "2026-07-27");
assert.equal(isStudentVisibleInLessonJournal(withdrawnStudent, "2026-07-25"), true, "퇴원 전 수업일지는 보존해야 합니다.");
assert.equal(isStudentVisibleInLessonJournal(withdrawnStudent, "2026-07-27"), true, "퇴원 당일 수업일지는 보존해야 합니다.");
assert.equal(isStudentVisibleInLessonJournal(withdrawnStudent, "2026-07-28"), false, "퇴원 다음 날부터 수업일지 명단에서 제외해야 합니다.");
assert.equal(isStudentVisibleInLessonJournal({ status: "active" }, "2026-07-28"), true);

const latestStudents = [{
  defaultClassTemplateId: "latest-class",
  name: "최신 학생",
  schoolName: "다른 화면 최신 학교",
  status: "active",
  studentId: "student-latest",
  updatedAt: "2026-08-08T05:00:00.000Z"
}];
const withdrawalMutation = createWithdrawalStudentMutation({
  studentId: "student-latest",
  students: latestStudents,
  withdrawalInfo: { comment: "특강수강생", reason: "other" },
  withdrawnAt: "2026-08-08T05:10:00.000Z"
});
assert.equal(withdrawalMutation.pausedStudent.schoolName, "다른 화면 최신 학교", "다른 화면의 최신 학생 정보를 보존해야 합니다.");
assert.equal(withdrawalMutation.pausedStudent.updatedAt, latestStudents[0].updatedAt, "최신 서버 버전으로 퇴원 CAS를 시작해야 합니다.");
assert.equal(withdrawalMutation.pausedStudent.withdrawalComment, "특강수강생");
assert.equal(withdrawalMutation.pausedStudent.status, "paused");
assert.equal(latestStudents[0].status, "active", "최신 원천 배열을 직접 변경하지 않아야 합니다.");

const alreadyWithdrawn = createWithdrawalStudentMutation({
  studentId: "student-latest",
  students: [withdrawalMutation.pausedStudent],
  withdrawalInfo: { comment: "재시도 입력" },
  withdrawnAt: "2026-08-08T05:20:00.000Z"
});
assert.equal(alreadyWithdrawn.alreadyWithdrawn, true, "응답 유실 뒤 재시도는 이미 완료된 퇴원을 성공으로 수렴해야 합니다.");
assert.equal(alreadyWithdrawn.pausedStudent.withdrawalComment, "특강수강생", "이미 저장된 퇴원 원천을 재시도 입력으로 덮지 않아야 합니다.");

assert.throws(
  () => createWithdrawalStudentMutation({ studentId: "missing", students: latestStudents }),
  /최신 학생 원천에서 찾지 못했습니다/
);

console.log("student withdrawal lesson boundary tests passed");
