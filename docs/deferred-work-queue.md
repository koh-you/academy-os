# Deferred Work Queue

이 문서만 현재 미룬 작업의 source of truth다. 과거 완료 이력은 `docs/archive/`에 있다. 사용자에게 더 급한 요청이 있으면 그 요청을 먼저 처리하고 큐를 통째로 반복하지 않는다.

## P1. 운영 저장 신뢰성

- 보충 일정 이중 원천 저장 gate는 완료. 검증된 source reconcile을 입력으로 `lessons + makeup_tasks`를 한 versioned plan에 묶고, insert-only/CAS·Supabase 재조회·응답 유실 audit 회수 뒤 최신 일정/draft 후속 CAS·중간 실패 역순 보상·최신 변경 보호를 고정했다. App은 두 원천 검증 뒤에만 기존 `notification_jobs`/provider orchestration을 실행하며 provider 실패를 source 저장 실패와 분리한다.
- 보충/알림 다중 원천 읽기·판정 inventory는 완료. `makeup_tasks.linkedLessonId`, `lessons.sourceMakeupTaskId`, 실제 일정과 미발송 `notification_jobs`를 함께 대조하고 누락·역연결 오류·중복·다른 원천·일정 불일치·이전 일정 예약 상태에서는 오작동 가능한 일정 저장/새 예약을 차단한다.
- 수업일지 등원보충 초안의 stable request identity gate는 완료. 학생·원 숙제·task 유형에서 같은 ID를 만들고 신규 insert-only·기존 `updated_at` CAS·Supabase 재조회로 저장한다. 결과 불명 재시도는 같은 항목을 회수하고 타 화면 최신 수정은 409로 보호한다.
- 수업일지 `lesson_student_records`·숙제 다중 행 저장 gate는 완료. 두 원천을 하나의 versioned plan으로 묶어 행별 CAS/insert-only·Supabase 재조회·idempotent retry·역순 보상·더 최신 행 보호·draft 보존을 fixture와 safe browser로 고정했다.
- 수업 달력 복사·취소·되돌리기 gate는 완료. `lessons`와 복사 숙제를 단일 versioned action으로 저장하고, CAS/insert-only·Supabase 재조회·idempotent unknown-result retry·역순 보상·연결 record/homework/notification 보호·취소 복구 원천 재조회를 fixture와 safe browser로 고정했다.
- 시험관리 행과 직전수업을 함께 바꾸는 학사일정 파생 저장 gate는 완료. `exam_prep_rows`·파생 `preExam lessons`를 한 versioned plan으로 저장하고, CAS·Supabase 재조회·idempotent retry·역순 보상·연결 원천 보호를 fixture와 safe browser로 고정했다.
- `app_state` key별 dirty 저장·500ms debounce·동일 key 직렬화·`updated_at` CAS·저장 뒤 Supabase 재조회는 완료. 독립성이 큰 데이터는 명시 저장 도메인으로 계속 분리한다.
- 시험정보 행의 같은 브라우저 직렬화·최신값 coalesce·행별 `updated_at` CAS·저장 뒤 Supabase 재조회는 완료. 충돌 입력 보존과 삭제 감사 rollback 전용 복구 경계도 fixture로 고정했다.
- Tally 신규생 후보 입력의 후보별 직렬화·최신값 coalesce·`updated_at` CAS·저장 뒤 Supabase 재조회는 완료. 정식 등록은 후보 입력 저장 완료를 기다리고, 충돌·결과 불명 실패는 입력을 보존한 채 자동 재전송하지 않는다.
- 개별 학생 신규 등록은 insert-only, 목록 행·프로필·Tally/특강 기존 학생 반영·퇴원 취소는 `updated_at` CAS를 사용한다. 학생 저장 뒤 Supabase 재조회가 일치해야 완료하며 저장 중 후속 입력과 충돌 입력은 보존한다. 이 개별 학생 gate는 완료됐다.
- 반 명단 저장 gate는 완료. 학생 추가·반 이동·반관리·퇴원의 `students` 반 필드와 미래 `lessons.studentIds`를 한 versioned plan으로 저장하고, 직접 원천 중간 실패는 역순 보상·원래 버전 재조회, 성공은 두 원천 재조회 대조 뒤에만 UI 반영한다. 과거 수업·변경 대상 밖 수동 명단과 실패 입력을 보존한다.
- 수동 `school_events` 저장 gate는 완료. 신규는 insert-only, 수정·삭제는 일정별 `updated_at` CAS를 적용하고 API 내부와 App의 후속 GET에서 Supabase 원천을 재조회한다. 결과 불명 신규 저장은 고정 ID로 idempotent 재시도하며 실패 입력·모달을 보존한다. 시험관리 연동 일정과 파생 직전수업 gate도 후속 단위에서 완료했다.
- 학생 포털의 숙제 완료·질문·시험 제출은 인증된 학생 범위와 서버 재조회 계약을 재확인했다. 교사 `숙제현황` 확인 상태도 versioned CAS·Supabase 재조회·행별 saving/saved/failed 표시로 고정했다. 사용자가 직접 해결한 `확인할 숙제` 별도 요청과 닫힌 PR #54는 중복 제외한다.
- 자료함 메타데이터와 실제 파일 Storage gate는 완료. 신규 row는 stable ID·생성 토큰 insert-only/CAS와 Supabase 재조회를 사용하고, private Storage 파일은 생성 토큰·내용 해시 경로로 분리한다. 업로드 뒤 row 실패는 새 객체를 정리하고, 삭제는 파일 백업→Storage 삭제→row CAS 뒤 충돌 시 원경로 복구를 수행한다. 열기는 교사 또는 공개 대상 학생·학부모 bearer를 서버에서 재검증해 서명 URL을 발급한다.
- 보고서 snapshot 명시 저장 gate는 완료. 공용 자동저장에서 분리한 전용 교사 인증 API가 기존 `app_state.updated_at` CAS로 한 건을 append하고 Supabase 재조회가 일치한 뒤에만 UI를 갱신한다. 결과 불명 재시도는 같은 report ID로 회수하고 충돌·검증 실패에서는 draft와 실패 상태를 유지한다. 모의 발송은 저장 상태만 기록하며 실제 provider 행동은 없다.
- 보충·알림 다중 원천 reconcile의 읽기·판정, 미연결/오작동 버튼 차단, 두 저장 원천의 versioned write/recovery와 검증 뒤 notification 후속 단계 분리는 완료했다.
- 기준: `docs/save-persistence-audit-2026-07-20.md`, `docs/save-persistence-audit-2026-07-28.md`.

