import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
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
  appSource.split("function RoleLoginScreen({").length - 1,
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
const roleLoginStart = appSource.indexOf("function RoleLoginScreen({");
const roleLoginEnd = appSource.indexOf(
  "\nfunction AcademyReminderList(",
  roleLoginStart
);
assert.ok(roleLoginStart >= 0 && roleLoginEnd > roleLoginStart);
const roleLoginSource = appSource.slice(roleLoginStart, roleLoginEnd);
for (const boundary of [
  'useState(initialRole)',
  "async function submit(event)",
  "await onLogin(role, loginId.trim(), password.trim())",
  'const loginHelpId = "role-login-help"',
  'const loginErrorId = "role-login-error"',
  "setIsSubmitting(true)",
  "setIsSubmitting(false)"
]) {
  assert.ok(
    roleLoginSource.includes(boundary),
    `active role login boundary changed: ${boundary}`
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
