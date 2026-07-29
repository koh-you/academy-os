# UI-5 모달 인벤토리 — 2026-07-29

## 공통 shell 현황

- 실제 modal 사용은 공통 `src/shared/components/Modal.jsx`를 통한다.
- 현재 shell은 Escape와 X 버튼으로 `onClose`를 호출하고 backdrop 클릭 닫기는 하지 않는다.
- 저장 중에는 caller가 no-op `onClose`를 전달하는 모달이 있으므로 shell이 임의로 닫기 정책을 바꾸지 않는다.
- 공통 dialog 의미, 제목 연결, focus 진입/복귀, focus trap, 모바일 높이/스크롤, footer 행동 배치를 서로 다른 단위로 나눈다.

## 모달별 원천·side effect

| 모달/흐름 | 읽기·직접 원천 | local draft | 외부/연결 side effect | 닫기 의미 | 위험도·단위 |
| --- | --- | --- | --- | --- | --- |
| 수업 취소 확인 | `lessons`, 수업기록·알림 사전점검 | 취소 사유 | 수업 status, 연결 기록, 예약 확인 | 실행 전 단순 닫기 | 매우 높음 · UI-5D |
| 월 정규수업 열기 | 이전/대상월 `lessons` | 생성 plan | lessons bulk 저장·재조회 | 저장 중 닫기 차단 | 매우 높음 · UI-5D |
| 숙제/결석 보충 상세 | lesson, homework, makeup task, record | 화면별 편집 state | 출결·보충·알림 연결 | 달력 복귀 | 매우 높음 · UI-5D |
| 시험대비 상세 | lesson | 없음 | 수정·삭제 진입 | 달력 복귀 | 높음 · UI-5D |
| 수업일지 | lessons, records, homeworks, makeup, jobs | 다중 journal draft | 다중 원천 저장·출결·Solapi | 미저장 계약 유지 | 매우 높음 · UI-5D/UI-6 |
| 수업일지 보충 완료 확인 | makeup task | 처리 mode/memo | makeup 저장 | 저장 중 닫기 차단 | 높음 · UI-5D |
| 알림톡 예약 확인 | notification_jobs, Solapi group/message | filter/audit | 대조·예약 취소 | 단순 닫기 | 매우 높음 · UI-5D |
| 학생 포털 미리보기 2곳 | lessons/records/homework/materials 등 읽기 | 없음 | 없음 | 단순 닫기 | 낮음 · UI-5B |
| 수업메모 | lesson record, 이전 record | memo/공개범위/확인 draft | record·연결 homework 저장 | 저장 후 닫기 | 높음 · UI-5D/UI-6 |
| 학부모/학생 알림톡 작성 | lesson record, template, jobs | 최종 문구 | AI 수정·record 저장·Solapi 예약/발송 | 미저장 confirm | 매우 높음 · UI-5D/UI-6 |
| 교사 출결 편집 | lesson record, attendance event | 상태/시간/사유 | 출결 저장·선택형 알림 | 확인 단계 뒤 닫기 | 매우 높음 · UI-5D |
| 출결 키오스크 대상 확인 | 당일 lessons/students | PIN 결과·수업 선택 | 출결 저장 | 확인 완료 전 유지 | 매우 높음 · UI-5D |
| 출결 키오스크 결과 | 출결 응답 | 없음 | 없음 | PIN 화면 복귀 | 낮음 · UI-5B |
| AI 데일리 리포트 | report model/snapshot | 초안 | snapshot 저장·모의 발송 | 단순 닫기 | 중간 · UI-5C |
| 수업 등록/수정 | lessons, students, templates, jobs/records 점검 | 전체 lesson form | lessons bulk·연결 명단/휴강 | 저장 중 닫기 차단 | 매우 높음 · UI-5D |
| 시험정보 수정 | exam_prep/Tally row | row draft | 상위 저장 callback | 단순 닫기 | 높음 · UI-5C/UI-6 |
| 시험 후 총평 | exam_prep row | 총평/AI draft | row 저장·AI 수정 | 미저장 confirm | 높음 · UI-5D/UI-6 |
| 반 명단 수정 | students, class template, future lessons | 학생 ID 배열 | 학생+미래 lesson 명단 | 저장 전 단순 닫기 | 매우 높음 · UI-5D |
| HWPX 내보내기 | 생성 문항 | 문서 옵션 | 브라우저 파일 생성 | 단순 닫기 | 낮음 · UI-5B |
| 보강/결석 취소 확인 | makeup, lesson, record, jobs | 확인 선택 | 다중 원천 취소·재조회 | 실행 전 단순 닫기 | 매우 높음 · UI-5D |
| 보충 완료 확인 | makeup task | 없음 | 완료 저장 | 저장 중 버튼 차단 | 높음 · UI-5D |
| 보충 일정 변경 확인 | makeup, jobs | 예약 선택 | 일정 저장·예약 갱신 | 실행 전 단순 닫기 | 매우 높음 · UI-5D |
| 학생별 보충관리 | makeup, lesson, record, jobs | 내용/일정/문구 draft | 저장·수업일지·예약/취소 | 단계별 저장 계약 | 매우 높음 · UI-5D/UI-6 |
| 최근 보충 이력 | makeup task 읽기 | 검색어 | 완료 복귀 저장 callback | 단순 닫기 | 높음 · UI-5D/UI-6 |
| 뽑은 문제 인쇄 | wrong problem/book 읽기 | 없음 | `window.print` | 단순 닫기 | 낮음 · UI-5B |
| 학생 추가/Tally | students, applicants, templates | 단건/일괄/Tally draft | 학생·반·미래 lesson 저장 | 모드별 draft 폐기 | 매우 높음 · UI-5D |
| 날짜별 학사일정 | school events | 행별 로컬 draft | 등록/저장/삭제 | 단순 닫기 | 높음 · UI-5D/UI-6 |
| 학사일정 등록/수정 | app_state school events | event form | app_state 저장 | 저장 전 draft 폐기 | 높음 · UI-5D/UI-6 |
| 월별 정산 출결 달력 | settlement 계산·lessons 읽기 | 없음 | 없음 | 단순 닫기 | 낮음 · UI-5B |
| 특강 신청 학생 연결 | applications/students | 검색·선택 | student/enrollment/application 저장 | 선택 draft 폐기 | 높음 · UI-5D |
| 특강 학생 수동 접수 | students/enrollments | 검색·다중 선택 | enrollment 저장 | 선택 draft 폐기 | 높음 · UI-5D |
| 특강 회차·진행 관리 | enrollment, lessons, records, jobs | 회차/시간 draft | enrollment+미래 lessons 재조회 | 미저장 plan 유지 계약 | 매우 높음 · UI-5D/UI-6 |
| 특강 진행 조회 | enrollment, lessons, records | 없음 | 수업일지 열기 | 단순 닫기 | 낮음 · UI-5B |
| 학생 프로필 render 오류 | render error | 없음 | 없음 | 프로필 닫기 | 낮음 · UI-5B |
| 학생 퇴원 확인 | student, lessons 경계 | 날짜/사유 | student+미래 roster | 실행 전 단순 닫기 | 매우 높음 · UI-5D |
| 학생 인수인계 PDF | student/lesson/record/Tally 읽기 | PDF용 코멘트 | `window.print`, 저장 없음 | draft 폐기 | 낮음 · UI-5B |
| 퇴원 중복 영구삭제 | student+전 원천 audit | 확인 체크/이름 | 운영 데이터 영구삭제·재조회 | audit/draft 폐기 | 최고 위험 · 독립 gate |
| 퇴원생 일괄 영구삭제 | 학생별 전 원천 audit | 확인 체크/이름 | 운영 데이터 다중 영구삭제 | audit/draft 폐기 | 최고 위험 · 독립 gate |
| 학생 프로필 | student, memo, consultation, score, tests, reminders | 다중 section draft | 여러 Supabase/app_state 저장·삭제 | section별 draft 계약 | 매우 높음 · UI-5D/UI-6 |

