---
id: SRC-AS-EQ-011
unit: CM1-EQ
type: T-ABS-INEQ
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used: [I-CON]
insight_score: 1
insight_depth:
  - depth: 2
    type: I-CON
    rationale: |x-2|≤1 → 1≤x≤3 / |2y+1|≤7 → -4≤y≤3. xy의 부호별 경계 통제로 최대·최소 도출
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 4.0
target_audience: 중위권
audience_fit: [중위권, 중상위권]
audience_primary: 중위권
keywords: [절댓값 부등식, 곱의 최대·최소, 경계 부호]
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 16번
    출판: 아샘
    위치: 본책 p.008 (4점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

두 부등식 $|x-2| \le 1$, $|2y+1| \le 7$을 만족시키는 실수 $x$, $y$에 대하여 $xy$의 최댓값을 $M$, 최솟값을 $m$이라 할 때, $M+m$의 값은? [4점]

① $-1$  ② $-2$  ③ $-3$  ④ $-4$  ⑤ $-5$

**답**: ③ $-3$

**풀이**: $1 \le x \le 3$, $-4 \le y \le 3$. $xy$ 최대 = $3 \cdot 3 = 9$, 최소 = $3 \cdot (-4) = -12$. $M + m = 9 + (-12) = -3$.
