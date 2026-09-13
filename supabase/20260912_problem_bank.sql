-- 문제은행(오답은행) 1단계 — 교재 원천 · 문항 · 영역 · 학생별 정오답.
--
-- 기존 problem_books / wrong_problem_statuses (schema.sql) 는 화면 스캐폴딩 시절의 표이며
-- 서버 코드가 쓰지 않는다. 그 표를 고치지 않고 problem_bank_* 로 새로 둔다.
--
-- 설계 원칙 (docs/problem-bank/README.md):
-- - 문항 본문은 항상 사람이 만든 원천(PDF/HWPX)에서 온다. AI 는 경계 제안까지.
-- - 문항 = 영역의 집합. 한 문항이 영역 여러 개를 갖고, 공통 지문은 별도 영역으로 여러 문항이 참조한다.
-- - 이미지는 Storage 버킷 problem-bank 에, 행에는 경로만.
-- - 전부 tenant 스코핑 대상 (src/shared/server/tenantScope.js TENANT_SCOPED_TABLES 에 등록).
--
-- 실행: Supabase SQL Editor 에 그대로 붙여넣기. 여러 번 실행해도 안전하다.

create table if not exists problem_bank_books (
  book_id text primary key,
  tenant_id text not null default 'tenant_default',
  title text not null,
  folder_path text not null default '',            -- "중3 / RPM" 처럼 화면 트리용 경로 (" / " 구분)
  subject text not null default '',
  grade text not null default '',
  source_kind text not null default 'pdf_text' check (source_kind in ('pdf_text', 'pdf_scan', 'hwpx')),
  source_file_name text not null default '',
  source_sha256 text not null default '',
  page_count integer not null default 0,
  item_count integer not null default 0,
  layout_profile jsonb not null default '{}'::jsonb, -- 컬럼 x 범위·번호 서체 높이 등 (교재별 재사용)
  ingest_version text not null default '',
  review_status text not null default 'draft' check (review_status in ('draft', 'boundary_confirmed', 'ready')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists problem_bank_books_tenant_idx on problem_bank_books (tenant_id, folder_path, title);

create table if not exists problem_bank_units (
  unit_id text primary key,
  tenant_id text not null default 'tenant_default',
  book_id text not null references problem_bank_books(book_id) on delete cascade,
  position integer not null default 0,
  title text not null,
  item_number_from text not null default '',
  item_number_to text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists problem_bank_units_book_idx on problem_bank_units (book_id, position);

create table if not exists problem_bank_items (
  item_id text primary key,
  tenant_id text not null default 'tenant_default',
  book_id text not null references problem_bank_books(book_id) on delete cascade,
  unit_id text references problem_bank_units(unit_id) on delete set null,
  number_label text not null,                       -- 원본 번호 그대로 ("0036", "4-1")
  number_sort integer not null default 0,           -- 정렬용 숫자
  printed_page integer not null default 0,
  pdf_page integer not null default 0,
  type_label text not null default '',              -- 교재의 유형명 (예: "한 변의 길이와 삼각비의 값을 알 때")
  tags text[] not null default '{}',                -- 대표문제·서술형·중요 등 원본 배지
  answer text not null default '',
  has_solution boolean not null default false,
  has_subquestions boolean not null default false,
  review_status text not null default 'ai_checked' check (review_status in ('ai_checked', 'flagged', 'human_ok')),
  review_note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists problem_bank_items_book_idx on problem_bank_items (book_id, number_sort);
create unique index if not exists problem_bank_items_book_number_uidx on problem_bank_items (book_id, number_label);

create table if not exists problem_bank_regions (
  region_id text primary key,
  tenant_id text not null default 'tenant_default',
  item_id text not null references problem_bank_items(item_id) on delete cascade,
  position integer not null default 0,
  kind text not null default 'body' check (kind in ('body', 'choices', 'figure', 'passage', 'solution')),
  pdf_page integer not null default 0,
  bbox_normalized jsonb not null default '[0,0,1,1]'::jsonb,   -- [x0,y0,x1,y1] 좌상단 원점 0~1
  storage_path text not null default '',                        -- problem-bank 버킷 안 경로
  image_width integer not null default 0,
  image_height integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists problem_bank_regions_item_idx on problem_bank_regions (item_id, position);

create table if not exists problem_bank_attempts (
  attempt_id text primary key,
  tenant_id text not null default 'tenant_default',
  student_id text not null references students(student_id) on delete cascade,
  book_id text not null references problem_bank_books(book_id) on delete cascade,
  item_id text not null references problem_bank_items(item_id) on delete cascade,
  round integer not null default 1,                 -- 1 = 첫 풀이, 2+ = 재풀이
  result text not null default 'wrong' check (result in ('correct', 'wrong', 'unanswered')),
  recorded_at timestamptz not null default now(),
  note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists problem_bank_attempts_student_item_round_uidx
  on problem_bank_attempts (student_id, item_id, round);
create index if not exists problem_bank_attempts_book_idx on problem_bank_attempts (tenant_id, book_id, student_id);

-- Storage 버킷 problem-bank 는 서버가 첫 업로드 때 자동 생성한다(private · png/jpeg).
