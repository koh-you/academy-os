export const defaultAttendanceSettings = {
  lateGraceMinutes: 5
};

export function normalizeAttendanceSettings(settings = {}) {
  const rawLateGraceMinutes =
    settings?.lateGraceMinutes ?? defaultAttendanceSettings.lateGraceMinutes;
  const lateGraceMinutes = Number(rawLateGraceMinutes);
  return {
    ...defaultAttendanceSettings,
    ...(settings ?? {}),
    lateGraceMinutes:
      Number.isFinite(lateGraceMinutes) && lateGraceMinutes > 0
        ? lateGraceMinutes
        : defaultAttendanceSettings.lateGraceMinutes
  };
}
