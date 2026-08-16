/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-orphans",
      comment: "Module is not imported by anything and does not import anything else. Likely dead code.",
      severity: "warn",
      from: {
        orphan: true,
        pathNot: [
          "\\.(test|spec)\\.(js|jsx)$",
          "^src/main\\.jsx$",
          "^api/server\\.js$",
          "^src/app/appConfig\\.js$",
          "\\.d\\.ts$"
        ]
      },
      to: {}
    },
    {
      name: "no-circular",
      comment: "Circular dependency — makes ownership and load order hard to reason about.",
      severity: "warn",
      from: {},
      to: { circular: true }
    }
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    tsPreCompilationDeps: true,
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"]
    }
  }
};
