import { useEffect } from "react";

export function Modal({
  backdropClassName = "",
  children,
  className = "",
  hideCloseButton = false,
  hideHeader = false,
  onClose,
  subtitle,
  title
}) {
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
      <section className={`modalCard ${className}`}>
        {hideHeader ? null : (
          <div className="modalHeader">
            <div>
              <h2>{title}</h2>
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
