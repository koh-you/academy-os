# UI-4B 목록 카드 인벤토리

## 공통 계약

- 한 행은 `제목/주체 -> 메타 -> 상태 -> 본문 -> 행동` 순서를 사용한다.
- React `key`, 선택/열기 callback, 상태 계산 함수, 원천 배열의 filter/sort는 UI 이관 전후에 바꾸지 않는다.
- 보기·복사·열기와 저장·완료·취소·삭제를 같은 행동 묶음으로 오인하지 않도록 안전 행동과 danger 행동을 분리한다.
- 640px 이하에서는 헤더와 행동이 줄바꿈되고, 버튼·링크는 최소 44px 높이를 확보한다.
- UI 검수 중 실제 저장·발송·예약·완료·복귀·취소·삭제는 실행하지 않는다.

## 목록군과 위험도

| 목록군 | 대표 row key | 선택·열기/변경 callback | 상태 원천 | 위험도·후속 단위 |
| --- | --- | --- | --- | --- |
| 학생 목록·퇴원생 목록 | `student.studentId` | 프로필 열기, 행 저장, 영구 삭제 | dirty ID, 재원/퇴원 상태 | 높음 · UI-4B-4 |
| 학생 프로필 운영 알림 | `reminder.reminderId` | 완료 저장, 삭제 | reminder status | 높음 · UI-4B-1 shell 적용 |
| 학생 상담·시험·성적 행 | 원천별 record ID | 수정, 저장, 삭제 | dirty/save state | 높음 · UI-4B-4 |
| 날짜별 수업 카드 | `lesson.lessonId` | `onSelectLesson(lessonId)` | selected lesson ID | 낮음 · UI-4B-1 shell 적용 |
| 수업일지 학생 행 | `student.studentId` | 출결·숙제·코멘트 변경/저장 | record/save state | 매우 높음 · UI-4B-4 |
| 시험정보·시험 후 제출 행 | exam/target ID | 열기, 선택, 수정, 삭제/확정 | submission/review state | 높음 · UI-4B-3/4 |
| 학부모 응대 발신 원문 | `context.notificationJobId` | 확인 정보 복사 | 발송 완료 context | 낮음 · UI-4B-1 shell 적용 |
| 알림 발송 기록 | `job.notificationJobId` | 예약 취소, 행 삭제 | notification job status | 매우 높음 · UI-4B-4 |
| 알림 대상 학생 | `student.studentId` | 체크 선택 | selected student IDs | 중간 · UI-4B-3 |
| 보충 후보·진행 task | candidate/task ID | 상세, 생성, 완료, 취소 | progress/action state | 매우 높음 · UI-4B-4 |
| 보충 최근 이력 | `task.makeupTaskId` | 완료 복귀 | task status | 높음 · UI-4B-1 shell 적용 |
| 학생·학부모 포털 읽기 목록 | homework/material/report/record ID | 상세 열기·자료 링크 | 공개/완료 상태 | 낮음 · UI-4B-2 |
| 특강 회차·진행 목록 | guide/session/enrollment ID | 선택, 수업일지 열기, 저장 | sync/protection status | 높음 · UI-4B-4 |

## UI-4B-1 공통 shell 적용

- 공통 `ListCard`, `ListCardHeader`, `ListCardBody`, `ListCardActions`를 추가했다.
- 학생 운영 알림, 날짜별 수업 선택, 학부모 응대 발신 원문, 보충 최근 이력의 기존 전용 class를 보존한 채 공통 shell class를 함께 사용한다.
- 날짜별 수업은 기존 `onSelectLesson(lesson.lessonId)`와 inline border color를 유지하고 `aria-pressed`만 추가했다.
- 학생 운영 알림의 완료/삭제, 학부모 응대 복사, 보충 완료 복귀 callback은 위치와 인자를 바꾸지 않았다.

## 다음 단위

1. `UI-4B-2` 완료: 학생·학부모 준비 공지, 자료, 보고서, 수업기록, 보충 일정의 읽기 전용 카드 6종에 제목/본문/행동 슬롯을 적용했다.
2. `UI-4B-3` 완료: 알림 대상·시험 후 대상 checkbox 행의 key·setter·후보 필터를 유지하고 선택 강조, focus, 44px 터치 영역을 공통화했다.
3. `UI-4B-4`: 저장·완료·복귀·취소·삭제가 있는 운영 행은 callback·원천·실패 draft 유지 계약을 목록별로 고정한 뒤 하나씩 이관한다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 학생 프로필 운영 알림, 날짜별 수업 카드, 학부모 응대, 보충 최근 이력과 포털의 준비 공지·자료·보고서·수업기록·보충 일정에서 제목·메타·상태·행동 위치와 390px 줄바꿈만 확인한다. 날짜별 수업 선택, 학부모 확인 정보 복사, 포털 자료 열기, 수업기록 날짜 선택은 눌러볼 수 있다. 운영 알림 완료/삭제와 보충관리 복귀는 누르지 않는다.
