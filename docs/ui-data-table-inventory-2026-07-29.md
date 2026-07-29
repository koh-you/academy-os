# UI-4C 데이터 표 인벤토리

## 공통 계약

- 표의 열 값, 열 순서, row key, filter/sort 결과, 편집 draft와 callback은 UI 이관 전후에 바꾸지 않는다.
- 넓은 표는 열을 억지로 카드로 접지 않고 공통 가로스크롤 region 안에서 원래 최소 너비를 유지한다.
- scroll region은 키보드 focus와 명확한 `aria-label`을 제공한다.
- header/row/pill/action 열 통일은 표 종류별로 한 단위씩 하며, sticky header는 실제 내부 세로스크롤이 있는 표에만 적용한다.
- UI 검수 중 저장·취소·삭제·출결·발송·정산 저장은 실행하지 않는다.

## 표 목록

| 표 | row key·값 원천 | 정렬/변경 callback | 위험도 | 단위 |
| --- | --- | --- | --- | --- |
| 알림톡 발송 기록 | `notificationJobId`, job 상태/수신/본문 | filter, 예약 취소, 기록 삭제 | 매우 높음 | UI-4C-1 shell 적용 |
| 학생 목록 | `studentId`, 학생 기본정보 | 반/필드 draft, 행 저장, 퇴원 | 매우 높음 | UI-4C-1 shell 적용 |
| 퇴원생 목록 | `studentId`, 퇴원 정보 | 이름/퇴원일 정렬, 선택 저장/복원/삭제 | 매우 높음 | UI-4C-1 shell 적용 |
| 수업 상세 학생 표 | `studentId`, lesson record/homework | record 변경·저장·보고서 | 매우 높음 | UI-4C-2 shell 적용 |
| 수업일지 학생 표 | `studentId`, editable record | 출결·숙제·코멘트·발송 draft | 매우 높음 | UI-4C-2 shell 적용 |
| 시험정보 표 | `examPrepId`, 시험정보/총평 | 검색/고사 filter, 수정·삭제 | 매우 높음 | UI-4C-2 shell 적용 |
| 시험분석 검수 표 | question row ID | 교사 검수 draft | 높음 | UI-4C-3A shell 적용 |
| 예약 학생 상태 표 | `studentId`, notification job selector | 검사 모드 선택 | 중간 | UI-4C-3A shell 적용 |
| 오답·성적·학원시험 표 | 각 record ID | 입력·수정·삭제 | 높음 | UI-4C-3B shell 적용 |
| 테스트 응시 표 | `studentId`, attempt draft | 상태/정답/미응시 사유 draft | 높음 | UI-4C-3A shell 적용 |
| 월별 정산 표 | `studentId`, settlement snapshot | 금액/제외/스케줄 draft 저장 | 매우 높음 | UI-4C-4 shell 적용 |
| 특강 정산 표 | enrollment/student key | 유료회차/금액/사유 draft 저장 | 매우 높음 | UI-4C-4 shell 적용 |
| 학생 포털 성적 표 | score record ID | 읽기 전용 | 낮음 | UI-4C-4 shell 적용 |

## UI-4C-1 공통 가로스크롤 shell

- `DataTableShell`은 `role=region`, 화면별 `aria-label`, `tabIndex=0`, focus ring, 가로 overscroll과 stable scrollbar를 제공한다.
- 알림톡 발송 기록, 재원 학생 목록, 퇴원생 목록 wrapper에 적용했다.
- 기존 `.notificationTable`, `.studentListTable`, row/head class와 최소 너비를 보존했다.
- 알림 취소/삭제와 학생 저장/퇴원/영구삭제 callback은 실행하거나 수정하지 않았다.

## 다음 단위

`UI-4C-4`는 완료했다. 다음 `UI-4C-5`는 공통 header/row/pill 색상 토큰을 `DataTableShell` 안에서 통일하고, 실제 내부 세로스크롤이 있는 표만 sticky header가 필요한지 판정한다. 열 값·너비·행동은 바꾸지 않는다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 알림 기록, 학생 목록, 퇴원생 목록, 수업 상세, 수업일지, 시험정보 표를 desktop/390px에서 가로로 끝까지 스크롤할 수 있는지, wrapper focus가 보이는지, 기존 열 최소 너비가 유지되는지만 확인한다. 행 저장·출결·알림·시험정보 수정/삭제·퇴원·복원·영구삭제·알림 취소/삭제는 누르지 않는다.
