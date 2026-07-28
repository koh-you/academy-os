import assert from "node:assert/strict";
import { buildParentChannelLookupText, getParentResponseContexts } from "../src/domains/notifications/parentResponseContext.js";

const contexts = getParentResponseContexts([
  { notificationJobId: "sent_parent", notificationType: "daily_report", status: "sent", target: "parent", studentId: "student_1", recipient: "010-1111-2222", previewBody: "7월 28일 강사코멘트", createdAt: "2026-07-28T13:30:00.000Z", payload: { lessonDate: "2026-07-28" } },
  { notificationJobId: "sent_parent_unreadable_time", notificationType: "parent_comment", status: "sent", target: "parent", studentId: "student_1", previewBody: "시간 형식이 다른 기존 발신 기록", createdAt: "발송 시각 미확인" },
  { notificationJobId: "scheduled_parent", notificationType: "daily_report", status: "scheduled", target: "parent", studentId: "student_1", previewBody: "아직 발송 전" },
  { notificationJobId: "sent_student", notificationType: "student_comment", status: "sent", target: "student", studentId: "student_1", previewBody: "학생 알림" }
], [{ studentId: "student_1", name: "김연우", parentPhone: "010-9999-9999" }]);

assert.equal(contexts.length, 2);
const knownContext = contexts.find((context) => context.notificationJobId === "sent_parent");
assert.equal(knownContext.studentName, "김연우");
assert.equal(knownContext.body, "7월 28일 강사코멘트");
assert.match(buildParentChannelLookupText(knownContext), /학생: 김연우/);
assert.match(buildParentChannelLookupText(knownContext), /학부모 번호: 010-1111-2222/);

console.log("parent response context tests passed");
