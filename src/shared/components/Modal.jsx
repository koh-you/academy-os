import { useEffect, useId } from "react";

export function Modal({
  ariaLabel = "",
  backdropClassName = "",
  children,
  className = "",
  hideCloseButton = false,
  hideHeader = false,
  onClose,
  scrollable = false,
  subtitle,
  title
}) {
  const titleId = useId();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose?.();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [onClose]);

  return (
    <div className={`modalBackdrop ${backdropClassName}`}>
      <section
        aria-label={hideHeader ? ariaLabel || undefined : undefined}
        aria-labelledby={!hideHeader && title ? titleId : undefined}
        aria-modal="true"
        className={["modalCard", scrollable ? "modalScrollable" : "", className].filter(Boolean).join(" ")}
        role="dialog"
      >
        {hideHeader ? null : (
          <div className="modalHeader">
            <div>
              <h2 id={titleId}>{title}</h2>
              {subtitle ? <p className="muted">{subtitle}</p> : null}
            </div>
            {hideCloseButton ? null : <button className="iconButton" onClick={onClose} type="button">×</button>}
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
