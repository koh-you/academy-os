---
id: SRC-AS-EQ-006
unit: CM1-EQ
type: T-CUBIC
M_scores:
  M_s: 3
  M_k: 2
  M_a: 3
  M_t: 2
M_total: 10
insights_used:
  - I-BW
  - I-RT
  - I-EQV
insight_score: 3
insight_depth:
  - depth: 3
    type: I-BW
    rationale: f(a)=a+3 등 세 조건에서 g(x)=f(x)-x-3이 a,b,c를 근으로 가짐을 역방향 추론
  - depth: 2
    type: I-RT
    rationale: g(x)=(x-a)(x-b)(x-c)로 환원
  - depth: 2
    type: I-EQV
    rationale: 근과 계수의 관계로 αβγ를 abc로 표현
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 8.33
target_audience: 상위권
audience_fit:
  - 중상위권
  - 상위권
audience_primary: 중상위권
keywords:
  - 삼차방정식
  - 근과 계수
  - 역방향 추론
  - f(x)-x-3
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 09번
    출판: 아샘
    위치: 본책 p.007 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

삼차다항식 $f(x)$는 최고차항의 계수가 1이고 $f(a)=a+3$, $f(b)=b+3$, $f(c)=c+3$이 성립한다. 삼차방정식 $f(x)=0$의 세 근을 $\alpha$, $\beta$, $\gamma$라 할 때, 이들 세 근의 곱 $\alpha\beta\gamma$를 $a$, $b$, $c$로 나타낸 것은? [3.7점]

① $abc + 3$  ② $abc$  ③ $abc - 3$  ④ $(a-3)(b-3)(c-3)$  ⑤ $(a+3)(b+3)(c+3)$

**답**: ③ $abc - 3$

**풀이**: $f(x) - x - 3$이 $a, b, c$를 근으로 가지고 최고차 계수 1이므로 $f(x) - x - 3 = (x-a)(x-b)(x-c)$. 따라서 $f(x) = (x-a)(x-b)(x-c) + x + 3$. 전개하면 $f(x) = x^3 - (a+b+c)x^2 + (ab+bc+ca+1)x - abc + 3$. $f(x)=0$의 세 근 곱 $\alpha\beta\gamma = abc - 3$ (근과 계수의 관계).
