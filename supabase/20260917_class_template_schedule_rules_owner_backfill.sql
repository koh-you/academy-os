-- 원장(tenant_default)의 화목토 반 두 개를 코드 예외에서 DB 규칙으로 옮긴다 (2026-09-17).
-- 코드의 classTemplateScheduleRules(appConfig) 는 이 뒤에 삭제된다.
-- 값은 지금 코드에 박혀 있던 것과 동일하다.

update class_templates
set schedule_rules = '[
  { "days": ["tue", "thu"], "startTime": "16:00", "endTime": "19:00" },
  { "days": ["sat"],        "startTime": "10:00", "endTime": "13:00" }
]'::jsonb,
    days = '{tue,thu,sat}',
    start_time = '16:00',
    end_time = '19:00',
    updated_at = now()
where class_template_id = 'template_tt_sat_front';

update class_templates
set schedule_rules = '[
  { "days": ["tue", "thu"], "startTime": "19:00", "endTime": "22:00" },
  { "days": ["sat"],        "startTime": "13:00", "endTime": "16:00" }
]'::jsonb,
    days = '{tue,thu,sat}',
    start_time = '19:00',
    end_time = '22:00',
    updated_at = now()
where class_template_id = 'template_tt_sat_back';

-- 확인: 두 행이 나와야 한다.
select class_template_id, name, days, start_time, end_time, schedule_rules
from class_templates
where class_template_id in ('template_tt_sat_front', 'template_tt_sat_back');
