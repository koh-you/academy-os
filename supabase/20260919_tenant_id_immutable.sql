-- tenant 표의 행이 다른 tenant 로 넘어가는 것을 DB 에서 막는다 (2026-09-19).
--
-- 서버의 upsertRows 는 PostgREST 에 `resolution=merge-duplicates` 로 보내면서 tenant_id 를
-- 현재 요청 tenant 로 도장 찍는다. 기본키가 tenant 를 모르는 표(lessons·school_events·
-- test_sessions 등)에서 협력 교사가 원장과 같은 id 로 저장하면, 원장 행의 tenant_id 와
-- 내용이 협력 교사 것으로 **덮어써져** 원장 달력에서 수업이 사라진다(2026-09-19 감사).
--
-- UPDATE 로 tenant_id 가 바뀌려 하면 예외를 던진다. insert 는 그대로(새 행은 자기 tenant),
-- delete 는 그대로(tenant 필터를 이미 탄다). 같은 tenant 안의 갱신은 영향 없다.
-- 여러 번 실행해도 안전하다.

create or replace function public.forbid_tenant_id_change()
returns trigger
language plpgsql
as $$
begin
  if new.tenant_id is distinct from old.tenant_id then
    raise exception 'tenant_id 는 바꿀 수 없습니다 (% → %). 다른 tenant 의 행을 덮어쓰려 했습니다.',
      old.tenant_id, new.tenant_id
      using errcode = 'check_violation';
  end if;
  return new;
end
$$;

do $$
declare
  t text;
  tenant_tables text[] := array[
    'students', 'class_templates', 'lessons', 'school_events', 'exam_prep_rows',
    'academy_reminders', 'problem_books', 'resource_materials', 'test_sessions',
    'notification_jobs', 'notification_logs', 'student_intake_applicants',
    'special_lecture_applications', 'teacher_accounts', 'app_state',
    'lesson_student_records', 'attendance_events', 'homeworks', 'makeup_tasks',
    'wrong_problem_statuses', 'score_records', 'test_attempts', 'special_lecture_enrollments',
    'exam_analysis_runs', 'exam_analysis_sources', 'exam_analysis_questions',
    'exam_analysis_ai_jobs', 'exam_analysis_events', 'exam_post_submissions', 'exam_submission_files',
    'problem_bank_books', 'problem_bank_units', 'problem_bank_items', 'problem_bank_regions', 'problem_bank_attempts'
  ];
begin
  foreach t in array tenant_tables loop
    if to_regclass('public.' || t) is null then
      continue;
    end if;
    if not exists (
      select 1 from information_schema.columns
      where table_schema = 'public' and table_name = t and column_name = 'tenant_id'
    ) then
      continue;
    end if;
    execute format('drop trigger if exists %I on public.%I', t || '_tenant_id_immutable', t);
    execute format(
      'create trigger %I before update of tenant_id on public.%I for each row execute function public.forbid_tenant_id_change()',
      t || '_tenant_id_immutable', t
    );
  end loop;
end
$$;

-- 확인: 트리거가 걸린 표 목록.
select event_object_table as table_name
from information_schema.triggers
where trigger_name like '%_tenant_id_immutable'
group by event_object_table
order by 1;
