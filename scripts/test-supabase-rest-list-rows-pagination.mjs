import assert from "node:assert/strict";
import { listRows } from "../api/lib/supabaseRest.js";

process.env.SUPABASE_URL = "https://safe-fixture.supabase.co";
process.env.SUPABASE_ANON_KEY = "safe-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "safe-service-role-key";

const originalFetch = globalThis.fetch;
const requestedUrls = [];

function makeRow(index) {
  return { row_id: `row-${index}` };
}

async function withFetch(handler, run) {
  globalThis.fetch = handler;
  try {
    return await run();
  } finally {
    globalThis.fetch = originalFetch;
  }
}

// Supabase/PostgREST silently caps a single request at its configured max-rows
// (commonly 1000). A table that grows past that cap must not go missing from
// listRows callers that expect the full table (this broke "다음 숙제" for any
// date once the homeworks table passed 1000 rows: 2026-08-25 reproduction).
requestedUrls.length = 0;
const pagedRows = await withFetch(async (url) => {
  requestedUrls.push(url);
  const parsed = new URL(url);
  const limit = Number(parsed.searchParams.get("limit"));
  const offset = Number(parsed.searchParams.get("offset"));
  const totalRows = 1005;
  const remaining = Math.max(0, totalRows - offset);
  const pageLength = Math.min(limit, remaining);
  const body = Array.from({ length: pageLength }, (_, index) => makeRow(offset + index));
  return { ok: true, text: async () => JSON.stringify(body) };
}, () => listRows("homeworks", "select=*&order=assigned_date.asc", { requireServiceRole: true }));

assert.equal(pagedRows.length, 1005, "listRows must return every row across pages, not just the first 1000");
assert.equal(requestedUrls.length, 2, "listRows must page again once a full page is returned");
assert.ok(requestedUrls[0].includes("limit=1000&offset=0"));
assert.ok(requestedUrls[1].includes("limit=1000&offset=1000"));
assert.equal(pagedRows.at(-1).row_id, "row-1004");

// A table under the page size must resolve in a single request.
requestedUrls.length = 0;
const smallRows = await withFetch(async (url) => {
  requestedUrls.push(url);
  return { ok: true, text: async () => JSON.stringify([makeRow(0), makeRow(1)]) };
}, () => listRows("lessons", "select=*&order=lesson_date.asc", { requireServiceRole: true }));

assert.equal(smallRows.length, 2);
assert.equal(requestedUrls.length, 1, "a page shorter than pageSize must stop pagination immediately");

// Callers that already pass an explicit limit (e.g. notification dispatch
// candidates capped at 1000, or a single-row lookup) must not be paginated
// past what they asked for.
requestedUrls.length = 0;
const explicitLimitRows = await withFetch(async (url) => {
  requestedUrls.push(url);
  return { ok: true, text: async () => JSON.stringify([makeRow(0)]) };
}, () => listRows("teacher_accounts", "select=teacher_id&is_active=eq.true&limit=1", { requireServiceRole: true }));

assert.equal(explicitLimitRows.length, 1);
assert.equal(requestedUrls.length, 1);
assert.equal(requestedUrls[0].includes("&offset="), false, "an explicit caller limit must not be paginated");

console.log("supabaseRest listRows pagination contract passed");
