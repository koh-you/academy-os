import { test as base, expect } from "@playwright/test";

// Each worker gets its own vite + safe-api server pair (see globalSetup.mjs),
// started at ACADEMY_SAFE_FRONTEND_BASE_PORT/ACADEMY_SAFE_API_PORT + workerIndex.
// baseURL is a fixture, not a static config value, specifically so it can be
// overridden per worker here.
export const test = base.extend({
  baseURL: async ({}, use, testInfo) => {
    const basePort = Number(process.env.ACADEMY_SAFE_FRONTEND_BASE_PORT || 5173);
    await use(`http://127.0.0.1:${basePort + testInfo.parallelIndex}`);
  }
});

export { expect };
