import { useState } from "react";
import "./Disclosure.css";

function joinClassNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function DisclosureChevron({ open, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={joinClassNames("disclosureChevron", className)}
      data-open={open}
    />
  );
}

export function Disclosure({
  className = "",
  defaultOpen = false,
  open: openProp,
  onToggle,
  trigger,
  triggerClassName = "",
  bodyClassName = "",
  hideTrigger = false,
  collapsedContent = null,
  children,
  ...props
}) {
  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isControlled ? openProp : internalOpen;

  function handleToggle() {
    const next = !open;
    if (!isControlled) {
      setInternalOpen(next);
    }
    onToggle?.(next);
  }

  return (
    <div className={joinClassNames("disclosure", className)} data-open={open} {...props}>
      {!hideTrigger ? (
        <button
          type="button"
          className={joinClassNames("disclosureTrigger", triggerClassName)}
          aria-expanded={open}
          onClick={handleToggle}
        >
          <span className="disclosureTriggerLabel">{trigger}</span>
          <DisclosureChevron open={open} />
        </button>
      ) : null}
      <div className="disclosureBody">
        <div className={joinClassNames("disclosureBodyInner", bodyClassName)} aria-hidden={!open}>
          {children}
        </div>
      </div>
      {!open && collapsedContent ? (
        <div className="disclosureCollapsedSummary">{collapsedContent}</div>
      ) : null}
    </div>
  );
}
