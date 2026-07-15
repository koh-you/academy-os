alter table public.lessons
  add column if not exists lesson_track_id text,
  add column if not exists lesson_track_type text,
  add column if not exists special_lecture_guide_id text,
  add column if not exists special_lecture_session_id text,
  add column if not exists special_lecture_session_index integer;

create index if not exists idx_lessons_track_type_id
  on public.lessons(lesson_track_type, lesson_track_id);

create index if not exists idx_lessons_special_lecture_guide
  on public.lessons(special_lecture_guide_id, lesson_date);

create index if not exists idx_lessons_special_lecture_session
  on public.lessons(special_lecture_session_id);
