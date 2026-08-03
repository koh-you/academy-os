import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  getNoticeMessageTemplates
} from "../src/domains/notifications/notificationCenterConfig.js";
import {
  buildAttendanceBody,
  resolveLessonCommentBody
} from "../src/domains/notifications/notificationMessageRenderer.js";
import { buildNoticeJob } from "../src/domains/notifications/notificationNoticeBuilders.js";
import {
  buildSupplementScheduleNoticeJob,
  buildSupplementStudentReminderJob,
  isSupplementStudentReminderTask
} from "../src/domains/notifications/supplementJobBuilders.js";
import {
  normalizeNotificationTemplates,
  renderNotificationTemplate
} from "../src/domains/notifications/notificationTemplateCatalog.js";
import { buildSpecialLectureNoticeText } from "../src/domains/specialLectures/specialLectureGuideUtils.js";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const sources = Object.fromEntries(await Promise.all([
  ["app", "src/app/App.jsx"],
  ["catalog", "src/domains/notifications/notificationTemplateCatalog.js"],
  ["composer", "src/domains/notifications/useNotificationComposerState.js"],
  ["config", "src/domains/notifications/notificationCenterConfig.js"],
  ["dashboard", "src/domains/teacher/DashboardAuxiliaryPanels.jsx"],
  ["noticeBuilders", "src/domains/notifications/notificationNoticeBuilders.js"],
  ["renderer", "src/domains/notifications/notificationMessageRenderer.js"],
  ["route", "api/routes/notifications.js"],
  ["server", "api/server.js"],
  ["settingsMetadata", "src/domains/settings/notificationTemplateSettingsCatalog.js"],
  ["special", "src/domains/specialLectures/specialLectureGuideUtils.js"],
  ["supplementBuilders", "src/domains/notifications/supplementJobBuilders.js"],
  ["supplementDraft", "src/domains/supplements/supplementTaskDraft.js"]
].map(async ([key, path]) => [key, await read(path)])));

const closeoutPaths = [
  {
    id: "attendance",
    contracts: [
      ["renderer", "export function buildAttendanceBody"],
      ["app", "buildAttendanceBody({"],
      ["route", "TEMPLATE_ENV.attendance"],
      ["route", '"#{출결본문}": attendanceBody']
    ]
  },
  {
    id: "lesson_journal",
    contracts: [
      ["renderer", "export function buildLessonNotificationBody"],
      ["app", "const previewBody = buildLessonNotificationBody({"],
      ["server", "const previewBody = buildLessonNotificationBody({"],
      ["route", '"#{리포트본문}": commentBody'],
      ["route", '"#{코멘트}": commentBody']
    ]
  },
  {
    id: "homework_makeup",
    contracts: [
      ["catalog", "homeworkMakeupStudentReminder:"],
      ["app", "renderNotificationTemplate(templates.homeworkMakeupStudentReminder"],
      ["supplementDraft", 'notificationDraft: "당일 학생 11시 알림톡 문구"'],
      ["supplementBuilders", "buildSupplementStudentReminderJob"],
      ["route", "TEMPLATE_ENV.studentComment"]
    ]
  },
  {
    id: "absence_makeup",
    contracts: [
      ["catalog", "absenceMakeupStudentReminder:"],
      ["app", "renderNotificationTemplate(templates.absenceMakeupStudentReminder"],
      ["supplementDraft", "supplementTeacherFinalFields"],
      ["supplementBuilders", "buildSupplementStudentReminderJob"],
      ["route", '"#{코멘트}": reminderBody']
    ]
  },
  {
    id: "supplement_schedule",
    contracts: [
      ["catalog", "supplementScheduleConfirmNotice:"],
      ["catalog", "supplementScheduleChangeNotice:"],
      ["app", "buildSupplementScheduleNoticeBody"],
      ["supplementDraft", "studentScheduleNotificationDraft"],
      ["supplementDraft", "parentScheduleNotificationDraft"],
      ["supplementBuilders", "buildSupplementScheduleNoticeJob"]
    ]
  },
  {
    id: "same_day_11am_reminder",
    contracts: [
      ["supplementDraft", "notificationDraft"],
      ["supplementBuilders", "getSupplementStudentReminderScheduledAt"],
      ["supplementBuilders", "reminderBody"],
      ["route", "sendStudentScheduleReminderAlimtalk"]
    ]
  },
  {
    id: "retest",
    contracts: [
      ["app", 'if (task.taskType === "retest")'],
      ["app", "학생 재시험 안내입니다."],
      ["app", "재시험을 진행하겠습니다."],
      ["supplementBuilders", '["homework_makeup", "absence_makeup"]']
    ]
  },
  {
    id: "general_notice",
    contracts: [
      ["catalog", "noticeMaterialPreset:"],
      ["catalog", "noticeMakeupPreset:"],
      ["catalog", "noticeAnnouncementPreset:"],
      ["config", "getNoticeMessageTemplates"],
      ["composer", "noticeText: composerViewModel.noticeText"],
      ["noticeBuilders", "commentBodyOverride: noticeText"],
      ["route", 'payload.noticeKind === "special_lecture"']
    ]
  },
  {
    id: "special_lecture",
    contracts: [
      ["catalog", "specialLectureGuideNotice:"],
      ["special", "templates.specialLectureGuideNotice"],
      ["dashboard", "buildSpecialLectureNoticeText(savedGuide"],
      ["noticeBuilders", "specialLectureGuideId"],
      ["route", "TEMPLATE_ENV.specialLectureNotice"],
      ["route", '"#{안내문링크}"']
    ]
  }
];

