---
id: SRC-AS-EQ-018
unit: CM1-EQ
type: T-SYSTEM
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used:
  - I-RT
  - I-MI
insight_score: 2
insight_depth:
  - depth: 2
    type: I-RT
    rationale: y=x-1 대입 후 이차방정식 환원
  - depth: 2
    type: I-MI
    rationale: 두 해 (α₁
    β₁)·(α₂: null
    β₂) 중 최댓값 선택: null
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 6
target_audience: 중상위권
audience_fit:
  - 중위권
  - 중상위권
audience_primary: 중상위권
keywords:
  - 연립방정식
  - 일차+이차
  - 대입
  - 최댓값
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 01번
    출판: 아샘
    위치: 본책 p.011 (3.3점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

연립방정식 $\begin{cases} x-y=1 \\ 2x^2-y^2=2 \end{cases}$의 해를 $x=\alpha$, $y=\beta$라 할 때, $\alpha+\beta$의 최댓값은? [3.3점]

① $-3$  ② $-2$  ③ $-1$  ④ $1$  ⑤ $2$

**답**: ④ $1$

**풀이**: $y=x-1$ 대입. $2x^2-(x-1)^2=2$, $x^2+2x-3=0$, $(x+3)(x-1)=0$. $x=-3$ → $y=-4$, $α+β=-7$; $x=1$ → $y=0$, $α+β=1$. 최댓값 $1$.
