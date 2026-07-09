import { useId, useState } from "react";

function normalizeItems(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return value ? [value] : [];
}

function RiskDetail({ label, value }) {
  const items = normalizeItems(value);
  if (items.length === 0) return null;
  return (
    <div>
      <dt>{label}</dt>
      <dd>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </dd>
    </div>
  );
}

export function AutosaveRiskNotice({
  className = "",
  recommendation,
  risk,
  stopCondition,
  storage,
  title
}) {
  const [isOpen, setIsOpen] = useState(false);
  const detailId = useId();
  const classes = ["autosaveRiskNotice", className].filter(Boolean).join(" ");

  return (
    <aside className={classes} role="note" aria-label="자동저장 위험 안내">
      <div className="autosaveRiskSummary">
        <span className="autosaveRiskBadge">자동저장 위험</span>
        <strong className="autosaveRiskTitle">{title}</strong>
        <button
          aria-controls={detailId}
          aria-expanded={isOpen}
          className="autosaveRiskToggle"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? "닫기" : "왜 위험한가"}
        </button>
      </div>
      {isOpen ? (
        <dl className="autosaveRiskDetails" id={detailId}>
          <RiskDetail label="저장 원천" value={storage} />
          <RiskDetail label="현재 부작용" value={risk} />
          <RiskDetail label="중단 조건" value={stopCondition} />
          <RiskDetail label="권장 방향" value={recommendation} />
        </dl>
      ) : null}
    </aside>
  );
}