assert.deepEqual(
  closeoutPaths.map((path) => path.id),
  [
    "attendance",
    "lesson_journal",
    "homework_makeup",
    "absence_makeup",
    "supplement_schedule",
    "same_day_11am_reminder",
    "retest",
    "general_notice",
    "special_lecture"
  ]
);
for (const path of closeoutPaths) {
  for (const [sourceKey, contract] of path.contracts) {
    assert.ok(sources[sourceKey].includes(contract), `${path.id} missing ${sourceKey} contract: ${contract}`);
  }
}

const configuredTemplates = normalizeNotificationTemplates({
  absenceMakeupStudentReminder: "결석 seed #{학생명}\n#{보강일정}\n#{보강대상}",
  homeworkMakeupStudentReminder: "숙제 seed #{학생명}\n#{보강일정}\n#{밀린숙제}",
  noticeMaterialPreset: "설정 교재 seed",
  specialLectureGuideNotice: "특강 seed #{특강명}\n#{안내문링크}",
  supplementScheduleChangeNotice: "변경 seed #{안내제목}\n#{변경전}\n#{변경후일정}",
  supplementScheduleConfirmNotice: "확정 seed #{안내제목}\n#{보강일정}"
});

const attendanceBody = buildAttendanceBody({
  attendanceStatus: "late",
  checkInTime: "19:10",
  lessonName: "가상 수업",
  reason: "교통 지연"
});
assert.equal(attendanceBody.includes("🏫 출결 : 지각 (사유: 교통 지연)"), true);
assert.equal(attendanceBody.includes("📘 수업 : 가상 수업"), true);

const lessonHumanFinal = "교사가 저장한 수업일지 최종 문구";
assert.equal(
  resolveLessonCommentBody({ commentBodyOverride: lessonHumanFinal }, "parent"),
  lessonHumanFinal
);

const student = {
  name: "가상학생",
  parentPhone: "010-0000-0001",
  studentId: "student-closeout",
  studentPhone: "010-0000-0002"
};
const homeworkTask = {
  linkedLessonId: "lesson-homework-closeout",
  makeupTaskId: "task-homework-closeout",
  scheduledDate: "2026-08-04",
  scheduledTime: "19:00",
  studentId: student.studentId,
  taskType: "homework_makeup"
};
const absenceTask = {
  ...homeworkTask,
  linkedLessonId: "lesson-absence-closeout",
  makeupTaskId: "task-absence-closeout",
  taskType: "absence_makeup"
};

const homeworkSeed = renderNotificationTemplate(configuredTemplates.homeworkMakeupStudentReminder, {
  "학생명": student.name,
  "보강일정": "8월 4일 오후 7시",
  "밀린숙제": "쎈 120번"
});
const absenceSeed = renderNotificationTemplate(configuredTemplates.absenceMakeupStudentReminder, {
  "학생명": student.name,
  "보강일정": "8월 4일 오후 7시",
  "보강대상": "8월 1일 결석 수업"
});
assert.equal(homeworkSeed.startsWith("숙제 seed 가상학생"), true);
assert.equal(absenceSeed.startsWith("결석 seed 가상학생"), true);

const reminderHumanFinal = `${homeworkSeed}\n교사 최종 보충 메모`;
const reminderJob = buildSupplementStudentReminderJob({
  academyName: "가상 학원",
  now: new Date("2026-08-03T09:00:00.000Z"),
  reminderBody: reminderHumanFinal,
  scheduledAt: "2026-08-04T02:00:00.000Z",
  scheduleTitle: "숙제 보충",
  student,
  task: homeworkTask
});
assert.equal(reminderJob.previewBody, reminderHumanFinal);
assert.equal(reminderJob.payload.reminderBody, reminderHumanFinal);
assert.equal(isSupplementStudentReminderTask(homeworkTask), true);
assert.equal(isSupplementStudentReminderTask(absenceTask), true);
assert.equal(isSupplementStudentReminderTask({ taskType: "retest" }), false);

