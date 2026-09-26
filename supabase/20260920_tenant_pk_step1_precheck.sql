-- [1/3] lessons·school_events·test_sessions 복합키 전환 — 사전 점검 (읽기 전용, 언제든 실행 가능).
--
-- 2026-09-20. exam_prep_rows(09-18) 와 같은 이유: 자동 생성 id 가 tenant 마다 같을 수 있어
-- 기본키를 (tenant_id, id) 로 바꾼다. 세 표를 참조하는 FK 9개도 복합키로 바꾸는데, 그러려면
-- 자식 행의 tenant_id 가 부모 행의 tenant_id 와 같아야 한다. 어긋난 행이 있으면 2단계가
-- 실패하므로 여기서 먼저 센다.
--
-- 결과 해석: mismatched 가 전부 0 이면 2단계로. 0 이 아니면 그 수만 알려주세요(값은 필요 없음).
-- FK 목록은 실제 DB(pg_constraint)에서 뽑으므로 저장소 파일과 어긋나도 빠짐없이 본다.

create temp table if not exists tenant_pk_precheck (
  fk text,
  child_rows bigint,
  mismatched bigint
);
truncate tenant_pk_precheck;

do $$
declare
  r record;
  child_column text;
  parent_column text;
  total bigint;
  bad bigint;
begin
  for r in
    select
      c.conname,
      c.conrelid::regclass::text as child_table,
      c.confrelid::regclass::text as parent_table,
      c.conkey,
      c.confkey
    from pg_constraint c
    where c.contype = 'f'
      and c.confrelid in ('lessons'::regclass, 'school_events'::regclass, 'test_sessions'::regclass)
      and array_length(c.conkey, 1) = 1   -- 아직 단일 컬럼인 FK 만(복합 FK 는 이미 전환된 것)
  loop
    select attname into child_column from pg_attribute
      where attrelid = r.child_table::regclass and attnum = r.conkey[1];
    select attname into parent_column from pg_attribute
      where attrelid = r.parent_table::regclass and attnum = r.confkey[1];

    execute format('select count(*) from %I where %I is not null', r.child_table, child_column) into total;
    execute format(
      'select count(*) from %I c where c.%I is not null and not exists (
         select 1 from %I p where p.tenant_id = c.tenant_id and p.%I = c.%I)',
      r.child_table, child_column, r.parent_table, parent_column, child_column
    ) into bad;

    insert into tenant_pk_precheck values (
      format('%s.%s → %s.%s (%s)', r.child_table, child_column, r.parent_table, parent_column, r.conname),
      total,
      bad
    );
  end loop;
end
$$;

select * from tenant_pk_precheck order by fk;
