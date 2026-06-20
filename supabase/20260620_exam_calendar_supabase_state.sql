-- Academy OS exam prep and school calendar persistence fields.
-- Safe to run multiple times in Supabase SQL Editor.

alter table exam_prep_rows
  add column if not exists exam_cycle text,
  add column if not exists math_exam_dates jsonb not null default '[]'::jsonb,
  add column if not exists special_note text,
  add column if not exists source text,
  add column if not exists review_ai_status text,
  add column if not exists sub_textbook text;

update exam_prep_rows
set exam_cycle = coalesce(exam_cycle, exam_term)
where exam_cycle is null;

alter table school_events
  add column if not exists app_event_type text,
  add column if not exists color text,
  add column if not exists grade text,
  add column if not exists exam_cycle text,
  add column if not exists exam_subject text,
  add column if not exists event_payload jsonb not null default '{}'::jsonb;

create index if not exists idx_exam_prep_cycle_school_grade on exam_prep_rows(exam_cycle, school_name, grade);
create index if not exists idx_school_events_type_date on school_events(app_event_type, start_date);