const scheduleSeed = renderNotificationTemplate(configuredTemplates.supplementScheduleConfirmNotice, {
  "안내제목": "가상학생 결석 보강 안내",
  "보강일정": "8월 4일 오후 7시"
});
const scheduleChangeSeed = renderNotificationTemplate(configuredTemplates.supplementScheduleChangeNotice, {
  "안내제목": "가상학생 결석 보강 변경 안내",
  "변경전": "8월 4일 오후 7시",
  "변경후일정": "8월 5일 오후 8시"
});
assert.equal(scheduleChangeSeed.includes("8월 4일 오후 7시\n8월 5일 오후 8시"), true);
const scheduleHumanFinal = `${scheduleSeed}\n교사가 확정한 일정 문구`;
const studentScheduleJob = buildSupplementScheduleNoticeJob({
  academyName: "가상 학원",
  now: new Date("2026-08-03T09:00:00.000Z"),
  reminderBody: scheduleHumanFinal,
  scheduledAt: "2026-08-03T10:00:00.000Z",
  scheduleTitle: "결석 보강",
  student,
  target: "student",
  task: absenceTask
});
const parentScheduleJob = buildSupplementScheduleNoticeJob({
  academyName: "가상 학원",
  now: new Date("2026-08-03T09:00:00.000Z"),
  reminderBody: scheduleHumanFinal,
  scheduledAt: "2026-08-03T10:00:00.000Z",
  scheduleTitle: "결석 보강",
  student,
  target: "parent",
  task: absenceTask
});
assert.equal(studentScheduleJob.payload.reminderBody, scheduleHumanFinal);
assert.equal(parentScheduleJob.payload.commentBodyOverride, scheduleHumanFinal);
assert.equal(parentScheduleJob.previewBody, scheduleHumanFinal);

const noticeSeed = getNoticeMessageTemplates(configuredTemplates).find((template) => template.id === "material").body;
assert.equal(noticeSeed, "설정 교재 seed");
const generalHumanFinal = `${noticeSeed}\n교사가 편집한 공지 최종 문구`;
const generalJob = buildNoticeJob({
  academyName: "가상 학원",
  createdAt: "2026-08-03T09:00:00.000Z",
  idSuffix: "general",
  idTimestamp: 1,
  mode: "scheduled",
  noticeBody: generalHumanFinal,
  noticeKind: "general",
  noticeSpecialLectureMeta: null,
  noticeText: generalHumanFinal,
  noticeTitle: "교재 안내",
  recipient: { audience: "parent", phone: student.parentPhone, student },
  scheduledAt: "2026-08-04T09:00:00.000Z",
  today: "2026-08-03"
});
assert.equal(generalJob.payload.commentBodyOverride, generalHumanFinal);
assert.equal(generalJob.previewBody, generalHumanFinal);
assert.equal(resolveLessonCommentBody(generalJob.payload, "parent"), generalHumanFinal);

const specialGuide = {
  audience: "중3",
  days: "월·수",
  specialLectureGuideId: "guide-closeout",
  time: "18:00",
  title: "가상 여름 특강"
};
const specialSeed = buildSpecialLectureNoticeText(
  specialGuide,
  "https://example.test/special-lecture/guide-closeout",
  { brandName: "가상 학원", notificationTemplates: configuredTemplates }
);
const specialHumanFinal = `${specialSeed}\n교사가 편집한 특강 최종 문구`;
const specialJob = buildNoticeJob({
  academyName: "가상 학원",
  createdAt: "2026-08-03T09:00:00.000Z",
  idSuffix: "special",
  idTimestamp: 2,
  mode: "scheduled",
  noticeBody: specialHumanFinal,
  noticeKind: "special_lecture",
  noticeSpecialLectureMeta: {
    audience: specialGuide.audience,
    days: specialGuide.days,
    guideId: specialGuide.specialLectureGuideId,
    guideUrl: "https://example.test/special-lecture/guide-closeout",
    time: specialGuide.time,
    title: specialGuide.title
  },
  noticeText: specialHumanFinal,
  noticeTitle: specialGuide.title,
  recipient: { audience: "student", phone: student.studentPhone, student },
  scheduledAt: "2026-08-04T09:00:00.000Z",
  today: "2026-08-03"
});
assert.equal(specialJob.payload.commentBodyOverride, specialHumanFinal);
assert.equal(specialJob.payload.specialLectureGuideId, specialGuide.specialLectureGuideId);
assert.equal(specialJob.payload.specialLectureUrl, "https://example.test/special-lecture/guide-closeout");
assert.equal(resolveLessonCommentBody(specialJob.payload, "student"), specialHumanFinal);

const settingsKeys = [...sources.settingsMetadata.matchAll(/key: "([^"]+)"/g)].map((match) => match[1]);
assert.equal(settingsKeys.length, 10);
assert.equal(settingsKeys.includes("retestStudentReminder"), false);
const providerTemplateEnvNames = [...new Set(
  sources.route.match(/SOLAPI_[A-Z_]+_TEMPLATE_ID/g) ?? []
)].sort();
assert.deepEqual(providerTemplateEnvNames, [
  "SOLAPI_ATTENDANCE_TEMPLATE_ID",
  "SOLAPI_DAILY_REPORT_TEMPLATE_ID",
  "SOLAPI_SPECIAL_LECTURE_TEMPLATE_ID",
  "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"
]);

console.log("notification template closeout passed · product paths 9 · settings keys 10 · provider templates 4 · retest 11am excluded");
