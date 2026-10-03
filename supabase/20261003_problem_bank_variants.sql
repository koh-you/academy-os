-- 문제은행 숫자변형 문항
--
-- 변형은 별도 교재가 아니라 **같은 책 안의 자매 문항**이다. item_id 는 `<원본>v<단계>` 이고
-- variant_of 가 원본 item_id 를 가리킨다. 그래야 오답지·시험지가 원본 옆에 변형을 세울 수 있고,
-- 조판·답안지·패키지·등록이 기존 경로를 그대로 탄다.
--
-- 이 두 칸이 없으면 변형이 「번호가 이상한 보통 문항」으로 등록돼 원본과 묶이지 않는다.
-- 적용은 Supabase SQL Editor 에서 사람이 한다(운영 쓰기 Gate).

alter table problem_bank_items
  add column if not exists variant_of text,
  add column if not exists variant_level integer not null default 0;

-- 원본이 지워지면 변형도 같이 지운다 — 원본 없는 변형은 출처를 잃어 쓸 수 없다.
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'problem_bank_items_variant_of_fkey'
  ) then
    alter table problem_bank_items
      add constraint problem_bank_items_variant_of_fkey
      foreign key (variant_of) references problem_bank_items(item_id) on delete cascade;
  end if;
end $$;

-- 「이 문항의 변형들」을 원본 id 로 바로 찾는다(오답지 만들 때 선택 문항마다 한 번씩 본다).
create index if not exists problem_bank_items_variant_of_idx
  on problem_bank_items (variant_of)
  where variant_of is not null;
