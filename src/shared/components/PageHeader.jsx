export function PageHeader({
  actions = null,
  actionsClassName = "",
  as: Component = "header",
  className = "",
  description = "",
  eyebrow = "",
  title,
  titleAdornment = null
}) {
  const headerClassName = ["pageTop", "pageHeader", className].filter(Boolean).join(" ");
  const actionClassName = ["pageActions", "pageHeaderActions", actionsClassName].filter(Boolean).join(" ");

  return (
    <Component className={headerClassName}>
      <div className="pageHeaderCopy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {titleAdornment ? (
          <div className="helpTipTitleRow">
            <h1>{title}</h1>
            {titleAdornment}
          </div>
        ) : <h1>{title}</h1>}
        {description ? <p className="muted">{description}</p> : null}
      </div>
      {actions ? <div className={actionClassName}>{actions}</div> : null}
    </Component>
  );
}
