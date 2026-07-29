# UI-4E 접힘·펼치기 영역 인벤토리

## 공통 계약

- toggle은 현재 상태를 `aria-expanded`로, 제어 영역을 `aria-controls`와 같은 `id`로 연결한다.
- 접힘/펼치기 문구, 기본 open 상태, setter/callback, 조건부 mount 여부를 바꾸지 않는다.
- 접힘 영역 안의 draft·저장·발송·삭제·출결 동작은 disclosure 정리와 함께 수정하지 않는다.
- 동일 화면에서 반복되는 영역은 고정 `id` 충돌을 피하고 후속 단위에서 안정적인 식별자를 먼저 정한다.

## 영역군과 순서

| 영역군 | 현재 형태 | 내부 동작 | 위험도 | 단위 |
| --- | --- | --- | --- | --- |
| 알림 이력·미래 결석·원본 메모·오답 진단·지난 특강 | 단일 boolean + 조건부 단일 region | 조회/표시, 원본 메모는 읽기 전용 | 낮음 | UI-4E-1A |
| 시험분석 산출물·단계 panel | collapse map/단계 상태 + 조건부 editor | draft·AI 실행·저장 버튼 포함 | 중간 | UI-4E-1B |
| 특강 명단·수업일지 반영·일정 계산·회차별 일정 | boolean + 조건부 editor/list | 저장·추가·삭제 포함 | 높음 | UI-4E-1C |
| 학생 프로필·보충·수업일지 세부 editor | 모달/편집 상태와 결합 | 저장·발송·출결 포함 | 매우 높음 | UI-5/UI-6 |
| 좌측 sidebar | navigation collapse | viewport·route 동작 | 중간 | UI-7 모바일/접근성 |

## UI-4E-1A 단일 읽기 영역

- 알림톡 발송 기록, 미래 결석 예정 목록, 알림톡 원본 메모, 오답 보드 진단, 지난/보관 특강의 toggle과 실제 제어 region을 연결했다.
- 기존 boolean state, setter/callback, 조건부 mount와 목록 row key를 보존했다.
- 알림 재조회·취소, 보충 생성/완료, 알림톡 AI 수정·저장·발송, 오답 저장, 특강 저장/복원은 실행하거나 변경하지 않았다.

## 다음 단위

`UI-4E-1B`에서는 시험분석 산출물 7개 section과 파이프라인 단계 4개 panel의 반복 toggle을 inventory한다. draft와 AI 실행 버튼이 있는 영역이므로 `aria-expanded`/`aria-controls` 연결만 하고 collapse map·stage state·조건부 mount는 그대로 둔다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 키보드 `Tab`으로 다섯 toggle에 접근해 문구와 focus가 보이고, 펼친 뒤 기존 내용이 같은 위치에 나타나는지만 확인한다. 저장·발송·취소·삭제·보충 완료 버튼은 누르지 않는다.
