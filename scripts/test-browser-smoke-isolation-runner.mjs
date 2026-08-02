import assert from "node:assert/strict";
import {
  derivePreferredPorts,
  resolveIsolatedPorts,
  stablePathHash
} from "./run-browser-smoke-isolated.mjs";

assert.equal(stablePathHash("C:/worktree/a"), stablePathHash("c:/WORKTREE/A"));
assert.notEqual(stablePathHash("C:/worktree/a"), stablePathHash("C:/worktree/b"));

const preferred = derivePreferredPorts("C:/worktree/a");
assert.ok(preferred.frontendPort >= 5200 && preferred.frontendPort < 5900);
assert.ok(preferred.apiPort >= 8800 && preferred.apiPort < 9500);

await assert.rejects(
  () => resolveIsolatedPorts({ ACADEMY_SAFE_FRONTEND_PORT: "not-a-port" }),
  /ACADEMY_SAFE_FRONTEND_PORT/
);

console.log("browser smoke isolation runner contract passed");
