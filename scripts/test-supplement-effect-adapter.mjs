import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createSupplementEffectAdapter } from "../src/domains/supplements/supplementEffectAdapter.js";

const actions = new Proxy({}, {
  get(target, property) {
    if (!target[property]) target[property] = () => property;
    return target[property];
  }
});
const adapter = createSupplementEffectAdapter({ actions });

const mappings = {
  persistence: {
    onCancelAbsenceSource: "handleCancelAbsenceMakeupSource",
    onSaveTask: "handleSaveMakeupTask",
    onUndoPassTask: "handleUndoPassSupplementTask"
  },
  provider: {
    onCancelNotification: "handleCancelSupplementNotificationControl",
    onReserveNotification: "handleReserveSupplementNotificationControl"
  },
  orchestration: {
    onCancelAbsenceMakeup: "handleCancelAbsenceMakeupKeepSource",
    onPassTask: "handlePassSupplementTask",
    onScheduleTask: "handleScheduleSupplementTask"
  }
};

assert.deepEqual(Object.keys(adapter), Object.keys(mappings));
for (const [surfaceName, surfaceMappings] of Object.entries(mappings)) {
  assert.deepEqual(Object.keys(adapter[surfaceName]), Object.keys(surfaceMappings));
  assert.equal(Object.isFrozen(adapter[surfaceName]), true);
  for (const [propName, actionName] of Object.entries(surfaceMappings)) {
    assert.equal(adapter[surfaceName][propName], actions[actionName], `${surfaceName}.${propName} must preserve ${actionName}`);
  }
}
assert.equal(Object.isFrozen(adapter), true);

const [outletSource, centerSource, adapterSource] = await Promise.all([
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/supplements/SupplementCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/supplements/supplementEffectAdapter.js", import.meta.url), "utf8")
]);

assert.ok(outletSource.includes("createSupplementEffectAdapter({ actions })"));
assert.ok(outletSource.includes("effects: supplementEffects"));
assert.ok(centerSource.includes("effects = {},"));
assert.ok(centerSource.includes("persistence: {"));
assert.ok(centerSource.includes("provider: {"));
assert.ok(centerSource.includes("orchestration: {"));
for (const flatProp of [
  "onCancelAbsenceMakeup: actions.",
  "onCancelAbsenceSource: actions.",
  "onCancelNotification: actions.",
  "onPassTask: actions.",
  "onReserveNotification: actions.",
  "onSaveTask: actions.",
  "onScheduleTask: actions.",
  "onUndoPassTask: actions."
]) {
  assert.equal(outletSource.includes(flatProp), false, `outlet must not retain flat supplement callback ${flatProp}`);
}
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

console.log("supplement persistence/provider/orchestration effect adapter fixtures passed");
