# Exam Prep Center Refactor Inventory — 2026-07-23

## 범위

- 로드맵 14 `exam prep center`의 App.jsx 의미 단위 분리만 다룬다.
- 시험정보·시험 후 제출·기출문제 화면의 현재 동작과 원천을 보존한다.
- 별도 `ExamAnalysisPipelineCenter`와 시험분석 GPT Image 작업은 이번 범위가 아니다.
- 재시험/보충 운영 데이터, 고태영 데이터, 유료 AI 호출, 실제 파일 업로드를 만들지 않는다.

## 현재 원천과 side effect

| 영역 | 읽기/표시 원천 | local state 또는 draft | 저장/외부 side effect | 첫 분리 판단 |
| --- | --- | --- | --- | --- |
| 시험정보 목록 | `examPrepRows`, `students`, `classTemplates` | 검색어, 반, 고사, 수정/총평 modal ID | 없음 | 표시 model은 후속 순수 후보 |
| 시험정보 편집 | Supabase `exam_prep_rows` | 현재 row가 곧 controlled 입력값 | 입력마다 `/api/exam-prep-rows/bulk` | 수정 modal 표시는 안전하게 분리 가능 |
| 수학 시험 일정 | `mathExamDates`, `mathExamDate` | 빈 편집 row를 파생 | 두 필드를 연속 저장 | builder/action은 별도 gate |
| 시험정보 자동 생성 | 학생 학교·학년·교재, 현재 고사 | 없음 | 새 row를 자동 생성해 bulk 저장 | 첫 분리에서 제외 |
| 시험정보 삭제 | `examPrepRows`, 기존 시험대비 수업 | confirm 이후 optimistic 제거 | Supabase row DELETE, 연결 `lessons` bulk upsert/DELETE | 고위험, 첫 분리에서 제외 |
| 시험 후 제출 대상 | `examPostTargetStudentIds` | checkbox 선택 | 전체 `sharedAppState` 자동저장 | 포털 사람 gate와 함께 보류 |
| 학생 시험 후 제출 | `examPostSubmissions` | 학생 draft/선택 파일은 분리된 portal panel 소유 | 인증 API, app_state 재조회, Storage 업로드/정리, 교사 확인 API | 기존 사람·보안 gate 때문에 이동 금지 |
| 시험 후 총평 | row의 `review`, `revisedReview`, `reviewAiStatus` | modal `reviewDraft`, 500ms timer | `exam_prep_rows` 저장, `/api/ai/comment-polish` | draft/AI/save가 함께 있어 별도 gate |
| Tally CSV | `tallySubmissions`, `tallySummaries` | import 상태와 파생 summary | 전체 `sharedAppState` 자동저장 | 현재 탭 UI에는 노출되지 않는 legacy 경로로 보존 |
| 기출문제 | 고정 Google Apps Script URL | iframe key/load state | 외부 iframe 로드만 수행 | 표시 컴포넌트 후속 후보 |
| 학사일정/시험대비 수업 | `schoolEvents`, `examPrepRows`, `lessons` | 달력 modal state | school event 저장, exam row 저장, 시험대비 lesson 생성/갱신 | roadmap 15와 겹치므로 이동 금지 |

## 이미 분리된 경계

- 학생 시험 후 제출 폼: `src/domains/portals/StudentExamPostSubmissionPanel.jsx`
- 시험 후 제출 API client: `src/domains/portals/examPostApi.js`
- 시험 후 제출 선택지: `src/domains/exams/postSubmissionOptions.js`
- 날짜 범위 helper: `src/domains/schoolCalendar/schoolCalendarUtils.js`
- 저장 상태/모달/자동저장 경고: `src/shared/components`

## 유지보수 세션으로 넘길 진단

- `persistExamPrepRows`는 POST 성공만으로 `saved`를 표시하고 Supabase 재조회·필드 대조를 하지 않는다.
- 시험 범위·부교재·수정 modal 입력은 row 자체를 controlled 값으로 사용하며 입력마다 저장 요청을 만든다. 명시적 local draft나 안전한 debounce가 없다.
- 수학 일정 수정은 `mathExamDates`와 `mathExamDate`를 별도 연속 요청으로 저장한다.
- `examPostTargetStudentIds`, `tallySubmissions`, `tallySummaries`는 작은 변경도 `sharedAppState` 전체 snapshot 자동저장을 일으킨다.
- 위 항목은 기능 수정이므로 이 리팩터링 세션에서는 고치지 않는다.

## 14A-1 첫 안전 단위

- `ExamPrepEditModal`을 `src/domains/exams/ExamPrepEditModal.jsx`로 이동한다.
- 새 컴포넌트는 현재 row, 저장 상태, 수학 일정 accessor/action, row update/close callback과 자동저장 경고 config만 받는다.
- 입력값·문구·DOM 순서·callback 인수를 그대로 유지하고 state/effect/API를 소유하지 않는다.
- `exam_prep_rows`, `app_state`, lessons, AI, Storage, Google Apps Script를 직접 읽거나 쓰지 않는다.
- production scenario의 `ExamPrepEditModal` 검사 원천을 새 파일까지 확장하되 기대 동작을 낮추지 않는다.

## 이후 후보와 중단 조건

1. 목록 filter/선택 row/save-state 파생 model
2. 기출문제 iframe 표시 panel
3. 시험 후 제출 teacher 표시 shell
4. 시험 후 총평 draft/action
5. 시험정보 저장·삭제·수업 reconcile orchestration

학생 제출·교사 확인·Storage 파일 열기 경계를 건드리면 기존 학생 포털 실제 쓰기와 bearer/Storage gate에서 중단한다. 시험정보 삭제나 시험대비 수업 생성·삭제를 옮길 때는 별도의 격리 데이터와 사람 gate가 필요하다. 순수 표시/model 단위는 deterministic fixture와 production test/build로 검증하고 운영 데이터를 만들지 않는다.
