import { useEffect, useId, useRef } from "react";

export function Modal({
  ariaLabel = "",
  backdropClassName = "",
  children,
  className = "",
  closeAriaLabel = "창 닫기",
  closeDisabled = false,
  hideCloseButton = false,
  hideHeader = false,
  onClose,
  scrollable = false,
  subtitle,
  title
}) {
  const backdropRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        const modalBackdrops = document.querySelectorAll(".modalBackdrop");
        const topmostModalBackdrop = modalBackdrops[modalBackdrops.length - 1];
        if (topmostModalBackdrop !== backdropRef.current) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        if (closeDisabled) return;
        onClose?.();
      }
    }

    window.addEventListener("keydown", handleEscapeKey, true);
    return () => window.removeEventListener("keydown", handleEscapeKey, true);
  }, [closeDisabled, onClose]);

  return (
    <div className={`modalBackdrop ${backdropClassName}`} ref={backdropRef}>
      <section
        aria-label={hideHeader ? ariaLabel || undefined : undefined}
        aria-labelledby={!hideHeader && title ? titleId : undefined}
        aria-modal="true"
        aria-busy={closeDisabled || undefined}
        className={["modalCard", scrollable ? "modalScrollable" : "", className].filter(Boolean).join(" ")}
        role="dialog"
      >
        {hideHeader ? null : (
          <div className="modalHeader">
            <div>
              <h2 id={titleId}>{title}</h2>
              {subtitle ? <p className="muted">{subtitle}</p> : null}
            </div>
            {hideCloseButton ? null : <button aria-label={closeAriaLabel} className="iconButton" disabled={closeDisabled} onClick={onClose} type="button">×</button>}
          </div>
        )}
        {scrollable ? <div className="modalScrollBody">{children}</div> : children}
      </section>
    </div>
  );
}

export function ModalFooter({
  align = "end",
  children,
  className = "",
  tone = "default",
  ...props
}) {
  return (
    <div
      className={["modalFooter", `align-${align}`, `tone-${tone}`, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
