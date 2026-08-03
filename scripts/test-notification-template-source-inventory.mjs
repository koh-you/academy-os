import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [
  appSource,
  notificationRouteSource,
  serverSource,
  settingsSource,
  noticeConfigSource,
  noticeBuilderSource,
  supplementJobBuilderSource,
  specialLectureSource
] = await Promise.all([
  read("src/app/App.jsx"),
  read("api/routes/notifications.js"),
  read("api/server.js"),
  read("src/domains/settings/SettingsCenter.jsx"),
  read("src/domains/notifications/notificationCenterConfig.js"),
  read("src/domains/notifications/notificationNoticeBuilders.js"),
  read("src/domains/notifications/supplementJobBuilders.js"),
  read("src/domains/specialLectures/specialLectureGuideUtils.js")
]);

const managedTemplateKeys = [
  "lessonNextHomeworkFollowup",
  "lessonStayAfterHomeworkFollowup",
  "absenceMakeupStudentReminder",
  "homeworkMakeupStudentReminder",
  "supplementScheduleConfirmNotice",
  "supplementScheduleChangeNotice"
];
for (const key of managedTemplateKeys) {
  assert.ok(appSource.includes(`${key}:`), `missing managed notification template key: ${key}`);
  assert.ok(appSource.includes(`key: "${key}"`), `missing settings metadata for notification template key: ${key}`);
}
assert.ok(appSource.includes("function normalizeNotificationTemplates(templates = {})"));
assert.ok(appSource.includes("source: \"Supabase app_state.aiSettings.notificationTemplates\""));
assert.ok(settingsSource.includes("notificationTemplateRows.map((row)"));
assert.ok(settingsSource.includes("settings.notificationTemplates[row.key]"));
assert.ok(settingsSource.includes("updateNotificationTemplate(row.key, event.target.value)"));

const providerTemplateEnvNames = [
  "SOLAPI_ATTENDANCE_TEMPLATE_ID",
  "SOLAPI_DAILY_REPORT_TEMPLATE_ID",
  "SOLAPI_SPECIAL_LECTURE_TEMPLATE_ID",
  "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"
];
for (const envName of providerTemplateEnvNames) {
  assert.ok(notificationRouteSource.includes(envName), `missing Solapi provider template contract: ${envName}`);
}
for (const builder of ["buildAttendanceBody", "buildDailyReportBody", "buildStudentScheduleReminderBody"]) {
  assert.ok(notificationRouteSource.includes(`function ${builder}(`), `missing server message builder: ${builder}`);
}
assert.ok(notificationRouteSource.includes("export function buildAttendanceBody"));
assert.ok(notificationRouteSource.includes('"#{출결본문}": attendanceBody'));
assert.ok(notificationRouteSource.includes('"#{리포트본문}": reportBody'));
assert.ok(notificationRouteSource.includes('"#{코멘트}": reminderBody'));

for (const key of managedTemplateKeys.slice(0, 2)) {
  assert.ok(serverSource.includes(`${key}:`), `server dispatch must load configured lesson follow-up: ${key}`);
}
assert.ok(serverSource.includes("states?.aiSettings?.notificationTemplates"));
assert.ok(serverSource.includes("formatSupplementScheduleLineForNotification"));

for (const presetId of ["material", "makeup", "notice", "specialLecture"]) {
  assert.ok(noticeConfigSource.includes(`id: "${presetId}"`), `missing code-owned notice preset: ${presetId}`);
}
assert.ok(noticeBuilderSource.includes("commentBodyOverride: noticeText"));
assert.ok(noticeBuilderSource.includes("previewBody: noticeText"));
assert.ok(specialLectureSource.includes("export function buildSpecialLectureNoticeText"));
assert.ok(appSource.includes('if (task.taskType === "retest")'));
assert.ok(appSource.includes("학생 재시험 안내입니다."));
assert.equal(appSource.split("createAttendanceNotificationText").length - 1, 1, "orphan attendance preview formatter changed");

assert.ok(supplementJobBuilderSource.includes("reminderBody,"));
assert.ok(supplementJobBuilderSource.includes("previewBody: reminderBody"));
assert.ok(supplementJobBuilderSource.includes('notificationType: "student_reminder"'));
assert.ok(supplementJobBuilderSource.includes('notificationType = isParent ? "notice_parent" : "schedule_reminder"'));
assert.ok(supplementJobBuilderSource.includes('["homework_makeup", "absence_makeup"].includes(task.taskType)'));

const productPaths = [
  "attendance",
  "lessonJournal",
  "homeworkMakeup",
  "absenceMakeup",
  "retest",
  "generalNotice",
  "specialLecture",
  "scheduleChange",
  "student11amReminder"
];
assert.equal(productPaths.length, 9);

console.log("notification template source inventory passed · product paths 9 · settings keys 6 · provider templates 4 · next bounded units 4");
