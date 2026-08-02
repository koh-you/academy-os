import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { lazyTeacherViewComponents } from "../src/app/lazyTeacherViewComponents.js";

const readSource = (path) => readFile(new URL(path, import.meta.url), "utf8");

const [
  appSource,
  sessionSource,
  lazySource,
  lessonAdapterSource,
  supplementAdapterSource,
  studentAdapterSource,
  notificationAdapterSource,
  lessonDraftControllerSource,
  settlementControllerSource,
  notificationControllerSource,
  closeoutSource,
  planSource,
  ...screenSources
] = await Promise.all([
  readSource("../src/app/App.jsx"),
  readSource("../src/app/useAppSession.js"),
  readSource("../src/app/lazyTeacherViewComponents.js"),
  readSource("../src/domains/lessons/lessonJournalEffectAdapter.js"),
  readSource("../src/domains/supplements/supplementEffectAdapter.js"),
  readSource("../src/domains/students/studentEffectAdapter.js"),
  readSource("../src/domains/notifications/notificationEffectAdapter.js"),
  readSource("../src/domains/lessons/useLessonJournalDraftController.js"),
  readSource("../src/domains/settlements/useMonthlySettlementController.js"),
  readSource("../src/domains/notifications/useNotificationNoticeController.js"),
  readSource("../docs/app-refactor-third-pass-closeout.md"),
  readSource("../docs/app-refactor-third-pass-plan.md"),
  readSource("../src/domains/lessons/TeacherLessonHubV2.jsx"),
  readSource("../src/domains/supplements/SupplementCenter.jsx"),
  readSource("../src/domains/students/StudentManager.jsx"),
  readSource("../src/domains/notifications/NotificationCenter.jsx"),
  readSource("../src/domains/settlements/SettlementWorkspace.jsx"),
  readSource("../src/domains/exams/ExamAnalysisPipelineCenter.jsx"),
  readSource("../src/domains/exams/ExamPrepCenter.jsx"),
  readSource("../src/domains/settings/SettingsCenter.jsx")
]);

const extractedScreens = [
  "TeacherLessonHubV2",
  "SupplementCenter",
  "StudentManager",
  "NotificationCenter",
  "SettlementWorkspace",
  "ExamAnalysisPipelineCenter",
  "ExamPrepCenter",
  "SettingsCenter"
];
for (const screenName of extractedScreens) {
  assert.equal(
    new RegExp(`(?:function|const)\\s+${screenName}\\b`).test(appSource),
    false,
    `${screenName} must remain outside App.jsx`
  );
}

const appOwnedHandlers = [
  "handleSaveMonthlySettlementMonth",
  "handleCreateSpecialLectureLessons",
  "handleReconcileSolapiNotificationResults",
  "handleCancelNotificationJob",
  "handleSaveStudent",
  "handleSaveStudentProfile",
  "handleSaveStudentConsultation",
  "handlePermanentlyDeleteWithdrawnStudent",
  "handleApplyLessonNotificationPlan",
  "handleReserveSupplementNotificationControl",
  "handleCancelSupplementNotificationControl",
  "handleScheduleLessonNotificationsAt",
  "handleSaveLessonJournalDrafts",
  "handleSaveRecord",
  "handleSendLessonComment",
  "handleScheduleSupplementTask"
];
for (const handlerName of appOwnedHandlers) {
  assert.match(appSource, new RegExp(`(?:async\\s+)?function\\s+${handlerName}\\b`));
}

assert.match(appSource, /useAppSession\(\{/);
for (const token of [
  "readStoredTeacherSession",
  "persistTeacherSession",
  "authenticateAppSession",
  "localStorage",
  "sessionStorage",
  "/api/auth/login"
]) {
  assert.equal(sessionSource.includes(token), true, `session boundary must include ${token}`);
}

for (const [label, source] of [
  ["lesson adapter", lessonAdapterSource],
  ["supplement adapter", supplementAdapterSource],
  ["student adapter", studentAdapterSource],
  ["notification adapter", notificationAdapterSource]
]) {
  for (const forbidden of ["fetch(", "postJson", "/api/", "localStorage", "useState", "useEffect"]) {
    assert.equal(source.includes(forbidden), false, `${label} must not own ${forbidden}`);
  }
  assert.equal(source.includes("Object.freeze"), true, `${label} must freeze its identity surface`);
}

for (const forbidden of ["fetch(", "postJson", "/api/", "localStorage"]) {
  assert.equal(
    lessonDraftControllerSource.includes(forbidden),
    false,
    `lesson draft controller must not own ${forbidden}`
  );
}

for (const token of ["localStorage", "recovery aid", "onSaveMonth(nextMonth)", "shouldRebaseRecovery"]) {
  assert.equal(settlementControllerSource.includes(token), true, `settlement recovery must include ${token}`);
}
for (const forbidden of ["fetch(", "postJson", '"/api/']) {
  assert.equal(settlementControllerSource.includes(forbidden), false, `settlement controller must not own ${forbidden}`);
}

for (const token of [
  "postJsonWithTimeout",
  "onCancelNotificationJob",
  "onReconcileSolapiNotificationResults",
  "/api/notifications/comment-alimtalk"
]) {
  assert.equal(
    notificationControllerSource.includes(token),
    true,
    `notification controller exception must remain explicit: ${token}`
  );
}

assert.equal(Object.isFrozen(lazyTeacherViewComponents), true);
assert.equal(Object.keys(lazyTeacherViewComponents).length, 21);
assert.equal((lazySource.match(/lazyNamedExport\(/g) ?? []).length, 22);

for (const [index, source] of screenSources.entries()) {
  assert.equal(
    /from\s+["'][^"']*(?:app\/App|TeacherViewOutlet)/.test(source),
    false,
    `extracted screen ${index + 1} must not reverse-import App or TeacherViewOutlet`
  );
}

for (const token of [
  "43.1% 감소",
  "45.3% 감소",
  "논리 21개 / 물리 chunk 12개",
  "의도적 예외",
  "Vite의 일반 chunk 경고",
  "자동으로 4차를 시작하지 않는다"
]) {
  assert.equal(closeoutSource.includes(token), true, `closeout evidence must include ${token}`);
}
assert.equal(planSource.includes("3-8 종료 감사"), true);
assert.equal(planSource.includes("3차 리팩터링은 종료한다"), true);

console.log("Third-pass closeout ownership audit passed.");
