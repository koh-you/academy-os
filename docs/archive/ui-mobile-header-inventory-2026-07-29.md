# UI 모바일 페이지 머리말·행동 inventory — 2026-07-29

## 공통 primitive 범위

| primitive | 사용 수 | 구조 |
| --- | ---: | --- |
| `PageHeader` | 13 | eyebrow·h1·description + page actions |
| `NavigationHeader` | 4 | leading + title/description + trailing + context + actions |
| `SectionHeader` | 57 | eyebrow·title·description + meta/actions |

## 현재 640px 이하 계약

- `.pageTop`과 `.sectionHeader`는 세로 방향으로 전환한다.
- `.pageActions`와 `.sectionHeaderAside`는 전체 폭을 사용하고 왼쪽부터 줄바꿈한다.
- `.navigationHeader`는 늘어나며 primary·context·actions가 전체 폭을 사용한다.
- action callback·disabled·DOM 순서는 각 caller가 그대로 소유한다.

## 확인된 gap

| 항목 | 현재 | 판정 | 후속 |
| --- | --- | --- | --- |
| 긴 title/description | copy는 `min-width: 0`, 강제 줄바꿈 없음 | 보강 필요 | UI-7B-2 |
| 탐색 header primary | leading/title/trailing이 한 flex row | 좁은 폭 overflow 가능 | UI-7B-2 |
| page action | flex-wrap·전체 폭 | 통과 | DOM 순서 유지 |
| section meta/action | flex-wrap·전체 폭 | 통과 | badge는 늘리지 않고 button만 터치 보강 |
| header의 soft/ghost button | 기본 34px | 모바일 44px 미달 | UI-7B-2 |
| title 크기 | page 28px, section h1 28px/h2 22px | 일부 긴 제목 밀도 높음 | UI-7B-2에서 모바일 크기만 조정 |
| 행동 우선순위 | caller DOM 순서 | 통과 | CSS order 변경 금지 |

## 보존할 동작

- header action callback, disabled, badge·저장 상태, title/description 문자열과 DOM 순서를 바꾸지 않는다.
- primary/danger/close 의미를 CSS 순서로 뒤집지 않는다.
- 저장·발송·예약·삭제·출결·AI·Storage·Supabase/app_state 원천을 실행하거나 변경하지 않는다.

## 다음 작은 단위

1. UI-7B-2: copy 강제 줄바꿈, navigation primary wrap, 모바일 title 크기와 header action 44px 터치 높이를 공통화한다.
2. UI-7B-3: 대표 복합 action header의 DOM 순서·폭·disabled 회귀를 고정한다.
