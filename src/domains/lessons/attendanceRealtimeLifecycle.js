export const attendanceRealtimeTable = "lesson_student_records";
export const attendanceRealtimeEvents = ["INSERT", "UPDATE", "DELETE"];

function eventIdentity(event = {}) {
  const row = event.new ?? event.old ?? {};
  return [event.eventType, row.id ?? row.lesson_student_record_id, row.updated_at]
    .filter(Boolean)
    .join(":");
}

export function isAttendanceRealtimeEvent(event = {}) {
  return (
    event.table === attendanceRealtimeTable &&
    attendanceRealtimeEvents.includes(event.eventType)
  );
}

export function startAttendanceRealtimeLifecycle({
  createSubscription,
  documentTarget,
  onSourceRefresh,
  startPolling,
  windowTarget
}) {
  let disposed = false;
  let pollingCleanup = null;
  let subscriptionCleanup = null;
  let refreshInFlight = false;
  const seenEvents = new Set();

  function ensurePolling() {
    if (disposed || pollingCleanup) return;
    pollingCleanup = startPolling();
  }

  function stopPolling() {
    pollingCleanup?.();
    pollingCleanup = null;
  }

  async function refreshSource(reason) {
    if (disposed || refreshInFlight || documentTarget.visibilityState === "hidden") return;
    refreshInFlight = true;
    try {
      await onSourceRefresh(reason);
    } finally {
      refreshInFlight = false;
    }
  }

  function handleEvent(event) {
    if (!isAttendanceRealtimeEvent(event)) return;
    const identity = eventIdentity(event);
    if (identity && seenEvents.has(identity)) return;
    if (identity) {
      seenEvents.add(identity);
      if (seenEvents.size > 200) seenEvents.delete(seenEvents.values().next().value);
    }
    void refreshSource("realtime-event");
  }

  function handleStatus(status) {
    if (status === "SUBSCRIBED") {
      stopPolling();
      void refreshSource("realtime-subscribed");
      return;
    }
    if (["CHANNEL_ERROR", "TIMED_OUT", "CLOSED"].includes(status)) ensurePolling();
  }

  function connect() {
    if (disposed || !windowTarget.navigator?.onLine) {
      ensurePolling();
      return;
    }
    try {
      subscriptionCleanup?.();
      subscriptionCleanup = createSubscription({
        events: attendanceRealtimeEvents,
        onEvent: handleEvent,
        onStatus: handleStatus,
        table: attendanceRealtimeTable
      });
      ensurePolling();
    } catch {
      ensurePolling();
    }
  }

  function handleFocusOrVisibility() {
    if (documentTarget.visibilityState === "hidden") return;
    void refreshSource("resume");
    connect();
  }

  function handleOffline() {
    ensurePolling();
  }

  function handleOnline() {
    void refreshSource("online");
    connect();
  }

  windowTarget.addEventListener("focus", handleFocusOrVisibility);
  windowTarget.addEventListener("online", handleOnline);
  windowTarget.addEventListener("offline", handleOffline);
  documentTarget.addEventListener("visibilitychange", handleFocusOrVisibility);
  connect();

  return () => {
    disposed = true;
    stopPolling();
    subscriptionCleanup?.();
    subscriptionCleanup = null;
    windowTarget.removeEventListener("focus", handleFocusOrVisibility);
    windowTarget.removeEventListener("online", handleOnline);
    windowTarget.removeEventListener("offline", handleOffline);
    documentTarget.removeEventListener("visibilitychange", handleFocusOrVisibility);
  };
}
