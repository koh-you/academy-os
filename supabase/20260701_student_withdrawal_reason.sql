-- Persist student withdrawal reason and instructor comment.

alter table if exists students
  add column if not exists withdrawal_reason text,
  add column if not exists withdrawal_comment text;
