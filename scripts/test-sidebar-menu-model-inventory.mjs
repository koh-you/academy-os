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
const sidebarSource = await readFile(
  new URL("../src/app/Sidebar.jsx", import.meta.url),
  "utf8"
);
const shellSource = `${appSource}\n${sidebarSource}`;
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
    shellSource.includes(appBoundary),
    `sidebar boundary changed: ${appBoundary}`
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
  sidebarSource.split('from "./sidebarMenuModel.js"').length - 1,
  1
);
assert.equal(
  sidebarSource.split("createSidebarMenuGroups(supplementAttention)").length - 1,
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
    sidebarSource.includes(sidebarOwnedBoundary),
    `Sidebar-owned boundary moved: ${sidebarOwnedBoundary}`
  );
}
for (const sidebarShellBoundary of [
  "export function Sidebar({",
  "academyBrandName,",
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
for (const appShellBoundary of [
  'from "./Sidebar.jsx"',
  "<Sidebar",
  "academyBrandName={academyBrandName}",
  "activeView={activeView}",
  "onChangeView={handleChangeView}",
  "onLogout={handleLogout}",
  "supplementAttention={supplementAttention}",
  "today={today}"
]) {
  assert.ok(
    appSource.includes(appShellBoundary),
    `App Sidebar boundary changed: ${appShellBoundary}`
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
