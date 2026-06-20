-- Academy OS shared app state store for operational data not yet normalized.
-- Safe to run multiple times in Supabase SQL Editor.

create table if not exists app_state (
  state_key text primary key,
  state_value jsonb not null default 'null'::jsonb,
  updated_at timestamptz not null default now()
);
