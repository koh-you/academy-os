export const attendanceKioskAutoConfirmSeconds = 5;

export function getAttendanceActionLabel(result = {}) {
  if (result.mode === "completed") return "이미 하원";
  if (result.mode === "checkOut") return "하원";
  const status = result.record?.attendanceStatus ?? "";
  if (status === "late") return "지각 등원";
  if (status === "absent") return "결석";
  if (status === "excused") return "인정결석";
  return "등원";
}

export function createAttendanceKioskDisplayModel({
  formatLessonDisplayName = () => "",
  pendingPreview = null,
  result = null
} = {}) {
  const resultTitle = result?.ok ? getAttendanceActionLabel(result) : "출결 체크 실패";
  const resultDetail = result?.ok
    ? `${result.student?.name ?? ""} · ${formatLessonDisplayName(result.lesson)} · ${result.checkedTime || ""}`
    : result?.message;
  const previewRequiresLessonSelection = Boolean(
    pendingPreview?.requiresLessonSelection ||
    pendingPreview?.mode === "selectLesson"
  );
  const previewLessonCandidates = Array.isArray(pendingPreview?.lessonCandidates)
    ? pendingPreview.lessonCandidates
    : [];
  const previewActionLabel = pendingPreview
    ? previewRequiresLessonSelection
      ? "수업 선택"
      : getAttendanceActionLabel(pendingPreview)
    : "";
  const previewVisitLabel = String(pendingPreview?.attendanceVisit?.label ?? "").trim();
  const previewDetail = pendingPreview?.ok
    ? previewRequiresLessonSelection
      ? `${pendingPreview.student?.name ?? ""} · 수업 선택 · ${pendingPreview.checkedTime || ""}`
      : `${pendingPreview.student?.name ?? ""} · ${formatLessonDisplayName(pendingPreview.lesson)} · ${pendingPreview.checkedTime || ""}`
    : "";

  return {
    previewActionLabel,
    previewDetail,
    previewLessonCandidates,
    previewRequiresLessonSelection,
    previewVisitLabel,
    resultDetail,
    resultTitle
  };
}
