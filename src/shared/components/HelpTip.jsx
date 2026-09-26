import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import "./HelpTip.css";

// 가끔 필요한 설명을 화면에 상시 노출하지 않고 물음표 트리거 뒤에 둔다.
// 마우스는 hover, 키보드는 focus, 터치는 클릭으로 열고 Esc·바깥 클릭·포커스 이탈로 닫는다.
// 설명 문구는 항상 DOM 에 있고(닫혔을 때 visibility:hidden) 트리거가 aria-describedby 로 가리키므로
// 스크린리더는 트리거에 도달하는 순간 설명을 읽는다 — 열림 상태는 보이는 쪽만 바꾼다.

// 트리거와 말풍선 사이 간격, 그리고 뷰포트 가장자리에 남겨 두는 여백.
const BUBBLE_GAP = 6;
const VIEWPORT_MARGIN = 8;

export function HelpTip({ className = "", label, text, triggerClassName = "" }) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const bubbleRef = useRef(null);
  const tooltipId = useId();

  // 2026-09-25 · 말풍선은 position: fixed 로 띄운다.
  // absolute 로 두면 `overflow: clip|hidden|auto|scroll` 인 조상(시험분석 프롬프트 카드,
  // 스크롤 모달 본문 …) 경계에서 잘린다 — 카드보다 말풍선이 넓으면 가로로 미는 보정만으로는
  // 해결되지 않는다. fixed 는 그 조상의 클리핑을 벗어나므로 위치를 트리거 사각형에서 직접 계산한다:
  // 기본은 트리거 아래·왼쪽 정렬, 좌우로 넘치면 뷰포트 안으로 당기고, 아래 공간이 모자라면 위로 뒤집는다.
  const placeBubble = useCallback(() => {
    const trigger = triggerRef.current;
    const bubble = bubbleRef.current;
    if (!trigger || !bubble) return;
    // 잘라내는 쪽은 스크롤바를 뺀 레이아웃 뷰포트다(innerWidth 는 스크롤바를 포함한다).
    const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
    const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
    const anchor = trigger.getBoundingClientRect();

    // transform·filter·contain 을 가진 조상이 있으면 fixed 의 containing block 이 뷰포트가 아니다.
    // 0,0 에 한 번 놓고 실제 사각형을 재서 그 원점을 구한 뒤 뷰포트 좌표를 원점 기준으로 바꾼다.
    bubble.style.left = "0px";
    bubble.style.top = "0px";
    const origin = bubble.getBoundingClientRect();
    const bubbleWidth = origin.width;
    const bubbleHeight = origin.height;

    let left = anchor.left;
    if (left + bubbleWidth > viewportWidth - VIEWPORT_MARGIN) left = viewportWidth - VIEWPORT_MARGIN - bubbleWidth;
    if (left < VIEWPORT_MARGIN) left = VIEWPORT_MARGIN;

    let top = anchor.bottom + BUBBLE_GAP;
    const flippedTop = anchor.top - BUBBLE_GAP - bubbleHeight;
    if (top + bubbleHeight > viewportHeight - VIEWPORT_MARGIN && flippedTop >= VIEWPORT_MARGIN) top = flippedTop;
    if (top + bubbleHeight > viewportHeight - VIEWPORT_MARGIN) top = viewportHeight - VIEWPORT_MARGIN - bubbleHeight;
    if (top < VIEWPORT_MARGIN) top = VIEWPORT_MARGIN;

    bubble.style.left = `${Math.round(left - origin.left)}px`;
    bubble.style.top = `${Math.round(top - origin.top)}px`;
  }, []);

  useLayoutEffect(() => {
    if (!open) return undefined;
    placeBubble();
    // 열려 있는 동안 트리거가 움직이면 따라간다. 모달 본문·표처럼 안쪽 스크롤 컨테이너의
    // scroll 이벤트는 버블링하지 않으므로 capture 로 받는다.
    function handleReflow() {
      placeBubble();
    }
    window.addEventListener("scroll", handleReflow, true);
    window.addEventListener("resize", handleReflow);
    return () => {
      window.removeEventListener("scroll", handleReflow, true);
      window.removeEventListener("resize", handleReflow);
    };
  }, [open, placeBubble, text]);

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
      // 2026-09-25 · Esc 를 가로채는 것은 이 설명이 정말 '열려 있는 가장 안쪽 레이어' 일 때뿐이다.
      // hover 로만 떠 있는 설명까지 Esc 를 삼키면 인쇄 미리보기·오답 보드처럼 Esc 로 닫는 화면이 멈춘다.
      const ownsEscape = pinned || containerRef.current?.contains(document.activeElement);
      setPinned(false);
      setOpen(false);
      if (!ownsEscape) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [open, pinned]);

  function revealFromHoverOrFocus() {
    setOpen(true);
  }

  function hideFromHoverOrFocus() {
    if (pinned) return;
    setOpen(false);
  }

  // 2026-09-25 · 클릭으로 고정한 설명도 포커스가 떠나면 닫는다. 키보드 사용자가 Tab 으로 넘어갔는데
  // 말풍선만 떠 있으면 그 뒤 내용을 가린다.
  function hideFromBlur() {
    setPinned(false);
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
        onBlur={hideFromBlur}
        onClick={toggleFromClick}
        onFocus={revealFromHoverOrFocus}
        onMouseEnter={revealFromHoverOrFocus}
        onMouseLeave={hideFromHoverOrFocus}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true">?</span>
      </button>
      <span
        className={["helpTipBubble", open ? "helpTipBubble-open" : ""].filter(Boolean).join(" ")}
        id={tooltipId}
        ref={bubbleRef}
        role="tooltip"
      >
        {text}
      </span>
    </span>
  );
}
