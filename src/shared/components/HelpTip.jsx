import { useEffect, useId, useRef, useState } from "react";
import "./HelpTip.css";

// 가끔 필요한 설명을 화면에 상시 노출하지 않고 물음표 트리거 뒤에 둔다.
// 마우스는 hover, 키보드는 focus, 터치는 클릭으로 열고 Esc·바깥 클릭으로 닫는다.
// 설명 문구는 항상 DOM 에 있고(닫혔을 때 display:none) 트리거가 aria-describedby 로 가리키므로
// 스크린리더는 트리거에 도달하는 순간 설명을 읽는다 — 열림 상태는 보이는 쪽만 바꾼다.
export function HelpTip({ className = "", label, text, triggerClassName = "" }) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [shift, setShift] = useState(0);
  const containerRef = useRef(null);
  const bubbleRef = useRef(null);
  const tooltipId = useId();

  useEffect(() => {
    if (!open) {
      setShift(0);
      return;
    }
    const bubble = bubbleRef.current;
    if (!bubble) return;
    // 최소 처리: 기본은 트리거 왼쪽 정렬로 열고, 화면 밖으로 넘치는 만큼만 가로로 한 번 민다.
    // 오른쪽으로만 뒤집으면 390px 처럼 좁은 폭에서는 이번엔 왼쪽이 잘리므로 양쪽을 같은 식으로 본다.
    const margin = 8;
    const bounds = bubble.getBoundingClientRect();
    let nextShift = 0;
    if (bounds.right > window.innerWidth - margin) nextShift = window.innerWidth - margin - bounds.right;
    if (bounds.left + nextShift < margin) nextShift = margin - bounds.left;
    setShift(Math.round(nextShift));
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    function handlePointerDown(event) {
      if (containerRef.current?.contains(event.target)) return;
      setPinned(false);
      setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    function handleKeyDown(event) {
      if (event.key !== "Escape") return;
      // 모달 안에서 열린 설명의 Esc 가 모달까지 닫지 않도록 가장 안쪽 레이어가 먼저 가져간다.
      event.preventDefault();
      event.stopImmediatePropagation();
      setPinned(false);
      setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [open]);

  function revealFromHoverOrFocus() {
    setOpen(true);
  }

  function hideFromHoverOrFocus() {
    if (pinned) return;
    setOpen(false);
  }

  function toggleFromClick() {
    if (pinned) {
      setPinned(false);
      setOpen(false);
      return;
    }
    setPinned(true);
    setOpen(true);
  }

  return (
    <span className={["helpTip", className].filter(Boolean).join(" ")} ref={containerRef}>
      <button
        aria-describedby={tooltipId}
        aria-expanded={open}
        aria-label={`${label} 설명`}
        className={["iconButton", "helpTipTrigger", triggerClassName].filter(Boolean).join(" ")}
        onBlur={hideFromHoverOrFocus}
        onClick={toggleFromClick}
        onFocus={revealFromHoverOrFocus}
        onMouseEnter={revealFromHoverOrFocus}
        onMouseLeave={hideFromHoverOrFocus}
        type="button"
      >
        <span aria-hidden="true">?</span>
      </button>
      <span
        className={["helpTipBubble", open ? "helpTipBubble-open" : ""].filter(Boolean).join(" ")}
        id={tooltipId}
        ref={bubbleRef}
        role="tooltip"
        style={shift ? { marginLeft: `${shift}px` } : undefined}
      >
        {text}
      </span>
    </span>
  );
}
