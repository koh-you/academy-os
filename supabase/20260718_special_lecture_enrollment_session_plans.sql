alter table public.special_lecture_enrollments
  add column if not exists session_plans jsonb not null default '[]'::jsonb;

comment on column public.special_lecture_enrollments.session_plans is
  '학생별 특강 회차 선택과 실제 시작/종료 시간 예외 계획. 공식 날짜와 회차는 app_state.specialLectureGuides가 원본이다.';

alter table public.lessons
  add column if not exists special_lecture_student_schedules jsonb not null default '[]'::jsonb;

comment on column public.lessons.special_lecture_student_schedules is
  '특강 수업 생성 시 확정한 학생별 실제 시작/종료 시간과 조정 사유 스냅샷. 수업일지와 출결이 이 값을 우선한다.';
