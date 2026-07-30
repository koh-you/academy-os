# Academy OS 전체 UI 개선 작업 로드맵 — 2026-07-29

## 최종 목표

모든 Academy OS 화면이 같은 규칙으로 읽히고 동작하도록 정리한다. 사용자는 어느 화면에서도 `제목과 현재 맥락 -> 상태/필터 -> 본문 -> 주요 행동` 순서를 기대할 수 있어야 한다. 데스크톱·태블릿·모바일에서 정보 우선순위는 유지하고, 저장·발송·예약·출결·Supabase/app_state 원천은 UI 정리와 분리한다.

## 완료 기준

- 같은 역할의 제목, 설명, 탭, 필터, 카드, 버튼, 상태, 모달이 같은 위치·크기·색상 규칙을 사용한다.
- 주요 행동, 보조 행동, 위험 행동, 닫기/취소가 시각적으로 명확히 구분된다.
- 모바일에서 전체 OS를 사용할 수 있고 전체 페이지 가로 넘침, 잘린 버튼, 접근 불가능한 모달이 없다.
- 저장 화면은 공통 상태 표현을 사용하되, 서버 재조회 전 완료 표시를 하지 않는 기존 저장 계약을 보존한다.
- 각 단위마다 callback/원천/side effect 불변 정적검사, 관련 fixture, `npm run build`, `git diff --check`를 통과한다.

## 현재 완료 상태

