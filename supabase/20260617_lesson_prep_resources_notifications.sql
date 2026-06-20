-- koh_you_math Lesson OS
-- Add lesson prep memo, resource library, and scheduled notification persistence.
-- Safe to run multiple times in Supabase SQL Editor.

alter table if exists lesson_student_records
  add column if not exists lesson_material text,
  add column if not exists lesson_content text,
  add column if not exists assignment_status text,
  add column if not exists preparation_memo text,
  add column if not exists prep_student_notice text,
  add column if not exists prep_student_visible boolean not null default false,
  add column if not exists prep_parent_visible boolean not null default false,
  add column if not exists prep_parent_notice text,
  add column if not exists prep_student_ai_status text,
  add column if not exists prep_parent_ai_status text;

create table if not exists resource_materials (
  resource_material_id text primary key,
  title text not null,
  material_type text not null default 'file' check (material_type in ('file', 'link', 'text')),
  subject text,
  description text,
  url text,
  content text,
  student_ids text[] not null default '{}',
  class_template_ids text[] not null default '{}',
  visibility text not null default 'teacher' check (visibility in ('teacher', 'student', 'parent', 'student_parent')),
  notify_by_alimtalk boolean not null default false,
  created_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists notification_jobs (
  notification_job_id text primary key,
  notification_type text not null check (notification_type in ('attendance', 'parent_comment', 'student_comment', 'schedule_reminder', 'slack_daily_summary')),
  student_id text references students(student_id) on delete set null,
  lesson_id text references lessons(lesson_id) on delete set null,
  lesson_student_record_id text references lesson_student_records(lesson_student_record_id) on delete set null,
  target text not null check (target in ('student', 'parent', 'teacher', 'slack')),
  recipient text,
  scheduled_at timestamptz,
  payload jsonb not null default '{}'::jsonb,
  preview_body text,
  status text not null default 'draft' check (status in ('draft', 'scheduled', 'sent', 'failed', 'canceled')),
  provider text,
  provider_message_id text,
  result jsonb,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_resource_materials_visibility on resource_materials(visibility);
create index if not exists idx_notification_jobs_status_schedule on notification_jobs(status, scheduled_at);
create index if not exists idx_notification_jobs_student on notification_jobs(student_id);
