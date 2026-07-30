import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const start = appSource.indexOf("function handleChangeView(nextView) {");
const end = appSource.indexOf("\n  return (", start);
assert.ok(start >= 0 && end > start);
const handlerSource = appSource.slice(start, end);
for (const boundary of [
  "setActiveView(nextView)",
  "setIsMobileNavigationOpen(false)",
  'typeof window !== "undefined"',
  'window.scrollTo({ behavior: "auto", left: 0, top: 0 })',
  'nextView === "lessons"',
  "setIsLessonJournalOpen(false)"
]) {
  assert.ok(
    handlerSource.includes(boundary),
    `missing app view change boundary: ${boundary}`
  );
}

console.log("app view change plan inventory TARGET/CONTROL fixtures passed");
