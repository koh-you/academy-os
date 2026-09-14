---
id: SRC-AS-EQ-023
unit: CM1-EQ
type: T-CUBIC
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used:
  - I-PD
insight_score: 1
insight_depth:
  - depth: 2
    type: I-PD
    rationale: f(x)=(x-1)²(x-c) 형태로 인수분해, f(1)=0+f'(1)=0 결합
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 4
target_audience: 중상위권
audience_fit:
  - 중위권
  - 중상위권
audience_primary: 중상위권
keywords:
  - 삼차방정식
  - 중근
  - 미정계수
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 10번
    출판: 아샘
    위치: 본책 p.013 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

$f(x) = x^3 + ax + b$에 대하여 삼차방정식 $f(x)=0$의 중근이 $1$이다. $ab$의 값은? (단, $a$, $b$는 상수이다.) [3.7점]

① $-10$  ② $-8$  ③ $-6$  ④ $-4$  ⑤ $-2$

**답**: ③ $-6$

**풀이**: $f(x) = (x-1)^2(x-c)$로 놓고 전개: $x^3 - (c+2)x^2 + (2c+1)x - c$. $x^2$ 계수 0이므로 $c=-2$. 따라서 $a=2c+1=-3$, $b=-c=2$. $ab = -6$.
