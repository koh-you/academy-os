---
id: SRC-AS-EQ-024
unit: CM1-EQ
type: T-SYSTEM
M_scores:
  M_s: 3
  M_k: 2
  M_a: 3
  M_t: 2
M_total: 10
insights_used:
  - I-EQV
  - I-MI
insight_score: 2
insight_depth:
  - depth: 3
    type: I-EQV
    rationale: x²-2xy-3y²=(x-3y)(x+y)=0 인수분해 → 두 직선 분기
  - depth: 2
    type: I-MI
    rationale: 각 분기에 대해 2x²-xy-y²=4 대입, 실수쌍 개수 카운트
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 7.5
target_audience: 상위권
audience_fit:
  - 중상위권
  - 상위권
audience_primary: 중상위권
keywords:
  - 연립이차방정식
  - 인수분해
  - 분기
  - 실수쌍 개수
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 11번
    출판: 아샘
    위치: 본책 p.013 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

연립방정식 $\begin{cases} x^2-2xy-3y^2=0 \\ 2x^2-xy-y^2=4 \end{cases}$를 만족시키는 실수 $x$, $y$의 순서쌍 $(x,y)$의 개수는? [3.7점]

① $0$  ② $1$  ③ $2$  ④ $3$  ⑤ $4$

**답**: ⑤ $4$

**풀이**: 첫째 $(x-3y)(x+y)=0$. (i) $x=3y$: 둘째에 대입 $2(9y^2)-3y^2-y^2=14y^2=4$, $y^2=2/7$, 실수해 2개. (ii) $x=-y$: 둘째에 대입 $2y^2+y^2-y^2=2y^2=4$, $y^2=2$, 실수해 2개. 합 $4$.
