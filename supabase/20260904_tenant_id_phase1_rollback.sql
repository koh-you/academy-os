-- 멀티테넌트 1단계 롤백 — 20260904_tenant_id_phase1.sql 되돌리기
--
-- 주의: tenant_id 컬럼을 제거하므로 신규 tenant 로 만든 데이터의 소속 정보가 사라진다.
-- 롤백은 신규 tenant 데이터를 만들기 전, 또는 신규 tenant 행을 먼저 삭제한 뒤에만 안전하다.
-- 존재하지 않는 테이블은 건너뛴다.

do $$
declare
  t text;
  tenant_tables text[] := array[
    'students', 'class_templates', 'lessons', 'school_events', 'exam_prep_rows',
    'academy_reminders', 'problem_books', 'resource_materials', 'test_sessions',
    'notification_jobs', 'notification_logs', 'student_intake_applicants',
    'special_lecture_applications', 'teacher_accounts',
    'lesson_student_records', 'attendance_events', 'homeworks', 'makeup_tasks',
    'wrong_problem_statuses', 'score_records', 'test_attempts', 'special_lecture_enrollments',
    'exam_analysis_runs', 'exam_analysis_sources', 'exam_analysis_questions',
    'exam_analysis_ai_jobs', 'exam_analysis_events', 'exam_post_submissions', 'exam_submission_files'
  ];
begin
  execute 'drop index if exists idx_lessons_tenant_date';
  execute 'drop index if exists idx_notification_jobs_tenant_status';

  foreach t in array tenant_tables loop
    if to_regclass('public.' || t) is null then
      raise notice 'skip (relation not found): %', t;
      continue;
    end if;
    execute format('drop index if exists %I', 'idx_' || t || '_tenant');
    execute format('alter table %I drop column if exists tenant_id', t);
  end loop;

  if to_regclass('public.teacher_accounts') is not null then
    execute 'alter table teacher_accounts drop constraint if exists teacher_accounts_role_check';
    execute 'alter table teacher_accounts drop column if exists role';
  end if;
end $$;
