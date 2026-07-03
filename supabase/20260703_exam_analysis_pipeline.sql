-- Exam analysis pipeline v2.
-- Apply this in the Supabase SQL editor before rebuilding the new analysis UI/API.
--
-- Design goal:
-- PDF -> question count detection -> teacher confirmation -> fixed 1..N rows
-- -> AI fills existing rows -> missing-row audit -> targeted retry.
--
-- The new pipeline intentionally does not reuse app_state.examAnalyses or the
-- old exam-analysis-sources bucket.

create table if not exists public.exam_analysis_runs (
  analysis_run_id text primary key,
  exam_prep_id text references public.exam_prep_rows(exam_prep_id) on delete set null,
  title text not null default '새 시험분석',
  school_name text,
  grade text,
  subject text,
  exam_term text,
  exam_cycle text,
  workflow_status text not null default 'draft' check (
    workflow_status in (
      'draft',
      'source_uploaded',
      'source_extracted',
      'question_count_detected',
      'question_count_confirmed',
      'rows_created',
      'ai_fill_running',
      'ai_filled',
      'missing_audit_needed',
      'missing_retry_running',
      'teacher_review',
      'completed',
      'failed',
      'archived'
    )
  ),
  question_count_status text not null default 'not_started' check (
    question_count_status in ('not_started', 'detected', 'teacher_confirmed')
  ),
  detected_question_count integer check (detected_question_count is null or detected_question_count > 0),
  detected_question_confidence numeric,
  detected_question_evidence jsonb not null default '[]'::jsonb,
  confirmed_question_count integer check (confirmed_question_count is null or confirmed_question_count > 0),
  confirmed_by text,
  confirmed_at timestamptz,
  rows_locked boolean not null default false,
  missing_question_numbers integer[] not null default '{}',
  extraction_summary jsonb not null default '{}'::jsonb,
  audit_summary jsonb not null default '{}'::jsonb,
  created_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.exam_analysis_sources (
  source_id text primary key,
  analysis_run_id text not null references public.exam_analysis_runs(analysis_run_id) on delete cascade,
  source_order integer not null default 1 check (source_order > 0),
  source_type text not null default 'pdf' check (source_type in ('pdf', 'image', 'text', 'manual_note')),
  bucket_id text not null default 'exam-analysis-pipeline-sources',
  storage_path text,
  original_file_name text,
  mime_type text,
  size_bytes bigint,
  page_count integer check (page_count is null or page_count > 0),
  extraction_status text not null default 'pending' check (
    extraction_status in ('pending', 'uploaded', 'extracting', 'extracted', 'failed')
  ),
  extracted_text text,
  page_text_ranges jsonb not null default '[]'::jsonb,
  page_image_manifest jsonb not null default '[]'::jsonb,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (analysis_run_id, source_order)
);

create table if not exists public.exam_analysis_questions (
  question_row_id text primary key,
  analysis_run_id text not null references public.exam_analysis_runs(analysis_run_id) on delete cascade,
  question_number integer not null check (question_number > 0),
  row_status text not null default 'empty' check (
    row_status in ('empty', 'ai_filled', 'missing', 'retry_failed', 'teacher_edited', 'confirmed')
  ),
  unit_name text,
  main_type text,
  sub_types jsonb not null default '[]'::jsonb,
  difficulty text,
  source_page integer,
  source_evidence jsonb not null default '{}'::jsonb,
  ai_fields jsonb not null default '{}'::jsonb,
  teacher_fields jsonb not null default '{}'::jsonb,
  final_fields jsonb not null default '{}'::jsonb,
  teacher_override boolean not null default false,
  manual_edit_count integer not null default 0,
  ai_provider text,
  ai_model text,
  ai_filled_at timestamptz,
  teacher_edited_at timestamptz,
  confirmed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (analysis_run_id, question_number)
);

create table if not exists public.exam_analysis_ai_jobs (
  ai_job_id text primary key,
  analysis_run_id text not null references public.exam_analysis_runs(analysis_run_id) on delete cascade,
  job_type text not null check (
    job_type in ('question_count_detection', 'row_fill', 'missing_audit', 'missing_retry', 'final_review')
  ),
  target_question_numbers integer[] not null default '{}',
  status text not null default 'queued' check (
    status in ('queued', 'running', 'succeeded', 'failed', 'canceled')
  ),
  provider text,
  model text,
  request_summary jsonb not null default '{}'::jsonb,
  response_summary jsonb not null default '{}'::jsonb,
  error text,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.exam_analysis_events (
  event_id text primary key,
  analysis_run_id text not null references public.exam_analysis_runs(analysis_run_id) on delete cascade,
  event_type text not null,
  message text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_exam_analysis_runs_exam_prep
  on public.exam_analysis_runs(exam_prep_id);

create index if not exists idx_exam_analysis_runs_status
  on public.exam_analysis_runs(workflow_status, updated_at desc);

create index if not exists idx_exam_analysis_sources_run
  on public.exam_analysis_sources(analysis_run_id, source_order);

create index if not exists idx_exam_analysis_questions_run_number
  on public.exam_analysis_questions(analysis_run_id, question_number);

create index if not exists idx_exam_analysis_questions_status
  on public.exam_analysis_questions(analysis_run_id, row_status);

create index if not exists idx_exam_analysis_ai_jobs_run_status
  on public.exam_analysis_ai_jobs(analysis_run_id, status, created_at desc);

create index if not exists idx_exam_analysis_events_run_created
  on public.exam_analysis_events(analysis_run_id, created_at desc);

create or replace function public.ensure_exam_analysis_question_rows(
  p_analysis_run_id text,
  p_question_count integer
)
returns integer
language plpgsql
as $$
declare
  inserted_count integer := 0;
begin
  if p_analysis_run_id is null or length(trim(p_analysis_run_id)) = 0 then
    raise exception 'analysis_run_id is required';
  end if;

  if p_question_count is null or p_question_count < 1 or p_question_count > 200 then
    raise exception 'question_count must be between 1 and 200';
  end if;

  insert into public.exam_analysis_questions (
    question_row_id,
    analysis_run_id,
    question_number,
    row_status
  )
  select
    p_analysis_run_id || '_q' || question_number::text,
    p_analysis_run_id,
    question_number,
    'empty'
  from generate_series(1, p_question_count) as question_number
  on conflict (analysis_run_id, question_number) do nothing;

  get diagnostics inserted_count = row_count;

  update public.exam_analysis_runs
  set
    confirmed_question_count = p_question_count,
    question_count_status = 'teacher_confirmed',
    workflow_status = 'rows_created',
    rows_locked = true,
    updated_at = now()
  where analysis_run_id = p_analysis_run_id;

  return inserted_count;
end;
$$;

insert into storage.buckets (id, name, public)
values ('exam-analysis-pipeline-sources', 'exam-analysis-pipeline-sources', false)
on conflict (id) do update
set public = excluded.public;
