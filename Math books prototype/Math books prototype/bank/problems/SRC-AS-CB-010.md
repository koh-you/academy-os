---
id: SRC-AS-CB-010
unit: CM1-CB
type: T-PARITY
M_scores:
  M_s: 2
  M_k: 2
  M_a: 1
  M_t: 2
M_total: 7
insights_used:
  - I-EQV
insight_score: 1
insight_depth:
  - depth: 2
    type: I-EQV
    rationale: 적어도 2 = 전체 - (0개) - (1개) 여사건 환원
X_familiarity: 0
base_star: 2
effective_star: 2
depth_score: 2
target_audience: 중위권
audience_fit:
  - 중위권
audience_primary: 중위권
keywords:
  - 여사건
  - 동전
  - 적어도 N
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 06번
    출판: 아샘
    위치: 본책 p.012 (3.3점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

서로 다른 동전 $6$개를 동시에 던질 때, 앞면이 $2$개 이상 나오는 경우의 수는? [3.3점]

① $53$  ② $55$  ③ $57$  ④ $59$  ⑤ $61$

**답**: ③ $57$

**풀이**: 전체 $2^6=64$. 앞면 0개 $_6\mathrm{C}_0=1$, 1개 $_6\mathrm{C}_1=6$. $64-1-6=57$.
