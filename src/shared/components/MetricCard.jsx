export function MetricCard({ active = false, badge = null, density = "default", hint, icon, label, onClick, tone = "default", value }) {
  const className = `${onClick ? "metricCard metricButton" : "metricCard"} metric-${tone} metricCard-${density}${active ? " active" : ""}`;
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
      <button className={className} onClick={onClick} type="button">
        {content}
      </button>
    );
  }
  return (
    <div className={className}>
      {content}
    </div>
  );
}
