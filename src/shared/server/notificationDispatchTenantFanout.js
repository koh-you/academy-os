// @ts-check

// 알림 발송 한 바퀴를 "알려진 tenant 마다 그 tenant 컨텍스트로" 돌린다.
//
// 서버 내부 60초 루프와 GitHub cron(dispatch 토큰)은 요청 tenant 가 없다. MULTITENANT_SCOPING
// 이 켜진 뒤로는 그 상태에서 claimNotificationJob 의 PATCH 가 "테넌트 스코프가 필요한 변경" 으로
// 던져져 OS 예약 알림(공지 예약 등)은 한 건도 못 나가고, 뒤따르는 Solapi 자동 대조도 같은 이유로
// 실패했다(앱의 발송 상태와 Solapi 상태가 어긋나는 원인). 일반 수업 알림톡은 Solapi 예약이라
// 영향이 없어 늦게 드러났다(2026-09-20).
//
// 취소 수업 정리 sweep(canceledLessonRetentionSweep)과 같은 방식: 스코핑이 켜져 있고 현재
// tenant 가 없을 때만 tenant 별로 순회하고 결과를 합친다. 요청 tenant 가 있으면(선생님 화면의
// "지금 발송") 그 tenant 한 번만 돈다. 한 tenant 가 실패해도 나머지는 계속 돈다.

/**
 * @param {Object} deps
 * @param {(options: Object) => Promise<*>} deps.dispatchDueNotificationJobs 단일 tenant 한 바퀴
 * @param {() => string|null} deps.getCurrentTenantId
 * @param {() => boolean} deps.isTenantScopingEnabled
 * @param {() => Promise<Iterable<string>>} deps.listKnownTeacherTenantIds
 * @param {(tenantId: string|null, fn: () => Promise<*>) => Promise<*>} deps.runWithTenant
 * @param {string} deps.defaultTenantId
 * @param {(message: string, error: unknown) => void} [deps.logError]
 */
export function createNotificationDispatchTenantFanout({
  dispatchDueNotificationJobs,
  getCurrentTenantId,
  isTenantScopingEnabled,
  listKnownTeacherTenantIds,
  runWithTenant,
  defaultTenantId,
  logError = (message, error) => console.error(message, error)
}) {
  /**
   * @param {Object} [options] dispatchDueNotificationJobs 에 그대로 넘긴다(limit 은 tenant 마다 적용).
   */
  async function dispatchDueNotificationJobsAcrossTenants(options = {}) {
    if (!isTenantScopingEnabled() || getCurrentTenantId()) {
      return dispatchDueNotificationJobs(options);
    }

    const tenantIds = [...new Set([defaultTenantId, ...(await listKnownTeacherTenantIds())])];
    const merged = {
      automaticSolapiReconcile: { checkedCount: 0, candidateCount: 0, source: "solapi-auto-reconcile", updatedCount: 0 },
      dryRun: false,
      processed: [],
      processedCount: 0,
      source: "",
      tenants: /** @type {Array<{ tenantId: string, processedCount: number, error?: string }>} */ ([])
    };

    for (const tenantId of tenantIds) {
      try {
        const result = await runWithTenant(tenantId, () => dispatchDueNotificationJobs(options));
        const processed = Array.isArray(result?.processed) ? result.processed : [];
        merged.processed.push(...processed.map((entry) => ({ ...entry, tenantId })));
        merged.processedCount += processed.length;
        merged.dryRun = merged.dryRun || Boolean(result?.dryRun);
        merged.source = merged.source || String(result?.source ?? "");
        const reconcile = result?.automaticSolapiReconcile ?? {};
        for (const key of ["checkedCount", "candidateCount", "updatedCount"]) {
          merged.automaticSolapiReconcile[key] += Number(reconcile[key]) || 0;
        }
        if (reconcile.source) merged.automaticSolapiReconcile.source = reconcile.source;
        merged.tenants.push({ tenantId, processedCount: processed.length });
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        logError(`[notification_dispatch_tenant_failed] ${tenantId}`, error);
        merged.tenants.push({ tenantId, processedCount: 0, error: message });
      }
    }

    // 전부 실패했으면 호출부(내부 루프 로그 · cron 의 --fail-with-body)가 알아채야 한다.
    if (merged.tenants.length > 0 && merged.tenants.every((entry) => entry.error)) {
      throw new Error(`모든 tenant 의 알림 발송이 실패했습니다: ${merged.tenants.map((entry) => `${entry.tenantId}: ${entry.error}`).join(" · ")}`);
    }
    return merged;
  }

  return Object.freeze({ dispatchDueNotificationJobsAcrossTenants });
}
