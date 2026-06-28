alter table notification_jobs
  drop constraint if exists notification_jobs_status_check;

alter table notification_jobs
  add constraint notification_jobs_status_check
  check (status in ('draft', 'scheduled', 'sent', 'failed', 'canceled', 'dry_run', 'send_unconfirmed'));
