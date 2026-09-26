---
id: SRC-AS-EQ-022
unit: CM1-EQ
type: T-QUARTIC
M_scores:
  M_s: 3
  M_k: 3
  M_a: 2
  M_t: 3
M_total: 11
insights_used:
  - I-RT
  - I-CON
insight_score: 2
insight_depth:
  - depth: 3
    type: I-RT
    rationale: X=x²+x 치환으로 X²+X-6=0 환원. X=2 → 두 실근, X=-3 → 두 허근
  - depth: 2
    type: I-CON
    rationale: 근과 계수의 관계로 αβ·γδ 동시 계산
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
  - 치환
  - 사차방정식
  - 근과 계수
  - 실근·허근 분리
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 09번
    출판: 아샘
    위치: 본책 p.013 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

사차방정식 $(x^2+x)^2 + (x^2+x) - 6 = 0$의 두 실근을 $\alpha$, $\beta$, 두 허근을 $\gamma$, $\delta$라 할 때, $\gamma\delta - \alpha\beta$의 값은? [3.7점]

① $2$  ② $3$  ③ $4$  ④ $5$  ⑤ $6$

**답**: ④ $5$

**풀이**: $X=x^2+x$. $X^2+X-6=0$, $(X-2)(X+3)=0$. $X=2$: $x^2+x-2=0$, $(x+2)(x-1)=0$, $\alpha\beta=-2$. $X=-3$: $x^2+x+3=0$ (D<0), $\gamma\delta=3$. $\gamma\delta-\alpha\beta=3-(-2)=5$.
