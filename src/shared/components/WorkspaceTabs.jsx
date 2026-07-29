import "./WorkspaceTabs.css";

export function WorkspaceTabs({
  as: Component = "div",
  children,
  className = "",
  label,
  variant = "primary"
}) {
  const tabListClassName = [
    "workspaceTabs",
    variant === "primary" ? "" : `workspaceTabs-${variant}`,
    className
  ].filter(Boolean).join(" ");

  return (
    <Component aria-label={label} className={tabListClassName} role="tablist">
      {children}
    </Component>
  );
}
