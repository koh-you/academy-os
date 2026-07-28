import { mergeRemoteAttendanceRecord } from "./attendanceSync.js";

export function mergeRemoteAttendanceRecords(
  currentRecords = [],
  remoteRecords = [],
  getSaveState = () => undefined
) {
  const currentById = new Map(
    currentRecords.map((record) => [record.lessonStudentRecordId, record])
  );
  let hasChanges = false;

  remoteRecords.forEach((remoteRecord) => {
    if (!remoteRecord?.lessonStudentRecordId) return;
    const recordId = remoteRecord.lessonStudentRecordId;
    const localRecord = currentById.get(recordId) ?? null;
    const mergedRecord = mergeRemoteAttendanceRecord(
      localRecord,
      remoteRecord,
      getSaveState(recordId)
    );
    if (!localRecord || JSON.stringify(localRecord) !== JSON.stringify(mergedRecord)) {
      currentById.set(recordId, mergedRecord);
      hasChanges = true;
    }
  });

  return hasChanges ? [...currentById.values()] : currentRecords;
}

export async function syncAttendanceRecordsAction({
  getNowIso = () => new Date().toISOString(),
  getSaveState,
  isDisposed = () => false,
  onRecords,
  onStatus,
  request,
  syncDate
}) {
  onStatus((current) => ({
    ...current,
    message: "출결 서버 확인 중",
    state: "syncing"
  }));

  try {
    const result = await request(
      `/api/lesson-records?date=${encodeURIComponent(syncDate)}`,
      8000,
      "출결 동기화가 지연되고 있습니다."
    );
    if (isDisposed()) {
      return { disposed: true, ok: false };
    }

    const remoteRecords = Array.isArray(result.records) ? result.records : [];
    onRecords((currentRecords) =>
      mergeRemoteAttendanceRecords(currentRecords, remoteRecords, getSaveState)
    );

    const lastSyncedAt = getNowIso();
    onStatus(() => ({
      lastSyncedAt,
      message: "출결 최신 상태",
      state: "synced"
    }));
    return {
      lastSyncedAt,
      ok: true,
      remoteRecordCount: remoteRecords.length
    };
  } catch (error) {
    const message = error.message || "출결 동기화 실패";
    if (!isDisposed()) {
      onStatus((current) => ({
        ...current,
        message,
        state: "failed"
      }));
    }
    return {
      disposed: isDisposed(),
      error,
      message,
      ok: false
    };
  }
}
