import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const roleLoginSource = await readFile(
  new URL("../src/app/RoleLoginScreen.jsx", import.meta.url),
  "utf8"
);

assert.equal(
  appSource.split("function LoginScreen({").length - 1,
  0
);
assert.equal(
  appSource.split("<LoginScreen").length - 1,
  0
);
assert.equal(
  roleLoginSource.split("export function RoleLoginScreen({").length - 1,
  1
);
assert.equal(
  appSource.split("<RoleLoginScreen").length - 1,
  1
);

assert.equal(
  appSource.split("legacy-login-role-help").length - 1,
  0
);
assert.equal(
  appSource.split("legacy-login-error").length - 1,
  0
);
for (const boundary of [
  'useState(initialRole)',
  'useState("")',
  "function selectRole(nextRole)",
  "setLoginId(\"\")",
  "setPassword(\"\")",
  "setError(\"\")",
  "async function submit(event)",
  "event.preventDefault()",
  "await onLogin(role, loginId.trim(), password.trim())",
  'const loginHelpId = "role-login-help"',
  'const loginErrorId = "role-login-error"',
  "setIsSubmitting(true)",
  "setIsSubmitting(false)",
  'aria-describedby={error ? `${loginHelpId} ${loginErrorId}` : loginHelpId}',
  "aria-invalid={Boolean(error) || undefined}",
  'className="loginError" id={loginErrorId} role="alert"',
  "disabled={isSubmitting}"
]) {
  assert.ok(
    roleLoginSource.includes(boundary),
    `active role login boundary changed: ${boundary}`
  );
}
for (const appLoginShellBoundary of [
  'from "./RoleLoginScreen.jsx"',
  "<RoleLoginScreen",
  "academyBrandName={academyBrandName}",
  "onLogin={handleLogin}"
]) {
  assert.ok(
    appSource.includes(appLoginShellBoundary),
    `App role login shell boundary changed: ${appLoginShellBoundary}`
  );
}
assert.equal(
  roleLoginSource.split("export function RoleLoginScreen({").length - 1,
  1
);
assert.equal(
  appSource.split('from "./RoleLoginScreen.jsx"').length - 1,
  1
);
assert.equal(
  appSource.split("<RoleLoginScreen").length - 1,
  1
);
for (const forbiddenLoginComponentEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "setSession",
  "persistTeacherSession",
  "localStorage",
  "Supabase",
  "Solapi",
  "notification_jobs"
]) {
  assert.ok(
    !roleLoginSource.includes(forbiddenLoginComponentEffect),
    `RoleLoginScreen crossed an auth side effect: ${forbiddenLoginComponentEffect}`
  );
}
for (const forbiddenExternalEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "Solapi",
  "notification_jobs"
]) {
  assert.ok(
    !roleLoginSource.includes(forbiddenExternalEffect),
    `active role login crossed an external effect: ${forbiddenExternalEffect}`
  );
}
for (const appOwnedAuthBoundary of [
  "async function handleLogin(role, loginId, password)",
  'postJson("/api/auth/login", { role, loginId, password })',
  "setSession(teacherSession)",
  "persistTeacherSession(teacherSession)",
  "setSession({",
  "function handleLogout()",
  "persistTeacherSession(null)",
  "<RoleLoginScreen",
  "onLogin={handleLogin}"
]) {
  assert.ok(
    appSource.includes(appOwnedAuthBoundary),
    `App-owned auth boundary moved: ${appOwnedAuthBoundary}`
  );
}

console.log("legacy LoginScreen removal and active RoleLoginScreen preservation passed");
