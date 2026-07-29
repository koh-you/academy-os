# UI-4A 지표·요약 카드 인벤토리 — 2026-07-29

## UI-4A-1 단순 요약 카드

| 화면 | 값 원천 | 적용 수 | 계약 |
| --- | --- | ---: | --- |
| 알림 개별 발송 대상 | `targetStudents`, `parentRecipientCount`, `studentRecipientCount` | 3 | 선택·수신 계산 불변 |
| 시험대비 수업 상세 | `lesson`, `getLessonStudentIds`, `sourceItems` | 3 | 수업일·시간·학생·연결 시험정보 불변 |
| 시험 후 제출 관리 | `targets`, `submittedTargets`, `missingTargets`, `confirmedTargets` | 4 | 제출·확인 집합 불변 |
| 보고서 데이터 | `wrongProblems`, `scoreRecords`, `academyTests` | 3 | 배열 길이 불변 |
| 월간 학사 개요 | `examPeriodCards`, `monthMathExamEvents`, `monthAcademicEvents` | 3 | 월 범위 event 집합 불변 |

총 16개를 `MetricCard density=compact`로 이관했다. 계산식은 호출부에 남기고 이미 계산된 값만 전달한다.

## 공통 규칙

- `MetricCard`는 `label -> value -> hint` 위계와 선택적 icon·badge를 제공한다.
- `compact`는 최소 높이 82px, value 24px을 사용한다. 기존 포털용 default 대형 카드는 유지한다.
- tone은 값의 의미만 표현하며 `warning`은 미제출, `success`는 제출 완료처럼 이미 계산된 상태에만 사용한다.
- 카드 이관은 집계 배열, 날짜 범위, 정산·저장·발송 원천을 수정하지 않는다.

## UI-4A-2 클릭형·micro 지표

| 화면 | 값·선택 원천 | 적용 수 | 계약 |
| --- | --- | ---: | --- |
| 알림톡 예약 확인 | 예약 job 집계, `reservationInspectMode` | 4 | `toggleReservationInspectMode(mode)`·active 불변 |
| 학생 마이페이지 숙제 | `stats.completionRate`, `perfectDays`, `total` | 3 | 숙제 통계 계산 불변 |
| 학생 마이페이지 출결 | `attendanceStats` present/late/absent/unexcused | 4 | 출결 통계·비율 계산 불변 |
| 시험분석 최종 미리보기 | `meta.totalQuestions`, 분포·주요문항 배열 길이 | 3 | 최종 preview model 불변 |

- 총 14개를 `MetricCard density=micro` 또는 클릭 가능한 compact 카드로 이관했다.
- 클릭형 카드는 `aria-pressed`와 기존 active 값을 함께 사용한다. 예약 검사 모드만 바꾸며 Solapi 조회는 실행하지 않는다.
- 학생 포털의 기존 출결 색상 class를 `className`으로 보존하고 `danger` tone을 추가했다.

## 다음 단위

- 알림톡 설정의 Solapi/Slack/AI 연결 상태는 숫자 지표가 아니라 상태 목록 카드이므로 UI-4B에서 다룬다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 단순 5개 화면과 예약 확인·학생 마이페이지·시험분석 미리보기의 label·값·보조 설명, 3/4열 카드 줄바꿈, 390px 한 열 배치를 확인한다. 예약 확인 카드는 클릭해 active와 아래 표시 목록만 바뀌는지 볼 수 있지만 `Solapi/OS 새로고침`은 누르지 않는다. 저장·발송·수정·삭제 버튼도 누르지 않는다.
