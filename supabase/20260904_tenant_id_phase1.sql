-- 멀티테넌트 1단계 — tenant_id 컬럼 + teacher_accounts.role
-- docs/security/multi-tenant-phase1-plan.md (b) / docs/security/attendance-prototype-plan.md
--
-- Supabase SQL Editor 에서 실행. 실행 전 운영 스냅샷 확인.
-- default 'tenant_default' 로 기존 행이 자동 백필된다(별도 update 불필요).

-- 1) teacher_accounts: 소속 학원 + 화면 역할
alter table teacher_accounts add column if not exists tenant_id text not null default 'tenant_default';
alter table teacher_accounts add column if not exists role text not null default 'owner'
  check (role in ('owner', 'assistant'));

-- 2) 테넌트 소유 루트
alter table students                    add column if not exists tenant_id text not null default 'tenant_default';
alter table class_templates             add column if not exists tenant_id text not null default 'tenant_default';
alter table lessons                     add column if not exists tenant_id text not null default 'tenant_default';
alter table school_events               add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_prep_rows              add column if not exists tenant_id text not null default 'tenant_default';
alter table academy_reminders           add column if not exists tenant_id text not null default 'tenant_default';
alter table problem_books               add column if not exists tenant_id text not null default 'tenant_default';
alter table resource_materials          add column if not exists tenant_id text not null default 'tenant_default';
alter table test_sessions               add column if not exists tenant_id text not null default 'tenant_default';
alter table notification_jobs           add column if not exists tenant_id text not null default 'tenant_default';
alter table notification_logs           add column if not exists tenant_id text not null default 'tenant_default';
alter table student_intake_applicants   add column if not exists tenant_id text not null default 'tenant_default';
alter table special_lecture_applications add column if not exists tenant_id text not null default 'tenant_default';

-- 3) FK 파생이지만 컬럼 직접 부착
alter table lesson_student_records      add column if not exists tenant_id text not null default 'tenant_default';
alter table attendance_events           add column if not exists tenant_id text not null default 'tenant_default';
alter table homeworks                   add column if not exists tenant_id text not null default 'tenant_default';
alter table makeup_tasks                add column if not exists tenant_id text not null default 'tenant_default';
alter table wrong_problem_statuses      add column if not exists tenant_id text not null default 'tenant_default';
alter table score_records               add column if not exists tenant_id text not null default 'tenant_default';
alter table test_attempts               add column if not exists tenant_id text not null default 'tenant_default';
alter table special_lecture_enrollments add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_runs          add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_sources       add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_questions     add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_ai_jobs       add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_events        add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_post_submissions       add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_submission_files       add column if not exists tenant_id text not null default 'tenant_default';

-- 4) 인덱스
create index if not exists idx_students_tenant           on students(tenant_id);
create index if not exists idx_class_templates_tenant    on class_templates(tenant_id);
create index if not exists idx_lessons_tenant_date       on lessons(tenant_id, lesson_date);
create index if not exists idx_lesson_records_tenant     on lesson_student_records(tenant_id);
create index if not exists idx_attendance_events_tenant  on attendance_events(tenant_id, created_at desc);
create index if not exists idx_homeworks_tenant          on homeworks(tenant_id);
create index if not exists idx_makeup_tasks_tenant       on makeup_tasks(tenant_id);
create index if not exists idx_school_events_tenant      on school_events(tenant_id);
create index if not exists idx_exam_prep_rows_tenant     on exam_prep_rows(tenant_id);
create index if not exists idx_academy_reminders_tenant  on academy_reminders(tenant_id);
create index if not exists idx_test_sessions_tenant      on test_sessions(tenant_id);
create index if not exists idx_test_attempts_tenant      on test_attempts(tenant_id);
create index if not exists idx_notification_jobs_tenant  on notification_jobs(tenant_id, status);
create index if not exists idx_resource_materials_tenant on resource_materials(tenant_id);
create index if not exists idx_teacher_accounts_tenant   on teacher_accounts(tenant_id);

-- 5) 백필 검증 (모두 0 이어야 함)
-- select 'students' t, count(*) c from students where tenant_id is null
-- union all select 'lessons', count(*) from lessons where tenant_id is null
-- union all select 'teacher_accounts', count(*) from teacher_accounts where tenant_id is null;

-- 6) (선택, 앱 배포 후 권장) 실수 유입 방지 — 이후 INSERT 는 tenant_id 명시 필수
-- alter table students                    alter column tenant_id drop default;
-- alter table lessons                     alter column tenant_id drop default;
-- ... 나머지 대상 테이블도 동일 ...
