import "./SelectableCard.css";

export function SelectableCard({ active = false, density = "default", onClick, tone = "default", className = "", children, ...props }) {
  const cls = ["selectableCard", `selectableCard-${density}`, tone !== "default" ? `selectableCard-${tone}` : "", active ? "active" : "", className].filter(Boolean).join(" ");
  if (onClick) {
    return <button type="button" className={cls} aria-pressed={active} onClick={onClick} {...props}>{children}</button>;
  }
  return <div className={cls} {...props}>{children}</div>;
}
