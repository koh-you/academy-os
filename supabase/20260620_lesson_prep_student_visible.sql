-- Academy OS
-- Persist whether a lesson prep memo should be included in student Alimtalk drafts.
-- Safe to run multiple times in Supabase SQL Editor.

alter table if exists lesson_student_records
  add column if not exists prep_student_visible boolean not null default false;