## 구현 순서

1. `UI-5A` 전수 inventory: 원천·draft·side effect·닫기 의미와 위험도 확정.
2. `UI-5B-1` 공통 dialog semantics: `role=dialog`, `aria-modal`, title 연결. 닫기/focus 동작 불변.
3. `UI-5B-2` 읽기 전용·파일 출력 모달: header/body/footer와 모바일 내부 스크롤 통일.
4. `UI-5C` 단일 원천·진입형 모달: action footer, 취소/닫기 문구, draft 폐기 안내.
5. `UI-5D` 다중 원천·위험 행동 모달: 모달별 독립 gate 뒤 한 번에 하나씩.
6. `UI-6` 저장 상태: draft→saving→verifying→saved/failed 표현과 닫기 차단을 원천 계약과 함께 통일.

## UI-5B-1 공통 dialog semantics

- 공통 shell에 `role=dialog`, `aria-modal=true`, `useId` 기반 title 연결을 추가했다.
- header를 숨기는 수업일지는 caller의 명시적인 `ariaLabel`을 사용한다.

### 변경 전 보존 계약

- `onClose`와 Escape 호출 횟수, X 버튼 표시 여부, backdrop 클릭 무동작을 유지한다.
- `hideHeader` 수업일지는 caller가 명시적인 접근성 이름을 제공한다.
- focus 자동 이동·trap·복귀는 이번 단위에 넣지 않는다.
- Supabase/app_state, notification_jobs/Solapi, Storage, 출결, 파일 출력은 호출하지 않는다.

## UI-5B-2 긴 읽기 전용 모달

