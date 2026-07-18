alter table public.special_lecture_enrollments
  add column if not exists session_plans jsonb not null default '[]'::jsonb;

comment on column public.special_lecture_enrollments.session_plans is
  '학생별 특강 회차 선택과 실제 날짜/시작/종료 시간 예외 계획. 공식 회차는 app_state.specialLectureGuides가 원본이다.';
