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

### 14A-1 구현 결과

- 완료: 기본 정보, 시험기간, 수학 시험 일정, 시험 내용, 저장 상태와 닫기 버튼 DOM을 전용 component로 이동했다.
- App은 `examPrepAutosaveRisk`, 현재 row/save state와 기존 update/add/remove/close callback을 그대로 주입한다.
- 새 파일에는 React state/effect와 fetch/postJson이 없고 Supabase/app_state/lessons/AI/Storage를 직접 참조하지 않는다.
- production scenario 466/466, build, `git diff --check`를 통과했다. 운영 데이터와 외부 요청은 없었으므로 추가 사람 gate는 없다.

## 14A-2 기출문제 표시 panel

- 완료: 기출문제 toolbar, 다시 불러오기, 새 창 링크, loading 표시, iframe과 도움말을 `ExamPrepPastPaperPanel.jsx`로 이동했다.
- App은 고정 archive URL, frame key/load state와 reload/load callback을 계속 소유한다.
- 새 panel에는 state/effect/fetch/postJson이 없고 Google Apps Script iframe을 전달받은 URL로 표시할 뿐이다.
- production scenario 467/467, build, `git diff --check`를 통과했다. 외부 iframe 실제 접속이나 사람 화면 gate는 필요하지 않았다.

## 14A-3 시험관리 목록 display model

- 완료: 활성 학생·선택 반의 학교/학년 key, 고사, 검색어로 표시 row를 고르고 수정/총평 modal row, 선택 반, 표시 row aggregate 저장 상태를 만드는 계산을 `examPrepCenterModel.js`로 이동했다.
- App은 기존 dedupe, 학교/학년 key, 수학 일정 normalize, aggregate save-state helper를 주입하고 model 결과만 화면에 사용한다.
- deterministic fixture는 퇴원/다른 반 제외, 고사 fallback, dedupe, 수학 일정·일반 문구 검색, 보이지 않는 modal row 차단, 표시 row만의 저장 상태 집계를 검증한다.
- 새 model에는 React state/effect와 fetch/postJson이 없다. production scenario 468/468, build, `git diff --check`를 통과했고 추가 사람 gate는 없다.

## 14A-4 시험 후 제출 teacher manager

- 완료: 교사의 셀프체크 대상 선택, 제출 통계·내용·첨부 링크, 교사 확인 버튼과 저장 feedback을 `ExamPostSubmissionManager.jsx`로 이동했다.
- App이 대상 builder, 학교/학년 match, 수학 일정/label formatter, 파일 URL builder, 대상 app_state setter와 교사 확인 callback을 모두 주입한다.
- 새 component에는 state/effect/fetch/postJson/API 경로가 없고 기존 callback만 호출한다. 학생 제출·Storage 업로드/열기·교사 확인 API 구현은 원래 경계에 남는다.
- production scenario 469/469, build, `git diff --check`를 통과했다. 실제 학생/Storage 작업을 하지 않았으므로 기존 학생 포털 실제 쓰기와 bearer/Storage 사람 gate는 통과로 바꾸지 않는다.

## 14A-5 시험 후 총평 순수 draft helper

- 완료: 10개 체크리스트 config, 초안 생성/normalize, row scope·부교재 동기화, section 읽기/쓰기와 블로그 발췌 계산을 `examReviewDraft.js`로 이동했다.
- deterministic fixture를 `npm run test:production`에 연결했고 자유 형식 보존, 학교명/title 갱신, multi-line normalize, scope·부교재 동기화, section/블로그 발췌를 검증한다.
- 새 module에는 React state/effect, timer, API/AI/Supabase 호출이 없다. production scenario 470/470, build, `git diff --check`를 통과했다.
- 14A-5 fixture에서 2번 config title `난이도/체감`과 저장 label `2. 난이도 :`가 달라 getter/setter가 기존 줄을 찾지 못하는 기능 불일치를 발견했다.

## 14A-5F 시험 후 총평 난이도 저장 label 호환 수정

