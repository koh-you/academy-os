export function MetricCard({ active = false, hint, icon, label, onClick, tone = "default", value }) {
  const className = `${onClick ? "metricCard metricButton" : "metricCard"} metric-${tone}${active ? " active" : ""}`;
  const content = (
    <>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{hint}</small>
      </div>
      <b>{icon}</b>
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
