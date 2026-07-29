# UI-3A 상위 탭 인벤토리 — 2026-07-29

## 범위와 불변 계약

상위 페이지의 현재 업무 영역을 바꾸는 탭만 UI-3A에 포함한다. 반·학교·날짜 같은 필터 탭, 모달 내부 탭, 알림톡 문구 편집 탭은 UI-3B~3C에서 다룬다. 이번 단위는 선택 state와 setter, 탭별 조건부 렌더, 저장·발송·삭제 callback을 변경하지 않는다.

| 화면 | 기존 클래스 | 선택 원천·setter | 렌더 계약 | UI-3A 결과 |
| --- | --- | --- | --- | --- |
| 알림/특강 영역 | `notificationSectionTabs` | `activeNotificationTab` / `setActiveNotificationTab` | 공지와 특강 패널 분기 유지 | 공통 `WorkspaceTabs`, tab semantics 추가 |
| 특강관리 | `specialLectureTopTabs` | `activeSpecialLectureWorkspaceTab` / `setActiveSpecialLectureWorkspaceTab` | 특강 수업·안내문 분기 유지 | 공통 높이·focus·가로 스크롤 |
| 알림관리 | `noticeWorkspaceTabs` | `activeNoticeWorkspace`, `jobFilter` / `setActiveNoticeWorkspace`, `selectJobFilter` | 개별 발송·학부모 응대·상태별 이력 분기 유지 | 기존 건수·선택 계산 보존 |
| 시험분석 | `examAnalysisWorkspaceTabs` | `examAnalysisWorkspaceTab` / `selectExamAnalysisWorkspaceTab` | 7개 단계와 완료 meta 유지 | `nav` 요소와 단계 badge 보존 |
| 시험관리 | `examManagementTabs` | `activeTab` / `setActiveTab` | 시험정보·시험 후 제출·기출문제 분기 유지 | `role=tab`, `aria-selected` 보강 |
| 설정 | `settingsSectionTabs` | `activeSettingsSection` / `setActiveSettingsSection` | 설정 섹션 조건부 렌더 유지 | 기존 자동저장 원천 불변 |
| 학생관리 | `studentManagerTabs` | `activeTab` / `setActiveTab` | 전체·반별·퇴원 목록과 학생 선택 초기화 유지 | 선택 초기화 callback 보존 |
| 정산 | `settlementWorkspaceTabs` | `activeTab` / `setActiveTab` | 월별·특강 정산 패널 분기 유지 | 두 정산 저장 callback 불변 |

## 공통 규칙

- `WorkspaceTabs`가 `role=tablist`와 화면별 `aria-label`을 제공한다.
- 각 버튼은 `role=tab`, `aria-selected`, 기존 `active` class와 기존 setter를 그대로 사용한다.
- 탭 버튼 최소 높이는 44px이며 active는 공통 navy surface를 사용한다.
- 키보드 focus는 `:focus-visible` outline으로 active와 별개로 보인다.
- 탭 목록은 한 줄을 유지하고 좁은 화면에서는 목록 내부만 가로 스크롤한다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 각 화면에서 탭을 한 번씩 전환해 기존 콘텐츠가 그대로 나타나는지, 390px 폭에서 탭 줄만 좌우로 스크롤되고 페이지 전체 가로 넘침이 없는지, 키보드 `Tab` focus가 보이는지만 한 번에 확인한다. 저장·발송·삭제 버튼은 누르지 않는다.
