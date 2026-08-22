import assert from "node:assert/strict";
import { isStaleDeploymentChunkError } from "../src/shared/utils/dynamicImportError.js";

assert.equal(isStaleDeploymentChunkError(new TypeError("Failed to fetch dynamically imported module: /assets/old.js")), true);
assert.equal(isStaleDeploymentChunkError("Importing a module script failed"), true);
assert.equal(isStaleDeploymentChunkError(new Error("error loading dynamically imported module")), true);
assert.equal(isStaleDeploymentChunkError(new Error("Supabase 저장 불일치")), false);
assert.equal(isStaleDeploymentChunkError(null), false);

console.log("dynamic import stale deployment error: deterministic contract passed");
