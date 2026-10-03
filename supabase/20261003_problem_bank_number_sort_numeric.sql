-- 문항 정렬 번호를 정수에서 소수로
--
-- 숫자변형은 원본 바로 뒤에 서야 한다. build.mjs 가 `원본 + 0.1` 로 정렬값을 주는데
-- 칼럼이 integer 라 **1019.1 이 1019 로 잘려** 원본과 같은 자리에 섰다
-- (2026-10-03 실측: 쎈B 대수 10-19 와 10-19v1 이 둘 다 1019).
--
-- 화면은 변형을 따로 끼워 넣으므로 눈에 띄는 고장은 없었지만, 저장된 값이 의도를 잃는다 —
-- 단원의 첫·끝 번호가 변형 번호표로 잡히거나, 같은 값끼리 순서가 뒤집힌다.
--
-- 적용은 Supabase SQL Editor 에서 사람이 한다(운영 쓰기 Gate). 기존 값은 그대로 보존된다.

alter table problem_bank_items
  alter column number_sort type numeric using number_sort::numeric;
