alter table lessons
  add column if not exists lesson_type text,
  add column if not exists lesson_topic text,
  add column if not exists source_makeup_task_id text,
  add column if not exists source_school_event_id text,
  add column if not exists source_label text;

create index if not exists idx_lessons_type_date on lessons(lesson_type, lesson_date);
