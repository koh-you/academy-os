import { defineConfig, devices } from "@playwright/test";

const workerCount = Number(process.env.ACADEMY_SAFE_WORKER_COUNT || 4);

export default defineConfig({
  expect: { timeout: 10_000 },
  fullyParallel: true,
  globalSetup: "./tests/browser/globalSetup.mjs",
  reporter: process.env.CI ? [["line"]] : [["list"]],
  retries: process.env.CI ? 1 : 0,
  testDir: "./tests/browser",
  timeout: 45_000,
  // Each worker gets its own dedicated vite + safe-api server pair
  // (tests/browser/globalSetup.mjs), so workers no longer share fixture state
  // and can safely run in parallel. baseURL is overridden per worker in
  // tests/browser/fixtures.js.
  workers: workerCount,
  use: {
    screenshot: "only-on-failure",
    trace: "retain-on-failure"
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel: process.env.CI ? undefined : "chrome"
      }
    }
  ]
});
