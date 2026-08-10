-- Persist per-exam-cycle school/grade exclusions without deleting enrolled-student rows.
-- Safe to run multiple times in Supabase SQL Editor.

alter table public.exam_prep_rows
  add column if not exists is_excluded boolean not null default false;

create index if not exists idx_exam_prep_active_cycle_school_grade
  on public.exam_prep_rows(exam_cycle, school_name, grade)
  where is_excluded = false;
