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
  // ssenTypeCatalog 는 2026-09-07 에 이 목록에서 빠졌다. 원천 JSON 이 284 KB 라
  // runtime 으로 넘기면 교사 첫 로딩 번들에 딸려온다 — 쓰는 쪽(LessonResearchCenter)이
  // src/domains/tests/ssenTypeCatalog.js 를 직접 import 해서 lazy 청크에 담는다.
  // 다시 넣지 말 것. test:ssen-subject-parity 도 같은 경계를 지킨다.
  "syncPrimaryMathExamDate",
  "today",
  "upsertMathExamEntryFromSchoolEvent"
].sort());

// 카탈로그가 lazy 쪽에 남아 있는지 함께 본다(runtime 에서 빠졌다고 화면이 못 쓰면 안 된다).
assert.ok(
  screenSource.includes('from "../tests/ssenTypeCatalog.js"'),
  "수업연구 화면이 쎈 카탈로그를 직접 import 해야 한다"
);

assert.equal(outletSource.includes("onSaveDerivedEvent: actions.handleSaveDerivedSchoolCalendar"), true);
assert.equal(screenSource.includes("시험관리 행과 직전수업을 함께 저장하는 중입니다."), true);
assert.equal(screenSource.includes("onUpdateExamPrepRow"), false);
assert.equal(screenSource.includes("onSyncPreExamLesson"), false);

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
