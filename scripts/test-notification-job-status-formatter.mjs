import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { formatNotificationJobStatusLabel } from "../src/domains/notifications/notificationJobStatusFormatter.js";

const calls = [];
assert.equal(
  formatNotificationJobStatusLabel({
    formatTimeLabel() {
      calls.push("format");
      return "호출되면 안 됨";
    },
    isSchedulePast() {
      calls.push("past");
      return false;
    },
    job: null
  }),
  "없음"
);
assert.deepEqual(calls, []);

const scheduledTarget = {
  notificationJobId: "job_TARGET",
  scheduledAt: "2026-07-29T05:00:00.000Z",
  status: "scheduled"
};
const scheduledSnapshot = structuredClone(scheduledTarget);
calls.length = 0;
assert.equal(
  formatNotificationJobStatusLabel({
    formatTimeLabel(value) {
      calls.push(["format", value]);
      return "7. 29. 14:00";
    },
    isSchedulePast(value) {
      calls.push(["past", value]);
      return false;
    },
    job: scheduledTarget
  }),
  "예약 중 · 7. 29. 14:00"
);
assert.deepEqual(calls, [
  ["format", scheduledTarget.scheduledAt],
  ["past", scheduledTarget.scheduledAt]
]);

calls.length = 0;
assert.equal(
  formatNotificationJobStatusLabel({
    formatTimeLabel(value) {
      calls.push(["format", value]);
      return "";
    },
    isSchedulePast(value) {
      calls.push(["past", value]);
      return true;
    },
    job: scheduledTarget
  }),
  "예약 시각 지남 · 확인 필요 · 예약시각 없음"
);
assert.deepEqual(calls, [
  ["format", scheduledTarget.scheduledAt],
  ["past", scheduledTarget.scheduledAt]
]);

const statusCases = [
  [{ status: "sent" }, "발송 완료"],
  [{ status: "dry_run" }, "테스트 기록"],
  [{ status: "send_unconfirmed" }, "발송 확인 필요"],
  [{ error: "가상 TARGET 오류", status: "send_unconfirmed" }, "발송 확인 필요 · 가상 TARGET 오류"],
  [{ status: "pending_send" }, "발송 대기"],
  [{ status: "failed" }, "실패"],
  [{ error: "가상 CONTROL 오류", status: "failed" }, "실패 · 가상 CONTROL 오류"],
  [{ status: "canceled" }, "취소"],
  [{ status: "draft" }, "초안"],
  [{ status: "queued" }, "queued"],
  [{ status: "" }, "확인 필요"],
  [{}, "확인 필요"]
];
for (const [job, expected] of statusCases) {
  calls.length = 0;
  assert.equal(
    formatNotificationJobStatusLabel({
      formatTimeLabel() {
        calls.push("format");
        return "";
      },
      isSchedulePast() {
        calls.push("past");
        return false;
      },
      job
    }),
    expected,
    `unexpected label for ${job.status ?? "missing"}`
  );
  assert.deepEqual(calls, []);
}
assert.deepEqual(scheduledTarget, scheduledSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const formatterSource = await readFile(
  new URL("../src/domains/notifications/notificationJobStatusFormatter.js", import.meta.url),
  "utf8"
);
for (const binding of [
  'import { formatNotificationJobStatusLabel } from "../domains/notifications/notificationJobStatusFormatter.js"',
  "function formatNotificationJobStatus(job)",
  "return formatNotificationJobStatusLabel({",
  "formatTimeLabel: formatKoreaTimeLabel",
  "isSchedulePast: isNotificationSchedulePast",
  "job"
]) {
  assert.ok(appSource.includes(binding), `missing notification status binding: ${binding}`);
}
assert.ok(!appSource.includes('if (job.status === "sent") return "발송 완료"'));
assert.ok(!appSource.includes('if (job.status === "failed") return `실패'));

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "setNotification"
]) {
  assert.ok(
    !formatterSource.includes(forbiddenSideEffect),
    `notification job status formatter must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("notification job status formatter TARGET/CONTROL fixtures passed");
