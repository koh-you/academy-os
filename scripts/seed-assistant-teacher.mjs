// 협력 교사(assistant) 계정 + 신규 tenant 시드용 SQL 을 생성한다.
// AI 는 운영 DB 에 직접 쓰지 않는다 — 이 스크립트는 SQL 문자열만 출력하고,
// 사용자가 Supabase SQL Editor 에 붙여넣어 실행한다.
//
//   node scripts/seed-assistant-teacher.mjs --login assistant1 --name "협력 교사" --password "임시비번" [--tenant tenant_<uuid>]
//
// 선행: supabase/20260904_tenant_id_phase1.sql 실행(= teacher_accounts.tenant_id, role 컬럼 존재).

import crypto from "node:crypto";

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

// api/server.js hashPassword 와 동일 포맷: pbkdf2_sha256$120000$<salt>$<hash>
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(String(password), salt, 120_000, 32, "sha256").toString("hex");
  return `pbkdf2_sha256$120000$${salt}$${hash}`;
}

function sqlText(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

const args = parseArgs(process.argv.slice(2));
const loginId = typeof args.login === "string" ? args.login.trim() : "";
const name = typeof args.name === "string" ? args.name.trim() : "";
const password = typeof args.password === "string" ? args.password : "";
const tenantId = typeof args.tenant === "string" && args.tenant.trim()
  ? args.tenant.trim()
  : `tenant_${crypto.randomUUID()}`;
const teacherId = `teacher_${crypto.randomUUID()}`;

if (!loginId || !name || !password) {
  console.error("--login, --name, --password 는 필수입니다.");
  process.exit(1);
}
if (password.length < 4) {
  console.error("비밀번호는 4자 이상이어야 합니다.");
  process.exit(1);
}

const passwordHash = hashPassword(password);

const sql = `-- 협력 교사(assistant) 계정 + 신규 tenant. Supabase SQL Editor 에서 실행.
-- tenant_id: ${tenantId}
-- login_id:  ${loginId}
insert into teacher_accounts (teacher_id, login_id, name, password_hash, tenant_id, role, is_active, created_at, updated_at)
values (
  ${sqlText(teacherId)},
  ${sqlText(loginId)},
  ${sqlText(name)},
  ${sqlText(passwordHash)},
  ${sqlText(tenantId)},
  'assistant',
  true,
  now(),
  now()
)
on conflict (teacher_id) do update set
  login_id = excluded.login_id,
  name = excluded.name,
  password_hash = excluded.password_hash,
  tenant_id = excluded.tenant_id,
  role = excluded.role,
  is_active = true,
  updated_at = now();
`;

console.error(
  "[assistant-teacher-seed]",
  JSON.stringify({ teacherId, loginId, name, tenantId, role: "assistant" })
);
process.stdout.write(sql);
