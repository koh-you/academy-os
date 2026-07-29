import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  getAssignmentStatusParentMessage,
  getAssignmentStatusStudentMessage
} from "../src/domains/lessons/assignmentStatus.js";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(scriptDirectory, "..");
const cssSource = fs.readFileSync(path.join(rootDirectory, "src", "app", "App.css"), "utf8");
const notificationSource = fs.readFileSync(
  path.join(rootDirectory, "api", "routes", "notifications.js"),
  "utf8"
);

const parentKnownOnlyMessage = "풀기 어려운 문제도 더 고민하는 습관이 필요합니다";
const studentKnownOnlyMessage = "모르는 문제를 더 고민해와 !";

assert.equal(getAssignmentStatusParentMessage("known_only"), parentKnownOnlyMessage);
assert.equal(getAssignmentStatusStudentMessage("known_only"), studentKnownOnlyMessage);
assert.match(
  notificationSource,
  new RegExp(`known_only: "${parentKnownOnlyMessage}"`)
);
assert.match(
  notificationSource,
  new RegExp(`known_only: "${studentKnownOnlyMessage}"`)
);

for (const selector of [
  ".journalTable .journalMemoCardInput",
  ".journalTable .journalMemoCardRead"
]) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const block = cssSource.match(new RegExp(`${escapedSelector} \\{([^}]+)\\}`))?.[1] ?? "";
  assert.match(block, /box-sizing: border-box;/);
  assert.match(block, /max-width: 100%;/);
  assert.match(block, /min-width: 0;/);
  assert.match(block, /overflow-wrap: anywhere;/);
  assert.match(block, /word-break: break-word;/);
}

console.log("lesson journal assignment display contract: ok");
