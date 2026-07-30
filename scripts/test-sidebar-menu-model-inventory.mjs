import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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
const start = appSource.indexOf("const menuGroups = [");
const end = appSource.indexOf("\n  const activeMenuItem =", start);
assert.ok(start >= 0 && end > start);
const modelSource = appSource.slice(start, end);

let previousIndex = -1;
for (const group of expectedGroups) {
  for (const boundary of [
    `title: "${group.title}"`,
    ...group.itemIds.map((itemId) => `id: "${itemId}"`)
  ]) {
    const boundaryIndex = modelSource.indexOf(boundary, previousIndex + 1);
    assert.ok(
      boundaryIndex > previousIndex,
      `sidebar menu order changed: ${boundary}`
    );
    previousIndex = boundaryIndex;
  }
}
for (const attentionBoundary of [
  "supplementAttentionCount > 0",
  "`확인 ${supplementAttentionCount}건`",
  'supplementAttentionLabel || "확인할 보충관리 항목 없음"'
]) {
  assert.ok(
    modelSource.includes(attentionBoundary),
    `sidebar attention boundary changed: ${attentionBoundary}`
  );
}
assert.equal(
  expectedGroups.flatMap((group) => group.itemIds).length,
  17
);

console.log("sidebar menu model inventory TARGET/CONTROL fixtures passed");
