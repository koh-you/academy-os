import "./EmptyState.css";

function joinClassNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function EmptyState({
  action = null,
  as: Component = "div",
  children,
  className = "emptyState",
  description = "",
  title = "",
  tone = "neutral",
  ...props
}) {
  const hasStructuredContent = Boolean(title || description || action);

  return (
    <Component
      className={joinClassNames("emptyStateShell", hasStructuredContent && "structured", className)}
      data-tone={tone}
      {...props}
    >
      {hasStructuredContent ? (
        <>
          <div className="emptyStateCopy">
            {title ? <strong className="emptyStateTitle">{title}</strong> : null}
            {description ? <span className="emptyStateDescription">{description}</span> : null}
            {children ? <div className="emptyStateContent">{children}</div> : null}
          </div>
          {action ? <div className="emptyStateAction">{action}</div> : null}
        </>
      ) : children}
    </Component>
  );
}
