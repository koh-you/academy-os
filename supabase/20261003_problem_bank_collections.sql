-- 자체 교재 초안(collection)
--
-- 교재 제작은 한 번에 끝나지 않는다. 담았다 뺐다를 며칠에 걸쳐 하고, 미리보기로 쪽 수를 보고,
-- 다시 고친다. 그 **초안**을 담는 표다. 초안이 완성되면 「제작」이 그 내용으로 자체 교재
-- (problem_bank_books · source_kind='composed') 한 권을 세운다.
--
-- 초안은 문항을 **복사하지 않고 참조**한다 — 담았다 뺐다 하는 동안 행과 이미지가 생겼다 사라지면
-- 비싸고, 원본 교재를 고치면 초안에도 바로 반영돼야 한다. 복사는 「제작」에서 한 번만 일어난다.
--
-- 기획: docs/problem-bank-composed-book-plan.md
-- 적용은 Supabase SQL Editor 에서 사람이 한다(운영 쓰기 Gate).

-- 자체 교재를 시중 교재와 **등록 단계에서 가른다**. 교재 목록·오답관리·시험지의 교재 고르개가
-- 이 값으로 두 묶음으로 나뉜다. 배지로 표시만 하는 것과 다르다.
do $$
declare
  constraint_name text;
begin
  select conname into constraint_name
  from pg_constraint
  where conrelid = 'problem_bank_books'::regclass
    and contype = 'c'
    and pg_get_constraintdef(oid) like '%source_kind%';
  if constraint_name is not null then
    execute format('alter table problem_bank_books drop constraint %I', constraint_name);
  end if;
  alter table problem_bank_books
    add constraint problem_bank_books_source_kind_check
    check (source_kind in ('pdf_text', 'pdf_scan', 'hwpx', 'composed'));
end $$;

create table if not exists problem_bank_collections (
  collection_id text primary key,
  tenant_id text not null default 'tenant_default',
  title text not null,
  folder_path text not null default '',
  subject text not null default '',
  grade text not null default '',
  status text not null default 'draft' check (status in ('draft', 'requested', 'published')),
  -- 제작 설정: 출처 표기·구획 머리줄 유형 이름·숫자변형·빠른정답·해설·표지.
  -- 출처는 조판 시점에 이미지 안에 들어가므로 **제작 전에** 정해야 한다(인쇄 직전 토글이 아니다).
  print_settings jsonb not null default '{}'::jsonb,
  published_book_id text references problem_bank_books(book_id) on delete set null,
  published_at timestamptz,
  note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists problem_bank_collections_tenant_idx
  on problem_bank_collections (tenant_id, folder_path, title);

create table if not exists problem_bank_collection_sections (
  section_id text primary key,
  tenant_id text not null default 'tenant_default',
  collection_id text not null references problem_bank_collections(collection_id) on delete cascade,
  position integer not null default 0,
  title text not null default '',
  note text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists problem_bank_collection_sections_idx
  on problem_bank_collection_sections (collection_id, position);

create table if not exists problem_bank_collection_items (
  entry_id text primary key,
  tenant_id text not null default 'tenant_default',
  collection_id text not null references problem_bank_collections(collection_id) on delete cascade,
  section_id text not null references problem_bank_collection_sections(section_id) on delete cascade,
  position integer not null default 0,
  -- 원본 문항. 복사하지 않는다. 원본이 지워지면 초안에서도 빠진다(구멍 난 초안을 남기지 않는다).
  item_id text not null references problem_bank_items(item_id) on delete cascade,
  include_variants boolean not null default false,
  note text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists problem_bank_collection_items_idx
  on problem_bank_collection_items (collection_id, section_id, position);

-- 한 권 안에 같은 문항이 두 번 들어가지 않는다. 섞어 담다 보면 쎈과 RPM 의 같은 고전 문항이
-- 겹치는데, 번호만 다른 같은 문제가 한 교재에 두 번 나오면 학생이 먼저 눈치챈다.
create unique index if not exists problem_bank_collection_items_unique
  on problem_bank_collection_items (collection_id, item_id);
