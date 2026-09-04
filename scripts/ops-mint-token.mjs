// ops(기계) 토큰 발급. Claude/Codex 가 최소권한으로 운영 API 를 조사·수정할 때 사용.
//
//   node scripts/ops-mint-token.mjs --scope read --tenant tenant_default --ttl 2h --label claude-local
//   node scripts/ops-mint-token.mjs --scope cas-write --tenant tenant_abc --ttl 30m --label codex-fix
//   node scripts/ops-mint-token.mjs --scope highrisk --cross-tenant --ttl 15m --label operator --reason "퇴원버그 정정"
//
// OPS_TOKEN_SIGNING_SECRET 이 없으면 실패. 토큰 문자열만 stdout 한 줄로 출력하고, 로그에는 남기지 않는다.

import { loadEnvFile } from "../api/lib/loadEnv.js";
import { getRequestHeader } from "../src/shared/server/httpRouteAdapter.js";
import { createSessionRouteGuard } from "../src/shared/server/sessionRouteGuard.js";

loadEnvFile();

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) {
      out[key] = true;
    } else {
      out[key] = next;
      i += 1;
    }
  }
  return out;
}

function parseTtlMs(value) {
  if (!value) return undefined;
  const match = String(value).match(/^(\d+)(ms|s|m|h)?$/);
  if (!match) throw new Error(`ttl 형식이 올바르지 않습니다: ${value} (예: 900, 30m, 2h)`);
  const amount = Number(match[1]);
  const unit = match[2] || "s";
  const factor = { ms: 1, s: 1000, m: 60_000, h: 3_600_000 }[unit];
  return amount * factor;
}

const args = parseArgs(process.argv.slice(2));
const scope = args.scope;
const crossTenant = args["cross-tenant"] === true || args["cross-tenant"] === "true";
const tenantId = typeof args.tenant === "string" ? args.tenant : null;
const label = typeof args.label === "string" ? args.label : "";
const reason = typeof args.reason === "string" ? args.reason : "";

if (!["read", "cas-write", "highrisk"].includes(scope)) {
  console.error("--scope 는 read | cas-write | highrisk 중 하나여야 합니다.");
  process.exit(1);
}
if (!process.env.OPS_TOKEN_SIGNING_SECRET) {
  console.error("OPS_TOKEN_SIGNING_SECRET 이 필요합니다. (운영자 PC / 서버에만 설정)");
  process.exit(1);
}
if (scope === "highrisk" && !reason) {
  console.error("highrisk 토큰에는 --reason 이 필요합니다.");
  process.exit(1);
}
if (!crossTenant && !tenantId) {
  console.error("--tenant <id> 또는 --cross-tenant 중 하나가 필요합니다.");
  process.exit(1);
}

const { createOpsSessionToken } = createSessionRouteGuard({
  getRequestHeader,
  getSecret: () => process.env.APP_SESSION_SECRET || "unused-for-mint",
  getOpsSecret: () => process.env.OPS_TOKEN_SIGNING_SECRET
});

let ttlMs;
try {
  ttlMs = parseTtlMs(args.ttl);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

const token = createOpsSessionToken({ scope, tenantId, crossTenant, label: label || reason, ttlMs });

// 발급 사실만 stderr 로 감사 기록(토큰 값 제외).
console.error(
  "[ops-token-issued]",
  JSON.stringify({
    scope,
    tenantId: crossTenant ? null : tenantId,
    crossTenant,
    label,
    reason: reason || undefined,
    ttl: args.ttl || "(scope default)"
  })
);
// 토큰 값은 stdout 한 줄로만.
process.stdout.write(`${token}\n`);
