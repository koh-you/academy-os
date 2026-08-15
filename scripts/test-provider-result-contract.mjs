import assert from "node:assert/strict";
import {
  createProviderResult,
  runProviderCall
} from "../src/shared/contracts/providerResultContract.js";

assert.deepEqual(
  createProviderResult({ providerResult: { text: "안녕" }, source: "anthropic" }),
  { dryRun: false, ok: true, providerResult: { text: "안녕" }, source: "anthropic" }
);

assert.deepEqual(
  createProviderResult({ dryRun: true, providerResult: { scheduledMessageId: "id-1" }, source: "slack" }),
  { dryRun: true, ok: true, providerResult: { scheduledMessageId: "id-1" }, source: "slack" }
);

assert.deepEqual(
  createProviderResult({ error: "Solapi 요청 실패", source: "solapi" }),
  { dryRun: false, error: "Solapi 요청 실패", ok: false, source: "solapi" }
);

assert.deepEqual(
  createProviderResult({ error: new Error("SUPABASE_URL이 설정되지 않았습니다."), source: "storage" }),
  { dryRun: false, error: "SUPABASE_URL이 설정되지 않았습니다.", ok: false, source: "storage" }
);

assert.throws(
  () => createProviderResult({ providerResult: {}, source: "unknown-provider" }),
  /지원하지 않는 provider result source입니다: unknown-provider/
);

const successResult = await runProviderCall("openai", async () => ({ model: "gpt-4.1-mini", text: "결과" }));
assert.deepEqual(successResult, {
  dryRun: false,
  ok: true,
  providerResult: { model: "gpt-4.1-mini", text: "결과" },
  source: "openai"
});

const failureResult = await runProviderCall("openai", async () => {
  throw new Error("OPENAI_API_KEY 환경변수가 필요합니다.");
});
assert.deepEqual(failureResult, {
  dryRun: false,
  error: "OPENAI_API_KEY 환경변수가 필요합니다.",
  ok: false,
  source: "openai"
});

const dryRunResult = await runProviderCall(
  "slack",
  async () => ({ dryRun: true, scheduledMessageId: "" }),
  { dryRun: true }
);
assert.equal(dryRunResult.dryRun, true);
assert.equal(dryRunResult.ok, true);

for (const source of ["anthropic", "openai", "slack", "solapi", "storage"]) {
  const result = createProviderResult({ providerResult: null, source });
  assert.equal(result.source, source);
  assert.equal(result.ok, true);
}

console.log("provider result contract passed · 5 sources · success/error/dryRun shapes locked");
