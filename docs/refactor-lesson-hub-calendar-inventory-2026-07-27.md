# Lesson Hub / Calendar 리팩터링 inventory — 2026-07-27

## 범위와 원칙

로드맵 15는 교사 수업 달력의 표시 구조와 수업 생성·수정 모달 경계를 의미 단위로 분리한다. 이번 inventory는 읽기 전용 조사이며 운영 Supabase, `notification_jobs`, Solapi, 출결, 숙제, 수업일지를 수정하지 않았다.

다음 영역은 로드맵 15에 섞지 않는다.

- `LessonJournalDetail`의 출결·숙제·알림 저장은 로드맵 17에서 다룬다.
- 보충 수업 상세와 시험대비 수업 상세는 각 전용 원천과 모달을 유지한다.
- 수업 복사·붙여넣기·되돌리기·취소의 저장 신뢰성 문제는 유지보수 큐에서 먼저 해결한 뒤 이동한다.
- 자동 생성 수업의 계획·정규화·저장은 학교 일정과 시험대비 원천을 함께 쓰므로 별도 고위험 단위로 둔다.

## 현재 활성 진입점

```text
Supabase lessons
  + app_state generatedLessonControls / deletedLessonBundles
  + React selectedDate / selectedLessonId / clipboard / undo
                         |
                         v
                App의 calendarLessons 파생
                         |
                         v
                 TeacherLessonHubV2
                    |          |
             달력 표시/선택     상세 라우팅
                               |- 보충: SupplementMakeupLessonDetail
                               |- 시험대비: ExamPrepLessonDetail
                               `- 그 외: LessonJournalDetail
