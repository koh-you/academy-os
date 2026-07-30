# UI-9A 시각 회귀 매트릭스 — 2026-07-30

## 범위와 판정 원칙

- 기준 폭은 desktop `1440px`, tablet `768px`, mobile `390px`다.
- AI가 로그인 없이 실제 렌더할 수 있는 공개 화면은 디바이스 메트릭을 강제로 지정한 Edge CDP 캡처와 `documentElement/body.scrollWidth`로 확인한다.
- 교사·학생·학부모 로그인이 필요한 화면은 UI-0~UI-8의 정적 responsive 계약과 production fixture를 AI 판정으로 삼고, 실제 운영 화면의 시각 확인은 사람 일괄 검수로 분리한다.
- 실제 저장·삭제·발송·예약·출결·파일 선택·Storage·AI 호출은 시각 검수에 포함하지 않는다.

## 자동 렌더 기준선

| 화면 | 1440px | 768px | 390px | 판정 |
| --- | --- | --- | --- | --- |
| 공통 로그인 | 문서 폭 1440, 카드 중앙 정렬 | 문서 폭 768, 카드 중앙 정렬 | 문서 폭 390, 카드 `x=16~374px` | 통과 |
| 특강 공개 안내 | 문서 폭 1425/본문 760 이하 | 문서 폭 768, 본문 중앙 정렬 | 문서 폭 390, 본문·강조 카드 내부 줄바꿈 | 통과 |

최초 `--window-size=390,844` 단독 캡처는 Edge가 내부 CSS viewport를 `756px`로 유지한 채 이미지만 잘라 로그인과 특강 안내가 넘치는 것처럼 보였다. CDP `Emulation.setDeviceMetricsOverride` 적용 뒤 `innerWidth`, `documentElement.scrollWidth`, `body.scrollWidth`가 모두 `390px`로 일치했고 두 화면의 실제 잘림이 없음을 다시 확인했다. 이 착시는 제품 CSS 회귀로 판정하지 않는다.

## 전체 화면군 매트릭스

| 화면군 | desktop 1440 | tablet 768 | mobile 390 | AI 근거 | 사람 확인 |
| --- | --- | --- | --- | --- | --- |
| UI-1 앱 프레임·사이드바 | shell/token 계약 통과 | compact shell 계약 통과 | safe-area·전체 메뉴 계약 통과 | UI-1/UI-7A fixture | 실제 iPhone Safari·홈 화면 바로가기 |
| UI-2 머리말·작업 바 | 제목→설명→행동 순서 | action wrap | 한 열/내부 scroll | 공통 header fixture | 대표 화면의 읽기 순서 |
| UI-3 탭·필터·검색 | 선택 상태·focus | 내부 가로 탐색 | 44px·선택 항목 가시성 | tabs/filter/search fixture | 키보드·VoiceOver |
| UI-4 카드·표·빈/오류 | 공통 shell | named 내부 scroll | 카드 한 열 또는 표 내부 scroll | card/table/empty fixture | 긴 운영 문자열 |
| UI-5 모달 | 고정 header/footer | 본문 내부 scroll | 제목·X 유지, action 한 열 | modal shell·callback 불변 fixture | 읽기 전용 열기/닫기 |
| UI-6 저장·위험·provider 상태 | 상태 위계 | 긴 상세 줄바꿈 | 현재 작업 영역 안 배치 | 상태 전이·provider fixture | 실제 저장 없이 표시만 확인 |
| UI-7 모바일·접근성 | desktop 회귀 없음 | tablet 전환 | safe-area·44px·focus·이름 | responsive/a11y fixture | 실제 Safari·VoiceOver |
| UI-8A Lesson Hub | 달력·상단 동선 | 달력 내부 scroll | 7열 내부 scroll·상단바 숨김 | UI-8A fixture | 기존 달력 읽기 |
| UI-8B 수업일지 | 10열 내부 표 | modal 내부 scroll | 본문·save bar 한 열 | UI-8B fixture | 기존 일지 읽기 |
| UI-8C 보충관리 | 요약·상세 위계 | 3열→1열 전환 | 취소 의미·action 한 열 | UI-8C fixture | 기존 상세 열기/닫기 |
| UI-8D 알림·학부모 응대 | 탭·기록 표 | 탭 내부 scroll | 원문 카드 내부 scroll | UI-8D fixture | 기록 조회·정보 복사 |
| UI-8E 특강관리 | 2단계 저장 위계 | modal 내부 scroll | 회차 카드·action 한 열 | UI-8E fixture | 기존 회차 읽기 |
| UI-8F 학생·Tally·반 | 목록·프로파일 | modal 내부 scroll | 표 내부 scroll·선택 bar | UI-8F fixture | 기존 학생·명단 읽기 |
| UI-8G 시험·분석·학사 | 단계·달력 구조 | 목록 내부 scroll | 탭·달력 내부 scroll | UI-8G fixture | 기존 시험·일정 읽기 |
| UI-8H 정산 | 두 정산 탭·save bar | 표 내부 scroll | 요약 한 열·표 내부 scroll | UI-8H fixture | 기존 정산 읽기 |
| UI-8I 연구·AI·자료 | 3개 workspace | 목록 내부 scroll | form·결과·자료 한 열 | UI-8I fixture | 기존 결과 읽기 |
| UI-8J 학생·학부모 포털 | 계정·읽기·쓰기 구분 | tablet-first | 탭 2열·행동 한 열 | UI-8J fixture | 교사 preview·기존 읽기 |

## 결과와 다음 단위

- 공개 화면 두 종류의 세 폭 실제 렌더와 가로 넘침 검사는 통과했다.
- 로그인 이후 화면은 UI-8A~J의 callback·원천·side effect 불변 정적 계약을 통과했다. 실제 운영 화면의 어색함은 `docs/next-session/README.md`의 한 묶음 사람 시각 검수로 남기며 UI-9B를 막지 않는다.
- UI-9B에서는 production fixture의 유일한 기존 실패 `90a`를 원인 판정하고, 기능 회귀인지 낡은 계약인지 바로잡은 뒤 전체 기능 회귀 기준선을 닫는다.
