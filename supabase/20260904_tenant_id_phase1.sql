-- 멀티테넌트 1단계 — tenant_id 컬럼 + teacher_accounts.role
-- docs/security/multi-tenant-phase1-plan.md (b) / docs/security/attendance-prototype-plan.md
--
-- Supabase SQL Editor 에서 실행. 실행 전 운영 스냅샷 확인.
-- 존재하지 않는 테이블은 건너뛴다(NOTICE 출력). 재실행해도 안전.
-- default 'tenant_default' 로 기존 행이 자동 백필된다(별도 update 불필요).

do $$
declare
  t text;
  tenant_tables text[] := array[
    -- 테넌트 소유 루트
    'students', 'class_templates', 'lessons', 'school_events', 'exam_prep_rows',
    'academy_reminders', 'problem_books', 'resource_materials', 'test_sessions',
    'notification_jobs', 'notification_logs', 'student_intake_applicants',
    'special_lecture_applications', 'teacher_accounts',
    -- FK 파생이지만 컬럼 직접 부착
    'lesson_student_records', 'attendance_events', 'homeworks', 'makeup_tasks',
    'wrong_problem_statuses', 'score_records', 'test_attempts', 'special_lecture_enrollments',
    'exam_analysis_runs', 'exam_analysis_sources', 'exam_analysis_questions',
    'exam_analysis_ai_jobs', 'exam_analysis_events', 'exam_post_submissions', 'exam_submission_files'
  ];
begin
  foreach t in array tenant_tables loop
    if to_regclass('public.' || t) is null then
      raise notice 'skip (relation not found): %', t;
      continue;
    end if;
    execute format(
      'alter table %I add column if not exists tenant_id text not null default %L',
      t, 'tenant_default'
    );
    execute format('create index if not exists %I on %I (tenant_id)', 'idx_' || t || '_tenant', t);
  end loop;

  -- teacher_accounts: 화면 역할
  if to_regclass('public.teacher_accounts') is not null then
    execute 'alter table teacher_accounts add column if not exists role text not null default ''owner''';
    if not exists (select 1 from pg_constraint where conname = 'teacher_accounts_role_check') then
      execute 'alter table teacher_accounts add constraint teacher_accounts_role_check check (role in (''owner'', ''assistant''))';
    end if;
  end if;

  -- 자주 쓰는 복합 인덱스 몇 개(단일 tenant_id 인덱스는 위 루프에서 생성됨)
  if to_regclass('public.lessons') is not null then
    execute 'create index if not exists idx_lessons_tenant_date on lessons (tenant_id, lesson_date)';
  end if;
  if to_regclass('public.notification_jobs') is not null then
    execute 'create index if not exists idx_notification_jobs_tenant_status on notification_jobs (tenant_id, status)';
  end if;
end $$;

-- 백필 검증 — 모든 값이 0 이어야 한다.
-- select 'students' t, count(*) c from students where tenant_id is null
-- union all select 'lessons', count(*) from lessons where tenant_id is null
-- union all select 'teacher_accounts', count(*) from teacher_accounts where tenant_id is null;

-- (선택, 앱 배포 후 권장) 실수 유입 방지 — 이후 INSERT 는 tenant_id 명시 필수
-- do $$
-- declare t text; tenant_tables text[] := array['students','lessons', /* ...위와 동일... */];
-- begin
--   foreach t in array tenant_tables loop
--     if to_regclass('public.' || t) is not null then
--       execute format('alter table %I alter column tenant_id drop default', t);
--     end if;
--   end loop;
-- end $$;
