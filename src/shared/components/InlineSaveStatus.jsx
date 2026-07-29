export const saveStateLabels = {
  idle: "저장 전",
  dirty: "변경됨",
  saving: "저장 중",
  verifying: "서버 반영 확인 중",
  saved: "저장 완료",
  failed: "저장 실패"
};

export function normalizeSaveState(saveState) {
  return Object.prototype.hasOwnProperty.call(saveStateLabels, saveState) ? saveState : "idle";
}

export function getAggregateSaveState(states = []) {
  const normalizedStates = states.map(normalizeSaveState).filter((state) => state !== "idle");
  if (normalizedStates.includes("saving")) return "saving";
  if (normalizedStates.includes("verifying")) return "verifying";
  if (normalizedStates.includes("failed")) return "failed";
  if (normalizedStates.includes("dirty")) return "dirty";
  if (normalizedStates.includes("saved")) return "saved";
  return "idle";
}

export function InlineSaveStatus({ className = "", label = "", saveState = "idle" }) {
  const normalizedSaveState = normalizeSaveState(saveState);
  const classes = ["saveState", `save-${normalizedSaveState}`, "inlineSaveStatus", className].filter(Boolean).join(" ");
  return (
    <small aria-atomic="true" aria-live="polite" className={classes} role="status">
      {label ? `${label} · ` : ""}{saveStateLabels[normalizedSaveState]}
    </small>
  );
}
