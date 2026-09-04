# 멀티테넌트 1단계 — 데이터 격리 계획 (초안, 실행 전 사람 확인 필요)

브랜치: `codex/multi-tenant-attendance-prototype-20260904` (origin/main 44b6378b 기준)
작성: 2026-09-04 · 코드/스키마 실행 없음. 이 문서는 검토용 초안이다.
관련: API 인증 경계 작업(`codex/ops-api-auth-boundary-20260904`, `docs/security/ops-api-auth-audit.md`)과 상호 보완 — 그쪽은 "누가 호출하나", 이 문서는 "어느 학원 데이터를 보나".

> ⚠️ 이 계획의 마이그레이션·백필 SQL은 **운영 Supabase 스키마를 변경**한다. 사용자가 검토하고 Supabase SQL Editor에서 직접 실행해야 한다. AI는 실행하지 않는다.

---

## 구현 상태 (2026-09-04, 브랜치 `codex/multi-tenant-impl-20260904`)

코드 레이어 §6 Step 2·3·5·6 완료. **전부 플래그 OFF / role="owner" 기본이라 동작 변화 없음.**
스키마 마이그레이션(Step 7)·신규 계정(Step 8)은 사람 Gate로 남음. Step 4 는 요청 컨텍스트
방식으로 대체되어 별도 작업 불필요.

| 커밋 | 내용 |
|---|---|
| `1efd5df5` | 이 계획 문서 |
| `1b20955b` | 교사 세션 토큰·`toTeacherAccount`·로그인 응답에 `tenantId` (컬럼 없어도 `"tenant_default"`) |
| `e0ce045c` | `src/shared/server/tenantScope.js` — `TENANT_SCOPED_TABLES`(29), `MULTITENANT_SCOPING` 플래그(기본 OFF), `applyTenantFilterToQuery`/`applyTenantToRows`/`requireTenantScopedMutationQuery`. `supabaseRest` 5개 함수에 opt-in `options.tenantId` |
| `faf6daef` | 요청 단위 테넌트 컨텍스트(`AsyncLocalStorage`). `api/server.js` http 핸들러가 `enterTenantContext(교사 세션 tenantId)`. → **Step 4(coreData ~204 호출 스레딩) 불필요** |
| `69365c20` | `teacherRole`("owner"/"assistant") 배관 + 사이드바 메뉴 role 필터(assistant = `lessons`+`students`) + `handleChangeView` 가드. `tenantScope.js` 를 `api/lib` → `src/shared/server` 로 이동(Vercel 12-file 한도) |

### 활성화 절차 (마이그레이션 후, 사람)
1. `supabase/20260904_tenant_id_phase1.sql` (§b) 실행 — `tenant_id` 컬럼 + `teacher_accounts.role text default 'owner'`.
2. 백필 확인 → Render 에 `MULTITENANT_SCOPING=true`.
3. 신규 교사 계정 1개: `teacher_accounts` 에 `{ tenant_id: "tenant_<uuid>", role: "assistant", ... }` (사용자가 UI/스크립트로).
4. 스모크: 기존 고태영T 로그인 전체 기능 회귀 없음 / 신규 교사는 출결·수업 캘린더·학생 명단만.

### 미구현 / 후속
- **서버측 role 403 강제** — 현재는 UI 숨김 + 클라 가드만. 숨긴 기능의 API 라우트를 assistant
  세션에 403 하는 건 API 인증 경계(`codex/ops-api-auth-boundary`) 스코프 판정과 같은 층 → 그쪽에서.
- **크론/배치** — 요청 컨텍스트가 없어 전 테넌트 대상. 멀티테넌트가 여러 학원이 되면 per-tenant 순회 필요.
- **intra-center 숨김** — "수업일지 상세" 등 `lessons` 화면 안의 세부 기능 숨김은 메뉴 레벨 밖. 후속.
- **포털(학생/학부모)** — Phase 1 프로토타입 범위 밖. studentId 스코프로만 접근.
- **`app_state` (Tier C)** — 프로토타입 화면이 쓰는지 확인 후 결정. 현재 미변경.
- **`ASSISTANT_VISIBLE_MENU_IDS` 정확한 목록** — 제품 확정 대상. `src/app/sidebarMenuModel.js` 상수 한 곳.

