# UI-3B 보조 탭 인벤토리 — 2026-07-29

## 포함 범위

페이지 상위 탭 아래에서 콘텐츠 작업 영역을 바꾸는 보조 탭과 그 안의 한 단계 중첩 탭을 다룬다. 선택 state/setter와 탭별 조건부 렌더는 그대로 두고 `WorkspaceTabs`의 `secondary`·`compact` 위계만 적용한다.

| 화면 | 탭 | 선택 원천·setter | 결과 |
| --- | --- | --- | --- |
| 특강 안내문 | 편집·링크·일정 계산·회차·알림톡 미리보기 | `activeGuideEditorTab` / `setActiveGuideEditorTab` | `secondary` |
| AI 도구 | 변형문항 작업 | `activeTab` / `setActiveTab` | `secondary` |
| 오답관리 | 현행·추가·교재별·학생별 | `activeTab` / `setActiveTab` | `secondary` |
| 학생·학부모 포털 | 포털 메뉴 | `activeTab` / `onChange` | `secondary` |
| 학생 마이페이지 | 통계·활동 로그·내 정보 | `myPageTab` / `onChangeTab` | `secondary` |
| 학생 마이페이지 통계 | 숙제통계·출결통계 | `statsTab` / `setStatsTab` | `compact` |
| 테스트 관리 | 응시 기록·학생 이력 | `activeTab` / `onChange` | `secondary` |

## 이번 단위에서 제외

- 공지 수신 대상, 수업 유형, 출결 상태, 학교·반·과목·상태 선택은 탭처럼 보여도 실제로는 입력/필터이므로 UI-3C에서 다룬다.
- 보충관리 지표형 탭은 집계 카드 역할이 함께 있어 UI-4A 지표 카드 단위에서 다룬다.
- 로그인 역할 탭, 학생 추가 방식, 보충 알림톡 문구 탭은 모달/인증 흐름에 속하므로 UI-5 또는 해당 고밀도 화면 단위에서 다룬다.

## 위계 규칙

- `primary`: 페이지의 큰 업무 영역 전환. 채운 navy active를 사용한다.
- `secondary`: 페이지 안 작업 영역 전환. 하단 경계와 옅은 active surface를 사용한다.
- `compact`: 보조 탭 내부의 한 단계 중첩 선택. 작은 surface와 최소한의 shadow를 사용한다.
- 모든 탭은 `role=tab`, `aria-selected`, 기존 active class, 기존 setter를 함께 유지한다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 각 보조 탭을 전환해 기존 콘텐츠가 그대로 나타나는지, 상위 탭보다 옅게 보이는지, 마이페이지 통계 탭이 한 단계 더 작게 보이는지, 모바일에서 탭 목록 내부만 스크롤되는지 확인한다. 저장·AI 생성·삭제는 실행하지 않는다.
