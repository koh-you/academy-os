import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationEffectAdapter } from "../src/domains/notifications/notificationEffectAdapter.js";

const actions = new Proxy({}, {
  get(target, property) {
    if (!target[property]) target[property] = () => property;
    return target[property];
  }
});
const historyRefresh = () => "history";
const activeRefresh = () => "active";
const historyAdapter = createNotificationEffectAdapter({ actions, onRefresh: historyRefresh });
const activeAdapter = createNotificationEffectAdapter({ actions, onRefresh: activeRefresh });

const mappings = {
  historyProvider: {
    onCancelNotificationJob: "handleCancelNotificationJob",
    onReconcileSolapiNotificationResults: "handleReconcileSolapiNotificationResults"
  },
  historyTransport: {
    onRefresh: null
  },
  specialLecturePersistence: {
    onCreateSpecialLectureStudent: "handleCreateSpecialLectureStudent",
    onReplaceSpecialLectureStudent: "handleReplaceSpecialLectureStudent",
    onSaveSpecialLectureEnrollment: "handleSaveSpecialLectureEnrollment",
    onSaveSpecialLectureEnrollments: "handleSaveSpecialLectureEnrollments",
    onSaveSpecialLectureGuides: "handleSaveSpecialLectureGuides",
    onSyncSpecialLectureStudentSchedules: "handleSyncSpecialLectureStudentSchedules",
    onUpdateSpecialLectureApplication: "handleUpdateSpecialLectureApplication"
  },
  specialLectureDeletion: {
    onDeleteSpecialLectureApplication: "handleDeleteSpecialLectureApplication"
  },
  specialLectureOrchestration: {
    onCreateSpecialLectureLessons: "handleCreateSpecialLectureLessons"
  },
  specialLectureNavigation: {
    onOpenSpecialLectureLesson: "openSpecialLectureLesson"
  }
};

assert.deepEqual(Object.keys(historyAdapter), Object.keys(mappings));
for (const [surfaceName, surfaceMappings] of Object.entries(mappings)) {
  assert.deepEqual(Object.keys(historyAdapter[surfaceName]), Object.keys(surfaceMappings));
  assert.equal(Object.isFrozen(historyAdapter[surfaceName]), true);
  for (const [propName, actionName] of Object.entries(surfaceMappings)) {
    if (propName === "onRefresh") continue;
    assert.equal(historyAdapter[surfaceName][propName], actions[actionName], `${surfaceName}.${propName} must preserve ${actionName}`);
  }
}
assert.equal(historyAdapter.historyTransport.onRefresh, historyRefresh);
assert.equal(activeAdapter.historyTransport.onRefresh, activeRefresh);
assert.equal(Object.isFrozen(historyAdapter), true);
assert.equal(Object.isFrozen(activeAdapter), true);

const [outletSource, centerSource, adapterSource] = await Promise.all([
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/NotificationCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/notificationEffectAdapter.js", import.meta.url), "utf8")
]);
assert.ok(outletSource.includes("effects: notificationEffects"));
assert.ok(outletSource.includes("effects: specialLectureNotificationEffects"));
assert.ok(outletSource.includes("onRefresh: actions.handleRefreshNotificationHistory"));
assert.ok(outletSource.includes("onRefresh: actions.handleRefreshActiveNotificationJobs"));
for (const flatMapping of [
  "onCancelNotificationJob: actions.",
  "onReconcileSolapiNotificationResults: actions.",
  "onCreateSpecialLectureStudent: actions.",
  "onDeleteSpecialLectureApplication: actions.",
  "onSaveSpecialLectureEnrollment: actions.",
  "onSaveSpecialLectureGuides: actions."
]) {
  assert.equal(outletSource.includes(flatMapping), false, `outlet must not retain flat notification callback ${flatMapping}`);
}
const signature = centerSource.slice(
  centerSource.indexOf("export function NotificationCenter({"),
  centerSource.indexOf("}) {", centerSource.indexOf("export function NotificationCenter({"))
);
for (const callbackName of Object.values(mappings).flatMap((surface) => Object.keys(surface))) {
  assert.equal(signature.includes(callbackName), false, `NotificationCenter signature must not retain flat ${callbackName}`);
}
for (const surfaceName of Object.keys(mappings)) {
  assert.ok(centerSource.includes(`${surfaceName}:`), `NotificationCenter must consume ${surfaceName}`);
}
for (const forbidden of ["fetch(", "postJson", "getJsonWithTimeout", "/api/", "localStorage", "useState", "useEffect"]) {
  assert.equal(adapterSource.includes(forbidden), false, `notification effect adapter must not own ${forbidden}`);
}

console.log("notification history and special lecture effect adapter fixtures passed");
