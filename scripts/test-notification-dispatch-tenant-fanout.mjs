// 알림 발송 한 바퀴는 요청 tenant 가 없을 때 알려진 tenant 마다 그 tenant 컨텍스트로 돈다.
//
// 2026-09-20: 내부 60초 루프와 dispatch 토큰 cron 은 tenant 없이 dispatchDueNotificationJobs 를
// 불렀고, MULTITENANT_SCOPING=true 에서는 claim 의 PATCH 가 "테넌트 스코프가 필요한 변경" 으로
// 던져져 OS 예약 알림·Solapi 자동 대조가 멈췄다. 여기서는 (1) 스코핑이 꺼졌거나 요청 tenant 가
// 있으면 한 번만, (2) 없으면 tenant 별 컨텍스트로 순회하며 결과를 합치는지, (3) 한 tenant 실패가
// 나머지를 막지 않는지, (4) 실제 서버 코드가 이 래퍼를 쓰는지 고정한다.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationDispatchTenantFanout } from "../src/shared/server/notificationDispatchTenantFanout.js";
import { getCurrentTenantId, isTenantScopingEnabled, runWithTenant } from "../src/shared/server/tenantScope.js";

const originalScoping = process.env.MULTITENANT_SCOPING;
function withScoping(value, run) {
  process.env.MULTITENANT_SCOPING = value;
  return run().finally(() => {
    if (originalScoping === undefined) delete process.env.MULTITENANT_SCOPING;
    else process.env.MULTITENANT_SCOPING = originalScoping;
  });
}

function createHarness({ known = ["tenant_default", "tenant_b"], perTenant = {} } = {}) {
  const calls = [];
  const fanout = createNotificationDispatchTenantFanout({
    defaultTenantId: "tenant_default",
    dispatchDueNotificationJobs: async (options) => {
      const tenantId = getCurrentTenantId();
      calls.push({ tenantId, options });
      const behavior = perTenant[tenantId ?? "null"];
      if (behavior instanceof Error) throw behavior;
      return behavior ?? {
        automaticSolapiReconcile: { checkedCount: 1, candidateCount: 1, source: "supabase", updatedCount: 0 },
        dryRun: false,
        processed: [{ notificationJobId: `job_${tenantId}`, status: "sent" }],
        processedCount: 1,
        source: "supabase"
      };
    },
    getCurrentTenantId,
    isTenantScopingEnabled,
    listKnownTeacherTenantIds: async () => new Set(known),
    runWithTenant,
    logError: () => {}
  });
  return { calls, fanout };
}

// 1. 스코핑이 꺼져 있으면 tenant 없이 한 번.
await withScoping("false", async () => {
  const { calls, fanout } = createHarness();
  const result = await fanout.dispatchDueNotificationJobsAcrossTenants({ limit: 5 });
  assert.deepEqual(calls, [{ tenantId: null, options: { limit: 5 } }]);
  assert.equal(result.processedCount, 1);
  assert.equal(result.tenants, undefined, "순회하지 않았으면 tenants 요약이 없다");
});

// 2. 스코핑이 켜져 있고 요청 tenant 가 있으면(선생님 화면의 "지금 발송") 그 tenant 한 번만.
await withScoping("true", async () => {
  const { calls, fanout } = createHarness();
  const result = await runWithTenant("tenant_b", () => fanout.dispatchDueNotificationJobsAcrossTenants({}));
  assert.deepEqual(calls.map((call) => call.tenantId), ["tenant_b"]);
  assert.equal(result.tenants, undefined);
});

// 3. 스코핑이 켜져 있고 tenant 가 없으면(내부 루프·cron) 기본 tenant + 알려진 tenant 를 중복 없이 순회, 결과 합산.
await withScoping("true", async () => {
  const { calls, fanout } = createHarness({ known: ["tenant_b", "tenant_default", "tenant_c"] });
  const result = await fanout.dispatchDueNotificationJobsAcrossTenants({ limit: 50 });
  assert.deepEqual(calls.map((call) => call.tenantId), ["tenant_default", "tenant_b", "tenant_c"]);
  assert.ok(calls.every((call) => call.options.limit === 50), "limit 은 tenant 마다 그대로 넘긴다");
  assert.equal(result.processedCount, 3);
  assert.deepEqual(result.processed.map((entry) => [entry.notificationJobId, entry.tenantId]), [
    ["job_tenant_default", "tenant_default"], ["job_tenant_b", "tenant_b"], ["job_tenant_c", "tenant_c"]
  ]);
  assert.deepEqual(result.automaticSolapiReconcile, { checkedCount: 3, candidateCount: 3, source: "supabase", updatedCount: 0 });
  assert.equal(result.source, "supabase");
  assert.deepEqual(result.tenants, [
    { tenantId: "tenant_default", processedCount: 1 }, { tenantId: "tenant_b", processedCount: 1 }, { tenantId: "tenant_c", processedCount: 1 }
  ]);
  assert.equal(getCurrentTenantId(), null, "순회가 끝나면 바깥 컨텍스트는 그대로 비어 있다");
});

// 4. 한 tenant 가 던져도 나머지는 돈다. 실패는 tenants 에 남고 응답은 정상.
await withScoping("true", async () => {
  const { calls, fanout } = createHarness({ perTenant: { tenant_default: new Error("테넌트 스코프가 필요한 변경입니다") } });
  const result = await fanout.dispatchDueNotificationJobsAcrossTenants({});
  assert.deepEqual(calls.map((call) => call.tenantId), ["tenant_default", "tenant_b"]);
  assert.equal(result.processedCount, 1);
  assert.deepEqual(result.tenants, [
    { tenantId: "tenant_default", processedCount: 0, error: "테넌트 스코프가 필요한 변경입니다" },
    { tenantId: "tenant_b", processedCount: 1 }
  ]);
});

// 5. 전부 실패하면 던진다(내부 루프 로그·cron 의 --fail-with-body 가 알아채야 한다).
await withScoping("true", async () => {
  const { fanout } = createHarness({ perTenant: { tenant_default: new Error("a"), tenant_b: new Error("b") } });
  await assert.rejects(fanout.dispatchDueNotificationJobsAcrossTenants({}), /모든 tenant 의 알림 발송이 실패했습니다: tenant_default: a · tenant_b: b/);
});

// 6. 서버 코드가 실제로 이 래퍼를 쓴다 — 내부 루프와 dispatch-due 라우트가 부르는 hoisted 함수가 래퍼로 간다.
{
  const server = await readFile(new URL("../api/server.js", import.meta.url), "utf8");
  assert.ok(server.includes('import { createNotificationDispatchTenantFanout } from "../src/shared/server/notificationDispatchTenantFanout.js";'));
  assert.ok(server.includes("function dispatchDueNotificationJobs(options) {\r\n  return notificationDispatchTenantFanout.dispatchDueNotificationJobsAcrossTenants(options);") ||
    server.includes("function dispatchDueNotificationJobs(options) {\n  return notificationDispatchTenantFanout.dispatchDueNotificationJobsAcrossTenants(options);"));
  assert.ok(server.includes("dispatchDueNotificationJobs: (options) => notificationSolapiDispatchService.dispatchDueNotificationJobs(options)"));
  assert.ok(server.includes("listKnownTeacherTenantIds,\n  runWithTenant\n});") || server.includes("listKnownTeacherTenantIds,\r\n  runWithTenant\r\n});"));
}

console.log("notification dispatch tenant fanout: passthrough without scoping/with request tenant, per-tenant sweep with merged result, partial failure tolerated, total failure thrown, server wiring fixed");
