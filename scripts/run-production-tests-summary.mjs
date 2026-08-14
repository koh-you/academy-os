import { runFlatTestList } from "./run-production-tests-flat.mjs";

const result = await runFlatTestList();
if (result.ok) {
  console.log(result.summary);
  process.exit(0);
}

console.error("production tests failed");
console.error(result.failureOutput || result.summary);
process.exit(result.exitCode || 1);
