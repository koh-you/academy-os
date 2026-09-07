-- app_state 테넌트 분리.
--
-- 지금 app_state 는 테넌트 구분이 없어서, 협력 교사 계정으로 로그인해도
-- 원장님의 정산·상담기록·성적·보고서까지 전부 읽힌다(실측 266 KB).
-- 다른 테이블(학생·수업·수업일지 등)은 전부 막혀 있는데 이것만 빠져 있었다.
--
-- state_key 하나였던 기본키를 (tenant_id, state_key) 로 바꿔서
-- 학원(선생님)마다 자기 설정·데이터를 따로 갖게 한다.
--
-- 실행 순서가 중요하다: 이 SQL 을 먼저 실행하고, 그 다음에 코드가 배포되어야 한다.
-- (컬럼이 없는 상태로 코드가 먼저 뜨면 조회가 500 으로 깨진다)
--
-- 여러 번 실행해도 안전하다.

-- 1) tenant_id 컬럼 추가 + 기존 행은 전부 원장님 소유로 채운다.
alter table app_state add column if not exists tenant_id text;
update app_state set tenant_id = 'tenant_default' where tenant_id is null;
alter table app_state alter column tenant_id set default 'tenant_default';
alter table app_state alter column tenant_id set not null;

-- 2) 기본키를 (tenant_id, state_key) 복합키로 교체.
do $$
declare
  primary_key_name text;
begin
  select conname into primary_key_name
  from pg_constraint
  where conrelid = 'app_state'::regclass and contype = 'p';

  if primary_key_name is not null and primary_key_name <> 'app_state_tenant_state_pkey' then
    execute format('alter table app_state drop constraint %I', primary_key_name);
  end if;

  if not exists (
    select 1 from pg_constraint where conname = 'app_state_tenant_state_pkey'
  ) then
    alter table app_state add constraint app_state_tenant_state_pkey
      primary key (tenant_id, state_key);
  end if;
end
$$;

create index if not exists app_state_tenant_idx on app_state (tenant_id);

-- 3) 확인. 모든 행이 tenant_default 이고 기본키가 복합키여야 한다.
select tenant_id, count(*) as rows from app_state group by tenant_id;
select conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where conrelid = 'app_state'::regclass and contype = 'p';
