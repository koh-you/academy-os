create table if not exists attendance_events (
  attendance_event_id text primary key,
  lesson_id text references lessons(lesson_id) on delete set null,
  student_id text references students(student_id) on delete set null,
  lesson_student_record_id text references lesson_student_records(lesson_student_record_id) on delete set null,
  event_type text not null check (event_type in ('checkin', 'checkout', 'status', 'absent', 'excused', 'pending', 'completed')),
  source text not null default 'unknown',
  attendance_status text,
  checked_at timestamptz,
  check_in_at timestamptz,
  check_in_time text,
  check_out_at timestamptz,
  check_out_time text,
  attendance_reason text,
  late_minutes integer,
  actor_id text,
  record_before jsonb,
  record_after jsonb,
  alimtalk_status text,
  alimtalk_result jsonb,
  error text,
  created_at timestamptz not null default now()
);

create index if not exists idx_attendance_events_lesson_student
  on attendance_events(lesson_id, student_id, created_at desc);

create index if not exists idx_attendance_events_created
  on attendance_events(created_at desc);
