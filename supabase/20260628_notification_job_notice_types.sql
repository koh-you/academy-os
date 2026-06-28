alter table notification_jobs
  drop constraint if exists notification_jobs_notification_type_check;

alter table notification_jobs
  add constraint notification_jobs_notification_type_check
  check (notification_type in (
    'attendance',
    'daily_report',
    'parent_comment',
    'student_comment',
    'student_reminder',
    'schedule_reminder',
    'slack_daily_summary',
    'notice_parent',
    'notice_student'
  ));
