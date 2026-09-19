---
id: SRC-AS-CB-005
unit: CM1-CB
type: T-PARITY
M_scores:
  M_s: 2
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 8
insights_used:
  - I-MI
insight_score: 1
insight_depth:
  - depth: 2
    type: I-MI
    rationale: 세 수 합 홀수 → 모두 홀수 또는 하나만 홀수 두 케이스 분류
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 4
target_audience: 중위권
audience_fit:
  - 중위권
  - 중상위권
audience_primary: 중위권
keywords:
  - 홀짝 분류
  - 조합
  - 합의 법칙
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 13번
    출판: 아샘
    위치: 본책 p.008 (4점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

$10$부터 $20$까지의 자연수 중에서 서로 다른 세 수를 뽑을 때, 뽑힌 세 수의 총합이 홀수가 되는 경우의 수는? [4점]

① $81$  ② $83$  ③ $85$  ④ $87$  ⑤ $89$

**답**: ③ $85$

**풀이**: 홀수 5개 (11, 13, 15, 17, 19), 짝수 6개 (10, 12, ..., 20). 세 수 합이 홀수 = (i) 세 수 모두 홀수: $_5\mathrm{C}_3 = 10$. (ii) 홀수 1·짝수 2: $_5\mathrm{C}_1 \times _6\mathrm{C}_2 = 5 \times 15 = 75$. 합 $10 + 75 = 85$.
