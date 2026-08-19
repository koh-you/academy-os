import assert from "node:assert/strict";
import {
  createNotificationProviderRouteRegistry,
  notificationProviderRouteSignatures
} from "../src/shared/server/notificationProviderRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let attendanceResult = { messageId: "att-1" };
let commentResult = { messageId: "comment-1" };
let dailyReportResult = { messageId: "daily-1" };
let studentReminderResult = { messageId: "reminder-1" };
let slackDailyResult = { posted: true };
let slackTodayResult = { posted: true };
let reserveTodayResult = { reserved: true };
let dispatchAuthState = { configured: true, ok: true };
let routeError = null;

const registry = createNotificationProviderRouteRegistry({
  getDispatchAuthState: (request, payload) => {
    events.push("authState");
    return dispatchAuthState;
  },
  getKoreaDateString: (value) => "2026-01-01",
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  reserveTodayTeacherScheduleSlack: async (options) => {
    events.push("reserveToday");
    if (routeError?.stage === "reserveToday") throw routeError.error;
    return reserveTodayResult;
  },
  sendAttendanceAlimtalkOnce: async (payload) => {
    events.push("attendance");
    if (routeError?.stage === "attendance") throw routeError.error;
    return attendanceResult;
  },
  sendDailyReportAlimtalk: async (payload) => {
    events.push("dailyReport");
    if (routeError?.stage === "dailyReport") throw routeError.error;
    return dailyReportResult;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  sendLessonCommentAlimtalk: async (payload) => {
    events.push("comment");
    if (routeError?.stage === "comment") throw routeError.error;
    return commentResult;
  },
  sendSlackDailyScheduleSummary: async (payload) => {
    events.push("slackDaily");
    if (routeError?.stage === "slackDaily") throw routeError.error;
    return slackDailyResult;
  },
  sendStudentScheduleReminderAlimtalk: async (payload) => {
    events.push("studentReminder");
    if (routeError?.stage === "studentReminder") throw routeError.error;
    return studentReminderResult;
  },
  sendTodayTeacherScheduleSlack: async (options) => {
    events.push("slackToday");
    if (routeError?.stage === "slackToday") throw routeError.error;
    return slackTodayResult;
  }
});

function route(method, path) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(notificationProviderRouteSignatures), true);
assert.equal(notificationProviderRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(notificationProviderRouteSignatures, [
  { method: "POST", path: "/api/notifications/attendance-alimtalk" },
  { method: "POST", path: "/api/notifications/comment-alimtalk" },
  { method: "POST", path: "/api/notifications/daily-report-alimtalk" },
  { method: "POST", path: "/api/notifications/student-schedule-reminder" },
  { method: "POST", path: "/api/notifications/slack-daily-schedule" },
  { method: "POST", path: "/api/notifications/slack-today-schedule" },
  { method: "POST", path: "/api/notifications/slack-today-schedule/reserve" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
rawBody = { studentId: "student-1" };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/attendance-alimtalk")), true);
assert.deepEqual(events, ["read", "attendance"]);
assert.deepEqual(sends.at(-1).body, { ok: true, provider: "solapi", result: attendanceResult });

events.length = 0;
rawBody = { lessonId: "lesson-1" };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/comment-alimtalk")), true);
assert.deepEqual(events, ["read", "comment"]);
assert.deepEqual(sends.at(-1).body, { ok: true, provider: "solapi", result: commentResult });

events.length = 0;
rawBody = { sendMode: "scheduled" };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/comment-alimtalk")), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "scheduledDate is required for scheduled comment Alimtalk sends."
});

events.length = 0;
rawBody = { date: "2026-01-01" };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/daily-report-alimtalk")), true);
assert.deepEqual(events, ["read", "dailyReport"]);
assert.deepEqual(sends.at(-1).body, { ok: true, provider: "solapi", result: dailyReportResult });

events.length = 0;
rawBody = { studentId: "student-1" };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/student-schedule-reminder")), true);
assert.deepEqual(events, ["read", "studentReminder"]);
assert.deepEqual(sends.at(-1).body, { ok: true, provider: "solapi", result: studentReminderResult });

events.length = 0;
rawBody = { date: "2026-01-01" };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-daily-schedule")), true);
assert.deepEqual(events, ["read", "slackDaily"]);
assert.deepEqual(sends.at(-1).body, { ok: true, provider: "slack", result: slackDailyResult });

events.length = 0;
rawBody = {};
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-today-schedule")), true);
assert.deepEqual(events, ["read", "slackToday"]);
assert.deepEqual(sends.at(-1).body, { ok: true, provider: "slack", result: slackTodayResult });

events.length = 0;
rawBody = {};
dispatchAuthState = { configured: true, ok: true };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-today-schedule/reserve")), true);
assert.deepEqual(events, ["read", "authState", "reserveToday"]);
assert.deepEqual(sends.at(-1).body, { ok: true, provider: "slack_bot", result: reserveTodayResult });

events.length = 0;
dispatchAuthState = { configured: true, ok: false };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-today-schedule/reserve")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "Invalid notification dispatch token." });
assert.equal(sends.at(-1).statusCode, 401);

events.length = 0;
dispatchAuthState = { configured: false, ok: false };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-today-schedule/reserve")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "NOTIFICATION_DISPATCH_TOKEN is required for Slack scheduling." });
assert.equal(sends.at(-1).statusCode, 503);
dispatchAuthState = { configured: true, ok: true };

routeError = { stage: "attendance", error: new Error("전송 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/attendance-alimtalk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "전송 실패" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "comment", error: new Error("코멘트 실패") };
rawBody = {};
assert.equal(await registry.dispatch(route("POST", "/api/notifications/comment-alimtalk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "코멘트 실패" });

routeError = { stage: "dailyReport", error: new Error("일일보고 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/daily-report-alimtalk")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "일일보고 실패" });

routeError = { stage: "studentReminder", error: new Error("리마인더 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/student-schedule-reminder")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "리마인더 실패" });

routeError = { stage: "slackDaily", error: new Error("슬랙 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-daily-schedule")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "슬랙 실패" });

routeError = { stage: "slackToday", error: new Error("슬랙 오늘 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-today-schedule")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "슬랙 오늘 실패" });

routeError = { stage: "reserveToday", error: new Error("예약 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/notifications/slack-today-schedule/reserve")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "예약 실패" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("notification provider route registry attendance, comment, daily report, reminder, slack, reserve, and error contracts passed");
