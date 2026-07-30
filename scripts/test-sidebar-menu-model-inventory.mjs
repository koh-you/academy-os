import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createSidebarMenuGroups } from "../src/app/sidebarMenuModel.js";

const expectedGroups = [
  {
    title: "Lesson Hub",
    itemIds: [
      "lessons",
      "specialLectureManagement",
      "overdue",
      "followups",
      "supplements",
      "materials",
      "resources"
    ]
  },
  { title: "학생", itemIds: ["students", "classes"] },
  {
    title: "시험",
    itemIds: ["examPrep", "examAnalysisPipeline", "schoolCalendar"]
  },
  { title: "연구실", itemIds: ["lessonResearch", "aiVariants"] },
  {
    title: "운영",
    itemIds: ["settlements", "notifications", "settings"]
  }
];

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const targetGroups = createSidebarMenuGroups({
  total: 3,
  label: "미확인 보충 3건"
});
const controlGroups = createSidebarMenuGroups();
assert.deepEqual(
  targetGroups.map((group) => ({
    title: group.title,
    itemIds: group.items.map((item) => item.id)
  })),
  expectedGroups
);
const targetSupplement = targetGroups
  .flatMap((group) => group.items)
  .find((item) => item.id === "supplements");
const controlSupplement = controlGroups
  .flatMap((group) => group.items)
  .find((item) => item.id === "supplements");
assert.deepEqual(
  {
    badge: targetSupplement.badge,
    badgeTitle: targetSupplement.badgeTitle,
    controlBadge: controlSupplement.badge,
    controlBadgeTitle: controlSupplement.badgeTitle
  },
  {
    badge: "확인 3건",
    badgeTitle: "미확인 보충 3건",
    controlBadge: "",
    controlBadgeTitle: "확인할 보충관리 항목 없음"
  }
);

for (const appBoundary of [
  'from "./sidebarMenuModel.js"',
  "createSidebarMenuGroups(supplementAttention)",
  "const activeMenuItem = menuGroups",
  "menuGroups.map((group) =>",
  "onClick={() => onChangeView(item.id)}"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `sidebar App boundary changed: ${appBoundary}`
  );
}
assert.equal(
  expectedGroups.flatMap((group) => group.itemIds).length,
  17
);
const moduleSource = await readFile(
  new URL("../src/app/sidebarMenuModel.js", import.meta.url),
  "utf8"
);
assert.equal(
  moduleSource.split("export function createSidebarMenuGroups(").length - 1,
  1
);
assert.equal(
  appSource.split('from "./sidebarMenuModel.js"').length - 1,
  1
);
assert.equal(
  appSource.split("createSidebarMenuGroups(supplementAttention)").length - 1,
  1
);
for (const sidebarOwnedBoundary of [
  "const activeMenuItem = menuGroups",
  "menuGroups.map((group) =>",
  "group.items.map((item) =>",
  "activeView === item.id",
  "onClick={() => onChangeView(item.id)}",
  "onClick={onLogout}",
  "onClick={onToggle}",
  "onClick={onToggleMobileNavigation}"
]) {
  assert.ok(
    appSource.includes(sidebarOwnedBoundary),
    `Sidebar-owned boundary moved: ${sidebarOwnedBoundary}`
  );
}
const sidebarStart = appSource.indexOf("function Sidebar({");
const sidebarEnd = appSource.indexOf("\nfunction LoginScreen(", sidebarStart);
assert.ok(sidebarStart >= 0 && sidebarEnd > sidebarStart);
const sidebarSource = appSource.slice(sidebarStart, sidebarEnd);
for (const sidebarShellBoundary of [
  "activeView,",
  "isCollapsed,",
  "isMobileNavigationOpen = false,",
  "onChangeView,",
  "onLogout,",
  "onToggle,",
  "onToggleMobileNavigation,",
  "supplementAttention = null",
  'aria-label="Academy OS 교사 메뉴"',
  'aria-controls="academy-primary-navigation"',
  'aria-label="주요 화면"',
  'aria-current={activeView === item.id ? "page" : undefined}',
  "onClick={() => onChangeView(item.id)}",
  "onClick={onLogout}"
]) {
  assert.ok(
    sidebarSource.includes(sidebarShellBoundary),
    `sidebar shell boundary changed: ${sidebarShellBoundary}`
  );
}
for (const forbiddenEffect of [
  "useState",
  "useEffect",
  "window",
  "document",
  "onChangeView",
  "onLogout",
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "Solapi"
]) {
  assert.ok(
    !moduleSource.includes(forbiddenEffect),
    `sidebar menu model crossed a side effect: ${forbiddenEffect}`
  );
}

console.log("sidebar menu model inventory TARGET/CONTROL fixtures passed");
