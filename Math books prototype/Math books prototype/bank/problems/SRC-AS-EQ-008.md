---
id: SRC-AS-EQ-008
unit: CM1-EQ
type: T-CUBIC
M_scores:
  M_s: 3
  M_k: 3
  M_a: 2
  M_t: 2
M_total: 10
insights_used:
  - I-RT
insight_score: 1
insight_depth:
  - depth: 2
    type: I-RT
    rationale: 부피 조건에서 삼차방정식 풀어 변 길이 결정 후 겉넓이 계산
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
  - 직육면체
  - 부피
  - 겉넓이
  - 삼차방정식
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 11번
    출판: 아샘
    위치: 본책 p.007 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

그림과 같은 직육면체의 가로의 길이, 세로의 길이, 높이가 각각 $2x$, $x$, $x+1$이고 부피가 $160$일 때, 이 직육면체의 겉넓이는? [3.7점]

① $172$  ② $176$  ③ $180$  ④ $184$  ⑤ $188$

**답**: ④ $184$

**풀이**: 부피 $2x \cdot x \cdot (x+1) = 160$, $2x^3 + 2x^2 = 160$, $x^3 + x^2 - 80 = 0$. 조립제법으로 $(x-4)(x^2+5x+20)=0$. $x=4$ (양의 실수). 변 $8, 4, 5$. 겉넓이 $2(8 \cdot 4 + 4 \cdot 5 + 8 \cdot 5) = 2(32 + 20 + 40) = 184$.
