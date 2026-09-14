import { InlineSaveStatus } from "./InlineSaveStatus.jsx";

export function StickySaveBar({
  children,
  className = "",
  label = "",
  message = "",
  saveState = "idle",
  statusExtras = null
}) {
  return (
    <aside
      aria-label={label ? `${label} 하단 고정 저장 바` : "하단 고정 저장 바"}
      className={["stickySaveBar", `stickySaveBar-${saveState}`, className].filter(Boolean).join(" ")}
    >
      <div className="stickySaveBarStatus" aria-live="polite">
        <InlineSaveStatus label={label} saveState={saveState} />
        {message ? <span title={message}>{message}</span> : null}
        {statusExtras}
      </div>
      <div className="stickySaveBarActions">{children}</div>
    </aside>
  );
}
