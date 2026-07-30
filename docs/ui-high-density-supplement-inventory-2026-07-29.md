# UI-8C 보충관리 고밀도 화면 inventory — 2026-07-29

## 범위

현재 `activeView === "supplements"`에 연결된 `SupplementCenter`, 학생별 `SupplementStudentModal`, 최근 한 달 이력, 알림 제어·일정 변경·완료·취소 확인 modal을 읽기 전용으로 조사했다. 보충 내용·수업일지 일정 저장, 완료·복귀, 결석·보강 취소, 알림 예약·취소는 실행하거나 변경하지 않았다.

## 현재 화면 흐름

1. `보충관리` PageHeader와 최근 한 달 이력
2. 숙제보충·결석보강·재시험 3개 요약/선택 카드
3. 현재 유형의 후보·진행 목록과 미래 결석 예정 접힘
4. 학생별 상세 modal
   - 원 숙제 또는 원 결석 수업·수업 내용·지난/새 숙제
   - 보충 방법과 배정일·시간
   - 저장 시 바뀌는 내용과 `보충 내용 / 수업일지 일정 / 알림톡 문구 3종` 상태
   - 학생 일정·학부모 일정·당일 학생 3개 알림 문구와 Solapi 예약 제어
   - 보충 내용 저장, 수업일지 일정 만들기/변경, 완료 처리
   - `보강만 취소·원 결석 유지`와 `결석 원본 자체 취소`
5. 최근 한 달 이력 modal과 완료 항목 복귀

## 원천·callback·side effect 보존 계약

| 영역 | 읽는 원천 | 유지할 callback | UI-8C에서 실행 금지 |
| --- | --- | --- | --- |
| 후보·진행 목록 | `homeworks`, `records`, `lessons`, `students`, `makeupTasks` | 유형 선택, 미래 결석 접힘, local 상세 열기 | 보충 생성·완료 |
| 보충 내용 | `makeupTasks`, 원 숙제·결석 기록, local `taskDrafts` | draft 변경, `onSaveTask` | Supabase 보충 저장 |
| 수업일지 일정 | 배정일·시간, `linkedLessonId`, 수업일지 연결 상태 | `onScheduleTask`와 확인 modal | lesson 생성·변경 |
| 알림 3종 | `notificationTemplates`, `notificationJobs`, teacher final draft | `onReserveNotification`, `onCancelNotification` | Solapi 예약·취소 |
| 완료·취소 | task 상태, 원 결석 snapshot, 연결 lesson·예약 | `onPassTask`, `onUndoPassTask`, 두 취소 callback | 완료·복귀·취소 |

`onSaveTask`와 `onScheduleTask`는 같은 버튼으로 합치지 않는다. `보강만 취소`와 `결석 기록 취소`도 문구·색상·확인 흐름을 계속 분리한다.

## 확인된 UI 예외

- 학생별 상세는 긴 `supplementStudentModal`이지만 공통 `Modal`의 `scrollable` shell을 쓰지 않는다. 전체 backdrop이 움직여 제목·닫기와 현재 학생 맥락이 긴 편집 중 사라진다.
- 저장 상태는 실제로 3개 pill만 렌더하지만 `.supplementSaveStatusGrid`는 desktop 4열이라 빈 한 칸이 생긴다.
- 모바일의 후보 행·원천 카드·알림 문구 탭·취소 영역은 이미 한 열로 전환된다.
- 세 주요 행동은 `.supplementTaskActions`의 가로 흐름과 내부 scroll을 유지해 390px에서 저장·일정·완료 의미를 한 번에 비교하기 어렵다.
- 최근 이력 row는 5열 `180px / 내용 / 150px / 상태 / 행동` 고정 구조이며 별도 모바일 재배치가 없다.
- custom 알림 제어 modal은 `calc(100vh - 40px)`와 20px backdrop을 사용해 동적 주소창·safe-area 계약이 없다.

## 연쇄 구현

1. `UI-8C-1`: 학생 상세를 공통 scrollable modal로 전환해 제목·닫기를 유지하고, 3개 저장 상태를 정확한 3열로 맞춘다.
2. `UI-8C-2`: 모바일에서 저장·일정·완료 행동과 최근 이력을 한 열로 재배치하고, custom 알림 제어 modal에 `100dvh`·safe-area를 적용한다.
3. `UI-8C-3`: 원천·일정·알림 3종·두 취소 의미·callback 분리를 통합 회귀하고 독립 사람 시각 절차를 누적한다.

## 사람 검수

inventory 자체는 중단 gate가 없다. 구현 뒤 desktop과 390px에서 목록→학생 상세→최근 이력→알림 제어 modal의 제목·내부 scroll·상태·행동 순서만 확인한다. 상세를 여는 local 동작 외 저장·일정 만들기/변경·완료·복귀·결석/보강 취소·Solapi 예약/취소는 누르지 않는다.

## 진행 갱신

- UI-8C-1: 학생 상세를 공통 scrollable modal로 전환해 학생 header·닫기를 유지하고 긴 본문만 내부 scroll되게 했다.
- 실제 3개 저장 상태를 빈 칸 없는 3열로 맞췄으며 내용 저장·일정 저장 callback은 그대로 분리했다.
- UI-8C-2A: 모바일 주요 행동 3개와 최근 한 달 이력 5열을 문서 순서 그대로 한 열에 배치했다.
- 저장·일정·완료·복귀 callback과 disabled 조건은 변경하지 않았다.
