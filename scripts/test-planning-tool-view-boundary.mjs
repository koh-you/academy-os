import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, outletSource, registrySource, screenSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/PlanningToolCenters.jsx", import.meta.url), "utf8")
]);

const exportedScreens = [
  "AIVariantProblemCenter",
  "ClassManager",
  "LessonResearchCenter",
  "SchoolCalendarCenter"
];
for (const screenName of exportedScreens) {
  assert.equal(screenSource.includes(`export function ${screenName}(`), true);
  assert.equal(appSource.includes(`function ${screenName}(`), false);
  assert.equal(registrySource.includes(`"${screenName}"`), true);
}
assert.equal(
  (registrySource.match(/import\("\.\.\/domains\/teacher\/PlanningToolCenters\.jsx"\)/g) ?? []).length,
  4
);

const runtimeMatch = appSource.match(/const planningToolRuntime = Object\.freeze\(\{([\s\S]*?)\n\}\);/);
assert.ok(runtimeMatch, "App must retain the planning-tool runtime owner");
const runtimeKeys = runtimeMatch[1]
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean)
  .sort();
assert.deepEqual(runtimeKeys, [
  "appStateAutosaveRisk",
  "buildExamCalendarEvents",
  "buildMonthDays",
  "createMathExamEntry",
  "createSchoolCalendarPeriodCards",
  "currentExamCycle",
  "defaultAiSettings",
  "eventIntersectsMonth",
  "examCycleLabel",
  "formatMonthTitle",
  "formatShortDate",
  "getDefaultExamPeriodRange",
  "getExamPeriodGroupKey",
  "getSchoolCalendarTargetRows",
  "isActiveStudent",
  "isExamLinkedCalendarEvent",
  "normalizeLessonResearchSubject",
  "normalizeMathExamEntries",
  "normalizeMathSubject",
  "schoolCalendarAutosaveRisk",
  "ssenTypeCatalog",
  "syncPrimaryMathExamDate",
  "syncSchoolCalendarEventToExamPrepRows",
  "today"
].sort());

for (const viewId of ["aiVariants", "classes", "lessonResearch", "schoolCalendar"]) {
  const viewStart = outletSource.indexOf(`${viewId}: {`);
  const nextView = outletSource.indexOf("\n    },", viewStart);
  const viewSource = outletSource.slice(viewStart, nextView);
  assert.equal(viewSource.includes("runtime: runtimeBindings.planningTools"), true);
}

assert.equal(screenSource.includes('from "../../app/App.jsx"'), false);
assert.equal(screenSource.includes('from "../../app/TeacherViewOutlet.js"'), false);
for (const forbidden of ["fetch(", "postJson", "localStorage", "Supabase", "Solapi"]) {
  assert.equal(screenSource.includes(forbidden), false, `screen must not own ${forbidden}`);
}
assert.equal(screenSource.includes("fileText = await file.text()"), true);
assert.equal(screenSource.includes("URL.createObjectURL(blob)"), true);

console.log("planning tool screens, runtime owner, and lazy boundary fixtures passed");
