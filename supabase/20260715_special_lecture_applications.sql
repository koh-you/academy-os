create table if not exists public.special_lecture_applications (
  application_id text primary key,
  special_lecture_guide_id text,
  guide_slug text,
  campaign text,
  source text not null default 'manual',
  source_submission_id text,
  form_id text,
  form_name text,
  status text not null default 'received',
  student_name text not null default '',
  school_name text,
  grade text,
  student_phone text,
  parent_phone text,
  selected_session text,
  memo text,
  raw_payload jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.special_lecture_applications
  add column if not exists special_lecture_guide_id text,
  add column if not exists guide_slug text,
  add column if not exists campaign text,
  add column if not exists source text not null default 'manual',
  add column if not exists source_submission_id text,
  add column if not exists form_id text,
  add column if not exists form_name text,
  add column if not exists status text not null default 'received',
  add column if not exists student_name text not null default '',
  add column if not exists school_name text,
  add column if not exists grade text,
  add column if not exists student_phone text,
  add column if not exists parent_phone text,
  add column if not exists selected_session text,
  add column if not exists memo text,
  add column if not exists raw_payload jsonb,
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create index if not exists special_lecture_applications_guide_idx
  on public.special_lecture_applications (special_lecture_guide_id);

create index if not exists special_lecture_applications_slug_idx
  on public.special_lecture_applications (guide_slug);

create index if not exists special_lecture_applications_status_idx
  on public.special_lecture_applications (status);

create index if not exists special_lecture_applications_created_at_idx
  on public.special_lecture_applications (created_at desc);
