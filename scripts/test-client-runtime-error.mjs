import assert from "node:assert/strict";
import {
  createClientRuntimeErrorRateLimiter,
  normalizeClientRuntimeErrorReport,
  redactSensitiveText
} from "../api/domain/clientRuntimeError.js";

const normalized = normalizeClientRuntimeErrorReport({
  errorId: "WEB-TEST",
  kind: "ReferenceError",
  message: `  missing${" ".repeat(5)}function  `,
  pathname: "/supplements",
  stack: "x".repeat(6000)
});

assert.equal(normalized.errorId, "WEB-TEST");
assert.equal(normalized.message, "missing function");
assert.equal(normalized.stack.length, 5000);
assert.equal(redactSensitiveText("Authorization: Bearer secret-token").includes("secret-token"), false);
assert.equal(redactSensitiveText("api_key=do-not-log"), "api_key=[REDACTED]");

const allow = createClientRuntimeErrorRateLimiter({ limit: 2, windowMs: 1000 });
assert.equal(allow("browser", 0), true);
assert.equal(allow("browser", 100), true);
assert.equal(allow("browser", 200), false);
assert.equal(allow("browser", 1200), true);

console.log("client runtime error reporting contract passed");