---

## 0. 접근 방식 요약

- 격리 방식: **모든 대상 테이블에 `tenant_id text` 컬럼을 비정규화**해서 직접 부착. FK로 파생 가능한 하위 테이블도 컬럼을 직접 갖는다.
  - 이유: 쿼리 레이어가 손으로 만든 PostgREST 쿼리스트링(`select=*&order=...`)이라 JOIN 스코핑이 불가능. 모든 `listRows` 호출이 `&tenant_id=eq.<tid>` 를 직접 붙여야 함. 나중에 RLS도 테이블마다 컬럼 하나로 단순해짐.
- 1차 격리: **앱 레이어**. 서버는 계속 service-role로 Supabase에 접속하고, 쿼리 레이어에서 `tenant_id` 필터. RLS는 2단계(별도 과제)로 defense-in-depth.
- 기존 단일 교사(고태영T) 데이터: 전부 `tenant_default` 로 백필. 기존 로그인/기능 불변.
- 신규 교사: 새 tenant (`tenant_<uuid>`), 빈 명단·빈 캘린더로 시작. 화면은 출결/캘린더/명단만.

---

## (a) tenant_id 가 필요한 테이블 전체 목록

레포 전체의 `listRows/upsertRows/insertRows/patchRows/deleteRows` 호출과 `supabase/*.sql` 의 `create table` 을 대조해 도출. 전체 30개 테이블.

### Tier A — 테넌트 소유 루트 (직접 `tenant_id`, 스코핑 기준점)

| 테이블 | PK | 근거 | 백필 규칙 |
|---|---|---|---|
| `students` | student_id | 학원의 학생 명부 | 전부 `tenant_default` |
| `class_templates` | class_template_id | 반 정의 | 전부 `tenant_default` |
| `lessons` | lesson_id | 수업 (class_template_id nullable → 독립 루트) | 전부 `tenant_default` |
| `school_events` | school_event_id | 학원이 관리하는 학사 일정 | 전부 `tenant_default` |
| `exam_prep_rows` | exam_prep_id | 시험대비 행 (학교/학년 기반이나 학원 운영 데이터) | 전부 `tenant_default` |
| `academy_reminders` | reminder_id | 학원 운영 알림 (student_id nullable) | 전부 `tenant_default` |
| `problem_books` | problem_book_id | 교재 (기존 `uploaded_academy` 텍스트 존재 → 참고만) | 전부 `tenant_default` |
| `resource_materials` | resource_material_id | 자료 (`created_by` 존재) | 전부 `tenant_default` |
| `test_sessions` | test_session_id | 데일리 테스트 세션 | 전부 `tenant_default` |
| `notification_jobs` | notification_job_id | 알림 예약 (slack_daily_summary 는 student/lesson 없음 → 직접 필요) | 전부 `tenant_default` |
| `notification_logs` | notification_log_id | 발송 이력 (student/lesson nullable) | 전부 `tenant_default` |
| `teacher_accounts` | teacher_id | 교사 계정의 소속 학원 | 기존 계정 → `tenant_default` |
| `student_intake_applicants` | applicant_id | 입학 상담 유입 (유입 시점 tenant 미정) | 전부 `tenant_default` (아래 §주의) |
| `special_lecture_applications` | application_id | 특강 신청 유입 | 전부 `tenant_default` (아래 §주의) |

### Tier B — FK로 파생되지만 컬럼을 직접 부착 (성능·RLS 단순화)