- 사용자 승인으로 getter/setter의 탐색 원천을 표시 title이 아니라 저장 `section.label`로 바꿨다.
- 기존 `exam_prep_rows.review`의 `2. 난이도 :` 문자열을 migration하거나 문구를 바꾸지 않는다. 기존 값을 읽고 같은 행을 갱신하며 별도 `2. 난이도/체감 :` 행을 만들지 않는다.
- deterministic fixture가 기존 label 읽기·수정, 2번 행 단일 유지, 블로그 발췌 반영을 검증한다. production scenario 470/470, build, `git diff --check`가 통과했다.
- 순수 문자열 호환 수정이므로 운영 시험 row와 사람 화면 조작은 필요하지 않다.

## 14A-6 시험 후 총평 draft 저장 타이머 controller

- 500ms debounce, 최신값 보관, blur/닫기 flush, unmount cancel을 `examReviewDraftSaveController.js`로 이동했다.
- controller는 전달받은 `saveValue` callback만 실행하고 React state/effect, `onUpdateRow`, `persistExamPrepRows`, API/Supabase, AI 요청을 소유하지 않는다.
- fake timer fixture가 직전 timer 취소, 최신값 단일 저장, blur/close 즉시 flush, unmount cancel과 500ms 계약을 검증한다.
- production scenario 470/470, build, `git diff --check`를 통과했으며 운영 row·AI·Supabase 호출은 없다.

## 14A-7 시험 후 총평 AI request adapter

- 맞춤법 전용 payload와 `/api/ai/comment-polish` POST·JSON·오류 계약을 `examReviewApi.js`로 이동했다.
- App은 AI 진행/완료/실패 상태와 `revisedReview` 저장 callback을 계속 소유하며 adapter에는 React state나 Supabase 저장이 없다.
- fake fetch fixture가 전체 payload, URL/header/body, 성공 result와 서버/기본 오류를 검증한다. 실제 유료 AI 호출은 0회다.
- production scenario 471/471, build, `git diff --check`를 통과했다.

## 14A-8 시험 후 총평 draft React state hook

- draft 초기화, examPrepId 전환 동기화, normalize callback, section/원문 변경과 save controller 연결을 `useExamReviewDraftState.js`로 이동했다.
- hook은 주입된 `onUpdateRow`만 호출하고 App의 실제 row persistence/save state, AI/clipboard action, modal DOM은 계속 외부에 둔다.
- production 계약이 App의 legacy state/timer 연결 제거와 hook 내부 fetch/postJson 부재를 검사한다.
- production scenario 472/472, build, `git diff --check`를 통과했고 운영 row를 쓰지 않았다.

## 14A-9 시험 후 총평 AI/clipboard action hook

- AI 진행/완료/실패 callback과 request adapter 연결, 수정본 복사·1.8초 상태 timer, revisedReview 변경 callback을 `useExamReviewComposerActions.js`로 이동했다.
- action은 사용자 클릭/입력으로만 실행되며 App이 provider/model/prompt/date, row와 실제 저장 callback을 주입한다.
- production 계약이 AI/clipboard/status 순서와 App legacy handler 제거를 검사한다. 실제 AI·clipboard 실행은 0회다.
- production scenario 473/473, build, `git diff --check`를 통과했다.

## 14A-10 시험 후 총평 작성 모달 DOM

- modal DOM과 14A-8 draft state hook, 14A-9 AI/clipboard action hook 조립을 `ExamReviewComposerModal.jsx`로 이동했다.
- App은 resolved AI 설정, autosave 위험 정보, 현재 날짜, row/save state와 실제 row update callback만 주입한다.
- 닫기 전 pending save flush, `InlineSaveStatus`, autosave 위험 안내를 보존했고 시험정보 저장·삭제·수업 reconcile orchestration은 이동하지 않았다.
- production 계약이 App legacy DOM 제거, 전용 파일의 hook/DOM 조립과 App 소유 설정·저장 callback 주입을 검사한다. 실제 AI·clipboard·Supabase·운영 데이터 호출은 0회다.
- production scenario 474/474, build, `git diff --check`를 통과했다.

