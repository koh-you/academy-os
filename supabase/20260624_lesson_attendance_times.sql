alter table if exists lesson_student_records
  add column if not exists check_in_at timestamptz,
  add column if not exists check_in_time text,
  add column if not exists check_out_at timestamptz,
  add column if not exists check_out_time text;
