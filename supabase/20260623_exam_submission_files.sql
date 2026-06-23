create table if not exists exam_post_submissions (
  submission_id text primary key,
  target_id text not null,
  student_id text not null references students(student_id) on delete cascade,
  student_name text,
  school_name text,
  grade text,
  exam_prep_id text,
  exam_cycle text,
  exam_date date,
  due_date date,
  subject text,
  score text,
  feeling text,
  difficulty text,
  preparation text,
  good_part text,
  regret_reason text,
  needed_more text,
  next_goal text,
  wanted_help text,
  free_comment text,
  file_memo text,
  teacher_confirmed boolean not null default false,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists exam_submission_files (
  file_id text primary key,
  submission_id text references exam_post_submissions(submission_id) on delete cascade,
  target_id text not null,
  student_id text references students(student_id) on delete cascade,
  bucket_id text not null default 'exam-submissions',
  storage_path text not null,
  file_name text not null,
  file_type text,
  file_size integer,
  source text not null default 'student_camera',
  scan_batch_id text,
  detected_student_name text,
  match_status text not null default 'matched' check (match_status in ('matched', 'needs_review', 'unmatched')),
  uploaded_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists exam_submission_files_student_idx
  on exam_submission_files(student_id, uploaded_at desc);

create index if not exists exam_submission_files_target_idx
  on exam_submission_files(target_id, uploaded_at desc);

create index if not exists exam_submission_files_scan_batch_idx
  on exam_submission_files(scan_batch_id, match_status);
