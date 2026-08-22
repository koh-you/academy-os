import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

const [appCss, componentSource, domainCss] = await Promise.all([
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/NotificationCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/notificationCenterExtra.css", import.meta.url), "utf8")
]);

assert.ok(componentSource.includes('import "./notificationCenterExtra.css";'));

// Confirmed exclusive to the notifications-domain lazy chunk (NotificationCenter.jsx
// plus the sub-components it imports, minus ParentResponseContextPanel.jsx which
// already has its own split CSS from the historical 4-6c unit) via a cross-src/domains
// grep before the move.
const safeClasses = new Set([
  "noticeComposerGrid", "noticeComposerPanel", "noticeDispatchMessage", "noticeFilterGrid",
  "noticeHistoryTable", "noticeListHeader", "noticeModeTabs", "noticePickerActions",
  "noticePreviewBox", "noticeRecipientBadges", "noticeScheduleGrid", "noticeSendActions",
  "noticeSolapiResultNotice", "noticeStudentEmpty", "noticeStudentOption", "noticeStudentPicker",
  "noticeTargetPanel", "noticeTargetSummary", "noticeWorkspaceTabs", "noticeWritePanel",
  "notificationHistoryDateFilter", "notificationJobActionNotice", "notificationJobActions",
  "notificationJobStateCell", "notificationJobTypeCell", "notificationJobsStatusNotice",
  "notificationQueuePanel", "notificationTable", "notificationTableHead", "notificationTableRow",
  "solapiResultSyncControl", "specialLectureTopTabs"
]);
function isSafeSelector(sel) {
  const leftmost = sel.trim().split(/\s|>|\+|~/)[0];
  const m = leftmost.match(/^\.([A-Za-z0-9_-]+)/);
  return Boolean(m && safeClasses.has(m[1]));
}

const domainRoot = postcss.parse(domainCss);
let domainSelectorCount = 0;
const domainSelectors = new Set();
domainRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) {
    domainSelectorCount++;
    domainSelectors.add(selector);
    assert.ok(isSafeSelector(selector), `domain CSS selector must be on the confirmed-exclusive list: ${selector}`);
  }
});
assert.equal(domainSelectorCount, 91);

// .notificationLogList, .notificationControlGrid, .notificationLessonItem,
// .notificationControlActions, .notificationBulkActions, and .specialLectureGuideTabs
// are shared with DashboardAuxiliaryPanels.jsx (a different lazy chunk) via mixed
// rules with these safe classes -- confirm the mixed rules stayed in App.css.
for (const cls of [".notificationTableRow", ".specialLectureTopTabs", ".noticeComposerGrid", ".noticePickerActions"]) {
  assert.ok(appCss.includes(cls), `App.css must still declare the shared side of a mixed rule involving: ${cls}`);
}

const appRoot = postcss.parse(appCss);
const appSelectors = new Set();
appRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) appSelectors.add(selector);
});
// Each of these also has its own exclusive rule that moved, separate from the
// mixed rule (shared with DashboardAuxiliaryPanels.jsx / SpecialLectureNoticePanel-
// adjacent selectors) that correctly stayed in App.css -- legitimate dual ownership,
// not a duplication bug.
const knownDualOwnershipSelectors = new Set([
  ".noticeComposerGrid", ".noticeFilterGrid", ".noticeScheduleGrid",
  ".noticePickerActions", ".noticeSendActions", ".specialLectureTopTabs"
]);
const overlap = [...domainSelectors].filter((sel) => appSelectors.has(sel) && !knownDualOwnershipSelectors.has(sel));
assert.deepEqual(overlap, [], `moved selectors must not also remain in App.css: ${overlap.join(", ")}`);

console.log(`notification center CSS domain split passed · ${domainSelectorCount} selectors moved · mixed-rule shared classes correctly left behind`);
