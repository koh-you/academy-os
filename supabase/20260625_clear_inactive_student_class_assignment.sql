update public.students
set default_class_template_id = null
where coalesce(status, 'active') in ('paused', 'withdrawn')
  and default_class_template_id is not null;
