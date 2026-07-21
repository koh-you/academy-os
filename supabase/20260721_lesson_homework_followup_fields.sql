alter table public.lesson_student_records
  add column if not exists homework_followup_method text,
  add column if not exists homework_followup_text text,
  add column if not exists homework_followup_source_homework_id text;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'lesson_student_records_homework_followup_method_check'
      and conrelid = 'public.lesson_student_records'::regclass
  ) then
    alter table public.lesson_student_records
      add constraint lesson_student_records_homework_followup_method_check
      check (
        homework_followup_method is null
        or homework_followup_method in ('next_lesson', 'stay_after')
      );
  end if;
end
$$;

comment on column public.lesson_student_records.homework_followup_method is
  'Structured homework follow-up method. next_lesson or stay_after; arrival_makeup remains a makeup_tasks source.';

comment on column public.lesson_student_records.homework_followup_text is
  'Teacher-reviewed homework text snapshot used for the follow-up notice.';

comment on column public.lesson_student_records.homework_followup_source_homework_id is
  'Soft reference to the source homework. Kept with the text snapshot even if the source homework is later removed.';
