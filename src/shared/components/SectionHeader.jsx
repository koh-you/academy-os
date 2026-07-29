export function SectionHeader({
  actions = null,
  actionsClassName = "",
  as: Component = "div",
  className = "",
  density = "default",
  description = "",
  descriptionNode = null,
  eyebrow = "",
  meta = null,
  title,
  titleAs: Title = "h2"
}) {
  const headerClassName = [
    "sectionHeader",
    "sharedSectionHeader",
    density === "default" ? "" : density,
    className
  ].filter(Boolean).join(" ");
  const asideClassName = ["sectionHeaderAside", actionsClassName].filter(Boolean).join(" ");

  return (
    <Component className={headerClassName}>
      <div className="sectionHeaderCopy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <Title>{title}</Title>
        {descriptionNode || (description ? <p className="muted">{description}</p> : null)}
      </div>
      {meta || actions ? (
        <div className={asideClassName}>
          {meta}
          {actions}
        </div>
      ) : null}
    </Component>
  );
}
