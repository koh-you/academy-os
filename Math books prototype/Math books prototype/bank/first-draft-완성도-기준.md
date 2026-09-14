# First Draft 완성도 기준 v1.0

**신설**: 2026-07-13 · 세션 38 사후 · 방안 C · 마스터 승인 · [[feedback_system_first_priority]] 사례
**목적**: 시험지 자동 첫 제작(first draft)의 완성도를 마스터가 만족하는 "1·2회 수준"으로 판정하는 명확한 기준.

---

## 배경

세션 38 3회 자동 시범에서 마스터 지적 2건:
1. 페이지 1·2 디자인 레이아웃 지키지 않음
2. 시험지 전체 난이도 의심스러움

원인 분석 (`bank/세션38-시범-실패-분석.md`):
- **"1·2회 완성도"의 정확한 정의 부재** → 저자가 자기 판정만 신뢰
- 첫 제작 검증 게이트 없음 → RED가 있어도 발견 못 함

**해결**: 완성도 5축 기준 문서화 + 자동 판정 도구 (`first-draft-report.mjs`).

---

## 완성도 5축 (마스터 승인 2026-07-13)

### 1축 · 구조 (structure)

**정의**: 페이지 배치·페이지 수·layout macro 정합

**GREEN 기준** (모두 만족):
- [ ] 페이지 수가 `layout-auto-decider` 예측과 일치 (±0쪽)
- [ ] 각 페이지 layout macro가 `golden-layout-registry` 매칭 또는 저자 layout_hint 명시
- [ ] 알고리즘 fallback (registry 미매칭) 사용 시 청사진에 명시 사유
- [ ] 서답형 정점 문항 (composite ≥ 30) 단독 페이지 (`\probpairfillpage`) 적용

**YELLOW**: 페이지 수 ±1 · registry 미매칭이나 사유 명시
**RED**: 페이지 수 ±2 이상 · registry 위반 사유 없음

**자동 검증 도구**:
- `layout-auto-decider.mjs` v3.0 (registry 매칭 리포트)
- `exam-layout-analyzer.mjs` (사후 감사)

---

### 2축 · 정합 (consistency)

**정의**: 청사진 명시 스코어 vs 실제 문항 정합

**GREEN 기준**:
- [ ] `blueprint-score-validator` 모든 슬롯 GREEN (|gap| ≤ 3)
- [ ] star_distribution 청사진 목표 vs 실제 산출 매칭
- [ ] star_premium_slots 모든 슬롯 base_star_gate ≥ 4 (schema.md v3.4)
- [ ] 앵커 비교 리포트 존재 (같은 ★·같은 통찰 유형 앵커 2문 이상)

**YELLOW**: |gap| 4~7 슬롯 ≤ 3건 · 앵커 비교 1문만
**RED**: |gap| > 7 슬롯 1건 이상 · 앵커 비교 부재

**자동 검증 도구**:
- `blueprint-score-validator.mjs` v1.0
- `anchor-compare.mjs`

---

### 3축 · 정확성 (correctness)

**정의**: 수학적 정확성·정답 정합·발문 명확성

**GREEN 기준**:
- [ ] 모든 문항 mathjs 답 검증 (`math-verify.mjs`)
- [ ] 청사진 정답 vs 문제.tex 정답 vs 답지.tex 정답 3중 일치
- [ ] `master-feedback-check.mjs` RED 0건
- [ ] `cm1-curriculum-check.mjs` RED 0건 (CM2는 정식 용어 오탐 제외)
- [ ] xelatex 빌드 LaTeX Error 0건
- [ ] `figure-answer-leakage-check.mjs` RED 0건

**YELLOW**: mathjs 미검증 슬롯 ≤ 2건 · 오탐 필터 후 RED 0건
**RED**: 정답 불일치 · mathjs 오답 · 빌드 실패

**자동 검증 도구**:
- `scripts/math-verify.mjs`
- Gate 4.5 v3.10 · 10 도구 전수

---

### 4축 · 난이도 (difficulty)

**정의**: v5.1 8축 자동 산출 · 청사진 목표 매칭

