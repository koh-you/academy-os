-- Run manually in the Supabase SQL Editor after reviewing this file.
-- Every INSERT/UPDATE/DELETE is broadcast to its server-only tenant topic.
-- Browser clients never receive the service role key or the database row payload.
create or replace function public.broadcast_lesson_student_record_change()
returns trigger
security definer
set search_path = ''
language plpgsql
as $$
declare
  scoped_tenant_id text;
begin
  scoped_tenant_id := coalesce(new.tenant_id, old.tenant_id)::text;
  perform realtime.broadcast_changes(
    'attendance:' || scoped_tenant_id,
    'lesson_student_records_changed',
    tg_op,
    tg_table_name,
    tg_table_schema,
    new,
    old
  );
  return null;
end;
$$;

drop trigger if exists lesson_student_records_realtime_broadcast
on public.lesson_student_records;

create trigger lesson_student_records_realtime_broadcast
after insert or update or delete on public.lesson_student_records
for each row execute function public.broadcast_lesson_student_record_change();

-- Read-only verification:
select trigger_name, event_manipulation
from information_schema.triggers
where event_object_schema = 'public'
  and event_object_table = 'lesson_student_records'
  and trigger_name = 'lesson_student_records_realtime_broadcast'
order by event_manipulation;
