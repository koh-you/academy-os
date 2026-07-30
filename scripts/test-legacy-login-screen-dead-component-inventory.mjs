import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);

assert.equal(
  appSource.split("function LoginScreen({").length - 1,
  1
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

const legacyStart = appSource.indexOf("function LoginScreen({");
const legacyEnd = appSource.indexOf(
  "\nfunction RoleLoginScreen(",
  legacyStart
);
assert.ok(legacyStart >= 0 && legacyEnd > legacyStart);
const legacySource = appSource.slice(legacyStart, legacyEnd);
for (const boundary of [
  'useState("student")',
  "async function submit(event)",
  "await onLogin(role, loginId.trim(), password.trim())",
  'const loginHelpId = "legacy-login-role-help"',
  'const loginErrorId = "legacy-login-error"'
]) {
  assert.ok(
    legacySource.includes(boundary),
    `legacy login boundary changed: ${boundary}`
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
    !legacySource.includes(forbiddenExternalEffect),
    `legacy login crossed an external effect: ${forbiddenExternalEffect}`
  );
}

console.log("legacy LoginScreen dead component inventory passed");
