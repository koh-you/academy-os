export function MetricCard({ active = false, badge = null, className = "", density = "default", hint, icon, label, onClick, tone = "default", value }) {
  const metricClassName = [
    onClick ? "metricCard metricButton" : "metricCard",
    `metric-${tone}`,
    `metricCard-${density}`,
    active ? "active" : "",
    className
  ].filter(Boolean).join(" ");
  const content = (
    <>
      <div>
        <span>
          {label}
          {badge ? <em className="metricCardBadge">{badge}</em> : null}
        </span>
        <strong>{value}</strong>
        {hint ? <small>{hint}</small> : null}
      </div>
      {icon ? <b>{icon}</b> : null}
    </>
  );
  if (onClick) {
    return (
      <button aria-pressed={active} className={metricClassName} onClick={onClick} type="button">
        {content}
      </button>
    );
  }
  return (
    <div className={metricClassName}>
      {content}
    </div>
  );
}
