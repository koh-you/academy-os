-- 키오스크(로비 태블릿) 기기 등록부.
-- 태블릿 하나 = 행 하나. 기기마다 고유 토큰을 갖고, 자기 tenant_ids 범위만 볼 수 있다.
--
-- 이 테이블은 의도적으로 tenant 스코핑 대상이 아니다(여러 테넌트를 가로지르는 것이 존재 이유).
-- 그래서 src/shared/server/tenantScope.js 의 TENANT_SCOPED_TABLES 에 넣지 않는다.
--
-- 실행: Supabase SQL Editor 에 그대로 붙여넣기. 여러 번 실행해도 안전하다.

create table if not exists kiosk_devices (
  kiosk_id text primary key,
  label text not null default '',
  token_sha256 text not null unique,
  tenant_ids text[] not null default '{}',
  is_active boolean not null default true,
  last_seen_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists kiosk_devices_token_sha256_idx on kiosk_devices (token_sha256);
create index if not exists kiosk_devices_active_idx on kiosk_devices (is_active);

-- 기기에 담당 테넌트가 하나도 없으면 아무 학생도 못 보므로, 활성 기기는 최소 1개를 요구한다.
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'kiosk_devices_active_needs_tenant'
  ) then
    alter table kiosk_devices
      add constraint kiosk_devices_active_needs_tenant
      check (is_active = false or array_length(tenant_ids, 1) >= 1);
  end if;
end
$$;
