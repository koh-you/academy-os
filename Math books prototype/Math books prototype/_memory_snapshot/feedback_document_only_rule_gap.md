---
name: feedback-document-only-rule-gap
description: "규칙을 memory·CLAUDE.md 문서에만 등재하고 자동 검수·정기 파이프라인·검수 에이전트 편입을 생략하면 시행되지 않는다. 마스터 재지시(2회 이상)가 발생하는 주 원인. 세션 70 확립 · 세션 75 (2026-07-23) 4축으로 확장 (에이전트 편입 + 자동 sync 파이프라인)"
metadata:
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 70 · 3권(03·07·08) 마지막 페이지 1문 원칙 미시행 재발 사건
  updated: 2026-07-23 세션 75 · 4축 확장 · 에이전트 편입 축 신설 · 자동 sync 파이프라인 도입
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제)**: 사용자로부터 콘텐츠 규칙 지시를 받으면 **문서 등재만으로 완료로 간주하지 말고, 반드시 네 축 모두 만족시켜야 한다** :

1. **문서 등재** — `feedback_*.md` 또는 관련 정책 파일에 규칙·이유·적용 방식 명시
2. **자동 검수 도구** — `scripts/*.mjs` 또는 `scripts/*.py` 로 위반을 감지하는 스크립트 신설
3. **정기 파이프라인 편입** — `refresh-all.mjs` (또는 Gate 5.0 도구 목록) 에 추가하여 갱신 시 자동 호출
4. 🔴 **검수 에이전트 정의 편입** (**세션 75 신설**) — `.claude/agents/{solution-review,problem-review,exam-review}.md` 의 "자동 도구 순차 실행" 섹션에 신규 스크립트 등재. 에이전트가 검수 시 호출하도록 명시

네 축 중 하나라도 빠지면 규칙은 다음 세션·다음 콘텐츠 재편에서 재위반된다.

## 왜 4번째 축이 필요한가 (세션 75 진단)

세션 75 (2026-07-23) 마스터 질문: "검수 에이전트가 아니고 도구를 쓰는 이유가 있나?"

원인 진단:
- 세션 57~72 에서 신설한 검수 도구들 (`solution-verbose-check.py`, `solution-graph-need-check.py`, `figure-effective-check.mjs`, `dmsolution-hangindent-check.mjs`, `equation-chain-check.py`, `dmspace-newpage-check.py`, `dmanswer-simplicity-check.py` 등) 이 refresh-all 편입은 됐으나 **`.claude/agents/{solution,problem,exam}-review.md` 정의 파일의 "자동 도구 순차 실행" 섹션에 편입 안됨**.
- 결과: 마스터가 `solution-review` 에이전트 호출해도 신규 도구 결과가 리포트에 반영 안됨. 클로드가 검수 시 관성적으로 스크립트 직접 호출.
- 3축 (문서·도구·파이프라인) 만으로는 **에이전트가 눈이 어두워짐**.

## Why (세션 70 사건 · 원 확립)
- 세션 69 (2026-07-22) 마스터 지시 : "무리함수 마지막 페이지 엉망임. 연습문제 레벨3 실전유형 맛보기 문제 배치 지침 문제 풀이 공간이 최소 5cm 이상 확보가 불가능한 경우 절대 3문제 배치 안함"
- 세션 69 조치 : `feedback_min_solution_space_4cm.md` 등재 · `\needspace{40mm}` 매크로 반영. **자동 검수 스크립트는 "신설 제안" 상태로 보류**.
- 세션 63·55 (그 이전) 재편 : 03 원 · 07 유리함수 · 08 무리함수의 실전 3문 배치가 자연스레 `[1, 2]` 패턴으로 놓임. 마스터 지시 이전에 만들어진 위반이 그대로 잔존.
- 세션 70 마스터 재지시 : "1문제 2문제 이렇게 페이지에 문항 배치가 들어갈경우. 문제 순서를 바꿔서 ... 하나도 지켜지지 않았어. 같은 지시를 두번째 내리고 있는데 왜 시행이 되지 않았는지도 분석해서 보고해"
- 원인 진단 :
  - 문서 등재는 됐으나 자동 검수·정기 파이프라인 편입이 안 됨 → 신규 작업 시 클로드가 규칙 존재를 의식적으로 조회하지 않으면 위반 감지 불가
  - 기존 파일 (세션 63 이전 재편) 은 소급 검수 프로세스가 없어서 위반 잔존
  - `refresh-all.mjs` 정기 갱신 (~13초) 에서 자동 감지되었다면 세션 70 재지시 없이도 세션 69 직후 감지·정정됐을 것