| 단위 | 상태 | 결과 |
| --- | --- | --- |
| UI-0 | 완료 | 전역 인벤토리와 UI/데이터 작업 경계 확정 |
| UI-1 | 완료 | 디자인 토큰, 앱 프레임, 데스크톱 고정 사이드바, 공통 버튼 기반 |
| UI-2A | 완료 | 반관리·AI 도구·보충관리·자료함 공통 `PageHeader` 적용 |
| UI-2B | 완료 | 알림관리·시험분석·설정·수업연구·오답관리 상태/행동 머리말 통일 |
| UI-2C | 완료 | 월간 달력·수업일지의 탐색/맥락/상태/행동 머리말 구조 통일 |
| UI-2D | 완료 | 학사일정·학생관리·시험관리·정산의 도메인 페이지 머리말 통일 |
| UI-2E | 완료 | 원시 `sectionHeader` 59개를 공통 구조로 이관하고 잔여 0개 확인 |
| UI-3A | 완료 | 상위 탭 8종의 semantics·높이·active/focus·모바일 내부 스크롤 통일 |
| UI-3B | 완료 | 보조·중첩 탭을 secondary·compact 위계로 분리 |
| UI-3C-1 | 완료 | 학사일정·수업일지·수업연구 button filter와 결과 건수 통일 |
| UI-3C-2 | 완료 | 알림·시험·학생·오답·학사일정 select/chip 복합 필터 통일 |
| UI-3C-3 | 완료 | 수업·학사 달력 월 탐색과 월별 정산월 선택 통일 |
| UI-3D | 완료 | 알림·학부모 응대·수업·시험·특강·보충 검색과 지우기·0건 통일 |
| UI-3E | 완료 | 6개 선택 작업 바의 건수·안전/danger actions·모바일 줄바꿈 통일 |
| UI-4A-1 | 완료 | 5개 화면의 단순 요약 카드 16개를 compact `MetricCard`로 통일 |
| UI-4A-2 | 완료 | 예약 확인·학생 마이페이지·시험분석의 클릭형/micro 카드 14개 통일 |
| UI-4B-1 | 완료 | 학생·수업·알림·보충 대표 행 4종에 공통 `ListCard` shell 적용 |
| UI-4B-2 | 완료 | 포털 읽기 전용 공지·자료·보고서·수업기록·보충 일정 카드 통일 |
| UI-4B-3 | 완료 | 알림 대상·시험 후 대상 checkbox 행의 선택·focus·모바일 터치 통일 |
| UI-4B-4A | 완료 | 학생 포털 숙제 완료·질문 쓰기 행의 draft·저장 상태·행동 shell 통일 |
| UI-4B-4B | 완료 | 보충 후보 행의 진행 상태·상세/완료 확인 callback 보존 shell 적용 |
| UI-4C-1 | 완료 | 표 전수 inventory와 알림·학생·퇴원생 공통 가로스크롤 shell 적용 |
| UI-4C-2 | 완료 | 수업 상세·수업일지·시험정보 표 공통 가로스크롤 shell 적용 |
| UI-4C-3A | 완료 | 시험분석 검수·예약 상태·테스트 응시 표 공통 scroll shell 적용 |
| UI-4C-3B | 완료 | 오답관리·학생 성적·학원시험 표 공통 scroll shell 적용 |
| UI-4C-4 | 완료 | 월별·특강 정산과 포털 학교 성적 표 공통 scroll shell 적용 |
| UI-4C-5 | 완료 | 공통 header·row border·status pill 토큰과 sticky 적용 범위 확정 |
| UI-4D-1A | 완료 | 공통 `EmptyState` 구조와 학생·학부모 포털 읽기 빈 상태 통일 |
| UI-4D-1B | 완료 | 학생 프로필·시험 미리보기·테스트·특강 0건 상태 통일 |
| UI-4D-2A | 완료 | 학부모 응대·수업 명단·시험정보·학생 filter 0건 상태 구분 |
| UI-4D-2B | 완료 | 특강 신청 매칭·수동 접수·보충 이력 검색 0건 상태 구분 |
| UI-4D-3A | 완료 | 프롬프트 제작실·기출문제 읽기 전용 loading 상태 통일 |
| UI-4D-4 | 완료 | 프롬프트·알림 기록 읽기 전용 error/retry 상태 통일 |
| UI-4E-1A | 완료 | 단일 읽기 disclosure 5종의 toggle-region 접근성 연결 |
| UI-4E-1B | 완료 | 시험분석 산출물·파이프라인 disclosure 11종 연결 |
| UI-4E-1C | 완료 | 특강 명단·수업일지 반영·개별 시간 disclosure 연결 |
| UI-5A | 완료 | 모달별 원천·draft·side effect·닫기 의미 전수 inventory |
| UI-5B-1 | 완료 | 공통 dialog semantics·제목 연결, 닫기/focus 동작 불변 |
| UI-5B-2 | 완료 | 정산 달력·특강 진행·보충 이력·인수인계 내부 스크롤 |
| UI-5C-1 | 완료 | 문제 인쇄·인수인계 PDF 공통 footer와 모바일 줄바꿈 |
| UI-5C-2 | 완료 | 출결 결과·HWPX 로컬 내보내기 공통 footer, callback 불변 |
| UI-5C-3 | 완료 | 학사일정·시험대비·보충 이력 혼합 쓰기 분류, 문맥 행동 유지 |
| UI-5D-1 | 완료 | 수업 취소·학생 퇴원 복구/보존형 위험 footer |
| UI-5D-2 | 완료 | 보강만 취소·원 결석 취소 mode 위험 footer와 busy 차단 |
| UI-5D-3 | 완료 | 퇴원 중복 단건·일괄 영구삭제 audit·확인·disabled 위험 footer |
| UI-5D-4 | 완료 | native confirm 26개 원천·side effect 분류와 이관 경계 |
| UI-5E-1 | 완료 | modal draft·닫기 의미 분류와 caller 소유 원칙 |
| UI-5E-2 | 완료 | 기존 saving/audit no-op 흐름의 X·Escape closeDisabled |
| UI-5E-3 | 완료 | 결과 소유/dirty 비교 필요 흐름 UI-6 이관, UI-5 안전 범위 완료 |
| UI-6A-1 | 완료 | InlineSaveStatus 33곳·vocabulary·완료 신뢰도 inventory |
| UI-6A-2 | 완료 | verifying·live status·실패 우선 aggregate 공통 계약 |
| UI-6A-3 | 완료 | 정규수업 열기·시험분석 단계형 저장 badge 공통 연결 |
| UI-6B-1 | 완료 | 3개 원천 계약·7개 자동저장 경고 재대조 |
| UI-6B-2 | 완료 | 미해결 경고를 danger와 분리한 저장 주의 공통 톤 |
| UI-6C-1 | 완료 | 전체·영역·행 loading/retry/부분 실패 inventory |
| UI-6C-2 | 완료 | 공통 AsyncOperationStatus 상태·접근성·모바일 계약 |
| UI-6C-3 | 완료 | 알림 action·Solapi 부분 대조 상태 공통 적용 |
| UI-6D-1 | 완료 | Academy OS row 상태와 Solapi provider 참조·결과 원천 inventory |
| UI-6D-2 | 완료 | 보충 알림 제어의 Academy OS 상태와 Solapi 그룹 참조 분리 |
| UI-6D-3 | 완료 | 알림관리·수업일지의 Academy OS 상태와 검증된 Solapi 그룹 위계 통일 |
| UI-7A-1 | 완료 | 앱 shell·사이드바 desktop/mobile/accessibility gap inventory |
| UI-7A-2 | 완료 | 사이드바 nav/current/toggle semantics와 iOS app shell safe-area |
| UI-7A-3 | 완료 | 모바일 compact 현재 화면·전체 메뉴 toggle과 선택 후 본문 진입 |
| UI-7A-4 | 완료 | desktop sticky·tablet 3열·mobile compact/2열 shell 회귀 계약 |
| UI-7B-1 | 완료 | PageHeader·NavigationHeader·SectionHeader 모바일 gap inventory |
| UI-7B-2 | 완료 | 공통 header 긴 copy·탐색 row wrap·모바일 title·44px action |
| UI-7B-3 | 완료 | 알림·시험·학사일정·학생 프로필 복합 header action 회귀 |
| UI-7C | 완료 | 탭·필터·검색의 선택 가시성·내부 스크롤·44px 지우기 |
| UI-7D | 완료 | form 378개 이름, 오류/도움말 연결, iOS 16px·44px |
| UI-7E | 완료 | action 이름·44px·focus와 disconnected button 0개 |
| UI-7F | 완료 | native summary 23개와 DataTableShell 15개 touch·focus·scroll |
| UI-8A | 완료 | Lesson Hub 월간 달력 내부 scroll·grid semantics·callback 경계 |
| UI-8B-0 | 완료 | 수업일지 맥락·10열 기록·저장·알림·modal 예외 inventory |
| UI-8B-1 | 완료 | 수업일지 modal 동적 viewport·safe-area·touch scroll |
| UI-8B-2 | 완료 | 수업일지 10열 기록의 named table shell 단일 scroll |
| UI-8B-3 | 완료 | 수업일지 모바일 저장 바·named 알림 작업 region |

