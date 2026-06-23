const apiBaseUrl = (process.env.ACADEMY_API_URL || "https://koh-you-math-academy-os-api.onrender.com").replace(/\/$/, "");

async function main() {
  const response = await fetch(`${apiBaseUrl}/api/notification-jobs/dispatch-due`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      forceDryRun: process.env.ALIMTALK_DRY_RUN !== "false",
      limit: Number(process.env.NOTIFICATION_DISPATCH_LIMIT || 50)
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.ok === false) {
    throw new Error(result.error || `Notification dispatch failed: ${response.status}`);
  }
  console.log(JSON.stringify({
    ok: true,
    processedCount: result.processedCount ?? result.processed?.length ?? 0
  }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
