-- 최경석 선생님 tenant 의 중복 시험정보 정리 (2026-09-18).
--
-- #365 가 협력 교사 tenant 의 자동 생성 id 에 tenant 조각(exam_prep_2c572da4_...)을 붙이면서,
-- 이미 저장돼 있던 학교·학년 행 옆에 빈 행이 한 줄씩 더 생겼다. 그 빈 행만 지운다.
-- 선생님이 입력한 행(시험기간·범위·출판사·총평이 있는 행)은 어떤 경우에도 건드리지 않는다.
--
-- 1) 먼저 어떤 행이 지워질지 본다. 전부 "미입력" 상태여야 한다.
select exam_prep_id, school_name, grade, subject, exam_period, publisher, scope, math_exam_date, review
from exam_prep_rows
where tenant_id = 'tenant_2c572da4-0786-4181-a4c8-90a64ec26ac3'
  and exam_prep_id like 'exam_prep_2c572da4_%'
  and coalesce(exam_period, '') = ''
  and coalesce(publisher, '') = ''
  and coalesce(scope, '') = ''
  and math_exam_date is null
  and math_exam_dates = '[]'::jsonb
  and coalesce(review, '') = ''
  and coalesce(revised_review, '') = ''
order by school_name, grade;

-- 2) 위 목록이 맞으면 삭제.
delete from exam_prep_rows
where tenant_id = 'tenant_2c572da4-0786-4181-a4c8-90a64ec26ac3'
  and exam_prep_id like 'exam_prep_2c572da4_%'
  and coalesce(exam_period, '') = ''
  and coalesce(publisher, '') = ''
  and coalesce(scope, '') = ''
  and math_exam_date is null
  and math_exam_dates = '[]'::jsonb
  and coalesce(review, '') = ''
  and coalesce(revised_review, '') = '';

-- 3) 남은 행 확인. 학교·학년당 한 줄이어야 한다(창일중처럼 과목이 다른 두 줄은 화면의
--    "이 행 삭제" 로 선생님이 고른다).
select exam_prep_id, school_name, grade, subject, exam_period
from exam_prep_rows
where tenant_id = 'tenant_2c572da4-0786-4181-a4c8-90a64ec26ac3'
order by school_name, grade, exam_prep_id;
