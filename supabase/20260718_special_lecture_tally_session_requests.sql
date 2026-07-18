alter table public.special_lecture_applications
  add column if not exists requested_session_plans jsonb not null default '[]'::jsonb;

comment on column public.special_lecture_applications.requested_session_plans is
  'Tally에서 학생이 제출한 수강 회차와 희망 시간 신청 초안. 선생님 확정 전에는 수업 생성 원천으로 사용하지 않는다.';

alter table public.special_lecture_enrollments
  add column if not exists plan_source text,
  add column if not exists plan_reviewed_at timestamptz;

comment on column public.special_lecture_enrollments.plan_source is
  '학생별 회차 계획의 시작 원천. tally_request는 선생님 검토 저장 전 수업 생성을 막는다.';

comment on column public.special_lecture_enrollments.plan_reviewed_at is
  '선생님이 학생별 회차와 시간을 확인하고 회차 계획 저장을 완료한 시각.';
