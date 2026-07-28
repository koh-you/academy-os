import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getNotificationProviderReference } from "../src/domains/notifications/notificationProviderReference.js";

const cases = [
  [{ response: { groupInfo: { groupId: "response_group_id_TARGET" } } }, "response_group_id_TARGET"],
  [{ response: { groupInfo: { _id: "response_group_legacy_TARGET" } } }, "response_group_legacy_TARGET"],
  [{ response: { messageList: [{ messageId: "response_message_TARGET" }] } }, "response_message_TARGET"],
  [{ response: { failedMessageList: [{ messageId: "response_failed_TARGET" }] } }, "response_failed_TARGET"],
  [{ response: { messageId: "response_direct_message_TARGET" } }, "response_direct_message_TARGET"],
  [{ response: { message_id: "response_snake_message_TARGET" } }, "response_snake_message_TARGET"],
  [{ response: { groupId: "response_direct_group_TARGET" } }, "response_direct_group_TARGET"],
  [{ response: { group_id: "response_snake_group_TARGET" } }, "response_snake_group_TARGET"],
  [{ result: { response: { groupInfo: { groupId: "nested_group_TARGET" } } } }, "nested_group_TARGET"],
  [{ result: { response: { messageList: [{ messageId: "nested_message_TARGET" }] } } }, "nested_message_TARGET"],
  [{ result: { response: { groupId: "nested_direct_group_TARGET" } } }, "nested_direct_group_TARGET"],
  [{ groupId: "root_group_TARGET" }, "root_group_TARGET"],
  [{ messageId: "root_message_TARGET" }, "root_message_TARGET"],
  [{}, ""],
  [null, ""],
  [undefined, ""]
];

for (const [result, expected] of cases) {
  const snapshot = result == null ? result : structuredClone(result);
  assert.equal(
    getNotificationProviderReference(result),
    expected,
    `unexpected provider reference for ${expected || "empty CONTROL"}`
  );
  assert.deepEqual(result, snapshot);
}

const priorityTarget = {
  groupId: "root_group_CONTROL",
  messageId: "root_message_CONTROL",
  response: {
    failedMessageList: [{ messageId: "failed_CONTROL" }],
    groupId: "response_group_CONTROL",
    groupInfo: {
      _id: "legacy_CONTROL",
      groupId: "highest_TARGET"
    },
    messageId: "response_message_CONTROL",
    messageList: [{ messageId: "list_message_CONTROL" }]
  },
  result: {
    response: {
      groupId: "nested_group_CONTROL"
    }
  }
};
assert.equal(getNotificationProviderReference(priorityTarget), "highest_TARGET");

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const selectorSource = await readFile(
  new URL("../src/domains/notifications/notificationProviderReference.js", import.meta.url),
  "utf8"
);
assert.ok(
  appSource.includes(
    'import { getNotificationProviderReference } from "../domains/notifications/notificationProviderReference.js"'
  )
);
assert.ok(appSource.includes("getProviderReference: getNotificationProviderReference"));
assert.ok(appSource.includes("providerMessageId: getNotificationProviderReference(result.result)"));
assert.ok(!appSource.includes("function getNotificationProviderReference(result = {})"));

for (const path of [
  "result?.response?.groupInfo?.groupId",
  "result?.response?.groupInfo?._id",
  "result?.response?.messageList?.[0]?.messageId",
  "result?.response?.failedMessageList?.[0]?.messageId",
  "result?.response?.messageId",
  "result?.response?.message_id",
  "result?.response?.groupId",
  "result?.response?.group_id",
  "result?.result?.response?.groupInfo?.groupId",
  "result?.result?.response?.messageList?.[0]?.messageId",
  "result?.result?.response?.groupId",
  "result?.groupId",
  "result?.messageId"
]) {
  assert.ok(selectorSource.includes(path), `missing provider reference path: ${path}`);
}

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "setNotification"
]) {
  assert.ok(
    !selectorSource.includes(forbiddenSideEffect),
    `provider reference selector must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("notification provider reference TARGET/CONTROL fixtures passed");
