alter table if exists lesson_student_records
  add column if not exists notification_muted_parent boolean not null default false,
  add column if not exists notification_muted_student boolean not null default false,
  add column if not exists notification_muted_reason text;

comment on column lesson_student_records.notification_muted_parent is
  'When true, parent daily lesson Alimtalk jobs for this lesson/student record are not generated and pending jobs are canceled.';

comment on column lesson_student_records.notification_muted_student is
  'When true, student daily lesson Alimtalk jobs for this lesson/student record are not generated and pending jobs are canceled.';

comment on column lesson_student_records.notification_muted_reason is
  'Teacher-entered reason for suppressing daily lesson Alimtalk for this lesson/student.';
