begin;

alter table public.makeup_tasks
  drop constraint if exists makeup_tasks_type_check;

alter table public.makeup_tasks
  add constraint makeup_tasks_type_check
  check (type in ('homework_makeup', 'absence_makeup', 'manual_makeup', 'retest'));

commit;
