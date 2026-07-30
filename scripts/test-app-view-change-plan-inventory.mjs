import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createAppViewChangePlan } from "../src/app/appViewChangePlan.js";

function applyExistingAppViewChange(nextView, {
  setActiveView,
  setIsMobileNavigationOpen,
  scrollToTop,
  setIsLessonJournalOpen
}) {
  setActiveView(nextView);
  setIsMobileNavigationOpen(false);
  scrollToTop();
  if (nextView === "lessons") {
    setIsLessonJournalOpen(false);
  }
}

function runFixture(nextView) {
  const calls = [];
  applyExistingAppViewChange(nextView, {
    setActiveView: (value) => calls.push(["activeView", value]),
    setIsMobileNavigationOpen: (value) => calls.push(["mobileNavigation", value]),
    scrollToTop: () => calls.push(["scrollTop"]),
    setIsLessonJournalOpen: (value) => calls.push(["lessonJournal", value])
  });
  return calls;
}

function runExtractedFixture(nextView) {
  const plan = createAppViewChangePlan(nextView);
  const calls = [
    ["activeView", plan.activeView],
    ["mobileNavigation", plan.mobileNavigationOpen]
  ];
  if (plan.shouldScrollToTop) calls.push(["scrollTop"]);
  if (plan.lessonJournalOpen !== null) {
    calls.push(["lessonJournal", plan.lessonJournalOpen]);
  }
  return calls;
}

assert.deepEqual(runFixture("lessons"), [
  ["activeView", "lessons"],
  ["mobileNavigation", false],
  ["scrollTop"],
  ["lessonJournal", false]
]);
assert.deepEqual(runFixture("notifications"), [
  ["activeView", "notifications"],
  ["mobileNavigation", false],
  ["scrollTop"]
]);
assert.deepEqual(runExtractedFixture("lessons"), runFixture("lessons"));
assert.deepEqual(
  runExtractedFixture("notifications"),
  runFixture("notifications")
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const start = appSource.indexOf("function handleChangeView(nextView) {");
const end = appSource.indexOf("\n  return (", start);
assert.ok(start >= 0 && end > start);
const handlerSource = appSource.slice(start, end);
for (const boundary of [
  "createAppViewChangePlan(nextView)",
  "setActiveView(plan.activeView)",
  "setIsMobileNavigationOpen(plan.mobileNavigationOpen)",
  "plan.shouldScrollToTop",
  'typeof window !== "undefined"',
  'window.scrollTo({ behavior: "auto", left: 0, top: 0 })',
  "plan.lessonJournalOpen !== null",
  "setIsLessonJournalOpen(plan.lessonJournalOpen)"
]) {
  assert.ok(
    handlerSource.includes(boundary),
    `missing app view change boundary: ${boundary}`
  );
}
const moduleSource = await readFile(
  new URL("../src/app/appViewChangePlan.js", import.meta.url),
  "utf8"
);
assert.equal(
  moduleSource.split("export function createAppViewChangePlan(").length - 1,
  1
);
assert.equal(
  appSource.split('from "./appViewChangePlan.js"').length - 1,
  1
);
assert.equal(
  appSource.split("createAppViewChangePlan(nextView)").length - 1,
  1
);
for (const appOwnedEffect of [
  "setActiveView(plan.activeView)",
  "setIsMobileNavigationOpen(plan.mobileNavigationOpen)",
  'window.scrollTo({ behavior: "auto", left: 0, top: 0 })',
  "setIsLessonJournalOpen(plan.lessonJournalOpen)"
]) {
  assert.ok(
    handlerSource.includes(appOwnedEffect),
    `App-owned view change effect moved: ${appOwnedEffect}`
  );
}
for (const forbiddenEffect of [
  "useState",
  "useEffect",
  "window",
  "document",
  "setActiveView",
  "setIsMobileNavigationOpen",
  "setIsLessonJournalOpen",
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "Solapi"
]) {
  assert.ok(
    !moduleSource.includes(forbiddenEffect),
    `app view change plan crossed a side effect: ${forbiddenEffect}`
  );
}

console.log("app view change plan inventory TARGET/CONTROL fixtures passed");
