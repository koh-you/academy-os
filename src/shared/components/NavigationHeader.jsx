export function NavigationHeader({
  actions = null,
  className = "",
  context = null,
  description = "",
  leading = null,
  title = "",
  titleAs: Title = "h1",
  titleNode = null,
  trailing = null
}) {
  const headerClassName = ["pageTop", "navigationHeader", className].filter(Boolean).join(" ");

  return (
    <header className={headerClassName}>
      <div className="navigationHeaderPrimary">
        {leading ? <div className="navigationHeaderLeading">{leading}</div> : null}
        <div className="navigationHeaderCopy">
          {titleNode || <Title>{title}</Title>}
          {description ? <p className="muted">{description}</p> : null}
        </div>
        {trailing ? <div className="navigationHeaderTrailing">{trailing}</div> : null}
      </div>
      {context ? <div className="navigationHeaderContext">{context}</div> : null}
      {actions ? <div className="navigationHeaderActions">{actions}</div> : null}
    </header>
  );
}
