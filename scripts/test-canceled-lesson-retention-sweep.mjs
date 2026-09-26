// 취소 수업 보존 정리는 조회가 아니라 서버 주기 작업이 한다.
//
// 2026-09-19 까지 listLessons 가 조회할 때마다 deleteExpiredCanceledLessons 를 먼저 돌렸다.
// 출결 폴링(7초)마다 SELECT 하나가 더 나갔고, 정리 대상이 생기면 GET 안에서 수업당 4~5회의
// 순차 삭제가 돌아 조회가 멈췼다. 여기서는 (1) listLessons 가 읽기만 하는지, (2) 주기 작업이
// 테넌트별 컨텍스트로 돌고 겹치지 않는지, (3) 삭제 순서·보존 기간이 그대로인지 고정한다.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  canceledLessonRetentionSweepIntervalMs,
  createCanceledLessonRetentionSweep
} from "../src/shared/server/canceledLessonRetentionSweep.js";
import { runWithTenant, getCurrentTenantId } from "../src/shared/server/tenantScope.js";

process.env.SUPABASE_URL = "https://safe-fixture.supabase.co";
process.env.SUPABASE_ANON_KEY = "safe-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "safe-service-role-key";
const { listLessons, deleteExpiredCanceledLessons } = await import("../api/routes/coreData.js");

const originalFetch = globalThis.fetch;
async function withFetch(handler, run) {
  globalThis.fetch = handler;
  try {
    return await run();
  } finally {
    globalThis.fetch = originalFetch;
  }
}

// 1. listLessons 는 lessons 를 한 번 읽기만 한다 — DELETE/PATCH 도, 취소 수업 스캔도 없다.
{
  const requests = [];
  const result = await withFetch(async (url, options = {}) => {
    requests.push({ method: options.method ?? "GET", url: String(url) });
    return { ok: true, text: async () => JSON.stringify([]) };
  }, () => listLessons({ date: "2026-09-19" }));
  assert.equal(result.source, "supabase");
  assert.equal(requests.length, 1, `listLessons must issue exactly one read: ${JSON.stringify(requests)}`);
  assert.equal(requests[0].method, "GET");
  assert.ok(requests[0].url.includes("/lessons?"));
  assert.ok(!requests[0].url.includes("status=eq.canceled"), "the expired-canceled scan must not run inside a read");
}

// 2. 정리 자체는 그대로다: 보존 기간이 지난 취소 수업만 고르고, 예약 취소 → 숙제 → 기록 → 수업 순서.
{
  const requests = [];
  const cutoffLowerBound = Date.now() - 7 * 24 * 60 * 60 * 1000 - 5_000;
  await withFetch(async (url, options = {}) => {
    const method = options.method ?? "GET";
    requests.push({ method, url: String(url) });
    if (method === "GET" && String(url).includes("/lessons?")) {
      return { ok: true, text: async () => JSON.stringify([{ lesson_id: "expired-lesson" }]) };
    }
    return { ok: true, text: async () => JSON.stringify([]) };
  }, () => deleteExpiredCanceledLessons());
  const scan = requests[0];
  assert.equal(scan.method, "GET");
  assert.ok(scan.url.includes("status=eq.canceled"));
  const cutoffMatch = decodeURIComponent(scan.url).match(/updated_at=lt\.([^&]+)/);
  assert.ok(cutoffMatch, "the scan must be bounded by the retention cutoff");
  assert.ok(new Date(cutoffMatch[1]).getTime() >= cutoffLowerBound, "cutoff must be about 7 days ago");
  const mutationOrder = requests.slice(1).map((request) => `${request.method} ${new URL(request.url).pathname.split("/").pop()}`);
  assert.deepEqual(
    mutationOrder.filter((entry) => !entry.startsWith("GET")),
    ["DELETE homeworks", "DELETE lesson_student_records", "DELETE lessons"],
    `cascade order must stay 예약 취소 → 숙제 → 기록 → 수업: ${JSON.stringify(mutationOrder)}`
  );
  assert.ok(mutationOrder[0].startsWith("GET notification_jobs"), "pending notification jobs are scanned first");
}

// 3. 주기 작업: 스코핑이 켜져 있으면 알려진 테넌트마다 그 테넌트 컨텍스트로 돈다.
{
  const seenTenants = [];
  const sweep = createCanceledLessonRetentionSweep({
    defaultTenantId: "tenant_default",
    deleteExpiredCanceledLessons: async () => {
      seenTenants.push(getCurrentTenantId());
      return { deletedLessonIds: getCurrentTenantId() === "tenant_b" ? ["x"] : [] };
    },
    isSupabaseConfigured: () => true,
    isTenantScopingEnabled: () => true,
    listKnownTeacherTenantIds: async () => new Set(["tenant_default", "tenant_b"]),
    runWithTenant,
    log: () => {},
    logError: () => {}
  });
  const result = await sweep.runCanceledLessonRetentionSweep("startup");
  assert.deepEqual(seenTenants, ["tenant_default", "tenant_b"]);
  assert.deepEqual(result.sweeps, [
    { tenantId: "tenant_default", deletedCount: 0 },
    { tenantId: "tenant_b", deletedCount: 1 }
  ]);
}