## How to apply

### 콘텐츠 규칙 지시를 받았을 때 (마스터 지시 응답 프로토콜 · 4축)
1. **문서 등재** — memory feedback 파일 신설/갱신
2. **검수 도구 즉시 신설** — 문서 등재와 동시에 (같은 세션 내) 자동 감지 스크립트 작성. "신설 제안" · "다음 세션" 등의 유예는 규칙 미시행의 주 원인. 도구 이름은 memory 에 명시.
3. **파이프라인 편입** — `refresh-all.mjs` 또는 Gate 5.0 명세에 추가 (같은 세션 내)
4. 🔴 **에이전트 정의 편입** — `.claude/agents/{solution,problem,exam}-review.md` 의 자동 도구 실행 섹션에 신규 스크립트 추가 (같은 세션 내). 에이전트 자체 프롬프트에 "다음 도구 순차 실행 후 결과 해석" 지시 명시.
5. **소급 검수** — 신규 도구로 기존 파일 전수 스캔 → 위반 감지 → 정정
6. **마스터 재확인** — 4 축 완료 · 소급 정정 결과 보고

### 자동 sync 파이프라인 (세션 75 신설)
- `scripts/agent-sync-check.mjs` (신설) : `.claude/agents/` 의 스크립트 언급 목록 vs `scripts/*.mjs`·`*.py` 실제 존재 · `refresh-all.mjs` 편입 목록을 비교. 미편입 감지 시 리포트.
- refresh-all 파이프라인 편입 시 agent-sync-check 자동 실행. 미편입 스크립트 있으면 YELLOW 경고.

### 검수 도구 신설이 즉시 불가한 경우 (드묾)
- `TODO: 검수 도구 신설 필요 (규칙 이름 · 감지 방법 · 우선순위)` 를 memory 최상단 P0 리스트에 기록
- 다음 세션 시작 시 최우선 처리

## 다른 위반 사례 관찰 (자동화 갭 유형)
- 세션 75 (2026-07-23) : 세션 57~72 신설 8+ 검수 도구가 에이전트 정의 미편입 발견. 4번째 축으로 확장 및 소급 편입.
- 세션 69 handoff `dmspace-newpage-check.py` — 유사 케이스. 자동 도구 신설이 handoff P0 에만 기록됨.
- 세션 67 `dmconcept-margin-scan.py` — 세션 66 handoff에서 P0 로 나열됐다 세션 67 에 실제 신설됨. **좋은 사례** (문서 → 도구 → 편입 순).
- 세션 55·57 그림 관련 정책 → `scripts/figure-check.mjs` · `scripts/coordinate-diff-check.mjs` 등으로 자동화 성공.

## 관련 정책
- [[feedback_system_first_priority]] — 시스템 구축이 파일 정정보다 우선
- [[feedback_style_change_regression_guard]] — 스타일 변경 후 전수 회귀 검증 (세션 69 · 동일 원리)
- [[feedback_ai_execution_discipline]] — 5축 gate (세션 69 · 완료 선언 규율)
- [[feedback_script_verification_required]] — 자동 스크립트 사후 grep 검증 필수 (세션 65 · 관련 원칙)
- [[feedback_min_solution_space_4cm]] — 이 원칙의 첫 적용 사례 · 세션 70 자동화 완결