| 테이블 | 파생 경로 | 백필 SQL 방식 |
|---|---|---|
| `lesson_student_records` | lesson_id → lessons.tenant_id (NOT NULL FK) | lessons 조인 update |
| `attendance_events` | lesson_id/student_id (nullable) | lessons 우선, 없으면 students, 둘 다 없으면 `tenant_default` |
| `homeworks` | student_id → students.tenant_id (NOT NULL FK) | students 조인 update |
| `makeup_tasks` | student_id (NOT NULL FK) | students 조인 update |
| `wrong_problem_statuses` | student_id (NOT NULL FK) | students 조인 update |
| `score_records` | student_id (NOT NULL FK) | students 조인 update |
| `test_attempts` | test_session_id → test_sessions.tenant_id (NOT NULL FK) | test_sessions 조인 update |
| `special_lecture_enrollments` | student_id / guide | students 조인, 없으면 `tenant_default` |
| `exam_analysis_runs` | exam_prep_id (nullable) → 독립 루트로도 취급 | exam_prep_rows 조인, 없으면 `tenant_default` |
| `exam_analysis_sources` | analysis_run_id (NOT NULL, cascade) | exam_analysis_runs 조인 |
| `exam_analysis_questions` | analysis_run_id (NOT NULL, cascade) | 〃 |
| `exam_analysis_ai_jobs` | analysis_run_id (NOT NULL, cascade) | 〃 |
| `exam_analysis_events` | analysis_run_id (NOT NULL, cascade) | 〃 |
| `exam_post_submissions` | student_id (있으면) | students 조인, 없으면 `tenant_default` |
| `exam_submission_files` | submission 경유 | exam_post_submissions 조인 |

### Tier C — 테넌트 무관 / 논의 필요

| 테이블 | 판단 |
|---|---|
| `app_state` | `state_key` PK 의 전역 KV. 일부 키는 화면/설정이라 tenant별이어야 할 수 있음. **선택지 2개**: ① `state_key` 에 `tenant_default:` prefix 를 붙여 네임스페이스 분리 (마이그레이션 시 기존 키 rename), ② `tenant_id` 컬럼 추가 + PK 를 `(tenant_id, state_key)` 로 변경. 1단계 프로토타입 화면(출결/캘린더/명단)이 `app_state` 를 쓰는지 먼저 확인 후 결정. 안 쓰면 이번엔 손대지 않음. |

### 주의 — 유입 데이터(intake/특강 신청)

`student_intake_applicants`, `special_lecture_applications` 는 Tally 웹훅으로 외부에서 들어온다. 웹훅 시점엔 어느 학원인지 모른다. 1단계에서는 **전부 `tenant_default`** 로 두고, 멀티테넌트가 실제로 여러 학원이 되면 "웹훅 URL/토큰에 tenant 식별자 포함" 을 별도로 설계한다. 이번 프로토타입 신규 교사 화면에는 이 두 테이블이 안 보이므로 격리 실패 위험 낮음.

---

## (b) 마이그레이션 + 백필 + 롤백 SQL 초안

파일: `supabase/20260904_tenant_id_phase1.sql` (신규). 아래는 초안이며 실행 전 사용자 검토·Supabase SQL Editor 적용.

### B-1. 컬럼 추가 + 기본값

```sql
-- 1) 모든 대상 테이블에 tenant_id 추가 (기본값 tenant_default 로 시작 → 백필 후 기본값 유지 여부 결정)
alter table students                    add column if not exists tenant_id text not null default 'tenant_default';
alter table class_templates             add column if not exists tenant_id text not null default 'tenant_default';
alter table lessons                     add column if not exists tenant_id text not null default 'tenant_default';
alter table school_events               add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_prep_rows              add column if not exists tenant_id text not null default 'tenant_default';
alter table academy_reminders           add column if not exists tenant_id text not null default 'tenant_default';
alter table problem_books               add column if not exists tenant_id text not null default 'tenant_default';
alter table resource_materials          add column if not exists tenant_id text not null default 'tenant_default';
alter table test_sessions               add column if not exists tenant_id text not null default 'tenant_default';
alter table notification_jobs           add column if not exists tenant_id text not null default 'tenant_default';
alter table notification_logs           add column if not exists tenant_id text not null default 'tenant_default';
alter table teacher_accounts            add column if not exists tenant_id text not null default 'tenant_default';
alter table student_intake_applicants   add column if not exists tenant_id text not null default 'tenant_default';
alter table special_lecture_applications add column if not exists tenant_id text not null default 'tenant_default';
alter table lesson_student_records      add column if not exists tenant_id text not null default 'tenant_default';
alter table attendance_events           add column if not exists tenant_id text not null default 'tenant_default';
alter table homeworks                   add column if not exists tenant_id text not null default 'tenant_default';
alter table makeup_tasks                add column if not exists tenant_id text not null default 'tenant_default';
alter table wrong_problem_statuses      add column if not exists tenant_id text not null default 'tenant_default';
alter table score_records               add column if not exists tenant_id text not null default 'tenant_default';
alter table test_attempts               add column if not exists tenant_id text not null default 'tenant_default';
alter table special_lecture_enrollments add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_runs          add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_sources       add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_questions     add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_ai_jobs       add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_analysis_events        add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_post_submissions       add column if not exists tenant_id text not null default 'tenant_default';
alter table exam_submission_files       add column if not exists tenant_id text not null default 'tenant_default';
```

