-- 원장 tenant 의 운영 설정을 app_state 에 심는다 (2026-09-19).
--
-- 코드에 박혀 있던 "시험관리 자동 생성은 월수금 7-10반(내신반)만" 을 tenant 설정으로 옮겼다.
-- 이 행이 없으면 자동 생성 대상이 "모든 반" 이 되어 원장 학생 전원의 학교·학년 행이 생긴다.
-- 협력 교사 tenant 는 행이 없어도 된다(전체 반 = 원하는 동작).
-- 여러 번 실행해도 안전하다(이미 있으면 그대로 둔다 — 화면에서 바꾼 값을 덮어쓰지 않는다).

insert into app_state (tenant_id, state_key, state_value, updated_at)
values (
  'tenant_default',
  'tenantSettings',
  '{"examPrepAutoRowClassTemplateIds": ["template_mwf_7_10"], "defaultClassTemplateId": "template_mwf_7_10"}'::jsonb,
  now()
)
on conflict (tenant_id, state_key) do nothing;

select tenant_id, state_key, state_value
from app_state
where state_key = 'tenantSettings';
