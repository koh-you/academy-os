import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { lazyTeacherViewComponents } from "../src/app/lazyTeacherViewComponents.js";

const expectedLazyComponents = Object.freeze([
  "NotificationCenter",
  "SettlementWorkspace",
  "StudentManager",
  "SupplementCenter",
  "TeacherLessonHubV2"
]);

assert.deepEqual(Object.keys(lazyTeacherViewComponents), expectedLazyComponents);
assert.equal(Object.isFrozen(lazyTeacherViewComponents), true);
for (const componentName of expectedLazyComponents) {
  assert.equal(
    lazyTeacherViewComponents[componentName]?.$$typeof,
    Symbol.for("react.lazy"),
    `${componentName} must remain a React lazy component`
  );
}

const [appSource, registrySource, outletSource, boundarySource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewLoadBoundary.js", import.meta.url), "utf8")
]);

const lazyModuleContracts = [
  ["NotificationCenter", "../domains/notifications/NotificationCenter.jsx"],
  ["SettlementWorkspace", "../domains/settlements/SettlementWorkspace.jsx"],
  ["StudentManager", "../domains/students/StudentManager.jsx"],
  ["SupplementCenter", "../domains/supplements/SupplementCenter.jsx"],
  ["TeacherLessonHubV2", "../domains/lessons/TeacherLessonHubV2.jsx"]
];
for (const [componentName, modulePath] of lazyModuleContracts) {
  assert.equal(registrySource.includes(`() => import("${modulePath}")`), true);
  assert.equal(registrySource.includes(`"${componentName}"`), true);
  assert.equal(
    appSource.includes(`from "${modulePath}"`),
    false,
    `${componentName} must not return to the initial App chunk`
  );
}

assert.equal(appSource.includes('import { lazyTeacherViewComponents } from "./lazyTeacherViewComponents.js";'), true);
assert.equal(appSource.includes("...lazyTeacherViewComponents,"), true);
assert.equal(outletSource.includes("Suspense"), true);
assert.equal(outletSource.includes("TeacherViewLoadingState"), true);
assert.equal(outletSource.includes("TeacherViewLoadBoundary"), true);
assert.equal(outletSource.includes("{ activeView, key: activeView }"), true);
assert.equal(boundarySource.includes('role: "status"'), true);
assert.equal(boundarySource.includes('role: "alert"'), true);
assert.equal(boundarySource.includes('kind: "teacher_view_load_error"'), true);
assert.equal(boundarySource.includes("window.location.reload()"), true);
assert.equal(boundarySource.includes("입력이나 운영 데이터는 변경되지 않았습니다."), true);

console.log("teacher view lazy loading and recovery boundary fixtures passed");
