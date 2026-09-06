// 로비 태블릿(키오스크) 기기를 등록할 SQL 을 생성한다.
// 토큰 원본은 이 출력에서 한 번만 보이고 DB 에는 sha256 만 저장된다.
// 원본 토큰은 그 태블릿의 VITE_KIOSK_TOKEN 으로 심는다.
//
//   node scripts/seed-kiosk-device.mjs --id kiosk_2f_lobby --label "2층 로비 태블릿" \
//     --tenants tenant_default,tenant_2c57...
//
// 선행: supabase/20260906_kiosk_devices.sql 실행.

import { createKioskToken, hashKioskToken } from "../src/shared/server/kioskDeviceRegistry.js";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) out[key] = true;
    else { out[key] = next; i += 1; }
  }
  return out;
}

function sqlText(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

const args = parseArgs(process.argv.slice(2));
const kioskId = typeof args.id === "string" ? args.id.trim() : "";
const label = typeof args.label === "string" ? args.label.trim() : "";
const tenantIds = typeof args.tenants === "string"
  ? [...new Set(args.tenants.split(",").map((value) => value.trim()).filter(Boolean))]
  : [];

if (!kioskId || !tenantIds.length) {
  console.error("--id 와 --tenants 는 필수입니다. 예: --id kiosk_2f_lobby --tenants tenant_default,tenant_xxx");
  process.exit(1);
}

const token = typeof args.token === "string" ? args.token : createKioskToken();
const tokenHash = hashKioskToken(token);
const tenantArray = `array[${tenantIds.map((id) => sqlText(id)).join(", ")}]::text[]`;

const sql = `-- 키오스크 기기 등록. Supabase SQL Editor 에서 실행.
-- kiosk_id: ${kioskId}
-- 담당 테넌트: ${tenantIds.join(", ")}
insert into kiosk_devices (kiosk_id, label, token_sha256, tenant_ids, is_active, created_at, updated_at)
values (
  ${sqlText(kioskId)},
  ${sqlText(label)},
  ${sqlText(tokenHash)},
  ${tenantArray},
  true,
  now(),
  now()
)
on conflict (kiosk_id) do update set
  label = excluded.label,
  token_sha256 = excluded.token_sha256,
  tenant_ids = excluded.tenant_ids,
  is_active = true,
  updated_at = now();
`;

console.error(
  [
    "",
    "=== 이 태블릿에 심을 토큰 (이 출력에서만 보입니다) ===",
    token,
    "",
    `이 값을 해당 태블릿이 여는 프론트 빌드의 VITE_KIOSK_TOKEN 에 넣으세요.`,
    "서버에는 sha256 만 저장되므로 분실하면 재발급해야 합니다.",
    "",
    "아래 SQL 을 Supabase SQL Editor 에서 실행하세요:",
    ""
  ].join("\n")
);
console.log(sql);
