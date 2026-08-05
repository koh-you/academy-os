import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const source = [
  fs.readFileSync(path.join(scriptDir, "..", "api", "routes", "coreData.js"), "utf8"),
  fs.readFileSync(path.join(scriptDir, "..", "src", "shared", "persistence", "learningCalendarRowMappers.js"), "utf8")
].join("\n");

assert.match(
  source,
  /if \(reminderType === "class_notice"\) sourcePayload\.reminderType = "class_notice";[\s\S]*?reminder_type: reminderType === "class_notice" \? "custom" : reminderType/,
  "반 알림은 기존 DB 제약에 맞는 custom으로 저장하면서 의미를 source_payload에 보존해야 합니다.",
);
assert.match(
  source,
  /const reminderType = sourcePayload\.reminderType === "class_notice"[\s\S]*?\? "class_notice"[\s\S]*?: normalizeAcademyReminderType\(row\.reminder_type\);/,
  "반 알림은 읽을 때 source_payload에서 원래 유형으로 복원해야 합니다.",
);

console.log("academy reminder storage compatibility: passed");
