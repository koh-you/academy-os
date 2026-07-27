import assert from "node:assert/strict";
import {
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

console.log("student withdrawal lesson boundary tests passed");