## 전체 세부 작업 목록

### UI-2. 페이지 머리말·작업 바

| 단위 | 화면/대상 | 목표 | AI 검수 및 gate |
| --- | --- | --- | --- |
| UI-2C | 월간 수업 달력, 수업일지 | 이전/다음 탐색, 날짜·수업 맥락, 상태, 수정·취소 행동을 탐색형 header로 분리 | 완료 — 탐색·수정·취소 callback 불변. 실제 취소 조작 없음 |
| UI-2D | 학사일정, 학생관리, 시험관리, 정산 | 도메인별 상단 제목·요약·주요 행동을 공통 구조로 이관 | 완료 — 저장 callback과 계산값 불변 |
| UI-2E | 모든 `sectionHeader`, `Toolbar`, `*Actions` | 섹션 제목/설명/건수/행동 순서와 compact/slim 규칙 통일 | 완료 — callback/disabled 보존, 원시 머리말 잔여 0개 |

### UI-3. 탭·필터·검색·선택 도구

| 단위 | 화면/대상 | 목표 | AI 검수 및 gate |
| --- | --- | --- | --- |
| UI-3A | 알림·시험·설정·학생·정산 상위 탭 | 공통 탭 높이, active 상태, keyboard focus, 좁은 화면 가로 스크롤 | 완료 — 선택 state/setter·조건부 렌더 불변 |
| UI-3B | 화면 내부 보조 탭 | 주/보조 탭 위계를 구분하고 중첩 탭의 현재 위치를 명확히 표시 | 완료 — 탭별 렌더 조건·setter 불변 |
| UI-3C | 학교·학년·반·상태·날짜 필터 | label, select/button 배치, 초기화 행동, 결과 건수 위치 통일 | 완료 — button, select/chip, 날짜/month 필터 계약 고정 |
| UI-3D | 학생/수업/알림 검색 | 검색 입력, 지우기, 0건 상태, 모바일 폭 통일 | 완료 — 7개 검색 normalization·결과 집합 불변 |
| UI-3E | 선택 행 작업 바 | 선택 건수, 일괄 행동, 선택 해제, 위험 행동 위치 통일 | 완료 — callback·disabled 보존, 실제 side effect 미실행 |

### UI-4. 카드·목록·표·접힘 영역

