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
