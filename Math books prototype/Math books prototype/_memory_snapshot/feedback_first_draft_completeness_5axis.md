---
name: feedback-first-draft-completeness-5axis
description: "bank/first-draft-완성도-기준.md + scripts/first-draft-report.mjs v2.0 (2026-07-13 세션 38 후반부 방안 G · v1.0 방안 C · 마스터 승인). 첫 제작 완성도 5축 (구조·정합·정확성·난이도·세련도). v2.0 갱신: 2·4축 정책 위반 자동 RED · 5축 structure-signature-check 편입 · --prev 옵션 (회차 간 대조). Gate 4.5 v3.11·v3.12 편입."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# First Draft 완성도 5축 (방안 C · 마스터 승인 2026-07-13)

**규칙**: 시험지 자동 첫 제작 마무리 시 `node scripts/first-draft-report.mjs <청사진> <문제> <답지>` 실행. **ALL GREEN 도달까지 first draft 미완성**. 판정은 저자가 아니라 시스템.

**Why**: 세션 38 3회 시범에서 마스터 지시 "1·2회 완성도"를 저자(claude)가 자기 판정으로 결정 → 실제로 3축 RED 상태를 완성으로 오보고. 완성도 정의 부재가 근본 원인. 마스터 승인 2026-07-13.

**How to apply**:
- 5축 각 검증 도구 순차 실행 · GREEN/YELLOW/RED 집계
- 최종 판정: 5축 GREEN = 완성 / RED 0·YELLOW 1 = 부분 완성 / 그 외 = 미완성
- 미완성 판정 시 원인 축의 원인 정정 · 재판정

## 완성도 5축

### 1축 · 구조 (structure)
- 페이지 수 layout-decider 예측 매칭
- 각 페이지 layout macro registry 매칭 or layout_hint 명시
- 서답형 정점 문항 (composite ≥ 30) 단독 페이지

**GREEN 조건**: registry 매칭 · fallback 없음 · 페이지 수 ±0
**RED 조건**: 페이지 수 ±2 이상 · registry 위반 사유 없음
**도구**: `layout-auto-decider.mjs` v3.0 · `exam-layout-analyzer.mjs`

### 2축 · 정합 (consistency)
- 청사진 스코어 vs 자동 산출
- star_distribution 목표 매칭
- 앵커 비교 리포트

**GREEN 조건**: blueprint-validator 모든 슬롯 GREEN
**RED 조건**: |gap| > 7 슬롯 1건 이상
**도구**: `blueprint-score-validator.mjs` · `anchor-compare.mjs`

### 3축 · 정확성 (correctness)
- mathjs 답 검증
- master-feedback · cm1-curriculum · figure-answer-leakage
- xelatex 빌드 LaTeX Error 0

**GREEN 조건**: 모든 도구 RED 0건 · CM2 오탐 제외
**RED 조건**: 빌드 실패 · 답 불일치 · mathjs 오답
**도구**: `math-verify.mjs` · Gate 4.5 10 도구

### 4축 · 난이도 (difficulty)
- avg composite 청사진 목표 매칭
- star_premium 문항 목표 개수
- 정점 문항 자동 산출 도달

**GREEN 조건**: avg gap ≤ 3 · 정점 문항 자동 산출 도달
**RED 조건**: 정점 문항 자동 산출 부족 2건 이상
**도구**: `blueprint-score-validator.mjs` · `insight-depth-check.mjs`

### 5축 · 세련도 (refinement)
- 시그니처 중복 없음
- 이전 회차 통찰 중복 없음
- 금지 어구 없음
- exam-review 세련도 점수 ≥ 88

**GREEN 조건**: 모든 검수 도구 통과
**RED 조건**: 세련도 < 80 · 금지 어구 RED
**도구**: `signature-check.mjs` · `cross-round-insight-check.mjs` · `permanent-policy-check.mjs`

## 판정 매트릭스

| 5축 조합 | 판정 | exit code |
|---|---|---|
| 5 GREEN | ✅ 완성 (1·2회 수준) | 0 |
| 4 GREEN + 1 YELLOW | 🟡 부분 완성 · 재확인 권장 | 1 |
| RED 1축+ or YELLOW 2축+ | 🔴 미완성 · 원인 정정 후 재판정 | 2 |

## 세션 38 3회 사후 재검증
| 축 | 판정 |
|---|---|
| 1 · 구조 | ✅ GREEN (registry 신설 후 자동 매칭) |
| 2 · 정합 | 🔴 RED (validator 16 RED) |
| 3 · 정확성 | ✅ GREEN |
| 4 · 난이도 | 🟡 YELLOW (정점 문항 자동 산출 부족) |
| 5 · 세련도 | ✅ GREEN |

**최종**: 🔴 first draft 미완성 (RED 1축) → **정확히 감지**

## Gate 4.5 v3.11 편입
- v3.9 10 도구 + blueprint-score-validator (방안 B) + first-draft-report (방안 C) = 12 게이트 (실행 게이트 11 + 최종 판정 1)

## 관련
- `bank/first-draft-완성도-기준.md` (v1.0, 2026-07-13 세션 38 · 마스터 승인)
- `scripts/first-draft-report.mjs` (v1.0)
- [[feedback_golden_layout_registry]] (방안 A)
- [[feedback_blueprint_score_validator]] (방안 B)
- [[feedback_system_first_priority]] (시스템 우선 원칙)
- 원인 분석: `bank/세션38-시범-실패-분석.md`
