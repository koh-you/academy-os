-- Cleanup legacy Sunday makeup lessons after moving exam prep lessons to lesson_type = 'examPrep'.
-- Apply only after reviewing the preview counts below.
-- The delete is guarded: active notification jobs for these lessons will abort the transaction.

-- Preview legacy lessons and related rows.
select
  l.lesson_id,
  l.lesson_date,
  l.start_time,
  l.end_time,
  l.lesson_type,
  l.class_name,
  l.lesson_topic,
  l.source_school_event_id,
  (
    select count(*)
    from public.lesson_student_records r
    where r.lesson_id = l.lesson_id
  ) as lesson_record_count,
  (
    select count(*)
    from public.homeworks h
    where h.lesson_id = l.lesson_id or h.linked_from_lesson_id = l.lesson_id
  ) as homework_count,
  (
    select count(*)
    from public.notification_jobs n
    where n.lesson_id = l.lesson_id
  ) as notification_job_count,
  (
    select count(*)
    from public.notification_jobs n
    where n.lesson_id = l.lesson_id
      and coalesce(n.status, '') not in ('sent', 'failed', 'canceled', 'cancelled', 'deleted')
  ) as active_notification_job_count
from public.lessons l
where l.lesson_type = 'examSundayMakeup'
   or l.lesson_id like 'lesson_exam_sunday_makeup_%'
   or l.source_school_event_id like 'generated:sunday_makeup:%'
order by l.lesson_date, l.start_time, l.lesson_id;

begin;

do $$
begin
  if exists (
    select 1
    from public.notification_jobs n
    join public.lessons l on l.lesson_id = n.lesson_id
    where (
      l.lesson_type = 'examSundayMakeup'
      or l.lesson_id like 'lesson_exam_sunday_makeup_%'
      or l.source_school_event_id like 'generated:sunday_makeup:%'
    )
      and coalesce(n.status, '') not in ('sent', 'failed', 'canceled', 'cancelled', 'deleted')
  ) then
    raise exception 'Active notification_jobs exist for legacy examSundayMakeup lessons. Cancel or reconcile them before cleanup.';
  end if;
end $$;

delete from public.lessons
where lesson_type = 'examSundayMakeup'
   or lesson_id like 'lesson_exam_sunday_makeup_%'
   or source_school_event_id like 'generated:sunday_makeup:%';

commit;
