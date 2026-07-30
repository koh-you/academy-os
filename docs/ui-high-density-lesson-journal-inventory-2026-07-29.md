# UI-8B 수업일지 고밀도 화면 inventory — 2026-07-29

## 범위

현재 `TeacherLessonHubV2`가 선택한 일반 수업을 `Modal` 안의 `LessonJournalDetail`로 여는 실제 운영 경로만 읽기 전용으로 조사했다. 수업일지 저장, 출결, 수업 수정·취소, 알림 계획 변경, 예약 확인·적용, Solapi 결과 대조는 실행하거나 변경하지 않았다.

## 현재 화면 흐름

1. 수업 맥락 `NavigationHeader`
   - 뒤로가기, 반 이름, 날짜·시간·학생 수, 수업 주제
   - `수업 수정`, `수업 취소 처리`
2. 조건부 운영 맥락
   - 휴강·휴강 보충 안내
   - 현재 학생과 연결된 운영 알림
3. 발송 상태와 작업
   - Academy OS 알림 계획, 하원 미체크, Solapi 대조 상태
   - 수정 시작, 예약 설정, 예약 확인, 발송 결과, Solapi 적용
4. 학생 기록 표
   - 학생, 수업메모, 출결, 교재, 강의 내용, 지난·다음 숙제, 과제 상태, 학부모·학생 알림톡의 10열
5. 편집 중 하단 고정 저장 바
   - 현재 저장 상태·메시지, `변경 저장`
6. 수업메모·알림 작성·예약 확인·학생 미리보기의 하위 modal

## 원천·callback·side effect 보존 계약

| 영역 | 읽는 원천/상태 | 유지할 callback·동작 | UI-8B에서 실행 금지 |
| --- | --- | --- | --- |
| 수업 맥락 | `lesson`, `lessonStudents`, 수업 유형·휴강 연결 | `onBack`, `onEditLesson`, `onDeleteLesson`, 시험대비 열기 | 수업 수정·취소 |
| 학생 기록 | `records`, `homeworks`, 이전 기록·메모, 학생별 스케줄 | 출결 열기, 메모 draft, 숙제·과제 상태 변경 | 출결 저장, 기록 저장 |
| 알림 계획 | `lessonNotificationPlan`, `notificationJobs`, Solapi 대조 상태 | 계획 select, 예약 modal, 결과 refresh, 예약 적용 | 계획 변경, 예약·발송·취소, 외부 조회 실행 |
| 학생별 알림 | 기록별 코멘트·mute 상태 | 작성 modal, 학생/학부모 제외 toggle | 코멘트 저장·발송, mute 저장 |
| 저장 바 | journal draft·homework draft·save state | `saveJournalDrafts`와 기존 disabled 조건 | `변경 저장` 실행 |

UI-8B는 CSS와 읽기 semantics만 바꾸며 Supabase, `app_state`, `lesson_student_records`, `notification_jobs`, Solapi 호출 순서·payload·재조회 범위를 바꾸지 않는다.

## 확인된 모바일 예외

- 수업일지 modal은 `max-height: calc(100vh - 36px)`와 backdrop 18px를 사용한다. 공통 scroll modal의 `100dvh` 계약과 달라 iOS 주소창·하단 safe-area가 변할 때 아래쪽이 잘릴 수 있다.
- 1450px 최소 폭의 학생 기록은 공통 `DataTableShell`이 이미 내부 가로 scroll을 소유하지만, 바깥 `.journalTablePanel`도 `overflow:auto`라 같은 영역에 중복 scroll 소유자가 생긴다.
- 하단 저장 바는 640px 이하에서도 `상태 minmax(0,1fr) + 버튼 auto` 2열을 유지한다. 긴 저장 메시지와 `변경 저장`이 동시에 좁아져 현재 상태를 읽기 어렵다.
- 발송 상태·작업 row는 모바일 내부 가로 scroll을 이미 제공하고 상위 section에 `발송 상태와 작업` 이름이 있다. 버튼과 select callback을 재배치하거나 접힘으로 숨기지 않는다.
- header 없는 modal은 dialog 이름 `수업일지`와 내부 `NavigationHeader`의 뒤로가기를 이미 제공한다. 별도 X를 추가해 닫기 의미를 중복시키지 않는다.

## 연쇄 구현

1. `UI-8B-1`: 수업일지 modal만 `100dvh`, safe-area, 좁은 화면 여백·overscroll 계약을 적용한다.
2. `UI-8B-2`: 학생 기록의 가로 scroll 소유자를 `DataTableShell` 하나로 고정하고 1450px 열 구조를 보존한다.
3. `UI-8B-3`: 모바일에서 수업일지 저장 바의 상태와 행동을 한 열로 쌓고, 발송 작업 영역의 기존 내부 scroll과 callback을 회귀 고정한다.
4. `UI-8B-4`: 수업 맥락·10열 학생 기록·저장·알림·modal 경계를 통합 회귀하고 사람 시각 절차를 누적한다.

## 사람 검수

inventory는 화면이나 운영 원천을 바꾸지 않아 중단 gate가 없다. 구현 완료 뒤 desktop과 390px에서 수업일지를 열어 modal 상하단 접근, 학생 기록 내부 가로 scroll, 저장 바 배치, 발송 상태 row 가독성만 확인한다. `수업 수정`, `수업 취소 처리`, 출결, 예약 설정·확인·적용, 발송 결과, 학생별 알림, `변경 저장`은 누르지 않는다.

## 진행 갱신

- UI-8B-1: 수업일지 modal에 `100dvh`, 네 방향 safe-area 여백, 내부 overscroll·iOS touch scroll을 적용했다.
- header 없는 dialog 이름과 뒤로가기·닫기 callback은 유지했고 운영 원천이나 실제 동작은 실행하지 않았다.
- UI-8B-2: 1450px 최소 폭을 내부 10열 row로 옮기고 named `DataTableShell` 하나만 가로 scroll을 소유하게 했다.
- 학생 기록의 열·callback과 외부 원천은 변경하거나 실행하지 않았다.
- UI-8B-3: 발송 상태·예약 작업을 각각 named focus region으로 만들고 모바일 touch scroll을 보강했다.
- 모바일 저장 바는 상태·긴 메시지와 전체 폭 저장 행동을 한 열로 분리했으며 callback·disabled 계약은 유지했다.
- UI-8B-4: 수업 맥락·10열 기록·저장·알림·modal 경계를 통합 회귀로 묶고 독립 사람 시각 절차를 handoff 최상단에 누적했다.
- UI-8B는 AI 검수 기준으로 완료했으며 실제 저장·발송·예약·삭제·출결은 실행하지 않았다.