```

- 실제 교사 화면은 `App.jsx`의 `<TeacherLessonHubV2>` 한 곳에서 열린다.
- `TeacherLessonHubV2`는 필터·월 이동·키보드 단축키·달력 표시·상세 라우팅을 함께 소유하지만 실제 저장은 주입받은 callback으로 App에 돌려준다.
- `LessonModal`은 입력 draft와 검증 메시지를 소유하고, 직접 API를 호출하지 않고 `onSubmit`을 사용한다.
- `TeacherLessonHub`, `TeacherMonthCalendar`, `LessonHub`, `MonthCalendar`, `LessonDetail`은 정의만 남고 활성 JSX 호출이 없는 legacy 묶음이다.

## 컴포넌트 경계

| 단위 | 활성 여부 | 읽는 원천 | 쓰는 원천/side effect | 위험도 | 다음 조치 |
|---|---|---|---|---|---|
| `TeacherLessonHubV2` | 활성 | 달력 수업, 선택 날짜/수업, 기록·학생·숙제, 저장 상태 | callback만 호출 | 중간 | 표시와 상세 라우팅을 나눌 후보 |
| `LessonModal` | 활성 | 학생·반 템플릿·기존 수업·기록·알림 job | local draft, `onSubmit` callback | 중간 | callback 계약을 고정한 뒤 전용 파일 후보 |
| `LessonJournalDetail` | 활성 | 수업·출결·숙제·알림 원천 | 다중 저장·Solapi orchestration | 매우 높음 | 로드맵 17 전 이동 금지 |
| `SupplementMakeupLessonDetail` | 활성 | 보충 task와 원 결석/숙제 맥락 | 보충 전용 callback | 높음 | 로드맵 12 경계 유지 |
| `ExamPrepLessonDetail` | 활성 | 시험정보와 시험대비 수업 | 시험대비 전용 callback | 높음 | 로드맵 14 경계 유지 |
| legacy hub/calendar/detail 5개 | 비활성 | 전달받은 배열만 사용 | callback만 호출 | 낮음 | 15A에서 제거 |

## 저장 원천과 side effect

| 원천 | 현재 역할 | 저장 위치 | 로드맵 15 경계 |
|---|---|---|---|
| `lessons` | 달력과 상세의 직접 원천 | Supabase `lessons` | 표시 분리는 가능, mutation 이동은 별도 gate |
| `lesson_student_records` | 상세 출결·수업기록 | Supabase | 로드맵 17까지 이동 금지 |
| `homeworks` | 수업별 숙제와 복사/복구 대상 | Supabase | 복사·되돌리기 보강 전 이동 금지 |
| `notification_jobs` / Solapi | 수업 알림 예약·취소 | Supabase / 외부 서비스 | 표시 리팩터링과 분리, 실제 호출 금지 |
| `deletedLessonBundles` | 취소 전 lesson/record/homework snapshot | `app_state` + local mirror | 취소·복구 계약과 함께 다룬다 |
| `generatedLessonControls` | 자동 후보 수동 override/suppression | `app_state` + local mirror | 자동 생성 저장 단위와 함께 다룬다 |
| 선택 날짜·수업·clipboard·undo stack | 현재 UI 조작 | React local state | 저장이 없는 탐색/표시만 우선 분리 가능 |

## 사용자 동작별 위험도

| 동작 | 현재 동작 | 외부 쓰기 | 판단 |
|---|---|---|---|
| 월 이동·날짜 선택·필터 | React state와 파생 목록만 변경 | 없음 | 낮음 |
| 수업 복사 | clipboard에 snapshot 저장 | 없음 | 낮음 |
| 붙여넣기 | local lesson을 먼저 추가하고 숙제 bulk·lesson POST | `homeworks`, `lessons` | 높음 |
| 생성 작업 되돌리기 | local 배열에서 생성 수업 제거 | 서버 삭제/취소 확인 없음 | 유지보수 진단 필요 |
| 삭제 작업 되돌리기 | lesson·record·homework local 복원 후 각 API 저장 | 다중 Supabase 원천 | 매우 높음 |
| 수업 취소 | bundle snapshot 후 local 제거, canceled lesson POST | `lessons`, app state | 높음 |
| 수업 생성·수정 | bulk 저장, Supabase 재조회, snapshot 대조 | `lessons` | 높음이나 현재 검증 경계 보유 |
| 휴강 전환 | 최신 row·수업기록·알림 job 사전점검 후 bulk 저장 | `lessons`, read-only preflight | 매우 높음 |
| 자동 후보 저장 | 시험정보·학교일정에서 lesson을 생성/정규화 | `lessons`, app state | 매우 높음 |

## 유지보수 세션에 넘길 진단

아래는 이번 리팩터링에서 고치지 않는다.

1. 붙여넣기는 optimistic local 반영 뒤 숙제 bulk와 lesson POST를 실행하지만, 현재 코드 경계에는 수업 생성 모달과 같은 Supabase 재조회·snapshot 대조·사용자 저장 상태가 없다.
2. 붙여넣기로 만든 `create` undo는 local lesson만 제거하며 이미 성공한 서버 lesson을 취소하거나 삭제하는 명시적 호출이 보이지 않는다. 실제 새로고침 복귀 여부를 격리 TARGET/CONTROL로 확인하고 저장 신뢰성 작업에서 수정해야 한다.
3. generic lesson `DELETE`는 알림 job 취소와 연결 숙제·수업기록·lesson 삭제를 수행하는 파괴적 API다. 활성 달력의 일반 취소는 canceled lesson POST를 사용하므로 두 의미를 한 handler나 한 리팩터링 단위로 합치면 안 된다.

## 분리 순서

1. **15A — 비활성 legacy 묶음 제거 — 완료**
   - `TeacherLessonHub`, `TeacherMonthCalendar`, `LessonHub`, `MonthCalendar`, `LessonDetail`만 제거한다.
   - 원천·API·React state·화면 동작 변화가 없음을 정적 fixture와 production test/build로 확인한다.
   - 사람 gate는 필요하지 않다.
2. **15B — 순수 달력 표시 모델 — 완료**
   - 필터된 수업, 선택 월 건수, 월별 cell/pill 표시값 계산을 순수 함수로 분리한다.
   - 합성 수업 fixture로 정규·휴강·보충·시험대비·특강 분류를 고정한다.
3. **15C — 활성 달력 presentational component — 완료**
   - 필터/header/grid 표시를 전용 파일로 옮기고 선택·월 이동 callback만 주입한다.
4. **15D — `LessonModal` callback-only UI — 완료**
   - 15D-1 완료: 활성 학생 필터·검색·학년 순서·그룹 생성을 `lessonModalStudentModel.js` 순수 모델로 분리했다.
   - 15D-2 완료: 이름·날짜·시간·휴강 보충 입력 validation과 submit payload 계산을 `lessonModalDraftModel.js` 순수 모델로 분리했다.
   - 15D-3 완료: 반 템플릿 선택, 수업 유형 변경, 날짜 변경과 색상 선택지의 draft patch 계산을 `lessonModalDraftTransitions.js`로 분리했다.
   - 15D-4 완료: 모달 최초 local draft 초기값과 두 lesson ID factory를 `lessonModalInitialDraft.js`로 분리했다. `Date.now()`를 쓰는 기존 ID source는 App에 두고 각 factory를 기존 `useState` lazy initializer 안에서 한 번씩 호출한다.
   - 15D-5 완료: 저장 실패 뒤 입력 변경 시 dirty 복귀, validation 실패, 저장 중·완료·실패 표시값을 `lessonModalSaveState.js` 순수 모델로 분리했다.
   - 15D-6 완료: 학생 검색·학년 그룹·선택 chip JSX를 controlled `LessonModalStudentPicker`로 옮기고 state와 선택 patch는 App에 뒀다.
   - 15D-7 완료: 휴강 전환 안내·선택형 보충 입력 JSX를 controlled `LessonModalClosurePanel`로 옮기고 사전점검 계산과 state는 App에 뒀다.
   - 15D-8 완료: 수업 유형·반 템플릿·색상·이름·날짜·시간 JSX를 controlled `LessonModalBasics`로 옮기고 모든 draft state와 handler는 App에 뒀다. 휴강 panel은 `children`으로 유형 탭과 나머지 필드 사이의 기존 순서를 유지한다.
   - 15D-9 완료: 저장 상태와 저장/취소 action footer JSX를 controlled `LessonModalActions`로 옮기고 submit·close callback은 App에 뒀다.
   - 15D-10 closeout 완료: App에 남은 `LessonModal`은 local React draft와 child composition, 주입된 `onSubmit` 호출만 소유한다. 직접 input/button JSX와 fetch/API/Supabase/알림 side effect가 없음을 production fixture로 고정했다. inventory의 원래 계약대로 실제 저장 controller와 App-local helper를 dependency container로 억지 이동하지 않는다.
   - local draft·진행 표시를 전용 파일로 옮기되 API와 저장 controller는 App에 둔다.
5. **15E — 키보드 탐색 hook — 완료**
   - 15E-1 완료: 입력 요소 예외, 수업일지 열림 차단, Ctrl/Cmd C·V·Z, Delete, Enter, 방향키 action 판정을 `lessonCalendarKeyboardModel.js` 순수 모델로 분리했다.
   - 15E-2 완료: window keydown 등록·해제, action이 있을 때만 `preventDefault`, 기존 callback dispatch를 `useLessonCalendarKeyboardNavigation.js`로 옮겼다. callback이 소유한 복사·붙여넣기·undo·삭제·열기·날짜 이동 동작과 저장 경계는 변경하지 않았다.
6. **15F 이후 — 저장 orchestration**
   - 15F-0 완료: `docs/refactor-lesson-save-orchestration-inventory-2026-07-28.md`에 modal bulk POST → Supabase source 확인 → 전체 lessons 재조회 → snapshot 대조 → React state 교체 순서와 서버의 제외 학생 알림 취소·수업기록 삭제 side effect를 기록하고 fixture로 고정했다.
   - 15F-1 완료: 저장 후 대조 필드·시간·명단·학생별 특강 일정 정규화를 `lessonModalSaveSnapshot.js` 순수 helper로 옮겼다. modal 저장과 보강 취소 재조회가 같은 helper를 사용한다.
   - 15F-2 완료: 신규 수업과 선택형 휴강 보충의 payload 조립을 `lessonModalPayloadBuilders.js`로 옮겼다. App은 template·학생·ID와 기존 요일·색상 resolver를 주입하고 실제 bulk 저장을 계속 소유한다.
   - 15F-3 완료: closure preflight와 활성·과거 학생 명단 확정은 App에 둔 채 기존 수업 수정 payload 조립을 같은 builder로 옮겼다. 최신 원천의 teacher·특강 track/meta·기타 필드를 보존하고 UI-only generated flag만 기존처럼 제거한다.
   - 15F-4 완료: expected lesson 순서대로 persisted row를 찾고 snapshot 일치·누락·불일치 오류를 판정하는 로직을 `lessonModalSaveVerification.js` 순수 모델로 옮겼다.
   - 15F-5 완료: TARGET/CONTROL 가상 수업·수업기록·알림 job을 메모리에 만들고 TARGET 제거 뒤 발송 전 TARGET job·record만 정리되며 CONTROL·sent 이력·다른 수업 데이터가 보존되는 것을 서버 실제 필터와 대조했다.
   - 생성·수정 bulk 저장은 기존 read-after-write 계약을 먼저 fixture로 고정한다.
   - 복사·붙여넣기·undo·취소는 위 유지보수 진단이 main에서 해결되고 격리 gate를 통과하기 전 이동하지 않는다.

## 이번 inventory의 gate

- AI 검수: 활성/비활성 참조 수, 저장 원천, 외부 side effect, low-risk 첫 후보를 정적 분석으로 확인한다.
- 사람 검수: 없음. 화면·운영 데이터·외부 서비스를 변경하지 않았다.
- 다음 단계: 15F-6에서 가상 gate를 기준으로 bulk POST/GET 순서를 주입형 controller로 분리한다. React state 교체와 실제 request 구현은 App에 둔다.
