const baseUrl =
  process.env.ACADEMY_API_URL ||
  process.env.RENDER_API_URL ||
  "https://koh-you-math-academy-os-api.onrender.com";

async function main() {
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/notifications/slack-today-schedule`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notifyEmpty: true })
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.ok) {
    throw new Error(result.error || `Slack daily schedule failed: ${response.status}`);
  }

  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
