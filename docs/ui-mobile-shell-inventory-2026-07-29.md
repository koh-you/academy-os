# UI 모바일 앱 shell·사이드바 inventory — 2026-07-29

## 현재 구조

- desktop은 `294px + 본문` grid이며 사이드바가 viewport 상단에 sticky되고 자체 세로 스크롤을 사용한다.
- 접힌 desktop 사이드바는 `86px`로 줄고 label을 숨긴 채 icon·title로 전체 메뉴를 유지한다.
- 1100px 이하에서는 사이드바가 sticky를 해제하고 본문보다 앞선 document flow로 이동한다.
- 1100px 이하는 전체 메뉴를 3열, 640px 이하는 그룹별 2열로 표시한다.
- 640px 이하에서는 사이드바 접기 버튼을 숨긴다.
- 화면 선택은 기존 `handleChangeView`를 사용하고 문서 scroll을 0으로 초기화한다.
- 로그인 화면에는 safe-area padding이 있지만 교사 앱 shell에는 동일한 safe-area 계약이 없다.

## 접근성과 모바일 사용성 판정

| 항목 | 현재 | 판정 | 후속 |
| --- | --- | --- | --- |
| 전체 메뉴 접근 | 모든 그룹·항목을 모바일에도 표시 | 통과 | 유지 |
| 현재 위치 시각 표시 | active class로 표시 | 통과 | 유지 |
| 현재 위치 의미 | `aria-current` 없음 | 보강 필요 | UI-7A-2 |
| nav 이름 | `<nav>`에 accessible label 없음 | 보강 필요 | UI-7A-2 |
| 접기 상태 | toggle에 동작 label은 있으나 `aria-expanded`·control 연결 없음 | 보강 필요 | UI-7A-2 |
| 모바일 첫 화면 | 긴 전체 메뉴가 본문 앞에 항상 펼쳐짐 | 보강 필요 | UI-7A-3 |
| 화면 선택 후 본문 접근 | scroll 0이 긴 메뉴 상단을 다시 노출 | 보강 필요 | UI-7A-3에서 메뉴를 닫고 본문 시작점 유지 |
| iOS 노치·홈 화면 | viewport에 `viewport-fit=cover`가 없고 app shell safe-area 없음 | 보강 필요 | UI-7A-2 |
| 홈 화면 바로가기 재진입 | 같은 URL에서 session을 복구하고 기본 수업 화면으로 진입 | 현재 계약 | view URL 영속화는 별도 기능이며 이번 UI 범위에서 제외 |

## 보존할 동작

- `onChangeView(item.id)`, `handleChangeView`, 수업일지 닫기와 scroll reset의 의도를 보존한다.
- 18개 전체 교사 메뉴와 보충 확인 badge를 숨기거나 제거하지 않는다.
- desktop sticky·자체 스크롤·접힌 icon 메뉴를 유지한다.
- 교사 session 복구, 로그인·로그아웃, notification_jobs/Solapi, Supabase/app_state와 각 화면 callback을 변경하지 않는다.

## 다음 작은 단위

1. UI-7A-2: nav/현재 위치/toggle semantics와 app shell safe-area를 보강한다.
2. UI-7A-3: 모바일에서 compact header와 `전체 메뉴` toggle을 제공하고 화면 선택 후 메뉴를 닫아 본문을 바로 보이게 한다.
3. UI-7A-4: 1100px tablet의 3열 메뉴와 desktop 접힘 회귀를 정적·시각 대조한다.
