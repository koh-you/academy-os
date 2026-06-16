-- koh_you_math Lesson OS MVP schema
-- Run this in Supabase SQL Editor after creating a new project.

create extension if not exists pgcrypto;

create table if not exists students (
  student_id text primary key,
  name text not null,
  login_id text not null unique,
  pin text not null,
  status text not null default 'active' check (status in ('active', 'paused', 'graduated')),
  school_name text,
  grade text,
  birth_year integer,
  student_phone text,
  parent_phone text,
  default_class_template_id text,
  textbook text,
  special_note text,
  schedule_override text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists class_templates (
  class_template_id text primary key,
  name text not null,
  days text[] not null default '{}',
  start_time time not null,
  end_time time not null,
  color text not null default '#17213a',
  status text not null default 'active' check (status in ('active', 'paused', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists lessons (
  lesson_id text primary key,
  class_template_id text references class_templates(class_template_id),
  class_name text not null,
  lesson_date date not null,
  start_time time not null,
  end_time time not null,
  color text not null default '#17213a',
  student_ids text[] not null default '{}',
  status text not null default 'scheduled' check (status in ('scheduled', 'completed', 'canceled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists lesson_student_records (
  lesson_student_record_id text primary key,
  lesson_id text not null references lessons(lesson_id) on delete cascade,
  student_id text not null references students(student_id) on delete cascade,
  attendance_status text not null default 'pending' check (attendance_status in ('pending', 'present', 'late', 'absent', 'excused')),
  attendance_reason text,
  late_minutes integer,
  previous_homework text,
  next_homework text,
  incomplete_homework text,
  progress_note text,
  teacher_comment text,
  student_comment text,
  teacher_comment_ai_status text,
  student_comment_ai_status text,
  teacher_comment_send_status text,
  student_comment_send_status text,
  evaluation_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (lesson_id, student_id)
);

create table if not exists homeworks (
  homework_id text primary key,
  lesson_id text references lessons(lesson_id) on delete set null,
  student_id text not null references students(student_id) on delete cascade,
  homework_type text not null check (homework_type in ('previous', 'next', 'direct', 'makeup')),
  title text not null,
  subject text,
  assigned_date date,
  due_date date,
  student_status text not null default 'not_started' check (student_status in ('not_started', 'checked_done', 'need_help')),
  teacher_status text not null default 'unverified' check (teacher_status in ('unverified', 'verified', 'partial', 'missing')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists makeup_tasks (
  makeup_task_id text primary key,
  type text not null check (type in ('homework_makeup', 'absence_makeup', 'retest')),
  student_id text not null references students(student_id) on delete cascade,
  source_lesson_id text references lessons(lesson_id) on delete set null,
  source_homework_id text references homeworks(homework_id) on delete set null,
  title text not null,
  due_date date,
  status text not null default 'open' check (status in ('open', 'scheduled', 'resolved', 'canceled')),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists problem_books (
  problem_book_id text primary key,
  title text not null,
  subject text,
  publisher text,
  source_type text not null default 'manual' check (source_type in ('manual', 'pagesnap', 'pdf_import')),
  problem_count integer not null default 0,
  uploaded_academy text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists wrong_problem_statuses (
  wrong_problem_status_id text primary key,
  student_id text not null references students(student_id) on delete cascade,
  problem_book_id text references problem_books(problem_book_id) on delete set null,
  unit_name text,
  problem_number integer not null,
  status text not null default 'first' check (status in ('first', 'retry', 'wrong', 'mistake', 'unchecked')),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists exam_prep_rows (
  exam_prep_id text primary key,
  school_name text not null,
  grade text not null,
  subject text not null,
  textbook text,
  publisher text,
  exam_term text not null,
  exam_period text,
  math_exam_date date,
  scope text,
  sub_materials text,
  review text,
  revised_review text,
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists score_records (
  score_record_id text primary key,
  student_id text not null references students(student_id) on delete cascade,
  exam_type text not null check (exam_type in ('school_exam', 'mock_exam', 'academy_test')),
  exam_name text not null,
  subject text not null,
  score numeric,
  rank_text text,
  grade_text text,
  exam_date date,
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists school_events (
  school_event_id text primary key,
  school_name text not null,
  title text not null,
  event_type text not null check (event_type in ('exam_period', 'math_exam', 'vacation', 'opening', 'event')),
  start_date date not null,
  end_date date,
  math_subject_by_date jsonb not null default '{}'::jsonb,
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists notification_logs (
  notification_log_id text primary key,
  student_id text references students(student_id) on delete set null,
  lesson_id text references lessons(lesson_id) on delete set null,
  channel text not null,
  target text,
  recipient text,
  message text not null,
  provider text,
  status text not null default 'pending',
  result jsonb,
  error text,
  created_at timestamptz not null default now()
);

create index if not exists idx_lessons_date on lessons(lesson_date);
create index if not exists idx_lesson_records_lesson on lesson_student_records(lesson_id);
create index if not exists idx_homeworks_student on homeworks(student_id);
create index if not exists idx_makeup_tasks_student_status on makeup_tasks(student_id, status);
create index if not exists idx_wrong_problem_student on wrong_problem_statuses(student_id);
create index if not exists idx_exam_prep_school_grade on exam_prep_rows(school_name, grade);
create index if not exists idx_school_events_school_date on school_events(school_name, start_date);