## P2. 모달 통일 후속

- 최신 modal inventory는 `docs/modal-shell-followup-inventory-2026-08-03.md`에 고정했다. 41개 dialog 중 40개는 공통 shell이고, bespoke 예외는 실제 Solapi callback을 받는 보충 알림 제어창 1개다. 공통 footer는 9개, 기존 action wrapper는 8개다.
- 다음 단위는 실제 알림이 없는 `ReportModal` footer 공통화다. 그 뒤 bespoke Solapi 제어창의 shell만 공통화하되 callback identity·busy guard·safe-area layout을 유지한다.
- 수업일지 저장과 Solapi side effect 버튼은 계속 분리한다.
- 출결·알림·저장 원천이 함께 바뀌면 별도 작업으로 쪼갠다.

## P3. 알림톡 템플릿 설정 관리

- 출결·수업일지·숙제보충·결석보강·재시험·공지·특강·일정 변경·11시 reminder의 문구 원천과 변수를 inventory한다.
- 숨은 하드코딩을 `설정 > 알림톡`의 같은 원천으로 옮긴다.
- 실제 발송·예약은 별도 사람 gate다.

## P4. 고위험 App/API 경계 리팩터링

- App 2차 리팩터링은 `docs/app-refactor-second-pass-plan.md`의 Phase 1~5를 기준으로 한다.
- Phase 1 auth/session, Phase 2 출결 polling·동기화, Phase 3 notification/Solapi reconcile, Phase 4 hydration/persistence, Phase 5 teacher 화면 callback 조립은 main 통합·CI·배포 완료다. App 2차 리팩터링 Phase 1~5는 닫는다.
- App 3차 리팩터링 3-0~3-8은 `docs/app-refactor-third-pass-plan.md`와 `docs/app-refactor-third-pass-closeout.md`를 기준으로 화면·draft/controller·adapter 분리, teacher 화면 lazy loading, 종료 소유권 감사를 완료했다. 3차 리팩터링은 닫고 자동 재개하지 않는다.
- 후속 대형 후보는 CSS domain entry 분리, safe E2E 확대, API payload/DB row 타입 계약이다. 남은 학생 로그인·핵심 modal·보고서 화면은 실제 변경 속도나 번들 병목 근거가 생길 때만 별도 계획으로 검토한다.
- API 후보는 `api/server.js`의 route registration, auth, core data, notification/provider service 분리다. App 3차 범위와 섞지 않고 별도 기준선·회귀 inventory를 먼저 만든다.
- AI가 안전하게 검증 가능한 문제는 해당 제품 작업에서 처리하되, 위 후보를 이유로 4차 리팩터링을 자동 시작하지 않는다. 운영 side effect나 제품 의미 결정이 필요한 항목만 사람 gate로 올린다.
- 기준: `docs/development-roadmap-after-ui-refactor-2026-07-31.md`.

## P5. 시험분석 상세 프롬프트 시스템

- 독립 branch `codex/exam-analysis-gpt-image`에서 계속한다.
- 다음 gate는 교사가 역할·장수·검수 데이터를 확정하는 입력 화면과 `final_fields > teacher_fields > ai_fields` 저장 계약이다.
- 별도 승인 전 이미지 생성 API·버전 DB·Storage 자동 제작은 하지 않는다.

## P6. 정산 후속

- 사용자가 새 시수별 단가를 제공하면 새 월/빈 단가에만 적용한다.
- 저장된 과거 월 snapshot과 수동 수정 금액을 자동 덮어쓰지 않는다.

## 완료되어 자동 재개하지 않는 것

- 전체 UI 통일 UI-0~UI-9.
- 기존 App 리팩터링 1~18 안전범위.
- 2026-07-31 조소현 보강만 취소 gate.
- 2026-07-28 교사 bearer·Storage 소유권 gate.
