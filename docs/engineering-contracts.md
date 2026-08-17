# Academy OS Engineering Contracts

이 문서는 관련 기능을 건드릴 때만 읽는 상세 계약이다.

## 저장 계약

- 서버에 남아야 하는 값은 localStorage만 사용하지 않는다.
- 저장 전 직접 원천, 파생 소비 원천, 외부 side effect, 재조회 범위를 정한다.
- 완료 상태는 API 성공과 필요한 Supabase 재조회·snapshot 대조 뒤에만 표시한다.
- 일부 단계만 성공하면 전체 성공으로 숨기지 않고 단계별 결과와 재시도 방법을 보여준다.
- 전역 `app_state` snapshot보다 변경 key별 dirty 저장, debounce, version/updatedAt 충돌 방지를 우선한다.

## 편집·AI 계약

- `AI/template seed -> local draft -> human save -> persisted human/final value` 순서다.
- 사용자가 입력을 시작한 뒤 렌더 계산, normalize, AI 재생성이 값을 덮어쓰지 않는다.
- 입력값에 `trim()`한 파생값을 직접 연결해 공백·줄바꿈·커서를 깨뜨리지 않는다.
- AI 재생성은 빈 값이나 명시적 재생성/초기화와 사용자 동의가 있을 때만 허용한다.

## 위험 행동 계약

- 저장, 삭제, 업로드, AI 실행, export, 알림 발송/예약은 현재 영역에 진행·성공·실패 상태를 둔다.
- 알림 저장과 실제 발송/예약/취소는 분리한다.
- 대량 삭제·운영 데이터 변경·유료 호출은 대상과 영향 범위를 재조회한 뒤 사람 gate를 연다.
- 운영 화면 증상은 로컬 코드만 믿지 않고 배포 commit·bundle·cache 상태를 함께 확인한다.

## 시험분석 계약

- v2 흐름은 `PDF 업로드 -> 문항 수 후보 -> 사람 확정 -> 1~N 행 고정 -> AI 행 채움 -> 누락 검수 -> 사람 최종 확정`이다.
- 원본 row, 추출값, AI 후보, local draft, 사람 저장본, 최종 산출물을 구분한다.
- AI가 문항 수·행 개수·문항 사실을 확정하거나 사람 저장본을 덮어쓰지 않는다.
- 과금 호출과 테스트 데이터 삭제는 별도 사람 gate다.

## 리팩터링 계약

- `동작 보존 inventory -> 한 의미 단위 분리 -> 전용 검사 -> 전체 회귀` 순서다.
- 순수 helper/component를 먼저 분리하고 인증, persistence, 출결 polling, notification reconcile, Solapi는 별도 고위험 단위로 다룬다.
- 문자열이 특정 파일에 존재하는지만 검사하는 테스트는 모듈 분리를 막지 않도록 사용자 동작·export 계약 중심으로 바꾼다.

## UI 디자인 계약

- 색상·간격·타이포·그림자·라운드는 `src/app/App.tokens.css`의 `--academy-*`/`--status-*` 토큰이 유일한 원천이다. 새 하드코딩 색상은 `scripts/test-ui-color-token-hygiene.cjs`(`test:production` 포함)가 차단한다.
- 버튼은 `docs/ui-button-hierarchy.md`의 6종(primaryButton/softButton/ghostButton/dangerSoftButton/dangerButton/iconButton)만 쓴다. 화면당 primary 1개, 취소는 왼쪽·확정은 오른쪽, 위험 동작은 2단계 확인이다.
- 접기/펼치기는 장식이 아니다. 모달·패널 내용이 길어서 스크롤만으로 훑기 부담스러울 때, 필요한 부분만 펼쳐보게 하려는 목적이다. 그 목적에 맞을 때만 `src/shared/components/Disclosure.jsx`를 쓰고, 짧은 내용에는 기본으로 붙이지 않는다.
- 화면의 큰 구성(탭 배치, 목록/상세 레이아웃, 진입 동선)은 유지한다. 반면 모달 내부·상세 화면처럼 지엽적인 부분은 기존 모양을 그대로 재현할 필요 없다 - 위 토큰·버튼·접기 규칙과 업계 표준(headless) 패턴으로 다시 짜도 된다. 판단 기준은 "기능이 그대로 동작하고, 사용자가 화면을 보고 바로 알아볼 수 있는가"이지 픽셀 단위 재현이 아니다.
- 새 상호작용 컴포넌트(토글/드롭다운/탭 등)가 필요하면 헤드리스 패턴을 따른다 - 컴포넌트가 상태·ARIA·트랜지션을 소유하고 스타일은 `className` prop으로 주입한다(Radix UI/Headless UI 방식).
- 새 UI를 만들기 전 `src/shared/components/`에 이미 있는지 먼저 확인한다.
- 네이티브 `<details>/<summary>`를 발견하면(장식용이 아니라 위 접기/펼치기 기준에 해당하는 경우) `Disclosure`로 옮긴다. CSS는 `summary` → `.disclosureTrigger`(트리거 버튼 자체), 그 안의 제목·배지 영역 → `.disclosureTriggerLabel`, `[open]` → `[data-open="true"]`로 바꾼다. 네이티브 `::after`/`::-webkit-details-marker`나 커스텀 화살표 텍스트는 지우고 컴포넌트가 이미 그리는 공용 화살표로 대체한다. 트리거 안에 제목과 배지처럼 좌우로 나뉘는 요소가 있으면 `.disclosureTriggerLabel { display:flex; justify-content:space-between; }`로 배치한다.
- `bodyClassName`으로 넘긴 클래스는 `.disclosureBodyInner`에 붙는다. 이 요소는 열린 상태에서 기본 `padding: 0 14px 14px`를 가지며 선택자 특이성이 웬만한 커스텀 규칙보다 높아 기존 `padding`을 덮어쓸 수 있다 — 의도된 결과면 그대로 두고, 정확한 값이 필요하면 선택자를 더 구체적으로 쓴다.
- 앱 전체 네이티브 `<details>/<summary>` 개수는 `scripts/scenario-tests-production.cjs`의 `disclosureTableInventory.detailsCount`/`summaryCount`로 검사된다. 개수가 바뀌는 작업(Disclosure 전환 등)을 할 때는 이 숫자를 함께 고친다. 여러 브랜치가 동시에 이 숫자를 건드리면 병합 시 충돌하므로, 나중에 병합하는 브랜치는 새 main 기준으로 rebase한 뒤 실제 개수를 다시 세어 반영한다.
- 브라우저 자동화로 접기/펼치기 애니메이션(높이 전환)을 검증할 때, 탭이 실제로 화면에 그려지지 않는 상태(`document.hidden === true`)면 CSS 트랜지션이 진행되지 않고 시작 값에 멈춘 것처럼 보일 수 있다 — 실제 버그가 아니라 도구 환경의 함정이다. 이때는 요소에 `transition: none`을 임시로 걸어 즉시 최종 값으로 점프시킨 뒤 측정해서 진짜 최종 상태를 확인한다.
