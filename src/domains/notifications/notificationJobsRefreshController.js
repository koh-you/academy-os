import { createNotificationJobsQueryString } from "./notificationJobLoadQuery.js";
import { createNotificationJobsReadyStatus } from "./notificationJobLoadStatus.js";

export function createNotificationJobsDateRange(date = "") {
  if (!date) return { scheduledFrom: "", scheduledTo: "" };
  const dayStart = new Date(`${date}T00:00:00+09:00`);
  const nextDayStart = new Date(`${date}T00:00:00+09:00`);
  nextDayStart.setUTCDate(nextDayStart.getUTCDate() + 1);
  if (Number.isNaN(dayStart.getTime()) || Number.isNaN(nextDayStart.getTime())) {
    return { scheduledFrom: "", scheduledTo: "" };
  }
  return {
    scheduledFrom: dayStart.toISOString(),
    scheduledTo: nextDayStart.toISOString()
  };
}

export function getNotificationJobsRefreshChannel({ lessonId = "", scope = "active" } = {}) {
  return lessonId ? "lesson" : scope;
}

export function createNotificationJobsRefreshController({
  onError = () => {},
  onJobs,
  onStatus,
  request
}) {
  let disposed = false;
  let nextRequestId = 0;
  const inFlightBySignature = new Map();
  const latestRequestByChannel = new Map();

  function invalidate(channel = "") {
    if (!channel) {
      for (const currentChannel of latestRequestByChannel.keys()) {
        latestRequestByChannel.set(currentChannel, ++nextRequestId);
      }
      return;
    }
    latestRequestByChannel.set(channel, ++nextRequestId);
  }

  function refresh({ date = "", lessonId = "", scope = "active", silent = false } = {}) {
    const channel = getNotificationJobsRefreshChannel({ lessonId, scope });
    const { scheduledFrom, scheduledTo } =
      !lessonId && scope === "history"
        ? createNotificationJobsDateRange(date)
        : { scheduledFrom: "", scheduledTo: "" };
    const queryString = createNotificationJobsQueryString({
      lessonId,
      scheduledFrom,
      scheduledTo,
      scope
    });
    const signature = `${channel}:${queryString}`;
    const existing = inFlightBySignature.get(signature);
    if (existing && latestRequestByChannel.get(channel) === existing.requestId) {
      return existing.promise;
    }

    const requestId = ++nextRequestId;
    latestRequestByChannel.set(channel, requestId);
    if (!silent) {
      onStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." });
    }

    const promise = (async () => {
      try {
        const result = await request(
          `/api/notification-jobs?${queryString}`,
          12000,
          "알림 기록 조회가 12초를 넘었습니다. 발송 기능은 사용할 수 있고, 기록만 새로고침으로 다시 확인해 주세요."
        );
        const stale = disposed || latestRequestByChannel.get(channel) !== requestId;
        if (stale) return { ok: false, stale: true };
        if (!result.ok || !Array.isArray(result.notificationJobs)) {
          return { ok: false, stale: false };
        }
        onJobs({
          notificationJobs: result.notificationJobs,
          replace: scope === "active" && !lessonId
        });
        if (!silent) {
          onStatus(createNotificationJobsReadyStatus({
            count: result.notificationJobs.length,
            lessonId,
            scope
          }));
        }
        return { ok: true, stale: false };
      } catch (error) {
        const stale = disposed || latestRequestByChannel.get(channel) !== requestId;
        if (!stale && !silent) {
          onStatus({ state: "failed", message: error.message });
        }
        if (!stale) onError(error);
        return { error, ok: false, stale };
      } finally {
        const current = inFlightBySignature.get(signature);
        if (current?.requestId === requestId) inFlightBySignature.delete(signature);
      }
    })();

    inFlightBySignature.set(signature, { promise, requestId });
    return promise;
  }

  function dispose() {
    disposed = true;
    invalidate();
  }

  return { dispose, invalidate, refresh };
}