- 공통 shell에 opt-in `scrollable`을 추가해 header는 고정하고 body만 `100dvh` 안에서 스크롤하도록 했다.
- 월별 정산 출결 달력, 특강 진행 조회, 최근 보충 이력, 학생 인수인계 PDF에만 적용했다.
- 자체 전체화면 스크롤이 있는 포털 미리보기, 작은 출결 결과, print CSS 예외가 있는 뽑은 문제 인쇄는 기존 규칙을 유지했다.
- 각 모달의 `onClose`, 검색, 수업일지 열기, 보충 완료 복귀, PDF 인쇄 callback은 변경하지 않았다.

## UI-5C-1 읽기 전용 출력 footer

- 공통 `ModalFooter`를 추가해 보조 행동은 왼쪽, 최종 출력 행동은 오른쪽 순서가 아니라 기존 DOM 순서를 유지하면서 동일한 footer shell을 사용하도록 했다.
- 뽑은 문제 인쇄와 학생 인수인계 PDF에 적용했다. 두 모달 모두 `닫기`와 `인쇄` callback 및 기존 문구를 그대로 유지했다.
- 뽑은 문제의 `noPrint`/`pickedProblemActions` class를 보존해 인쇄 출력에는 footer가 포함되지 않는다.
- 모바일에서는 각 footer 버튼이 최소 140px 기준으로 줄바꿈되며 전체 너비를 사용할 수 있다.

## UI-5C-2 로컬 결과·내보내기 footer

- 출결 키오스크의 저장 전 확인/수업 선택 영역은 출결 저장 callback이 있으므로 제외하고, 저장 응답을 보여 준 뒤 PIN 화면으로 돌아가는 결과창의 `닫기`만 공통 footer에 연결했다.
- HWPX 내보내기는 현재 브라우저 `Blob` 초안 파일만 생성하므로 `취소`와 `다운로드`를 공통 footer에 연결했다. 선택 0건 disabled, `handleDownloadHwpx`, 파일 생성 뒤 모달 닫기 순서는 그대로다.
- 결과창의 가운데 정렬을 위해 `ModalFooter align="center"`를 추가했다. desktop/mobile의 공통 간격과 줄바꿈 규칙은 UI-5C-1과 같다.
- Supabase/app_state, 출결 저장, AI 실행, Storage, notification_jobs/Solapi는 호출하거나 변경하지 않았다.

## UI-5C-3 혼합 쓰기 모달 분류

- 날짜별 학사일정은 전체 상단에 등록 진입, 각 일정 행에 저장·삭제와 로컬 draft가 함께 있어 단순 진입형이 아니다.
- 시험대비 상세는 읽기 요약 안에 일정 수정·삭제가 함께 있고, 최근 보충 이력은 완료 행의 `보충관리로 복귀`가 원천 저장 callback이다.
- 세 화면의 행동은 문맥 가까이에 그대로 유지하고 정적 계약으로 고정했다. footer 위치만 먼저 바꾸지 않고 각각 UI-5D 위험 행동/UI-6 저장 상태 계약에서 다룬다.
- 이 분류로 UI-5C의 안전한 읽기·로컬 행동 footer 범위를 닫는다.

## UI-5D-1 복구·보존형 위험 확인 footer

- 공통 `ModalFooter`에 `tone="danger"`를 추가해 위험 확인창의 action 경계선을 상태 위험색으로 구분했다. 기본 footer는 기존 중립색을 유지한다.
- 수업 취소 확인은 수업을 7일간 취소 상태로 보관한다는 기존 안내와 `setLessonDeleteModalId("")`/`confirmDeleteLesson(lessonId)`를 그대로 유지했다.
- 학생 퇴원 확인은 과거 학생·수업·기록·출결·숙제를 보존하고 다음 날 이후 명단에서만 제외한다는 기존 안내와 `setDeleteStudentId("")`/`confirmDeleteStudent`를 그대로 유지했다.
- 영구삭제, 보충·결석 취소, notification_jobs/Solapi 예약 취소는 이번 단위에서 제외했다. 실제 취소·퇴원 버튼도 실행하지 않았다.

## 다음 단위

`UI-5D-2`에서는 결석보강의 `보강만 취소·원 결석 유지`와 `원 결석 기록 취소` 확인창을 공통 위험 footer 후보로 다룬다. 두 mode의 영향 범위 문구, `isBusy` 닫기/실행 차단, `onCancel`/`onConfirm`을 먼저 고정하고 실제 Supabase·수업·예약 취소는 실행하지 않는다.

## 사람 검수

필수 중단 gate는 없다. 대표 모달의 dialog 이름, 네 개 긴 읽기 모달의 내부 스크롤, 출력·결과·내보내기·위험 footer의 desktop/390px 버튼 배치를 확인한다. PDF/문제 인쇄, HWPX 다운로드, 보충 완료 복귀, 수업일지 열기, 수업 취소·학생 퇴원은 누르지 않는다.
