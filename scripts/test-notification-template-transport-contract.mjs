import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { noticeMessageTemplates } from "../src/domains/notifications/notificationCenterConfig.js";
import { resolveLessonCommentBody } from "../src/domains/notifications/notificationMessageRenderer.js";
import { applyNoticeTemplateAction } from "../src/domains/notifications/notificationNoticeActions.js";
import { buildNoticeJob } from "../src/domains/notifications/notificationNoticeBuilders.js";
import { isSupplementStudentReminderTask } from "../src/domains/notifications/supplementJobBuilders.js";
import { buildSpecialLectureNoticeText } from "../src/domains/specialLectures/specialLectureGuideUtils.js";

function applyPreset(templateId) {
  const state = {
    body: "교사가 이미 작성한 문구",
    kind: "general",
    specialLectureMeta: { guideId: "old-guide" },
    templateId: "",
    title: "교사가 이미 작성한 제목"
  };
  applyNoticeTemplateAction({
    setNoticeBody: (value) => { state.body = value; },
    setNoticeKind: (value) => { state.kind = value; },
    setNoticeSpecialLectureMeta: (value) => { state.specialLectureMeta = value; },
    setNoticeTemplateId: (value) => { state.templateId = value; },
    setNoticeTitle: (value) => { state.title = value; },
    templateId,
    templates: noticeMessageTemplates
  });
  return state;
}

for (const templateId of ["material", "makeup", "notice"]) {
  const preset = noticeMessageTemplates.find((template) => template.id === templateId);
  const state = applyPreset(templateId);
  assert.equal(state.templateId, templateId);
  assert.equal(state.title, preset.title);
  assert.equal(state.body, preset.body);
  assert.equal(state.kind, "general");
  assert.equal(state.specialLectureMeta, null);
}

const specialPreset = applyPreset("specialLecture");
assert.equal(specialPreset.kind, "special_lecture");
assert.equal(specialPreset.specialLectureMeta, null, "preset alone must not invent saved guide metadata");

const specialGuide = {
  specialLectureGuideId: "guide-transport-contract",
  title: "가상 여름 특강",
  audience: "중3",
  days: "월·수",
  time: "18:00",
  noticeMemo: "가상 안내문에서 신청해 주세요."
};
const guideSeed = buildSpecialLectureNoticeText(
  specialGuide,
  "https://example.test/special-lecture/guide-transport-contract",
  "가상 학원"
);
assert.ok(guideSeed.includes("가상 여름 특강 안내드립니다."));
assert.ok(guideSeed.includes("https://example.test/special-lecture/guide-transport-contract"));

const humanFinal = `${guideSeed}\n\n교사가 마지막으로 확정한 문장`;
const specialLectureJob = buildNoticeJob({
  academyName: "가상 학원",
  createdAt: "2026-08-03T09:00:00.000Z",
  idSuffix: "fixed",
  idTimestamp: 1785747600000,
  mode: "scheduled",
  noticeBody: humanFinal,
  noticeKind: "special_lecture",
  noticeSpecialLectureMeta: {
    audience: specialGuide.audience,
    days: specialGuide.days,
    guideId: specialGuide.specialLectureGuideId,
    guideUrl: "https://example.test/special-lecture/guide-transport-contract",
    time: specialGuide.time,
    title: specialGuide.title
  },
  noticeText: humanFinal,
  noticeTitle: specialGuide.title,
  recipient: {
    audience: "parent",
    phone: "010-0000-0001",
    student: {
      name: "가상학생",
      parentPhone: "010-0000-0001",
      studentId: "student-transport-contract",
      studentPhone: "010-0000-0002"
    }
  },
  scheduledAt: "2026-08-04T09:00:00.000Z",
  today: "2026-08-03"
});
assert.equal(specialLectureJob.previewBody, humanFinal);
assert.equal(specialLectureJob.payload.commentBodyOverride, humanFinal);
assert.equal(specialLectureJob.payload.message, humanFinal);
assert.equal(
  resolveLessonCommentBody(specialLectureJob.payload, "parent"),
  humanFinal,
  "the teacher-edited job body must remain authoritative at the live renderer"
);
assert.equal(specialLectureJob.payload.noticeKind, "special_lecture");

assert.equal(isSupplementStudentReminderTask({ taskType: "homework_makeup" }), true);
assert.equal(isSupplementStudentReminderTask({ taskType: "absence_makeup" }), true);
assert.equal(
  isSupplementStudentReminderTask({ taskType: "retest" }),
  false,
  "retest has a saved task draft but no independent student 11am reminder transport"
);

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [
  appSource,
  composerSource,
  controllerSource,
  notificationRouteSource,
  serverSource,
  supplementDraftSource
] = await Promise.all([
  read("src/app/App.jsx"),
  read("src/domains/notifications/useNotificationComposerState.js"),
  read("src/domains/notifications/useNotificationNoticeController.js"),
  read("api/routes/notifications.js"),
  read("api/server.js"),
  read("src/domains/supplements/supplementTaskDraft.js")
]);

assert.ok(composerSource.includes("noticeText: composerViewModel.noticeText"));
assert.ok(composerSource.includes("sendNoticeNowAction({"));
assert.ok(composerSource.includes("scheduleNoticeAction({"));
assert.ok(controllerSource.includes("setNoticeBody(noticeBodyText)"));
assert.ok(controllerSource.includes('setNoticeKind("special_lecture")'));
assert.ok(serverSource.includes('job.notificationType === "student_comment" || job.notificationType === "notice_student"'));
assert.ok(notificationRouteSource.includes('payload.noticeKind === "special_lecture"'));
assert.ok(notificationRouteSource.includes("configState(TEMPLATE_ENV.specialLectureNotice)"));
assert.ok(notificationRouteSource.includes("audience === \"student\" ? TEMPLATE_ENV.studentComment : TEMPLATE_ENV.dailyReport"));

assert.ok(appSource.includes('if (task.taskType === "retest")'));
assert.ok(appSource.includes("학생 재시험 안내입니다."));
assert.ok(appSource.includes('message: task.notificationDraft || createNotificationDraft('));
assert.ok(appSource.includes('return `${schedulePrefix}${source} 재시험을 진행하겠습니다.`;'));
assert.ok(supplementDraftSource.includes("notificationDraft: String(task.notificationDraft ?? \"\")"));
assert.ok(supplementDraftSource.includes('notificationDraft: "당일 학생 11시 알림톡 문구"'));

console.log("notification template transport contract passed · notice presets 4 · special guide human final · retest no independent 11am transport");
