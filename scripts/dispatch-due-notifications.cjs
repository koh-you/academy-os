const apiBaseUrl = (process.env.ACADEMY_API_URL || "https://koh-you-math-academy-os-api.onrender.com").replace(/\/$/, "");

async function main() {
  const {
    parseVersionedWriteRequest,
    parseVersionedWriteResponse
  } = await import("../src/shared/contracts/versionedWriteRouteContracts.js");
  const payload = parseVersionedWriteRequest("POST", "/api/notification-jobs/dispatch-due", {
    forceDryRun: process.env.ALIMTALK_DRY_RUN !== "false",
    limit: Number(process.env.NOTIFICATION_DISPATCH_LIMIT || 50)
  });
  const response = await fetch(`${apiBaseUrl}/api/notification-jobs/dispatch-due`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.NOTIFICATION_DISPATCH_TOKEN ? { "X-Dispatch-Token": process.env.NOTIFICATION_DISPATCH_TOKEN } : {})
    },
    body: JSON.stringify(payload)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.ok === false) {
    throw new Error(result.error || `Notification dispatch failed: ${response.status}`);
  }
  const parsedResult = parseVersionedWriteResponse(
    "POST",
    "/api/notification-jobs/dispatch-due",
    result
  );
  console.log(JSON.stringify({
    automaticSolapiCheckedCount: parsedResult.automaticSolapiReconcile.checkedCount ?? 0,
    automaticSolapiUpdatedCount: parsedResult.automaticSolapiReconcile.updatedCount ?? 0,
    ok: true,
    processedCount: parsedResult.processedCount
  }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
