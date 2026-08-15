// @ts-check

/**
 * @typedef {"anthropic"|"openai"|"slack"|"solapi"|"storage"} ProviderResultSource
 */

/**
 * @typedef {Object} ProviderResultInput
 * @property {boolean} [dryRun]
 * @property {string|Error} [error]
 * @property {*} [providerResult]
 * @property {ProviderResultSource} source
 */

/**
 * @typedef {Object} ProviderResult
 * @property {boolean} dryRun
 * @property {string} [error]
 * @property {boolean} ok
 * @property {*} [providerResult]
 * @property {ProviderResultSource} source
 */

const supportedProviderResultSources = new Set(["anthropic", "openai", "slack", "solapi", "storage"]);

/**
 * Locks one result shape for every external provider call this project
 * makes (Solapi, Slack, OpenAI/Anthropic, Supabase Storage): `ok`/`source`
 * are always present, `dryRun` defaults to false, `providerResult` carries
 * the provider's own response only on success, `error` carries a plain
 * string only on failure. This does not replace or validate the
 * provider-specific fields that already exist on real call results
 * (Solapi reserve's `reserved`/`solapiCancellation`, AI's `provider`/
 * `model`, ...) — those stay wherever the call site already builds them.
 * Existing throw-based call sites are unaffected by this function's
 * existence; adopt it at a call site only when that site is being
 * changed anyway.
 * @param {ProviderResultInput} input
 * @returns {ProviderResult}
 */
export function createProviderResult({ dryRun = false, error, providerResult, source }) {
  if (!supportedProviderResultSources.has(source)) {
    throw new Error(`지원하지 않는 provider result source입니다: ${source}`);
  }
  if (error !== undefined) {
    return {
      dryRun,
      error: error instanceof Error ? error.message : String(error),
      ok: false,
      source
    };
  }
  return {
    dryRun,
    ok: true,
    providerResult,
    source
  };
}

/**
 * Runs `fn`, wrapping whatever it resolves to (or throws) in the shared
 * provider result envelope. Use only at call sites that want this
 * envelope — it catches instead of propagating, which is a real behavior
 * change from a bare throwing call, so existing call sites must not be
 * switched to this without updating every consumer of their return value.
 * @param {ProviderResultSource} source
 * @param {() => Promise<*>} fn
 * @param {{ dryRun?: boolean }} [options]
 * @returns {Promise<ProviderResult>}
 */
export async function runProviderCall(source, fn, { dryRun = false } = {}) {
  try {
    const providerResult = await fn();
    return createProviderResult({ dryRun, providerResult, source });
  } catch (error) {
    return createProviderResult({ dryRun, error, source });
  }
}
