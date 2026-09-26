---
id: SRC-AS-CB-006
unit: CM1-CB
type: T-COPRIME
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used: [I-EQV]
insight_score: 1
insight_depth:
  - depth: 2
    type: I-EQV
    rationale: 서로소 = 24의 인수 2, 3을 약수로 갖지 않음. 여사건 포함배제 환원
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 4.0
target_audience: 중위권
audience_fit: [중위권, 중상위권]
audience_primary: 중위권
keywords: [서로소, 포함배제, 약수, 합의 법칙]
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 15번
    출판: 아샘
    위치: 본책 p.008 (4점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

$1$부터 $500$까지의 자연수 중에서 $24$와 서로소인 자연수의 개수는? [4점]

① $164$  ② $165$  ③ $166$  ④ $167$  ⑤ $168$

**답**: ④ $167$

**풀이**: $24 = 2^3 \cdot 3$이므로 24와 서로소 = 2와 3 모두의 배수가 아님. 2의 배수 250, 3의 배수 166, 6의 배수 83. 2 또는 3의 배수 $= 250 + 166 - 83 = 333$. 서로소 $= 500 - 333 = 167$.
