-- exam_prep_rows 기본키를 (tenant_id, exam_prep_id) 복합키로 (2026-09-18).
--
-- 자동 생성 id 는 exam_prep_<고사>_<학교>_<학년>_<과목> 이라 원장과 협력 교사가 같은
-- 학교·학년을 가지면 id 가 같다. 기본키가 exam_prep_id 하나여서 협력 교사 쪽 insert 가
-- 원장 행과 충돌해 "저장 실패" 가 났다. tenant 가 다르면 같은 id 가 공존하게 한다.
-- 앱의 조회·수정·삭제는 이미 전부 tenant 필터를 타므로 코드 변경 없이 동작한다.
--
-- exam_analysis_runs.exam_prep_id 가 이 테이블을 참조(FK)하고 있어 FK 도
-- (tenant_id, exam_prep_id) 로 같이 바꾼다. 두 테이블 모두 tenant_id 를 이미 가진다.
--
-- 실행 순서: 이 SQL 을 먼저, 그 다음 코드 배포. 여러 번 실행해도 안전하다.

do $$
declare
  fk_name text;
  pk_name text;
begin
  -- 1) 옛 FK 제거(단일 컬럼 참조는 복합 PK 로 바꾸면 성립하지 않는다).
  for fk_name in
    select conname from pg_constraint
    where conrelid = 'exam_analysis_runs'::regclass
      and contype = 'f'
      and confrelid = 'exam_prep_rows'::regclass
  loop
    execute format('alter table exam_analysis_runs drop constraint %I', fk_name);
  end loop;

  -- 2) 기본키 교체.
  select conname into pk_name
  from pg_constraint
  where conrelid = 'exam_prep_rows'::regclass and contype = 'p';
  if pk_name is not null and pk_name <> 'exam_prep_rows_tenant_pkey' then
    execute format('alter table exam_prep_rows drop constraint %I', pk_name);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'exam_prep_rows_tenant_pkey') then
    alter table exam_prep_rows add constraint exam_prep_rows_tenant_pkey
      primary key (tenant_id, exam_prep_id);
  end if;

  -- 3) FK 를 복합키로 다시 건다. 참조가 끊긴 행(다른 tenant 를 가리키는 등)이 있으면
  --    실패하므로 그 경우 exam_prep_id 를 null 로 두고 다시 실행한다.
  if not exists (select 1 from pg_constraint where conname = 'exam_analysis_runs_exam_prep_tenant_fkey') then
    alter table exam_analysis_runs add constraint exam_analysis_runs_exam_prep_tenant_fkey
      foreign key (tenant_id, exam_prep_id)
      references exam_prep_rows (tenant_id, exam_prep_id)
      -- 시험정보를 지우면 분석 실행의 exam_prep_id 만 비운다. tenant_id 까지 null 이 되면
      -- not null 제약에 걸려 삭제 자체가 실패하므로 컬럼을 지정한다(PostgreSQL 15+).
      on delete set null (exam_prep_id);
  end if;
end
$$;

-- 4) 확인: 기본키가 (tenant_id, exam_prep_id), FK 가 복합키.
select conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where conrelid in ('exam_prep_rows'::regclass, 'exam_analysis_runs'::regclass)
  and contype in ('p', 'f')
order by conrelid::text, conname;
