import { useCallback, useEffect, useRef, useState } from "react";
import { syncAttendanceRecordsAction } from "./attendanceSyncController.js";

export const attendanceSyncIntervalMs = 7_000;
export const attendanceDateRolloverIntervalMs = 30_000;

export function startAttendanceDateRolloverLifecycle({
  documentTarget,
  getCurrentDate,
  isReady,
  loadedDateRef,
  onReloadRequested,
  windowTarget
}) {
  function refreshIfDateChanged() {
    const currentDate = getCurrentDate();
    if (loadedDateRef.current === currentDate && isReady) return;
    loadedDateRef.current = currentDate;
    onReloadRequested();
  }

  const intervalId = windowTarget.setInterval(
    refreshIfDateChanged,
    attendanceDateRolloverIntervalMs
  );
  windowTarget.addEventListener("focus", refreshIfDateChanged);
  documentTarget.addEventListener("visibilitychange", refreshIfDateChanged);

  return () => {
    windowTarget.clearInterval(intervalId);
    windowTarget.removeEventListener("focus", refreshIfDateChanged);
    documentTarget.removeEventListener("visibilitychange", refreshIfDateChanged);
  };
}

export function useAttendanceDateRollover({
  enabled,
  getCurrentDate,
  isReady,
  onReloadRequested
}) {
  const loadedDateRef = useRef(getCurrentDate());
  const onReloadRequestedRef = useRef(onReloadRequested);
  const [reloadKey, setReloadKey] = useState(0);
  onReloadRequestedRef.current = onReloadRequested;

  const requestReload = useCallback(() => {
    onReloadRequestedRef.current();
    setReloadKey((current) => current + 1);
  }, []);

  const markLoadedDate = useCallback((date) => {
    loadedDateRef.current = date;
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    return startAttendanceDateRolloverLifecycle({
      documentTarget: document,
      getCurrentDate,
      isReady,
      loadedDateRef,
      onReloadRequested: requestReload,
      windowTarget: window
    });
  }, [enabled, getCurrentDate, isReady, requestReload]);

  return {
    loadedDateRef,
    markLoadedDate,
    reloadKey,
    requestReload
  };
}

export function startAttendanceSyncLifecycle({
  documentTarget,
  runSync,
  windowTarget
}) {
  let disposed = false;
  let inFlight = false;

  async function syncAttendanceRecords() {
    if (disposed || inFlight || documentTarget.visibilityState === "hidden") return;
    inFlight = true;
    try {
      await runSync(() => disposed);
    } finally {
      inFlight = false;
    }
  }

  void syncAttendanceRecords();
  const intervalId = windowTarget.setInterval(
    syncAttendanceRecords,
    attendanceSyncIntervalMs
  );
  windowTarget.addEventListener("focus", syncAttendanceRecords);
  documentTarget.addEventListener("visibilitychange", syncAttendanceRecords);

  return () => {
    disposed = true;
    windowTarget.clearInterval(intervalId);
    windowTarget.removeEventListener("focus", syncAttendanceRecords);
    documentTarget.removeEventListener("visibilitychange", syncAttendanceRecords);
  };
}

export function useAttendanceRecordSync({
  enabled,
  recordsRef,
  request,
  saveStatesRef,
  setRecords,
  setStatus,
  syncDate
}) {
  useEffect(() => {
    if (!enabled) return undefined;

    return startAttendanceSyncLifecycle({
      documentTarget: document,
      runSync: (isDisposed) =>
        syncAttendanceRecordsAction({
          getSaveState: (recordId) => saveStatesRef.current[recordId],
          isDisposed,
          onRecords: (updater) => {
            setRecords((currentRecords) => {
              const nextRecords = updater(currentRecords);
              if (nextRecords !== currentRecords) {
                recordsRef.current = nextRecords;
              }
              return nextRecords;
            });
          },
          onStatus: setStatus,
          request,
          syncDate
        }),
      windowTarget: window
    });
  }, [
    enabled,
    recordsRef,
    request,
    saveStatesRef,
    setRecords,
    setStatus,
    syncDate
  ]);
}
