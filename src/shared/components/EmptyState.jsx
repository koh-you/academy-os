export function EmptyState({ as: Component = "div", className = "emptyState", children }) {
  return <Component className={className}>{children}</Component>;
}
