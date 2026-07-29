import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(scriptDirectory, "..");
const appSource = fs.readFileSync(path.join(rootDirectory, "src", "app", "App.jsx"), "utf8");
const cssSource = fs.readFileSync(path.join(rootDirectory, "src", "app", "App.css"), "utf8");
const modalStart = appSource.indexOf('title="알림톡 예약 확인"');
const modalEnd = appSource.indexOf("</Modal>", modalStart);
const modalSource = appSource.slice(modalStart, modalEnd);

assert.ok(modalStart >= 0 && modalEnd > modalStart, "lesson reservation modal source was not found");

for (const requiredSource of [
  "OS 학부모 예약",
  "OS 학생 예약",
  "OS 새로고침",
  "onCancelNotificationJob?.(job",
  "Solapi 실제 예약도 함께 취소하며",
  "reservationIssueList"
]) {
  assert.ok(appSource.includes(requiredSource), `missing preserved reservation UI: ${requiredSource}`);
}

for (const removedSource of [
  "Solapi 예약 그룹",
  "Solapi 그룹 이력",
  "이 수업 학생과 매칭되는 Solapi 메시지가 없습니다."
]) {
  assert.ok(!modalSource.includes(removedSource), `raw Solapi audit UI remains: ${removedSource}`);
}

for (const removedSource of [
  "cancelSolapiGroup",
  "cancelingSolapiGroupId",
  "displayedSolapiGroups",
  "displayedSolapiMessages",
  "includeResult=true",
  'postJson("/api/solapi/groups/cancel"',
  "solapiGroupsPath",
  "solapiMessagesPath"
]) {
  assert.ok(!appSource.includes(removedSource), `raw Solapi audit behavior remains: ${removedSource}`);
}

assert.ok(!cssSource.includes(".reservationAuditGrid"), "unused raw Solapi audit grid CSS remains");
console.log("lesson reservation modal contract: ok");
