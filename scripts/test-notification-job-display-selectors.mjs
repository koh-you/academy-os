import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  canDeleteNotificationJobForDisplay,
  getNotificationJobProviderReferenceForDisplay
} from "../src/domains/notifications/notificationJobDisplaySelectors.js";

const noticeStatuses = ["failed", "draft", "dry_run", "canceled"];
for (const status of noticeStatuses) {
  assert.equal(
    canDeleteNotificationJobForDisplay({
      isSchedulePast() {
        throw new Error("notice draft must not inspect schedule");
      },
      job: {
        notificationType: "notice_parent",
        status
      }
    }),
    true,
    `notice ${status} must be deletable`
  );
}

for (const status of noticeStatuses) {
  assert.equal(
    canDeleteNotificationJobForDisplay({
      isSchedulePast() {
        throw new Error("non-unconfirmed job must not inspect schedule");
      },
      job: {
        notificationType: "parent_comment",
        status
      }
    }),
    false,
    `non-notice ${status} must stay protected`
  );
}

const targetJob = {
  notificationJobId: "job_TARGET",
  notificationType: "parent_comment",
  scheduledAt: "2026-07-29T05:00:00.000Z",
  status: "send_unconfirmed"
};
const targetSnapshot = structuredClone(targetJob);
const scheduleCalls = [];
assert.equal(
  canDeleteNotificationJobForDisplay({
    isSchedulePast(...args) {
      scheduleCalls.push(args);
      return true;
    },
    job: targetJob
  }),
  true
);
assert.deepEqual(scheduleCalls, [[targetJob.scheduledAt, 0]]);

assert.equal(
  canDeleteNotificationJobForDisplay({
    isSchedulePast: () => false,
    job: targetJob
  }),
  false
);
assert.equal(
  canDeleteNotificationJobForDisplay({
    isSchedulePast() {
      throw new Error("missing schedule must short-circuit");
    },
    job: {
      status: "send_unconfirmed"
    }
  }),
  false
);
assert.equal(
  canDeleteNotificationJobForDisplay({
    isSchedulePast() {
      throw new Error("missing job must short-circuit");
    },
    job: null
  }),
  false
);

let providerFallbackCalls = 0;
assert.equal(
  getNotificationJobProviderReferenceForDisplay({
    getProviderReference() {
      providerFallbackCalls += 1;
      return "fallback_CONTROL";
    },
    job: {
      providerMessageId: "provider_TARGET",
      result: {
        groupId: "group_CONTROL"
      }
    }
  }),
  "provider_TARGET"
);
assert.equal(providerFallbackCalls, 0);
const resultTarget = {
  response: {
    groupId: "group_TARGET"
  }
};
assert.equal(
  getNotificationJobProviderReferenceForDisplay({
    getProviderReference(result) {
      providerFallbackCalls += 1;
      assert.equal(result, resultTarget);
      return "group_TARGET";
    },
    job: {
      result: resultTarget
    }
  }),
  "group_TARGET"
);
assert.equal(providerFallbackCalls, 1);
assert.equal(
  getNotificationJobProviderReferenceForDisplay({
    getProviderReference(result) {
      providerFallbackCalls += 1;
      assert.equal(result, undefined);
      return "";
    }
  }),
  ""
);
assert.equal(providerFallbackCalls, 2);
assert.deepEqual(targetJob, targetSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const selectorSource = await readFile(
  new URL("../src/domains/notifications/notificationJobDisplaySelectors.js", import.meta.url),
  "utf8"
);
const jobSelectorSource = await readFile(
  new URL("../src/domains/notifications/notificationJobSelectors.js", import.meta.url),
  "utf8"
);
const configSource = await readFile(
  new URL("../src/domains/notifications/notificationCenterConfig.js", import.meta.url),
  "utf8"
);

for (const binding of [
  "canDeleteNotificationJobForDisplay,",
  "getNotificationJobProviderReferenceForDisplay",
  "return canDeleteNotificationJobForDisplay({",
  "isSchedulePast: isNotificationSchedulePast",
  "return getNotificationJobProviderReferenceForDisplay({",
  "getProviderReference: getNotificationProviderReference"
]) {
  assert.ok(appSource.includes(binding), `missing job display selector binding: ${binding}`);
}
assert.ok(!appSource.includes("const deletableNotificationJobStatuses"));
assert.ok(!appSource.includes("job.providerMessageId || getNotificationProviderReference(job.result)"));
assert.ok(jobSelectorSource.includes("export function canCancelNotificationJob"));
assert.ok(configSource.includes("export function resolveNotificationJobStatusClass"));

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
    `notification job display selector must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("notification job display selector TARGET/CONTROL fixtures passed");
