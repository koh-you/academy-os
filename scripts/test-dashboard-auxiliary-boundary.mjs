import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, registrySource, hubSource, detailSource, notificationSource, screenSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/NotificationCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/DashboardAuxiliaryPanels.jsx", import.meta.url), "utf8")
]);

const exportedPanels = ["AcademyReminderList", "AcademyReminderPanel", "SpecialLectureNoticePanel"];
for (const panelName of exportedPanels) {
  assert.equal(screenSource.includes(`export function ${panelName}(`), true);
  assert.equal(appSource.includes(`function ${panelName}(`), false);
  assert.equal(registrySource.includes(`"${panelName}"`), true);
}
assert.equal(
  (registrySource.match(/import\("\.\.\/domains\/teacher\/DashboardAuxiliaryPanels\.jsx"\)/g) ?? []).length,
  3
);

const runtimeMatch = appSource.match(/const academyReminderPanelRuntime = Object\.freeze\(\{([\s\S]*?)\n\}\);/);
assert.ok(runtimeMatch, "App must retain the academy reminder runtime owner");
const runtimeKeys = runtimeMatch[1]
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean)
  .sort();
assert.deepEqual(runtimeKeys, [
  "createAcademyReminderDraft",
  "formatAcademyReminderDateTime",
  "getAcademyReminderClassName",
  "getAcademyReminderClassTemplateId",
  "getAcademyReminderPriorityLabel",
  "getAcademyReminderSourcePayload",
  "getAcademyReminderStudentName",
  "getAcademyReminderTypeLabel",
  "getAcademyRemindersForDate",
  "isAcademyReminderOverdue",
  "isActiveStudent",
  "normalizeAcademyReminderDraft",
  "normalizeAcademyReminderStatus",
  "sortAcademyReminders",
  "today"
].sort());

for (const contract of [
  "AcademyReminderList: lazyTeacherViewComponents.AcademyReminderList",
  "AcademyReminderPanel: lazyTeacherViewComponents.AcademyReminderPanel",
  "SpecialLectureNoticePanel: lazyTeacherViewComponents.SpecialLectureNoticePanel"
]) {
  assert.equal(appSource.includes(contract), true);
}
assert.equal(hubSource.includes("runtime={academyReminder}"), true);
assert.equal(detailSource.includes("<AcademyReminderList runtime={academyReminder}"), true);
assert.equal(notificationSource.includes("if (!runtime || !SpecialLectureNoticePanel)"), true);
assert.equal(notificationSource.includes('typeof SpecialLectureNoticePanel !== "function"'), false);

for (const callbackName of [
  "onDeleteApplication",
  "onSaveEnrollment",
  "onSaveGuides",
  "onDeleteAcademyReminder",
  "onSaveAcademyReminder"
]) {
  assert.equal(screenSource.includes(callbackName), true);
}
assert.equal(screenSource.includes('from "../../app/App.jsx"'), false);
assert.equal(screenSource.includes('from "../../app/TeacherViewOutlet.js"'), false);
for (const forbidden of ["fetch(", "postJson", "localStorage", "Solapi"]) {
  assert.equal(screenSource.includes(forbidden), false, `screen must not own ${forbidden}`);
}

console.log("dashboard auxiliary panels, runtime owner, and lazy boundary fixtures passed");
