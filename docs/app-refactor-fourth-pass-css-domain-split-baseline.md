# App/API 4차 리팩터링 4-6 CSS domain entry 분리 기준선

업데이트: 2026-08-16

## 목적

4-6은 2만 줄 단일 `App.css`의 변경 반경을 도메인 단위로 줄이고 초기 main CSS 예산을 고정한다(`docs/app-refactor-fourth-pass-plan.md`의 4-6 절). 이 문서는 착수 시점 조사 결과이며, 실제 분리 작업 전에 위험도를 먼저 판단하기 위해 작성했다.

## 정량 기준선

| 항목 | 값 |
| --- | --- |
| `src/app/App.css` | 22,609줄, 규칙 블록 약 3,321개(at-rule 21개 포함) |
| import 방식 | `src/main.jsx`에서 전역 1회 import — 도메인별 lazy 분리 없음 |
| `:root` 디자인 토큰 | `--academy-*`(색상/spacing/radius/shadow) + `--status-*`(상태별 배경/테두리/텍스트) 약 30개 |
| 토큰 실사용(`var(--academy...)` 배경 기준) | 55곳 |
| 하드코딩 색상 선언(`background/color/border: #...`) | 2,215곳 |
| 고유 hex 색상 값 | 233종 |
| 파일 내 섹션 주석/구획 | 사실상 없음(주석 1건) |

## 핵심 발견

1. **CSS가 어느 도메인 JS 청크와도 연결돼 있지 않다.** `src/app/lazyTeacherViewComponents.js`가 13개 도메인 컴포넌트(TeacherLessonHubV2, SupplementCenter, StudentManager, NotificationCenter, SettlementWorkspace, ExamAnalysisPipelineCenter, ExamPrepCenter, SettingsCenter, PlanningToolCenters, LearningSupportCenters, DashboardAuxiliaryPanels, LessonNestedPanels)를 이미 lazy `import()`로 분리했지만, CSS는 여전히 `main.jsx`에서 한 번에 전부 로드된다. 파일만 나누고 import 위치를 `main.jsx`에 그대로 두면 유지보수 반경만 줄고 초기 번들 크기는 그대로다 — plan이 요구하는 "main CSS budget 고정"을 달성하려면 도메인 CSS를 해당 lazy JS 파일 쪽에서 import해야 한다.
2. **디자인 토큰은 있지만 거의 안 쓰인다.** `:root`에 색상/spacing 토큰이 정의돼 있는데 실제 배경색 지정의 97% 이상이 하드코딩 hex다. 이는 사용자가 지적한 "버튼 색상이 주먹구구식"이라는 문제와 같은 원인 — 4-6(파일 분리)과는 다른 작업(토큰 강제 사용)이 필요하다.
3. **과거 UI 통일 audit(`docs/archive/ui-unification-final-audit-2026-07-30.md`)는 중복/폐기 selector 제거만 검증했다.** 토큰 사용 강제나 버튼 위계 규칙은 그 범위 밖이었다.
4. **자동 시각 회귀 검사가 없다.** `docs/archive/ui-visual-regression-matrix-2026-07-30.md`는 1회성 수동 확인 기록이며, 이 프로젝트에는 스크린샷 diff 등 자동 시각 회귀 도구가 없다. CSS 규칙을 여러 파일로 옮기면 로드 순서가 바뀌어 동일 selector 우선순위(cascade)가 달라질 수 있는데, 이는 기능 테스트(`test:production`, `browser-smoke`)로는 잡히지 않고 오직 실제 화면 확인으로만 잡힌다.

## 위험도 판단

이번 세션에서 진행한 JS 리팩터링(4-4, 4-5)은 함수를 옮기되 정확히 같은 인자로 같은 결과를 반환하는지 결정론적 테스트로 검증할 수 있었다. CSS 분리는 다르다 — **같은 selector가 파일 A와 파일 B 중 어디서 오느냐에 따라 나중에 로드되는 규칙이 이기는(cascade) 방식**이라, 파일을 나누는 순간 의도치 않게 우선순위가 바뀔 수 있다. 이 프로젝트는 이를 검증할 자동 도구가 없다.

## 제안하는 단계

1. **4-6b(낮은 위험) — 공유 토큰/리셋 CSS를 별도 파일로 물리적 분리, import 위치는 `main.jsx`에 그대로 유지.** 로드 순서가 바뀌지 않으므로 cascade 위험이 없다. 순수 파일 구조 정리로, `npm run build` CSS 산출물이 byte-identical한지 확인하는 것만으로 검증 가능하다.
2. **4-6c 이후(높은 위험) — 도메인별 CSS를 해당 lazy JS 파일에서 import하도록 실제로 옮기는 작업.** 이건 cascade 순서가 바뀌는 진짜 구조 변경이라, 각 도메인 화면을 실제로 열어 스크린샷으로 대조하는 절차가 반드시 필요하다.

