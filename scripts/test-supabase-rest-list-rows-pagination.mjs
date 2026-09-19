import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { listRows, primaryKeyColumnsByTable, withStablePaginationOrder } from "../api/lib/supabaseRest.js";

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
// 페이지 경계는 기본키로 고정된다. assigned_date 가 같은 숙제가 1000번째 전후에 걸치면
// 두 요청 사이의 순서가 보장되지 않아 행이 빠지거나 두 번 나오기 때문이다.
for (const url of requestedUrls) {
  assert.ok(
    new URL(url).searchParams.get("order") === "assigned_date.asc,homework_id.asc",
    `paged reads must end their order with the primary key: ${url}`
  );
}

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

// 정렬 결정성 규칙.
{
  // order 가 없으면 기본키 정렬을 넣는다(lesson_student_records 의 명단 필터용 lessons 읽기).
  assert.equal(withStablePaginationOrder("lessons", "select=lesson_id,student_ids"), "select=lesson_id,student_ids&order=lesson_id.asc");
  // 이미 기본키가 들어 있으면 그대로 둔다(중복으로 붙이지 않는다).
  assert.equal(withStablePaginationOrder("students", "select=*&order=student_id.asc"), "select=*&order=student_id.asc");
  assert.equal(withStablePaginationOrder("students", "select=*&order=name.asc,student_id.desc.nullslast"), "select=*&order=name.asc,student_id.desc.nullslast");
  // 호출자의 정렬은 유지하고 동률만 기본키로 가른다.
  assert.equal(
    withStablePaginationOrder("lesson_student_records", "select=*&order=lesson_id.asc&tenant_id=eq.t1"),
    "select=*&order=lesson_id.asc,lesson_student_record_id.asc&tenant_id=eq.t1"
  );
  // 복합키 표는 빠진 열만 붙인다.
  assert.equal(withStablePaginationOrder("app_state", "select=*&order=state_key.asc"), "select=*&order=state_key.asc,tenant_id.asc");
  assert.equal(withStablePaginationOrder("app_state", "select=*"), "select=*&order=tenant_id.asc,state_key.asc");
  // 기본키를 모르는 표는 건드리지 않는다.
  assert.equal(withStablePaginationOrder("unknown_table", "select=*"), "select=*");
}

// 실제 오독 재현: 같은 assigned_date 로 묶인 1,200개 숙제. 1페이지와 2페이지 사이에 한 행이
// 갱신되어 물리 순서가 바뀌면(PostgREST 는 동률 순서를 보장하지 않는다) 정렬이 기본키로
// 고정되지 않은 서버는 한 행을 두 번 주고 한 행을 빼먹는다.
{
  const totalRows = 1200;
  const makeHomework = (index) => ({ assigned_date: "2026-08-25", homework_id: `hw-${String(index).padStart(4, "0")}` });
  function serveWithPhysicalReorder(orderParam, rowsInPhysicalOrder) {
    return async (url) => {
      const parsed = new URL(url);
      const limit = Number(parsed.searchParams.get("limit"));
      const offset = Number(parsed.searchParams.get("offset"));
      assert.equal(parsed.searchParams.get("order"), orderParam);
      const columns = orderParam.split(",").map((term) => term.split(".")[0]);
      const sorted = [...rowsInPhysicalOrder].sort((a, b) => {
        for (const column of columns) {
          if (a[column] !== b[column]) return a[column] < b[column] ? -1 : 1;
        }
        return 0;
      });
      const page = sorted.slice(offset, offset + limit);
      if (offset === 0) {
        // 1페이지를 준 뒤 다른 화면의 저장으로 첫 행이 갱신됐다 — 힙에서 위치가 바뀐다.
        rowsInPhysicalOrder.push(rowsInPhysicalOrder.shift());
      }
      return { ok: true, text: async () => JSON.stringify(page) };
    };
  }
  const rows = Array.from({ length: totalRows }, (_, index) => makeHomework(index));
  const stableRows = await withFetch(
    serveWithPhysicalReorder("assigned_date.asc,homework_id.asc", rows),
    () => listRows("homeworks", "select=*&order=assigned_date.asc", { requireServiceRole: true })
  );
  const ids = stableRows.map((row) => row.homework_id);
  assert.equal(ids.length, totalRows);
  assert.equal(new Set(ids).size, totalRows, "a row updated between pages must not be duplicated");
  assert.deepEqual([...ids].sort(), Array.from({ length: totalRows }, (_, index) => makeHomework(index).homework_id));
}

// 기본키 표는 schema.sql·migrations 와 같아야 한다 — 표가 새로 생기면 여기도 채운다.
{
  const sqlFiles = readdirSync(new URL("../supabase/", import.meta.url))
    .filter((name) => name.endsWith(".sql"))
    .map((name) => readFileSync(new URL(`../supabase/${name}`, import.meta.url), "utf8"));
  const schemaPrimaryKeys = new Map();
  for (const sql of sqlFiles) {
    for (const match of sql.matchAll(/create table (?:if not exists )?(?:public\.)?([a-z_]+)\s*\(([\s\S]*?)\);/gi)) {
      const inline = match[2].match(/^\s*([a-z_]+)\s+[a-z]+[^\n]*primary key/mi);
      if (inline && !schemaPrimaryKeys.has(match[1])) schemaPrimaryKeys.set(match[1], inline[1]);
    }
  }
  assert.ok(schemaPrimaryKeys.size >= 30, "schema files should define the product tables");
  for (const [table, column] of schemaPrimaryKeys) {
    assert.ok(primaryKeyColumnsByTable[table], `primaryKeyColumnsByTable is missing ${table}`);
    assert.ok(
      primaryKeyColumnsByTable[table].split(",").includes(column),
      `${table} tiebreaker must include its primary key ${column}`
    );
  }
}

console.log("supabaseRest listRows pagination contract passed");
