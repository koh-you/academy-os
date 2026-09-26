import { InlineSaveStatus } from "./InlineSaveStatus.jsx";

// hideStatusPill: 상태 pill 을 다른 곳(예: 헤더 우상단)이 이미 그릴 때 켠다. 바에는 message 텍스트만 남고,
// message 가 비어 있으면 상태 영역은 빈 채로 두어 aria-live 영역이 사라졌다 생기지 않게 한다.
export function StickySaveBar({
  children,
  className = "",
  hideStatusPill = false,
  label = "",
  message = "",
  saveState = "idle"
}) {
  return (
    <aside
      aria-label={label ? `${label} 하단 고정 저장 바` : "하단 고정 저장 바"}
      className={["stickySaveBar", `stickySaveBar-${saveState}`, className].filter(Boolean).join(" ")}
    >
      <div className="stickySaveBarStatus" aria-live="polite">
        {hideStatusPill ? null : <InlineSaveStatus label={label} saveState={saveState} />}
        {message ? <span title={message}>{message}</span> : null}
      </div>
      <div className="stickySaveBarActions">{children}</div>
    </aside>
  );
}
