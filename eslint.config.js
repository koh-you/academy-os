import globals from "globals";
import react from "eslint-plugin-react";

const runtimeRules = {
  "no-constant-binary-expression": "error",
  "no-dupe-args": "error",
  "no-dupe-keys": "error",
  "no-func-assign": "error",
  "no-import-assign": "error",
  "no-obj-calls": "error",
  "no-unreachable": "error",
  "no-unsafe-finally": "error",
  "no-undef": "error"
};

export default [
  {
    ignores: ["dist/**", "node_modules/**", "output/**", ".codex-temp/**", "api/data/**"]
  },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.es2025
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      },
      sourceType: "module"
    },
    plugins: { react },
    rules: {
      ...runtimeRules,
      "react/jsx-no-undef": "error",
      "react/jsx-uses-vars": "error"
    },
    settings: {
      react: { version: "detect" }
    }
  },
  {
    files: ["api/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.es2025,
        ...globals.node
      },
      sourceType: "module"
    },
    rules: runtimeRules
  }
];
