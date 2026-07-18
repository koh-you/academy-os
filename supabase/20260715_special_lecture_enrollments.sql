create table if not exists public.special_lecture_enrollments (
  enrollment_id text primary key,
  special_lecture_guide_id text not null,
  guide_slug text,
  application_id text,
  student_id text not null,
  status text not null default 'active',
  session_ids jsonb not null default '[]'::jsonb,
  session_plans jsonb not null default '[]'::jsonb,
  plan_source text,
  plan_reviewed_at timestamptz,
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.special_lecture_enrollments
  add column if not exists special_lecture_guide_id text,
  add column if not exists guide_slug text,
  add column if not exists application_id text,
  add column if not exists student_id text,
  add column if not exists status text not null default 'active',
  add column if not exists session_ids jsonb not null default '[]'::jsonb,
  add column if not exists session_plans jsonb not null default '[]'::jsonb,
  add column if not exists plan_source text,
  add column if not exists plan_reviewed_at timestamptz,
  add column if not exists memo text,
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create unique index if not exists special_lecture_enrollments_guide_student_idx
  on public.special_lecture_enrollments (special_lecture_guide_id, student_id);

create index if not exists special_lecture_enrollments_guide_idx
  on public.special_lecture_enrollments (special_lecture_guide_id);

create index if not exists special_lecture_enrollments_student_idx
  on public.special_lecture_enrollments (student_id);

create index if not exists special_lecture_enrollments_application_idx
  on public.special_lecture_enrollments (application_id);
