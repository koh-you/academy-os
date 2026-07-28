import { useEffect } from "react";
import { syncAttendanceRecordsAction } from "./attendanceSyncController.js";

export const attendanceSyncIntervalMs = 7_000;

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
