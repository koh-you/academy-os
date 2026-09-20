-- [3/3] lessons·school_events·test_sessions 복합키 전환 — 교체 단계 (수업 없는 시간대에 실행).
--
-- 전제: 2단계가 끝났고, on_conflict=tenant_id,<id> 코드(PR)가 배포돼 있다.
--   (a) 옛 단일 컬럼 FK 를 지운다(복합 FK 가 이미 옆에 있으니 참조 무결성은 유지된다).
--   (b) 옛 기본키(id 하나)를 지우고, 2단계의 (tenant_id, id) unique 인덱스를 그대로 기본키로 올린다.
-- 이 뒤로 tenant 가 다르면 같은 id 의 수업·학사일정·시험 세션이 공존한다.
-- 한 트랜잭션이라 중간에 실패하면 전부 되돌아간다. 여러 번 실행해도 안전하다.

do $$
declare
  parent record;
  r record;
  twin text;
  pk_name text;
  new_pk text;
begin
  -- (a) 옛 FK 제거. 짝(복합 FK)이 없으면 멈춘다 — 2단계가 안 된 것.
  for r in
    select c.conname, c.conrelid::regclass::text as child_table
    from pg_constraint c
    where c.contype = 'f'
      and c.confrelid in ('lessons'::regclass, 'school_events'::regclass, 'test_sessions'::regclass)
      and array_length(c.conkey, 1) = 1
  loop
    twin := left(r.conname, 63 - length('_tenant')) || '_tenant';
    if not exists (select 1 from pg_constraint where conname = twin) then
      raise exception '복합 FK % 가 없습니다. 2단계(step2_add_composite_keys)를 먼저 실행하세요.', twin;
    end if;
    execute format('alter table %I drop constraint %I', r.child_table, r.conname);
  end loop;

  -- (b) 기본키 교체.
  for parent in
    select * from (values ('lessons'), ('school_events'), ('test_sessions')) as t(table_name)
  loop
    new_pk := parent.table_name || '_tenant_pkey';
    select conname into pk_name from pg_constraint
      where conrelid = parent.table_name::regclass and contype = 'p';
    if pk_name = new_pk then
      continue;  -- 이미 교체됨
    end if;
    if not exists (select 1 from pg_class where relname = new_pk and relkind = 'i') then
      raise exception '% unique 인덱스가 없습니다. 2단계를 먼저 실행하세요.', new_pk;
    end if;
    if pk_name is not null then
      execute format('alter table %I drop constraint %I', parent.table_name, pk_name);
    end if;
    execute format('alter table %I add constraint %I primary key using index %I',
      parent.table_name, new_pk, new_pk);
  end loop;
end
$$;

-- PostgREST 가 새 키를 바로 알도록 스키마 캐시를 다시 읽게 한다(Supabase 는 DDL 뒤 자동으로도 한다).
notify pgrst, 'reload schema';

-- 확인: 세 표의 기본키가 (tenant_id, id) 이고, 자식 FK 는 전부 (tenant_id, …) 복합키다.
select conrelid::regclass as table_name, contype, conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where (conrelid in ('lessons'::regclass, 'school_events'::regclass, 'test_sessions'::regclass) and contype = 'p')
   or (contype = 'f' and confrelid in ('lessons'::regclass, 'school_events'::regclass, 'test_sessions'::regclass))
order by contype desc, conrelid::regclass::text, conname;
