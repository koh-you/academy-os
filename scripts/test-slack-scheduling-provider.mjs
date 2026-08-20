import assert from "node:assert/strict";
import {
  cancelScheduledSlackMessage,
  getNotificationStatus,
  scheduleSlackDailyScheduleSummary
} from "../api/routes/notifications.js";

const managedEnvironment = ["SLACK_BOT_TOKEN", "SLACK_CHANNEL_ID", "SLACK_DRY_RUN"];
const originalEnvironment = Object.fromEntries(
  managedEnvironment.map((name) => [name, process.env[name]])
);
const originalFetch = globalThis.fetch;

function restoreEnvironment() {
  for (const name of managedEnvironment) {
    const value = originalEnvironment[name];
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
}

try {
  process.env.SLACK_DRY_RUN = "true";
  delete process.env.SLACK_BOT_TOKEN;
  delete process.env.SLACK_CHANNEL_ID;
  globalThis.fetch = async () => {
    throw new Error("dry-run must not call Slack");
  };

  assert.equal(getNotificationStatus().slackSchedulingConfigured, false);
  const futureDate = new Date(Date.now() + 60 * 60 * 1000);
  const dryRun = await scheduleSlackDailyScheduleSummary({
    date: "2099-01-01",
    scheduledAt: futureDate.toISOString(),
    text: "fixture summary"
  });
  assert.equal(dryRun.dryRun, true);
  assert.equal(dryRun.scheduledMessageId, "");
  assert.equal(dryRun.postAt, Math.floor(futureDate.getTime() / 1000));
  assert.deepEqual(
    await cancelScheduledSlackMessage({ channel: "C_FIXTURE", scheduledMessageId: "Q_FIXTURE" }),
    { canceled: false, dryRun: true, skipped: true }
  );

  process.env.SLACK_DRY_RUN = "false";
  process.env.SLACK_BOT_TOKEN = "xoxb-fixture-only";
  process.env.SLACK_CHANNEL_ID = "C_FIXTURE";
  assert.equal(getNotificationStatus().slackSchedulingConfigured, true);
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options, body: JSON.parse(options.body) });
    if (String(url).endsWith("chat.scheduleMessage")) {
      return new Response(JSON.stringify({
        ok: true,
        channel: "C_FIXTURE",
        post_at: Math.floor(futureDate.getTime() / 1000),
        scheduled_message_id: "Q_FIXTURE"
      }), { status: 200, headers: { "Content-Type": "application/json" } });
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  };

  const scheduled = await scheduleSlackDailyScheduleSummary({
    scheduledAt: futureDate.toISOString(),
    text: "fixture summary"
  });
  assert.equal(scheduled.dryRun, false);
  assert.equal(scheduled.scheduledMessageId, "Q_FIXTURE");
  assert.deepEqual(calls[0].body, {
    channel: "C_FIXTURE",
    post_at: Math.floor(futureDate.getTime() / 1000),
    text: "fixture summary"
  });
  assert.match(calls[0].options.headers.Authorization, /^Bearer xoxb-fixture-only$/);

  const canceled = await cancelScheduledSlackMessage({
    channel: "C_FIXTURE",
    scheduledMessageId: "Q_FIXTURE"
  });
  assert.equal(canceled.canceled, true);
  assert.deepEqual(calls[1].body, {
    channel: "C_FIXTURE",
    scheduled_message_id: "Q_FIXTURE"
  });

  globalThis.fetch = async () => new Response(JSON.stringify({ ok: false, error: "invalid_auth" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
  await assert.rejects(
    scheduleSlackDailyScheduleSummary({ scheduledAt: futureDate.toISOString(), text: "fixture" }),
    /Slack chat\.scheduleMessage failed: invalid_auth/
  );
  await assert.rejects(
    scheduleSlackDailyScheduleSummary({ scheduledAt: "not-a-date", text: "fixture" }),
    /Slack 예약 시각이 올바르지 않습니다/
  );
  await assert.rejects(
    scheduleSlackDailyScheduleSummary({ scheduledAt: "2000-01-01T00:00:00.000Z", text: "fixture" }),
    /Slack 예약 시각은 현재보다 이후여야 합니다/
  );

  console.log("Slack scheduling provider fixture passed (no external requests).");
} finally {
  globalThis.fetch = originalFetch;
  restoreEnvironment();
}
