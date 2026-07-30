# 전체 UI 규칙 통일 전략 — 2026-07-28

## 목적과 범위

Academy OS의 모든 화면을 같은 사용 규칙으로 보이게 한다. 이번 프로그램은 화면 구조와 표현을 통일하는 일이며, Supabase/app_state 저장 계약, `notification_jobs`, Solapi 발송·예약, 출결 계산, 수업일지 원천을 바꾸지 않는다. 저장 동작 자체의 신뢰성 보강은 별도 1순위 작업으로 유지한다.

## 전수 인벤토리

| 영역 | 현재 공통 기반 | 정리할 불일치 |
| --- | --- | --- |
| 앱 프레임·사이드바 | `App.jsx`의 view 전환, 모바일 미디어 규칙 | 화면별 상단 여백, 스크롤 시작점, 모바일 메뉴 밀도 |
| 페이지 머리말·작업 바 | 여러 `*Header`, `*Toolbar`, `*Actions` | 제목·설명·주요 행동·보조 행동의 순서와 줄바꿈이 화면마다 다름 |
| 탭·필터·목록 | `compactTabs`와 화면별 독자 탭 | 선택 상태, 필터 배치, 좁은 화면의 가로 스크롤 규칙이 다름 |
| 카드·표·빈 상태 | `MetricCard`, `EmptyState` | 카드 여백·테두리·메타 글자 크기·테이블 모바일 대체 방식이 다름 |
| 버튼·상태 | `primaryButton`, `secondaryButton`, `InlineSaveStatus` | 저장/닫기/위험 행동의 시각 우선순위와 disabled/진행 상태가 균일하지 않음 |
| 모달·하단 저장 바 | `Modal`, `StickySaveBar` | 제목·닫기·본문 스크롤·footer 행동 영역이 화면마다 다름 |
| 피드백·반응형 | `AutosaveRiskNotice`, 개별 media query | 경고·오류·빈 상태·44px 터치 영역·한 열 전환 규칙이 분산됨 |

정량 기준으로 `App.jsx`는 약 27,895줄, `App.css`는 약 17,324줄이다. 따라서 전면 재작성 대신 공통 primitive를 먼저 강화하고 화면군별로 교체한다.

## 공통 화면 계약

1. 페이지는 `제목/짧은 설명 -> 현재 상태 또는 필터 -> 본문 -> 현재 영역의 행동` 순서를 유지한다.
2. 행동은 주요 1개, 보조, 위험 행동으로 분리한다. 저장/발송/삭제와 닫기·취소·탭 전환은 같은 강조도를 쓰지 않는다.
3. 모든 저장 표시는 `편집 중 -> 저장 중 -> 서버 반영 확인 중 -> 저장 완료/실패` 문구를 `InlineSaveStatus` 계열로 표현한다. UI 통일 작업은 상태 전이 로직을 변경하지 않는다.
4. 카드의 제목·보조 정보·상태 badge·행동 위치, 빈/오류 상태의 문구와 재시도 위치를 공통화한다.
5. 모달은 고정된 제목/닫기 영역, 스크롤 가능한 본문, 하단 행동 영역을 사용한다. 실제 저장·발송 버튼의 callback과 side effect는 이동·통합하지 않는다.
6. 모바일은 한 열 우선, 최소 44px 터치 대상, 긴 표는 내부 가로 스크롤 또는 카드 대체 중 하나를 명시한다. 전체 페이지 가로 넘침을 만들지 않는다.

## 연쇄 작업 단위

| 순서 | 목표 | 허용 범위 | AI 검수 | 사람 gate 처리 |
| --- | --- | --- | --- | --- |
| UI-0 | 인벤토리와 기준선 | 문서·정적 탐색 | CSS/JSX 패턴 목록, 영향 원천 대조 | 없음 |
| UI-1 | 디자인 토큰·앱 프레임 | 색상·간격·테두리·버튼/상태 primitive, 사이드바/본문 shell | build, CSS 가로 넘침·기존 클래스 계약 점검 | 없음 |
| UI-2 | 페이지 머리말·작업 바 | 읽기 전용 header/toolbar 구조 | 화면별 title/action 순서 static check, build | 없음 |
| UI-3 | 탭·필터·검색 | 선택 표현과 모바일 배치 | 선택 상태·keyboard/focus·build | 없음 |
| UI-4 | 카드·표·빈/오류 상태 | 읽기 전용 card/list/table shell | 데이터 callback 불변 diff, build | 없음 |
| UI-5 | 모달 공통 shell | 제목/본문/footer/닫기 UI | callback·저장 source·side effect 불변 diff | 실제 저장 버튼이 있는 모달은 절차만 다음 세션에 남기고 다른 모달 계속 |
| UI-6 | 저장·위험 상태 표현 | `InlineSaveStatus`/경고 배치와 문구 | 상태 전이 불변 test, build | 실제 서버 저장 확인이 필요한 화면만 독립 gate로 기록 |
| UI-7 | 모바일·접근성 pass | 640px 이하 layout, focus, touch target | responsive static check, build | 없음 |
| UI-8 | 고밀도 예외 화면 | 수업일지·알림관리·특강·시험관리 등 | 해당 화면 fixture + build | 발송/예약·운영 원천을 누르는 검수는 다음 프롬프트에 분리 |

## 실행·중단 규칙

- 한 커밋에는 한 UI 단위 또는 같은 primitive를 사용하는 좁은 화면군만 넣는다.
- 각 단위는 구현 전 읽는 원천, 바꾸지 않을 callback/side effect, AI 검수 명령을 기록한다.
- 실제 발송, 예약, 삭제, 출결 또는 다중 원천 저장을 누르는 검수가 필요하면 그 행동은 실행하지 않는다. 필요한 사람 절차·화면·기대 결과를 `docs/next-session/README.md`에 남긴다.
- 그 gate의 결과가 다음 UI 단위의 전제조건이 아니라면 다음 독립 단위는 계속한다. 전제조건이면 그 지점에서만 멈춘다.
- 매 단위마다 `npm run build`, 관련 deterministic fixture, `git diff --check`를 실행한다. 전체 production scenario의 기존 실패는 새 실패와 구분해 기록한다.

## 다음 착수

UI-0~UI-7, UI-8A·UI-8B·UI-8C·UI-8D와 UI-8E-0 inventory를 완료했다. UI-7·8A·8B·8C·8D 사람 시각 확인은 `docs/next-session/README.md`의 독립 절차로 누적되어 다음 화면군을 막지 않는다. 다음 UI-8E-1은 특강 상·하위 탭 touch 경계와 확정 명단·수업일지 반영 gate header를 모바일 한 열로 보강한다. 실제 원천 저장·수업 생성·알림 발송은 실행하지 않는다.
