import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, outletSource, registrySource, screenSource, modelSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/LearningSupportCenters.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/learningSupportModel.js", import.meta.url), "utf8")
]);

const exportedScreens = [
  "FollowUpCenter",
  "MaterialManager",
  "OverdueHomework",
  "ResourceLibraryCenter"
];
for (const screenName of exportedScreens) {
  assert.equal(screenSource.includes(`export function ${screenName}(`), true);
  assert.equal(appSource.includes(`function ${screenName}(`), false);
  assert.equal(registrySource.includes(`"${screenName}"`), true);
}
assert.equal(
  (registrySource.match(/import\("\.\.\/domains\/teacher\/LearningSupportCenters\.jsx"\)/g) ?? []).length,
  4
);

const runtimeMatch = appSource.match(/const learningSupportRuntime = Object\.freeze\(\{([\s\S]*?)\n\}\);/);
assert.ok(runtimeMatch, "App must retain the learning-support runtime owner");
const runtimeKeys = runtimeMatch[1]
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean)
  .sort();
assert.deepEqual(runtimeKeys, [
  "StudentPortalV2",
  "dedupeActionableHomeworks",
  "getHomeworkAction",
  "isActiveStudent",
  "isHomeworkActionRequired",
  "isHomeworkMakeupCandidate",
  "isHomeworkOverdue",
  "testPaperSubjectOptions",
  "today"
].sort());

for (const viewId of ["materials", "overdue"]) {
  const viewStart = outletSource.indexOf(`${viewId}: {`);
  const nextView = outletSource.indexOf("\n    },", viewStart);
  const viewSource = outletSource.slice(viewStart, nextView);
  assert.equal(viewSource.includes("runtime: runtimeBindings.learningSupport"), true);
}
const followUpStart = outletSource.indexOf("followups: {");
const followUpEnd = outletSource.indexOf("\n    },", followUpStart);
assert.equal(
  outletSource.slice(followUpStart, followUpEnd).includes("runtime: runtimeBindings.learningSupport"),
  false
);

assert.equal(screenSource.includes('from "../../app/App.jsx"'), false);
assert.equal(screenSource.includes('from "../../app/TeacherViewOutlet.js"'), false);
for (const forbidden of ["fetch(", "postJson", "localStorage", "Supabase", "Solapi"]) {
  assert.equal(screenSource.includes(forbidden), false, `screen must not own ${forbidden}`);
}
assert.equal(modelSource.includes("problemClickCycle"), true);
assert.equal(modelSource.includes("countProblemStatuses"), true);

console.log("learning support screens, runtime owner, and lazy boundary fixtures passed");