// 4. 스코핑이 꺼져 있으면 한 번, 컨텍스트 없이(예전 단일 학원 동작).
{
  const seenTenants = [];
  const sweep = createCanceledLessonRetentionSweep({
    defaultTenantId: "tenant_default",
    deleteExpiredCanceledLessons: async () => {
      seenTenants.push(getCurrentTenantId());
      return { deletedLessonIds: [] };
    },
    isSupabaseConfigured: () => true,
    isTenantScopingEnabled: () => false,
    listKnownTeacherTenantIds: async () => {
      throw new Error("must not be consulted when scoping is off");
    },
    runWithTenant,
    log: () => {},
    logError: () => {}
  });
  await sweep.runCanceledLessonRetentionSweep();
  assert.deepEqual(seenTenants, [null]);
}

// 5. Supabase 가 없으면 아무 것도 하지 않고, 도는 중에 다시 부르면 겹치지 않으며, 실패는 삼키고 기록한다.
{
  let calls = 0;
  const skipped = createCanceledLessonRetentionSweep({
    defaultTenantId: "tenant_default",
    deleteExpiredCanceledLessons: async () => {
      calls += 1;
      return { deletedLessonIds: [] };
    },
    isSupabaseConfigured: () => false,
    isTenantScopingEnabled: () => false,
    listKnownTeacherTenantIds: async () => new Set(),
    runWithTenant
  });
  assert.deepEqual(await skipped.runCanceledLessonRetentionSweep(), { ran: false, sweeps: [] });
  assert.equal(calls, 0);

  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  const overlapping = createCanceledLessonRetentionSweep({
    defaultTenantId: "tenant_default",
    deleteExpiredCanceledLessons: async () => {
      calls += 1;
      await gate;
      return { deletedLessonIds: [] };
    },
    isSupabaseConfigured: () => true,
    isTenantScopingEnabled: () => false,
    listKnownTeacherTenantIds: async () => new Set(),
    runWithTenant
  });
  const first = overlapping.runCanceledLessonRetentionSweep("interval");
  const second = await overlapping.runCanceledLessonRetentionSweep("interval");
  assert.equal(second.ran, false, "a sweep must not start while another is running");
  release();
  assert.equal((await first).ran, true);
  assert.equal(calls, 1);

  const errors = [];
  const failing = createCanceledLessonRetentionSweep({
    defaultTenantId: "tenant_default",
    deleteExpiredCanceledLessons: async () => {
      throw new Error("db down");
    },
    isSupabaseConfigured: () => true,
    isTenantScopingEnabled: () => false,
    listKnownTeacherTenantIds: async () => new Set(),
    runWithTenant,
    logError: (message, error) => errors.push([message, error.message])
  });
  await failing.runCanceledLessonRetentionSweep();
  assert.deepEqual(errors, [["[canceled_lesson_retention_sweep_failed]", "db down"]]);
  assert.equal((await failing.runCanceledLessonRetentionSweep()).ran, true, "a failed sweep must release the running flag");
}

// 6. 기동 시 한 번 + 매시간, 그리고 서버가 실제로 이 작업을 켠다.
{
  assert.equal(canceledLessonRetentionSweepIntervalMs, 60 * 60 * 1000);
  const scheduled = [];
  let runs = 0;
  const sweep = createCanceledLessonRetentionSweep({
    defaultTenantId: "tenant_default",
    deleteExpiredCanceledLessons: async () => {
      runs += 1;
      return { deletedLessonIds: [] };
    },
    isSupabaseConfigured: () => true,
    isTenantScopingEnabled: () => false,
    listKnownTeacherTenantIds: async () => new Set(),
    runWithTenant
  });
  sweep.start({ setInterval: (fn, ms) => (scheduled.push(ms), { unref() {} }) });
  await Promise.resolve();
  assert.equal(runs, 1, "start must sweep once immediately");
  assert.deepEqual(scheduled, [canceledLessonRetentionSweepIntervalMs]);

  const serverSource = await readFile(new URL("../api/server.js", import.meta.url), "utf8");
  const coreDataSource = await readFile(new URL("../api/routes/coreData.js", import.meta.url), "utf8");
  assert.ok(serverSource.includes("canceledLessonRetentionSweep.start()"), "server must schedule the sweep on listen");
  assert.ok(serverSource.includes("createCanceledLessonRetentionSweep({"));
  const listLessonsBody = coreDataSource.slice(
    coreDataSource.indexOf("export async function listLessons("),
    coreDataSource.indexOf("export async function getLessonClosurePreflight(")
  );
  assert.ok(!listLessonsBody.includes("await deleteExpiredCanceledLessons()"), "listLessons must stay read-only");
}

console.log("canceled lesson retention sweep: read-only listLessons, per-tenant hourly sweep, cascade order preserved");
