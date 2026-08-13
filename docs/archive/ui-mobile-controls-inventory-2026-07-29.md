# UI-7C 모바일 탭·필터·검색 inventory — 2026-07-29

## 범위

공통 `WorkspaceTabs`, `FilterBar`, `SearchField`가 640px 이하에서 선택 상태, 내부 가로 스크롤, label, 입력 폭, 터치 영역을 어떻게 소유하는지 읽기 전용으로 대조했다.

- `WorkspaceTabs`: 15곳
- `FilterBar`: 10곳
- `SearchField`: 7곳

이번 inventory는 선택·검색 React state와 결과 집합을 바꾸지 않는다. Supabase/app_state, `notification_jobs`, Solapi, 수업·AI·출결 원천을 읽거나 실행하지 않는다.

## 현재 공통 계약

| primitive | 이미 보존되는 계약 | 모바일 현재 상태 |
| --- | --- | --- |
| `WorkspaceTabs` | `role="tablist"`, 화면별 label, caller가 소유하는 `aria-selected`·callback, primary/secondary/compact 위계 | 한 줄 유지, 내부 `overflow-x: auto`, 모든 tab 최소 44px |
| `FilterBar` | `role="group"`, 화면별 label, caller가 소유하는 `aria-pressed`·filter state, 결과·action slot | 한 줄 내부 스크롤, option·input·select 최소 44px, field 폭 180px |
| `SearchField` | 고유 input ID, 보이는 label, `type="search"`, 결과 건수, 값이 있을 때만 지우기 callback | input 최소 44px, 전체 폭 수축 가능, 지우기 실제 버튼은 36px |

## 확인된 공통 보강점

1. 긴 `WorkspaceTabs`는 선택 tab이 caller state로 바뀌어도 현재 tab을 내부 가시 영역으로 자동 이동시키지 않는다. 모바일에서 오른쪽 tab을 선택한 뒤 다른 경로로 상태가 바뀌면 선택 항목이 화면 밖에 남을 수 있다.
2. `SearchField`의 지우기 버튼은 모바일에서 36px이다. 입력 전체 높이는 44px이지만 독립 터치 대상도 44px로 맞춰야 한다.
3. `FilterBar`는 현재 선택 option 자동 이동이 없지만 필터는 같은 줄에서 직접 누르는 순간 선택되며, 여러 field·result가 섞인 caller도 있다. 탭과 동일한 자동 이동을 무조건 적용하면 사용자가 보고 있던 검색 field를 밀어낼 수 있으므로 이번 공통 보수 대상에서 제외한다.

## UI-7C-2 구현 계약

- `WorkspaceTabs` 내부에서 선택된 직계 button만 찾고, tablist의 세로 위치나 문서 scroll은 바꾸지 않은 채 필요한 경우에만 `scrollLeft`를 조정한다.
- tab click callback, `aria-selected`, active class, tab 내용 mount 정책은 caller 소유로 유지한다.
- `SearchField` 지우기 버튼의 모바일 실제 터치 영역을 44px로 맞추고 기존 `onChange("")`, disabled, label을 유지한다.
- `FilterBar`의 filter state, result, field 폭과 내부 스크롤 계약은 변경하지 않는다.

## 사람 검수 분류

실제 운영 원천 조작이 필요하지 않은 독립 시각 검수다. UI-7C-2 이후 390px에서 긴 탭의 현재 선택 가시성, 필터 내부 스크롤, 검색 입력·지우기 터치만 확인 목록에 누적하고 다음 UI 단위를 계속한다.
