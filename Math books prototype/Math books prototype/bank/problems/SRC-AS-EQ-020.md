---
id: SRC-AS-EQ-020
unit: CM1-EQ
type: T-INEQ
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used:
  - I-MI
insight_score: 1
insight_depth:
  - depth: 2
    type: I-MI
    rationale: 연립부등식을 두 부등식으로 분리하여 각각 풀고 공통 범위
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
  - 연립이차부등식
  - 분리
  - 공통 범위
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 04번
    출판: 아샘
    위치: 본책 p.011 (3.3점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

연립부등식 $x < x(x-5) \le 6(x-3)$의 해는? [3.3점]

① $4 < x \le 7$  ② $5 < x \le 8$  ③ $6 < x \le 9$  ④ $7 < x \le 10$  ⑤ $8 < x \le 11$

**답**: ③ $6 < x \le 9$

**풀이**: 첫째 $x < x^2-5x$ → $x^2-6x > 0$ → $x(x-6)>0$ → $x<0$ 또는 $x>6$. 둘째 $x^2-5x \le 6x-18$ → $x^2-11x+18 \le 0$ → $(x-2)(x-9) \le 0$ → $2 \le x \le 9$. 공통 $6 < x \le 9$.
