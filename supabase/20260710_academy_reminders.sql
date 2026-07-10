create table if not exists academy_reminders (
  reminder_id text primary key,
  reminder_type text not null default 'custom' check (
    reminder_type in (
      'consultation',
      'student_consultation',
      'parent_consultation',
      'student_intake',
      'special_note',
      'parent_contact',
      'custom'
    )
  ),
  title text not null,
  reminder_date date not null,
  reminder_time time,
  student_id text references students(student_id) on delete set null,
  lesson_id text references lessons(lesson_id) on delete set null,
  school_event_id text references school_events(school_event_id) on delete set null,
  content text,
  status text not null default 'pending' check (status in ('pending', 'done', 'canceled')),
  priority text not null default 'normal' check (priority in ('low', 'normal', 'high')),
  slack_notify boolean not null default true,
  source text,
  source_payload jsonb not null default '{}'::jsonb,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_academy_reminders_date_status
  on academy_reminders(reminder_date, status);

create index if not exists idx_academy_reminders_student_date
  on academy_reminders(student_id, reminder_date);

create index if not exists idx_academy_reminders_lesson
  on academy_reminders(lesson_id);
