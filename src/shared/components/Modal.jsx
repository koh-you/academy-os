import { useEffect, useId } from "react";

export function Modal({
  ariaLabel = "",
  backdropClassName = "",
  children,
  className = "",
  hideCloseButton = false,
  hideHeader = false,
  onClose,
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
        className={`modalCard ${className}`}
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
        {children}
      </section>
    </div>
  );
}
