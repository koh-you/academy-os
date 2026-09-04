-- 멀티테넌트 1단계 롤백 — 20260904_tenant_id_phase1.sql 되돌리기
--
-- 주의: tenant_id 컬럼을 제거하므로 신규 tenant 로 만든 데이터의 소속 정보가 사라진다.
-- 롤백은 신규 tenant 데이터를 만들기 전, 또는 신규 tenant 행을 먼저 삭제한 뒤에만 안전하다.

drop index if exists idx_students_tenant;
drop index if exists idx_class_templates_tenant;
drop index if exists idx_lessons_tenant_date;
drop index if exists idx_lesson_records_tenant;
drop index if exists idx_attendance_events_tenant;
drop index if exists idx_homeworks_tenant;
drop index if exists idx_makeup_tasks_tenant;
drop index if exists idx_school_events_tenant;
drop index if exists idx_exam_prep_rows_tenant;
drop index if exists idx_academy_reminders_tenant;
drop index if exists idx_test_sessions_tenant;
drop index if exists idx_test_attempts_tenant;
drop index if exists idx_notification_jobs_tenant;
drop index if exists idx_resource_materials_tenant;
drop index if exists idx_teacher_accounts_tenant;

alter table teacher_accounts            drop column if exists role;
alter table teacher_accounts            drop column if exists tenant_id;
alter table students                    drop column if exists tenant_id;
alter table class_templates             drop column if exists tenant_id;
alter table lessons                     drop column if exists tenant_id;
alter table school_events               drop column if exists tenant_id;
alter table exam_prep_rows              drop column if exists tenant_id;
alter table academy_reminders           drop column if exists tenant_id;
alter table problem_books               drop column if exists tenant_id;
alter table resource_materials          drop column if exists tenant_id;
alter table test_sessions               drop column if exists tenant_id;
alter table notification_jobs           drop column if exists tenant_id;
alter table notification_logs           drop column if exists tenant_id;
alter table student_intake_applicants   drop column if exists tenant_id;
alter table special_lecture_applications drop column if exists tenant_id;
alter table lesson_student_records      drop column if exists tenant_id;
alter table attendance_events           drop column if exists tenant_id;
alter table homeworks                   drop column if exists tenant_id;
alter table makeup_tasks                drop column if exists tenant_id;
alter table wrong_problem_statuses      drop column if exists tenant_id;
alter table score_records               drop column if exists tenant_id;
alter table test_attempts               drop column if exists tenant_id;
alter table special_lecture_enrollments drop column if exists tenant_id;
alter table exam_analysis_runs          drop column if exists tenant_id;
alter table exam_analysis_sources       drop column if exists tenant_id;
alter table exam_analysis_questions     drop column if exists tenant_id;
alter table exam_analysis_ai_jobs       drop column if exists tenant_id;
alter table exam_analysis_events        drop column if exists tenant_id;
alter table exam_post_submissions       drop column if exists tenant_id;
alter table exam_submission_files       drop column if exists tenant_id;
