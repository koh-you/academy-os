import "./AsyncOperationStatus.css";

export const asyncOperationStateLabels = {
  idle: "대기",
  loading: "처리 중",
  success: "완료",
  partial: "일부 확인 필요",
  error: "실패"
};

export function normalizeAsyncOperationState(state) {
  return Object.prototype.hasOwnProperty.call(asyncOperationStateLabels, state) ? state : "idle";
}

export function AsyncOperationStatus({
  action = null,
  as: Component = "div",
  className = "",
  description = "",
  label = "",
  state = "idle",
  title = "",
  ...props
}) {
  const normalizedState = normalizeAsyncOperationState(state);
  const statusTitle = title || [label, asyncOperationStateLabels[normalizedState]].filter(Boolean).join(" · ");
  const classes = ["asyncOperationStatus", className].filter(Boolean).join(" ");

  return (
    <Component
      aria-atomic="true"
      aria-busy={normalizedState === "loading" ? "true" : undefined}
      aria-live={normalizedState === "error" ? "assertive" : "polite"}
      className={classes}
      data-state={normalizedState}
      role={normalizedState === "error" ? "alert" : "status"}
      {...props}
    >
      <div className="asyncOperationStatusCopy">
        {statusTitle ? <strong>{statusTitle}</strong> : null}
        {description ? <span>{description}</span> : null}
      </div>
      {action ? <div className="asyncOperationStatusAction">{action}</div> : null}
    </Component>
  );
}

