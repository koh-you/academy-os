export const attendanceSyncFields = [
  "attendanceStatus",
  "attendanceReason",
  "checkInAt",
  "checkInTime",
  "checkOutAt",
  "checkOutTime",
  "lateMinutes",
  "updatedBy"
];

export function mergeRemoteAttendanceRecord(
  localRecord = null,
  remoteRecord = {},
  saveState = "saved"
) {
  if (!localRecord) return remoteRecord;
  if (!["dirty", "saving", "failed"].includes(saveState)) return remoteRecord;
  return attendanceSyncFields.reduce(
    (record, field) => ({ ...record, [field]: remoteRecord[field] }),
    localRecord
  );
}