| 단위 | 화면/대상 | 목표 | AI 검수 및 gate |
| --- | --- | --- | --- |
| UI-4A | 지표·요약 카드 | 숫자, label, 보조 설명, 상태 badge 위계 통일 | 완료 — 단순 16개·클릭형/micro 14개, 계산 원천 불변 |
| UI-4B | 학생·수업·알림·보충 목록 카드 | 제목, 메타, 상태, 행동 위치와 카드 밀도 통일 | 완료 — 카드형 목록 1~4B 완료, 표형 행은 UI-4C로 이관 |
| UI-4C | 데이터 표 | 공통 header/row/pill/빈 행, sticky header 여부, 내부 가로 스크롤 규칙 | 완료 — 13개 표 shell과 공통 시각 토큰, 기존 정산 sticky만 유지 |
| UI-4D | 빈 화면·로딩·오류 | `EmptyState` 기반 문구, 재시도, 다음 행동 위치 통일 | 완료 — 안전한 읽기 상태 통일, 쓰기/외부 동작 오류는 UI-6로 이관 |
| UI-4E | 접힘/펼치기 영역 | 요약에서 무엇을 보여줄지, 펼침 버튼 위치, 상태 유지 규칙 통일 | 완료 — 실제 독립 disclosure 연결, 모달/sidebar는 UI-5/UI-7 이관 |

### UI-5. 모달·패널·확인 흐름

| 단위 | 화면/대상 | 목표 | AI 검수 및 gate |
| --- | --- | --- | --- |
| UI-5A | 전체 모달 inventory | 모달별 읽기/쓰기 원천, draft, 저장, 발송, 삭제, 출결 side effect 표 작성 | 완료 — `docs/ui-modal-inventory-2026-07-29.md` |
| UI-5B | 공통 모달 shell | 고정 제목/닫기, 스크롤 본문, 너비 단계, 모바일 safe-area 통일 | 완료 — semantics·긴 읽기·closeDisabled, focus/mobile은 UI-7 |
| UI-5C | 모달 footer | 취소·보조·저장·발송·위험 행동 순서와 disabled/진행 상태 통일 | 완료 — 안전한 읽기·출력·로컬 행동만 공통화, 쓰기 행동은 UI-5D/UI-6 |
| UI-5D | 삭제·취소 확인 | 영향 범위, 보존 원천, 최종 확인 입력, 위험 색상 통일 | 완료 — 기존 modal 공통화, native confirm 26개는 기능별 저장 gate로 이관 |
| UI-5E | draft와 닫기 | 미저장 변경 경고, 실패 draft 유지, Escape/X/취소의 의미 통일 | 완료 — 기존 guard 일치, dirty/result 소유 필요 흐름은 UI-6 |

### UI-6. 저장·경고·비동기 상태

| 단위 | 화면/대상 | 목표 | AI 검수 및 gate |
| --- | --- | --- | --- |
| UI-6A | 저장 가능한 모든 화면 | `변경됨 -> 저장 중 -> 서버 확인 중 -> 완료/실패` 공통 표현 | 기존 상태 전이와 재조회 계약 대조 |
| UI-6B | 자동저장 위험 알림 | 위험도·원천·실패 복구·상세 접힘 위치 통일 | 해결 전 경고를 숨기지 않음 |
| UI-6C | 로딩·재시도·부분 실패 | 전체/영역/행 단위 상태 범위를 구분 | API 호출 순서·재시도 callback 불변 |
| UI-6D | 알림/Solapi provider 상태 | OS 저장 상태와 외부 provider 상태를 시각적으로 분리 | 실제 조회·예약·취소는 별도 gate |

### UI-7. 모바일·접근성

| 단위 | 화면/대상 | 목표 | AI 검수 및 gate |
| --- | --- | --- | --- |
| UI-7A | 앱 shell·사이드바 | 전체 메뉴 접근, 현재 위치, 접힘, safe-area, 홈 화면 바로가기 사용성 | view 전환 불변 |
| UI-7B | 페이지 머리말·행동 | 제목 줄바꿈, 행동 한 열/가로 스크롤, 주요 행동 우선 | callback 불변 |
| UI-7C | 탭·필터·검색 | 터치 44px, 선택 가시성, 스크롤 힌트, 입력 폭 | 선택/검색 결과 불변 |
| UI-7D | 입력 폼 | label, 오류, 키보드 종류, textarea, 하단 저장 접근성 | 저장 callback 불변 |
| UI-7E | action | icon 이름, 44px touch, no-op 제거, callback/disabled/submit 보존 | 완료 — JSX button 433개, disconnected 0개 |
| UI-7F | disclosure·표 | summary 44px/focus와 표 내부 scroll·영역 이름 | 완료 — summary 23개, DataTableShell 15개 |
| UI-7G | 접근성 전역 | focus-visible, aria label/tab state, 색 대비, reduced motion | 완료 — UI-7A~F 회귀와 통합 사람 검수 절차로 흡수 |

