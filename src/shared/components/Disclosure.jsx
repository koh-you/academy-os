import { useState } from "react";
import "./Disclosure.css";

function joinClassNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function Disclosure({
  className = "",
  defaultOpen = false,
  open: openProp,
  onToggle,
  trigger,
  triggerClassName = "",
  bodyClassName = "",
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
      <button
        type="button"
        className={joinClassNames("disclosureTrigger", triggerClassName)}
        aria-expanded={open}
        onClick={handleToggle}
      >
        <span className="disclosureTriggerLabel">{trigger}</span>
        <span className="disclosureChevron" aria-hidden="true" />
      </button>
      <div className="disclosureBody">
        <div className={joinClassNames("disclosureBodyInner", bodyClassName)} aria-hidden={!open}>
          {children}
        </div>
      </div>
    </div>
  );
}
