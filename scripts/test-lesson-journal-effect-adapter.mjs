import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalEffectAdapter } from "../src/domains/lessons/lessonJournalEffectAdapter.js";

const actions = new Proxy({}, {
  get(target, property) {
    if (!target[property]) target[property] = () => property;
    return target[property];
  }
});
const loadLessonJournalReservationAudit = () => "audit";
const adapter = createLessonJournalEffectAdapter({
  actions,
  transport: { loadLessonJournalReservationAudit }
});

const persistenceMappings = {
  onChangeRecord: "handleChangeRecord",
  onConfirmHomeworkFollowup: "handleConfirmHomeworkFollowup",
  onDeleteLesson: "handleDeleteLesson",
  onPassMakeupTask: "handlePassSupplementTask",
  onSaveLessonJournalDrafts: "handleSaveLessonJournalDrafts",
  onSaveRecord: "handleSaveRecord",
  onScheduleMakeupTask: "handleScheduleSupplementTask",
  onToggleStudentNotificationMute: "handleToggleStudentNotificationMute",
  onUpdateHomework: "handleUpdateHomework",
  onUpdateLessonNotificationPlan: "handleUpdateLessonNotificationPlan",
  onUpdateMakeupTask: "handleUpdateMakeupTask"
};
const providerMappings = {
  onApplyLessonNotificationPlan: "handleApplyLessonNotificationPlan",
  onCancelNotificationJob: "handleCancelNotificationJob",
  onPolishComment: "handlePolishLessonComment",
  onReconcileSolapiNotificationResults: "handleReconcileSolapiNotificationResults",
  onScheduleLessonNotificationsAt: "handleScheduleLessonNotificationsAt",
  onSendComment: "handleSendLessonComment"
};

assert.deepEqual(Object.keys(adapter), ["persistence", "provider"]);
assert.deepEqual(Object.keys(adapter.persistence), Object.keys(persistenceMappings));
assert.deepEqual(
  Object.keys(adapter.provider),
  ["loadLessonJournalReservationAudit", ...Object.keys(providerMappings)]
);
for (const [propName, actionName] of Object.entries(persistenceMappings)) {
  assert.equal(adapter.persistence[propName], actions[actionName], `${propName} must preserve ${actionName}`);
}
for (const [propName, actionName] of Object.entries(providerMappings)) {
  assert.equal(adapter.provider[propName], actions[actionName], `${propName} must preserve ${actionName}`);
}
assert.equal(adapter.provider.loadLessonJournalReservationAudit, loadLessonJournalReservationAudit);
assert.equal(Object.isFrozen(adapter), true);
assert.equal(Object.isFrozen(adapter.persistence), true);
assert.equal(Object.isFrozen(adapter.provider), true);

const [appSource, outletSource, hubSource, detailSource, adapterSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/lessonJournalEffectAdapter.js", import.meta.url), "utf8")
]);

assert.ok(outletSource.includes("createLessonJournalEffectAdapter({"));
assert.ok(outletSource.includes("transport: runtimeBindings.lessonJournalTransport"));
assert.ok(outletSource.includes("lessonJournalEffects,"));
assert.ok(hubSource.includes("effects={lessonJournalEffects}"));
assert.ok(detailSource.includes("persistence: {"));
assert.ok(detailSource.includes("provider: {"));
assert.ok(appSource.includes("const lessonJournalTransport = Object.freeze({"));
assert.ok(appSource.includes("return getJsonWithTimeout(path, 12000,"));
const lessonJournalRuntimeStart = appSource.indexOf("const lessonJournalRuntime = Object.freeze({");
const lessonJournalRuntimeEnd = appSource.indexOf("const teacherLessonHubRuntime = Object.freeze({");
assert.ok(lessonJournalRuntimeStart >= 0 && lessonJournalRuntimeEnd > lessonJournalRuntimeStart);
assert.equal(
  appSource.slice(lessonJournalRuntimeStart, lessonJournalRuntimeEnd).includes("loadLessonJournalReservationAudit"),
  false
);

for (const forbidden of [
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs",
  "useState",
  "useEffect"
]) {
  assert.equal(adapterSource.includes(forbidden), false, `effect adapter must not own ${forbidden}`);
}

console.log("lesson journal persistence/provider effect adapter fixtures passed");