`default 'tenant_default'` 를 넣었으므로 기존 행은 자동으로 채워진다(별도 백필 update 불필요). Tier B 도 값이 맞다(기존 데이터가 모두 한 학원이므로). 멀티테넌트가 실제로 늘어나기 전까지는 이 default 를 유지해도 안전하지만, **신규 tenant 데이터가 실수로 tenant_default 로 새는 것을 막으려면** 백필 확인 후 default 를 제거하는 것을 권장:

```sql
-- 2) 백필 검증 후 (모든 행 tenant_id 채워짐 확인) default 제거 → 이후 INSERT 는 반드시 명시적으로 tenant_id 지정
alter table students add column ...;  -- (위에서 이미 not null 이므로 아래만)
alter table students                    alter column tenant_id drop default;
-- … 대상 테이블 전부 동일하게 drop default …
```

> 결정 필요: default 를 **유지**(안전한 마이그레이션, 실수 유입 위험) vs **제거**(엄격, 앱이 항상 tenant_id 를 써야 함). 권장은 "앱 레이어 배포 후 제거".

### B-2. 인덱스

```sql
create index if not exists idx_students_tenant                 on students(tenant_id);
create index if not exists idx_class_templates_tenant          on class_templates(tenant_id);
create index if not exists idx_lessons_tenant_date             on lessons(tenant_id, lesson_date);
create index if not exists idx_lesson_records_tenant           on lesson_student_records(tenant_id);
create index if not exists idx_attendance_events_tenant        on attendance_events(tenant_id, created_at desc);
create index if not exists idx_homeworks_tenant                on homeworks(tenant_id);
create index if not exists idx_makeup_tasks_tenant             on makeup_tasks(tenant_id);
create index if not exists idx_school_events_tenant            on school_events(tenant_id);
create index if not exists idx_exam_prep_rows_tenant           on exam_prep_rows(tenant_id);
create index if not exists idx_academy_reminders_tenant        on academy_reminders(tenant_id);
create index if not exists idx_test_sessions_tenant            on test_sessions(tenant_id);
create index if not exists idx_test_attempts_tenant            on test_attempts(tenant_id);
create index if not exists idx_notification_jobs_tenant        on notification_jobs(tenant_id, status);
create index if not exists idx_resource_materials_tenant       on resource_materials(tenant_id);
-- 나머지 대상 테이블도 동일 패턴
```

### B-3. 롤백 SQL — `supabase/20260904_tenant_id_phase1_rollback.sql`

```sql
-- 인덱스 제거
drop index if exists idx_students_tenant;
drop index if exists idx_class_templates_tenant;
drop index if exists idx_lessons_tenant_date;
-- … 위에서 만든 인덱스 전부 …

-- 컬럼 제거 (대상 테이블 전부)
alter table students                    drop column if exists tenant_id;
alter table class_templates             drop column if exists tenant_id;
alter table lessons                     drop column if exists tenant_id;
-- … 대상 테이블 전부 drop column if exists tenant_id …
```

