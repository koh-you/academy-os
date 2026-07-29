import "./DataTableShell.css";

function joinClassNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function DataTableShell({
  as: Component = "div",
  children,
  className = "",
  label,
  tabIndex = 0,
  ...props
}) {
  return (
    <Component
      aria-label={label}
      className={joinClassNames("dataTableShell", className)}
      role="region"
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </Component>
  );
}
