# UI-4D 빈 화면·로딩·오류 상태 인벤토리

## 공통 계약

- 데이터가 아직 없는 상태, 검색/필터 결과가 0건인 상태, 로딩 중, 원천 조회 실패를 같은 문구나 색으로 취급하지 않는다.
- 기존 데이터 판정, 검색어, filter 결과, retry callback, 저장 draft와 side effect는 UI 이관 전후에 바꾸지 않는다.
- 오류는 원천과 다음 행동을 말하고, 재시도 버튼은 기존 callback이 있을 때만 표시한다.
- loading/error의 `role`, `aria-live`, focus 이동은 실제 비동기 상태 전이와 함께 검토한다. 단순 빈 상태와 섞어 일괄 적용하지 않는다.
- 검수 중 저장·삭제·발송·예약·출결·업로드·AI 생성을 실행하지 않는다.

## 상태군과 작업 순서

| 상태군 | 현재 표현 | 원천·행동 | 위험도 | 단위 |
| --- | --- | --- | --- | --- |
| 포털 읽기 전용 0건 | `emptyPortalPanel`, `emptyHomeworkBox`, muted 문단 | 배열 길이, 행동 없음 | 낮음 | UI-4D-1A |
| 일반 목록·표 0건 | `EmptyState`, domain 전용 empty class | 배열/선택 결과, 대부분 행동 없음 | 낮음 | UI-4D-1B |
| 검색·필터 결과 0건 | 검색어 유무에 따른 문구, 일부 clear 행동 | query/filter state | 중간 | UI-4D-2 |
| 초기·재조회 loading | muted/blue notice, 버튼 label, status object | 비동기 상태·중복 클릭 방지 | 높음 | UI-4D-3 |
| 원천 조회 error·retry | banner/inline notice/error boundary | 기존 retry/back callback | 매우 높음 | UI-4D-4 |
| 저장·발송·삭제 실패 | `InlineSaveStatus`, action status | draft와 외부 side effect | 매우 높음 | UI-6에서 별도 처리 |

## UI-4D-1A 공통 EmptyState와 포털 읽기 상태

- `EmptyState`가 기존 children 사용을 보존하면서 `title`, `description`, `action`, `tone` 구조를 선택적으로 제공하도록 확장했다.
- 공통 copy/action 간격과 neutral/loading/error tone 기반만 추가했다. loading/error의 접근성 역할이나 retry 동작은 아직 연결하지 않았다.
- 학생·학부모 포털의 자료, 숙제, 보고서, 커리큘럼, 평가, 출결 예정, 수업기록, 학생 코멘트 빈 상태를 공통 구조로 이관했다.
- 포털 배열 filter, row key, 숙제 상태 계산, 자료 열기, 탭 전환, 학생 질문·숙제·시험 제출 callback은 변경하지 않았다.

## 다음 단위

`UI-4D-1B`에서는 callback이 없는 일반 목록·표 0건 표현을 공통 구조로 이관한다. 학부모 응대처럼 검색어 유무에 따라 다음 행동이 달라지는 상태는 `UI-4D-2`, 실제 로딩·오류·재시도는 `UI-4D-3~4`로 남긴다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 학생·학부모 포털의 빈 탭에서 제목과 설명의 위계, 점선 box 높이, desktop/390px 줄바꿈만 확인한다. 숙제 완료·질문·시험 제출·자료 업로드·저장 버튼은 누르지 않는다.
