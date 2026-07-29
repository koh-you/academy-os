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

## 다음 단위

- UI-4A-2: 알림 예약 확인의 클릭형 지표, 학생 마이페이지의 숙제·출결 지표, 시험분석 최종 미리보기의 micro 지표를 분리 적용한다.
- 알림톡 설정의 Solapi/Slack/AI 연결 상태는 숫자 지표가 아니라 상태 목록 카드이므로 UI-4B에서 다룬다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 5개 화면의 label·값·보조 설명과 3/4열 카드 줄바꿈, 390px 한 열 배치를 확인한다. 선택·저장·발송·수정·삭제 버튼은 누르지 않는다.
