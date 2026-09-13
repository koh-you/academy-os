-- 문제은행 · 정답·해설 이미지 영역 허용 (2026-09-13)
-- 해설 PDF 에서 오려 낸 「답」 줄 이미지를 answer 영역으로, 풀이 전체를 solution 영역으로 저장한다.
-- Supabase SQL Editor 에서 사용자가 직접 적용한다. 되돌릴 때는 kind 를 다시 5개로 줄이면 된다(answer 행 삭제 뒤).

alter table public.problem_bank_regions
  drop constraint if exists problem_bank_regions_kind_check;

alter table public.problem_bank_regions
  add constraint problem_bank_regions_kind_check
  check (kind in ('body', 'choices', 'figure', 'passage', 'solution', 'answer'));

-- 문항별 정답·해설 영역을 빠르게 찾기 위한 보조 인덱스
create index if not exists problem_bank_regions_kind_idx
  on public.problem_bank_regions (item_id, kind);
