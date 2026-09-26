---
name: feedback-difficulty-system-v4
description: v5.1 8축 난이도 시스템 (N·L·T·H·R·F·E·P). schema.md §2.16. v4.0 base_star 자격 gate와 병렬 검증. star_premium 임계값 30. 2026-07-11 확정.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6af65c76-21f8-4797-9767-ea2c50f8aec1
---

# v5.1 8축 난이도 시스템 (schema.md §2.16)

**2026-07-11 마스터 확정 (2단계 발달)**:
- v5.0 (초안, 세션 27): 5축 N·L·T·H·R 도입. 세션 27 반려 문항 vs 와부고 실기출 gap 10~14점
- v5.1 (확장, 다음 세션): 3축 F·E·P 추가. gap 15~22점으로 확대·명확화

v3.4의 depth_score (max × 2 + avg) 만으로는 라벨 부풀림·지문 flavor·답 노출·엄밀성·mechanism 정확성·조건 필수성·표준 재조합 방지가 검출 안 됨. 8축 확장으로 원천 차단.

## 8개 축

### 축 N (Narrative Depth 0~4) — 지문 학문 밀도
지문 flavor(N=0~1) vs 평가원 국어 비문학·과탐 지문 수준(N=4)

### 축 L (Layer Coupling 0~3) — 소문항 종속성
병렬(L=0) vs 도구 축적 chained (L=3)

### 축 T (Translation Insight 0~3) — mechanism → math 번역
표준 공식 직접 적용(T=0) vs multi-step mechanism decomposition(T=3)

### 축 H (Hint Exposure Penalty 0~3) — 답 노출 감점
- 3: 그림에서 정답값·좌표 유추 가능
- 2: 조건이 정답 유도 직접 힌트
- 1: 라벨이 부분 정답 노출

### 축 R (Rigor 0~5) — 수학적 엄밀성 5 서브축
exist·unique·iff·boundary·case 각 0/1, 합

### 축 F (Faithfulness 0~3) — 지문 mechanism 학문적 정확성 *(v5.1 신규)*
학문 서술 부정확(F=0) vs 학문 완전 정확 + 학생이 진짜 새 개념 학습(F=3)

### 축 E (Efficient Constraints 0~3) — 조건 필수성 *(v5.1 신규)*
조건 일부 flavor(E=0) vs 조건 최소·다중 방향 사용·제거 시 문제 성립 안 됨(E=3)

### 축 P (Predictive Resistance 0~3) — 예측 저항성 *(v5.1 신규)*
발문 즉시 표준 유형 식별(P=0) vs 완전 참신·문제 구조 재구조화 필수(P=3)

## composite 공식 (v5.1)

```
composite = depth_score + N + 2·L + 2·T + R + F + E + 2·P − H_penalty
```

**가중치 2배**: L, T, P (종속성·번역·예측 저항이 star_premium 변별력 핵심).
**최대값**: 45.

## 임계값 (v5.1)

| 등급 | composite |
|---|---|
| **★ 5 최상위 (star_premium)** | ≥ 30 |
| ★ 5 | 24 ~ 29 |
| ★ 4 | 18 ~ 23 |
| ★ 3 | 12 ~ 17 |
| ★ 2 | 6 ~ 11 |
| ★ 1 | < 6 |

## v4.0 base_star과의 통합 (병렬 검증)

```
star_premium = (composite ≥ 30) AND (base_star_gate ≥ 4)
```

- v4.0 base_star: 유형이 원천적으로 ★ 4·5 자격 있는가? (catalog 기반)
- v5.1 composite: 실제 문제 인스턴스가 정밀 통찰 밀도로 그 자격에 부합하는가?
- 두 층 모두 통과해야 premium 인정 → 표면 라벨링 부풀림 차단

## 검증 결과 (세션 27 사례)

| 문항 | v5.0 composite | v5.1 composite | 등급 |
|---|---|---|---|
| 세션 27 #16 GPS (반려) | 14 | **18** | ★ 4 |
| 세션 27 #17 케플러 (반려) | 16 | **18** | ★ 4 |
| 와부고 #15 실기출 (원+격자) | 24 | **33** | ★ 5 최상위 ✓ |
| 와부고 #16 실기출 (사도기) | 28 | **40** | ★ 5 최상위 ✓ |

v3.4 검출 못한 gap이 v5.1에서 15·22점 차로 확대. 마스터 직관과 일치.

## 자동 검증 도구 8종 (구축 대기)

1. `scripts/narrative-depth-check.mjs` — N
2. `scripts/layer-coupling-check.mjs` — L
3. `scripts/translation-insight-check.mjs` — T
4. `scripts/hint-exposure-check.mjs` — H
5. `scripts/rigor-check.mjs` — R
6. `scripts/faithfulness-check.mjs` — F (v5.1 신규)
7. `scripts/constraint-efficiency-check.mjs` — E (v5.1 신규)
8. `scripts/predictive-resistance-check.mjs` — P (v5.1 신규)

`problem-review` v5.1에 통합. 슬롯 검수 시 `composite` 필드 자동 산출.

## YAML 필드 (v5.1)

```yaml
v5_scores:
  N: 3           # Narrative Depth
  L: 3           # Layer Coupling
  T: 3           # Translation Insight
  H: 0           # Hint Exposure Penalty (양수, 감점)
  R:
    exist: 1
    unique: 1
    iff: 1
    boundary: 1
    case: 0
  R_total: 4
  F: 3           # Faithfulness (v5.1 신규)
  E: 3           # Efficient Constraints (v5.1 신규)
  P: 3           # Predictive Resistance (v5.1 신규)
  composite: 40
  composite_star: 5
  star_premium: true
```

## 시행 계획

- **schema.md v5.1** — §2.16 확정 (완료, 2026-07-11)
- **자동 검증 도구 8종** — Task 11 (다음 착수)
- **와부고 2025 실기출 앵커화** — Task 12 (캘리브레이션 기준)
- **1회 17문 v5.1 기준 전면 재출제** — Task 13
- **답지·청사진·검수** — Task 14

## 관련 메모리

- [[project_2026-07-11_session27_handoff]] — v5.0 초안 확립 세션
- [[feedback_wabu_proof_descriptive_allowed]] — 와부고 증명·서술 허용
- [[feedback_figure_authoring_protocol]] — H 축 관련 그림 5-step 프로토콜
- `bank/schema.md` §2.16 — 단일 출처 (v5.1 확정)
