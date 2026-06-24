create table if not exists public.student_intake_applicants (
  applicant_id text primary key,
  source text not null default 'manual',
  source_submission_id text,
  form_id text,
  form_name text,
  status text not null default 'received',
  name text not null default '',
  birth_year integer,
  grade text,
  school_name text,
  student_phone text,
  parent_phone text,
  desired_class text,
  enrollment_status text,
  current_learning_process text,
  previous_semester_score text,
  special_note text,
  memo text,
  raw_payload jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists student_intake_applicants_status_idx
  on public.student_intake_applicants (status);

create index if not exists student_intake_applicants_created_at_idx
  on public.student_intake_applicants (created_at desc);

alter table if exists public.student_intake_applicants
  add column if not exists enrollment_status text,
  add column if not exists current_learning_process text,
  add column if not exists previous_semester_score text,
  add column if not exists special_note text;
