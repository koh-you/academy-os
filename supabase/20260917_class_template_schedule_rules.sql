-- 반(class_templates)에 요일 묶음별 시간표를 넣는다 (2026-09-17).
--
-- 지금까지 반은 days[] + start_time + end_time 하나뿐이라 "화목 4-7 / 토 11-14" 처럼
-- 요일마다 시간이 다른 반을 표현할 수 없었다. 원장의 화목토 반 두 개만 코드에
-- 예외(saturdayStartTime)로 박혀 있었다. 이 컬럼으로 모든 tenant 가 같은 모델을 쓴다.
--
-- 형식: [{ "days": ["tue","thu"], "startTime": "16:00", "endTime": "19:00" },
--        { "days": ["sat"],       "startTime": "11:00", "endTime": "14:00" }]
-- 비어 있으면(null / []) 기존 days + start_time + end_time 을 그대로 쓴다.
-- days / start_time / end_time 은 계속 유지한다 — 옛 코드·다른 조회가 읽는 파생값.

alter table class_templates
  add column if not exists schedule_rules jsonb not null default '[]'::jsonb;

comment on column class_templates.schedule_rules is
  '요일 묶음별 시간표 [{days,startTime,endTime}]. 비면 days/start_time/end_time 단일 시간 사용.';
