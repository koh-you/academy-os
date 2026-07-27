import assert from "node:assert/strict";
import { getWithdrawalFutureLessonStartDate } from "../src/domains/students/withdrawalLessonBoundary.js";

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

console.log("student withdrawal lesson boundary tests passed");
