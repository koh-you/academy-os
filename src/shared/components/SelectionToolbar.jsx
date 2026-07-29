import "./SelectionToolbar.css";

export function SelectionToolbar({
  actions = null,
  className = "",
  dangerActions = null,
  description = "",
  label,
  selectedCount = 0,
  totalCount = null,
  unit = "명"
}) {
  const toolbarClassName = ["sharedSelectionToolbar", className].filter(Boolean).join(" ");
  const hasTotalCount = Number.isFinite(totalCount);

  return (
    <div className={toolbarClassName} role="group" aria-label={label}>
      <div className="sharedSelectionToolbarCopy">
        <strong>{label}</strong>
        <span>
          선택 {selectedCount}{unit}
          {hasTotalCount ? ` / 전체 ${totalCount}${unit}` : ""}
          {description ? ` · ${description}` : ""}
        </span>
      </div>
      {actions ? <div className="sharedSelectionToolbarActions">{actions}</div> : null}
      {dangerActions ? <div className="sharedSelectionToolbarDanger">{dangerActions}</div> : null}
    </div>
  );
}
