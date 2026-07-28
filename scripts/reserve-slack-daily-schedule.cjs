const baseUrl =
  process.env.ACADEMY_API_URL ||
  process.env.RENDER_API_URL ||
  "https://koh-you-math-academy-os-api.onrender.com";
const dispatchToken = String(process.env.NOTIFICATION_DISPATCH_TOKEN || "").trim();

function getKoreaDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function getNextKoreaDate() {
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const parts = getKoreaDateParts(tomorrow);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

async function main() {
  if (!dispatchToken) {
    throw new Error("NOTIFICATION_DISPATCH_TOKEN is required for Slack scheduling.");
  }
  const date = String(process.env.SLACK_SCHEDULE_DATE || getNextKoreaDate()).trim();
  const scheduledAt = String(
    process.env.SLACK_SCHEDULED_AT || `${date}T00:00:00.000Z`
  ).trim();
  const response = await fetch(
    `${baseUrl.replace(/\/$/, "")}/api/notifications/slack-today-schedule/reserve`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Dispatch-Token": dispatchToken
      },
      body: JSON.stringify({
        date,
        scheduledAt,
        notifyEmpty: true,
        force: process.env.SLACK_SCHEDULE_FORCE === "true"
      })
    }
  );
  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.ok) {
    throw new Error(result.error || `Slack daily schedule reservation failed: ${response.status}`);
  }

  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
