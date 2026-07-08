alter table if exists lesson_student_records
  add column if not exists prep_memo_checked_at timestamptz,
  add column if not exists prep_memo_checked_source_date text,
  add column if not exists prep_memo_checked_source_record_id text;

comment on column lesson_student_records.prep_memo_checked_at is
  '선생님이 과거 수업메모를 확인 처리한 시각입니다.';

comment on column lesson_student_records.prep_memo_checked_source_date is
  '확인 처리한 과거 수업메모의 수업일입니다. 이후 수업에서는 이 날짜 이하의 이전 메모를 다시 표시하지 않습니다.';

comment on column lesson_student_records.prep_memo_checked_source_record_id is
  '확인 처리한 과거 수업메모의 lesson_student_record_id입니다.';
