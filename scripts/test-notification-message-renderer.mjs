import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  buildAttendanceBody,
  buildLessonNotificationBody,
  resolveLessonCommentBody
} from "../src/domains/notifications/notificationMessageRenderer.js";

const attendancePayload = {
  attendanceStatus: "late",
  checkedAt: "2026-08-03T10:18:00.000Z",
  checkInTime: "19:18",
  lessonName: "가상 중2반",
  lateMinutes: 18,
  reason: "교통 지연"
};
assert.equal(
  buildAttendanceBody(attendancePayload),
  [
    "🏫 출결 : 지각 (사유: 교통 지연)",
    "📘 수업 : 가상 중2반",
    "🕒 시간 : 19:18"
  ].join("\n\n")
);
assert.equal(
  buildAttendanceBody({
    attendanceStatus: "checkout",
    checkedAt: "2026-08-03T12:05:00.000Z",
    checkInTime: "18:55",
    checkOutTime: "21:05",
    lessonName: "가상 중2반"
  }).endsWith("🕒 시간 : 21:05"),
  true,
  "checkout must use the final checkout time"
);

const lessonPayload = {
  assignmentStatus: "partial_80",
  assignmentStatusMessage: "공통 과제 문구",
  assignmentStatusParentMessage: "학부모 과제 문구",
  assignmentStatusStudentMessage: "학생 과제 문구",
  attendanceReason: "교통 지연",
  attendanceStatus: "late",
  checkInTime: "19:18",
  checkedAt: "2026-08-03T10:18:00.000Z",
  homeworkFollowupNotice: "- 다음 수업에 오답 확인",
  lessonContent: "이차함수 최대·최소",
  lessonId: "lesson_renderer_TARGET",
  lessonMaterial: "쎈 중등수학 2-2",
  message: "오늘 확인한 풀이를 다시 정리해 주세요.",
  nextHomework: "쎈 120~125번",
  osScheduled: true,
  preparationNotice: "",
  previousHomework: "쎈 110~119번",
  supplementSchedule: "8/4(화) 오후 7:00\n- 8/6(목) 오후 8:00",
  testResult: "단원테스트 90점"
};

const parentPreviewBody = buildLessonNotificationBody({
  attendanceReason: lessonPayload.attendanceReason,
  attendanceStatus: lessonPayload.attendanceStatus,
  checkInTime: lessonPayload.checkInTime,
  checkedAt: lessonPayload.checkedAt,
  assignmentStatus: lessonPayload.assignmentStatusParentMessage,
  audience: "parent",
  homeworkFollowupNotice: lessonPayload.homeworkFollowupNotice,
  lessonContent: lessonPayload.lessonContent,
  lessonMaterial: lessonPayload.lessonMaterial,
  nextHomework: lessonPayload.nextHomework,
  previousHomework: lessonPayload.previousHomework,
  preparationNotice: lessonPayload.preparationNotice,
  supplementSchedule: lessonPayload.supplementSchedule,
  teacherComment: lessonPayload.message,
  testResult: lessonPayload.testResult
});
const parentLiveBody = resolveLessonCommentBody(lessonPayload, "parent");
assert.equal(parentPreviewBody, parentLiveBody, "parent client preview and server live body must share one renderer");
assert.equal(parentLiveBody.includes("✅ 과제 상태 : 학부모 과제 문구"), true);
assert.equal(parentLiveBody.includes("- 8/4(화) 오후 7:00\n- 8/6(목) 오후 8:00"), true);
assert.equal(parentLiveBody.includes("💬 코멘트\n오늘 확인한 풀이를 다시 정리해 주세요."), true);

const studentPreviewBody = buildLessonNotificationBody({
  attendanceReason: lessonPayload.attendanceReason,
  attendanceStatus: lessonPayload.attendanceStatus,
  checkInTime: lessonPayload.checkInTime,
  checkedAt: lessonPayload.checkedAt,
  assignmentStatus: lessonPayload.assignmentStatusStudentMessage,
  audience: "student",
  homeworkFollowupNotice: lessonPayload.homeworkFollowupNotice,
  lessonContent: lessonPayload.lessonContent,
  lessonMaterial: lessonPayload.lessonMaterial,
  nextHomework: lessonPayload.nextHomework,
  previousHomework: lessonPayload.previousHomework,
  supplementSchedule: lessonPayload.supplementSchedule,
  teacherComment: lessonPayload.message,
  testResult: lessonPayload.testResult
});
assert.equal(studentPreviewBody, resolveLessonCommentBody(lessonPayload, "student"));
assert.equal(studentPreviewBody.includes("✅ 과제 상태 : 학생 과제 문구"), true);

const unrecordedBody = resolveLessonCommentBody({
  ...lessonPayload,
  assignmentStatus: "not_entered",
  previousHomework: "표시되면 안 됨"
}, "parent");
assert.equal(unrecordedBody.includes("✅ 과제 상태"), false);
assert.equal(unrecordedBody.includes("📘 지난 과제"), false);
assert.equal(unrecordedBody.includes("⭐ 보충/확인 안내\n- 8/4(화) 오후 7:00"), true);

assert.equal(
  resolveLessonCommentBody({
    commentBodyOverride: "교사가 확정한 공지 본문",
    message: "fallback",
    noticeKind: "general_notice"
  }, "parent"),
  "교사가 확정한 공지 본문",
  "notice human final must stay authoritative"
);
assert.equal(
  resolveLessonCommentBody({ commentBodyOverride: "수업 context 없는 최종 본문" }, "student"),
  "수업 context 없는 최종 본문"
);

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [appSource, rendererSource, routeSource, serverSource] = await Promise.all([
  read("src/app/App.jsx"),
  read("src/domains/notifications/notificationMessageRenderer.js"),
  read("api/routes/notifications.js"),
  read("api/server.js")
]);

assert.ok(appSource.includes('from "../domains/notifications/notificationMessageRenderer.js"'));
assert.ok(appSource.includes("function buildCommentPreviewText("));
assert.ok(appSource.includes("const previewBody = buildLessonNotificationBody({"));
assert.ok(appSource.includes("buildAttendanceBody({"));
assert.equal(appSource.includes("function buildCommentPreviewLines("), false);
assert.equal(appSource.includes("function createAttendanceNotificationText("), false);
assert.equal(appSource.includes("function formatAttendanceStatusForMessage("), false);

assert.ok(routeSource.includes('from "../../src/domains/notifications/notificationMessageRenderer.js"'));
assert.ok(routeSource.includes("export { buildAttendanceBody };"));
assert.ok(routeSource.includes("const commentBody = resolveLessonCommentBody(rendererPayload, audience)"));
assert.ok(routeSource.includes("function buildDailyReportBody("));
assert.ok(routeSource.includes("return buildLessonNotificationBody({"));
assert.equal(routeSource.includes("function resolveLessonCommentBody("), false);

assert.ok(serverSource.includes('from "../src/domains/notifications/notificationMessageRenderer.js"'));
assert.ok(serverSource.includes("const previewBody = buildLessonNotificationBody({"));
assert.equal(serverSource.includes("function formatNotificationAttendance("), false);

for (const forbiddenBoundary of [
  "fetch(",
  "postJson",
  "localStorage",
  "Supabase",
  "Solapi",
  "useState",
  "useEffect"
]) {
  assert.equal(rendererSource.includes(forbiddenBoundary), false, `pure renderer must not own ${forbiddenBoundary}`);
}

console.log("notification message renderer tests passed · attendance 2 · lesson preview/live parent+student · human final preserved");