## 14B-1 시험정보 row API transport

- bulk row 저장과 단일 row 삭제 transport를 `examPrepRowsApi.js`로 이동했다.
- App이 기존 `postJson`, `fetch`, `apiUrl`을 주입하고 request 순번/save state와 낙관적 삭제·실패 복구·lesson reconcile을 계속 소유한다.
- fake fixture가 bulk URL/payload, 삭제 URL encoding·DELETE method, 성공·서버 오류·기본 오류를 검증한다. 실제 Supabase·운영 row·lesson 요청은 0회다.
- production scenario 475/475, build, `git diff --check`를 통과했다.

## 14B-2 시험정보 row 저장 상태 controller

- row별 request 순번과 `saving/saved/failed`, 최신 request 결과만 상태에 반영하는 조건을 `examPrepRowSaveController.js`로 이동했다.
- App이 request ID map, React setter와 14B-1 API request callback을 주입한다. controller에는 row state, fetch/postJson, lesson reconcile이 없다.
- 겹친 deferred 요청 fixture가 먼저 끝난 이전 요청의 결과 무시와 최신 요청의 완료/실패 상태를 검증한다. 실제 API 호출은 0회다.
- production scenario 476/476, build, `git diff --check`를 통과했다.

## 14C-1 시험정보 연결 수업 reconcile plan

- 다음 시험정보 rows와 현재 lessons에서 `lessonsToSave`/`lessonIdsToDelete`를 계산하고 local 배열에 적용하는 순수 함수를 `examPrepLessonReconcilePlan.js`로 이동했다.
- App이 candidate builder, identity selector, 시험대비 수업 판정과 현재 원천을 주입하며 React state, lesson API 요청, 시험정보 row 삭제·복구를 계속 소유한다.
- identity 매칭, persisted lessonId 보존, 변경/동일/삭제/정규수업 보존을 합성 fixture로 검증했다. 실제 row/lesson 요청은 0회다.
- production scenario 477/477, build, `git diff --check`를 통과했다.

## 14C-2 시험정보 연결 수업 API transport

- `/api/lessons/bulk` 저장과 단일 lesson DELETE를 `examPrepLessonApi.js`로 이동했다.
- App이 request/fetch/URL resolver를 주입하고 plan, React state, 오류 처리, 시험정보 row 삭제·복구를 계속 소유한다.
- fake fixture가 bulk URL/payload, lessonId URL encoding, DELETE method와 응답 전달을 검증한다. 실제 row/lesson 요청은 0회다.
- production scenario 478/478, build, `git diff --check`를 통과했다.

## 이후 후보와 중단 조건

1. 시험정보 삭제와 연결 수업 reconcile side-effect orchestration

다음 단위 착수 gate: 2026-07-23 AI가 학생 연결 0건인 `REF-GATE-14C3-TARGET`/`REF-GATE-14C3-CONTROL` 시험정보 row와 각각의 미래 시험대비 수업 4건을 운영 원천에 준비하고 재조회했다. 사용자는 `시험관리`에서 TARGET row만 삭제·확인·새로고침하고 CONTROL은 삭제하지 않는다. 완료 보고 뒤 AI가 TARGET row/수업 4건 삭제, CONTROL row/수업 4건과 기존 정규수업 유지를 Supabase 원천에서 대조하고 CONTROL 테스트 데이터를 정리한다. 하나라도 다르면 14C-3을 중단하고 유지보수 진단으로 넘긴다.

학생 제출·교사 확인·Storage 파일 열기 경계를 건드리면 기존 학생 포털 실제 쓰기와 bearer/Storage gate에서 중단한다. 시험정보 삭제나 시험대비 수업 생성·삭제를 옮길 때는 별도의 격리 데이터와 사람 gate가 필요하다. 순수 표시/model 단위는 deterministic fixture와 production test/build로 검증하고 운영 데이터를 만들지 않는다.