## 상태·저장·부작용 경계

4-6a는 조사만 수행한다. 실제 CSS 이동은 4-6b부터 시작하며, cascade 위험이 있는 4-6c 이후 단위는 진행 전 사용자에게 시각 검증 방식(스크린샷 대조 등)을 확인받는다.

## 2026-08-16 4-6b/4-6c 진행 상태

- 4-6b는 shared token/reset 82줄을 `App.tokens.css`로 옮기고 `main.jsx`에서 기존 App.css 바로 앞에 import해 순서를 유지했다.
- SettlementWorkspace는 이미 `settlementWorkspace.css`, `monthlySettlement.css`, `specialLectureSettlement.css`를 lazy component 쪽에서 import하므로 4-6c 추가 후보에서 제외했다.
- 4-6c 첫 단위는 NotificationCenter의 `ParentResponseContextPanel` 전용 selector 31개다. exact selector는 App.css에서 모두 제거됐고 새 CSS의 selector는 전부 `.parentResponseContext*`로 anchor된다. 같은 cascade context의 반복은 서로 다른 속성을 선언하는 `.parentResponseContextActions > span` 2개뿐이며 함께 이동한다.
- 최초 390px screenshot에서 App.css 후반의 generic `.notificationPanel { gap: 12px }`가 더 이상 전용 `gap: 16px`을 덮지 못하는 순서 회귀를 발견했다. 새 640px domain override로 기존 computed value를 명시해 1440px·390px before/after PNG SHA-256을 각각 동일하게 만들었다.
- build 결과 main CSS는 `338,443→336,364 bytes`, 신규 lazy NotificationCenter CSS는 `2,142 bytes`다. production `305/305`, scenario `828/828`, safe browser `77/77`을 통과했다.

## 2026-08-21 MV-5a 진행 상태 (Maintenance Velocity 재개, 4-6 번호 연장 안 함)

이 문서는 4차의 역사적 기록으로 유지하고, 이후 CSS 분리 단위는 `docs/maintenance-velocity-refactor-plan.md`에 MV 번호로 기록한다. 아래는 이번 재실측 기준선이다.

- 착수 시점(2026-08-21) 재실측: `App.css` 22,230줄, main CSS 빌드 산출물 `414.41 kB`(gzip 미표기, 이전 4-6c 이후 다른 도메인 CSS 추가로 증가). 여전히 도메인별 lazy 분리 없이 `main.jsx`에서 전역 1회 blocking import.
- **선택 기준**: lazy 화면들 중 자체 selector 접두사(`.pastPaper*` 등)만 쓰고 다른 도메인 JSX와 공유하지 않는 후보를 `grep -rl`로 찾아 선정했다. `ExamPrepPastPaperPanel.jsx`(이미 `ExamPrepCenter.jsx` lazy 청크에 속함)의 `.pastPaper*` 9개 규칙(+모바일 미디어쿼리 2개 override, 총 11 selector)이 App.css 어디에도 다른 파일에서 재사용되지 않음을 확인했다.
- **cascade 안전성 검증 방법**: 이 리포에 스크린샷 diff 도구가 없어(4-6c 때와 동일한 제약), computed style을 before/after로 직접 비교했다. `npm run dev:safe`로 로컬 서버를 띄우고 브라우저에서 `getComputedStyle()`로 7개 selector × 18개 속성(desktop 1280px)과 2개 selector × 3개 속성(mobile 900px, `max-width: 1100px` breakpoint)을 이동 전/후 각각 캡처해 완전히 동일함을 확인했다(색상 값까지 rgb 단위로 일치).
- `src/domains/exams/examPrepPastPaperPanel.css`(신규)를 만들고 `ExamPrepPastPaperPanel.jsx`가 직접 import한다(기존 4-6c의 `parentResponseContextPanel.css` 패턴과 동일).
- build 결과: main CSS `414.41 kB → 413.23 kB`, 신규 lazy `ExamPrepCenter.css` `1.21 kB`. `scripts/test-exam-prep-past-paper-css-domain-split.mjs`(신규, postcss로 selector 11개·미디어쿼리 앵커링 구조 검증)와 기존 `test:production`(303/303) 모두 통과.
- **다음 후보 미착수**: 도메인당 selector 공유 여부를 전수 조사하지 않았다 — `ExamPrepPastPaperPanel` 하나만 검증 후 안전 단위로 확정했다. 다음 세션에서 유사하게 격리된 다른 lazy 화면(예: `ExamAnalysisPipelineCenter` 자체 selector, `PlanningToolCenters` 하위 화면들)을 같은 방법으로 하나씩 확인해 나간다. App.css 전역 import 제거(모든 selector가 도메인별로 옮겨진 뒤)는 아직 훨씬 먼 목표다.
