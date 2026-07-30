# UI-8A Lesson Hub·월간 달력 inventory — 2026-07-29

## 범위

현재 `activeView === "lessons"`에 실제 연결된 `TeacherLessonHubV2`와 월간 달력만 읽기 전용으로 조사했다. 미사용 구형 `TeacherLessonHub`·`LessonHub`는 구현 대상으로 섞지 않았다. 수업 등록·열기·수정·취소, 출결, 알림, Supabase와 운영 원천은 실행하거나 변경하지 않았다.

## 현재 화면 흐름

1. 운영 알림 원본
2. 직전수업 자동 저장 상태가 있을 때만 상태/재시도
3. 월간 수업 달력
4. 수업 pill 선택 시 수업일지·시험대비·보충 전용 modal

`NavigationHeader`에는 월 이전/다음, 수업 등록, 월 정규수업 열기, 7개 수업 종류 필터, 출결 동기화 상태가 보존되어 있다. 다만 2026-07-28 사용자 요청에 따라 `.teacherCalendarTop { display:none; }`으로 숨긴 상태다. UI-8A는 이 결정을 임의로 되돌리지 않는다.

## 보존할 동작

| 대상 | 현재 동작 |
| --- | --- |
| 날짜 cell | `onDateSelect(day.date)` |
| 수업 pill | event 전파 차단 후 `onOpenLessonJournal(lessonId)` |
| 월 이동 | `onMoveDate(-30/30)` 및 달력 keyboard 방향키 |
| 편집 단축키 | 입력창·수업일지 밖에서 copy/paste/undo/delete/enter |
| 수업 등록/월 열기 | 기존 `onAddLesson`·`onOpenMonthlyRegularLessons` |
| filter | `lessonTypeFilter` local state와 현재 월 결과 건수 |

숨긴 header의 callback과 state는 삭제하지 않는다.

## 확인된 UI 예외

- 달력은 7열 `minmax(0,1fr)`이고 `.calendarGrid`가 `overflow:hidden`이라 390px에서 각 날짜가 약 50px로 압축된다.
- 수업 pill은 ellipsis로 줄어들어 날짜·시간·반 이름·수업 유형을 한 시선에 읽기 어렵다.
- `.teacherCalendarShell`에는 내부 가로 scroll, 영역 이름, keyboard focus가 없다.
- 달력 cell은 click 가능한 `div`이고 현재 날짜의 `selected`는 CSS로만 표현된다. 실제 수업 pill은 button이라 focus와 44px touch 계약을 이미 가진다.
- 숨긴 header를 다시 노출하는 일은 모바일 scroll 보강과 분리해야 한다.

## 연쇄 구현

1. `UI-8A-1`: 640px 이하에서 teacher calendar만 최소 폭을 유지하고 shell 내부 가로 scroll·overscroll·touch pan·focus를 제공한다. 페이지 전체 가로 overflow는 만들지 않는다.
2. `UI-8A-2`: 달력 grid/weekday/day의 현재 날짜 semantics를 보강하되 날짜 선택·수업 pill callback과 전역 keyboard 동작을 보존한다.
3. `UI-8A-3`: 숨긴 header state/callback, 날짜 선택, 수업일지 진입, 모바일 내부 scroll의 대표 회귀를 고정하고 사람 시각 절차를 누적한다.

## 사람 검수

inventory는 화면을 바꾸지 않아 필수 중단 gate가 없다. 구현 뒤 390px에서 달력 내부 가로 scroll과 날짜/수업 가독성만 확인하며, 수업 등록·열기·수정·취소·출결·알림은 실행하지 않는다.

## 진행 갱신

- UI-8A-1: 월간 달력에 동적 영역 이름·keyboard focus를 제공하고, 640px 이하에서 760px 7열 폭을 shell 내부 가로 touch scroll로 볼 수 있게 했다.
- 숨긴 header, 날짜·수업 callback과 운영 원천은 변경하지 않았다.
- UI-8A-2: calendar grid·요일·날짜 semantics, 날짜·수업 건수 이름, 선택 날짜 roving focus와 Enter/Space 선택을 제공했다.
- 수업 pill 등 자체 interactive element에서는 전역 달력 단축키가 개입하지 않도록 경계를 분리했다.
