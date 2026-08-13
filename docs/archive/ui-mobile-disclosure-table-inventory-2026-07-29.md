# UI-7F 모바일 disclosure·table inventory — 2026-07-29

## 범위

`src`의 JSX 49개와 관련 CSS를 읽기 전용으로 대조했다. native `details/summary`, `table`, 공통 `DataTableShell`의 모바일 touch·focus·가로 스크롤만 조사했으며 callback, 저장, 발송, 예약, 삭제, 출결, AI, Storage와 운영 원천은 실행하거나 변경하지 않았다.

## 수량

| 항목 | 수량 |
| --- | ---: |
| `<details>` | 23 |
| `<summary>` | 23 |
| native `<table>` | 4 |
| `<DataTableShell>` | 15 |
| DataTableShell 밖의 native table | 0 |

`DataTableShell` 15개에는 native table뿐 아니라 표 형태의 CSS grid도 포함된다. 공통 shell은 이미 `role=region`, 접근 가능한 label, `tabIndex=0`, `overflow-x:auto`, inline overscroll 차단, 양방향 touch pan과 focus-visible을 제공한다.

## disclosure 분류

| 화면군 | source summary | 현재 높이 | 판정 |
| --- | ---: | --- | --- |
| 학생 프로필/탈리 제출 | 6 | 64px/52px | 44px 이상 |
| 시험분석 프롬프트 역할 카드 | 5 | 58px | 44px 이상 |
| 수업연구 chapter/unit | 2 | 40px | 모바일 보강 필요 |
| 특강 취소 action | 1 | 34px | 모바일 보강 필요 |
| 특강 취소 명단 | 1 | 명시 없음 | 모바일 보강 필요 |
| 시험 후 전체 원문 | 1 | 명시 없음 | 모바일 보강 필요 |
| 월별 정산 제외 명단 | 1 | 명시 없음 | 모바일 보강 필요 |
| 시험분석 제외/출력/검수·수정 단계 | 6 | 일부 padding만 있음 | 모바일 보강 필요 |

23개 summary는 모두 보이는 문구를 포함해 native 접근 이름은 있다. 하지만 전역 `summary:focus-visible` 규칙이 없고, 일부는 34~40px 또는 명시 높이가 없어 모바일 44px 계약에서 빠져 있다.

## 연쇄 구현

1. `UI-7F-2`: 모든 summary에 전역 focus-visible을 제공하고 640px 이하 최소 44px 높이를 적용한다. native open/close와 내부 내용은 바꾸지 않는다.
2. `UI-7F-3`: native table 4개가 계속 DataTableShell 안에 있고 15개 shell의 label·focus·scroll 계약이 유지되는 회귀를 고정한다.
3. `UI-7F-4`: disclosure/table 대표 화면의 390px touch·focus·가로 스크롤 검수 절차를 하나로 묶고 UI-7F를 닫는다.

## 사람 검수

inventory 자체는 코드 UI를 바꾸지 않아 필수 중단 gate가 없다. UI-7F-2 적용 뒤 실제 저장·삭제 없이 summary 열기/닫기와 표 가로 스크롤만 누적 확인한다.

## 진행 갱신

- UI-7F-2: 모든 native summary에 버튼·링크와 같은 focus-visible outline을 제공하고, 640px 이하 최소 높이를 44px touch token으로 맞췄다.
- desktop 밀도, native open 상태, 화면별 marker·padding과 내부 callback은 변경하지 않았다.
- UI-7F-3: DataTableShell 15개 모두 label을 갖고, native table 4개 모두 공통 shell 안에 있는 것을 AST 회귀로 고정했다.
- 공통 shell의 `tabIndex=0`, focus-visible, 가로 touch scroll, overscroll 차단과 iOS momentum scroll을 대표 화면 이름과 함께 보존했다.
- UI-7F-4: UI-7A~F의 사람 확인을 `docs/next-session/README.md` 최상단 한 번짜리 안전 절차로 통합했다.
- UI-7 모바일·접근성 pass는 AI 검수 기준으로 완료했으며, 사람 시각 확인은 UI-8 진행을 막지 않는다.
