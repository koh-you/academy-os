import "./ListCard.css";

function joinClassNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function ListCard({
  active = false,
  as: Component = "article",
  children,
  className = "",
  density = "default",
  tone = "default",
  ...props
}) {
  return (
    <Component
      className={joinClassNames(
        "listCard",
        `listCard-${density}`,
        `listCard-${tone}`,
        active ? "active" : "",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ListCardHeader({ as: Component = "div", children, className = "", ...props }) {
  return (
    <Component className={joinClassNames("listCardHeader", className)} {...props}>
      {children}
    </Component>
  );
}

export function ListCardBody({ as: Component = "div", children, className = "", ...props }) {
  return (
    <Component className={joinClassNames("listCardBody", className)} {...props}>
      {children}
    </Component>
  );
}

export function ListCardActions({ as: Component = "div", children, className = "", ...props }) {
  return (
    <Component className={joinClassNames("listCardActions", className)} {...props}>
      {children}
    </Component>
  );
}
