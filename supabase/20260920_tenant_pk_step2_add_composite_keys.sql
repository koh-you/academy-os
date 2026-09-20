-- [2/3] lessons·school_events·test_sessions 복합키 전환 — 덧붙이기 단계 (수업 중에도 실행 가능).
--
-- 아직 아무것도 지우지 않는다. 기존 기본키·FK 는 그대로 두고
--   (a) 세 표에 (tenant_id, id) unique 인덱스를 만들고
--   (b) 자식 표마다 (tenant_id, <id>) 복합 FK 를 기존 FK 옆에 나란히 건다.
-- 이 상태에서 서버 코드는 on_conflict=tenant_id,<id> 로 바꿔 배포할 수 있고(unique 인덱스가
-- 있으니 통한다), 옛 코드(on_conflict=<id>)도 옛 기본키가 남아 있어 계속 동작한다.
-- 그래서 코드 배포와 3단계 사이에 실패 창이 없다.
--
-- 1단계 사전 점검에서 mismatched 가 전부 0 이어야 한다(아니면 (b) 에서 실패하고 전부 되돌아간다).
-- 여러 번 실행해도 안전하다. 표가 작아 잠금은 순간이다.

do $$
declare
  parent record;
  r record;
  child_column text;
  parent_column text;
  index_name text;
  fk_name text;
  on_delete text;
begin
  -- (a) (tenant_id, id) unique 인덱스. 3단계에서 이 인덱스가 그대로 기본키가 된다.
  for parent in
    select * from (values
      ('lessons', 'lesson_id'),
      ('school_events', 'school_event_id'),
      ('test_sessions', 'test_session_id')
    ) as t(table_name, id_column)
  loop
    index_name := parent.table_name || '_tenant_pkey';
    if not exists (select 1 from pg_class where relname = index_name and relkind = 'i')
       and not exists (select 1 from pg_constraint where conname = index_name) then
      execute format('create unique index %I on %I (tenant_id, %I)', index_name, parent.table_name, parent.id_column);
    end if;
  end loop;

  -- (b) 단일 컬럼 FK 마다 복합 FK 를 나란히 건다(이름: 기존 이름 + _tenant). 삭제 동작은 그대로.
  for r in
    select
      c.conname,
      c.conrelid::regclass::text as child_table,
      c.confrelid::regclass::text as parent_table,
      c.conkey,
      c.confkey,
      c.confdeltype
    from pg_constraint c
    where c.contype = 'f'
      and c.confrelid in ('lessons'::regclass, 'school_events'::regclass, 'test_sessions'::regclass)
      and array_length(c.conkey, 1) = 1
  loop
    select attname into child_column from pg_attribute
      where attrelid = r.child_table::regclass and attnum = r.conkey[1];
    select attname into parent_column from pg_attribute
      where attrelid = r.parent_table::regclass and attnum = r.confkey[1];
    if not exists (
      select 1 from information_schema.columns
      where table_schema = 'public' and table_name = r.child_table and column_name = 'tenant_id'
    ) then
      raise exception '% 에 tenant_id 컬럼이 없어 복합 FK 를 걸 수 없습니다 (FK %)', r.child_table, r.conname;
    end if;

    fk_name := left(r.conname, 63 - length('_tenant')) || '_tenant';
    if exists (select 1 from pg_constraint where conname = fk_name) then
      continue;
    end if;

    -- 부모 행을 지울 때: cascade 는 그대로, set null 은 id 컬럼만 비운다(tenant_id 는 not null).
    on_delete := case r.confdeltype
      when 'c' then 'on delete cascade'
      when 'n' then format('on delete set null (%I)', child_column)
      when 'd' then format('on delete set default (%I)', child_column)
      when 'r' then 'on delete restrict'
      else ''
    end;

    execute format(
      'alter table %I add constraint %I foreign key (tenant_id, %I) references %I (tenant_id, %I) %s',
      r.child_table, fk_name, child_column, r.parent_table, parent_column, on_delete
    );
  end loop;
end
$$;

-- PostgREST 가 새 키를 바로 알도록 스키마 캐시를 다시 읽게 한다(Supabase 는 DDL 뒤 자동으로도 한다).
notify pgrst, 'reload schema';

-- 확인: 세 표에 *_tenant_pkey unique 인덱스, 자식 표에 *_tenant 복합 FK 가 옛 FK 옆에 있다.
select conrelid::regclass as child_table, conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where contype = 'f'
  and confrelid in ('lessons'::regclass, 'school_events'::regclass, 'test_sessions'::regclass)
order by conrelid::regclass::text, conname;
