-- Persist frontend fields that were previously local-only or partially mapped.

alter table if exists students
  add column if not exists withdrawn_at timestamptz;

alter table if exists lesson_student_records
  add column if not exists behavior_tag text,
  add column if not exists homework_status text,
  add column if not exists needs_makeup boolean not null default false,
  add column if not exists needs_retest boolean not null default false;

alter table if exists homeworks
  add column if not exists status text,
  add column if not exists total_problems integer,
  add column if not exists assignment_status text,
  add column if not exists incomplete_homework text,
  add column if not exists checked_at text,
  add column if not exists verified_at text,
  add column if not exists linked_from_lesson_id text,
  add column if not exists linked_from_date date;
