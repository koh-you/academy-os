// @ts-check

// 취소 수업 7일 보존 뒤 삭제 — 서버의 주기 작업.
//
// 2026-09-19 까지는 coreData.listLessons 가 조회할 때마다 이 정리를 먼저 돌렸다. 그래서
// (1) 출결 폴링 7초마다 SELECT 하나가 더 나갔고, (2) 정리 대상이 생긴 순간에는 GET 안에서
// 수업당 4~5회의 PATCH/DELETE 가 순차로 돌아 조회가 수 초 멈췼으며, (3) 쓰기 테넌트가 없는
// 다중 테넌트 키오스크에서는 삭제 스코프 오류로 조회 자체가 실패했다. 읽기는 읽기만 한다.
//
// 삭제 순서(예약 취소 → 숙제 → 기록 → 수업)와 보존 기간은 deleteExpiredCanceledLessons 가
// 그대로 갖는다. 여기서는 언제·어느 테넌트 컨텍스트로 부를지만 정한다.

export const canceledLessonRetentionSweepIntervalMs = 60 * 60 * 1000;

/**
 * @param {Object} deps
 * @param {() => Promise<{ deletedLessonIds?: string[] }>} deps.deleteExpiredCanceledLessons
 * @param {() => boolean} deps.isSupabaseConfigured 서비스 롤까지 갖춰졌는지
 * @param {() => boolean} deps.isTenantScopingEnabled
 * @param {() => Promise<Iterable<string>>} deps.listKnownTeacherTenantIds
 * @param {(tenantId: string|null, fn: () => Promise<*>) => Promise<*>} deps.runWithTenant
 * @param {string} deps.defaultTenantId
 * @param {(message: string) => void} [deps.log]
 * @param {(message: string, error: unknown) => void} [deps.logError]
 */
export function createCanceledLessonRetentionSweep({
  deleteExpiredCanceledLessons,
  isSupabaseConfigured,
  isTenantScopingEnabled,
  listKnownTeacherTenantIds,
  runWithTenant,
  defaultTenantId,
  log = (message) => console.log(message),
  logError = (message, error) => console.error(message, error)
}) {
  let running = false;

  /**
   * 한 바퀴 돈다. 이미 도는 중이거나 Supabase 가 없으면 아무 것도 하지 않는다.
   * 스코핑이 켜져 있으면 알려진 테넌트마다 그 테넌트의 쓰기 컨텍스트로 돈다(삭제는 스코프 필수).
   * @param {string} [reason]
   * @returns {Promise<{ ran: boolean, sweeps: Array<{ tenantId: string|null, deletedCount: number }> }>}
   */
  async function runCanceledLessonRetentionSweep(reason = "interval") {
    if (running || !isSupabaseConfigured()) return { ran: false, sweeps: [] };
    running = true;
    const sweeps = [];
    try {
      const tenantIds = isTenantScopingEnabled()
        ? [...new Set([defaultTenantId, ...(await listKnownTeacherTenantIds())])]
        : [null];
      for (const tenantId of tenantIds) {
        const result = await runWithTenant(tenantId, () => deleteExpiredCanceledLessons());
        const deletedCount = result?.deletedLessonIds?.length ?? 0;
        sweeps.push({ tenantId, deletedCount });
        if (deletedCount > 0) {
          log(JSON.stringify({ deletedCount, event: "canceled_lesson_retention_sweep", reason, tenantId }));
        }
      }
      return { ran: true, sweeps };
    } catch (error) {
      logError("[canceled_lesson_retention_sweep_failed]", error);
      return { ran: true, sweeps };
    } finally {
      running = false;
    }
  }

  /** 기동 때 한 번, 그 뒤 매시간. 타이머는 프로세스 종료를 막지 않는다. */
  function start({ intervalMs = canceledLessonRetentionSweepIntervalMs, setInterval: schedule = globalThis.setInterval } = {}) {
    runCanceledLessonRetentionSweep("startup");
    const timer = schedule(() => runCanceledLessonRetentionSweep("interval"), intervalMs);
    timer?.unref?.();
    return timer;
  }

  return Object.freeze({ runCanceledLessonRetentionSweep, start });
}
