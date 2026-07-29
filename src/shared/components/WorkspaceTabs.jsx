import "./WorkspaceTabs.css";

export function WorkspaceTabs({
  as: Component = "div",
  children,
  className = "",
  label
}) {
  const tabListClassName = ["workspaceTabs", className].filter(Boolean).join(" ");

  return (
    <Component aria-label={label} className={tabListClassName} role="tablist">
      {children}
    </Component>
  );
}
