import { defineConfig, devices } from "@playwright/test";

const frontendPort = Number(process.env.ACADEMY_SAFE_FRONTEND_PORT || 5173);

export default defineConfig({
  expect: { timeout: 10_000 },
  fullyParallel: false,
  reporter: process.env.CI ? [["line"]] : [["list"]],
  retries: process.env.CI ? 1 : 0,
  testDir: "./tests/browser",
  timeout: 45_000,
  // Browser specs reset one shared safe API fixture, so files must not race each other.
  workers: 1,
  use: {
    baseURL: `http://127.0.0.1:${frontendPort}`,
    screenshot: "only-on-failure",
    trace: "retain-on-failure"
  },
  webServer: {
    command: "npm run dev:safe",
    reuseExistingServer: !process.env.CI && !process.env.ACADEMY_SAFE_ISOLATED,
    timeout: 120_000,
    url: `http://127.0.0.1:${frontendPort}`
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
