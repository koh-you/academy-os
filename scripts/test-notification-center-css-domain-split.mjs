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
  // 2026-09-19 · 공지 발송 확인 모달·고정 액션 줄(NotificationSendConfirmModal.jsx, NotificationComposerPanel.jsx 전용)
  "noticeSendConfirmModal", "noticeSendConfirmSummary", "noticeSendFooter",
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
// 2026-09-19 · 발송 확인 모달·요약 카드·고정 액션 줄 selector 6개 추가 (90 → 96)
// 2026-09-19 · UI U14: 980px 이하 1열 규칙(noticeComposerGrid/noticeFilterGrid/noticeScheduleGrid)을 App.css 에서 이 파일로 이동 (96 → 99)
assert.equal(domainSelectorCount, 99);

// .notificationLogList, .notificationControlGrid, .notificationLessonItem,
// .notificationControlActions, .notificationBulkActions, and .specialLectureGuideTabs
// are shared with DashboardAuxiliaryPanels.jsx (a different lazy chunk) via mixed
// rules with these safe classes -- confirm the mixed rules stayed in App.css.
// 2026-09-19 · UI U14: .noticeComposerGrid 는 App.css 980px 혼합 규칙에서 빠져 이 도메인 파일로
// 완전히 이동했다(로드 순서 때문에 App.css 쪽이 죽어 있었음). 남은 혼합 규칙은 notificationControlGrid/
// notificationLessonItem 뿐이라 목록에서 제외한다.
for (const cls of [".notificationTableRow", ".specialLectureTopTabs", ".noticePickerActions"]) {
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
// 2026-09-19 · UI U14: noticeComposerGrid/noticeFilterGrid/noticeScheduleGrid 는 이제 App.css 에 남아 있지 않다.
const knownDualOwnershipSelectors = new Set([
  ".noticePickerActions", ".noticeSendActions", ".specialLectureTopTabs"
]);
const overlap = [...domainSelectors].filter((sel) => appSelectors.has(sel) && !knownDualOwnershipSelectors.has(sel));
assert.deepEqual(overlap, [], `moved selectors must not also remain in App.css: ${overlap.join(", ")}`);

console.log(`notification center CSS domain split passed · ${domainSelectorCount} selectors moved · mixed-rule shared classes correctly left behind`);
