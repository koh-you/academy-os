import "./FilterBar.css";

export function FilterBar({
  actions = null,
  as: Component = "div",
  children,
  className = "",
  label,
  result = null
}) {
  const filterBarClassName = ["sharedFilterBar", className].filter(Boolean).join(" ");

  return (
    <Component aria-label={label} className={filterBarClassName} role="group">
      {children}
      {result || actions ? (
        <div className="sharedFilterBarAside">
          {result}
          {actions}
        </div>
      ) : null}
    </Component>
  );
}