롤백은 컬럼을 제거하므로 신규 tenant 로 만든 데이터가 있으면 그 소속 정보가 사라진다. **롤백은 신규 tenant 데이터를 만들기 전, 또는 신규 tenant 데이터를 먼저 삭제한 뒤에만** 안전. 문서에 이 순서를 명시.

### B-4. 적용 순서 (사용자 실행)

1. 운영 백업/스냅샷 확인 (Supabase 대시보드).
2. B-1 (컬럼 추가, default 포함) 실행 → 즉시 모든 기존 행 `tenant_default`.
3. `select count(*) ... where tenant_id is null` 로 각 테이블 0 확인.
4. B-2 (인덱스) 실행.
5. 앱 레이어 배포 ((c) 완료본).
6. 스모크 통과 후 B-1의 `drop default` 실행 (선택, 권장).
7. 문제 시 B-3 롤백 (신규 tenant 데이터 없을 때).

---

## (c) 쿼리 스코핑 변경 지점

### 규모
- `api/routes/coreData.js` — 4907줄, `listRows/upsertRows/insertRows/patchRows/deleteRows` **약 204개 호출**.
- `api/routes/examAnalysisPipeline.js` — 약 23개 호출.
- `api/server.js` — 4개 호출 (`teacher_accounts` 등).
- 손으로 만든 PostgREST 쿼리스트링(`select=*&order=name.asc`) 패턴.

### 권장: 200+ 호출을 개별 수정하지 말고 중앙 래퍼로

**C-1. `api/lib/supabaseRest.js` 에 tenant 인지 옵션 추가**
- `listRows(table, query, { tenantId })` → `tenantId` 있으면 쿼리에 `&<col>=eq.<tenantId>` 자동 append. `TENANT_SCOPED_TABLES` set 에 있는 테이블에만 적용, 아니면 무시(또는 개발 시 throw).
- `upsertRows/insertRows(table, rows, { tenantId })` → 각 row 에 `tenant_id` 주입(이미 있으면 검증: 다르면 throw).
- `patchRows(table, query, values, { tenantId })` → query 에 tenant 필터 append (남의 학원 행 수정 차단).
- `deleteRows(table, query, { tenantId })` → 〃 (남의 학원 행 삭제 차단).
- `TENANT_SCOPED_TABLES` = 위 (a) Tier A+B 목록. 한 곳에서 관리 → 새 테이블 누락 방지 테스트와 연결.

**C-2. `coreData.js` 함수 시그니처에 `tenantId` 스레딩**
- `listStudents()` → `listStudents({ tenantId })`, `listLessons({ date, tenantId })`, `upsertStudent(student, { tenantId, ... })` … 약 60~80개 export 함수.
- 각 함수 내부의 `listRows(...)` 호출에 `{ tenantId }` 전달. 기계적이지만 수가 많음 → 함수별로 나눠 PR.
- 파생 저장(`saveLessonJournalRowsPlan` 등 versioned 저장 경로)도 하위 레코드에 `tenantId` 부착.

**C-3. 라우트 레지스트리 → `request.__auth.tenantId` 주입**
- `src/shared/server/*RouteRegistry.js` 의 dispatch 가 `coreData` 함수를 부를 때 `tenantId` 를 넘김.
- `tenantId` 출처: API 인증 경계 작업의 전역 게이트가 세팅하는 `request.__auth.tenantId` (교사 세션 토큰 payload 에서). 게이트가 아직 없으면, 과도기용으로 레지스트리에서 `getTeacherSession(request)?.tenantId ?? "tenant_default"` 를 직접 읽는 얇은 헬퍼.
- **교사 세션이 없으면(=tenantId 불명) tenant-scoped 데이터 접근을 막는다** — 이건 인증 경계 작업의 `API_REQUIRE_AUTH` 와 함께 켜져야 안전. 그 전까지는 `tenant_default` fallback + 경고 로그.

**C-4. 삭제/무결성 경로**
- `withdrawnStudentDeletionDirectSources` (coreData.js:435 부근) 의 각 테이블 삭제도 `tenant_id` 필터 추가 — 학생 삭제 시 다른 학원 동명 참조를 건드리지 않도록.
- `deleteLessonsBefore(before)` 같은 기간 일괄 삭제는 반드시 `tenant_id` 필터 필수(안 그러면 전 학원 삭제).