### UI-8. 고밀도 업무 화면별 최종 정리

| 단위 | 화면군 | 핵심 목표 | 사람 gate 가능성 |
| --- | --- | --- | --- |
| UI-8A | Lesson Hub·월간 달력 | 일정·필터·등록·상태를 한 시선 흐름으로 정리 | 낮음 |
| UI-8B | 수업일지 | 수업 맥락, 학생 기록, 저장, 알림 상태를 분리해 정리 | 실제 저장/알림은 독립 gate |
| UI-8C | 보충관리 | 원 결석/숙제, 일정, 세 알림 원천, 취소 의미를 시각 분리 | 예약·취소는 독립 gate |
| UI-8D | 알림관리·학부모 응대 | 작성/대상/예약/결과/채널 찾기 흐름 정리 | 실제 발송 없음 |
| UI-8E | 특강관리 | 안내문·신청·확정 명단·회차·수업일지 반영 단계 정리 | 원천 저장은 독립 gate |
| UI-8F | 학생·Tally·반관리 | 기본정보·원본·운영메모·반·퇴원 흐름 정리 | 등록/병합/삭제는 독립 gate |
| UI-8G | 시험·시험분석·학사일정 | 원천·분석 단계·학교 일정·저장 상태 정리 | 저장/삭제는 독립 gate |
| UI-8H | 정산 | 계산 원천·조정·제외·합계·저장 상태 정리 | 저장 재조회만 별도 확인 |
| UI-8I | 수업연구·AI 도구·자료함 | 작성/분석/파일/결과 영역의 위계 정리 | AI/Storage 호출은 실행하지 않음 |
| UI-8J | 학생·학부모 포털 | 모바일 우선 읽기/쓰기 카드와 계정 맥락 정리 | 현재 목록에서 실제 쓰기 gate는 제거 상태 유지 |

### UI-9. 최종 품질·정리

| 단위 | 목표 | 완료 조건 |
| --- | --- | --- |
| UI-9A | 시각 회귀 매트릭스 | 데스크톱·태블릿·모바일에서 주요 화면군 기준 캡처/검토 |
| UI-9B | 기능 회귀 | production fixture/build와 callback/source diff 모두 통과 |
| UI-9C | 중복 CSS·미사용 클래스 정리 | 화면 적용 확인 뒤 작은 단위로만 삭제, selector 회귀 없음 |
| UI-9D | 사람 검수 큐 정리 | 독립 gate만 다음 세션 문서에 화면·클릭·통과 기준으로 남김 |
| UI-9E | 배포 확인 | 최신 `origin/main`과 Vercel Production 번들 일치 확인 |

## 단위별 실행 규칙

1. 한 번에 표의 한 행만 구현한다.
2. 구현 전 변경 가능한 UI 파일, 보존할 callback/원천, 외부 side effect를 명시한다.
3. AI가 정적 계약, 관련 fixture, build, diff 범위를 먼저 검수한다.
4. 사람 gate가 다음 단위와 독립적이면 정확한 절차만 다음 세션 문서에 남기고 다음 단위로 진행한다.
5. 실제 발송·예약·삭제·출결·Storage·AI 유료 호출은 UI 검수 목적으로 실행하지 않는다.
6. 검수 완료 단위만 별도 commit/push하며, Git push가 Vercel 자동 배포를 유발한다.

## 다음 실행 목표

> 최신 상태: `UI-0`~`UI-7`과 `UI-8A`를 완료했다. 현재 다음 작은 목표는 `UI-8B-0 수업일지 inventory`이며, 실제 저장·삭제·발송·출결 실행은 하지 않는다.

수업일지의 수업 맥락, 학생 기록 표, 저장 bar, 알림 상태/행동, modal 내부 scroll과 390px 예외를 먼저 수량화한다. 별도 App.jsx 리팩터링은 UI 프로그램 완료까지 중단한다.
