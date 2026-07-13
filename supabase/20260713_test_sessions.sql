create table if not exists test_sessions (
  test_session_id text primary key,
  problem_book_id text,
  test_date date not null,
  class_template_id text,
  class_name text,
  test_kind text not null default 'daily',
  test_title text not null,
  subject text,
  unit text,
  total_questions integer,
  pass_correct_count integer,
  source text not null default 'manual',
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_test_sessions_test_date on test_sessions(test_date);
create index if not exists idx_test_sessions_class_template_id on test_sessions(class_template_id);
create index if not exists idx_test_sessions_problem_book_id on test_sessions(problem_book_id);

create table if not exists test_attempts (
  test_attempt_id text primary key,
  test_session_id text not null references test_sessions(test_session_id) on delete cascade,
  student_id text not null references students(student_id) on delete cascade,
  status text not null check (status in ('taken', 'not_taken')),
  correct_count integer,
  not_taken_reason text,
  pass_status text,
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (test_session_id, student_id)
);

create index if not exists idx_test_attempts_session_id on test_attempts(test_session_id);
create index if not exists idx_test_attempts_student_id on test_attempts(student_id);
