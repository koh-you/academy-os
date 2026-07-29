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

### UI-4D-1B callback 없는 일반 목록·표 0건 상태

- 학생 프로필 운영 알림·상담·성적·학원 테스트, 시험분석 최종 미리보기, 테스트 응시/이력, 특강관리의 0건 분기를 공통 title/description 구조로 이관했다.
- 학생 row key, 상담·성적·테스트 저장/삭제, 시험분석 model map, 테스트 응시 draft와 회차 열기, 특강 펼침 callback을 보존했다.
- 학생/퇴원 목록처럼 검색·filter 결과가 0건인 분기는 이번 단위에서 제외했다.

## 다음 단위

### UI-4D-2A 대표 검색·filter 0건 구분

- 학부모 응대는 발신 원천 0건과 검색 결과 0건을 분리하고, 검색 결과 0건일 때 기존 `setSearchText("")`를 공통 action에 연결했다.
- 수업 명단 검색은 재원생 원천 0건과 검색 결과 0건을 분리하고, 기존 잠금 상태를 보존한 검색어 지우기를 제공한다.
- 시험정보는 filter 원천 0건과 query 결과 0건을 분리하고 기존 `setQuery("")`를 공통 action에 연결했다.
- 학생관리 전체/반/퇴원 탭은 현재 filter 맥락에 맞는 0건 제목과 설명을 표시한다. 기존 탭·반 setter, row key, 저장·퇴원·삭제 callback은 유지했다.

## 다음 단위

### UI-4D-2B 특강·보충 검색 0건 구분

- 특강 신청자 매칭과 수동 접수는 검색 결과 0건과 실제 연결/추가 가능 학생 0건을 분리하고, 기존 search setter를 지우기 action에 연결했다.
- 보충관리 최근 이력은 query 결과 0건과 최근 한 달 원천 0건을 분리하고, 기존 `onChangeQuery` callback으로 검색어를 지운다.
- 학생 radio/checkbox key와 선택 setter, 보충 이력 row key와 완료 복귀 callback은 변경하지 않았다.
- 이로써 명시적인 검색 입력을 가진 주요 0건 상태의 `UI-4D-2` 구분을 완료했다.

## 다음 단위

`UI-4D-3`에서는 초기/재조회 loading 표현을 inventory하고, 실제 상태가 `loading`인 동안의 중복 클릭 방지와 기존 상태 전이를 보존한 채 공통 tone·`role=status`·`aria-live=polite` 적용 범위를 정한다. 오류와 retry는 `UI-4D-4`로 분리한다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 학생·학부모 포털과 학생 프로필·시험 미리보기·테스트·특강관리의 빈 영역에서 제목과 설명의 위계, box 높이, desktop/390px 줄바꿈만 확인한다. 숙제 완료·질문·시험 제출·자료 업로드·상담/성적/테스트/특강 저장 버튼은 누르지 않는다.