### 변경 지점 요약표

| 파일 | 변경 | 규모 |
|---|---|---|
| `api/lib/supabaseRest.js` | tenant 인지 옵션 + `TENANT_SCOPED_TABLES` | 1파일, ~60줄 |
| `api/routes/coreData.js` | 함수 시그니처 `tenantId` + 내부 호출 전달 | ~204 호출, ~70 함수 |
| `api/routes/examAnalysisPipeline.js` | 〃 | ~23 호출 |
| `api/server.js` | `teacher_accounts` 조회에 tenant 필터, 라우트→coreData 호출에 tenantId | ~4 + 배관 |
| `src/shared/server/*RouteRegistry.js` | dispatch 가 tenantId 전달 | ~20 파일, 각 소폭 |
| `src/shared/server/sessionRouteGuard.js` | `createTeacherSessionToken` payload 에 `tenantId`, verify 시 `request.__auth.tenantId` | §2 참조 |

---

## 1. sessionRouteGuard.js — tenantId 필드 (인증 경계 작업과 공유)

`src/shared/server/sessionRouteGuard.js`:
- `createTeacherSessionToken(account)` payload 에 `tenantId: account.tenantId` 추가.
- `verifyTeacherSessionToken` 결과에 `tenantId` 포함 (payload 그대로 반환하므로 자동).
- `api/server.js` 의 `authenticateTeacher` 가 `teacher_accounts` 행에서 `tenant_id` 를 읽어 `account.tenantId` 로 넘기도록.
- 로그인 응답(`authLoginRouteRegistry.js`)의 `account` 에 `tenantId` 포함(프론트가 저장·표시용).
- 게이트/레지스트리가 `request.__auth.tenantId = teacherSession.tenantId` 세팅.

값: `"tenant_default"` | `"tenant_<uuid>"` (string). ops 토큰(기계용) 쪽 `tenantId` / `crossTenant:true` 처리는 **인증 경계 브랜치 Phase 1 담당** — 이 작업에서는 건드리지 않는다.

→ 이 파일 수정 완료 후 `academy-os-5f` 세션에 "tenantId 필드 추가 완료" 신호.

---

## 2. 신규 교사 계정 + tenant

- 새 tenant id 발급: `tenant_<uuid>` (앱에서 `crypto.randomUUID()`).
- `teacher_accounts` 에 신규 행 1개: `{ teacher_id, login_id, (password 해시/PIN 규약은 기존 방식 그대로), tenant_id: "tenant_<uuid>", is_active: true }`.
  - **AI가 계정을 만들지 않는다.** 마이그레이션·앱 배포 후, 사용자가 기존 교사 계정 관리 UI(`/api/auth/teacher-account`) 또는 사용자가 실행하는 시드 스크립트로 생성. 계획서에는 필요한 행 모양과 절차만 명시.
- 신규 tenant 는 데이터 0 → `students`, `lessons`, `class_templates` 등에서 `tenant_id=eq.tenant_<uuid>` 결과가 빈 배열. 화면은 빈 상태로 정상 렌더돼야 함(빈 상태 UI 확인 항목).

---

## 3. 신규 교사 화면 범위 제한 (UI)

- 노출: 출결 체크인/체크아웃, 수업 캘린더, 학생 명단.
- 숨김: 수업메모/수업일지 상세, 교재, 숙제, 시험/시험분석, 알림톡, 정산/리포트, 운영 알림.
- 방식: `teacher_accounts` 에 `role text not null default 'owner'` (또는 `feature_flags jsonb`) 컬럼 추가 → 세션 토큰 payload 에 `role` 포함 → 프론트가 `role === 'assistant'` (가칭) 이면 해당 라우트/탭/버튼 미노출.
- 서버도 방어: 숨긴 기능의 API 라우트는 해당 role 세션에 403 (UI 숨김만으로는 부족). 이건 인증 경계 작업의 스코프 판정과 같은 층에서 하거나, 별도 `requireRole` 헬퍼.
- **이 role 컬럼은 §1 tenant_id 마이그레이션에 같이 넣는 게 효율적** (`teacher_accounts` 한 번만 alter).

