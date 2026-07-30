# UI-8H 정산 inventory — 2026-07-29

## 범위와 금지선

- 대상: `정산 > 월별 정산`, `정산 > 특강 정산`의 계산 기준, 요약, 표, 제외/복원, 달력, 저장 상태, 모바일 화면이다.
- 이번 UI 묶음은 표시 shell과 접근성만 다룬다.
- 금액·회차·스케줄·계산 방식·사유·제외 상태를 변경하거나 정산 저장을 실행하지 않는다. 학생, 수업일지, 출결, 특강 명단·회차 원천도 변경하지 않는다.

## 원천·저장 계약

| 화면 | 계산·읽기 원천 | 직접 저장 원천 | 화면 draft·검증 | 보존할 경계 |
| --- | --- | --- | --- | --- |
| 월별 정산 | 선택 월의 정규 `lessons.studentIds`, 수업일지·출결, 학생·반, 월별 스케줄 | `app_state.monthlyInstructorSettlements` | local draft → `handleSaveMonthlySettlementMonth` → app_state 저장 → 같은 월 snapshot 재조회 대조 | 계산 방식·스케줄·금액·조정·제외는 월별 정산 draft만 바꾸며 학생/수업일지를 수정하지 않는다. |
| 특강 정산 | 특강 안내 sessions·단가, 활성·확정 enrollment 회차·시간 | `app_state.specialLectureInstructorSettlements` | local draft → `handleSaveSpecialLectureSettlementState` → app_state 저장 → 전체 snapshot 재조회 대조 | 유료 회차·직접 금액·사유는 정산 원천만 바꾸며 실제 수강 회차·수업일지·출결을 수정하지 않는다. |

## 현재 공통 기반

- 상단 `월별 정산 / 특강 정산`은 공통 `WorkspaceTabs`이며 선택 state와 모바일 가로 탐색 계약을 이미 갖는다.
- 두 화면 모두 `SectionHeader`, `MetricCard`, `InlineSaveStatus`, `StickySaveBar`를 사용한다.
- 월별 표와 특강별 표는 모두 이름 있는 `DataTableShell` 안에서 가로 scroll되고, 학생·행 key와 계산 callback이 보존되어 있다.
- 월별 제외 행은 별도 접힘 영역에서 복원하며 학생·수업일지 원천을 삭제하지 않는다.
- 월별 출결·수업 modal은 공통 scrollable modal을 이미 사용한다.

## 확인된 표시·모바일 예외

1. 월별 출결·수업 달력은 `role="grid"`지만 이름 있는 focus·내부 가로 scroll shell이 없다.
2. 640px 이하에서 달력 일정 문자를 `font-size: 0`으로 숨겨 점만 남기므로, 정규 예정/출결/보충/특강 의미를 모바일에서 읽을 수 없다.
3. 정산 탭·두 데이터 표·요약·상태·저장 bar는 공통 기반을 이미 만족한다. 새 wrapper나 callback 이동보다 기존 계약의 통합 회귀가 안전하다.

## 연쇄 구현

1. `UI-8H-1`: 월별 출결·수업 달력을 이름 있는 focus·touch 가로 scroll 영역으로 만들고 7열 최소폭을 유지해 모바일에서도 일정 문구를 읽게 한다.
2. `UI-8H-2`: 월별·특강 계산 원천, 조정·제외/복원·합계·저장 callback과 공통 표·상태·save bar를 통합 회귀하고 독립 사람 시각 절차를 누적한다.

## 사람 검수

inventory 자체에는 사람 gate가 없다. 구현 뒤 desktop과 390px에서 정산 탭·요약·표·달력·제외 접힘·save bar의 focus와 내부 scroll만 확인한다. 계산 방식·스케줄·금액·회차·사유·제외를 변경하거나 저장하지 않는다.

## 진행 갱신

- UI-8H-1: 월별 출결·수업 달력을 학생·월 이름이 있는 focus·touch 가로 scroll 영역으로 만들고 7열 최소 840px을 유지했다.
- 모바일 점 표시를 제거해 정규 예정·출결·보충·특강·시간 문구를 보존했다.
- 정규/보충/특강 event 계산과 월별 정산 계산·저장 callback은 변경하지 않았다.