**GREEN 기준**:
- [ ] avg composite 청사진 목표 vs 자동 산출 |gap| ≤ 3
- [ ] star_premium 문항 (composite ≥ 30) 청사진 목표 개수 도달
- [ ] 정점 문항 (composite ≥ 24) 실제 자동 산출도 ≥ 20 (완충 -4)
- [ ] insight_count ≥ 5 (star_premium 조건)

**YELLOW**: avg gap 4~7 · 정점 문항 자동 산출 부족 1건
**RED**: avg gap > 7 · 정점 문항 자동 산출 부족 2건 이상

**자동 검증 도구**:
- `blueprint-score-validator.mjs` v1.0 (자동 산출)
- `insight-depth-check.mjs`
- `insight-novelty-check.mjs`

---

### 5축 · 세련도 (refinement)

**정의**: 발문·풀이·layout 세련도

**GREEN 기준**:
- [ ] `signature-check.mjs` 통과 (동일 시그니처 슬롯 0건)
- [ ] `cross-round-insight-check.mjs` 이전 회차 대비 중복 0건
- [ ] `permanent-policy-check.mjs` RED 0건 (금지 어구)
- [ ] `cplabel-style-check.mjs` RED 0건
- [ ] 세련도 점수 (exam-review) ≥ 88

**YELLOW**: 세련도 점수 80~87 · YELLOW 어구 ≤ 5건
**RED**: 세련도 점수 < 80 · 금지 어구 RED

**자동 검증 도구**:
- `signature-check.mjs`
- `cross-round-insight-check.mjs`
- `permanent-policy-check.mjs`
- `exam-review` 에이전트

---

## 완성도 판정 (5축 조합)

| 판정 | 기준 |
|---|---|
| ✅ **첫 제작 완성** (1·2회 수준) | 5축 모두 GREEN |
| 🟡 **부분 완성** | 4축 GREEN + 1축 YELLOW |
| 🔴 **first draft 미완성** | RED 1축 이상 or YELLOW 2축 이상 |

**미완성 판정 시**: RED·YELLOW 원인 정정 → 재판정 (검수 반복 아님, 완성도 재확인)

---

## 세션 38 3회 사후 재검증 (참조)

| 축 | 판정 | 이유 |
|---|---|---|
| 1 · 구조 | 🔴 RED | 페이지 1·2 registry 위반 (probgridfour 사용, 골든 probpair×2) |
| 2 · 정합 | 🔴 RED | blueprint-validator 16 RED |
| 3 · 정확성 | 🟡 YELLOW | mathjs 검증 후 답 수정 · CM2 오탐 후 GREEN |
| 4 · 난이도 | 🔴 RED | 정점 3문 자동 산출 gap +24·+31·+26 |
| 5 · 세련도 | ✅ GREEN | 검수 도구 모두 통과 |

**최종 판정**: 🔴 **first draft 미완성** (3축 RED · 1축 YELLOW)

**시스템 결함 근거**:
- registry 부재 → 축 1 RED
- validator 부재 → 축 2·4 RED 감지 불가
- 완성도 기준 부재 → 저자가 미완성 사실을 판단 못함

---

## first-draft-report.mjs 도구

**신설**: `scripts/first-draft-report.mjs` (2026-07-13 세션 38 사후)

**작동 방식**:
1. 5축 각 검증 도구 순차 실행
2. GREEN/YELLOW/RED 집계
3. 최종 판정 리포트 출력

**사용법**:
```bash
node scripts/first-draft-report.mjs <청사진.yaml> <문제.tex> <답지.tex>
```

**반환**:
- 0: 완성 (5축 GREEN)
- 1: 부분 완성 (YELLOW 1축)
- 2: 미완성 (RED 있음 or YELLOW 2축+)

**Gate 4.5 v3.11 최종 판정 도구** — 첫 제작 마무리 게이트.

---

## 관련 자원

- 방안 A: `bank/golden-layout-registry.yaml`
- 방안 B: `scripts/blueprint-score-validator.mjs`
- 방안 C: 본 문서 + `scripts/first-draft-report.mjs`
- 원인 분석: `bank/세션38-시범-실패-분석.md`
- 시스템 우선 원칙: [[feedback_system_first_priority]]
- 3회 폐기 사례: `output/공통수학2/2026-2학기-와부고-예상-중간-3회/README.md`