---

## 4. 리스크 / 실패 모드

| 리스크 | 완화 |
|---|---|
| `listRows` 호출 한 곳이라도 tenant 필터 누락 → 학원 간 데이터 유출 | 중앙 래퍼 + `TENANT_SCOPED_TABLES` + "모든 scoped 테이블 접근이 tenantId 옵션을 받는지" 검사하는 테스트. grep 기반 CI 체크(`listRows("students"` 직접 호출 금지 lint). |
| 기간 일괄 삭제(`deleteLessonsBefore`)에 tenant 필터 누락 → 전 학원 삭제 | 해당 함수는 tenantId 필수 인자로, 없으면 throw. |
| 교사 세션에 tenantId 없음(구 토큰) → `tenant_default` fallback 으로 신규 tenant 데이터 못 봄 or 남의 데이터 봄 | 마이그레이션 후 강제 재로그인, 또는 토큰 만료(8h) 대기. `API_REQUIRE_AUTH` 와 함께 배포. |
| `app_state` 전역 키 충돌 | 1단계에서 프로토타입 화면이 app_state 를 안 쓰면 손대지 않음. 쓰면 §Tier C 결정. |
| 유입(intake/특강) 데이터가 tenant_default 고정 | 프로토타입 화면에서 안 보이므로 유출 위험 낮음. 멀티테넌트 확장 시 웹훅 tenant 식별 별도 설계. |
| 롤백 시 신규 tenant 데이터 소속 상실 | 롤백은 신규 tenant 데이터 생성 전 또는 삭제 후에만. 문서에 순서 명시. |
| service-role 접속이라 RLS 미적용 → 앱 버그가 곧 유출 | 2단계에서 RLS 추가(defense-in-depth). 1단계는 앱 레이어 테스트 커버리지로 방어. |

---

## 5. 사람 Gate 체크리스트 (실행 전 사용자 확인)

- [ ] (a) 테이블 목록 확정 — Tier C(`app_state`) 처리 방식 결정
- [ ] B-1/B-2 마이그레이션 SQL 검토 + 운영 백업 확인 후 Supabase SQL Editor 실행
- [ ] 백필 검증 쿼리(모든 대상 테이블 `tenant_id is null` = 0) 통과 확인
- [ ] `drop default` 를 지금 할지 / 앱 배포 후 할지 결정
- [ ] (c) 앱 레이어 변경 PR 검토·머지·배포
- [ ] 신규 교사 계정 생성(사용자가 UI/스크립트로) + tenant id 기록
- [ ] `role` 기반 화면 제한 확인 (신규 교사로 로그인 → 출결/캘린더/명단만 보임, 나머지 403)
- [ ] 기존 고태영T 로그인·전체 기능 회귀 없음 확인
- [ ] 롤백 절차·순서 숙지

---

## 6. 제안 작업 순서 (승인 후)

1. `teacher_accounts` 에 `tenant_id` + `role` 추가 (다른 테이블과 함께 or 먼저).
2. `sessionRouteGuard.js` + `authenticateTeacher` + 로그인 응답에 tenantId/role — §1. → `academy-os-5f` 에 신호.
3. `supabaseRest.js` 중앙 래퍼 + `TENANT_SCOPED_TABLES` — (c) C-1.
4. `coreData.js` 함수별 tenantId 스레딩 — (c) C-2, 도메인 단위 PR (students → lessons → records → 나머지).
5. 라우트 레지스트리 배관 — (c) C-3.
6. 화면 role 제한 — §3.
7. 마이그레이션 SQL 사용자 실행 — (b).
8. 신규 교사 계정 생성 + 스모크.
9. 테스트: tenant 격리 매트릭스(A tenant 토큰으로 B tenant 데이터 조회/수정 → 빈 결과/403), 기존 단일 교사 회귀.
