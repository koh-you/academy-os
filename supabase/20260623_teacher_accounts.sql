create table if not exists public.teacher_accounts (
  teacher_id text primary key,
  login_id text not null unique,
  name text not null default '고태영T',
  password_hash text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists teacher_accounts_login_id_idx
  on public.teacher_accounts (login_id)
  where is_active = true;

alter table public.teacher_accounts enable row level security;

drop policy if exists "teacher_accounts_service_role_all" on public.teacher_accounts;

create policy "teacher_accounts_service_role_all"
  on public.teacher_accounts
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
